import{j as e}from"./jsx-runtime-2f188e98.js";import{A as J,a as s}from"./actionMenu-817fa653.js";import"./index-3553ef47.js";import{S as Q,a as X}from"./userIcon-b6d51b3b.js";import"./details-d199936c.js";import"./baseIconButton-9b03f096.js";import"./bind-d8141dee.js";import"./popover-79ca4f84.js";import"./floating-ui.react-60d1f04e.js";import"./floating-ui.react-dom-a94e415a.js";import"./index-d0bd1ed5.js";import"./floatingUi-59569704.js";/*!
 * Copyright 2026 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t={type:"divider"},de={title:"Components/ActionMenu",component:J,tags:["autodocs"],args:{items:[e.jsx(s,{children:e.jsx("a",{href:"/details",children:"View Details"})},"view"),e.jsx(s,{children:e.jsx("a",{href:"/edit",children:"Edit"})},"edit"),t,{id:"archive",label:"Archive",onClick:()=>console.log("Archive clicked")},{id:"delete",label:"Delete",onClick:()=>console.log("Delete clicked"),className:"danger-button"}],placement:"bottom-end",disabled:!1},argTypes:{items:{description:'Array of menu items: ActionItem (buttons), DividerItem ({ type: "divider" }), or React components',table:{type:{summary:"MenuItem[]"}},control:!1},placement:{control:"select",options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end"],description:"Popover placement relative to the button",table:{type:{summary:"Placement"},defaultValue:{summary:"bottom-end"}}},disabled:{control:"boolean",description:"Whether the menu button is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},cleanupDividers:{control:"boolean",description:"Automatically remove dividers from edges and duplicates",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},className:{control:"text",description:"Additional CSS class for the container",table:{type:{summary:"string"}}},contentClassName:{control:"text",description:"Additional CSS class for the menu content",table:{type:{summary:"string"}}},buttonClassName:{control:"text",description:"Additional CSS class for the trigger button",table:{type:{summary:"string"}}},popoverClassName:{control:"text",description:"Additional CSS class for the popover container",table:{type:{summary:"string"}}},menuClassName:{control:"text",description:"Additional CSS class for the menu wrapper",table:{type:{summary:"string"}}},ariaLabel:{control:"text",description:"Accessible label for the button",table:{type:{summary:"string"},defaultValue:{summary:"Actions menu"}}},trigger:{description:"Custom trigger element (defaults to meatball menu icon)",table:{type:{summary:"ReactNode"}},control:!1}}},i={},n={args:{items:[{id:"edit",label:"Edit",onClick:()=>console.log("Edit clicked")},{id:"duplicate",label:"Duplicate",onClick:()=>console.log("Duplicate clicked")},{id:"delete",label:"Delete",onClick:()=>console.log("Delete clicked"),className:"danger-button"}]}},a={args:{items:[e.jsx(s,{children:e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Q,{})," View Profile"]})},"profile"),e.jsx(s,{children:e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(X,{})," Re-run"]})},"docs")]}},r={args:{items:[e.jsx(s,{children:e.jsx("a",{href:"/details",children:"View Details"})},"view"),{id:"archive",label:"Archive",onClick:()=>{},hasPermission:!0},{id:"delete",label:"Delete",onClick:()=>{},className:"danger-button",hasPermission:!1}]}},o={args:{disabled:!0},parameters:{docs:{description:{story:"The entire ActionMenu button can be disabled, preventing the menu from opening."}}}},l={args:{items:[{id:"view",label:"View",onClick:()=>{}},t,{id:"edit",label:"Edit",onClick:()=>{}},{id:"duplicate",label:"Duplicate",onClick:()=>{}},t,{id:"delete",label:"Delete",onClick:()=>{},className:"danger-button"}]}},d={args:{placement:"top-end"},render:K=>e.jsx("div",{style:{paddingTop:"200px"},children:e.jsx(J,{...K})})},c={args:{items:[]}},m={args:{items:[{id:"view",label:"View (available)",onClick:()=>console.log("View")},{id:"edit",label:"Edit (disabled)",onClick:()=>console.log("Edit"),disabled:!0},t,{id:"delete",label:"Delete (disabled)",onClick:()=>console.log("Delete"),disabled:!0,className:"danger-button"}]},parameters:{docs:{description:{story:"Individual actions can be disabled. Unlike hasPermission=false (which hides items), disabled=true shows items in a grayed-out state."}}}},p={args:{cleanupDividers:!0,items:[t,{id:"edit",label:"Edit",onClick:()=>{}},t,t,{id:"delete",label:"Delete",onClick:()=>{},hasPermission:!1},t]},parameters:{docs:{description:{story:"With cleanupDividers=true (default), leading/trailing/consecutive dividers are removed. After filtering by hasPermission, only Edit action remains with no dividers."}}}},u={args:{cleanupDividers:!1,items:[t,{id:"edit",label:"Edit",onClick:()=>{}},t,t,{id:"delete",label:"Delete",onClick:()=>{},hasPermission:!1},t]},parameters:{docs:{description:{story:"With cleanupDividers=false, dividers are preserved as-is. This results in dividers at edges and consecutive duplicates."}}}};var b,g,D;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(D=(g=i.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var h,C,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'edit',
      label: 'Edit',
      onClick: () => console.log('Edit clicked')
    }, {
      id: 'duplicate',
      label: 'Duplicate',
      onClick: () => console.log('Duplicate clicked')
    }, {
      id: 'delete',
      label: 'Delete',
      onClick: () => console.log('Delete clicked'),
      className: 'danger-button'
    }]
  }
}`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var y,f,I;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: [<ActionMenuItem key="profile">
        <span style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
          <UserIcon /> View Profile
        </span>
      </ActionMenuItem>, <ActionMenuItem key="docs">
        <span style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
          <RerunIcon /> Re-run
        </span>
      </ActionMenuItem>]
  }
}`,...(I=(f=a.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var k,A,E;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: [<ActionMenuItem key="view">
        <a href="/details">View Details</a>
      </ActionMenuItem>, {
      id: 'archive',
      label: 'Archive',
      onClick: () => {},
      hasPermission: true
    }, {
      id: 'delete',
      label: 'Delete',
      onClick: () => {},
      className: 'danger-button',
      hasPermission: false
    }]
  }
}`,...(E=(A=r.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var N,x,M;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The entire ActionMenu button can be disabled, preventing the menu from opening.'
      }
    }
  }
}`,...(M=(x=o.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var V,_,w;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'view',
      label: 'View',
      onClick: () => {}
    }, ACTION_MENU_DIVIDER, {
      id: 'edit',
      label: 'Edit',
      onClick: () => {}
    }, {
      id: 'duplicate',
      label: 'Duplicate',
      onClick: () => {}
    }, ACTION_MENU_DIVIDER, {
      id: 'delete',
      label: 'Delete',
      onClick: () => {},
      className: 'danger-button'
    }]
  }
}`,...(w=(_=l.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var S,T,P;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placement: 'top-end'
  },
  render: args => <div style={{
    paddingTop: '200px'
  }}>
      <ActionMenu {...args} />
    </div>
}`,...(P=(T=d.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var R,j,U;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...(U=(j=c.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var O,W,B;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'view',
      label: 'View (available)',
      onClick: () => console.log('View')
    }, {
      id: 'edit',
      label: 'Edit (disabled)',
      onClick: () => console.log('Edit'),
      disabled: true
    }, ACTION_MENU_DIVIDER, {
      id: 'delete',
      label: 'Delete (disabled)',
      onClick: () => console.log('Delete'),
      disabled: true,
      className: 'danger-button'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Individual actions can be disabled. Unlike hasPermission=false (which hides items), disabled=true shows items in a grayed-out state.'
      }
    }
  }
}`,...(B=(W=m.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var L,q,z;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    cleanupDividers: true,
    items: [ACTION_MENU_DIVIDER, {
      id: 'edit',
      label: 'Edit',
      onClick: () => {}
    }, ACTION_MENU_DIVIDER, ACTION_MENU_DIVIDER, {
      id: 'delete',
      label: 'Delete',
      onClick: () => {},
      hasPermission: false
    }, ACTION_MENU_DIVIDER]
  },
  parameters: {
    docs: {
      description: {
        story: 'With cleanupDividers=true (default), leading/trailing/consecutive dividers are removed. After filtering by hasPermission, only Edit action remains with no dividers.'
      }
    }
  }
}`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var F,G,H;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    cleanupDividers: false,
    items: [ACTION_MENU_DIVIDER, {
      id: 'edit',
      label: 'Edit',
      onClick: () => {}
    }, ACTION_MENU_DIVIDER, ACTION_MENU_DIVIDER, {
      id: 'delete',
      label: 'Delete',
      onClick: () => {},
      hasPermission: false
    }, ACTION_MENU_DIVIDER]
  },
  parameters: {
    docs: {
      description: {
        story: 'With cleanupDividers=false, dividers are preserved as-is. This results in dividers at edges and consecutive duplicates.'
      }
    }
  }
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const ce=["Default","ActionsOnly","CustomComponents","WithPermissions","DisabledButton","MultipleDividers","TopPlacement","Empty","DisabledActions","DividerCleanup","WithoutCleanup"];export{n as ActionsOnly,a as CustomComponents,i as Default,m as DisabledActions,o as DisabledButton,p as DividerCleanup,c as Empty,l as MultipleDividers,d as TopPlacement,r as WithPermissions,u as WithoutCleanup,ce as __namedExportsOrder,de as default};
