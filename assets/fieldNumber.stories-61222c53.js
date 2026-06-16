import{j as n}from"./jsx-runtime-2f188e98.js";import{r as L}from"./index-3553ef47.js";import{F as c}from"./fieldNumber-925ee977.js";import"./bind-d8141dee.js";import"./keyCodes-e5060420.js";import"./baseIconButton-9b03f096.js";import"./minus-6db56247.js";import"./plus-150a0ce8.js";import"./fieldLabel-917daddd.js";const z={title:"Fields/Field Number",component:c,parameters:{layout:"centered"},tags:["autodocs"],render:m=>{const[P,V]=L.useState(m.value??""),A=C=>{V(C)};return n.jsx(n.Fragment,{children:n.jsx(c,{...m,value:P,onChange:A})})}},e={args:{}},r={args:{disabled:!0}},a={args:{label:"Enter you number"}},s={args:{label:"Amount",postfix:"%",max:100}},t={args:{label:"Quantity",value:150,error:"Value exceeds maximum limit"}},o={args:{label:"Enter amount",placeholder:"0",postfix:"$"}};var l,i,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,d,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Enter you number'
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,E,W;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Amount',
    postfix: '%',
    max: 100
  }
}`,...(W=(E=s.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var S,y,F;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Quantity',
    value: 150,
    error: 'Value exceeds maximum limit'
  }
}`,...(F=(y=t.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var j,v,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Enter amount',
    placeholder: '0',
    postfix: '$'
  }
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const B=["Default","Disabled","WithLabel","WithPostfix","WithError","WithPlaceholder"];export{e as Default,r as Disabled,t as WithError,a as WithLabel,o as WithPlaceholder,s as WithPostfix,B as __namedExportsOrder,z as default};
