import{j as e}from"./jsx-runtime-3169928d.js";import{r as V}from"./index-d33a4676.js";import{D as f}from"./dropdown-dfa3bda7.js";import{B as w}from"./button-1ebb3b4f.js";import"./bind-f5c6fce5.js";import"./floating-ui.react-dom-4a121add.js";import"./index-f454028f.js";import"./downshift.esm-2bc4018c.js";import"./tslib.es6-aa9d969b.js";import"./index-89e66079.js";import"./useOnClickOutside-9a420776.js";import"./keyCodes-e5060420.js";import"./baseIconButton-22d0e691.js";import"./dropdown-a2b64102.js";import"./fieldLabel-465f57b8.js";import"./checkbox-24bb629b.js";const q={title:"Controls/Dropdown",component:f,parameters:{layout:"centered"},tags:["autodocs"],args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],onChange:()=>{}}},y=({selected:a,total:l,onApply:s})=>e.jsxs("div",{className:"apply-container",children:[e.jsx("p",{className:"info-text",children:`${a} of ${l} selected`}),e.jsx(w,{onClick:s,variant:"text",children:"Apply"})]}),r={args:{value:1}},t={render:a=>{const[l,s]=V.useState([]);return e.jsx("div",{children:e.jsx(f,{...a,onChange:x=>{s(x)},value:l,footer:e.jsx(y,{selected:Array.isArray(l)?l.length:0,total:a.options.length,onApply:()=>{}})})})},args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:"",label:"Nullable"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],className:"dropdown-default",value:1,multiSelect:!0,placeholder:"Select value",isOptionAllVisible:!0,optionAll:{value:"all",label:"All"}}},o={args:{value:2,variant:"ghost"}},n={args:{value:3,disabled:!0}};var u,p,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 1
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,d,v;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    }
  }
}`,...(v=(d=t.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var m,b,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 2,
    variant: 'ghost'
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,A,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true
  }
}`,...(S=(A=n.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const z=["Default","MultiSelect","Ghost","Disabled"];export{r as Default,n as Disabled,o as Ghost,t as MultiSelect,z as __namedExportsOrder,q as default};
