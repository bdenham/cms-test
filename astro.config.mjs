import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import starlightLinksValidator from 'starlight-links-validator';
import preact from "@astrojs/preact";
const astroExpressiveCodeOptions = {
  themes: ['git-dark', 'git-light']
};


// https://astro.build/config
export default defineConfig({
  site: 'https://thinkdocs.dev',
  integrations: [tailwind(), starlight({
    title: 'Think Inside the Docs',
    plugins: [starlightLinksValidator({
      errorOnFallbackPages: false,
      errorOnInconsistentLocale: true
    })],
    expressiveCode: {
      styleOverrides: {
        borderRadius: '0.5rem',
        codePaddingInline: '0',
        codePaddingBlock: '1rem',
        codeLineHeight: '1.3rem'
      },
      themes: ['github-dark', 'github-light']
    },
    components: {
      // Override the default `SocialIcons` component.
      Header: './src/components/overrides/Header.astro',
      // Card: './src/components/overrides/Card.astro',
      PageTitle: './src/components/overrides/PageTitle.astro',
      SiteTitle: './src/components/overrides/SiteTitle.astro',
      PageFrame: './src/components/overrides/PageFrame.astro',
      TwoColumnContent: './src/components/overrides/TwoColumnContent.astro'
    },
    customCss: ['./src/styles/custom.css', './src/styles/tailwind.css'],
    logo: {
      src: './src/assets/logo.svg',
      replacesTitle: false
    },
    social: {
      github: 'https://github.com/commerce-docs/thinkdocs.dev'
    },
    sidebar: [{
      label: 'Think Inside the Docs',
      items: [{
        label: 'About the Project',
        link: '/about/'
      }, {
        label: 'Storybook Integration',
        link: '/storybook-integration/'
      }, {
        label: 'Expressive Code',
        link: '/expressive-code/'
      }, {
        label: 'Interactive Examples',
        link: '/interactive-examples/'
      }, {
        label: 'Interactive APIs',
        link: '/interactive-apis/'
      }, {
        label: 'UI Content Entry',
        link: '/ui-content-entry/'
      }, {
        label: 'Lighthouse Scores',
        link: '/lighthouse-scores/'
      }]
    }, {
      label: 'Components',
      items: [{
        label: 'Overview',
        link: '/components/overview/'
      }, {
        label: 'Action Button',
        link: '/components/actionbutton/'
      }, {
        label: 'Action Button Group',
        link: '/components/actionbuttongroup/'
      }, {
        label: 'Button',
        link: '/components/button/'
      }, {
        label: 'Card',
        link: '/components/card/'
      }, {
        label: 'Checkbox',
        link: '/components/checkbox/'
      }, {
        label: 'Color Swatch',
        link: '/components/colorswatch/'
      }, {
        label: 'Divider',
        link: '/components/divider/'
      }, {
        label: 'Field',
        link: '/components/field/'
      }, {
        label: 'Icon',
        link: '/components/icon/'
      }, {
        label: 'Image',
        link: '/components/image/'
      }, {
        label: 'Image Swatch',
        link: '/components/imageswatch/'
      }, {
        label: 'Incrementer',
        link: '/components/incrementer/'
      }, {
        label: 'Inline Alert',
        link: '/components/inlinealert/'
      }, {
        label: 'Input',
        link: '/components/input/'
      }, {
        label: 'Picker',
        link: '/components/picker/'
      }, {
        label: 'Price',
        link: '/components/price/'
      }, {
        label: 'Progress Spinner',
        link: '/components/progressspinner/'
      }, {
        label: 'Radio Button',
        link: '/components/radiobutton/'
      }, {
        label: 'Skeleton',
        link: '/components/skeleton/'
      }, {
        label: 'Text Swatch',
        link: '/components/textswatch/'
      }]
    }]
  }), preact()]
});