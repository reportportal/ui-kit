import{j as e}from"./jsx-runtime-3169928d.js";import{r as V}from"./index-d33a4676.js";import{D as f}from"./dropdown-a20e84e0.js";import{B as w}from"./button-9c50fab2.js";import"./bind-f5c6fce5.js";import"./floating-ui.react-dom-4a121add.js";import"./index-f454028f.js";import"./useOnClickOutside-0a6ab396.js";import"./keyCodes-e5060420.js";import"./baseIconButton-22d0e691.js";import"./dropdown-a2b64102.js";import"./fieldLabel-d9408bdc.js";import"./checkbox-4cada74b.js";const $={title:"Controls/Dropdown",component:f,parameters:{layout:"centered"},tags:["autodocs"],args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],onChange:()=>{}}},y=({selected:a,total:l,onApply:s})=>e.jsxs("div",{className:"apply-container",children:[e.jsx("p",{className:"info-text",children:`${a} of ${l} selected`}),e.jsx(w,{onClick:s,variant:"text",children:"Apply"})]}),r={args:{value:1}},t={render:a=>{const[l,s]=V.useState([]);return e.jsx("div",{children:e.jsx(f,{...a,onChange:x=>{s(x)},value:l,footer:e.jsx(y,{selected:Array.isArray(l)?l.length:0,total:a.options.length,onApply:()=>{}})})})},args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:"",label:"Nullable"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],className:"dropdown-default",value:1,multiSelect:!0,placeholder:"Select value",isOptionAllVisible:!0,optionAll:{value:"all",label:"All"}}},n={args:{value:2,variant:"ghost"}},o={args:{value:3,disabled:!0}};var u,c,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 1
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var i,d,v;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(v=(d=t.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var m,b,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 2,
    variant: 'ghost'
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,A,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true
  }
}`,...(S=(A=o.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const P=["Default","MultiSelect","Ghost","Disabled"];export{r as Default,o as Disabled,n as Ghost,t as MultiSelect,P as __namedExportsOrder,$ as default};
