import{j as a}from"./jsx-runtime-3169928d.js";import{r as c}from"./index-d33a4676.js";import{D as p}from"./dropdown-d6b75455.js";import{B as G}from"./button-1ebb3b4f.js";import"./bind-f5c6fce5.js";import"./floating-ui.react-d5d215a5.js";import"./index-f454028f.js";import"./downshift.esm-2bc4018c.js";import"./tslib.es6-aa9d969b.js";import"./index-89e66079.js";import"./useOnClickOutside-9a420776.js";import"./keyCodes-e5060420.js";import"./baseIconButton-22d0e691.js";import"./clear-04fd327c.js";import"./dropdown-a2b64102.js";import"./tooltip-062ec8dd.js";import"./floatingUi-59569704.js";import"./fieldLabel-465f57b8.js";import"./checkbox-24bb629b.js";const j=[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"group-a",label:"Group A",children:[{value:"group-a-option-1",label:"Group A Option 1"},{value:"group-a-option-2",label:"Group A Option 2"},{value:"group-a-option-3",label:"Group A Option 3"}]},{value:"group-b",label:"Group B",children:[{value:"group-b-option-1",label:"Group B Option 1"},{value:"group-b-option-2",label:"Group B Option 2"},{value:"group-b-option-3",label:"Group B Option 3"}]},{value:"option-3",label:"Option 3"},{value:"option-4",label:"Option 4"}],U={title:"Controls/Dropdown",component:p,parameters:{layout:"centered"},tags:["autodocs"],args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],onChange:()=>{}}},N=({selected:e,total:l,onApply:o})=>a.jsxs("div",{className:"apply-container",children:[a.jsx("p",{className:"info-text",children:`${e} of ${l} selected`}),a.jsx(G,{onClick:o,variant:"text",children:"Apply"})]}),r={render:e=>{var t;const[l,o]=c.useState(e.value??((t=e.options[0])==null?void 0:t.value)??"");return a.jsx(p,{...e,value:l,onChange:d=>{Array.isArray(d)||o(d)}})},args:{placeholder:"Select value"}},n={render:e=>{const[l,o]=c.useState([]);return a.jsx("div",{children:a.jsx(p,{...e,onChange:t=>{o(t)},value:l,footer:a.jsx(N,{selected:Array.isArray(l)?l.length:0,total:e.options.length,onApply:()=>{}})})})},args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:"",label:"Nullable"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],className:"dropdown-default",value:1,multiSelect:!0,placeholder:"Select value",isOptionAllVisible:!0,optionAll:{value:"all",label:"All"},clearable:!0,onClear:()=>{}}},s={args:{value:2,variant:"ghost"}},u={args:{value:3,disabled:!0}},i={render:e=>{const[l,o]=c.useState([]);return a.jsx("div",{className:"dropdown-default",children:a.jsx(p,{...e,onChange:t=>{o(t)},value:l})})},args:{options:j,multiSelect:!0,placeholder:"Select value",isOptionAllVisible:!1,includeGroupValue:!1,variant:"default",isListWidthLimited:!1,optionAll:{label:"all",value:"all"},clearable:!0,onClear:()=>{}}};var v,b,m;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(m=(b=r.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var g,V,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(V=n.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var S,f,A;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 2,
    variant: 'ghost'
  }
}`,...(A=(f=s.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var x,w,D;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true
  }
}`,...(D=(w=u.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var O,y,C;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const X=["Default","MultiSelect","Ghost","Disabled","NestedMultiSelect"];export{r as Default,u as Disabled,s as Ghost,n as MultiSelect,i as NestedMultiSelect,X as __namedExportsOrder,U as default};
