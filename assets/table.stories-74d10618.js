import{j as e}from"./jsx-runtime-2f188e98.js";import{T as g,A as T,s as z,t as ne}from"./table-de70aa52.js";import{A as Dn}from"./actionMenu-fb657254.js";import{r as c}from"./index-3553ef47.js";import"./index-4c891f75.js";import"./index-d0bd1ed5.js";import"./bind-d8141dee.js";import"./resizeColumn-eebfb371.js";import"./chevronDownDropdown-69a9d5c1.js";import"./checkbox-322ca70a.js";import"./keyCodes-e5060420.js";import"./tooltip-280b52d3.js";import"./floating-ui.react-ea29885b.js";import"./floatingUi-c696ea36.js";import"./useEllipsisTitle-1cddebe3.js";import"./isEmpty-6ac0b123.js";import"./details-d199936c.js";import"./baseIconButton-9b03f096.js";import"./popover-8346e5d8.js";const Qn={title:"Tables & Lists/Table",component:g,parameters:{layout:"centered",docs:{description:{component:"\nA flexible table component with support for:\n- **Row sizes**: Configure via `rowConfigs: { size: 'small' | 'medium' | 'large' }` in row data\n- **Expandable rows**: Enable with `isRowsExpandable` prop\n- **Pinned columns**: Use `pinnedColumnKeys` to pin columns to the left\n- **Sorting**: Configure with `sortableColumns`, `sortingColumn`, `sortingDirection`\n- **Selection**: Enable with `selectable` prop\n- **Custom cell content**: Use `DetailedCellData` with `content` and `component` properties\n        "}}},tags:["autodocs"],argTypes:{data:{description:"Array of row data. Each row should have an `id` and can include `rowConfigs` for size configuration.",table:{type:{summary:"RowData[]"}}},primaryColumn:{description:"The main column configuration (typically the name/title column).",table:{type:{summary:"Column | Column[]"}}},fixedColumns:{description:"Array of fixed-width columns with optional alignment.",table:{type:{summary:"FixedColumn[]"}}},selectable:{description:"Enable row selection with checkboxes.",control:"boolean",table:{defaultValue:{summary:"false"}}},isRowsExpandable:{description:"Enable expand/collapse functionality for rows with long content.",control:"boolean",table:{defaultValue:{summary:"false"}}},expandedRowIds:{description:"Array of row IDs that are currently expanded.",table:{type:{summary:"(string | number)[]"}}},isAllExpandedByDefault:{description:"Whether all rows should be expanded by default.",control:"boolean",table:{defaultValue:{summary:"false"}}},expandAllTooltip:{description:"Tooltip text for the expand all button.",table:{type:{summary:"ReactNode"}}},pinnedColumnKeys:{description:"Array of column keys to pin to the left side of the table.",table:{type:{summary:"string[]"}}},sortableColumns:{description:"Array of column keys that can be sorted.",table:{type:{summary:"string[]"}}},sortingColumn:{description:"Currently sorted column.",table:{type:{summary:"Column"}}},sortingDirection:{description:"Current sorting direction.",control:"select",options:["ASC","DESC"],table:{type:{summary:"'ASC' | 'DESC'"}}},isHeaderFixed:{description:"Keep the header fixed when scrolling vertically.",control:"boolean",table:{defaultValue:{summary:"false"}}},isHorizontallyScrollable:{description:"Enable horizontal scrolling for wide tables.",control:"boolean",table:{defaultValue:{summary:"false"}}},className:{description:"Custom CSS class for the table container.",table:{type:{summary:"string"}}},headerClassName:{description:"Custom CSS class for the table header. Use this to customize header background, borders, etc.",table:{type:{summary:"string"}}},bodyClassName:{description:"Custom CSS class for the table body. Use this to customize row gap, padding, etc.",table:{type:{summary:"string"}}},rowClassName:{description:"Custom CSS class for table rows.",table:{type:{summary:"string"}}},onToggleRowExpansion:{description:"Callback when a row is expanded/collapsed.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsExpansion:{description:"Callback when all rows are expanded/collapsed.",table:{type:{summary:"() => void"}}},onToggleRowSelection:{description:"Callback when a row is selected/deselected.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsSelection:{description:"Callback when all rows are selected/deselected.",table:{type:{summary:"() => void"}}},onChangeSorting:{description:"Callback when sorting changes.",table:{type:{summary:"(sortConfig?: SortConfig) => void"}}},renderRowActions:{description:"Function to render action menu for each row.",table:{type:{summary:"(metaData?: MetaData) => ReactNode"}}}},args:{selectable:!0}},S=()=>e.jsx(Dn,{items:[{label:"Edit"},{label:"Rename"},{type:"divider"},{label:"Delete"}],placement:"bottom-end"}),v=[{id:1,name:{content:"Sam",component:e.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],y=[{key:"name",header:"Name"}],$=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],U={render:o=>{const[n,t]=c.useState({key:y[0].key,direction:T}),[a,d]=c.useState(y[0]),[i,m]=c.useState(T),x=z(v,n),[h,u]=c.useState(x),[b,w]=c.useState(new Set([]));return c.useEffect(()=>{const{key:s,direction:l}=n,p=[...$,...y].find(r=>r.key===s);m(l),d(p)},[n]),e.jsx("div",{style:{minWidth:"700px"},children:e.jsx(g,{...o,primaryColumn:y,data:h,sortableColumns:[y[0].key],onChangeSorting:(s=n)=>{let{direction:l}=s;const{key:p}=s;l=ne(l);const r=z(h,{key:p,direction:l});t({key:p,direction:l}),u(r)},onToggleRowSelection:s=>{const l=new Set(b);l.has(s)?l.delete(s):l.add(s),w(l)},onToggleAllRowsSelection:()=>{if(b.size===v.length)w(new Set);else{const s=new Set(v.map(l=>l.id));w(s)}},selectedRowIds:[...b],sortingColumn:a,sortingDirection:i})})},args:{fixedColumns:$,renderRowActions:S,selectable:!0}},C=[{id:1,name:"John Doe",email:"john.doe@example.com",phone:"+1-555-123-4567",address:"123 Main Street, New York, NY 10001",department:"Engineering",role:"Senior Software Engineer",salary:"$120,000",startDate:"2020-01-15",status:"Active",manager:"Jane Smith",projects:"Project Alpha, Project Beta",rowConfigs:{size:"small"}},{id:2,name:"Jane Smith",email:"jane.smith@example.com",phone:"+1-555-987-6543",address:"456 Oak Avenue, Los Angeles, CA 90210",department:"Marketing",role:"Marketing Director",salary:"$95,000",startDate:"2019-03-20",status:"Active",manager:"Robert Johnson",projects:"Campaign X, Campaign Y",rowConfigs:{size:"small"}},{id:3,name:"Mike Wilson",email:"mike.wilson@example.com",phone:"+1-555-456-7890",address:"789 Pine Road, Chicago, IL 60601",department:"Sales",role:"Sales Representative",salary:"$75,000",startDate:"2021-06-10",status:"Active",manager:"Sarah Davis",projects:"Client Onboarding, Lead Generation",rowConfigs:{size:"small"}},{id:4,name:"Sarah Davis",email:"sarah.davis@example.com",phone:"+1-555-234-5678",address:"321 Elm Street, Houston, TX 77001",department:"HR",role:"HR Manager",salary:"$85,000",startDate:"2018-09-12",status:"Active",manager:"Michael Brown",projects:"Employee Onboarding, Policy Updates",rowConfigs:{size:"small"}},{id:5,name:"Robert Johnson",email:"robert.johnson@example.com",phone:"+1-555-345-6789",address:"654 Maple Drive, Phoenix, AZ 85001",department:"Finance",role:"Financial Analyst",salary:"$78,000",startDate:"2020-11-08",status:"Active",manager:"Emily White",projects:"Budget Planning, Cost Analysis",rowConfigs:{size:"small"}},{id:6,name:"Emily White",email:"emily.white@example.com",phone:"+1-555-456-7891",address:"987 Cedar Lane, Philadelphia, PA 19101",department:"Operations",role:"Operations Manager",salary:"$110,000",startDate:"2017-05-22",status:"Active",manager:"David Green",projects:"Process Optimization, Quality Control",rowConfigs:{size:"small"}},{id:7,name:"David Green",email:"david.green@example.com",phone:"+1-555-567-8901",address:"147 Birch Avenue, San Antonio, TX 78201",department:"Engineering",role:"Lead Developer",salary:"$135,000",startDate:"2016-02-14",status:"Active",manager:"Lisa Thompson",projects:"Architecture Review, Team Mentoring",rowConfigs:{size:"small"}},{id:8,name:"Lisa Thompson",email:"lisa.thompson@example.com",phone:"+1-555-678-9012",address:"258 Spruce Court, San Diego, CA 92101",department:"Product",role:"Product Manager",salary:"$105,000",startDate:"2019-08-30",status:"Active",manager:"Tom Anderson",projects:"Feature Planning, User Research",rowConfigs:{size:"small"}},{id:9,name:"Tom Anderson",email:"tom.anderson@example.com",phone:"+1-555-789-0123",address:"369 Willow Street, Dallas, TX 75201",department:"Design",role:"UX Designer",salary:"$88,000",startDate:"2021-01-18",status:"Active",manager:"Anna Martinez",projects:"UI Redesign, User Testing",rowConfigs:{size:"small"}},{id:10,name:"Anna Martinez",email:"anna.martinez@example.com",phone:"+1-555-890-1234",address:"741 Poplar Boulevard, San Jose, CA 95101",department:"QA",role:"QA Engineer",salary:"$82,000",startDate:"2020-07-25",status:"Active",manager:"John Doe",projects:"Automation Testing, Bug Tracking",rowConfigs:{size:"small"}}],R=[{key:"name",header:"Full Name"}],E=[{key:"email",header:"Email Address",width:200},{key:"phone",header:"Phone Number",width:150},{key:"address",header:"Address",width:250},{key:"department",header:"Department",width:120},{key:"role",header:"Job Role",width:180},{key:"salary",header:"Salary",width:100},{key:"startDate",header:"Start Date",width:120},{key:"status",header:"Status",width:100},{key:"manager",header:"Manager",width:150},{key:"projects",header:"Current Projects",width:200}],vn=o=>{const n=["John","Jane","Mike","Sarah","David","Emma","Chris","Lisa","Tom","Anna"],t=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose"],a=["Engineering","Marketing","Sales","HR","Finance","Operations","Design","Product","Legal","Support"];return Array.from({length:o},(d,i)=>({id:i+1,name:`${n[i%n.length]} ${i+1}`,age:22+i%40,city:t[i%t.length],department:a[i%a.length],email:`user${i+1}@example.com`,salary:`$${(5e4+i*1e3%1e5).toLocaleString()}`}))},J=vn(50),q=[{key:"age",header:"Age",width:80,align:"right"},{key:"city",header:"City",width:120},{key:"department",header:"Department",width:120},{key:"email",header:"Email",width:200},{key:"salary",header:"Salary",width:100,align:"right"}],Y={render:o=>{const[n,t]=c.useState({key:y[0].key,direction:T}),[a,d]=c.useState(y[0]),[i,m]=c.useState(T),x=z(J,n),[h,u]=c.useState(x),[b,w]=c.useState(new Set([]));return c.useEffect(()=>{const{key:s,direction:l}=n,p=[...q,...y].find(r=>r.key===s);m(l),d(p)},[n]),e.jsxs("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Fixed Header Table with Scrollable Body"}),e.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",overflow:"auto"},children:e.jsx(g,{...o,data:h,primaryColumn:y,fixedColumns:q,isHeaderFixed:!0,sortableColumns:[y[0].key,"age","department"],onChangeSorting:(s=n)=>{let{direction:l}=s;const{key:p}=s;l=ne(l);const r=z(h,{key:p,direction:l});t({key:p,direction:l}),u(r)},onToggleRowSelection:s=>{const l=new Set(b);l.has(s)?l.delete(s):l.add(s),w(l)},onToggleAllRowsSelection:()=>{if(b.size===J.length)w(new Set);else{const s=new Set(J.map(l=>l.id));w(s)}},selectedRowIds:[...b],sortingColumn:a,sortingDirection:i})})]})},args:{selectable:!0,renderRowActions:S}},K={render:o=>e.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Fixed Header + Horizontal Scroll: Both scrollbars visible when needed"}),e.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",position:"relative"},children:e.jsx(g,{...o,data:C,primaryColumn:R,fixedColumns:E,isHorizontallyScrollable:!0,isHeaderFixed:!0})})]}),args:{selectable:!1,renderRowActions:S}},V={render:o=>{const[n,t]=c.useState(new Set([]));return e.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Pinned Columns + Fixed Header: Name and Email pinned with vertical and horizontal scrolling"}),e.jsx("div",{className:"storybook-table-wrapper",style:{width:"550px",height:"calc(100% - 50px)",position:"relative"},children:e.jsx(g,{...o,data:C,primaryColumn:R,fixedColumns:E,isHorizontallyScrollable:!0,isHeaderFixed:!0,pinnedColumnKeys:["name","email","department"],onToggleRowSelection:a=>{const d=new Set(n);d.has(a)?d.delete(a):d.add(a),t(d)},onToggleAllRowsSelection:()=>{if(n.size===C.length)t(new Set);else{const a=new Set(C.map(d=>d.id));t(a)}},selectedRowIds:[...n]})})]})},args:{selectable:!0,renderRowActions:S}},X={render:o=>{const[n,t]=c.useState(new Set([1])),[a,d]=c.useState(new Set([])),i=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"sam.johnson@example.com"},{id:2,name:"Anna Smith",age:32,city:"San Francisco",department:"Design",email:"anna.smith@example.com"},{id:3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",email:"mike.davis@example.com"},{id:4,name:"Sarah Wilson",age:35,city:"Chicago",department:"Sales",email:"sarah.wilson@example.com"}],m=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:100},{key:"city",header:"City",width:100}],x=[{key:"name",header:"Name"}];return e.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows Example"}),e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Click the expand/collapse icons to view detailed information for each row. Rows can be expanded and collapsed independently."}),e.jsx(g,{...o,data:i,primaryColumn:x,fixedColumns:m,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...n],setExpandedRowIds:t,onToggleRowExpansion:h=>{const u=new Set(n);u.has(h)?u.delete(h):u.add(h),t(u)},onToggleAllRowsExpansion:()=>{if(n.size===i.length)t(new Set);else{const h=new Set(i.map(u=>u.id));t(h)}},selectedRowIds:[...a],onToggleRowSelection:h=>{const u=new Set(a);u.has(h)?u.delete(h):u.add(h),d(u)},onToggleAllRowsSelection:()=>{if(a.size===i.length)d(new Set);else{const h=new Set(i.map(u=>u.id));d(h)}}})]})},args:{selectable:!0}},G={render:o=>{const[n,t]=c.useState(new Set([1,2,3,4])),[a,d]=c.useState(!0),[i,m]=c.useState(new Set([])),x=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"anna.smith@example.com"},{id:2,name:"Mike Davis",age:32,city:"San Francisco",department:"Design",email:"mike.davis@example.com"},{id:3,name:"Sarah Wilson",age:28,city:"Los Angeles",department:"Marketing",email:"sarah.wilson@example.com"},{id:4,name:"John Brown",age:35,city:"Chicago",department:"Sales",email:"john.brown@example.com"}],h=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],u=[{key:"name",header:"Name"}],b=a?"Expanded by default":"Collapsed by default";return e.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows with Default State"}),e.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Demonstrates ",e.jsx("strong",{children:"isAllExpandedByDefault"})," and ",e.jsx("strong",{children:"expandAllTooltip"})," ","props. The expandAll icon shows the default state regardless of individual row states. Hover over the expandAll icon to see the tooltip."]}),e.jsx(g,{...o,data:x,primaryColumn:u,fixedColumns:h,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...n],isAllExpandedByDefault:a,expandAllTooltip:b,onToggleRowExpansion:w=>{const s=new Set(n);s.has(w)?s.delete(w):s.add(w),t(s)},onToggleAllRowsExpansion:()=>{const w=!a;d(w),t(w?new Set(x.map(s=>s.id)):new Set)},selectedRowIds:[...i],onToggleRowSelection:w=>{const s=new Set(i);s.has(w)?s.delete(w):s.add(w),m(s)},onToggleAllRowsSelection:()=>{if(i.size===x.length)m(new Set);else{const w=new Set(x.map(s=>s.id));m(w)}}})]})},args:{selectable:!0}},Z=[{id:1,name:"John Alexander Maximilian Winchester-Blackwood III",description:"This is long text but anyway no matter ellipsed or opened it should not overcome his width it can be brake. When you click on this cell, it will expand to show the full content without ellipsis truncation, and the text should wrap properly within the cell boundaries without breaking the table layout.",shortText:"Brief note",longTitle:"Senior Vice President of Engineering and Technology Development for Enterprise Solutions and Digital Transformation Initiatives",email:"john.alexander.maximilian.winchester.blackwood.third@very-long-company-name-example.com",notes:"This is a comprehensive test of how the table handles extremely long content that would normally break layouts. The content should be properly contained within cell boundaries."},{id:2,name:"Maria Elena Rodriguez-Martinez",description:"Another extremely lengthy description that showcases the cell expansion capabilities. This description contains detailed information about the person, their role, responsibilities, and achievements. The purpose is to demonstrate how users can easily expand cells to read full content when the default view shows only a truncated version with ellipsis.",shortText:"Quick summary here",longTitle:"Chief Marketing Officer and Head of Brand Strategy for Global Markets and Customer Experience Enhancement",email:"maria.elena.rodriguez.martinez@another-extremely-long-domain-name.example.org",notes:"Testing various content lengths and how they behave in both collapsed and expanded states. The text should wrap appropriately without overflowing."},{id:3,name:"Robert James Thompson",description:"A comprehensive description that tests the expand functionality with moderate length content. This shows how the feature works with different content lengths and provides a good example of real-world usage.",shortText:"Standard",longTitle:"Director of Operations",email:"robert.thompson@company.com",notes:"Short note about this person and their current projects."},{id:4,name:"Dr. Elizabeth Catherine Pemberton-Williams, PhD, MBA, CISSP",description:"This cell contains an exceptionally detailed description that really pushes the limits of what might be considered reasonable content length. It includes professional background, educational achievements, current responsibilities, ongoing projects, future goals, and various other details that would typically require a much larger display area.",shortText:"Complex background",longTitle:"Chief Technology Officer and Principal Software Architect for Distributed Systems and Cloud Infrastructure with specialization in Cybersecurity and Data Analytics",email:"dr.elizabeth.catherine.pemberton.williams.phd.mba.cissp@enterprise-solutions-technology-consulting.example.net",notes:"Comprehensive notes about professional achievements, certifications, ongoing projects, and future development plans. This tests the maximum reasonable content length."}],Tn=[{key:"description",header:"Description",width:200},{key:"longTitle",header:"Job Title",width:120},{key:"email",header:"Email Address",width:100},{key:"shortText",header:"Type",width:100},{key:"notes",header:"Notes",width:100}],Q={render:o=>{const[n,t]=c.useState(new Set);return e.jsxs("div",{style:{width:"1000px",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Row Content Expansion - Long Text Handling"}),e.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666",lineHeight:1.5},children:[e.jsx("strong",{children:"Click the expand icon"})," at the beginning of each row to expand/collapse ALL cells in that row. This example tests:",e.jsx("br",{}),"• Very long email addresses that should be ellipsed when collapsed",e.jsx("br",{}),"• Long text content that should wrap without breaking cell width constraints",e.jsx("br",{}),"• Proper word breaking for extremely long content",e.jsx("br",{}),"• Layout stability when transitioning between collapsed and expanded states"]}),e.jsx("div",{style:{border:"1px solid #e1e5e9",borderRadius:"8px",overflow:"hidden"},children:e.jsx(g,{...o,data:Z,primaryColumn:[{key:"name",header:"Full Name"}],fixedColumns:Tn,selectable:!1,isRowsExpandable:!0,expandedRowIds:[...n],onToggleRowExpansion:a=>{const d=new Set(n);d.has(a)?d.delete(a):d.add(a),t(d)},onToggleAllRowsExpansion:()=>{if(n.size===Z.length)t(new Set);else{const a=new Set(Z.map(d=>d.id));t(a)}}})}),e.jsx("p",{style:{margin:"16px 0 0 0",fontSize:"12px",color:"#888",fontStyle:"italic"},children:"Test the table with your browser's developer tools at different widths to verify responsive behavior."})]})},args:{renderRowActions:void 0}},j={render:o=>{const[n,t]=c.useState(new Set([1])),[a,d]=c.useState(new Set([5])),[i,m]=c.useState(new Set([9])),x=(p,r)=>[{id:p+1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",rowConfigs:r?{size:r}:void 0},{id:p+2,name:"John Doe with a very long name that should wrap when expanded and demonstrate how the row height increases to accommodate multiple lines of text content",age:32,city:"San Francisco Bay Area, California, United States of America",department:"Design and User Experience Research Department",rowConfigs:r?{size:r}:void 0},{id:p+3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",rowConfigs:r?{size:r}:void 0},{id:p+4,name:"Sarah Elizabeth Wilson-Montgomery III with an exceptionally long hyphenated surname that demonstrates text wrapping behavior in expanded table rows when the content exceeds the available column width",age:35,city:"Chicago Metropolitan Area",department:"Sales and Business Development International Operations",rowConfigs:r?{size:r}:void 0}],h=x(0,"small"),u=x(4),b=x(8,"large"),w=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],s=[{key:"name",header:"Name"}],l=(p,r,f,k,_)=>e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h4",{style:{margin:"0 0 4px 0",fontSize:"14px",color:"#333"},children:p}),e.jsx("p",{style:{margin:"0 0 12px 0",fontSize:"12px",color:"#666"},children:r}),e.jsx(g,{...o,data:f,primaryColumn:s,fixedColumns:w,isRowsExpandable:!0,expandedRowIds:[...k],onToggleRowExpansion:A=>{const D=new Set(k);D.has(A)?D.delete(A):D.add(A),_(D)},onToggleAllRowsExpansion:()=>{if(k.size===f.length)_(new Set);else{const A=new Set(f.map(D=>D.id));_(A)}}})]});return e.jsxs("div",{style:{minWidth:"800px",maxWidth:"1000px"},children:[e.jsx("h3",{style:{margin:"0 0 24px 0",fontSize:"18px",color:"#333"},children:"Row Sizes with Expand - Testing Jump Fix"}),e.jsx("p",{style:{margin:"0 0 24px 0",fontSize:"14px",color:"#666"},children:"Test expand/collapse on each table size. The row height should NOT change when expanding/collapsing (unless content requires more space)."}),l("Small Rows (44px)",'rowConfigs: { size: "small" }',h,n,t),l("Default Rows (64px)","No rowConfigs specified",u,a,d),l("Large Rows (80px)",'rowConfigs: { size: "large" }',b,i,m)]})}},H={render:()=>{const o=[{key:"name",header:"Name"}],n=[{key:"status",header:"Status",width:100},{key:"description",header:"Description",width:250}],t=[{id:1,name:"Small Row 1",description:"Compact row for dense tables",status:"Active",rowConfigs:{size:"small"}},{id:2,name:"Small Row 2",description:"Height: 44px",status:"Active",rowConfigs:{size:"small"}}],a=[{id:1,name:"Default Row 1",description:"Standard row size",status:"Active"},{id:2,name:"Default Row 2",description:"Height: 64px (no rowConfigs needed)",status:"Active"}],d=[{id:1,name:"Large Row 1",description:"Prominent row for emphasis",status:"Active",rowConfigs:{size:"large"}},{id:2,name:"Large Row 2",description:"Height: 80px",status:"Active",rowConfigs:{size:"large"}}];return e.jsxs("div",{style:{minWidth:"600px"},children:[e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Small (44px)"}),e.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "small" }']}),e.jsx(g,{data:t,primaryColumn:o[0],fixedColumns:n,selectable:!1})]}),e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Default (64px)"}),e.jsx("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:"No rowConfigs needed"}),e.jsx(g,{data:a,primaryColumn:o[0],fixedColumns:n,selectable:!1})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Large (80px)"}),e.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "large" }']}),e.jsx(g,{data:d,primaryColumn:o[0],fixedColumns:n,selectable:!1})]})]})}},zn=[{key:"name",header:"Name"}],En=[{key:"status",header:"Status",width:100},{key:"category",header:"Category",width:120}],ee=[{id:1,name:"Test execution with a very long name that demonstrates how text behaves in expanded rows with custom header styling",status:"Passed",category:"Smoke",rowConfigs:{size:"small"}},{id:2,name:"Another test case",status:"Failed",category:"Regression",rowConfigs:{size:"small"}},{id:3,name:"Quick sanity check",status:"Skipped",category:"Sanity",rowConfigs:{size:"small"}}],An=()=>{const[o,n]=c.useState(new Set);return e.jsxs("div",{style:{minWidth:"600px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"18px",color:"#333"},children:"Custom Header Background Color"}),e.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Use the ",e.jsx("code",{children:"headerClassName"})," prop with your own CSS class to customize the header. Pinned columns and expand button inherit the background color automatically."]}),e.jsx("style",{children:`
          .custom-gray-header {
            background-color: var(--rp-ui-base-bg-200) !important;
            border-top: 1px solid var(--rp-ui-base-e-200);
            border-bottom: none;
          }
        `}),e.jsx("div",{style:{border:"1px solid var(--rp-ui-base-e-200)",borderRadius:"4px",overflow:"hidden"},children:e.jsx(g,{data:ee,primaryColumn:zn[0],fixedColumns:En,pinnedColumnKeys:["status"],isRowsExpandable:!0,expandedRowIds:Array.from(o),selectable:!1,headerClassName:"custom-gray-header",onToggleRowExpansion:t=>{const a=new Set(o);a.has(t)?a.delete(t):a.add(t),n(a)},onToggleAllRowsExpansion:()=>{o.size===ee.length?n(new Set):n(new Set(ee.map(t=>t.id)))}})}),e.jsxs("div",{style:{marginTop:"24px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#333"},children:"How to use:"}),e.jsx("pre",{style:{backgroundColor:"#f5f5f5",padding:"12px",borderRadius:"4px",fontSize:"12px",overflow:"auto"},children:`// In your SCSS file:
.custom-header {
  background-color: var(--rp-ui-base-bg-200);
  border-top: 1px solid var(--rp-ui-base-e-200);
  border-bottom: none;
}

// In your component:
<Table
  headerClassName="custom-header"
  // ... other props
/>`})]})]})},P={render:()=>e.jsx(An,{})},W={render:o=>e.jsxs("div",{style:{minWidth:"600px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Resizable Columns (Default Constraints)"}),e.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Drag the column borders in the header to adjust widths. Default constraints:"," ",e.jsx("code",{children:"minColumnWidth=50"}),", ",e.jsx("code",{children:"maxColumnWidth=500"})]}),e.jsx(g,{...o,primaryColumn:y,data:v,fixedColumns:$})]}),args:{renderRowActions:S,isResizable:!0}},F={render:o=>e.jsx("div",{style:{minWidth:"600px"},children:e.jsx(g,{...o,primaryColumn:y,data:v,fixedColumns:$})}),args:{isResizable:!0}},I={render:o=>e.jsxs("div",{style:{minWidth:"600px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Resizable Columns (Custom Constraints)"}),e.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Columns can be resized between 80px and 300px. Custom constraints:"," ",e.jsx("code",{children:"minColumnWidth=80"}),", ",e.jsx("code",{children:"maxColumnWidth=300"})]}),e.jsx(g,{...o,primaryColumn:y,data:v,fixedColumns:$})]}),args:{renderRowActions:S,isResizable:!0,minColumnWidth:80,maxColumnWidth:300}},B={render:o=>e.jsx("div",{style:{width:"900px",height:"400px",border:"1px solid #ccc",padding:"16px"},children:e.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:e.jsx(g,{...o,data:J,primaryColumn:y,fixedColumns:q})})}),args:{renderRowActions:S,isResizable:!0,isHeaderFixed:!0}},N={render:o=>e.jsx("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:e.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:e.jsx(g,{...o,data:C,primaryColumn:R,fixedColumns:E,isHorizontallyScrollable:!0,isHeaderFixed:!0})})}),args:{renderRowActions:S,isResizable:!0}},L={render:o=>e.jsx("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:e.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:e.jsx(g,{...o,data:J,primaryColumn:y,fixedColumns:q,pinnedColumnKeys:["name","email"],isHorizontallyScrollable:!0,isHeaderFixed:!0})})}),args:{renderRowActions:S,isResizable:!0}},M={render:o=>{const n=c.useRef(null),[t,a]=c.useState({key:R[0].key,direction:T}),[d,i]=c.useState(R[0]),[m,x]=c.useState(T),h=c.useMemo(()=>{const p=[...C];for(let r=0;r<3;r++)p.push(...C.map(f=>({...f,id:`${f.id}-copy-${r+1}`})));return p},[]),u=z(h,t),[b,w]=c.useState(u),[s,l]=c.useState(new Set([]));return c.useEffect(()=>{const{key:p,direction:r}=t,f=[...E,...R].find(k=>k.key===p);x(r),i(f)},[t]),e.jsxs("div",{style:{width:"800px",height:"600px",border:"1px solid #ccc",padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Table with Horizontal Scroll + Pinned Header (External Scroll Container)"}),e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"This example demonstrates a pinned header that activates when scrolling in an external container. The table header pins to the top when the scroll position reaches it. Scroll vertically in the container to see the header pinning, and horizontally to see pinned columns and gradient effects."}),e.jsxs("div",{ref:n,style:{height:"calc(100% - 100px)",overflowY:"auto",overflowX:"hidden",position:"relative"},children:[e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f0f0f0",marginBottom:"16px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"16px"},children:"Content Above Table"}),e.jsx("p",{style:{margin:"0",fontSize:"14px",color:"#666"},children:"This content is inside the scrollable container. When you scroll down, this text will move up and disappear, but the table header will stick to the top."}),e.jsx("p",{style:{margin:"8px 0 0",fontSize:"14px",color:"#666"},children:"Scroll down to see the header pinning effect. The table header will remain fixed at the top while this content scrolls away."})]}),e.jsx(g,{...o,data:b,primaryColumn:R,fixedColumns:E,isHeaderFixed:!0,isHorizontallyScrollable:!0,pinnedColumnKeys:["name","email"],externalScrollContainerRef:n,sortableColumns:[R[0].key,"department","status"],onChangeSorting:(p=t)=>{let{direction:r}=p;const{key:f}=p;r=ne(r);const k=z(b,{key:f,direction:r});a({key:f,direction:r}),w(k)},onToggleRowSelection:p=>{const r=new Set(s);r.has(p)?r.delete(p):r.add(p),l(r)},onToggleAllRowsSelection:()=>{if(s.size===h.length)l(new Set);else{const p=new Set(h.map(r=>r.id));l(p)}},selectedRowIds:[...s],sortingColumn:d,sortingDirection:m})]})]})},args:{selectable:!0,renderRowActions:S}},O={render:o=>{const[n,t]=c.useState(new Set([])),[a,d]=c.useState(new Set([]));return e.jsx("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px",paddingLeft:"48px"},children:e.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:e.jsx(g,{...o,data:C,primaryColumn:R,fixedColumns:E,expandedRowIds:[...a],selectedRowIds:[...n],onToggleRowSelection:i=>{const m=new Set(n);m.has(i)?m.delete(i):m.add(i),t(m)},onToggleAllRowsSelection:()=>{if(n.size===C.length)t(new Set);else{const i=new Set(C.map(m=>m.id));t(i)}},onToggleRowExpansion:i=>{const m=new Set(a);m.has(i)?m.delete(i):m.add(i),d(m)},onToggleAllRowsExpansion:()=>{if(a.size===C.length)d(new Set);else{const i=new Set(C.map(m=>m.id));d(i)}}})})})},args:{renderRowActions:S,isResizable:!0,isHeaderFixed:!0,isHorizontallyScrollable:!0,pinnedColumnKeys:["name","email"],selectable:!0,isRowsExpandable:!0,isCheckboxOutside:!0}};var te,oe,ae;U.parameters={...U.parameters,docs:{...(te=U.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(oe=U.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,ie,re;Y.parameters={...Y.parameters,docs:{...(se=Y.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(ie=Y.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var le,de,ce;K.parameters={...K.parameters,docs:{...(le=K.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(de=K.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,he;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(me=V.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var we,ue,ge;X.parameters={...X.parameters,docs:{...(we=X.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ge=(ue=X.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var xe,ye,be;G.parameters={...G.parameters,docs:{...(xe=G.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(be=(ye=G.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var Ce,fe,Se;Q.parameters={...Q.parameters,docs:{...(Ce=Q.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Se=(fe=Q.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var Re,ke,De,ve,Te;j.parameters={...j.parameters,docs:{...(Re=j.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(De=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:De.source},description:{story:`Demonstrates all row sizes (small: 44px, default: 64px, large: 80px) with expandable content.
Useful for testing that row heights behave correctly when expanding/collapsing cells with long text.`,...(Te=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:Te.description}}};var ze,Ee,Ae,je,He;H.parameters={...H.parameters,docs:{...(ze=H.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ae=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source},description:{story:`Simple demonstration of row sizes without expand functionality.

Row sizes are configured via \`rowConfigs: { size: 'small' | 'medium' | 'large' }\` in each row data object.

Available sizes:
- **small**: 44px height - best for dense data tables
- **medium** (default): 64px height - standard table row
- **large**: 80px height - for tables with more visual prominence`,...(He=(je=H.parameters)==null?void 0:je.docs)==null?void 0:He.description}}};var Pe,We,Fe,Ie,Be;P.parameters={...P.parameters,docs:{...(Pe=P.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <CustomHeaderDemo />
}`,...(Fe=(We=P.parameters)==null?void 0:We.docs)==null?void 0:Fe.source},description:{story:`Demonstrates how to customize the table header background color using CSS.

The Table component supports custom header styling via the \`headerClassName\` prop.
Pinned columns and expand cells will inherit the header background color automatically.

This is useful when you need to match the table header with your application's design,
for example, using a gray header on a white background or vice versa.`,...(Be=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:Be.description}}};var Ne,Le,Me,Oe,Je;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    minWidth: '600px'
  }}>
      <h3 style={{
      margin: '0 0 16px 0',
      fontSize: '16px',
      color: '#333'
    }}>
        Resizable Columns (Default Constraints)
      </h3>
      <p style={{
      margin: '0 0 16px 0',
      fontSize: '14px',
      color: '#666'
    }}>
        Drag the column borders in the header to adjust widths. Default constraints:{' '}
        <code>minColumnWidth=50</code>, <code>maxColumnWidth=500</code>
      </p>
      <Table {...args} primaryColumn={primaryColumns} data={data} fixedColumns={fixedColumns} />
    </div>,
  args: {
    renderRowActions,
    isResizable: true
  }
}`,...(Me=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Me.source},description:{story:`Demonstrates resizable columns with default constraints (min: 50px, max: 500px).

Users can drag the column borders in the header to adjust column widths.
Initial widths are taken from column.width property.`,...(Je=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:Je.description}}};var $e,Ue,Ye,Ke,Ve;F.parameters={...F.parameters,docs:{...($e=F.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    minWidth: '600px'
  }}>
      <Table {...args} primaryColumn={primaryColumns} data={data} fixedColumns={fixedColumns} />
    </div>,
  args: {
    isResizable: true
  }
}`,...(Ye=(Ue=F.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source},description:{story:"Demonstrates resizable columns without row actions.",...(Ve=(Ke=F.parameters)==null?void 0:Ke.docs)==null?void 0:Ve.description}}};var Xe,Ge,Qe,qe,_e;I.parameters={...I.parameters,docs:{...(Xe=I.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    minWidth: '600px'
  }}>
      <h3 style={{
      margin: '0 0 16px 0',
      fontSize: '16px',
      color: '#333'
    }}>
        Resizable Columns (Custom Constraints)
      </h3>
      <p style={{
      margin: '0 0 16px 0',
      fontSize: '14px',
      color: '#666'
    }}>
        Columns can be resized between 80px and 300px. Custom constraints:{' '}
        <code>minColumnWidth=80</code>, <code>maxColumnWidth=300</code>
      </p>
      <Table {...args} primaryColumn={primaryColumns} data={data} fixedColumns={fixedColumns} />
    </div>,
  args: {
    renderRowActions,
    isResizable: true,
    minColumnWidth: 80,
    maxColumnWidth: 300
  }
}`,...(Qe=(Ge=I.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source},description:{story:`Demonstrates resizable columns with custom min/max constraints.

Columns can be resized between 80px and 300px.`,...(_e=(qe=I.parameters)==null?void 0:qe.docs)==null?void 0:_e.description}}};var Ze,en,nn,tn,on;B.parameters={...B.parameters,docs:{...(Ze=B.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    width: '900px',
    height: '400px',
    border: '1px solid #ccc',
    padding: '16px'
  }}>
      <div style={{
      height: 'calc(100% - 16px)',
      position: 'relative'
    }}>
        <Table {...args} data={largeDataSet} primaryColumn={primaryColumns} fixedColumns={scrollableFixedColumns} />
      </div>
    </div>,
  args: {
    renderRowActions,
    isResizable: true,
    isHeaderFixed: true
  }
}`,...(nn=(en=B.parameters)==null?void 0:en.docs)==null?void 0:nn.source},description:{story:"Demonstrates resizable columns with fixed header.",...(on=(tn=B.parameters)==null?void 0:tn.docs)==null?void 0:on.description}}};var an,sn,rn,ln,dn;N.parameters={...N.parameters,docs:{...(an=N.parameters)==null?void 0:an.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    width: '600px',
    height: '500px',
    border: '1px solid #ccc',
    padding: '16px'
  }}>
      <div style={{
      height: 'calc(100% - 16px)',
      position: 'relative'
    }}>
        <Table {...args} data={wideTableData} primaryColumn={wideTablePrimaryColumns} fixedColumns={wideTableFixedColumns} isHorizontallyScrollable isHeaderFixed />
      </div>
    </div>,
  args: {
    renderRowActions,
    isResizable: true
  }
}`,...(rn=(sn=N.parameters)==null?void 0:sn.docs)==null?void 0:rn.source},description:{story:"Demonstrates resizable columns with horizontal scroll and fixed header.",...(dn=(ln=N.parameters)==null?void 0:ln.docs)==null?void 0:dn.description}}};var cn,pn,mn,hn,wn;L.parameters={...L.parameters,docs:{...(cn=L.parameters)==null?void 0:cn.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    width: '900px',
    height: '500px',
    border: '1px solid #ccc',
    padding: '16px'
  }}>
      <div style={{
      height: 'calc(100% - 16px)',
      position: 'relative'
    }}>
        <Table {...args} data={largeDataSet} primaryColumn={primaryColumns} fixedColumns={scrollableFixedColumns} pinnedColumnKeys={['name', 'email']} isHorizontallyScrollable isHeaderFixed />
      </div>
    </div>,
  args: {
    renderRowActions,
    isResizable: true
  }
}`,...(mn=(pn=L.parameters)==null?void 0:pn.docs)==null?void 0:mn.source},description:{story:"Demonstrates resizable columns with pinned columns.",...(wn=(hn=L.parameters)==null?void 0:hn.docs)==null?void 0:wn.description}}};var un,gn,xn,yn,bn;M.parameters={...M.parameters,docs:{...(un=M.parameters)==null?void 0:un.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortConfig, setSortConfig] = useState<SortConfig>({
      key: wideTablePrimaryColumns[0].key,
      direction: ASC
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingColumn, setSortingColumn] = useState<Column>(wideTablePrimaryColumns[0]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingDirection, setSortingDirection] = useState<SortingDirection>(ASC);
    // Generate more data for vertical scrolling demonstration
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const extendedWideTableData = useMemo(() => {
      const baseData = [...wideTableData];
      // Duplicate data to make table taller than container
      for (let i = 0; i < 3; i++) {
        baseData.push(...wideTableData.map(item => ({
          ...item,
          id: \`\${item.id}-copy-\${i + 1}\`
        })));
      }
      return baseData;
    }, []);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const defaultSortedData = sortTableData(extendedWideTableData, sortConfig);
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
      const column = [...wideTableFixedColumns, ...wideTablePrimaryColumns].find(col => col.key === key);
      setSortingDirection(direction);
      setSortingColumn(column as Column);
    }, [sortConfig]);
    return <div style={{
      width: '800px',
      height: '600px',
      border: '1px solid #ccc',
      padding: '16px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0'
      }}>
          Table with Horizontal Scroll + Pinned Header (External Scroll Container)
        </h3>
        <p style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>
          This example demonstrates a pinned header that activates when scrolling in an external
          container. The table header pins to the top when the scroll position reaches it. Scroll
          vertically in the container to see the header pinning, and horizontally to see pinned
          columns and gradient effects.
        </p>
        <div ref={scrollContainerRef} style={{
        height: 'calc(100% - 100px)',
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'relative'
      }}>
          <div style={{
          padding: '16px',
          backgroundColor: '#f0f0f0',
          marginBottom: '16px'
        }}>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '16px'
          }}>Content Above Table</h4>
            <p style={{
            margin: '0',
            fontSize: '14px',
            color: '#666'
          }}>
              This content is inside the scrollable container. When you scroll down, this text will
              move up and disappear, but the table header will stick to the top.
            </p>
            <p style={{
            margin: '8px 0 0',
            fontSize: '14px',
            color: '#666'
          }}>
              Scroll down to see the header pinning effect. The table header will remain fixed at
              the top while this content scrolls away.
            </p>
          </div>
          <Table {...args} data={tableData} primaryColumn={wideTablePrimaryColumns} fixedColumns={wideTableFixedColumns} isHeaderFixed={true} isHorizontallyScrollable={true} pinnedColumnKeys={['name', 'email']} externalScrollContainerRef={scrollContainerRef} sortableColumns={[wideTablePrimaryColumns[0].key, 'department', 'status']} onChangeSorting={(sortConfigParam = sortConfig) => {
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
          if (checkedRows.size === extendedWideTableData.length) {
            setCheckedRows(new Set());
          } else {
            const allRows = new Set(extendedWideTableData.map(item => item.id));
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
}`,...(xn=(gn=M.parameters)==null?void 0:gn.docs)==null?void 0:xn.source},description:{story:`Demonstrates a table with pinned header when scrolling is handled by an external container.

This example shows:
- Horizontal scrolling when table content is wider than the container
- Pinned header that pins to the top when scrolling vertically in the external container
- Pinned columns that stay visible during horizontal scroll
- Gradient effects on pinned columns and right edge

Note: This is different from a fixed header with internal table scrolling. Here, the scroll
container is external (parent div), and the header pins when scrolling reaches the table top.

Scroll vertically in the external container to see the header pinning, and horizontally to see
pinned columns and gradients.`,...(bn=(yn=M.parameters)==null?void 0:yn.docs)==null?void 0:bn.description}}};var Cn,fn,Sn,Rn,kn;O.parameters={...O.parameters,docs:{...(Cn=O.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRows, setExpandedRows] = useState<Set<number | string>>(new Set([]));
    return <div style={{
      width: '600px',
      height: '500px',
      border: '1px solid #ccc',
      padding: '16px',
      paddingLeft: '48px'
    }}>
        <div style={{
        height: 'calc(100% - 16px)',
        position: 'relative'
      }}>
          <Table {...args} data={wideTableData} primaryColumn={wideTablePrimaryColumns} fixedColumns={wideTableFixedColumns} expandedRowIds={[...expandedRows]} selectedRowIds={[...checkedRows]} onToggleRowSelection={id => {
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
        }} onToggleRowExpansion={id => {
          const newExpandedRows = new Set(expandedRows);
          if (newExpandedRows.has(id)) {
            newExpandedRows.delete(id);
          } else {
            newExpandedRows.add(id);
          }
          setExpandedRows(newExpandedRows);
        }} onToggleAllRowsExpansion={() => {
          if (expandedRows.size === wideTableData.length) {
            setExpandedRows(new Set());
          } else {
            const allRows = new Set(wideTableData.map(item => item.id));
            setExpandedRows(allRows);
          }
        }} />
        </div>
      </div>;
  },
  args: {
    renderRowActions,
    isResizable: true,
    isHeaderFixed: true,
    isHorizontallyScrollable: true,
    pinnedColumnKeys: ['name', 'email'],
    selectable: true,
    isRowsExpandable: true,
    isCheckboxOutside: true
  }
}`,...(Sn=(fn=O.parameters)==null?void 0:fn.docs)==null?void 0:Sn.source},description:{story:"Demonstrates resizable columns with horizontal scroll and checkbox outside.",...(kn=(Rn=O.parameters)==null?void 0:Rn.docs)==null?void 0:kn.description}}};const qn=["Default","FixedHeader","HorizontalScrollWithFixedHeaderControl","PinnedColumnsWithFixedHeader","ExpandableRows","ExpandableRowsWithDefaultState","CellExpansion","RowSizesWithExpand","RowSizes","CustomHeaderStyle","ResizableColumns","ResizableColumnsWithoutActions","ResizableColumnsWithConstraints","ResizableColumnsWithFixedHeader","ResizableColumnsWithHorizontalScroll","ResizableColumnsWithPinnedColumns","HorizontalScrollWithPinnedHeader","ResizableColumnsWithCheckboxOutside"];export{Q as CellExpansion,P as CustomHeaderStyle,U as Default,X as ExpandableRows,G as ExpandableRowsWithDefaultState,Y as FixedHeader,K as HorizontalScrollWithFixedHeaderControl,M as HorizontalScrollWithPinnedHeader,V as PinnedColumnsWithFixedHeader,W as ResizableColumns,O as ResizableColumnsWithCheckboxOutside,I as ResizableColumnsWithConstraints,B as ResizableColumnsWithFixedHeader,N as ResizableColumnsWithHorizontalScroll,L as ResizableColumnsWithPinnedColumns,F as ResizableColumnsWithoutActions,H as RowSizes,j as RowSizesWithExpand,qn as __namedExportsOrder,Qn as default};
