import{j as e}from"./jsx-runtime-2f188e98.js";import{c as y}from"./bind-d8141dee.js";import"./index-3553ef47.js";const x="_children_vll7q_54",w={"system-message":"_system-message_vll7q_1","stripes-info":"_stripes-info_vll7q_12","stripes-warning":"_stripes-warning_vll7q_17","stripes-error":"_stripes-error_vll7q_22","text-container":"_text-container_vll7q_27","message-header-info":"_message-header-info_vll7q_30","message-header-warning":"_message-header-warning_vll7q_38","message-header-error":"_message-header-error_vll7q_46",children:x,"content-width":"_content-width_vll7q_70"},s=y.bind(w),f=({header:i,caption:t,children:v,mode:o="info",widthByContent:q=!1})=>e.jsxs("div",{className:s("system-message",{"content-width":q}),children:[e.jsx("div",{className:s(`stripes-${o}`)}),e.jsxs("div",{className:s("text-container"),children:[i&&e.jsx("h1",{className:s(`message-header-${o}`),children:i}),e.jsx("div",{className:s("children"),children:v}),t&&e.jsx("p",{children:t})]})]});f.__docgenInfo={description:"",methods:[],displayName:"SystemMessage",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},mode:{required:!1,tsType:{name:"union",raw:"'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},header:{required:!1,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"ReactNode"},description:""},widthByContent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const A={title:"Modals & Notification/System Message",component:f,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{mode:"info",header:"Info message",children:"This is the message description",caption:"Additional description"}},a={args:{mode:"warning",header:"Warning message",children:"This is the message description",caption:"Additional description"}},n={args:{mode:"error",header:"Error message",children:"This is the message description",caption:"Additional description"}};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    mode: 'info',
    header: 'Info message',
    children: 'This is the message description',
    caption: 'Additional description'
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    mode: 'warning',
    header: 'Warning message',
    children: 'This is the message description',
    caption: 'Additional description'
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,_,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    mode: 'error',
    header: 'Error message',
    children: 'This is the message description',
    caption: 'Additional description'
  }
}`,...(u=(_=n.parameters)==null?void 0:_.docs)==null?void 0:u.source}}};const E=["Info","Warning","Error"];export{n as Error,r as Info,a as Warning,E as __namedExportsOrder,A as default};
