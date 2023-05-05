/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    "index",
    "whats-new-in-the-embedding-sdk",
    "config",
    "playground",
    {
      type: "category",
      link: {
        type: "doc",
        id: "support-for-different-authentication-environments/support-for-different-authentication-environments",
      },
      label: "Support for different authentication environments",
      items: [
        "support-for-different-authentication-environments/guest-authentication-mode-only",
        "support-for-different-authentication-environments/multiple-modes",
        "support-for-different-authentication-environments/standard-authentication",
        "support-for-different-authentication-environments/authentication-saml",
        "support-for-different-authentication-environments/seamless-login",
      ],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "add-functionality/add-functionality",
      },
      label: "Add functionality to an embedded dossier",
      items: [
        "add-functionality/methods-and-properties",
        "add-functionality/add-nav",
        "add-functionality/add-event",
        "add-functionality/filters",
        "add-functionality/error-handling",
        "add-functionality/panel-stacks",
        "add-functionality/embed-vis",
        "add-functionality/attribute-element-selection",
        "add-functionality/authoring-library",
        "add-functionality/use-custom-dossier-link",
      ],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "embed-library-main-page/embed-library-main-page",
      },
      label: "Embed MicroStrategy Library home page",
      items: [
        "embed-library-main-page/embed-library-properties",
        "embed-library-main-page/library-page-apis",
        "embed-library-main-page/embed-custom-ui-on-all-pages",
      ],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "embed-report-page/embed-report-page",
      },
      label: "Embed MicroStrategy report page",
      items: ["embed-report-page/embed-report-properties"],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "native-embedding-architecture/native-embedding-architecture",
      },
      label: "The Native Embedding SDK",
      items: [
        "native-embedding-architecture/embed-multiple-viz",
        "native-embedding-architecture/destroy-multiple-viz",
        "native-embedding-architecture/embedding-components",
        "native-embedding-architecture/mstr-environment",
        "native-embedding-architecture/mstr-dossier",
        "native-embedding-architecture/vis-manipulation",
        "native-embedding-architecture/dossier-info-api",
        "native-embedding-architecture/apply-filter",
        "native-embedding-architecture/event-handling",
      ],
    },
    "samples",
  ],
};

module.exports = sidebars;