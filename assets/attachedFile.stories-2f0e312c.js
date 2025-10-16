import{j as e}from"./jsx-runtime-3169928d.js";import{A as o}from"./attachedFile-adf52978.js";import"./index-d33a4676.js";import"./bind-f5c6fce5.js";import"./close-3561dacf.js";const M={title:"Data display/AttachedFile",component:o,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{fileName:"document.pdf",size:2.5,onRemove:()=>{},onDownload:()=>{}}},s={args:{fileName:"report.pdf",size:1.2,onDownload:()=>{},onRemove:void 0}},n={render:()=>e.jsx("div",{style:{width:"250px"},children:e.jsx(o,{fileName:"very-long-file-name-that-should-be-truncated.pdf",size:1.5,onRemove:()=>{},onDownload:()=>{}})})},r={args:{fileName:"uploading-file.pdf",size:3.2,isUploading:!0,uploadingProgress:65,onRemove:()=>{},onDownload:()=>{}}},i={args:{fileName:"custom-error.pdf",size:2.3,isUploadFailed:!0,uploadFailedMessage:"File too large",onRemove:()=>{},onDownload:()=>{}}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{fileName:"spreadsheet.xlsx",size:1.5,onRemove:()=>{},onDownload:()=>{}}),e.jsx(o,{fileName:"data.csv",size:.8,onRemove:()=>{},onDownload:()=>{}}),e.jsx(o,{fileName:"image.jpg",size:2.1,onRemove:()=>{},onDownload:()=>{}}),e.jsx(o,{fileName:"library.jar",size:15.2,onRemove:()=>{},onDownload:()=>{}}),e.jsx(o,{fileName:"unknown.xyz",size:.5,onRemove:()=>{},onDownload:()=>{}})]})};var l,d,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    fileName: 'document.pdf',
    size: 2.5,
    onRemove: () => {},
    onDownload: () => {}
  }
} satisfies Story`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,c,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    fileName: 'report.pdf',
    size: 1.2,
    onDownload: () => {},
    onRemove: undefined
  }
} satisfies Story`,...(f=(c=s.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var u,g,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '250px'
  }}>
      <AttachedFile fileName="very-long-file-name-that-should-be-truncated.pdf" size={1.5} onRemove={() => {}} onDownload={() => {}} />
    </div>
} satisfies Story`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var D,x,w;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    fileName: 'uploading-file.pdf',
    size: 3.2,
    isUploading: true,
    uploadingProgress: 65,
    onRemove: () => {},
    onDownload: () => {}
  }
} satisfies Story`,...(w=(x=r.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var R,h,z;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    fileName: 'custom-error.pdf',
    size: 2.3,
    isUploadFailed: true,
    uploadFailedMessage: 'File too large',
    onRemove: () => {},
    onDownload: () => {}
  }
} satisfies Story`,...(z=(h=i.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var y,F,N;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <AttachedFile fileName="spreadsheet.xlsx" size={1.5} onRemove={() => {}} onDownload={() => {}} />
      <AttachedFile fileName="data.csv" size={0.8} onRemove={() => {}} onDownload={() => {}} />
      <AttachedFile fileName="image.jpg" size={2.1} onRemove={() => {}} onDownload={() => {}} />
      <AttachedFile fileName="library.jar" size={15.2} onRemove={() => {}} onDownload={() => {}} />
      <AttachedFile fileName="unknown.xyz" size={0.5} onRemove={() => {}} onDownload={() => {}} />
    </div>
}`,...(N=(F=t.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const W=["Default","WithoutRemove","FullWidth","Uploading","UploadFailedCustomMessage","DifferentFileTypes"];export{a as Default,t as DifferentFileTypes,n as FullWidth,i as UploadFailedCustomMessage,r as Uploading,s as WithoutRemove,W as __namedExportsOrder,M as default};
