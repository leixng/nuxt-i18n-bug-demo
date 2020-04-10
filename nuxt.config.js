export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-i18n",
      {
        strategy: "prefix_and_default",
        locales: [
          { code: "fr", iso: "fr-FR" },
          { code: "de", iso: "de-DE" },
          { code: "es", iso: "es-ES" },
          { code: "ar", iso: "ar" },
          { code: "ru", iso: "ru-RU" },
          { code: "ja", iso: "ja-JP" },
          { code: "zh", iso: "zh-Hant" },
          { code: "en", iso: "en", isCatchallLocale: true }
        ],
        defaultLocale: "en",
        detectBrowserLanguage: {
          cookieKey: "i18n_redirected",
          useCookie: true,
          alwaysRedirect: true
        },
        seo: false,
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en: {
              greetings: "Hello !"
            },
            fr: {
              greetings: "Bonjour !"
            },
            de: {
              greetings: "Hallo !"
            },
            zh: {
              greetings: "你好!"
            },
            ru: {
              greetings: "привет"
            },
            ar: {
              greetings: "صباح الخير"
            },
            ja: {
              greetings: "こんにちは !"
            },
            es: {
              greetings: "¡Hola!"
            }
          }
        }
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
