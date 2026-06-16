import{j as u}from"./jsx-runtime-2f188e98.js";import{r as d}from"./index-3553ef47.js";import{F as y}from"./filtersButton-93f84a33.js";import"./bind-d8141dee.js";import"./clear-c7bc24e5.js";import"./filterOutline-513d7be6.js";import"./useEllipsisTitle-1cddebe3.js";const Y={title:"Components/FiltersButton",component:y,tags:["autodocs"],args:{appliedFiltersCount:0,isOpen:!1,disabled:!1},argTypes:{appliedFiltersCount:{control:"number",description:"Number of active filters to display in badge",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},isOpen:{control:"boolean",description:"Whether the filters panel is currently open",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},text:{control:"text",description:"Text to display instead of filter count",table:{type:{summary:"string"}}},filtersLabelClassName:{control:"text",description:"CSS class name for the filters label/count element",table:{type:{summary:"string"}}},clearable:{control:"boolean",description:"Whether to show a clear button when filters are active",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},type:{control:"select",options:["button","submit"],description:"HTML button type attribute",table:{type:{summary:"'button' | 'submit'"},defaultValue:{summary:"'button'"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class names",table:{type:{summary:"string"}}},onClick:{action:"clicked",description:"Click event handler",table:{type:{summary:"(event: MouseEvent<HTMLButtonElement>) => void"}}},onClear:{action:"cleared",description:"Callback when clear button is clicked",table:{type:{summary:"() => void"}}},clearButtonAriaLabel:{control:"text",description:"ARIA label for the clear button (for accessibility and internationalization)",table:{type:{summary:"string"},defaultValue:{summary:"'Clear filters'"}}}}},s={parameters:{docs:{description:{story:"Default outline icon displayed when no filters are active. Clicking opens the filters panel."}}}},a={args:{appliedFiltersCount:3},parameters:{docs:{description:{story:"Shows a filled icon and count badge when filters are active. Button appearance changes to indicate active state."}}}},n={args:{isOpen:!0},parameters:{docs:{description:{story:"Visual state when the filters panel is open. Icon color changes to pressed state for visual feedback."}}}},U=e=>{const[t,m]=d.useState(0),[f,r]=d.useState(!1);return u.jsx(y,{...e,appliedFiltersCount:t,isOpen:f,onClick:()=>{const b=t>=3?0:t+1;m(b),r(R=>!R)}})},o={render:e=>u.jsx(U,{...e}),parameters:{docs:{description:{story:"Interactive example cycling through states: no filters → 1 filter → 2 filters → 3 filters → reset."}}}},i={args:{text:"Active"},parameters:{docs:{description:{story:"Button with custom text instead of filter count. Useful for displaying status or custom labels."}}}},l={args:{text:"Very important filters applied",clearable:!0},parameters:{docs:{description:{story:"Button with longer text to demonstrate text wrapping and layout behavior. Includes clearable functionality."}}}},_=e=>{const[t,m]=d.useState(3),[f,r]=d.useState(!1);return u.jsx(y,{...e,appliedFiltersCount:t,isOpen:f,clearable:!0,onClick:()=>{r(b=>!b)},onClear:()=>{m(0),r(!1)}})},c={render:e=>u.jsx(_,{...e}),parameters:{docs:{description:{story:"Button with clear functionality. The clear button appears when filters are active and can be clicked to reset filters."}}}},p={args:{disabled:!0,appliedFiltersCount:2},parameters:{docs:{description:{story:"Button is disabled and cannot be interacted with. Hover states are suppressed and cursor indicates non-interactive state."}}}};var h,g,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default outline icon displayed when no filters are active. Clicking opens the filters panel.'
      }
    }
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,C,w;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(C=a.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var B,F,S;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(S=(F=n.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var k,I,O;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: FiltersButtonProps) => <FiltersButtonInteractive {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive example cycling through states: no filters → 1 filter → 2 filters → 3 filters → reset.'
      }
    }
  }
}`,...(O=(I=o.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var W,T,V;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(V=(T=i.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var A,j,D;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(j=l.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var L,E,H;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: FiltersButtonProps) => <FiltersButtonWithClear {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Button with clear functionality. The clear button appears when filters are active and can be clicked to reset filters.'
      }
    }
  }
}`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var M,N,P;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const Z=["Default","WithAppliedFilters","Opened","Interactive","WithText","WithLongText","Clearable","Disabled"];export{c as Clearable,s as Default,p as Disabled,o as Interactive,n as Opened,a as WithAppliedFilters,l as WithLongText,i as WithText,Z as __namedExportsOrder,Y as default};
