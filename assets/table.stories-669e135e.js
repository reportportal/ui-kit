import{j as e}from"./jsx-runtime-3169928d.js";import{r as c}from"./index-d33a4676.js";import{c as Ge}from"./bind-f5c6fce5.js";import{C as oe}from"./checkbox-24bb629b.js";import{P as Ke}from"./popover-e0278083.js";import{S as Qe}from"./meatballMenu-3f4bf33c.js";import"./keyCodes-e5060420.js";import"./floating-ui.react-7da7fc58.js";import"./floating-ui.react-dom-4a121add.js";import"./index-f454028f.js";const Ze=n=>c.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.85355 12.8536C7.65829 13.0488 7.34171 13.0488 7.14645 12.8536L4.14645 9.85355C3.95118 9.65829 3.95118 9.34171 4.14645 9.14645C4.34171 8.95118 4.65829 8.95118 4.85355 9.14645L7 11.2929L7 3.5C7 3.22386 7.22386 3 7.5 3C7.77614 3 8 3.22386 8 3.5L8 11.2929L10.1464 9.14645C10.3417 8.95119 10.6583 8.95118 10.8536 9.14645C11.0488 9.34171 11.0488 9.65829 10.8536 9.85355L7.85355 12.8536Z",fill:"#A2AAB5"})),se=n=>c.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.14645 3.14645C7.34171 2.95118 7.65829 2.95118 7.85355 3.14645L10.8536 6.14645C11.0488 6.34171 11.0488 6.65829 10.8536 6.85355C10.6583 7.04882 10.3417 7.04882 10.1464 6.85355L8 4.70711V12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 4.70711L4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355C3.95118 6.65829 3.95118 6.34171 4.14645 6.14645L7.14645 3.14645Z",fill:"#A2AAB5"})),le=n=>c.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},c.createElement("path",{d:"M14.2174 5.82426C14.3736 5.66805 14.3736 5.41479 14.2174 5.25858L14.0759 5.11716C13.9197 4.96095 13.6665 4.96095 13.5103 5.11716L8.16726 10.4602L2.82426 5.11716C2.66805 4.96095 2.41479 4.96095 2.25858 5.11716L2.11716 5.25858C1.96095 5.41479 1.96095 5.66805 2.11716 5.82426L7.89176 11.5989C8.04797 11.7551 8.30124 11.7551 8.45745 11.5989L8.88171 11.1746L8.87436 11.1673L14.2174 5.82426Z",fill:"#A2AAB5"})),je=n=>typeof n=="string",en="_table_1kj69_1",nn="_selectable_1kj69_56",tn="_expanded_1kj69_52",an="_label_1kj69_266",on={table:en,"fixed-header":"_fixed-header_1kj69_8","horizontally-scrollable-container":"_horizontally-scrollable-container_1kj69_14","table-header":"_table-header_1kj69_19","sticky-header":"_sticky-header_1kj69_25","horizontally-scrollable":"_horizontally-scrollable_1kj69_14","table-row":"_table-row_1kj69_47","expanded-cell":"_expanded-cell_1kj69_52",selectable:nn,"row-content-wrapper":"_row-content-wrapper_1kj69_60","table-row-content":"_table-row-content_1kj69_65","expand-cell":"_expand-cell_1kj69_81","size-small":"_size-small_1kj69_84","size-large":"_size-large_1kj69_95","table-body":"_table-body_1kj69_110","scrollable-body":"_scrollable-body_1kj69_116","table-header-cell":"_table-header-cell_1kj69_162","table-cell":"_table-cell_1kj69_163","action-menu-cell":"_action-menu-cell_1kj69_170","checkbox-cell":"_checkbox-cell_1kj69_195","expand-icon":"_expand-icon_1kj69_238",expanded:tn,"primary-cell":"_primary-cell_1kj69_247",label:an,"sortable-cell":"_sortable-cell_1kj69_270","align-right":"_align-right_1kj69_273","align-center":"_align-center_1kj69_279","pinned-column":"_pinned-column_1kj69_282"},T="asc",sn="desc",D=32,Ae=100,ln=48,V=n=>n.toLowerCase()===T,I=(n,t)=>t?[...n].sort((r,o)=>{const l=r[t.key].content||r[t.key],i=o[t.key].content||o[t.key];return l<i?V(t.direction)?-1:1:l>i?V(t.direction)?1:-1:0}):n,rn=n=>n.map(t=>t.key),Ee=n=>V(n)?sn:T,v=n=>"primary"in n&&n.primary===!0,dn=n=>{var r;return`size-${((r=n.rowConfigs)==null?void 0:r.size)??"default"}`},cn=(n,t,r,o,l)=>{let i=0;o&&(i+=D),l&&(i+=D);for(let u=0;u<n;u++){const h=t[u];if(v(h)){const s=r.current.get(h.key)||Ae;i+=s}else{const s=h,m=je(s.width)?parseInt(s.width,10)||0:s.width;i+=m}}return i},M=(n,t,r,o,l,i,u)=>{const h={};if(!v(n)){const s=n;h.textAlign=s.align}if(t&&r!==void 0){const s=cn(r,o,l,i,u);h.left=`${s}px`}return h},re=(n,t,r,o,l,i=!1)=>{const u=[];r&&u.push(`${D}px`),i&&o&&u.push(`${D}px`);const h=s=>{if(v(s))u.push(`minmax(${Ae}px, 1fr)`);else{const m=s,g=je(m.width)?m.width:`${m.width}px`;u.push(g)}};return n.forEach(h),t.forEach(h),l&&u.push(`${ln}px`),u.join(" ")},mn=({primaryColumns:n,fixedColumns:t,pinnedColumnKeys:r})=>c.useMemo(()=>{const o=[],l=[];return n.forEach(i=>{const u={...i,primary:!0};r.includes(i.key)?o.push(u):l.push(u)}),t.forEach(i=>{r.includes(i.key)?o.push(i):l.push(i)}),{pinnedColumns:o,scrollableColumns:l}},[n,t,r]),pn=()=>{const[n,t]=c.useState(null),[r,o]=c.useState(null),l=c.useCallback(s=>{t(s)},[]),i=c.useCallback(()=>{t(null)},[]),u=c.useCallback(s=>{o(s)},[]),h=c.useCallback(()=>{o(null)},[]);return{hoveredColumn:n,hoveredRow:r,handleColumnMouseEnter:l,handleColumnMouseLeave:i,handleRowMouseEnter:u,handleRowMouseLeave:h}},hn=({primaryColumns:n,fixedColumns:t,expandedRowIds:r,onToggleRowExpansion:o})=>{const[l,i]=c.useState(new Set);c.useEffect(()=>{const s=[...n.map(g=>g.key),...t.map(g=>g.key)],m=new Set;r.forEach(g=>{s.forEach(y=>{m.add(`${g}-${y}`)})}),i(g=>{if(g.size===m.size){let y=!0;if(g.forEach(d=>{m.has(d)||(y=!1)}),y)return g}return m})},[r,n,t]);const u=c.useCallback(s=>{const m=new Set(l),g=r.includes(s),y=[...n.map(d=>d.key),...t.map(d=>d.key)];g?y.forEach(d=>{const p=`${s}-${d}`;m.delete(p)}):y.forEach(d=>{const p=`${s}-${d}`;m.add(p)}),i(m),o(s)},[l,r,n,t,o]),h=c.useCallback((s,m)=>{const g=`${s}-${m}`;return l.has(g)},[l]);return{expandedCells:l,handleToggleRowExpansion:u,isCellExpanded:h}},un=()=>{const n=c.useRef(new Map),t=c.useCallback(r=>o=>{if(!o)return;const l=o.getBoundingClientRect().width;l>0&&n.current.set(r,l)},[]);return{columnWidthsRef:n,setCellRef:t}},w=Ge.bind(on),R=({data:n,primaryColumn:t,fixedColumns:r,renderRowActions:o,className:l="",rowClassName:i="",headerClassName:u="",selectable:h=!1,selectedRowIds:s=[],sortingDirection:m=T,sortingColumn:g,sortableColumns:y,isHeaderFixed:d=!1,isHorizontallyScrollable:p=!1,pinnedColumnKeys:C=[],isRowsExpandable:x=!1,expandedRowIds:j=[],onChangeSorting:Ne=()=>{},onToggleRowSelection:Le=()=>{},onToggleAllRowsSelection:Me=()=>{},onToggleRowExpansion:Pe=()=>{},onToggleAllRowsExpansion:He=()=>{}})=>{const A=c.useMemo(()=>Array.isArray(t)?t:[t],[t]),k=g??A[0],E=y??rn([...A,...r]),{pinnedColumns:S,scrollableColumns:_}=mn({primaryColumns:A,fixedColumns:r,pinnedColumnKeys:C}),{hoveredColumn:X,hoveredRow:Fe,handleColumnMouseEnter:G,handleColumnMouseLeave:K,handleRowMouseEnter:$e,handleRowMouseLeave:We}=pn(),{columnWidthsRef:z,setCellRef:Q}=un(),{handleToggleRowExpansion:qe,isCellExpanded:Z}=hn({primaryColumns:A,fixedColumns:r,expandedRowIds:j,onToggleRowExpansion:Pe}),ee=a=>{E.includes(a)&&Ne({key:a,direction:m})},Be=a=>{Le(a)},Ve=()=>{Me()},Ie=()=>{He()},ne=a=>E.includes(a)?(k==null?void 0:k.key)===a?V(m)?e.jsx(se,{}):e.jsx(Ze,{}):e.jsx(se,{}):null,Oe=n.every(a=>s.includes(a.id)),Je=n.some(a=>s.includes(a.id)),te=(s==null?void 0:s.length)>0,Ue=n.every(a=>j.includes(a.id)),Ye=re(S,_,x,h,!!o,!1),Xe=re(S,_,x,h,!!o,!0);return e.jsxs("div",{className:w("table",{"fixed-header":d,"horizontally-scrollable-container":d&&p},l),children:[e.jsxs("div",{className:w("table-header",{"sticky-header":d,"horizontally-scrollable":p},u),style:{gridTemplateColumns:Xe},children:[h&&e.jsx("div",{className:w("table-header-cell","checkbox-cell"),style:{left:x?`${D}px`:"0"},children:te&&e.jsx(oe,{value:Oe,partiallyChecked:Je,onChange:Ve,className:w("checkbox-cell")})}),x&&e.jsx("div",{className:w("table-header-cell","expand-cell"),style:{left:"0"},children:e.jsx("button",{onClick:Ie,"aria-label":"Toggle all rows expansion",children:e.jsx("span",{className:w("expand-icon",{expanded:Ue}),children:e.jsx(le,{})})})}),S.map((a,N)=>e.jsx("button",{className:w("table-header-cell","pinned-column",{[`align-${a.align}`]:"align"in a,"primary-cell":v(a),"sortable-cell":E.includes(a.key)}),style:M(a,!0,N,S,z,x,h),children:e.jsxs("div",{className:w("label"),onClick:()=>ee(a.key),onMouseEnter:()=>G(a.key),onMouseLeave:K,children:[e.jsx("span",{children:a.header}),(X===a.key||(k==null?void 0:k.key)===a.key)&&ne(a.key)]})},a.key)),_.map(a=>e.jsx("button",{className:w("table-header-cell",{[`align-${a.align}`]:"align"in a,"primary-cell":v(a),"sortable-cell":E.includes(a.key)}),style:M(a,!1,void 0,S,z,x,h),children:e.jsxs("div",{className:w("label"),onClick:()=>ee(a.key),onMouseEnter:()=>G(a.key),onMouseLeave:K,children:[e.jsx("span",{children:a.header}),(X===a.key||(k==null?void 0:k.key)===a.key)&&ne(a.key)]})},a.key)),o&&e.jsx("div",{className:w("table-header-cell","action-menu-cell")})]}),e.jsx("div",{className:w("table-body",{"scrollable-body":d,"horizontally-scrollable":p}),children:n.map((a,N)=>e.jsxs("div",{className:w("table-row",dn(a),i,{selectable:h}),onMouseEnter:()=>$e(N),onMouseLeave:We,children:[h&&e.jsx("div",{className:w("table-cell","checkbox-cell"),style:{left:x?`${D}px`:"0"},children:(te||Fe===N)&&e.jsx(oe,{value:s.includes(a.id),onChange:()=>Be(a.id),className:w("checkbox-cell")})}),e.jsx("div",{className:w("row-content-wrapper"),children:e.jsxs("div",{className:w("table-row-content"),style:{gridTemplateColumns:Ye},children:[x&&e.jsx("div",{className:w("table-cell","expand-cell"),style:{left:"0"},children:e.jsx("button",{onClick:()=>qe(a.id),"aria-label":j.includes(a.id)?"Collapse row":"Expand row","aria-expanded":j.includes(a.id),children:e.jsx("span",{className:w("expand-icon",{expanded:j.includes(a.id)}),children:e.jsx(le,{})})})}),S.map((f,J)=>{const L=Z(a.id,f.key),ae=v(f);return e.jsx("div",{ref:ae?Q(f.key):void 0,className:w("table-cell","pinned-column",{"primary-cell":ae,"expanded-cell":L}),style:M(f,!0,J,S,z,x,h),children:a[f.key].component||a[f.key].content||a[f.key]},f.key)}),_.map(f=>{const J=Z(a.id,f.key),L=v(f);return e.jsx("div",{ref:L?Q(f.key):void 0,className:w("table-cell",{"primary-cell":L,"expanded-cell":J}),style:M(f,!1,void 0,S,z,x,h),children:a[f.key].component||a[f.key].content||a[f.key]},f.key)}),o&&e.jsx("div",{className:w("table-cell","action-menu-cell"),children:o(a.metaData)})]})})]},a.id))})]})};R.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"RowData"}],raw:"RowData[]"},description:""},primaryColumn:{required:!0,tsType:{name:"union",raw:"Column | Column[]",elements:[{name:"Column"},{name:"Array",elements:[{name:"Column"}],raw:"Column[]"}]},description:""},fixedColumns:{required:!0,tsType:{name:"Array",elements:[{name:"FixedColumn"}],raw:"FixedColumn[]"},description:""},renderRowActions:{required:!1,tsType:{name:"signature",type:"function",raw:"(metaData?: MetaData) => ReactNode",signature:{arguments:[{type:{name:"MetaData"},name:"metaData"}],return:{name:"ReactNode"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},headerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rowClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortingDirection:{required:!1,tsType:{name:"union",raw:"typeof ASC | typeof DESC | Uppercase<typeof ASC | typeof DESC>",elements:[{name:"ASC"},{name:"DESC"},{name:"Uppercase",elements:[{name:"union",raw:"typeof ASC | typeof DESC",elements:[{name:"ASC"},{name:"DESC"}]}],raw:"Uppercase<typeof ASC | typeof DESC>"}]},description:"",defaultValue:{value:"'asc'",computed:!1}},sortingColumn:{required:!1,tsType:{name:"Column"},description:""},sortableColumns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isHeaderFixed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontallyScrollable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pinnedColumnKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},isRowsExpandable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},setExpandedRowIds:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Set",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Set<string | number>"}],raw:"SetStateAction<Set<string | number>>"}],raw:"Dispatch<SetStateAction<Set<string | number>>>"},description:""},onChangeSorting:{required:!1,tsType:{name:"signature",type:"function",raw:"(sortConfig?: SortConfig) => void",signature:{arguments:[{type:{name:"SortConfig"},name:"sortConfig"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const jn={title:"Tables & Lists/Table",component:R,parameters:{layout:"centered"},tags:["autodocs"],args:{selectable:!0}},O=()=>e.jsx(Ke,{placement:"bottom-end",content:e.jsxs("div",{children:[e.jsx("p",{children:"Edit"}),e.jsx("p",{children:"Rename"})]}),children:e.jsx(Qe,{})}),U=[{id:1,name:{content:"Sam",component:e.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],b=[{key:"name",header:"Name"}],ie=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],P={render:n=>{const[t,r]=c.useState({key:b[0].key,direction:T}),[o,l]=c.useState(b[0]),[i,u]=c.useState(T),h=I(U,t),[s,m]=c.useState(h),[g,y]=c.useState(new Set([]));return c.useEffect(()=>{const{key:d,direction:p}=t,C=[...ie,...b].find(x=>x.key===d);u(p),l(C)},[t]),e.jsx("div",{style:{minWidth:"700px"},children:e.jsx(R,{...n,primaryColumn:b,data:s,sortableColumns:[b[0].key],onChangeSorting:(d=t)=>{let{direction:p}=d;const{key:C}=d;p=Ee(p);const x=I(s,{key:C,direction:p});r({key:C,direction:p}),m(x)},onToggleRowSelection:d=>{const p=new Set(g);p.has(d)?p.delete(d):p.add(d),y(p)},onToggleAllRowsSelection:()=>{if(g.size===U.length)y(new Set);else{const d=new Set(U.map(p=>p.id));y(d)}},selectedRowIds:[...g],sortingColumn:o,sortingDirection:i})})},args:{fixedColumns:ie,renderRowActions:O,selectable:!0}},B=[{id:1,name:"John Doe",email:"john.doe@example.com",phone:"+1-555-123-4567",address:"123 Main Street, New York, NY 10001",department:"Engineering",role:"Senior Software Engineer",salary:"$120,000",startDate:"2020-01-15",status:"Active",manager:"Jane Smith",projects:"Project Alpha, Project Beta",rowConfigs:{size:"small"}},{id:2,name:"Jane Smith",email:"jane.smith@example.com",phone:"+1-555-987-6543",address:"456 Oak Avenue, Los Angeles, CA 90210",department:"Marketing",role:"Marketing Director",salary:"$95,000",startDate:"2019-03-20",status:"Active",manager:"Robert Johnson",projects:"Campaign X, Campaign Y",rowConfigs:{size:"small"}},{id:3,name:"Mike Wilson",email:"mike.wilson@example.com",phone:"+1-555-456-7890",address:"789 Pine Road, Chicago, IL 60601",department:"Sales",role:"Sales Representative",salary:"$75,000",startDate:"2021-06-10",status:"Active",manager:"Sarah Davis",projects:"Client Onboarding, Lead Generation",rowConfigs:{size:"small"}},{id:4,name:"Sarah Davis",email:"sarah.davis@example.com",phone:"+1-555-234-5678",address:"321 Elm Street, Houston, TX 77001",department:"HR",role:"HR Manager",salary:"$85,000",startDate:"2018-09-12",status:"Active",manager:"Michael Brown",projects:"Employee Onboarding, Policy Updates",rowConfigs:{size:"small"}},{id:5,name:"Robert Johnson",email:"robert.johnson@example.com",phone:"+1-555-345-6789",address:"654 Maple Drive, Phoenix, AZ 85001",department:"Finance",role:"Financial Analyst",salary:"$78,000",startDate:"2020-11-08",status:"Active",manager:"Emily White",projects:"Budget Planning, Cost Analysis",rowConfigs:{size:"small"}},{id:6,name:"Emily White",email:"emily.white@example.com",phone:"+1-555-456-7891",address:"987 Cedar Lane, Philadelphia, PA 19101",department:"Operations",role:"Operations Manager",salary:"$110,000",startDate:"2017-05-22",status:"Active",manager:"David Green",projects:"Process Optimization, Quality Control",rowConfigs:{size:"small"}},{id:7,name:"David Green",email:"david.green@example.com",phone:"+1-555-567-8901",address:"147 Birch Avenue, San Antonio, TX 78201",department:"Engineering",role:"Lead Developer",salary:"$135,000",startDate:"2016-02-14",status:"Active",manager:"Lisa Thompson",projects:"Architecture Review, Team Mentoring",rowConfigs:{size:"small"}},{id:8,name:"Lisa Thompson",email:"lisa.thompson@example.com",phone:"+1-555-678-9012",address:"258 Spruce Court, San Diego, CA 92101",department:"Product",role:"Product Manager",salary:"$105,000",startDate:"2019-08-30",status:"Active",manager:"Tom Anderson",projects:"Feature Planning, User Research",rowConfigs:{size:"small"}},{id:9,name:"Tom Anderson",email:"tom.anderson@example.com",phone:"+1-555-789-0123",address:"369 Willow Street, Dallas, TX 75201",department:"Design",role:"UX Designer",salary:"$88,000",startDate:"2021-01-18",status:"Active",manager:"Anna Martinez",projects:"UI Redesign, User Testing",rowConfigs:{size:"small"}},{id:10,name:"Anna Martinez",email:"anna.martinez@example.com",phone:"+1-555-890-1234",address:"741 Poplar Boulevard, San Jose, CA 95101",department:"QA",role:"QA Engineer",salary:"$82,000",startDate:"2020-07-25",status:"Active",manager:"John Doe",projects:"Automation Testing, Bug Tracking",rowConfigs:{size:"small"}}],_e=[{key:"name",header:"Full Name"}],ze=[{key:"email",header:"Email Address",width:200},{key:"phone",header:"Phone Number",width:150},{key:"address",header:"Address",width:250},{key:"department",header:"Department",width:120},{key:"role",header:"Job Role",width:180},{key:"salary",header:"Salary",width:100},{key:"startDate",header:"Start Date",width:120},{key:"status",header:"Status",width:100},{key:"manager",header:"Manager",width:150},{key:"projects",header:"Current Projects",width:200}],gn=n=>{const t=["John","Jane","Mike","Sarah","David","Emma","Chris","Lisa","Tom","Anna"],r=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose"],o=["Engineering","Marketing","Sales","HR","Finance","Operations","Design","Product","Legal","Support"];return Array.from({length:n},(l,i)=>({id:i+1,name:`${t[i%t.length]} ${i+1}`,age:22+i%40,city:r[i%r.length],department:o[i%o.length],email:`user${i+1}@example.com`,salary:`$${(5e4+i*1e3%1e5).toLocaleString()}`}))},Y=gn(50),de=[{key:"age",header:"Age",width:80,align:"right"},{key:"city",header:"City",width:120},{key:"department",header:"Department",width:120},{key:"email",header:"Email",width:200},{key:"salary",header:"Salary",width:100,align:"right"}],H={render:n=>{const[t,r]=c.useState({key:b[0].key,direction:T}),[o,l]=c.useState(b[0]),[i,u]=c.useState(T),h=I(Y,t),[s,m]=c.useState(h),[g,y]=c.useState(new Set([]));return c.useEffect(()=>{const{key:d,direction:p}=t,C=[...de,...b].find(x=>x.key===d);u(p),l(C)},[t]),e.jsxs("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Fixed Header Table with Scrollable Body"}),e.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",overflow:"auto"},children:e.jsx(R,{...n,data:s,primaryColumn:b,fixedColumns:de,isHeaderFixed:!0,sortableColumns:[b[0].key,"age","department"],onChangeSorting:(d=t)=>{let{direction:p}=d;const{key:C}=d;p=Ee(p);const x=I(s,{key:C,direction:p});r({key:C,direction:p}),m(x)},onToggleRowSelection:d=>{const p=new Set(g);p.has(d)?p.delete(d):p.add(d),y(p)},onToggleAllRowsSelection:()=>{if(g.size===Y.length)y(new Set);else{const d=new Set(Y.map(p=>p.id));y(d)}},selectedRowIds:[...g],sortingColumn:o,sortingDirection:i})})]})},args:{selectable:!0,renderRowActions:O}},F={render:n=>e.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Fixed Header + Horizontal Scroll: Both scrollbars visible when needed"}),e.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",position:"relative"},children:e.jsx(R,{...n,data:B,primaryColumn:_e,fixedColumns:ze,isHorizontallyScrollable:!0,isHeaderFixed:!0})})]}),args:{selectable:!1,renderRowActions:O}},$={render:n=>{const[t,r]=c.useState(new Set([]));return e.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Pinned Columns + Fixed Header: Name and Email pinned with vertical and horizontal scrolling"}),e.jsx("div",{className:"storybook-table-wrapper",style:{width:"550px",height:"calc(100% - 50px)",position:"relative"},children:e.jsx(R,{...n,data:B,primaryColumn:_e,fixedColumns:ze,isHorizontallyScrollable:!0,isHeaderFixed:!0,pinnedColumnKeys:["name","email","department"],onToggleRowSelection:o=>{const l=new Set(t);l.has(o)?l.delete(o):l.add(o),r(l)},onToggleAllRowsSelection:()=>{if(t.size===B.length)r(new Set);else{const o=new Set(B.map(l=>l.id));r(o)}},selectedRowIds:[...t]})})]})},args:{selectable:!0,renderRowActions:O}},W={render:n=>{const[t,r]=c.useState(new Set([1])),[o,l]=c.useState(new Set([])),i=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"sam.johnson@example.com"},{id:2,name:"Anna Smith",age:32,city:"San Francisco",department:"Design",email:"anna.smith@example.com"},{id:3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",email:"mike.davis@example.com"},{id:4,name:"Sarah Wilson",age:35,city:"Chicago",department:"Sales",email:"sarah.wilson@example.com"}],u=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:100},{key:"city",header:"City",width:100}],h=[{key:"name",header:"Name"}];return e.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows Example"}),e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Click the expand/collapse icons to view detailed information for each row. Rows can be expanded and collapsed independently."}),e.jsx(R,{...n,data:i,primaryColumn:h,fixedColumns:u,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...t],setExpandedRowIds:r,onToggleRowExpansion:s=>{const m=new Set(t);m.has(s)?m.delete(s):m.add(s),r(m)},selectedRowIds:[...o],onToggleRowSelection:s=>{const m=new Set(o);m.has(s)?m.delete(s):m.add(s),l(m)},onToggleAllRowsSelection:()=>{if(o.size===i.length)l(new Set);else{const s=new Set(i.map(m=>m.id));l(s)}}})]})},args:{selectable:!0}},wn=[{id:1,name:"John Alexander Maximilian Winchester-Blackwood III",description:"This is long text but anyway no matter ellipsed or opened it should not overcome his width it can be brake. When you click on this cell, it will expand to show the full content without ellipsis truncation, and the text should wrap properly within the cell boundaries without breaking the table layout.",shortText:"Brief note",longTitle:"Senior Vice President of Engineering and Technology Development for Enterprise Solutions and Digital Transformation Initiatives",email:"john.alexander.maximilian.winchester.blackwood.third@very-long-company-name-example.com",notes:"This is a comprehensive test of how the table handles extremely long content that would normally break layouts. The content should be properly contained within cell boundaries."},{id:2,name:"Maria Elena Rodriguez-Martinez",description:"Another extremely lengthy description that showcases the cell expansion capabilities. This description contains detailed information about the person, their role, responsibilities, and achievements. The purpose is to demonstrate how users can easily expand cells to read full content when the default view shows only a truncated version with ellipsis.",shortText:"Quick summary here",longTitle:"Chief Marketing Officer and Head of Brand Strategy for Global Markets and Customer Experience Enhancement",email:"maria.elena.rodriguez.martinez@another-extremely-long-domain-name.example.org",notes:"Testing various content lengths and how they behave in both collapsed and expanded states. The text should wrap appropriately without overflowing."},{id:3,name:"Robert James Thompson",description:"A comprehensive description that tests the expand functionality with moderate length content. This shows how the feature works with different content lengths and provides a good example of real-world usage.",shortText:"Standard",longTitle:"Director of Operations",email:"robert.thompson@company.com",notes:"Short note about this person and their current projects."},{id:4,name:"Dr. Elizabeth Catherine Pemberton-Williams, PhD, MBA, CISSP",description:"This cell contains an exceptionally detailed description that really pushes the limits of what might be considered reasonable content length. It includes professional background, educational achievements, current responsibilities, ongoing projects, future goals, and various other details that would typically require a much larger display area.",shortText:"Complex background",longTitle:"Chief Technology Officer and Principal Software Architect for Distributed Systems and Cloud Infrastructure with specialization in Cybersecurity and Data Analytics",email:"dr.elizabeth.catherine.pemberton.williams.phd.mba.cissp@enterprise-solutions-technology-consulting.example.net",notes:"Comprehensive notes about professional achievements, certifications, ongoing projects, and future development plans. This tests the maximum reasonable content length."}],xn=[{key:"description",header:"Description",width:200},{key:"longTitle",header:"Job Title",width:120},{key:"email",header:"Email Address",width:100},{key:"shortText",header:"Type",width:100},{key:"notes",header:"Notes",width:100}],q={render:n=>{const[t,r]=c.useState(new Set);return e.jsxs("div",{style:{width:"1000px",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Row Content Expansion - Long Text Handling"}),e.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666",lineHeight:1.5},children:[e.jsx("strong",{children:"Click the expand icon"})," at the beginning of each row to expand/collapse ALL cells in that row. This example tests:",e.jsx("br",{}),"• Very long email addresses that should be ellipsed when collapsed",e.jsx("br",{}),"• Long text content that should wrap without breaking cell width constraints",e.jsx("br",{}),"• Proper word breaking for extremely long content",e.jsx("br",{}),"• Layout stability when transitioning between collapsed and expanded states"]}),e.jsx("div",{style:{border:"1px solid #e1e5e9",borderRadius:"8px",overflow:"hidden"},children:e.jsx(R,{...n,data:wn,primaryColumn:[{key:"name",header:"Full Name"}],fixedColumns:xn,selectable:!1,isRowsExpandable:!0,expandedRowIds:[...t],onToggleRowExpansion:o=>{const l=new Set(t);l.has(o)?l.delete(o):l.add(o),r(l)}})}),e.jsx("p",{style:{margin:"16px 0 0 0",fontSize:"12px",color:"#888",fontStyle:"italic"},children:"Test the table with your browser's developer tools at different widths to verify responsive behavior."})]})},args:{renderRowActions:void 0}};var ce,me,pe;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(me=P.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var he,ue,ge;H.parameters={...H.parameters,docs:{...(he=H.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ge=(ue=H.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var we,xe,ye;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ye=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var fe,Ce,be;$.parameters={...$.parameters,docs:{...(fe=$.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(be=(Ce=$.parameters)==null?void 0:Ce.docs)==null?void 0:be.source}}};var ke,Se,Re;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(De=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};const An=["Default","FixedHeader","HorizontalScrollWithFixedHeaderControl","PinnedColumnsWithFixedHeader","ExpandableRows","CellExpansion"];export{q as CellExpansion,P as Default,W as ExpandableRows,H as FixedHeader,F as HorizontalScrollWithFixedHeaderControl,$ as PinnedColumnsWithFixedHeader,An as __namedExportsOrder,jn as default};
