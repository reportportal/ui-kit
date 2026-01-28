import{j as e}from"./jsx-runtime-2f188e98.js";import{r as s}from"./index-3553ef47.js";import{c as H}from"./bind-d8141dee.js";import{A as L}from"./actionMenu-4acef103.js";import"./meatballMenu-8b9878d9.js";import"./baseIconButton-9b03f096.js";import"./popover-79ca4f84.js";import"./floating-ui.react-60d1f04e.js";import"./floating-ui.react-dom-a94e415a.js";import"./index-d0bd1ed5.js";import"./floatingUi-59569704.js";const z="_disabled_1of31_29",B="_selected_1of31_32",O={"filter-item":"_filter-item_1of31_16",disabled:z,selected:B,"actions-button":"_actions-button_1of31_37","caption-wrapper":"_caption-wrapper_1of31_58"},k=H.bind(O),l=({id:n,caption:i,actions:t,onClick:r,onHover:o,className:p,captionClassName:g,popoverClassName:h,disabled:a=!1,selected:N=!1,editMode:f=!1})=>{const c=s.useRef(null),x=s.useRef(null);s.useEffect(()=>{const u=()=>{c.current&&(c.current.scrollWidth>c.current.clientWidth?c.current.setAttribute("title",i):c.current.removeAttribute("title"))};if(u(),typeof ResizeObserver<"u"&&c.current){const d=new ResizeObserver(u);return d.observe(c.current),()=>d.disconnect()}},[i]);const w=s.useCallback(u=>{var b;if(a||f)return;const d=u.target;(b=x.current)!=null&&b.contains(d)||r==null||r(n)},[n,r,a,f]),R=s.useCallback(u=>{var d;if(u.key==="Enter"&&!a&&!f){const b=u.target;if((d=x.current)!=null&&d.contains(b))return;r==null||r(n)}},[n,r,a,f]),M=s.useCallback(()=>{a||o==null||o(n,!0)},[n,o,a]),W=s.useCallback(()=>{a||o==null||o(n,!1)},[n,o,a]),q=k("filter-item",p,{selected:N,disabled:a}),V=k("caption-wrapper",g);return e.jsxs("div",{className:q,"data-filter-item-container":!0,onClick:w,onKeyDown:R,onMouseEnter:M,onMouseLeave:W,role:"button",tabIndex:a?-1:0,children:[e.jsx("div",{className:V,ref:c,children:i}),e.jsx("div",{ref:x,children:e.jsx(L,{items:t,disabled:a||f,buttonClassName:k("actions-button"),popoverClassName:h,placement:"bottom-start"})})]})};l.__docgenInfo={description:"",methods:[],displayName:"FilterItem",props:{id:{required:!0,tsType:{name:"string"},description:""},caption:{required:!0,tsType:{name:"string"},description:""},actions:{required:!0,tsType:{name:"Array",elements:[{name:"ActionItem"}],raw:"ActionItem[]"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, isHovering: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"boolean"},name:"isHovering"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},captionClassName:{required:!1,tsType:{name:"string"},description:""},popoverClassName:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},editMode:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const m=[{id:"rename",label:"Rename",onClick:()=>console.log("Rename action")},{id:"edit",label:"Edit",onClick:()=>console.log("Edit action")},{id:"duplicate",label:"Duplicate",onClick:()=>console.log("Duplicate action")},{id:"delete",label:"Delete",onClick:()=>console.log("Delete action"),className:"danger-action"}],te={title:"Components/FilterItem",component:l,tags:["autodocs"],args:{id:"1",caption:"Filter Label",actions:m,disabled:!1,selected:!1},argTypes:{id:{control:"text",description:"Unique identifier for the filter item",table:{type:{summary:"string"}}},caption:{control:"text",description:"Text displayed inside the filter item",table:{type:{summary:"string"}}},actions:{description:"Array of actions available in the dropdown menu",table:{type:{summary:"ActionItem[]"}},control:!1},disabled:{control:"boolean",description:"Whether the filter item is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},selected:{control:"boolean",description:"Whether the filter item is selected/highlighted",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},editMode:{control:"boolean",description:"Whether the filter item is in edit mode (disables menu)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class for the container",table:{type:{summary:"string"}}},captionClassName:{control:"text",description:"Additional CSS class for the caption element",table:{type:{summary:"string"}}},onClick:{description:"Callback when the filter item is clicked (excluding the actions button)",action:"clicked",table:{type:{summary:"(id: string) => void"}}},onHover:{description:"Callback when hovering over the filter item",action:"hovered",table:{type:{summary:"(id: string, isHovering: boolean) => void"}}}}},v={render:function(i){const[t,r]=s.useState(null);return e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx("style",{children:`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          `}),e.jsx(l,{...i,id:"1",caption:"Active Filter",actions:m,selected:t==="1",onClick:()=>r("1")}),e.jsx(l,{...i,id:"2",caption:"Inactive Filter",actions:m,selected:t==="2",onClick:()=>r("2")}),e.jsx(l,{...i,id:"3",caption:"Disabled Filter",actions:m,disabled:!0}),e.jsx(l,{...i,id:"4",caption:"Very Long Filter Name That Should Truncate",actions:m,selected:t==="4",onClick:()=>r("4")})]})}},y={render:function(i){const[t,r]=s.useState(null);return e.jsxs("div",{children:[e.jsx("style",{children:`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          `}),e.jsxs("div",{style:{marginBottom:"16px",fontSize:"12px",color:"#666"},children:["Hovered item ID: ",t||"None"]}),e.jsx(l,{...i,id:"1",caption:"Filter Label",actions:m,onHover:(o,p)=>{r(p?o:null)}})]})}},I={render:function(i){const[t,r]=s.useState(void 0),[o,p]=s.useState(void 0),g=h=>[{id:"edit",label:"Edit",onClick:()=>r(h)}];return e.jsxs("div",{children:[e.jsx("style",{children:`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          `}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(l,{...i,id:"1",caption:"Filter A",actions:g("1"),editMode:t==="1",disabled:!!(t&&t!=="1"),selected:o==="1",onClick:()=>{p("1"),console.log("Selected ID set to 1")}}),e.jsx(l,{...i,id:"2",caption:"Filter B",actions:g("2"),editMode:t==="2",disabled:!!(t&&t!=="2"),selected:o==="2",onClick:()=>{p("2"),console.log("Selected ID set to 2")}}),e.jsx(l,{...i,id:"3",caption:"Filter C",actions:g("3"),editMode:t==="3",disabled:!!(t&&t!=="3"),selected:o==="3",onClick:()=>{p("3"),console.log("Selected ID set to 3")}})]})]})}};var S,C,F;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(C=v.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var A,E,j;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(j=(E=y.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var D,T,_;I.parameters={...I.parameters,docs:{...(D=I.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(_=(T=I.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const re=["Default","WithHoverCallback","EditMode"];export{v as Default,I as EditMode,y as WithHoverCallback,re as __namedExportsOrder,te as default};
