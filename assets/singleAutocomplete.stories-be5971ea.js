import{j as t}from"./jsx-runtime-3169928d.js";import{c as le}from"./bind-f5c6fce5.js";import{D as g}from"./downshift.esm-2bc4018c.js";import{u as me,b as ue}from"./floating-ui.react-d5d215a5.js";import{F as de}from"./fieldText-5bfb84c2.js";import{r as V}from"./index-d33a4676.js";import{S as ce}from"./dropdown-a2b64102.js";import{A as ge}from"./autocompleteMenu-68ded64c.js";import"./tslib.es6-aa9d969b.js";import"./index-f454028f.js";import"./clear-04fd327c.js";import"./openEye-29ae22c4.js";import"./baseIconButton-22d0e691.js";import"./spinLoader-8fb5022b.js";import"./maxValueDisplay-9147cf24.js";import"./fieldLabel-465f57b8.js";import"./index-89e66079.js";import"./bubblesLoader-d7befc28.js";import"./button-1ebb3b4f.js";import"./plus-ca4f99ed.js";import"./isEmpty-6ac0b123.js";const he="Enter",Te="Tab",fe={"input-wrapper":"_input-wrapper_d9vma_1","dropdown-button":"_dropdown-button_d9vma_6","icon-reversed":"_icon-reversed_d9vma_14"},N=le.bind(fe),ye=0,C=e=>{const{options:r=[],value:o,placeholder:p="",onChange:l=()=>{},onFocus:m=()=>{},onBlur:s=()=>{},disabled:n=!1,inputProps:H={},parseValueToString:h=a=>a===null?"":String(a),minLength:D=1,skipOptionCreation:K=!1,maxLength:W=null,optionVariant:U="",isRequired:Y=!1,error:X="",touched:$=!1,setTouch:I=()=>{},createWithoutConfirmation:v=!1,menuClassName:z="",icon:E,isDropdownMode:x=!1,isOptionUnique:P,refFunction:Q,stateReducer:Z,onStateChange:ee,useFixedPositioning:te,newItemButtonText:ne="",...se}=e,{refs:_,floatingStyles:ae}=me({placement:"bottom-start",strategy:te?"fixed":"absolute",whileElementsMounted:ue}),re=(a,u,T)=>({item:f,index:i,...d})=>a({item:f,index:i,isSelected:T!==null&&T===f,...d,isActive:u===i}),oe=(a,u)=>{a.key===Te&&(a.preventDefault(),u(r.length))};return t.jsx(g,{onChange:l,itemToString:h,selectedItem:o,onStateChange:ee,defaultHighlightedIndex:ye,stateReducer:Z,children:({getInputProps:a,getItemProps:u,setHighlightedIndex:T,toggleMenu:f,isOpen:i,inputValue:d,highlightedIndex:ie,getRootProps:pe,selectItem:A})=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:N("input-wrapper"),...pe(void 0,{suppressRefError:!0}),ref:_.setReference,children:[t.jsx(de,{...a({placeholder:n?"":p,maxLength:W||void 0,onFocus:()=>{m()},refFunction:Q,onKeyDown:c=>{c.key===he&&c.preventDefault(),d&&i&&oe(c,T)},onBlur:c=>{const y=(d??"").trim(),O=!!y,q=O?r.find(b=>h(b)===y):void 0;A(q||(!K&&v&&O?y:null)),s(c),P==null||P(O?!r.some(b=>h(b)===y):null),I==null||I(!0)},disabled:n,defaultWidth:!1,isRequired:Y,touched:$,error:X,...H,endIcon:x&&!E?t.jsx("button",{type:"button",className:N("dropdown-button",{"icon-reversed":i}),onClick:()=>f(),"aria-label":"Toggle dropdown","aria-expanded":i,children:t.jsx(ce,{})}):E,minLength:x?0:D})}),t.jsx(ge,{isOpen:i,isDropdownMode:x,style:ae,ref:_.setFloating,minLength:D,inputValue:(d||"").trim(),getItemProps:re(u,ie,o),parseValueToString:h,optionVariant:U,createWithoutConfirmation:v,className:z,options:r,newItemButtonText:ne,...se})]})})})};C.__docgenInfo={description:"",methods:[],displayName:"SingleAutocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onStateChange:{required:!0,tsType:{name:"ComponentProps['onStateChange']",raw:"ComponentProps<typeof Downshift<T>>['onStateChange']"},description:""},value:{required:!0,tsType:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ComponentProps['onChange']",raw:"ComponentProps<typeof Downshift<T>>['onChange']"},description:""},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},inputProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"FieldText"}],raw:"ComponentProps<typeof FieldText>"},description:""},parseValueToString:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T | null) => string",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},name:"value"}],return:{name:"string"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: T,
  index: number,
  isNew: boolean,
  getItemProps: GetItemPropsT<T>,
) => ReactNode`,signature:{arguments:[{type:{name:"T"},name:"value"},{type:{name:"number"},name:"index"},{type:{name:"boolean"},name:"isNew"},{type:{name:"signature",type:"function",raw:`(
  args: GetItemPropsOptions<T> & AdditionalDownshiftFields,
) => GetItemPropsOptions<T> & AdditionalDownshiftFields`,signature:{arguments:[{type:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]},name:"args"}],return:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]}}},name:"getItemProps"}],return:{name:"ReactNode"}}},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},maxLength:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},async:{required:!1,tsType:{name:"boolean"},description:""},optionVariant:{required:!0,tsType:{name:"ComponentProps['optionVariant']",raw:"ComponentProps<typeof AutocompleteMenu>['optionVariant']"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},touched:{required:!1,tsType:{name:"boolean"},description:""},setTouch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},createWithoutConfirmation:{required:!0,tsType:{name:"boolean"},description:""},menuClassName:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},isDropdownMode:{required:!1,tsType:{name:"boolean"},description:""},skipOptionCreation:{required:!1,tsType:{name:"boolean"},description:""},isOptionUnique:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean | null) => void",signature:{arguments:[{type:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},refFunction:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:""},stateReducer:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  state: DownshiftState<T>,
  changes: StateChangeOptions<T>,
) => Partial<StateChangeOptions<T>>`,signature:{arguments:[{type:{name:"DownshiftState",elements:[{name:"T"}],raw:"DownshiftState<T>"},name:"state"},{type:{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"},name:"changes"}],return:{name:"Partial",elements:[{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"}],raw:"Partial<StateChangeOptions<T>>"}}},description:""},useFixedPositioning:{required:!0,tsType:{name:"boolean"},description:""},getUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},customEmptyListMessage:{required:!1,tsType:{name:"string"},description:""},customNoMatchesMessage:{required:!1,tsType:{name:"string"},description:""},newItemButtonText:{required:!1,tsType:{name:"string"},description:""}}};const R=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],F=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3"],Se={options:R,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e!=null&&e.id?String(e==null?void 0:e.id):"",value:R[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",isDropdownMode:!0,disabled:!1,inputProps:{clearable:!0},maxLength:null},J={options:F,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e?String(e):"",value:F[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,inputProps:{clearable:!0},maxLength:null},ke={title:"Controls/Autocompletes/SingleAutocomplete",component:C,parameters:{...J},tags:["autodocs"]},S={args:{...Se},render:e=>{const[r,o]=V.useState(e.value||{}),p={...e,inputProps:{...e.inputProps,onClear:()=>o({})}},l=(s,n)=>{switch(n.type){case g.stateChangeTypes.keyDownEnter:case g.stateChangeTypes.clickItem:return{...n,highlightedIndex:s.highlightedIndex,inputValue:""};default:return n}},m=s=>{o(s)};return t.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:t.jsx(C,{...p,onChange:m,stateReducer:l,value:r})})}},w={args:{...J},render:e=>{const[r,o]=V.useState(e.value||""),p={...e,inputProps:{...e.inputProps,onClear:()=>o("")}},l=(s,n)=>{switch(n.type){case g.stateChangeTypes.keyDownEnter:case g.stateChangeTypes.clickItem:return{...n,highlightedIndex:s.highlightedIndex,inputValue:""};default:return n}},m=s=>{o(s)};return t.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:t.jsx(C,{...p,onChange:m,stateReducer:l,value:r})})}};var L,M,j;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(M=S.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var G,B,k;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(k=(B=w.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const Ve=["SingleSelectObjects","SingleSelectStrings"];export{S as SingleSelectObjects,w as SingleSelectStrings,Ve as __namedExportsOrder,ke as default};
