import{j as n}from"./jsx-runtime-2f188e98.js";import{r as c}from"./index-3553ef47.js";import{r as _e}from"./index-d0bd1ed5.js";import{c as Me}from"./bind-d8141dee.js";import{D as S}from"./downshift.esm-ce98d9a3.js";import{u as Ne}from"./floating-ui.react-eea5639b.js";import{F as Re}from"./fieldText-86ee05b0.js";import{S as Fe}from"./dropdown-1f4530a4.js";import{A as Le,E as je,T as ke}from"./constants-5cde2c58.js";import{i as Be}from"./isEmpty-6ac0b123.js";import{f as Ge,s as Ve,b as We}from"./floating-ui.react-dom-a5cc5ea5.js";import"./index-4c891f75.js";import"./tslib.es6-e2fc4f1b.js";import"./clear-c7bc24e5.js";import"./openEye-28d4aa93.js";import"./baseIconButton-9b03f096.js";import"./spinLoader-d5daab2a.js";import"./maxValueDisplay-a537ac0f.js";import"./fieldLabel-917daddd.js";import"./index-5cf2ac00.js";import"./bubblesLoader-539cf135.js";import"./button-34bf729b.js";import"./plus-150a0ce8.js";const Ye=({skip:e})=>{c.useLayoutEffect(()=>{if(e)return;let t=window.scrollY,r=!0;const i=300,p=()=>{if(!r)return;window.scrollY!==t&&window.scrollTo(0,t)},d=s=>{r&&(s.preventDefault(),s.stopImmediatePropagation(),p())};t=window.scrollY,window.addEventListener("scroll",d,{passive:!1,capture:!0}),requestAnimationFrame(()=>{t=window.scrollY,p()});const a=setTimeout(()=>{r=!1},i);return()=>{clearTimeout(a),window.removeEventListener("scroll",d,{capture:!0})}},[e])},Je=({skip:e,reference:t})=>{c.useEffect(()=>{if(e)return;const r=()=>{const i=t.current;i instanceof HTMLElement&&i.blur()};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[e,t])},He={"input-wrapper":"_input-wrapper_d9vma_1","dropdown-button":"_dropdown-button_d9vma_6","icon-reversed":"_icon-reversed_d9vma_14"},H=Me.bind(He),ze=0,Ke=Ge({fallbackPlacements:["bottom-start","top-start","bottom","top"],boundary:document==null?void 0:document.documentElement,rootBoundary:"viewport"}),Ue=Ve({apply({rects:e,elements:t}){Object.assign(t.floating.style,{width:`${e.reference.width}px`})}}),y=e=>{const{options:t=[],value:r,placeholder:i="",onChange:p=()=>{},onFocus:d=()=>{},onBlur:a=()=>{},disabled:s=!1,inputProps:oe={},parseValueToString:w=o=>o===null?"":String(o),minLength:F=1,skipOptionCreation:se=!1,maxLength:ae=null,optionVariant:ie="",isRequired:le=!1,error:pe="",touched:de=!1,setTouch:g=()=>{},createWithoutConfirmation:L=!1,menuClassName:ue="",icon:j,isDropdownMode:h=!1,isOptionUnique:O,refFunction:me,stateReducer:ce,onStateChange:x,useFixedPositioning:ge,dropdownMatchInputWidth:k=!1,withMenuFlip:B=!1,newItemButtonText:he="",menuPortalRoot:f,...fe}=e,[Te,Se]=c.useState(!1),G=!Te||!f,ye=f||ge?"fixed":"absolute",we=c.useMemo(()=>[...B?[Ke]:[],...k?[Ue]:[]],[B,k]),{refs:q,floatingStyles:xe}=Ne({placement:"bottom-start",whileElementsMounted:We,strategy:ye,middleware:we});Ye({skip:G}),Je({skip:G,reference:q.reference});const Ce=(o,m,C)=>({item:T,index:v,...u})=>o({item:T,index:v,isSelected:C!==null&&C===T,...u,isActive:m===v}),ve=(o,m)=>{o.key===ke&&(o.preventDefault(),m(t.length))},Pe=c.useCallback((o,...m)=>{(o==null?void 0:o.isOpen)!==void 0&&Se(o.isOpen),x==null||x(o,...m)},[x]);return n.jsx(S,{onChange:p,itemToString:w,selectedItem:r,onStateChange:Pe,defaultHighlightedIndex:ze,stateReducer:ce,children:({getInputProps:o,getItemProps:m,setHighlightedIndex:C,toggleMenu:T,openMenu:v,isOpen:u,inputValue:_,highlightedIndex:be,getRootProps:Ie,selectItem:P})=>{const V=Ie(void 0,{suppressRefError:!0}),Ae={...V,ref:l=>(q.setReference(l),V.ref(l))},De=_??"",{onClear:b,clearable:Ee,...Oe}=oe,W=Ee&&r!==null,qe=(...l)=>{P(null),b==null||b(...l)},Y=n.jsx(Le,{isOpen:u,isDropdownMode:h,style:xe,ref:q.setFloating,minLength:F,inputValue:(_||"").trim(),getItemProps:Ce(m,be,r),parseValueToString:w,optionVariant:ie,createWithoutConfirmation:L,className:ue,options:t,newItemButtonText:he,...fe});return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:H("input-wrapper"),...Ae,children:[n.jsx(Re,{...o({placeholder:s?"":i,maxLength:ae||void 0,onFocus:()=>{h&&!u&&(v(),g==null||g(!0)),d()},ref:me,onKeyDown:l=>{l.key===je&&l.preventDefault(),_&&u&&ve(l,C)},onBlur:l=>{const I=De.trim(),M=!Be(I),J=M?t.find(N=>w(N)===I):void 0;P(J||(!se&&L&&M?I:null)),a(l),O==null||O(M?!t.some(N=>w(N)===I):null),h&&u&&T(),g==null||g(!0)},disabled:s,defaultWidth:!1,isRequired:le,touched:de,error:pe,...Oe,clearable:W,onClear:W?qe:b,endIcon:h&&!j?n.jsx("button",{type:"button",className:H("dropdown-button",{"icon-reversed":u}),onClick:()=>T(),"aria-label":"Toggle dropdown","aria-expanded":u,children:n.jsx(Fe,{})}):j,minLength:h?0:F})}),!f&&Y]}),f&&_e.createPortal(Y,f)]})}})};y.__docgenInfo={description:"",methods:[],displayName:"SingleAutocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onStateChange:{required:!0,tsType:{name:"ComponentProps['onStateChange']",raw:"ComponentProps<typeof Downshift<T>>['onStateChange']"},description:""},value:{required:!0,tsType:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ComponentProps['onChange']",raw:"ComponentProps<typeof Downshift<T>>['onChange']"},description:""},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},inputProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"FieldText"}],raw:"ComponentProps<typeof FieldText>"},description:""},parseValueToString:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T | null) => string",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},name:"value"}],return:{name:"string"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: T,
  index: number,
  isNew: boolean,
  getItemProps: GetItemPropsT<T>,
) => ReactNode`,signature:{arguments:[{type:{name:"T"},name:"value"},{type:{name:"number"},name:"index"},{type:{name:"boolean"},name:"isNew"},{type:{name:"signature",type:"function",raw:`(
  args: GetItemPropsOptions<T> & AdditionalDownshiftFields,
) => GetItemPropsOptions<T> & AdditionalDownshiftFields`,signature:{arguments:[{type:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]},name:"args"}],return:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]}}},name:"getItemProps"}],return:{name:"ReactNode"}}},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},maxLength:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},async:{required:!1,tsType:{name:"boolean"},description:""},optionVariant:{required:!1,tsType:{name:"ComponentProps['optionVariant']",raw:"ComponentProps<typeof AutocompleteMenu>['optionVariant']"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},touched:{required:!1,tsType:{name:"boolean"},description:""},setTouch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},createWithoutConfirmation:{required:!0,tsType:{name:"boolean"},description:""},menuClassName:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},isDropdownMode:{required:!1,tsType:{name:"boolean"},description:""},skipOptionCreation:{required:!1,tsType:{name:"boolean"},description:""},isOptionUnique:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean | null) => void",signature:{arguments:[{type:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},refFunction:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:""},stateReducer:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  state: DownshiftState<T>,
  changes: StateChangeOptions<T>,
) => Partial<StateChangeOptions<T>>`,signature:{arguments:[{type:{name:"DownshiftState",elements:[{name:"T"}],raw:"DownshiftState<T>"},name:"state"},{type:{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"},name:"changes"}],return:{name:"Partial",elements:[{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"}],raw:"Partial<StateChangeOptions<T>>"}}},description:""},useFixedPositioning:{required:!0,tsType:{name:"boolean"},description:""},dropdownMatchInputWidth:{required:!1,tsType:{name:"boolean"},description:""},withMenuFlip:{required:!1,tsType:{name:"boolean"},description:""},getUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},customEmptyListMessage:{required:!1,tsType:{name:"string"},description:""},customNoMatchesMessage:{required:!1,tsType:{name:"string"},description:""},newItemButtonText:{required:!1,tsType:{name:"string"},description:""},optionsLimit:{required:!1,tsType:{name:"number"},description:""},limitationText:{required:!1,tsType:{name:"string"},description:""},menuPortalRoot:{required:!1,tsType:{name:"Element"},description:`Portal root element for autocomplete menu rendering.
When provided, the menu will be rendered in this element using React Portal.
Useful for preventing clipping in containers with overflow: hidden (e.g., Modal, SidePanel).
@example menuPortalRoot={document.body}`}}};const z=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],K=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3"],$e={options:z,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e!=null&&e.id?String(e==null?void 0:e.id):"",value:z[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",isDropdownMode:!0,disabled:!1,inputProps:{clearable:!0},maxLength:null},R={options:K,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e?String(e):"",value:K[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,inputProps:{clearable:!0},maxLength:null},xt={title:"Controls/Autocompletes/SingleAutocomplete",component:y,parameters:{...R},tags:["autodocs"]},A={args:{...$e},render:e=>{const[t,r]=c.useState(e.value||{}),i={...e,inputProps:{...e.inputProps,onClear:()=>r({})}},p=(a,s)=>{switch(s.type){case S.stateChangeTypes.keyDownEnter:case S.stateChangeTypes.clickItem:return{...s,highlightedIndex:a.highlightedIndex,inputValue:""};default:return s}},d=a=>{r(a)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:n.jsx(y,{...i,onChange:d,stateReducer:p,value:t})})}},D={args:{...R},render:e=>{const[t,r]=c.useState(e.value||""),i={...e,inputProps:{...e.inputProps,onClear:()=>r("")}},p=(a,s)=>{switch(s.type){case S.stateChangeTypes.keyDownEnter:case S.stateChangeTypes.clickItem:return{...s,highlightedIndex:a.highlightedIndex,inputValue:""};default:return s}},d=a=>{r(a)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:n.jsx(y,{...i,onChange:d,stateReducer:p,value:t})})}},E={args:{...R,dropdownMatchInputWidth:!0,withMenuFlip:!0,menuPortalRoot:document.body,isDropdownMode:!0},render:e=>n.jsxs("div",{children:[n.jsxs("p",{style:{marginBottom:"16px",maxWidth:"400px"},children:["This example demonstrates menu rendering in a portal to prevent clipping when the autocomplete is inside a container with ",n.jsx("code",{children:"overflow: hidden"})," (e.g., Modal, SidePanel)."]}),n.jsx("div",{style:{width:"400px",height:"80px",overflow:"hidden",border:"2px dashed #aaa",padding:"16px",display:"flex",alignItems:"center"},children:n.jsx(y,{...e})})]})};var U,$,X;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(X=($=A.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var Q,Z,ee;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,re;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...TEST_DATA_STRINGS,
    dropdownMatchInputWidth: true,
    withMenuFlip: true,
    menuPortalRoot: document.body,
    isDropdownMode: true
  },
  render: args => {
    return <div>
        <p style={{
        marginBottom: '16px',
        maxWidth: '400px'
      }}>
          This example demonstrates menu rendering in a portal to prevent clipping when the
          autocomplete is inside a container with <code>overflow: hidden</code> (e.g., Modal,
          SidePanel).
        </p>
        <div style={{
        width: '400px',
        height: '80px',
        overflow: 'hidden',
        border: '2px dashed #aaa',
        padding: '16px',
        display: 'flex',
        alignItems: 'center'
      }}>
          <SingleAutocomplete {...args} />
        </div>
      </div>;
  }
}`,...(re=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};const Ct=["SingleSelectObjects","SingleSelectStrings","SingleSelectWithMenuPortal"];export{A as SingleSelectObjects,D as SingleSelectStrings,E as SingleSelectWithMenuPortal,Ct as __namedExportsOrder,xt as default};
