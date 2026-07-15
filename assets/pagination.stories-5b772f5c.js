import{j as e}from"./jsx-runtime-2f188e98.js";import{r as d}from"./index-3553ef47.js";import{T as q}from"./tooltip-280b52d3.js";import{S as ee}from"./warning-72e334ed.js";import{c as g}from"./bind-d8141dee.js";import{P as G}from"./popover-8346e5d8.js";import{B as N}from"./button-34bf729b.js";import{F as te}from"./fieldText-99047eb7.js";import{B as b}from"./baseIconButton-9b03f096.js";import{S as k,a as I}from"./prevPage-2b59fd5c.js";import"./index-d0bd1ed5.js";import"./floating-ui.react-ea29885b.js";import"./floatingUi-c696ea36.js";import"./clear-c7bc24e5.js";import"./capslockIcon-4b25d63f.js";import"./spinLoader-d5daab2a.js";import"./maxValueDisplay-a537ac0f.js";import"./fieldLabel-917daddd.js";const ae={"item-counter":"_item-counter_1rgba_1","accent-total":"_accent-total_1rgba_12","accent-total-tooltip-wrapper":"_accent-total-tooltip-wrapper_1rgba_17","accent-total-tooltip":"_accent-total-tooltip_1rgba_17"},x=g.bind(ae),H=({activePage:t,pageSize:s,totalItems:n,ofText:r,itemsText:p,limitExceeded:c=!1,warningContent:i=null,accentTotalTooltip:a})=>{const l=t*s,o=l-s;return e.jsxs("div",{className:x("item-counter"),children:[`${o+1} - ${l<n?l:n}`,` ${r} `,a?typeof window<"u"?e.jsx(q,{content:a,placement:"top",dynamicWidth:!0,wrapperClassName:x("accent-total-tooltip-wrapper"),tooltipClassName:x("accent-total-tooltip"),children:e.jsx("span",{className:x("accent-total"),children:n})}):e.jsx("span",{className:x("accent-total"),children:n}):`${n}${c?"+":""}`,` ${p}`,!a&&i]})};H.__docgenInfo={description:"",methods:[],displayName:"ItemCounter",props:{activePage:{required:!0,tsType:{name:"number"},description:""},pageSize:{required:!0,tsType:{name:"number"},description:""},totalItems:{required:!0,tsType:{name:"number"},description:""},ofText:{required:!0,tsType:{name:"string"},description:""},itemsText:{required:!0,tsType:{name:"string"},description:""},limitExceeded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},warningContent:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"null",computed:!1}},accentTotalTooltip:{required:!1,tsType:{name:"ReactNode"},description:""}}};const ne="_selected_cjnvy_23",se={"size-selector":"_size-selector_cjnvy_1","size-option":"_size-option_cjnvy_6",selected:ne},C=g.bind(se),J=({currentSize:t,options:s,onClickOption:n})=>e.jsx("div",{className:C("size-selector"),children:s.map(r=>e.jsx("button",{className:C("size-option",{selected:r===t}),onClick:()=>{n(r)},children:r},r))});J.__docgenInfo={description:"",methods:[],displayName:"SizeSelector",props:{currentSize:{required:!0,tsType:{name:"number"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onClickOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(size: number) => void",signature:{arguments:[{type:{name:"number"},name:"size"}],return:{name:"void"}}},description:""}}};const re={"page-size-control":"_page-size-control_8rb7p_1","page-size-options":"_page-size-options_8rb7p_8","size-selector-button":"_size-selector-button_8rb7p_12"},z=g.bind(re),K=({size:t,sizeOptions:s,perPageText:n,changeSize:r})=>{const[p,c]=d.useState(!1),i=a=>{r(a),c(!1)};return e.jsxs("div",{className:z("page-size-control"),children:[e.jsx(G,{content:e.jsx(J,{options:s,onClickOption:i,currentSize:t}),placement:"top",isOpened:p,setIsOpened:c,className:z("page-size-options"),children:e.jsx(N,{className:z("size-selector-button"),variant:"text",adjustWidthOn:"content",children:t})}),` ${n}`]})};K.__docgenInfo={description:"",methods:[],displayName:"PageSizeControl",props:{size:{required:!0,tsType:{name:"number"},description:""},sizeOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},perPageText:{required:!0,tsType:{name:"string"},description:""},changeSize:{required:!0,tsType:{name:"signature",type:"function",raw:"(size: number) => void",signature:{arguments:[{type:{name:"number"},name:"size"}],return:{name:"void"}}},description:""}}};const ie={"page-selector":"_page-selector_rtho4_1","field-wrapper":"_field-wrapper_rtho4_6","apply-button":"_apply-button_rtho4_10"},j=g.bind(ie),Q=({totalPages:t,pageText:s,goActionText:n,selectPage:r})=>{const[p,c]=d.useState(""),[i,a]=d.useState(!0),l=u=>{const _=u.target.value.replace(/\D/g,""),h=Number(_),S=h>0&&h<=t;a(S),c(_)},o=()=>{r(Number(p))};return e.jsxs("div",{className:j("page-selector"),children:[e.jsx("div",{className:j("field-wrapper"),children:e.jsx(te,{onChange:l,value:p,placeholder:s,error:i?"":"Error",touched:!0,defaultWidth:!1,displayError:!1})}),e.jsx(N,{onClick:o,disabled:!p||!i,className:j("apply-button"),children:n})]})};Q.__docgenInfo={description:"",methods:[],displayName:"PageSelector",props:{pageText:{required:!0,tsType:{name:"string"},description:""},goActionText:{required:!0,tsType:{name:"string"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},selectPage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};const oe={"active-page":"_active-page_1gl9o_1","page-selector":"_page-selector_1gl9o_10","page-selector-button":"_page-selector-button_1gl9o_14"},w=g.bind(oe),U=({activePage:t,totalPages:s,pageText:n,goToText:r,goActionText:p,changePage:c})=>{const[i,a]=d.useState(!1),l=o=>{c(o),a(!1)};return e.jsxs("div",{className:w("active-page"),children:[`${n} `,e.jsx(G,{content:e.jsx(Q,{pageText:n,goActionText:p,selectPage:l,totalPages:s}),title:r,placement:"top",isOpened:i,setIsOpened:a,className:w("page-selector"),children:e.jsx(N,{className:w("page-selector-button"),variant:"text",adjustWidthOn:"content",children:t})})]})};U.__docgenInfo={description:"",methods:[],displayName:"ActivePage",props:{activePage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},pageText:{required:!0,tsType:{name:"string"},description:""},goToText:{required:!0,tsType:{name:"string"},description:""},goActionText:{required:!0,tsType:{name:"string"},description:""},changePage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};const pe="_bar_y74hy_1",ce="_section_y74hy_9",le="_selected_y74hy_33",de="_tooltip_y74hy_37",ge={bar:pe,"section-with-tooltip":"_section-with-tooltip_y74hy_9",section:ce,selected:le,"tooltip-wrapper":"_tooltip-wrapper_y74hy_37",tooltip:de,"tooltip-text":"_tooltip-text_y74hy_48","page-number":"_page-number_y74hy_52"},m=g.bind(ge),$=13,A=260,X=({totalPages:t,activePage:s,changePage:n,captions:r})=>{const p=A/t,c=Math.min(Math.ceil(A/$),t),i=Math.max($,p),a=[];for(let o=1;o<=t;o++)a.push({end:o*p,pageNumber:o});const l=Array.from({length:c},()=>({pages:{from:void 0,to:void 0}}));return l.forEach((o,u)=>{for(o.pages.from=a[0].pageNumber;i*(u+1)>a[0].end;)a.shift();o.pages.to=a[0].pageNumber,a.shift()}),e.jsx("div",{className:m("bar"),children:l.map((o,u)=>e.jsx("div",{className:m("section-with-tooltip"),style:{width:i},onClick:()=>o.pages.from&&n(o.pages.from),children:e.jsx(q,{content:e.jsxs("div",{className:m("tooltip"),children:[e.jsx("div",{className:m("tooltip-text"),children:r.goTo}),e.jsx("div",{className:m("page-number"),children:o.pages.from})]}),wrapperClassName:m("tooltip-wrapper"),placement:"top",children:e.jsx("div",{className:m("section",{selected:o.pages.from&&o.pages.to&&o.pages.from<=s&&s<=o.pages.to})})})},u))})};X.__docgenInfo={description:"",methods:[],displayName:"Bar",props:{totalPages:{required:!0,tsType:{name:"number"},description:""},activePage:{required:!0,tsType:{name:"number"},description:""},changePage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},captions:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  goTo: string;
}`,signature:{properties:[{key:"goTo",value:{name:"string",required:!0}}]}},description:""}}};const ue="_next_pyt8p_21",me={"page-navigator":"_page-navigator_pyt8p_1","page-buttons":"_page-buttons_pyt8p_7","page-button":"_page-button_pyt8p_7",next:ue},y=g.bind(me),Y=({activePage:t,changePage:s,totalPages:n,captions:r})=>{const p=()=>{s(1)},c=()=>{s(t-1)},i=()=>{s(t+1)},a=()=>{s(n)};return e.jsxs("div",{className:y("page-navigator"),children:[e.jsxs("div",{className:y("page-buttons"),children:[e.jsx(b,{className:y("page-button"),onClick:p,disabled:t===1,children:e.jsx(k,{})}),e.jsx(b,{className:y("page-button"),onClick:c,disabled:t===1,children:e.jsx(I,{})})]}),e.jsx(X,{totalPages:n,activePage:t,changePage:s,captions:r}),e.jsxs("div",{className:y("page-buttons"),children:[e.jsx(b,{className:y("page-button","next"),onClick:i,disabled:t===n,children:e.jsx(I,{})}),e.jsx(b,{className:y("page-button","next"),onClick:a,disabled:t===n,children:e.jsx(k,{})})]})]})};Y.__docgenInfo={description:"",methods:[],displayName:"PageNavigator",props:{activePage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},changePage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},captions:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  goTo: string;
}`,signature:{properties:[{key:"goTo",value:{name:"string",required:!0}}]}},description:""}}};const ye={"page-controls":"_page-controls_thyf8_1","total-pages":"_total-pages_thyf8_8"},O=g.bind(ye),Z=({activePage:t,changePage:s,captions:n,totalPages:r})=>e.jsxs("div",{className:O("page-controls"),children:[e.jsx(U,{activePage:t,totalPages:r,changePage:s,pageText:n.page,goToText:n.goTo,goActionText:n.goAction}),e.jsx(Y,{changePage:s,activePage:t,totalPages:r,captions:{goTo:n.goTo}}),e.jsxs("span",{className:O("total-pages"),children:[`${n.of} `,r]})]});Z.__docgenInfo={description:"",methods:[],displayName:"PageControls",props:{activePage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},changePage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},captions:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  page: string;
  goTo: string;
  goAction: string;
  of: string;
}`,signature:{properties:[{key:"page",value:{name:"string",required:!0}},{key:"goTo",value:{name:"string",required:!0}},{key:"goAction",value:{name:"string",required:!0}},{key:"of",value:{name:"string",required:!0}}]}},description:""}}};const he="_pagination_ax9ed_1",xe={pagination:he},fe=g.bind(xe),f=({activePage:t,totalPages:s,pageSize:n,totalItems:r,pageSizeOptions:p,changePage:c,changePageSize:i,captions:a,className:l,warningContent:o,limitExceeded:u=!1,accentTotalTooltip:_})=>{const h=(a==null?void 0:a.of)||"of",S=(a==null?void 0:a.page)||"Page";return e.jsxs("div",{className:fe("pagination",l),children:[e.jsx(H,{activePage:t,pageSize:n,totalItems:r,ofText:h,itemsText:(a==null?void 0:a.items)||"items",limitExceeded:u,warningContent:o,accentTotalTooltip:_}),s>1&&e.jsx(Z,{activePage:t,totalPages:s,changePage:c,captions:{page:S,of:h,goTo:(a==null?void 0:a.goTo)||"Go to page",goAction:(a==null?void 0:a.goAction)||"Go"}}),e.jsx(K,{size:n,sizeOptions:p,changeSize:i,perPageText:(a==null?void 0:a.perPage)||"per page"})]})};f.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{activePage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},pageSize:{required:!0,tsType:{name:"number"},description:""},totalItems:{required:!0,tsType:{name:"number"},description:""},pageSizeOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},changePage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},changePageSize:{required:!0,tsType:{name:"signature",type:"function",raw:"(size: number) => void",signature:{arguments:[{type:{name:"number"},name:"size"}],return:{name:"void"}}},description:""},captions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  items?: string;
  of?: string;
  page?: string;
  goTo?: string;
  goAction?: string;
  perPage?: string;
}`,signature:{properties:[{key:"items",value:{name:"string",required:!1}},{key:"of",value:{name:"string",required:!1}},{key:"page",value:{name:"string",required:!1}},{key:"goTo",value:{name:"string",required:!1}},{key:"goAction",value:{name:"string",required:!1}},{key:"perPage",value:{name:"string",required:!1}}]}},description:""},className:{required:!1,tsType:{name:"string"},description:""},warningContent:{required:!1,tsType:{name:"ReactNode"},description:""},limitExceeded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},accentTotalTooltip:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Ee={title:"Navigation/Pagination",component:f,parameters:{layout:"centered"},tags:["autodocs"],args:{activePage:2,totalItems:400,pageSize:20,pageSizeOptions:[10,20,30,40,50],changePage:()=>{},changePageSize:()=>{}}},v={render:t=>{const[s,n]=d.useState(t.pageSize),[r,p]=d.useState(t.activePage),c=Math.ceil(t.totalItems/s);return e.jsx("div",{style:{width:"900px"},children:e.jsx(f,{...t,pageSize:s,activePage:r,totalPages:c,changePage:i=>{p(i)},changePageSize:i=>{n(i)}})})}},P={render:t=>{const[s,n]=d.useState(t.pageSize),[r,p]=d.useState(t.activePage),c=Math.ceil(t.totalItems/s);return e.jsx("div",{style:{width:"900px"},children:e.jsx(f,{...t,pageSize:s,activePage:r,totalPages:c,changePage:i=>{p(i)},changePageSize:i=>{n(i)},warningContent:e.jsx("div",{style:{display:"flex",alignItems:"center",width:"16px",padding:"0 0 0 8px",color:"#FFA500"},children:e.jsx(q,{content:e.jsxs("div",{style:{maxWidth:"300px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0"},children:"Data Limit Exceeded"}),e.jsx("p",{style:{margin:0},children:"The results exceed the allowed 10,000 items limit and cannot be fully displayed. Please refine your filters or export the data for the full results."})]}),placement:"top",children:e.jsx("div",{style:{display:"flex"},children:e.jsx(ee,{})})})})})})}},T={args:{activePage:1,totalItems:1e4,pageSize:50,totalPages:200},render:t=>{const[s,n]=d.useState(t.pageSize),[r,p]=d.useState(t.activePage),c=Math.ceil(t.totalItems/s),i="The results exceed the allowed 10,000 items limit and cannot be fully displayed. Please refine your filters.";return e.jsxs("div",{style:{width:"900px"},children:[e.jsx("p",{style:{margin:"0 0 12px",fontSize:"13px",color:"#8d95a1"},children:"Latest executions only at the display cap: total is shown as an accent value with a tooltip. The standard limit-exceeded warning icon is not used."}),e.jsx(f,{...t,pageSize:s,activePage:r,totalPages:c,accentTotalTooltip:i,changePage:a=>{p(a)},changePageSize:a=>{n(a)}})]})}};var W,E,M;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageSize, setPageSize] = useState(args.pageSize);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(args.activePage);
    const totalPages = Math.ceil(args.totalItems / pageSize);
    return <div style={{
      width: '900px'
    }}>
        <Pagination {...args} pageSize={pageSize} activePage={page} totalPages={totalPages} changePage={newPage => {
        setPage(newPage);
      }} changePageSize={size => {
        setPageSize(size);
      }} />
      </div>;
  }
}`,...(M=(E=v.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var B,F,V;P.parameters={...P.parameters,docs:{...(B=P.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageSize, setPageSize] = useState(args.pageSize);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(args.activePage);
    const totalPages = Math.ceil(args.totalItems / pageSize);
    return <div style={{
      width: '900px'
    }}>
        <Pagination {...args} pageSize={pageSize} activePage={page} totalPages={totalPages} changePage={newPage => {
        setPage(newPage);
      }} changePageSize={size => {
        setPageSize(size);
      }} warningContent={<div style={{
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        padding: '0 0 0 8px',
        color: '#FFA500'
      }}>
              <Tooltip content={<div style={{
          maxWidth: '300px'
        }}>
                    <h3 style={{
            margin: '0 0 8px 0'
          }}>Data Limit Exceeded</h3>
                    <p style={{
            margin: 0
          }}>
                      The results exceed the allowed 10,000 items limit and cannot be fully
                      displayed. Please refine your filters or export the data for the full results.
                    </p>
                  </div>} placement="top">
                <div style={{
            display: 'flex'
          }}>
                  <WarningIcon />
                </div>
              </Tooltip>
            </div>} />
      </div>;
  }
}`,...(V=(F=P.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var R,D,L;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    activePage: 1,
    totalItems: 10000,
    pageSize: 50,
    totalPages: 200
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageSize, setPageSize] = useState(args.pageSize);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(args.activePage);
    const totalPages = Math.ceil(args.totalItems / pageSize);
    const accentTotalTooltip = 'The results exceed the allowed 10,000 items limit and cannot be fully displayed. Please refine your filters.';
    return <div style={{
      width: '900px'
    }}>
        <p style={{
        margin: '0 0 12px',
        fontSize: '13px',
        color: '#8d95a1'
      }}>
          Latest executions only at the display cap: total is shown as an accent value with a
          tooltip. The standard limit-exceeded warning icon is not used.
        </p>
        <Pagination {...args} pageSize={pageSize} activePage={page} totalPages={totalPages} accentTotalTooltip={accentTotalTooltip} changePage={newPage => {
        setPage(newPage);
      }} changePageSize={size => {
        setPageSize(size);
      }} />
      </div>;
  }
}`,...(L=(D=T.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const Me=["Primary","WithWarning","WithAccentTotalTooltip"];export{v as Primary,T as WithAccentTotalTooltip,P as WithWarning,Me as __namedExportsOrder,Ee as default};
