import{j as e}from"./jsx-runtime-3169928d.js";import{r as p}from"./index-d33a4676.js";import{c as ln}from"./bind-f5c6fce5.js";import{S as ce,a as rn}from"./arrowUp-86f23e84.js";import{S as pe}from"./chevronDownDropdown-3c901902.js";import{C as me}from"./checkbox-24bb629b.js";import{T as dn}from"./tooltip-d85d779b.js";import{P as cn}from"./popover-f3624ffa.js";import{S as pn}from"./meatballMenu-3f4bf33c.js";import"./keyCodes-e5060420.js";import"./index-f454028f.js";import"./floating-ui.react-09d3bb8c.js";import"./floatingUi-59569704.js";const K=t=>typeof t=="string",mn="_table_12mbp_1",hn="_selectable_12mbp_56",un="_expanded_12mbp_52",wn="_label_12mbp_283",gn={table:mn,"fixed-header":"_fixed-header_12mbp_8","horizontally-scrollable-container":"_horizontally-scrollable-container_12mbp_14","table-header":"_table-header_12mbp_19","sticky-header":"_sticky-header_12mbp_25","horizontally-scrollable":"_horizontally-scrollable_12mbp_14","table-row":"_table-row_12mbp_47","expanded-cell":"_expanded-cell_12mbp_52",selectable:hn,"row-content-wrapper":"_row-content-wrapper_12mbp_60","table-row-content":"_table-row-content_12mbp_65","expand-cell":"_expand-cell_12mbp_81","size-small":"_size-small_12mbp_84","size-large":"_size-large_12mbp_95","table-body":"_table-body_12mbp_110","scrollable-body":"_scrollable-body_12mbp_116","table-header-cell":"_table-header-cell_12mbp_162","table-cell":"_table-cell_12mbp_163","action-menu-cell":"_action-menu-cell_12mbp_170","checkbox-cell":"_checkbox-cell_12mbp_195","expand-all-tooltip-wrapper":"_expand-all-tooltip-wrapper_12mbp_237","expand-all-tooltip-content":"_expand-all-tooltip-content_12mbp_246","expand-icon":"_expand-icon_12mbp_255",expanded:un,"primary-cell":"_primary-cell_12mbp_264",label:wn,"sortable-cell":"_sortable-cell_12mbp_294","align-right":"_align-right_12mbp_297","align-center":"_align-center_12mbp_303","pinned-column":"_pinned-column_12mbp_306"},T="asc",xn="desc",D=32,Le=100,yn=48,V=t=>t.toLowerCase()===T,J=(t,n)=>n?[...t].sort((o,s)=>{const i=o[n.key].content||o[n.key],r=s[n.key].content||s[n.key];return i<r?V(n.direction)?-1:1:i>r?V(n.direction)?1:-1:0}):t,fn=t=>t.map(n=>n.key),We=t=>V(t)?xn:T,v=t=>"primary"in t&&t.primary===!0,bn=t=>{var o;return`size-${((o=t.rowConfigs)==null?void 0:o.size)??"default"}`},Cn=(t,n,o,s,i)=>{let r=0;s&&(r+=D),i&&(r+=D);for(let u=0;u<t;u++){const m=n[u];if(v(m)){const l=o.current.get(m.key)||Le;r+=l}else{const l=m,c=K(l.width)?parseInt(l.width,10)||0:l.width;r+=c}}return r},M=(t,n,o,s,i,r,u)=>{const m={};if(!v(t)){const l=t;m.textAlign=l.align}if(n&&o!==void 0){const l=Cn(o,s,i,r,u);m.left=`${l}px`}return m},he=(t,n,o,s,i,r=!1)=>{const u=[];o&&u.push(`${D}px`),r&&s&&u.push(`${D}px`);const m=l=>{if(v(l)){const c=l,g=c.width?K(c.width)?c.width:`${c.width}px`:`${Le}px`;u.push(`minmax(${g}, 1fr)`)}else{const c=l,g=K(c.width)?c.width:`${c.width}px`;u.push(g)}};return t.forEach(m),n.forEach(m),i&&u.push(`${yn}px`),u.join(" ")},Sn=({primaryColumns:t,fixedColumns:n,pinnedColumnKeys:o})=>p.useMemo(()=>{const s=[],i=[];return t.forEach(r=>{const u={...r,primary:!0};o.includes(r.key)?s.push(u):i.push(u)}),n.forEach(r=>{o.includes(r.key)?s.push(r):i.push(r)}),{pinnedColumns:s,scrollableColumns:i}},[t,n,o]),kn=()=>{const[t,n]=p.useState(null),[o,s]=p.useState(null),i=p.useCallback(l=>{n(l)},[]),r=p.useCallback(()=>{n(null)},[]),u=p.useCallback(l=>{s(l)},[]),m=p.useCallback(()=>{s(null)},[]);return{hoveredColumn:t,hoveredRow:o,handleColumnMouseEnter:i,handleColumnMouseLeave:r,handleRowMouseEnter:u,handleRowMouseLeave:m}},Rn=({primaryColumns:t,fixedColumns:n,expandedRowIds:o,onToggleRowExpansion:s})=>{const[i,r]=p.useState(new Set);p.useEffect(()=>{const l=[...t.map(g=>g.key),...n.map(g=>g.key)],c=new Set;o.forEach(g=>{l.forEach(w=>{c.add(`${g}-${w}`)})}),r(g=>{if(g.size===c.size){let w=!0;if(g.forEach(d=>{c.has(d)||(w=!1)}),w)return g}return c})},[o,t,n]);const u=p.useCallback(l=>{const c=new Set(i),g=o.includes(l),w=[...t.map(d=>d.key),...n.map(d=>d.key)];g?w.forEach(d=>{const h=`${l}-${d}`;c.delete(h)}):w.forEach(d=>{const h=`${l}-${d}`;c.add(h)}),r(c),s(l)},[i,o,t,n,s]),m=p.useCallback((l,c)=>{const g=`${l}-${c}`;return i.has(g)},[i]);return{expandedCells:i,handleToggleRowExpansion:u,isCellExpanded:m}},vn=()=>{const t=p.useRef(new Map),n=p.useCallback(o=>s=>{if(!s)return;const i=s.getBoundingClientRect().width;i>0&&t.current.set(o,i)},[]);return{columnWidthsRef:t,setCellRef:n}},x=ln.bind(gn),ue=({column:t})=>{const n=p.useRef(null),[o,s]=p.useState(!1);return p.useEffect(()=>{if(n.current){const i=n.current.offsetWidth,r=n.current.scrollWidth;s(r>i)}},[t.header]),e.jsx("span",{ref:n,title:o?t.header:void 0,children:t.header})},k=({data:t,primaryColumn:n,fixedColumns:o,renderRowActions:s,className:i="",rowClassName:r="",headerClassName:u="",selectable:m=!1,selectedRowIds:l=[],sortingDirection:c=T,sortingColumn:g,sortableColumns:w,isHeaderFixed:d=!1,isHorizontallyScrollable:h=!1,pinnedColumnKeys:b=[],isRowsExpandable:y=!1,expandedRowIds:E=[],isAllExpandedByDefault:Q,expandAllTooltip:Z,onChangeSorting:Ie=()=>{},onToggleRowSelection:qe=()=>{},onToggleAllRowsSelection:Ve=()=>{},onToggleRowExpansion:Je=()=>{},onToggleAllRowsExpansion:Oe=()=>{}})=>{const A=p.useMemo(()=>Array.isArray(n)?n:[n],[n]),S=g??A[0],_=w??fn([...A,...o]),{pinnedColumns:R,scrollableColumns:j}=Sn({primaryColumns:A,fixedColumns:o,pinnedColumnKeys:b}),{hoveredColumn:ee,hoveredRow:Ue,handleColumnMouseEnter:ne,handleColumnMouseLeave:te,handleRowMouseEnter:Ye,handleRowMouseLeave:Xe}=kn(),{columnWidthsRef:z,setCellRef:ae}=vn(),{handleToggleRowExpansion:Ge,isCellExpanded:se}=Rn({primaryColumns:A,fixedColumns:o,expandedRowIds:E,onToggleRowExpansion:Je}),oe=a=>{_.includes(a)&&Ie({key:a,direction:c})},Ke=a=>{qe(a)},Qe=()=>{Ve()},Ze=()=>{Oe()},le=a=>_.includes(a)?(S==null?void 0:S.key)===a?V(c)?e.jsx(ce,{}):e.jsx(rn,{}):e.jsx(ce,{}):null,en=t.every(a=>l.includes(a.id)),nn=t.some(a=>l.includes(a.id)),ie=(l==null?void 0:l.length)>0,tn=t.every(a=>E.includes(a.id)),an=Q!==void 0?Q:tn,sn=he(R,j,y,m,!!s,!1),on=he(R,j,y,m,!!s,!0),re=e.jsx("button",{onClick:Ze,"aria-label":"Toggle all rows expansion",children:e.jsx("span",{className:x("expand-icon",{expanded:an}),children:e.jsx(pe,{})})});return e.jsxs("div",{className:x("table",{"fixed-header":d,"horizontally-scrollable-container":d&&h},i),children:[e.jsxs("div",{className:x("table-header",{"sticky-header":d,"horizontally-scrollable":h},u),style:{gridTemplateColumns:on},children:[m&&e.jsx("div",{className:x("table-header-cell","checkbox-cell"),style:{left:y?`${D}px`:"0"},children:ie&&e.jsx(me,{value:en,partiallyChecked:nn,onChange:Qe,className:x("checkbox-cell")})}),y&&e.jsx("div",{className:x("table-header-cell","expand-cell"),style:{left:"0"},children:Z?e.jsx(dn,{content:Z,placement:"top",wrapperClassName:x("expand-all-tooltip-wrapper"),contentClassName:x("expand-all-tooltip-content"),children:re}):re}),R.map((a,N)=>e.jsx("button",{className:x("table-header-cell","pinned-column",{[`align-${a.align}`]:"align"in a,"primary-cell":v(a),"sortable-cell":_.includes(a.key)}),style:M(a,!0,N,R,z,y,m),children:e.jsxs("div",{className:x("label"),onClick:()=>oe(a.key),onMouseEnter:()=>ne(a.key),onMouseLeave:te,children:[e.jsx(ue,{column:a}),(ee===a.key||(S==null?void 0:S.key)===a.key)&&le(a.key)]})},a.key)),j.map(a=>e.jsx("button",{className:x("table-header-cell",{[`align-${a.align}`]:"align"in a,"primary-cell":v(a),"sortable-cell":_.includes(a.key)}),style:M(a,!1,void 0,R,z,y,m),children:e.jsxs("div",{className:x("label"),onClick:()=>oe(a.key),onMouseEnter:()=>ne(a.key),onMouseLeave:te,children:[e.jsx(ue,{column:a}),(ee===a.key||(S==null?void 0:S.key)===a.key)&&le(a.key)]})},a.key)),s&&e.jsx("div",{className:x("table-header-cell","action-menu-cell")})]}),e.jsx("div",{className:x("table-body",{"scrollable-body":d,"horizontally-scrollable":h}),children:t.map((a,N)=>e.jsxs("div",{className:x("table-row",bn(a),r,{selectable:m}),onMouseEnter:()=>Ye(N),onMouseLeave:Xe,children:[m&&e.jsx("div",{className:x("table-cell","checkbox-cell"),style:{left:y?`${D}px`:"0"},children:(ie||Ue===N)&&e.jsx(me,{value:l.includes(a.id),onChange:()=>Ke(a.id),className:x("checkbox-cell")})}),e.jsx("div",{className:x("row-content-wrapper"),children:e.jsxs("div",{className:x("table-row-content"),style:{gridTemplateColumns:sn},children:[y&&e.jsx("div",{className:x("table-cell","expand-cell"),style:{left:"0"},children:e.jsx("button",{onClick:()=>Ge(a.id),"aria-label":E.includes(a.id)?"Collapse row":"Expand row","aria-expanded":E.includes(a.id),children:e.jsx("span",{className:x("expand-icon",{expanded:E.includes(a.id)}),children:e.jsx(pe,{})})})}),R.map((f,U)=>{const P=se(a.id,f.key),de=v(f);return e.jsx("div",{ref:de?ae(f.key):void 0,className:x("table-cell","pinned-column",{"primary-cell":de,"expanded-cell":P}),style:M(f,!0,U,R,z,y,m),children:a[f.key].component||a[f.key].content||a[f.key]},f.key)}),j.map(f=>{const U=se(a.id,f.key),P=v(f);return e.jsx("div",{ref:P?ae(f.key):void 0,className:x("table-cell",{"primary-cell":P,"expanded-cell":U}),style:M(f,!1,void 0,R,z,y,m),children:a[f.key].component||a[f.key].content||a[f.key]},f.key)}),s&&e.jsx("div",{className:x("table-cell","action-menu-cell"),children:s(a.metaData)})]})})]},a.id))})]})};k.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"RowData"}],raw:"RowData[]"},description:""},primaryColumn:{required:!0,tsType:{name:"union",raw:"Column | Column[]",elements:[{name:"Column"},{name:"Array",elements:[{name:"Column"}],raw:"Column[]"}]},description:""},fixedColumns:{required:!0,tsType:{name:"Array",elements:[{name:"FixedColumn"}],raw:"FixedColumn[]"},description:""},renderRowActions:{required:!1,tsType:{name:"signature",type:"function",raw:"(metaData?: MetaData) => ReactNode",signature:{arguments:[{type:{name:"MetaData"},name:"metaData"}],return:{name:"ReactNode"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},headerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rowClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortingDirection:{required:!1,tsType:{name:"union",raw:"typeof ASC | typeof DESC | Uppercase<typeof ASC | typeof DESC>",elements:[{name:"ASC"},{name:"DESC"},{name:"Uppercase",elements:[{name:"union",raw:"typeof ASC | typeof DESC",elements:[{name:"ASC"},{name:"DESC"}]}],raw:"Uppercase<typeof ASC | typeof DESC>"}]},description:"",defaultValue:{value:"'asc'",computed:!1}},sortingColumn:{required:!1,tsType:{name:"Column"},description:""},sortableColumns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isHeaderFixed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontallyScrollable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pinnedColumnKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},isRowsExpandable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},setExpandedRowIds:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Set",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Set<string | number>"}],raw:"SetStateAction<Set<string | number>>"}],raw:"Dispatch<SetStateAction<Set<string | number>>>"},description:""},isAllExpandedByDefault:{required:!1,tsType:{name:"boolean"},description:""},expandAllTooltip:{required:!1,tsType:{name:"ReactNode"},description:""},onChangeSorting:{required:!1,tsType:{name:"signature",type:"function",raw:"(sortConfig?: SortConfig) => void",signature:{arguments:[{type:{name:"SortConfig"},name:"sortConfig"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const $n={title:"Tables & Lists/Table",component:k,parameters:{layout:"centered"},tags:["autodocs"],args:{selectable:!0}},O=()=>e.jsx(cn,{placement:"bottom-end",content:e.jsxs("div",{children:[e.jsx("p",{children:"Edit"}),e.jsx("p",{children:"Rename"})]}),children:e.jsx(pn,{})}),Y=[{id:1,name:{content:"Sam",component:e.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],C=[{key:"name",header:"Name"}],we=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],F={render:t=>{const[n,o]=p.useState({key:C[0].key,direction:T}),[s,i]=p.useState(C[0]),[r,u]=p.useState(T),m=J(Y,n),[l,c]=p.useState(m),[g,w]=p.useState(new Set([]));return p.useEffect(()=>{const{key:d,direction:h}=n,b=[...we,...C].find(y=>y.key===d);u(h),i(b)},[n]),e.jsx("div",{style:{minWidth:"700px"},children:e.jsx(k,{...t,primaryColumn:C,data:l,sortableColumns:[C[0].key],onChangeSorting:(d=n)=>{let{direction:h}=d;const{key:b}=d;h=We(h);const y=J(l,{key:b,direction:h});o({key:b,direction:h}),c(y)},onToggleRowSelection:d=>{const h=new Set(g);h.has(d)?h.delete(d):h.add(d),w(h)},onToggleAllRowsSelection:()=>{if(g.size===Y.length)w(new Set);else{const d=new Set(Y.map(h=>h.id));w(d)}},selectedRowIds:[...g],sortingColumn:s,sortingDirection:r})})},args:{fixedColumns:we,renderRowActions:O,selectable:!0}},q=[{id:1,name:"John Doe",email:"john.doe@example.com",phone:"+1-555-123-4567",address:"123 Main Street, New York, NY 10001",department:"Engineering",role:"Senior Software Engineer",salary:"$120,000",startDate:"2020-01-15",status:"Active",manager:"Jane Smith",projects:"Project Alpha, Project Beta",rowConfigs:{size:"small"}},{id:2,name:"Jane Smith",email:"jane.smith@example.com",phone:"+1-555-987-6543",address:"456 Oak Avenue, Los Angeles, CA 90210",department:"Marketing",role:"Marketing Director",salary:"$95,000",startDate:"2019-03-20",status:"Active",manager:"Robert Johnson",projects:"Campaign X, Campaign Y",rowConfigs:{size:"small"}},{id:3,name:"Mike Wilson",email:"mike.wilson@example.com",phone:"+1-555-456-7890",address:"789 Pine Road, Chicago, IL 60601",department:"Sales",role:"Sales Representative",salary:"$75,000",startDate:"2021-06-10",status:"Active",manager:"Sarah Davis",projects:"Client Onboarding, Lead Generation",rowConfigs:{size:"small"}},{id:4,name:"Sarah Davis",email:"sarah.davis@example.com",phone:"+1-555-234-5678",address:"321 Elm Street, Houston, TX 77001",department:"HR",role:"HR Manager",salary:"$85,000",startDate:"2018-09-12",status:"Active",manager:"Michael Brown",projects:"Employee Onboarding, Policy Updates",rowConfigs:{size:"small"}},{id:5,name:"Robert Johnson",email:"robert.johnson@example.com",phone:"+1-555-345-6789",address:"654 Maple Drive, Phoenix, AZ 85001",department:"Finance",role:"Financial Analyst",salary:"$78,000",startDate:"2020-11-08",status:"Active",manager:"Emily White",projects:"Budget Planning, Cost Analysis",rowConfigs:{size:"small"}},{id:6,name:"Emily White",email:"emily.white@example.com",phone:"+1-555-456-7891",address:"987 Cedar Lane, Philadelphia, PA 19101",department:"Operations",role:"Operations Manager",salary:"$110,000",startDate:"2017-05-22",status:"Active",manager:"David Green",projects:"Process Optimization, Quality Control",rowConfigs:{size:"small"}},{id:7,name:"David Green",email:"david.green@example.com",phone:"+1-555-567-8901",address:"147 Birch Avenue, San Antonio, TX 78201",department:"Engineering",role:"Lead Developer",salary:"$135,000",startDate:"2016-02-14",status:"Active",manager:"Lisa Thompson",projects:"Architecture Review, Team Mentoring",rowConfigs:{size:"small"}},{id:8,name:"Lisa Thompson",email:"lisa.thompson@example.com",phone:"+1-555-678-9012",address:"258 Spruce Court, San Diego, CA 92101",department:"Product",role:"Product Manager",salary:"$105,000",startDate:"2019-08-30",status:"Active",manager:"Tom Anderson",projects:"Feature Planning, User Research",rowConfigs:{size:"small"}},{id:9,name:"Tom Anderson",email:"tom.anderson@example.com",phone:"+1-555-789-0123",address:"369 Willow Street, Dallas, TX 75201",department:"Design",role:"UX Designer",salary:"$88,000",startDate:"2021-01-18",status:"Active",manager:"Anna Martinez",projects:"UI Redesign, User Testing",rowConfigs:{size:"small"}},{id:10,name:"Anna Martinez",email:"anna.martinez@example.com",phone:"+1-555-890-1234",address:"741 Poplar Boulevard, San Jose, CA 95101",department:"QA",role:"QA Engineer",salary:"$82,000",startDate:"2020-07-25",status:"Active",manager:"John Doe",projects:"Automation Testing, Bug Tracking",rowConfigs:{size:"small"}}],Be=[{key:"name",header:"Full Name"}],$e=[{key:"email",header:"Email Address",width:200},{key:"phone",header:"Phone Number",width:150},{key:"address",header:"Address",width:250},{key:"department",header:"Department",width:120},{key:"role",header:"Job Role",width:180},{key:"salary",header:"Salary",width:100},{key:"startDate",header:"Start Date",width:120},{key:"status",header:"Status",width:100},{key:"manager",header:"Manager",width:150},{key:"projects",header:"Current Projects",width:200}],Tn=t=>{const n=["John","Jane","Mike","Sarah","David","Emma","Chris","Lisa","Tom","Anna"],o=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose"],s=["Engineering","Marketing","Sales","HR","Finance","Operations","Design","Product","Legal","Support"];return Array.from({length:t},(i,r)=>({id:r+1,name:`${n[r%n.length]} ${r+1}`,age:22+r%40,city:o[r%o.length],department:s[r%s.length],email:`user${r+1}@example.com`,salary:`$${(5e4+r*1e3%1e5).toLocaleString()}`}))},X=Tn(50),ge=[{key:"age",header:"Age",width:80,align:"right"},{key:"city",header:"City",width:120},{key:"department",header:"Department",width:120},{key:"email",header:"Email",width:200},{key:"salary",header:"Salary",width:100,align:"right"}],H={render:t=>{const[n,o]=p.useState({key:C[0].key,direction:T}),[s,i]=p.useState(C[0]),[r,u]=p.useState(T),m=J(X,n),[l,c]=p.useState(m),[g,w]=p.useState(new Set([]));return p.useEffect(()=>{const{key:d,direction:h}=n,b=[...ge,...C].find(y=>y.key===d);u(h),i(b)},[n]),e.jsxs("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Fixed Header Table with Scrollable Body"}),e.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",overflow:"auto"},children:e.jsx(k,{...t,data:l,primaryColumn:C,fixedColumns:ge,isHeaderFixed:!0,sortableColumns:[C[0].key,"age","department"],onChangeSorting:(d=n)=>{let{direction:h}=d;const{key:b}=d;h=We(h);const y=J(l,{key:b,direction:h});o({key:b,direction:h}),c(y)},onToggleRowSelection:d=>{const h=new Set(g);h.has(d)?h.delete(d):h.add(d),w(h)},onToggleAllRowsSelection:()=>{if(g.size===X.length)w(new Set);else{const d=new Set(X.map(h=>h.id));w(d)}},selectedRowIds:[...g],sortingColumn:s,sortingDirection:r})})]})},args:{selectable:!0,renderRowActions:O}},L={render:t=>e.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Fixed Header + Horizontal Scroll: Both scrollbars visible when needed"}),e.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",position:"relative"},children:e.jsx(k,{...t,data:q,primaryColumn:Be,fixedColumns:$e,isHorizontallyScrollable:!0,isHeaderFixed:!0})})]}),args:{selectable:!1,renderRowActions:O}},W={render:t=>{const[n,o]=p.useState(new Set([]));return e.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Pinned Columns + Fixed Header: Name and Email pinned with vertical and horizontal scrolling"}),e.jsx("div",{className:"storybook-table-wrapper",style:{width:"550px",height:"calc(100% - 50px)",position:"relative"},children:e.jsx(k,{...t,data:q,primaryColumn:Be,fixedColumns:$e,isHorizontallyScrollable:!0,isHeaderFixed:!0,pinnedColumnKeys:["name","email","department"],onToggleRowSelection:s=>{const i=new Set(n);i.has(s)?i.delete(s):i.add(s),o(i)},onToggleAllRowsSelection:()=>{if(n.size===q.length)o(new Set);else{const s=new Set(q.map(i=>i.id));o(s)}},selectedRowIds:[...n]})})]})},args:{selectable:!0,renderRowActions:O}},B={render:t=>{const[n,o]=p.useState(new Set([1])),[s,i]=p.useState(new Set([])),r=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"sam.johnson@example.com"},{id:2,name:"Anna Smith",age:32,city:"San Francisco",department:"Design",email:"anna.smith@example.com"},{id:3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",email:"mike.davis@example.com"},{id:4,name:"Sarah Wilson",age:35,city:"Chicago",department:"Sales",email:"sarah.wilson@example.com"}],u=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:100},{key:"city",header:"City",width:100}],m=[{key:"name",header:"Name"}];return e.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows Example"}),e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Click the expand/collapse icons to view detailed information for each row. Rows can be expanded and collapsed independently."}),e.jsx(k,{...t,data:r,primaryColumn:m,fixedColumns:u,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...n],setExpandedRowIds:o,onToggleRowExpansion:l=>{const c=new Set(n);c.has(l)?c.delete(l):c.add(l),o(c)},onToggleAllRowsExpansion:()=>{if(n.size===r.length)o(new Set);else{const l=new Set(r.map(c=>c.id));o(l)}},selectedRowIds:[...s],onToggleRowSelection:l=>{const c=new Set(s);c.has(l)?c.delete(l):c.add(l),i(c)},onToggleAllRowsSelection:()=>{if(s.size===r.length)i(new Set);else{const l=new Set(r.map(c=>c.id));i(l)}}})]})},args:{selectable:!0}},$={render:t=>{const[n,o]=p.useState(new Set([1,2,3,4])),[s,i]=p.useState(!0),[r,u]=p.useState(new Set([])),m=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"anna.smith@example.com"},{id:2,name:"Mike Davis",age:32,city:"San Francisco",department:"Design",email:"mike.davis@example.com"},{id:3,name:"Sarah Wilson",age:28,city:"Los Angeles",department:"Marketing",email:"sarah.wilson@example.com"},{id:4,name:"John Brown",age:35,city:"Chicago",department:"Sales",email:"john.brown@example.com"}],l=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],c=[{key:"name",header:"Name"}],g=s?"Expanded by default":"Collapsed by default";return e.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows with Default State"}),e.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Demonstrates ",e.jsx("strong",{children:"isAllExpandedByDefault"})," and ",e.jsx("strong",{children:"expandAllTooltip"})," ","props. The expandAll icon shows the default state regardless of individual row states. Hover over the expandAll icon to see the tooltip."]}),e.jsx(k,{...t,data:m,primaryColumn:c,fixedColumns:l,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...n],isAllExpandedByDefault:s,expandAllTooltip:g,onToggleRowExpansion:w=>{const d=new Set(n);d.has(w)?d.delete(w):d.add(w),o(d)},onToggleAllRowsExpansion:()=>{const w=!s;i(w),o(w?new Set(m.map(d=>d.id)):new Set)},selectedRowIds:[...r],onToggleRowSelection:w=>{const d=new Set(r);d.has(w)?d.delete(w):d.add(w),u(d)},onToggleAllRowsSelection:()=>{if(r.size===m.length)u(new Set);else{const w=new Set(m.map(d=>d.id));u(w)}}})]})},args:{selectable:!0}},G=[{id:1,name:"John Alexander Maximilian Winchester-Blackwood III",description:"This is long text but anyway no matter ellipsed or opened it should not overcome his width it can be brake. When you click on this cell, it will expand to show the full content without ellipsis truncation, and the text should wrap properly within the cell boundaries without breaking the table layout.",shortText:"Brief note",longTitle:"Senior Vice President of Engineering and Technology Development for Enterprise Solutions and Digital Transformation Initiatives",email:"john.alexander.maximilian.winchester.blackwood.third@very-long-company-name-example.com",notes:"This is a comprehensive test of how the table handles extremely long content that would normally break layouts. The content should be properly contained within cell boundaries."},{id:2,name:"Maria Elena Rodriguez-Martinez",description:"Another extremely lengthy description that showcases the cell expansion capabilities. This description contains detailed information about the person, their role, responsibilities, and achievements. The purpose is to demonstrate how users can easily expand cells to read full content when the default view shows only a truncated version with ellipsis.",shortText:"Quick summary here",longTitle:"Chief Marketing Officer and Head of Brand Strategy for Global Markets and Customer Experience Enhancement",email:"maria.elena.rodriguez.martinez@another-extremely-long-domain-name.example.org",notes:"Testing various content lengths and how they behave in both collapsed and expanded states. The text should wrap appropriately without overflowing."},{id:3,name:"Robert James Thompson",description:"A comprehensive description that tests the expand functionality with moderate length content. This shows how the feature works with different content lengths and provides a good example of real-world usage.",shortText:"Standard",longTitle:"Director of Operations",email:"robert.thompson@company.com",notes:"Short note about this person and their current projects."},{id:4,name:"Dr. Elizabeth Catherine Pemberton-Williams, PhD, MBA, CISSP",description:"This cell contains an exceptionally detailed description that really pushes the limits of what might be considered reasonable content length. It includes professional background, educational achievements, current responsibilities, ongoing projects, future goals, and various other details that would typically require a much larger display area.",shortText:"Complex background",longTitle:"Chief Technology Officer and Principal Software Architect for Distributed Systems and Cloud Infrastructure with specialization in Cybersecurity and Data Analytics",email:"dr.elizabeth.catherine.pemberton.williams.phd.mba.cissp@enterprise-solutions-technology-consulting.example.net",notes:"Comprehensive notes about professional achievements, certifications, ongoing projects, and future development plans. This tests the maximum reasonable content length."}],Dn=[{key:"description",header:"Description",width:200},{key:"longTitle",header:"Job Title",width:120},{key:"email",header:"Email Address",width:100},{key:"shortText",header:"Type",width:100},{key:"notes",header:"Notes",width:100}],I={render:t=>{const[n,o]=p.useState(new Set);return e.jsxs("div",{style:{width:"1000px",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Row Content Expansion - Long Text Handling"}),e.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666",lineHeight:1.5},children:[e.jsx("strong",{children:"Click the expand icon"})," at the beginning of each row to expand/collapse ALL cells in that row. This example tests:",e.jsx("br",{}),"• Very long email addresses that should be ellipsed when collapsed",e.jsx("br",{}),"• Long text content that should wrap without breaking cell width constraints",e.jsx("br",{}),"• Proper word breaking for extremely long content",e.jsx("br",{}),"• Layout stability when transitioning between collapsed and expanded states"]}),e.jsx("div",{style:{border:"1px solid #e1e5e9",borderRadius:"8px",overflow:"hidden"},children:e.jsx(k,{...t,data:G,primaryColumn:[{key:"name",header:"Full Name"}],fixedColumns:Dn,selectable:!1,isRowsExpandable:!0,expandedRowIds:[...n],onToggleRowExpansion:s=>{const i=new Set(n);i.has(s)?i.delete(s):i.add(s),o(i)},onToggleAllRowsExpansion:()=>{if(n.size===G.length)o(new Set);else{const s=new Set(G.map(i=>i.id));o(s)}}})}),e.jsx("p",{style:{margin:"16px 0 0 0",fontSize:"12px",color:"#888",fontStyle:"italic"},children:"Test the table with your browser's developer tools at different widths to verify responsive behavior."})]})},args:{renderRowActions:void 0}};var xe,ye,fe;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(fe=(ye=F.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var be,Ce,Se;H.parameters={...H.parameters,docs:{...(be=H.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Se=(Ce=H.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var ke,Re,ve;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(ve=(Re=L.parameters)==null?void 0:Re.docs)==null?void 0:ve.source}}};var Te,De,Ee;W.parameters={...W.parameters,docs:{...(Te=W.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ee=(De=W.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var Ae,_e,je;B.parameters={...B.parameters,docs:{...(Ae=B.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(je=(_e=B.parameters)==null?void 0:_e.docs)==null?void 0:je.source}}};var ze,Ne,Pe;$.parameters={...$.parameters,docs:{...(ze=$.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Pe=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};var Me,Fe,He;I.parameters={...I.parameters,docs:{...(Me=I.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(He=(Fe=I.parameters)==null?void 0:Fe.docs)==null?void 0:He.source}}};const In=["Default","FixedHeader","HorizontalScrollWithFixedHeaderControl","PinnedColumnsWithFixedHeader","ExpandableRows","ExpandableRowsWithDefaultState","CellExpansion"];export{I as CellExpansion,F as Default,B as ExpandableRows,$ as ExpandableRowsWithDefaultState,H as FixedHeader,L as HorizontalScrollWithFixedHeaderControl,W as PinnedColumnsWithFixedHeader,In as __namedExportsOrder,$n as default};
