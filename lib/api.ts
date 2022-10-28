import sanityClient from '@sanity/client';
import type { Entry, IPage } from './sanity-types';

if (!process.env.SANITY_PROJECT_ID) {
  throw new Error('SANITY_PROJECT_ID env not set.');
}

if (!process.env.SANITY_AUTH_TOKEN) {
  throw new Error('SANITY_AUTH_TOKEN env not set.');
}

if (!process.env.SANITY_DATASET) {
  throw new Error('SANITY_DATASET env not set.');
}

if (!process.env.SANITY_API_VERSION) {
  throw new Error('SANITY_API_VERSION env not set.');
}

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
});

const previewClient = client;

const getClient = (preview: boolean) => (preview ? previewClient : client);

export const getPageBySlug = async (preview: boolean, slug: string): Promise<IPage | undefined> => {
  const query = `*[_type == 'page' && slug.current == $slug]{
    ...,
    components[]->{
      ...,
      heroVariations[]->{...,'imageUrl':image.asset->url},
      talksListVariations[]->{..., talks[]->},
      'imageUrl':image.asset->url
    }
  }`;
  const params = { slug };
  try {
    const result = await getClient(preview).fetch(query, params);

    return result[0];
  } catch (e: unknown) {
    // eslint-disable-next-line no-console
    console.error('Error while retrieving page: ', e);
  }

  return undefined;
};

export const getEntriesByContentType = async (preview: boolean, type: string): Promise<Entry<any>[]> => {
  const query = '*[_type == $type]';
  const params = { type };
  const results = await getClient(preview).fetch(query, params);

  return results;
};
