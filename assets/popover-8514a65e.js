import{j as t}from"./jsx-runtime-2f188e98.js";import{r as o}from"./index-3553ef47.js";import{u as M,a as L,b as U,c as W,d as Z,e as z,F as B,f as J,g as K}from"./floating-ui.react-4b64b9af.js";import{c as Q}from"./bind-d8141dee.js";import{g as X,a as Y,A as $,T as c,b as ee,m as te}from"./floatingUi-c696ea36.js";import{o as ae,f as se,a as ne,b as re}from"./floating-ui.react-dom-a5cc5ea5.js";const oe="_popover_n3nff_1",le="_title_n3nff_28",ie={"popover-wrapper":"_popover-wrapper_n3nff_1",popover:oe,title:le},l=Q.bind(ie),ue=({content:f,children:g,placement:b="bottom",fallbackPlacements:y=Y,className:v,title:i,arrowOffset:s=$,safeZone:T=4,arrowColor:q="white",dataAutomationId:h,strategy:x="absolute",transitionDuration:w=0,isCentered:u=!0,isFocusDisabled:P=!1,isOpened:_,shouldUsePortal:A=!1,setIsOpened:n})=>{const p=o.useRef(null),[F,R]=o.useState(!1),m=n?_:F,j=e=>{n?n(e):R(e)},E=o.useCallback((e,r)=>X(e,r,s,u),[s,u]),{placement:N,refs:d,floatingStyles:V,context:a}=M({open:m,onOpenChange:j,placement:b,strategy:x,middleware:[ae(({rects:e,placement:r})=>({mainAxis:T+c,alignmentAxis:E(e,r)})),se({fallbackAxisSideDirection:"start",fallbackPlacements:y}),ne({element:p})],whileElementsMounted:re}),O=L(a),k=U(a),I=W(a),{getReferenceProps:S,getFloatingProps:D}=Z([O,k,I]),{isMounted:C,styles:G}=z(a,{duration:w,initial:{opacity:0}}),H=()=>{const e=t.jsx(B,{context:a,modal:!1,disabled:P,children:t.jsxs("div",{className:l("popover",v),"data-automation-id":h,ref:d.setFloating,style:{...V,...G,pointerEvents:m?"auto":"none"},...D(),children:[t.jsx(J,{ref:p,context:a,width:ee,height:c,fill:q,staticOffset:te.includes(N)?null:s}),i&&t.jsx("div",{className:l("title"),children:i}),f]})});return A?t.jsx(K,{children:e}):e};return t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:d.setReference,...S(),className:l("popover-wrapper"),children:g}),C&&H()]})};ue.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{content:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"Placement"},description:"",defaultValue:{value:"'bottom'",computed:!1}},fallbackPlacements:{required:!1,tsType:{name:"Array",elements:[{name:"Placement"}],raw:"Placement[]"},description:"",defaultValue:{value:`[
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
}>`}]},description:"",defaultValue:{value:"0",computed:!1}},isCentered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isFocusDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isOpened:{required:!1,tsType:{name:"boolean"},description:""},shouldUsePortal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},setIsOpened:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpened: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpened"}],return:{name:"void"}}},description:""}}};export{ue as P};
