import{j as e}from"./jsx-runtime-3169928d.js";import{c as ie}from"./bind-f5c6fce5.js";import{r as b}from"./index-d33a4676.js";import{M as pe}from"./maxValueDisplay-9147cf24.js";import{F as ue}from"./fieldLabel-465f57b8.js";const me="_disabled_s8aoo_17",he="_error_s8aoo_20",xe="_touched_s8aoo_20",ge={"text-area":"_text-area_s8aoo_1",disabled:me,error:he,touched:xe,"max-length-display":"_max-length-display_s8aoo_27","additional-content":"_additional-content_s8aoo_46","error-text":"_error-text_s8aoo_46","help-text":"_help-text_s8aoo_54"},r=ie.bind(ge),fe=72,ye=2,T=b.forwardRef(({value:s="",readonly:x=!1,error:t="",placeholder:g="",disabled:a=!1,touched:E=!1,className:ae="",label:_="",helpText:f="",maxLengthDisplay:re,onChange:se,onFocus:te,onBlur:le,onKeyUp:oe,...ne},de)=>{const H=b.useId(),L=t&&E,ce=y=>{y.target.style.height=`${fe}px`,y.target.style.height=`${y.target.scrollHeight+ye}px`};return e.jsxs(e.Fragment,{children:[_&&e.jsx(ue,{htmlFor:H,className:r({disabled:a}),children:_}),e.jsx("textarea",{id:H,ref:de,className:r("text-area",ae,{disabled:a,error:t,touched:E}),value:s,placeholder:g,disabled:a,readOnly:x,onChange:se,onFocus:te,onBlur:le,onKeyUp:oe,onInput:ce,...ne,children:s}),e.jsx(pe,{className:r("max-length-display"),value:s.length,maxValue:re}),(L||f)&&e.jsxs("div",{className:r("additional-content",{disabled:a}),children:[L&&e.jsx("span",{className:r("error-text"),children:t}),f&&e.jsx("span",{className:r("help-text"),children:f})]})]})});T.__docgenInfo={description:"",methods:[],displayName:"FieldTextFlex",props:{value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},touched:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},helpText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},maxLengthDisplay:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEventHandler<HTMLTextAreaElement>"},description:""},onFocus:{required:!1,tsType:{name:"FocusEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"FocusEventHandler<HTMLTextAreaElement>"},description:""},onBlur:{required:!1,tsType:{name:"FocusEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"FocusEventHandler<HTMLTextAreaElement>"},description:""},onKeyUp:{required:!1,tsType:{name:"KeyboardEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"KeyboardEventHandler<HTMLTextAreaElement>"},description:""},placeholder:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["ComponentPropsWithRef"]};const Le={title:"Fields/Field Text Flex",component:T,parameters:{layout:"centered"},tags:["autodocs"],render:s=>{const[x,t]=b.useState(""),g=a=>{t(a.target.value)};return e.jsx(T,{...s,value:x,onChange:g})}},l={args:{}},o={args:{label:"Label"}},n={args:{disabled:!0}},d={args:{disabled:!0,label:"Disabled label"}},c={args:{readOnly:!0}},i={args:{error:"Error",touched:!0}},p={args:{helpText:"Help text"}},u={args:{placeholder:"Placeholder"}},m={args:{maxLengthDisplay:60}},h={args:{label:"Label",error:"Error",touched:!0,helpText:"Help text",placeholder:"Placeholder"}};var v,F,D;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {}
}`,...(D=(F=l.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var q,W,M;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(M=(W=o.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var V,S,j;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var A,N,O;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled label'
  }
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var P,R,C;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...(C=(R=c.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var w,I,K;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    error: 'Error',
    touched: true
  }
}`,...(K=(I=i.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var B,$,z;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    helpText: 'Help text'
  }
}`,...(z=($=p.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var G,U,k;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ve=["Empty","WithLabel","Disabled","DisabledWithLabel","ReadOnly","WithError","WithHelpText","WithPlaceholder","WithMaxLengthDisplay","FullyDescribed"];export{n as Disabled,d as DisabledWithLabel,l as Empty,h as FullyDescribed,c as ReadOnly,i as WithError,p as WithHelpText,o as WithLabel,m as WithMaxLengthDisplay,u as WithPlaceholder,ve as __namedExportsOrder,Le as default};
