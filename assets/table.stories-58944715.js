import{j as e}from"./jsx-runtime-3169928d.js";import{r as m}from"./index-d33a4676.js";import{c as Tn}from"./bind-f5c6fce5.js";import{S as ge,a as En}from"./arrowUp-86f23e84.js";import{S as xe}from"./chevronDownDropdown-3c901902.js";import{C as ye}from"./checkbox-24bb629b.js";import{T as An}from"./tooltip-d85d779b.js";import{P as zn}from"./popover-f3624ffa.js";import{S as jn}from"./meatballMenu-3f4bf33c.js";import"./keyCodes-e5060420.js";import"./index-f454028f.js";import"./floating-ui.react-09d3bb8c.js";import"./floatingUi-59569704.js";const se=t=>typeof t=="string",_n="_table_qg65a_1",Nn="_selectable_qg65a_56",Pn="_expanded_qg65a_52",Mn="_label_qg65a_283",Fn={table:_n,"fixed-header":"_fixed-header_qg65a_8","horizontally-scrollable-container":"_horizontally-scrollable-container_qg65a_14","table-header":"_table-header_qg65a_19","sticky-header":"_sticky-header_qg65a_26","horizontally-scrollable":"_horizontally-scrollable_qg65a_14","table-row":"_table-row_qg65a_47","expanded-cell":"_expanded-cell_qg65a_52",selectable:Nn,"row-content-wrapper":"_row-content-wrapper_qg65a_60","table-row-content":"_table-row-content_qg65a_68","expand-cell":"_expand-cell_qg65a_82","size-small":"_size-small_qg65a_85","size-large":"_size-large_qg65a_96","table-body":"_table-body_qg65a_108","scrollable-body":"_scrollable-body_qg65a_114","table-header-cell":"_table-header-cell_qg65a_163","table-cell":"_table-cell_qg65a_164","action-menu-cell":"_action-menu-cell_qg65a_170","checkbox-cell":"_checkbox-cell_qg65a_195","expand-all-tooltip-wrapper":"_expand-all-tooltip-wrapper_qg65a_237","expand-all-tooltip-content":"_expand-all-tooltip-content_qg65a_246","expand-icon":"_expand-icon_qg65a_255",expanded:Pn,"primary-cell":"_primary-cell_qg65a_264",label:Mn,"sortable-cell":"_sortable-cell_qg65a_294","align-right":"_align-right_qg65a_297","align-center":"_align-center_qg65a_303","pinned-column":"_pinned-column_qg65a_306"},z="asc",Hn="desc",_=32,sn=100,qn=48,G=t=>t.toLowerCase()===z,Q=(t,n)=>n?[...t].sort((a,o)=>{const i=a[n.key].content||a[n.key],r=o[n.key].content||o[n.key];return i<r?G(n.direction)?-1:1:i>r?G(n.direction)?1:-1:0}):t,Ln=t=>t.map(n=>n.key),ln=t=>G(t)?Hn:z,A=t=>"primary"in t&&t.primary===!0,Bn=t=>{var a;return`size-${((a=t.rowConfigs)==null?void 0:a.size)??"default"}`},Wn=(t,n,a,o,i)=>{let r=0;o&&(r+=_),i&&(r+=_);for(let h=0;h<t;h++){const g=n[h];if(A(g)){const s=a.current.get(g.key)||sn;r+=s}else{const s=g,d=se(s.width)?parseInt(s.width,10)||0:s.width;r+=d}}return r},I=(t,n,a,o,i,r,h)=>{const g={};if(!A(t)){const s=t;g.textAlign=s.align}if(n&&a!==void 0){const s=Wn(a,o,i,r,h);g.left=`${s}px`}return g},fe=(t,n,a,o,i,r=!1)=>{const h=[];a&&h.push(`${_}px`),r&&o&&h.push(`${_}px`);const g=s=>{if(A(s)){const d=s,u=d.width?se(d.width)?d.width:`${d.width}px`:`${sn}px`;h.push(`minmax(${u}, 1fr)`)}else{const d=s,u=se(d.width)?d.width:`${d.width}px`;h.push(u)}};return t.forEach(g),n.forEach(g),i&&h.push(`${qn}px`),h.join(" ")},In=({primaryColumns:t,fixedColumns:n,pinnedColumnKeys:a})=>m.useMemo(()=>{const o=[],i=[];return t.forEach(r=>{const h={...r,primary:!0};a.includes(r.key)?o.push(h):i.push(h)}),n.forEach(r=>{a.includes(r.key)?o.push(r):i.push(r)}),{pinnedColumns:o,scrollableColumns:i}},[t,n,a]),$n=()=>{const[t,n]=m.useState(null),[a,o]=m.useState(null),i=m.useCallback(s=>{n(s)},[]),r=m.useCallback(()=>{n(null)},[]),h=m.useCallback(s=>{o(s)},[]),g=m.useCallback(()=>{o(null)},[]);return{hoveredColumn:t,hoveredRow:a,handleColumnMouseEnter:i,handleColumnMouseLeave:r,handleRowMouseEnter:h,handleRowMouseLeave:g}},Vn=({primaryColumns:t,fixedColumns:n,expandedRowIds:a,onToggleRowExpansion:o})=>{const[i,r]=m.useState(new Set);m.useEffect(()=>{const s=[...t.map(u=>u.key),...n.map(u=>u.key)],d=new Set;a.forEach(u=>{s.forEach(w=>{d.add(`${u}-${w}`)})}),r(u=>{if(u.size===d.size){let w=!0;if(u.forEach(c=>{d.has(c)||(w=!1)}),w)return u}return d})},[a,t,n]);const h=m.useCallback(s=>{const d=new Set(i),u=a.includes(s),w=[...t.map(c=>c.key),...n.map(c=>c.key)];u?w.forEach(c=>{const p=`${s}-${c}`;d.delete(p)}):w.forEach(c=>{const p=`${s}-${c}`;d.add(p)}),r(d),o(s)},[i,a,t,n,o]),g=m.useCallback((s,d)=>{const u=`${s}-${d}`;return i.has(u)},[i]);return{expandedCells:i,handleToggleRowExpansion:h,isCellExpanded:g}},Un=()=>{const t=m.useRef(new Map),n=m.useCallback(a=>o=>{if(!o)return;const i=o.getBoundingClientRect().width;i>0&&t.current.set(a,i)},[]);return{columnWidthsRef:t,setCellRef:n}},x=Tn.bind(Fn),be=({column:t})=>{const n=m.useRef(null),[a,o]=m.useState(!1);return m.useEffect(()=>{if(n.current){const i=n.current.offsetWidth,r=n.current.scrollWidth;o(r>i)}},[t.header]),e.jsx("span",{ref:n,title:a?t.header:void 0,children:t.header})},S=({data:t,primaryColumn:n,fixedColumns:a,renderRowActions:o,className:i="",rowClassName:r="",headerClassName:h="",bodyClassName:g="",selectable:s=!1,selectedRowIds:d=[],sortingDirection:u=z,sortingColumn:w,sortableColumns:c,isHeaderFixed:p=!1,isHorizontallyScrollable:y=!1,pinnedColumnKeys:f=[],isRowsExpandable:C=!1,expandedRowIds:R=[],isAllExpandedByDefault:j,expandAllTooltip:D,onChangeSorting:T=()=>{},onToggleRowSelection:cn=()=>{},onToggleAllRowsSelection:pn=()=>{},onToggleRowExpansion:mn=()=>{},onToggleAllRowsExpansion:hn=()=>{}})=>{const F=m.useMemo(()=>Array.isArray(n)?n:[n],[n]),v=w??F[0],H=c??Ln([...F,...a]),{pinnedColumns:E,scrollableColumns:q}=In({primaryColumns:F,fixedColumns:a,pinnedColumnKeys:f}),{hoveredColumn:le,hoveredRow:un,handleColumnMouseEnter:ie,handleColumnMouseLeave:re,handleRowMouseEnter:wn,handleRowMouseLeave:gn}=$n(),{columnWidthsRef:L,setCellRef:de}=Un(),{handleToggleRowExpansion:xn,isCellExpanded:ce}=Vn({primaryColumns:F,fixedColumns:a,expandedRowIds:R,onToggleRowExpansion:mn}),pe=l=>{H.includes(l)&&T({key:l,direction:u})},yn=l=>{cn(l)},fn=()=>{pn()},bn=()=>{hn()},me=l=>H.includes(l)?(v==null?void 0:v.key)===l?G(u)?e.jsx(ge,{}):e.jsx(En,{}):e.jsx(ge,{}):null,Cn=t.every(l=>d.includes(l.id)),Sn=t.some(l=>d.includes(l.id)),he=(d==null?void 0:d.length)>0,kn=t.every(l=>R.includes(l.id)),Rn=j!==void 0?j:kn,vn=fe(E,q,C,s,!!o,!1),Dn=fe(E,q,C,s,!!o,!0),ue=e.jsx("button",{onClick:bn,"aria-label":"Toggle all rows expansion",children:e.jsx("span",{className:x("expand-icon",{expanded:Rn}),children:e.jsx(xe,{})})});return e.jsxs("div",{className:x("table",{"fixed-header":p,"horizontally-scrollable-container":p&&y},i),children:[e.jsxs("div",{className:x("table-header",{"sticky-header":p,"horizontally-scrollable":y},h),style:{gridTemplateColumns:Dn},children:[s&&e.jsx("div",{className:x("table-header-cell","checkbox-cell"),style:{left:C?`${_}px`:"0"},children:he&&e.jsx(ye,{value:Cn,partiallyChecked:Sn,onChange:fn,className:x("checkbox-cell")})}),C&&e.jsx("div",{className:x("table-header-cell","expand-cell"),style:{left:"0"},children:D?e.jsx(An,{content:D,placement:"top",wrapperClassName:x("expand-all-tooltip-wrapper"),contentClassName:x("expand-all-tooltip-content"),children:ue}):ue}),E.map((l,B)=>e.jsx("button",{className:x("table-header-cell","pinned-column",{[`align-${l.align}`]:"align"in l,"primary-cell":A(l),"sortable-cell":H.includes(l.key)}),style:I(l,!0,B,E,L,C,s),children:e.jsxs("div",{className:x("label"),onClick:()=>pe(l.key),onMouseEnter:()=>ie(l.key),onMouseLeave:re,children:[e.jsx(be,{column:l}),(le===l.key||(v==null?void 0:v.key)===l.key)&&me(l.key)]})},l.key)),q.map(l=>e.jsx("button",{className:x("table-header-cell",{[`align-${l.align}`]:"align"in l,"primary-cell":A(l),"sortable-cell":H.includes(l.key)}),style:I(l,!1,void 0,E,L,C,s),children:e.jsxs("div",{className:x("label"),onClick:()=>pe(l.key),onMouseEnter:()=>ie(l.key),onMouseLeave:re,children:[e.jsx(be,{column:l}),(le===l.key||(v==null?void 0:v.key)===l.key)&&me(l.key)]})},l.key)),o&&e.jsx("div",{className:x("table-header-cell","action-menu-cell")})]}),e.jsx("div",{className:x("table-body",{"scrollable-body":p,"horizontally-scrollable":y},g),children:t.map((l,B)=>e.jsxs("div",{className:x("table-row",Bn(l),r,{selectable:s}),onMouseEnter:()=>wn(B),onMouseLeave:gn,children:[s&&e.jsx("div",{className:x("table-cell","checkbox-cell"),style:{left:C?`${_}px`:"0"},children:(he||un===B)&&e.jsx(ye,{value:d.includes(l.id),onChange:()=>yn(l.id),className:x("checkbox-cell")})}),e.jsx("div",{className:x("row-content-wrapper"),children:e.jsxs("div",{className:x("table-row-content"),style:{gridTemplateColumns:vn},children:[C&&e.jsx("div",{className:x("table-cell","expand-cell"),style:{left:"0"},children:e.jsx("button",{onClick:()=>xn(l.id),"aria-label":R.includes(l.id)?"Collapse row":"Expand row","aria-expanded":R.includes(l.id),children:e.jsx("span",{className:x("expand-icon",{expanded:R.includes(l.id)}),children:e.jsx(xe,{})})})}),E.map((b,ee)=>{const W=ce(l.id,b.key),we=A(b);return e.jsx("div",{ref:we?de(b.key):void 0,className:x("table-cell","pinned-column",{"primary-cell":we,"expanded-cell":W}),style:I(b,!0,ee,E,L,C,s),children:l[b.key].component||l[b.key].content||l[b.key]},b.key)}),q.map(b=>{const ee=ce(l.id,b.key),W=A(b);return e.jsx("div",{ref:W?de(b.key):void 0,className:x("table-cell",{"primary-cell":W,"expanded-cell":ee}),style:I(b,!1,void 0,E,L,C,s),children:l[b.key].component||l[b.key].content||l[b.key]},b.key)}),o&&e.jsx("div",{className:x("table-cell","action-menu-cell"),children:o(l.metaData)})]})})]},l.id))})]})};S.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"RowData"}],raw:"RowData[]"},description:""},primaryColumn:{required:!0,tsType:{name:"union",raw:"Column | Column[]",elements:[{name:"Column"},{name:"Array",elements:[{name:"Column"}],raw:"Column[]"}]},description:""},fixedColumns:{required:!0,tsType:{name:"Array",elements:[{name:"FixedColumn"}],raw:"FixedColumn[]"},description:""},renderRowActions:{required:!1,tsType:{name:"signature",type:"function",raw:"(metaData?: MetaData) => ReactNode",signature:{arguments:[{type:{name:"MetaData"},name:"metaData"}],return:{name:"ReactNode"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},headerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},bodyClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rowClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortingDirection:{required:!1,tsType:{name:"union",raw:"typeof ASC | typeof DESC | Uppercase<typeof ASC | typeof DESC>",elements:[{name:"ASC"},{name:"DESC"},{name:"Uppercase",elements:[{name:"union",raw:"typeof ASC | typeof DESC",elements:[{name:"ASC"},{name:"DESC"}]}],raw:"Uppercase<typeof ASC | typeof DESC>"}]},description:"",defaultValue:{value:"'asc'",computed:!1}},sortingColumn:{required:!1,tsType:{name:"Column"},description:""},sortableColumns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isHeaderFixed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontallyScrollable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pinnedColumnKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},isRowsExpandable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},setExpandedRowIds:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Set",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Set<string | number>"}],raw:"SetStateAction<Set<string | number>>"}],raw:"Dispatch<SetStateAction<Set<string | number>>>"},description:""},isAllExpandedByDefault:{required:!1,tsType:{name:"boolean"},description:""},expandAllTooltip:{required:!1,tsType:{name:"ReactNode"},description:""},onChangeSorting:{required:!1,tsType:{name:"signature",type:"function",raw:"(sortConfig?: SortConfig) => void",signature:{arguments:[{type:{name:"SortConfig"},name:"sortConfig"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const ct={title:"Tables & Lists/Table",component:S,parameters:{layout:"centered",docs:{description:{component:"\nA flexible table component with support for:\n- **Row sizes**: Configure via `rowConfigs: { size: 'small' | 'medium' | 'large' }` in row data\n- **Expandable rows**: Enable with `isRowsExpandable` prop\n- **Pinned columns**: Use `pinnedColumnKeys` to pin columns to the left\n- **Sorting**: Configure with `sortableColumns`, `sortingColumn`, `sortingDirection`\n- **Selection**: Enable with `selectable` prop\n- **Custom cell content**: Use `DetailedCellData` with `content` and `component` properties\n        "}}},tags:["autodocs"],argTypes:{data:{description:"Array of row data. Each row should have an `id` and can include `rowConfigs` for size configuration.",table:{type:{summary:"RowData[]"}}},primaryColumn:{description:"The main column configuration (typically the name/title column).",table:{type:{summary:"Column | Column[]"}}},fixedColumns:{description:"Array of fixed-width columns with optional alignment.",table:{type:{summary:"FixedColumn[]"}}},selectable:{description:"Enable row selection with checkboxes.",control:"boolean",table:{defaultValue:{summary:"false"}}},isRowsExpandable:{description:"Enable expand/collapse functionality for rows with long content.",control:"boolean",table:{defaultValue:{summary:"false"}}},expandedRowIds:{description:"Array of row IDs that are currently expanded.",table:{type:{summary:"(string | number)[]"}}},isAllExpandedByDefault:{description:"Whether all rows should be expanded by default.",control:"boolean",table:{defaultValue:{summary:"false"}}},expandAllTooltip:{description:"Tooltip text for the expand all button.",table:{type:{summary:"ReactNode"}}},pinnedColumnKeys:{description:"Array of column keys to pin to the left side of the table.",table:{type:{summary:"string[]"}}},sortableColumns:{description:"Array of column keys that can be sorted.",table:{type:{summary:"string[]"}}},sortingColumn:{description:"Currently sorted column.",table:{type:{summary:"Column"}}},sortingDirection:{description:"Current sorting direction.",control:"select",options:["ASC","DESC"],table:{type:{summary:"'ASC' | 'DESC'"}}},isHeaderFixed:{description:"Keep the header fixed when scrolling vertically.",control:"boolean",table:{defaultValue:{summary:"false"}}},isHorizontallyScrollable:{description:"Enable horizontal scrolling for wide tables.",control:"boolean",table:{defaultValue:{summary:"false"}}},className:{description:"Custom CSS class for the table container.",table:{type:{summary:"string"}}},headerClassName:{description:"Custom CSS class for the table header. Use this to customize header background, borders, etc.",table:{type:{summary:"string"}}},bodyClassName:{description:"Custom CSS class for the table body. Use this to customize row gap, padding, etc.",table:{type:{summary:"string"}}},rowClassName:{description:"Custom CSS class for table rows.",table:{type:{summary:"string"}}},onToggleRowExpansion:{description:"Callback when a row is expanded/collapsed.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsExpansion:{description:"Callback when all rows are expanded/collapsed.",table:{type:{summary:"() => void"}}},onToggleRowSelection:{description:"Callback when a row is selected/deselected.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsSelection:{description:"Callback when all rows are selected/deselected.",table:{type:{summary:"() => void"}}},onChangeSorting:{description:"Callback when sorting changes.",table:{type:{summary:"(sortConfig?: SortConfig) => void"}}},renderRowActions:{description:"Function to render action menu for each row.",table:{type:{summary:"(metaData?: MetaData) => ReactNode"}}}},args:{selectable:!0}},Z=()=>e.jsx(zn,{placement:"bottom-end",content:e.jsxs("div",{children:[e.jsx("p",{children:"Edit"}),e.jsx("p",{children:"Rename"})]}),children:e.jsx(jn,{})}),ne=[{id:1,name:{content:"Sam",component:e.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],k=[{key:"name",header:"Name"}],Ce=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],$={render:t=>{const[n,a]=m.useState({key:k[0].key,direction:z}),[o,i]=m.useState(k[0]),[r,h]=m.useState(z),g=Q(ne,n),[s,d]=m.useState(g),[u,w]=m.useState(new Set([]));return m.useEffect(()=>{const{key:c,direction:p}=n,y=[...Ce,...k].find(f=>f.key===c);h(p),i(y)},[n]),e.jsx("div",{style:{minWidth:"700px"},children:e.jsx(S,{...t,primaryColumn:k,data:s,sortableColumns:[k[0].key],onChangeSorting:(c=n)=>{let{direction:p}=c;const{key:y}=c;p=ln(p);const f=Q(s,{key:y,direction:p});a({key:y,direction:p}),d(f)},onToggleRowSelection:c=>{const p=new Set(u);p.has(c)?p.delete(c):p.add(c),w(p)},onToggleAllRowsSelection:()=>{if(u.size===ne.length)w(new Set);else{const c=new Set(ne.map(p=>p.id));w(c)}},selectedRowIds:[...u],sortingColumn:o,sortingDirection:r})})},args:{fixedColumns:Ce,renderRowActions:Z,selectable:!0}},X=[{id:1,name:"John Doe",email:"john.doe@example.com",phone:"+1-555-123-4567",address:"123 Main Street, New York, NY 10001",department:"Engineering",role:"Senior Software Engineer",salary:"$120,000",startDate:"2020-01-15",status:"Active",manager:"Jane Smith",projects:"Project Alpha, Project Beta",rowConfigs:{size:"small"}},{id:2,name:"Jane Smith",email:"jane.smith@example.com",phone:"+1-555-987-6543",address:"456 Oak Avenue, Los Angeles, CA 90210",department:"Marketing",role:"Marketing Director",salary:"$95,000",startDate:"2019-03-20",status:"Active",manager:"Robert Johnson",projects:"Campaign X, Campaign Y",rowConfigs:{size:"small"}},{id:3,name:"Mike Wilson",email:"mike.wilson@example.com",phone:"+1-555-456-7890",address:"789 Pine Road, Chicago, IL 60601",department:"Sales",role:"Sales Representative",salary:"$75,000",startDate:"2021-06-10",status:"Active",manager:"Sarah Davis",projects:"Client Onboarding, Lead Generation",rowConfigs:{size:"small"}},{id:4,name:"Sarah Davis",email:"sarah.davis@example.com",phone:"+1-555-234-5678",address:"321 Elm Street, Houston, TX 77001",department:"HR",role:"HR Manager",salary:"$85,000",startDate:"2018-09-12",status:"Active",manager:"Michael Brown",projects:"Employee Onboarding, Policy Updates",rowConfigs:{size:"small"}},{id:5,name:"Robert Johnson",email:"robert.johnson@example.com",phone:"+1-555-345-6789",address:"654 Maple Drive, Phoenix, AZ 85001",department:"Finance",role:"Financial Analyst",salary:"$78,000",startDate:"2020-11-08",status:"Active",manager:"Emily White",projects:"Budget Planning, Cost Analysis",rowConfigs:{size:"small"}},{id:6,name:"Emily White",email:"emily.white@example.com",phone:"+1-555-456-7891",address:"987 Cedar Lane, Philadelphia, PA 19101",department:"Operations",role:"Operations Manager",salary:"$110,000",startDate:"2017-05-22",status:"Active",manager:"David Green",projects:"Process Optimization, Quality Control",rowConfigs:{size:"small"}},{id:7,name:"David Green",email:"david.green@example.com",phone:"+1-555-567-8901",address:"147 Birch Avenue, San Antonio, TX 78201",department:"Engineering",role:"Lead Developer",salary:"$135,000",startDate:"2016-02-14",status:"Active",manager:"Lisa Thompson",projects:"Architecture Review, Team Mentoring",rowConfigs:{size:"small"}},{id:8,name:"Lisa Thompson",email:"lisa.thompson@example.com",phone:"+1-555-678-9012",address:"258 Spruce Court, San Diego, CA 92101",department:"Product",role:"Product Manager",salary:"$105,000",startDate:"2019-08-30",status:"Active",manager:"Tom Anderson",projects:"Feature Planning, User Research",rowConfigs:{size:"small"}},{id:9,name:"Tom Anderson",email:"tom.anderson@example.com",phone:"+1-555-789-0123",address:"369 Willow Street, Dallas, TX 75201",department:"Design",role:"UX Designer",salary:"$88,000",startDate:"2021-01-18",status:"Active",manager:"Anna Martinez",projects:"UI Redesign, User Testing",rowConfigs:{size:"small"}},{id:10,name:"Anna Martinez",email:"anna.martinez@example.com",phone:"+1-555-890-1234",address:"741 Poplar Boulevard, San Jose, CA 95101",department:"QA",role:"QA Engineer",salary:"$82,000",startDate:"2020-07-25",status:"Active",manager:"John Doe",projects:"Automation Testing, Bug Tracking",rowConfigs:{size:"small"}}],rn=[{key:"name",header:"Full Name"}],dn=[{key:"email",header:"Email Address",width:200},{key:"phone",header:"Phone Number",width:150},{key:"address",header:"Address",width:250},{key:"department",header:"Department",width:120},{key:"role",header:"Job Role",width:180},{key:"salary",header:"Salary",width:100},{key:"startDate",header:"Start Date",width:120},{key:"status",header:"Status",width:100},{key:"manager",header:"Manager",width:150},{key:"projects",header:"Current Projects",width:200}],On=t=>{const n=["John","Jane","Mike","Sarah","David","Emma","Chris","Lisa","Tom","Anna"],a=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose"],o=["Engineering","Marketing","Sales","HR","Finance","Operations","Design","Product","Legal","Support"];return Array.from({length:t},(i,r)=>({id:r+1,name:`${n[r%n.length]} ${r+1}`,age:22+r%40,city:a[r%a.length],department:o[r%o.length],email:`user${r+1}@example.com`,salary:`$${(5e4+r*1e3%1e5).toLocaleString()}`}))},te=On(50),Se=[{key:"age",header:"Age",width:80,align:"right"},{key:"city",header:"City",width:120},{key:"department",header:"Department",width:120},{key:"email",header:"Email",width:200},{key:"salary",header:"Salary",width:100,align:"right"}],V={render:t=>{const[n,a]=m.useState({key:k[0].key,direction:z}),[o,i]=m.useState(k[0]),[r,h]=m.useState(z),g=Q(te,n),[s,d]=m.useState(g),[u,w]=m.useState(new Set([]));return m.useEffect(()=>{const{key:c,direction:p}=n,y=[...Se,...k].find(f=>f.key===c);h(p),i(y)},[n]),e.jsxs("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Fixed Header Table with Scrollable Body"}),e.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",overflow:"auto"},children:e.jsx(S,{...t,data:s,primaryColumn:k,fixedColumns:Se,isHeaderFixed:!0,sortableColumns:[k[0].key,"age","department"],onChangeSorting:(c=n)=>{let{direction:p}=c;const{key:y}=c;p=ln(p);const f=Q(s,{key:y,direction:p});a({key:y,direction:p}),d(f)},onToggleRowSelection:c=>{const p=new Set(u);p.has(c)?p.delete(c):p.add(c),w(p)},onToggleAllRowsSelection:()=>{if(u.size===te.length)w(new Set);else{const c=new Set(te.map(p=>p.id));w(c)}},selectedRowIds:[...u],sortingColumn:o,sortingDirection:r})})]})},args:{selectable:!0,renderRowActions:Z}},U={render:t=>e.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Fixed Header + Horizontal Scroll: Both scrollbars visible when needed"}),e.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",position:"relative"},children:e.jsx(S,{...t,data:X,primaryColumn:rn,fixedColumns:dn,isHorizontallyScrollable:!0,isHeaderFixed:!0})})]}),args:{selectable:!1,renderRowActions:Z}},O={render:t=>{const[n,a]=m.useState(new Set([]));return e.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Pinned Columns + Fixed Header: Name and Email pinned with vertical and horizontal scrolling"}),e.jsx("div",{className:"storybook-table-wrapper",style:{width:"550px",height:"calc(100% - 50px)",position:"relative"},children:e.jsx(S,{...t,data:X,primaryColumn:rn,fixedColumns:dn,isHorizontallyScrollable:!0,isHeaderFixed:!0,pinnedColumnKeys:["name","email","department"],onToggleRowSelection:o=>{const i=new Set(n);i.has(o)?i.delete(o):i.add(o),a(i)},onToggleAllRowsSelection:()=>{if(n.size===X.length)a(new Set);else{const o=new Set(X.map(i=>i.id));a(o)}},selectedRowIds:[...n]})})]})},args:{selectable:!0,renderRowActions:Z}},J={render:t=>{const[n,a]=m.useState(new Set([1])),[o,i]=m.useState(new Set([])),r=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"sam.johnson@example.com"},{id:2,name:"Anna Smith",age:32,city:"San Francisco",department:"Design",email:"anna.smith@example.com"},{id:3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",email:"mike.davis@example.com"},{id:4,name:"Sarah Wilson",age:35,city:"Chicago",department:"Sales",email:"sarah.wilson@example.com"}],h=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:100},{key:"city",header:"City",width:100}],g=[{key:"name",header:"Name"}];return e.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows Example"}),e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Click the expand/collapse icons to view detailed information for each row. Rows can be expanded and collapsed independently."}),e.jsx(S,{...t,data:r,primaryColumn:g,fixedColumns:h,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...n],setExpandedRowIds:a,onToggleRowExpansion:s=>{const d=new Set(n);d.has(s)?d.delete(s):d.add(s),a(d)},onToggleAllRowsExpansion:()=>{if(n.size===r.length)a(new Set);else{const s=new Set(r.map(d=>d.id));a(s)}},selectedRowIds:[...o],onToggleRowSelection:s=>{const d=new Set(o);d.has(s)?d.delete(s):d.add(s),i(d)},onToggleAllRowsSelection:()=>{if(o.size===r.length)i(new Set);else{const s=new Set(r.map(d=>d.id));i(s)}}})]})},args:{selectable:!0}},Y={render:t=>{const[n,a]=m.useState(new Set([1,2,3,4])),[o,i]=m.useState(!0),[r,h]=m.useState(new Set([])),g=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"anna.smith@example.com"},{id:2,name:"Mike Davis",age:32,city:"San Francisco",department:"Design",email:"mike.davis@example.com"},{id:3,name:"Sarah Wilson",age:28,city:"Los Angeles",department:"Marketing",email:"sarah.wilson@example.com"},{id:4,name:"John Brown",age:35,city:"Chicago",department:"Sales",email:"john.brown@example.com"}],s=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],d=[{key:"name",header:"Name"}],u=o?"Expanded by default":"Collapsed by default";return e.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows with Default State"}),e.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Demonstrates ",e.jsx("strong",{children:"isAllExpandedByDefault"})," and ",e.jsx("strong",{children:"expandAllTooltip"})," ","props. The expandAll icon shows the default state regardless of individual row states. Hover over the expandAll icon to see the tooltip."]}),e.jsx(S,{...t,data:g,primaryColumn:d,fixedColumns:s,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...n],isAllExpandedByDefault:o,expandAllTooltip:u,onToggleRowExpansion:w=>{const c=new Set(n);c.has(w)?c.delete(w):c.add(w),a(c)},onToggleAllRowsExpansion:()=>{const w=!o;i(w),a(w?new Set(g.map(c=>c.id)):new Set)},selectedRowIds:[...r],onToggleRowSelection:w=>{const c=new Set(r);c.has(w)?c.delete(w):c.add(w),h(c)},onToggleAllRowsSelection:()=>{if(r.size===g.length)h(new Set);else{const w=new Set(g.map(c=>c.id));h(w)}}})]})},args:{selectable:!0}},ae=[{id:1,name:"John Alexander Maximilian Winchester-Blackwood III",description:"This is long text but anyway no matter ellipsed or opened it should not overcome his width it can be brake. When you click on this cell, it will expand to show the full content without ellipsis truncation, and the text should wrap properly within the cell boundaries without breaking the table layout.",shortText:"Brief note",longTitle:"Senior Vice President of Engineering and Technology Development for Enterprise Solutions and Digital Transformation Initiatives",email:"john.alexander.maximilian.winchester.blackwood.third@very-long-company-name-example.com",notes:"This is a comprehensive test of how the table handles extremely long content that would normally break layouts. The content should be properly contained within cell boundaries."},{id:2,name:"Maria Elena Rodriguez-Martinez",description:"Another extremely lengthy description that showcases the cell expansion capabilities. This description contains detailed information about the person, their role, responsibilities, and achievements. The purpose is to demonstrate how users can easily expand cells to read full content when the default view shows only a truncated version with ellipsis.",shortText:"Quick summary here",longTitle:"Chief Marketing Officer and Head of Brand Strategy for Global Markets and Customer Experience Enhancement",email:"maria.elena.rodriguez.martinez@another-extremely-long-domain-name.example.org",notes:"Testing various content lengths and how they behave in both collapsed and expanded states. The text should wrap appropriately without overflowing."},{id:3,name:"Robert James Thompson",description:"A comprehensive description that tests the expand functionality with moderate length content. This shows how the feature works with different content lengths and provides a good example of real-world usage.",shortText:"Standard",longTitle:"Director of Operations",email:"robert.thompson@company.com",notes:"Short note about this person and their current projects."},{id:4,name:"Dr. Elizabeth Catherine Pemberton-Williams, PhD, MBA, CISSP",description:"This cell contains an exceptionally detailed description that really pushes the limits of what might be considered reasonable content length. It includes professional background, educational achievements, current responsibilities, ongoing projects, future goals, and various other details that would typically require a much larger display area.",shortText:"Complex background",longTitle:"Chief Technology Officer and Principal Software Architect for Distributed Systems and Cloud Infrastructure with specialization in Cybersecurity and Data Analytics",email:"dr.elizabeth.catherine.pemberton.williams.phd.mba.cissp@enterprise-solutions-technology-consulting.example.net",notes:"Comprehensive notes about professional achievements, certifications, ongoing projects, and future development plans. This tests the maximum reasonable content length."}],Jn=[{key:"description",header:"Description",width:200},{key:"longTitle",header:"Job Title",width:120},{key:"email",header:"Email Address",width:100},{key:"shortText",header:"Type",width:100},{key:"notes",header:"Notes",width:100}],K={render:t=>{const[n,a]=m.useState(new Set);return e.jsxs("div",{style:{width:"1000px",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Row Content Expansion - Long Text Handling"}),e.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666",lineHeight:1.5},children:[e.jsx("strong",{children:"Click the expand icon"})," at the beginning of each row to expand/collapse ALL cells in that row. This example tests:",e.jsx("br",{}),"• Very long email addresses that should be ellipsed when collapsed",e.jsx("br",{}),"• Long text content that should wrap without breaking cell width constraints",e.jsx("br",{}),"• Proper word breaking for extremely long content",e.jsx("br",{}),"• Layout stability when transitioning between collapsed and expanded states"]}),e.jsx("div",{style:{border:"1px solid #e1e5e9",borderRadius:"8px",overflow:"hidden"},children:e.jsx(S,{...t,data:ae,primaryColumn:[{key:"name",header:"Full Name"}],fixedColumns:Jn,selectable:!1,isRowsExpandable:!0,expandedRowIds:[...n],onToggleRowExpansion:o=>{const i=new Set(n);i.has(o)?i.delete(o):i.add(o),a(i)},onToggleAllRowsExpansion:()=>{if(n.size===ae.length)a(new Set);else{const o=new Set(ae.map(i=>i.id));a(o)}}})}),e.jsx("p",{style:{margin:"16px 0 0 0",fontSize:"12px",color:"#888",fontStyle:"italic"},children:"Test the table with your browser's developer tools at different widths to verify responsive behavior."})]})},args:{renderRowActions:void 0}},N={render:t=>{const[n,a]=m.useState(new Set([1])),[o,i]=m.useState(new Set([5])),[r,h]=m.useState(new Set([9])),g=(y,f)=>[{id:y+1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",rowConfigs:f?{size:f}:void 0},{id:y+2,name:"John Doe with a very long name that should wrap when expanded and demonstrate how the row height increases to accommodate multiple lines of text content",age:32,city:"San Francisco Bay Area, California, United States of America",department:"Design and User Experience Research Department",rowConfigs:f?{size:f}:void 0},{id:y+3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",rowConfigs:f?{size:f}:void 0},{id:y+4,name:"Sarah Elizabeth Wilson-Montgomery III with an exceptionally long hyphenated surname that demonstrates text wrapping behavior in expanded table rows when the content exceeds the available column width",age:35,city:"Chicago Metropolitan Area",department:"Sales and Business Development International Operations",rowConfigs:f?{size:f}:void 0}],s=g(0,"small"),d=g(4),u=g(8,"large"),w=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],c=[{key:"name",header:"Name"}],p=(y,f,C,R,j)=>e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h4",{style:{margin:"0 0 4px 0",fontSize:"14px",color:"#333"},children:y}),e.jsx("p",{style:{margin:"0 0 12px 0",fontSize:"12px",color:"#666"},children:f}),e.jsx(S,{...t,data:C,primaryColumn:c,fixedColumns:w,isRowsExpandable:!0,expandedRowIds:[...R],onToggleRowExpansion:D=>{const T=new Set(R);T.has(D)?T.delete(D):T.add(D),j(T)},onToggleAllRowsExpansion:()=>{if(R.size===C.length)j(new Set);else{const D=new Set(C.map(T=>T.id));j(D)}}})]});return e.jsxs("div",{style:{minWidth:"800px",maxWidth:"1000px"},children:[e.jsx("h3",{style:{margin:"0 0 24px 0",fontSize:"18px",color:"#333"},children:"Row Sizes with Expand - Testing Jump Fix"}),e.jsx("p",{style:{margin:"0 0 24px 0",fontSize:"14px",color:"#666"},children:"Test expand/collapse on each table size. The row height should NOT change when expanding/collapsing (unless content requires more space)."}),p("Small Rows (44px)",'rowConfigs: { size: "small" }',s,n,a),p("Default Rows (64px)","No rowConfigs specified",d,o,i),p("Large Rows (80px)",'rowConfigs: { size: "large" }',u,r,h)]})}},P={render:()=>{const t=[{key:"name",header:"Name"}],n=[{key:"status",header:"Status",width:100},{key:"description",header:"Description",width:250}],a=[{id:1,name:"Small Row 1",description:"Compact row for dense tables",status:"Active",rowConfigs:{size:"small"}},{id:2,name:"Small Row 2",description:"Height: 44px",status:"Active",rowConfigs:{size:"small"}}],o=[{id:1,name:"Default Row 1",description:"Standard row size",status:"Active"},{id:2,name:"Default Row 2",description:"Height: 64px (no rowConfigs needed)",status:"Active"}],i=[{id:1,name:"Large Row 1",description:"Prominent row for emphasis",status:"Active",rowConfigs:{size:"large"}},{id:2,name:"Large Row 2",description:"Height: 80px",status:"Active",rowConfigs:{size:"large"}}];return e.jsxs("div",{style:{minWidth:"600px"},children:[e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Small (44px)"}),e.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "small" }']}),e.jsx(S,{data:a,primaryColumn:t[0],fixedColumns:n,selectable:!1})]}),e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Default (64px)"}),e.jsx("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:"No rowConfigs needed"}),e.jsx(S,{data:o,primaryColumn:t[0],fixedColumns:n,selectable:!1})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Large (80px)"}),e.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "large" }']}),e.jsx(S,{data:i,primaryColumn:t[0],fixedColumns:n,selectable:!1})]})]})}},Yn=[{key:"name",header:"Name"}],Kn=[{key:"status",header:"Status",width:100},{key:"category",header:"Category",width:120}],oe=[{id:1,name:"Test execution with a very long name that demonstrates how text behaves in expanded rows with custom header styling",status:"Passed",category:"Smoke",rowConfigs:{size:"small"}},{id:2,name:"Another test case",status:"Failed",category:"Regression",rowConfigs:{size:"small"}},{id:3,name:"Quick sanity check",status:"Skipped",category:"Sanity",rowConfigs:{size:"small"}}],Xn=()=>{const[t,n]=m.useState(new Set);return e.jsxs("div",{style:{minWidth:"600px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"18px",color:"#333"},children:"Custom Header Background Color"}),e.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Use the ",e.jsx("code",{children:"headerClassName"})," prop with your own CSS class to customize the header. Pinned columns and expand button inherit the background color automatically."]}),e.jsx("style",{children:`
          .custom-gray-header {
            background-color: var(--rp-ui-base-bg-200) !important;
            border-top: 1px solid var(--rp-ui-base-e-200);
            border-bottom: none;
          }
        `}),e.jsx("div",{style:{border:"1px solid var(--rp-ui-base-e-200)",borderRadius:"4px",overflow:"hidden"},children:e.jsx(S,{data:oe,primaryColumn:Yn[0],fixedColumns:Kn,pinnedColumnKeys:["status"],isRowsExpandable:!0,expandedRowIds:Array.from(t),selectable:!1,headerClassName:"custom-gray-header",onToggleRowExpansion:a=>{const o=new Set(t);o.has(a)?o.delete(a):o.add(a),n(o)},onToggleAllRowsExpansion:()=>{t.size===oe.length?n(new Set):n(new Set(oe.map(a=>a.id)))}})}),e.jsxs("div",{style:{marginTop:"24px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#333"},children:"How to use:"}),e.jsx("pre",{style:{backgroundColor:"#f5f5f5",padding:"12px",borderRadius:"4px",fontSize:"12px",overflow:"auto"},children:`// In your SCSS file:
.custom-header {
  background-color: var(--rp-ui-base-bg-200);
  border-top: 1px solid var(--rp-ui-base-e-200);
  border-bottom: none;
}

// In your component:
<Table
  headerClassName="custom-header"
  // ... other props
/>`})]})]})},M={render:()=>e.jsx(Xn,{})};var ke,Re,ve;$.parameters={...$.parameters,docs:{...(ke=$.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortConfig, setSortConfig] = useState<SortConfig>({
      key: primaryColumns[0].key,
      direction: ASC
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingColumn, setSortingColumn] = useState<Column>(primaryColumns[0]);
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
      const column = [...fixedColumns, ...primaryColumns].find(col => col.key === key);
      setSortingDirection(direction);
      setSortingColumn(column as Column);
    }, [sortConfig]);
    return <div style={{
      minWidth: '700px'
    }}>
        <Table {...args} primaryColumn={primaryColumns} data={tableData} sortableColumns={[primaryColumns[0].key]} onChangeSorting={(sortConfigParam = sortConfig) => {
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
    fixedColumns,
    renderRowActions,
    selectable: true
  }
}`,...(ve=(Re=$.parameters)==null?void 0:Re.docs)==null?void 0:ve.source}}};var De,Te,Ee;V.parameters={...V.parameters,docs:{...(De=V.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortConfig, setSortConfig] = useState<SortConfig>({
      key: primaryColumns[0].key,
      direction: ASC
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingColumn, setSortingColumn] = useState<Column>(primaryColumns[0]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingDirection, setSortingDirection] = useState<SortingDirection>(ASC);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const defaultSortedData = sortTableData(largeDataSet, sortConfig);
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
      const column = [...scrollableFixedColumns, ...primaryColumns].find(col => col.key === key);
      setSortingDirection(direction);
      setSortingColumn(column as Column);
    }, [sortConfig]);
    return <div style={{
      width: '900px',
      height: '500px',
      border: '1px solid #ccc',
      padding: '16px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0'
      }}>Fixed Header Table with Scrollable Body</h3>
        <div className="storybook-table-wrapper" style={{
        height: 'calc(100% - 50px)',
        overflow: 'auto'
      }}>
          <Table {...args} data={tableData} primaryColumn={primaryColumns} fixedColumns={scrollableFixedColumns} isHeaderFixed={true} sortableColumns={[primaryColumns[0].key, 'age', 'department']} onChangeSorting={(sortConfigParam = sortConfig) => {
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
          if (checkedRows.size === largeDataSet.length) {
            setCheckedRows(new Set());
          } else {
            const allRows = new Set(largeDataSet.map(item => item.id));
            setCheckedRows(allRows);
          }
        }} selectedRowIds={[...checkedRows]} sortingColumn={sortingColumn} sortingDirection={sortingDirection} />
        </div>
      </div>;
  },
  args: {
    selectable: true,
    renderRowActions
  }
}`,...(Ee=(Te=V.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var Ae,ze,je;U.parameters={...U.parameters,docs:{...(Ae=U.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    return <div style={{
      width: '600px',
      height: '500px',
      border: '1px solid #ccc',
      padding: '16px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>
          Fixed Header + Horizontal Scroll: Both scrollbars visible when needed
        </h3>
        <div className="storybook-table-wrapper" style={{
        height: 'calc(100% - 50px)',
        position: 'relative'
      }}>
          <Table {...args} data={wideTableData} primaryColumn={wideTablePrimaryColumns} fixedColumns={wideTableFixedColumns} isHorizontallyScrollable isHeaderFixed />
        </div>
      </div>;
  },
  args: {
    selectable: false,
    renderRowActions
  }
}`,...(je=(ze=U.parameters)==null?void 0:ze.docs)==null?void 0:je.source}}};var _e,Ne,Pe;O.parameters={...O.parameters,docs:{...(_e=O.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));
    return <div style={{
      width: '600px',
      height: '500px',
      border: '1px solid #ccc',
      padding: '16px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>
          Pinned Columns + Fixed Header: Name and Email pinned with vertical and horizontal
          scrolling
        </h3>
        <div className="storybook-table-wrapper" style={{
        width: '550px',
        height: 'calc(100% - 50px)',
        position: 'relative'
      }}>
          <Table {...args} data={wideTableData} primaryColumn={wideTablePrimaryColumns} fixedColumns={wideTableFixedColumns} isHorizontallyScrollable isHeaderFixed pinnedColumnKeys={['name', 'email', 'department']} onToggleRowSelection={id => {
          const newCheckedRows = new Set(checkedRows);
          if (newCheckedRows.has(id)) {
            newCheckedRows.delete(id);
          } else {
            newCheckedRows.add(id);
          }
          setCheckedRows(newCheckedRows);
        }} onToggleAllRowsSelection={() => {
          if (checkedRows.size === wideTableData.length) {
            setCheckedRows(new Set());
          } else {
            const allRows = new Set(wideTableData.map(item => item.id));
            setCheckedRows(allRows);
          }
        }} selectedRowIds={[...checkedRows]} />
        </div>
      </div>;
  },
  args: {
    selectable: true,
    renderRowActions
  }
}`,...(Pe=(Ne=O.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};var Me,Fe,He;J.parameters={...J.parameters,docs:{...(Me=J.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRows, setExpandedRows] = useState<Set<number | string>>(new Set([1]));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));
    const expandableData: RowData[] = [{
      id: 1,
      name: 'Anna Smith',
      age: 25,
      city: 'New York',
      department: 'Engineering',
      email: 'sam.johnson@example.com'
    }, {
      id: 2,
      name: 'Anna Smith',
      age: 32,
      city: 'San Francisco',
      department: 'Design',
      email: 'anna.smith@example.com'
    }, {
      id: 3,
      name: 'Mike Davis',
      age: 28,
      city: 'Los Angeles',
      department: 'Marketing',
      email: 'mike.davis@example.com'
    }, {
      id: 4,
      name: 'Sarah Wilson',
      age: 35,
      city: 'Chicago',
      department: 'Sales',
      email: 'sarah.wilson@example.com'
    }];
    const expandableFixedColumns: FixedColumn[] = [{
      key: 'age',
      header: 'Age',
      align: 'right',
      width: 80
    }, {
      key: 'department',
      header: 'Department',
      width: 100
    }, {
      key: 'city',
      header: 'City',
      width: 100
    }];
    const expandablePrimaryColumns: Column[] = [{
      key: 'name',
      header: 'Name'
    }];
    return <div style={{
      minWidth: '800px',
      maxWidth: '1300px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '16px',
        color: '#333'
      }}>
          Expandable Rows Example
        </h3>
        <p style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>
          Click the expand/collapse icons to view detailed information for each row. Rows can be
          expanded and collapsed independently.
        </p>
        <Table {...args} data={expandableData} primaryColumn={expandablePrimaryColumns} fixedColumns={expandableFixedColumns} isRowsExpandable={true} selectable={true} expandedRowIds={[...expandedRows]} setExpandedRowIds={setExpandedRows} onToggleRowExpansion={id => {
        const newExpandedRows = new Set(expandedRows);
        if (newExpandedRows.has(id)) {
          newExpandedRows.delete(id);
        } else {
          newExpandedRows.add(id);
        }
        setExpandedRows(newExpandedRows);
      }} onToggleAllRowsExpansion={() => {
        if (expandedRows.size === expandableData.length) {
          setExpandedRows(new Set());
        } else {
          const allRows = new Set(expandableData.map(item => item.id));
          setExpandedRows(allRows);
        }
      }} selectedRowIds={[...checkedRows]} onToggleRowSelection={id => {
        const newCheckedRows = new Set(checkedRows);
        if (newCheckedRows.has(id)) {
          newCheckedRows.delete(id);
        } else {
          newCheckedRows.add(id);
        }
        setCheckedRows(newCheckedRows);
      }} onToggleAllRowsSelection={() => {
        if (checkedRows.size === expandableData.length) {
          setCheckedRows(new Set());
        } else {
          const allRows = new Set(expandableData.map(item => item.id));
          setCheckedRows(allRows);
        }
      }} />
      </div>;
  },
  args: {
    selectable: true
  }
}`,...(He=(Fe=J.parameters)==null?void 0:Fe.docs)==null?void 0:He.source}}};var qe,Le,Be;Y.parameters={...Y.parameters,docs:{...(qe=Y.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRows, setExpandedRows] = useState<Set<number | string>>(new Set([1, 2, 3, 4]));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isAllExpandedByDefault, setIsAllExpandedByDefault] = useState<boolean>(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));
    const expandableData: RowData[] = [{
      id: 1,
      name: 'Anna Smith',
      age: 25,
      city: 'New York',
      department: 'Engineering',
      email: 'anna.smith@example.com'
    }, {
      id: 2,
      name: 'Mike Davis',
      age: 32,
      city: 'San Francisco',
      department: 'Design',
      email: 'mike.davis@example.com'
    }, {
      id: 3,
      name: 'Sarah Wilson',
      age: 28,
      city: 'Los Angeles',
      department: 'Marketing',
      email: 'sarah.wilson@example.com'
    }, {
      id: 4,
      name: 'John Brown',
      age: 35,
      city: 'Chicago',
      department: 'Sales',
      email: 'john.brown@example.com'
    }];
    const expandableFixedColumns: FixedColumn[] = [{
      key: 'age',
      header: 'Age',
      align: 'right',
      width: 80
    }, {
      key: 'department',
      header: 'Department',
      width: 120
    }, {
      key: 'city',
      header: 'City',
      width: 120
    }];
    const expandablePrimaryColumns: Column[] = [{
      key: 'name',
      header: 'Name'
    }];
    const expandAllTooltip = isAllExpandedByDefault ? 'Expanded by default' : 'Collapsed by default';
    return <div style={{
      minWidth: '800px',
      maxWidth: '1300px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '16px',
        color: '#333'
      }}>
          Expandable Rows with Default State
        </h3>
        <p style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>
          Demonstrates <strong>isAllExpandedByDefault</strong> and <strong>expandAllTooltip</strong>{' '}
          props. The expandAll icon shows the default state regardless of individual row states.
          Hover over the expandAll icon to see the tooltip.
        </p>
        <Table {...args} data={expandableData} primaryColumn={expandablePrimaryColumns} fixedColumns={expandableFixedColumns} isRowsExpandable={true} selectable={true} expandedRowIds={[...expandedRows]} isAllExpandedByDefault={isAllExpandedByDefault} expandAllTooltip={expandAllTooltip} onToggleRowExpansion={id => {
        const newExpandedRows = new Set(expandedRows);
        if (newExpandedRows.has(id)) {
          newExpandedRows.delete(id);
        } else {
          newExpandedRows.add(id);
        }
        setExpandedRows(newExpandedRows);
      }} onToggleAllRowsExpansion={() => {
        const newIsAllExpandedByDefault = !isAllExpandedByDefault;
        setIsAllExpandedByDefault(newIsAllExpandedByDefault);
        if (newIsAllExpandedByDefault) {
          setExpandedRows(new Set(expandableData.map(item => item.id)));
        } else {
          setExpandedRows(new Set());
        }
      }} selectedRowIds={[...checkedRows]} onToggleRowSelection={id => {
        const newCheckedRows = new Set(checkedRows);
        if (newCheckedRows.has(id)) {
          newCheckedRows.delete(id);
        } else {
          newCheckedRows.add(id);
        }
        setCheckedRows(newCheckedRows);
      }} onToggleAllRowsSelection={() => {
        if (checkedRows.size === expandableData.length) {
          setCheckedRows(new Set());
        } else {
          const allRows = new Set(expandableData.map(item => item.id));
          setCheckedRows(allRows);
        }
      }} />
      </div>;
  },
  args: {
    selectable: true
  }
}`,...(Be=(Le=Y.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var We,Ie,$e;K.parameters={...K.parameters,docs:{...(We=K.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRows, setExpandedRows] = useState<Set<number | string>>(new Set());
    return <div style={{
      width: '1000px',
      padding: '16px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '16px',
        color: '#333'
      }}>
          Row Content Expansion - Long Text Handling
        </h3>
        <p style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666',
        lineHeight: 1.5
      }}>
          <strong>Click the expand icon</strong> at the beginning of each row to expand/collapse ALL
          cells in that row. This example tests:
          <br />• Very long email addresses that should be ellipsed when collapsed
          <br />• Long text content that should wrap without breaking cell width constraints
          <br />• Proper word breaking for extremely long content
          <br />• Layout stability when transitioning between collapsed and expanded states
        </p>
        <div style={{
        border: '1px solid #e1e5e9',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
          <Table {...args} data={longTextData} primaryColumn={[{
          key: 'name',
          header: 'Full Name'
        }]} fixedColumns={longTextColumns} selectable={false} isRowsExpandable={true} expandedRowIds={[...expandedRows]} onToggleRowExpansion={id => {
          const newExpandedRows = new Set(expandedRows);
          if (newExpandedRows.has(id)) {
            newExpandedRows.delete(id);
          } else {
            newExpandedRows.add(id);
          }
          setExpandedRows(newExpandedRows);
        }} onToggleAllRowsExpansion={() => {
          if (expandedRows.size === longTextData.length) {
            setExpandedRows(new Set());
          } else {
            const allRows = new Set(longTextData.map(item => item.id));
            setExpandedRows(allRows);
          }
        }} />
        </div>
        <p style={{
        margin: '16px 0 0 0',
        fontSize: '12px',
        color: '#888',
        fontStyle: 'italic'
      }}>
          Test the table with your browser's developer tools at different widths to verify
          responsive behavior.
        </p>
      </div>;
  },
  args: {
    renderRowActions: undefined
  }
}`,...($e=(Ie=K.parameters)==null?void 0:Ie.docs)==null?void 0:$e.source}}};var Ve,Ue,Oe,Je,Ye;N.parameters={...N.parameters,docs:{...(Ve=N.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRowsSmall, setExpandedRowsSmall] = useState<Set<number | string>>(new Set([1]));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRowsDefault, setExpandedRowsDefault] = useState<Set<number | string>>(new Set([5]));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRowsLarge, setExpandedRowsLarge] = useState<Set<number | string>>(new Set([9]));
    const createData = (idOffset: number, size?: 'small' | 'medium' | 'large'): RowData[] => [{
      id: idOffset + 1,
      name: 'Anna Smith',
      age: 25,
      city: 'New York',
      department: 'Engineering',
      rowConfigs: size ? {
        size
      } : undefined
    }, {
      id: idOffset + 2,
      name: 'John Doe with a very long name that should wrap when expanded and demonstrate how the row height increases to accommodate multiple lines of text content',
      age: 32,
      city: 'San Francisco Bay Area, California, United States of America',
      department: 'Design and User Experience Research Department',
      rowConfigs: size ? {
        size
      } : undefined
    }, {
      id: idOffset + 3,
      name: 'Mike Davis',
      age: 28,
      city: 'Los Angeles',
      department: 'Marketing',
      rowConfigs: size ? {
        size
      } : undefined
    }, {
      id: idOffset + 4,
      name: 'Sarah Elizabeth Wilson-Montgomery III with an exceptionally long hyphenated surname that demonstrates text wrapping behavior in expanded table rows when the content exceeds the available column width',
      age: 35,
      city: 'Chicago Metropolitan Area',
      department: 'Sales and Business Development International Operations',
      rowConfigs: size ? {
        size
      } : undefined
    }];
    const smallData = createData(0, 'small');
    const defaultData = createData(4);
    const largeData = createData(8, 'large');
    const columns: FixedColumn[] = [{
      key: 'age',
      header: 'Age',
      align: 'right',
      width: 80
    }, {
      key: 'department',
      header: 'Department',
      width: 120
    }, {
      key: 'city',
      header: 'City',
      width: 120
    }];
    const primaryColumn: Column[] = [{
      key: 'name',
      header: 'Name'
    }];
    const renderTable = (title: string, subtitle: string, rowData: RowData[], expandedRows: Set<number | string>, setExpandedRows: React.Dispatch<React.SetStateAction<Set<number | string>>>) => <div style={{
      marginBottom: '32px'
    }}>
        <h4 style={{
        margin: '0 0 4px 0',
        fontSize: '14px',
        color: '#333'
      }}>{title}</h4>
        <p style={{
        margin: '0 0 12px 0',
        fontSize: '12px',
        color: '#666'
      }}>{subtitle}</p>
        <Table {...args} data={rowData} primaryColumn={primaryColumn} fixedColumns={columns} isRowsExpandable={true} expandedRowIds={[...expandedRows]} onToggleRowExpansion={id => {
        const newExpandedRows = new Set(expandedRows);
        if (newExpandedRows.has(id)) {
          newExpandedRows.delete(id);
        } else {
          newExpandedRows.add(id);
        }
        setExpandedRows(newExpandedRows);
      }} onToggleAllRowsExpansion={() => {
        if (expandedRows.size === rowData.length) {
          setExpandedRows(new Set());
        } else {
          const allRows = new Set(rowData.map(item => item.id));
          setExpandedRows(allRows);
        }
      }} />
      </div>;
    return <div style={{
      minWidth: '800px',
      maxWidth: '1000px'
    }}>
        <h3 style={{
        margin: '0 0 24px 0',
        fontSize: '18px',
        color: '#333'
      }}>
          Row Sizes with Expand - Testing Jump Fix
        </h3>
        <p style={{
        margin: '0 0 24px 0',
        fontSize: '14px',
        color: '#666'
      }}>
          Test expand/collapse on each table size. The row height should NOT change when
          expanding/collapsing (unless content requires more space).
        </p>

        {renderTable('Small Rows (44px)', 'rowConfigs: { size: "small" }', smallData, expandedRowsSmall, setExpandedRowsSmall)}

        {renderTable('Default Rows (64px)', 'No rowConfigs specified', defaultData, expandedRowsDefault, setExpandedRowsDefault)}

        {renderTable('Large Rows (80px)', 'rowConfigs: { size: "large" }', largeData, expandedRowsLarge, setExpandedRowsLarge)}
      </div>;
  }
}`,...(Oe=(Ue=N.parameters)==null?void 0:Ue.docs)==null?void 0:Oe.source},description:{story:`Demonstrates all row sizes (small: 44px, default: 64px, large: 80px) with expandable content.
Useful for testing that row heights behave correctly when expanding/collapsing cells with long text.`,...(Ye=(Je=N.parameters)==null?void 0:Je.docs)==null?void 0:Ye.description}}};var Ke,Xe,Ge,Qe,Ze;P.parameters={...P.parameters,docs:{...(Ke=P.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => {
    const rowSizesColumns: Column[] = [{
      key: 'name',
      header: 'Name'
    }];
    const rowSizesFixedColumns: FixedColumn[] = [{
      key: 'status',
      header: 'Status',
      width: 100
    }, {
      key: 'description',
      header: 'Description',
      width: 250
    }];
    const smallRowsData = [{
      id: 1,
      name: 'Small Row 1',
      description: 'Compact row for dense tables',
      status: 'Active',
      rowConfigs: {
        size: 'small' as const
      }
    }, {
      id: 2,
      name: 'Small Row 2',
      description: 'Height: 44px',
      status: 'Active',
      rowConfigs: {
        size: 'small' as const
      }
    }];
    const defaultRowsData = [{
      id: 1,
      name: 'Default Row 1',
      description: 'Standard row size',
      status: 'Active'
    }, {
      id: 2,
      name: 'Default Row 2',
      description: 'Height: 64px (no rowConfigs needed)',
      status: 'Active'
    }];
    const largeRowsData = [{
      id: 1,
      name: 'Large Row 1',
      description: 'Prominent row for emphasis',
      status: 'Active',
      rowConfigs: {
        size: 'large' as const
      }
    }, {
      id: 2,
      name: 'Large Row 2',
      description: 'Height: 80px',
      status: 'Active',
      rowConfigs: {
        size: 'large' as const
      }
    }];
    return <div style={{
      minWidth: '600px'
    }}>
        <div style={{
        marginBottom: '32px'
      }}>
          <h4 style={{
          margin: '0 0 8px 0'
        }}>Small (44px)</h4>
          <code style={{
          display: 'block',
          marginBottom: '8px',
          color: '#666',
          fontSize: '12px'
        }}>
            rowConfigs: {'{ size: "small" }'}
          </code>
          <Table data={smallRowsData} primaryColumn={rowSizesColumns[0]} fixedColumns={rowSizesFixedColumns} selectable={false} />
        </div>

        <div style={{
        marginBottom: '32px'
      }}>
          <h4 style={{
          margin: '0 0 8px 0'
        }}>Default (64px)</h4>
          <code style={{
          display: 'block',
          marginBottom: '8px',
          color: '#666',
          fontSize: '12px'
        }}>
            No rowConfigs needed
          </code>
          <Table data={defaultRowsData} primaryColumn={rowSizesColumns[0]} fixedColumns={rowSizesFixedColumns} selectable={false} />
        </div>

        <div>
          <h4 style={{
          margin: '0 0 8px 0'
        }}>Large (80px)</h4>
          <code style={{
          display: 'block',
          marginBottom: '8px',
          color: '#666',
          fontSize: '12px'
        }}>
            rowConfigs: {'{ size: "large" }'}
          </code>
          <Table data={largeRowsData} primaryColumn={rowSizesColumns[0]} fixedColumns={rowSizesFixedColumns} selectable={false} />
        </div>
      </div>;
  }
}`,...(Ge=(Xe=P.parameters)==null?void 0:Xe.docs)==null?void 0:Ge.source},description:{story:`Simple demonstration of row sizes without expand functionality.

Row sizes are configured via \`rowConfigs: { size: 'small' | 'medium' | 'large' }\` in each row data object.

Available sizes:
- **small**: 44px height - best for dense data tables
- **medium** (default): 64px height - standard table row
- **large**: 80px height - for tables with more visual prominence`,...(Ze=(Qe=P.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.description}}};var en,nn,tn,an,on;M.parameters={...M.parameters,docs:{...(en=M.parameters)==null?void 0:en.docs,source:{originalSource:`{
  render: () => <CustomHeaderDemo />
}`,...(tn=(nn=M.parameters)==null?void 0:nn.docs)==null?void 0:tn.source},description:{story:`Demonstrates how to customize the table header background color using CSS.

The Table component supports custom header styling via the \`headerClassName\` prop.
Pinned columns and expand cells will inherit the header background color automatically.

This is useful when you need to match the table header with your application's design,
for example, using a gray header on a white background or vice versa.`,...(on=(an=M.parameters)==null?void 0:an.docs)==null?void 0:on.description}}};const pt=["Default","FixedHeader","HorizontalScrollWithFixedHeaderControl","PinnedColumnsWithFixedHeader","ExpandableRows","ExpandableRowsWithDefaultState","CellExpansion","RowSizesWithExpand","RowSizes","CustomHeaderStyle"];export{K as CellExpansion,M as CustomHeaderStyle,$ as Default,J as ExpandableRows,Y as ExpandableRowsWithDefaultState,V as FixedHeader,U as HorizontalScrollWithFixedHeaderControl,O as PinnedColumnsWithFixedHeader,P as RowSizes,N as RowSizesWithExpand,pt as __namedExportsOrder,ct as default};
