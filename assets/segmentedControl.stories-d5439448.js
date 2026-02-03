import{j as a}from"./jsx-runtime-2f188e98.js";import{r as g}from"./index-3553ef47.js";import{c as M}from"./bind-d8141dee.js";import{S as f}from"./plus-150a0ce8.js";const B="_button_8evzz_29",H="_disabled_8evzz_50",J="_active_8evzz_50",K="_icon_8evzz_74",Q={"segmented-control":"_segmented-control_8evzz_16","full-width":"_full-width_8evzz_24",button:B,disabled:H,active:J,icon:K},c=M.bind(Q),p=({options:t,onChange:u,className:F,fullWidth:L=!1,ariaLabel:P})=>{const[m,b]=g.useState(t);g.useEffect(()=>{b(t)},[t]);const R=e=>{if(!e.disabled&&!e.selected){const G=m.map(v=>({...v,selected:v.value===e.value}));b(G),u==null||u(e.value)}};return a.jsx("div",{className:c("segmented-control",F,{"full-width":L}),role:"group","aria-label":P,children:m.map(e=>a.jsxs("button",{type:"button",className:c("button",e.className,{active:e.selected,disabled:e.disabled}),onClick:()=>R(e),disabled:e.disabled,"aria-pressed":e.selected,children:[e.icon&&a.jsx("span",{className:c("icon"),children:e.icon}),e.label]},e.value))})};p.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: SegmentedControlValue;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"SegmentedControlOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: SegmentedControlValue) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};const ee={title:"Components/SegmentedControl",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onChange:{description:"Callback fired when a non-selected, non-disabled option is clicked"},fullWidth:{control:"boolean",description:"Make control take full available width",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},n={args:{options:[{value:"new",label:"Save as new",selected:!0},{value:"update",label:"Update existing filter"}]}},s={args:{options:[{value:"list",label:"List",selected:!0},{value:"grid",label:"Grid"},{value:"table",label:"Table"}]}},l={args:{options:[{value:"new",label:"Save as new",selected:!0},{value:"update",label:"Update existing filter"}],fullWidth:!0}},r={args:{options:[{value:"new",label:"Save as new",selected:!0},{value:"update",label:"Update existing filter",disabled:!0}]}},i={args:{options:[{value:"new",label:"Save as new",selected:!0,disabled:!0},{value:"update",label:"Update existing filter",disabled:!0}]}},o={args:{options:[{value:"new",label:"Save as new",icon:a.jsx(f,{}),selected:!0},{value:"update",label:"Update existing filter",icon:a.jsx(f,{})}]}},d={args:{options:[{value:"new",label:"Save as new",selected:!0,className:"equal-width-button"},{value:"update",label:"Update existing filter",className:"equal-width-button"}],fullWidth:!0},render:t=>a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        .equal-width-button {
          flex: 1;
          min-width: 0;
        }
      `}),a.jsx("div",{style:{width:"368px"},children:a.jsx(p,{...t})})]}),parameters:{docs:{description:{story:"With fullWidth prop and custom className on options, both buttons have equal width despite different text lengths."}}}};var h,w,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'new',
      label: 'Save as new',
      selected: true
    }, {
      value: 'update',
      label: 'Update existing filter'
    }]
  }
}`,...(x=(w=n.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var y,S,_;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'list',
      label: 'List',
      selected: true
    }, {
      value: 'grid',
      label: 'Grid'
    }, {
      value: 'table',
      label: 'Table'
    }]
  }
}`,...(_=(S=s.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var q,W,N;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'new',
      label: 'Save as new',
      selected: true
    }, {
      value: 'update',
      label: 'Update existing filter'
    }],
    fullWidth: true
  }
}`,...(N=(W=l.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var j,k,z;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'new',
      label: 'Save as new',
      selected: true
    }, {
      value: 'update',
      label: 'Update existing filter',
      disabled: true
    }]
  }
}`,...(z=(k=r.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var U,T,C;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'new',
      label: 'Save as new',
      selected: true,
      disabled: true
    }, {
      value: 'update',
      label: 'Update existing filter',
      disabled: true
    }]
  }
}`,...(C=(T=i.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var D,E,O;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'new',
      label: 'Save as new',
      icon: <PlusIcon />,
      selected: true
    }, {
      value: 'update',
      label: 'Update existing filter',
      icon: <PlusIcon />
    }]
  }
}`,...(O=(E=o.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var I,V,A;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'new',
      label: 'Save as new',
      selected: true,
      className: 'equal-width-button'
    }, {
      value: 'update',
      label: 'Update existing filter',
      className: 'equal-width-button'
    }],
    fullWidth: true
  },
  render: args => <>
      <style>{\`
        .equal-width-button {
          flex: 1;
          min-width: 0;
        }
      \`}</style>
      <div style={{
      width: '368px'
    }}>
        <SegmentedControl {...args} />
      </div>
    </>,
  parameters: {
    docs: {
      description: {
        story: 'With fullWidth prop and custom className on options, both buttons have equal width despite different text lengths.'
      }
    }
  }
}`,...(A=(V=d.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};const ae=["Default","ThreeOptions","FullWidth","WithDisabledOption","AllDisabled","WithIcons","EqualWidth"];export{i as AllDisabled,n as Default,d as EqualWidth,l as FullWidth,s as ThreeOptions,r as WithDisabledOption,o as WithIcons,ae as __namedExportsOrder,ee as default};
