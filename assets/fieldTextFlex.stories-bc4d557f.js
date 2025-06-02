import{j as e}from"./jsx-runtime-3169928d.js";import{c as ie}from"./bind-f5c6fce5.js";import{r as y}from"./index-d33a4676.js";import{M as pe}from"./maxValueDisplay-9147cf24.js";const ue="_error_3xkt9_19",me="_touched_3xkt9_19",xe="_label_3xkt9_36",he="_disabled_3xkt9_74",ge={"text-area":"_text-area_3xkt9_1",error:ue,touched:me,"max-length-display":"_max-length-display_3xkt9_26",label:xe,"additional-content":"_additional-content_3xkt9_45","error-text":"_error-text_3xkt9_45","help-text":"_help-text_3xkt9_53",disabled:he},r=ie.bind(ge),fe=72,be=2,T=y.forwardRef(({value:s="",readonly:h=!1,error:t="",placeholder:g="",disabled:a=!1,touched:_=!1,className:ae="",label:E="",helpText:f="",maxLengthDisplay:re,onChange:se,onFocus:te,onBlur:le,onKeyUp:oe,...ne},de)=>{const H=y.useId(),L=t&&_,ce=b=>{b.target.style.height=`${fe}px`,b.target.style.height=`${b.target.scrollHeight+be}px`};return e.jsxs(e.Fragment,{children:[E&&e.jsx("label",{htmlFor:H,className:r("label",{disabled:a}),children:E}),e.jsx("textarea",{id:H,ref:de,className:r("text-area",ae,{disabled:a,error:t,touched:_}),value:s,placeholder:g,disabled:a,readOnly:h,onChange:se,onFocus:te,onBlur:le,onKeyUp:oe,onInput:ce,...ne,children:s}),e.jsx(pe,{className:r("max-length-display"),value:s.length,maxValue:re}),(L||f)&&e.jsxs("div",{className:r("additional-content",{disabled:a}),children:[L&&e.jsx("span",{className:r("error-text"),children:t}),f&&e.jsx("span",{className:r("help-text"),children:f})]})]})});T.__docgenInfo={description:"",methods:[],displayName:"FieldTextFlex",props:{value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},touched:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},helpText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},maxLengthDisplay:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEventHandler<HTMLTextAreaElement>"},description:""},onFocus:{required:!1,tsType:{name:"FocusEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"FocusEventHandler<HTMLTextAreaElement>"},description:""},onBlur:{required:!1,tsType:{name:"FocusEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"FocusEventHandler<HTMLTextAreaElement>"},description:""},onKeyUp:{required:!1,tsType:{name:"KeyboardEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"KeyboardEventHandler<HTMLTextAreaElement>"},description:""},placeholder:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["ComponentPropsWithRef"]};const He={title:"Fields/Field Text Flex",component:T,parameters:{layout:"centered"},tags:["autodocs"],render:s=>{const[h,t]=y.useState(""),g=a=>{t(a.target.value)};return e.jsx(T,{...s,value:h,onChange:g})}},l={args:{}},o={args:{label:"Label"}},n={args:{disabled:!0}},d={args:{disabled:!0,label:"Disabled label"}},c={args:{readOnly:!0}},i={args:{error:"Error",touched:!0}},p={args:{helpText:"Help text"}},u={args:{placeholder:"Placeholder"}},m={args:{maxLengthDisplay:60}},x={args:{label:"Label",error:"Error",touched:!0,helpText:"Help text",placeholder:"Placeholder"}};var v,F,D;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {}
}`,...(D=(F=l.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var q,W,M;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(M=(W=o.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var V,S,j;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var k,A,N;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled label'
  }
}`,...(N=(A=d.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var O,P,R;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var C,w,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    error: 'Error',
    touched: true
  }
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var K,B,$;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    helpText: 'Help text'
  }
}`,...($=(B=p.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var z,G,U;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder'
  }
}`,...(U=(G=u.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var J,Q,X;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    maxLengthDisplay: 60
  }
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    error: 'Error',
    touched: true,
    helpText: 'Help text',
    placeholder: 'Placeholder'
  }
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Le=["Empty","WithLabel","Disabled","DisabledWithLabel","ReadOnly","WithError","WithHelpText","WithPlaceholder","WithMaxLengthDisplay","FullyDescribed"];export{n as Disabled,d as DisabledWithLabel,l as Empty,x as FullyDescribed,c as ReadOnly,i as WithError,p as WithHelpText,o as WithLabel,m as WithMaxLengthDisplay,u as WithPlaceholder,Le as __namedExportsOrder,He as default};
