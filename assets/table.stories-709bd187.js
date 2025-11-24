import{j as e}from"./jsx-runtime-3169928d.js";import{r as p}from"./index-d33a4676.js";import{c as Ke}from"./bind-f5c6fce5.js";import{S as oe,a as Qe}from"./arrowUp-86f23e84.js";import{S as re}from"./chevronDownDropdown-3c901902.js";import{C as ie}from"./checkbox-24bb629b.js";import{P as Ze}from"./popover-f3624ffa.js";import{S as en}from"./meatballMenu-3f4bf33c.js";import"./keyCodes-e5060420.js";import"./floating-ui.react-09d3bb8c.js";import"./index-f454028f.js";import"./floatingUi-59569704.js";const X=t=>typeof t=="string",nn="_table_m8adn_1",tn="_selectable_m8adn_56",an="_expanded_m8adn_52",sn="_label_m8adn_269",on={table:nn,"fixed-header":"_fixed-header_m8adn_8","horizontally-scrollable-container":"_horizontally-scrollable-container_m8adn_14","table-header":"_table-header_m8adn_19","sticky-header":"_sticky-header_m8adn_25","horizontally-scrollable":"_horizontally-scrollable_m8adn_14","table-row":"_table-row_m8adn_47","expanded-cell":"_expanded-cell_m8adn_52",selectable:tn,"row-content-wrapper":"_row-content-wrapper_m8adn_60","table-row-content":"_table-row-content_m8adn_65","expand-cell":"_expand-cell_m8adn_81","size-small":"_size-small_m8adn_84","size-large":"_size-large_m8adn_95","table-body":"_table-body_m8adn_110","scrollable-body":"_scrollable-body_m8adn_116","table-header-cell":"_table-header-cell_m8adn_162","table-cell":"_table-cell_m8adn_163","action-menu-cell":"_action-menu-cell_m8adn_170","checkbox-cell":"_checkbox-cell_m8adn_195","expand-icon":"_expand-icon_m8adn_241",expanded:an,"primary-cell":"_primary-cell_m8adn_250",label:sn,"sortable-cell":"_sortable-cell_m8adn_280","align-right":"_align-right_m8adn_283","align-center":"_align-center_m8adn_289","pinned-column":"_pinned-column_m8adn_292"},T="asc",rn="desc",D=32,_e=100,ln=48,V=t=>t.toLowerCase()===T,B=(t,n)=>n?[...t].sort((i,s)=>{const r=i[n.key].content||i[n.key],l=s[n.key].content||s[n.key];return r<l?V(n.direction)?-1:1:r>l?V(n.direction)?1:-1:0}):t,dn=t=>t.map(n=>n.key),je=t=>V(t)?rn:T,v=t=>"primary"in t&&t.primary===!0,cn=t=>{var i;return`size-${((i=t.rowConfigs)==null?void 0:i.size)??"default"}`},mn=(t,n,i,s,r)=>{let l=0;s&&(l+=D),r&&(l+=D);for(let u=0;u<t;u++){const h=n[u];if(v(h)){const o=i.current.get(h.key)||_e;l+=o}else{const o=h,d=X(o.width)?parseInt(o.width,10)||0:o.width;l+=d}}return l},M=(t,n,i,s,r,l,u)=>{const h={};if(!v(t)){const o=t;h.textAlign=o.align}if(n&&i!==void 0){const o=mn(i,s,r,l,u);h.left=`${o}px`}return h},le=(t,n,i,s,r,l=!1)=>{const u=[];i&&u.push(`${D}px`),l&&s&&u.push(`${D}px`);const h=o=>{if(v(o)){const d=o,g=d.width?X(d.width)?d.width:`${d.width}px`:`${_e}px`;u.push(`minmax(${g}, 1fr)`)}else{const d=o,g=X(d.width)?d.width:`${d.width}px`;u.push(g)}};return t.forEach(h),n.forEach(h),r&&u.push(`${ln}px`),u.join(" ")},pn=({primaryColumns:t,fixedColumns:n,pinnedColumnKeys:i})=>p.useMemo(()=>{const s=[],r=[];return t.forEach(l=>{const u={...l,primary:!0};i.includes(l.key)?s.push(u):r.push(u)}),n.forEach(l=>{i.includes(l.key)?s.push(l):r.push(l)}),{pinnedColumns:s,scrollableColumns:r}},[t,n,i]),hn=()=>{const[t,n]=p.useState(null),[i,s]=p.useState(null),r=p.useCallback(o=>{n(o)},[]),l=p.useCallback(()=>{n(null)},[]),u=p.useCallback(o=>{s(o)},[]),h=p.useCallback(()=>{s(null)},[]);return{hoveredColumn:t,hoveredRow:i,handleColumnMouseEnter:r,handleColumnMouseLeave:l,handleRowMouseEnter:u,handleRowMouseLeave:h}},un=({primaryColumns:t,fixedColumns:n,expandedRowIds:i,onToggleRowExpansion:s})=>{const[r,l]=p.useState(new Set);p.useEffect(()=>{const o=[...t.map(g=>g.key),...n.map(g=>g.key)],d=new Set;i.forEach(g=>{o.forEach(y=>{d.add(`${g}-${y}`)})}),l(g=>{if(g.size===d.size){let y=!0;if(g.forEach(c=>{d.has(c)||(y=!1)}),y)return g}return d})},[i,t,n]);const u=p.useCallback(o=>{const d=new Set(r),g=i.includes(o),y=[...t.map(c=>c.key),...n.map(c=>c.key)];g?y.forEach(c=>{const m=`${o}-${c}`;d.delete(m)}):y.forEach(c=>{const m=`${o}-${c}`;d.add(m)}),l(d),s(o)},[r,i,t,n,s]),h=p.useCallback((o,d)=>{const g=`${o}-${d}`;return r.has(g)},[r]);return{expandedCells:r,handleToggleRowExpansion:u,isCellExpanded:h}},gn=()=>{const t=p.useRef(new Map),n=p.useCallback(i=>s=>{if(!s)return;const r=s.getBoundingClientRect().width;r>0&&t.current.set(i,r)},[]);return{columnWidthsRef:t,setCellRef:n}},w=Ke.bind(on),de=({column:t})=>{const n=p.useRef(null),[i,s]=p.useState(!1);return p.useEffect(()=>{if(n.current){const r=n.current.offsetWidth,l=n.current.scrollWidth;s(l>r)}},[t.header]),e.jsx("span",{ref:n,title:i?t.header:void 0,children:t.header})},R=({data:t,primaryColumn:n,fixedColumns:i,renderRowActions:s,className:r="",rowClassName:l="",headerClassName:u="",selectable:h=!1,selectedRowIds:o=[],sortingDirection:d=T,sortingColumn:g,sortableColumns:y,isHeaderFixed:c=!1,isHorizontallyScrollable:m=!1,pinnedColumnKeys:b=[],isRowsExpandable:x=!1,expandedRowIds:A=[],onChangeSorting:Pe=()=>{},onToggleRowSelection:Me=()=>{},onToggleAllRowsSelection:He=()=>{},onToggleRowExpansion:Le=()=>{},onToggleAllRowsExpansion:Fe=()=>{}})=>{const E=p.useMemo(()=>Array.isArray(n)?n:[n],[n]),k=g??E[0],_=y??dn([...E,...i]),{pinnedColumns:S,scrollableColumns:j}=pn({primaryColumns:E,fixedColumns:i,pinnedColumnKeys:b}),{hoveredColumn:G,hoveredRow:$e,handleColumnMouseEnter:K,handleColumnMouseLeave:Q,handleRowMouseEnter:We,handleRowMouseLeave:qe}=hn(),{columnWidthsRef:z,setCellRef:Z}=gn(),{handleToggleRowExpansion:Ie,isCellExpanded:ee}=un({primaryColumns:E,fixedColumns:i,expandedRowIds:A,onToggleRowExpansion:Le}),ne=a=>{_.includes(a)&&Pe({key:a,direction:d})},Ve=a=>{Me(a)},Be=()=>{He()},Oe=()=>{Fe()},te=a=>_.includes(a)?(k==null?void 0:k.key)===a?V(d)?e.jsx(oe,{}):e.jsx(Qe,{}):e.jsx(oe,{}):null,Je=t.every(a=>o.includes(a.id)),Ue=t.some(a=>o.includes(a.id)),ae=(o==null?void 0:o.length)>0,Ye=t.every(a=>A.includes(a.id)),Xe=le(S,j,x,h,!!s,!1),Ge=le(S,j,x,h,!!s,!0);return e.jsxs("div",{className:w("table",{"fixed-header":c,"horizontally-scrollable-container":c&&m},r),children:[e.jsxs("div",{className:w("table-header",{"sticky-header":c,"horizontally-scrollable":m},u),style:{gridTemplateColumns:Ge},children:[h&&e.jsx("div",{className:w("table-header-cell","checkbox-cell"),style:{left:x?`${D}px`:"0"},children:ae&&e.jsx(ie,{value:Je,partiallyChecked:Ue,onChange:Be,className:w("checkbox-cell")})}),x&&e.jsx("div",{className:w("table-header-cell","expand-cell"),style:{left:"0"},children:e.jsx("button",{onClick:Oe,"aria-label":"Toggle all rows expansion",children:e.jsx("span",{className:w("expand-icon",{expanded:Ye}),children:e.jsx(re,{})})})}),S.map((a,N)=>e.jsx("button",{className:w("table-header-cell","pinned-column",{[`align-${a.align}`]:"align"in a,"primary-cell":v(a),"sortable-cell":_.includes(a.key)}),style:M(a,!0,N,S,z,x,h),children:e.jsxs("div",{className:w("label"),onClick:()=>ne(a.key),onMouseEnter:()=>K(a.key),onMouseLeave:Q,children:[e.jsx(de,{column:a}),(G===a.key||(k==null?void 0:k.key)===a.key)&&te(a.key)]})},a.key)),j.map(a=>e.jsx("button",{className:w("table-header-cell",{[`align-${a.align}`]:"align"in a,"primary-cell":v(a),"sortable-cell":_.includes(a.key)}),style:M(a,!1,void 0,S,z,x,h),children:e.jsxs("div",{className:w("label"),onClick:()=>ne(a.key),onMouseEnter:()=>K(a.key),onMouseLeave:Q,children:[e.jsx(de,{column:a}),(G===a.key||(k==null?void 0:k.key)===a.key)&&te(a.key)]})},a.key)),s&&e.jsx("div",{className:w("table-header-cell","action-menu-cell")})]}),e.jsx("div",{className:w("table-body",{"scrollable-body":c,"horizontally-scrollable":m}),children:t.map((a,N)=>e.jsxs("div",{className:w("table-row",cn(a),l,{selectable:h}),onMouseEnter:()=>We(N),onMouseLeave:qe,children:[h&&e.jsx("div",{className:w("table-cell","checkbox-cell"),style:{left:x?`${D}px`:"0"},children:(ae||$e===N)&&e.jsx(ie,{value:o.includes(a.id),onChange:()=>Ve(a.id),className:w("checkbox-cell")})}),e.jsx("div",{className:w("row-content-wrapper"),children:e.jsxs("div",{className:w("table-row-content"),style:{gridTemplateColumns:Xe},children:[x&&e.jsx("div",{className:w("table-cell","expand-cell"),style:{left:"0"},children:e.jsx("button",{onClick:()=>Ie(a.id),"aria-label":A.includes(a.id)?"Collapse row":"Expand row","aria-expanded":A.includes(a.id),children:e.jsx("span",{className:w("expand-icon",{expanded:A.includes(a.id)}),children:e.jsx(re,{})})})}),S.map((f,J)=>{const P=ee(a.id,f.key),se=v(f);return e.jsx("div",{ref:se?Z(f.key):void 0,className:w("table-cell","pinned-column",{"primary-cell":se,"expanded-cell":P}),style:M(f,!0,J,S,z,x,h),children:a[f.key].component||a[f.key].content||a[f.key]},f.key)}),j.map(f=>{const J=ee(a.id,f.key),P=v(f);return e.jsx("div",{ref:P?Z(f.key):void 0,className:w("table-cell",{"primary-cell":P,"expanded-cell":J}),style:M(f,!1,void 0,S,z,x,h),children:a[f.key].component||a[f.key].content||a[f.key]},f.key)}),s&&e.jsx("div",{className:w("table-cell","action-menu-cell"),children:s(a.metaData)})]})})]},a.id))})]})};R.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"RowData"}],raw:"RowData[]"},description:""},primaryColumn:{required:!0,tsType:{name:"union",raw:"Column | Column[]",elements:[{name:"Column"},{name:"Array",elements:[{name:"Column"}],raw:"Column[]"}]},description:""},fixedColumns:{required:!0,tsType:{name:"Array",elements:[{name:"FixedColumn"}],raw:"FixedColumn[]"},description:""},renderRowActions:{required:!1,tsType:{name:"signature",type:"function",raw:"(metaData?: MetaData) => ReactNode",signature:{arguments:[{type:{name:"MetaData"},name:"metaData"}],return:{name:"ReactNode"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},headerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rowClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortingDirection:{required:!1,tsType:{name:"union",raw:"typeof ASC | typeof DESC | Uppercase<typeof ASC | typeof DESC>",elements:[{name:"ASC"},{name:"DESC"},{name:"Uppercase",elements:[{name:"union",raw:"typeof ASC | typeof DESC",elements:[{name:"ASC"},{name:"DESC"}]}],raw:"Uppercase<typeof ASC | typeof DESC>"}]},description:"",defaultValue:{value:"'asc'",computed:!1}},sortingColumn:{required:!1,tsType:{name:"Column"},description:""},sortableColumns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isHeaderFixed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontallyScrollable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pinnedColumnKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},isRowsExpandable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},setExpandedRowIds:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Set",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Set<string | number>"}],raw:"SetStateAction<Set<string | number>>"}],raw:"Dispatch<SetStateAction<Set<string | number>>>"},description:""},onChangeSorting:{required:!1,tsType:{name:"signature",type:"function",raw:"(sortConfig?: SortConfig) => void",signature:{arguments:[{type:{name:"SortConfig"},name:"sortConfig"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const jn={title:"Tables & Lists/Table",component:R,parameters:{layout:"centered"},tags:["autodocs"],args:{selectable:!0}},O=()=>e.jsx(Ze,{placement:"bottom-end",content:e.jsxs("div",{children:[e.jsx("p",{children:"Edit"}),e.jsx("p",{children:"Rename"})]}),children:e.jsx(en,{})}),U=[{id:1,name:{content:"Sam",component:e.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],C=[{key:"name",header:"Name"}],ce=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],H={render:t=>{const[n,i]=p.useState({key:C[0].key,direction:T}),[s,r]=p.useState(C[0]),[l,u]=p.useState(T),h=B(U,n),[o,d]=p.useState(h),[g,y]=p.useState(new Set([]));return p.useEffect(()=>{const{key:c,direction:m}=n,b=[...ce,...C].find(x=>x.key===c);u(m),r(b)},[n]),e.jsx("div",{style:{minWidth:"700px"},children:e.jsx(R,{...t,primaryColumn:C,data:o,sortableColumns:[C[0].key],onChangeSorting:(c=n)=>{let{direction:m}=c;const{key:b}=c;m=je(m);const x=B(o,{key:b,direction:m});i({key:b,direction:m}),d(x)},onToggleRowSelection:c=>{const m=new Set(g);m.has(c)?m.delete(c):m.add(c),y(m)},onToggleAllRowsSelection:()=>{if(g.size===U.length)y(new Set);else{const c=new Set(U.map(m=>m.id));y(c)}},selectedRowIds:[...g],sortingColumn:s,sortingDirection:l})})},args:{fixedColumns:ce,renderRowActions:O,selectable:!0}},I=[{id:1,name:"John Doe",email:"john.doe@example.com",phone:"+1-555-123-4567",address:"123 Main Street, New York, NY 10001",department:"Engineering",role:"Senior Software Engineer",salary:"$120,000",startDate:"2020-01-15",status:"Active",manager:"Jane Smith",projects:"Project Alpha, Project Beta",rowConfigs:{size:"small"}},{id:2,name:"Jane Smith",email:"jane.smith@example.com",phone:"+1-555-987-6543",address:"456 Oak Avenue, Los Angeles, CA 90210",department:"Marketing",role:"Marketing Director",salary:"$95,000",startDate:"2019-03-20",status:"Active",manager:"Robert Johnson",projects:"Campaign X, Campaign Y",rowConfigs:{size:"small"}},{id:3,name:"Mike Wilson",email:"mike.wilson@example.com",phone:"+1-555-456-7890",address:"789 Pine Road, Chicago, IL 60601",department:"Sales",role:"Sales Representative",salary:"$75,000",startDate:"2021-06-10",status:"Active",manager:"Sarah Davis",projects:"Client Onboarding, Lead Generation",rowConfigs:{size:"small"}},{id:4,name:"Sarah Davis",email:"sarah.davis@example.com",phone:"+1-555-234-5678",address:"321 Elm Street, Houston, TX 77001",department:"HR",role:"HR Manager",salary:"$85,000",startDate:"2018-09-12",status:"Active",manager:"Michael Brown",projects:"Employee Onboarding, Policy Updates",rowConfigs:{size:"small"}},{id:5,name:"Robert Johnson",email:"robert.johnson@example.com",phone:"+1-555-345-6789",address:"654 Maple Drive, Phoenix, AZ 85001",department:"Finance",role:"Financial Analyst",salary:"$78,000",startDate:"2020-11-08",status:"Active",manager:"Emily White",projects:"Budget Planning, Cost Analysis",rowConfigs:{size:"small"}},{id:6,name:"Emily White",email:"emily.white@example.com",phone:"+1-555-456-7891",address:"987 Cedar Lane, Philadelphia, PA 19101",department:"Operations",role:"Operations Manager",salary:"$110,000",startDate:"2017-05-22",status:"Active",manager:"David Green",projects:"Process Optimization, Quality Control",rowConfigs:{size:"small"}},{id:7,name:"David Green",email:"david.green@example.com",phone:"+1-555-567-8901",address:"147 Birch Avenue, San Antonio, TX 78201",department:"Engineering",role:"Lead Developer",salary:"$135,000",startDate:"2016-02-14",status:"Active",manager:"Lisa Thompson",projects:"Architecture Review, Team Mentoring",rowConfigs:{size:"small"}},{id:8,name:"Lisa Thompson",email:"lisa.thompson@example.com",phone:"+1-555-678-9012",address:"258 Spruce Court, San Diego, CA 92101",department:"Product",role:"Product Manager",salary:"$105,000",startDate:"2019-08-30",status:"Active",manager:"Tom Anderson",projects:"Feature Planning, User Research",rowConfigs:{size:"small"}},{id:9,name:"Tom Anderson",email:"tom.anderson@example.com",phone:"+1-555-789-0123",address:"369 Willow Street, Dallas, TX 75201",department:"Design",role:"UX Designer",salary:"$88,000",startDate:"2021-01-18",status:"Active",manager:"Anna Martinez",projects:"UI Redesign, User Testing",rowConfigs:{size:"small"}},{id:10,name:"Anna Martinez",email:"anna.martinez@example.com",phone:"+1-555-890-1234",address:"741 Poplar Boulevard, San Jose, CA 95101",department:"QA",role:"QA Engineer",salary:"$82,000",startDate:"2020-07-25",status:"Active",manager:"John Doe",projects:"Automation Testing, Bug Tracking",rowConfigs:{size:"small"}}],ze=[{key:"name",header:"Full Name"}],Ne=[{key:"email",header:"Email Address",width:200},{key:"phone",header:"Phone Number",width:150},{key:"address",header:"Address",width:250},{key:"department",header:"Department",width:120},{key:"role",header:"Job Role",width:180},{key:"salary",header:"Salary",width:100},{key:"startDate",header:"Start Date",width:120},{key:"status",header:"Status",width:100},{key:"manager",header:"Manager",width:150},{key:"projects",header:"Current Projects",width:200}],wn=t=>{const n=["John","Jane","Mike","Sarah","David","Emma","Chris","Lisa","Tom","Anna"],i=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose"],s=["Engineering","Marketing","Sales","HR","Finance","Operations","Design","Product","Legal","Support"];return Array.from({length:t},(r,l)=>({id:l+1,name:`${n[l%n.length]} ${l+1}`,age:22+l%40,city:i[l%i.length],department:s[l%s.length],email:`user${l+1}@example.com`,salary:`$${(5e4+l*1e3%1e5).toLocaleString()}`}))},Y=wn(50),me=[{key:"age",header:"Age",width:80,align:"right"},{key:"city",header:"City",width:120},{key:"department",header:"Department",width:120},{key:"email",header:"Email",width:200},{key:"salary",header:"Salary",width:100,align:"right"}],L={render:t=>{const[n,i]=p.useState({key:C[0].key,direction:T}),[s,r]=p.useState(C[0]),[l,u]=p.useState(T),h=B(Y,n),[o,d]=p.useState(h),[g,y]=p.useState(new Set([]));return p.useEffect(()=>{const{key:c,direction:m}=n,b=[...me,...C].find(x=>x.key===c);u(m),r(b)},[n]),e.jsxs("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Fixed Header Table with Scrollable Body"}),e.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",overflow:"auto"},children:e.jsx(R,{...t,data:o,primaryColumn:C,fixedColumns:me,isHeaderFixed:!0,sortableColumns:[C[0].key,"age","department"],onChangeSorting:(c=n)=>{let{direction:m}=c;const{key:b}=c;m=je(m);const x=B(o,{key:b,direction:m});i({key:b,direction:m}),d(x)},onToggleRowSelection:c=>{const m=new Set(g);m.has(c)?m.delete(c):m.add(c),y(m)},onToggleAllRowsSelection:()=>{if(g.size===Y.length)y(new Set);else{const c=new Set(Y.map(m=>m.id));y(c)}},selectedRowIds:[...g],sortingColumn:s,sortingDirection:l})})]})},args:{selectable:!0,renderRowActions:O}},F={render:t=>e.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Fixed Header + Horizontal Scroll: Both scrollbars visible when needed"}),e.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",position:"relative"},children:e.jsx(R,{...t,data:I,primaryColumn:ze,fixedColumns:Ne,isHorizontallyScrollable:!0,isHeaderFixed:!0})})]}),args:{selectable:!1,renderRowActions:O}},$={render:t=>{const[n,i]=p.useState(new Set([]));return e.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Pinned Columns + Fixed Header: Name and Email pinned with vertical and horizontal scrolling"}),e.jsx("div",{className:"storybook-table-wrapper",style:{width:"550px",height:"calc(100% - 50px)",position:"relative"},children:e.jsx(R,{...t,data:I,primaryColumn:ze,fixedColumns:Ne,isHorizontallyScrollable:!0,isHeaderFixed:!0,pinnedColumnKeys:["name","email","department"],onToggleRowSelection:s=>{const r=new Set(n);r.has(s)?r.delete(s):r.add(s),i(r)},onToggleAllRowsSelection:()=>{if(n.size===I.length)i(new Set);else{const s=new Set(I.map(r=>r.id));i(s)}},selectedRowIds:[...n]})})]})},args:{selectable:!0,renderRowActions:O}},W={render:t=>{const[n,i]=p.useState(new Set([1])),[s,r]=p.useState(new Set([])),l=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"sam.johnson@example.com"},{id:2,name:"Anna Smith",age:32,city:"San Francisco",department:"Design",email:"anna.smith@example.com"},{id:3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",email:"mike.davis@example.com"},{id:4,name:"Sarah Wilson",age:35,city:"Chicago",department:"Sales",email:"sarah.wilson@example.com"}],u=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:100},{key:"city",header:"City",width:100}],h=[{key:"name",header:"Name"}];return e.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows Example"}),e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Click the expand/collapse icons to view detailed information for each row. Rows can be expanded and collapsed independently."}),e.jsx(R,{...t,data:l,primaryColumn:h,fixedColumns:u,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...n],setExpandedRowIds:i,onToggleRowExpansion:o=>{const d=new Set(n);d.has(o)?d.delete(o):d.add(o),i(d)},selectedRowIds:[...s],onToggleRowSelection:o=>{const d=new Set(s);d.has(o)?d.delete(o):d.add(o),r(d)},onToggleAllRowsSelection:()=>{if(s.size===l.length)r(new Set);else{const o=new Set(l.map(d=>d.id));r(o)}}})]})},args:{selectable:!0}},xn=[{id:1,name:"John Alexander Maximilian Winchester-Blackwood III",description:"This is long text but anyway no matter ellipsed or opened it should not overcome his width it can be brake. When you click on this cell, it will expand to show the full content without ellipsis truncation, and the text should wrap properly within the cell boundaries without breaking the table layout.",shortText:"Brief note",longTitle:"Senior Vice President of Engineering and Technology Development for Enterprise Solutions and Digital Transformation Initiatives",email:"john.alexander.maximilian.winchester.blackwood.third@very-long-company-name-example.com",notes:"This is a comprehensive test of how the table handles extremely long content that would normally break layouts. The content should be properly contained within cell boundaries."},{id:2,name:"Maria Elena Rodriguez-Martinez",description:"Another extremely lengthy description that showcases the cell expansion capabilities. This description contains detailed information about the person, their role, responsibilities, and achievements. The purpose is to demonstrate how users can easily expand cells to read full content when the default view shows only a truncated version with ellipsis.",shortText:"Quick summary here",longTitle:"Chief Marketing Officer and Head of Brand Strategy for Global Markets and Customer Experience Enhancement",email:"maria.elena.rodriguez.martinez@another-extremely-long-domain-name.example.org",notes:"Testing various content lengths and how they behave in both collapsed and expanded states. The text should wrap appropriately without overflowing."},{id:3,name:"Robert James Thompson",description:"A comprehensive description that tests the expand functionality with moderate length content. This shows how the feature works with different content lengths and provides a good example of real-world usage.",shortText:"Standard",longTitle:"Director of Operations",email:"robert.thompson@company.com",notes:"Short note about this person and their current projects."},{id:4,name:"Dr. Elizabeth Catherine Pemberton-Williams, PhD, MBA, CISSP",description:"This cell contains an exceptionally detailed description that really pushes the limits of what might be considered reasonable content length. It includes professional background, educational achievements, current responsibilities, ongoing projects, future goals, and various other details that would typically require a much larger display area.",shortText:"Complex background",longTitle:"Chief Technology Officer and Principal Software Architect for Distributed Systems and Cloud Infrastructure with specialization in Cybersecurity and Data Analytics",email:"dr.elizabeth.catherine.pemberton.williams.phd.mba.cissp@enterprise-solutions-technology-consulting.example.net",notes:"Comprehensive notes about professional achievements, certifications, ongoing projects, and future development plans. This tests the maximum reasonable content length."}],yn=[{key:"description",header:"Description",width:200},{key:"longTitle",header:"Job Title",width:120},{key:"email",header:"Email Address",width:100},{key:"shortText",header:"Type",width:100},{key:"notes",header:"Notes",width:100}],q={render:t=>{const[n,i]=p.useState(new Set);return e.jsxs("div",{style:{width:"1000px",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Row Content Expansion - Long Text Handling"}),e.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666",lineHeight:1.5},children:[e.jsx("strong",{children:"Click the expand icon"})," at the beginning of each row to expand/collapse ALL cells in that row. This example tests:",e.jsx("br",{}),"• Very long email addresses that should be ellipsed when collapsed",e.jsx("br",{}),"• Long text content that should wrap without breaking cell width constraints",e.jsx("br",{}),"• Proper word breaking for extremely long content",e.jsx("br",{}),"• Layout stability when transitioning between collapsed and expanded states"]}),e.jsx("div",{style:{border:"1px solid #e1e5e9",borderRadius:"8px",overflow:"hidden"},children:e.jsx(R,{...t,data:xn,primaryColumn:[{key:"name",header:"Full Name"}],fixedColumns:yn,selectable:!1,isRowsExpandable:!0,expandedRowIds:[...n],onToggleRowExpansion:s=>{const r=new Set(n);r.has(s)?r.delete(s):r.add(s),i(r)}})}),e.jsx("p",{style:{margin:"16px 0 0 0",fontSize:"12px",color:"#888",fontStyle:"italic"},children:"Test the table with your browser's developer tools at different widths to verify responsive behavior."})]})},args:{renderRowActions:void 0}};var pe,he,ue;H.parameters={...H.parameters,docs:{...(pe=H.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(he=H.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var ge,we,xe;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(xe=(we=L.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var ye,fe,be;F.parameters={...F.parameters,docs:{...(ye=F.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var Ce,ke,Se;$.parameters={...$.parameters,docs:{...(Ce=$.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Se=(ke=$.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var Re,ve,Te;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Te=(ve=W.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var De,Ae,Ee;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ee=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.source}}};const zn=["Default","FixedHeader","HorizontalScrollWithFixedHeaderControl","PinnedColumnsWithFixedHeader","ExpandableRows","CellExpansion"];export{q as CellExpansion,H as Default,W as ExpandableRows,L as FixedHeader,F as HorizontalScrollWithFixedHeaderControl,$ as PinnedColumnsWithFixedHeader,zn as __namedExportsOrder,jn as default};
