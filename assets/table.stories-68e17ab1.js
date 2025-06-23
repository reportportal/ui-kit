import{j as t}from"./jsx-runtime-3169928d.js";import{r as o}from"./index-d33a4676.js";import{c as J}from"./bind-f5c6fce5.js";import{C as M}from"./checkbox-4cada74b.js";import{P as Q}from"./popover-cbfa438e.js";import"./keyCodes-e5060420.js";import"./floating-ui.react-10d81426.js";import"./floating-ui.react-dom-4a121add.js";import"./index-f454028f.js";const X=n=>o.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.85355 12.8536C7.65829 13.0488 7.34171 13.0488 7.14645 12.8536L4.14645 9.85355C3.95118 9.65829 3.95118 9.34171 4.14645 9.14645C4.34171 8.95118 4.65829 8.95118 4.85355 9.14645L7 11.2929L7 3.5C7 3.22386 7.22386 3 7.5 3C7.77614 3 8 3.22386 8 3.5L8 11.2929L10.1464 9.14645C10.3417 8.95119 10.6583 8.95118 10.8536 9.14645C11.0488 9.34171 11.0488 9.65829 10.8536 9.85355L7.85355 12.8536Z",fill:"#A2AAB5"})),L=n=>o.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.14645 3.14645C7.34171 2.95118 7.65829 2.95118 7.85355 3.14645L10.8536 6.14645C11.0488 6.34171 11.0488 6.65829 10.8536 6.85355C10.6583 7.04882 10.3417 7.04882 10.1464 6.85355L8 4.70711V12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 4.70711L4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355C3.95118 6.65829 3.95118 6.34171 4.14645 6.14645L7.14645 3.14645Z",fill:"#A2AAB5"})),ee=n=>o.createElement("svg",{width:14,height:3,viewBox:"0 0 14 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.30811 2.47803C1.72868 2.47803 2.05339 2.36206 2.28223 2.13013C2.51107 1.89819 2.62549 1.60596 2.62549 1.25342C2.62549 0.894694 2.51107 0.596273 2.28223 0.358154C2.05339 0.120036 1.72868 0.000976562 1.30811 0.000976562C0.893717 0.000976562 0.572103 0.120036 0.343262 0.358154C0.114421 0.596273 0 0.894694 0 1.25342C0 1.61214 0.117513 1.90592 0.352539 2.13477C0.587565 2.36361 0.906087 2.47803 1.30811 2.47803ZM6.61475 2.47803C7.03532 2.47803 7.36003 2.36206 7.58887 2.13013C7.81771 1.89819 7.93213 1.60596 7.93213 1.25342C7.93213 0.894694 7.81771 0.596273 7.58887 0.358154C7.36003 0.120036 7.03532 0.000976562 6.61475 0.000976562C6.20036 0.000976562 5.87874 0.120036 5.6499 0.358154C5.42106 0.596273 5.30664 0.894694 5.30664 1.25342C5.30664 1.61214 5.42415 1.90592 5.65918 2.13477C5.89421 2.36361 6.21273 2.47803 6.61475 2.47803ZM12.8955 2.13013C12.6667 2.36206 12.342 2.47803 11.9214 2.47803C11.5194 2.47803 11.2008 2.36361 10.9658 2.13477C10.7308 1.90592 10.6133 1.61214 10.6133 1.25342C10.6133 0.894694 10.7277 0.596273 10.9565 0.358154C11.1854 0.120036 11.507 0.000976562 11.9214 0.000976562C12.342 0.000976562 12.6667 0.120036 12.8955 0.358154C13.1243 0.596273 13.2388 0.894694 13.2388 1.25342C13.2388 1.60596 13.1243 1.89819 12.8955 2.13013Z",fill:"#A2AAB5"})),te="_table_kha9s_1",ne="_label_kha9s_87",ae={table:te,"table-header":"_table-header_kha9s_9","table-row":"_table-row_kha9s_16","table-row-content":"_table-row-content_kha9s_21","size-small":"_size-small_kha9s_31","size-large":"_size-large_kha9s_34","table-body":"_table-body_kha9s_38","table-header-cell":"_table-header-cell_kha9s_45","table-cell":"_table-cell_kha9s_45","action-menu-cell":"_action-menu-cell_kha9s_50","checkbox-cell":"_checkbox-cell_kha9s_60","primary-cell":"_primary-cell_kha9s_71",label:ne,"sortable-cell":"_sortable-cell_kha9s_91","align-right":"_align-right_kha9s_94","align-center":"_align-center_kha9s_100"},k="asc",se="desc",v=n=>n.toLowerCase()===k,q=(n,a)=>(a&&n.sort((d,u)=>{const h=d[a.key].content||d[a.key],p=u[a.key].content||u[a.key];return h<p?v(a.direction)?-1:1:h>p?v(a.direction)?1:-1:0}),n),oe=n=>n.map(a=>a.key),le=n=>v(n)?se:k,l=J.bind(ae),A=({data:n,primaryColumn:a,fixedColumns:d,renderRowActions:u,className:h="",rowClassName:p="",headerClassName:x="",selectable:w=!1,selectedRowIds:g=[],sortingDirection:b=k,sortingColumn:i=a,sortableColumns:m=oe([a,...d]),onChangeSorting:r=()=>{},onToggleRowSelection:s=()=>{},onToggleAllRowsSelection:C=()=>{}})=>{const[f,T]=o.useState(null),[Z,j]=o.useState(null),N=o.useMemo(()=>[{...a,primary:!0},...d],[a,d]),U=e=>{m.includes(e)&&r({key:e,direction:b})},E=e=>({width:e.width,textAlign:e.align}),I=e=>{T(e)},F=()=>{T(null)},H=e=>{j(e)},W=()=>{j(null)},Y=e=>{s(e)},$=()=>{C()},K=n.every(e=>g.includes(e.id)),_=n.some(e=>g.includes(e.id)),O=e=>{var c;return`size-${((c=e.rowConfigs)==null?void 0:c.size)??"default"}`},G=e=>{if(m.includes(e))return(i==null?void 0:i.key)===e?v(b)?t.jsx(L,{}):t.jsx(X,{}):t.jsx(L,{})};return t.jsxs("div",{className:l("table",h),children:[t.jsxs("div",{className:l("table-header",x),children:[w&&t.jsx("div",{className:l("table-header-cell","checkbox-cell"),children:_&&t.jsx(M,{value:K,partiallyChecked:_,onChange:$,className:l("checkbox-cell")})}),N.map(e=>t.jsx("button",{className:l("table-header-cell",{[`align-${e.align}`]:"align"in e,"primary-cell":"primary"in e&&e.primary,"sortable-cell":m.includes(e.key)}),style:E(e),children:t.jsxs("div",{className:l("label"),onClick:()=>U(e.key),onMouseEnter:()=>I(e.key),onMouseLeave:F,children:[t.jsx("span",{children:e.header}),(f===e.key||(i==null?void 0:i.key)===e.key)&&G(e.key)]})},e.key)),u&&t.jsx("div",{className:l("table-header-cell","action-menu-cell")})]}),t.jsx("div",{className:l("table-body"),children:n.map((e,R)=>t.jsxs("div",{className:l("table-row",O(e),p),onMouseEnter:()=>H(R),onMouseLeave:W,children:[w&&t.jsx("div",{className:l("table-cell","checkbox-cell"),children:(_||Z===R)&&t.jsx(M,{value:g.includes(e.id),onChange:()=>Y(e.id),className:l("checkbox-cell")})}),t.jsxs("div",{className:l("table-row-content"),children:[N.map(c=>t.jsx("div",{className:l("table-cell",{"primary-cell":"primary"in c&&c.primary}),style:E(c),children:e[c.key].component||e[c.key].content||e[c.key]},c.key)),u&&t.jsx("div",{className:l("table-cell","action-menu-cell"),children:u(e.metaData)})]})]},e.id))})]})};A.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"RowData"}],raw:"RowData[]"},description:""},primaryColumn:{required:!0,tsType:{name:"Column"},description:""},fixedColumns:{required:!0,tsType:{name:"Array",elements:[{name:"FixedColumn"}],raw:"FixedColumn[]"},description:""},renderRowActions:{required:!1,tsType:{name:"signature",type:"function",raw:"(metaData?: MetaData) => ReactNode",signature:{arguments:[{type:{name:"MetaData"},name:"metaData"}],return:{name:"ReactNode"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},headerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rowClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortingDirection:{required:!1,tsType:{name:"union",raw:"typeof ASC | typeof DESC | Uppercase<typeof ASC | typeof DESC>",elements:[{name:"ASC"},{name:"DESC"},{name:"Uppercase",elements:[{name:"union",raw:"typeof ASC | typeof DESC",elements:[{name:"ASC"},{name:"DESC"}]}],raw:"Uppercase<typeof ASC | typeof DESC>"}]},description:"",defaultValue:{value:"'asc'",computed:!1}},sortingColumn:{required:!1,tsType:{name:"Column"},description:"",defaultValue:{value:"primaryColumn",computed:!1}},sortableColumns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"getColumnsKeys([primaryColumn, ...fixedColumns])",computed:!0}},onChangeSorting:{required:!1,tsType:{name:"signature",type:"function",raw:"(sortConfig?: SortConfig) => void",signature:{arguments:[{type:{name:"SortConfig"},name:"sortConfig"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const fe={title:"Tables & Lists/Table",component:A,parameters:{layout:"centered"},tags:["autodocs"],args:{selectable:!0}},re=()=>t.jsx(Q,{placement:"bottom-end",content:t.jsxs("div",{children:[t.jsx("p",{children:"Edit"}),t.jsx("p",{children:"Rename"})]}),children:t.jsx(ee,{})}),D=[{id:1,name:{content:"Sam",component:t.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],y={key:"name",header:"Name"},z=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],S={render:n=>{const[a,d]=o.useState({key:y.key,direction:k}),[u,h]=o.useState(y),[p,x]=o.useState(k),w=q(D,a),[g,b]=o.useState(w),[i,m]=o.useState(new Set([]));return o.useEffect(()=>{const{key:r,direction:s}=a,C=[...z,y].find(f=>f.key===r);x(s),h(C)},[a]),t.jsx("div",{style:{minWidth:"700px"},children:t.jsx(A,{...n,data:g,sortableColumns:[y.key],onChangeSorting:(r=a)=>{let{direction:s}=r;const{key:C}=r;s=le(s);const f=q(g,{key:C,direction:s});d({key:C,direction:s}),b(f)},onToggleRowSelection:r=>{const s=new Set(i);s.has(r)?s.delete(r):s.add(r),m(s)},onToggleAllRowsSelection:()=>{if(i.size===D.length)m(new Set);else{const r=new Set(D.map(s=>s.id));m(r)}},selectedRowIds:[...i],sortingColumn:u,sortingDirection:p})})},args:{primaryColumn:y,fixedColumns:z,renderRowActions:re,selectable:!0}};var V,B,P;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(P=(B=S.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const ye=["Default"];export{S as Default,ye as __namedExportsOrder,fe as default};
