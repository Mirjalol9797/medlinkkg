// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-swiper",
    "@nuxtjs/i18n",
    "@vee-validate/nuxt",
  ],

  css: ["~/assets/scss/main.scss"],

  pinia: {
    storesDirs: ["./stores/**"],
  },

  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "ru",
        name: "РУ",
        file: "ru.json",
        image: "ru.png",
      },
    ],
    defaultLocale: "ru",
    // vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
    },
  },

  // seo

  app: {
    head: {
      script: [
        // яндекс рекламан начало
        {
          children: "window.yaContextCb = window.yaContextCb || [];",
        },
        {
          src: "https://yandex.ru/ads/system/context.js",
          async: true,
        },
        // яндекс рекламан конец
        // ..........................................................................................
        // яндекс метрика начало
        {
          type: "text/javascript",
          children: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
            })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(99020964, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
          `,
          body: true, // Размещение скрипта в <body>
        },
      ],
      noscript: [
        {
          children:
            '<div><img src="https://mc.yandex.ru/watch/99020964" style="position:absolute; left:-9999px;" alt="" /></div>',
          body: true, // Размещение в <body> для <noscript>
        },
      ],
    },
  },
});
