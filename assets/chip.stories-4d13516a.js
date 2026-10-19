import{j as e}from"./jsx-runtime-2f188e98.js";import{C as r}from"./chip-61c39916.js";import"./index-3553ef47.js";import"./bind-d8141dee.js";import"./useEllipsisTitle-1cddebe3.js";import"./close-b4801ed1.js";const Z={title:"Components/Chip",component:r,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["default","error","warning","link"]},disabled:{control:"boolean"}}},a={args:{children:"key : value",variant:"default"}},n={args:{children:"invalid@email.com",variant:"error"}},t={args:{children:"user@email.com",variant:"warning"}},o={args:{children:"key : value",variant:"default",onRemove:()=>console.log("Remove clicked!")}},i={args:{children:"JIRA-123",variant:"link",link:"#"}},s={args:{children:"JIRA-456",variant:"link",link:"#",onRemove:()=>console.log("Remove clicked!")}},l={args:{children:"Click me",variant:"default",onClick:()=>console.log("Chip clicked!")}},c={args:{children:"Very long chip text that should be truncated",variant:"default",maxWidth:150,title:"Very long chip text that should be truncated"}},d={args:{children:"Very long chip text that should be truncated",variant:"default",maxWidth:150,title:"Very long chip text that should be truncated",showTitleOnOverflow:!0}},p={args:{children:"Disabled Chip",variant:"default",disabled:!0,onClick:()=>console.log("Should not fire")}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[e.jsx(r,{variant:"default",onClick:()=>{},children:"Default"}),e.jsx(r,{variant:"error",onClick:()=>{},children:"Error"}),e.jsx(r,{variant:"warning",onClick:()=>{},children:"Warning"}),e.jsx(r,{variant:"link",link:"#",onClick:()=>{},children:"Link"}),e.jsx(r,{variant:"default",onClick:()=>{},onRemove:()=>{},children:"With Remove"})]})};var h,u,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'key : value',
    variant: 'default'
  }
}`,...(v=(u=a.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,k,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'invalid@email.com',
    variant: 'error'
  }
}`,...(C=(k=n.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var f,x,W;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'user@email.com',
    variant: 'warning'
  }
}`,...(W=(x=t.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var R,b,y;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'key : value',
    variant: 'default',
    onRemove: () => console.log('Remove clicked!')
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,S,V;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'JIRA-123',
    variant: 'link',
    link: '#'
  }
}`,...(V=(S=i.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var O,j,D;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'JIRA-456',
    variant: 'link',
    link: '#',
    onRemove: () => console.log('Remove clicked!')
  }
}`,...(D=(j=s.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var A,E,L;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    variant: 'default',
    onClick: () => console.log('Chip clicked!')
  }
}`,...(L=(E=l.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var T,I,J;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Very long chip text that should be truncated',
    variant: 'default',
    maxWidth: 150,
    title: 'Very long chip text that should be truncated'
  }
}`,...(J=(I=c.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var M,_,q;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: 'Very long chip text that should be truncated',
    variant: 'default',
    maxWidth: 150,
    title: 'Very long chip text that should be truncated',
    showTitleOnOverflow: true
  }
}`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var z,B,F;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Chip',
    variant: 'default',
    disabled: true,
    onClick: () => console.log('Should not fire')
  }
}`,...(F=(B=p.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,H,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(H=m.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const $=["Default","Error","Warning","WithRemove","Link","LinkWithRemove","Clickable","WithMaxWidth","WithTitleOnOverflow","Disabled","AllVariants"];export{m as AllVariants,l as Clickable,a as Default,p as Disabled,n as Error,i as Link,s as LinkWithRemove,t as Warning,c as WithMaxWidth,o as WithRemove,d as WithTitleOnOverflow,$ as __namedExportsOrder,Z as default};
