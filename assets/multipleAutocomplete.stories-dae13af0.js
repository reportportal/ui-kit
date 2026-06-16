import{j as t}from"./jsx-runtime-2f188e98.js";import{M as i}from"./multipleAutocomplete-6ec3d6db.js";import{r as m}from"./index-3553ef47.js";import"./bind-d8141dee.js";import"./clear-c7bc24e5.js";import"./dropdown-1f4530a4.js";import"./floating-ui.react-ea29885b.js";import"./index-d0bd1ed5.js";import"./index-5cf2ac00.js";import"./bubblesLoader-539cf135.js";import"./button-34bf729b.js";import"./plus-150a0ce8.js";import"./isEmpty-6ac0b123.js";import"./close-b4801ed1.js";import"./downshift.esm-92d8e7b2.js";import"./index-4c891f75.js";import"./constants-1e05cdf5.js";const c=[{id:"Demo Api Tests",name:"Demo Api Tests"},{id:"Demo Api Tests 1",name:"Demo Api Tests 1"},{id:"Demo Api Tests 2",name:"Demo Api Tests 2"},{id:"Demo Api Tests 3",name:"Demo Api Tests 3"}],h=["Demo Api Tests","Demo Api Tests 1","Demo Api Tests 2","Demo Api Tests 3"],g=["Very Long Option Name That Will Be Truncated When Single Line Mode Is Enabled","Another Very Long Option Name That Will Also Be Truncated","Short","Medium Length Option Name"],P={options:c,loading:!1,async:!0,createWithoutConfirmation:!0,creatable:!1,editable:!0,existingItemsMap:{[c[0].id]:!0},parseValueToString:e=>e!=null&&e.id?String(e.id):"",highlightUnStoredItem:!1,value:[c[0]],error:"",touched:!0,minLength:1,placeholder:"Test placeholder",disabled:!1,mobileDisabled:!1,inputProps:{clearable:!0},maxLength:null,customClass:"",menuClassName:"",parseInputValueFn:null,dataAutomationId:""},_={options:h,loading:!1,async:!0,createWithoutConfirmation:!0,creatable:!1,editable:!0,existingItemsMap:{"Demo Api Tests":!0},parseValueToString:e=>e?String(e):"",highlightUnStoredItem:!0,value:[h[0]],error:"",touched:!1,inputProps:{clearable:!0},minLength:1,isDropdownMode:!0,placeholder:"Test placeholder",disabled:!1,mobileDisabled:!1,maxLength:null,customClass:"",menuClassName:"",parseInputValueFn:null,dataAutomationId:""},H={title:"Controls/Autocompletes/MultipleAutocomplete",component:i,parameters:{...P},tags:["autodocs"]},l={args:{...P},render:e=>{const[n,a]=m.useState(e.value||[]),s={...e,inputProps:{...e.inputProps,onClear:()=>a([])}},r=o=>{a(o)};return t.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center"},children:t.jsx(i,{...s,onChange:r,value:n})})}},p={args:{..._},render:e=>{const[n,a]=m.useState(e.value||[]),s={...e,inputProps:{...e.inputProps,onClear:()=>a([])}},r=o=>{a(o)};return t.jsx("div",{style:{width:"600px",height:"400px",display:"flex",alignItems:"center"},children:t.jsx(i,{...s,onChange:r,value:n})})}},u={args:{options:g,loading:!1,async:!0,createWithoutConfirmation:!0,creatable:!1,editable:!0,existingItemsMap:{},parseValueToString:e=>e?String(e):"",highlightUnStoredItem:!1,value:[g[0],g[1]],error:"",touched:!1,inputProps:{clearable:!0},minLength:1,placeholder:"Test placeholder",disabled:!1,mobileDisabled:!1,maxLength:null,customClass:"",menuClassName:"",parseInputValueFn:null,dataAutomationId:"",selectedItemSingleLine:!0},render:e=>{const[n,a]=m.useState(e.value||[]),s={...e,inputProps:{...e.inputProps,onClear:()=>a([])}},r=o=>{a(o)};return t.jsx("div",{style:{width:"300px",height:"400px",display:"flex",alignItems:"center"},children:t.jsx(i,{...s,onChange:r,value:n})})}},d={args:{options:h,loading:!1,async:!1,createWithoutConfirmation:!0,creatable:!0,editable:!0,existingItemsMap:{},parseValueToString:e=>e?String(e):"",highlightUnStoredItem:!1,value:[],error:"",touched:!1,inputProps:{clearable:!0},minLength:1,isDropdownMode:!1,placeholder:"Enter comma, semicolon, or newline-separated items",disabled:!1,mobileDisabled:!1,maxLength:null,customClass:"",menuClassName:"",dataAutomationId:"multi-token-parse-demo",parseInputValueFn:e=>e.split(/[,;\n]+/).map(n=>n.trim()).filter(n=>n.length>0)},render:e=>{const[n,a]=m.useState(e.value||[]),s={...e,inputProps:{...e.inputProps,onClear:()=>a([])}},r=o=>{a(o)};return t.jsxs("div",{children:[t.jsx("div",{style:{marginBottom:"20px",fontSize:"14px",color:"#666"},children:t.jsxs("p",{children:["Try entering multiple items in one action:",t.jsx("br",{}),"• Comma-separated: ",t.jsx("code",{children:"alpha, beta, gamma"}),t.jsx("br",{}),"• Semicolon-separated: ",t.jsx("code",{children:"alpha; beta; gamma"}),t.jsx("br",{}),"• Newline-separated (paste multiple lines)",t.jsx("br",{}),"Then press Enter or click outside the field to confirm.",t.jsx("br",{}),"All valid items parsed from the input should be added as separate chips."]})}),t.jsx("div",{style:{width:"500px",height:"400px",display:"flex",alignItems:"center"},children:t.jsx(i,{...s,onChange:r,value:n})}),t.jsxs("div",{style:{marginTop:"20px",fontSize:"14px",color:"#666"},children:[t.jsxs("p",{children:["Current selected items (",n.length,"):"]}),t.jsx("pre",{style:{backgroundColor:"#f5f5f5",padding:"10px",borderRadius:"4px"},children:JSON.stringify(n,null,2)})]})]})}};var S,f,T;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...TEST_DATA_OBJECTS
  },
  render: args => {
    const [state, setState] = useState(args.value || []);
    const modifiedArgs = {
      ...args,
      inputProps: {
        ...args.inputProps,
        onClear: () => setState([])
      }
    };
    const onChange: ComponentProps<typeof MultipleAutocomplete<(typeof OPTIONS_OBJECTS)[number]>>['onChange'] = newState => {
      setState(newState as typeof OPTIONS_OBJECTS);
    };
    return <div style={{
      width: '600px',
      height: '400px',
      display: 'flex',
      alignItems: 'center'
    }}>
        <MultipleAutocomplete<(typeof OPTIONS_OBJECTS)[number]> {...modifiedArgs} onChange={onChange} value={state} />
      </div>;
  }
}`,...(T=(f=l.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var x,b,I;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...TEST_DATA_STRINGS
  },
  render: args => {
    const [state, setState] = useState(args.value || []);
    const modifiedArgs = {
      ...args,
      inputProps: {
        ...args.inputProps,
        onClear: () => setState([])
      }
    };
    const onChange: ComponentProps<typeof MultipleAutocomplete<(typeof OPTIONS_STRINGS)[number]>>['onChange'] = newState => {
      setState(newState as typeof OPTIONS_STRINGS);
    };
    return <div style={{
      width: '600px',
      height: '400px',
      display: 'flex',
      alignItems: 'center'
    }}>
        <MultipleAutocomplete {...modifiedArgs} onChange={onChange} value={state} />
      </div>;
  }
}`,...(I=(b=p.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var C,A,O;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    options: LONG_OPTIONS_STRINGS,
    loading: false,
    async: true,
    createWithoutConfirmation: true,
    creatable: false,
    editable: true,
    existingItemsMap: {},
    parseValueToString: value => {
      return value ? String(value) : '';
    },
    highlightUnStoredItem: false,
    value: [LONG_OPTIONS_STRINGS[0], LONG_OPTIONS_STRINGS[1]],
    error: '',
    touched: false,
    inputProps: {
      clearable: true
    },
    minLength: 1,
    placeholder: 'Test placeholder',
    disabled: false,
    mobileDisabled: false,
    maxLength: null,
    customClass: '',
    menuClassName: '',
    parseInputValueFn: null,
    dataAutomationId: '',
    selectedItemSingleLine: true
  },
  render: args => {
    const [state, setState] = useState(args.value || []);
    const modifiedArgs = {
      ...args,
      inputProps: {
        ...args.inputProps,
        onClear: () => setState([])
      }
    };
    const onChange: ComponentProps<typeof MultipleAutocomplete<(typeof LONG_OPTIONS_STRINGS)[number]>>['onChange'] = newState => {
      setState(newState as typeof LONG_OPTIONS_STRINGS);
    };
    return <div style={{
      width: '300px',
      height: '400px',
      display: 'flex',
      alignItems: 'center'
    }}>
        <MultipleAutocomplete<(typeof LONG_OPTIONS_STRINGS)[number]> {...modifiedArgs} onChange={onChange} value={state} />
      </div>;
  }
}`,...(O=(A=u.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var N,y,v;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    options: OPTIONS_STRINGS,
    loading: false,
    async: false,
    createWithoutConfirmation: true,
    creatable: true,
    editable: true,
    existingItemsMap: {},
    parseValueToString: value => {
      return value ? String(value) : '';
    },
    highlightUnStoredItem: false,
    value: [],
    error: '',
    touched: false,
    inputProps: {
      clearable: true
    },
    minLength: 1,
    isDropdownMode: false,
    placeholder: 'Enter comma, semicolon, or newline-separated items',
    disabled: false,
    mobileDisabled: false,
    maxLength: null,
    customClass: '',
    menuClassName: '',
    dataAutomationId: 'multi-token-parse-demo',
    // Multi-token parser: splits by comma, semicolon, or newline
    parseInputValueFn: (inputValue: string) => {
      return inputValue.split(/[,;\\n]+/).map(item => item.trim()).filter(item => item.length > 0);
    }
  },
  render: args => {
    const [state, setState] = useState<string[]>(args.value || []);
    const modifiedArgs = {
      ...args,
      inputProps: {
        ...args.inputProps,
        onClear: () => setState([])
      }
    };
    const onChange: ComponentProps<typeof MultipleAutocomplete<string>>['onChange'] = newState => {
      setState(newState as string[]);
    };
    return <div>
        <div style={{
        marginBottom: '20px',
        fontSize: '14px',
        color: '#666'
      }}>
          <p>
            Try entering multiple items in one action:
            <br />• Comma-separated: <code>alpha, beta, gamma</code>
            <br />• Semicolon-separated: <code>alpha; beta; gamma</code>
            <br />
            • Newline-separated (paste multiple lines)
            <br />
            Then press Enter or click outside the field to confirm.
            <br />
            All valid items parsed from the input should be added as separate chips.
          </p>
        </div>
        <div style={{
        width: '500px',
        height: '400px',
        display: 'flex',
        alignItems: 'center'
      }}>
          <MultipleAutocomplete<string> {...modifiedArgs} onChange={onChange} value={state} />
        </div>
        <div style={{
        marginTop: '20px',
        fontSize: '14px',
        color: '#666'
      }}>
          <p>Current selected items ({state.length}):</p>
          <pre style={{
          backgroundColor: '#f5f5f5',
          padding: '10px',
          borderRadius: '4px'
        }}>
            {JSON.stringify(state, null, 2)}
          </pre>
        </div>
      </div>;
  }
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const K=["Objects","Strings","WithSingleLineMode","WithMultiTokenParseInputValueFn"];export{l as Objects,p as Strings,d as WithMultiTokenParseInputValueFn,u as WithSingleLineMode,K as __namedExportsOrder,H as default};
