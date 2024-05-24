"use strict";(self.webpackChunk_stark_ui=self.webpackChunk_stark_ui||[]).push([[709],{"./src/stories/Tab.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultTab:()=>DefaultTab,PillTab:()=>PillTab,TabWithIcon:()=>TabWithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_molecules_Tab__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/molecules/Tab.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Molecule/Tab",component:_components_molecules_Tab__WEBPACK_IMPORTED_MODULE_1__.Z},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_molecules_Tab__WEBPACK_IMPORTED_MODULE_1__.Z,args),DefaultTab=Template.bind({});DefaultTab.args={label:"Tab Example",active:!0};const PillTab=Template.bind({});PillTab.args={label:"Tab Example",type:"pill",active:!0};const TabWithIcon=Template.bind({});TabWithIcon.args={label:"Tab Example",type:"pill",active:!0,remixIcon:"user-fill"},DefaultTab.parameters={...DefaultTab.parameters,docs:{...DefaultTab.parameters?.docs,source:{originalSource:"args => <Tab {...args} />",...DefaultTab.parameters?.docs?.source}}},PillTab.parameters={...PillTab.parameters,docs:{...PillTab.parameters?.docs,source:{originalSource:"args => <Tab {...args} />",...PillTab.parameters?.docs?.source}}},TabWithIcon.parameters={...TabWithIcon.parameters,docs:{...TabWithIcon.parameters?.docs,source:{originalSource:"args => <Tab {...args} />",...TabWithIcon.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultTab","PillTab","TabWithIcon"]},"./src/components/molecules/RemixIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/remixicon/fonts/remixicon.css");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const RemixIcon=_ref=>{let{name,className="",...otherProps}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i",_extends({className:"ri-".concat(name," ").concat(className)},otherProps))},__WEBPACK_DEFAULT_EXPORT__=RemixIcon;RemixIcon.__docgenInfo={description:"",methods:[],displayName:"RemixIcon",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}}},"./src/components/molecules/Tab.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _RemixIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/molecules/RemixIcon.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const Tab=_ref=>{let{label,active=!0,type="default",remixIcon,onTabClick=()=>console.log("No OnClick event.")}=_ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"flex flex-row gap-8px justify-center items-center text-body font-semibold cursor-pointer w-fit transition-colors ease-in-out hover:text-primary-base ".concat({default:"pb-4px border-b-[2px]",pill:"py-4px px-8px rounded-4px"}[type]," ").concat(active?"default"===type?" border-primary-base text-black":"pill"===type&&"bg-primary-muted text-primary-base":"text-gray-400 border-b-transparent"),onClick:onTabClick},remixIcon&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"h-full flex items-center"},remixIcon&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RemixIcon__WEBPACK_IMPORTED_MODULE_0__.Z,{name:remixIcon,className:"text-body"})),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"py-4px"},label||"Tab Item"))},__WEBPACK_DEFAULT_EXPORT__=Tab;Tab.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{active:{defaultValue:{value:"true",computed:!1},required:!1},type:{defaultValue:{value:'"default"',computed:!1},required:!1},onTabClick:{defaultValue:{value:'() => console.log("No OnClick event.")',computed:!1},required:!1}}}},"./node_modules/remixicon/fonts/remixicon.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_13_use_2_remixicon_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./node_modules/remixicon/fonts/remixicon.css"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_13_use_2_remixicon_css__WEBPACK_IMPORTED_MODULE_6__.Z,options),_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_13_use_2_remixicon_css__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_13_use_2_remixicon_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_13_use_2_remixicon_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);