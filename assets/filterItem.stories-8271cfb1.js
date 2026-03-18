import{j as e}from"./jsx-runtime-2f188e98.js";import{r as p}from"./index-3553ef47.js";import{F as i}from"./filterItem-4abd0f9c.js";import"./bind-d8141dee.js";import"./useEllipsisTitle-1cddebe3.js";import"./actionMenu-817fa653.js";import"./details-d199936c.js";import"./baseIconButton-9b03f096.js";import"./popover-79ca4f84.js";import"./floating-ui.react-60d1f04e.js";import"./floating-ui.react-dom-a94e415a.js";import"./index-d0bd1ed5.js";import"./floatingUi-59569704.js";const d=[{id:"rename",label:"Rename",onClick:()=>console.log("Rename action")},{id:"edit",label:"Edit",onClick:()=>console.log("Edit action")},{id:"duplicate",label:"Duplicate",onClick:()=>console.log("Duplicate action")},{id:"delete",label:"Delete",onClick:()=>console.log("Delete action"),className:"danger-action"}],L={title:"Components/FilterItem",component:i,tags:["autodocs"],args:{id:"1",caption:"Filter Label",actions:d,disabled:!1,selected:!1},argTypes:{id:{control:"text",description:"Unique identifier for the filter item",table:{type:{summary:"string"}}},caption:{control:"text",description:"Text displayed inside the filter item",table:{type:{summary:"string"}}},actions:{description:"Array of actions available in the dropdown menu",table:{type:{summary:"ActionItem[]"}},control:!1},disabled:{control:"boolean",description:"Whether the filter item is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},selected:{control:"boolean",description:"Whether the filter item is selected/highlighted",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},editMode:{control:"boolean",description:"Whether the filter item is in edit mode (disables menu)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class for the container",table:{type:{summary:"string"}}},captionClassName:{control:"text",description:"Additional CSS class for the caption element",table:{type:{summary:"string"}}},onClick:{description:"Callback when the filter item is clicked (excluding the actions button)",action:"clicked",table:{type:{summary:"(id: string) => void"}}},onHover:{description:"Callback when hovering over the filter item",action:"hovered",table:{type:{summary:"(id: string, isHovering: boolean) => void"}}}}},a={render:function(o){const[t,r]=p.useState(null);return e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx("style",{children:`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          `}),e.jsx(i,{...o,id:"1",caption:"Active Filter",actions:d,selected:t==="1",onClick:()=>r("1")}),e.jsx(i,{...o,id:"2",caption:"Inactive Filter",actions:d,selected:t==="2",onClick:()=>r("2")}),e.jsx(i,{...o,id:"3",caption:"Disabled Filter",actions:d,disabled:!0}),e.jsx(i,{...o,id:"4",caption:"Very Long Filter Name That Should Truncate",actions:d,selected:t==="4",onClick:()=>r("4")})]})}},c={render:function(o){const[t,r]=p.useState(null);return e.jsxs("div",{children:[e.jsx("style",{children:`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          `}),e.jsxs("div",{style:{marginBottom:"16px",fontSize:"12px",color:"#666"},children:["Hovered item ID: ",t||"None"]}),e.jsx(i,{...o,id:"1",caption:"Filter Label",actions:d,onHover:(l,n)=>{r(n?l:null)}})]})}},s={render:function(o){const[t,r]=p.useState(void 0),[l,n]=p.useState(void 0),m=S=>[{id:"edit",label:"Edit",onClick:()=>r(S)}];return e.jsxs("div",{children:[e.jsx("style",{children:`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          `}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(i,{...o,id:"1",caption:"Filter A",actions:m("1"),editMode:t==="1",disabled:!!(t&&t!=="1"),selected:l==="1",onClick:()=>{n("1"),console.log("Selected ID set to 1")}}),e.jsx(i,{...o,id:"2",caption:"Filter B",actions:m("2"),editMode:t==="2",disabled:!!(t&&t!=="2"),selected:l==="2",onClick:()=>{n("2"),console.log("Selected ID set to 2")}}),e.jsx(i,{...o,id:"3",caption:"Filter C",actions:m("3"),editMode:t==="3",disabled:!!(t&&t!=="3"),selected:l==="3",onClick:()=>{n("3"),console.log("Selected ID set to 3")}})]})]})}};var g,v,I;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    return <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        <style>
          {\`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          \`}
        </style>
        <FilterItem {...args} id="1" caption="Active Filter" actions={mockActions} selected={selectedId === '1'} onClick={() => setSelectedId('1')} />
        <FilterItem {...args} id="2" caption="Inactive Filter" actions={mockActions} selected={selectedId === '2'} onClick={() => setSelectedId('2')} />
        <FilterItem {...args} id="3" caption="Disabled Filter" actions={mockActions} disabled />
        <FilterItem {...args} id="4" caption="Very Long Filter Name That Should Truncate" actions={mockActions} selected={selectedId === '4'} onClick={() => setSelectedId('4')} />
      </div>;
  }
}`,...(I=(v=a.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var b,h,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: function WithHoverCallbackRender(args) {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    return <div>
        <style>
          {\`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          \`}
        </style>
        <div style={{
        marginBottom: '16px',
        fontSize: '12px',
        color: '#666'
      }}>
          Hovered item ID: {hoveredId || 'None'}
        </div>
        <FilterItem {...args} id="1" caption="Filter Label" actions={mockActions} onHover={(id, isHovering) => {
        setHoveredId(isHovering ? id : null);
      }} />
      </div>;
  }
}`,...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,x,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: function EditModeRender(args) {
    const [editingId, setEditingId] = useState<string | undefined>(undefined);
    const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
    const createEditActions = (itemId: string): ActionItem[] => [{
      id: 'edit',
      label: 'Edit',
      onClick: () => setEditingId(itemId)
    }];
    return <div>
        <style>
          {\`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          \`}
        </style>
        <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
          <FilterItem {...args} id="1" caption="Filter A" actions={createEditActions('1')} editMode={editingId === '1'} disabled={!!(editingId && editingId !== '1')} selected={selectedId === '1'} onClick={() => {
          setSelectedId('1');
          console.log('Selected ID set to 1');
        }} />
          <FilterItem {...args} id="2" caption="Filter B" actions={createEditActions('2')} editMode={editingId === '2'} disabled={!!(editingId && editingId !== '2')} selected={selectedId === '2'} onClick={() => {
          setSelectedId('2');
          console.log('Selected ID set to 2');
        }} />
          <FilterItem {...args} id="3" caption="Filter C" actions={createEditActions('3')} editMode={editingId === '3'} disabled={!!(editingId && editingId !== '3')} selected={selectedId === '3'} onClick={() => {
          setSelectedId('3');
          console.log('Selected ID set to 3');
        }} />
        </div>
      </div>;
  }
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const V=["Default","WithHoverCallback","EditMode"];export{a as Default,s as EditMode,c as WithHoverCallback,V as __namedExportsOrder,L as default};
