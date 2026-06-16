import{j as e}from"./jsx-runtime-2f188e98.js";import{r as y}from"./index-3553ef47.js";import{S as z,a as w}from"./addImage-4736ea51.js";import{F as r,M as s,a as _}from"./singleAutocomplete-f996b9ba.js";import"./index-d0bd1ed5.js";import"./bind-d8141dee.js";import"./downshift.esm-92d8e7b2.js";import"./index-4c891f75.js";import"./floating-ui.react-ea29885b.js";import"./clear-c7bc24e5.js";import"./prevPage-746d23db.js";import"./adaptiveTagList-592fb691.js";import"./button-34bf729b.js";import"./close-b4801ed1.js";import"./isEmpty-6ac0b123.js";import"./actionMenu-fb657254.js";import"./details-d199936c.js";import"./baseIconButton-9b03f096.js";import"./popover-8346e5d8.js";import"./floatingUi-c696ea36.js";import"./attachedFile-aa48fc19.js";import"./xls-e116cca0.js";import"./breadcrumbs-2e157599.js";import"./tree-c792b12a.js";import"./bubblesLoader-539cf135.js";import"./bulkPanel-ae499898.js";import"./index-5cf2ac00.js";import"./useOnClickOutside-b0fffa8f.js";import"./keyCodes-e5060420.js";import"./selection-dede4e76.js";import"./chip-3c214fbe.js";import"./tooltip-280b52d3.js";import"./chevronDownDropdown-69a9d5c1.js";import"./warning-72e334ed.js";import"./checkbox-322ca70a.js";import"./table-de70aa52.js";import"./resizeColumn-eebfb371.js";import"./useEllipsisTitle-1cddebe3.js";import"./dropdown-de3e81f9.js";import"./dropdown-1f4530a4.js";import"./fieldLabel-917daddd.js";import"./fieldNumber-925ee977.js";import"./minus-6db56247.js";import"./plus-150a0ce8.js";import"./fieldTextFlex-61eb1205.js";import"./filtersButton-93f84a33.js";import"./filterOutline-513d7be6.js";import"./filterItem-b755c94e.js";import"./issueList-b7d4d2f9.js";import"./modal-ace9019f.js";import"./constants-1e05cdf5.js";import"./multipleAutocomplete-6ec3d6db.js";import"./radioGroup-183a5ecc.js";import"./segmentedControl-c9570136.js";import"./spinLoader-d5daab2a.js";import"./systemAlert-58c5107a.js";import"./success-8512adf6.js";import"./systemMessage-b191d100.js";import"./treeSortableItem-5243dce9.js";import"./themeProvider-37018bdd.js";import"./toggle-3fb3b5fa.js";const Le={title:"File Upload/FileDropArea",component:r,parameters:{layout:"centered"},tags:["autodocs"],args:{onFilesAdded:l=>{console.log("Files added:",l)}},argTypes:{variant:{control:{type:"select"},options:["default","overlay"]},maxFileSize:{control:{type:"number",min:1024,step:1024}},isMultipleFiles:{control:"boolean"},isDisabled:{control:"boolean"}}},j={width:400,height:150},I=5*1024*1024,P=10*1024*1024,p={args:{messages:{incorrectFileSize:"File size exceeds the limit",incorrectFileFormat:"File format is not supported"},children:e.jsxs("div",{style:j,children:[e.jsx(r.DropZone,{icon:e.jsx(z,{}),description:e.jsxs(e.Fragment,{children:["Drop your files here or"," ",e.jsx(r.BrowseButton,{children:"click to browse"})]}),fileSizeMessage:"Supports all file types"}),e.jsx(r.Error,{})]})}},c={args:{messages:{incorrectFileSize:"File size exceeds the limit",incorrectFileFormat:"File format is not supported"},acceptFileMimeTypes:[s.png,s.jpeg],maxFileSize:I,children:e.jsxs("div",{style:j,children:[e.jsx(r.DropZone,{icon:e.jsx(w,{}),description:e.jsxs(e.Fragment,{children:["Drop .JPEG, .JPG or .PNG file here or",e.jsx(r.BrowseButton,{children:"Browse"})," to attach"]}),fileSizeMessage:"File size should be up to 5 MB"}),e.jsx(r.Error,{})]})}},d=()=>{const[l,a]=y.useState([]),m=o=>{console.log("Files added:",o);const t=o.map(i=>({id:Date.now()+Math.random().toString(),fileName:i.file.name,file:i.file,size:Math.round(i.file.size/(1024*1024)*100)/100,isUploading:!1,validationErrors:i.validationErrors,customErrorMessage:i.customErrorMessage}));a(i=>[...i,...t])},F=o=>{a(t=>t.filter(i=>i.id!==o))};return e.jsx("div",{style:{width:"600px",height:"150px",marginBottom:20},children:e.jsxs(r,{maxFileSize:I,acceptFileMimeTypes:[s.png,s.jpeg],messages:{incorrectFileSize:"File must be smaller than 5MB",incorrectFileFormat:"Only PNG, JPG, and JPEG files are allowed"},onFilesAdded:m,children:[e.jsx(r.DropZone,{icon:e.jsx(z,{}),description:e.jsxs(e.Fragment,{children:["Drop files here or ",e.jsx(r.BrowseButton,{children:"browse files"})]}),fileSizeMessage:"Images only, max 5MB"}),e.jsx(r.AttachedFilesList,{files:l,onRemoveFile:F})]})})},n=()=>{const[l,a]=y.useState([]),m=o=>{console.log("Files added:",o);const t=o.map(i=>({id:Date.now()+Math.random().toString(),fileName:i.file.name,file:i.file,size:Math.round(i.file.size/(1024*1024)*100)/100,isUploading:!1,validationErrors:i.validationErrors,customErrorMessage:i.customErrorMessage}));a(i=>[...i,...t])},F=o=>{a(t=>t.filter(i=>i.id!==o))};return e.jsxs("div",{style:{width:"500px",height:"300px"},children:[e.jsx("h3",{children:"Drag over files to see the overlay variant"}),e.jsxs(r,{acceptFileMimeTypes:[s.jpeg,s.png],maxFileSize:P,variant:"overlay",onFilesAdded:m,messages:{incorrectFileSize:"File is too big",incorrectFileFormat:"Wrong file format"},children:[e.jsxs("div",{style:{padding:"20px",border:"1px solid #e0e0e0",borderRadius:"8px",height:"100%"},children:[e.jsx(_,{label:"Field",placeholder:"Enter field text..."}),e.jsx("div",{style:{marginTop:"16px",display:"flex",alignItems:"center",gap:"12px"},children:e.jsx(r.BrowseButton,{children:"+ Add files"})}),e.jsx(r.AttachedFilesList,{files:l,onRemoveFile:F})]}),e.jsx(r.DropZone,{icon:e.jsx(w,{}),description:"Drop .JPEG, .JPG or .PNG file here to attach",fileSizeMessage:"File size should be up to 10 MB"})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"WithFileList"};n.__docgenInfo={description:"",methods:[],displayName:"OverlayVariant"};var h,g,f;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    messages: {
      incorrectFileSize: 'File size exceeds the limit',
      incorrectFileFormat: 'File format is not supported'
    },
    children: <div style={wrapperStyle}>
        <FileDropArea.DropZone icon={<AddCsvIcon />} description={<>
              Drop your files here or{' '}
              <FileDropArea.BrowseButton>click to browse</FileDropArea.BrowseButton>
            </>} fileSizeMessage="Supports all file types" />
        <FileDropArea.Error />
      </div>
  }
}`,...(f=(g=p.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var u,x,v;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    messages: {
      incorrectFileSize: 'File size exceeds the limit',
      incorrectFileFormat: 'File format is not supported'
    },
    acceptFileMimeTypes: [MIME_TYPES.png, MIME_TYPES.jpeg],
    maxFileSize: FILE_SIZE_5_MB_BYTES,
    children: <div style={wrapperStyle}>
        <FileDropArea.DropZone icon={<AddImageIcon />} description={<>
              Drop .JPEG, .JPG or .PNG file here or
              <FileDropArea.BrowseButton>Browse</FileDropArea.BrowseButton> to attach
            </>} fileSizeMessage="File size should be up to 5 MB" />
        <FileDropArea.Error />
      </div>
  }
}`,...(v=(x=c.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var E,S,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [attachedFiles, setAttachedFiles] = useState<AttachmentFile[]>([]);
  const handleFilesAdded = (filesWithValidation: FileWithValidation[]) => {
    console.log('Files added:', filesWithValidation);
    const newFiles: AttachmentFile[] = filesWithValidation.map(fileWithValidation => ({
      id: Date.now() + Math.random().toString(),
      fileName: fileWithValidation.file.name,
      file: fileWithValidation.file,
      size: Math.round(fileWithValidation.file.size / (1024 * 1024) * 100) / 100,
      isUploading: false,
      validationErrors: fileWithValidation.validationErrors,
      customErrorMessage: fileWithValidation.customErrorMessage
    }));
    setAttachedFiles(prev => [...prev, ...newFiles]);
  };
  const handleRemoveFile = (fileId: string) => {
    setAttachedFiles(prev => prev.filter(file => file.id !== fileId));
  };
  return <div style={{
    width: '600px',
    height: '150px',
    marginBottom: 20
  }}>
      <FileDropArea maxFileSize={FILE_SIZE_5_MB_BYTES} acceptFileMimeTypes={[MIME_TYPES.png, MIME_TYPES.jpeg]} messages={{
      incorrectFileSize: 'File must be smaller than 5MB',
      incorrectFileFormat: 'Only PNG, JPG, and JPEG files are allowed'
    }} onFilesAdded={handleFilesAdded}>
        <FileDropArea.DropZone icon={<AddCsvIcon />} description={<>
              Drop files here or <FileDropArea.BrowseButton>browse files</FileDropArea.BrowseButton>
            </>} fileSizeMessage="Images only, max 5MB" />
        <FileDropArea.AttachedFilesList files={attachedFiles} onRemoveFile={handleRemoveFile} />
      </FileDropArea>
    </div>;
}`,...(M=(S=d.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var A,D,B;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [attachedFiles, setAttachedFiles] = useState<AttachmentFile[]>([]);
  const handleFilesAdded = (files: FileWithValidation[]) => {
    console.log('Files added:', files);
    const newFiles: AttachmentFile[] = files.map(fileWithValidation => ({
      id: Date.now() + Math.random().toString(),
      fileName: fileWithValidation.file.name,
      file: fileWithValidation.file,
      size: Math.round(fileWithValidation.file.size / (1024 * 1024) * 100) / 100,
      isUploading: false,
      validationErrors: fileWithValidation.validationErrors,
      customErrorMessage: fileWithValidation.customErrorMessage
    }));
    setAttachedFiles(prev => [...prev, ...newFiles]);
  };
  const handleRemoveFile = (fileId: string) => {
    setAttachedFiles(prev => prev.filter(file => file.id !== fileId));
  };
  return <div style={{
    width: '500px',
    height: '300px'
  }}>
      <h3>Drag over files to see the overlay variant</h3>
      <FileDropArea acceptFileMimeTypes={[MIME_TYPES.jpeg, MIME_TYPES.png]} maxFileSize={FILE_SIZE_10_MB_BYTES} variant="overlay" onFilesAdded={handleFilesAdded} messages={{
      incorrectFileSize: 'File is too big',
      incorrectFileFormat: 'Wrong file format'
    }}>
        <div style={{
        padding: '20px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        height: '100%'
      }}>
          <FieldText label="Field" placeholder="Enter field text..." />
          <div style={{
          marginTop: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
            <FileDropArea.BrowseButton>+ Add files</FileDropArea.BrowseButton>
          </div>
          <FileDropArea.AttachedFilesList files={attachedFiles} onRemoveFile={handleRemoveFile} />
        </div>
        <FileDropArea.DropZone icon={<AddImageIcon />} description="Drop .JPEG, .JPG or .PNG file here to attach" fileSizeMessage="File size should be up to 10 MB" />
      </FileDropArea>
    </div>;
}`,...(B=(D=n.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const Ne=["Default","Images","WithFileList","OverlayVariant"];export{p as Default,c as Images,n as OverlayVariant,d as WithFileList,Ne as __namedExportsOrder,Le as default};
