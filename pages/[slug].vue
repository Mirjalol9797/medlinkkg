<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const getStaticPagesApi = useStaticPages();

const { data: dataStaticPage } = useAsyncData("StaticPage", () =>
  getStaticPagesApi.getStaticPagesWithSlug(route.params.slug)
);
</script>
<template>
  <div class="py-14 static-page">
    <div class="site-container">
      <div class="flex gap-2 mb-6 480:text-xs 480:mb-4">
        <nuxt-link to="/" class="font-medium text-[#3f78c6]" title="Medlink.kg">
          Medlink.kg
        </nuxt-link>
        <img
          src="@/public/icons/general/arrow-left-black.svg"
          alt="arrow"
          class="w-4"
        />
        <span> {{ dataStaticPage?.data?.name }}</span>
      </div>

      <h1 class="h1-title">
        {{ dataStaticPage?.data?.name }}
      </h1>

      <div
        v-html="dataStaticPage?.data?.content"
        class="bg-[#f3f3f3] p-5 rounded-md"
      ></div>
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
<style lang="scss">
.static-page {
  h2 {
    margin: 16px 0px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
  }
  p {
    margin: 14px 0;
    line-height: 24px;
  }
  ul {
    margin: 0 0 0 40px;
    list-style: disc;
    li {
      margin-bottom: 12px;
    }
  }
  a {
    color: #008bd8;
  }
}
</style>
