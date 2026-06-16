import{j as s}from"./jsx-runtime-2f188e98.js";import{I as n}from"./issueList-b7d4d2f9.js";import"./index-3553ef47.js";import"./bind-d8141dee.js";import"./chip-3c214fbe.js";import"./close-b4801ed1.js";import"./tooltip-280b52d3.js";import"./index-d0bd1ed5.js";import"./floating-ui.react-ea29885b.js";import"./floatingUi-c696ea36.js";import"./isEmpty-6ac0b123.js";const xs={title:"Components/IssueList",component:n,parameters:{layout:"padded"}},i=[{key:"1",name:"JIRA-101",link:"#"},{key:"2",name:"JIRA-102",link:"#"},{key:"3",name:"JIRA-103",link:"#"},{key:"4",name:"JIRA-104",link:"#"},{key:"5",name:"JIRA-105",link:"#"},{key:"6",name:"JIRA-106",link:"#"},{key:"7",name:"JIRA-107",link:"#"}],ns=Array.from({length:10},(e,r)=>({key:String(r+1),name:`JIRA-${1001+r}`})),j=Array.from({length:15},(e,r)=>({key:String(r+1),name:`BUG-${2001+r}`,link:"#"})),a={args:{issues:i},decorators:[e=>s.jsx("div",{style:{width:"400px",border:"1px dashed #ccc",padding:"8px"},children:s.jsx(e,{})})]},t={args:{issues:i.slice(0,2)},decorators:[e=>s.jsx("div",{style:{width:"400px",border:"1px dashed #ccc",padding:"8px"},children:s.jsx(e,{})})]},l={args:{issues:ns},decorators:[e=>s.jsx("div",{style:{width:"500px",border:"1px dashed #ccc",padding:"8px"},children:s.jsx(e,{})})]},c={args:{issues:i},decorators:[e=>s.jsx("div",{style:{width:"200px",border:"1px dashed #ccc",padding:"8px"},children:s.jsx(e,{})})]},p={args:{issues:i},decorators:[e=>s.jsx("div",{style:{width:"800px",border:"1px dashed #ccc",padding:"8px"},children:s.jsx(e,{})})]},m={args:{issues:i.slice(0,3),onIssueClick:e=>console.log(`Clicked: ${e.name}`)},decorators:[e=>s.jsx("div",{style:{width:"400px",border:"1px dashed #ccc",padding:"8px"},children:s.jsx(e,{})})]},h={args:{issues:i.slice(0,4),onIssueRemove:e=>console.log(`Remove: ${e.name}`)},decorators:[e=>s.jsx("div",{style:{width:"500px",border:"1px dashed #ccc",padding:"8px"},children:s.jsx(e,{})})]},u={args:{issues:[{key:"1",name:"Very Long Issue Name JIRA-001",link:"#"},{key:"2",name:"Another Very Long Name JIRA-002",link:"#"},{key:"3",name:"Short",link:"#"}]},decorators:[e=>s.jsx("div",{style:{width:"400px",border:"1px dashed #ccc",padding:"8px"},children:s.jsx(e,{})})]},x={args:{issues:[{key:"1",name:"VERY-LONG-ISSUE-NAME-JIRA-12345",link:"#"}]},decorators:[e=>s.jsx("div",{style:{width:"100px",border:"1px dashed #ccc",padding:"8px"},children:s.jsx(e,{})})]},y={args:{issues:i.slice(0,3),renderTooltip:e=>s.jsxs("div",{style:{padding:"8px"},children:[s.jsx("strong",{children:"Summary"}),s.jsxs("p",{children:["This is a description for ",e.name]}),s.jsx("strong",{children:"Status"}),s.jsx("p",{children:"Open"})]})},decorators:[e=>s.jsx("div",{style:{width:"400px",border:"1px dashed #ccc",padding:"8px"},children:s.jsx(e,{})})]},g={args:{issues:ns,isExpanded:!0},decorators:[e=>s.jsx("div",{style:{width:"300px",border:"1px dashed #ccc",padding:"8px"},children:s.jsx(e,{})})]},o=({children:e,style:r})=>s.jsx("div",{style:{padding:"8px 12px",borderBottom:"1px solid #e0e0e0",overflow:"hidden",...r},children:e}),d=({children:e,minWidth:r=100,initialWidth:is})=>s.jsx("div",{style:{resize:"horizontal",overflow:"auto",minWidth:r,width:is,maxWidth:"100%",border:"1px solid #ccc",background:"#fafafa"},children:e}),v={render:()=>s.jsxs("div",{style:{width:"100%",maxWidth:"800px"},children:[s.jsx("h4",{style:{marginBottom:"16px"},children:"Resize the columns to test overflow behavior:"}),s.jsxs("div",{style:{marginBottom:"24px"},children:[s.jsx("h5",{children:"Initial width 80px with 15 issues:"}),s.jsx(d,{minWidth:80,initialWidth:80,children:s.jsx(o,{children:s.jsx(n,{issues:j})})})]}),s.jsxs("div",{style:{marginBottom:"24px"},children:[s.jsx("h5",{children:"1 issue (ellipsis when narrow):"}),s.jsx(d,{minWidth:80,children:s.jsx(o,{children:s.jsx(n,{issues:[{key:"1",name:"JIRA-12345",link:"#"}]})})})]}),s.jsxs("div",{style:{marginBottom:"24px"},children:[s.jsx("h5",{children:"2 issues (1 visible + counter when narrow):"}),s.jsx(d,{minWidth:80,children:s.jsx(o,{children:s.jsx(n,{issues:[{key:"1",name:"JIRA-101",link:"#"},{key:"2",name:"JIRA-102",link:"#"}]})})})]}),s.jsxs("div",{style:{marginBottom:"24px"},children:[s.jsx("h5",{children:"Many issues (overflow to counter):"}),s.jsx(d,{minWidth:80,children:s.jsx(o,{children:s.jsx(n,{issues:i})})})]}),s.jsxs("div",{style:{marginBottom:"24px"},children:[s.jsx("h5",{children:"Long issue names:"}),s.jsx(d,{minWidth:80,children:s.jsx(o,{children:s.jsx(n,{issues:[{key:"1",name:"VERY-LONG-ISSUE-NAME-123",link:"#"},{key:"2",name:"ANOTHER-LONG-NAME-456",link:"#"},{key:"3",name:"SHORT",link:"#"}]})})})]}),s.jsxs("div",{style:{marginBottom:"24px"},children:[s.jsx("h5",{children:"Show All View (expanded row):"}),s.jsx(d,{minWidth:80,children:s.jsx(o,{children:s.jsx(n,{issues:i,isExpanded:!0})})})]}),s.jsxs("div",{style:{marginBottom:"24px"},children:[s.jsx("h5",{children:"15 issues (counter > 10):"}),s.jsx(d,{minWidth:80,children:s.jsx(o,{children:s.jsx(n,{issues:j})})})]}),s.jsxs("div",{style:{marginBottom:"24px"},children:[s.jsx("h5",{children:"Very narrow (only counter visible):"}),s.jsx(d,{minWidth:40,children:s.jsx(o,{children:s.jsx(n,{issues:j})})})]}),s.jsxs("div",{style:{marginBottom:"24px"},children:[s.jsx("h5",{children:"With tooltips (using portal):"}),s.jsx(d,{minWidth:80,children:s.jsx(o,{children:s.jsx(n,{issues:i,renderTooltip:e=>s.jsxs("div",{children:[s.jsx("strong",{children:e.name}),s.jsx("p",{children:"Status: Open"}),s.jsx("p",{children:"Summary: This is a test issue"})]}),tooltipPortalRoot:document.body})})})]})]})};var b,I,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(I=a.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var S,w,R;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(w=t.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var C,A,T;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(A=l.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var W,z,L;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(z=c.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var N,f,B;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(B=(f=p.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var E,J,O;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(J=m.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var V,M,H;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(M=h.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var G,$,U;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(U=($=u.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var Y,_,D;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(D=(_=x.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var F,P,q;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(P=y.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var K,Q,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ss,es;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(es=(ss=v.parameters)==null?void 0:ss.docs)==null?void 0:es.source}}};const ys=["Default","FewIssues","ManyIssues","NarrowContainer","WideContainer","WithClickHandler","WithRemoveHandler","LongIssueNames","SingleIssueNarrow","WithTooltip","ShowAllView","InResizableTable"];export{a as Default,t as FewIssues,v as InResizableTable,u as LongIssueNames,l as ManyIssues,c as NarrowContainer,g as ShowAllView,x as SingleIssueNarrow,p as WideContainer,m as WithClickHandler,h as WithRemoveHandler,y as WithTooltip,ys as __namedExportsOrder,xs as default};
