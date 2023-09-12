// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Callebe Gomes",
  tagline: "Learning and Serving",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://callebedrums.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "callebedrums", // Usually your GitHub org/user name. ORGANIZATION_NAME
  projectName: "callebedrums.github.io", // Usually your repo name. PROJECT_NAME
  deploymentBranch: "gh-pages", // branch to deploy static site. DEPLOYMENT_BRANCH,
  trailingSlash: true,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en-US",
      },
      pt: {
        label: "Português",
        htmlLang: "pt-BR",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // sidebar: {
          //   hideable: true,
          //   autoCollapseCategories: true,
          // },
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Callebe Gomes",
        items: [
          {
            type: "docSidebar",
            sidebarId: "professional",
            position: "left",
            label: "Professional",
          },
          {
            type: "docSidebar",
            sidebarId: "biography",
            position: "left",
            label: "Biograpy",
          },
          {
            type: "docSidebar",
            sidebarId: "faith",
            position: "left",
            label: "Faith",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/callebedrums",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "About Me",
            items: [
              {
                label: "Professional",
                to: "/professional",
              },
              {
                label: "Biography",
                to: "/biography",
              },
              {
                label: "Faith",
                to: "/faith",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/845366/callebe",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/callebe.gomes",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/callebedrums",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
