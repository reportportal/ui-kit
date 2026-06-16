import{j as e}from"./jsx-runtime-2f188e98.js";import{r as c}from"./index-3553ef47.js";import{B as m}from"./bulkPanel-ae499898.js";import"./index-d0bd1ed5.js";import"./bind-d8141dee.js";import"./index-5cf2ac00.js";import"./useOnClickOutside-b0fffa8f.js";import"./keyCodes-e5060420.js";import"./selection-dede4e76.js";import"./close-b4801ed1.js";import"./button-34bf729b.js";import"./chip-3c214fbe.js";import"./tooltip-280b52d3.js";import"./floating-ui.react-ea29885b.js";import"./floatingUi-c696ea36.js";import"./chevronDownDropdown-69a9d5c1.js";import"./warning-72e334ed.js";const ie={title:"Navigation/BulkPanel",component:m,parameters:{layout:"fullscreen"},tags:["autodocs"]},f=["Short test","VeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongWordWithoutSpaces","Normal test case name","ThisIsAnExtremelyLongLabelWithNoSpacesAtAllToTestEllipsisBehaviorInTheChipComponent","Another short one","SuperMegaUltraLongTestExecutionNameThatShouldDefinitelyTriggerEllipsisInTheUIComponent"],I=l=>Array.from({length:l},(t,s)=>({id:`item-${s+1}`,label:f[s%f.length]})),h={render:()=>{const[l,t]=c.useState(I(2)),s=d=>{t(n=>n.filter(o=>o.id!==d))},r=()=>{t([])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"Click the chevron to expand the panel and see selected items."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(m,{items:l,onRemoveItem:s,onClearSelection:r})})]})}},g={render:()=>{const[l,t]=c.useState(I(48)),s=d=>{t(n=>n.filter(o=>o.id!==d))},r=()=>{t([])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"Panel with many items - scrollable content when expanded."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(m,{items:l,onRemoveItem:s,onClearSelection:r})})]})}},p={render:()=>{const[l,t]=c.useState(I(5)),s=n=>{t(o=>o.filter(i=>i.id!==n))},r=()=>{t([])},d=[{label:"Edit",variant:"ghost",onProceed:n=>{console.log("Edit proceed with items:",n),alert(`Editing ${n.length} items`)}},{label:"Delete",variant:"danger",onProceed:n=>{console.log("Delete proceed with items:",n),alert(`Deleting ${n.length} items`),t(o=>o.filter(i=>!n.some(a=>a.id===i.id)))}}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"Panel with action buttons. All items are eligible - actions execute immediately."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(m,{items:l,actions:d,onRemoveItem:s,onClearSelection:r})})]})}},u={render:()=>{const[l,t]=c.useState([{id:1,label:"Regular item 1"},{id:2,label:"Regular item 2"},{id:3,label:"Locked item 1"},{id:4,label:"Locked item 2"},{id:5,label:"Regular item 3"},{id:6,label:"Read-only item"}]),s=i=>{t(a=>a.filter(y=>y.id!==i))},r=()=>{t([])},d=new Set([3,4]),n=new Set([6]),o=[{label:"Edit",variant:"ghost",onValidate:i=>(console.log("Edit validation for",i.length,"items"),i.filter(a=>n.has(Number(a.id))).map(a=>({...a,tooltipContent:"This item is read-only"}))),onProceed:i=>{alert(`Editing ${i.length} items`)}},{label:"Delete",variant:"danger",onValidate:i=>(console.log("Delete validation for",i.length,"items"),i.filter(a=>d.has(Number(a.id))).map(a=>({...a,tooltipContent:"This item is locked and cannot be deleted"}))),onProceed:i=>{alert(`Deleting ${i.length} items`),t(a=>a.filter(y=>!i.some(W=>W.id===y.id)))}}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsxs("p",{children:["Click Delete - shows validation mode because items 3,4 are locked.",e.jsx("br",{}),"Click Edit - shows validation mode because item 6 is read-only."]})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(m,{items:l,actions:o,onRemoveItem:s,onClearSelection:r})})]})}},b={render:()=>{const[l,t]=c.useState([{id:1,label:"Locked item 1"},{id:2,label:"Locked item 2"},{id:3,label:"Locked item 3"}]),s=n=>{t(o=>o.filter(i=>i.id!==n))},r=()=>{t([])},d=[{label:"Delete",variant:"danger",onValidate:n=>n.map(o=>({...o,tooltipContent:"This item is locked"})),onProceed:()=>{}}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"All items are ineligible. Clicking Delete shows validation mode without Proceed button."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(m,{items:l,actions:d,onRemoveItem:s,onClearSelection:r})})]})}},v={render:()=>{const[l,t]=c.useState(I(100)),s=n=>{t(o=>o.filter(i=>i.id!==n))},r=()=>{t([])},d=[{label:"Delete",variant:"danger",disabled:l.length>50,onProceed:n=>{alert(`Deleting ${n.length} items`)}},{label:"Edit",disabled:l.length>50,onProceed:n=>{alert(`Editing ${n.length} items`)}},{label:"Change Defect Type",onProceed:n=>{alert(`Changing defect type for ${n.length} items`)}}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"var(--rp-ui-base-bg-200)"},children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsx("p",{children:"Default mode with info message about selection limit (350 items selected)."})}),e.jsx("div",{style:{position:"sticky",bottom:0},children:e.jsx(m,{items:l,actions:d,infoMessage:l.length>50?"Some bulk actions are disabled due to the 50-item selection limit":void 0,onRemoveItem:s,onClearSelection:r})})]})}};var x,k,C;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(k=h.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var S,D,P;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(D=g.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var R,j,V;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(j=p.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var E,w,B;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(B=(w=u.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var L,A,T;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(T=(A=b.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var $,H,N;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(N=(H=v.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};const le=["Default","WithManyItems","WithActions","WithValidation","AllIneligible","WithInfoMessage"];export{b as AllIneligible,h as Default,p as WithActions,v as WithInfoMessage,g as WithManyItems,u as WithValidation,le as __namedExportsOrder,ie as default};
