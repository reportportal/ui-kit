import{j as e}from"./jsx-runtime-2f188e98.js";import{r as l}from"./index-3553ef47.js";import{c as L}from"./bind-d8141dee.js";import{u as B}from"./useEllipsisTitle-1cddebe3.js";import{A as z}from"./actionMenu-4acef103.js";import"./meatballMenu-8b9878d9.js";import"./baseIconButton-9b03f096.js";import"./popover-79ca4f84.js";import"./floating-ui.react-60d1f04e.js";import"./floating-ui.react-dom-a94e415a.js";import"./index-d0bd1ed5.js";import"./floatingUi-59569704.js";const K="_disabled_b9lbt_29",O="_selected_b9lbt_32",U={"filter-item":"_filter-item_b9lbt_16",disabled:K,selected:O,"actions-button":"_actions-button_b9lbt_37","caption-wrapper":"_caption-wrapper_b9lbt_58"},x=L.bind(U),s=({id:a,caption:o,actions:t,onClick:i,onHover:r,className:c,captionClassName:p,popoverClassName:I,disabled:n=!1,selected:_=!1,editMode:m=!1})=>{const{ref:N,title:w}=B(o),h=l.useRef(null),M=l.useCallback(u=>{var f;if(n||m)return;const g=u.target;(f=h.current)!=null&&f.contains(g)||i==null||i(a)},[a,i,n,m]),q=l.useCallback(u=>{var g;if(u.key==="Enter"&&!n&&!m){const f=u.target;if((g=h.current)!=null&&g.contains(f))return;i==null||i(a)}},[a,i,n,m]),R=l.useCallback(()=>{n||r==null||r(a,!0)},[a,r,n]),W=l.useCallback(()=>{n||r==null||r(a,!1)},[a,r,n]),V=x("filter-item",c,{selected:_,disabled:n}),H=x("caption-wrapper",p);return e.jsxs("div",{className:V,"data-filter-item-container":!0,onClick:M,onKeyDown:q,onMouseEnter:R,onMouseLeave:W,role:"button",tabIndex:n?-1:0,children:[e.jsx("div",{className:H,ref:N,title:w,children:o}),e.jsx("div",{ref:h,children:e.jsx(z,{items:t,disabled:n||m,buttonClassName:x("actions-button"),popoverClassName:I,placement:"bottom-start"})})]})};s.__docgenInfo={description:"",methods:[],displayName:"FilterItem",props:{id:{required:!0,tsType:{name:"string"},description:""},caption:{required:!0,tsType:{name:"string"},description:""},actions:{required:!0,tsType:{name:"Array",elements:[{name:"ActionItem"}],raw:"ActionItem[]"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, isHovering: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"boolean"},name:"isHovering"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},captionClassName:{required:!1,tsType:{name:"string"},description:""},popoverClassName:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},editMode:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const d=[{id:"rename",label:"Rename",onClick:()=>console.log("Rename action")},{id:"edit",label:"Edit",onClick:()=>console.log("Edit action")},{id:"duplicate",label:"Duplicate",onClick:()=>console.log("Duplicate action")},{id:"delete",label:"Delete",onClick:()=>console.log("Delete action"),className:"danger-action"}],oe={title:"Components/FilterItem",component:s,tags:["autodocs"],args:{id:"1",caption:"Filter Label",actions:d,disabled:!1,selected:!1},argTypes:{id:{control:"text",description:"Unique identifier for the filter item",table:{type:{summary:"string"}}},caption:{control:"text",description:"Text displayed inside the filter item",table:{type:{summary:"string"}}},actions:{description:"Array of actions available in the dropdown menu",table:{type:{summary:"ActionItem[]"}},control:!1},disabled:{control:"boolean",description:"Whether the filter item is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},selected:{control:"boolean",description:"Whether the filter item is selected/highlighted",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},editMode:{control:"boolean",description:"Whether the filter item is in edit mode (disables menu)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class for the container",table:{type:{summary:"string"}}},captionClassName:{control:"text",description:"Additional CSS class for the caption element",table:{type:{summary:"string"}}},onClick:{description:"Callback when the filter item is clicked (excluding the actions button)",action:"clicked",table:{type:{summary:"(id: string) => void"}}},onHover:{description:"Callback when hovering over the filter item",action:"hovered",table:{type:{summary:"(id: string, isHovering: boolean) => void"}}}}},b={render:function(o){const[t,i]=l.useState(null);return e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx("style",{children:`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          `}),e.jsx(s,{...o,id:"1",caption:"Active Filter",actions:d,selected:t==="1",onClick:()=>i("1")}),e.jsx(s,{...o,id:"2",caption:"Inactive Filter",actions:d,selected:t==="2",onClick:()=>i("2")}),e.jsx(s,{...o,id:"3",caption:"Disabled Filter",actions:d,disabled:!0}),e.jsx(s,{...o,id:"4",caption:"Very Long Filter Name That Should Truncate",actions:d,selected:t==="4",onClick:()=>i("4")})]})}},v={render:function(o){const[t,i]=l.useState(null);return e.jsxs("div",{children:[e.jsx("style",{children:`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          `}),e.jsxs("div",{style:{marginBottom:"16px",fontSize:"12px",color:"#666"},children:["Hovered item ID: ",t||"None"]}),e.jsx(s,{...o,id:"1",caption:"Filter Label",actions:d,onHover:(r,c)=>{i(c?r:null)}})]})}},y={render:function(o){const[t,i]=l.useState(void 0),[r,c]=l.useState(void 0),p=I=>[{id:"edit",label:"Edit",onClick:()=>i(I)}];return e.jsxs("div",{children:[e.jsx("style",{children:`
            .danger-action {
              color: var(--rp-ui-color-error) !important;
            }
            .danger-action:hover {
              color: var(--rp-ui-color-error-hover) !important;
              background-color: rgba(255, 0, 0, 0.05) !important;
            }
          `}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(s,{...o,id:"1",caption:"Filter A",actions:p("1"),editMode:t==="1",disabled:!!(t&&t!=="1"),selected:r==="1",onClick:()=>{c("1"),console.log("Selected ID set to 1")}}),e.jsx(s,{...o,id:"2",caption:"Filter B",actions:p("2"),editMode:t==="2",disabled:!!(t&&t!=="2"),selected:r==="2",onClick:()=>{c("2"),console.log("Selected ID set to 2")}}),e.jsx(s,{...o,id:"3",caption:"Filter C",actions:p("3"),editMode:t==="3",disabled:!!(t&&t!=="3"),selected:r==="3",onClick:()=>{c("3"),console.log("Selected ID set to 3")}})]})]})}};var k,S,C;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(C=(S=b.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var F,A,E;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(E=(A=v.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var j,D,T;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(D=y.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const ae=["Default","WithHoverCallback","EditMode"];export{b as Default,y as EditMode,v as WithHoverCallback,ae as __namedExportsOrder,oe as default};
