export const useStaticPages = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getStaticPagesWithSlug = async (slug) => {
    const res = await $api(`/static-pages/${slug}`);

    return res;
  };

  return {
    getStaticPagesWithSlug,
  };
};
