import{j as n}from"./jsx-runtime-2f188e98.js";import{r as S}from"./index-3553ef47.js";import{c as xe}from"./bind-d8141dee.js";import{S as Ve}from"./clear-c7bc24e5.js";import{S as He}from"./dropdown-1f4530a4.js";import{u as Je,s as $e,b as Ke}from"./floating-ui.react-ffb05b96.js";import{A as Ue}from"./autocompleteMenu-3d6281e4.js";import{S as Ye}from"./close-b4801ed1.js";import{D as X}from"./downshift.esm-ce98d9a3.js";import{E as Qe}from"./constants-1e05cdf5.js";import{i as Xe}from"./isEmpty-6ac0b123.js";import"./index-d0bd1ed5.js";import"./index-5cf2ac00.js";import"./bubblesLoader-539cf135.js";import"./button-34bf729b.js";import"./plus-150a0ce8.js";import"./index-4c891f75.js";import"./tslib.es6-e2fc4f1b.js";const Ze="_disabled_1rpph_43",et="_input_1rpph_107",tt={"selected-item":"_selected-item_1rpph_16","validation-error":"_validation-error_1rpph_35","highlight-un-stored-item":"_highlight-un-stored-item_1rpph_40",disabled:Ze,"mobile-disabled":"_mobile-disabled_1rpph_48","selected-item-text":"_selected-item-text_1rpph_54","single-line":"_single-line_1rpph_58","cross-icon":"_cross-icon_1rpph_64",input:et},H=xe.bind(tt),nt=e=>e.scrollWidth>e.clientWidth,st=({item:e,onRemoveItem:t,disabled:s=!1,mobileDisabled:r=!1,parseValueToString:a,error:i=!1,editItem:I,editable:w=!1,getAdditionalCreationCondition:C=()=>!0,storedOption:A=!0,highlightUnStoredItem:m=!1,variant:k="light",getItemName:j,singleLine:f=!1,className:N,textClassName:M})=>{const[g,_]=S.useState(!1),[D,O]=S.useState(""),[o,l]=S.useState(!1),d=S.useRef(null),p=()=>{!s&&w&&!A&&(O((j==null?void 0:j(e))||(a==null?void 0:a(e))||""),_(!0))},h=b=>{O(b.target.value)},v=b=>{const P=C(D);b.key==="Enter"&&P&&(I(e,D),_(!1),O(""))},z=()=>{_(!1),O("")},F=b=>{b.stopPropagation(),t(e)},G=(a==null?void 0:a(e))||"";S.useEffect(()=>{if(d.current&&f){const b=()=>{d.current&&l(nt(d.current))};if(b(),typeof ResizeObserver<"u"){const P=new ResizeObserver(b);return P.observe(d.current),()=>P.disconnect()}}else l(!1)},[G,f]);const c=H("selected-item-text",{"single-line":f},M),E=H("selected-item",k,{[`validation-${i}`]:i,disabled:s,"mobile-disabled":r,"highlight-un-stored-item":m&&!A},N);return g?n.jsx("input",{autoFocus:!0,value:D,onChange:h,onKeyDown:v,onBlur:z,className:H("input")}):n.jsxs("div",{className:E,onClick:p,children:[n.jsx("span",{ref:d,className:c,title:f&&o?G:void 0,children:G}),!s&&n.jsx("button",{type:"button",className:H("cross-icon",{[`validation-${i}`]:i,"mobile-disabled":r,disabled:s}),onClick:F,children:n.jsx(Ye,{})})]})},at=({items:e=[],parseValueToString:t,getItemValidationErrorType:s,storedItemsMap:r={},highlightUnStoredItem:a=!1,renderCustomSelectedItem:i,selectedItemSingleLine:I,selectedItemClassName:w,selectedItemTextClassName:C,...A})=>e.map(m=>i?i(m):n.jsx(st,{parseValueToString:t,error:(s==null?void 0:s(m))||"",item:m,storedOption:!!r[t(m)],highlightUnStoredItem:a,singleLine:I,className:w,textClassName:C,...A},t==null?void 0:t(m))),de=(e,t)=>typeof e=="string"?e:t?String(e[t(e)]):"",B=(e,t)=>{var r;return e===t?!0:!!(e&&t&&typeof e=="object"&&typeof t=="object"&&Object.keys(e).length===Object.keys(t).length&&((r=Object.entries(e))!=null&&r.every(([a,i])=>B(i,t[a]))))},rt=(e,t,s)=>typeof e=="string"?e===t:s?(()=>{const r=s(e);return e[r]===t[r]})():!1,Ie=({options:e=[],onChange:t,selectedItems:s=[],handleUnStoredItemCb:r=null,existingItemsMap:a={},children:i,customizeNewSelectedValue:I=m=>m,getOptionUniqKey:w,getOptionUniqKeyValue:C,...A})=>{const[m,k]=S.useState(a),j=(o,l)=>{const d={...m};o.forEach(p=>{if(e.find(h=>rt(h,p,w))){const h=de(p,w);d[h]=!0}}),k(d),l(d)},f=(o,l)=>{const d=de(o,w);if(d in m){const p={...m};delete p[d],k(p),l(p)}else l(m)},N=(o,l)=>{const v=(Array.isArray(o)?o:[o]).map(c=>I(c)).flatMap(c=>Array.isArray(c)?c:[c]).filter((c,E,b)=>b.findIndex(P=>B(P,c))===E);if(!v||v.length===0)return;const F=[...s.filter(c=>!v.some(E=>B(E,c))),...v];t==null||t(F,l),j(v,c=>r==null?void 0:r(F,c))},M=(o,l)=>{const d=s.indexOf(o),p=[...s];p.splice(d,1,l),t==null||t(p,null)},g=(o,l)=>{const d=s.filter(h=>!B(h,o));t==null||t(d,l),f(o,h=>r==null?void 0:r(d,h))},_=(o,l)=>{o&&N(o,l)},D=o=>({removeItem:g,editItem:M,handleChange:t,getOptionUniqKeyValue:C,storedItemsMap:m,batchAddItems:d=>{N(d,o)},...o}),O=(o,l)=>{switch(l.type){case X.stateChangeTypes.keyDownEnter:case X.stateChangeTypes.clickItem:return{...l,highlightedIndex:o.highlightedIndex,inputValue:""};default:return l}};return n.jsx(X,{...A,stateReducer:O,onChange:_,selectedItem:null,children:o=>i==null?void 0:i(D(o))})};Ie.__docgenInfo={description:"",methods:[],displayName:"MultipleDownshift",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"",defaultValue:{value:"[]",computed:!1}},selectedItems:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"",defaultValue:{value:"[]",computed:!1}},handleUnStoredItemCb:{required:!1,tsType:{name:"union",raw:`| ((newSelectedItems: DownshiftStore<T>, prevSelectedItems: DownshiftStore<T>) => void)
| null`,elements:[{name:"unknown"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},existingItemsMap:{required:!1,tsType:{name:"signature",type:"object",raw:"{ [key: string]: boolean }",signature:{properties:[{key:{name:"string"},value:{name:"boolean",required:!0}}]}},description:"",defaultValue:{value:"{}",computed:!1}},customizeNewSelectedValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => T",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"T"}}},description:"",defaultValue:{value:"(value) => value",computed:!1}},getOptionUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => keyof T",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"T"}}},description:""},getOptionUniqKeyValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: T | T[] | null, downshift: ControllerStateAndHelpers<T> | null) => void",signature:{arguments:[{type:{name:"union",raw:"T | T[] | null",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"},{name:"null"}]},name:"selectedItems"},{type:{name:"union",raw:"ControllerStateAndHelpers<T> | null",elements:[{name:"ControllerStateAndHelpers",elements:[{name:"T"}],raw:"ControllerStateAndHelpers<T>"},{name:"null"}]},name:"downshift"}],return:{name:"void"}}},description:""}},composes:["Partial"]};const ot="_autocomplete_1so4a_16",it="_disabled_1so4a_32",lt="_error_1so4a_35",dt="_touched_1so4a_35",ut="_input_1so4a_77",mt={autocomplete:ot,"autocomplete-wrapper":"_autocomplete-wrapper_1so4a_28",disabled:it,error:lt,touched:dt,"clear-icon":"_clear-icon_1so4a_46","clear-icon--disabled":"_clear-icon--disabled_1so4a_56","autocomplete-input":"_autocomplete-input_1so4a_60","single-line-mode":"_single-line-mode_1so4a_68","mobile-disabled":"_mobile-disabled_1so4a_72",input:ut,"type-number":"_type-number_1so4a_101","error-text":"_error-text_1so4a_112","dropdown-button":"_dropdown-button_1so4a_121","icon-reversed":"_icon-reversed_1so4a_129"},L=xe.bind(mt),pt=$e({apply({rects:e,elements:t}){Object.assign(t.floating.style,{width:`${e.reference.width}px`})}}),W=e=>{const{options:t=[],loading:s=!1,onStateChange:r=()=>{},value:a=[],placeholder:i="",error:I="",touched:w=!1,creatable:C=!1,editable:A=!1,onChange:m=()=>{},onFocus:k=()=>{},onBlur:j=()=>{},disabled:f=!1,isDropdownMode:N=!1,mobileDisabled:M=!1,inputProps:g={},parseValueToString:_=u=>u==null?"":String(u),maxLength:D=null,async:O=!1,customClass:o="",createWithoutConfirmation:l=!1,getItemValidationErrorType:d=null,clearItemsError:p=()=>{},getAdditionalCreationCondition:h=()=>!0,highlightUnStoredItem:v=!1,parseInputValueFn:z=null,handleUnStoredItemCb:F=null,dataAutomationId:G="",existingItemsMap:c={},customizeNewSelectedValue:E=u=>u,renderCustomSelectedItem:b,useFixedPositioning:P,dropdownMatchInputWidth:ne=!1,newItemButtonText:ve="",menuClassName:Ce="",selectedItemSingleLine:se,selectedItemClassName:Ae,selectedItemTextClassName:Ne,...Oe}=e,Pe=S.useMemo(()=>ne?[pt]:[],[ne]),{refs:ae,floatingStyles:qe}=Je({placement:"bottom-start",strategy:P?"fixed":"absolute",whileElementsMounted:Ke,middleware:Pe}),je=a.length===0&&!f?i:"",Y=S.useRef(null);S.useEffect(()=>{p()},[p,a]);const Me=(u,T)=>{m(u,T)},De=(u,T,x)=>({item:y,index:R,...V})=>u({item:y,index:R,isSelected:x.some(Q=>B(Q,y)),...V,isActive:T===R}),Ee=({event:u,removeItem:T,inputValue:x})=>{u.key==="Backspace"&&!x&&a.length&&T(a[a.length-1],null)},re=({inputValue:u,selectItem:T,clearSelection:x,batchAddItems:y})=>{if(z){const R=z(u);y(R.length?R:[u]),x()}else T(u),x()},Re=u=>T=>{u(T,null),Y.current&&Y.current.focus()},Le=t.filter(u=>a.every(T=>!B(T,u)));return n.jsx(Ie,{onChange:Me,itemToString:_,selectedItems:a,onStateChange:r,options:t,existingItemsMap:c,handleUnStoredItemCb:F,customizeNewSelectedValue:E,children:({getInputProps:u,getItemProps:T,isOpen:x,inputValue:y="",highlightedIndex:R,removeItem:V,editItem:Q,openMenu:ke,selectItem:oe,clearSelection:ie,toggleMenu:Fe,storedItemsMap:Ge,getRootProps:Be,batchAddItems:le})=>{const We=Be(void 0,{suppressRefError:!0}),ze=y??"";return n.jsxs("div",{...We,className:L("autocomplete-wrapper"),children:[n.jsxs(n.Fragment,{children:[n.jsxs("div",{ref:ae.setReference,className:L("autocomplete",o,{"mobile-disabled":M,error:I,touched:w,disabled:f}),children:[n.jsxs("div",{className:L("autocomplete-input",{"mobile-disabled":M,"single-line-mode":se}),children:[n.jsx(at,{items:a,onRemoveItem:Re(V),disabled:f,mobileDisabled:M,parseValueToString:_,getItemValidationErrorType:d,renderCustomSelectedItem:b,editItem:Q,editable:A,getAdditionalCreationCondition:h,storedItemsMap:Ge,highlightUnStoredItem:v,selectedItemSingleLine:se,selectedItemClassName:Ae,selectedItemTextClassName:Ne}),n.jsx("input",{...u({ref:Y,placeholder:je,maxLength:D,onFocus:()=>{N&&ke(),k()},onKeyDown:q=>{q.key===Qe&&y&&C&&h(y)&&re({inputValue:y,selectItem:oe,clearSelection:ie,batchAddItems:le}),Ee({event:q,removeItem:V,inputValue:y})},onBlur:()=>{j(),y&&C&&h(y)&&re({inputValue:y,selectItem:oe,clearSelection:ie,batchAddItems:le})},disabled:f,...g}),className:L("input",{disabled:f},g.className),"data-automation-id":G})]}),(g==null?void 0:g.clearable)&&!Xe(a)&&n.jsx("button",{type:"button",className:L("clear-icon",{"clear-icon--disabled":f}),onClick:()=>{var q;return!f&&((q=g==null?void 0:g.onClear)==null?void 0:q.call(g))},onMouseDown:q=>q.preventDefault(),children:n.jsx(Ve,{})}),N&&n.jsx("button",{type:"button",className:L("dropdown-button",{"icon-reversed":x}),onClick:()=>Fe(),"aria-label":"Toggle dropdown","aria-expanded":x,children:n.jsx(He,{})})]}),I&&w&&n.jsx("span",{className:L("error-text"),children:I})]}),n.jsx(Ue,{isOpen:x,loading:s,async:O,ref:ae.setFloating,newItemButtonText:ve,isDropdownMode:N,style:qe,inputValue:ze.trim(),getItemProps:De(T,R,a),parseValueToString:_,createWithoutConfirmation:l,options:Le,className:Ce,...Oe})]})}})};W.__docgenInfo={description:"",methods:[],displayName:"MultipleAutocomplete",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onStateChange:{required:!1,tsType:{name:"MultipleDownshiftProps['onStateChange']",raw:"MultipleDownshiftProps<T>['onStateChange']"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},touched:{required:!1,tsType:{name:"boolean"},description:""},creatable:{required:!1,tsType:{name:"boolean"},description:""},editable:{required:!1,tsType:{name:"boolean"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
| null`,elements:[{name:"unknown"},{name:"null"}]},description:""},dataAutomationId:{required:!1,tsType:{name:"string"},description:""},existingItemsMap:{required:!1,tsType:{name:"Record",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},{name:"boolean"}],raw:"Record<string | number, boolean>"},description:""},optionVariant:{required:!1,tsType:{name:"ComponentProps['optionVariant']",raw:"ComponentProps<typeof AutocompleteMenu>['optionVariant']"},description:""},customizeNewSelectedValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => T",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"T"}}},description:""},renderCustomSelectedItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"ReactNode"}}},description:""},getUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},customEmptyListMessage:{required:!1,tsType:{name:"string"},description:""},customNoMatchesMessage:{required:!1,tsType:{name:"string"},description:""},useFixedPositioning:{required:!1,tsType:{name:"boolean"},description:""},dropdownMatchInputWidth:{required:!1,tsType:{name:"boolean"},description:""},newItemButtonText:{required:!1,tsType:{name:"string"},description:""},menuClassName:{required:!1,tsType:{name:"string"},description:""},selectedItemSingleLine:{required:!1,tsType:{name:"boolean"},description:""},selectedItemClassName:{required:!1,tsType:{name:"string"},description:""},selectedItemTextClassName:{required:!1,tsType:{name:"string"},description:""},menuFooter:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},shouldShowEmptyListMessage:{required:!1,tsType:{name:"boolean"},description:""}}};const Z=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],te=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3"],ee=["Very Long Option Name That Will Be Truncated When Single Line Mode Is Enabled","Another Very Long Option Name That Will Also Be Truncated","Short","Medium Length Option Name"],_e={options:Z,loading:!1,async:!0,createWithoutConfirmation:!0,creatable:!1,editable:!0,existingItemsMap:{[Z[0].id]:!0},parseValueToString:e=>e!=null&&e.id?String(e.id):"",highlightUnStoredItem:!1,value:[Z[0]],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,mobileDisabled:!1,inputProps:{clearable:!0},maxLength:null,customClass:"",menuClassName:"",parseInputValueFn:null,dataAutomationId:""},ct={options:te,loading:!1,async:!0,createWithoutConfirmation:!0,creatable:!1,editable:!0,existingItemsMap:{"Demo Api Tests":!0},parseValueToString:e=>e?String(e):"",highlightUnStoredItem:!0,value:[te[0]],error:"",touched:!1,inputProps:{clearable:!0},minLength:1,isDropdownMode:!0,placeholder:"Test placeholder",disabled:!1,mobileDisabled:!1,maxLength:null,customClass:"",menuClassName:"",parseInputValueFn:null,dataAutomationId:""},Mt={title:"Controls/Autocompletes/MultipleAutocomplete",component:W,parameters:{..._e},tags:["autodocs"]},J={args:{..._e},render:e=>{const[t,s]=S.useState(e.value||[]),r={...e,inputProps:{...e.inputProps,onClear:()=>s([])}},a=i=>{s(i)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center"},children:n.jsx(W,{...r,onChange:a,value:t})})}},$={args:{...ct},render:e=>{const[t,s]=S.useState(e.value||[]),r={...e,inputProps:{...e.inputProps,onClear:()=>s([])}},a=i=>{s(i)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center"},children:n.jsx(W,{...r,onChange:a,value:t})})}},K={args:{options:ee,loading:!1,async:!0,createWithoutConfirmation:!0,creatable:!1,editable:!0,existingItemsMap:{},parseValueToString:e=>e?String(e):"",highlightUnStoredItem:!1,value:[ee[0],ee[1]],error:"",touched:!1,inputProps:{clearable:!0},minLength:1,placeholder:"Test placeholder",disabled:!1,mobileDisabled:!1,maxLength:null,customClass:"",menuClassName:"",parseInputValueFn:null,dataAutomationId:"",selectedItemSingleLine:!0},render:e=>{const[t,s]=S.useState(e.value||[]),r={...e,inputProps:{...e.inputProps,onClear:()=>s([])}},a=i=>{s(i)};return n.jsx("div",{style:{width:"300px",height:"400px",display:"flex",alignItems:"center"},children:n.jsx(W,{...r,onChange:a,value:t})})}},U={args:{options:te,loading:!1,async:!1,createWithoutConfirmation:!0,creatable:!0,editable:!0,existingItemsMap:{},parseValueToString:e=>e?String(e):"",highlightUnStoredItem:!1,value:[],error:"",touched:!1,inputProps:{clearable:!0},minLength:1,isDropdownMode:!1,placeholder:"Enter comma, semicolon, or newline-separated items",disabled:!1,mobileDisabled:!1,maxLength:null,customClass:"",menuClassName:"",dataAutomationId:"multi-token-parse-demo",parseInputValueFn:e=>e.split(/[,;\n]+/).map(t=>t.trim()).filter(t=>t.length>0)},render:e=>{const[t,s]=S.useState(e.value||[]),r={...e,inputProps:{...e.inputProps,onClear:()=>s([])}},a=i=>{s(i)};return n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"20px",fontSize:"14px",color:"#666"},children:n.jsxs("p",{children:["Try entering multiple items in one action:",n.jsx("br",{}),"• Comma-separated: ",n.jsx("code",{children:"alpha, beta, gamma"}),n.jsx("br",{}),"• Semicolon-separated: ",n.jsx("code",{children:"alpha; beta; gamma"}),n.jsx("br",{}),"• Newline-separated (paste multiple lines)",n.jsx("br",{}),"Then press Enter or click outside the field to confirm.",n.jsx("br",{}),"All valid items parsed from the input should be added as separate chips."]})}),n.jsx("div",{style:{width:"500px",height:"400px",display:"flex",alignItems:"center"},children:n.jsx(W,{...r,onChange:a,value:t})}),n.jsxs("div",{style:{marginTop:"20px",fontSize:"14px",color:"#666"},children:[n.jsxs("p",{children:["Current selected items (",t.length,"):"]}),n.jsx("pre",{style:{backgroundColor:"#f5f5f5",padding:"10px",borderRadius:"4px"},children:JSON.stringify(t,null,2)})]})]})}};var ue,me,pe;J.parameters={...J.parameters,docs:{...(ue=J.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(me=J.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ce,fe,ge;$.parameters={...$.parameters,docs:{...(ce=$.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ge=(fe=$.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,Te,ye;K.parameters={...K.parameters,docs:{...(he=K.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ye=(Te=K.parameters)==null?void 0:Te.docs)==null?void 0:ye.source}}};var Se,be,we;U.parameters={...U.parameters,docs:{...(Se=U.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(we=(be=U.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};const Dt=["Objects","Strings","WithSingleLineMode","WithMultiTokenParseInputValueFn"];export{J as Objects,$ as Strings,U as WithMultiTokenParseInputValueFn,K as WithSingleLineMode,Dt as __namedExportsOrder,Mt as default};
