import{j as t}from"./jsx-runtime-2f188e98.js";import{r as o}from"./index-3553ef47.js";import{u as L,o as M,f as W,a as U,b as Z,c as z,d as B,e as J,g as K,h as Q,i as X,F as Y,j as $}from"./floating-ui.react-ffb05b96.js";import{c as ee}from"./bind-d8141dee.js";import{g as te,a as ae,A as ne,T as f,b as se,m as re}from"./floatingUi-c696ea36.js";const oe="data-popover-portal",le="_popover_n3nff_1",ie="_title_n3nff_28",ue={"popover-wrapper":"_popover-wrapper_n3nff_1",popover:le,title:ie},l=ee.bind(ue),pe=({content:g,children:y,placement:b="bottom",fallbackPlacements:v=ae,className:T,title:i,arrowOffset:n=ne,safeZone:q=4,arrowColor:h="white",dataAutomationId:P,strategy:x="absolute",transitionDuration:w=0,isCentered:u=!0,isFocusDisabled:_=!1,isOpened:A,shouldUsePortal:p=!1,setIsOpened:s})=>{const m=o.useRef(null),[R,F]=o.useState(!1),d=s?A:R,j=e=>{s?s(e):F(e)},E=o.useCallback((e,r)=>te(e,r,n,u),[n,u]),{placement:O,refs:c,floatingStyles:V,context:a}=L({open:d,onOpenChange:j,placement:b,strategy:x,middleware:[M(({rects:e,placement:r})=>({mainAxis:q+f,alignmentAxis:E(e,r)})),W({fallbackAxisSideDirection:"start",fallbackPlacements:v}),U({element:m})],whileElementsMounted:Z}),N=z(a),k=B(a),I=J(a),{getReferenceProps:S,getFloatingProps:D}=K([N,k,I]),{isMounted:C,styles:G}=Q(a,{duration:w,initial:{opacity:0}}),H=()=>{const e=t.jsx(X,{context:a,modal:!1,disabled:_,children:t.jsxs("div",{className:l("popover",T),"data-automation-id":P,ref:c.setFloating,style:{...V,...G,pointerEvents:d?"auto":"none"},...D(),...p&&{[oe]:""},children:[t.jsx(Y,{ref:m,context:a,width:se,height:f,fill:h,staticOffset:re.includes(O)?null:n}),i&&t.jsx("div",{className:l("title"),children:i}),g]})});return p?t.jsx($,{children:e}):e};return t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:c.setReference,...S(),className:l("popover-wrapper"),children:y}),C&&H()]})};pe.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{content:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"Placement"},description:"",defaultValue:{value:"'bottom'",computed:!1}},fallbackPlacements:{required:!1,tsType:{name:"Array",elements:[{name:"Placement"}],raw:"Placement[]"},description:"",defaultValue:{value:`[
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
]`,computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},arrowOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},safeZone:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},arrowColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'white'",computed:!1}},dataAutomationId:{required:!1,tsType:{name:"string"},description:""},strategy:{required:!1,tsType:{name:"Strategy"},description:"",defaultValue:{value:"'absolute'",computed:!1}},transitionDuration:{required:!1,tsType:{name:"union",raw:`| number
| Partial<{
    open: number;
    close: number;
  }>`,elements:[{name:"number"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  open: number;
  close: number;
}`,signature:{properties:[{key:"open",value:{name:"number",required:!0}},{key:"close",value:{name:"number",required:!0}}]}}],raw:`Partial<{
  open: number;
  close: number;
}>`}]},description:"",defaultValue:{value:"0",computed:!1}},isCentered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isFocusDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isOpened:{required:!1,tsType:{name:"boolean"},description:""},shouldUsePortal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},setIsOpened:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpened: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpened"}],return:{name:"void"}}},description:""}}};export{oe as P,pe as a};
