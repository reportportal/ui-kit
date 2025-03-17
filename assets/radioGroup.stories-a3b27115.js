import{c as T,j as n}from"./bind-f351ec9c.js";import{r as u}from"./index-c6dae603.js";import{K as y}from"./keyCodes-e5060420.js";const D="_disabled_9d3ij_9",I="_toggler_9d3ij_15",N="_checked_9d3ij_21",w="_input_9d3ij_28",S={"radio-button":"_radio-button_9d3ij_1",disabled:D,"children-container":"_children-container_9d3ij_12",toggler:I,checked:N,input:w},o=T.bind(S),O=({option:e,value:a,onChange:t,onFocus:s,onBlur:l,className:r,...R})=>{const p=u.useRef(null),g=u.useId(),b=String(e.value)===String(a),q=m=>{var h,f;const{keyCode:v}=m;if(v===y.SPACE_KEY_CODE){m.preventDefault(),(h=p.current)==null||h.click();return}v===y.ENTER_KEY_CODE&&(m.preventDefault(),(f=p.current)==null||f.click())};return n.jsxs("label",{id:g,className:o(r,"radio-button",{disabled:e.disabled}),tabIndex:e.disabled?-1:0,onKeyDown:e.disabled?void 0:q,children:[n.jsx("input",{tabIndex:-1,ref:p,type:"radio",className:o("input"),disabled:e.disabled,onChange:t,value:e.value,checked:b,...R}),n.jsx("span",{role:"radio","aria-labelledby":g,"aria-checked":b,className:o("toggler",{disabled:e.disabled,checked:b})}),n.jsx("span",{className:o("children-container"),children:e.label})]})};O.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: RadioValue;
  label: string;
  disabled: boolean;
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ChangeEventHandler<HTMLInputElement>"},description:""}},composes:["HTMLAttributes"]};const c=({options:e,value:a,...t})=>n.jsx("div",{style:{display:"flex",flexDirection:"column"},children:e.map(s=>n.jsx(O,{option:s,value:a,...t},s.value))});c.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: RadioValue;
  label: string;
  disabled: boolean;
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}}],raw:"RadioOption[]"},description:""}},composes:["Omit"]};const L={title:"Radio button",component:c,parameters:{layout:"centered"},tags:["autodocs"]},i={render:e=>{const[a,t]=u.useState(""),s=r=>{t(r.target.value)},l=[{value:"1",label:"Option 1",disabled:!1},{value:"2",label:"Option 2",disabled:!1},{value:"3",label:"Option 3",disabled:!1}];return n.jsx(c,{...e,options:l,value:a,onChange:s})}},d={render:e=>{const[a,t]=u.useState("2"),s=r=>{t(r.target.value)},l=[{value:"1",label:"Option 1",disabled:!0},{value:"2",label:"Option 2",disabled:!0}];return n.jsx(c,{...e,options:l,value:a,onChange:s})}};var _,C,k;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(k=(C=i.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var x,j,E;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(j=d.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const M=["Default","Disabled"];export{i as Default,d as Disabled,M as __namedExportsOrder,L as default};
