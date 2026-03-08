import{j as e}from"./jsx-runtime-2f188e98.js";import{A as o}from"./attachedFile-aa48fc19.js";import"./index-3553ef47.js";import"./bind-d8141dee.js";import"./close-b4801ed1.js";import"./xls-e116cca0.js";const C={title:"Data display/AttachedFile",component:o,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{fileName:"document.pdf",size:2.5,onRemove:()=>{},onDownload:()=>{}}},s={args:{fileName:"report.pdf",size:1.2,onDownload:()=>{},onRemove:void 0}},i={render:()=>e.jsx("div",{style:{width:"250px"},children:e.jsx(o,{fileName:"very-long-file-name-that-should-be-truncated.pdf",size:1.5,onRemove:()=>{},onDownload:()=>{}})})},t={args:{fileName:"uploading-file.pdf",size:3.2,isUploading:!0,uploadingProgress:65,onRemove:()=>{},onDownload:()=>{}}},r={args:{fileName:"custom-error.pdf",size:2.3,isUploadFailed:!0,uploadFailedMessage:"File too large",onRemove:()=>{},onDownload:()=>{}}},n={args:{fileName:"Picture.png",size:1.2,textPosition:"bottom",withPreview:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{fileName:"spreadsheet.xlsx",size:1.5,onRemove:()=>{},onDownload:()=>{}}),e.jsx(o,{fileName:"data.csv",size:.8,onRemove:()=>{},onDownload:()=>{}}),e.jsx(o,{fileName:"image.jpg",size:2.1,onRemove:()=>{},onDownload:()=>{}}),e.jsx(o,{fileName:"library.jar",size:15.2,onRemove:()=>{},onDownload:()=>{}}),e.jsx(o,{fileName:"unknown.xyz",size:.5,onRemove:()=>{},onDownload:()=>{}}),e.jsx(o,{fileName:"123_some_Long_picture_file_name.jpg",size:2.1,textPosition:"bottom",withPreview:!0}),e.jsx(o,{fileName:"Data.csv",size:2.1,textPosition:"bottom"})]})};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    fileName: 'document.pdf',
    size: 2.5,
    onRemove: () => {},
    onDownload: () => {}
  }
} satisfies Story`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,u,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    fileName: 'report.pdf',
    size: 1.2,
    onDownload: () => {},
    onRemove: undefined
  }
} satisfies Story`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,v,w;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '250px'
  }}>
      <AttachedFile fileName="very-long-file-name-that-should-be-truncated.pdf" size={1.5} onRemove={() => {}} onDownload={() => {}} />
    </div>
} satisfies Story`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,h,D;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    fileName: 'uploading-file.pdf',
    size: 3.2,
    isUploading: true,
    uploadingProgress: 65,
    onRemove: () => {},
    onDownload: () => {}
  }
} satisfies Story`,...(D=(h=t.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var z,N,R;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    fileName: 'custom-error.pdf',
    size: 2.3,
    isUploadFailed: true,
    uploadFailedMessage: 'File too large',
    onRemove: () => {},
    onDownload: () => {}
  }
} satisfies Story`,...(R=(N=r.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var y,F,j;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    fileName: 'Picture.png',
    size: 1.2,
    textPosition: 'bottom',
    withPreview: true
  }
} satisfies Story`,...(j=(F=n.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var P,S,_;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      <AttachedFile fileName="123_some_Long_picture_file_name.jpg" size={2.1} textPosition="bottom" withPreview />
      <AttachedFile fileName="Data.csv" size={2.1} textPosition="bottom" />
    </div>
}`,...(_=(S=l.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const E=["Default","WithoutRemove","FullWidth","Uploading","UploadFailedCustomMessage","WithPreview","DifferentFileTypes"];export{a as Default,l as DifferentFileTypes,i as FullWidth,r as UploadFailedCustomMessage,t as Uploading,n as WithPreview,s as WithoutRemove,E as __namedExportsOrder,C as default};
