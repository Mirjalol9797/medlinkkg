<script setup></script>

<template>
  <!-- глобал seo -->
  <Head>
    <Meta name="theme-color" content="#315efb" />
    <Meta
      name="robots"
      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    />
    <Meta name="og:type" property="og:type" content="website" />
    <Meta name="og:site_name" property="og:site_name" content="medlink" />
    <Meta property="twitter:card" content="summary_large_image" />
    <Meta name="copyright" content="copyright © 2024, medlink.kg" />

    <Link rel="icon" type="image/x-icon" href="favicon.ico?v=1" />
    <Link rel="preload" href="https://fonts.gstatic.com" />
  </Head>

  <NuxtLayout></NuxtLayout>
</template>
