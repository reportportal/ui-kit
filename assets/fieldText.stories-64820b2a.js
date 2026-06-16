import{j as r}from"./jsx-runtime-2f188e98.js";import{r as g}from"./index-3553ef47.js";import{S as pe,a as ce}from"./search-eaecd79a.js";import{a as oe}from"./singleAutocomplete-f996b9ba.js";import"./index-d0bd1ed5.js";import"./bind-d8141dee.js";import"./downshift.esm-92d8e7b2.js";import"./index-4c891f75.js";import"./floating-ui.react-ea29885b.js";import"./clear-c7bc24e5.js";import"./prevPage-746d23db.js";import"./adaptiveTagList-592fb691.js";import"./button-34bf729b.js";import"./close-b4801ed1.js";import"./isEmpty-6ac0b123.js";import"./actionMenu-fb657254.js";import"./details-d199936c.js";import"./baseIconButton-9b03f096.js";import"./popover-8346e5d8.js";import"./floatingUi-c696ea36.js";import"./attachedFile-aa48fc19.js";import"./xls-e116cca0.js";import"./breadcrumbs-2e157599.js";import"./tree-c792b12a.js";import"./bubblesLoader-539cf135.js";import"./bulkPanel-ae499898.js";import"./index-5cf2ac00.js";import"./useOnClickOutside-b0fffa8f.js";import"./keyCodes-e5060420.js";import"./selection-dede4e76.js";import"./chip-3c214fbe.js";import"./tooltip-280b52d3.js";import"./chevronDownDropdown-69a9d5c1.js";import"./warning-72e334ed.js";import"./checkbox-322ca70a.js";import"./table-de70aa52.js";import"./resizeColumn-eebfb371.js";import"./useEllipsisTitle-1cddebe3.js";import"./dropdown-de3e81f9.js";import"./dropdown-1f4530a4.js";import"./fieldLabel-917daddd.js";import"./fieldNumber-925ee977.js";import"./minus-6db56247.js";import"./plus-150a0ce8.js";import"./fieldTextFlex-61eb1205.js";import"./filtersButton-93f84a33.js";import"./filterOutline-513d7be6.js";import"./filterItem-b755c94e.js";import"./issueList-b7d4d2f9.js";import"./modal-ace9019f.js";import"./constants-1e05cdf5.js";import"./multipleAutocomplete-6ec3d6db.js";import"./radioGroup-183a5ecc.js";import"./segmentedControl-c9570136.js";import"./spinLoader-d5daab2a.js";import"./systemAlert-58c5107a.js";import"./success-8512adf6.js";import"./systemMessage-b191d100.js";import"./treeSortableItem-5243dce9.js";import"./themeProvider-37018bdd.js";import"./toggle-3fb3b5fa.js";const de={title:{control:"text",description:"The value for the title attribute.",table:{type:{summary:"string"}}},value:{control:"text",description:"The value entered in the input field.",table:{type:{summary:"string"}}},label:{control:"text",description:"The label text associated with the input.",table:{type:{summary:"string"}}},error:{control:"text",description:"The error message displayed when validation fails.",if:{arg:"touched"},table:{type:{summary:"string"}}},placeholder:{control:"text",description:"The placeholder text displayed in the input.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Indicates whether the input is disabled.",table:{type:{summary:"boolean"}}},clearable:{control:"boolean",description:"Specifies whether a clear button is visible.",table:{type:{summary:"boolean"}}},touched:{control:"boolean",description:"Indicates whether the input has lost focus.",table:{type:{summary:"boolean"}}},defaultWidth:{control:"boolean",description:"Specifies if the input has a default width.",table:{type:{summary:"boolean"}}},isRequired:{control:"boolean",description:"Indicates whether the input is required.",table:{type:{summary:"boolean"}}},collapsible:{control:"boolean",description:"Specifies if the input is collapsible.",table:{type:{summary:"boolean"}}},loading:{control:"boolean",table:{type:{summary:"boolean"}}},type:{options:["text","password","email"],control:"radio",table:{type:{summary:"string"}}}},ae=e=>{const[se,b]=g.useState(e.value||""),o=g.useRef(null);g.useEffect(()=>{e.value&&b(e.value)},[e.value]);const ie=le=>{var f;const{value:y}=le.target;b(y),y==="blur"&&((f=o==null?void 0:o.current)==null||f.blur())},ne=()=>{b("")};return r.jsx(oe,{...e,value:se,onChange:ie,onClear:ne,ref:o})},xr={title:"Fields/Field Text",component:oe,parameters:{layout:"centered",docs:{description:{component:"Reusable UI component for the text input"}}},argTypes:de,tags:["autodocs"],render:e=>r.jsx(ae,{...e})},a={args:{}},s={args:{isRequired:!0,placeholder:"Type here"}},i={args:{label:"Type here"}},n={args:{helpText:"This field is intended for ..."}},l={args:{clearable:!0}},p={args:{error:"The field should not be empty",touched:!0}},c={args:{disabled:!0}},d={args:{defaultWidth:!1}},m={args:{maxLengthDisplay:60}},u={args:{label:"Type here",helpText:"This field is intended for ...",isRequired:!0,placeholder:"Type here",error:"The field should not be empty",touched:!0,hasDoubleMessage:!0,startIcon:r.jsx(pe,{}),collapsible:!0,loading:!0}},h={args:{type:"password"}},t={args:{collapsible:!0,startIcon:r.jsx(ce,{}),maxLength:256,clearable:!0},render:e=>r.jsx("div",{style:{backgroundColor:"#f7f7f8",padding:"10px"},children:r.jsx(ae,{...e})})};var x,T,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {}
}`,...(S=(T=a.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var W,v,D;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    placeholder: 'Type here'
  }
}`,...(D=(v=s.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var w,C,R;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Type here'
  }
}`,...(R=(C=i.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var I,E,F;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    helpText: 'This field is intended for ...'
  }
}`,...(F=(E=n.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var j,q,L;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    clearable: true
  }
}`,...(L=(q=l.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var k,H,M;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    error: 'The field should not be empty',
    touched: true
  }
}`,...(M=(H=p.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var P,_,N;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(N=(_=c.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var V,A,G;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultWidth: false
  }
}`,...(G=(A=d.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var O,U,Y;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    maxLengthDisplay: 60
  }
}`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var z,B,J;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Type here',
    helpText: 'This field is intended for ...',
    isRequired: true,
    placeholder: 'Type here',
    error: 'The field should not be empty',
    touched: true,
    hasDoubleMessage: true,
    startIcon: <DeleteIcon />,
    collapsible: true,
    loading: true
  }
}`,...(J=(B=u.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,Q,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    type: 'password'
  }
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee,re,te;t.parameters={...t.parameters,docs:{...(Z=t.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    startIcon: <SearchIcon />,
    maxLength: 256,
    clearable: true
  },
  render: args => <div style={{
    backgroundColor: '#f7f7f8',
    padding: '10px'
  }}>
      <FieldTextWithHooks {...args} />
    </div>
}`,...(ee=($=t.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Collapsible text input by clicking on the icon",...(te=(re=t.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};const Tr=["Empty","Required","WithLabel","WithHelpText","Clearable","WithError","Disabled","NonDefaultWidth","WithMaxLengthDisplay","FullyDescribed","WithPassword","CollapsibleFieldText"];export{l as Clearable,t as CollapsibleFieldText,c as Disabled,a as Empty,u as FullyDescribed,d as NonDefaultWidth,s as Required,p as WithError,n as WithHelpText,i as WithLabel,m as WithMaxLengthDisplay,h as WithPassword,Tr as __namedExportsOrder,xr as default};
