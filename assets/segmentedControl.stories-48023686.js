import{j as e}from"./jsx-runtime-2f188e98.js";import{S as O}from"./segmentedControl-c9570136.js";import"./index-3553ef47.js";import{S as i}from"./plus-150a0ce8.js";import"./bind-d8141dee.js";const A={title:"Components/SegmentedControl",component:O,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onChange:{description:"Callback fired when a non-selected, non-disabled option is clicked"},fullWidth:{control:"boolean",description:"Make control take full available width",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},a={args:{options:[{value:"new",label:"Save as new",selected:!0},{value:"update",label:"Update existing filter"}]}},t={args:{options:[{value:"list",label:"List",selected:!0},{value:"grid",label:"Grid"},{value:"table",label:"Table"}]}},n={args:{options:[{value:"new",label:"Save as new",selected:!0},{value:"update",label:"Update existing filter"}],fullWidth:!0}},s={args:{options:[{value:"new",label:"Save as new",selected:!0},{value:"update",label:"Update existing filter",disabled:!0}]}},l={args:{options:[{value:"new",label:"Save as new",selected:!0,disabled:!0},{value:"update",label:"Update existing filter",disabled:!0}]}},r={args:{options:[{value:"new",label:"Save as new",icon:e.jsx(i,{}),selected:!0},{value:"update",label:"Update existing filter",icon:e.jsx(i,{})}]}},o={args:{options:[{value:"new",label:"Save as new",selected:!0,className:"equal-width-button"},{value:"update",label:"Update existing filter",className:"equal-width-button"}],fullWidth:!0},render:T=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .equal-width-button {
          flex: 1;
          min-width: 0;
        }
      `}),e.jsx("div",{style:{width:"368px"},children:e.jsx(O,{...T})})]}),parameters:{docs:{description:{story:"With fullWidth prop and custom className on options, both buttons have equal width despite different text lengths."}}}};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,m,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,g,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var w,f,x;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,W,y;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(W=l.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var U,q,j;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(j=(q=r.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var C,D,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const G=["Default","ThreeOptions","FullWidth","WithDisabledOption","AllDisabled","WithIcons","EqualWidth"];export{l as AllDisabled,a as Default,o as EqualWidth,n as FullWidth,t as ThreeOptions,s as WithDisabledOption,r as WithIcons,G as __namedExportsOrder,A as default};
