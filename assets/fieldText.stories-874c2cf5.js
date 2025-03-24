import{j as U}from"./bind-f351ec9c.js";import{r as h}from"./index-c6dae603.js";import{S as re}from"./delete-d76a64ee.js";import{F as g}from"./fieldText-d9391beb.js";import"./button-a2f9f7b8.js";import"./spinLoader-2da9aaf3.js";import"./maxValueDisplay-397b3565.js";const de={title:"Field Text",component:g,parameters:{layout:"centered"},tags:["autodocs"],render:X=>{const[Y,Z]=h.useState(""),e=h.useRef(null),$=ee=>{var m;const u=ee.target.value;Z(u),u==="blur"&&((m=e==null?void 0:e.current)==null||m.blur())};return U.jsx(g,{...X,value:Y,onChange:$,ref:e})}},r={args:{}},s={args:{isRequired:!0,placeholder:"Type here"}},a={args:{label:"Type here"}},t={args:{helpText:"This field is intended for ..."}},o={args:{clearable:!0}},n={args:{error:"The field should not be empty",touched:!0}},c={args:{disabled:!0}},l={args:{defaultWidth:!1}},d={args:{maxLengthDisplay:60}},i={args:{label:"Type here",helpText:"This field is intended for ...",isRequired:!0,placeholder:"Type here",error:"The field should not be empty",touched:!0,hasDoubleMessage:!0,startIcon:U.jsx(re,{}),collapsible:!0,loading:!0}},p={args:{type:"password"}};var b,f,T;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {}
}`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var y,x,D;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    placeholder: 'Type here'
  }
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var S,W,R;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Type here'
  }
}`,...(R=(W=a.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var E,q,L;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    helpText: 'This field is intended for ...'
  }
}`,...(L=(q=t.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var F,j,v;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    clearable: true
  }
}`,...(v=(j=o.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var w,C,M;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    error: 'The field should not be empty',
    touched: true
  }
}`,...(M=(C=n.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var I,H,N;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(N=(H=c.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var P,_,O;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    defaultWidth: false
  }
}`,...(O=(_=l.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var V,k,z;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    maxLengthDisplay: 60
  }
}`,...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var A,B,G;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(G=(B=i.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    type: 'password'
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ie=["Empty","Required","WithLabel","WithHelpText","Clearable","WithError","Disabled","NonDefaultWidth","WithMaxLengthDisplay","FullyDescribed","WithPassword"];export{o as Clearable,c as Disabled,r as Empty,i as FullyDescribed,l as NonDefaultWidth,s as Required,n as WithError,t as WithHelpText,a as WithLabel,d as WithMaxLengthDisplay,p as WithPassword,ie as __namedExportsOrder,de as default};
