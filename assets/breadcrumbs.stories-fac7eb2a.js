import{j as e}from"./jsx-runtime-3169928d.js";import{c as B}from"./bind-f5c6fce5.js";import{r as i}from"./index-d33a4676.js";import{P as te}from"./popover-e0278083.js";import{S as me}from"./meatballMenu-3f4bf33c.js";import"./floating-ui.react-7da7fc58.js";import"./floating-ui.react-dom-4a121add.js";import"./index-f454028f.js";const ue=t=>i.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M2 10C2 10.764 2.24187 11.5133 2.69535 12.0801C3.15115 12.6499 3.79637 13 4.5 13H5.9C5.86913 12.8384 5.85293 12.6712 5.85293 12.5C5.85293 12.3288 5.86913 12.1616 5.89999 12H4.5C4.14277 12 3.77057 11.8234 3.47622 11.4554C3.17956 11.0846 3 10.5621 3 10V5.40311C3.41945 5.77926 3.94131 6 4.5 6H5.89996C5.8691 5.83844 5.85289 5.67122 5.85289 5.49998C5.85289 5.32876 5.86909 5.16155 5.89996 5L4.5 5C4.14277 5 3.77057 4.82335 3.47622 4.45542C3.17956 4.08459 3 3.56203 3 2.99994L3 1.5C3 1.22386 2.77614 1 2.5 1C2.22386 1 2 1.22386 2 1.5L2 10Z",fill:"#A2AAB5"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.20583 3.99998H11.5C12.1909 3.99998 12.8529 4.61358 12.8529 5.49998C12.8529 6.38639 12.1909 6.99998 11.5 6.99998H8.20583C7.51487 6.99998 6.85289 6.38639 6.85289 5.49998C6.85289 4.61358 7.51487 3.99998 8.20583 3.99998ZM8.20587 11H11.5C12.1909 11 12.8529 11.6136 12.8529 12.5C12.8529 13.3864 12.1909 14 11.5 14H8.20587C7.51491 14 6.85293 13.3864 6.85293 12.5C6.85293 11.6136 7.51491 11 8.20587 11ZM5.89996 5C6.11796 3.85887 7.06749 2.99998 8.20583 2.99998H11.5C12.7994 2.99998 13.8529 4.11927 13.8529 5.49998C13.8529 6.8807 12.7994 7.99998 11.5 7.99998H8.20583C7.0675 7.99998 6.11798 7.14111 5.89996 6C5.8691 5.83844 5.85289 5.67122 5.85289 5.49998C5.85289 5.32876 5.86909 5.16155 5.89996 5ZM5.89999 12C6.118 10.8589 7.06753 9.99998 8.20587 9.99998H11.5C12.7995 9.99998 13.8529 11.1193 13.8529 12.5C13.8529 13.8807 12.7995 15 11.5 15H8.20587C7.06754 15 6.11801 14.1411 5.9 13H6C6.27614 13 6.5 12.7761 6.5 12.5C6.5 12.2239 6.27614 12 6 12H5.89999Z",fill:"#A2AAB5"}),i.createElement("path",{d:"M6.5 12.5C6.5 12.2239 6.27614 12 6 12H5.89999C5.86913 12.1616 5.85293 12.3288 5.85293 12.5C5.85293 12.6712 5.86913 12.8384 5.9 13H6C6.27614 13 6.5 12.7761 6.5 12.5Z",fill:"#A2AAB5"})),le=i.createContext(void 0),ne=({children:t,LinkComponent:l})=>e.jsx(le.Provider,{value:{LinkComponent:l},children:t});ne.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},LinkComponent:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
  to: object | string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}>`,elements:[{name:"signature",type:"object",raw:`{
  to: object | string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}`,signature:{properties:[{key:"to",value:{name:"union",raw:"object | string",elements:[{name:"object"},{name:"string"}],required:!0}},{key:"className",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}]},description:""}}};const pe=()=>{const t=i.useContext(le);if(t===void 0)throw new Error("useBreadcrumbsContext must be used within a BreadcrumbsProvider");return t},ve="_breadcrumb_1cva8_1",he="_link_1cva8_5",_e="_dark_1cva8_30",ke={breadcrumb:ve,link:he,"breadcrumb-text":"_breadcrumb-text_1cva8_10",dark:_e},h=B.bind(ke),m=({titleTailNumChars:t=8,descriptor:{title:l,link:n,onClick:s},isClickable:w=!0,variant:a="default"})=>{const{LinkComponent:o}=pe(),u=i.useRef(null),[p,v]=i.useState(null);i.useEffect(()=>{if(u.current){const{offsetWidth:d,scrollWidth:oe,dataset:de}=u.current;if(d<oe){const S=typeof l=="string"?l:"";de.tail=S.slice(S.length-t),v(S)}}},[l,t]);const r=e.jsx("div",{ref:u,className:h("breadcrumb-text",a),children:l});return e.jsx("div",{className:h("breadcrumb",a),title:p||void 0,"data-testid":"breadcrumb",children:w?o&&n?e.jsx(o,{className:h("link"),to:n,onClick:s,children:r}):n?e.jsx("a",{className:h("link"),href:typeof n=="string"?n:"#",onClick:s,children:r}):e.jsx("button",{type:"button",className:h("link"),onClick:s,children:r}):r})};m.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{titleTailNumChars:{defaultValue:{value:"8",computed:!1},required:!1},isClickable:{defaultValue:{value:"true",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1}}};const be={"hidden-breadcrumbs-trigger":"_hidden-breadcrumbs-trigger_14kki_1","hidden-breadcrumbs-content":"_hidden-breadcrumbs-content_14kki_8","hidden-breadcrumb-item":"_hidden-breadcrumb-item_14kki_14","level-2":"_level-2_14kki_18","level-3":"_level-3_14kki_31","level-4":"_level-4_14kki_44","level-5":"_level-5_14kki_57","level-6":"_level-6_14kki_70","level-7":"_level-7_14kki_83","level-8":"_level-8_14kki_96","level-9":"_level-9_14kki_109","level-10":"_level-10_14kki_122","level-11":"_level-11_14kki_135","level-12":"_level-12_14kki_148","level-13":"_level-13_14kki_161","level-14":"_level-14_14kki_174","level-15":"_level-15_14kki_187","level-16":"_level-16_14kki_200","level-17":"_level-17_14kki_213","level-18":"_level-18_14kki_226","level-19":"_level-19_14kki_239","level-20":"_level-20_14kki_252","level-21":"_level-21_14kki_265","level-22":"_level-22_14kki_278","level-23":"_level-23_14kki_291","level-24":"_level-24_14kki_304","level-25":"_level-25_14kki_317"},I=B.bind(be),ge=({descriptors:t})=>e.jsx("div",{className:I("hidden-breadcrumbs-content"),"data-testid":"hidden-breadcrumbs-content",children:t.map((l,n)=>e.jsx("div",{className:I("hidden-breadcrumb-item",`level-${n+1}`),children:e.jsx(m,{descriptor:l})},n))}),ae=({descriptors:t})=>e.jsx(te,{content:e.jsx(ge,{descriptors:t}),placement:"bottom-start",children:e.jsx("div",{className:I("hidden-breadcrumbs-trigger"),"data-testid":"hidden-breadcrumbs-trigger",children:e.jsx(me,{})})});ae.__docgenInfo={description:"",methods:[],displayName:"HiddenBreadcrumbs",props:{descriptors:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbDescriptor"}],raw:"BreadcrumbDescriptor[]"},description:""}}};const xe="_opened_zxn5r_1",Ce={"tree-button":"_tree-button_zxn5r_1",opened:xe,"tree-menu-node":"_tree-menu-node_zxn5r_8","tree-menu-children":"_tree-menu-children_zxn5r_9","tree-menu-item":"_tree-menu-item_zxn5r_15","level-2":"_level-2_zxn5r_19","level-3":"_level-3_zxn5r_32","level-4":"_level-4_zxn5r_45","level-5":"_level-5_zxn5r_58","level-6":"_level-6_zxn5r_71","level-7":"_level-7_zxn5r_84","level-8":"_level-8_zxn5r_97","level-9":"_level-9_zxn5r_110","level-10":"_level-10_zxn5r_123","level-11":"_level-11_zxn5r_136","level-12":"_level-12_zxn5r_149","level-13":"_level-13_zxn5r_162","level-14":"_level-14_zxn5r_175","level-15":"_level-15_zxn5r_188","level-16":"_level-16_zxn5r_201","level-17":"_level-17_zxn5r_214","level-18":"_level-18_zxn5r_227","level-19":"_level-19_zxn5r_240","level-20":"_level-20_zxn5r_253","level-21":"_level-21_zxn5r_266","level-22":"_level-22_zxn5r_279","level-23":"_level-23_zxn5r_292","level-24":"_level-24_zxn5r_305","level-25":"_level-25_zxn5r_318"},_=B.bind(Ce),fe=({descriptor:t,level:l})=>e.jsx("div",{className:_("tree-menu-item",`level-${l}`),children:e.jsx(m,{descriptor:t,variant:"dark"})}),re=(t,l)=>t.map((n,s)=>e.jsxs("div",{className:_("tree-menu-node"),children:[e.jsx(fe,{descriptor:n,level:l}),n.children&&n.children.length>0&&e.jsx("div",{className:_("tree-menu-children"),children:re(n.children,l+1)})]},s)),ie=({tree:t})=>{const[l,n]=i.useState(!1);return e.jsx(te,{content:e.jsx("div",{className:_("tree-menu"),children:re(t,1)}),placement:"bottom-start",isOpened:l,setIsOpened:n,children:e.jsx("div",{className:_("tree-button",{opened:l}),children:e.jsx(ue,{})})})};ie.__docgenInfo={description:"",methods:[],displayName:"Tree",props:{tree:{required:!0,tsType:{name:"Array",elements:[{name:"TreeDescriptor"}],raw:"TreeDescriptor[]"},description:""}}};const Te="_breadcrumbs_pxlum_1",ye={"breadcrumbs-container":"_breadcrumbs-container_pxlum_1",breadcrumbs:Te,"breadcrumb-item":"_breadcrumb-item_pxlum_15","hidden-breadcrumbs":"_hidden-breadcrumbs_pxlum_23","back-button":"_back-button_pxlum_40","breadcrumbs-2":"_breadcrumbs-2_pxlum_49","breadcrumbs-3":"_breadcrumbs-3_pxlum_52","breadcrumbs-4":"_breadcrumbs-4_pxlum_55","breadcrumbs-5":"_breadcrumbs-5_pxlum_58","breadcrumbs-6-plus":"_breadcrumbs-6-plus_pxlum_58"},c=B.bind(ye),j=5,se=({descriptors:t=[],dataAutomationId:l,LinkComponent:n,tree:s,isBackButton:w=!1})=>{const a=[...t],o=a.shift(),u=r=>`breadcrumbs-${r>5?"6-plus":r}`,p=(r=>({1:55,2:24,3:18,4:13})[r]??12)(t.length);let v=[];return a.length>j-1&&(v=a.splice(0,a.length-(j-1))),e.jsx(ne,{LinkComponent:n,children:e.jsx("div",{className:c("breadcrumbs-container"),"data-automation-id":l,"data-testid":l,children:w&&o?e.jsx("div",{className:c("breadcrumbs"),children:e.jsx("div",{className:c("breadcrumb-item","back-button"),"data-testid":"back-breadcrumb",children:e.jsx(m,{descriptor:o,titleTailNumChars:p})})}):e.jsxs(e.Fragment,{children:[s&&e.jsx("div",{className:c("tree"),children:e.jsx(ie,{tree:s})}),e.jsxs("div",{className:c("breadcrumbs",u(t.length)),children:[o&&e.jsx("div",{className:c("breadcrumb-item"),children:e.jsx(m,{descriptor:o,titleTailNumChars:p,isClickable:!!a.length})}),v.length>0&&e.jsx("div",{className:c("breadcrumb-item","hidden-breadcrumbs"),children:e.jsx(ae,{descriptors:v})}),a.length>0&&a.map((r,d)=>e.jsx("div",{className:c("breadcrumb-item"),children:e.jsx(m,{descriptor:r,titleTailNumChars:p,isClickable:d!==a.length-1})},d))]})]})})})};se.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{descriptors:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbDescriptor"}],raw:"BreadcrumbDescriptor[]"},description:"",defaultValue:{value:"[]",computed:!1}},LinkComponent:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
  to: object | string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}>`,elements:[{name:"signature",type:"object",raw:`{
  to: object | string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}`,signature:{properties:[{key:"to",value:{name:"union",raw:"object | string",elements:[{name:"object"},{name:"string"}],required:!0}},{key:"className",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}]},description:""},tree:{required:!1,tsType:{name:"Array",elements:[{name:"TreeDescriptor"}],raw:"TreeDescriptor[]"},description:""},dataAutomationId:{required:!1,tsType:{name:"string"},description:""},isBackButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ae={title:"Components/Breadcrumbs",component:se,parameters:{layout:"centered"},tags:["autodocs"]},k=[{title:"Level 1",link:{pathname:"/level-1"}},{title:"Level 2",link:{pathname:"/level-1/level-2"}},{title:"Level 3",link:{pathname:"/level-1/level-2/level-3"}},{title:"Level 4",link:{pathname:"/level-1/level-2/level-3/level-4"}},{title:"Level 5",link:{pathname:"/level-1/level-2/level-3/level-4/level-5"}},{title:"Level 6",link:{pathname:"/level-1/level-2/level-3/level-4/level-5/level-6"}},{title:"Level 7",link:{pathname:"/level-1/level-2/level-3/level-4/level-5/level-6/level-7"}},{title:"Level 8",link:{pathname:"/level-1/level-2/level-3/level-4/level-5/level-6/level-7/level-8"}},{title:"Level 9",link:{pathname:"/level-1/level-2/level-3/level-4/level-5/level-6/level-7/level-8/level-9"}},{title:"Level 10",link:{pathname:"/level-1/level-2/level-3/level-4/level-5/level-6/level-7/level-8/level-9/level-10"}},{title:"Level 11",link:{pathname:"/level-1/level-2/level-3/level-4/level-5/level-6/level-7/level-8/level-9/level-10/level-11"}},{title:"Level 12",link:{pathname:"/level-1/level-2/level-3/level-4/level-5/level-6/level-7/level-8/level-9/level-10/level-11/level-12"}}],b={args:{descriptors:[k[0]]},parameters:{docs:{description:{story:"Displays a single breadcrumb for the current location."}}}},g={args:{descriptors:[{title:"Back",link:{pathname:"/previous-page"},onClick:()=>console.log("Back clicked")}],isBackButton:!0},parameters:{docs:{description:{story:"Displays a back button with a left-pointing arrow. Use this when you want to provide navigation back to a previous page."}}}},x={args:{descriptors:k.slice(0,3)}},C={args:{descriptors:k.slice(0,5)}},f={args:{descriptors:k.slice(0,10)}},T={args:{descriptors:[{title:"Very Long Home Page Title That Exceeds Normal Length",link:{pathname:"/"}},{title:"Another Extremely Long Section Name That Will Be Truncated",link:{pathname:"/section"}},{title:"Section Alpha with Very Long Name",link:{pathname:"/section/alpha"}},{title:"Items Section with Extended Title",link:{pathname:"/section/alpha/items"}},{title:"Item #12345 with Additional Context Information",link:{pathname:"/section/alpha/items/12345"}},{title:"Details Management Interface",link:{pathname:"/section/alpha/items/12345/details"}}]}},ce=[{title:"All Categories",link:{pathname:"/categories"},children:[{title:"Group A",link:{pathname:"/categories/group-a"},children:[{title:"Item A1",link:{pathname:"/categories/item-a1"},onClick:()=>console.log("Item A1 clicked")},{title:"Item A2",link:{pathname:"/categories/item-a2"},onClick:()=>console.log("Item A2 clicked")}]},{title:"Group B",link:{pathname:"/categories/group-b"},children:[{title:"Item B1",link:{pathname:"/categories/item-b1"},onClick:()=>console.log("Item B1 clicked")},{title:"Item B2",link:{pathname:"/categories/item-b2"},onClick:()=>console.log("Item B2 clicked")}]}]}],y={args:{descriptors:k.slice(0,3),tree:ce}},N={args:{descriptors:[{title:"Very Long Home Page Title That Exceeds Normal Length and Should Be Truncated",link:{pathname:"/"},onClick:()=>console.log("Home clicked")},{title:"Another Extremely Long Section Name That Will Be Truncated Due to Length",link:{pathname:"/section"},onClick:()=>console.log("Section clicked")},{title:"Section Alpha with Very Long Name That Exceeds Normal Limits",link:{pathname:"/section/alpha"},onClick:()=>console.log("Section Alpha clicked")},{title:"Items Section with Extended Title That Needs Truncation",link:{pathname:"/section/alpha/items"},onClick:()=>console.log("Items clicked")},{title:"Item #12345 with Additional Context Information and Long Description",link:{pathname:"/section/alpha/items/12345"},onClick:()=>console.log("Item #12345 clicked")},{title:"Details Management Interface with Extended Functionality",link:{pathname:"/section/alpha/items/12345/details"},onClick:()=>console.log("Details clicked")},{title:"Detail #789 with Comprehensive Information and Metadata",link:{pathname:"/section/alpha/items/12345/details/789"},onClick:()=>console.log("Detail #789 clicked")},{title:"Sub Items with Extended Configuration and Advanced Settings",link:{pathname:"/section/alpha/items/12345/details/789/sub-items"},onClick:()=>console.log("Sub Items clicked")},{title:"Sub Item #1 with Implementation Details and Technical Specifications",link:{pathname:"/section/alpha/items/12345/details/789/sub-items/1"},onClick:()=>console.log("Sub Item #1 clicked")},{title:"Current Sub Item Status with Real-time Data and Monitoring Information",link:{pathname:"/section/alpha/items/12345/details/789/sub-items/1/current"},onClick:()=>console.log("Current Sub Item clicked")}],tree:ce}};var L,D,A;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    descriptors: [descriptors[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a single breadcrumb for the current location.'
      }
    }
  }
}`,...(A=(D=b.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var z,R,E;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    descriptors: [{
      title: 'Back',
      link: {
        pathname: '/previous-page'
      },
      onClick: () => console.log('Back clicked')
    }],
    isBackButton: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a back button with a left-pointing arrow. Use this when you want to provide navigation back to a previous page.'
      }
    }
  }
}`,...(E=(R=g.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var H,q,M;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    descriptors: descriptors.slice(0, 3)
  }
}`,...(M=(q=x.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var V,P,W;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    descriptors: descriptors.slice(0, 5)
  }
}`,...(W=(P=C.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var $,Z,F;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    descriptors: descriptors.slice(0, 10)
  }
}`,...(F=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:F.source}}};var O,G,U;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    descriptors: [{
      title: 'Very Long Home Page Title That Exceeds Normal Length',
      link: {
        pathname: '/'
      }
    }, {
      title: 'Another Extremely Long Section Name That Will Be Truncated',
      link: {
        pathname: '/section'
      }
    }, {
      title: 'Section Alpha with Very Long Name',
      link: {
        pathname: '/section/alpha'
      }
    }, {
      title: 'Items Section with Extended Title',
      link: {
        pathname: '/section/alpha/items'
      }
    }, {
      title: 'Item #12345 with Additional Context Information',
      link: {
        pathname: '/section/alpha/items/12345'
      }
    }, {
      title: 'Details Management Interface',
      link: {
        pathname: '/section/alpha/items/12345/details'
      }
    }]
  }
}`,...(U=(G=T.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var X,J,K;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    descriptors: descriptors.slice(0, 3),
    tree: treeData
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,ee;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    descriptors: [{
      title: 'Very Long Home Page Title That Exceeds Normal Length and Should Be Truncated',
      link: {
        pathname: '/'
      },
      onClick: () => console.log('Home clicked')
    }, {
      title: 'Another Extremely Long Section Name That Will Be Truncated Due to Length',
      link: {
        pathname: '/section'
      },
      onClick: () => console.log('Section clicked')
    }, {
      title: 'Section Alpha with Very Long Name That Exceeds Normal Limits',
      link: {
        pathname: '/section/alpha'
      },
      onClick: () => console.log('Section Alpha clicked')
    }, {
      title: 'Items Section with Extended Title That Needs Truncation',
      link: {
        pathname: '/section/alpha/items'
      },
      onClick: () => console.log('Items clicked')
    }, {
      title: 'Item #12345 with Additional Context Information and Long Description',
      link: {
        pathname: '/section/alpha/items/12345'
      },
      onClick: () => console.log('Item #12345 clicked')
    }, {
      title: 'Details Management Interface with Extended Functionality',
      link: {
        pathname: '/section/alpha/items/12345/details'
      },
      onClick: () => console.log('Details clicked')
    }, {
      title: 'Detail #789 with Comprehensive Information and Metadata',
      link: {
        pathname: '/section/alpha/items/12345/details/789'
      },
      onClick: () => console.log('Detail #789 clicked')
    }, {
      title: 'Sub Items with Extended Configuration and Advanced Settings',
      link: {
        pathname: '/section/alpha/items/12345/details/789/sub-items'
      },
      onClick: () => console.log('Sub Items clicked')
    }, {
      title: 'Sub Item #1 with Implementation Details and Technical Specifications',
      link: {
        pathname: '/section/alpha/items/12345/details/789/sub-items/1'
      },
      onClick: () => console.log('Sub Item #1 clicked')
    }, {
      title: 'Current Sub Item Status with Real-time Data and Monitoring Information',
      link: {
        pathname: '/section/alpha/items/12345/details/789/sub-items/1/current'
      },
      onClick: () => console.log('Current Sub Item clicked')
    }],
    tree: treeData
  }
}`,...(ee=(Y=N.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const ze=["SingleBreadcrumb","BackButton","ThreeBreadcrumbs","FiveBreadcrumbs","TenBreadcrumbs","LongTitles","WithTreeMenu","LongTitlesWithTree"];export{g as BackButton,C as FiveBreadcrumbs,T as LongTitles,N as LongTitlesWithTree,b as SingleBreadcrumb,f as TenBreadcrumbs,x as ThreeBreadcrumbs,y as WithTreeMenu,ze as __namedExportsOrder,Ae as default};
