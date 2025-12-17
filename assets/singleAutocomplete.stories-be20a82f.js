import{j as t}from"./jsx-runtime-2f188e98.js";import{c as ye}from"./bind-d8141dee.js";import{D as T}from"./downshift.esm-6de76521.js";import{u as Se,b as we}from"./floating-ui.react-99bd99d2.js";import{F as Ce}from"./fieldText-86ee05b0.js";import{r as W}from"./index-3553ef47.js";import{S as Pe}from"./dropdown-1f4530a4.js";import{E as Ie,A as xe,T as Ae}from"./constants-f8744c96.js";import{i as be}from"./isEmpty-6ac0b123.js";import"./index-4c891f75.js";import"./tslib.es6-c51bbe1e.js";import"./index-d0bd1ed5.js";import"./clear-c7bc24e5.js";import"./openEye-28d4aa93.js";import"./baseIconButton-9b03f096.js";import"./spinLoader-d5daab2a.js";import"./maxValueDisplay-a537ac0f.js";import"./fieldLabel-917daddd.js";import"./bubblesLoader-539cf135.js";import"./button-a3e8ccfc.js";import"./plus-150a0ce8.js";const De={"input-wrapper":"_input-wrapper_d9vma_1","dropdown-button":"_dropdown-button_d9vma_6","icon-reversed":"_icon-reversed_d9vma_14"},j=ye.bind(De),Oe=0,A=e=>{const{options:i=[],value:s,placeholder:m="",onChange:u=()=>{},onFocus:d=()=>{},onBlur:r=()=>{},disabled:n=!1,inputProps:Y={},parseValueToString:f=o=>o===null?"":String(o),minLength:E=1,skipOptionCreation:X=!1,maxLength:$=null,optionVariant:z="",isRequired:Q=!1,error:Z="",touched:ee=!1,setTouch:l=()=>{},createWithoutConfirmation:_=!1,menuClassName:te="",icon:q,isDropdownMode:c=!1,isOptionUnique:b,refFunction:ne,stateReducer:ae,onStateChange:se,useFixedPositioning:re,newItemButtonText:oe="",...ie}=e,{refs:N,floatingStyles:pe}=Se({placement:"bottom-start",strategy:re?"fixed":"absolute",whileElementsMounted:we}),le=(o,g,y)=>({item:h,index:S,...p})=>o({item:h,index:S,isSelected:y!==null&&y===h,...p,isActive:g===S}),me=(o,g)=>{o.key===Ae&&(o.preventDefault(),g(i.length))};return t.jsx(T,{onChange:u,itemToString:f,selectedItem:s,onStateChange:se,defaultHighlightedIndex:Oe,stateReducer:ae,children:({getInputProps:o,getItemProps:g,setHighlightedIndex:y,toggleMenu:h,openMenu:S,isOpen:p,inputValue:D,highlightedIndex:ue,getRootProps:de,selectItem:w})=>{const R=de(void 0,{suppressRefError:!0}),ce={...R,ref:a=>(N.setReference(a),R.ref(a))},ge=D??"",{onClear:C,clearable:he,...Te}=Y,F=he&&s!==null,fe=(...a)=>{w(null),C==null||C(...a)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:j("input-wrapper"),...ce,children:[t.jsx(Ce,{...o({placeholder:n?"":m,maxLength:$||void 0,onFocus:()=>{c&&!p&&(S(),l==null||l(!0)),d()},ref:ne,onKeyDown:a=>{a.key===Ie&&a.preventDefault(),D&&p&&me(a,y)},onBlur:a=>{const P=ge.trim(),O=!be(P),L=O?i.find(v=>f(v)===P):void 0;w(L||(!X&&_&&O?P:null)),r(a),b==null||b(O?!i.some(v=>f(v)===P):null),c&&p&&h(),l==null||l(!0)},disabled:n,defaultWidth:!1,isRequired:Q,touched:ee,error:Z,...Te,clearable:F,onClear:F?fe:C,endIcon:c&&!q?t.jsx("button",{type:"button",className:j("dropdown-button",{"icon-reversed":p}),onClick:()=>h(),"aria-label":"Toggle dropdown","aria-expanded":p,children:t.jsx(Pe,{})}):q,minLength:c?0:E})}),t.jsx(xe,{isOpen:p,isDropdownMode:c,style:pe,ref:N.setFloating,minLength:E,inputValue:(D||"").trim(),getItemProps:le(g,ue,s),parseValueToString:f,optionVariant:z,createWithoutConfirmation:_,className:te,options:i,newItemButtonText:oe,...ie})]})})}})};A.__docgenInfo={description:"",methods:[],displayName:"SingleAutocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onStateChange:{required:!0,tsType:{name:"ComponentProps['onStateChange']",raw:"ComponentProps<typeof Downshift<T>>['onStateChange']"},description:""},value:{required:!0,tsType:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ComponentProps['onChange']",raw:"ComponentProps<typeof Downshift<T>>['onChange']"},description:""},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},inputProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"FieldText"}],raw:"ComponentProps<typeof FieldText>"},description:""},parseValueToString:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T | null) => string",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},name:"value"}],return:{name:"string"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: T,
  index: number,
  isNew: boolean,
  getItemProps: GetItemPropsT<T>,
) => ReactNode`,signature:{arguments:[{type:{name:"T"},name:"value"},{type:{name:"number"},name:"index"},{type:{name:"boolean"},name:"isNew"},{type:{name:"signature",type:"function",raw:`(
  args: GetItemPropsOptions<T> & AdditionalDownshiftFields,
) => GetItemPropsOptions<T> & AdditionalDownshiftFields`,signature:{arguments:[{type:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]},name:"args"}],return:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]}}},name:"getItemProps"}],return:{name:"ReactNode"}}},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},maxLength:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},async:{required:!1,tsType:{name:"boolean"},description:""},optionVariant:{required:!1,tsType:{name:"ComponentProps['optionVariant']",raw:"ComponentProps<typeof AutocompleteMenu>['optionVariant']"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},touched:{required:!1,tsType:{name:"boolean"},description:""},setTouch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},createWithoutConfirmation:{required:!0,tsType:{name:"boolean"},description:""},menuClassName:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},isDropdownMode:{required:!1,tsType:{name:"boolean"},description:""},skipOptionCreation:{required:!1,tsType:{name:"boolean"},description:""},isOptionUnique:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean | null) => void",signature:{arguments:[{type:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},refFunction:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:""},stateReducer:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  state: DownshiftState<T>,
  changes: StateChangeOptions<T>,
) => Partial<StateChangeOptions<T>>`,signature:{arguments:[{type:{name:"DownshiftState",elements:[{name:"T"}],raw:"DownshiftState<T>"},name:"state"},{type:{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"},name:"changes"}],return:{name:"Partial",elements:[{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"}],raw:"Partial<StateChangeOptions<T>>"}}},description:""},useFixedPositioning:{required:!0,tsType:{name:"boolean"},description:""},getUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},customEmptyListMessage:{required:!1,tsType:{name:"string"},description:""},customNoMatchesMessage:{required:!1,tsType:{name:"string"},description:""},newItemButtonText:{required:!1,tsType:{name:"string"},description:""}}};const G=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],M=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3"],ve={options:G,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e!=null&&e.id?String(e==null?void 0:e.id):"",value:G[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",isDropdownMode:!0,disabled:!1,inputProps:{clearable:!0},maxLength:null},U={options:M,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e?String(e):"",value:M[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,inputProps:{clearable:!0},maxLength:null},Qe={title:"Controls/Autocompletes/SingleAutocomplete",component:A,parameters:{...U},tags:["autodocs"]},I={args:{...ve},render:e=>{const[i,s]=W.useState(e.value||{}),m={...e,inputProps:{...e.inputProps,onClear:()=>s({})}},u=(r,n)=>{switch(n.type){case T.stateChangeTypes.keyDownEnter:case T.stateChangeTypes.clickItem:return{...n,highlightedIndex:r.highlightedIndex,inputValue:""};default:return n}},d=r=>{s(r)};return t.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:t.jsx(A,{...m,onChange:d,stateReducer:u,value:i})})}},x={args:{...U},render:e=>{const[i,s]=W.useState(e.value||""),m={...e,inputProps:{...e.inputProps,onClear:()=>s("")}},u=(r,n)=>{switch(n.type){case T.stateChangeTypes.keyDownEnter:case T.stateChangeTypes.clickItem:return{...n,highlightedIndex:r.highlightedIndex,inputValue:""};default:return n}},d=r=>{s(r)};return t.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:t.jsx(A,{...m,onChange:d,stateReducer:u,value:i})})}};var V,B,k;I.parameters={...I.parameters,docs:{...(V=I.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(k=(B=I.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var J,H,K;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=(H=x.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const Ze=["SingleSelectObjects","SingleSelectStrings"];export{I as SingleSelectObjects,x as SingleSelectStrings,Ze as __namedExportsOrder,Qe as default};
