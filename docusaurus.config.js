// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://github.microstrategy.com/",
  baseUrl: "/pages/Tech/embedding-sdk-docs-v2/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        gtag: {
          trackingID: "G-R0GZ7BXB1S",
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.microstrategy.com/Tech/embedding-sdk-docs-v2/tree/main",
          includeCurrentVersion: true,
          // lastVersion: "2021",
          // versions: {
          //   2021: {
          //     label: "Version 2021",
          //     path: "",
          //   },
          // },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "MicroStrategy Developer",
          src: "img/dev-docs-logo.png",
          href: "https://developer.microstrategy.com/",
        },
        items: [
          {
            href: "https://playground.microstrategy.com/",
            label: "Playground",
            position: "left",
          },
          {
            type: "dropdown",
            label: "Version 2021",
            position: "right",
            items: [
              {
                label: "Version 2020",
                href: "https://www2.microstrategy.com/producthelp/Current/EmbeddingSDK/Content/topics/Intro_to_the_Embedding_SDK.htm",
              },
            ],
          },
          {
            href: "https://www.microstrategy.com/en/support?now=expert",
            label: "Talk to an Expert",
            position: "right",
          },
          {
            href: "https://github.microstrategy.com/Tech/embedding-sdk-docs-v2",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()} MICROSTRATEGY INCORPORATED. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: "VNIM4BJNXH",

      //   // Public API key: it is safe to commit it
      //   apiKey: "63b4dee06cd578c7d072be3818dbf145",

      //   indexName: "embedding-sdk-docs",

      //   // Optional: see doc section below
      //   contextualSearch: true,

      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: "external\\.com|domain\\.com",

      //   // Optional: Algolia search parameters
      //   searchParameters: {},

      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: "search",

      //   //... other Algolia params
      // },
    }),
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
};

module.exports = config;
