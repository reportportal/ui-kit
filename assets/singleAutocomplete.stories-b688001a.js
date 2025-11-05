import{j as n}from"./jsx-runtime-3169928d.js";import{c as oe}from"./bind-f5c6fce5.js";import{D as g}from"./downshift.esm-2bc4018c.js";import{u as ie}from"./floating-ui.react-7da7fc58.js";import{F as pe}from"./fieldText-930ee862.js";import{A as ue}from"./autocompleteMenu-de97f44f.js";import{b as me}from"./floating-ui.react-dom-4a121add.js";import{r as B}from"./index-d33a4676.js";import"./tslib.es6-aa9d969b.js";import"./index-f454028f.js";import"./clear-04fd327c.js";import"./openEye-29ae22c4.js";import"./baseIconButton-22d0e691.js";import"./spinLoader-8fb5022b.js";import"./maxValueDisplay-9147cf24.js";import"./fieldLabel-465f57b8.js";import"./index-89e66079.js";import"./bubblesLoader-d7befc28.js";import"./button-1ebb3b4f.js";import"./plus-ca4f99ed.js";import"./isEmpty-6ac0b123.js";const le="Enter",de="Tab",ce={"input-wrapper":"_input-wrapper_14hlh_1"},ge=oe.bind(ce),he=0,C=e=>{const{options:a=[],value:o,placeholder:p="",onChange:u=()=>{},onFocus:m=()=>{},onBlur:r=()=>{},disabled:t=!1,inputProps:M={},parseValueToString:h=s=>s===null?"":String(s),minLength:k=1,skipOptionCreation:V=!1,maxLength:J=null,optionVariant:H="",isRequired:K=!1,error:W="",touched:U=!1,setTouch:w=()=>{},createWithoutConfirmation:D=!1,menuClassName:Y="",icon:X,isOptionUnique:I,refFunction:$,stateReducer:z,onStateChange:Q,useFixedPositioning:Z,newItemButtonText:ee="",...te}=e,{refs:b,floatingStyles:ne}=ie({placement:"bottom-start",strategy:Z?"fixed":"absolute",whileElementsMounted:me}),re=(s,l,T)=>({item:d,index:i,...P})=>s({item:d,index:i,isSelected:T!==null&&T===d,...P,isActive:l===i}),se=(s,l)=>{s.key===de&&(s.preventDefault(),l(a.length))};return n.jsx(g,{onChange:u,itemToString:h,selectedItem:o,onStateChange:Q,defaultHighlightedIndex:he,stateReducer:z,children:({getInputProps:s,getItemProps:l,setHighlightedIndex:T,isOpen:d,inputValue:i,highlightedIndex:P,getRootProps:ae,selectItem:A})=>n.jsx(n.Fragment,{children:n.jsxs("div",{className:ge("input-wrapper"),...ae(void 0,{suppressRefError:!0}),ref:b.setReference,children:[n.jsx(pe,{...s({placeholder:t?"":p,maxLength:J||void 0,onFocus:()=>{m()},refFunction:$,onKeyDown:c=>{c.key===le&&c.preventDefault(),i&&d&&se(c,T)},onBlur:c=>{const f=(i??"").trim(),O=!!f,E=O?a.find(x=>h(x)===f):void 0;A(E||(!V&&D&&O?f:null)),r(c),I==null||I(O?!a.some(x=>h(x)===f):null),w==null||w(!0)},disabled:t,defaultWidth:!1,isRequired:K,touched:U,error:W,endIcon:X,...M})}),n.jsx(ue,{isOpen:d,style:ne,ref:b.setFloating,minLength:k,inputValue:(i||"").trim(),getItemProps:re(l,P,o),parseValueToString:h,optionVariant:H,createWithoutConfirmation:D,className:Y,options:a,newItemButtonText:ee,...te})]})})})};C.__docgenInfo={description:"",methods:[],displayName:"SingleAutocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},onStateChange:{required:!0,tsType:{name:"ComponentProps['onStateChange']",raw:"ComponentProps<typeof Downshift<T>>['onStateChange']"},description:""},value:{required:!0,tsType:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ComponentProps['onChange']",raw:"ComponentProps<typeof Downshift<T>>['onChange']"},description:""},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},inputProps:{required:!0,tsType:{name:"ComponentProps",elements:[{name:"FieldText"}],raw:"ComponentProps<typeof FieldText>"},description:""},parseValueToString:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T | null) => string",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},name:"value"}],return:{name:"string"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: T,
  index: number,
  isNew: boolean,
  getItemProps: GetItemPropsT<T>,
) => ReactNode`,signature:{arguments:[{type:{name:"T"},name:"value"},{type:{name:"number"},name:"index"},{type:{name:"boolean"},name:"isNew"},{type:{name:"signature",type:"function",raw:`(
  args: GetItemPropsOptions<T> & AdditionalDownshiftFields,
) => GetItemPropsOptions<T> & AdditionalDownshiftFields`,signature:{arguments:[{type:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]},name:"args"}],return:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]}}},name:"getItemProps"}],return:{name:"ReactNode"}}},description:""},minLength:{required:!0,tsType:{name:"number"},description:""},maxLength:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},async:{required:!0,tsType:{name:"boolean"},description:""},optionVariant:{required:!0,tsType:{name:"ComponentProps['optionVariant']",raw:"ComponentProps<typeof AutocompleteMenu>['optionVariant']"},description:""},isRequired:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},touched:{required:!0,tsType:{name:"boolean"},description:""},setTouch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},createWithoutConfirmation:{required:!0,tsType:{name:"boolean"},description:""},menuClassName:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},skipOptionCreation:{required:!1,tsType:{name:"boolean"},description:""},isOptionUnique:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean | null) => void",signature:{arguments:[{type:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},refFunction:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:""},stateReducer:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  state: DownshiftState<T>,
  changes: StateChangeOptions<T>,
) => Partial<StateChangeOptions<T>>`,signature:{arguments:[{type:{name:"DownshiftState",elements:[{name:"T"}],raw:"DownshiftState<T>"},name:"state"},{type:{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"},name:"changes"}],return:{name:"Partial",elements:[{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"}],raw:"Partial<StateChangeOptions<T>>"}}},description:""},useFixedPositioning:{required:!0,tsType:{name:"boolean"},description:""},getUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},customEmptyListMessage:{required:!1,tsType:{name:"string"},description:""},customNoMatchesMessage:{required:!1,tsType:{name:"string"},description:""},newItemButtonText:{required:!1,tsType:{name:"string"},description:""}}};const v=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],q=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3"],Te={options:v,loading:!0,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e!=null&&e.id?String(e==null?void 0:e.id):"",value:v[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,inputProps:{clearable:!0},maxLength:null},j={options:q,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e?String(e):"",value:q[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,inputProps:{clearable:!0},maxLength:null},Be={title:"Controls/Autocompletes/SingleAutocomplete",component:C,parameters:{...j},tags:["autodocs"]},y={args:{...Te},render:e=>{const[a,o]=B.useState(e.value||{}),p={...e,inputProps:{...e.inputProps,onClear:()=>o({})}},u=(r,t)=>{switch(t.type){case g.stateChangeTypes.keyDownEnter:case g.stateChangeTypes.clickItem:return{...t,highlightedIndex:r.highlightedIndex,inputValue:""};default:return t}},m=r=>{o(r)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:n.jsx(C,{...p,onChange:m,stateReducer:u,value:a})})}},S={args:{...j},render:e=>{const[a,o]=B.useState(e.value||""),p={...e,inputProps:{...e.inputProps,onClear:()=>o("")}},u=(r,t)=>{switch(t.type){case g.stateChangeTypes.keyDownEnter:case g.stateChangeTypes.clickItem:return{...t,highlightedIndex:r.highlightedIndex,inputValue:""};default:return t}},m=r=>{o(r)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:n.jsx(C,{...p,onChange:m,stateReducer:u,value:a})})}};var N,_,R;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...TEST_DATA_OBJECTS
  },
  render: args => {
    const [state, setState] = useState(args.value || {});
    const modifiedArgs = {
      ...args,
      inputProps: {
        ...args.inputProps,
        onClear: () => setState({} as (typeof OPTIONS_OBJECTS)[number])
      }
    };
    const handleStateChange: ComponentProps<typeof SingleAutocomplete<(typeof OPTIONS_OBJECTS)[number]>>['stateReducer'] = (prevState, changes) => {
      switch (changes.type) {
        case Downshift.stateChangeTypes.keyDownEnter:
        case Downshift.stateChangeTypes.clickItem:
          return {
            ...changes,
            highlightedIndex: prevState.highlightedIndex,
            inputValue: ''
          };
        default:
          return changes;
      }
    };
    const onChange: ComponentProps<typeof SingleAutocomplete<(typeof OPTIONS_OBJECTS)[number]>>['onChange'] = newState => {
      setState(newState as (typeof OPTIONS_OBJECTS)[number]);
    };
    return <div style={{
      width: '600px',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    }}>
        <SingleAutocomplete<(typeof OPTIONS_OBJECTS)[number]> {...modifiedArgs} onChange={onChange} stateReducer={handleStateChange} value={state} />
      </div>;
  }
}`,...(R=(_=y.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var F,L,G;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...TEST_DATA_STRINGS
  },
  render: args => {
    const [state, setState] = useState(args.value || '');
    const modifiedArgs = {
      ...args,
      inputProps: {
        ...args.inputProps,
        onClear: () => setState('')
      }
    };
    const handleStateChange: ComponentProps<typeof SingleAutocomplete<(typeof OPTIONS_STRINGS)[number]>>['stateReducer'] = (prevState, changes) => {
      switch (changes.type) {
        case Downshift.stateChangeTypes.keyDownEnter:
        case Downshift.stateChangeTypes.clickItem:
          return {
            ...changes,
            highlightedIndex: prevState.highlightedIndex,
            inputValue: ''
          };
        default:
          return changes;
      }
    };
    const onChange: ComponentProps<typeof SingleAutocomplete<(typeof OPTIONS_STRINGS)[number]>>['onChange'] = newState => {
      setState(newState as (typeof OPTIONS_STRINGS)[number]);
    };
    return <div style={{
      width: '600px',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    }}>
        <SingleAutocomplete {...modifiedArgs} onChange={onChange} stateReducer={handleStateChange} value={state} />
      </div>;
  }
}`,...(G=(L=S.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};const je=["SingleSelectObjects","SingleSelectStrings"];export{y as SingleSelectObjects,S as SingleSelectStrings,je as __namedExportsOrder,Be as default};
