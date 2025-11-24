import{j as e}from"./jsx-runtime-3169928d.js";import{T as r}from"./tooltip-d85d779b.js";import{a as g}from"./floatingUi-59569704.js";import"./index-d33a4676.js";import"./index-f454028f.js";import"./bind-f5c6fce5.js";import"./floating-ui.react-09d3bb8c.js";const m=({isTooltipOpen:t})=>e.jsxs("div",{style:{width:"150px",height:"20px"},children:["Hello, tooltip is ",t?"opened":"closed"]}),h=()=>e.jsx("div",{style:{width:"100px",height:"50px"},children:"Hello!"}),w={title:"Modals & Notification/Tooltip",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placement:{control:"select",options:g}}},s=document.createElement("div");s.id="tooltip-root";document.body.appendChild(s);const o={args:{content:e.jsx(h,{})},render:t=>e.jsx(r,{...t,children:e.jsx(m,{})})},n={args:{content:e.jsx(h,{}),portalRoot:s,isFloating:!1,placement:"right"},render:t=>e.jsx("div",{style:{width:120,height:200,border:"1px solid gray",overflow:"hidden"},children:e.jsx(r,{...t,children:e.jsx(m,{})})})};var i,a,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    content: <Content />
  },
  render: args => <Tooltip {...args}>
      <Hello />
    </Tooltip>
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    content: <Content />,
    portalRoot: div,
    isFloating: false,
    placement: 'right'
  },
  render: args => <div style={{
    width: 120,
    height: 200,
    border: '1px solid gray',
    overflow: 'hidden'
  }}>
      <Tooltip {...args}>
        <Hello />
      </Tooltip>
    </div>
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const H=["Default","WithDocumentId"];export{o as Default,n as WithDocumentId,H as __namedExportsOrder,w as default};
