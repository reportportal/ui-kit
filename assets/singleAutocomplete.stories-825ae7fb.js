import{j as n}from"./jsx-runtime-2f188e98.js";import{r as m}from"./index-3553ef47.js";import{r as We}from"./index-d0bd1ed5.js";import{c as ke}from"./bind-d8141dee.js";import{D as S}from"./downshift.esm-ce98d9a3.js";import{u as Ge}from"./floating-ui.react-eea5639b.js";import{F as Ve}from"./fieldText-86ee05b0.js";import{S as Ue}from"./dropdown-1f4530a4.js";import{A as He,E as Xe,T as Ye}from"./constants-5cde2c58.js";import{i as Je}from"./isEmpty-6ac0b123.js";import{f as ze,s as Ke,b as $e}from"./floating-ui.react-dom-a5cc5ea5.js";import"./index-4c891f75.js";import"./tslib.es6-e2fc4f1b.js";import"./clear-c7bc24e5.js";import"./openEye-28d4aa93.js";import"./baseIconButton-9b03f096.js";import"./spinLoader-d5daab2a.js";import"./maxValueDisplay-a537ac0f.js";import"./fieldLabel-917daddd.js";import"./index-5cf2ac00.js";import"./bubblesLoader-539cf135.js";import"./button-34bf729b.js";import"./plus-150a0ce8.js";const Qe=({skip:e})=>{m.useLayoutEffect(()=>{if(e)return;let t=window.scrollY,o=!0;const i=300,p=()=>{if(!o)return;window.scrollY!==t&&window.scrollTo(0,t)},a=s=>{o&&(s.preventDefault(),s.stopImmediatePropagation(),p())};t=window.scrollY,window.addEventListener("scroll",a,{passive:!1,capture:!0}),requestAnimationFrame(()=>{t=window.scrollY,p()});const l=setTimeout(()=>{o=!1},i);return()=>{clearTimeout(l),window.removeEventListener("scroll",a,{capture:!0})}},[e])},Ze=({skip:e,reference:t})=>{m.useEffect(()=>{if(e)return;const o=()=>{const i=t.current;i instanceof HTMLElement&&i.blur()};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[e,t])},et=({skip:e,onClose:t,menuRef:o})=>{m.useEffect(()=>{if(e)return;const i=p=>{var a;(a=o.current)!=null&&a.contains(p.target)||t()};return window.addEventListener("scroll",i,!0),()=>{window.removeEventListener("scroll",i,!0)}},[e,t,o])},tt={"input-wrapper":"_input-wrapper_d9vma_1","dropdown-button":"_dropdown-button_d9vma_6","icon-reversed":"_icon-reversed_d9vma_14"},$=ke.bind(tt),nt=0,ot=ze({fallbackPlacements:["bottom-start","top-start","bottom","top"],boundary:document==null?void 0:document.documentElement,rootBoundary:"viewport"}),rt=Ke({apply({rects:e,elements:t}){Object.assign(t.floating.style,{width:`${e.reference.width}px`})}}),g=e=>{const{options:t=[],value:o,placeholder:i="",onChange:p=()=>{},onFocus:a=()=>{},onBlur:l=()=>{},disabled:s=!1,inputProps:ue={},parseValueToString:x=r=>r===null?"":String(r),minLength:B=1,skipOptionCreation:ce=!1,maxLength:he=null,optionVariant:ge="",isRequired:fe=!1,error:Te="",touched:we=!1,setTouch:c=()=>{},createWithoutConfirmation:W=!1,menuClassName:ye="",icon:k,isDropdownMode:f=!1,isOptionUnique:R,refFunction:Se,stateReducer:xe,onStateChange:v,useFixedPositioning:ve,dropdownMatchInputWidth:G=!1,withMenuFlip:V=!1,newItemButtonText:be="",menuPortalRoot:T,...Ce}=e,[U,Pe]=m.useState(!1),w=m.useRef(null),Ie=m.useCallback(()=>{var r;return(r=w.current)==null?void 0:r.call(w)},[]),H=!U||!T,X=T||ve?"fixed":"absolute",Ae=!U||X==="absolute",De=m.useMemo(()=>[...V?[ot]:[],...G?[rt]:[]],[V,G]),{refs:b,floatingStyles:Ee}=Ge({placement:"bottom-start",whileElementsMounted:$e,strategy:X,middleware:De});Qe({skip:H}),Ze({skip:H,reference:b.reference}),et({skip:Ae,onClose:Ie,menuRef:b.floating});const Oe=(r,u,C)=>({item:y,index:P,...N})=>r({item:y,index:P,isSelected:C!==null&&C===y,...N,isActive:u===P}),qe=(r,u)=>{r.key===Ye&&(r.preventDefault(),u(t.length))},_e=m.useCallback((r,...u)=>{(r==null?void 0:r.isOpen)!==void 0&&Pe(r.isOpen),v==null||v(r,...u)},[v]);return n.jsx(S,{onChange:p,itemToString:x,selectedItem:o,onStateChange:_e,defaultHighlightedIndex:nt,stateReducer:xe,children:({getInputProps:r,getItemProps:u,setHighlightedIndex:C,toggleMenu:y,openMenu:P,closeMenu:N,isOpen:h,inputValue:F,highlightedIndex:Me,getRootProps:Re,selectItem:I})=>{const Y=Re(void 0,{suppressRefError:!0}),Ne={...Y,ref:d=>(b.setReference(d),Y.ref(d))};w.current||(w.current=N);const Fe=F??"",{onClear:A,clearable:Le,...je}=ue,J=Le&&o!==null,Be=(...d)=>{I(null),A==null||A(...d)},z=n.jsx(He,{isOpen:h,isDropdownMode:f,style:Ee,ref:b.setFloating,minLength:B,inputValue:(F||"").trim(),getItemProps:Oe(u,Me,o),parseValueToString:x,optionVariant:ge,createWithoutConfirmation:W,className:ye,options:t,newItemButtonText:be,...Ce});return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:$("input-wrapper"),...Ne,children:[n.jsx(Ve,{...r({placeholder:s?"":i,maxLength:he||void 0,onFocus:()=>{f&&!h&&(P(),c==null||c(!0)),a()},ref:Se,onKeyDown:d=>{d.key===Xe&&d.preventDefault(),F&&h&&qe(d,C)},onBlur:d=>{const D=Fe.trim(),L=!Je(D),K=L?t.find(j=>x(j)===D):void 0;I(K||(!ce&&W&&L?D:null)),l(d),R==null||R(L?!t.some(j=>x(j)===D):null),f&&h&&y(),c==null||c(!0)},disabled:s,defaultWidth:!1,isRequired:fe,touched:we,error:Te,...je,clearable:J,onClear:J?Be:A,endIcon:f&&!k?n.jsx("button",{type:"button",className:$("dropdown-button",{"icon-reversed":h}),onClick:()=>y(),"aria-label":"Toggle dropdown","aria-expanded":h,children:n.jsx(Ue,{})}):k,minLength:f?0:B})}),!T&&z]}),T&&We.createPortal(z,T)]})}})};g.__docgenInfo={description:"",methods:[],displayName:"SingleAutocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onStateChange:{required:!0,tsType:{name:"ComponentProps['onStateChange']",raw:"ComponentProps<typeof Downshift<T>>['onStateChange']"},description:""},value:{required:!0,tsType:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ComponentProps['onChange']",raw:"ComponentProps<typeof Downshift<T>>['onChange']"},description:""},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},inputProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"FieldText"}],raw:"ComponentProps<typeof FieldText>"},description:""},parseValueToString:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T | null) => string",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},name:"value"}],return:{name:"string"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
@example menuPortalRoot={document.body}`}}};const Q=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],Z=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3","Demo Api Tests 4","Demo Api Tests 5","Demo Api Tests 6","Demo Api Tests 7","Demo Api Tests 8"],st={options:Q,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e!=null&&e.id?String(e==null?void 0:e.id):"",value:Q[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",isDropdownMode:!0,disabled:!1,inputProps:{clearable:!0},maxLength:null},M={options:Z,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e?String(e):"",value:Z[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,inputProps:{clearable:!0},maxLength:null},Ot={title:"Controls/Autocompletes/SingleAutocomplete",component:g,parameters:{...M},tags:["autodocs"]},E={args:{...st},render:e=>{const[t,o]=m.useState(e.value||{}),i={...e,inputProps:{...e.inputProps,onClear:()=>o({})}},p=(l,s)=>{switch(s.type){case S.stateChangeTypes.keyDownEnter:case S.stateChangeTypes.clickItem:return{...s,highlightedIndex:l.highlightedIndex,inputValue:""};default:return s}},a=l=>{o(l)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:n.jsx(g,{...i,onChange:a,stateReducer:p,value:t})})}},O={args:{...M},render:e=>{const[t,o]=m.useState(e.value||""),i={...e,inputProps:{...e.inputProps,onClear:()=>o("")}},p=(l,s)=>{switch(s.type){case S.stateChangeTypes.keyDownEnter:case S.stateChangeTypes.clickItem:return{...s,highlightedIndex:l.highlightedIndex,inputValue:""};default:return s}},a=l=>{o(l)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:n.jsx(g,{...i,onChange:a,stateReducer:p,value:t})})}},q={args:{...M,dropdownMatchInputWidth:!0,withMenuFlip:!0,menuPortalRoot:document.body,isDropdownMode:!0},render:e=>n.jsxs("div",{children:[n.jsxs("p",{style:{marginBottom:"16px",maxWidth:"400px"},children:["This example demonstrates menu rendering in a portal to prevent clipping when the autocomplete is inside a container with ",n.jsx("code",{children:"overflow: hidden"})," (e.g., Modal, SidePanel)."]}),n.jsx("div",{style:{width:"400px",height:"80px",overflow:"hidden",border:"2px dashed #aaa",padding:"16px",display:"flex",alignItems:"center"},children:n.jsx(g,{...e})})]})},_={args:{...M,dropdownMatchInputWidth:!0,withMenuFlip:!0,menuPortalRoot:document.body,isDropdownMode:!0},render:e=>n.jsxs("div",{style:{width:"500px",height:"150px",overflow:"auto",border:"2px dashed #aaa",display:"flex",flexDirection:"column",padding:"16px"},children:[n.jsx("div",{style:{width:"400px"},children:n.jsx(g,{...e})}),n.jsx("p",{style:{marginBottom:"16px",maxWidth:"400px"},children:"This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action. So i need to scroll the page to see the effect of the dropdown closing when the user scrolls. This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action. This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action. This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action."})]})};var ee,te,ne;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,re,se;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(re=O.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ae,le;q.parameters={...q.parameters,docs:{...(ie=q.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ae=q.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var pe,de,me;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...TEST_DATA_STRINGS,
    dropdownMatchInputWidth: true,
    withMenuFlip: true,
    menuPortalRoot: document.body,
    isDropdownMode: true
  },
  render: args => {
    return <div style={{
      width: '500px',
      height: '150px',
      overflow: 'auto',
      border: '2px dashed #aaa',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px'
    }}>
        <div style={{
        width: '400px'
      }}>
          <SingleAutocomplete {...args} />
        </div>

        <p style={{
        marginBottom: '16px',
        maxWidth: '400px'
      }}>
          This is a very long text to enable scrolling. This example demonstrates that the dropdown
          will close when the user scrolls the page, which is a common UX pattern to prevent the
          dropdown from being detached from the input. Try scrolling the page to see it in action.
          So i need to scroll the page to see the effect of the dropdown closing when the user
          scrolls. This is a very long text to enable scrolling. This example demonstrates that the
          dropdown will close when the user scrolls the page, which is a common UX pattern to
          prevent the dropdown from being detached from the input. Try scrolling the page to see it
          in action. This is a very long text to enable scrolling. This example demonstrates that
          the dropdown will close when the user scrolls the page, which is a common UX pattern to
          prevent the dropdown from being detached from the input. Try scrolling the page to see it
          in action. This is a very long text to enable scrolling. This example demonstrates that
          the dropdown will close when the user scrolls the page, which is a common UX pattern to
          prevent the dropdown from being detached from the input. Try scrolling the page to see it
          in action.
        </p>
      </div>;
  }
}`,...(me=(de=_.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const qt=["SingleSelectObjects","SingleSelectStrings","SingleSelectWithMenuPortal","SingleSelectWithHideByScroll"];export{E as SingleSelectObjects,O as SingleSelectStrings,_ as SingleSelectWithHideByScroll,q as SingleSelectWithMenuPortal,qt as __namedExportsOrder,Ot as default};
