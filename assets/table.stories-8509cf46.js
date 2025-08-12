import{j as t}from"./jsx-runtime-3169928d.js";import{r as l}from"./index-d33a4676.js";import{c as X}from"./bind-f5c6fce5.js";import{C as E}from"./checkbox-24bb629b.js";import{P as I}from"./popover-e0278083.js";import{S as ee}from"./meatballMenu-3f4bf33c.js";import"./keyCodes-e5060420.js";import"./floating-ui.react-7da7fc58.js";import"./floating-ui.react-dom-4a121add.js";import"./index-f454028f.js";const te=a=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.85355 12.8536C7.65829 13.0488 7.34171 13.0488 7.14645 12.8536L4.14645 9.85355C3.95118 9.65829 3.95118 9.34171 4.14645 9.14645C4.34171 8.95118 4.65829 8.95118 4.85355 9.14645L7 11.2929L7 3.5C7 3.22386 7.22386 3 7.5 3C7.77614 3 8 3.22386 8 3.5L8 11.2929L10.1464 9.14645C10.3417 8.95119 10.6583 8.95118 10.8536 9.14645C11.0488 9.34171 11.0488 9.65829 10.8536 9.85355L7.85355 12.8536Z",fill:"#A2AAB5"})),L=a=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.14645 3.14645C7.34171 2.95118 7.65829 2.95118 7.85355 3.14645L10.8536 6.14645C11.0488 6.34171 11.0488 6.65829 10.8536 6.85355C10.6583 7.04882 10.3417 7.04882 10.1464 6.85355L8 4.70711V12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 4.70711L4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355C3.95118 6.65829 3.95118 6.34171 4.14645 6.14645L7.14645 3.14645Z",fill:"#A2AAB5"})),ne="_table_1qo1m_1",ae="_label_1qo1m_96",se={table:ne,"table-header":"_table-header_1qo1m_9","table-row":"_table-row_1qo1m_17","table-row-content":"_table-row-content_1qo1m_23","size-small":"_size-small_1qo1m_33","size-large":"_size-large_1qo1m_36","table-body":"_table-body_1qo1m_40","table-header-cell":"_table-header-cell_1qo1m_47","table-cell":"_table-cell_1qo1m_48","action-menu-cell":"_action-menu-cell_1qo1m_53","checkbox-cell":"_checkbox-cell_1qo1m_65","primary-cell":"_primary-cell_1qo1m_79",label:ae,"sortable-cell":"_sortable-cell_1qo1m_100","align-right":"_align-right_1qo1m_103","align-center":"_align-center_1qo1m_109"},w="asc",oe="desc",x=a=>a.toLowerCase()===w,M=(a,n)=>(n&&a.sort((m,u)=>{const h=m[n.key].content||m[n.key],g=u[n.key].content||u[n.key];return h<g?x(n.direction)?-1:1:h>g?x(n.direction)?1:-1:0}),a),le=a=>a.map(n=>n.key),re=a=>x(a)?oe:w,o=X.bind(se),R=({data:a,primaryColumn:n,fixedColumns:m,renderRowActions:u,className:h="",rowClassName:g="",headerClassName:v="",selectable:k=!1,selectedRowIds:d=[],sortingDirection:b=w,sortingColumn:i=n,sortableColumns:p=le([n,...m]),onChangeSorting:r=()=>{},onToggleRowSelection:s=()=>{},onToggleAllRowsSelection:f=()=>{}})=>{const[y,A]=l.useState(null),[U,T]=l.useState(null),q=l.useMemo(()=>[{...n,primary:!0},...m],[n,m]),F=e=>{p.includes(e)&&r({key:e,direction:b})},j=e=>({width:e.width,textAlign:e.align}),H=e=>{A(e)},W=()=>{A(null)},Y=e=>{T(e)},Z=()=>{T(null)},$=e=>{s(e)},K=()=>{f()},O=a.every(e=>d.includes(e.id)),G=a.some(e=>d.includes(e.id)),N=(d==null?void 0:d.length)>0,J=e=>{var c;return`size-${((c=e.rowConfigs)==null?void 0:c.size)??"default"}`},Q=e=>{if(p.includes(e))return(i==null?void 0:i.key)===e?x(b)?t.jsx(L,{}):t.jsx(te,{}):t.jsx(L,{})};return t.jsxs("div",{className:o("table",h),children:[t.jsxs("div",{className:o("table-header",v),children:[k&&t.jsx("div",{className:o("table-header-cell","checkbox-cell"),children:N&&t.jsx(E,{value:O,partiallyChecked:G,onChange:K,className:o("checkbox-cell")})}),q.map(e=>t.jsx("button",{className:o("table-header-cell",{[`align-${e.align}`]:"align"in e,"primary-cell":"primary"in e&&e.primary,"sortable-cell":p.includes(e.key)}),style:j(e),children:t.jsxs("div",{className:o("label"),onClick:()=>F(e.key),onMouseEnter:()=>H(e.key),onMouseLeave:W,children:[t.jsx("span",{children:e.header}),(y===e.key||(i==null?void 0:i.key)===e.key)&&Q(e.key)]})},e.key)),u&&t.jsx("div",{className:o("table-header-cell","action-menu-cell")})]}),t.jsx("div",{className:o("table-body"),children:a.map((e,_)=>t.jsxs("div",{className:o("table-row",J(e),g),onMouseEnter:()=>Y(_),onMouseLeave:Z,children:[k&&t.jsx("div",{className:o("table-cell","checkbox-cell"),children:(N||U===_)&&t.jsx(E,{value:d.includes(e.id),onChange:()=>$(e.id),className:o("checkbox-cell")})}),t.jsxs("div",{className:o("table-row-content"),children:[q.map(c=>t.jsx("div",{className:o("table-cell",{"primary-cell":"primary"in c&&c.primary}),style:j(c),children:e[c.key].component||e[c.key].content||e[c.key]},c.key)),u&&t.jsx("div",{className:o("table-cell","action-menu-cell"),children:u(e.metaData)})]})]},e.id))})]})};R.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"RowData"}],raw:"RowData[]"},description:""},primaryColumn:{required:!0,tsType:{name:"Column"},description:""},fixedColumns:{required:!0,tsType:{name:"Array",elements:[{name:"FixedColumn"}],raw:"FixedColumn[]"},description:""},renderRowActions:{required:!1,tsType:{name:"signature",type:"function",raw:"(metaData?: MetaData) => ReactNode",signature:{arguments:[{type:{name:"MetaData"},name:"metaData"}],return:{name:"ReactNode"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},headerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rowClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortingDirection:{required:!1,tsType:{name:"union",raw:"typeof ASC | typeof DESC | Uppercase<typeof ASC | typeof DESC>",elements:[{name:"ASC"},{name:"DESC"},{name:"Uppercase",elements:[{name:"union",raw:"typeof ASC | typeof DESC",elements:[{name:"ASC"},{name:"DESC"}]}],raw:"Uppercase<typeof ASC | typeof DESC>"}]},description:"",defaultValue:{value:"'asc'",computed:!1}},sortingColumn:{required:!1,tsType:{name:"Column"},description:"",defaultValue:{value:"primaryColumn",computed:!1}},sortableColumns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"getColumnsKeys([primaryColumn, ...fixedColumns])",computed:!0}},onChangeSorting:{required:!1,tsType:{name:"signature",type:"function",raw:"(sortConfig?: SortConfig) => void",signature:{arguments:[{type:{name:"SortConfig"},name:"sortConfig"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const we={title:"Tables & Lists/Table",component:R,parameters:{layout:"centered"},tags:["autodocs"],args:{selectable:!0}},ie=()=>t.jsx(I,{placement:"bottom-end",content:t.jsxs("div",{children:[t.jsx("p",{children:"Edit"}),t.jsx("p",{children:"Rename"})]}),children:t.jsx(ee,{})}),D=[{id:1,name:{content:"Sam",component:t.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],C={key:"name",header:"Name"},z=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],S={render:a=>{const[n,m]=l.useState({key:C.key,direction:w}),[u,h]=l.useState(C),[g,v]=l.useState(w),k=M(D,n),[d,b]=l.useState(k),[i,p]=l.useState(new Set([]));return l.useEffect(()=>{const{key:r,direction:s}=n,f=[...z,C].find(y=>y.key===r);v(s),h(f)},[n]),t.jsx("div",{style:{minWidth:"700px"},children:t.jsx(R,{...a,data:d,sortableColumns:[C.key],onChangeSorting:(r=n)=>{let{direction:s}=r;const{key:f}=r;s=re(s);const y=M(d,{key:f,direction:s});m({key:f,direction:s}),b(y)},onToggleRowSelection:r=>{const s=new Set(i);s.has(r)?s.delete(r):s.add(r),p(s)},onToggleAllRowsSelection:()=>{if(i.size===D.length)p(new Set);else{const r=new Set(D.map(s=>s.id));p(r)}},selectedRowIds:[...i],sortingColumn:u,sortingDirection:g})})},args:{primaryColumn:C,fixedColumns:z,renderRowActions:ie,selectable:!0}};var V,B,P;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortConfig, setSortConfig] = useState<SortConfig>({
      key: primaryColumn.key,
      direction: ASC
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingColumn, setSortingColumn] = useState<Column>(primaryColumn);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingDirection, setSortingDirection] = useState<SortingDirection>(ASC);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const defaultSortedData = sortTableData(data, sortConfig);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tableData, setTableData] = useState(defaultSortedData);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const {
        key,
        direction
      } = sortConfig;
      const column = [...fixedColumns, primaryColumn].find(col => col.key === key);
      setSortingDirection(direction);
      setSortingColumn(column as Column);
    }, [sortConfig]);
    return <div style={{
      minWidth: '700px'
    }}>
        <Table {...args} data={tableData} sortableColumns={[primaryColumn.key]} onChangeSorting={(sortConfigParam = sortConfig) => {
        let {
          direction
        } = sortConfigParam;
        const {
          key
        } = sortConfigParam;
        direction = toggleDirection(direction);
        const sortedData = sortTableData(tableData, {
          key,
          direction
        });
        setSortConfig({
          key,
          direction
        });
        setTableData(sortedData);
      }} onToggleRowSelection={id => {
        const newCheckedRows = new Set(checkedRows);
        if (newCheckedRows.has(id)) {
          newCheckedRows.delete(id);
        } else {
          newCheckedRows.add(id);
        }
        setCheckedRows(newCheckedRows);
      }} onToggleAllRowsSelection={() => {
        if (checkedRows.size === data.length) {
          setCheckedRows(new Set());
        } else {
          const allRows = new Set(data.map(item => item.id));
          setCheckedRows(allRows);
        }
      }} selectedRowIds={[...checkedRows]} sortingColumn={sortingColumn} sortingDirection={sortingDirection} />
      </div>;
  },
  args: {
    primaryColumn,
    fixedColumns,
    renderRowActions,
    selectable: true
  }
}`,...(P=(B=S.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const ke=["Default"];export{S as Default,ke as __namedExportsOrder,we as default};
