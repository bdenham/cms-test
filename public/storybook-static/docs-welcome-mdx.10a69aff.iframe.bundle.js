"use strict";(self.webpackChunk_adobe_elsie=self.webpackChunk_adobe_elsie||[]).push([[4770],{"./config/storybook/components/Screenshot/Screenshot.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Screenshot});var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Screenshot_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./config/storybook/components/Screenshot/Screenshot.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Screenshot_module.Z,options);const Screenshot_Screenshot_module=Screenshot_module.Z&&Screenshot_module.Z.locals?Screenshot_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/preact/compat/jsx-runtime.mjs");function cov_18ga112ynp(){var path="/Users/tars/_adobe/StorefrontSDK_D2/packages/elsie/config/storybook/components/Screenshot/Screenshot.jsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/Users/tars/_adobe/StorefrontSDK_D2/packages/elsie/config/storybook/components/Screenshot/Screenshot.jsx",statementMap:{0:{start:{line:4,column:12},end:{line:4,column:20}},1:{start:{line:5,column:10},end:{line:5,column:18}},2:{start:{line:6,column:14},end:{line:9,column:3}},3:{start:{line:10,column:2},end:{line:17,column:5}}},fnMap:{0:{name:"Screenshot",decl:{start:{line:3,column:16},end:{line:3,column:26}},loc:{start:{line:3,column:33},end:{line:18,column:1}},line:3}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{},inputSourceMap:{version:3,file:void 0,names:["styles","jsx","_jsx","Screenshot","_ref","src","alt","image","className","screenshotContainer","children"],sourceRoot:void 0,sources:["/Users/tars/_adobe/StorefrontSDK_D2/packages/elsie/config/storybook/components/Screenshot/Screenshot.jsx"],sourcesContent:["import styles from './Screenshot.module.css';\n\nexport function Screenshot({ src, alt }) {\n  const image = {\n    src,\n    alt,\n  };\n\n  return (\n    <div className={styles.screenshotContainer}>\n      <img src={image.src} alt={image.alt} className={styles.image} />\n    </div>\n  );\n}\n"],mappings:"AAAA,OAAOA,MAAM,MAAM,yBAAyB;AAAC,SAAAC,GAAA,IAAAC,IAAA;AAE7C,OAAO,SAASC,UAAUA,CAAAC,IAAA,EAAe;EAAA,IAAZC,GAAG,GAAAD,IAAA,CAAHC,GAAG;IAAEC,GAAG,GAAAF,IAAA,CAAHE,GAAG;EACnC,IAAMC,KAAK,GAAG;IACZF,GAAG,EAAHA,GAAG;IACHC,GAAG,EAAHA;EACF,CAAC;EAED,oBACEJ,IAAA;IAAKM,SAAS,EAAER,MAAM,CAACS,mBAAoB;IAAAC,QAAA,eACzCR,IAAA;MAAKG,GAAG,EAAEE,KAAK,CAACF,GAAI;MAACC,GAAG,EAAEC,KAAK,CAACD,GAAI;MAACE,SAAS,EAAER,MAAM,CAACO;IAAM,CAAE;EAAC,CAC7D,CAAC;AAEV"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0888b306a403845a5b62346815eeacdf7b2ecdb2"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"0888b306a403845a5b62346815eeacdf7b2ecdb2"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_18ga112ynp=function(){return actualCoverage},actualCoverage}function Screenshot(_ref){cov_18ga112ynp().f[0]++;var src=(cov_18ga112ynp().s[0]++,_ref.src),alt=(cov_18ga112ynp().s[1]++,_ref.alt),image=(cov_18ga112ynp().s[2]++,{src,alt});return cov_18ga112ynp().s[3]++,(0,jsx_runtime.tZ)("div",{className:Screenshot_Screenshot_module.screenshotContainer,children:(0,jsx_runtime.tZ)("img",{src:image.src,alt:image.alt,className:Screenshot_Screenshot_module.image})})}cov_18ga112ynp()},"./src/docs/welcome.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>welcome});__webpack_require__("../../node_modules/preact/compat/dist/compat.module.js");var jsx_runtime=__webpack_require__("../../node_modules/preact/compat/jsx-runtime.mjs"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),Flex=__webpack_require__("./config/storybook/components/Flex/Flex.jsx"),Panel=__webpack_require__("./config/storybook/components/Panel/Panel.tsx"),Screenshot=__webpack_require__("./config/storybook/components/Screenshot/Screenshot.jsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Summary_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./config/storybook/components/Summary/Summary.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Summary_module.Z,options);const Summary_Summary_module=Summary_module.Z&&Summary_module.Z.locals?Summary_module.Z.locals:void 0;function cov_22lg3yq4z3(){var path="/Users/tars/_adobe/StorefrontSDK_D2/packages/elsie/config/storybook/components/Summary/Summary.jsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/Users/tars/_adobe/StorefrontSDK_D2/packages/elsie/config/storybook/components/Summary/Summary.jsx",statementMap:{0:{start:{line:5,column:17},end:{line:5,column:30}},1:{start:{line:6,column:2},end:{line:11,column:5}}},fnMap:{0:{name:"Summary",decl:{start:{line:4,column:16},end:{line:4,column:23}},loc:{start:{line:4,column:30},end:{line:12,column:1}},line:4}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},inputSourceMap:{version:3,file:void 0,names:["Unstyled","styles","jsx","_jsx","Summary","_ref","children","className","concat","summary"],sourceRoot:void 0,sources:["/Users/tars/_adobe/StorefrontSDK_D2/packages/elsie/config/storybook/components/Summary/Summary.jsx"],sourcesContent:["import { Unstyled } from '@storybook/blocks';\nimport styles from './Summary.module.css';\n\nexport function Summary({ children }) {\n  return (\n    <Unstyled>\n      <div className={`${styles.summary}`}>{children}</div>\n    </Unstyled>\n  );\n}\n"],mappings:"AAAA,SAASA,QAAQ,QAAQ,mBAAmB;AAC5C,OAAOC,MAAM,MAAM,sBAAsB;AAAC,SAAAC,GAAA,IAAAC,IAAA;AAE1C,OAAO,SAASC,OAAOA,CAAAC,IAAA,EAAe;EAAA,IAAZC,QAAQ,GAAAD,IAAA,CAARC,QAAQ;EAChC,oBACEH,IAAA,CAACH,QAAQ;IAAAM,QAAA,eACPH,IAAA;MAAKI,SAAS,KAAAC,MAAA,CAAKP,MAAM,CAACQ,OAAO,CAAG;MAAAH,QAAA,EAAEA;IAAQ,CAAM;EAAC,CAC7C,CAAC;AAEf"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a034e897d641e877a71d50d93281a161c06214cf"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"a034e897d641e877a71d50d93281a161c06214cf"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_22lg3yq4z3=function(){return actualCoverage},actualCoverage}function Summary(_ref){cov_22lg3yq4z3().f[0]++;var children=(cov_22lg3yq4z3().s[0]++,_ref.children);return cov_22lg3yq4z3().s[1]++,(0,jsx_runtime.tZ)(dist.E$,{children:(0,jsx_runtime.tZ)("div",{className:"".concat(Summary_Summary_module.summary),children})})}cov_22lg3yq4z3();const ElsieBanner_namespaceObject=__webpack_require__.p+"static/media/ElsieBanner.c633f697.png";function _createMdxContent(props){const _components=Object.assign({p:"p",strong:"strong",h2:"h2",a:"a",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)(dist.h_,{title:"Welcome"}),"\n",(0,jsx_runtime.BX)(dist.E$,{children:[(0,jsx_runtime.tZ)(Screenshot.w,{src:ElsieBanner_namespaceObject,alt:"Elsie SDK Banner"}),(0,jsx_runtime.tZ)(Summary,{children:(0,jsx_runtime.BX)(_components.p,{children:["The ",(0,jsx_runtime.tZ)(_components.strong,{children:"Elsie SDK"})," is deployed as a set of ",(0,jsx_runtime.tZ)(_components.strong,{children:"npm packages"})," assembled into a completely pre-configured ",(0,jsx_runtime.tZ)(_components.strong,{children:"starter template"})," to provide everything you need to build ",(0,jsx_runtime.tZ)(_components.strong,{children:"composable"})," Commerce frontends."]})}),(0,jsx_runtime.BX)(_components.p,{children:[(0,jsx_runtime.tZ)(_components.strong,{children:"For the frontend"}),", Elsie includes our Base design system, which provides the components and design tokens that make merchant rebranding quick and easy."]}),(0,jsx_runtime.BX)(_components.p,{children:[(0,jsx_runtime.tZ)(_components.strong,{children:"For everything else"}),", Elsie provides a complete framework for mounting, rendering, eventing, testing, and hydrating those components with data from the Commerce backend."]}),(0,jsx_runtime.tZ)(_components.h2,{id:"get-started",children:"Get started"}),(0,jsx_runtime.tZ)(Summary,{children:(0,jsx_runtime.BX)(_components.p,{children:["Use our ",(0,jsx_runtime.tZ)(_components.a,{href:"/docs/quick-start--overview",children:"Quick-Start tutorial"})," to create a fully-configured starter project and render a new Commerce frontend in less than 10 minutes."]})}),(0,jsx_runtime.tZ)(_components.h2,{id:"get-to-know-elsie",children:"Get to know Elsie"}),(0,jsx_runtime.BX)(Flex.k,{itemsPerRow:3,children:[(0,jsx_runtime.BX)(Panel.s,{footer:!0,children:[(0,jsx_runtime.tZ)(_components.h3,{id:"quick-start",children:"Quick start"}),(0,jsx_runtime.tZ)(_components.p,{children:"Follow the quick-start guide to start building your Commerce frontend."}),(0,jsx_runtime.tZ)(_components.p,{children:(0,jsx_runtime.tZ)(_components.a,{href:"/docs/quick-start--overview",children:"Read more"})})]}),(0,jsx_runtime.BX)(Panel.s,{footer:!0,children:[(0,jsx_runtime.tZ)(_components.h3,{id:"base-components",children:"Base Components"}),(0,jsx_runtime.tZ)(_components.p,{children:"Explore the Base components available for your user interface."}),(0,jsx_runtime.tZ)(_components.p,{children:(0,jsx_runtime.tZ)(_components.a,{href:"/docs/components-overview--overview",children:"Read more"})})]}),(0,jsx_runtime.BX)(Panel.s,{footer:!0,children:[(0,jsx_runtime.tZ)(_components.h3,{id:"base-design",children:"Base Design"}),(0,jsx_runtime.tZ)(_components.p,{children:"Learn how to rebrand Base components using the Base design system."}),(0,jsx_runtime.tZ)(_components.p,{children:(0,jsx_runtime.tZ)(_components.a,{href:"/docs/design-overview--overview",children:"Read more"})})]})]})]})]})}const welcome=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.tZ)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.tZ)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./config/storybook/components/Screenshot/Screenshot.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".XWu1Zp8V_Pz08WjGfVvx {\n  margin-bottom: 24px;\n  margin-top: 6px;\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n  border-radius: 0.5rem;\n  border: 1px solid rgb(234, 237, 242);\n  background-color: rgb(250, 250, 252);\n}\n\n._4_bEKogOGLEYK1YeHeA {\n  user-select: none;\n  background-color: white;\n  outline-width: 1px;\n  outline-color: rgb(156, 163, 175);\n  width: 100%;\n  object-fit: cover;\n}\n","",{version:3,sources:["webpack://./config/storybook/components/Screenshot/Screenshot.module.css"],names:[],mappings:"AAAA;EACE,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,qBAAqB;EACrB,oCAAoC;EACpC,oCAAoC;AACtC;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;EAClB,iCAAiC;EACjC,WAAW;EACX,iBAAiB;AACnB",sourcesContent:[".screenshotContainer {\n  margin-bottom: 24px;\n  margin-top: 6px;\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n  border-radius: 0.5rem;\n  border: 1px solid rgb(234, 237, 242);\n  background-color: rgb(250, 250, 252);\n}\n\n.image {\n  user-select: none;\n  background-color: white;\n  outline-width: 1px;\n  outline-color: rgb(156, 163, 175);\n  width: 100%;\n  object-fit: cover;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={screenshotContainer:"XWu1Zp8V_Pz08WjGfVvx",image:"_4_bEKogOGLEYK1YeHeA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./config/storybook/components/Summary/Summary.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"div.eZP3G9zK5S7Z_ipx3Mom {\n  font-weight: 400;\n  margin: 0 0 1rem 0;\n  color: #6d6d6d;\n  font-size: 1.3rem;\n  line-height: 1.8rem;\n}\n\ndiv.eZP3G9zK5S7Z_ipx3Mom strong {\n  color: #222222;\n}\n","",{version:3,sources:["webpack://./config/storybook/components/Summary/Summary.module.css"],names:[],mappings:"AAAA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB",sourcesContent:["div.summary {\n  font-weight: 400;\n  margin: 0 0 1rem 0;\n  color: #6d6d6d;\n  font-size: 1.3rem;\n  line-height: 1.8rem;\n}\n\ndiv.summary strong {\n  color: #222222;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={summary:"eZP3G9zK5S7Z_ipx3Mom"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);