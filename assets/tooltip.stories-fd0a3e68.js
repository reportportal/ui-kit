import{j as e}from"./jsx-runtime-2f188e98.js";import{T as n}from"./tooltip-dc9479ad.js";import{a as g}from"./floatingUi-c696ea36.js";import"./index-3553ef47.js";import"./index-d0bd1ed5.js";import"./bind-d8141dee.js";import"./floating-ui.react-eea5639b.js";import"./floating-ui.react-dom-a5cc5ea5.js";const m=({isTooltipOpen:t})=>e.jsxs("div",{style:{width:"150px",height:"20px"},children:["Hello, tooltip is ",t?"opened":"closed"]}),h=()=>e.jsx("div",{style:{width:"100px",height:"50px"},children:"Hello!"}),H={title:"Modals & Notification/Tooltip",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placement:{control:"select",options:g}}},s=document.createElement("div");s.id="tooltip-root";document.body.appendChild(s);const o={args:{content:e.jsx(h,{})},render:t=>e.jsx(n,{...t,children:e.jsx(m,{})})},r={args:{content:e.jsx(h,{}),portalRoot:s,isFloating:!1,placement:"right"},render:t=>e.jsx("div",{style:{width:120,height:200,border:"1px solid gray",overflow:"hidden"},children:e.jsx(n,{...t,children:e.jsx(m,{})})})};var i,a,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    content: <Content />
  },
  render: args => <Tooltip {...args}>
      <Hello />
    </Tooltip>
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const C=["Default","WithDocumentId"];export{o as Default,r as WithDocumentId,C as __namedExportsOrder,H as default};
