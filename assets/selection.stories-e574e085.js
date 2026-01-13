import{j as o}from"./jsx-runtime-2f188e98.js";import{r as l}from"./index-3553ef47.js";import{S as a}from"./selection-f7ee8dc3.js";import"./close-b4801ed1.js";import"./bind-d8141dee.js";import"./button-a3e8ccfc.js";const x={args:{captions:{buttonCaption:"Clear Selection",selected:"selected"},selectedCount:10},title:"Navigation/Selection",component:a,tags:["autodocs"]},e={args:{},render:t=>{const[c,i]=l.useState(t.selectedCount);return o.jsx("div",{style:{width:"900px"},children:o.jsx(a,{...t,onClearSelection:()=>i(0),selectedCount:c})})}};var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const g=["Primary"];export{e as Primary,g as __namedExportsOrder,x as default};
