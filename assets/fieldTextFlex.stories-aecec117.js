import{j as e}from"./jsx-runtime-3169928d.js";import{c as ie}from"./bind-f5c6fce5.js";import{r as b}from"./index-d33a4676.js";import{M as pe}from"./maxValueDisplay-9147cf24.js";import{F as ue}from"./fieldLabel-147154d0.js";const me="_error_ajlzy_19",he="_touched_ajlzy_19",xe="_disabled_ajlzy_65",ge={"text-area":"_text-area_ajlzy_1",error:me,touched:he,"max-length-display":"_max-length-display_ajlzy_26","additional-content":"_additional-content_ajlzy_36","error-text":"_error-text_ajlzy_36","help-text":"_help-text_ajlzy_44",disabled:xe},r=ie.bind(ge),fe=72,ye=2,T=b.forwardRef(({value:s="",readonly:x=!1,error:t="",placeholder:g="",disabled:a=!1,touched:E=!1,className:ae="",label:_="",helpText:f="",maxLengthDisplay:re,onChange:se,onFocus:te,onBlur:le,onKeyUp:oe,...ne},de)=>{const H=b.useId(),L=t&&E,ce=y=>{y.target.style.height=`${fe}px`,y.target.style.height=`${y.target.scrollHeight+ye}px`};return e.jsxs(e.Fragment,{children:[_&&e.jsx(ue,{htmlFor:H,className:r({disabled:a}),children:_}),e.jsx("textarea",{id:H,ref:de,className:r("text-area",ae,{disabled:a,error:t,touched:E}),value:s,placeholder:g,disabled:a,readOnly:x,onChange:se,onFocus:te,onBlur:le,onKeyUp:oe,onInput:ce,...ne,children:s}),e.jsx(pe,{className:r("max-length-display"),value:s.length,maxValue:re}),(L||f)&&e.jsxs("div",{className:r("additional-content",{disabled:a}),children:[L&&e.jsx("span",{className:r("error-text"),children:t}),f&&e.jsx("span",{className:r("help-text"),children:f})]})]})});T.__docgenInfo={description:"",methods:[],displayName:"FieldTextFlex",props:{value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},touched:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},helpText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},maxLengthDisplay:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEventHandler<HTMLTextAreaElement>"},description:""},onFocus:{required:!1,tsType:{name:"FocusEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"FocusEventHandler<HTMLTextAreaElement>"},description:""},onBlur:{required:!1,tsType:{name:"FocusEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"FocusEventHandler<HTMLTextAreaElement>"},description:""},onKeyUp:{required:!1,tsType:{name:"KeyboardEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"KeyboardEventHandler<HTMLTextAreaElement>"},description:""},placeholder:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["ComponentPropsWithRef"]};const Le={title:"Fields/Field Text Flex",component:T,parameters:{layout:"centered"},tags:["autodocs"],render:s=>{const[x,t]=b.useState(""),g=a=>{t(a.target.value)};return e.jsx(T,{...s,value:x,onChange:g})}},l={args:{}},o={args:{label:"Label"}},n={args:{disabled:!0}},d={args:{disabled:!0,label:"Disabled label"}},c={args:{readOnly:!0}},i={args:{error:"Error",touched:!0}},p={args:{helpText:"Help text"}},u={args:{placeholder:"Placeholder"}},m={args:{maxLengthDisplay:60}},h={args:{label:"Label",error:"Error",touched:!0,helpText:"Help text",placeholder:"Placeholder"}};var j,v,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {}
}`,...(F=(v=l.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var D,q,W;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(W=(q=o.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var M,V,S;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(S=(V=n.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var z,A,N;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...($=(B=p.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var G,U,k;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder'
  }
}`,...(k=(U=u.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var J,Q,X;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    maxLengthDisplay: 60
  }
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    error: 'Error',
    touched: true,
    helpText: 'Help text',
    placeholder: 'Placeholder'
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const je=["Empty","WithLabel","Disabled","DisabledWithLabel","ReadOnly","WithError","WithHelpText","WithPlaceholder","WithMaxLengthDisplay","FullyDescribed"];export{n as Disabled,d as DisabledWithLabel,l as Empty,h as FullyDescribed,c as ReadOnly,i as WithError,p as WithHelpText,o as WithLabel,m as WithMaxLengthDisplay,u as WithPlaceholder,je as __namedExportsOrder,Le as default};
