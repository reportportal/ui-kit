import{j as e}from"./bind-f351ec9c.js";import{r as V}from"./index-c6dae603.js";import{D as f}from"./dropdown-9ce6333b.js";import{B as w}from"./button-a2f9f7b8.js";import"./floating-ui.react-dom-85de2e36.js";import"./index-c81abf54.js";import"./index-29d2c63d.js";import"./useOnClickOutside-2d1d8568.js";import"./keyCodes-e5060420.js";import"./baseIconButton-bed162ea.js";import"./dropdown-ebbc236b.js";import"./checkbox-d2b17493.js";const _={title:"Dropdown",component:f,parameters:{layout:"centered"},tags:["autodocs"],args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],onChange:()=>{}}},y=({selected:a,total:l,onApply:o})=>e.jsxs("div",{className:"apply-container",children:[e.jsx("p",{className:"info-text",children:`${a} of ${l} selected`}),e.jsx(w,{onClick:o,variant:"text",children:"Apply"})]}),r={args:{value:1}},t={render:a=>{const[l,o]=V.useState([]);return e.jsx("div",{children:e.jsx(f,{...a,onChange:x=>{o(x)},value:l,footer:e.jsx(y,{selected:Array.isArray(l)?l.length:0,total:a.options.length,onApply:()=>{}})})})},args:{options:[{value:1,label:"One"},{value:2,label:"Two"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],className:"dropdown-default",value:1,multiSelect:!0,placeholder:"Select value",isOptionAllVisible:!0,optionAll:{value:"all",label:"All"}}},s={args:{value:2,variant:"ghost"}},n={args:{value:3,disabled:!0}};var u,c,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(d=t.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var m,b,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 2,
    variant: 'ghost'
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,A,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true
  }
}`,...(S=(A=n.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const $=["Default","MultiSelect","Ghost","Disabled"];export{r as Default,n as Disabled,s as Ghost,t as MultiSelect,$ as __namedExportsOrder,_ as default};
