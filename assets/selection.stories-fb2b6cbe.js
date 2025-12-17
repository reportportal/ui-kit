import{j as e}from"./jsx-runtime-2f188e98.js";import{r as u}from"./index-3553ef47.js";import{S as p}from"./close-b4801ed1.js";import{c as m}from"./bind-d8141dee.js";import{B as C}from"./button-a3e8ccfc.js";const x="_divider_p4emi_23",_="_button_p4emi_30",S={"selection-wrapper":"_selection-wrapper_p4emi_1","selected-count-text":"_selected-count-text_p4emi_7","selected-count-caption":"_selected-count-caption_p4emi_16",divider:x,button:_},n=m.bind(S),b={selected:"selected",buttonCaption:"Clear Selection"},a=({selectedCount:s,onClearSelection:r,captions:t=b,icon:d=e.jsx(p,{})})=>e.jsxs("div",{className:n("selection-wrapper"),children:[e.jsxs("p",{children:[e.jsx("span",{className:n("selected-count-text"),children:s}),e.jsx("span",{className:n("selected-count-caption"),children:t.selected})]}),e.jsx("div",{className:n("divider")}),e.jsx(C,{icon:d,className:n("button"),iconPlace:"start",variant:"text",onClick:r,"aria-label":`${t.buttonCaption} - ${s} ${t.selected}`,children:t.buttonCaption})]});a.__docgenInfo={description:"",methods:[],displayName:"Selection",props:{selectedCount:{required:!0,tsType:{name:"number"},description:""},onClearSelection:{required:!0,tsType:{name:"VoidFunction"},description:""},captions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  selected?: string;
  buttonCaption?: string;
}`,signature:{properties:[{key:"selected",value:{name:"string",required:!1}},{key:"buttonCaption",value:{name:"string",required:!1}}]}},description:"",defaultValue:{value:"{ selected: 'selected', buttonCaption: 'Clear Selection' }",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"<CloseIcon />",computed:!1}}}};const h={args:{captions:{buttonCaption:"Clear Selection",selected:"selected"},selectedCount:10},title:"Navigation/Selection",component:a,tags:["autodocs"]},o={args:{},render:s=>{const[r,t]=u.useState(s.selectedCount);return e.jsx("div",{style:{width:"900px"},children:e.jsx(a,{...s,onClearSelection:()=>t(0),selectedCount:r})})}};var c,i,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedCount, setSelectedCount] = useState(props.selectedCount);
    return <div style={{
      width: '900px'
    }}>
        <Selection {...props} onClearSelection={() => setSelectedCount(0)} selectedCount={selectedCount} />
      </div>;
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const N=["Primary"];export{o as Primary,N as __namedExportsOrder,h as default};
