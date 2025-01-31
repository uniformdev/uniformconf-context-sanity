import type { GetStaticPaths, GetStaticPropsContext } from 'next';
import { getEntriesByContentType, getPageBySlug } from '../lib/api';
import { IPage } from '../lib/sanity-types';
import Page from '../components/Page';

export default Page;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context?.params?.slug;
  const slugString = Array.isArray(slug) ? slug.join('/') : slug;
  const preview = Boolean(context.preview);
  const page = await getPageBySlug(preview, slugString ? `/${slugString}` : '/');

  return {
    props: {
      preview,
      page,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages: IPage[] = (await getEntriesByContentType(false, 'page')) ?? [];

  return {
    paths: pages.map((c) => c.slug.current),
    fallback: true,
  };
};
