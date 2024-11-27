<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const getStaticPagesApi = useStaticPages();

const { data: dataStaticPage } = useAsyncData("StaticPage", () =>
  getStaticPagesApi.getStaticPagesWithSlug(route.params.slug)
);

console.log(route);
</script>
<template>
  <div class="py-14">
    <div class="site-container">
      <div class="mb-6 480:text-xs 480:mb-4">
        <nuxt-link to="/" class="font-medium text-[#3f78c6]" title="Medlink.kg">
          Medlink.kg
        </nuxt-link>
        <span> - {{ dataStaticPage?.data?.name }}</span>
      </div>
      <h1 class="mb-8 text-2xl 768:text-lg 768:mb-6">
        {{ dataStaticPage?.data?.name }}
      </h1>
      <div v-html="dataStaticPage?.data?.content"></div>
    </div>
  </div>

  <!-- seo -->
  <Head>
    <Title>{{ dataStaticPage?.data?.meta_name }}</Title>
    <Meta name="title" :content="dataStaticPage?.data?.meta_name" />
    <Meta
      name="description"
      :content="dataStaticPage?.data?.meta_description"
    />
    <Meta
      name="og:title"
      property="og:title"
      :content="dataStaticPage?.data?.meta_name"
    />
    <Meta
      name="og:description"
      property="og:description"
      :content="dataStaticPage?.data?.meta_description"
    />
    <Meta property="og:image" content="https://medlink.kg/site-logo.png" />
    <Meta
      property="og:url"
      :content="`https://medlink.kg/${dataStaticPage?.data?.slug}`"
    />
    <Meta property="twitter:title" :content="dataStaticPage?.data?.meta_name" />
    <Meta
      property="twitter:description"
      :content="dataStaticPage?.data?.meta_description"
    />
    <Meta property="twitter:image" content="https://medlink.kg/site-logo.png" />
    <Meta
      property="twitter:url"
      :content="`https://medlink.kg/${dataStaticPage?.data?.slug}`"
    />
    <Link rel="canonical" href="https://medlink.kg" />
  </Head>
</template>
<style lang="scss"></style>
