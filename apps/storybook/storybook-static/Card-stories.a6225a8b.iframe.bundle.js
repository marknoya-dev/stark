"use strict";(self.webpackChunk_stark_ui=self.webpackChunk_stark_ui||[]).push([[478],{"./src/stories/Card.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithAction:()=>WithAction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories,withDisclosures:()=>withDisclosures,withDraggableList:()=>withDraggableList,withSections:()=>withSections});var react=__webpack_require__("./node_modules/react/index.js"),disclosure=__webpack_require__("./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js"),transition=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.js"),Button=__webpack_require__("./src/components/Button.tsx"),RemixIcon=__webpack_require__("./src/components/molecules/RemixIcon.tsx"),Reorder=__webpack_require__("./node_modules/framer-motion/dist/es/components/Reorder/index.mjs"),use_drag_controls=__webpack_require__("./node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs");const Card=_ref=>{let{header,caption,actionButton,children}=_ref;const bodyContent=react.Children.toArray(children).find((child=>{var _child$type;return"Card.Body"===(null===(_child$type=child.type)||void 0===_child$type?void 0:_child$type.displayName)})),footerContent=react.Children.toArray(children).find((child=>"Card.Footer"===child.type.displayName));return react.createElement("div",{className:"bg-white border border-outline-default rounded-4px transition-all ease-in "},react.createElement("div",{className:"card-header flex flex-row px-24px py-24px"},react.createElement("div",{className:"flex flex-col w-full gap-2px"},react.createElement("h6",{className:"text-body-lg font-bold text-black"},header),react.createElement("span",{className:"text-body text-copy-caption"},caption)),actionButton&&react.createElement(Button.Z,{label:actionButton.label,onClick:actionButton.onClick,variant:actionButton.variant})),bodyContent&&react.createElement(Card.Body,{className:bodyContent.props.className},bodyContent),footerContent&&react.createElement(Card.Footer,{className:footerContent.props.className},footerContent.props.children))};Card.Body=_ref2=>{let{children,className}=_ref2;return react.createElement("div",{className:"card-body w-full ".concat(className||"")},children)},Card.Section=_ref3=>{let{children,className}=_ref3;return react.createElement("div",{className:"card-section w-full border-y border-outline-default p-24px -mb-[1px] last:mb-[0px] ".concat(className)},children)},Card.DraggableList=_ref4=>{let{children}=_ref4;const listArr=children,[draggableItems,setDraggableItems]=(0,react.useState)(listArr),[isDragging,setIsDragging]=(0,react.useState)(!1);return react.createElement(Reorder.t.Group,{axis:"y",values:draggableItems,onReorder:setDraggableItems,className:"relative"},draggableItems.map((item=>react.createElement(DraggableDisclosure,{item,key:item.props.id?item.props.id:item.props.title,isDragging}))))},Card.Disclosure=_ref5=>{let{id,children,className,title,draggable,dragControls,isDragging}=_ref5;return react.createElement("div",{className:"card-disclosure w-full border-t border-outline-default p-24px -mb-[1px] last:mb-[0px] ".concat(className," ").concat(isDragging&&"select-none")},react.createElement(disclosure.p,{as:"div"},(_ref6=>{let{open}=_ref6;return react.createElement("div",{className:"flex items-start gap-16px w-full"},draggable&&react.createElement("div",{onPointerDown:event=>dragControls.start(event,{snapToCursor:!0}),className:"flex flex-center justify-center items-center bg-white text-copy-caption h-[24px] ".concat(isDragging?"cursor-grabbing":"cursor-grab")},react.createElement(RemixIcon.Z,{name:"draggable",className:"font-bold text-body"})),react.createElement("div",{className:"flex flex-col gap-16px w-full"},react.createElement(disclosure.p.Button,{className:"flex justify-between w-full"},react.createElement("div",{className:"flex flex-row items-center gap-8px w-full"},react.createElement("span",{className:"text-left text-black text-caption uppercase tracking-widest font-bold w-full"},title||"Disclosure"),react.createElement(RemixIcon.Z,{name:"arrow-up-s-line",className:"transition-transform ease-in ".concat(open?"rotate-180 transform":""," h-5 w-5 text-purple-500")}))),react.createElement(transition.u,{show:open,enter:"transition duration-100 ease-out",enterFrom:"transform -translate-y-4px opacity-0",enterTo:"transform translate-y-0px opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform translate-y-0px opacity-100",leaveTo:"transform -translate-y-4px opacity-0"},react.createElement(disclosure.p.Panel,{className:"text-body"},children))))})))},Card.Footer=_ref7=>{let{children,className}=_ref7;return react.createElement("div",{className:"card-footer px-24px pb-16px pt-16px flex items-center gap-16px  ".concat(className)},children)};const DraggableDisclosure=_ref8=>{let{item,isDragging}=_ref8;const controls=(0,use_drag_controls.o)();return react.createElement(Reorder.t.Item,{id:item.props.id?item.props.id:item.props.title,value:item,dragListener:!1,dragControls:controls},react.cloneElement(item,{dragControls:controls,isDragging}))};Card.Body.displayName="Card.Body",Card.Section.displayName="Card.Section",Card.DraggableList.displayName="Card.DraggableList",Card.Disclosure.displayName="Card.Disclosure",Card.Footer.displayName="Card.Footer";const components_Card=Card;Card.__docgenInfo={description:"",methods:[{name:"Body",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Section",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"DraggableList",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Disclosure",docblock:null,modifiers:["static"],params:[{name:"{\n  id,\n  children,\n  className,\n  title,\n  draggable,\n  dragControls,\n  isDragging,\n}",optional:!1,type:null}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null}],displayName:"Card"};var Overline=__webpack_require__("./src/components/molecules/Overline.js"),Badge=__webpack_require__("./src/components/molecules/Badge.tsx");const Card_stories={title:"Containers/Card",component:components_Card},Template=args=>react.createElement(components_Card,args,react.createElement(components_Card.Body,null,"This is the body"),react.createElement(components_Card.Footer,null,react.createElement(Button.Z,{variant:"primary"}),react.createElement(Button.Z,{type:"text"}))),Default=Template.bind({});Default.args={header:"Card Title",caption:"Briefly tell what this card can do for the user"};const WithAction=Template.bind({});WithAction.args={header:"Card Title",caption:"Briefly tell what this card can do for the user",actionButton:{label:"Action Button",onClick:()=>alert("Event")}};const withSections=args=>react.createElement(components_Card,args,react.createElement(components_Card.Body,null,react.createElement(components_Card.Section,null,react.createElement(Overline.Z,{label:"First overline",tooltip:{content:"This is a helpful tooltip to describe this section"}},react.createElement(Badge.Z,{label:"Badge",variant:"default",type:"outline",circular:!0}))),react.createElement(components_Card.Section,null,react.createElement(Overline.Z,{label:"What can you do",tooltip:{content:"This is another tooltip to make users understand what this section is for",position:"right"}},react.createElement("span",null,"This section can be descriptive"))),react.createElement(components_Card.Section,null,"Section C"),react.createElement(components_Card.Section,null,"Section D")),react.createElement(components_Card.Footer,null,react.createElement(Button.Z,{variant:"primary",label:"Primary Button"}),react.createElement(Button.Z,{type:"text",label:"Secondary"})));withSections.args={header:"Card Title",caption:"Briefly tell what this card can do for the user"};const withDisclosures=args=>react.createElement(components_Card,args,react.createElement(components_Card.Body,null,react.createElement(components_Card.Disclosure,{title:"First disclosure"},react.createElement(Overline.Z,{label:"First overline",tooltip:{content:"This is a helpful tooltip to describe this section"}},react.createElement(Badge.Z,{label:"Badge",variant:"default",type:"outline",circular:!0}))),react.createElement(components_Card.Disclosure,{title:"Second disclosure"},react.createElement(Overline.Z,{label:"First overline",tooltip:{content:"This is a helpful tooltip to describe this section"}},react.createElement(Badge.Z,{label:"Badge",variant:"default",type:"outline",circular:!0}))),react.createElement(components_Card.Disclosure,{title:"Third disclosure"},react.createElement(Overline.Z,{label:"First overline",tooltip:{content:"This is a helpful tooltip to describe this section"}},react.createElement(Badge.Z,{label:"Badge",variant:"default",type:"outline",circular:!0}))),react.createElement(components_Card.Disclosure,{title:"Fourth disclosure"},react.createElement(Overline.Z,{label:"First overline",tooltip:{content:"This is a helpful tooltip to describe this section"}},react.createElement(Badge.Z,{label:"Badge",variant:"default",type:"outline",circular:!0})))));withDisclosures.args={header:"Card Title",caption:"Briefly tell what this card can do for the user"};const withDraggableList=args=>react.createElement(components_Card,args,react.createElement(components_Card.Body,null,react.createElement(components_Card.DraggableList,null,react.createElement(components_Card.Disclosure,{title:"First disclosure",draggable:!0,id:"disclosure1"},react.createElement(Overline.Z,{label:"First overline",tooltip:{content:"This is a helpful tooltip to describe this section"}},react.createElement(Badge.Z,{label:"Badge",variant:"default",type:"outline",circular:!0}))),react.createElement(components_Card.Disclosure,{title:"Second disclosure",draggable:!0,id:"disclosure2"},react.createElement(Overline.Z,{label:"First overline",tooltip:{content:"This is a helpful tooltip to describe this section"}},react.createElement(Badge.Z,{label:"Badge",variant:"default",type:"outline",circular:!0}))),react.createElement(components_Card.Disclosure,{title:"Third disclosure",draggable:!0,id:"disclosure3"},react.createElement(Overline.Z,{label:"First overline",tooltip:{content:"This is a helpful tooltip to describe this section"}},react.createElement(Badge.Z,{label:"Badge",variant:"default",type:"outline",circular:!0}))),react.createElement(components_Card.Disclosure,{title:"Fourth disclosure",draggable:!0,id:"disclosure4"},react.createElement(Overline.Z,{label:"First overline",tooltip:{content:"This is a helpful tooltip to describe this section"}},react.createElement(Badge.Z,{label:"Badge",variant:"default",type:"outline",circular:!0}))))));withDraggableList.args={header:"Card Title",caption:"Briefly tell what this card can do for the user"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => <Card {...args}>\n    <Card.Body>This is the body</Card.Body>\n    <Card.Footer>\n      <Button variant="primary" />\n      <Button type="text" />\n    </Card.Footer>\n  </Card>',...Default.parameters?.docs?.source}}},WithAction.parameters={...WithAction.parameters,docs:{...WithAction.parameters?.docs,source:{originalSource:'args => <Card {...args}>\n    <Card.Body>This is the body</Card.Body>\n    <Card.Footer>\n      <Button variant="primary" />\n      <Button type="text" />\n    </Card.Footer>\n  </Card>',...WithAction.parameters?.docs?.source}}},withSections.parameters={...withSections.parameters,docs:{...withSections.parameters?.docs,source:{originalSource:'args => <Card {...args}>\n    <Card.Body>\n      <Card.Section>\n        <Overline label="First overline" tooltip={{\n        content: "This is a helpful tooltip to describe this section"\n      }}>\n          <Badge label="Badge" variant="default" type="outline" circular />\n        </Overline>\n      </Card.Section>\n      <Card.Section>\n        <Overline label="What can you do" tooltip={{\n        content: "This is another tooltip to make users understand what this section is for",\n        position: "right"\n      }}>\n          <span>This section can be descriptive</span>\n        </Overline>\n      </Card.Section>\n      <Card.Section>Section C</Card.Section>\n      <Card.Section>Section D</Card.Section>\n    </Card.Body>\n    <Card.Footer>\n      <Button variant="primary" label="Primary Button" />\n      <Button type="text" label="Secondary" />\n    </Card.Footer>\n  </Card>',...withSections.parameters?.docs?.source}}},withDisclosures.parameters={...withDisclosures.parameters,docs:{...withDisclosures.parameters?.docs,source:{originalSource:'args => <Card {...args}>\n    <Card.Body>\n      <Card.Disclosure title="First disclosure">\n        <Overline label="First overline" tooltip={{\n        content: "This is a helpful tooltip to describe this section"\n      }}>\n          <Badge label="Badge" variant="default" type="outline" circular />\n        </Overline>\n      </Card.Disclosure>\n\n      <Card.Disclosure title="Second disclosure">\n        <Overline label="First overline" tooltip={{\n        content: "This is a helpful tooltip to describe this section"\n      }}>\n          <Badge label="Badge" variant="default" type="outline" circular />\n        </Overline>\n      </Card.Disclosure>\n      <Card.Disclosure title="Third disclosure">\n        <Overline label="First overline" tooltip={{\n        content: "This is a helpful tooltip to describe this section"\n      }}>\n          <Badge label="Badge" variant="default" type="outline" circular />\n        </Overline>\n      </Card.Disclosure>\n      <Card.Disclosure title="Fourth disclosure">\n        <Overline label="First overline" tooltip={{\n        content: "This is a helpful tooltip to describe this section"\n      }}>\n          <Badge label="Badge" variant="default" type="outline" circular />\n        </Overline>\n      </Card.Disclosure>\n    </Card.Body>\n    {/* <Card.Footer>\n      <Button variant="primary" label="Primary Button" />\n      <Button type="text" label="Secondary" />\n     </Card.Footer> */}\n  </Card>',...withDisclosures.parameters?.docs?.source}}},withDraggableList.parameters={...withDraggableList.parameters,docs:{...withDraggableList.parameters?.docs,source:{originalSource:'args => <Card {...args}>\n    <Card.Body>\n      <Card.DraggableList>\n        <Card.Disclosure title="First disclosure" draggable={true} id="disclosure1">\n          <Overline label="First overline" tooltip={{\n          content: "This is a helpful tooltip to describe this section"\n        }}>\n            <Badge label="Badge" variant="default" type="outline" circular />\n          </Overline>\n        </Card.Disclosure>\n\n        <Card.Disclosure title="Second disclosure" draggable={true} id="disclosure2">\n          <Overline label="First overline" tooltip={{\n          content: "This is a helpful tooltip to describe this section"\n        }}>\n            <Badge label="Badge" variant="default" type="outline" circular />\n          </Overline>\n        </Card.Disclosure>\n\n        <Card.Disclosure title="Third disclosure" draggable={true} id="disclosure3">\n          <Overline label="First overline" tooltip={{\n          content: "This is a helpful tooltip to describe this section"\n        }}>\n            <Badge label="Badge" variant="default" type="outline" circular />\n          </Overline>\n        </Card.Disclosure>\n\n        <Card.Disclosure title="Fourth disclosure" draggable={true} id="disclosure4">\n          <Overline label="First overline" tooltip={{\n          content: "This is a helpful tooltip to describe this section"\n        }}>\n            <Badge label="Badge" variant="default" type="outline" circular />\n          </Overline>\n        </Card.Disclosure>\n      </Card.DraggableList>\n    </Card.Body>\n  </Card>',...withDraggableList.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithAction","withSections","withDisclosures","withDraggableList"]},"./src/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Button});var react=__webpack_require__("./node_modules/react/index.js"),RemixIcon=__webpack_require__("./src/components/molecules/RemixIcon.tsx"),tw_merge=__webpack_require__("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tw_merge.m)((0,clsx_m.W)(inputs))}const Button=_ref=>{let{label,id,leadingIcon,trailingIcon,variant="solid",color="default",size="default",disabled=!1,isLoading=!1,fullWidth=!1,submit=!1,attached=!1,onClick,className}=_ref;const buttonVariant=["solid","outline","text"].includes(variant)?variant:"solid",buttonColor=["default","primary","secondary","info","success","danger","warning","dark","white"].includes(color)?color:"default",buttonSize=["default","small","large"].includes(size)?size:"default",state=disabled?"disabled":isLoading?"loading":"default",buttonClasses={solid:{default:"bg-white hover:bg-gray-50 border-outline-default active:bg-gray-100",primary:"".concat(!disabled&&"bg-primary-base hover:bg-primary-hover active:bg-primary-active border-primary-base hover:border-primary-hover","  "),secondary:"".concat(!disabled&&"bg-secondary-base hover:bg-secondary-hover active:bg-secondary-active border-secondary-base hover:border-secondary-hover"),success:"".concat(!disabled&&"bg-success-base hover:bg-success-hover active:bg-secondary-active border-success-base hover:border-success-hover"),danger:"".concat(!disabled&&"bg-danger-base hover:bg-danger-hover active:bg-danger-active border-danger-base hover:border-danger-hover"),info:"".concat(!disabled&&"bg-info-base hover:bg-info-hover active:bg-info-active border-info-base hover:border-info-hover"),warning:"".concat(!disabled&&"bg-warning-base hover:bg-warning-hover active:bg-warning-active border-warning-base hover:border-warning-hover"),dark:"bg-black hover:bg-gray-900 active:bg-gray-800 border-black"},outline:{default:"bg-white hover:bg-gray-50 border-outline-default active:bg-gray-100",primary:!disabled&&"bg-white hover:bg-primary-muted border-primary-base hover:border-primary-hover active:border-primary-active",secondary:!disabled&&"bg-white hover:bg-secondary-muted border-secondary-base hover:border-secondary-hover active:border-secondary-active",success:!disabled&&"bg-white hover:bg-success-muted border-success-base hover:border-success-hover active:border-success-active",danger:!disabled&&"bg-white hover:bg-danger-muted border-danger-base hover:border-danger-hover active:border-danger-active",info:!disabled&&"bg-white hover:bg-info-muted border-info-base hover:border-info-hover active:border-info-active",warning:!disabled&&"bg-white hover:bg-warning-muted border-warning-base hover:border-warning-hover active:border-warning-active",dark:"bg-white border-gray-800 hover:bg-gray-100 hover:border-black active:border-black"},text:{default:!disabled&&"text-copy-caption hover:bg-gray-50 active:text-gray-800 cursor-pointer",primary:!disabled&&"text-primary-base hover:bg-primary-muted active:text-primary-active cursor-pointer",secondary:!disabled&&"text-secondary-base hover:bg-secondary-muted active:text-secondary-active cursor-pointer",success:!disabled&&"text-success-base hover:bg-success-muted active:text-success-active cursor-pointer",danger:!disabled&&"text-danger-base hover:bg-danger-muted active:text-danger-active cursor-pointer",info:!disabled&&"text-info-base hover:bg-info-muted active:text-info-active cursor-pointer",warning:!disabled&&"text-warning-base hover:bg-warning-muted active:text-warning-active cursor-pointer",dark:"text-black hover:bg-gray-100/30 active:text-gray-800 cursor-pointer",white:"text-white active:text-gray-800 cursor-pointer"}},variantClasses={solid:"font-semibold ".concat(attached?"border-l rounded-0px":"rounded-4px outline border"," focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0"),outline:"font-semibold ".concat(attached?"border-l rounded-0px":"rounded-4px outline border"," focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0"),text:"font-semibold bg-transparent p-4px rounded-4px border-none focus:outline-4 focus:outline-focusRing/30 outline outline-focusRing/0"},buttonClass=buttonClasses[buttonVariant][buttonColor],sizeClass={small:"px-8px py-4px",default:"px-12px py-10px",large:"px-16px py-16px"}[buttonSize],textClass="disabled"===state?"text-copy-disabled cursor-not-allowed":"solid"===buttonVariant&&"default"!==buttonColor?"text-white cursor-pointer":buttonClasses.text[buttonColor],combinedClasses=cn("relative group justify-center items-center flex transition-colors duration-300 ease-in-out h-fit",variantClasses[buttonVariant],buttonClass,fullWidth?"w-full":"w-fit","text"!==buttonVariant&&sizeClass,{default:"cursor-pointer",disabled:"text-copy-disabled bg-fill-disabled cursor-not-allowed border-outline-default border",loading:"opacity-75 cursor-wait"}[state],textClass,className);return react.createElement("button",{id,type:submit?"submit":"button",onClick,disabled:"disabled"===state||"loading"===state,className:combinedClasses},react.createElement("label",{className:cn(textClass,"inline-flex gap-4px items-center justify-center whitespace-nowrap transition-all duration-300 ease-in-out text-body",isLoading&&"opacity-20 cursor-wait")},leadingIcon&&react.createElement("div",{className:"text-[16px] flex justify-center items-center h-[16px] w-[16px] relative"},react.createElement("div",{className:"absolute"},react.cloneElement(leadingIcon))),react.createElement("span",{className:"select-none"},null!=label?label:"Button"),trailingIcon&&react.createElement("div",{className:"text-[16px] flex justify-center items-center h-[16px] w-[16px] relative"},react.createElement("div",{className:"absolute"},react.cloneElement(trailingIcon)))),isLoading&&react.createElement("span",{className:cn("absolute cursor-wait top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-12px h-[18px] w-[18px] text-[18px] font-bold",textClass)},react.createElement("div",{className:"animate-spin"},react.createElement(RemixIcon.Z,{name:"loader-fill"}))))},components_Button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"solid"',computed:!1},required:!1},color:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},submit:{defaultValue:{value:"false",computed:!1},required:!1},attached:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./src/components/molecules/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_RemixIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/molecules/RemixIcon.tsx");const Badge=_ref=>{let{label,color="default",variant="solid",leadingItem,dismissible,onDismiss,circular=!1}=_ref;const colorClasses={default:"outline"===variant?"bg-gray-100 text-copy-caption border border-outline-gray-800":"bg-white text-copy-caption border border-outline-gray-800",primary:"outline"===variant?"bg-primary-muted text-primary-base":"bg-primary-base text-white border border-primary-base",secondary:"outline"===variant?"bg-secondary-muted text-secondary-base":"bg-secondary-base text-white border border-secondary-base",success:"outline"===variant?"bg-success-muted text-success-base":"bg-success-base text-white border border-success-base",info:"outline"===variant?"bg-info-muted text-info-base":"bg-info-base text-white border border-info-base",warning:"outline"===variant?"bg-warning-muted text-warning-base":"bg-warning-base text-black border border-warning-base",danger:"outline"===variant?"bg-danger-muted text-danger-base":"bg-danger-base text-white border border-danger-base"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("flex flex-row items-center justify-center gap-2px py-2px w-fit ".concat(circular?"rounded-16px px-[6px]":"rounded-4px px-4px"),colorClasses[color])},leadingItem&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-[14px] h-[14px] flex justify-between items-center overflow-clip mr-2px"},leadingItem),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-caption font-semibold uppercase whitespace-nowrap"},label),dismissible&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"text-[14px] w-[14px] h-[14px] flex justify-between items-center font-bold outline-none",onClick:onDismiss||(()=>console.log("Add dismiss functionality (supply a function to onDismiss prop)"))},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RemixIcon__WEBPACK_IMPORTED_MODULE_1__.Z,{name:"close-fill"})))},__WEBPACK_DEFAULT_EXPORT__=Badge;Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{defaultValue:{value:'"default"',computed:!1},required:!1},variant:{defaultValue:{value:'"solid"',computed:!1},required:!1},circular:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./src/components/molecules/Overline.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>molecules_Overline});var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),RemixIcon=__webpack_require__("./src/components/molecules/RemixIcon.tsx");const Tooltip=_ref=>{let{content,position="bottom"}=_ref;const[showTooltip,setShowTooltip]=(0,react.useState)(!1),toggleTooltip=()=>{setShowTooltip((prevState=>!prevState))};return react.createElement("div",{className:"rounded-4px relative",onMouseEnter:toggleTooltip,onMouseLeave:toggleTooltip},react.createElement(RemixIcon.Z,{name:"information-fill"}),react.createElement("div",{className:"absolute transform bg-black text-white p-4px rounded-4px text-caption  transition-opacity ease-linear pointer-events-none \n        ".concat(showTooltip?"opacity-100":"opacity-0","\n        ").concat({top:"-top-4px left-1/2 -translate-x-1/2 -translate-y-full",bottom:"top-full left-1/2 -translate-x-1/2 translate-y-4px",left:"top-1/2 right-full -translate-x-[4px] -translate-y-1/2",right:"top-1/2 left-full translate-x-4px -translate-y-1/2"}[position]," ")},react.createElement("span",{className:"whitespace-normal break-words max-w-[200px] block w-max"},content)))};Tooltip.propTypes={content:prop_types_default().string.isRequired,position:prop_types_default().string};const molecules_Tooltip=Tooltip;Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{position:{defaultValue:{value:'"bottom"',computed:!1},description:"",type:{name:"string"},required:!1},content:{description:"",type:{name:"string"},required:!0}}};const Overline=_ref=>{let{label,children,tooltip}=_ref;return react.createElement("div",{className:"flex flex-col gap-4px"},react.createElement("div",{className:"text-caption text-copy-caption flex item-center gap-8px"},react.createElement("span",{className:"uppercase font-bold tracking-wider"},label||"Overline"),tooltip&&react.createElement(molecules_Tooltip,{content:tooltip.content?tooltip.content:"Tooltip",position:tooltip.position?tooltip.position:"bottom"})),children)};Overline.propTypes={label:prop_types_default().string.isRequired,children:prop_types_default().node,tooltip:prop_types_default().shape({content:prop_types_default().string,position:prop_types_default().string})};const molecules_Overline=Overline;Overline.__docgenInfo={description:"",methods:[],displayName:"Overline",props:{label:{description:"",type:{name:"string"},required:!0},children:{description:"",type:{name:"node"},required:!1},tooltip:{description:"",type:{name:"shape",value:{content:{name:"string",required:!1},position:{name:"string",required:!1}}},required:!1}}}},"./src/components/molecules/RemixIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/remixicon/fonts/remixicon.css");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const RemixIcon=_ref=>{let{name,className="",...otherProps}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("i",_extends({className:"ri-".concat(name," ").concat(className)},otherProps))},__WEBPACK_DEFAULT_EXPORT__=RemixIcon;RemixIcon.__docgenInfo={description:"",methods:[],displayName:"RemixIcon",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}}}}]);