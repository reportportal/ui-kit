import{j as t}from"./jsx-runtime-2f188e98.js";import{c as Se}from"./bind-d8141dee.js";import{D as T}from"./downshift.esm-ce98d9a3.js";import{u as we}from"./floating-ui.react-eea5639b.js";import{F as Ce}from"./fieldText-86ee05b0.js";import{r as K}from"./index-3553ef47.js";import{S as Ie}from"./dropdown-1f4530a4.js";import{E as Pe,A as xe,T as be}from"./constants-5cde2c58.js";import{i as Ae}from"./isEmpty-6ac0b123.js";import{b as De,s as Oe}from"./floating-ui.react-dom-a5cc5ea5.js";import"./index-4c891f75.js";import"./tslib.es6-e2fc4f1b.js";import"./index-d0bd1ed5.js";import"./clear-c7bc24e5.js";import"./openEye-28d4aa93.js";import"./baseIconButton-9b03f096.js";import"./spinLoader-d5daab2a.js";import"./maxValueDisplay-a537ac0f.js";import"./fieldLabel-917daddd.js";import"./index-5cf2ac00.js";import"./bubblesLoader-539cf135.js";import"./button-34bf729b.js";import"./plus-150a0ce8.js";const ve={"input-wrapper":"_input-wrapper_d9vma_1","dropdown-button":"_dropdown-button_d9vma_6","icon-reversed":"_icon-reversed_d9vma_14"},M=Se.bind(ve),Ee=0,b=e=>{const{options:i=[],value:s,placeholder:u="",onChange:d=()=>{},onFocus:c=()=>{},onBlur:o=()=>{},disabled:a=!1,inputProps:Y={},parseValueToString:f=n=>n===null?"":String(n),minLength:E=1,skipOptionCreation:$=!1,maxLength:z=null,optionVariant:X="",isRequired:Q=!1,error:Z="",touched:ee=!1,setTouch:m=()=>{},createWithoutConfirmation:q=!1,menuClassName:te="",icon:_,isDropdownMode:g=!1,isOptionUnique:A,refFunction:ne,stateReducer:ae,onStateChange:re,useFixedPositioning:se,dropdownMatchInputWidth:oe=!1,newItemButtonText:ie="",...pe}=e,{refs:N,floatingStyles:le}=we({placement:"bottom-start",strategy:se?"fixed":"absolute",whileElementsMounted:De,middleware:oe?[Oe({apply({rects:n,elements:l}){Object.assign(l.floating.style,{width:`${n.reference.width}px`})}})]:[]}),me=(n,l,y)=>({item:h,index:S,...p})=>n({item:h,index:S,isSelected:y!==null&&y===h,...p,isActive:l===S}),ue=(n,l)=>{n.key===be&&(n.preventDefault(),l(i.length))};return t.jsx(T,{onChange:d,itemToString:f,selectedItem:s,onStateChange:re,defaultHighlightedIndex:Ee,stateReducer:ae,children:({getInputProps:n,getItemProps:l,setHighlightedIndex:y,toggleMenu:h,openMenu:S,isOpen:p,inputValue:D,highlightedIndex:de,getRootProps:ce,selectItem:w})=>{const R=ce(void 0,{suppressRefError:!0}),ge={...R,ref:r=>(N.setReference(r),R.ref(r))},he=D??"",{onClear:C,clearable:Te,...fe}=Y,F=Te&&s!==null,ye=(...r)=>{w(null),C==null||C(...r)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:M("input-wrapper"),...ge,children:[t.jsx(Ce,{...n({placeholder:a?"":u,maxLength:z||void 0,onFocus:()=>{g&&!p&&(S(),m==null||m(!0)),c()},ref:ne,onKeyDown:r=>{r.key===Pe&&r.preventDefault(),D&&p&&ue(r,y)},onBlur:r=>{const I=he.trim(),O=!Ae(I),L=O?i.find(v=>f(v)===I):void 0;w(L||(!$&&q&&O?I:null)),o(r),A==null||A(O?!i.some(v=>f(v)===I):null),g&&p&&h(),m==null||m(!0)},disabled:a,defaultWidth:!1,isRequired:Q,touched:ee,error:Z,...fe,clearable:F,onClear:F?ye:C,endIcon:g&&!_?t.jsx("button",{type:"button",className:M("dropdown-button",{"icon-reversed":p}),onClick:()=>h(),"aria-label":"Toggle dropdown","aria-expanded":p,children:t.jsx(Ie,{})}):_,minLength:g?0:E})}),t.jsx(xe,{isOpen:p,isDropdownMode:g,style:le,ref:N.setFloating,minLength:E,inputValue:(D||"").trim(),getItemProps:me(l,de,s),parseValueToString:f,optionVariant:X,createWithoutConfirmation:q,className:te,options:i,newItemButtonText:ie,...pe})]})})}})};b.__docgenInfo={description:"",methods:[],displayName:"SingleAutocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onStateChange:{required:!0,tsType:{name:"ComponentProps['onStateChange']",raw:"ComponentProps<typeof Downshift<T>>['onStateChange']"},description:""},value:{required:!0,tsType:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ComponentProps['onChange']",raw:"ComponentProps<typeof Downshift<T>>['onChange']"},description:""},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},inputProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"FieldText"}],raw:"ComponentProps<typeof FieldText>"},description:""},parseValueToString:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T | null) => string",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},name:"value"}],return:{name:"string"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: T,
  index: number,
  isNew: boolean,
  getItemProps: GetItemPropsT<T>,
) => ReactNode`,signature:{arguments:[{type:{name:"T"},name:"value"},{type:{name:"number"},name:"index"},{type:{name:"boolean"},name:"isNew"},{type:{name:"signature",type:"function",raw:`(
  args: GetItemPropsOptions<T> & AdditionalDownshiftFields,
) => GetItemPropsOptions<T> & AdditionalDownshiftFields`,signature:{arguments:[{type:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]},name:"args"}],return:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]}}},name:"getItemProps"}],return:{name:"ReactNode"}}},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},maxLength:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},async:{required:!1,tsType:{name:"boolean"},description:""},optionVariant:{required:!1,tsType:{name:"ComponentProps['optionVariant']",raw:"ComponentProps<typeof AutocompleteMenu>['optionVariant']"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},touched:{required:!1,tsType:{name:"boolean"},description:""},setTouch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},createWithoutConfirmation:{required:!0,tsType:{name:"boolean"},description:""},menuClassName:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},isDropdownMode:{required:!1,tsType:{name:"boolean"},description:""},skipOptionCreation:{required:!1,tsType:{name:"boolean"},description:""},isOptionUnique:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean | null) => void",signature:{arguments:[{type:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},refFunction:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:""},stateReducer:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  state: DownshiftState<T>,
  changes: StateChangeOptions<T>,
) => Partial<StateChangeOptions<T>>`,signature:{arguments:[{type:{name:"DownshiftState",elements:[{name:"T"}],raw:"DownshiftState<T>"},name:"state"},{type:{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"},name:"changes"}],return:{name:"Partial",elements:[{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"}],raw:"Partial<StateChangeOptions<T>>"}}},description:""},useFixedPositioning:{required:!0,tsType:{name:"boolean"},description:""},dropdownMatchInputWidth:{required:!1,tsType:{name:"boolean"},description:""},getUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},customEmptyListMessage:{required:!1,tsType:{name:"string"},description:""},customNoMatchesMessage:{required:!1,tsType:{name:"string"},description:""},newItemButtonText:{required:!1,tsType:{name:"string"},description:""},optionsLimit:{required:!1,tsType:{name:"number"},description:""},limitationText:{required:!1,tsType:{name:"string"},description:""}}};const j=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],G=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3"],qe={options:j,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e!=null&&e.id?String(e==null?void 0:e.id):"",value:j[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",isDropdownMode:!0,disabled:!1,inputProps:{clearable:!0},maxLength:null},U={options:G,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e?String(e):"",value:G[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,inputProps:{clearable:!0},maxLength:null},nt={title:"Controls/Autocompletes/SingleAutocomplete",component:b,parameters:{...U},tags:["autodocs"]},P={args:{...qe},render:e=>{const[i,s]=K.useState(e.value||{}),u={...e,inputProps:{...e.inputProps,onClear:()=>s({})}},d=(o,a)=>{switch(a.type){case T.stateChangeTypes.keyDownEnter:case T.stateChangeTypes.clickItem:return{...a,highlightedIndex:o.highlightedIndex,inputValue:""};default:return a}},c=o=>{s(o)};return t.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:t.jsx(b,{...u,onChange:c,stateReducer:d,value:i})})}},x={args:{...U},render:e=>{const[i,s]=K.useState(e.value||""),u={...e,inputProps:{...e.inputProps,onClear:()=>s("")}},d=(o,a)=>{switch(a.type){case T.stateChangeTypes.keyDownEnter:case T.stateChangeTypes.clickItem:return{...a,highlightedIndex:o.highlightedIndex,inputValue:""};default:return a}},c=o=>{s(o)};return t.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:t.jsx(b,{...u,onChange:c,stateReducer:d,value:i})})}};var V,B,k;P.parameters={...P.parameters,docs:{...(V=P.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(k=(B=P.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var J,W,H;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(H=(W=x.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const at=["SingleSelectObjects","SingleSelectStrings"];export{P as SingleSelectObjects,x as SingleSelectStrings,at as __namedExportsOrder,nt as default};
