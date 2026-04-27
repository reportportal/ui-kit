import{j as o}from"./jsx-runtime-2f188e98.js";import{r as p}from"./index-3553ef47.js";import{r as ke}from"./index-d0bd1ed5.js";import{c as We}from"./bind-d8141dee.js";import{D as v}from"./downshift.esm-ce98d9a3.js";import{u as Ge,f as Ue,s as Ve,b as He}from"./floating-ui.react-ea29885b.js";import{F as Xe}from"./fieldText-86ee05b0.js";import{S as Ye}from"./dropdown-1f4530a4.js";import{A as Je}from"./autocompleteMenu-fdcd1f8a.js";import{A as ze,E as Ke,T as $e}from"./constants-1e05cdf5.js";import{i as Qe}from"./isEmpty-6ac0b123.js";import"./index-4c891f75.js";import"./tslib.es6-e2fc4f1b.js";import"./clear-c7bc24e5.js";import"./openEye-28d4aa93.js";import"./baseIconButton-9b03f096.js";import"./spinLoader-d5daab2a.js";import"./maxValueDisplay-a537ac0f.js";import"./fieldLabel-917daddd.js";import"./index-5cf2ac00.js";import"./bubblesLoader-539cf135.js";import"./button-34bf729b.js";import"./plus-150a0ce8.js";const Ze=({skip:e})=>{p.useLayoutEffect(()=>{if(e)return;let n=window.scrollY,r=!0;const i=300,d=()=>{if(!r)return;window.scrollY!==n&&window.scrollTo(0,n)},a=s=>{r&&(s.preventDefault(),s.stopImmediatePropagation(),d())};n=window.scrollY,window.addEventListener("scroll",a,{passive:!1,capture:!0}),requestAnimationFrame(()=>{n=window.scrollY,d()});const l=setTimeout(()=>{r=!1},i);return()=>{clearTimeout(l),window.removeEventListener("scroll",a,{capture:!0})}},[e])},et=({skip:e,reference:n})=>{p.useEffect(()=>{if(e)return;const r=()=>{const i=n.current;i instanceof HTMLElement&&i.blur()};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[e,n])},tt=({skip:e,onClose:n,menuRef:r})=>{p.useEffect(()=>{if(e)return;const i=d=>{var a;(a=r.current)!=null&&a.contains(d.target)||n()};return window.addEventListener("scroll",i,!0),()=>{window.removeEventListener("scroll",i,!0)}},[e,n,r])},nt={"input-wrapper":"_input-wrapper_d9vma_1","dropdown-button":"_dropdown-button_d9vma_6","icon-reversed":"_icon-reversed_d9vma_14"},$=We.bind(nt),ot=0,rt=Ue({fallbackPlacements:["bottom-start","top-start","bottom","top"],boundary:document==null?void 0:document.documentElement,rootBoundary:"viewport"}),st=Ve({apply({rects:e,elements:n}){Object.assign(n.floating.style,{width:`${e.reference.width}px`})}}),f=e=>{const{options:n=[],value:r,placeholder:i="",onChange:d=()=>{},onFocus:a=()=>{},onBlur:l=()=>{},disabled:s=!1,inputProps:me={},parseValueToString:b=t=>t===null?"":String(t),minLength:k=1,skipOptionCreation:ce=!1,maxLength:he=null,optionVariant:ge="",isRequired:fe=!1,error:Te="",touched:we=!1,setTouch:c=()=>{},createWithoutConfirmation:W=!1,menuClassName:ye="",icon:G,isDropdownMode:T=!1,isOptionUnique:N,refFunction:w,stateReducer:Se,onStateChange:C,useFixedPositioning:xe,dropdownMatchInputWidth:U=!1,withMenuFlip:V=!1,newItemButtonText:ve="",menuPortalRoot:h,...be}=e,[H,Ce]=p.useState(!1),y=p.useRef(null),Pe=p.useCallback(()=>{var t;return(t=y.current)==null?void 0:t.call(y)},[]),X=!H||!h,Y=h||xe?"fixed":"absolute",Ae=!H||Y==="absolute",Ie=p.useMemo(()=>[...V?[rt]:[],...U?[st]:[]],[V,U]),{refs:S,floatingStyles:De}=Ge({placement:"bottom-start",whileElementsMounted:He,strategy:Y,middleware:Ie}),Ee=p.useCallback(t=>{if(S.setReference(t),!!w){if(typeof w=="function"){w(t);return}w.current=t}},[S,w]);Ze({skip:X}),et({skip:X,reference:S.reference}),tt({skip:Ae,onClose:Pe,menuRef:S.floating});const Oe=(t,u,P)=>({item:x,index:A,...F})=>t({item:x,index:A,isSelected:P!==null&&P===x,...F,isActive:u===A}),Me=(t,u)=>{t.key===$e&&(t.preventDefault(),u(n.length))},_e=p.useCallback((t,...u)=>{(t==null?void 0:t.isOpen)!==void 0&&Ce(t.isOpen),C==null||C(t,...u)},[C]);return o.jsx(v,{onChange:d,itemToString:b,selectedItem:r,onStateChange:_e,defaultHighlightedIndex:ot,stateReducer:Se,children:({getInputProps:t,getItemProps:u,setHighlightedIndex:P,toggleMenu:x,openMenu:A,closeMenu:F,isOpen:g,inputValue:L,highlightedIndex:qe,getRootProps:Re,selectItem:I})=>{const Ne={...Re(void 0,{suppressRefError:!0})};y.current||(y.current=F);const Fe=L??"",{onClear:D,clearable:Le,...je}=me,J=Le&&r!==null,Be=(...m)=>{I(null),D==null||D(...m)},z=o.jsx(Je,{isOpen:g,isDropdownMode:T,style:De,ref:S.setFloating,portalMenuAttribute:h?ze:null,minLength:k,inputValue:(L||"").trim(),getItemProps:Oe(u,qe,r),parseValueToString:b,optionVariant:ge,createWithoutConfirmation:W,className:ye,options:n,newItemButtonText:ve,...be});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:$("input-wrapper"),...Ne,children:[o.jsx(Xe,{...t({placeholder:s?"":i,maxLength:he||void 0,onFocus:()=>{T&&!g&&(A(),c==null||c(!0)),a()},ref:Ee,onKeyDown:m=>{m.key===Ke&&m.preventDefault(),L&&g&&Me(m,P)},onBlur:m=>{const E=Fe.trim(),j=!Qe(E),K=j?n.find(B=>b(B)===E):void 0;I(K||(!ce&&W&&j?E:null)),l(m),N==null||N(j?!n.some(B=>b(B)===E):null),T&&g&&x(),c==null||c(!0)},disabled:s,defaultWidth:!1,isRequired:fe,touched:we,error:Te,...je,clearable:J,onClear:J?Be:D,endIcon:T&&!G?o.jsx("button",{type:"button",className:$("dropdown-button",{"icon-reversed":g}),onClick:()=>x(),"aria-label":"Toggle dropdown","aria-expanded":g,children:o.jsx(Ye,{})}):G,minLength:T?0:k})}),!h&&z]}),h&&ke.createPortal(z,h)]})}})};f.__docgenInfo={description:"",methods:[],displayName:"SingleAutocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onStateChange:{required:!0,tsType:{name:"ComponentProps['onStateChange']",raw:"ComponentProps<typeof Downshift<T>>['onStateChange']"},description:""},value:{required:!0,tsType:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ComponentProps['onChange']",raw:"ComponentProps<typeof Downshift<T>>['onChange']"},description:""},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},inputProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"FieldText"}],raw:"ComponentProps<typeof FieldText>"},description:""},parseValueToString:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T | null) => string",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},name:"value"}],return:{name:"string"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: T,
  index: number,
  isNew: boolean,
  getItemProps: GetItemPropsT<T>,
) => ReactNode`,signature:{arguments:[{type:{name:"T"},name:"value"},{type:{name:"number"},name:"index"},{type:{name:"boolean"},name:"isNew"},{type:{name:"signature",type:"function",raw:`(
  args: GetItemPropsOptions<T> & AdditionalDownshiftFields,
) => GetItemPropsOptions<T> & AdditionalDownshiftFields`,signature:{arguments:[{type:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]},name:"args"}],return:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]}}},name:"getItemProps"}],return:{name:"ReactNode"}}},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},maxLength:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},async:{required:!1,tsType:{name:"boolean"},description:""},optionVariant:{required:!1,tsType:{name:"ComponentProps['optionVariant']",raw:"ComponentProps<typeof AutocompleteMenu>['optionVariant']"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},touched:{required:!1,tsType:{name:"boolean"},description:""},setTouch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},createWithoutConfirmation:{required:!0,tsType:{name:"boolean"},description:""},menuClassName:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},isDropdownMode:{required:!1,tsType:{name:"boolean"},description:""},skipOptionCreation:{required:!1,tsType:{name:"boolean"},description:""},isOptionUnique:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean | null) => void",signature:{arguments:[{type:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},refFunction:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:""},stateReducer:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  state: DownshiftState<T>,
  changes: StateChangeOptions<T>,
) => Partial<StateChangeOptions<T>>`,signature:{arguments:[{type:{name:"DownshiftState",elements:[{name:"T"}],raw:"DownshiftState<T>"},name:"state"},{type:{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"},name:"changes"}],return:{name:"Partial",elements:[{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"}],raw:"Partial<StateChangeOptions<T>>"}}},description:""},useFixedPositioning:{required:!0,tsType:{name:"boolean"},description:""},dropdownMatchInputWidth:{required:!1,tsType:{name:"boolean"},description:""},withMenuFlip:{required:!1,tsType:{name:"boolean"},description:""},getUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},customEmptyListMessage:{required:!1,tsType:{name:"string"},description:""},customNoMatchesMessage:{required:!1,tsType:{name:"string"},description:""},newItemButtonText:{required:!1,tsType:{name:"string"},description:""},optionsLimit:{required:!1,tsType:{name:"number"},description:""},limitationText:{required:!1,tsType:{name:"string"},description:""},shouldShowEmptyListMessage:{required:!1,tsType:{name:"boolean"},description:""},menuPortalRoot:{required:!1,tsType:{name:"Element"},description:`Portal root element for autocomplete menu rendering.
When provided, the menu will be rendered in this element using React Portal.
Useful for preventing clipping in containers with overflow: hidden (e.g., Modal, SidePanel).
@example menuPortalRoot={document.body}`}}};const Q=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],Z=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3","Demo Api Tests 4","Demo Api Tests 5","Demo Api Tests 6","Demo Api Tests 7","Demo Api Tests 8"],it={options:Q,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e!=null&&e.id?String(e==null?void 0:e.id):"",value:Q[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",isDropdownMode:!0,disabled:!1,inputProps:{clearable:!0},maxLength:null},R={options:Z,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e?String(e):"",value:Z[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,inputProps:{clearable:!0},maxLength:null},_t={title:"Controls/Autocompletes/SingleAutocomplete",component:f,parameters:{...R},tags:["autodocs"]},O={args:{...it},render:e=>{const[n,r]=p.useState(e.value||{}),i={...e,inputProps:{...e.inputProps,onClear:()=>r({})}},d=(l,s)=>{switch(s.type){case v.stateChangeTypes.keyDownEnter:case v.stateChangeTypes.clickItem:return{...s,highlightedIndex:l.highlightedIndex,inputValue:""};default:return s}},a=l=>{r(l)};return o.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:o.jsx(f,{...i,onChange:a,stateReducer:d,value:n})})}},M={args:{...R},render:e=>{const[n,r]=p.useState(e.value||""),i={...e,inputProps:{...e.inputProps,onClear:()=>r("")}},d=(l,s)=>{switch(s.type){case v.stateChangeTypes.keyDownEnter:case v.stateChangeTypes.clickItem:return{...s,highlightedIndex:l.highlightedIndex,inputValue:""};default:return s}},a=l=>{r(l)};return o.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:o.jsx(f,{...i,onChange:a,stateReducer:d,value:n})})}},_={args:{...R,dropdownMatchInputWidth:!0,withMenuFlip:!0,menuPortalRoot:document.body,isDropdownMode:!0},render:e=>o.jsxs("div",{children:[o.jsxs("p",{style:{marginBottom:"16px",maxWidth:"400px"},children:["This example demonstrates menu rendering in a portal to prevent clipping when the autocomplete is inside a container with ",o.jsx("code",{children:"overflow: hidden"})," (e.g., Modal, SidePanel)."]}),o.jsx("div",{style:{width:"400px",height:"80px",overflow:"hidden",border:"2px dashed #aaa",padding:"16px",display:"flex",alignItems:"center"},children:o.jsx(f,{...e})})]})},q={args:{...R,dropdownMatchInputWidth:!0,withMenuFlip:!0,menuPortalRoot:document.body,isDropdownMode:!0},render:e=>o.jsxs("div",{style:{width:"500px",height:"150px",overflow:"auto",border:"2px dashed #aaa",display:"flex",flexDirection:"column",padding:"16px"},children:[o.jsx("div",{style:{width:"400px"},children:o.jsx(f,{...e})}),o.jsx("p",{style:{marginBottom:"16px",maxWidth:"400px"},children:"This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action. So i need to scroll the page to see the effect of the dropdown closing when the user scrolls. This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action. This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action. This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action."})]})};var ee,te,ne;O.parameters={...O.parameters,docs:{...(ee=O.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=O.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,re,se;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(re=M.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ae,le;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var pe,de,ue;q.parameters={...q.parameters,docs:{...(pe=q.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(de=q.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const qt=["SingleSelectObjects","SingleSelectStrings","SingleSelectWithMenuPortal","SingleSelectWithHideByScroll"];export{O as SingleSelectObjects,M as SingleSelectStrings,q as SingleSelectWithHideByScroll,_ as SingleSelectWithMenuPortal,qt as __namedExportsOrder,_t as default};
