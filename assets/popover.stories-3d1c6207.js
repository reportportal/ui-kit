import{j as e}from"./jsx-runtime-3169928d.js";import{P as i}from"./popover-a382e20b.js";import{a as s}from"./floatingUi-59569704.js";import"./index-d33a4676.js";import"./floating-ui.react-d5d215a5.js";import"./index-f454028f.js";import"./bind-f5c6fce5.js";const h={title:"Controls/Popover",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{title:"hello title",setIsOpened:void 0},argTypes:{placement:{control:"select",options:s}}},t={render:p=>e.jsx("div",{style:{minWidth:"500px",minHeight:"500px",padding:"200px"},children:e.jsx(i,{...p,content:e.jsx("div",{children:"hello popover content"}),children:e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"green"}})})})};var o,r,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div style={{
    minWidth: '500px',
    minHeight: '500px',
    padding: '200px'
  }}>
      <Popover {...args} content={<div>hello popover content</div>}>
        <div style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'green'
      }} />
      </Popover>
    </div>
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const v=["Default"];export{t as Default,v as __namedExportsOrder,h as default};
