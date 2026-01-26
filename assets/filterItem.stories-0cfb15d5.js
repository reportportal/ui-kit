import{j as e}from"./jsx-runtime-2f188e98.js";import{r as s}from"./index-3553ef47.js";import{c as V}from"./bind-d8141dee.js";import{A as H}from"./actionMenu-4acef103.js";import"./meatballMenu-8b9878d9.js";import"./baseIconButton-9b03f096.js";import"./popover-79ca4f84.js";import"./floating-ui.react-60d1f04e.js";import"./floating-ui.react-dom-a94e415a.js";import"./index-d0bd1ed5.js";import"./floatingUi-59569704.js";const L="_disabled_1of31_29",z="_selected_1of31_32",B={"filter-item":"_filter-item_1of31_16",disabled:L,selected:z,"actions-button":"_actions-button_1of31_37","caption-wrapper":"_caption-wrapper_1of31_58"},x=V.bind(B),l=({id:a,caption:i,actions:t,onClick:r,onHover:o,className:p,captionClassName:g,disabled:n=!1,selected:_=!1,editMode:f=!1})=>{const c=s.useRef(null),h=s.useRef(null);s.useEffect(()=>{const u=()=>{c.current&&(c.current.scrollWidth>c.current.clientWidth?c.current.setAttribute("title",i):c.current.removeAttribute("title"))};if(u(),typeof ResizeObserver<"u"&&c.current){const d=new ResizeObserver(u);return d.observe(c.current),()=>d.disconnect()}},[i]);const w=s.useCallback(u=>{var b;if(n||f)return;const d=u.target;(b=h.current)!=null&&b.contains(d)||r==null||r(a)},[a,r,n,f]),N=s.useCallback(u=>{var d;if(u.key==="Enter"&&!n&&!f){const b=u.target;if((d=h.current)!=null&&d.contains(b))return;r==null||r(a)}},[a,r,n,f]),R=s.useCallback(()=>{n||o==null||o(a,!0)},[a,o,n]),M=s.useCallback(()=>{n||o==null||o(a,!1)},[a,o,n]),W=x("filter-item",p,{selected:_,disabled:n}),q=x("caption-wrapper",g);return e.jsxs("div",{className:W,"data-filter-item-container":!0,onClick:w,onKeyDown:N,onMouseEnter:R,onMouseLeave:M,role:"button",tabIndex:n?-1:0,children:[e.jsx("div",{className:q,ref:c,children:i}),e.jsx("div",{ref:h,children:e.jsx(H,{items:t,disabled:n||f,buttonClassName:x("actions-button"),placement:"bottom-start"})})]})};l.__docgenInfo={description:"",methods:[],displayName:"FilterItem",props:{id:{required:!0,tsType:{name:"string"},description:""},caption:{required:!0,tsType:{name:"string"},description:""},actions:{required:!0,tsType:{name:"Array",elements:[{name:"ActionItem"}],raw:"ActionItem[]"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, isHovering: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"boolean"},name:"isHovering"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},captionClassName:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},editMode:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const m=[{id:"rename",label:"Rename",onClick:()=>console.log("Rename action")},{id:"edit",label:"Edit",onClick:()=>console.log("Edit action")},{id:"duplicate",label:"Duplicate",onClick:()=>console.log("Duplicate action")},{id:"delete",label:"Delete",onClick:()=>console.log("Delete action"),className:"danger-action"}],ee={title:"Components/FilterItem",component:l,tags:["autodocs"],args:{id:"1",caption:"Filter Label",actions:m,disabled:!1,selected:!1},argTypes:{id:{control:"text",description:"Unique identifier for the filter item",table:{type:{summary:"string"}}},caption:{control:"text",description:"Text displayed inside the filter item",table:{type:{summary:"string"}}},actions:{description:"Array of actions available in the dropdown menu",table:{type:{summary:"ActionItem[]"}},control:!1},disabled:{control:"boolean",description:"Whether the filter item is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},selected:{control:"boolean",description:"Whether the filter item is selected/highlighted",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},editMode:{control:"boolean",description:"Whether the filter item is in edit mode (disables menu)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class for the container",table:{type:{summary:"string"}}},captionClassName:{control:"text",description:"Additional CSS class for the caption element",table:{type:{summary:"string"}}},onClick:{description:"Callback when the filter item is clicked (excluding the actions button)",action:"clicked",table:{type:{summary:"(id: string) => void"}}},onHover:{description:"Callback when hovering over the filter item",action:"hovered",table:{type:{summary:"(id: string, isHovering: boolean) => void"}}}}},v={render:function(i){const[t,r]=s.useState(null);return e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx("style",{children:`
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
          `}),e.jsxs("div",{style:{marginBottom:"16px",fontSize:"12px",color:"#666"},children:["Hovered item ID: ",t||"None"]}),e.jsx(l,{...i,id:"1",caption:"Filter Label",actions:m,onHover:(o,p)=>{r(p?o:null)}})]})}},I={render:function(i){const[t,r]=s.useState(void 0),[o,p]=s.useState(void 0),g=n=>[{id:"edit",label:"Edit",onClick:()=>r(n)}];return e.jsxs("div",{children:[e.jsx("style",{children:`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          `}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(l,{...i,id:"1",caption:"Filter A",actions:g("1"),editMode:t==="1",disabled:!!(t&&t!=="1"),selected:o==="1",onClick:()=>{p("1"),console.log("Selected ID set to 1")}}),e.jsx(l,{...i,id:"2",caption:"Filter B",actions:g("2"),editMode:t==="2",disabled:!!(t&&t!=="2"),selected:o==="2",onClick:()=>{p("2"),console.log("Selected ID set to 2")}}),e.jsx(l,{...i,id:"3",caption:"Filter C",actions:g("3"),editMode:t==="3",disabled:!!(t&&t!=="3"),selected:o==="3",onClick:()=>{p("3"),console.log("Selected ID set to 3")}})]})]})}};var k,S,C;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(C=(S=v.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var F,A,E;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(E=(A=y.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var j,D,T;I.parameters={...I.parameters,docs:{...(j=I.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(D=I.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const te=["Default","WithHoverCallback","EditMode"];export{v as Default,I as EditMode,y as WithHoverCallback,te as __namedExportsOrder,ee as default};
