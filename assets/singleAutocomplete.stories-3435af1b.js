import{j as o}from"./jsx-runtime-2f188e98.js";import{r as d}from"./index-3553ef47.js";import{r as Ke}from"./index-d0bd1ed5.js";import{c as $e}from"./bind-d8141dee.js";import{D as h}from"./downshift.esm-ce98d9a3.js";import{u as Qe,f as Ze,s as et,b as tt}from"./floating-ui.react-ffb05b96.js";import{F as nt}from"./fieldText-ef4d114e.js";import{S as ot}from"./dropdown-1f4530a4.js";import{A as rt}from"./autocompleteMenu-322d2634.js";import{A as st,E as at,T as it}from"./constants-1e05cdf5.js";import{i as lt}from"./isEmpty-6ac0b123.js";import"./index-4c891f75.js";import"./tslib.es6-e2fc4f1b.js";import"./clear-c7bc24e5.js";import"./capslockIcon-7ea946a7.js";import"./baseIconButton-ebf1d26e.js";import"./spinLoader-d5daab2a.js";import"./maxValueDisplay-a537ac0f.js";import"./fieldLabel-917daddd.js";import"./tooltip-54bb6c0d.js";import"./floatingUi-c696ea36.js";import"./index-5cf2ac00.js";import"./bubblesLoader-539cf135.js";import"./button-34bf729b.js";import"./plus-150a0ce8.js";const pt=({skip:e})=>{d.useLayoutEffect(()=>{if(e)return;let n=window.scrollY,t=!0;const a=300,p=()=>{if(!t)return;window.scrollY!==n&&window.scrollTo(0,n)},i=r=>{t&&(r.preventDefault(),r.stopImmediatePropagation(),p())};n=window.scrollY,window.addEventListener("scroll",i,{passive:!1,capture:!0}),requestAnimationFrame(()=>{n=window.scrollY,p()});const l=setTimeout(()=>{t=!1},a);return()=>{clearTimeout(l),window.removeEventListener("scroll",i,{capture:!0})}},[e])},dt=({skip:e,reference:n})=>{d.useEffect(()=>{if(e)return;const t=()=>{const a=n.current;a instanceof HTMLElement&&a.blur()};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[e,n])},ut=({skip:e,onClose:n,menuRef:t})=>{d.useEffect(()=>{if(e)return;const a=p=>{var i;(i=t.current)!=null&&i.contains(p.target)||n()};return window.addEventListener("scroll",a,!0),()=>{window.removeEventListener("scroll",a,!0)}},[e,n,t])},ct={"input-wrapper":"_input-wrapper_d9vma_1","dropdown-button":"_dropdown-button_d9vma_6","icon-reversed":"_icon-reversed_d9vma_14"},ee=$e.bind(ct),mt=0,ht=Ze({fallbackPlacements:["bottom-start","top-start","bottom","top"],boundary:document==null?void 0:document.documentElement,rootBoundary:"viewport"}),gt=et({apply({rects:e,elements:n}){Object.assign(n.floating.style,{width:`${e.reference.width}px`})}}),c=e=>{const{options:n=[],value:t,placeholder:a="",onChange:p=()=>{},onFocus:i=()=>{},onBlur:l=()=>{},disabled:r=!1,inputProps:xe={},parseValueToString:w=s=>s===null?"":String(s),minLength:W=1,skipOptionCreation:k=!1,maxLength:ve=null,optionVariant:Ce="",isRequired:Pe=!1,error:be="",touched:Ie=!1,setTouch:g=()=>{},createWithoutConfirmation:V=!1,menuClassName:Ae="",icon:U,isDropdownMode:y=!1,isOptionUnique:L,refFunction:De,stateReducer:Oe,onStateChange:b,useFixedPositioning:Ee,dropdownMatchInputWidth:H=!1,withMenuFlip:X=!1,placement:Re="bottom-start",newItemButtonText:Ne="",menuPortalRoot:f,..._e}=e,[Y,Me]=d.useState(!1),x=d.useRef(null),qe=d.useCallback(()=>{var s;return(s=x.current)==null?void 0:s.call(x)},[]),J=!Y||!f,z=f||Ee?"fixed":"absolute",Fe=!Y||z==="absolute",Le=d.useMemo(()=>[...X?[ht]:[],...H?[gt]:[]],[X,H]),{refs:I,floatingStyles:je}=Qe({placement:Re,whileElementsMounted:tt,strategy:z,middleware:Le});pt({skip:J}),dt({skip:J,reference:I.reference}),ut({skip:Fe,onClose:qe,menuRef:I.floating});const Be=(s,m,A)=>({item:v,index:D,...j})=>s({item:v,index:D,isSelected:A!==null&&A===v,...j,isActive:m===D}),Ge=(s,m)=>{s.key===it&&(s.preventDefault(),m(n.length))},We=d.useCallback((s,...m)=>{(s==null?void 0:s.isOpen)!==void 0&&Me(s.isOpen),b==null||b(s,...m)},[b]);return o.jsx(h,{onChange:p,itemToString:w,selectedItem:t,onStateChange:We,defaultHighlightedIndex:mt,stateReducer:Oe,children:({getInputProps:s,getItemProps:m,setHighlightedIndex:A,toggleMenu:v,openMenu:D,closeMenu:j,isOpen:T,inputValue:B,highlightedIndex:ke,getRootProps:Ve,selectItem:C})=>{const K=Ve(void 0,{suppressRefError:!0}),Ue={...K,ref:u=>(I.setReference(u),K.ref(u))};x.current||(x.current=j);const He=B??"",{onClear:O,clearable:Xe,...Ye}=xe,$=Xe&&t!==null,Je=(...u)=>{C(null),O==null||O(...u)},Q=o.jsx(rt,{isOpen:T,isDropdownMode:y,style:je,ref:I.setFloating,portalMenuAttribute:f?st:null,minLength:W,inputValue:(B||"").trim(),getItemProps:Be(m,ke,t),parseValueToString:w,optionVariant:Ce,createWithoutConfirmation:V,className:Ae,options:n,newItemButtonText:Ne,..._e});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:ee("input-wrapper"),...Ue,children:[o.jsx(nt,{...s({placeholder:r?"":a,maxLength:ve||void 0,onFocus:()=>{y&&!T&&(D(),g==null||g(!0)),i()},ref:De,onKeyDown:u=>{u.key===at&&u.preventDefault(),B&&T&&Ge(u,A)},onBlur:u=>{const P=He.trim(),E=!lt(P),Z=E?n.find(G=>w(G)===P):void 0,ze=E&&t!==null&&w(t)===P;C(Z||(!k&&V&&E?P:!k&&ze?t:null)),l(u),L==null||L(E?!n.some(G=>w(G)===P):null),y&&T&&v(),g==null||g(!0)},disabled:r,defaultWidth:!1,isRequired:Pe,touched:Ie,error:be,...Ye,clearable:$,onClear:$?Je:O,endIcon:y&&!U?o.jsx("button",{type:"button",className:ee("dropdown-button",{"icon-reversed":T}),onClick:()=>v(),"aria-label":"Toggle dropdown","aria-expanded":T,children:o.jsx(ot,{})}):U,minLength:y?0:W})}),!f&&Q]}),f&&Ke.createPortal(Q,f)]})}})};c.__docgenInfo={description:"",methods:[],displayName:"SingleAutocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onStateChange:{required:!0,tsType:{name:"ComponentProps['onStateChange']",raw:"ComponentProps<typeof Downshift<T>>['onStateChange']"},description:""},value:{required:!0,tsType:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ComponentProps['onChange']",raw:"ComponentProps<typeof Downshift<T>>['onChange']"},description:""},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},inputProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"FieldText"}],raw:"ComponentProps<typeof FieldText>"},description:""},parseValueToString:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T | null) => string",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},name:"value"}],return:{name:"string"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: T,
  index: number,
  isNew: boolean,
  getItemProps: GetItemPropsT<T>,
) => ReactNode`,signature:{arguments:[{type:{name:"T"},name:"value"},{type:{name:"number"},name:"index"},{type:{name:"boolean"},name:"isNew"},{type:{name:"signature",type:"function",raw:`(
  args: GetItemPropsOptions<T> & AdditionalDownshiftFields,
) => GetItemPropsOptions<T> & AdditionalDownshiftFields`,signature:{arguments:[{type:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]},name:"args"}],return:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]}}},name:"getItemProps"}],return:{name:"ReactNode"}}},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},maxLength:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},async:{required:!1,tsType:{name:"boolean"},description:""},optionVariant:{required:!1,tsType:{name:"ComponentProps['optionVariant']",raw:"ComponentProps<typeof AutocompleteMenu>['optionVariant']"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},touched:{required:!1,tsType:{name:"boolean"},description:""},setTouch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},createWithoutConfirmation:{required:!0,tsType:{name:"boolean"},description:""},menuClassName:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},isDropdownMode:{required:!1,tsType:{name:"boolean"},description:""},skipOptionCreation:{required:!1,tsType:{name:"boolean"},description:""},isOptionUnique:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean | null) => void",signature:{arguments:[{type:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},refFunction:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:""},stateReducer:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  state: DownshiftState<T>,
  changes: StateChangeOptions<T>,
) => Partial<StateChangeOptions<T>>`,signature:{arguments:[{type:{name:"DownshiftState",elements:[{name:"T"}],raw:"DownshiftState<T>"},name:"state"},{type:{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"},name:"changes"}],return:{name:"Partial",elements:[{name:"StateChangeOptions",elements:[{name:"T"}],raw:"StateChangeOptions<T>"}],raw:"Partial<StateChangeOptions<T>>"}}},description:""},useFixedPositioning:{required:!0,tsType:{name:"boolean"},description:""},dropdownMatchInputWidth:{required:!1,tsType:{name:"boolean"},description:""},withMenuFlip:{required:!1,tsType:{name:"boolean"},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},getUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},customEmptyListMessage:{required:!1,tsType:{name:"string"},description:""},customNoMatchesMessage:{required:!1,tsType:{name:"string"},description:""},newItemButtonText:{required:!1,tsType:{name:"string"},description:""},menuFooter:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},beforeSearchPrompt:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},shouldShowEmptyListMessage:{required:!1,tsType:{name:"boolean"},description:""},menuPortalRoot:{required:!1,tsType:{name:"Element"},description:`Portal root element for autocomplete menu rendering.
When provided, the menu will be rendered in this element using React Portal.
Useful for preventing clipping in containers with overflow: hidden (e.g., Modal, SidePanel).
@example menuPortalRoot={document.body}`}}};const te=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],ne=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3","Demo Api Tests 4","Demo Api Tests 5","Demo Api Tests 6","Demo Api Tests 7","Demo Api Tests 8"],ft={options:te,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e!=null&&e.id?String(e==null?void 0:e.id):"",value:te[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",isDropdownMode:!0,disabled:!1,inputProps:{clearable:!0},maxLength:null},S={options:ne,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e?String(e):"",value:ne[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,inputProps:{clearable:!0},maxLength:null},Vt={title:"Controls/Autocompletes/SingleAutocomplete",component:c,parameters:{...S},tags:["autodocs"]},R={args:{...ft},render:e=>{const[n,t]=d.useState(e.value||{}),a={...e,inputProps:{...e.inputProps,onClear:()=>t({})}},p=(l,r)=>{switch(r.type){case h.stateChangeTypes.keyDownEnter:case h.stateChangeTypes.clickItem:return{...r,highlightedIndex:l.highlightedIndex,inputValue:""};default:return r}},i=l=>{t(l)};return o.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:o.jsx(c,{...a,onChange:i,stateReducer:p,value:n})})}},N={args:{...S},render:e=>{const[n,t]=d.useState(e.value||""),a={...e,inputProps:{...e.inputProps,onClear:()=>t("")}},p=(l,r)=>{switch(r.type){case h.stateChangeTypes.keyDownEnter:case h.stateChangeTypes.clickItem:return{...r,highlightedIndex:l.highlightedIndex,inputValue:""};default:return r}},i=l=>{t(l)};return o.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:o.jsx(c,{...a,onChange:i,stateReducer:p,value:n})})}},_={args:{...S,dropdownMatchInputWidth:!0,withMenuFlip:!0,menuPortalRoot:document.body,isDropdownMode:!0},render:e=>o.jsxs("div",{children:[o.jsxs("p",{style:{marginBottom:"16px",maxWidth:"400px"},children:["This example demonstrates menu rendering in a portal to prevent clipping when the autocomplete is inside a container with ",o.jsx("code",{children:"overflow: hidden"})," (e.g., Modal, SidePanel)."]}),o.jsx("div",{style:{width:"400px",height:"80px",overflow:"hidden",border:"2px dashed #aaa",padding:"16px",display:"flex",alignItems:"center"},children:o.jsx(c,{...e})})]})},M={args:{...S,value:"",isDropdownMode:!1,minLength:3,beforeSearchPrompt:"At least 3 symbols required."},render:e=>{const[n,t]=d.useState(e.value||""),a={...e,inputProps:{...e.inputProps,onClear:()=>t("")}},p=i=>{t(i)};return o.jsx("div",{style:{width:"400px",height:"200px",display:"flex",alignItems:"center"},children:o.jsx(c,{...a,onChange:p,value:n})})}},q={args:{...S,minLength:0,menuFooter:"Too many results. Please refine your search."},render:e=>{const[n,t]=d.useState(e.value||""),a={...e,inputProps:{...e.inputProps,onClear:()=>t("")}},p=(l,r)=>{switch(r.type){case h.stateChangeTypes.keyDownEnter:case h.stateChangeTypes.clickItem:return{...r,highlightedIndex:l.highlightedIndex,inputValue:""};default:return r}},i=l=>{t(l)};return o.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:o.jsx(c,{...a,onChange:i,stateReducer:p,value:n})})}},F={args:{...S,dropdownMatchInputWidth:!0,withMenuFlip:!0,menuPortalRoot:document.body,isDropdownMode:!0},render:e=>o.jsxs("div",{style:{width:"500px",height:"150px",overflow:"auto",border:"2px dashed #aaa",display:"flex",flexDirection:"column",padding:"16px"},children:[o.jsx("div",{style:{width:"400px"},children:o.jsx(c,{...e})}),o.jsx("p",{style:{marginBottom:"16px",maxWidth:"400px"},children:"This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action. So i need to scroll the page to see the effect of the dropdown closing when the user scrolls. This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action. This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action. This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action."})]})};var oe,re,se;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(re=R.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,ie,le;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(le=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var pe,de,ue;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(de=_.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ce,me,he;M.parameters={...M.parameters,docs:{...(ce=M.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...TEST_DATA_STRINGS,
    value: '',
    isDropdownMode: false,
    minLength: 3,
    beforeSearchPrompt: 'At least 3 symbols required.'
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
    const onChange: ComponentProps<typeof SingleAutocomplete<(typeof OPTIONS_STRINGS)[number]>>['onChange'] = newState => {
      setState(newState as (typeof OPTIONS_STRINGS)[number]);
    };
    return <div style={{
      width: '400px',
      height: '200px',
      display: 'flex',
      alignItems: 'center'
    }}>
        <SingleAutocomplete {...modifiedArgs} onChange={onChange} value={state} />
      </div>;
  }
}`,...(he=(me=M.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ge,fe,Te;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Te=(fe=q.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var Se,we,ye;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(ye=(we=F.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};const Ut=["SingleSelectObjects","SingleSelectStrings","SingleSelectWithMenuPortal","SingleSelectWithBeforeSearchPrompt","SingleSelectWithMenuFooter","SingleSelectWithHideByScroll"];export{R as SingleSelectObjects,N as SingleSelectStrings,M as SingleSelectWithBeforeSearchPrompt,F as SingleSelectWithHideByScroll,q as SingleSelectWithMenuFooter,_ as SingleSelectWithMenuPortal,Ut as __namedExportsOrder,Vt as default};
