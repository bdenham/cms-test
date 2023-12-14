"use strict";(self.webpackChunk_adobe_elsie=self.webpackChunk_adobe_elsie||[]).push([[6238],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/preact/compat/dist/compat.module.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.default.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.default.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.default.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/docs/Utilities/classList.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/preact/compat/dist/compat.module.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/preact/compat/jsx-runtime.mjs"),_Users_tars_adobe_StorefrontSDK_D2_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},(0,_Users_tars_adobe_StorefrontSDK_D2_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.HY,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Utilities/classList"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.E$,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_components.h1,{id:"classesclasslist",children:"classes(classList)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_components.p,{children:"This function takes in an array of classes and returns a string of space separated entries that can be used for CSS classname assignments."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_components.h2,{id:"params",children:"Params"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_components.code,{children:"classList"}),"\n: An array containing strings or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_components.code,{children:"<string,boolean>"})," arrays"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_components.h2,{id:"returns",children:"Returns"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_components.p,{children:"Returns a string of space separated entries that can be used for CSS classname assignments."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_components.h2,{id:"examples",children:"Examples"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_components.code,{className:"language-ts",children:"import { classes } from '@adobe/elsie/lib';\n\ntype ClassList = Array<string | [string, boolean] | undefined>;\n\nconst classList: ClassList = ['class-1', 'class-2', 'class-3'];\n\nconst result = classes(classList);\n\nconsole.log(result); // \"class-1 class-2 class-3\"\n"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)(_components.p,{children:["You can use a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_components.code,{children:"<string,boolean>"})," array to control whether a class should be included or omitted from the final classes list."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_components.code,{className:"language-ts",children:"import { classes } from '@adobe/elsie/lib';\n\ntype ClassList = Array<string | [string, boolean] | undefined>;\n\nconst classList: ClassList = [\n  'class-1',\n  ['class-2', true],\n  ['class-3', false],\n  'class-4',\n];\n\nconst result = classes(classList);\n\nconsole.log(result); // \"class-1 class-2 class-4\"\n"})})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_tars_adobe_StorefrontSDK_D2_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_createMdxContent,props)})):_createMdxContent(props)}}}]);