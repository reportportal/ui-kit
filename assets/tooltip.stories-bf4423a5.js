import{j as e}from"./jsx-runtime-3169928d.js";import{T as r}from"./tooltip-ab162c83.js";import"./index-d33a4676.js";import"./index-f454028f.js";import"./bind-f5c6fce5.js";import"./floating-ui.react-10d81426.js";import"./floating-ui.react-dom-4a121add.js";const c=({isTooltipOpen:h})=>e.jsxs("div",{style:{width:"150px",height:"20px"},children:["Hello, tooltip is ",h?"opened":"closed"]}),m=()=>e.jsx("div",{style:{width:"100px",height:"100px"},children:"Hello!"}),T={title:"Tooltip",component:r,parameters:{layout:"centered"},tags:["autodocs"]},n=document.createElement("div");n.id="tooltip-root";document.body.appendChild(n);const t={args:{},render:()=>e.jsx(r,{content:e.jsx(m,{}),children:e.jsx(c,{})})},o={args:{},render:()=>e.jsx("div",{style:{width:120,height:200,border:"1px solid gray",overflow:"hidden"},children:e.jsx(r,{content:e.jsx(m,{}),portalRoot:n,isFloating:!1,placement:"right",children:e.jsx(c,{})})})};var s,i,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: () => <Tooltip content={<Content />}>
      <Hello />
    </Tooltip>
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,a,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    width: 120,
    height: 200,
    border: '1px solid gray',
    overflow: 'hidden'
  }}>
      <Tooltip content={<Content />} portalRoot={div} isFloating={false} placement={'right'}>
        <Hello />
      </Tooltip>
    </div>
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const w=["Default","WithDocumentId"];export{t as Default,o as WithDocumentId,w as __namedExportsOrder,T as default};
