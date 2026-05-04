import{j as n}from"./jsx-runtime-2f188e98.js";import{r as b}from"./index-3553ef47.js";import{c as xe}from"./bind-d8141dee.js";import{S as We}from"./clear-c7bc24e5.js";import{S as Ve}from"./dropdown-1f4530a4.js";import{u as He,b as ze}from"./floating-ui.react-ea29885b.js";import{A as Je}from"./autocompleteMenu-fdcd1f8a.js";import{S as $e}from"./close-b4801ed1.js";import{D as X}from"./downshift.esm-ce98d9a3.js";import{E as Ke}from"./constants-1e05cdf5.js";import{i as Ue}from"./isEmpty-6ac0b123.js";import"./index-d0bd1ed5.js";import"./index-5cf2ac00.js";import"./bubblesLoader-539cf135.js";import"./button-34bf729b.js";import"./plus-150a0ce8.js";import"./index-4c891f75.js";import"./tslib.es6-e2fc4f1b.js";const Ye="_disabled_1rpph_43",Qe="_input_1rpph_107",Xe={"selected-item":"_selected-item_1rpph_16","validation-error":"_validation-error_1rpph_35","highlight-un-stored-item":"_highlight-un-stored-item_1rpph_40",disabled:Ye,"mobile-disabled":"_mobile-disabled_1rpph_48","selected-item-text":"_selected-item-text_1rpph_54","single-line":"_single-line_1rpph_58","cross-icon":"_cross-icon_1rpph_64",input:Qe},z=xe.bind(Xe),Ze=e=>e.scrollWidth>e.clientWidth,et=({item:e,onRemoveItem:t,disabled:s=!1,mobileDisabled:a=!1,parseValueToString:r,error:i=!1,editItem:w,editable:x=!1,getAdditionalCreationCondition:C=()=>!0,storedOption:A=!0,highlightUnStoredItem:m=!1,variant:k="light",getItemName:j,singleLine:g=!1,className:N,textClassName:D})=>{const[f,_]=b.useState(!1),[M,O]=b.useState(""),[o,l]=b.useState(!1),u=b.useRef(null),p=()=>{!s&&x&&!A&&(O((j==null?void 0:j(e))||(r==null?void 0:r(e))||""),_(!0))},h=S=>{O(S.target.value)},v=S=>{const P=C(M);S.key==="Enter"&&P&&(w(e,M),_(!1),O(""))},V=()=>{_(!1),O("")},F=S=>{S.stopPropagation(),t(e)},G=(r==null?void 0:r(e))||"";b.useEffect(()=>{if(u.current&&g){const S=()=>{u.current&&l(Ze(u.current))};if(S(),typeof ResizeObserver<"u"){const P=new ResizeObserver(S);return P.observe(u.current),()=>P.disconnect()}}else l(!1)},[G,g]);const c=z("selected-item-text",{"single-line":g},D),E=z("selected-item",k,{[`validation-${i}`]:i,disabled:s,"mobile-disabled":a,"highlight-un-stored-item":m&&!A},N);return f?n.jsx("input",{autoFocus:!0,value:M,onChange:h,onKeyDown:v,onBlur:V,className:z("input")}):n.jsxs("div",{className:E,onClick:p,children:[n.jsx("span",{ref:u,className:c,title:g&&o?G:void 0,children:G}),!s&&n.jsx("button",{type:"button",className:z("cross-icon",{[`validation-${i}`]:i,"mobile-disabled":a,disabled:s}),onClick:F,children:n.jsx($e,{})})]})},tt=({items:e=[],parseValueToString:t,getItemValidationErrorType:s,storedItemsMap:a={},highlightUnStoredItem:r=!1,renderCustomSelectedItem:i,selectedItemSingleLine:w,selectedItemClassName:x,selectedItemTextClassName:C,...A})=>e.map(m=>i?i(m):n.jsx(et,{parseValueToString:t,error:(s==null?void 0:s(m))||"",item:m,storedOption:!!a[t(m)],highlightUnStoredItem:r,singleLine:w,className:x,textClassName:C,...A},t==null?void 0:t(m))),le=(e,t)=>typeof e=="string"?e:t?String(e[t(e)]):"",B=(e,t)=>{var a;return e===t?!0:!!(e&&t&&typeof e=="object"&&typeof t=="object"&&Object.keys(e).length===Object.keys(t).length&&((a=Object.entries(e))!=null&&a.every(([r,i])=>B(i,t[r]))))},nt=(e,t,s)=>typeof e=="string"?e===t:s?(()=>{const a=s(e);return e[a]===t[a]})():!1,Ie=({options:e=[],onChange:t,selectedItems:s=[],handleUnStoredItemCb:a=null,existingItemsMap:r={},children:i,customizeNewSelectedValue:w=m=>m,getOptionUniqKey:x,getOptionUniqKeyValue:C,...A})=>{const[m,k]=b.useState(r),j=(o,l)=>{const u={...m};o.forEach(p=>{if(e.find(h=>nt(h,p,x))){const h=le(p,x);u[h]=!0}}),k(u),l(u)},g=(o,l)=>{const u=le(o,x);if(u in m){const p={...m};delete p[u],k(p),l(p)}else l(m)},N=(o,l)=>{const v=(Array.isArray(o)?o:[o]).map(c=>w(c)).flatMap(c=>Array.isArray(c)?c:[c]).filter((c,E,S)=>S.findIndex(P=>B(P,c))===E);if(!v||v.length===0)return;const F=[...s.filter(c=>!v.some(E=>B(E,c))),...v];t==null||t(F,l),j(v,c=>a==null?void 0:a(F,c))},D=(o,l)=>{const u=s.indexOf(o),p=[...s];p.splice(u,1,l),t==null||t(p,null)},f=(o,l)=>{const u=s.filter(h=>!B(h,o));t==null||t(u,l),g(o,h=>a==null?void 0:a(u,h))},_=(o,l)=>{o&&N(o,l)},M=o=>({removeItem:f,editItem:D,handleChange:t,getOptionUniqKeyValue:C,storedItemsMap:m,batchAddItems:u=>{N(u,o)},...o}),O=(o,l)=>{switch(l.type){case X.stateChangeTypes.keyDownEnter:case X.stateChangeTypes.clickItem:return{...l,highlightedIndex:o.highlightedIndex,inputValue:""};default:return l}};return n.jsx(X,{...A,stateReducer:O,onChange:_,selectedItem:null,children:o=>i==null?void 0:i(M(o))})};Ie.__docgenInfo={description:"",methods:[],displayName:"MultipleDownshift",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"",defaultValue:{value:"[]",computed:!1}},selectedItems:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"",defaultValue:{value:"[]",computed:!1}},handleUnStoredItemCb:{required:!1,tsType:{name:"union",raw:`| ((newSelectedItems: DownshiftStore<T>, prevSelectedItems: DownshiftStore<T>) => void)
| null`,elements:[{name:"unknown"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},existingItemsMap:{required:!1,tsType:{name:"signature",type:"object",raw:"{ [key: string]: boolean }",signature:{properties:[{key:{name:"string"},value:{name:"boolean",required:!0}}]}},description:"",defaultValue:{value:"{}",computed:!1}},customizeNewSelectedValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => T",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"T"}}},description:"",defaultValue:{value:"(value) => value",computed:!1}},getOptionUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => keyof T",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"T"}}},description:""},getOptionUniqKeyValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: T | T[] | null, downshift: ControllerStateAndHelpers<T> | null) => void",signature:{arguments:[{type:{name:"union",raw:"T | T[] | null",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"},{name:"null"}]},name:"selectedItems"},{type:{name:"union",raw:"ControllerStateAndHelpers<T> | null",elements:[{name:"ControllerStateAndHelpers",elements:[{name:"T"}],raw:"ControllerStateAndHelpers<T>"},{name:"null"}]},name:"downshift"}],return:{name:"void"}}},description:""}},composes:["Partial"]};const st="_autocomplete_1so4a_16",rt="_disabled_1so4a_32",at="_error_1so4a_35",ot="_touched_1so4a_35",it="_input_1so4a_77",lt={autocomplete:st,"autocomplete-wrapper":"_autocomplete-wrapper_1so4a_28",disabled:rt,error:at,touched:ot,"clear-icon":"_clear-icon_1so4a_46","clear-icon--disabled":"_clear-icon--disabled_1so4a_56","autocomplete-input":"_autocomplete-input_1so4a_60","single-line-mode":"_single-line-mode_1so4a_68","mobile-disabled":"_mobile-disabled_1so4a_72",input:it,"type-number":"_type-number_1so4a_101","error-text":"_error-text_1so4a_112","dropdown-button":"_dropdown-button_1so4a_121","icon-reversed":"_icon-reversed_1so4a_129"},L=xe.bind(lt),W=e=>{const{options:t=[],loading:s=!1,onStateChange:a=()=>{},value:r=[],placeholder:i="",error:w="",touched:x=!1,creatable:C=!1,editable:A=!1,onChange:m=()=>{},onFocus:k=()=>{},onBlur:j=()=>{},disabled:g=!1,isDropdownMode:N=!1,mobileDisabled:D=!1,inputProps:f={},parseValueToString:_=d=>d==null?"":String(d),maxLength:M=null,async:O=!1,customClass:o="",createWithoutConfirmation:l=!1,getItemValidationErrorType:u=null,clearItemsError:p=()=>{},getAdditionalCreationCondition:h=()=>!0,highlightUnStoredItem:v=!1,parseInputValueFn:V=null,handleUnStoredItemCb:F=null,dataAutomationId:G="",existingItemsMap:c={},customizeNewSelectedValue:E=d=>d,renderCustomSelectedItem:S,useFixedPositioning:P,newItemButtonText:_e="",menuClassName:ve="",selectedItemSingleLine:ne,selectedItemClassName:Ce,selectedItemTextClassName:Ae,...Ne}=e,{refs:se,floatingStyles:Oe}=He({placement:"bottom-start",strategy:P?"fixed":"absolute",whileElementsMounted:ze}),Pe=r.length===0&&!g?i:"",Y=b.useRef(null);b.useEffect(()=>{p()},[p,r]);const qe=(d,T)=>{m(d,T)},je=(d,T,I)=>({item:y,index:R,...H})=>d({item:y,index:R,isSelected:I.some(Q=>B(Q,y)),...H,isActive:T===R}),De=({event:d,removeItem:T,inputValue:I})=>{d.key==="Backspace"&&!I&&r.length&&T(r[r.length-1],null)},re=({inputValue:d,selectItem:T,clearSelection:I,batchAddItems:y})=>{if(V){const R=V(d);y(R.length?R:[d]),I()}else T(d),I()},Me=d=>T=>{d(T,null),Y.current&&Y.current.focus()},Ee=t.filter(d=>r.every(T=>!B(T,d)));return n.jsx(Ie,{onChange:qe,itemToString:_,selectedItems:r,onStateChange:a,options:t,existingItemsMap:c,handleUnStoredItemCb:F,customizeNewSelectedValue:E,children:({getInputProps:d,getItemProps:T,isOpen:I,inputValue:y="",highlightedIndex:R,removeItem:H,editItem:Q,openMenu:Re,selectItem:ae,clearSelection:oe,toggleMenu:Le,storedItemsMap:ke,getRootProps:Fe,batchAddItems:ie})=>{const Ge=Fe(void 0,{suppressRefError:!0}),Be=y??"";return n.jsxs("div",{...Ge,className:L("autocomplete-wrapper"),children:[n.jsxs(n.Fragment,{children:[n.jsxs("div",{ref:se.setReference,className:L("autocomplete",o,{"mobile-disabled":D,error:w,touched:x,disabled:g}),children:[n.jsxs("div",{className:L("autocomplete-input",{"mobile-disabled":D,"single-line-mode":ne}),children:[n.jsx(tt,{items:r,onRemoveItem:Me(H),disabled:g,mobileDisabled:D,parseValueToString:_,getItemValidationErrorType:u,renderCustomSelectedItem:S,editItem:Q,editable:A,getAdditionalCreationCondition:h,storedItemsMap:ke,highlightUnStoredItem:v,selectedItemSingleLine:ne,selectedItemClassName:Ce,selectedItemTextClassName:Ae}),n.jsx("input",{...d({ref:Y,placeholder:Pe,maxLength:M,onFocus:()=>{N&&Re(),k()},onKeyDown:q=>{q.key===Ke&&y&&C&&h(y)&&re({inputValue:y,selectItem:ae,clearSelection:oe,batchAddItems:ie}),De({event:q,removeItem:H,inputValue:y})},onBlur:()=>{j(),y&&C&&h(y)&&re({inputValue:y,selectItem:ae,clearSelection:oe,batchAddItems:ie})},disabled:g,...f}),className:L("input",{disabled:g},f.className),"data-automation-id":G})]}),(f==null?void 0:f.clearable)&&!Ue(r)&&n.jsx("button",{type:"button",className:L("clear-icon",{"clear-icon--disabled":g}),onClick:()=>{var q;return!g&&((q=f==null?void 0:f.onClear)==null?void 0:q.call(f))},onMouseDown:q=>q.preventDefault(),children:n.jsx(We,{})}),N&&n.jsx("button",{type:"button",className:L("dropdown-button",{"icon-reversed":I}),onClick:()=>Le(),"aria-label":"Toggle dropdown","aria-expanded":I,children:n.jsx(Ve,{})})]}),w&&x&&n.jsx("span",{className:L("error-text"),children:w})]}),n.jsx(Je,{isOpen:I,loading:s,async:O,ref:se.setFloating,newItemButtonText:_e,isDropdownMode:N,style:Oe,inputValue:Be.trim(),getItemProps:je(T,R,r),parseValueToString:_,createWithoutConfirmation:l,options:Ee,className:ve,...Ne})]})}})};W.__docgenInfo={description:"",methods:[],displayName:"MultipleAutocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},onStateChange:{required:!0,tsType:{name:"MultipleDownshiftProps['onStateChange']",raw:"MultipleDownshiftProps<T>['onStateChange']"},description:""},value:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},error:{required:!0,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},touched:{required:!0,tsType:{name:"boolean"},description:""},creatable:{required:!0,tsType:{name:"boolean"},description:""},editable:{required:!0,tsType:{name:"boolean"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: T,
  index: number,
  isNew: boolean,
  getItemProps: GetItemPropsT<T>,
) => ReactNode`,signature:{arguments:[{type:{name:"T"},name:"value"},{type:{name:"number"},name:"index"},{type:{name:"boolean"},name:"isNew"},{type:{name:"signature",type:"function",raw:`(
  args: GetItemPropsOptions<T> & AdditionalDownshiftFields,
) => GetItemPropsOptions<T> & AdditionalDownshiftFields`,signature:{arguments:[{type:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]},name:"args"}],return:{name:"intersection",raw:"GetItemPropsOptions<T> & AdditionalDownshiftFields",elements:[{name:"GetItemPropsOptions",elements:[{name:"T"}],raw:"GetItemPropsOptions<T>"},{name:"AdditionalDownshiftFields"}]}}},name:"getItemProps"}],return:{name:"ReactNode"}}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: T | T[] | null, downshift: ControllerStateAndHelpers<T> | null) => void",signature:{arguments:[{type:{name:"union",raw:"T | T[] | null",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"},{name:"null"}]},name:"selectedItems"},{type:{name:"union",raw:"ControllerStateAndHelpers<T> | null",elements:[{name:"ControllerStateAndHelpers",elements:[{name:"T"}],raw:"ControllerStateAndHelpers<T>"},{name:"null"}]},name:"downshift"}],return:{name:"void"}}},description:""},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},mobileDisabled:{required:!0,tsType:{name:"boolean"},description:""},inputProps:{required:!0,tsType:{name:"ComponentProps",elements:[{name:"FieldText"}],raw:"ComponentProps<typeof FieldText>"},description:""},parseValueToString:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T | null) => string",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},name:"value"}],return:{name:"string"}}},description:""},minLength:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},maxLength:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},async:{required:!1,tsType:{name:"boolean"},description:""},customClass:{required:!0,tsType:{name:"string"},description:""},createWithoutConfirmation:{required:!0,tsType:{name:"boolean"},description:""},getItemValidationErrorType:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},clearItemsError:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isDropdownMode:{required:!1,tsType:{name:"boolean"},description:""},getAdditionalCreationCondition:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => boolean",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"boolean"}}},description:""},highlightUnStoredItem:{required:!0,tsType:{name:"boolean"},description:""},parseInputValueFn:{required:!0,tsType:{name:"union",raw:"((value: string) => T[]) | null",elements:[{name:"unknown"},{name:"null"}]},description:""},handleUnStoredItemCb:{required:!0,tsType:{name:"union",raw:`| ((newSelectedItems: DownshiftStore<T>, prevSelectedItems: DownshiftStore<T>) => void)
| null`,elements:[{name:"unknown"},{name:"null"}]},description:""},dataAutomationId:{required:!1,tsType:{name:"string"},description:""},existingItemsMap:{required:!0,tsType:{name:"Record",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},{name:"boolean"}],raw:"Record<string | number, boolean>"},description:""},optionVariant:{required:!0,tsType:{name:"ComponentProps['optionVariant']",raw:"ComponentProps<typeof AutocompleteMenu>['optionVariant']"},description:""},customizeNewSelectedValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => T",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"T"}}},description:""},renderCustomSelectedItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"ReactNode"}}},description:""},getUniqKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},customEmptyListMessage:{required:!1,tsType:{name:"string"},description:""},customNoMatchesMessage:{required:!1,tsType:{name:"string"},description:""},useFixedPositioning:{required:!1,tsType:{name:"boolean"},description:""},newItemButtonText:{required:!1,tsType:{name:"string"},description:""},menuClassName:{required:!1,tsType:{name:"string"},description:""},selectedItemSingleLine:{required:!1,tsType:{name:"boolean"},description:""},selectedItemClassName:{required:!1,tsType:{name:"string"},description:""},selectedItemTextClassName:{required:!1,tsType:{name:"string"},description:""},optionsLimit:{required:!1,tsType:{name:"number"},description:""},limitationText:{required:!1,tsType:{name:"string"},description:""},shouldShowEmptyListMessage:{required:!1,tsType:{name:"boolean"},description:""}}};const Z=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],te=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3"],ee=["Very Long Option Name That Will Be Truncated When Single Line Mode Is Enabled","Another Very Long Option Name That Will Also Be Truncated","Short","Medium Length Option Name"],we={options:Z,loading:!1,async:!0,createWithoutConfirmation:!0,creatable:!1,editable:!0,existingItemsMap:{[Z[0].id]:!0},parseValueToString:e=>e!=null&&e.id?String(e.id):"",highlightUnStoredItem:!1,value:[Z[0]],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,mobileDisabled:!1,inputProps:{clearable:!0},maxLength:null,customClass:"",menuClassName:"",parseInputValueFn:null,dataAutomationId:""},ut={options:te,loading:!1,async:!0,createWithoutConfirmation:!0,creatable:!1,editable:!0,existingItemsMap:{"Demo Api Tests":!0},parseValueToString:e=>e?String(e):"",highlightUnStoredItem:!0,value:[te[0]],error:"",touched:!1,inputProps:{clearable:!0},minLength:1,isDropdownMode:!0,placeholder:"Test placeholder",disabled:!1,mobileDisabled:!1,maxLength:null,customClass:"",menuClassName:"",parseInputValueFn:null,dataAutomationId:""},Ot={title:"Controls/Autocompletes/MultipleAutocomplete",component:W,parameters:{...we},tags:["autodocs"]},J={args:{...we},render:e=>{const[t,s]=b.useState(e.value||[]),a={...e,inputProps:{...e.inputProps,onClear:()=>s([])}},r=i=>{s(i)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center"},children:n.jsx(W,{...a,onChange:r,value:t})})}},$={args:{...ut},render:e=>{const[t,s]=b.useState(e.value||[]),a={...e,inputProps:{...e.inputProps,onClear:()=>s([])}},r=i=>{s(i)};return n.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center"},children:n.jsx(W,{...a,onChange:r,value:t})})}},K={args:{options:ee,loading:!1,async:!0,createWithoutConfirmation:!0,creatable:!1,editable:!0,existingItemsMap:{},parseValueToString:e=>e?String(e):"",highlightUnStoredItem:!1,value:[ee[0],ee[1]],error:"",touched:!1,inputProps:{clearable:!0},minLength:1,placeholder:"Test placeholder",disabled:!1,mobileDisabled:!1,maxLength:null,customClass:"",menuClassName:"",parseInputValueFn:null,dataAutomationId:"",selectedItemSingleLine:!0},render:e=>{const[t,s]=b.useState(e.value||[]),a={...e,inputProps:{...e.inputProps,onClear:()=>s([])}},r=i=>{s(i)};return n.jsx("div",{style:{width:"300px",height:"400px",display:"flex",alignItems:"center"},children:n.jsx(W,{...a,onChange:r,value:t})})}},U={args:{options:te,loading:!1,async:!1,createWithoutConfirmation:!0,creatable:!0,editable:!0,existingItemsMap:{},parseValueToString:e=>e?String(e):"",highlightUnStoredItem:!1,value:[],error:"",touched:!1,inputProps:{clearable:!0},minLength:1,isDropdownMode:!1,placeholder:"Enter comma, semicolon, or newline-separated items",disabled:!1,mobileDisabled:!1,maxLength:null,customClass:"",menuClassName:"",dataAutomationId:"multi-token-parse-demo",parseInputValueFn:e=>e.split(/[,;\n]+/).map(t=>t.trim()).filter(t=>t.length>0)},render:e=>{const[t,s]=b.useState(e.value||[]),a={...e,inputProps:{...e.inputProps,onClear:()=>s([])}},r=i=>{s(i)};return n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"20px",fontSize:"14px",color:"#666"},children:n.jsxs("p",{children:["Try entering multiple items in one action:",n.jsx("br",{}),"• Comma-separated: ",n.jsx("code",{children:"alpha, beta, gamma"}),n.jsx("br",{}),"• Semicolon-separated: ",n.jsx("code",{children:"alpha; beta; gamma"}),n.jsx("br",{}),"• Newline-separated (paste multiple lines)",n.jsx("br",{}),"Then press Enter or click outside the field to confirm.",n.jsx("br",{}),"All valid items parsed from the input should be added as separate chips."]})}),n.jsx("div",{style:{width:"500px",height:"400px",display:"flex",alignItems:"center"},children:n.jsx(W,{...a,onChange:r,value:t})}),n.jsxs("div",{style:{marginTop:"20px",fontSize:"14px",color:"#666"},children:[n.jsxs("p",{children:["Current selected items (",t.length,"):"]}),n.jsx("pre",{style:{backgroundColor:"#f5f5f5",padding:"10px",borderRadius:"4px"},children:JSON.stringify(t,null,2)})]})]})}};var ue,de,me;J.parameters={...J.parameters,docs:{...(ue=J.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(de=J.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ce,ge;$.parameters={...$.parameters,docs:{...(pe=$.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(ce=$.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var fe,he,Te;K.parameters={...K.parameters,docs:{...(fe=K.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Te=(he=K.parameters)==null?void 0:he.docs)==null?void 0:Te.source}}};var ye,Se,be;U.parameters={...U.parameters,docs:{...(ye=U.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(Se=U.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};const Pt=["Objects","Strings","WithSingleLineMode","WithMultiTokenParseInputValueFn"];export{J as Objects,$ as Strings,U as WithMultiTokenParseInputValueFn,K as WithSingleLineMode,Pt as __namedExportsOrder,Ot as default};
