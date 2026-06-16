import{j as t}from"./jsx-runtime-2f188e98.js";import{S as i}from"./singleAutocomplete-f996b9ba.js";import{D as d}from"./downshift.esm-92d8e7b2.js";import{r as _}from"./index-3553ef47.js";import"./index-d0bd1ed5.js";import"./bind-d8141dee.js";import"./floating-ui.react-ea29885b.js";import"./clear-c7bc24e5.js";import"./prevPage-746d23db.js";import"./adaptiveTagList-592fb691.js";import"./button-34bf729b.js";import"./close-b4801ed1.js";import"./isEmpty-6ac0b123.js";import"./actionMenu-fb657254.js";import"./details-d199936c.js";import"./baseIconButton-9b03f096.js";import"./popover-8346e5d8.js";import"./floatingUi-c696ea36.js";import"./attachedFile-aa48fc19.js";import"./xls-e116cca0.js";import"./breadcrumbs-2e157599.js";import"./tree-c792b12a.js";import"./bubblesLoader-539cf135.js";import"./bulkPanel-ae499898.js";import"./index-5cf2ac00.js";import"./useOnClickOutside-b0fffa8f.js";import"./keyCodes-e5060420.js";import"./selection-dede4e76.js";import"./chip-3c214fbe.js";import"./tooltip-280b52d3.js";import"./chevronDownDropdown-69a9d5c1.js";import"./warning-72e334ed.js";import"./checkbox-322ca70a.js";import"./table-de70aa52.js";import"./index-4c891f75.js";import"./resizeColumn-eebfb371.js";import"./useEllipsisTitle-1cddebe3.js";import"./dropdown-de3e81f9.js";import"./dropdown-1f4530a4.js";import"./fieldLabel-917daddd.js";import"./fieldNumber-925ee977.js";import"./minus-6db56247.js";import"./plus-150a0ce8.js";import"./fieldTextFlex-61eb1205.js";import"./filtersButton-93f84a33.js";import"./filterOutline-513d7be6.js";import"./filterItem-b755c94e.js";import"./issueList-b7d4d2f9.js";import"./modal-ace9019f.js";import"./constants-1e05cdf5.js";import"./multipleAutocomplete-6ec3d6db.js";import"./radioGroup-183a5ecc.js";import"./segmentedControl-c9570136.js";import"./spinLoader-d5daab2a.js";import"./systemAlert-58c5107a.js";import"./success-8512adf6.js";import"./systemMessage-b191d100.js";import"./treeSortableItem-5243dce9.js";import"./themeProvider-37018bdd.js";import"./toggle-3fb3b5fa.js";const S=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],T=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3","Demo Api Tests 4","Demo Api Tests 5","Demo Api Tests 6","Demo Api Tests 7","Demo Api Tests 8"],E={options:S,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e!=null&&e.id?String(e==null?void 0:e.id):"",value:S[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",isDropdownMode:!0,disabled:!1,inputProps:{clearable:!0},maxLength:null},h={options:T,loading:!1,async:!0,createWithoutConfirmation:!0,parseValueToString:e=>e?String(e):"",value:T[0],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,inputProps:{clearable:!0},maxLength:null},ke={title:"Controls/Autocompletes/SingleAutocomplete",component:i,parameters:{...h},tags:["autodocs"]},s={args:{...E},render:e=>{const[m,r]=_.useState(e.value||{}),c={...e,inputProps:{...e.inputProps,onClear:()=>r({})}},g=(n,o)=>{switch(o.type){case d.stateChangeTypes.keyDownEnter:case d.stateChangeTypes.clickItem:return{...o,highlightedIndex:n.highlightedIndex,inputValue:""};default:return o}},u=n=>{r(n)};return t.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:t.jsx(i,{...c,onChange:u,stateReducer:g,value:m})})}},a={args:{...h},render:e=>{const[m,r]=_.useState(e.value||""),c={...e,inputProps:{...e.inputProps,onClear:()=>r("")}},g=(n,o)=>{switch(o.type){case d.stateChangeTypes.keyDownEnter:case d.stateChangeTypes.clickItem:return{...o,highlightedIndex:n.highlightedIndex,inputValue:""};default:return o}},u=n=>{r(n)};return t.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center",position:"relative"},children:t.jsx(i,{...c,onChange:u,stateReducer:g,value:m})})}},p={args:{...h,dropdownMatchInputWidth:!0,withMenuFlip:!0,menuPortalRoot:document.body,isDropdownMode:!0},render:e=>t.jsxs("div",{children:[t.jsxs("p",{style:{marginBottom:"16px",maxWidth:"400px"},children:["This example demonstrates menu rendering in a portal to prevent clipping when the autocomplete is inside a container with ",t.jsx("code",{children:"overflow: hidden"})," (e.g., Modal, SidePanel)."]}),t.jsx("div",{style:{width:"400px",height:"80px",overflow:"hidden",border:"2px dashed #aaa",padding:"16px",display:"flex",alignItems:"center"},children:t.jsx(i,{...e})})]})},l={args:{...h,dropdownMatchInputWidth:!0,withMenuFlip:!0,menuPortalRoot:document.body,isDropdownMode:!0},render:e=>t.jsxs("div",{style:{width:"500px",height:"150px",overflow:"auto",border:"2px dashed #aaa",display:"flex",flexDirection:"column",padding:"16px"},children:[t.jsx("div",{style:{width:"400px"},children:t.jsx(i,{...e})}),t.jsx("p",{style:{marginBottom:"16px",maxWidth:"400px"},children:"This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action. So i need to scroll the page to see the effect of the dropdown closing when the user scrolls. This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action. This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action. This is a very long text to enable scrolling. This example demonstrates that the dropdown will close when the user scrolls the page, which is a common UX pattern to prevent the dropdown from being detached from the input. Try scrolling the page to see it in action."})]})};var w,x,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...TEST_DATA_OBJECTS
  },
  render: args => {
    const [state, setState] = useState(args.value || {});
    const modifiedArgs = {
      ...args,
      inputProps: {
        ...args.inputProps,
        onClear: () => setState({} as (typeof OPTIONS_OBJECTS)[number])
      }
    };
    const handleStateChange: ComponentProps<typeof SingleAutocomplete<(typeof OPTIONS_OBJECTS)[number]>>['stateReducer'] = (prevState, changes) => {
      switch (changes.type) {
        case Downshift.stateChangeTypes.keyDownEnter:
        case Downshift.stateChangeTypes.clickItem:
          return {
            ...changes,
            highlightedIndex: prevState.highlightedIndex,
            inputValue: ''
          };
        default:
          return changes;
      }
    };
    const onChange: ComponentProps<typeof SingleAutocomplete<(typeof OPTIONS_OBJECTS)[number]>>['onChange'] = newState => {
      setState(newState as (typeof OPTIONS_OBJECTS)[number]);
    };
    return <div style={{
      width: '600px',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    }}>
        <SingleAutocomplete<(typeof OPTIONS_OBJECTS)[number]> {...modifiedArgs} onChange={onChange} stateReducer={handleStateChange} value={state} />
      </div>;
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,v,A;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...TEST_DATA_STRINGS
  },
  render: args => {
    const [state, setState] = useState(args.value || '');
    const modifiedArgs = {
      ...args,
      inputProps: {
        ...args.inputProps,
        onClear: () => setState('')
      }
    };
    const handleStateChange: ComponentProps<typeof SingleAutocomplete<(typeof OPTIONS_STRINGS)[number]>>['stateReducer'] = (prevState, changes) => {
      switch (changes.type) {
        case Downshift.stateChangeTypes.keyDownEnter:
        case Downshift.stateChangeTypes.clickItem:
          return {
            ...changes,
            highlightedIndex: prevState.highlightedIndex,
            inputValue: ''
          };
        default:
          return changes;
      }
    };
    const onChange: ComponentProps<typeof SingleAutocomplete<(typeof OPTIONS_STRINGS)[number]>>['onChange'] = newState => {
      setState(newState as (typeof OPTIONS_STRINGS)[number]);
    };
    return <div style={{
      width: '600px',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    }}>
        <SingleAutocomplete {...modifiedArgs} onChange={onChange} stateReducer={handleStateChange} value={state} />
      </div>;
  }
}`,...(A=(v=a.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var C,D,I;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...TEST_DATA_STRINGS,
    dropdownMatchInputWidth: true,
    withMenuFlip: true,
    menuPortalRoot: document.body,
    isDropdownMode: true
  },
  render: args => {
    return <div>
        <p style={{
        marginBottom: '16px',
        maxWidth: '400px'
      }}>
          This example demonstrates menu rendering in a portal to prevent clipping when the
          autocomplete is inside a container with <code>overflow: hidden</code> (e.g., Modal,
          SidePanel).
        </p>
        <div style={{
        width: '400px',
        height: '80px',
        overflow: 'hidden',
        border: '2px dashed #aaa',
        padding: '16px',
        display: 'flex',
        alignItems: 'center'
      }}>
          <SingleAutocomplete {...args} />
        </div>
      </div>;
  }
}`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var b,P,O;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...TEST_DATA_STRINGS,
    dropdownMatchInputWidth: true,
    withMenuFlip: true,
    menuPortalRoot: document.body,
    isDropdownMode: true
  },
  render: args => {
    return <div style={{
      width: '500px',
      height: '150px',
      overflow: 'auto',
      border: '2px dashed #aaa',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px'
    }}>
        <div style={{
        width: '400px'
      }}>
          <SingleAutocomplete {...args} />
        </div>

        <p style={{
        marginBottom: '16px',
        maxWidth: '400px'
      }}>
          This is a very long text to enable scrolling. This example demonstrates that the dropdown
          will close when the user scrolls the page, which is a common UX pattern to prevent the
          dropdown from being detached from the input. Try scrolling the page to see it in action.
          So i need to scroll the page to see the effect of the dropdown closing when the user
          scrolls. This is a very long text to enable scrolling. This example demonstrates that the
          dropdown will close when the user scrolls the page, which is a common UX pattern to
          prevent the dropdown from being detached from the input. Try scrolling the page to see it
          in action. This is a very long text to enable scrolling. This example demonstrates that
          the dropdown will close when the user scrolls the page, which is a common UX pattern to
          prevent the dropdown from being detached from the input. Try scrolling the page to see it
          in action. This is a very long text to enable scrolling. This example demonstrates that
          the dropdown will close when the user scrolls the page, which is a common UX pattern to
          prevent the dropdown from being detached from the input. Try scrolling the page to see it
          in action.
        </p>
      </div>;
  }
}`,...(O=(P=l.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};const Ge=["SingleSelectObjects","SingleSelectStrings","SingleSelectWithMenuPortal","SingleSelectWithHideByScroll"];export{s as SingleSelectObjects,a as SingleSelectStrings,l as SingleSelectWithHideByScroll,p as SingleSelectWithMenuPortal,Ge as __namedExportsOrder,ke as default};
