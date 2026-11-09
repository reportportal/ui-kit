import{j as n}from"./jsx-runtime-2f188e98.js";import{r as T}from"./index-3553ef47.js";import{c as Ce}from"./bind-d8141dee.js";import{S as Ye}from"./clear-c7bc24e5.js";import{S as Qe}from"./dropdown-1f4530a4.js";import{F as Xe}from"./fieldLabel-917daddd.js";import{u as Ze,s as et,b as tt}from"./floating-ui.react-ffb05b96.js";import{A as nt}from"./autocompleteMenu-322d2634.js";import{S as st}from"./close-b4801ed1.js";import{D as Z}from"./downshift.esm-ce98d9a3.js";import{E as at}from"./constants-1e05cdf5.js";import{i as rt}from"./isEmpty-6ac0b123.js";import"./index-d0bd1ed5.js";import"./index-5cf2ac00.js";import"./bubblesLoader-539cf135.js";import"./button-34bf729b.js";import"./plus-150a0ce8.js";import"./index-4c891f75.js";import"./tslib.es6-e2fc4f1b.js";const ot="_disabled_1rpph_43",it="_input_1rpph_107",lt={"selected-item":"_selected-item_1rpph_16","validation-error":"_validation-error_1rpph_35","highlight-un-stored-item":"_highlight-un-stored-item_1rpph_40",disabled:ot,"mobile-disabled":"_mobile-disabled_1rpph_48","selected-item-text":"_selected-item-text_1rpph_54","single-line":"_single-line_1rpph_58","cross-icon":"_cross-icon_1rpph_64",input:it},H=Ce.bind(lt),dt=e=>e.scrollWidth>e.clientWidth,ut=({item:e,onRemoveItem:t,disabled:s=!1,mobileDisabled:r=!1,parseValueToString:a,error:i=!1,editItem:I,editable:w=!1,getAdditionalCreationCondition:C=()=>!0,storedOption:A=!0,highlightUnStoredItem:m=!1,variant:F="light",getItemName:M,singleLine:g=!1,className:N,textClassName:j})=>{const[p,v]=T.useState(!1),[D,O]=T.useState(""),[o,l]=T.useState(!1),d=T.useRef(null),c=()=>{!s&&w&&!A&&(O((M==null?void 0:M(e))||(a==null?void 0:a(e))||""),v(!0))},h=b=>{O(b.target.value)},_=b=>{const P=C(D);b.key==="Enter"&&P&&(I(e,D),v(!1),O(""))},z=()=>{v(!1),O("")},k=b=>{b.stopPropagation(),t(e)},B=(a==null?void 0:a(e))||"";T.useEffect(()=>{if(d.current&&g){const b=()=>{d.current&&l(dt(d.current))};if(b(),typeof ResizeObserver<"u"){const P=new ResizeObserver(b);return P.observe(d.current),()=>P.disconnect()}}else l(!1)},[B,g]);const f=H("selected-item-text",{"single-line":g},j),R=H("selected-item",F,{[`validation-${i}`]:i,disabled:s,"mobile-disabled":r,"highlight-un-stored-item":m&&!A},N);return p?n.jsx("input",{autoFocus:!0,value:D,onChange:h,onKeyDown:_,onBlur:z,className:H("input")}):n.jsxs("div",{className:R,onClick:c,children:[n.jsx("span",{ref:d,className:f,title:g&&o?B:void 0,children:B}),!s&&n.jsx("button",{type:"button",className:H("cross-icon",{[`validation-${i}`]:i,"mobile-disabled":r,disabled:s}),onClick:k,children:n.jsx(st,{})})]})},mt=({items:e=[],parseValueToString:t,getItemValidationErrorType:s,storedItemsMap:r={},highlightUnStoredItem:a=!1,renderCustomSelectedItem:i,selectedItemSingleLine:I,selectedItemClassName:w,selectedItemTextClassName:C,...A})=>e.map(m=>i?i(m):n.jsx(ut,{parseValueToString:t,error:(s==null?void 0:s(m))||"",item:m,storedOption:!!r[t(m)],highlightUnStoredItem:a,singleLine:I,className:w,textClassName:C,...A},t==null?void 0:t(m))),ue=(e,t)=>typeof e=="string"?e:t?String(e[t(e)]):"",W=(e,t)=>{var r;return e===t?!0:!!(e&&t&&typeof e=="object"&&typeof t=="object"&&Object.keys(e).length===Object.keys(t).length&&((r=Object.entries(e))!=null&&r.every(([a,i])=>W(i,t[a]))))},pt=(e,t,s)=>typeof e=="string"?e===t:s?(()=>{const r=s(e);return e[r]===t[r]})():!1,Ae=({options:e=[],onChange:t,selectedItems:s=[],handleUnStoredItemCb:r=null,existingItemsMap:a={},children:i,customizeNewSelectedValue:I=m=>m,getOptionUniqKey:w,getOptionUniqKeyValue:C,...A})=>{const[m,F]=T.useState(a),M=(o,l)=>{const d={...m};o.forEach(c=>{if(e.find(h=>pt(h,c,w))){const h=ue(c,w);d[h]=!0}}),F(d),l(d)},g=(o,l)=>{const d=ue(o,w);if(d in m){const c={...m};delete c[d],F(c),l(c)}else l(m)},N=(o,l)=>{const _=(Array.isArray(o)?o:[o]).map(f=>I(f)).flatMap(f=>Array.isArray(f)?f:[f]).filter((f,R,b)=>b.findIndex(P=>W(P,f))===R);if(!_||_.length===0)return;const k=[...s.filter(f=>!_.some(R=>W(R,f))),..._];t==null||t(k,l),M(_,f=>r==null?void 0:r(k,f))},j=(o,l)=>{const d=s.indexOf(o),c=[...s];c.splice(d,1,l),t==null||t(c,null)},p=(o,l)=>{const d=s.filter(h=>!W(h,o));t==null||t(d,l),g(o,h=>r==null?void 0:r(d,h))},v=(o,l)=>{o&&N(o,l)},D=o=>({removeItem:p,editItem:j,handleChange:t,getOptionUniqKeyValue:C,storedItemsMap:m,batchAddItems:d=>{N(d,o)},...o}),O=(o,l)=>{switch(l.type){case Z.stateChangeTypes.keyDownEnter:case Z.stateChangeTypes.clickItem:return{...l,highlightedIndex:o.highlightedIndex,inputValue:""};default:return l}};return n.jsx(Z,{...A,stateReducer:O,onChange:v,selectedItem:null,children:o=>i==null?void 0:i(D(o))})};Ae.__docgenInfo={description:"",methods:[],displayName:"MultipleDownshift",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"",defaultValue:{value:"[]",computed:!1}},selectedItems:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"",defaultValue:{value:"[]",computed:!1}},handleUnStoredItemCb:{required:!1,tsType:{name:"union",raw:`| ((newSelectedItems: DownshiftStore<T>, prevSelectedItems: DownshiftStore<T>) => void)
| null`,elements:[{name:"unknown"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},existingItemsMap:{required:!1,tsType:{name:"signature",type:"object",raw:"{ [key: string]: boolean }",signature:{properties:[{key:{name:"string"},value:{name:"boolean",required:!0}}]}},description:"",defaultValue:{value:"{}",computed:!1}},customizeNewSelectedValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => T",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"T"}}},description:"",defaultValue:{value:"(value) => value",computed:!1}},getOptionUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => keyof T",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"T"}}},description:""},getOptionUniqKeyValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: T | T[] | null, downshift: ControllerStateAndHelpers<T> | null) => void",signature:{arguments:[{type:{name:"union",raw:"T | T[] | null",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"},{name:"null"}]},name:"selectedItems"},{type:{name:"union",raw:"ControllerStateAndHelpers<T> | null",elements:[{name:"ControllerStateAndHelpers",elements:[{name:"T"}],raw:"ControllerStateAndHelpers<T>"},{name:"null"}]},name:"downshift"}],return:{name:"void"}}},description:""}},composes:["Partial"]};const ct="_autocomplete_1so4a_16",ft="_disabled_1so4a_32",gt="_error_1so4a_35",ht="_touched_1so4a_35",Tt="_input_1so4a_77",yt={autocomplete:ct,"autocomplete-wrapper":"_autocomplete-wrapper_1so4a_28",disabled:ft,error:gt,touched:ht,"clear-icon":"_clear-icon_1so4a_46","clear-icon--disabled":"_clear-icon--disabled_1so4a_56","autocomplete-input":"_autocomplete-input_1so4a_60","single-line-mode":"_single-line-mode_1so4a_68","mobile-disabled":"_mobile-disabled_1so4a_72",input:Tt,"type-number":"_type-number_1so4a_101","error-text":"_error-text_1so4a_112","dropdown-button":"_dropdown-button_1so4a_121","icon-reversed":"_icon-reversed_1so4a_129"},L=Ce.bind(yt),St=et({apply({rects:e,elements:t}){Object.assign(t.floating.style,{width:`${e.reference.width}px`})}}),G=e=>{const{options:t=[],loading:s=!1,onStateChange:r=()=>{},value:a=[],placeholder:i="",error:I="",touched:w=!1,creatable:C=!1,editable:A=!1,onChange:m=()=>{},onFocus:F=()=>{},onBlur:M=()=>{},disabled:g=!1,isDropdownMode:N=!1,mobileDisabled:j=!1,inputProps:p={},parseValueToString:v=u=>u==null?"":String(u),maxLength:D=null,async:O=!1,customClass:o="",createWithoutConfirmation:l=!1,getItemValidationErrorType:d=null,clearItemsError:c=()=>{},getAdditionalCreationCondition:h=()=>!0,highlightUnStoredItem:_=!1,parseInputValueFn:z=null,handleUnStoredItemCb:k=null,dataAutomationId:B="",existingItemsMap:f={},customizeNewSelectedValue:R=u=>u,renderCustomSelectedItem:b,useFixedPositioning:P,dropdownMatchInputWidth:se=!1,newItemButtonText:Pe="",menuClassName:qe="",selectedItemSingleLine:ae,selectedItemClassName:Me,selectedItemTextClassName:je,...De}=e,Re=T.useMemo(()=>se?[St]:[],[se]),{refs:re,floatingStyles:Ee}=Ze({placement:"bottom-start",strategy:P?"fixed":"absolute",whileElementsMounted:tt,middleware:Re}),Le=a.length===0&&!g?i:"",Q=T.useRef(null);T.useEffect(()=>{c()},[c,a]);const Ge=(u,y)=>{m(u,y)},Fe=(u,y,x)=>({item:S,index:E,...V})=>u({item:S,index:E,isSelected:x.some(X=>W(X,S)),...V,isActive:y===E}),ke=({event:u,removeItem:y,inputValue:x})=>{u.key==="Backspace"&&!x&&a.length&&y(a[a.length-1],null)},oe=({inputValue:u,selectItem:y,clearSelection:x,batchAddItems:S})=>{if(z){const E=z(u);S(E.length?E:[u]),x()}else y(u),x()},Be=u=>y=>{u(y,null),Q.current&&Q.current.focus()},We=t.filter(u=>a.every(y=>!W(y,u)));return n.jsx(Ae,{onChange:Ge,itemToString:v,selectedItems:a,onStateChange:r,options:t,existingItemsMap:f,handleUnStoredItemCb:k,customizeNewSelectedValue:R,children:({getInputProps:u,getItemProps:y,isOpen:x,inputValue:S="",highlightedIndex:E,removeItem:V,editItem:X,openMenu:ze,selectItem:ie,clearSelection:le,toggleMenu:Ve,storedItemsMap:He,getRootProps:Je,getLabelProps:$e,batchAddItems:de})=>{const Ke=Je(void 0,{suppressRefError:!0}),Ue=S??"";return n.jsxs("div",{...Ke,className:L("autocomplete-wrapper"),children:[p.label&&n.jsx(Xe,{...$e(),isRequired:!!p.isRequired,children:p.label}),n.jsxs(n.Fragment,{children:[n.jsxs("div",{ref:re.setReference,className:L("autocomplete",o,{"mobile-disabled":j,error:I,touched:w,disabled:g}),children:[n.jsxs("div",{className:L("autocomplete-input",{"mobile-disabled":j,"single-line-mode":ae}),children:[n.jsx(mt,{items:a,onRemoveItem:Be(V),disabled:g,mobileDisabled:j,parseValueToString:v,getItemValidationErrorType:d,renderCustomSelectedItem:b,editItem:X,editable:A,getAdditionalCreationCondition:h,storedItemsMap:He,highlightUnStoredItem:_,selectedItemSingleLine:ae,selectedItemClassName:Me,selectedItemTextClassName:je}),n.jsx("input",{...u({ref:Q,placeholder:Le,maxLength:D,onFocus:()=>{N&&ze(),F()},onKeyDown:q=>{q.key===at&&S&&C&&h(S)&&oe({inputValue:S,selectItem:ie,clearSelection:le,batchAddItems:de}),ke({event:q,removeItem:V,inputValue:S})},onBlur:()=>{M(),S&&C&&h(S)&&oe({inputValue:S,selectItem:ie,clearSelection:le,batchAddItems:de})},disabled:g,...p}),className:L("input",{disabled:g},p.className),"data-automation-id":B})]}),(p==null?void 0:p.clearable)&&!rt(a)&&n.jsx("button",{type:"button",className:L("clear-icon",{"clear-icon--disabled":g}),onClick:()=>{var q;return!g&&((q=p==null?void 0:p.onClear)==null?void 0:q.call(p))},onMouseDown:q=>q.preventDefault(),children:n.jsx(Ye,{})}),N&&n.jsx("button",{type:"button",className:L("dropdown-button",{"icon-reversed":x}),onClick:()=>Ve(),"aria-label":"Toggle dropdown","aria-expanded":x,children:n.jsx(Qe,{})})]}),I&&w&&n.jsx("span",{className:L("error-text"),children:I})]}),n.jsx(nt,{isOpen:x,loading:s,async:O,ref:re.setFloating,newItemButtonText:Pe,isDropdownMode:N,style:Ee,inputValue:Ue.trim(),getItemProps:Fe(y,E,a),parseValueToString:v,createWithoutConfirmation:l,options:We,className:qe,...De})]})}})};G.__docgenInfo={description:"",methods:[],displayName:"MultipleAutocomplete",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onStateChange:{required:!1,tsType:{name:"MultipleDownshiftProps['onStateChange']",raw:"MultipleDownshiftProps<T>['onStateChange']"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},touched:{required:!1,tsType:{name:"boolean"},description:""},creatable:{required:!1,tsType:{name:"boolean"},description:""},editable:{required:!1,tsType:{name:"boolean"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: T,
  index: number,
  isNew: boolean,
  getItemProps: GetItemPropsT<T>,
) => ReactNode`,signature:{arguments:[{type:{name:"T"},name:"value"},{type:{name:"number"},name:"index"},{type:{name:"boolean"},name:"isNew"},{type:{name:"signature",type:"function",raw:`(
  args: GetItemPropsOptions<T> & AdditionalDownshiftFields,
) => GetItemPropsOptions<T> & AdditionalDownshiftFields`,signature:{arguments:[{type:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]},name:"args"}],return:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]}}},name:"getItemProps"}],return:{name:"ReactNode"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  selectedItems: T | T[] | null,
  downshift: ControllerStateAndHelpers<T> | null,
) => void`,signature:{arguments:[{type:{name:"union",raw:"T | T[] | null",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"},{name:"null"}]},name:"selectedItems"},{type:{name:"union",raw:"ControllerStateAndHelpers<T> | null",elements:[{name:"ControllerStateAndHelpers",elements:[{name:"T"}],raw:"ControllerStateAndHelpers<T>"},{name:"null"}]},name:"downshift"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},mobileDisabled:{required:!1,tsType:{name:"boolean"},description:""},inputProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"FieldText"}],raw:"ComponentProps<typeof FieldText>"},description:""},parseValueToString:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T | null) => string",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},name:"value"}],return:{name:"string"}}},description:""},minLength:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},maxLength:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},async:{required:!1,tsType:{name:"boolean"},description:""},customClass:{required:!1,tsType:{name:"string"},description:""},createWithoutConfirmation:{required:!1,tsType:{name:"boolean"},description:""},getItemValidationErrorType:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},clearItemsError:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isDropdownMode:{required:!1,tsType:{name:"boolean"},description:""},getAdditionalCreationCondition:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => boolean",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"boolean"}}},description:""},highlightUnStoredItem:{required:!1,tsType:{name:"boolean"},description:""},parseInputValueFn:{required:!1,tsType:{name:"union",raw:"((value: string) => T[]) | null",elements:[{name:"unknown"},{name:"null"}]},description:""},handleUnStoredItemCb:{required:!1,tsType:{name:"union",raw:`| ((newSelectedItems: DownshiftStore<T>, prevSelectedItems: DownshiftStore<T>) => void)
| null`,elements:[{name:"unknown"},{name:"null"}]},description:""},dataAutomationId:{required:!1,tsType:{name:"string"},description:""},existingItemsMap:{required:!1,tsType:{name:"Record",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},{name:"boolean"}],raw:"Record<string | number, boolean>"},description:""},optionVariant:{required:!1,tsType:{name:"ComponentProps['optionVariant']",raw:"ComponentProps<typeof AutocompleteMenu>['optionVariant']"},description:""},customizeNewSelectedValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => T",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"T"}}},description:""},renderCustomSelectedItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"ReactNode"}}},description:""},getUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},customEmptyListMessage:{required:!1,tsType:{name:"string"},description:""},customNoMatchesMessage:{required:!1,tsType:{name:"string"},description:""},useFixedPositioning:{required:!1,tsType:{name:"boolean"},description:""},dropdownMatchInputWidth:{required:!1,tsType:{name:"boolean"},description:""},newItemButtonText:{required:!1,tsType:{name:"string"},description:""},menuClassName:{required:!1,tsType:{name:"string"},description:""},selectedItemSingleLine:{required:!1,tsType:{name:"boolean"},description:""},selectedItemClassName:{required:!1,tsType:{name:"string"},description:""},selectedItemTextClassName:{required:!1,tsType:{name:"string"},description:""},menuFooter:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},beforeSearchPrompt:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},shouldShowEmptyListMessage:{required:!1,tsType:{name:"boolean"},description:""}}};const ee=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],ne=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3"],te=["Very Long Option Name That Will Be Truncated When Single Line Mode Is Enabled","Another Very Long Option Name That Will Also Be Truncated","Short","Medium Length Option Name"],Ne={options:ee,loading:!1,async:!0,createWithoutConfirmation:!0,creatable:!1,editable:!0,existingItemsMap:{[ee[0].id]:!0},parseValueToString:e=>e!=null&&e.id?String(e.id):"",highlightUnStoredItem:!1,value:[ee[0]],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,mobileDisabled:!1,inputProps:{label:"Attributes",clearable:!0},maxLength:null,customClass:"",menuClassName:"",parseInputValueFn:null,dataAutomationId:""},Oe={options:ne,loading:!1,async:!0,createWithoutConfirmation:!0,creatable:!1,editable:!0,existingItemsMap:{"Demo Api Tests":!0},parseValueToString:e=>e?String(e):"",highlightUnStoredItem:!0,value:[ne[0]],error:"",touched:!1,inputProps:{label:"Launch names",clearable:!0},minLength:1,isDropdownMode:!0,placeholder:"Test placeholder",disabled:!1,mobileDisabled:!1,maxLength:null,customClass:"",menuClassName:"",parseInputValueFn:null,dataAutomationId:""},kt={title:"Controls/Autocompletes/MultipleAutocomplete",component:G,parameters:{...Ne},tags:["autodocs"]},J={args:{...Ne},render:e=>{const[t,s]=T.useState(e.value||[]),r={...e,inputProps:{...e.inputProps,onClear:()=>s([])}},a=i=>{s(i)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center"},children:n.jsx(G,{...r,onChange:a,value:t})})}},$={args:{...Oe},render:e=>{const[t,s]=T.useState(e.value||[]),r={...e,inputProps:{...e.inputProps,onClear:()=>s([])}},a=i=>{s(i)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center"},children:n.jsx(G,{...r,onChange:a,value:t})})}},K={args:{options:te,loading:!1,async:!0,createWithoutConfirmation:!0,creatable:!1,editable:!0,existingItemsMap:{},parseValueToString:e=>e?String(e):"",highlightUnStoredItem:!1,value:[te[0],te[1]],error:"",touched:!1,inputProps:{clearable:!0},minLength:1,placeholder:"Test placeholder",disabled:!1,mobileDisabled:!1,maxLength:null,customClass:"",menuClassName:"",parseInputValueFn:null,dataAutomationId:"",selectedItemSingleLine:!0},render:e=>{const[t,s]=T.useState(e.value||[]),r={...e,inputProps:{...e.inputProps,onClear:()=>s([])}},a=i=>{s(i)};return n.jsx("div",{style:{width:"300px",height:"400px",display:"flex",alignItems:"center"},children:n.jsx(G,{...r,onChange:a,value:t})})}},U={args:{...Oe,value:[],isDropdownMode:!1,minLength:3,beforeSearchPrompt:"At least 3 symbols required."},render:e=>{const[t,s]=T.useState(e.value||[]),r={...e,inputProps:{...e.inputProps,onClear:()=>s([])}},a=i=>{s(i)};return n.jsx("div",{style:{width:"400px",height:"200px",display:"flex",alignItems:"center"},children:n.jsx(G,{...r,onChange:a,value:t})})}},Y={args:{options:ne,loading:!1,async:!1,createWithoutConfirmation:!0,creatable:!0,editable:!0,existingItemsMap:{},parseValueToString:e=>e?String(e):"",highlightUnStoredItem:!1,value:[],error:"",touched:!1,inputProps:{clearable:!0},minLength:1,isDropdownMode:!1,placeholder:"Enter comma, semicolon, or newline-separated items",disabled:!1,mobileDisabled:!1,maxLength:null,customClass:"",menuClassName:"",dataAutomationId:"multi-token-parse-demo",parseInputValueFn:e=>e.split(/[,;\n]+/).map(t=>t.trim()).filter(t=>t.length>0)},render:e=>{const[t,s]=T.useState(e.value||[]),r={...e,inputProps:{...e.inputProps,onClear:()=>s([])}},a=i=>{s(i)};return n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"20px",fontSize:"14px",color:"#666"},children:n.jsxs("p",{children:["Try entering multiple items in one action:",n.jsx("br",{}),"• Comma-separated: ",n.jsx("code",{children:"alpha, beta, gamma"}),n.jsx("br",{}),"• Semicolon-separated: ",n.jsx("code",{children:"alpha; beta; gamma"}),n.jsx("br",{}),"• Newline-separated (paste multiple lines)",n.jsx("br",{}),"Then press Enter or click outside the field to confirm.",n.jsx("br",{}),"All valid items parsed from the input should be added as separate chips."]})}),n.jsx("div",{style:{width:"500px",height:"400px",display:"flex",alignItems:"center"},children:n.jsx(G,{...r,onChange:a,value:t})}),n.jsxs("div",{style:{marginTop:"20px",fontSize:"14px",color:"#666"},children:[n.jsxs("p",{children:["Current selected items (",t.length,"):"]}),n.jsx("pre",{style:{backgroundColor:"#f5f5f5",padding:"10px",borderRadius:"4px"},children:JSON.stringify(t,null,2)})]})]})}};var me,pe,ce;J.parameters={...J.parameters,docs:{...(me=J.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...TEST_DATA_OBJECTS
  },
  render: args => {
    const [state, setState] = useState(args.value || []);
    const modifiedArgs = {
      ...args,
      inputProps: {
        ...args.inputProps,
        onClear: () => setState([])
      }
    };
    const onChange: ComponentProps<typeof MultipleAutocomplete<(typeof OPTIONS_OBJECTS)[number]>>['onChange'] = newState => {
      setState(newState as typeof OPTIONS_OBJECTS);
    };
    return <div style={{
      width: '600px',
      height: '400px',
      display: 'flex',
      alignItems: 'center'
    }}>
        <MultipleAutocomplete<(typeof OPTIONS_OBJECTS)[number]> {...modifiedArgs} onChange={onChange} value={state} />
      </div>;
  }
}`,...(ce=(pe=J.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var fe,ge,he;$.parameters={...$.parameters,docs:{...(fe=$.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    ...TEST_DATA_STRINGS
  },
  render: args => {
    const [state, setState] = useState(args.value || []);
    const modifiedArgs = {
      ...args,
      inputProps: {
        ...args.inputProps,
        onClear: () => setState([])
      }
    };
    const onChange: ComponentProps<typeof MultipleAutocomplete<(typeof OPTIONS_STRINGS)[number]>>['onChange'] = newState => {
      setState(newState as typeof OPTIONS_STRINGS);
    };
    return <div style={{
      width: '600px',
      height: '400px',
      display: 'flex',
      alignItems: 'center'
    }}>
        <MultipleAutocomplete {...modifiedArgs} onChange={onChange} value={state} />
      </div>;
  }
}`,...(he=(ge=$.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var Te,ye,Se;K.parameters={...K.parameters,docs:{...(Te=K.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    options: LONG_OPTIONS_STRINGS,
    loading: false,
    async: true,
    createWithoutConfirmation: true,
    creatable: false,
    editable: true,
    existingItemsMap: {},
    parseValueToString: value => {
      return value ? String(value) : '';
    },
    highlightUnStoredItem: false,
    value: [LONG_OPTIONS_STRINGS[0], LONG_OPTIONS_STRINGS[1]],
    error: '',
    touched: false,
    inputProps: {
      clearable: true
    },
    minLength: 1,
    placeholder: 'Test placeholder',
    disabled: false,
    mobileDisabled: false,
    maxLength: null,
    customClass: '',
    menuClassName: '',
    parseInputValueFn: null,
    dataAutomationId: '',
    selectedItemSingleLine: true
  },
  render: args => {
    const [state, setState] = useState(args.value || []);
    const modifiedArgs = {
      ...args,
      inputProps: {
        ...args.inputProps,
        onClear: () => setState([])
      }
    };
    const onChange: ComponentProps<typeof MultipleAutocomplete<(typeof LONG_OPTIONS_STRINGS)[number]>>['onChange'] = newState => {
      setState(newState as typeof LONG_OPTIONS_STRINGS);
    };
    return <div style={{
      width: '300px',
      height: '400px',
      display: 'flex',
      alignItems: 'center'
    }}>
        <MultipleAutocomplete<(typeof LONG_OPTIONS_STRINGS)[number]> {...modifiedArgs} onChange={onChange} value={state} />
      </div>;
  }
}`,...(Se=(ye=K.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var be,we,xe;U.parameters={...U.parameters,docs:{...(be=U.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...TEST_DATA_STRINGS,
    value: [],
    isDropdownMode: false,
    minLength: 3,
    beforeSearchPrompt: 'At least 3 symbols required.'
  },
  render: args => {
    const [state, setState] = useState(args.value || []);
    const modifiedArgs = {
      ...args,
      inputProps: {
        ...args.inputProps,
        onClear: () => setState([])
      }
    };
    const onChange: ComponentProps<typeof MultipleAutocomplete<(typeof OPTIONS_STRINGS)[number]>>['onChange'] = newState => {
      setState(newState as typeof OPTIONS_STRINGS);
    };
    return <div style={{
      width: '400px',
      height: '200px',
      display: 'flex',
      alignItems: 'center'
    }}>
        <MultipleAutocomplete<(typeof OPTIONS_STRINGS)[number]> {...modifiedArgs} onChange={onChange} value={state} />
      </div>;
  }
}`,...(xe=(we=U.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var Ie,ve,_e;Y.parameters={...Y.parameters,docs:{...(Ie=Y.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    options: OPTIONS_STRINGS,
    loading: false,
    async: false,
    createWithoutConfirmation: true,
    creatable: true,
    editable: true,
    existingItemsMap: {},
    parseValueToString: value => {
      return value ? String(value) : '';
    },
    highlightUnStoredItem: false,
    value: [],
    error: '',
    touched: false,
    inputProps: {
      clearable: true
    },
    minLength: 1,
    isDropdownMode: false,
    placeholder: 'Enter comma, semicolon, or newline-separated items',
    disabled: false,
    mobileDisabled: false,
    maxLength: null,
    customClass: '',
    menuClassName: '',
    dataAutomationId: 'multi-token-parse-demo',
    // Multi-token parser: splits by comma, semicolon, or newline
    parseInputValueFn: (inputValue: string) => {
      return inputValue.split(/[,;\\n]+/).map(item => item.trim()).filter(item => item.length > 0);
    }
  },
  render: args => {
    const [state, setState] = useState<string[]>(args.value || []);
    const modifiedArgs = {
      ...args,
      inputProps: {
        ...args.inputProps,
        onClear: () => setState([])
      }
    };
    const onChange: ComponentProps<typeof MultipleAutocomplete<string>>['onChange'] = newState => {
      setState(newState as string[]);
    };
    return <div>
        <div style={{
        marginBottom: '20px',
        fontSize: '14px',
        color: '#666'
      }}>
          <p>
            Try entering multiple items in one action:
            <br />• Comma-separated: <code>alpha, beta, gamma</code>
            <br />• Semicolon-separated: <code>alpha; beta; gamma</code>
            <br />
            • Newline-separated (paste multiple lines)
            <br />
            Then press Enter or click outside the field to confirm.
            <br />
            All valid items parsed from the input should be added as separate chips.
          </p>
        </div>
        <div style={{
        width: '500px',
        height: '400px',
        display: 'flex',
        alignItems: 'center'
      }}>
          <MultipleAutocomplete<string> {...modifiedArgs} onChange={onChange} value={state} />
        </div>
        <div style={{
        marginTop: '20px',
        fontSize: '14px',
        color: '#666'
      }}>
          <p>Current selected items ({state.length}):</p>
          <pre style={{
          backgroundColor: '#f5f5f5',
          padding: '10px',
          borderRadius: '4px'
        }}>
            {JSON.stringify(state, null, 2)}
          </pre>
        </div>
      </div>;
  }
}`,...(_e=(ve=Y.parameters)==null?void 0:ve.docs)==null?void 0:_e.source}}};const Bt=["Objects","Strings","WithSingleLineMode","WithBeforeSearchPrompt","WithMultiTokenParseInputValueFn"];export{J as Objects,$ as Strings,U as WithBeforeSearchPrompt,Y as WithMultiTokenParseInputValueFn,K as WithSingleLineMode,Bt as __namedExportsOrder,kt as default};
