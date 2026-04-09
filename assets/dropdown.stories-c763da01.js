import{j as e}from"./jsx-runtime-2f188e98.js";import{r as s}from"./index-3553ef47.js";import{D as n}from"./dropdown-458facd6.js";import{B as F}from"./button-34bf729b.js";import"./index-d0bd1ed5.js";import"./bind-d8141dee.js";import"./floating-ui.react-dom-a5cc5ea5.js";import"./downshift.esm-ce98d9a3.js";import"./index-4c891f75.js";import"./tslib.es6-e2fc4f1b.js";import"./index-5cf2ac00.js";import"./keyCodes-e5060420.js";import"./baseIconButton-9b03f096.js";import"./clear-c7bc24e5.js";import"./dropdown-1f4530a4.js";import"./fieldLabel-917daddd.js";import"./adaptiveTagList-592fb691.js";import"./close-b4801ed1.js";import"./isEmpty-6ac0b123.js";import"./useEllipsisTitle-1cddebe3.js";import"./checkbox-322ca70a.js";const U=[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"group-a",label:"Group A",children:[{value:"group-a-option-1",label:"Group A Option 1"},{value:"group-a-option-2",label:"Group A Option 2"},{value:"group-a-option-3",label:"Group A Option 3"}]},{value:"group-b",label:"Group B",children:[{value:"group-b-option-1",label:"Group B Option 1"},{value:"group-b-option-2",label:"Group B Option 2"},{value:"group-b-option-3",label:"Group B Option 3"}]},{value:"option-3",label:"Option 3"},{value:"option-4",label:"Option 4"}],pe={title:"Controls/Dropdown",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],onChange:()=>{}}},E=({selected:l,total:a,onApply:t})=>e.jsxs("div",{className:"apply-container",children:[e.jsx("p",{className:"info-text",children:`${l} of ${a} selected`}),e.jsx(F,{onClick:t,variant:"text",children:"Apply"})]}),r={render:l=>{var o;const[a,t]=s.useState(l.value??((o=l.options[0])==null?void 0:o.value)??"");return e.jsx(n,{...l,value:a,onChange:m=>{Array.isArray(m)||t(m)}})},args:{placeholder:"Select value"}},u={render:l=>{const[a,t]=s.useState([]);return e.jsx("div",{children:e.jsx(n,{...l,onChange:o=>{t(o)},value:a,footer:e.jsx(E,{selected:Array.isArray(a)?a.length:0,total:l.options.length,onApply:()=>{}})})})},args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:"",label:"Nullable"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],className:"dropdown-default",value:1,multiSelect:!0,placeholder:"Select value",isOptionAllVisible:!0,optionAll:{value:"all",label:"All"},clearable:!0,onClear:()=>{}}},i={render:l=>{const[a,t]=s.useState([]);return e.jsx("div",{children:e.jsx(n,{...l,onChange:o=>{t(o)},value:a,footer:e.jsx(E,{selected:Array.isArray(a)?a.length:0,total:l.options.length,onApply:()=>{}})})})},args:{options:[{value:1,label:"Product Bug"},{value:2,label:"Automation Bug"},{value:3,label:"System Issue"},{value:4,label:"To Investigate"},{value:5,label:"No Defect"},{value:6,label:"Performance"},{value:7,label:"Security"},{value:8,label:"UI/UX Issue"},{value:9,label:"Documentation"}],className:"dropdown-default",multiSelect:!0,isMultiSelectWithTags:!0,placeholder:"Select defect types",isOptionAllVisible:!0,optionAll:{value:"all",label:"All"},clearable:!0,onClear:()=>{}}},p={args:{value:2,variant:"ghost"}},d={args:{value:3,disabled:!0}},c={render:l=>{const[a,t]=s.useState([]);return e.jsx("div",{className:"dropdown-default",children:e.jsx(n,{...l,onChange:o=>{t(o)},value:a})})},args:{options:U,multiSelect:!0,placeholder:"Select value",isOptionAllVisible:!1,includeGroupValue:!1,variant:"default",isListWidthLimited:!1,optionAll:{label:"all",value:"all"},clearable:!0,onClear:()=>{}}},v={render:l=>{const[a,t]=s.useState([]);return e.jsx("div",{className:"dropdown-default",children:e.jsx(n,{...l,onChange:o=>{t(o)},value:a})})},args:{options:U,multiSelect:!0,isMultiSelectWithTags:!0,placeholder:"Select options",isOptionAllVisible:!1,includeGroupValue:!1,variant:"default",isListWidthLimited:!1,optionAll:{label:"all",value:"all"},clearable:!0,onClear:()=>{}}},b={render:l=>{const[a,t]=s.useState("");return e.jsxs("div",{className:"dropdown-default",style:{width:"300px"},children:[e.jsx("p",{style:{marginBottom:"16px"},children:"This example demonstrates dropdown menu rendering in a portal to prevent clipping and overflow issues when the dropdown is inside a container with overflow hidden (e.g., Modal, SidePanel)."}),e.jsxs("p",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:[e.jsx("strong",{children:"When to use:"})," Use ",e.jsx("code",{children:"menuPortalRoot"})," when the dropdown is inside a container with ",e.jsx("code",{children:"overflow: hidden"})," (e.g., Modal, SidePanel) to prevent menu clipping. The scroll position is automatically preserved when opening the dropdown in a portal."]}),e.jsx(n,{...l,onChange:o=>{t(o)},value:a,menuPortalRoot:document.body})]})},args:{options:[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"},{value:"option-4",label:"Option 4"},{value:"option-5",label:"Option 5"},{value:"option-6",label:"Option 6"}],placeholder:"Select value"},parameters:{docs:{source:{code:`const [selectedValue, setSelectedValue] = useState('');

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
);`,language:"tsx"}}}};var h,g,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var V,w,f;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(f=(w=u.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var x,O,A;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(A=(O=i.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var y,D,C;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: 2,
    variant: 'ghost'
  }
}`,...(C=(D=p.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var j,P,N;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true
  }
}`,...(N=(P=d.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var M,T,W;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(T=c.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var B,G,k;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(G=v.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var I,L,R;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(L=b.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const de=["Default","MultiSelect","MultiSelectWithTags","Ghost","Disabled","NestedMultiSelect","NestedMultiSelectWithTags","WithMenuPortal"];export{r as Default,d as Disabled,p as Ghost,u as MultiSelect,i as MultiSelectWithTags,c as NestedMultiSelect,v as NestedMultiSelectWithTags,b as WithMenuPortal,de as __namedExportsOrder,pe as default};
