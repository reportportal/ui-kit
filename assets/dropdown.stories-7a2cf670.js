import{j as l}from"./jsx-runtime-3169928d.js";import{r as c}from"./index-d33a4676.js";import{D as n}from"./dropdown-8fac4e6f.js";import{B as k}from"./button-1ebb3b4f.js";import"./bind-f5c6fce5.js";import"./floating-ui.react-d5d215a5.js";import"./index-f454028f.js";import"./downshift.esm-2bc4018c.js";import"./tslib.es6-aa9d969b.js";import"./index-89e66079.js";import"./useOnClickOutside-9a420776.js";import"./keyCodes-e5060420.js";import"./baseIconButton-22d0e691.js";import"./clear-04fd327c.js";import"./dropdown-a2b64102.js";import"./tooltip-062ec8dd.js";import"./floatingUi-59569704.js";import"./fieldLabel-465f57b8.js";import"./checkbox-24bb629b.js";const B=[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"group-a",label:"Group A",children:[{value:"group-a-option-1",label:"Group A Option 1"},{value:"group-a-option-2",label:"Group A Option 2"},{value:"group-a-option-3",label:"Group A Option 3"}]},{value:"group-b",label:"Group B",children:[{value:"group-b-option-1",label:"Group B Option 1"},{value:"group-b-option-2",label:"Group B Option 2"},{value:"group-b-option-3",label:"Group B Option 3"}]},{value:"option-3",label:"Option 3"},{value:"option-4",label:"Option 4"}],ee={title:"Controls/Dropdown",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],onChange:()=>{}}},T=({selected:e,total:t,onApply:a})=>l.jsxs("div",{className:"apply-container",children:[l.jsx("p",{className:"info-text",children:`${e} of ${t} selected`}),l.jsx(k,{onClick:a,variant:"text",children:"Apply"})]}),r={render:e=>{var o;const[t,a]=c.useState(e.value??((o=e.options[0])==null?void 0:o.value)??"");return l.jsx(n,{...e,value:t,onChange:v=>{Array.isArray(v)||a(v)}})},args:{placeholder:"Select value"}},s={render:e=>{const[t,a]=c.useState([]);return l.jsx("div",{children:l.jsx(n,{...e,onChange:o=>{a(o)},value:t,footer:l.jsx(T,{selected:Array.isArray(t)?t.length:0,total:e.options.length,onApply:()=>{}})})})},args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:"",label:"Nullable"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],className:"dropdown-default",value:1,multiSelect:!0,placeholder:"Select value",isOptionAllVisible:!0,optionAll:{value:"all",label:"All"},clearable:!0,onClear:()=>{}}},u={args:{value:2,variant:"ghost"}},i={args:{value:3,disabled:!0}},p={render:e=>{const[t,a]=c.useState([]);return l.jsx("div",{className:"dropdown-default",children:l.jsx(n,{...e,onChange:o=>{a(o)},value:t})})},args:{options:B,multiSelect:!0,placeholder:"Select value",isOptionAllVisible:!1,includeGroupValue:!1,variant:"default",isListWidthLimited:!1,optionAll:{label:"all",value:"all"},clearable:!0,onClear:()=>{}}},d={render:e=>{const[t,a]=c.useState([]);return l.jsxs("div",{className:"dropdown-default",style:{width:"300px"},children:[l.jsx("p",{style:{marginBottom:"16px"},children:"This example demonstrates tooltip rendering in a portal to prevent clipping when the dropdown is inside a container with overflow hidden (e.g., SidePanel)."}),l.jsx(n,{...e,onChange:o=>{a(o)},value:t,tooltipPortalRoot:document.body})]})},args:{options:[{value:"very-long-option-1",label:"Product bug, Critical, Automation bug, Kotlin, Automation bug with very-very long defect type name"},{value:"very-long-option-2",label:"Another extremely long option name that will be truncated and show tooltip"},{value:"option-3",label:"Option 3"},{value:"option-4",label:"Option 4"}],multiSelect:!0,placeholder:"Select value",clearable:!0,onClear:()=>{}},parameters:{docs:{source:{code:`const [selectedValues, setSelectedValues] = useState([]);

return (
  <div style={{ width: '300px' }}>
    <Dropdown
      options={[
        {
          value: 'very-long-option-1',
          label: 'Product bug, Critical, Automation bug, Kotlin, Automation bug with very-very long defect type name',
        },
        {
          value: 'very-long-option-2',
          label: 'Another extremely long option name that will be truncated and show tooltip',
        },
        { value: 'option-3', label: 'Option 3' },
        { value: 'option-4', label: 'Option 4' },
      ]}
      multiSelect
      placeholder="Select value"
      clearable
      value={selectedValues}
      onChange={(nextValue) => setSelectedValues(nextValue)}
      tooltipPortalRoot={document.body}
    />
  </div>
);`,language:"tsx"}}}};var b,m,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: DropdownProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValue, setSelectedValue] = useState<DropdownValue>(args.value as DropdownValue ?? args.options[0]?.value as DropdownValue ?? '');
    return <Dropdown {...args} value={selectedValue} onChange={nextValue => {
      if (!Array.isArray(nextValue)) {
        setSelectedValue(nextValue);
      }
    }} />;
  },
  args: {
    placeholder: 'Select value'
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,V,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: DropdownProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValues, setSelectedValues] = useState<DropdownValue | DropdownValue[]>([]);
    return <div>
        <Dropdown {...args} onChange={value => {
        setSelectedValues(value);
      }} value={selectedValues} footer={<FooterApply selected={Array.isArray(selectedValues) ? selectedValues.length : 0} total={args.options.length} onApply={() => {}} />} />
      </div>;
  },
  args: {
    options: [{
      value: 1,
      label: 'One'
    }, {
      value: 2,
      label: 'Two'
    }, {
      value: '',
      label: 'Nullable'
    }, {
      value: 4,
      label: '4'
    }, {
      value: 5,
      label: '5'
    }, {
      value: 6,
      label: '6'
    }, {
      value: 7,
      label: '7'
    }, {
      value: 8,
      label: '8'
    }, {
      value: 9,
      label: '9'
    }],
    className: 'dropdown-default',
    value: 1,
    multiSelect: true,
    placeholder: 'Select value',
    isOptionAllVisible: true,
    optionAll: {
      value: 'all',
      label: 'All'
    },
    clearable: true,
    onClear: () => {}
  }
}`,...(S=(V=s.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var w,y,x;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: 2,
    variant: 'ghost'
  }
}`,...(x=(y=u.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var A,f,O;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true
  }
}`,...(O=(f=i.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var D,C,P;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: DropdownProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValues, setSelectedValues] = useState<DropdownValue | DropdownValue[]>([]);
    return <div className="dropdown-default">
        <Dropdown {...args} onChange={nextValue => {
        setSelectedValues(nextValue);
      }} value={selectedValues} />
      </div>;
  },
  args: {
    options: nestedOptions,
    multiSelect: true,
    placeholder: 'Select value',
    isOptionAllVisible: false,
    includeGroupValue: false,
    variant: 'default',
    isListWidthLimited: false,
    optionAll: {
      label: 'all',
      value: 'all'
    },
    clearable: true,
    onClear: () => {}
  }
}`,...(P=(C=p.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var j,G,N;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args: DropdownProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValues, setSelectedValues] = useState<DropdownValue | DropdownValue[]>([]);
    return <div className="dropdown-default" style={{
      width: '300px'
    }}>
        <p style={{
        marginBottom: '16px'
      }}>
          This example demonstrates tooltip rendering in a portal to prevent clipping when the
          dropdown is inside a container with overflow hidden (e.g., SidePanel).
        </p>
        <Dropdown {...args} onChange={nextValue => {
        setSelectedValues(nextValue);
      }} value={selectedValues} tooltipPortalRoot={document.body} />
      </div>;
  },
  args: {
    options: [{
      value: 'very-long-option-1',
      label: 'Product bug, Critical, Automation bug, Kotlin, Automation bug with very-very long defect type name'
    }, {
      value: 'very-long-option-2',
      label: 'Another extremely long option name that will be truncated and show tooltip'
    }, {
      value: 'option-3',
      label: 'Option 3'
    }, {
      value: 'option-4',
      label: 'Option 4'
    }],
    multiSelect: true,
    placeholder: 'Select value',
    clearable: true,
    onClear: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: \`const [selectedValues, setSelectedValues] = useState([]);

return (
  <div style={{ width: '300px' }}>
    <Dropdown
      options={[
        {
          value: 'very-long-option-1',
          label: 'Product bug, Critical, Automation bug, Kotlin, Automation bug with very-very long defect type name',
        },
        {
          value: 'very-long-option-2',
          label: 'Another extremely long option name that will be truncated and show tooltip',
        },
        { value: 'option-3', label: 'Option 3' },
        { value: 'option-4', label: 'Option 4' },
      ]}
      multiSelect
      placeholder="Select value"
      clearable
      value={selectedValues}
      onChange={(nextValue) => setSelectedValues(nextValue)}
      tooltipPortalRoot={document.body}
    />
  </div>
);\`,
        language: 'tsx'
      }
    }
  }
}`,...(N=(G=d.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};const le=["Default","MultiSelect","Ghost","Disabled","NestedMultiSelect","WithTooltipPortal"];export{r as Default,i as Disabled,u as Ghost,s as MultiSelect,p as NestedMultiSelect,d as WithTooltipPortal,le as __namedExportsOrder,ee as default};
