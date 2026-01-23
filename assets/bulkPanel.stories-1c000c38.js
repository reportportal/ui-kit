import{j as e}from"./jsx-runtime-2f188e98.js";import{r}from"./index-3553ef47.js";import{r as be}from"./index-d0bd1ed5.js";import{c as ve}from"./bind-d8141dee.js";import{l as Ie}from"./index-5cf2ac00.js";import{u as fe}from"./useOnClickOutside-b0fffa8f.js";import{K as xe}from"./keyCodes-e5060420.js";import{S as ye}from"./selection-f7ee8dc3.js";import{C as ke}from"./chip-3c214fbe.js";import{B as $}from"./button-a3e8ccfc.js";import{T as Ce}from"./tooltip-bc5f21f4.js";import{S as Se}from"./chevronDownDropdown-69a9d5c1.js";import{S as _e}from"./warning-72e334ed.js";import"./close-b4801ed1.js";import"./floating-ui.react-60d1f04e.js";import"./floating-ui.react-dom-a94e415a.js";import"./floatingUi-59569704.js";const je="_expanded_ue1t9_6",Ee="_header_ue1t9_32",Pe="_tabs_ue1t9_119",we="_tab_ue1t9_119",De="_active_ue1t9_146",Be="_item_ue1t9_99",Ne={"bulk-panel":"_bulk-panel_ue1t9_1",expanded:je,"panel-content":"_panel-content_ue1t9_16",header:Ee,"header-actions":"_header-actions_ue1t9_43","warning-icon":"_warning-icon_ue1t9_49","info-message-container":"_info-message-container_ue1t9_58","buttons-container":"_buttons-container_ue1t9_66","selection-info":"_selection-info_ue1t9_72","expand-icon":"_expand-icon_ue1t9_87","items-section":"_items-section_ue1t9_99","items-header":"_items-header_ue1t9_110",tabs:Pe,tab:we,"tab-count":"_tab-count_ue1t9_142",active:De,"items-scroll":"_items-scroll_ue1t9_162","items-list":"_items-list_ue1t9_167",item:Be,"tooltip-wrapper":"_tooltip-wrapper_ue1t9_179"},a=ve.bind(Ne),Re={selected:"selected",clearSelection:"Clear selection",selectedItems:"Selected items",eligibleTab:"Eligible Items",ineligibleTab:"Ineligible Items",ineligibleInfoMessage:t=>e.jsxs(e.Fragment,{children:["You have ",e.jsx("b",{children:t})," ineligible items"]}),cancelButton:t=>`Cancel "${t}"`,proceedButton:t=>`Proceed with ${t} Eligible Items`},y={ELIGIBLE:"eligible",INELIGIBLE:"ineligible"},v=({items:t,actions:l=[],captions:m,infoMessage:u,className:h,portalRoot:i,onRemoveItem:d,onClearSelection:s})=>{const o={...Re,...m},[p,C]=r.useState(!1),[j,L]=r.useState(y.INELIGIBLE),[c,T]=r.useState(null),W=r.useRef(null),I=c!==null,{eligibleItems:k,ineligibleItems:S}=r.useMemo(()=>{var _;if(!c)return{eligibleItems:[],ineligibleItems:[]};const n=((_=c.onValidate)==null?void 0:_.call(c,t))??[],g=new Set(n.map(A=>A.id));return{eligibleItems:t.filter(A=>!g.has(A.id)),ineligibleItems:n}},[t,c]),f=k.length,x=S.length,ae=I&&f>0,M=I&&x>0?o.ineligibleInfoMessage(x):null,re=r.useMemo(()=>I?x===0?k:f===0?S:j===y.ELIGIBLE?k:S:t,[I,t,k,S,j,x,f]),b=r.useCallback(()=>{requestAnimationFrame(()=>{C(!1)})},[]),de=r.useCallback(n=>{var V,_;(V=n.onClick)==null||V.call(n),(((_=n.onValidate)==null?void 0:_.call(n,t))??[]).length===0?(n.onProceed(t,!0),b()):(T(n),L(y.INELIGIBLE),C(!0))},[t,b]),ce=r.useCallback(()=>{const n=c==null?void 0:c.onCancel;T(null),b(),n==null||n()},[c,b]),me=r.useCallback(()=>{c==null||c.onProceed(k),T(null),b()},[c,k,b]),ue=r.useCallback(()=>{C(n=>!n)},[]),he=r.useCallback(n=>{d(n)},[d]);if(r.useEffect(()=>{if(!p)return;const n=g=>{g.keyCode===xe.ESCAPE_KEY_CODE&&b()};return document.addEventListener("keydown",n,!1),()=>document.removeEventListener("keydown",n,!1)},[p,b]),fe(W,p?b:void 0),t.length===0)return null;const pe=n=>S.some(g=>g.id===n.id),ge=n=>{const g=e.jsx(ke,{onRemove:()=>he(n.id),variant:pe(n)&&I?"error":"default",children:n.label??n.name},n.id);return e.jsx("div",{className:a("item"),children:n.tooltipContent?e.jsx(Ce,{wrapperClassName:a("tooltip-wrapper"),content:n.tooltipContent,placement:"top",width:270,portalRoot:i,children:g},n.id):g},n.id)},H=e.jsx("div",{className:a("bulk-panel",{expanded:p},h),role:"region","aria-label":"Bulk actions panel",children:e.jsxs("div",{className:a("panel-content",{expanded:p}),ref:W,children:[e.jsxs("div",{className:a("header"),children:[e.jsxs("div",{className:a("selection-info"),children:[e.jsx("button",{onClick:ue,"aria-label":p?"Collapse panel":"Expand panel","aria-expanded":p,children:e.jsx("span",{className:a("expand-icon",{expanded:p}),children:e.jsx(Se,{})})}),e.jsx(ye,{selectedCount:t.length,onClearSelection:s,captions:{selected:o.selected,buttonCaption:o.clearSelection}})]}),e.jsxs("div",{className:a("header-actions"),children:[(M||u)&&e.jsxs("div",{className:a("info-message-container"),children:[e.jsx("i",{className:a("warning-icon"),children:e.jsx(_e,{})}),e.jsx("div",{className:a("info-message"),children:M||u})]}),e.jsx("div",{className:a("buttons-container"),children:I?e.jsxs(e.Fragment,{children:[e.jsx($,{variant:"ghost",onClick:ce,children:o.cancelButton((c==null?void 0:c.label)??"")}),ae&&e.jsx($,{variant:"primary",onClick:me,children:o.proceedButton(f)})]}):l.map((n,g)=>e.jsx($,{variant:n.variant,onClick:()=>de(n),disabled:n.disabled,children:n.label},`${n.label}-${g}`))})]})]}),e.jsxs("div",{className:a("items-section"),children:[e.jsx("div",{className:a("items-header"),children:I?e.jsxs("div",{className:a("tabs"),children:[x>0&&e.jsxs("button",{className:a("tab",{active:j===y.INELIGIBLE||f===0}),onClick:()=>L(y.INELIGIBLE),children:[o.ineligibleTab,e.jsx("span",{className:a("tab-count"),children:x})]}),f>0&&e.jsxs("button",{className:a("tab",{active:j===y.ELIGIBLE||x===0}),onClick:()=>L(y.ELIGIBLE),children:[o.eligibleTab,e.jsx("span",{className:a("tab-count"),children:f})]})]}):o.selectedItems}),e.jsx("div",{className:a("items-scroll"),children:e.jsx(Ie.Scrollbars,{hideTracksWhenNotNeeded:!0,children:e.jsx("div",{className:a("items-list"),children:re.map(n=>ge(n))})})})]})]})});return p&&i?be.createPortal(H,i):H};v.__docgenInfo={description:"",methods:[],displayName:"BulkPanel",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BulkPanelItem"}],raw:"BulkPanelItem[]"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"BulkPanelAction"}],raw:"BulkPanelAction[]"},description:"",defaultValue:{value:"[]",computed:!1}},captions:{required:!1,tsType:{name:"BulkPanelCaptions"},description:""},infoMessage:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},portalRoot:{required:!1,tsType:{name:"Element"},description:""},onRemoveItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:""},onClearSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Qe={title:"Navigation/BulkPanel",component:v,parameters:{layout:"fullscreen"},tags:["autodocs"]},G=["Short test","VeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongWordWithoutSpaces","Normal test case name","ThisIsAnExtremelyLongLabelWithNoSpacesAtAllToTestEllipsisBehaviorInTheChipComponent","Another short one","SuperMegaUltraLongTestExecutionNameThatShouldDefinitelyTriggerEllipsisInTheUIComponent"],R=t=>Array.from({length:t},(l,m)=>({id:`item-${m+1}`,label:G[m%G.length]})),E={render:()=>{const[t,l]=r.useState(R(2)),m=h=>{l(i=>i.filter(d=>d.id!==h))},u=()=>{l([])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"Click the chevron to expand the panel and see selected items."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(v,{items:t,onRemoveItem:m,onClearSelection:u})})]})}},P={render:()=>{const[t,l]=r.useState(R(48)),m=h=>{l(i=>i.filter(d=>d.id!==h))},u=()=>{l([])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"Panel with many items - scrollable content when expanded."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(v,{items:t,onRemoveItem:m,onClearSelection:u})})]})}},w={render:()=>{const[t,l]=r.useState(R(5)),m=i=>{l(d=>d.filter(s=>s.id!==i))},u=()=>{l([])},h=[{label:"Edit",variant:"ghost",onProceed:i=>{console.log("Edit proceed with items:",i),alert(`Editing ${i.length} items`)}},{label:"Delete",variant:"danger",onProceed:i=>{console.log("Delete proceed with items:",i),alert(`Deleting ${i.length} items`),l(d=>d.filter(s=>!i.some(o=>o.id===s.id)))}}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"Panel with action buttons. All items are eligible - actions execute immediately."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(v,{items:t,actions:h,onRemoveItem:m,onClearSelection:u})})]})}},D={render:()=>{const[t,l]=r.useState([{id:1,label:"Regular item 1"},{id:2,label:"Regular item 2"},{id:3,label:"Locked item 1"},{id:4,label:"Locked item 2"},{id:5,label:"Regular item 3"},{id:6,label:"Read-only item"}]),m=s=>{l(o=>o.filter(p=>p.id!==s))},u=()=>{l([])},h=new Set([3,4]),i=new Set([6]),d=[{label:"Edit",variant:"ghost",onValidate:s=>(console.log("Edit validation for",s.length,"items"),s.filter(o=>i.has(Number(o.id))).map(o=>({...o,tooltipContent:"This item is read-only"}))),onProceed:s=>{alert(`Editing ${s.length} items`)}},{label:"Delete",variant:"danger",onValidate:s=>(console.log("Delete validation for",s.length,"items"),s.filter(o=>h.has(Number(o.id))).map(o=>({...o,tooltipContent:"This item is locked and cannot be deleted"}))),onProceed:s=>{alert(`Deleting ${s.length} items`),l(o=>o.filter(p=>!s.some(C=>C.id===p.id)))}}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsxs("p",{children:["Click Delete - shows validation mode because items 3,4 are locked.",e.jsx("br",{}),"Click Edit - shows validation mode because item 6 is read-only."]})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(v,{items:t,actions:d,onRemoveItem:m,onClearSelection:u})})]})}},B={render:()=>{const[t,l]=r.useState([{id:1,label:"Locked item 1"},{id:2,label:"Locked item 2"},{id:3,label:"Locked item 3"}]),m=i=>{l(d=>d.filter(s=>s.id!==i))},u=()=>{l([])},h=[{label:"Delete",variant:"danger",onValidate:i=>i.map(d=>({...d,tooltipContent:"This item is locked"})),onProceed:()=>{}}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"All items are ineligible. Clicking Delete shows validation mode without Proceed button."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(v,{items:t,actions:h,onRemoveItem:m,onClearSelection:u})})]})}},N={render:()=>{const[t,l]=r.useState(R(100)),m=i=>{l(d=>d.filter(s=>s.id!==i))},u=()=>{l([])},h=[{label:"Delete",variant:"danger",disabled:t.length>50,onProceed:i=>{alert(`Deleting ${i.length} items`)}},{label:"Edit",disabled:t.length>50,onProceed:i=>{alert(`Editing ${i.length} items`)}},{label:"Change Defect Type",onProceed:i=>{alert(`Changing defect type for ${i.length} items`)}}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"Default mode with info message about selection limit (350 items selected)."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(v,{items:t,actions:h,infoMessage:t.length>50?"Some bulk actions are disabled due to the 50-item selection limit":void 0,onRemoveItem:m,onClearSelection:u})})]})}};var q,O,F;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(F=(O=E.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var K,U,Y;P.parameters={...P.parameters,docs:{...(K=P.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(U=P.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var z,J,Q;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<BulkPanelItem[]>(generateItems(5));
    const handleRemoveItem = (id: string | number) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    const handleClearSelection = () => {
      setItems([]);
    };
    const actions: BulkPanelAction[] = [{
      label: 'Edit',
      variant: 'ghost',
      // No onValidate - all items are eligible, executes immediately
      onProceed: eligibleItems => {
        console.log('Edit proceed with items:', eligibleItems);
        alert(\`Editing \${eligibleItems.length} items\`);
      }
    }, {
      label: 'Delete',
      variant: 'danger',
      // No onValidate - all items are eligible, executes immediately
      onProceed: eligibleItems => {
        console.log('Delete proceed with items:', eligibleItems);
        alert(\`Deleting \${eligibleItems.length} items\`);
        setItems(prev => prev.filter(item => !eligibleItems.some(e => e.id === item.id)));
      }
    }];
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
          <p>Panel with action buttons. All items are eligible - actions execute immediately.</p>
        </div>
        <div style={{
        position: 'sticky',
        bottom: 0
      }}>
          <BulkPanel items={items} actions={actions} onRemoveItem={handleRemoveItem} onClearSelection={handleClearSelection} />
        </div>
      </div>;
  }
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<BulkPanelItem[]>([{
      id: 1,
      label: 'Regular item 1'
    }, {
      id: 2,
      label: 'Regular item 2'
    }, {
      id: 3,
      label: 'Locked item 1'
    }, {
      id: 4,
      label: 'Locked item 2'
    }, {
      id: 5,
      label: 'Regular item 3'
    }, {
      id: 6,
      label: 'Read-only item'
    }]);
    const handleRemoveItem = (id: string | number) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    const handleClearSelection = () => {
      setItems([]);
    };
    const lockedIds = new Set([3, 4]);
    const readOnlyIds = new Set([6]);
    const actions: BulkPanelAction[] = [{
      label: 'Edit',
      variant: 'ghost',
      // onValidate returns INELIGIBLE items
      onValidate: allItems => {
        console.log('Edit validation for', allItems.length, 'items');
        // Read-only items cannot be edited
        return allItems.filter(item => readOnlyIds.has(Number(item.id))).map(item => ({
          ...item,
          tooltipContent: 'This item is read-only'
        }));
      },
      onProceed: eligibleItems => {
        alert(\`Editing \${eligibleItems.length} items\`);
      }
    }, {
      label: 'Delete',
      variant: 'danger',
      // onValidate returns INELIGIBLE items
      onValidate: allItems => {
        console.log('Delete validation for', allItems.length, 'items');
        // Locked items cannot be deleted
        return allItems.filter(item => lockedIds.has(Number(item.id))).map(item => ({
          ...item,
          tooltipContent: 'This item is locked and cannot be deleted'
        }));
      },
      onProceed: eligibleItems => {
        alert(\`Deleting \${eligibleItems.length} items\`);
        setItems(prev => prev.filter(item => !eligibleItems.some(e => e.id === item.id)));
      }
    }];
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
          <p>
            Click Delete - shows validation mode because items 3,4 are locked.
            <br />
            Click Edit - shows validation mode because item 6 is read-only.
          </p>
        </div>
        <div style={{
        position: 'sticky',
        bottom: 0
      }}>
          <BulkPanel items={items} actions={actions} onRemoveItem={handleRemoveItem} onClearSelection={handleClearSelection} />
        </div>
      </div>;
  }
}`,...(ee=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,ie;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<BulkPanelItem[]>([{
      id: 1,
      label: 'Locked item 1'
    }, {
      id: 2,
      label: 'Locked item 2'
    }, {
      id: 3,
      label: 'Locked item 3'
    }]);
    const handleRemoveItem = (id: string | number) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    const handleClearSelection = () => {
      setItems([]);
    };
    const actions: BulkPanelAction[] = [{
      label: 'Delete',
      variant: 'danger',
      // All items are ineligible - Proceed button won't be shown
      onValidate: allItems => allItems.map(item => ({
        ...item,
        tooltipContent: 'This item is locked'
      })),
      onProceed: () => {
        // Won't be called
      }
    }];
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
          <p>
            All items are ineligible. Clicking Delete shows validation mode without Proceed button.
          </p>
        </div>
        <div style={{
        position: 'sticky',
        bottom: 0
      }}>
          <BulkPanel items={items} actions={actions} onRemoveItem={handleRemoveItem} onClearSelection={handleClearSelection} />
        </div>
      </div>;
  }
}`,...(ie=(te=B.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var le,se,oe;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<BulkPanelItem[]>(generateItems(100));
    const handleRemoveItem = (id: string | number) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    const handleClearSelection = () => {
      setItems([]);
    };
    const actions: BulkPanelAction[] = [{
      label: 'Delete',
      variant: 'danger',
      disabled: items.length > 50,
      onProceed: eligibleItems => {
        alert(\`Deleting \${eligibleItems.length} items\`);
      }
    }, {
      label: 'Edit',
      disabled: items.length > 50,
      onProceed: eligibleItems => {
        alert(\`Editing \${eligibleItems.length} items\`);
      }
    }, {
      label: 'Change Defect Type',
      onProceed: eligibleItems => {
        alert(\`Changing defect type for \${eligibleItems.length} items\`);
      }
    }];
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
          <p>Default mode with info message about selection limit (350 items selected).</p>
        </div>
        <div style={{
        position: 'sticky',
        bottom: 0
      }}>
          <BulkPanel items={items} actions={actions} infoMessage={items.length > 50 ? 'Some bulk actions are disabled due to the 50-item selection limit' : undefined} onRemoveItem={handleRemoveItem} onClearSelection={handleClearSelection} />
        </div>
      </div>;
  }
}`,...(oe=(se=N.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const Xe=["Default","WithManyItems","WithActions","WithValidation","AllIneligible","WithInfoMessage"];export{B as AllIneligible,E as Default,w as WithActions,N as WithInfoMessage,P as WithManyItems,D as WithValidation,Xe as __namedExportsOrder,Qe as default};
