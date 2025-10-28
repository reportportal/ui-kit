import{j as e}from"./jsx-runtime-3169928d.js";import{r as h}from"./index-d33a4676.js";import{c as Ge}from"./bind-f5c6fce5.js";import{S as oe,a as Ke}from"./arrowUp-86f23e84.js";import{S as se}from"./chevronDownDropdown-3c901902.js";import{C as re}from"./checkbox-24bb629b.js";import{P as Qe}from"./popover-e0278083.js";import{S as Ze}from"./meatballMenu-3f4bf33c.js";import"./keyCodes-e5060420.js";import"./floating-ui.react-7da7fc58.js";import"./floating-ui.react-dom-4a121add.js";import"./index-f454028f.js";const Ae=a=>typeof a=="string",en="_table_12bpb_1",nn="_selectable_12bpb_56",tn="_expanded_12bpb_52",an="_label_12bpb_269",on={table:en,"fixed-header":"_fixed-header_12bpb_8","horizontally-scrollable-container":"_horizontally-scrollable-container_12bpb_14","table-header":"_table-header_12bpb_19","sticky-header":"_sticky-header_12bpb_25","horizontally-scrollable":"_horizontally-scrollable_12bpb_14","table-row":"_table-row_12bpb_47","expanded-cell":"_expanded-cell_12bpb_52",selectable:nn,"row-content-wrapper":"_row-content-wrapper_12bpb_60","table-row-content":"_table-row-content_12bpb_65","expand-cell":"_expand-cell_12bpb_81","size-small":"_size-small_12bpb_84","size-large":"_size-large_12bpb_95","table-body":"_table-body_12bpb_110","scrollable-body":"_scrollable-body_12bpb_116","table-header-cell":"_table-header-cell_12bpb_162","table-cell":"_table-cell_12bpb_163","action-menu-cell":"_action-menu-cell_12bpb_170","checkbox-cell":"_checkbox-cell_12bpb_195","expand-icon":"_expand-icon_12bpb_241",expanded:tn,"primary-cell":"_primary-cell_12bpb_250",label:an,"sortable-cell":"_sortable-cell_12bpb_273","align-right":"_align-right_12bpb_276","align-center":"_align-center_12bpb_282","pinned-column":"_pinned-column_12bpb_285"},T="asc",sn="desc",D=32,Ee=100,rn=48,V=a=>a.toLowerCase()===T,B=(a,n)=>n?[...a].sort((l,o)=>{const r=l[n.key].content||l[n.key],i=o[n.key].content||o[n.key];return r<i?V(n.direction)?-1:1:r>i?V(n.direction)?1:-1:0}):a,ln=a=>a.map(n=>n.key),_e=a=>V(a)?sn:T,v=a=>"primary"in a&&a.primary===!0,dn=a=>{var l;return`size-${((l=a.rowConfigs)==null?void 0:l.size)??"default"}`},cn=(a,n,l,o,r)=>{let i=0;o&&(i+=D),r&&(i+=D);for(let u=0;u<a;u++){const m=n[u];if(v(m)){const s=l.current.get(m.key)||Ee;i+=s}else{const s=m,c=Ae(s.width)?parseInt(s.width,10)||0:s.width;i+=c}}return i},M=(a,n,l,o,r,i,u)=>{const m={};if(!v(a)){const s=a;m.textAlign=s.align}if(n&&l!==void 0){const s=cn(l,o,r,i,u);m.left=`${s}px`}return m},le=(a,n,l,o,r,i=!1)=>{const u=[];l&&u.push(`${D}px`),i&&o&&u.push(`${D}px`);const m=s=>{if(v(s))u.push(`minmax(${Ee}px, 1fr)`);else{const c=s,g=Ae(c.width)?c.width:`${c.width}px`;u.push(g)}};return a.forEach(m),n.forEach(m),r&&u.push(`${rn}px`),u.join(" ")},pn=({primaryColumns:a,fixedColumns:n,pinnedColumnKeys:l})=>h.useMemo(()=>{const o=[],r=[];return a.forEach(i=>{const u={...i,primary:!0};l.includes(i.key)?o.push(u):r.push(u)}),n.forEach(i=>{l.includes(i.key)?o.push(i):r.push(i)}),{pinnedColumns:o,scrollableColumns:r}},[a,n,l]),mn=()=>{const[a,n]=h.useState(null),[l,o]=h.useState(null),r=h.useCallback(s=>{n(s)},[]),i=h.useCallback(()=>{n(null)},[]),u=h.useCallback(s=>{o(s)},[]),m=h.useCallback(()=>{o(null)},[]);return{hoveredColumn:a,hoveredRow:l,handleColumnMouseEnter:r,handleColumnMouseLeave:i,handleRowMouseEnter:u,handleRowMouseLeave:m}},hn=({primaryColumns:a,fixedColumns:n,expandedRowIds:l,onToggleRowExpansion:o})=>{const[r,i]=h.useState(new Set);h.useEffect(()=>{const s=[...a.map(g=>g.key),...n.map(g=>g.key)],c=new Set;l.forEach(g=>{s.forEach(x=>{c.add(`${g}-${x}`)})}),i(g=>{if(g.size===c.size){let x=!0;if(g.forEach(d=>{c.has(d)||(x=!1)}),x)return g}return c})},[l,a,n]);const u=h.useCallback(s=>{const c=new Set(r),g=l.includes(s),x=[...a.map(d=>d.key),...n.map(d=>d.key)];g?x.forEach(d=>{const p=`${s}-${d}`;c.delete(p)}):x.forEach(d=>{const p=`${s}-${d}`;c.add(p)}),i(c),o(s)},[r,l,a,n,o]),m=h.useCallback((s,c)=>{const g=`${s}-${c}`;return r.has(g)},[r]);return{expandedCells:r,handleToggleRowExpansion:u,isCellExpanded:m}},un=()=>{const a=h.useRef(new Map),n=h.useCallback(l=>o=>{if(!o)return;const r=o.getBoundingClientRect().width;r>0&&a.current.set(l,r)},[]);return{columnWidthsRef:a,setCellRef:n}},w=Ge.bind(on),R=({data:a,primaryColumn:n,fixedColumns:l,renderRowActions:o,className:r="",rowClassName:i="",headerClassName:u="",selectable:m=!1,selectedRowIds:s=[],sortingDirection:c=T,sortingColumn:g,sortableColumns:x,isHeaderFixed:d=!1,isHorizontallyScrollable:p=!1,pinnedColumnKeys:f=[],isRowsExpandable:y=!1,expandedRowIds:A=[],onChangeSorting:Ne=()=>{},onToggleRowSelection:Pe=()=>{},onToggleAllRowsSelection:Me=()=>{},onToggleRowExpansion:He=()=>{},onToggleAllRowsExpansion:Le=()=>{}})=>{const E=h.useMemo(()=>Array.isArray(n)?n:[n],[n]),k=g??E[0],_=x??ln([...E,...l]),{pinnedColumns:S,scrollableColumns:j}=pn({primaryColumns:E,fixedColumns:l,pinnedColumnKeys:f}),{hoveredColumn:X,hoveredRow:Fe,handleColumnMouseEnter:G,handleColumnMouseLeave:K,handleRowMouseEnter:$e,handleRowMouseLeave:We}=mn(),{columnWidthsRef:z,setCellRef:Q}=un(),{handleToggleRowExpansion:qe,isCellExpanded:Z}=hn({primaryColumns:E,fixedColumns:l,expandedRowIds:A,onToggleRowExpansion:He}),ee=t=>{_.includes(t)&&Ne({key:t,direction:c})},Ie=t=>{Pe(t)},Ve=()=>{Me()},Be=()=>{Le()},ne=t=>_.includes(t)?(k==null?void 0:k.key)===t?V(c)?e.jsx(oe,{}):e.jsx(Ke,{}):e.jsx(oe,{}):null,Oe=a.every(t=>s.includes(t.id)),Je=a.some(t=>s.includes(t.id)),te=(s==null?void 0:s.length)>0,Ue=a.every(t=>A.includes(t.id)),Ye=le(S,j,y,m,!!o,!1),Xe=le(S,j,y,m,!!o,!0);return e.jsxs("div",{className:w("table",{"fixed-header":d,"horizontally-scrollable-container":d&&p},r),children:[e.jsxs("div",{className:w("table-header",{"sticky-header":d,"horizontally-scrollable":p},u),style:{gridTemplateColumns:Xe},children:[m&&e.jsx("div",{className:w("table-header-cell","checkbox-cell"),style:{left:y?`${D}px`:"0"},children:te&&e.jsx(re,{value:Oe,partiallyChecked:Je,onChange:Ve,className:w("checkbox-cell")})}),y&&e.jsx("div",{className:w("table-header-cell","expand-cell"),style:{left:"0"},children:e.jsx("button",{onClick:Be,"aria-label":"Toggle all rows expansion",children:e.jsx("span",{className:w("expand-icon",{expanded:Ue}),children:e.jsx(se,{})})})}),S.map((t,N)=>e.jsx("button",{className:w("table-header-cell","pinned-column",{[`align-${t.align}`]:"align"in t,"primary-cell":v(t),"sortable-cell":_.includes(t.key)}),style:M(t,!0,N,S,z,y,m),children:e.jsxs("div",{className:w("label"),onClick:()=>ee(t.key),onMouseEnter:()=>G(t.key),onMouseLeave:K,children:[e.jsx("span",{children:t.header}),(X===t.key||(k==null?void 0:k.key)===t.key)&&ne(t.key)]})},t.key)),j.map(t=>e.jsx("button",{className:w("table-header-cell",{[`align-${t.align}`]:"align"in t,"primary-cell":v(t),"sortable-cell":_.includes(t.key)}),style:M(t,!1,void 0,S,z,y,m),children:e.jsxs("div",{className:w("label"),onClick:()=>ee(t.key),onMouseEnter:()=>G(t.key),onMouseLeave:K,children:[e.jsx("span",{children:t.header}),(X===t.key||(k==null?void 0:k.key)===t.key)&&ne(t.key)]})},t.key)),o&&e.jsx("div",{className:w("table-header-cell","action-menu-cell")})]}),e.jsx("div",{className:w("table-body",{"scrollable-body":d,"horizontally-scrollable":p}),children:a.map((t,N)=>e.jsxs("div",{className:w("table-row",dn(t),i,{selectable:m}),onMouseEnter:()=>$e(N),onMouseLeave:We,children:[m&&e.jsx("div",{className:w("table-cell","checkbox-cell"),style:{left:y?`${D}px`:"0"},children:(te||Fe===N)&&e.jsx(re,{value:s.includes(t.id),onChange:()=>Ie(t.id),className:w("checkbox-cell")})}),e.jsx("div",{className:w("row-content-wrapper"),children:e.jsxs("div",{className:w("table-row-content"),style:{gridTemplateColumns:Ye},children:[y&&e.jsx("div",{className:w("table-cell","expand-cell"),style:{left:"0"},children:e.jsx("button",{onClick:()=>qe(t.id),"aria-label":A.includes(t.id)?"Collapse row":"Expand row","aria-expanded":A.includes(t.id),children:e.jsx("span",{className:w("expand-icon",{expanded:A.includes(t.id)}),children:e.jsx(se,{})})})}),S.map((b,J)=>{const P=Z(t.id,b.key),ae=v(b);return e.jsx("div",{ref:ae?Q(b.key):void 0,className:w("table-cell","pinned-column",{"primary-cell":ae,"expanded-cell":P}),style:M(b,!0,J,S,z,y,m),children:t[b.key].component||t[b.key].content||t[b.key]},b.key)}),j.map(b=>{const J=Z(t.id,b.key),P=v(b);return e.jsx("div",{ref:P?Q(b.key):void 0,className:w("table-cell",{"primary-cell":P,"expanded-cell":J}),style:M(b,!1,void 0,S,z,y,m),children:t[b.key].component||t[b.key].content||t[b.key]},b.key)}),o&&e.jsx("div",{className:w("table-cell","action-menu-cell"),children:o(t.metaData)})]})})]},t.id))})]})};R.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"RowData"}],raw:"RowData[]"},description:""},primaryColumn:{required:!0,tsType:{name:"union",raw:"Column | Column[]",elements:[{name:"Column"},{name:"Array",elements:[{name:"Column"}],raw:"Column[]"}]},description:""},fixedColumns:{required:!0,tsType:{name:"Array",elements:[{name:"FixedColumn"}],raw:"FixedColumn[]"},description:""},renderRowActions:{required:!1,tsType:{name:"signature",type:"function",raw:"(metaData?: MetaData) => ReactNode",signature:{arguments:[{type:{name:"MetaData"},name:"metaData"}],return:{name:"ReactNode"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},headerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rowClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortingDirection:{required:!1,tsType:{name:"union",raw:"typeof ASC | typeof DESC | Uppercase<typeof ASC | typeof DESC>",elements:[{name:"ASC"},{name:"DESC"},{name:"Uppercase",elements:[{name:"union",raw:"typeof ASC | typeof DESC",elements:[{name:"ASC"},{name:"DESC"}]}],raw:"Uppercase<typeof ASC | typeof DESC>"}]},description:"",defaultValue:{value:"'asc'",computed:!1}},sortingColumn:{required:!1,tsType:{name:"Column"},description:""},sortableColumns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isHeaderFixed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontallyScrollable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pinnedColumnKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},isRowsExpandable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},setExpandedRowIds:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Set",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Set<string | number>"}],raw:"SetStateAction<Set<string | number>>"}],raw:"Dispatch<SetStateAction<Set<string | number>>>"},description:""},onChangeSorting:{required:!1,tsType:{name:"signature",type:"function",raw:"(sortConfig?: SortConfig) => void",signature:{arguments:[{type:{name:"SortConfig"},name:"sortConfig"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const _n={title:"Tables & Lists/Table",component:R,parameters:{layout:"centered"},tags:["autodocs"],args:{selectable:!0}},O=()=>e.jsx(Qe,{placement:"bottom-end",content:e.jsxs("div",{children:[e.jsx("p",{children:"Edit"}),e.jsx("p",{children:"Rename"})]}),children:e.jsx(Ze,{})}),U=[{id:1,name:{content:"Sam",component:e.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],C=[{key:"name",header:"Name"}],ie=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],H={render:a=>{const[n,l]=h.useState({key:C[0].key,direction:T}),[o,r]=h.useState(C[0]),[i,u]=h.useState(T),m=B(U,n),[s,c]=h.useState(m),[g,x]=h.useState(new Set([]));return h.useEffect(()=>{const{key:d,direction:p}=n,f=[...ie,...C].find(y=>y.key===d);u(p),r(f)},[n]),e.jsx("div",{style:{minWidth:"700px"},children:e.jsx(R,{...a,primaryColumn:C,data:s,sortableColumns:[C[0].key],onChangeSorting:(d=n)=>{let{direction:p}=d;const{key:f}=d;p=_e(p);const y=B(s,{key:f,direction:p});l({key:f,direction:p}),c(y)},onToggleRowSelection:d=>{const p=new Set(g);p.has(d)?p.delete(d):p.add(d),x(p)},onToggleAllRowsSelection:()=>{if(g.size===U.length)x(new Set);else{const d=new Set(U.map(p=>p.id));x(d)}},selectedRowIds:[...g],sortingColumn:o,sortingDirection:i})})},args:{fixedColumns:ie,renderRowActions:O,selectable:!0}},I=[{id:1,name:"John Doe",email:"john.doe@example.com",phone:"+1-555-123-4567",address:"123 Main Street, New York, NY 10001",department:"Engineering",role:"Senior Software Engineer",salary:"$120,000",startDate:"2020-01-15",status:"Active",manager:"Jane Smith",projects:"Project Alpha, Project Beta",rowConfigs:{size:"small"}},{id:2,name:"Jane Smith",email:"jane.smith@example.com",phone:"+1-555-987-6543",address:"456 Oak Avenue, Los Angeles, CA 90210",department:"Marketing",role:"Marketing Director",salary:"$95,000",startDate:"2019-03-20",status:"Active",manager:"Robert Johnson",projects:"Campaign X, Campaign Y",rowConfigs:{size:"small"}},{id:3,name:"Mike Wilson",email:"mike.wilson@example.com",phone:"+1-555-456-7890",address:"789 Pine Road, Chicago, IL 60601",department:"Sales",role:"Sales Representative",salary:"$75,000",startDate:"2021-06-10",status:"Active",manager:"Sarah Davis",projects:"Client Onboarding, Lead Generation",rowConfigs:{size:"small"}},{id:4,name:"Sarah Davis",email:"sarah.davis@example.com",phone:"+1-555-234-5678",address:"321 Elm Street, Houston, TX 77001",department:"HR",role:"HR Manager",salary:"$85,000",startDate:"2018-09-12",status:"Active",manager:"Michael Brown",projects:"Employee Onboarding, Policy Updates",rowConfigs:{size:"small"}},{id:5,name:"Robert Johnson",email:"robert.johnson@example.com",phone:"+1-555-345-6789",address:"654 Maple Drive, Phoenix, AZ 85001",department:"Finance",role:"Financial Analyst",salary:"$78,000",startDate:"2020-11-08",status:"Active",manager:"Emily White",projects:"Budget Planning, Cost Analysis",rowConfigs:{size:"small"}},{id:6,name:"Emily White",email:"emily.white@example.com",phone:"+1-555-456-7891",address:"987 Cedar Lane, Philadelphia, PA 19101",department:"Operations",role:"Operations Manager",salary:"$110,000",startDate:"2017-05-22",status:"Active",manager:"David Green",projects:"Process Optimization, Quality Control",rowConfigs:{size:"small"}},{id:7,name:"David Green",email:"david.green@example.com",phone:"+1-555-567-8901",address:"147 Birch Avenue, San Antonio, TX 78201",department:"Engineering",role:"Lead Developer",salary:"$135,000",startDate:"2016-02-14",status:"Active",manager:"Lisa Thompson",projects:"Architecture Review, Team Mentoring",rowConfigs:{size:"small"}},{id:8,name:"Lisa Thompson",email:"lisa.thompson@example.com",phone:"+1-555-678-9012",address:"258 Spruce Court, San Diego, CA 92101",department:"Product",role:"Product Manager",salary:"$105,000",startDate:"2019-08-30",status:"Active",manager:"Tom Anderson",projects:"Feature Planning, User Research",rowConfigs:{size:"small"}},{id:9,name:"Tom Anderson",email:"tom.anderson@example.com",phone:"+1-555-789-0123",address:"369 Willow Street, Dallas, TX 75201",department:"Design",role:"UX Designer",salary:"$88,000",startDate:"2021-01-18",status:"Active",manager:"Anna Martinez",projects:"UI Redesign, User Testing",rowConfigs:{size:"small"}},{id:10,name:"Anna Martinez",email:"anna.martinez@example.com",phone:"+1-555-890-1234",address:"741 Poplar Boulevard, San Jose, CA 95101",department:"QA",role:"QA Engineer",salary:"$82,000",startDate:"2020-07-25",status:"Active",manager:"John Doe",projects:"Automation Testing, Bug Tracking",rowConfigs:{size:"small"}}],je=[{key:"name",header:"Full Name"}],ze=[{key:"email",header:"Email Address",width:200},{key:"phone",header:"Phone Number",width:150},{key:"address",header:"Address",width:250},{key:"department",header:"Department",width:120},{key:"role",header:"Job Role",width:180},{key:"salary",header:"Salary",width:100},{key:"startDate",header:"Start Date",width:120},{key:"status",header:"Status",width:100},{key:"manager",header:"Manager",width:150},{key:"projects",header:"Current Projects",width:200}],gn=a=>{const n=["John","Jane","Mike","Sarah","David","Emma","Chris","Lisa","Tom","Anna"],l=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose"],o=["Engineering","Marketing","Sales","HR","Finance","Operations","Design","Product","Legal","Support"];return Array.from({length:a},(r,i)=>({id:i+1,name:`${n[i%n.length]} ${i+1}`,age:22+i%40,city:l[i%l.length],department:o[i%o.length],email:`user${i+1}@example.com`,salary:`$${(5e4+i*1e3%1e5).toLocaleString()}`}))},Y=gn(50),de=[{key:"age",header:"Age",width:80,align:"right"},{key:"city",header:"City",width:120},{key:"department",header:"Department",width:120},{key:"email",header:"Email",width:200},{key:"salary",header:"Salary",width:100,align:"right"}],L={render:a=>{const[n,l]=h.useState({key:C[0].key,direction:T}),[o,r]=h.useState(C[0]),[i,u]=h.useState(T),m=B(Y,n),[s,c]=h.useState(m),[g,x]=h.useState(new Set([]));return h.useEffect(()=>{const{key:d,direction:p}=n,f=[...de,...C].find(y=>y.key===d);u(p),r(f)},[n]),e.jsxs("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Fixed Header Table with Scrollable Body"}),e.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",overflow:"auto"},children:e.jsx(R,{...a,data:s,primaryColumn:C,fixedColumns:de,isHeaderFixed:!0,sortableColumns:[C[0].key,"age","department"],onChangeSorting:(d=n)=>{let{direction:p}=d;const{key:f}=d;p=_e(p);const y=B(s,{key:f,direction:p});l({key:f,direction:p}),c(y)},onToggleRowSelection:d=>{const p=new Set(g);p.has(d)?p.delete(d):p.add(d),x(p)},onToggleAllRowsSelection:()=>{if(g.size===Y.length)x(new Set);else{const d=new Set(Y.map(p=>p.id));x(d)}},selectedRowIds:[...g],sortingColumn:o,sortingDirection:i})})]})},args:{selectable:!0,renderRowActions:O}},F={render:a=>e.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Fixed Header + Horizontal Scroll: Both scrollbars visible when needed"}),e.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",position:"relative"},children:e.jsx(R,{...a,data:I,primaryColumn:je,fixedColumns:ze,isHorizontallyScrollable:!0,isHeaderFixed:!0})})]}),args:{selectable:!1,renderRowActions:O}},$={render:a=>{const[n,l]=h.useState(new Set([]));return e.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Pinned Columns + Fixed Header: Name and Email pinned with vertical and horizontal scrolling"}),e.jsx("div",{className:"storybook-table-wrapper",style:{width:"550px",height:"calc(100% - 50px)",position:"relative"},children:e.jsx(R,{...a,data:I,primaryColumn:je,fixedColumns:ze,isHorizontallyScrollable:!0,isHeaderFixed:!0,pinnedColumnKeys:["name","email","department"],onToggleRowSelection:o=>{const r=new Set(n);r.has(o)?r.delete(o):r.add(o),l(r)},onToggleAllRowsSelection:()=>{if(n.size===I.length)l(new Set);else{const o=new Set(I.map(r=>r.id));l(o)}},selectedRowIds:[...n]})})]})},args:{selectable:!0,renderRowActions:O}},W={render:a=>{const[n,l]=h.useState(new Set([1])),[o,r]=h.useState(new Set([])),i=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"sam.johnson@example.com"},{id:2,name:"Anna Smith",age:32,city:"San Francisco",department:"Design",email:"anna.smith@example.com"},{id:3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",email:"mike.davis@example.com"},{id:4,name:"Sarah Wilson",age:35,city:"Chicago",department:"Sales",email:"sarah.wilson@example.com"}],u=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:100},{key:"city",header:"City",width:100}],m=[{key:"name",header:"Name"}];return e.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows Example"}),e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Click the expand/collapse icons to view detailed information for each row. Rows can be expanded and collapsed independently."}),e.jsx(R,{...a,data:i,primaryColumn:m,fixedColumns:u,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...n],setExpandedRowIds:l,onToggleRowExpansion:s=>{const c=new Set(n);c.has(s)?c.delete(s):c.add(s),l(c)},selectedRowIds:[...o],onToggleRowSelection:s=>{const c=new Set(o);c.has(s)?c.delete(s):c.add(s),r(c)},onToggleAllRowsSelection:()=>{if(o.size===i.length)r(new Set);else{const s=new Set(i.map(c=>c.id));r(s)}}})]})},args:{selectable:!0}},wn=[{id:1,name:"John Alexander Maximilian Winchester-Blackwood III",description:"This is long text but anyway no matter ellipsed or opened it should not overcome his width it can be brake. When you click on this cell, it will expand to show the full content without ellipsis truncation, and the text should wrap properly within the cell boundaries without breaking the table layout.",shortText:"Brief note",longTitle:"Senior Vice President of Engineering and Technology Development for Enterprise Solutions and Digital Transformation Initiatives",email:"john.alexander.maximilian.winchester.blackwood.third@very-long-company-name-example.com",notes:"This is a comprehensive test of how the table handles extremely long content that would normally break layouts. The content should be properly contained within cell boundaries."},{id:2,name:"Maria Elena Rodriguez-Martinez",description:"Another extremely lengthy description that showcases the cell expansion capabilities. This description contains detailed information about the person, their role, responsibilities, and achievements. The purpose is to demonstrate how users can easily expand cells to read full content when the default view shows only a truncated version with ellipsis.",shortText:"Quick summary here",longTitle:"Chief Marketing Officer and Head of Brand Strategy for Global Markets and Customer Experience Enhancement",email:"maria.elena.rodriguez.martinez@another-extremely-long-domain-name.example.org",notes:"Testing various content lengths and how they behave in both collapsed and expanded states. The text should wrap appropriately without overflowing."},{id:3,name:"Robert James Thompson",description:"A comprehensive description that tests the expand functionality with moderate length content. This shows how the feature works with different content lengths and provides a good example of real-world usage.",shortText:"Standard",longTitle:"Director of Operations",email:"robert.thompson@company.com",notes:"Short note about this person and their current projects."},{id:4,name:"Dr. Elizabeth Catherine Pemberton-Williams, PhD, MBA, CISSP",description:"This cell contains an exceptionally detailed description that really pushes the limits of what might be considered reasonable content length. It includes professional background, educational achievements, current responsibilities, ongoing projects, future goals, and various other details that would typically require a much larger display area.",shortText:"Complex background",longTitle:"Chief Technology Officer and Principal Software Architect for Distributed Systems and Cloud Infrastructure with specialization in Cybersecurity and Data Analytics",email:"dr.elizabeth.catherine.pemberton.williams.phd.mba.cissp@enterprise-solutions-technology-consulting.example.net",notes:"Comprehensive notes about professional achievements, certifications, ongoing projects, and future development plans. This tests the maximum reasonable content length."}],yn=[{key:"description",header:"Description",width:200},{key:"longTitle",header:"Job Title",width:120},{key:"email",header:"Email Address",width:100},{key:"shortText",header:"Type",width:100},{key:"notes",header:"Notes",width:100}],q={render:a=>{const[n,l]=h.useState(new Set);return e.jsxs("div",{style:{width:"1000px",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Row Content Expansion - Long Text Handling"}),e.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666",lineHeight:1.5},children:[e.jsx("strong",{children:"Click the expand icon"})," at the beginning of each row to expand/collapse ALL cells in that row. This example tests:",e.jsx("br",{}),"• Very long email addresses that should be ellipsed when collapsed",e.jsx("br",{}),"• Long text content that should wrap without breaking cell width constraints",e.jsx("br",{}),"• Proper word breaking for extremely long content",e.jsx("br",{}),"• Layout stability when transitioning between collapsed and expanded states"]}),e.jsx("div",{style:{border:"1px solid #e1e5e9",borderRadius:"8px",overflow:"hidden"},children:e.jsx(R,{...a,data:wn,primaryColumn:[{key:"name",header:"Full Name"}],fixedColumns:yn,selectable:!1,isRowsExpandable:!0,expandedRowIds:[...n],onToggleRowExpansion:o=>{const r=new Set(n);r.has(o)?r.delete(o):r.add(o),l(r)}})}),e.jsx("p",{style:{margin:"16px 0 0 0",fontSize:"12px",color:"#888",fontStyle:"italic"},children:"Test the table with your browser's developer tools at different widths to verify responsive behavior."})]})},args:{renderRowActions:void 0}};var ce,pe,me;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(pe=H.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,ue,ge;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ge=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var we,ye,xe;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(xe=(ye=F.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var be,fe,Ce;$.parameters={...$.parameters,docs:{...(be=$.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ce=(fe=$.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var ke,Se,Re;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Re=(Se=W.parameters)==null?void 0:Se.docs)==null?void 0:Re.source}}};var ve,Te,De;q.parameters={...q.parameters,docs:{...(ve=q.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(De=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};const jn=["Default","FixedHeader","HorizontalScrollWithFixedHeaderControl","PinnedColumnsWithFixedHeader","ExpandableRows","CellExpansion"];export{q as CellExpansion,H as Default,W as ExpandableRows,L as FixedHeader,F as HorizontalScrollWithFixedHeaderControl,$ as PinnedColumnsWithFixedHeader,jn as __namedExportsOrder,_n as default};
