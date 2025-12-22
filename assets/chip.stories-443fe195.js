import{j as e}from"./jsx-runtime-2f188e98.js";import{C as r}from"./chip-3c214fbe.js";import"./index-3553ef47.js";import"./bind-d8141dee.js";import"./close-b4801ed1.js";const P={title:"Components/Chip",component:r,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["default","error","warning","link"]},disabled:{control:"boolean"}}},a={args:{children:"key : value",variant:"default"}},n={args:{children:"invalid@email.com",variant:"error"}},i={args:{children:"user@email.com",variant:"warning"}},o={args:{children:"key : value",variant:"default",onRemove:()=>console.log("Remove clicked!")}},t={args:{children:"JIRA-123",variant:"link",link:"#"}},s={args:{children:"JIRA-456",variant:"link",link:"#",onRemove:()=>console.log("Remove clicked!")}},l={args:{children:"Click me",variant:"default",onClick:()=>console.log("Chip clicked!")}},c={args:{children:"Very long chip text that should be truncated",variant:"default",maxWidth:150,title:"Very long chip text that should be truncated"}},d={args:{children:"Disabled Chip",variant:"default",disabled:!0,onClick:()=>console.log("Should not fire")}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[e.jsx(r,{variant:"default",onClick:()=>{},children:"Default"}),e.jsx(r,{variant:"error",onClick:()=>{},children:"Error"}),e.jsx(r,{variant:"warning",onClick:()=>{},children:"Warning"}),e.jsx(r,{variant:"link",link:"#",onClick:()=>{},children:"Link"}),e.jsx(r,{variant:"default",onClick:()=>{},onRemove:()=>{},children:"With Remove"})]})};var m,u,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'key : value',
    variant: 'default'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,g,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'invalid@email.com',
    variant: 'error'
  }
}`,...(k=(g=n.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var C,f,x;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'user@email.com',
    variant: 'warning'
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var R,W,b;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'key : value',
    variant: 'default',
    onRemove: () => console.log('Remove clicked!')
  }
}`,...(b=(W=o.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var y,S,j;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'JIRA-123',
    variant: 'link',
    link: '#'
  }
}`,...(j=(S=t.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var D,w,A;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'JIRA-456',
    variant: 'link',
    link: '#',
    onRemove: () => console.log('Remove clicked!')
  }
}`,...(A=(w=s.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var E,L,V;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    variant: 'default',
    onClick: () => console.log('Chip clicked!')
  }
}`,...(V=(L=l.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var I,J,M;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Very long chip text that should be truncated',
    variant: 'default',
    maxWidth: 150,
    title: 'Very long chip text that should be truncated'
  }
}`,...(M=(J=c.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var _,O,T;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Chip',
    variant: 'default',
    disabled: true,
    onClick: () => console.log('Should not fire')
  }
}`,...(T=(O=d.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var q,z,B;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  }}>
      <Chip variant="default" onClick={() => {}}>
        Default
      </Chip>
      <Chip variant="error" onClick={() => {}}>
        Error
      </Chip>
      <Chip variant="warning" onClick={() => {}}>
        Warning
      </Chip>
      <Chip variant="link" link="#" onClick={() => {}}>
        Link
      </Chip>
      <Chip variant="default" onClick={() => {}} onRemove={() => {}}>
        With Remove
      </Chip>
    </div>
}`,...(B=(z=p.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const Q=["Default","Error","Warning","WithRemove","Link","LinkWithRemove","Clickable","WithMaxWidth","Disabled","AllVariants"];export{p as AllVariants,l as Clickable,a as Default,d as Disabled,n as Error,t as Link,s as LinkWithRemove,i as Warning,c as WithMaxWidth,o as WithRemove,Q as __namedExportsOrder,P as default};
