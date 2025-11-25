import{j as e}from"./jsx-runtime-3169928d.js";import{r as u}from"./index-d33a4676.js";import{c as R}from"./bind-f5c6fce5.js";import{K as V}from"./keyCodes-e5060420.js";import{S as H}from"./close-3561dacf.js";import{B as M}from"./baseIconButton-22d0e691.js";import{B as d}from"./button-1ebb3b4f.js";import{B as Z}from"./breadcrumbs-e90a832e.js";import{D as p}from"./dropdown-e0f77cb6.js";import{F as w}from"./fieldText-004cca8f.js";import{F as r}from"./fieldLabel-465f57b8.js";import{S as g}from"./chevronDownDropdown-3c901902.js";import{S as q}from"./copy-ba7a7be8.js";import{S as z}from"./info-85178786.js";import{S as _}from"./plus-ca4f99ed.js";import"./popover-f3624ffa.js";import"./floating-ui.react-09d3bb8c.js";import"./index-f454028f.js";import"./floatingUi-59569704.js";import"./meatballMenu-3f4bf33c.js";import"./tree-761071f3.js";import"./downshift.esm-fe19be7f.js";import"./tslib.es6-690a75fa.js";import"./clear-04fd327c.js";import"./dropdown-a2b64102.js";import"./tooltip-d85d779b.js";import"./checkbox-24bb629b.js";import"./openEye-29ae22c4.js";import"./spinLoader-8fb5022b.js";import"./maxValueDisplay-9147cf24.js";const $="_active_6bj2z_15",K="_compact_6bj2z_39",W="_header_6bj2z_35",U="_title_6bj2z_65",Y="_description_6bj2z_76",G="_content_6bj2z_85",X="_footer_6bj2z_92",J="_divider_6bj2z_98",Q={"side-panel":"_side-panel_6bj2z_1",active:$,"side-right":"_side-right_6bj2z_19","side-left":"_side-left_6bj2z_27","header-section":"_header-section_6bj2z_35",compact:K,header:W,"header-content":"_header-content_6bj2z_55","close-button":"_close-button_6bj2z_59",title:U,description:Y,content:G,footer:X,divider:J},m=R.bind(Q),T=({className:n,title:i,descriptionComponent:a,headerComponent:h,contentComponent:t,footerComponent:f,top:s=0,side:N="right",isOpen:o=!0,onClose:c,closeButtonAriaLabel:x="Close panel"})=>{const C=u.useId(),A=()=>{c==null||c()};u.useEffect(()=>{if(!o||!c)return;const y=B=>{const{keyCode:P}=B;P===V.ESCAPE_KEY_CODE&&c()};return document.addEventListener("keydown",y,!1),()=>{document.removeEventListener("keydown",y,!1)}},[o,c]);const D=!!(h||a);return e.jsxs("aside",{className:m("side-panel",`side-${N}`,{active:o},n),role:"dialog","aria-modal":"true","aria-hidden":!o,"aria-labelledby":i?C:void 0,style:{top:s,height:`calc(100vh - ${s}px)`},tabIndex:-1,children:[e.jsxs("div",{className:m("header-section",{compact:!D}),children:[(h||i)&&e.jsxs("div",{className:m("header"),children:[i?e.jsx("span",{id:C,className:m("title"),children:i}):h,c&&e.jsx(M,{className:m("close-button"),onClick:A,"aria-label":x,children:e.jsx(H,{})})]}),a]}),e.jsx("div",{className:m("divider")}),t&&e.jsx("div",{className:m("content"),children:t}),f&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:m("divider")}),e.jsx("div",{className:m("footer"),children:f})]})]})};T.__docgenInfo={description:"",methods:[],displayName:"SidePanel",props:{className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},headerComponent:{required:!1,tsType:{name:"ReactNode"},description:""},descriptionComponent:{required:!1,tsType:{name:"ReactNode"},description:""},contentComponent:{required:!1,tsType:{name:"ReactNode"},description:""},footerComponent:{required:!1,tsType:{name:"ReactNode"},description:""},top:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeButtonAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Close panel'",computed:!1}}}};const Ve={title:"Layout/SidePanel",component:T,parameters:{layout:"fullscreen"},tags:["autodocs"]},ee=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.3763 5.66784C5.55975 5.46145 5.87579 5.44286 6.08218 5.62632L8.33218 7.62632C8.43893 7.7212 8.5 7.85721 8.5 8.00002C8.5 8.14284 8.43893 8.27884 8.33218 8.37373L6.08218 10.3737C5.87579 10.5572 5.55975 10.5386 5.3763 10.3322C5.19284 10.1258 5.21143 9.80978 5.41782 9.62632L6.6849 8.50002H0.5C0.223858 8.50002 0 8.27617 0 8.00002C0 7.72388 0.223858 7.50002 0.5 7.50002H6.6849L5.41782 6.37373C5.21143 6.19027 5.19284 5.87423 5.3763 5.66784Z",fill:"#A2AAB5"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.29289 1.29169C2.48043 1.10416 2.73478 0.9988 3 0.9988H6.33331C6.5482 0.999684 6.75716 1.06934 6.9296 1.19757L6.93079 1.19845L8.6671 2.99879L8.6706 3.00002H14C14.2652 3.00002 14.5196 3.10538 14.7071 3.29291C14.8946 3.48045 15 3.7348 15 4.00002V13.0563C15 13.3066 14.9006 13.5466 14.7236 13.7236C14.5466 13.9006 14.3065 14 14.0562 14H3C2.73478 14 2.48043 13.8947 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V10.4C2 10.1791 2.17909 10 2.4 10H2.6C2.82091 10 3 10.1791 3 10.4V13H14V4.00002H8.66669C8.4518 3.99914 8.24284 3.92948 8.0704 3.80125L8.06921 3.80036L6.3329 2.00003L6.3294 1.9988H3V5.60002C3 5.82093 2.82091 6.00002 2.6 6.00002H2.40001C2.1791 6.00002 2.00001 5.82093 2.00001 5.60002L2 1.9988C2 1.73358 2.10536 1.47923 2.29289 1.29169Z",fill:"#A2AAB5"})]}),ae=()=>e.jsx("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.242 1.80934L5.18143 8.91762C5.59849 8.50544 6.09205 8.14104 6.82202 7.93149C7.82055 7.64485 9.197 7.66454 11.3454 8.07158C12.4452 8.27995 13.3385 7.61018 14.014 6.48698C14.5198 5.64602 14.8292 4.6584 14.9494 3.91627C13.8151 4.14357 11.9792 4.28755 10.24 3.73834C9.00223 3.3475 8.4433 2.67338 7.99528 2.13303C7.92186 2.04447 7.85142 1.95951 7.78145 1.87998C7.53649 1.60152 7.29737 1.3811 6.94888 1.22104C6.59654 1.05921 6.09091 0.940619 5.29042 0.940619C3.13991 0.940619 1.82103 1.46112 1.242 1.80934ZM5.67747 9.79934L7.85316 13.5467L6.98313 14L4.63799 9.96078L0 1.59185L0.258347 1.34712C0.806364 0.827978 2.48358 0 5.29042 0C6.1921 0 6.85672 0.133362 7.38208 0.374655C7.91128 0.617719 8.25728 0.951592 8.54425 1.27781C8.63169 1.37721 8.7135 1.4749 8.79341 1.57032C9.23165 2.09361 9.61288 2.54883 10.554 2.84599C12.4617 3.4484 14.5586 3.09481 15.3465 2.84599L16 2.63965V3.29217C16 4.18543 15.6239 5.71035 14.8768 6.9526C14.1376 8.18167 12.9031 9.32595 11.1507 8.99393C9.04366 8.59473 7.86683 8.61442 7.10998 8.83169C6.48714 9.01048 6.10556 9.33351 5.67747 9.79934Z",fill:"#A2AAB5"})}),te=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.57376 12.7614C-1.05695 9.21334 -0.313304 4.20447 3.23474 1.57376C6.78279 -1.05695 11.7917 -0.313304 14.4224 3.23474C17.0531 6.78279 16.3094 11.7917 12.7614 14.4224C11.3366 15.4788 9.67477 15.9914 8.02675 15.9961C7.75061 15.9969 7.52612 15.7736 7.52534 15.4975C7.52455 15.2214 7.74778 14.9969 8.02392 14.9961C9.46566 14.992 10.9182 14.5441 12.1658 13.6191C15.2702 11.3173 15.9209 6.93475 13.6191 3.83034C11.3173 0.725934 6.93475 0.0752695 3.83034 2.37704C0.732318 4.67408 0.0779557 9.04337 2.36288 12.1466L3.80277 10.7067L4.59827 14.9734L0.331574 14.1779L1.65878 12.8507C1.62753 12.8251 1.59891 12.7953 1.57376 12.7614ZM10.7267 8.832C11.3204 8.43618 11.3204 7.56372 10.7267 7.1679L7.52943 5.03645C6.86487 4.59342 5.97473 5.06981 5.97473 5.8685V10.1315C5.97473 10.9302 6.86488 11.4066 7.52944 10.9635L10.7267 8.832Z",fill:"#A2AAB5"})}),se=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M8.00004 4.03162C7.7239 4.03162 7.50004 4.25547 7.50004 4.53162V8.53162C7.50004 8.68646 7.57043 8.82487 7.68095 8.91658C7.70485 8.9429 7.73163 8.97059 7.76144 8.99982L9.6822 10.9206C9.87746 11.1158 10.194 11.1158 10.3893 10.9206C10.5846 10.7253 10.5846 10.4087 10.3893 10.2135L8.50004 8.3242V4.53162C8.50004 4.25547 8.27618 4.03162 8.00004 4.03162Z",fill:"#A2AAB5"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z",fill:"#A2AAB5"})]}),le=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"test-card-icon",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2ZM3 1C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1H3Z",fill:"#A2AAB5"}),e.jsx("path",{d:"M3 3.5C3 3.22386 3.22386 3 3.5 3H12.5C12.7761 3 13 3.22386 13 3.5V12.5C13 12.7761 12.7761 13 12.5 13H3.5C3.22386 13 3 12.7761 3 12.5V3.5Z",fill:"#A2AAB5"})]}),ie=()=>e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 1H2C1.44772 1 1 1.44772 1 2V12C1 12.5523 1.44772 13 2 13H12C12.5523 13 13 12.5523 13 12V2C13 1.44772 12.5523 1 12 1ZM2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14H12C13.1046 14 14 13.1046 14 12V2C14 0.895431 13.1046 0 12 0H2Z",fill:"#A2AAB5"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5 12C11.7761 12 12 11.7761 12 11.5V2L2 12H11.5Z",fill:"#A2AAB5"})]}),ne=()=>e.jsx("svg",{width:"12",height:"20",viewBox:"0 0 12 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M11.5962 0.5H11.1933C10.1679 0.5 9.18169 0.893774 8.43829 1.6L1.1225 8.55C0.292501 9.3385 0.2925 10.6615 1.1225 11.45L8.43829 18.4C9.18169 19.1062 10.1679 19.5 11.1933 19.5H11.5962",stroke:"#C1C7D0"})}),oe=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.5 10L8.00018 6.09976L14.5 10",stroke:"#DC5959",strokeWidth:"2.8",strokeLinecap:"round"})}),re=n=>Array.from({length:n},(i,a)=>({title:"Folder Name",link:{pathname:`/folder-${a+1}`}})),l={breadcrumbs:re(6),header:{title:"Login Process Evaluation Zeta",version:"1.0 Stable GTX",availableCount:9,id:"a3f1e2b4-6c7d-4e8a-9f3b-2c1d3e4f5a6b",date:"2024-03-26 12:45:42",duration:"16 min"},automationCoverage:{fullCoverageTest:{id:"TCID-2023",title:"Complete scenario validation"},partialCoverageTests:[{id:"TCID-3372",title:"User login validation"},{id:"TCID-1122",title:"Password Reset Functionality Test"}]},tags:["ui bug","performance test","ios functionality ve...","security check","battery performanc...","cross-platform effi...","user flow","api validation","data integrity"],scenario:{precondition:"Ideally you should have a test method for each separate unit of work so you can always immediately view where things are going wrong. In this example there is a basic method called getUserById() which will return a user and there..."}},j={render:()=>{const[n,i]=u.useState(!0),[a,h]=u.useState(!1),[t,f]=u.useState(!1),[s,N]=u.useState(!1),[o,c]=u.useState(!1);return e.jsxs("div",{children:[e.jsx("div",{className:"control-wrapper",children:e.jsx(d,{onClick:()=>i(!n),children:n?"Close Panel":"Open Panel"})}),e.jsx(T,{className:"example-1",isOpen:n,onClose:()=>i(!1),headerComponent:e.jsxs("div",{className:"header-wrapper",children:[e.jsx(oe,{}),e.jsx("h2",{className:"header-title",children:l.header.title})]}),descriptionComponent:e.jsxs("div",{className:"description-wrapper",children:[e.jsxs("div",{className:"breadcrumbs-wrapper",children:[e.jsx(ee,{}),e.jsx(Z,{descriptors:l.breadcrumbs})]}),e.jsxs("div",{className:"info-row",children:[e.jsxs("div",{className:"info-group",children:[e.jsx(ae,{}),e.jsx("span",{className:"text-primary",children:l.header.version}),e.jsxs("span",{className:"text-secondary",children:["(",l.header.availableCount," available)"]})]}),e.jsxs("div",{className:"info-group",children:[e.jsx("span",{className:"text-label",children:"ID:"}),e.jsx("span",{className:"text-value",children:l.header.id}),e.jsx("button",{type:"button",className:"icon-button",children:e.jsx(q,{})})]})]}),e.jsxs("div",{className:"info-row",children:[e.jsxs("div",{className:"info-group",children:[e.jsx(te,{}),e.jsx("span",{className:"text-value",children:l.header.date})]}),e.jsxs("div",{className:"info-group",children:[e.jsx(se,{}),e.jsx("span",{className:"text-value",children:l.header.duration})]})]})]}),contentComponent:e.jsxs("div",{className:"content-wrapper",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"section-header",onClick:()=>f(!t),children:[e.jsxs("div",{className:"section-header-left",children:[e.jsx("span",{className:`section-expand-icon ${t?"expanded":"collapsed"}`,children:e.jsx(g,{})}),e.jsx("h3",{className:"section-title",children:"Automation coverage"}),e.jsx(z,{})]}),e.jsxs(d,{variant:"text",onClick:x=>x.stopPropagation(),className:"bind-autotest-button",children:[e.jsx(_,{})," ",e.jsx("span",{children:"Bind Autotest"})]})]}),t&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"automation-coverage-content",children:e.jsx("div",{className:"coverage-section",children:e.jsxs("div",{className:"test-card",children:[e.jsxs("div",{className:"coverage-header",children:[e.jsx(le,{}),e.jsx("span",{className:"coverage-title",children:"Full coverage tests"})]}),e.jsxs("div",{className:"test-card-content",children:[e.jsxs("div",{className:"test-card-content-left",children:[e.jsx("h4",{className:"test-card-title",children:l.automationCoverage.fullCoverageTest.title}),e.jsx("span",{className:"test-card-id",children:l.automationCoverage.fullCoverageTest.id})]}),e.jsx("button",{type:"button",className:"test-card-menu",children:"⋯"})]})]},l.automationCoverage.fullCoverageTest.id)})}),e.jsx("div",{className:"coverage-section",children:e.jsxs("div",{className:"test-card",children:[e.jsxs("div",{className:"coverage-header",children:[e.jsx(ie,{}),e.jsx("span",{className:"coverage-title",children:"Partial coverage tests"}),e.jsxs("button",{type:"button",className:"partial-toggle-button",onClick:()=>h(!a),children:[e.jsx("span",{children:"PARTIAL IN TOTAL"}),e.jsx("span",{className:`toggle-icon ${a?"expanded":""}`,children:e.jsx(g,{})})]})]}),a&&e.jsx("div",{className:"test-cards",children:l.automationCoverage.partialCoverageTests.map((x,C)=>e.jsxs("div",{className:"test-card-content",children:[e.jsxs("div",{className:"test-card-content-left",children:[e.jsx("h4",{className:"test-card-title",children:x.title}),e.jsx("span",{className:"test-card-id",children:x.id})]}),e.jsx("button",{type:"button",className:"test-card-menu",children:"⋯"})]},C))})]})})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"section-header",onClick:()=>N(!s),children:e.jsxs("div",{className:"section-header-left",children:[e.jsx("span",{className:`section-expand-icon ${s?"expanded":"collapsed"}`,children:e.jsx(g,{})}),e.jsx("h3",{className:"section-title",children:"Tags"})]})}),s&&e.jsxs("div",{className:"tags-section",children:[e.jsx("div",{className:"tags-wrapper",children:l.tags.map((x,C)=>e.jsxs("div",{className:"tag-wrapper",children:[e.jsx(ne,{}),e.jsx("span",{className:"tag",children:x})]},C))}),e.jsx(d,{variant:"text",className:"show-all-tags-button",children:"Show all"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"section-header",onClick:()=>c(!o),children:e.jsxs("div",{className:"section-header-left",children:[e.jsx("span",{className:`section-expand-icon ${o?"expanded":"collapsed"}`,children:e.jsx(g,{})}),e.jsx("h3",{className:"section-title",children:"Scenario"})]})}),o&&e.jsxs("div",{className:"scenario-box",children:[e.jsx("div",{className:"scenario-title",children:"Precondition"}),e.jsx("div",{className:"scenario-text",children:l.scenario.precondition})]})]})]}),footerComponent:e.jsxs("div",{className:"footer-wrapper",children:[e.jsx("button",{type:"button",className:"footer-menu-button",children:"⋯"}),e.jsxs("div",{className:"footer-actions",children:[e.jsx(d,{children:"Details & Versions"}),e.jsx(d,{children:"Add to Test Plan"})]})]})})]})}},v={status:[{value:"open",label:"Open"},{value:"in_progress",label:"In Progress"},{value:"resolved",label:"Resolved"},{value:"closed",label:"Closed"}],defectType:[{value:"bug",label:"Bug"},{value:"improvement",label:"Improvement"},{value:"task",label:"Task"}],startTime:[{value:"Any",label:"Any"},{value:"today",label:"Today"},{value:"yesterday",label:"Yesterday"},{value:"last_week",label:"Last Week"},{value:"last_month",label:"Last Month"}],textOperator:[{value:"Contains",label:"Contains"},{value:"Equals",label:"Equals"},{value:"StartsWith",label:"Starts With"},{value:"EndsWith",label:"Ends With"}],issueOperator:[{value:"All",label:"All"},{value:"Contains",label:"Contains"},{value:"Equals",label:"Equals"}],methodType:[{value:"manual",label:"Manual"},{value:"automated",label:"Automated"},{value:"semi_automated",label:"Semi-automated"}],retry:[{value:"none",label:"None"},{value:"once",label:"Once"},{value:"twice",label:"Twice"}],pattern:[{value:"pattern1",label:"Pattern 1"},{value:"pattern2",label:"Pattern 2"},{value:"pattern3",label:"Pattern 3"}]},I={status:"",defectType:"",startTime:"Any",testDescOperator:"Contains",testDescription:"",defectCommentOperator:"Contains",defectComment:"",issueOperator:"All",issueBTS:"",methodType:"",retry:"",patternName:""},b={render:()=>{const[n,i]=u.useState(!0),[a,h]=u.useState(I),t=s=>N=>{h(o=>({...o,[s]:String(N)}))},f=()=>h(I);return e.jsxs("div",{children:[e.jsx("div",{className:"control-wrapper",children:e.jsx(d,{onClick:()=>i(!n),children:n?"Close Panel":"Open Panel"})}),e.jsx(T,{className:"example-2",isOpen:n,onClose:()=>i(!1),title:"Filter",contentComponent:e.jsxs("div",{className:"filter-content",children:[e.jsxs("div",{className:"filter-field",children:[e.jsx(r,{children:"Status"}),e.jsx(p,{value:a.status,onChange:t("status"),options:v.status,placeholder:"Select test status"})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(r,{children:"Defect type"}),e.jsx(p,{value:a.defectType,onChange:t("defectType"),options:v.defectType,placeholder:"Select defect type"})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(r,{children:"Start time"}),e.jsx(p,{value:a.startTime,onChange:t("startTime"),options:v.startTime})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(r,{children:"Test attributes"}),e.jsxs(d,{variant:"text",className:"add-attribute-button",children:[e.jsx(_,{})," Add Attribute"]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(r,{children:"Test Description"}),e.jsxs("div",{className:"filter-field-group",children:[e.jsx(p,{value:a.testDescOperator,onChange:t("testDescOperator"),options:v.textOperator,className:"operator-dropdown"}),e.jsx(w,{className:"group-field-text",value:a.testDescription,onChange:s=>t("testDescription")(s.target.value),placeholder:"Enter description"})]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(r,{children:"Defect comment"}),e.jsxs("div",{className:"filter-field-group",children:[e.jsx(p,{value:a.defectCommentOperator,onChange:t("defectCommentOperator"),options:v.textOperator,className:"operator-dropdown"}),e.jsx(w,{className:"group-field-text",value:a.defectComment,onChange:s=>t("defectComment")(s.target.value),placeholder:"Enter comment"})]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(r,{children:"Issue in BTS"}),e.jsxs("div",{className:"filter-field-group",children:[e.jsx(p,{value:a.issueOperator,onChange:t("issueOperator"),options:v.issueOperator,className:"operator-dropdown"}),e.jsx(w,{className:"group-field-text",value:a.issueBTS,onChange:s=>t("issueBTS")(s.target.value),placeholder:"Enter issue in BTS"})]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(r,{children:"Method type"}),e.jsx(p,{value:a.methodType,onChange:t("methodType"),options:v.methodType,placeholder:"Select type"})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(r,{children:"Retry"}),e.jsx(p,{value:a.retry,onChange:t("retry"),options:v.retry,placeholder:"Select state"})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(r,{children:"Pattern name"}),e.jsx(p,{value:a.patternName,onChange:t("patternName"),options:v.pattern,placeholder:"Select pattern"})]})]}),footerComponent:e.jsxs("div",{className:"filter-footer",children:[e.jsx(d,{variant:"text",className:"clear-filters-button",onClick:f,children:"Clear all filters"}),e.jsxs("div",{className:"filter-footer-actions",children:[e.jsx(d,{variant:"ghost",onClick:()=>i(!1),children:"Cancel"}),e.jsx(d,{children:"Apply"})]})]})})]})}};var S,L,F;j.parameters={...j.parameters,docs:{...(S=j.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [partialTestsExpanded, setPartialTestsExpanded] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [automationCoverageExpanded, setAutomationCoverageExpanded] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tagsExpanded, setTagsExpanded] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [scenarioExpanded, setScenarioExpanded] = useState(false);
    return <div>
        <div className="control-wrapper">
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close Panel' : 'Open Panel'}
          </Button>
        </div>
        <SidePanel className="example-1" isOpen={isOpen} onClose={() => setIsOpen(false)} headerComponent={<div className="header-wrapper">
              <StatusIcon />
              <h2 className="header-title">{mockData.header.title}</h2>
            </div>} descriptionComponent={<div className="description-wrapper">
              <div className="breadcrumbs-wrapper">
                <FolderIcon />
                <Breadcrumbs descriptors={mockData.breadcrumbs} />
              </div>
              <div className="info-row">
                <div className="info-group">
                  <VersionIcon />
                  <span className="text-primary">{mockData.header.version}</span>
                  <span className="text-secondary">
                    ({mockData.header.availableCount} available)
                  </span>
                </div>
                <div className="info-group">
                  <span className="text-label">ID:</span>
                  <span className="text-value">{mockData.header.id}</span>
                  <button type="button" className="icon-button">
                    <CopyIcon />
                  </button>
                </div>
              </div>
              <div className="info-row">
                <div className="info-group">
                  <HistoryIcon />
                  <span className="text-value">{mockData.header.date}</span>
                </div>
                <div className="info-group">
                  <ClockIcon />
                  <span className="text-value">{mockData.header.duration}</span>
                </div>
              </div>
            </div>} contentComponent={<div className="content-wrapper">
              <div>
                <div className="section-header" onClick={() => setAutomationCoverageExpanded(!automationCoverageExpanded)}>
                  <div className="section-header-left">
                    <span className={\`section-expand-icon \${automationCoverageExpanded ? 'expanded' : 'collapsed'}\`}>
                      <ChevronDownDropdownIcon />
                    </span>
                    <h3 className="section-title">Automation coverage</h3>
                    <InfoIcon />
                  </div>
                  <Button variant="text" onClick={e => e.stopPropagation()} className="bind-autotest-button">
                    <PlusIcon /> <span>Bind Autotest</span>
                  </Button>
                </div>

                {automationCoverageExpanded && <>
                    <div className="automation-coverage-content">
                      <div className="coverage-section">
                        <div key={mockData.automationCoverage.fullCoverageTest.id} className="test-card">
                          <div className="coverage-header">
                            <FullCoverageIcon />
                            <span className="coverage-title">Full coverage tests</span>
                          </div>
                          <div className="test-card-content">
                            <div className="test-card-content-left">
                              <h4 className="test-card-title">
                                {mockData.automationCoverage.fullCoverageTest.title}
                              </h4>
                              <span className="test-card-id">
                                {mockData.automationCoverage.fullCoverageTest.id}
                              </span>
                            </div>
                            <button type="button" className="test-card-menu">
                              ⋯
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="coverage-section">
                      <div className="test-card">
                        <div className="coverage-header">
                          <PartialCoverageIcon />
                          <span className="coverage-title">Partial coverage tests</span>
                          <button type="button" className="partial-toggle-button" onClick={() => setPartialTestsExpanded(!partialTestsExpanded)}>
                            <span>PARTIAL IN TOTAL</span>
                            <span className={\`toggle-icon \${partialTestsExpanded ? 'expanded' : ''}\`}>
                              <ChevronDownDropdownIcon />
                            </span>
                          </button>
                        </div>
                        {partialTestsExpanded && <div className="test-cards">
                            {mockData.automationCoverage.partialCoverageTests.map((test, index) => <div key={index} className="test-card-content">
                                <div className="test-card-content-left">
                                  <h4 className="test-card-title">{test.title}</h4>
                                  <span className="test-card-id">{test.id}</span>
                                </div>
                                <button type="button" className="test-card-menu">
                                  ⋯
                                </button>
                              </div>)}
                          </div>}
                      </div>
                    </div>
                  </>}
              </div>

              <div>
                <div className="section-header" onClick={() => setTagsExpanded(!tagsExpanded)}>
                  <div className="section-header-left">
                    <span className={\`section-expand-icon \${tagsExpanded ? 'expanded' : 'collapsed'}\`}>
                      <ChevronDownDropdownIcon />
                    </span>
                    <h3 className="section-title">Tags</h3>
                  </div>
                </div>
                {tagsExpanded && <div className="tags-section">
                    <div className="tags-wrapper">
                      {mockData.tags.map((tag, index) => <div key={index} className="tag-wrapper">
                          <TagIcon />
                          <span className="tag">{tag}</span>
                        </div>)}
                    </div>
                    <Button variant="text" className="show-all-tags-button">
                      Show all
                    </Button>
                  </div>}
              </div>

              <div>
                <div className="section-header" onClick={() => setScenarioExpanded(!scenarioExpanded)}>
                  <div className="section-header-left">
                    <span className={\`section-expand-icon \${scenarioExpanded ? 'expanded' : 'collapsed'}\`}>
                      <ChevronDownDropdownIcon />
                    </span>
                    <h3 className="section-title">Scenario</h3>
                  </div>
                </div>
                {scenarioExpanded && <div className="scenario-box">
                    <div className="scenario-title">Precondition</div>
                    <div className="scenario-text">{mockData.scenario.precondition}</div>
                  </div>}
              </div>
            </div>} footerComponent={<div className="footer-wrapper">
              <button type="button" className="footer-menu-button">
                ⋯
              </button>
              <div className="footer-actions">
                <Button>Details & Versions</Button>
                <Button>Add to Test Plan</Button>
              </div>
            </div>} />
      </div>;
  }
} satisfies Story`,...(F=(L=j.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var E,O,k;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [filters, setFilters] = useState(INITIAL_FILTERS);
    type Filters = typeof INITIAL_FILTERS;
    const updateFilter = <K extends keyof Filters,>(key: K) => (value: string | number | boolean | (string | number | boolean)[]) => {
      setFilters(prev => ({
        ...prev,
        [key]: String(value)
      }));
    };
    const handleClearFilters = () => setFilters(INITIAL_FILTERS);
    return <div>
        <div className="control-wrapper">
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close Panel' : 'Open Panel'}
          </Button>
        </div>
        <SidePanel className="example-2" isOpen={isOpen} onClose={() => setIsOpen(false)} title="Filter" contentComponent={<div className="filter-content">
              <div className="filter-field">
                <FieldLabel>Status</FieldLabel>
                <Dropdown value={filters.status} onChange={updateFilter('status')} options={FILTER_OPTIONS.status} placeholder="Select test status" />
              </div>

              <div className="filter-field">
                <FieldLabel>Defect type</FieldLabel>
                <Dropdown value={filters.defectType} onChange={updateFilter('defectType')} options={FILTER_OPTIONS.defectType} placeholder="Select defect type" />
              </div>

              <div className="filter-field">
                <FieldLabel>Start time</FieldLabel>
                <Dropdown value={filters.startTime} onChange={updateFilter('startTime')} options={FILTER_OPTIONS.startTime} />
              </div>

              <div className="filter-field">
                <FieldLabel>Test attributes</FieldLabel>
                <Button variant="text" className="add-attribute-button">
                  <PlusIcon /> Add Attribute
                </Button>
              </div>

              <div className="filter-field">
                <FieldLabel>Test Description</FieldLabel>
                <div className="filter-field-group">
                  <Dropdown value={filters.testDescOperator} onChange={updateFilter('testDescOperator')} options={FILTER_OPTIONS.textOperator} className="operator-dropdown" />
                  <FieldText className="group-field-text" value={filters.testDescription} onChange={e => updateFilter('testDescription')(e.target.value)} placeholder="Enter description" />
                </div>
              </div>

              <div className="filter-field">
                <FieldLabel>Defect comment</FieldLabel>
                <div className="filter-field-group">
                  <Dropdown value={filters.defectCommentOperator} onChange={updateFilter('defectCommentOperator')} options={FILTER_OPTIONS.textOperator} className="operator-dropdown" />
                  <FieldText className="group-field-text" value={filters.defectComment} onChange={e => updateFilter('defectComment')(e.target.value)} placeholder="Enter comment" />
                </div>
              </div>

              <div className="filter-field">
                <FieldLabel>Issue in BTS</FieldLabel>
                <div className="filter-field-group">
                  <Dropdown value={filters.issueOperator} onChange={updateFilter('issueOperator')} options={FILTER_OPTIONS.issueOperator} className="operator-dropdown" />
                  <FieldText className="group-field-text" value={filters.issueBTS} onChange={e => updateFilter('issueBTS')(e.target.value)} placeholder="Enter issue in BTS" />
                </div>
              </div>

              <div className="filter-field">
                <FieldLabel>Method type</FieldLabel>
                <Dropdown value={filters.methodType} onChange={updateFilter('methodType')} options={FILTER_OPTIONS.methodType} placeholder="Select type" />
              </div>

              <div className="filter-field">
                <FieldLabel>Retry</FieldLabel>
                <Dropdown value={filters.retry} onChange={updateFilter('retry')} options={FILTER_OPTIONS.retry} placeholder="Select state" />
              </div>

              <div className="filter-field">
                <FieldLabel>Pattern name</FieldLabel>
                <Dropdown value={filters.patternName} onChange={updateFilter('patternName')} options={FILTER_OPTIONS.pattern} placeholder="Select pattern" />
              </div>
            </div>} footerComponent={<div className="filter-footer">
              <Button variant="text" className="clear-filters-button" onClick={handleClearFilters}>
                Clear all filters
              </Button>
              <div className="filter-footer-actions">
                <Button variant="ghost" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button>Apply</Button>
              </div>
            </div>} />
      </div>;
  }
} satisfies Story`,...(k=(O=b.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const He=["Example1","Example2"];export{j as Example1,b as Example2,He as __namedExportsOrder,Ve as default};
