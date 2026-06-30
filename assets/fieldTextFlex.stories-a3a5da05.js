import{j as e}from"./jsx-runtime-2f188e98.js";import{c as ge}from"./bind-d8141dee.js";import{r as E}from"./index-3553ef47.js";import{M as xe}from"./maxValueDisplay-a537ac0f.js";import{F as fe}from"./fieldLabel-917daddd.js";const ye="_disabled_1pfea_16",be="_error_1pfea_19",Te="_touched_1pfea_19",Ee={"text-area":"_text-area_1pfea_1",disabled:ye,error:be,touched:Te,"max-length-display":"_max-length-display_1pfea_26","additional-content":"_additional-content_1pfea_45","error-text":"_error-text_1pfea_45","help-text":"_help-text_1pfea_53"},r=ge.bind(Ee),He=72,_e=2,H=E.forwardRef(({value:s="",readonly:x=!1,error:t="",placeholder:f="",disabled:a=!1,touched:_=!1,className:oe="",label:L="",helpText:y="",minHeight:b=He,maxLengthDisplay:ne,onChange:de,onFocus:ce,onBlur:ie,onKeyUp:pe,...ue},me)=>{const v=E.useId(),F=t&&_,he=T=>{T.target.style.height=`${b}px`,T.target.style.height=`${T.target.scrollHeight+_e}px`};return e.jsxs(e.Fragment,{children:[L&&e.jsx(fe,{htmlFor:v,className:r({disabled:a}),children:L}),e.jsx("textarea",{id:v,ref:me,className:r("text-area",oe,{disabled:a,error:t,touched:_}),style:{minHeight:b,height:b},value:s,placeholder:f,disabled:a,readOnly:x,onChange:de,onFocus:ce,onBlur:ie,onKeyUp:pe,onInput:he,...ue,children:s}),e.jsx(xe,{className:r("max-length-display"),value:s.length,maxValue:ne}),(F||y)&&e.jsxs("div",{className:r("additional-content",{disabled:a}),children:[F&&e.jsx("span",{className:r("error-text"),children:t}),y&&e.jsx("span",{className:r("help-text"),children:y})]})]})});H.__docgenInfo={description:"",methods:[],displayName:"FieldTextFlex",props:{value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},touched:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},helpText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},maxLengthDisplay:{required:!1,tsType:{name:"number"},description:""},minHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"72",computed:!1}},onChange:{required:!1,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEventHandler<HTMLTextAreaElement>"},description:""},onFocus:{required:!1,tsType:{name:"FocusEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"FocusEventHandler<HTMLTextAreaElement>"},description:""},onBlur:{required:!1,tsType:{name:"FocusEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"FocusEventHandler<HTMLTextAreaElement>"},description:""},onKeyUp:{required:!1,tsType:{name:"KeyboardEventHandler",elements:[{name:"HTMLTextAreaElement"}],raw:"KeyboardEventHandler<HTMLTextAreaElement>"},description:""},placeholder:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["ComponentPropsWithRef"]};const We={title:"Fields/Field Text Flex",component:H,parameters:{layout:"centered"},tags:["autodocs"],render:s=>{const[x,t]=E.useState(""),f=a=>{t(a.target.value)};return e.jsx(H,{...s,value:x,onChange:f})}},l={args:{}},o={args:{label:"Label"}},n={args:{disabled:!0}},d={args:{disabled:!0,label:"Disabled label"}},c={args:{readOnly:!0}},i={args:{error:"Error",touched:!0}},p={args:{helpText:"Help text"}},u={args:{placeholder:"Placeholder"}},m={args:{maxLengthDisplay:60}},h={args:{minHeight:36}},g={args:{label:"Label",error:"Error",touched:!0,helpText:"Help text",placeholder:"Placeholder"}};var q,D,W;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {}
}`,...(W=(D=l.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var M,V,S;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(S=(V=o.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var j,A,N;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(N=(A=n.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var C,O,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled label'
  }
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var R,w,I;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var K,B,$;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    error: 'Error',
    touched: true
  }
}`,...($=(B=i.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var z,G,U;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    helpText: 'Help text'
  }
}`,...(U=(G=p.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var k,J,Q;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder'
  }
}`,...(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    maxLengthDisplay: 60
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    minHeight: 36
  }
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,te,le;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    error: 'Error',
    touched: true,
    helpText: 'Help text',
    placeholder: 'Placeholder'
  }
}`,...(le=(te=g.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};const Me=["Empty","WithLabel","Disabled","DisabledWithLabel","ReadOnly","WithError","WithHelpText","WithPlaceholder","WithMaxLengthDisplay","WithCustomMinHeight","FullyDescribed"];export{n as Disabled,d as DisabledWithLabel,l as Empty,g as FullyDescribed,c as ReadOnly,h as WithCustomMinHeight,i as WithError,p as WithHelpText,o as WithLabel,m as WithMaxLengthDisplay,u as WithPlaceholder,Me as __namedExportsOrder,We as default};
