import{j as e}from"./jsx-runtime-2f188e98.js";import{r as i}from"./index-3553ef47.js";import{c as He}from"./bind-d8141dee.js";import{C as Y}from"./chip-3c214fbe.js";import{T as Ge}from"./tooltip-280b52d3.js";import{i as qe}from"./isEmpty-6ac0b123.js";import"./close-b4801ed1.js";import"./index-d0bd1ed5.js";import"./floating-ui.react-ea29885b.js";import"./floatingUi-c696ea36.js";const De=100,V=8,Ue=32,$e=60,Fe=360,Pe="_expanded_ypfdt_25",Ye="_issue_ypfdt_16",Ke="_counter_ypfdt_36",Qe="_hidden_ypfdt_55",Xe="_ellipsis_ypfdt_61",Ze={"issue-list":"_issue-list_ypfdt_16",expanded:Pe,issue:Ye,"counter-wrapper":"_counter-wrapper_ypfdt_36",counter:Ke,"tooltip-wrapper":"_tooltip-wrapper_ypfdt_50",hidden:Qe,ellipsis:Xe},y=He.bind(Ze),a=({issues:s,isExpanded:t=!1,onIssueClick:u,onIssueRemove:H,onCounterClick:g,renderTooltip:G,tooltipPortalRoot:Ee,className:Le})=>{const v=i.useRef(null),q=i.useRef(null),D=i.useRef(new Map),U=i.useRef(new Map),[$,h]=i.useState(s.length),[p,F]=i.useState(t),[O,x]=i.useState(!1),ze=i.useCallback((n,o)=>{o&&D.current.set(n,o)},[]),f=i.useCallback(()=>{var j;const n=v.current;if(!n||s.length===0)return;const o=n.offsetWidth,b=((j=q.current)==null?void 0:j.offsetWidth)||Ue,I=s.map((r,w)=>{const J=D.current.get(r.key);if(!J)return 0;const m=J.offsetWidth;return w===0&&O?U.current.get(r.key)||m:(U.current.set(r.key,m),m)});if(I.reduce((r,w)=>r+w,0)+(s.length-1)*V<=o){x(!1),h(s.length);return}for(let r=s.length-1;r>=1;r--){if(I.slice(0,r).reduce((m,Me)=>m+Me,0)+r*V+b<=o){h(r),x(!1);return}if(r===1){o-V-b<=$e?(h(0),x(!1)):(h(1),x(!0));return}}},[s,O]);i.useEffect(()=>{F(t)},[t]),i.useEffect(()=>{if(p)return;const n=setTimeout(f,De);return()=>clearTimeout(n)},[f,s,p]),i.useEffect(()=>{if(p)return;const n=new ResizeObserver(()=>{f()});return v.current&&n.observe(v.current),()=>n.disconnect()},[f,p]);const Oe=i.useCallback(()=>{F(!0),h(s.length),x(!1),g==null||g()},[s.length,g]),Be=i.useCallback(n=>{u==null||u(n)},[u]);if(qe(s))return null;const P=s.length-$,Je=P>0&&!p,Ve=(n,o)=>{const b=!p&&o>=$,I=!p&&o===0&&O,B=e.jsx(Y,{variant:"link",link:n.link,onClick:u?()=>Be(n):void 0,onRemove:H?()=>H(n):void 0,children:n.name}),j=G?e.jsx(Ge,{content:G(n),width:Fe,portalRoot:Ee,wrapperClassName:y("tooltip-wrapper"),placement:"top",children:B}):B;return e.jsx("div",{ref:r=>ze(n.key,r),className:y("issue",{hidden:b,ellipsis:I}),children:j},n.key)};return e.jsxs("div",{ref:v,className:y("issue-list",Le,{expanded:p}),children:[s.map((n,o)=>Ve(n,o)),e.jsx("div",{ref:q,className:y("counter-wrapper",{hidden:!Je}),children:e.jsxs(Y,{className:y("counter"),variant:"link",onClick:Oe,children:["+",P]})})]})};a.__docgenInfo={description:"",methods:[],displayName:"IssueList",props:{issues:{required:!0,tsType:{name:"Array",elements:[{name:"Issue"}],raw:"Issue[]"},description:""},isExpanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onIssueClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(issue: Issue) => void",signature:{arguments:[{type:{name:"Issue"},name:"issue"}],return:{name:"void"}}},description:""},onIssueRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(issue: Issue) => void",signature:{arguments:[{type:{name:"Issue"},name:"issue"}],return:{name:"void"}}},description:""},onCounterClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(issue: Issue) => ReactNode",signature:{arguments:[{type:{name:"Issue"},name:"issue"}],return:{name:"ReactNode"}}},description:""},tooltipPortalRoot:{required:!1,tsType:{name:"Element"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const cs={title:"Components/IssueList",component:a,parameters:{layout:"padded"}},d=[{key:"1",name:"JIRA-101",link:"#"},{key:"2",name:"JIRA-102",link:"#"},{key:"3",name:"JIRA-103",link:"#"},{key:"4",name:"JIRA-104",link:"#"},{key:"5",name:"JIRA-105",link:"#"},{key:"6",name:"JIRA-106",link:"#"},{key:"7",name:"JIRA-107",link:"#"}],_e=Array.from({length:10},(s,t)=>({key:String(t+1),name:`JIRA-${1001+t}`})),M=Array.from({length:15},(s,t)=>({key:String(t+1),name:`BUG-${2001+t}`,link:"#"})),R={args:{issues:d},decorators:[s=>e.jsx("div",{style:{width:"400px",border:"1px dashed #ccc",padding:"8px"},children:e.jsx(s,{})})]},k={args:{issues:d.slice(0,2)},decorators:[s=>e.jsx("div",{style:{width:"400px",border:"1px dashed #ccc",padding:"8px"},children:e.jsx(s,{})})]},S={args:{issues:_e},decorators:[s=>e.jsx("div",{style:{width:"500px",border:"1px dashed #ccc",padding:"8px"},children:e.jsx(s,{})})]},T={args:{issues:d},decorators:[s=>e.jsx("div",{style:{width:"200px",border:"1px dashed #ccc",padding:"8px"},children:e.jsx(s,{})})]},C={args:{issues:d},decorators:[s=>e.jsx("div",{style:{width:"800px",border:"1px dashed #ccc",padding:"8px"},children:e.jsx(s,{})})]},W={args:{issues:d.slice(0,3),onIssueClick:s=>console.log(`Clicked: ${s.name}`)},decorators:[s=>e.jsx("div",{style:{width:"400px",border:"1px dashed #ccc",padding:"8px"},children:e.jsx(s,{})})]},N={args:{issues:d.slice(0,4),onIssueRemove:s=>console.log(`Remove: ${s.name}`)},decorators:[s=>e.jsx("div",{style:{width:"500px",border:"1px dashed #ccc",padding:"8px"},children:e.jsx(s,{})})]},A={args:{issues:[{key:"1",name:"Very Long Issue Name JIRA-001",link:"#"},{key:"2",name:"Another Very Long Name JIRA-002",link:"#"},{key:"3",name:"Short",link:"#"}]},decorators:[s=>e.jsx("div",{style:{width:"400px",border:"1px dashed #ccc",padding:"8px"},children:e.jsx(s,{})})]},_={args:{issues:[{key:"1",name:"VERY-LONG-ISSUE-NAME-JIRA-12345",link:"#"}]},decorators:[s=>e.jsx("div",{style:{width:"100px",border:"1px dashed #ccc",padding:"8px"},children:e.jsx(s,{})})]},E={args:{issues:d.slice(0,3),renderTooltip:s=>e.jsxs("div",{style:{padding:"8px"},children:[e.jsx("strong",{children:"Summary"}),e.jsxs("p",{children:["This is a description for ",s.name]}),e.jsx("strong",{children:"Status"}),e.jsx("p",{children:"Open"})]})},decorators:[s=>e.jsx("div",{style:{width:"400px",border:"1px dashed #ccc",padding:"8px"},children:e.jsx(s,{})})]},L={args:{issues:_e,isExpanded:!0},decorators:[s=>e.jsx("div",{style:{width:"300px",border:"1px dashed #ccc",padding:"8px"},children:e.jsx(s,{})})]},l=({children:s,style:t})=>e.jsx("div",{style:{padding:"8px 12px",borderBottom:"1px solid #e0e0e0",overflow:"hidden",...t},children:s}),c=({children:s,minWidth:t=100,initialWidth:u})=>e.jsx("div",{style:{resize:"horizontal",overflow:"auto",minWidth:t,width:u,maxWidth:"100%",border:"1px solid #ccc",background:"#fafafa"},children:s}),z={render:()=>e.jsxs("div",{style:{width:"100%",maxWidth:"800px"},children:[e.jsx("h4",{style:{marginBottom:"16px"},children:"Resize the columns to test overflow behavior:"}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h5",{children:"Initial width 80px with 15 issues:"}),e.jsx(c,{minWidth:80,initialWidth:80,children:e.jsx(l,{children:e.jsx(a,{issues:M})})})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h5",{children:"1 issue (ellipsis when narrow):"}),e.jsx(c,{minWidth:80,children:e.jsx(l,{children:e.jsx(a,{issues:[{key:"1",name:"JIRA-12345",link:"#"}]})})})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h5",{children:"2 issues (1 visible + counter when narrow):"}),e.jsx(c,{minWidth:80,children:e.jsx(l,{children:e.jsx(a,{issues:[{key:"1",name:"JIRA-101",link:"#"},{key:"2",name:"JIRA-102",link:"#"}]})})})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h5",{children:"Many issues (overflow to counter):"}),e.jsx(c,{minWidth:80,children:e.jsx(l,{children:e.jsx(a,{issues:d})})})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h5",{children:"Long issue names:"}),e.jsx(c,{minWidth:80,children:e.jsx(l,{children:e.jsx(a,{issues:[{key:"1",name:"VERY-LONG-ISSUE-NAME-123",link:"#"},{key:"2",name:"ANOTHER-LONG-NAME-456",link:"#"},{key:"3",name:"SHORT",link:"#"}]})})})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h5",{children:"Show All View (expanded row):"}),e.jsx(c,{minWidth:80,children:e.jsx(l,{children:e.jsx(a,{issues:d,isExpanded:!0})})})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h5",{children:"15 issues (counter > 10):"}),e.jsx(c,{minWidth:80,children:e.jsx(l,{children:e.jsx(a,{issues:M})})})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h5",{children:"Very narrow (only counter visible):"}),e.jsx(c,{minWidth:40,children:e.jsx(l,{children:e.jsx(a,{issues:M})})})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h5",{children:"With tooltips (using portal):"}),e.jsx(c,{minWidth:80,children:e.jsx(l,{children:e.jsx(a,{issues:d,renderTooltip:s=>e.jsxs("div",{children:[e.jsx("strong",{children:s.name}),e.jsx("p",{children:"Status: Open"}),e.jsx("p",{children:"Summary: This is a test issue"})]}),tooltipPortalRoot:document.body})})})]})]})};var K,Q,X;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    issues: sampleIssues
  },
  decorators: [Story => <div style={{
    width: '400px',
    border: '1px dashed #ccc',
    padding: '8px'
  }}>
        <Story />
      </div>]
}`,...(X=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,se;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    issues: sampleIssues.slice(0, 2)
  },
  decorators: [Story => <div style={{
    width: '400px',
    border: '1px dashed #ccc',
    padding: '8px'
  }}>
        <Story />
      </div>]
}`,...(se=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ne,re,ie;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    issues: manyIssues
  },
  decorators: [Story => <div style={{
    width: '500px',
    border: '1px dashed #ccc',
    padding: '8px'
  }}>
        <Story />
      </div>]
}`,...(ie=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var te,oe,ae;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    issues: sampleIssues
  },
  decorators: [Story => <div style={{
    width: '200px',
    border: '1px dashed #ccc',
    padding: '8px'
  }}>
        <Story />
      </div>]
}`,...(ae=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var de,le,ce;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    issues: sampleIssues
  },
  decorators: [Story => <div style={{
    width: '800px',
    border: '1px dashed #ccc',
    padding: '8px'
  }}>
        <Story />
      </div>]
}`,...(ce=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,ue,me;W.parameters={...W.parameters,docs:{...(pe=W.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    issues: sampleIssues.slice(0, 3),
    onIssueClick: issue => console.log(\`Clicked: \${issue.name}\`)
  },
  decorators: [Story => <div style={{
    width: '400px',
    border: '1px dashed #ccc',
    padding: '8px'
  }}>
        <Story />
      </div>]
}`,...(me=(ue=W.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var he,xe,ye;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    issues: sampleIssues.slice(0, 4),
    onIssueRemove: issue => console.log(\`Remove: \${issue.name}\`)
  },
  decorators: [Story => <div style={{
    width: '500px',
    border: '1px dashed #ccc',
    padding: '8px'
  }}>
        <Story />
      </div>]
}`,...(ye=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var ge,ve,fe;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    issues: [{
      key: '1',
      name: 'Very Long Issue Name JIRA-001',
      link: '#'
    }, {
      key: '2',
      name: 'Another Very Long Name JIRA-002',
      link: '#'
    }, {
      key: '3',
      name: 'Short',
      link: '#'
    }]
  },
  decorators: [Story => <div style={{
    width: '400px',
    border: '1px dashed #ccc',
    padding: '8px'
  }}>
        <Story />
      </div>]
}`,...(fe=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var be,Ie,je;_.parameters={..._.parameters,docs:{...(be=_.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    issues: [{
      key: '1',
      name: 'VERY-LONG-ISSUE-NAME-JIRA-12345',
      link: '#'
    }]
  },
  decorators: [Story => <div style={{
    width: '100px',
    border: '1px dashed #ccc',
    padding: '8px'
  }}>
        <Story />
      </div>]
}`,...(je=(Ie=_.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var we,Re,ke;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    issues: sampleIssues.slice(0, 3),
    renderTooltip: issue => <div style={{
      padding: '8px'
    }}>
        <strong>Summary</strong>
        <p>This is a description for {issue.name}</p>
        <strong>Status</strong>
        <p>Open</p>
      </div>
  },
  decorators: [Story => <div style={{
    width: '400px',
    border: '1px dashed #ccc',
    padding: '8px'
  }}>
        <Story />
      </div>]
}`,...(ke=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};var Se,Te,Ce;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    issues: manyIssues,
    isExpanded: true
  },
  decorators: [Story => <div style={{
    width: '300px',
    border: '1px dashed #ccc',
    padding: '8px'
  }}>
        <Story />
      </div>]
}`,...(Ce=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var We,Ne,Ae;z.parameters={...z.parameters,docs:{...(We=z.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    maxWidth: '800px'
  }}>
      <h4 style={{
      marginBottom: '16px'
    }}>Resize the columns to test overflow behavior:</h4>

      <div style={{
      marginBottom: '24px'
    }}>
        <h5>Initial width 80px with 15 issues:</h5>
        <ResizableColumn minWidth={80} initialWidth={80}>
          <TableCell>
            <IssueList issues={lotsOfIssues} />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{
      marginBottom: '24px'
    }}>
        <h5>1 issue (ellipsis when narrow):</h5>
        <ResizableColumn minWidth={80}>
          <TableCell>
            <IssueList issues={[{
            key: '1',
            name: 'JIRA-12345',
            link: '#'
          }]} />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{
      marginBottom: '24px'
    }}>
        <h5>2 issues (1 visible + counter when narrow):</h5>
        <ResizableColumn minWidth={80}>
          <TableCell>
            <IssueList issues={[{
            key: '1',
            name: 'JIRA-101',
            link: '#'
          }, {
            key: '2',
            name: 'JIRA-102',
            link: '#'
          }]} />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{
      marginBottom: '24px'
    }}>
        <h5>Many issues (overflow to counter):</h5>
        <ResizableColumn minWidth={80}>
          <TableCell>
            <IssueList issues={sampleIssues} />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{
      marginBottom: '24px'
    }}>
        <h5>Long issue names:</h5>
        <ResizableColumn minWidth={80}>
          <TableCell>
            <IssueList issues={[{
            key: '1',
            name: 'VERY-LONG-ISSUE-NAME-123',
            link: '#'
          }, {
            key: '2',
            name: 'ANOTHER-LONG-NAME-456',
            link: '#'
          }, {
            key: '3',
            name: 'SHORT',
            link: '#'
          }]} />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{
      marginBottom: '24px'
    }}>
        <h5>Show All View (expanded row):</h5>
        <ResizableColumn minWidth={80}>
          <TableCell>
            <IssueList issues={sampleIssues} isExpanded />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{
      marginBottom: '24px'
    }}>
        <h5>15 issues (counter &gt; 10):</h5>
        <ResizableColumn minWidth={80}>
          <TableCell>
            <IssueList issues={lotsOfIssues} />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{
      marginBottom: '24px'
    }}>
        <h5>Very narrow (only counter visible):</h5>
        <ResizableColumn minWidth={40}>
          <TableCell>
            <IssueList issues={lotsOfIssues} />
          </TableCell>
        </ResizableColumn>
      </div>

      <div style={{
      marginBottom: '24px'
    }}>
        <h5>With tooltips (using portal):</h5>
        <ResizableColumn minWidth={80}>
          <TableCell>
            <IssueList issues={sampleIssues} renderTooltip={issue => <div>
                  <strong>{issue.name}</strong>
                  <p>Status: Open</p>
                  <p>Summary: This is a test issue</p>
                </div>} tooltipPortalRoot={document.body} />
          </TableCell>
        </ResizableColumn>
      </div>
    </div>
}`,...(Ae=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};const ps=["Default","FewIssues","ManyIssues","NarrowContainer","WideContainer","WithClickHandler","WithRemoveHandler","LongIssueNames","SingleIssueNarrow","WithTooltip","ShowAllView","InResizableTable"];export{R as Default,k as FewIssues,z as InResizableTable,A as LongIssueNames,S as ManyIssues,T as NarrowContainer,L as ShowAllView,_ as SingleIssueNarrow,C as WideContainer,W as WithClickHandler,N as WithRemoveHandler,E as WithTooltip,ps as __namedExportsOrder,cs as default};
