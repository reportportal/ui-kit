import{j as e}from"./jsx-runtime-2f188e98.js";import{r as a}from"./index-3553ef47.js";import{r as ve}from"./index-d0bd1ed5.js";import{c as Ie}from"./bind-d8141dee.js";import{l as fe}from"./index-5cf2ac00.js";import{u as xe}from"./useOnClickOutside-b0fffa8f.js";import{K as ye}from"./keyCodes-e5060420.js";import{S as ke}from"./selection-dede4e76.js";import{C as Ce}from"./chip-3c214fbe.js";import{B as W}from"./button-34bf729b.js";import{T as Se}from"./tooltip-280b52d3.js";import{S as _e}from"./chevronDownDropdown-69a9d5c1.js";import{S as je}from"./warning-72e334ed.js";import"./close-b4801ed1.js";import"./floating-ui.react-ea29885b.js";import"./floatingUi-c696ea36.js";const Ee="_expanded_ue1t9_6",Pe="_header_ue1t9_32",we="_tabs_ue1t9_119",De="_tab_ue1t9_119",Be="_active_ue1t9_146",Ne="_item_ue1t9_99",Re={"bulk-panel":"_bulk-panel_ue1t9_1",expanded:Ee,"panel-content":"_panel-content_ue1t9_16",header:Pe,"header-actions":"_header-actions_ue1t9_43","warning-icon":"_warning-icon_ue1t9_49","info-message-container":"_info-message-container_ue1t9_58","buttons-container":"_buttons-container_ue1t9_66","selection-info":"_selection-info_ue1t9_72","expand-icon":"_expand-icon_ue1t9_87","items-section":"_items-section_ue1t9_99","items-header":"_items-header_ue1t9_110",tabs:we,tab:De,"tab-count":"_tab-count_ue1t9_142",active:Be,"items-scroll":"_items-scroll_ue1t9_162","items-list":"_items-list_ue1t9_167",item:Ne,"tooltip-wrapper":"_tooltip-wrapper_ue1t9_179"},o=Ie.bind(Re),Le={selected:"selected",clearSelection:"Clear selection",selectedItems:"Selected items",eligibleTab:"Eligible Items",ineligibleTab:"Ineligible Items",ineligibleInfoMessage:t=>e.jsxs(e.Fragment,{children:["You have ",e.jsx("b",{children:t})," ineligible item",t===1?"":"s"]}),cancelButton:t=>`Cancel "${t}"`,proceedButton:t=>`Proceed with ${t} Eligible Item${t===1?"":"s"}`},k={ELIGIBLE:"eligible",INELIGIBLE:"ineligible"},I=({items:t,actions:s=[],captions:c,infoMessage:u,className:h,portalRoot:i,zIndex:r=2,onRemoveItem:l,onClearSelection:m})=>{const p={...Le,...c},[g,L]=a.useState(!1),[j,T]=a.useState(k.INELIGIBLE),[d,V]=a.useState(null),M=a.useRef(null),f=d!==null,{eligibleItems:C,ineligibleItems:S}=a.useMemo(()=>{var _;if(!d)return{eligibleItems:[],ineligibleItems:[]};const n=((_=d.onValidate)==null?void 0:_.call(d,t))??[],b=new Set(n.map($=>$.id));return{eligibleItems:t.filter($=>!b.has($.id)),ineligibleItems:n}},[t,d]),x=C.length,y=S.length,re=f&&x>0,H=f&&y>0?p.ineligibleInfoMessage(y):null,de=a.useMemo(()=>f?y===0?C:x===0?S:j===k.ELIGIBLE?C:S:t,[f,t,C,S,j,y,x]),v=a.useCallback(()=>{requestAnimationFrame(()=>{L(!1)})},[]),ce=a.useCallback(n=>{var A,_;(A=n.onClick)==null||A.call(n),(((_=n.onValidate)==null?void 0:_.call(n,t))??[]).length===0?(n.onProceed(t,!0),v()):(V(n),T(k.INELIGIBLE),L(!0))},[t,v]),me=a.useCallback(()=>{const n=d==null?void 0:d.onCancel;V(null),v(),n==null||n()},[d,v]),ue=a.useCallback(()=>{d==null||d.onProceed(C),V(null),v()},[d,C,v]),he=a.useCallback(()=>{L(n=>!n)},[]),pe=a.useCallback(n=>{l(n)},[l]);if(a.useEffect(()=>{if(!g)return;const n=b=>{b.keyCode===ye.ESCAPE_KEY_CODE&&v()};return document.addEventListener("keydown",n,!1),()=>document.removeEventListener("keydown",n,!1)},[g,v]),xe(M,g?v:void 0),t.length===0)return null;const ge=n=>S.some(b=>b.id===n.id),be=n=>{const b=e.jsx(Ce,{onRemove:()=>pe(n.id),variant:ge(n)&&f?"error":"default",children:n.label??n.name},n.id);return e.jsx("div",{className:o("item"),children:n.tooltipContent?e.jsx(Se,{wrapperClassName:o("tooltip-wrapper"),content:n.tooltipContent,placement:"top",width:270,portalRoot:i,children:b},n.id):b},n.id)},G=e.jsx("div",{className:o("bulk-panel",{expanded:g},h),role:"region","aria-label":"Bulk actions panel",style:g?{zIndex:r}:void 0,children:e.jsxs("div",{className:o("panel-content",{expanded:g}),ref:M,children:[e.jsxs("div",{className:o("header"),children:[e.jsxs("div",{className:o("selection-info"),children:[e.jsx("button",{onClick:he,"aria-label":g?"Collapse panel":"Expand panel","aria-expanded":g,children:e.jsx("span",{className:o("expand-icon",{expanded:g}),children:e.jsx(_e,{})})}),e.jsx(ke,{selectedCount:t.length,onClearSelection:m,captions:{selected:p.selected,buttonCaption:p.clearSelection}})]}),e.jsxs("div",{className:o("header-actions"),children:[(H||u)&&e.jsxs("div",{className:o("info-message-container"),children:[e.jsx("i",{className:o("warning-icon"),children:e.jsx(je,{})}),e.jsx("div",{className:o("info-message"),children:H||u})]}),e.jsx("div",{className:o("buttons-container"),children:f?e.jsxs(e.Fragment,{children:[e.jsx(W,{variant:"ghost",onClick:me,children:p.cancelButton((d==null?void 0:d.label)??"")}),re&&e.jsx(W,{variant:"primary",onClick:ue,children:p.proceedButton(x)})]}):s.map((n,b)=>e.jsx(W,{variant:n.variant,onClick:()=>ce(n),disabled:n.disabled,children:n.label},`${n.label}-${b}`))})]})]}),e.jsxs("div",{className:o("items-section"),children:[e.jsx("div",{className:o("items-header"),children:f?e.jsxs("div",{className:o("tabs"),children:[y>0&&e.jsxs("button",{className:o("tab",{active:j===k.INELIGIBLE||x===0}),onClick:()=>T(k.INELIGIBLE),children:[p.ineligibleTab,e.jsx("span",{className:o("tab-count"),children:y})]}),x>0&&e.jsxs("button",{className:o("tab",{active:j===k.ELIGIBLE||y===0}),onClick:()=>T(k.ELIGIBLE),children:[p.eligibleTab,e.jsx("span",{className:o("tab-count"),children:x})]})]}):p.selectedItems}),e.jsx("div",{className:o("items-scroll"),children:e.jsx(fe.Scrollbars,{hideTracksWhenNotNeeded:!0,children:e.jsx("div",{className:o("items-list"),children:de.map(n=>be(n))})})})]})]})});return g&&i?ve.createPortal(G,i):G};I.__docgenInfo={description:"",methods:[],displayName:"BulkPanel",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BulkPanelItem"}],raw:"BulkPanelItem[]"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"BulkPanelAction"}],raw:"BulkPanelAction[]"},description:"",defaultValue:{value:"[]",computed:!1}},captions:{required:!1,tsType:{name:"BulkPanelCaptions"},description:""},infoMessage:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},portalRoot:{required:!1,tsType:{name:"Element"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},onRemoveItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:""},onClearSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Qe={title:"Navigation/BulkPanel",component:I,parameters:{layout:"fullscreen"},tags:["autodocs"]},q=["Short test","VeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongWordWithoutSpaces","Normal test case name","ThisIsAnExtremelyLongLabelWithNoSpacesAtAllToTestEllipsisBehaviorInTheChipComponent","Another short one","SuperMegaUltraLongTestExecutionNameThatShouldDefinitelyTriggerEllipsisInTheUIComponent"],R=t=>Array.from({length:t},(s,c)=>({id:`item-${c+1}`,label:q[c%q.length]})),E={render:()=>{const[t,s]=a.useState(R(2)),c=h=>{s(i=>i.filter(r=>r.id!==h))},u=()=>{s([])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"Click the chevron to expand the panel and see selected items."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(I,{items:t,onRemoveItem:c,onClearSelection:u})})]})}},P={render:()=>{const[t,s]=a.useState(R(48)),c=h=>{s(i=>i.filter(r=>r.id!==h))},u=()=>{s([])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"Panel with many items - scrollable content when expanded."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(I,{items:t,onRemoveItem:c,onClearSelection:u})})]})}},w={render:()=>{const[t,s]=a.useState(R(5)),c=i=>{s(r=>r.filter(l=>l.id!==i))},u=()=>{s([])},h=[{label:"Edit",variant:"ghost",onProceed:i=>{console.log("Edit proceed with items:",i),alert(`Editing ${i.length} items`)}},{label:"Delete",variant:"danger",onProceed:i=>{console.log("Delete proceed with items:",i),alert(`Deleting ${i.length} items`),s(r=>r.filter(l=>!i.some(m=>m.id===l.id)))}}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"Panel with action buttons. All items are eligible - actions execute immediately."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(I,{items:t,actions:h,onRemoveItem:c,onClearSelection:u})})]})}},D={render:()=>{const[t,s]=a.useState([{id:1,label:"Regular item 1"},{id:2,label:"Regular item 2"},{id:3,label:"Locked item 1"},{id:4,label:"Locked item 2"},{id:5,label:"Regular item 3"},{id:6,label:"Read-only item"}]),c=l=>{s(m=>m.filter(p=>p.id!==l))},u=()=>{s([])},h=new Set([3,4]),i=new Set([6]),r=[{label:"Edit",variant:"ghost",onValidate:l=>(console.log("Edit validation for",l.length,"items"),l.filter(m=>i.has(Number(m.id))).map(m=>({...m,tooltipContent:"This item is read-only"}))),onProceed:l=>{alert(`Editing ${l.length} items`)}},{label:"Delete",variant:"danger",onValidate:l=>(console.log("Delete validation for",l.length,"items"),l.filter(m=>h.has(Number(m.id))).map(m=>({...m,tooltipContent:"This item is locked and cannot be deleted"}))),onProceed:l=>{alert(`Deleting ${l.length} items`),s(m=>m.filter(p=>!l.some(g=>g.id===p.id)))}}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsxs("p",{children:["Click Delete - shows validation mode because items 3,4 are locked.",e.jsx("br",{}),"Click Edit - shows validation mode because item 6 is read-only."]})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(I,{items:t,actions:r,onRemoveItem:c,onClearSelection:u})})]})}},B={render:()=>{const[t,s]=a.useState([{id:1,label:"Locked item 1"},{id:2,label:"Locked item 2"},{id:3,label:"Locked item 3"}]),c=i=>{s(r=>r.filter(l=>l.id!==i))},u=()=>{s([])},h=[{label:"Delete",variant:"danger",onValidate:i=>i.map(r=>({...r,tooltipContent:"This item is locked"})),onProceed:()=>{}}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"All items are ineligible. Clicking Delete shows validation mode without Proceed button."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(I,{items:t,actions:h,onRemoveItem:c,onClearSelection:u})})]})}},N={render:()=>{const[t,s]=a.useState(R(100)),c=i=>{s(r=>r.filter(l=>l.id!==i))},u=()=>{s([])},h=[{label:"Delete",variant:"danger",disabled:t.length>50,onProceed:i=>{alert(`Deleting ${i.length} items`)}},{label:"Edit",disabled:t.length>50,onProceed:i=>{alert(`Editing ${i.length} items`)}},{label:"Change Defect Type",onProceed:i=>{alert(`Changing defect type for ${i.length} items`)}}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"Default mode with info message about selection limit (350 items selected)."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(I,{items:t,actions:h,infoMessage:t.length>50?"Some bulk actions are disabled due to the 50-item selection limit":void 0,onRemoveItem:c,onClearSelection:u})})]})}};var O,F,K;E.parameters={...E.parameters,docs:{...(O=E.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(K=(F=E.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var U,Y,z;P.parameters={...P.parameters,docs:{...(U=P.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(Y=P.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var J,Q,X;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ne;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ie,le;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var se,oe,ae;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ae=(oe=N.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};const Xe=["Default","WithManyItems","WithActions","WithValidation","AllIneligible","WithInfoMessage"];export{B as AllIneligible,E as Default,w as WithActions,N as WithInfoMessage,P as WithManyItems,D as WithValidation,Xe as __namedExportsOrder,Qe as default};
