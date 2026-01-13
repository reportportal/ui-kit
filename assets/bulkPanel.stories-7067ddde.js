import{j as e}from"./jsx-runtime-2f188e98.js";import{r as a}from"./index-3553ef47.js";import{r as T}from"./index-d0bd1ed5.js";import{c as V}from"./bind-d8141dee.js";import{l as R}from"./index-5cf2ac00.js";import{u as w}from"./useOnClickOutside-b0fffa8f.js";import{K as P}from"./keyCodes-e5060420.js";import{S as D}from"./selection-f7ee8dc3.js";import{C as B}from"./chip-3c214fbe.js";import{S as q}from"./chevronDownDropdown-69a9d5c1.js";import"./close-b4801ed1.js";import"./button-a3e8ccfc.js";const A="_expanded_lggoe_1",L="_header_lggoe_27",W={"bulk-panel":"_bulk-panel_lggoe_1",expanded:A,"panel-content":"_panel-content_lggoe_11",header:L,"selection-info":"_selection-info_lggoe_37","expand-icon":"_expand-icon_lggoe_52","items-section":"_items-section_lggoe_64","items-header":"_items-header_lggoe_75","items-scroll":"_items-scroll_lggoe_84","items-list":"_items-list_lggoe_89"},s=V.bind(W),O={selected:"selected",clearSelection:"Clear selection",selectedItems:"Selected items"},h=({items:n,onRemoveItem:r,onClearSelection:l,className:c,captions:m,portalRoot:d})=>{const o={...O,...m},[t,v]=a.useState(!1),y=a.useRef(null),g=a.useCallback(()=>{v(!1)},[]),E=a.useCallback(()=>{v(i=>!i)},[]);if(a.useEffect(()=>{if(!t)return;const i=N=>{N.keyCode===P.ESCAPE_KEY_CODE&&g()};return document.addEventListener("keydown",i,!1),()=>document.removeEventListener("keydown",i,!1)},[t,g]),w(y,t?g:void 0),n.length===0)return null;const x=e.jsx("div",{className:s("bulk-panel",{expanded:t},c),role:"region","aria-label":"Bulk actions panel",children:e.jsxs("div",{className:s("panel-content",{expanded:t}),ref:y,children:[e.jsx("div",{className:s("header"),children:e.jsxs("div",{className:s("selection-info"),children:[e.jsx("button",{onClick:E,"aria-label":t?"Collapse panel":"Expand panel","aria-expanded":t,children:e.jsx("span",{className:s("expand-icon",{expanded:t}),children:e.jsx(q,{})})}),e.jsx(D,{selectedCount:n.length,onClearSelection:l,captions:{selected:o.selected,buttonCaption:o.clearSelection}})]})}),e.jsxs("div",{className:s("items-section"),children:[e.jsx("div",{className:s("items-header"),children:o.selectedItems}),e.jsx("div",{className:s("items-scroll"),children:e.jsx(R.Scrollbars,{hideTracksWhenNotNeeded:!0,children:e.jsx("div",{className:s("items-list"),children:n.map(i=>e.jsx(B,{onRemove:()=>r(i.id),children:i.label},i.id))})})})]})]})});return t&&d?T.createPortal(x,d):x};h.__docgenInfo={description:"",methods:[],displayName:"BulkPanel",props:{className:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"BulkPanelItem"}],raw:"BulkPanelItem[]"},description:""},captions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  selected?: string;
  clearSelection?: string;
  selectedItems?: string;
}`,signature:{properties:[{key:"selected",value:{name:"string",required:!1}},{key:"clearSelection",value:{name:"string",required:!1}},{key:"selectedItems",value:{name:"string",required:!1}}]}},description:""},onRemoveItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:""},onClearSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},portalRoot:{required:!1,tsType:{name:"Element"},description:""}}};const Z={title:"Navigation/BulkPanel",component:h,parameters:{layout:"fullscreen"},tags:["autodocs"]},f=["Short test","VeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongWordWithoutSpaces","Normal test case name","ThisIsAnExtremelyLongLabelWithNoSpacesAtAllToTestEllipsisBehaviorInTheChipComponent","Another short one","SuperMegaUltraLongTestExecutionNameThatShouldDefinitelyTriggerEllipsisInTheUIComponent"],j=n=>Array.from({length:n},(r,l)=>({id:`item-${l+1}`,label:f[l%f.length]})),p={render:()=>{const[n,r]=a.useState(j(2)),l=m=>{r(d=>d.filter(o=>o.id!==m))},c=()=>{r([])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"Click the chevron to expand the panel and see selected items."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(h,{items:n,onRemoveItem:l,onClearSelection:c})})]})}},u={render:()=>{const[n,r]=a.useState(j(48)),l=m=>{r(d=>d.filter(o=>o.id!==m))},c=()=>{r([])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"Panel with many items - scrollable content when expanded."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(h,{items:n,onRemoveItem:l,onClearSelection:c})})]})}};var b,I,k;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<BulkPanelItem[]>(generateItems(2));
    const handleRemoveItem = (id: string | number) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    const handleClearSelection = () => {
      setItems([]);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'var(--rp-ui-base-bg-200)'
    }}>
        <div style={{
        flex: 1,
        padding: 24
      }}>
          <p>Click the chevron to expand the panel and see selected items.</p>
        </div>
        <div style={{
        position: 'sticky',
        bottom: 0
      }}>
          <BulkPanel items={items} onRemoveItem={handleRemoveItem} onClearSelection={handleClearSelection} />
        </div>
      </div>;
  }
}`,...(k=(I=p.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var C,_,S;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<BulkPanelItem[]>(generateItems(48));
    const handleRemoveItem = (id: string | number) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    const handleClearSelection = () => {
      setItems([]);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'var(--rp-ui-base-bg-200)'
    }}>
        <div style={{
        flex: 1,
        padding: 24
      }}>
          <p>Panel with many items - scrollable content when expanded.</p>
        </div>
        <div style={{
        position: 'sticky',
        bottom: 0
      }}>
          <BulkPanel items={items} onRemoveItem={handleRemoveItem} onClearSelection={handleClearSelection} />
        </div>
      </div>;
  }
}`,...(S=(_=u.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const ee=["Default","WithManyItems"];export{p as Default,u as WithManyItems,ee as __namedExportsOrder,Z as default};
