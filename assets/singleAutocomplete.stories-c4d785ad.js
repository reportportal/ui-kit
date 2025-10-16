import{j as n}from"./jsx-runtime-3169928d.js";import{c as oe}from"./bind-f5c6fce5.js";import{D as g}from"./downshift.esm-2bc4018c.js";import{u as ie}from"./floating-ui.react-7da7fc58.js";import{F as pe}from"./fieldText-f1cfbf28.js";import{A as ue}from"./autocompleteMenu-de97f44f.js";import{b as le}from"./floating-ui.react-dom-4a121add.js";import{r as j}from"./index-d33a4676.js";import"./tslib.es6-aa9d969b.js";import"./index-f454028f.js";import"./clear-04fd327c.js";import"./baseIconButton-22d0e691.js";import"./spinLoader-8fb5022b.js";import"./maxValueDisplay-9147cf24.js";import"./fieldLabel-465f57b8.js";import"./index-89e66079.js";import"./bubblesLoader-d7befc28.js";import"./button-1ebb3b4f.js";import"./plus-ca4f99ed.js";import"./isEmpty-6ac0b123.js";const me="Enter",de="Tab",ce={"input-wrapper":"_input-wrapper_14hlh_1"},ge=oe.bind(ce),he=0,C=e=>{const{options:s=[],value:o,placeholder:p="",onChange:u=()=>{},onFocus:l=()=>{},onBlur:r=()=>{},disabled:t=!1,inputProps:k={},parseValueToString:h=a=>a===null?"":String(a),minLength:V=1,skipOptionCreation:J=!1,maxLength:G=null,optionVariant:H="",isRequired:K=!1,error:W="",touched:U=!1,setTouch:w=()=>{},createWithoutConfirmation:E=!1,menuClassName:Y="",icon:X,isOptionUnique:x,refFunction:$,stateReducer:z,onStateChange:Q,useFixedPositioning:Z,newItemButtonText:ee="",...te}=e,{refs:v,floatingStyles:ne}=ie({placement:"bottom-start",strategy:Z?"fixed":"absolute",whileElementsMounted:le}),re=(a,m,T)=>({item:d,index:i,...A})=>a({item:d,index:i,isSelected:T!==null&&T===d,...A,isActive:m===i}),ae=(a,m)=>{a.key===de&&(a.preventDefault(),m(s.length))};return n.jsx(g,{onChange:u,itemToString:h,selectedItem:o,onStateChange:Q,defaultHighlightedIndex:he,stateReducer:z,children:({getInputProps:a,getItemProps:m,setHighlightedIndex:T,isOpen:d,inputValue:i,highlightedIndex:A,getRootProps:se,selectItem:I})=>n.jsx(n.Fragment,{children:n.jsxs("div",{className:ge("input-wrapper"),...se(void 0,{suppressRefError:!0}),ref:v.setReference,children:[n.jsx(pe,{...a({placeholder:t?"":p,maxLength:G||void 0,onFocus:()=>{l()},refFunction:$,onKeyDown:c=>{c.key===me&&c.preventDefault(),i&&d&&ae(c,T)},onBlur:c=>{const S=(i??"").trim(),O=!!S,b=O?s.find(P=>h(P)===S):void 0;I(b||(!J&&E&&O?S:null)),r(c),x==null||x(O?!s.some(P=>h(P)===S):null),w==null||w(!0)},disabled:t,defaultWidth:!1,isRequired:K,touched:U,error:W,endIcon:X,...k})}),n.jsx(ue,{isOpen:d,style:ne,ref:v.setFloating,minLength:V,inputValue:(i||"").trim(),getItemProps:re(m,A,o),parseValueToString:h,optionVariant:H,createWithoutConfirmation:E,className:Y,options:s,newItemButtonText:ee,...te})]})})})};C.__docgenInfo={description:"",methods:[],displayName:"SingleAutocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},onStateChange:{required:!0,tsType:{name:"ComponentProps['onStateChange']",raw:"ComponentProps<typeof Downshift<T>>['onStateChange']"},description:""},value:{required:!0,tsType:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ComponentProps['onChange']",raw:"ComponentProps<typeof Downshift<T>>['onChange']"},description:""},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},inputProps:{required:!0,tsType:{name:"ComponentProps",elements:[{name:"FieldText"}],raw:"ComponentProps<typeof FieldText>"},description:""},parseValueToString:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T | null) => string",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},name:"value"}],return:{name:"string"}}},description:""},renderOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"ReactNode"}}},description:""},minLength:{required:!0,tsType:{name:"number"},description:""},maxLength:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},async:{required:!0,tsType:{name:"boolean"},description:""},optionVariant:{required:!0,tsType:{name:"ComponentProps['optionVariant']",raw:"ComponentProps<typeof AutocompleteMenu>['optionVariant']"},description:""},isRequired:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},touched:{required:!0,tsType:{name:"boolean"},description:""},setTouch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},createWithoutConfirmation:{required:!0,tsType:{name:"boolean"},description:""},menuClassName:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},skipOptionCreation:{required:!1,tsType:{name:"boolean"},description:""},isOptionUnique:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean | null) => void",signature:{arguments:[{type:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},refFunction:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:""},stateReducer:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  state: DownshiftState<T>,
  changes: StateChangeOptions<T>,
) => Partial<StateChangeOptions<T>>`,signature:{arguments:[{type:{name:"DownshiftState",elements:[{name:"T"}],raw:"DownshiftState<T>"},name:"state"},{type:{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"},name:"changes"}],return:{name:"Partial",elements:[{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"}],raw:"Partial<StateChangeOptions<T>>"}}},description:""},useFixedPositioning:{required:!0,tsType:{name:"boolean"},description:""},getUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},customEmptyListMessage:{required:!1,tsType:{name:"string"},description:""},customNoMatchesMessage:{required:!1,tsType:{name:"string"},description:""},newItemButtonText:{required:!1,tsType:{name:"string"},description:""}}};const D=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],q=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3"],Te={options:D,loading:!0,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e!=null&&e.id?String(e==null?void 0:e.id):"",value:D[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,inputProps:{clearable:!0},maxLength:null},M={options:q,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e?String(e):"",value:q[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,inputProps:{clearable:!0},maxLength:null},Be={title:"Controls/Autocompletes/SingleAutocomplete",component:C,parameters:{...M},tags:["autodocs"]},y={args:{...Te},render:e=>{const[s,o]=j.useState(e.value||{}),p={...e,inputProps:{...e.inputProps,onClear:()=>o({})}},u=(r,t)=>{switch(t.type){case g.stateChangeTypes.keyDownEnter:case g.stateChangeTypes.clickItem:return{...t,highlightedIndex:r.highlightedIndex,inputValue:""};default:return t}},l=r=>{o(r)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:n.jsx(C,{...p,onChange:l,stateReducer:u,value:s})})}},f={args:{...M},render:e=>{const[s,o]=j.useState(e.value||""),p={...e,inputProps:{...e.inputProps,onClear:()=>o("")}},u=(r,t)=>{switch(t.type){case g.stateChangeTypes.keyDownEnter:case g.stateChangeTypes.clickItem:return{...t,highlightedIndex:r.highlightedIndex,inputValue:""};default:return t}},l=r=>{o(r)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:n.jsx(C,{...p,onChange:l,stateReducer:u,value:s})})}};var N,_,R;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(_=y.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var F,L,B;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(L=f.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};const je=["SingleSelectObjects","SingleSelectStrings"];export{y as SingleSelectObjects,f as SingleSelectStrings,je as __namedExportsOrder,Be as default};
