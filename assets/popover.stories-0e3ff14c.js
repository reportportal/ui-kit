import{j as e}from"./jsx-runtime-2f188e98.js";import{P as i}from"./popover-79ca4f84.js";import{a as s}from"./floatingUi-59569704.js";import"./index-3553ef47.js";import"./floating-ui.react-60d1f04e.js";import"./floating-ui.react-dom-a94e415a.js";import"./index-d0bd1ed5.js";import"./bind-d8141dee.js";const v={title:"Controls/Popover",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{title:"hello title",setIsOpened:void 0},argTypes:{placement:{control:"select",options:s}}},t={render:p=>e.jsx("div",{style:{minWidth:"500px",minHeight:"500px",padding:"200px"},children:e.jsx(i,{...p,content:e.jsx("div",{children:"hello popover content"}),children:e.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"green"}})})})};var o,r,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,v as default};
