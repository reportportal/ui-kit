import{j as e}from"./jsx-runtime-2f188e98.js";import{r as u}from"./index-3553ef47.js";import{c as ee}from"./bind-d8141dee.js";import{S as te}from"./clear-c7bc24e5.js";import{S as se,a as ae}from"./filterOutline-513d7be6.js";import{u as re}from"./useEllipsisTitle-1cddebe3.js";const ne="_opened_ntvuh_37",oe="_icon_ntvuh_98",ie="_disabled_ntvuh_115",le={"filters-icon-container":"_filters-icon-container_ntvuh_16","filter-icon":"_filter-icon_ntvuh_34",opened:ne,"with-applied":"_with-applied_ntvuh_43","filters-count":"_filters-count_ntvuh_52","clear-wrapper":"_clear-wrapper_ntvuh_89",icon:oe,"clear-icon":"_clear-icon_ntvuh_98",disabled:ie},i=ee.bind(le),w=u.forwardRef(({appliedFiltersCount:t=0,isOpen:r=!1,className:l,type:c="button",text:s,filtersLabelClassName:n,clearable:_=!1,onClear:o,clearButtonAriaLabel:Q="Clear filters",...X},Y)=>{const p=t>0,d=s!==void 0&&s!=="",Z=d?s:p?t:void 0,{ref:C,title:S}=re(Z),$=i("filters-icon-container",l,{"with-applied":p||d,opened:r});return e.jsxs("button",{type:c,className:$,ref:Y,...X,children:[e.jsx("span",{className:i("filter-icon"),children:p||d?e.jsx(se,{}):e.jsx(ae,{})}),d?e.jsx("span",{ref:C,title:S,className:i("filters-count",n),children:s}):p?e.jsx("span",{ref:C,title:S,className:i("filters-count",n),children:t}):null,_&&(p||d)&&e.jsx("div",{className:i("clear-wrapper"),children:e.jsx("span",{role:"button",tabIndex:0,"aria-label":Q,className:i("clear-icon"),onClick:a=>{a.stopPropagation(),o==null||o()},onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),a.stopPropagation(),o==null||o())},onMouseDown:a=>a.preventDefault(),children:e.jsx(te,{})})})]})});w.__docgenInfo={description:"",methods:[],displayName:"FiltersButton",props:{appliedFiltersCount:{defaultValue:{value:"0",computed:!1},required:!1},isOpen:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1},clearable:{defaultValue:{value:"false",computed:!1},required:!1},clearButtonAriaLabel:{defaultValue:{value:"'Clear filters'",computed:!1},required:!1}}};const ye={title:"Components/FiltersButton",component:w,tags:["autodocs"],args:{appliedFiltersCount:0,isOpen:!1,disabled:!1},argTypes:{appliedFiltersCount:{control:"number",description:"Number of active filters to display in badge",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},isOpen:{control:"boolean",description:"Whether the filters panel is currently open",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},text:{control:"text",description:"Text to display instead of filter count",table:{type:{summary:"string"}}},filtersLabelClassName:{control:"text",description:"CSS class name for the filters label/count element",table:{type:{summary:"string"}}},clearable:{control:"boolean",description:"Whether to show a clear button when filters are active",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},type:{control:"select",options:["button","submit"],description:"HTML button type attribute",table:{type:{summary:"'button' | 'submit'"},defaultValue:{summary:"'button'"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class names",table:{type:{summary:"string"}}},onClick:{action:"clicked",description:"Click event handler",table:{type:{summary:"(event: MouseEvent<HTMLButtonElement>) => void"}}},onClear:{action:"cleared",description:"Callback when clear button is clicked",table:{type:{summary:"() => void"}}},clearButtonAriaLabel:{control:"text",description:"ARIA label for the clear button (for accessibility and internationalization)",table:{type:{summary:"string"},defaultValue:{summary:"'Clear filters'"}}}}},m={parameters:{docs:{description:{story:"Default outline icon displayed when no filters are active. Clicking opens the filters panel."}}}},f={args:{appliedFiltersCount:3},parameters:{docs:{description:{story:"Shows a filled icon and count badge when filters are active. Button appearance changes to indicate active state."}}}},b={args:{isOpen:!0},parameters:{docs:{description:{story:"Visual state when the filters panel is open. Icon color changes to pressed state for visual feedback."}}}},ce=t=>{const[r,l]=u.useState(0),[c,s]=u.useState(!1);return e.jsx(w,{...t,appliedFiltersCount:r,isOpen:c,onClick:()=>{const n=r>=3?0:r+1;l(n),s(_=>!_)}})},h={render:t=>e.jsx(ce,{...t}),parameters:{docs:{description:{story:"Interactive example cycling through states: no filters → 1 filter → 2 filters → 3 filters → reset."}}}},y={args:{text:"Active"},parameters:{docs:{description:{story:"Button with custom text instead of filter count. Useful for displaying status or custom labels."}}}},g={args:{text:"Very important filters applied",clearable:!0},parameters:{docs:{description:{story:"Button with longer text to demonstrate text wrapping and layout behavior. Includes clearable functionality."}}}},pe=t=>{const[r,l]=u.useState(3),[c,s]=u.useState(!1);return e.jsx(w,{...t,appliedFiltersCount:r,isOpen:c,clearable:!0,onClick:()=>{s(n=>!n)},onClear:()=>{l(0),s(!1)}})},v={render:t=>e.jsx(pe,{...t}),parameters:{docs:{description:{story:"Button with clear functionality. The clear button appears when filters are active and can be clicked to reset filters."}}}},x={args:{disabled:!0,appliedFiltersCount:2},parameters:{docs:{description:{story:"Button is disabled and cannot be interacted with. Hover states are suppressed and cursor indicates non-interactive state."}}}};var B,F,k;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default outline icon displayed when no filters are active. Clicking opens the filters panel.'
      }
    }
  }
}`,...(k=(F=m.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var j,I,V;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(V=(I=f.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var O,T,N;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(N=(T=b.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var W,A,D;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args: FiltersButtonProps) => <FiltersButtonInteractive {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive example cycling through states: no filters → 1 filter → 2 filters → 3 filters → reset.'
      }
    }
  }
}`,...(D=(A=h.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var E,L,q;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: 'Active'
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with custom text instead of filter count. Useful for displaying status or custom labels.'
      }
    }
  }
}`,...(q=(L=y.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var H,M,P;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    text: 'Very important filters applied',
    clearable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with longer text to demonstrate text wrapping and layout behavior. Includes clearable functionality.'
      }
    }
  }
}`,...(P=(M=g.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var R,U,z;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args: FiltersButtonProps) => <FiltersButtonWithClear {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Button with clear functionality. The clear button appears when filters are active and can be clicked to reset filters.'
      }
    }
  }
}`,...(z=(U=v.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var K,G,J;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const ge=["Default","WithAppliedFilters","Opened","Interactive","WithText","WithLongText","Clearable","Disabled"];export{v as Clearable,m as Default,x as Disabled,h as Interactive,b as Opened,f as WithAppliedFilters,g as WithLongText,y as WithText,ge as __namedExportsOrder,ye as default};
