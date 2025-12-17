import{j as e}from"./jsx-runtime-2f188e98.js";import{r as f}from"./index-3553ef47.js";import{c as N}from"./bind-d8141dee.js";import{S as D,a as E}from"./filterOutline-513d7be6.js";const A="_opened_1f7nf_22",H={"filters-icon-container":"_filters-icon-container_1f7nf_1","filter-icon":"_filter-icon_1f7nf_19",opened:A,"with-applied":"_with-applied_1f7nf_28","filters-count":"_filters-count_1f7nf_37"},m=N.bind(H),b=f.forwardRef(({appliedFiltersCount:t=0,isOpen:s=!1,className:c,type:p="button",...d},u)=>{const a=t>0,k=m("filters-icon-container",c,{"with-applied":a,opened:s});return e.jsxs("button",{type:p,className:k,ref:u,...d,children:[e.jsx("span",{className:m("filter-icon"),children:a?e.jsx(D,{}):e.jsx(E,{})}),a?e.jsx("span",{className:m("filters-count"),children:t}):null]})});b.__docgenInfo={description:"",methods:[],displayName:"FiltersButton",props:{appliedFiltersCount:{defaultValue:{value:"0",computed:!1},required:!1},isOpen:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const R={title:"Components/FiltersButton",component:b,tags:["autodocs"],args:{appliedFiltersCount:0,isOpen:!1,disabled:!1},argTypes:{appliedFiltersCount:{control:"number",description:"Number of active filters to display in badge",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},isOpen:{control:"boolean",description:"Whether the filters panel is currently open",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},type:{control:"select",options:["button","submit"],description:"HTML button type attribute",table:{type:{summary:"'button' | 'submit'"},defaultValue:{summary:"'button'"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class names",table:{type:{summary:"string"}}},onClick:{action:"clicked",description:"Click event handler",table:{type:{summary:"(event: MouseEvent<HTMLButtonElement>) => void"}}}}},r={parameters:{docs:{description:{story:"Default outline icon displayed when no filters are active. Clicking opens the filters panel."}}}},n={args:{appliedFiltersCount:3},parameters:{docs:{description:{story:"Shows a filled icon and count badge when filters are active. Button appearance changes to indicate active state."}}}},o={args:{isOpen:!0},parameters:{docs:{description:{story:"Visual state when the filters panel is open. Icon color changes to pressed state for visual feedback."}}}},W=t=>{const[s,c]=f.useState(0),[p,d]=f.useState(!1);return e.jsx(b,{...t,appliedFiltersCount:s,isOpen:p,onClick:()=>{const u=s>=3?0:s+1;c(u),d(a=>!a)}})},i={render:t=>e.jsx(W,{...t}),parameters:{docs:{description:{story:"Interactive example cycling through states: no filters → 1 filter → 2 filters → 3 filters → reset."}}}},l={args:{disabled:!0,appliedFiltersCount:2},parameters:{docs:{description:{story:"Button is disabled and cannot be interacted with. Hover states are suppressed and cursor indicates non-interactive state."}}}};var h,y,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default outline icon displayed when no filters are active. Clicking opens the filters panel.'
      }
    }
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,F,_;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    appliedFiltersCount: 3
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows a filled icon and count badge when filters are active. Button appearance changes to indicate active state.'
      }
    }
  }
}`,...(_=(F=n.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var x,C,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isOpen: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Visual state when the filters panel is open. Icon color changes to pressed state for visual feedback.'
      }
    }
  }
}`,...(w=(C=o.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var S,B,O;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: FiltersButtonProps) => <FiltersButtonInteractive {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive example cycling through states: no filters → 1 filter → 2 filters → 3 filters → reset.'
      }
    }
  }
}`,...(O=(B=i.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var I,j,V;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: true,
    appliedFiltersCount: 2
  },
  parameters: {
    docs: {
      description: {
        story: 'Button is disabled and cannot be interacted with. Hover states are suppressed and cursor indicates non-interactive state.'
      }
    }
  }
}`,...(V=(j=l.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};const P=["Default","WithAppliedFilters","Opened","Interactive","Disabled"];export{r as Default,l as Disabled,i as Interactive,o as Opened,n as WithAppliedFilters,P as __namedExportsOrder,R as default};
