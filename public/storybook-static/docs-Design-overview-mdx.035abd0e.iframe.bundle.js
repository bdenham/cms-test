"use strict";(self.webpackChunk_adobe_elsie=self.webpackChunk_adobe_elsie||[]).push([[482],{"./src/docs/Design/overview.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>overview});__webpack_require__("../../node_modules/preact/compat/dist/compat.module.js");var jsx_runtime=__webpack_require__("../../node_modules/preact/compat/jsx-runtime.mjs"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),Flex=__webpack_require__("./config/storybook/components/Flex/Flex.jsx"),Panel=__webpack_require__("./config/storybook/components/Panel/Panel.tsx");const Colors_namespaceObject=__webpack_require__.p+"static/media/Colors.2aa03f47.png",Spacing_namespaceObject=__webpack_require__.p+"static/media/Spacing.e5a08e7a.png",Typography_namespaceObject=__webpack_require__.p+"static/media/Typography.98ca2eca.png",ShapeStyles_namespaceObject=__webpack_require__.p+"static/media/ShapeStyles.7b6e6650.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",a:"a",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)(dist.h_,{title:"Design/Overview"}),"\n",(0,jsx_runtime.BX)(dist.E$,{children:[(0,jsx_runtime.tZ)(_components.h1,{id:"base-design-tokens",children:"Base Design Tokens"}),(0,jsx_runtime.tZ)(_components.p,{children:"With Base, you can use system and reference tokens to ensure color, typography, spacing, and shape values are consistent across your site."}),(0,jsx_runtime.tZ)(_components.h2,{id:"what-are-design-tokens",children:"What are design tokens?"}),(0,jsx_runtime.tZ)(_components.p,{children:"Design tokens are design decisions that ensure a unified and cohesive product experience. The tokens represent a consistent use of design data that provides specific values for spacing, color, typography, and shapes—without hard-coding those values."}),(0,jsx_runtime.tZ)(_components.p,{children:"Our Base design tokens are directly integrated into our component libraries. They cover the various options for platforms, component states, and more."}),(0,jsx_runtime.BX)(Flex.k,{itemsPerAxis:2,children:[(0,jsx_runtime.BX)(Panel.s,{header:!0,footer:!0,children:[(0,jsx_runtime.tZ)("img",{src:Colors_namespaceObject,alt:"Colors"}),(0,jsx_runtime.tZ)(_components.h3,{id:"colors",children:"Colors"}),(0,jsx_runtime.tZ)(_components.p,{children:"Create meaningful experiences while also expressing hierarchy, state, and brand identity."}),(0,jsx_runtime.tZ)(_components.p,{children:(0,jsx_runtime.tZ)(_components.a,{href:"/docs/design-colors--overview",children:"Read more"})})]}),(0,jsx_runtime.BX)(Panel.s,{header:!0,footer:!0,children:[(0,jsx_runtime.tZ)("img",{src:Typography_namespaceObject,alt:"Typography"}),(0,jsx_runtime.tZ)(_components.h3,{id:"typography",children:"Typography"}),(0,jsx_runtime.tZ)(_components.p,{children:"Set your typography scale to present your content as clearly and efficiently as possible."}),(0,jsx_runtime.tZ)(_components.p,{children:(0,jsx_runtime.tZ)(_components.a,{href:"/docs/design-typography--overview",children:"Read more"})})]}),(0,jsx_runtime.BX)(Panel.s,{header:!0,footer:!0,children:[(0,jsx_runtime.tZ)("img",{src:Spacing_namespaceObject,alt:"Spacing"}),(0,jsx_runtime.tZ)(_components.h3,{id:"spacing",children:"Spacing"}),(0,jsx_runtime.tZ)(_components.p,{children:"Create harmonious arrangements with consistent visual balance and predictable rhythm."}),(0,jsx_runtime.tZ)(_components.p,{children:(0,jsx_runtime.tZ)(_components.a,{href:"/docs/design-spacing--overview",children:"Read more"})})]}),(0,jsx_runtime.BX)(Panel.s,{header:!0,footer:!0,children:[(0,jsx_runtime.tZ)("img",{src:ShapeStyles_namespaceObject,alt:"Shape styles"}),(0,jsx_runtime.tZ)(_components.h3,{id:"shape-styles",children:"Shape styles"}),(0,jsx_runtime.tZ)(_components.p,{children:"Grab user attention by using shadows or other visual cues, such as strokes, border-radius, and size."}),(0,jsx_runtime.tZ)(_components.p,{children:(0,jsx_runtime.tZ)(_components.a,{href:"/docs/design-shape-styles--overview",children:"Read more"})})]})]}),(0,jsx_runtime.tZ)(_components.h2,{id:"extending-the-baseline-design-tokens",children:"Extending the baseline design tokens"}),(0,jsx_runtime.tZ)(_components.p,{children:"Base includes a set of baseline design tokens and default values for you to\ncustomize, collaborate on, and use in your own designs and product\nimplementation."}),(0,jsx_runtime.tZ)(_components.p,{children:"It's important to keep in mind that not every component is going to be\ncaptured in the foundational and baseline design tokens. If they're limited\nfor what you're trying to design or build, just add in the tokens you may\nneed within each category."}),(0,jsx_runtime.tZ)(_components.h2,{id:"how-to-use-design-tokens",children:"How to use design tokens"}),(0,jsx_runtime.tZ)(_components.p,{children:"To apply design tokens on your project, make use of the UIProvider, which grants components access to the design tokens as CSS variables. Simply specify the desired design token using the var() CSS function to apply its corresponding value."}),(0,jsx_runtime.tZ)(_components.pre,{children:(0,jsx_runtime.tZ)(_components.code,{className:"language-css",children:".myComponent {\n  background-color: var(--color-brand-500);\n}\n"})})]})]})}const overview=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.tZ)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.tZ)(_createMdxContent,props)})):_createMdxContent(props)}}}]);