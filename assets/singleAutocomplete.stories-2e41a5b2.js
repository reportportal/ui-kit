import{j as n}from"./jsx-runtime-2f188e98.js";import{r as d}from"./index-3553ef47.js";import{r as He}from"./index-d0bd1ed5.js";import{c as Xe}from"./bind-d8141dee.js";import{D as m}from"./downshift.esm-ce98d9a3.js";import{u as Ye,f as Je,s as ze,b as Ke}from"./floating-ui.react-ffb05b96.js";import{F as $e}from"./fieldText-ef4d114e.js";import{S as Qe}from"./dropdown-1f4530a4.js";import{A as Ze}from"./autocompleteMenu-3d6281e4.js";import{A as et,E as tt,T as nt}from"./constants-1e05cdf5.js";import{i as ot}from"./isEmpty-6ac0b123.js";import"./index-4c891f75.js";import"./tslib.es6-e2fc4f1b.js";import"./clear-c7bc24e5.js";import"./capslockIcon-7ea946a7.js";import"./baseIconButton-ebf1d26e.js";import"./spinLoader-d5daab2a.js";import"./maxValueDisplay-a537ac0f.js";import"./fieldLabel-917daddd.js";import"./tooltip-54bb6c0d.js";import"./floatingUi-c696ea36.js";import"./index-5cf2ac00.js";import"./bubblesLoader-539cf135.js";import"./button-34bf729b.js";import"./plus-150a0ce8.js";const rt=({skip:e})=>{d.useLayoutEffect(()=>{if(e)return;let t=window.scrollY,o=!0;const a=300,p=()=>{if(!o)return;window.scrollY!==t&&window.scrollTo(0,t)},l=r=>{o&&(r.preventDefault(),r.stopImmediatePropagation(),p())};t=window.scrollY,window.addEventListener("scroll",l,{passive:!1,capture:!0}),requestAnimationFrame(()=>{t=window.scrollY,p()});const i=setTimeout(()=>{o=!1},a);return()=>{clearTimeout(i),window.removeEventListener("scroll",l,{capture:!0})}},[e])},st=({skip:e,reference:t})=>{d.useEffect(()=>{if(e)return;const o=()=>{const a=t.current;a instanceof HTMLElement&&a.blur()};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[e,t])},at=({skip:e,onClose:t,menuRef:o})=>{d.useEffect(()=>{if(e)return;const a=p=>{var l;(l=o.current)!=null&&l.contains(p.target)||t()};return window.addEventListener("scroll",a,!0),()=>{window.removeEventListener("scroll",a,!0)}},[e,t,o])},it={"input-wrapper":"_input-wrapper_d9vma_1","dropdown-button":"_dropdown-button_d9vma_6","icon-reversed":"_icon-reversed_d9vma_14"},Q=Xe.bind(it),lt=0,pt=Je({fallbackPlacements:["bottom-start","top-start","bottom","top"],boundary:document==null?void 0:document.documentElement,rootBoundary:"viewport"}),dt=ze({apply({rects:e,elements:t}){Object.assign(t.floating.style,{width:`${e.reference.width}px`})}}),h=e=>{const{options:t=[],value:o,placeholder:a="",onChange:p=()=>{},onFocus:l=()=>{},onBlur:i=()=>{},disabled:r=!1,inputProps:fe={},parseValueToString:v=s=>s===null?"":String(s),minLength:B=1,skipOptionCreation:Te=!1,maxLength:we=null,optionVariant:Se="",isRequired:ye=!1,error:xe="",touched:ve=!1,setTouch:g=()=>{},createWithoutConfirmation:W=!1,menuClassName:Ce="",icon:G,isDropdownMode:w=!1,isOptionUnique:q,refFunction:be,stateReducer:Pe,onStateChange:C,useFixedPositioning:Ie,dropdownMatchInputWidth:V=!1,withMenuFlip:U=!1,placement:Ae="bottom-start",newItemButtonText:De="",menuPortalRoot:f,...Ee}=e,[H,Oe]=d.useState(!1),S=d.useRef(null),Re=d.useCallback(()=>{var s;return(s=S.current)==null?void 0:s.call(S)},[]),X=!H||!f,Y=f||Ie?"fixed":"absolute",_e=!H||Y==="absolute",Me=d.useMemo(()=>[...U?[pt]:[],...V?[dt]:[]],[U,V]),{refs:b,floatingStyles:Ne}=Ye({placement:Ae,whileElementsMounted:Ke,strategy:Y,middleware:Me});rt({skip:X}),st({skip:X,reference:b.reference}),at({skip:_e,onClose:Re,menuRef:b.floating});const qe=(s,c,P)=>({item:y,index:I,...F})=>s({item:y,index:I,isSelected:P!==null&&P===y,...F,isActive:c===I}),Fe=(s,c)=>{s.key===nt&&(s.preventDefault(),c(t.length))},Le=d.useCallback((s,...c)=>{(s==null?void 0:s.isOpen)!==void 0&&Oe(s.isOpen),C==null||C(s,...c)},[C]);return n.jsx(m,{onChange:p,itemToString:v,selectedItem:o,onStateChange:Le,defaultHighlightedIndex:lt,stateReducer:Pe,children:({getInputProps:s,getItemProps:c,setHighlightedIndex:P,toggleMenu:y,openMenu:I,closeMenu:F,isOpen:T,inputValue:L,highlightedIndex:je,getRootProps:ke,selectItem:A})=>{const J=ke(void 0,{suppressRefError:!0}),Be={...J,ref:u=>(b.setReference(u),J.ref(u))};S.current||(S.current=F);const We=L??"",{onClear:D,clearable:Ge,...Ve}=fe,z=Ge&&o!==null,Ue=(...u)=>{A(null),D==null||D(...u)},K=n.jsx(Ze,{isOpen:T,isDropdownMode:w,style:Ne,ref:b.setFloating,portalMenuAttribute:f?et:null,minLength:B,inputValue:(L||"").trim(),getItemProps:qe(c,je,o),parseValueToString:v,optionVariant:Se,createWithoutConfirmation:W,className:Ce,options:t,newItemButtonText:De,...Ee});return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:Q("input-wrapper"),...Be,children:[n.jsx($e,{...s({placeholder:r?"":a,maxLength:we||void 0,onFocus:()=>{w&&!T&&(I(),g==null||g(!0)),l()},ref:be,onKeyDown:u=>{u.key===tt&&u.preventDefault(),L&&T&&Fe(u,P)},onBlur:u=>{const E=We.trim(),j=!ot(E),$=j?t.find(k=>v(k)===E):void 0;A($||(!Te&&W&&j?E:null)),i(u),q==null||q(j?!t.some(k=>v(k)===E):null),w&&T&&y(),g==null||g(!0)},disabled:r,defaultWidth:!1,isRequired:ye,touched:ve,error:xe,...Ve,clearable:z,onClear:z?Ue:D,endIcon:w&&!G?n.jsx("button",{type:"button",className:Q("dropdown-button",{"icon-reversed":T}),onClick:()=>y(),"aria-label":"Toggle dropdown","aria-expanded":T,children:n.jsx(Qe,{})}):G,minLength:w?0:B})}),!f&&K]}),f&&He.createPortal(K,f)]})}})};h.__docgenInfo={description:"",methods:[],displayName:"SingleAutocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onStateChange:{required:!0,tsType:{name:"ComponentProps['onStateChange']",raw:"ComponentProps<typeof Downshift<T>>['onStateChange']"},description:""},value:{required:!0,tsType:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ComponentProps['onChange']",raw:"ComponentProps<typeof Downshift<T>>['onChange']"},description:""},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},inputProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"FieldText"}],raw:"ComponentProps<typeof FieldText>"},description:""},parseValueToString:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T | null) => string",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},name:"value"}],return:{name:"string"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: T,
  index: number,
  isNew: boolean,
  getItemProps: GetItemPropsT<T>,
) => ReactNode`,signature:{arguments:[{type:{name:"T"},name:"value"},{type:{name:"number"},name:"index"},{type:{name:"boolean"},name:"isNew"},{type:{name:"signature",type:"function",raw:`(
  args: GetItemPropsOptions<T> & AdditionalDownshiftFields,
) => GetItemPropsOptions<T> & AdditionalDownshiftFields`,signature:{arguments:[{type:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]},name:"args"}],return:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]}}},name:"getItemProps"}],return:{name:"ReactNode"}}},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},maxLength:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},async:{required:!1,tsType:{name:"boolean"},description:""},optionVariant:{required:!1,tsType:{name:"ComponentProps['optionVariant']",raw:"ComponentProps<typeof AutocompleteMenu>['optionVariant']"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},touched:{required:!1,tsType:{name:"boolean"},description:""},setTouch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},createWithoutConfirmation:{required:!0,tsType:{name:"boolean"},description:""},menuClassName:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},isDropdownMode:{required:!1,tsType:{name:"boolean"},description:""},skipOptionCreation:{required:!1,tsType:{name:"boolean"},description:""},isOptionUnique:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean | null) => void",signature:{arguments:[{type:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},refFunction:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:""},stateReducer:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  state: DownshiftState<T>,
  changes: StateChangeOptions<T>,
) => Partial<StateChangeOptions<T>>`,signature:{arguments:[{type:{name:"DownshiftState",elements:[{name:"T"}],raw:"DownshiftState<T>"},name:"state"},{type:{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"},name:"changes"}],return:{name:"Partial",elements:[{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"}],raw:"Partial<StateChangeOptions<T>>"}}},description:""},useFixedPositioning:{required:!0,tsType:{name:"boolean"},description:""},dropdownMatchInputWidth:{required:!1,tsType:{name:"boolean"},description:""},withMenuFlip:{required:!1,tsType:{name:"boolean"},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},getUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},customEmptyListMessage:{required:!1,tsType:{name:"string"},description:""},customNoMatchesMessage:{required:!1,tsType:{name:"string"},description:""},newItemButtonText:{required:!1,tsType:{name:"string"},description:""},menuFooter:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},shouldShowEmptyListMessage:{required:!1,tsType:{name:"boolean"},description:""},menuPortalRoot:{required:!1,tsType:{name:"Element"},description:`Portal root element for autocomplete menu rendering.
When provided, the menu will be rendered in this element using React Portal.
Useful for preventing clipping in containers with overflow: hidden (e.g., Modal, SidePanel).
@example menuPortalRoot={document.body}`}}};const Z=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],ee=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3","Demo Api Tests 4","Demo Api Tests 5","Demo Api Tests 6","Demo Api Tests 7","Demo Api Tests 8"],ut={options:Z,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e!=null&&e.id?String(e==null?void 0:e.id):"",value:Z[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",isDropdownMode:!0,disabled:!1,inputProps:{clearable:!0},maxLength:null},x={options:ee,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e?String(e):"",value:ee[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,inputProps:{clearable:!0},maxLength:null},jt={title:"Controls/Autocompletes/SingleAutocomplete",component:h,parameters:{...x},tags:["autodocs"]},O={args:{...ut},render:e=>{const[t,o]=d.useState(e.value||{}),a={...e,inputProps:{...e.inputProps,onClear:()=>o({})}},p=(i,r)=>{switch(r.type){case m.stateChangeTypes.keyDownEnter:case m.stateChangeTypes.clickItem:return{...r,highlightedIndex:i.highlightedIndex,inputValue:""};default:return r}},l=i=>{o(i)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:n.jsx(h,{...a,onChange:l,stateReducer:p,value:t})})}},R={args:{...x},render:e=>{const[t,o]=d.useState(e.value||""),a={...e,inputProps:{...e.inputProps,onClear:()=>o("")}},p=(i,r)=>{switch(r.type){case m.stateChangeTypes.keyDownEnter:case m.stateChangeTypes.clickItem:return{...r,highlightedIndex:i.highlightedIndex,inputValue:""};default:return r}},l=i=>{o(i)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:n.jsx(h,{...a,onChange:l,stateReducer:p,value:t})})}},_={args:{...x,dropdownMatchInputWidth:!0,withMenuFlip:!0,menuPortalRoot:document.body,isDropdownMode:!0},render:e=>n.jsxs("div",{children:[n.jsxs("p",{style:{marginBottom:"16px",maxWidth:"400px"},children:["This example demonstrates menu rendering in a portal to prevent clipping when the autocomplete is inside a container with ",n.jsx("code",{children:"overflow: hidden"})," (e.g., Modal, SidePanel)."]}),n.jsx("div",{style:{width:"400px",height:"80px",overflow:"hidden",border:"2px dashed #aaa",padding:"16px",display:"flex",alignItems:"center"},children:n.jsx(h,{...e})})]})},M={args:{...x,minLength:0,menuFooter:"Too many results. Please refine your search."},render:e=>{const[t,o]=d.useState(e.value||""),a={...e,inputProps:{...e.inputProps,onClear:()=>o("")}},p=(i,r)=>{switch(r.type){case m.stateChangeTypes.keyDownEnter:case m.stateChangeTypes.clickItem:return{...r,highlightedIndex:i.highlightedIndex,inputValue:""};default:return r}},l=i=>{o(i)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:n.jsx(h,{...a,onChange:l,stateReducer:p,value:t})})}},N={args:{...x,dropdownMatchInputWidth:!0,withMenuFlip:!0,menuPortalRoot:document.body,isDropdownMode:!0},render:e=>n.jsxs("div",{style:{width:"500px",height:"150px",overflow:"auto",border:"2px dashed #aaa",display:"flex",flexDirection:"column",padding:"16px"},children:[n.jsx("div",{style:{width:"400px"},children:n.jsx(h,{...e})}),n.jsx("p",{style:{marginBottom:"16px",maxWidth:"400px"},children:"This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action. So i need to scroll the page to see the effect of the dropdown closing when the user scrolls. This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action. This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action. This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action."})]})};var te,ne,oe;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,se,ae;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(se=R.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,le,pe;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(le=_.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var de,ue,ce;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...TEST_DATA_STRINGS,
    minLength: 0,
    menuFooter: 'Too many results. Please refine your search.'
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
}`,...(ce=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var me,he,ge;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(he=N.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const kt=["SingleSelectObjects","SingleSelectStrings","SingleSelectWithMenuPortal","SingleSelectWithMenuFooter","SingleSelectWithHideByScroll"];export{O as SingleSelectObjects,R as SingleSelectStrings,N as SingleSelectWithHideByScroll,M as SingleSelectWithMenuFooter,_ as SingleSelectWithMenuPortal,kt as __namedExportsOrder,jt as default};
