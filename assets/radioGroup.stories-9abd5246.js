import{j as g}from"./jsx-runtime-2f188e98.js";import{r as m}from"./index-3553ef47.js";import{R as u}from"./radioGroup-183a5ecc.js";import"./bind-d8141dee.js";import"./keyCodes-e5060420.js";const E={title:"Controls/Radio button",component:u,parameters:{layout:"centered"},tags:["autodocs"]},e={render:a=>{const[t,s]=m.useState(""),o=r=>{s(r.target.value)},l=[{value:"1",label:"Option 1",disabled:!1},{value:"2",label:"Option 2",disabled:!1},{value:"3",label:"Option 3",disabled:!1}];return g.jsx(u,{...a,options:l,value:t,onChange:o})}},n={render:a=>{const[t,s]=m.useState("2"),o=r=>{s(r.target.value)},l=[{value:"1",label:"Option 1",disabled:!0},{value:"2",label:"Option 2",disabled:!0}];return g.jsx(u,{...a,options:l,value:t,onChange:o})}};var i,d,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    const options = [{
      value: '1',
      label: 'Option 1',
      disabled: false
    }, {
      value: '2',
      label: 'Option 2',
      disabled: false
    }, {
      value: '3',
      label: 'Option 3',
      disabled: false
    }];
    return <RadioGroup {...args} options={options} value={value} onChange={handleChange} />;
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,v,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('2');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    const options = [{
      value: '1',
      label: 'Option 1',
      disabled: true
    }, {
      value: '2',
      label: 'Option 2',
      disabled: true
    }];
    return <RadioGroup {...args} options={options} value={value} onChange={handleChange} />;
  }
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const R=["Default","Disabled"];export{e as Default,n as Disabled,R as __namedExportsOrder,E as default};
