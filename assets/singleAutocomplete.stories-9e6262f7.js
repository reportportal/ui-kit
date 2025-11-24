import{j as t}from"./jsx-runtime-3169928d.js";import{c as ce}from"./bind-f5c6fce5.js";import{D as T}from"./downshift.esm-2bc4018c.js";import{u as ge,b as he}from"./floating-ui.react-09d3bb8c.js";import{F as Te}from"./fieldText-5bfb84c2.js";import{r as H}from"./index-d33a4676.js";import{S as fe}from"./dropdown-a2b64102.js";import{E as ye,A as Se,T as we}from"./constants-72374b20.js";import{i as Ce}from"./isEmpty-6ac0b123.js";import"./tslib.es6-aa9d969b.js";import"./index-f454028f.js";import"./clear-04fd327c.js";import"./openEye-29ae22c4.js";import"./baseIconButton-22d0e691.js";import"./spinLoader-8fb5022b.js";import"./maxValueDisplay-9147cf24.js";import"./fieldLabel-465f57b8.js";import"./index-89e66079.js";import"./bubblesLoader-d7befc28.js";import"./button-1ebb3b4f.js";import"./plus-ca4f99ed.js";const Pe={"input-wrapper":"_input-wrapper_d9vma_1","dropdown-button":"_dropdown-button_d9vma_6","icon-reversed":"_icon-reversed_d9vma_14"},F=ce.bind(Pe),Ie=0,I=e=>{const{options:a=[],value:o,placeholder:l="",onChange:u=()=>{},onFocus:d=()=>{},onBlur:s=()=>{},disabled:n=!1,inputProps:W={},parseValueToString:f=r=>r===null?"":String(r),minLength:v=1,skipOptionCreation:U=!1,maxLength:Y=null,optionVariant:X="",isRequired:$=!1,error:z="",touched:Q=!1,setTouch:m=()=>{},createWithoutConfirmation:E=!1,menuClassName:Z="",icon:_,isDropdownMode:c=!1,isOptionUnique:x,refFunction:ee,stateReducer:te,onStateChange:ne,useFixedPositioning:se,newItemButtonText:re="",...ae}=e,{refs:q,floatingStyles:oe}=ge({placement:"bottom-start",strategy:se?"fixed":"absolute",whileElementsMounted:he}),ie=(r,g,y)=>({item:h,index:S,...i})=>r({item:h,index:S,isSelected:y!==null&&y===h,...i,isActive:g===S}),pe=(r,g)=>{r.key===we&&(r.preventDefault(),g(a.length))};return t.jsx(T,{onChange:u,itemToString:f,selectedItem:o,onStateChange:ne,defaultHighlightedIndex:Ie,stateReducer:te,children:({getInputProps:r,getItemProps:g,setHighlightedIndex:y,toggleMenu:h,openMenu:S,isOpen:i,inputValue:A,highlightedIndex:me,getRootProps:le,selectItem:b})=>{const N=le(void 0,{suppressRefError:!0}),ue={...N,ref:p=>(q.setReference(p),N.ref(p))},de=A??"";return t.jsx(t.Fragment,{children:t.jsxs("div",{className:F("input-wrapper"),...ue,children:[t.jsx(Te,{...r({placeholder:n?"":l,maxLength:Y||void 0,onFocus:()=>{c&&!i&&(S(),m==null||m(!0)),d()},refFunction:ee,onKeyDown:p=>{p.key===ye&&p.preventDefault(),A&&i&&pe(p,y)},onBlur:p=>{const w=de.trim(),D=!Ce(w),R=D?a.find(O=>f(O)===w):void 0;b(R||(!U&&E&&D?w:null)),s(p),x==null||x(D?!a.some(O=>f(O)===w):null),c&&i&&h(),m==null||m(!0)},disabled:n,defaultWidth:!1,isRequired:$,touched:Q,error:z,...W,endIcon:c&&!_?t.jsx("button",{type:"button",className:F("dropdown-button",{"icon-reversed":i}),onClick:()=>h(),"aria-label":"Toggle dropdown","aria-expanded":i,children:t.jsx(fe,{})}):_,minLength:c?0:v})}),t.jsx(Se,{isOpen:i,isDropdownMode:c,style:oe,ref:q.setFloating,minLength:v,inputValue:(A||"").trim(),getItemProps:ie(g,me,o),parseValueToString:f,optionVariant:X,createWithoutConfirmation:E,className:Z,options:a,newItemButtonText:re,...ae})]})})}})};I.__docgenInfo={description:"",methods:[],displayName:"SingleAutocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onStateChange:{required:!0,tsType:{name:"ComponentProps['onStateChange']",raw:"ComponentProps<typeof Downshift<T>>['onStateChange']"},description:""},value:{required:!0,tsType:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ComponentProps['onChange']",raw:"ComponentProps<typeof Downshift<T>>['onChange']"},description:""},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},inputProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"FieldText"}],raw:"ComponentProps<typeof FieldText>"},description:""},parseValueToString:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T | null) => string",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},name:"value"}],return:{name:"string"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: T,
  index: number,
  isNew: boolean,
  getItemProps: GetItemPropsT<T>,
) => ReactNode`,signature:{arguments:[{type:{name:"T"},name:"value"},{type:{name:"number"},name:"index"},{type:{name:"boolean"},name:"isNew"},{type:{name:"signature",type:"function",raw:`(
  args: GetItemPropsOptions<T> & AdditionalDownshiftFields,
) => GetItemPropsOptions<T> & AdditionalDownshiftFields`,signature:{arguments:[{type:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]},name:"args"}],return:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]}}},name:"getItemProps"}],return:{name:"ReactNode"}}},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},maxLength:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},async:{required:!1,tsType:{name:"boolean"},description:""},optionVariant:{required:!1,tsType:{name:"ComponentProps['optionVariant']",raw:"ComponentProps<typeof AutocompleteMenu>['optionVariant']"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},touched:{required:!1,tsType:{name:"boolean"},description:""},setTouch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},createWithoutConfirmation:{required:!0,tsType:{name:"boolean"},description:""},menuClassName:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},isDropdownMode:{required:!1,tsType:{name:"boolean"},description:""},skipOptionCreation:{required:!1,tsType:{name:"boolean"},description:""},isOptionUnique:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean | null) => void",signature:{arguments:[{type:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},refFunction:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:""},stateReducer:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  state: DownshiftState<T>,
  changes: StateChangeOptions<T>,
) => Partial<StateChangeOptions<T>>`,signature:{arguments:[{type:{name:"DownshiftState",elements:[{name:"T"}],raw:"DownshiftState<T>"},name:"state"},{type:{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"},name:"changes"}],return:{name:"Partial",elements:[{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"}],raw:"Partial<StateChangeOptions<T>>"}}},description:""},useFixedPositioning:{required:!0,tsType:{name:"boolean"},description:""},getUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},customEmptyListMessage:{required:!1,tsType:{name:"string"},description:""},customNoMatchesMessage:{required:!1,tsType:{name:"string"},description:""},newItemButtonText:{required:!1,tsType:{name:"string"},description:""}}};const L=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],j=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3"],xe={options:L,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e!=null&&e.id?String(e==null?void 0:e.id):"",value:L[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",isDropdownMode:!0,disabled:!1,inputProps:{clearable:!0},maxLength:null},K={options:j,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e?String(e):"",value:j[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,inputProps:{clearable:!0},maxLength:null},We={title:"Controls/Autocompletes/SingleAutocomplete",component:I,parameters:{...K},tags:["autodocs"]},C={args:{...xe},render:e=>{const[a,o]=H.useState(e.value||{}),l={...e,inputProps:{...e.inputProps,onClear:()=>o({})}},u=(s,n)=>{switch(n.type){case T.stateChangeTypes.keyDownEnter:case T.stateChangeTypes.clickItem:return{...n,highlightedIndex:s.highlightedIndex,inputValue:""};default:return n}},d=s=>{o(s)};return t.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:t.jsx(I,{...l,onChange:d,stateReducer:u,value:a})})}},P={args:{...K},render:e=>{const[a,o]=H.useState(e.value||""),l={...e,inputProps:{...e.inputProps,onClear:()=>o("")}},u=(s,n)=>{switch(n.type){case T.stateChangeTypes.keyDownEnter:case T.stateChangeTypes.clickItem:return{...n,highlightedIndex:s.highlightedIndex,inputValue:""};default:return n}},d=s=>{o(s)};return t.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:t.jsx(I,{...l,onChange:d,stateReducer:u,value:a})})}};var G,M,B;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(B=(M=C.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var k,V,J;P.parameters={...P.parameters,docs:{...(k=P.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(J=(V=P.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};const Ue=["SingleSelectObjects","SingleSelectStrings"];export{C as SingleSelectObjects,P as SingleSelectStrings,Ue as __namedExportsOrder,We as default};
