import{j as t}from"./jsx-runtime-2f188e98.js";import{S as o,a as y,b as d}from"./systemAlert-58c5107a.js";import"./index-3553ef47.js";import"./bind-d8141dee.js";import"./close-b4801ed1.js";import"./success-8512adf6.js";const h={title:"Modals & Notification/SystemAlert",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{options:["info","success","warning","error"],control:"radio",table:{type:{summary:"string"}}},typographyColor:{options:["white","black"],control:"radio",table:{type:{summary:"string"}}}},args:{title:"Ab dignissimos exercitationem laudantium magni voluptas.",onClose:()=>{},type:y.SUCCESS}},e={render:s=>t.jsx("div",{style:{minHeight:"150px",padding:"50px"},children:t.jsx(o,{...s})})},r={args:{type:y.WARNING,typographyColor:d.BLACK},render:s=>t.jsx("div",{style:{minHeight:"150px",padding:"50px"},children:t.jsx(o,{...s})})};var a,n,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <div style={{
    minHeight: '150px',
    padding: '50px'
  }}>
      <SystemAlert {...args}></SystemAlert>
    </div>
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var i,m,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: SystemAlertType.WARNING,
    typographyColor: SystemAlertTypographyColorType.BLACK
  },
  render: args => <div style={{
    minHeight: '150px',
    padding: '50px'
  }}>
      <SystemAlert {...args}></SystemAlert>
    </div>
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const C=["Default","Warning"];export{e as Default,r as Warning,C as __namedExportsOrder,h as default};
