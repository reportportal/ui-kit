import{j as o}from"./jsx-runtime-ed146b25.js";import{T as n}from"./tooltip-00e2a08b.js";import"./index-c6dae603.js";import"./bind-eab4a7b2.js";import"./floating-ui.react-1798f646.js";import"./floating-ui.react-dom-0d2dd06e.js";import"./index-ef5cf6e7.js";const p=({isTooltipOpen:a})=>o.jsxs("span",{children:["Hello, tooltip is ",a?"opened":"closed"]}),l=()=>o.jsx("div",{style:{width:"100px",height:"100px"},children:"Hello!"}),h={title:"Tooltip",component:n,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{},render:()=>o.jsx(n,{content:o.jsx(l,{}),children:o.jsx(p,{})})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {},
  render: () => <Tooltip content={<Content />}>
      <Hello />
    </Tooltip>
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,h as default};
