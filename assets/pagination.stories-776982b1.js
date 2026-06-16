import{j as e}from"./jsx-runtime-2f188e98.js";import{r as s}from"./index-3553ef47.js";import{T as u}from"./tooltip-280b52d3.js";import{S as z}from"./warning-72e334ed.js";import{P as m}from"./singleAutocomplete-f996b9ba.js";import"./index-d0bd1ed5.js";import"./bind-d8141dee.js";import"./floating-ui.react-ea29885b.js";import"./floatingUi-c696ea36.js";import"./downshift.esm-92d8e7b2.js";import"./index-4c891f75.js";import"./clear-c7bc24e5.js";import"./prevPage-746d23db.js";import"./adaptiveTagList-592fb691.js";import"./button-34bf729b.js";import"./close-b4801ed1.js";import"./isEmpty-6ac0b123.js";import"./actionMenu-fb657254.js";import"./details-d199936c.js";import"./baseIconButton-9b03f096.js";import"./popover-8346e5d8.js";import"./attachedFile-aa48fc19.js";import"./xls-e116cca0.js";import"./breadcrumbs-2e157599.js";import"./tree-c792b12a.js";import"./bubblesLoader-539cf135.js";import"./bulkPanel-ae499898.js";import"./index-5cf2ac00.js";import"./useOnClickOutside-b0fffa8f.js";import"./keyCodes-e5060420.js";import"./selection-dede4e76.js";import"./chip-3c214fbe.js";import"./chevronDownDropdown-69a9d5c1.js";import"./checkbox-322ca70a.js";import"./table-de70aa52.js";import"./resizeColumn-eebfb371.js";import"./useEllipsisTitle-1cddebe3.js";import"./dropdown-de3e81f9.js";import"./dropdown-1f4530a4.js";import"./fieldLabel-917daddd.js";import"./fieldNumber-925ee977.js";import"./minus-6db56247.js";import"./plus-150a0ce8.js";import"./fieldTextFlex-61eb1205.js";import"./filtersButton-93f84a33.js";import"./filterOutline-513d7be6.js";import"./filterItem-b755c94e.js";import"./issueList-b7d4d2f9.js";import"./modal-ace9019f.js";import"./constants-1e05cdf5.js";import"./multipleAutocomplete-6ec3d6db.js";import"./radioGroup-183a5ecc.js";import"./segmentedControl-c9570136.js";import"./spinLoader-d5daab2a.js";import"./systemAlert-58c5107a.js";import"./success-8512adf6.js";import"./systemMessage-b191d100.js";import"./treeSortableItem-5243dce9.js";import"./themeProvider-37018bdd.js";import"./toggle-3fb3b5fa.js";const Ie={title:"Navigation/Pagination",component:m,parameters:{layout:"centered"},tags:["autodocs"],args:{activePage:2,totalItems:400,pageSize:20,pageSizeOptions:[10,20,30,40,50],changePage:()=>{},changePageSize:()=>{}}},o={render:t=>{const[i,n]=s.useState(t.pageSize),[p,g]=s.useState(t.activePage),l=Math.ceil(t.totalItems/i);return e.jsx("div",{style:{width:"900px"},children:e.jsx(m,{...t,pageSize:i,activePage:p,totalPages:l,changePage:a=>{g(a)},changePageSize:a=>{n(a)}})})}},r={render:t=>{const[i,n]=s.useState(t.pageSize),[p,g]=s.useState(t.activePage),l=Math.ceil(t.totalItems/i);return e.jsx("div",{style:{width:"900px"},children:e.jsx(m,{...t,pageSize:i,activePage:p,totalPages:l,changePage:a=>{g(a)},changePageSize:a=>{n(a)},warningContent:e.jsx("div",{style:{display:"flex",alignItems:"center",width:"16px",padding:"0 0 0 8px",color:"#FFA500"},children:e.jsx(u,{content:e.jsxs("div",{style:{maxWidth:"300px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0"},children:"Data Limit Exceeded"}),e.jsx("p",{style:{margin:0},children:"The results exceed the allowed 10,000 items limit and cannot be fully displayed. Please refine your filters or export the data for the full results."})]}),placement:"top",children:e.jsx("div",{style:{display:"flex"},children:e.jsx(z,{})})})})})})}};var c,d,P;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageSize, setPageSize] = useState(args.pageSize);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(args.activePage);
    const totalPages = Math.ceil(args.totalItems / pageSize);
    return <div style={{
      width: '900px'
    }}>
        <Pagination {...args} pageSize={pageSize} activePage={page} totalPages={totalPages} changePage={newPage => {
        setPage(newPage);
      }} changePageSize={size => {
        setPageSize(size);
      }} />
      </div>;
  }
}`,...(P=(d=o.parameters)==null?void 0:d.docs)==null?void 0:P.source}}};var h,x,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageSize, setPageSize] = useState(args.pageSize);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(args.activePage);
    const totalPages = Math.ceil(args.totalItems / pageSize);
    return <div style={{
      width: '900px'
    }}>
        <Pagination {...args} pageSize={pageSize} activePage={page} totalPages={totalPages} changePage={newPage => {
        setPage(newPage);
      }} changePageSize={size => {
        setPageSize(size);
      }} warningContent={<div style={{
        display: 'flex',
        alignItems: 'center',
        width: '16px',
        padding: '0 0 0 8px',
        color: '#FFA500'
      }}>
              <Tooltip content={<div style={{
          maxWidth: '300px'
        }}>
                    <h3 style={{
            margin: '0 0 8px 0'
          }}>Data Limit Exceeded</h3>
                    <p style={{
            margin: 0
          }}>
                      The results exceed the allowed 10,000 items limit and cannot be fully
                      displayed. Please refine your filters or export the data for the full results.
                    </p>
                  </div>} placement="top">
                <div style={{
            display: 'flex'
          }}>
                  <WarningIcon />
                </div>
              </Tooltip>
            </div>} />
      </div>;
  }
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const We=["Primary","WithWarning"];export{o as Primary,r as WithWarning,We as __namedExportsOrder,Ie as default};
