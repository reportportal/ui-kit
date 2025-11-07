import{j as e}from"./jsx-runtime-3169928d.js";import{r as u}from"./index-d33a4676.js";import{c as _}from"./bind-f5c6fce5.js";import{S as B}from"./close-3561dacf.js";import{B as D}from"./baseIconButton-22d0e691.js";import{B as r}from"./button-1ebb3b4f.js";import{B as P}from"./breadcrumbs-9e45e064.js";import{D as d}from"./dropdown-dfa3bda7.js";import{F as w}from"./fieldText-930ee862.js";import{F as o}from"./fieldLabel-465f57b8.js";import{S as g}from"./chevronDownDropdown-3c901902.js";import{S as R}from"./copy-ba7a7be8.js";import{S as V}from"./info-85178786.js";import{S as E}from"./plus-ca4f99ed.js";import"./popover-3f7be0ed.js";import"./floating-ui.react-7da7fc58.js";import"./floating-ui.react-dom-4a121add.js";import"./index-f454028f.js";import"./floatingUi-59569704.js";import"./meatballMenu-3f4bf33c.js";import"./tree-761071f3.js";import"./downshift.esm-2bc4018c.js";import"./tslib.es6-aa9d969b.js";import"./index-89e66079.js";import"./useOnClickOutside-9a420776.js";import"./keyCodes-e5060420.js";import"./dropdown-a2b64102.js";import"./checkbox-24bb629b.js";import"./clear-04fd327c.js";import"./openEye-29ae22c4.js";import"./spinLoader-8fb5022b.js";import"./maxValueDisplay-9147cf24.js";const H="_active_tzacv_15",M="_header_tzacv_35",Z="_title_tzacv_59",q="_description_tzacv_70",z="_content_tzacv_79",$="_footer_tzacv_86",W="_divider_tzacv_92",K={"side-panel":"_side-panel_tzacv_1",active:H,"side-right":"_side-right_tzacv_19","side-left":"_side-left_tzacv_27","header-section":"_header-section_tzacv_35",header:M,"header-content":"_header-content_tzacv_51","close-button":"_close-button_tzacv_55",title:Z,description:q,content:z,footer:$,divider:W},c=_.bind(K),T=({className:n,title:i,descriptionComponent:a,headerComponent:h,contentComponent:t,footerComponent:x,top:s=0,side:N="right",isOpen:m=!0,onClose:f,closeButtonAriaLabel:v="Close panel"})=>{const C=u.useId(),A=()=>{f==null||f()};return e.jsxs("aside",{className:c("side-panel",`side-${N}`,{active:m},n),role:"dialog","aria-modal":"true","aria-hidden":!m,"aria-labelledby":i?C:void 0,style:{top:s,height:`calc(100vh - ${s}px)`},tabIndex:-1,children:[e.jsxs("div",{className:c("header-section"),children:[(h||i)&&e.jsxs("div",{className:c("header"),children:[i?e.jsx("span",{id:C,className:c("title"),children:i}):h,f&&e.jsx(D,{className:c("close-button"),onClick:A,"aria-label":v,children:e.jsx(B,{})})]}),a]}),e.jsx("div",{className:c("divider")}),t&&e.jsx("div",{className:c("content"),children:t}),x&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:c("divider")}),e.jsx("div",{className:c("footer"),children:x})]})]})};T.__docgenInfo={description:"",methods:[],displayName:"SidePanel",props:{className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},headerComponent:{required:!1,tsType:{name:"ReactNode"},description:""},descriptionComponent:{required:!1,tsType:{name:"ReactNode"},description:""},contentComponent:{required:!1,tsType:{name:"ReactNode"},description:""},footerComponent:{required:!1,tsType:{name:"ReactNode"},description:""},top:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeButtonAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Close panel'",computed:!1}}}};const Be={title:"Layout/SidePanel",component:T,parameters:{layout:"fullscreen"},tags:["autodocs"]},U=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.3763 5.66784C5.55975 5.46145 5.87579 5.44286 6.08218 5.62632L8.33218 7.62632C8.43893 7.7212 8.5 7.85721 8.5 8.00002C8.5 8.14284 8.43893 8.27884 8.33218 8.37373L6.08218 10.3737C5.87579 10.5572 5.55975 10.5386 5.3763 10.3322C5.19284 10.1258 5.21143 9.80978 5.41782 9.62632L6.6849 8.50002H0.5C0.223858 8.50002 0 8.27617 0 8.00002C0 7.72388 0.223858 7.50002 0.5 7.50002H6.6849L5.41782 6.37373C5.21143 6.19027 5.19284 5.87423 5.3763 5.66784Z",fill:"#A2AAB5"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.29289 1.29169C2.48043 1.10416 2.73478 0.9988 3 0.9988H6.33331C6.5482 0.999684 6.75716 1.06934 6.9296 1.19757L6.93079 1.19845L8.6671 2.99879L8.6706 3.00002H14C14.2652 3.00002 14.5196 3.10538 14.7071 3.29291C14.8946 3.48045 15 3.7348 15 4.00002V13.0563C15 13.3066 14.9006 13.5466 14.7236 13.7236C14.5466 13.9006 14.3065 14 14.0562 14H3C2.73478 14 2.48043 13.8947 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V10.4C2 10.1791 2.17909 10 2.4 10H2.6C2.82091 10 3 10.1791 3 10.4V13H14V4.00002H8.66669C8.4518 3.99914 8.24284 3.92948 8.0704 3.80125L8.06921 3.80036L6.3329 2.00003L6.3294 1.9988H3V5.60002C3 5.82093 2.82091 6.00002 2.6 6.00002H2.40001C2.1791 6.00002 2.00001 5.82093 2.00001 5.60002L2 1.9988C2 1.73358 2.10536 1.47923 2.29289 1.29169Z",fill:"#A2AAB5"})]}),G=()=>e.jsx("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.242 1.80934L5.18143 8.91762C5.59849 8.50544 6.09205 8.14104 6.82202 7.93149C7.82055 7.64485 9.197 7.66454 11.3454 8.07158C12.4452 8.27995 13.3385 7.61018 14.014 6.48698C14.5198 5.64602 14.8292 4.6584 14.9494 3.91627C13.8151 4.14357 11.9792 4.28755 10.24 3.73834C9.00223 3.3475 8.4433 2.67338 7.99528 2.13303C7.92186 2.04447 7.85142 1.95951 7.78145 1.87998C7.53649 1.60152 7.29737 1.3811 6.94888 1.22104C6.59654 1.05921 6.09091 0.940619 5.29042 0.940619C3.13991 0.940619 1.82103 1.46112 1.242 1.80934ZM5.67747 9.79934L7.85316 13.5467L6.98313 14L4.63799 9.96078L0 1.59185L0.258347 1.34712C0.806364 0.827978 2.48358 0 5.29042 0C6.1921 0 6.85672 0.133362 7.38208 0.374655C7.91128 0.617719 8.25728 0.951592 8.54425 1.27781C8.63169 1.37721 8.7135 1.4749 8.79341 1.57032C9.23165 2.09361 9.61288 2.54883 10.554 2.84599C12.4617 3.4484 14.5586 3.09481 15.3465 2.84599L16 2.63965V3.29217C16 4.18543 15.6239 5.71035 14.8768 6.9526C14.1376 8.18167 12.9031 9.32595 11.1507 8.99393C9.04366 8.59473 7.86683 8.61442 7.10998 8.83169C6.48714 9.01048 6.10556 9.33351 5.67747 9.79934Z",fill:"#A2AAB5"})}),X=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.57376 12.7614C-1.05695 9.21334 -0.313304 4.20447 3.23474 1.57376C6.78279 -1.05695 11.7917 -0.313304 14.4224 3.23474C17.0531 6.78279 16.3094 11.7917 12.7614 14.4224C11.3366 15.4788 9.67477 15.9914 8.02675 15.9961C7.75061 15.9969 7.52612 15.7736 7.52534 15.4975C7.52455 15.2214 7.74778 14.9969 8.02392 14.9961C9.46566 14.992 10.9182 14.5441 12.1658 13.6191C15.2702 11.3173 15.9209 6.93475 13.6191 3.83034C11.3173 0.725934 6.93475 0.0752695 3.83034 2.37704C0.732318 4.67408 0.0779557 9.04337 2.36288 12.1466L3.80277 10.7067L4.59827 14.9734L0.331574 14.1779L1.65878 12.8507C1.62753 12.8251 1.59891 12.7953 1.57376 12.7614ZM10.7267 8.832C11.3204 8.43618 11.3204 7.56372 10.7267 7.1679L7.52943 5.03645C6.86487 4.59342 5.97473 5.06981 5.97473 5.8685V10.1315C5.97473 10.9302 6.86488 11.4066 7.52944 10.9635L10.7267 8.832Z",fill:"#A2AAB5"})}),Y=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M8.00004 4.03162C7.7239 4.03162 7.50004 4.25547 7.50004 4.53162V8.53162C7.50004 8.68646 7.57043 8.82487 7.68095 8.91658C7.70485 8.9429 7.73163 8.97059 7.76144 8.99982L9.6822 10.9206C9.87746 11.1158 10.194 11.1158 10.3893 10.9206C10.5846 10.7253 10.5846 10.4087 10.3893 10.2135L8.50004 8.3242V4.53162C8.50004 4.25547 8.27618 4.03162 8.00004 4.03162Z",fill:"#A2AAB5"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z",fill:"#A2AAB5"})]}),J=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"test-card-icon",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2ZM3 1C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1H3Z",fill:"#A2AAB5"}),e.jsx("path",{d:"M3 3.5C3 3.22386 3.22386 3 3.5 3H12.5C12.7761 3 13 3.22386 13 3.5V12.5C13 12.7761 12.7761 13 12.5 13H3.5C3.22386 13 3 12.7761 3 12.5V3.5Z",fill:"#A2AAB5"})]}),Q=()=>e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 1H2C1.44772 1 1 1.44772 1 2V12C1 12.5523 1.44772 13 2 13H12C12.5523 13 13 12.5523 13 12V2C13 1.44772 12.5523 1 12 1ZM2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14H12C13.1046 14 14 13.1046 14 12V2C14 0.895431 13.1046 0 12 0H2Z",fill:"#A2AAB5"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5 12C11.7761 12 12 11.7761 12 11.5V2L2 12H11.5Z",fill:"#A2AAB5"})]}),ee=()=>e.jsx("svg",{width:"12",height:"20",viewBox:"0 0 12 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M11.5962 0.5H11.1933C10.1679 0.5 9.18169 0.893774 8.43829 1.6L1.1225 8.55C0.292501 9.3385 0.2925 10.6615 1.1225 11.45L8.43829 18.4C9.18169 19.1062 10.1679 19.5 11.1933 19.5H11.5962",stroke:"#C1C7D0"})}),ae=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.5 10L8.00018 6.09976L14.5 10",stroke:"#DC5959",strokeWidth:"2.8",strokeLinecap:"round"})}),te=n=>Array.from({length:n},(i,a)=>({title:"Folder Name",link:{pathname:`/folder-${a+1}`}})),l={breadcrumbs:te(6),header:{title:"Login Process Evaluation Zeta",version:"1.0 Stable GTX",availableCount:9,id:"a3f1e2b4-6c7d-4e8a-9f3b-2c1d3e4f5a6b",date:"2024-03-26 12:45:42",duration:"16 min"},automationCoverage:{fullCoverageTest:{id:"TCID-2023",title:"Complete scenario validation"},partialCoverageTests:[{id:"TCID-3372",title:"User login validation"},{id:"TCID-1122",title:"Password Reset Functionality Test"}]},tags:["ui bug","performance test","ios functionality ve...","security check","battery performanc...","cross-platform effi...","user flow","api validation","data integrity"],scenario:{precondition:"Ideally you should have a test method for each separate unit of work so you can always immediately view where things are going wrong. In this example there is a basic method called getUserById() which will return a user and there..."}},j={render:()=>{const[n,i]=u.useState(!0),[a,h]=u.useState(!1),[t,x]=u.useState(!1),[s,N]=u.useState(!1),[m,f]=u.useState(!1);return e.jsxs("div",{children:[e.jsx("div",{className:"control-wrapper",children:e.jsx(r,{onClick:()=>i(!n),children:n?"Close Panel":"Open Panel"})}),e.jsx(T,{className:"example-1",isOpen:n,onClose:()=>i(!1),headerComponent:e.jsxs("div",{className:"header-wrapper",children:[e.jsx(ae,{}),e.jsx("h2",{className:"header-title",children:l.header.title})]}),descriptionComponent:e.jsxs("div",{className:"description-wrapper",children:[e.jsxs("div",{className:"breadcrumbs-wrapper",children:[e.jsx(U,{}),e.jsx(P,{descriptors:l.breadcrumbs})]}),e.jsxs("div",{className:"info-row",children:[e.jsxs("div",{className:"info-group",children:[e.jsx(G,{}),e.jsx("span",{className:"text-primary",children:l.header.version}),e.jsxs("span",{className:"text-secondary",children:["(",l.header.availableCount," available)"]})]}),e.jsxs("div",{className:"info-group",children:[e.jsx("span",{className:"text-label",children:"ID:"}),e.jsx("span",{className:"text-value",children:l.header.id}),e.jsx("button",{type:"button",className:"icon-button",children:e.jsx(R,{})})]})]}),e.jsxs("div",{className:"info-row",children:[e.jsxs("div",{className:"info-group",children:[e.jsx(X,{}),e.jsx("span",{className:"text-value",children:l.header.date})]}),e.jsxs("div",{className:"info-group",children:[e.jsx(Y,{}),e.jsx("span",{className:"text-value",children:l.header.duration})]})]})]}),contentComponent:e.jsxs("div",{className:"content-wrapper",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"section-header",onClick:()=>x(!t),children:[e.jsxs("div",{className:"section-header-left",children:[e.jsx("span",{className:`section-expand-icon ${t?"expanded":"collapsed"}`,children:e.jsx(g,{})}),e.jsx("h3",{className:"section-title",children:"Automation coverage"}),e.jsx(V,{})]}),e.jsxs(r,{variant:"text",onClick:v=>v.stopPropagation(),className:"bind-autotest-button",children:[e.jsx(E,{})," ",e.jsx("span",{children:"Bind Autotest"})]})]}),t&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"automation-coverage-content",children:e.jsx("div",{className:"coverage-section",children:e.jsxs("div",{className:"test-card",children:[e.jsxs("div",{className:"coverage-header",children:[e.jsx(J,{}),e.jsx("span",{className:"coverage-title",children:"Full coverage tests"})]}),e.jsxs("div",{className:"test-card-content",children:[e.jsxs("div",{className:"test-card-content-left",children:[e.jsx("h4",{className:"test-card-title",children:l.automationCoverage.fullCoverageTest.title}),e.jsx("span",{className:"test-card-id",children:l.automationCoverage.fullCoverageTest.id})]}),e.jsx("button",{type:"button",className:"test-card-menu",children:"⋯"})]})]},l.automationCoverage.fullCoverageTest.id)})}),e.jsx("div",{className:"coverage-section",children:e.jsxs("div",{className:"test-card",children:[e.jsxs("div",{className:"coverage-header",children:[e.jsx(Q,{}),e.jsx("span",{className:"coverage-title",children:"Partial coverage tests"}),e.jsxs("button",{type:"button",className:"partial-toggle-button",onClick:()=>h(!a),children:[e.jsx("span",{children:"PARTIAL IN TOTAL"}),e.jsx("span",{className:`toggle-icon ${a?"expanded":""}`,children:e.jsx(g,{})})]})]}),a&&e.jsx("div",{className:"test-cards",children:l.automationCoverage.partialCoverageTests.map((v,C)=>e.jsxs("div",{className:"test-card-content",children:[e.jsxs("div",{className:"test-card-content-left",children:[e.jsx("h4",{className:"test-card-title",children:v.title}),e.jsx("span",{className:"test-card-id",children:v.id})]}),e.jsx("button",{type:"button",className:"test-card-menu",children:"⋯"})]},C))})]})})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"section-header",onClick:()=>N(!s),children:e.jsxs("div",{className:"section-header-left",children:[e.jsx("span",{className:`section-expand-icon ${s?"expanded":"collapsed"}`,children:e.jsx(g,{})}),e.jsx("h3",{className:"section-title",children:"Tags"})]})}),s&&e.jsxs("div",{className:"tags-section",children:[e.jsx("div",{className:"tags-wrapper",children:l.tags.map((v,C)=>e.jsxs("div",{className:"tag-wrapper",children:[e.jsx(ee,{}),e.jsx("span",{className:"tag",children:v})]},C))}),e.jsx(r,{variant:"text",className:"show-all-tags-button",children:"Show all"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"section-header",onClick:()=>f(!m),children:e.jsxs("div",{className:"section-header-left",children:[e.jsx("span",{className:`section-expand-icon ${m?"expanded":"collapsed"}`,children:e.jsx(g,{})}),e.jsx("h3",{className:"section-title",children:"Scenario"})]})}),m&&e.jsxs("div",{className:"scenario-box",children:[e.jsx("div",{className:"scenario-title",children:"Precondition"}),e.jsx("div",{className:"scenario-text",children:l.scenario.precondition})]})]})]}),footerComponent:e.jsxs("div",{className:"footer-wrapper",children:[e.jsx("button",{type:"button",className:"footer-menu-button",children:"⋯"}),e.jsxs("div",{className:"footer-actions",children:[e.jsx(r,{children:"Details & Versions"}),e.jsx(r,{children:"Add to Test Plan"})]})]})})]})}},p={status:[{value:"open",label:"Open"},{value:"in_progress",label:"In Progress"},{value:"resolved",label:"Resolved"},{value:"closed",label:"Closed"}],defectType:[{value:"bug",label:"Bug"},{value:"improvement",label:"Improvement"},{value:"task",label:"Task"}],startTime:[{value:"Any",label:"Any"},{value:"today",label:"Today"},{value:"yesterday",label:"Yesterday"},{value:"last_week",label:"Last Week"},{value:"last_month",label:"Last Month"}],textOperator:[{value:"Contains",label:"Contains"},{value:"Equals",label:"Equals"},{value:"StartsWith",label:"Starts With"},{value:"EndsWith",label:"Ends With"}],issueOperator:[{value:"All",label:"All"},{value:"Contains",label:"Contains"},{value:"Equals",label:"Equals"}],methodType:[{value:"manual",label:"Manual"},{value:"automated",label:"Automated"},{value:"semi_automated",label:"Semi-automated"}],retry:[{value:"none",label:"None"},{value:"once",label:"Once"},{value:"twice",label:"Twice"}],pattern:[{value:"pattern1",label:"Pattern 1"},{value:"pattern2",label:"Pattern 2"},{value:"pattern3",label:"Pattern 3"}]},y={status:"",defectType:"",startTime:"Any",testDescOperator:"Contains",testDescription:"",defectCommentOperator:"Contains",defectComment:"",issueOperator:"All",issueBTS:"",methodType:"",retry:"",patternName:""},b={render:()=>{const[n,i]=u.useState(!0),[a,h]=u.useState(y),t=s=>N=>{h(m=>({...m,[s]:String(N)}))},x=()=>h(y);return e.jsxs("div",{children:[e.jsx("div",{className:"control-wrapper",children:e.jsx(r,{onClick:()=>i(!n),children:n?"Close Panel":"Open Panel"})}),e.jsx(T,{className:"example-2",isOpen:n,onClose:()=>i(!1),title:"Filter",contentComponent:e.jsxs("div",{className:"filter-content",children:[e.jsxs("div",{className:"filter-field",children:[e.jsx(o,{children:"Status"}),e.jsx(d,{value:a.status,onChange:t("status"),options:p.status,placeholder:"Select test status"})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(o,{children:"Defect type"}),e.jsx(d,{value:a.defectType,onChange:t("defectType"),options:p.defectType,placeholder:"Select defect type"})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(o,{children:"Start time"}),e.jsx(d,{value:a.startTime,onChange:t("startTime"),options:p.startTime})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(o,{children:"Test attributes"}),e.jsxs(r,{variant:"text",className:"add-attribute-button",children:[e.jsx(E,{})," Add Attribute"]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(o,{children:"Test Description"}),e.jsxs("div",{className:"filter-field-group",children:[e.jsx(d,{value:a.testDescOperator,onChange:t("testDescOperator"),options:p.textOperator,className:"operator-dropdown"}),e.jsx(w,{className:"group-field-text",value:a.testDescription,onChange:s=>t("testDescription")(s.target.value),placeholder:"Enter description"})]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(o,{children:"Defect comment"}),e.jsxs("div",{className:"filter-field-group",children:[e.jsx(d,{value:a.defectCommentOperator,onChange:t("defectCommentOperator"),options:p.textOperator,className:"operator-dropdown"}),e.jsx(w,{className:"group-field-text",value:a.defectComment,onChange:s=>t("defectComment")(s.target.value),placeholder:"Enter comment"})]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(o,{children:"Issue in BTS"}),e.jsxs("div",{className:"filter-field-group",children:[e.jsx(d,{value:a.issueOperator,onChange:t("issueOperator"),options:p.issueOperator,className:"operator-dropdown"}),e.jsx(w,{className:"group-field-text",value:a.issueBTS,onChange:s=>t("issueBTS")(s.target.value),placeholder:"Enter issue in BTS"})]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(o,{children:"Method type"}),e.jsx(d,{value:a.methodType,onChange:t("methodType"),options:p.methodType,placeholder:"Select type"})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(o,{children:"Retry"}),e.jsx(d,{value:a.retry,onChange:t("retry"),options:p.retry,placeholder:"Select state"})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx(o,{children:"Pattern name"}),e.jsx(d,{value:a.patternName,onChange:t("patternName"),options:p.pattern,placeholder:"Select pattern"})]})]}),footerComponent:e.jsxs("div",{className:"filter-footer",children:[e.jsx(r,{variant:"text",className:"clear-filters-button",onClick:x,children:"Clear all filters"}),e.jsxs("div",{className:"filter-footer-actions",children:[e.jsx(r,{variant:"ghost",onClick:()=>i(!1),children:"Cancel"}),e.jsx(r,{children:"Apply"})]})]})})]})}};var I,S,L;j.parameters={...j.parameters,docs:{...(I=j.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(S=j.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var F,O,k;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(O=b.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const De=["Example1","Example2"];export{j as Example1,b as Example2,De as __namedExportsOrder,Be as default};
