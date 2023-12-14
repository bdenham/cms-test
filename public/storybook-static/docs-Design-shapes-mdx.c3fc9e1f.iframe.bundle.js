"use strict";(self.webpackChunk_adobe_elsie=self.webpackChunk_adobe_elsie||[]).push([[2953],{"./src/docs/Design/shapes.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>shapes,shapeBorderRadiusPrefix:()=>shapeBorderRadiusPrefix,shapeBorderWidthPrefix:()=>shapeBorderWidthPrefix,shapeIconStrokePrefix:()=>shapeIconStrokePrefix,shapeShadowPrefix:()=>shapeShadowPrefix,tokenData:()=>tokenData,tokenNames:()=>tokenNames});__webpack_require__("../../node_modules/preact/compat/dist/compat.module.js");var jsx_runtime=__webpack_require__("../../node_modules/preact/compat/jsx-runtime.mjs"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),designBlocks=__webpack_require__("./src/docs/Design/designBlocks.jsx");const shapes_namespaceObject=JSON.parse('{"shape":{"border":{"radius":{"1":{"value":"3px"},"2":{"value":"8px"},"3":{"value":"24px"}},"width":{"1":{"value":"1px"},"2":{"value":"1.5px"},"3":{"value":"2px"},"4":{"value":"4px"}}},"shadow":{"1":{"value":"0 0 16px 0 rgba(0,0,0,0.16)","comment":"Elevated panels (ie. Page side panel, Mobile bottom bar)"},"2":{"value":"0 2px 16px 0 rgba(0,0,0,0.16)","comment":"Elevated dialogs (ie. Modal)"},"3":{"value":"0 2px 3px 0 rgba(0,0,0,0.16)","comment":"Elevated container (ie. Card)"}},"icon":{"stroke":{"1":{"value":"1px"},"2":{"value":"1.5px"},"3":{"value":"2px"},"4":{"value":"4px"}}}}}');var getTokenData=__webpack_require__("./src/docs/Design/getTokenData.ts"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),Placeholder=__webpack_require__("./src/icons/Placeholder.svg");const tokenData=(0,getTokenData.w)(shapes_namespaceObject),tokenNames=tokenData.map((token=>token.name)),shapeBorderRadiusPrefix="--shape-border-radius",shapeBorderWidthPrefix="--shape-border-width",shapeShadowPrefix="--shape-shadow",shapeIconStrokePrefix="--shape-icon-stroke-";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)(dist.h_,{title:"Design/Shape styles"}),"\n",(0,jsx_runtime.BX)(dist.E$,{children:[(0,jsx_runtime.tZ)(_components.h1,{id:"shapes",children:"Shapes"}),(0,jsx_runtime.tZ)(_components.p,{children:"Grab user attention by using shadows or other visual cues, such as strokes, surface fills, or opacities.\nThese can serve a number of purposes from aesthetics to functionality.\nUse them to provide visual hierarchy or to focus a user's attention on a specific group."}),(0,jsx_runtime.tZ)(_components.h2,{id:"border",children:"Border"}),(0,jsx_runtime.tZ)(_components.h3,{id:"radius",children:"Radius"}),(0,jsx_runtime.tZ)(designBlocks.nf,{tokenData:tokenData.filter((data=>data.name.startsWith(shapeBorderRadiusPrefix)))}),(0,jsx_runtime.tZ)(designBlocks.gO,{children:(0,jsx_runtime.tZ)(designBlocks.Qk,{property:"borderRadius",prefix:shapeBorderRadiusPrefix,tokens:tokenNames})}),(0,jsx_runtime.tZ)(_components.h3,{id:"width",children:"Width"}),(0,jsx_runtime.tZ)(designBlocks.nf,{tokenData:tokenData.filter((data=>data.name.startsWith(shapeBorderWidthPrefix)))}),(0,jsx_runtime.tZ)(designBlocks.gO,{children:(0,jsx_runtime.tZ)(designBlocks.Qk,{property:"borderWidth",prefix:shapeBorderWidthPrefix,tokens:tokenNames})}),(0,jsx_runtime.tZ)(_components.h2,{id:"drop-shadows",children:"Drop Shadows"}),(0,jsx_runtime.tZ)(designBlocks.nf,{tokenData:tokenData.filter((data=>data.name.startsWith(shapeShadowPrefix)))}),(0,jsx_runtime.tZ)(designBlocks.gO,{style:{background:"var(--color-neutral-50)"},children:(0,jsx_runtime.tZ)(designBlocks.Qk,{property:"boxShadow",prefix:"--shape-shadow",tokens:tokenNames,swatchStyles:{border:"none",background:"var(--color-neutral-50)"}})}),(0,jsx_runtime.tZ)(_components.h2,{id:"icon-stroke-widths",children:"Icon Stroke Widths"}),(0,jsx_runtime.tZ)(designBlocks.nf,{tokenData:tokenData.filter((data=>data.name.startsWith(shapeIconStrokePrefix)))}),(0,jsx_runtime.tZ)(designBlocks.gO,{children:(0,jsx_runtime.tZ)(designBlocks.Qk,{property:"strokeWidth",prefix:shapeIconStrokePrefix,tokens:tokenNames,children:(0,jsx_runtime.tZ)(Icon.J,{source:Placeholder.Z,size:32})})})]})]})}const shapes=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.tZ)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.tZ)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/icons/Placeholder.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _circle,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/preact/compat/dist/compat.module.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgPlaceholder(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,fill:"none","data-name":"placeholder_icon",xmlns:"http://www.w3.org/2000/svg"},props),_circle||(_circle=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{vectorEffect:"non-scaling-stroke",cx:12,cy:12,r:8.25,stroke:"currentColor"})))}}}]);