import{j as r}from"./jsx-runtime-3169928d.js";import{r as y}from"./index-d33a4676.js";import{S as de,a as pe}from"./search-7c2605e7.js";import{I as b,F as se}from"./fieldText-96fb87dc.js";import"./bind-f5c6fce5.js";import"./button-1af45f39.js";import"./spinLoader-8fb5022b.js";import"./maxValueDisplay-9147cf24.js";import"./fieldLabel-147154d0.js";const ue={title:{control:"text",description:"The value for the title attribute.",table:{type:{summary:"string"}}},value:{control:"text",description:"The value entered in the input field.",table:{type:{summary:"string"}}},label:{control:"text",description:"The label text associated with the input.",table:{type:{summary:"string"}}},error:{control:"text",description:"The error message displayed when validation fails.",if:{arg:"touched"},table:{type:{summary:"string"}}},placeholder:{control:"text",description:"The placeholder text displayed in the input.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Indicates whether the input is disabled.",table:{type:{summary:"boolean"}}},clearable:{control:"boolean",description:"Specifies whether a clear button is visible.",table:{type:{summary:"boolean"}}},touched:{control:"boolean",description:"Indicates whether the input has lost focus.",table:{type:{summary:"boolean"}}},defaultWidth:{control:"boolean",description:"Specifies if the input has a default width.",table:{type:{summary:"boolean"}}},isRequired:{control:"boolean",description:"Indicates whether the input is required.",table:{type:{summary:"boolean"}}},collapsible:{control:"boolean",description:"Specifies if the input is collapsible.",table:{type:{summary:"boolean"}}},loading:{control:"boolean",table:{type:{summary:"boolean"}}},type:{options:[b.TEXT,b.PASSWORD,b.EMAIL],control:"radio",table:{type:{summary:"string"}}}},oe=e=>{const[ne,g]=y.useState(e.value||""),a=y.useRef(null);y.useEffect(()=>{e.value&&g(e.value)},[e.value]);const le=ce=>{var x;const{value:f}=ce.target;g(f),f==="blur"&&((x=a==null?void 0:a.current)==null||x.blur())},ie=()=>{g("")};return r.jsx(se,{...e,value:ne,onChange:le,onClear:ie,ref:a})},We={title:"Fields/Field Text",component:se,parameters:{layout:"centered",docs:{description:{component:"Reusable UI component for the text input"}}},argTypes:ue,tags:["autodocs"],render:e=>r.jsx(oe,{...e})},s={args:{}},o={args:{isRequired:!0,placeholder:"Type here"}},n={args:{label:"Type here"}},l={args:{helpText:"This field is intended for ..."}},i={args:{clearable:!0}},c={args:{error:"The field should not be empty",touched:!0}},d={args:{disabled:!0}},p={args:{defaultWidth:!1}},u={args:{maxLengthDisplay:60}},m={args:{label:"Type here",helpText:"This field is intended for ...",isRequired:!0,placeholder:"Type here",error:"The field should not be empty",touched:!0,hasDoubleMessage:!0,startIcon:r.jsx(de,{}),collapsible:!0,loading:!0}},h={args:{type:b.PASSWORD}},t={args:{collapsible:!0,startIcon:r.jsx(pe,{}),maxLength:256,clearable:!0},render:e=>r.jsx("div",{style:{backgroundColor:"#f7f7f8",padding:"10px"},children:r.jsx(oe,{...e})})};var T,S,W;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {}
}`,...(W=(S=s.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var D,v,I;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    placeholder: 'Type here'
  }
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var R,C,E;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Type here'
  }
}`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var F,w,L;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    helpText: 'This field is intended for ...'
  }
}`,...(L=(w=l.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var j,q,P;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    clearable: true
  }
}`,...(P=(q=i.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var k,A,M;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    error: 'The field should not be empty',
    touched: true
  }
}`,...(M=(A=c.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var H,O,_;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var N,V,G;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    defaultWidth: false
  }
}`,...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var U,X,Y;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    maxLengthDisplay: 60
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var z,B,J;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(B=m.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,Q,Z;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    type: InputType.PASSWORD
  }
}`,...(Z=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,ee,re,te,ae;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    startIcon: <SearchIcon />,
    maxLength: 256,
    clearable: true
  },
  render: args => <div style={{
    backgroundColor: '#f7f7f8',
    padding: '10px'
  }}>
      <FieldTextWithHooks {...args} />
    </div>
}`,...(re=(ee=t.parameters)==null?void 0:ee.docs)==null?void 0:re.source},description:{story:"Collapsible text input by clicking on the icon",...(ae=(te=t.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};const De=["Empty","Required","WithLabel","WithHelpText","Clearable","WithError","Disabled","NonDefaultWidth","WithMaxLengthDisplay","FullyDescribed","WithPassword","CollapsibleFieldText"];export{i as Clearable,t as CollapsibleFieldText,d as Disabled,s as Empty,m as FullyDescribed,p as NonDefaultWidth,o as Required,c as WithError,l as WithHelpText,n as WithLabel,u as WithMaxLengthDisplay,h as WithPassword,De as __namedExportsOrder,We as default};
