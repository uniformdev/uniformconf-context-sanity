import type { GetServerSideProps } from "next";
import { getPageBySlug } from "../lib/api";
import Page, { PageProps } from "../components/Page";

export default Page;

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const slug = context?.params?.slug;
  const slugString = Array.isArray(slug) ? slug.join("/") : slug;
  const preview = Boolean(context.preview);
  const page = await getPageBySlug(
    preview,
    slugString ? `/${slugString}` : "/"
  );

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview,
      page,
    },
  };
};
