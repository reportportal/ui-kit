import{j as J}from"./bind-f351ec9c.js";import{r as m}from"./index-c6dae603.js";import{S as Y}from"./delete-d76a64ee.js";import{F as h}from"./fieldText-d3e18def.js";import"./spinLoader-2da9aaf3.js";const ae={title:"Field Text",component:h,parameters:{layout:"centered"},tags:["autodocs"],render:K=>{const[P,Q]=m.useState(""),e=m.useRef(null),U=X=>{var p;const u=X.target.value;Q(u),u==="blur"&&((p=e==null?void 0:e.current)==null||p.blur())};return J.jsx(h,{...K,value:P,onChange:U,ref:e})}},r={args:{}},s={args:{isRequired:!0,placeholder:"Type here"}},a={args:{label:"Type here"}},t={args:{helpText:"This field is intended for ..."}},o={args:{clearable:!0}},n={args:{error:"The field should not be empty",touched:!0}},c={args:{disabled:!0}},l={args:{maxLengthDisplay:60}},d={args:{defaultWidth:!1}},i={args:{label:"Type here",helpText:"This field is intended for ...",isRequired:!0,placeholder:"Type here",error:"The field should not be empty",touched:!0,hasDoubleMessage:!0,startIcon:J.jsx(Y,{}),collapsible:!0,loading:!0}};var g,b,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var T,y,x;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    placeholder: 'Type here'
  }
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var D,S,W;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Type here'
  }
}`,...(W=(S=a.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var R,E,q;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    helpText: 'This field is intended for ...'
  }
}`,...(q=(E=t.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var L,F,j;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    clearable: true
  }
}`,...(j=(F=o.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var v,C,M;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    error: 'The field should not be empty',
    touched: true
  }
}`,...(M=(C=n.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var I,H,N;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(N=(H=c.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var _,O,V;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    maxLengthDisplay: 60
  }
}`,...(V=(O=l.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var k,w,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    defaultWidth: false
  }
}`,...(z=(w=d.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var A,B,G;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Type here',
    helpText: 'This field is intended for ...',
    isRequired: true,
    placeholder: 'Type here',
    error: 'The field should not be empty',
    touched: true,
    hasDoubleMessage: true,
    startIcon: <DeleteIcon />,
    collapsible: true,
    loading: true
  }
}`,...(G=(B=i.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const te=["Empty","Required","WithLabel","WithHelpText","Clearable","WithError","Disabled","MaxLengthDisplay","NonDefaultWidth","FullyDescribed"];export{o as Clearable,c as Disabled,r as Empty,i as FullyDescribed,l as MaxLengthDisplay,d as NonDefaultWidth,s as Required,n as WithError,t as WithHelpText,a as WithLabel,te as __namedExportsOrder,ae as default};
