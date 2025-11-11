import{j as r}from"./jsx-runtime-3169928d.js";import{r as g}from"./index-d33a4676.js";import{S as ce,a as de}from"./search-7c2605e7.js";import{F as ae}from"./fieldText-7fe36f49.js";import"./bind-f5c6fce5.js";import"./clear-04fd327c.js";import"./openEye-29ae22c4.js";import"./baseIconButton-22d0e691.js";import"./spinLoader-8fb5022b.js";import"./maxValueDisplay-9147cf24.js";import"./fieldLabel-465f57b8.js";const pe={title:{control:"text",description:"The value for the title attribute.",table:{type:{summary:"string"}}},value:{control:"text",description:"The value entered in the input field.",table:{type:{summary:"string"}}},label:{control:"text",description:"The label text associated with the input.",table:{type:{summary:"string"}}},error:{control:"text",description:"The error message displayed when validation fails.",if:{arg:"touched"},table:{type:{summary:"string"}}},placeholder:{control:"text",description:"The placeholder text displayed in the input.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Indicates whether the input is disabled.",table:{type:{summary:"boolean"}}},clearable:{control:"boolean",description:"Specifies whether a clear button is visible.",table:{type:{summary:"boolean"}}},touched:{control:"boolean",description:"Indicates whether the input has lost focus.",table:{type:{summary:"boolean"}}},defaultWidth:{control:"boolean",description:"Specifies if the input has a default width.",table:{type:{summary:"boolean"}}},isRequired:{control:"boolean",description:"Indicates whether the input is required.",table:{type:{summary:"boolean"}}},collapsible:{control:"boolean",description:"Specifies if the input is collapsible.",table:{type:{summary:"boolean"}}},loading:{control:"boolean",table:{type:{summary:"boolean"}}},type:{options:["text","password","email"],control:"radio",table:{type:{summary:"string"}}}},se=e=>{const[oe,b]=g.useState(e.value||""),a=g.useRef(null);g.useEffect(()=>{e.value&&b(e.value)},[e.value]);const ne=ie=>{var f;const{value:y}=ie.target;b(y),y==="blur"&&((f=a==null?void 0:a.current)==null||f.blur())},le=()=>{b("")};return r.jsx(ae,{...e,value:oe,onChange:ne,onClear:le,ref:a})},ve={title:"Fields/Field Text",component:ae,parameters:{layout:"centered",docs:{description:{component:"Reusable UI component for the text input"}}},argTypes:pe,tags:["autodocs"],render:e=>r.jsx(se,{...e})},s={args:{}},o={args:{isRequired:!0,placeholder:"Type here"}},n={args:{label:"Type here"}},l={args:{helpText:"This field is intended for ..."}},i={args:{clearable:!0}},c={args:{error:"The field should not be empty",touched:!0}},d={args:{disabled:!0}},p={args:{defaultWidth:!1}},u={args:{maxLengthDisplay:60}},m={args:{label:"Type here",helpText:"This field is intended for ...",isRequired:!0,placeholder:"Type here",error:"The field should not be empty",touched:!0,hasDoubleMessage:!0,startIcon:r.jsx(ce,{}),collapsible:!0,loading:!0}},h={args:{type:"password"}},t={args:{collapsible:!0,startIcon:r.jsx(de,{}),maxLength:256,clearable:!0},render:e=>r.jsx("div",{style:{backgroundColor:"#f7f7f8",padding:"10px"},children:r.jsx(se,{...e})})};var x,T,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {}
}`,...(S=(T=s.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var W,v,D;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    placeholder: 'Type here'
  }
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var w,C,R;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Type here'
  }
}`,...(R=(C=n.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var F,I,E;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    helpText: 'This field is intended for ...'
  }
}`,...(E=(I=l.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var j,q,L;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    clearable: true
  }
}`,...(L=(q=i.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var k,H,M;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    error: 'The field should not be empty',
    touched: true
  }
}`,...(M=(H=c.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var P,_,N;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(N=(_=d.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var V,A,G;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultWidth: false
  }
}`,...(G=(A=p.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var O,U,Y;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    maxLengthDisplay: 60
  }
}`,...(Y=(U=u.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var z,B,J;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(B=m.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,Q,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    type: 'password'
  }
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee,re,te;t.parameters={...t.parameters,docs:{...(Z=t.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=t.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Collapsible text input by clicking on the icon",...(te=(re=t.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};const De=["Empty","Required","WithLabel","WithHelpText","Clearable","WithError","Disabled","NonDefaultWidth","WithMaxLengthDisplay","FullyDescribed","WithPassword","CollapsibleFieldText"];export{i as Clearable,t as CollapsibleFieldText,d as Disabled,s as Empty,m as FullyDescribed,p as NonDefaultWidth,o as Required,c as WithError,l as WithHelpText,n as WithLabel,u as WithMaxLengthDisplay,h as WithPassword,De as __namedExportsOrder,ve as default};
