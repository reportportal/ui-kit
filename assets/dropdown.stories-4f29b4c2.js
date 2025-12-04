import{j as e}from"./jsx-runtime-3169928d.js";import{r}from"./index-d33a4676.js";import{D as n}from"./dropdown-0fdd5eb1.js";import{B as _}from"./button-1ebb3b4f.js";import"./index-f454028f.js";import"./bind-f5c6fce5.js";import"./floating-ui.react-09d3bb8c.js";import"./downshift.esm-fe19be7f.js";import"./tslib.es6-690a75fa.js";import"./keyCodes-e5060420.js";import"./baseIconButton-22d0e691.js";import"./clear-04fd327c.js";import"./dropdown-a2b64102.js";import"./tooltip-d85d779b.js";import"./floatingUi-59569704.js";import"./fieldLabel-465f57b8.js";import"./adaptiveTagList-c8c662c9.js";import"./close-3561dacf.js";import"./isEmpty-6ac0b123.js";import"./checkbox-24bb629b.js";const z=[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"group-a",label:"Group A",children:[{value:"group-a-option-1",label:"Group A Option 1"},{value:"group-a-option-2",label:"Group A Option 2"},{value:"group-a-option-3",label:"Group A Option 3"}]},{value:"group-b",label:"Group B",children:[{value:"group-b-option-1",label:"Group B Option 1"},{value:"group-b-option-2",label:"Group B Option 2"},{value:"group-b-option-3",label:"Group B Option 3"}]},{value:"option-3",label:"Option 3"},{value:"option-4",label:"Option 4"}],ve={title:"Controls/Dropdown",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],onChange:()=>{}}},X=({selected:l,total:t,onApply:o})=>e.jsxs("div",{className:"apply-container",children:[e.jsx("p",{className:"info-text",children:`${l} of ${t} selected`}),e.jsx(_,{onClick:o,variant:"text",children:"Apply"})]}),s={render:l=>{var a;const[t,o]=r.useState(l.value??((a=l.options[0])==null?void 0:a.value)??"");return e.jsx(n,{...l,value:t,onChange:g=>{Array.isArray(g)||o(g)}})},args:{placeholder:"Select value"}},u={render:l=>{const[t,o]=r.useState([]);return e.jsx("div",{children:e.jsx(n,{...l,onChange:a=>{o(a)},value:t,footer:e.jsx(X,{selected:Array.isArray(t)?t.length:0,total:l.options.length,onApply:()=>{}})})})},args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:"",label:"Nullable"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],className:"dropdown-default",value:1,multiSelect:!0,placeholder:"Select value",isOptionAllVisible:!0,optionAll:{value:"all",label:"All"},clearable:!0,onClear:()=>{}}},i={render:l=>{const[t,o]=r.useState([]);return e.jsx("div",{children:e.jsx(n,{...l,onChange:a=>{o(a)},value:t,footer:e.jsx(X,{selected:Array.isArray(t)?t.length:0,total:l.options.length,onApply:()=>{}})})})},args:{options:[{value:1,label:"Product Bug"},{value:2,label:"Automation Bug"},{value:3,label:"System Issue"},{value:4,label:"To Investigate"},{value:5,label:"No Defect"},{value:6,label:"Performance"},{value:7,label:"Security"},{value:8,label:"UI/UX Issue"},{value:9,label:"Documentation"}],className:"dropdown-default",multiSelect:!0,isMultiSelectWithTags:!0,placeholder:"Select defect types",isOptionAllVisible:!0,optionAll:{value:"all",label:"All"},clearable:!0,onClear:()=>{}}},p={args:{value:2,variant:"ghost"}},d={args:{value:3,disabled:!0}},c={render:l=>{const[t,o]=r.useState([]);return e.jsx("div",{className:"dropdown-default",children:e.jsx(n,{...l,onChange:a=>{o(a)},value:t})})},args:{options:z,multiSelect:!0,placeholder:"Select value",isOptionAllVisible:!1,includeGroupValue:!1,variant:"default",isListWidthLimited:!1,optionAll:{label:"all",value:"all"},clearable:!0,onClear:()=>{}}},v={render:l=>{const[t,o]=r.useState([]);return e.jsx("div",{className:"dropdown-default",children:e.jsx(n,{...l,onChange:a=>{o(a)},value:t})})},args:{options:z,multiSelect:!0,isMultiSelectWithTags:!0,placeholder:"Select options",isOptionAllVisible:!1,includeGroupValue:!1,variant:"default",isListWidthLimited:!1,optionAll:{label:"all",value:"all"},clearable:!0,onClear:()=>{}}},m={render:l=>{const[t,o]=r.useState([]);return e.jsxs("div",{className:"dropdown-default",style:{width:"300px"},children:[e.jsx("p",{style:{marginBottom:"16px"},children:"This example demonstrates tooltip rendering in a portal to prevent clipping when the dropdown is inside a container with overflow hidden (e.g., SidePanel)."}),e.jsx(n,{...l,onChange:a=>{o(a)},value:t,tooltipPortalRoot:document.body})]})},args:{options:[{value:"very-long-option-1",label:"Product bug, Critical, Automation bug, Kotlin, Automation bug with very-very long defect type name"},{value:"very-long-option-2",label:"Another extremely long option name that will be truncated and show tooltip"},{value:"option-3",label:"Option 3"},{value:"option-4",label:"Option 4"}],multiSelect:!0,placeholder:"Select value",clearable:!0,onClear:()=>{}},parameters:{docs:{source:{code:`const [selectedValues, setSelectedValues] = useState([]);

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
);`,language:"tsx"}}}},b={render:l=>{const[t,o]=r.useState("");return e.jsxs("div",{className:"dropdown-default",style:{width:"300px"},children:[e.jsx("p",{style:{marginBottom:"16px"},children:"This example demonstrates dropdown menu rendering in a portal to prevent clipping and overflow issues when the dropdown is inside a container with overflow hidden (e.g., Modal, SidePanel)."}),e.jsxs("p",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:[e.jsx("strong",{children:"When to use:"})," Use ",e.jsx("code",{children:"menuPortalRoot"})," when the dropdown is inside a container with ",e.jsx("code",{children:"overflow: hidden"})," (e.g., Modal, SidePanel) to prevent menu clipping. The scroll position is automatically preserved when opening the dropdown in a portal."]}),e.jsx(n,{...l,onChange:a=>{o(a)},value:t,menuPortalRoot:document.body})]})},args:{options:[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"},{value:"option-4",label:"Option 4"},{value:"option-5",label:"Option 5"},{value:"option-6",label:"Option 6"}],placeholder:"Select value"},parameters:{docs:{source:{code:`const [selectedValue, setSelectedValue] = useState('');

return (
  <div style={{ width: '300px' }}>
    <Dropdown
      options={[
        { value: 'option-1', label: 'Option 1' },
        { value: 'option-2', label: 'Option 2' },
        { value: 'option-3', label: 'Option 3' },
        { value: 'option-4', label: 'Option 4' },
        { value: 'option-5', label: 'Option 5' },
        { value: 'option-6', label: 'Option 6' },
      ]}
      placeholder="Select value"
      value={selectedValue}
      onChange={(nextValue) => setSelectedValue(nextValue)}
      menuPortalRoot={document.body}
    />
  </div>
);`,language:"tsx"}}}};var h,S,V;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(V=(S=s.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var w,x,y;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(y=(x=u.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,A,O;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      label: 'Product Bug'
    }, {
      value: 2,
      label: 'Automation Bug'
    }, {
      value: 3,
      label: 'System Issue'
    }, {
      value: 4,
      label: 'To Investigate'
    }, {
      value: 5,
      label: 'No Defect'
    }, {
      value: 6,
      label: 'Performance'
    }, {
      value: 7,
      label: 'Security'
    }, {
      value: 8,
      label: 'UI/UX Issue'
    }, {
      value: 9,
      label: 'Documentation'
    }],
    className: 'dropdown-default',
    multiSelect: true,
    isMultiSelectWithTags: true,
    placeholder: 'Select defect types',
    isOptionAllVisible: true,
    optionAll: {
      value: 'all',
      label: 'All'
    },
    clearable: true,
    onClear: () => {}
  }
}`,...(O=(A=i.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var D,C,P;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: 2,
    variant: 'ghost'
  }
}`,...(P=(C=p.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var j,N,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true
  }
}`,...(T=(N=d.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var M,W,B;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(B=(W=c.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var k,G,R;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    isMultiSelectWithTags: true,
    placeholder: 'Select options',
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
}`,...(R=(G=v.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var I,L,U;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(U=(L=m.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var K,E,F;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: (args: DropdownProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValue, setSelectedValue] = useState<DropdownValue | DropdownValue[]>('');
    return <div className="dropdown-default" style={{
      width: '300px'
    }}>
        <p style={{
        marginBottom: '16px'
      }}>
          This example demonstrates dropdown menu rendering in a portal to prevent clipping and
          overflow issues when the dropdown is inside a container with overflow hidden (e.g., Modal,
          SidePanel).
        </p>
        <p style={{
        marginBottom: '16px',
        fontSize: '14px',
        color: '#666'
      }}>
          <strong>When to use:</strong> Use <code>menuPortalRoot</code> when the dropdown is inside
          a container with <code>overflow: hidden</code> (e.g., Modal, SidePanel) to prevent menu
          clipping. The scroll position is automatically preserved when opening the dropdown in a
          portal.
        </p>
        <Dropdown {...args} onChange={nextValue => {
        setSelectedValue(nextValue);
      }} value={selectedValue} menuPortalRoot={document.body} />
      </div>;
  },
  args: {
    options: [{
      value: 'option-1',
      label: 'Option 1'
    }, {
      value: 'option-2',
      label: 'Option 2'
    }, {
      value: 'option-3',
      label: 'Option 3'
    }, {
      value: 'option-4',
      label: 'Option 4'
    }, {
      value: 'option-5',
      label: 'Option 5'
    }, {
      value: 'option-6',
      label: 'Option 6'
    }],
    placeholder: 'Select value'
  },
  parameters: {
    docs: {
      source: {
        code: \`const [selectedValue, setSelectedValue] = useState('');

return (
  <div style={{ width: '300px' }}>
    <Dropdown
      options={[
        { value: 'option-1', label: 'Option 1' },
        { value: 'option-2', label: 'Option 2' },
        { value: 'option-3', label: 'Option 3' },
        { value: 'option-4', label: 'Option 4' },
        { value: 'option-5', label: 'Option 5' },
        { value: 'option-6', label: 'Option 6' },
      ]}
      placeholder="Select value"
      value={selectedValue}
      onChange={(nextValue) => setSelectedValue(nextValue)}
      menuPortalRoot={document.body}
    />
  </div>
);\`,
        language: 'tsx'
      }
    }
  }
}`,...(F=(E=b.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const me=["Default","MultiSelect","MultiSelectWithTags","Ghost","Disabled","NestedMultiSelect","NestedMultiSelectWithTags","WithTooltipPortal","WithMenuPortal"];export{s as Default,d as Disabled,p as Ghost,u as MultiSelect,i as MultiSelectWithTags,c as NestedMultiSelect,v as NestedMultiSelectWithTags,b as WithMenuPortal,m as WithTooltipPortal,me as __namedExportsOrder,ve as default};
