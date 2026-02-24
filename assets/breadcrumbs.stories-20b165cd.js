import{B as V}from"./breadcrumbs-4d3d4b9f.js";import"./jsx-runtime-2f188e98.js";import"./index-3553ef47.js";import"./bind-d8141dee.js";import"./popover-79ca4f84.js";import"./floating-ui.react-60d1f04e.js";import"./floating-ui.react-dom-a94e415a.js";import"./index-d0bd1ed5.js";import"./floatingUi-59569704.js";import"./meatballMenu-8b9878d9.js";import"./tree-7783ba7d.js";import"./isEmpty-6ac0b123.js";const J={title:"Components/Breadcrumbs",component:V,argTypes:{maxShownDescriptors:{control:{type:"number",min:1}}},parameters:{layout:"centered"},tags:["autodocs"]},e=[{title:"Level 1",link:{pathname:"/level-1"}},{title:"Level 2",link:{pathname:"/level-1/level-2"}},{title:"Level 3",link:{pathname:"/level-1/level-2/level-3"}},{title:"Level 4",link:{pathname:"/level-1/level-2/level-3/level-4"}},{title:"Level 5",link:{pathname:"/level-1/level-2/level-3/level-4/level-5"}},{title:"Level 6",link:{pathname:"/level-1/level-2/level-3/level-4/level-5/level-6"}},{title:"Level 7",link:{pathname:"/level-1/level-2/level-3/level-4/level-5/level-6/level-7"}},{title:"Level 8",link:{pathname:"/level-1/level-2/level-3/level-4/level-5/level-6/level-7/level-8"}},{title:"Level 9",link:{pathname:"/level-1/level-2/level-3/level-4/level-5/level-6/level-7/level-8/level-9"}},{title:"Level 10",link:{pathname:"/level-1/level-2/level-3/level-4/level-5/level-6/level-7/level-8/level-9/level-10"}},{title:"Level 11",link:{pathname:"/level-1/level-2/level-3/level-4/level-5/level-6/level-7/level-8/level-9/level-10/level-11"}},{title:"Level 12",link:{pathname:"/level-1/level-2/level-3/level-4/level-5/level-6/level-7/level-8/level-9/level-10/level-11/level-12"}}],t={args:{descriptors:[e[0]]},parameters:{docs:{description:{story:"Displays a single breadcrumb for the current location."}}}},n={args:{descriptors:[{title:"Back",link:{pathname:"/previous-page"},onClick:()=>console.log("Back clicked")}],isBackButton:!0},parameters:{docs:{description:{story:"Displays a back button with a left-pointing arrow. Use this when you want to provide navigation back to a previous page."}}}},l={args:{descriptors:e.slice(0,3)}},i={args:{descriptors:e.slice(0,5)}},a={args:{descriptors:e.slice(0,10)}},o={args:{descriptors:[{title:"Very Long Home Page Title That Exceeds Normal Length",link:{pathname:"/"}},{title:"Another Extremely Long Section Name That Will Be Truncated",link:{pathname:"/section"}},{title:"Section Alpha with Very Long Name",link:{pathname:"/section/alpha"}},{title:"Items Section with Extended Title",link:{pathname:"/section/alpha/items"}},{title:"Item #12345 with Additional Context Information",link:{pathname:"/section/alpha/items/12345"}},{title:"Details Management Interface",link:{pathname:"/section/alpha/items/12345/details"}}]}},M=[{title:"All Categories",link:{pathname:"/categories"},children:[{title:"Group A",link:{pathname:"/categories/group-a"},children:[{title:"Item A1",link:{pathname:"/categories/item-a1"},onClick:()=>console.log("Item A1 clicked")},{title:"Item A2",link:{pathname:"/categories/item-a2"},onClick:()=>console.log("Item A2 clicked")}]},{title:"Group B",link:{pathname:"/categories/group-b"},children:[{title:"Item B1",link:{pathname:"/categories/item-b1"},onClick:()=>console.log("Item B1 clicked")},{title:"Item B2",link:{pathname:"/categories/item-b2"},onClick:()=>console.log("Item B2 clicked")}]}]}],s={args:{descriptors:e.slice(0,3),tree:M}},r={args:{descriptors:[{title:"Very Long Home Page Title That Exceeds Normal Length and Should Be Truncated",link:{pathname:"/"},onClick:()=>console.log("Home clicked")},{title:"Another Extremely Long Section Name That Will Be Truncated Due to Length",link:{pathname:"/section"},onClick:()=>console.log("Section clicked")},{title:"Section Alpha with Very Long Name That Exceeds Normal Limits",link:{pathname:"/section/alpha"},onClick:()=>console.log("Section Alpha clicked")},{title:"Items Section with Extended Title That Needs Truncation",link:{pathname:"/section/alpha/items"},onClick:()=>console.log("Items clicked")},{title:"Item #12345 with Additional Context Information and Long Description",link:{pathname:"/section/alpha/items/12345"},onClick:()=>console.log("Item #12345 clicked")},{title:"Details Management Interface with Extended Functionality",link:{pathname:"/section/alpha/items/12345/details"},onClick:()=>console.log("Details clicked")},{title:"Detail #789 with Comprehensive Information and Metadata",link:{pathname:"/section/alpha/items/12345/details/789"},onClick:()=>console.log("Detail #789 clicked")},{title:"Sub Items with Extended Configuration and Advanced Settings",link:{pathname:"/section/alpha/items/12345/details/789/sub-items"},onClick:()=>console.log("Sub Items clicked")},{title:"Sub Item #1 with Implementation Details and Technical Specifications",link:{pathname:"/section/alpha/items/12345/details/789/sub-items/1"},onClick:()=>console.log("Sub Item #1 clicked")},{title:"Current Sub Item Status with Real-time Data and Monitoring Information",link:{pathname:"/section/alpha/items/12345/details/789/sub-items/1/current"},onClick:()=>console.log("Current Sub Item clicked")}],tree:M}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    descriptors: [descriptors[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a single breadcrumb for the current location.'
      }
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,h,k;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    descriptors: [{
      title: 'Back',
      link: {
        pathname: '/previous-page'
      },
      onClick: () => console.log('Back clicked')
    }],
    isBackButton: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a back button with a left-pointing arrow. Use this when you want to provide navigation back to a previous page.'
      }
    }
  }
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var g,u,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    descriptors: descriptors.slice(0, 3)
  }
}`,...(v=(u=l.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var S,I,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    descriptors: descriptors.slice(0, 5)
  }
}`,...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var b,C,L;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    descriptors: descriptors.slice(0, 10)
  }
}`,...(L=(C=a.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var B,w,y;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    descriptors: [{
      title: 'Very Long Home Page Title That Exceeds Normal Length',
      link: {
        pathname: '/'
      }
    }, {
      title: 'Another Extremely Long Section Name That Will Be Truncated',
      link: {
        pathname: '/section'
      }
    }, {
      title: 'Section Alpha with Very Long Name',
      link: {
        pathname: '/section/alpha'
      }
    }, {
      title: 'Items Section with Extended Title',
      link: {
        pathname: '/section/alpha/items'
      }
    }, {
      title: 'Item #12345 with Additional Context Information',
      link: {
        pathname: '/section/alpha/items/12345'
      }
    }, {
      title: 'Details Management Interface',
      link: {
        pathname: '/section/alpha/items/12345/details'
      }
    }]
  }
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var D,x,f;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    descriptors: descriptors.slice(0, 3),
    tree: treeData
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var A,E,N;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    descriptors: [{
      title: 'Very Long Home Page Title That Exceeds Normal Length and Should Be Truncated',
      link: {
        pathname: '/'
      },
      onClick: () => console.log('Home clicked')
    }, {
      title: 'Another Extremely Long Section Name That Will Be Truncated Due to Length',
      link: {
        pathname: '/section'
      },
      onClick: () => console.log('Section clicked')
    }, {
      title: 'Section Alpha with Very Long Name That Exceeds Normal Limits',
      link: {
        pathname: '/section/alpha'
      },
      onClick: () => console.log('Section Alpha clicked')
    }, {
      title: 'Items Section with Extended Title That Needs Truncation',
      link: {
        pathname: '/section/alpha/items'
      },
      onClick: () => console.log('Items clicked')
    }, {
      title: 'Item #12345 with Additional Context Information and Long Description',
      link: {
        pathname: '/section/alpha/items/12345'
      },
      onClick: () => console.log('Item #12345 clicked')
    }, {
      title: 'Details Management Interface with Extended Functionality',
      link: {
        pathname: '/section/alpha/items/12345/details'
      },
      onClick: () => console.log('Details clicked')
    }, {
      title: 'Detail #789 with Comprehensive Information and Metadata',
      link: {
        pathname: '/section/alpha/items/12345/details/789'
      },
      onClick: () => console.log('Detail #789 clicked')
    }, {
      title: 'Sub Items with Extended Configuration and Advanced Settings',
      link: {
        pathname: '/section/alpha/items/12345/details/789/sub-items'
      },
      onClick: () => console.log('Sub Items clicked')
    }, {
      title: 'Sub Item #1 with Implementation Details and Technical Specifications',
      link: {
        pathname: '/section/alpha/items/12345/details/789/sub-items/1'
      },
      onClick: () => console.log('Sub Item #1 clicked')
    }, {
      title: 'Current Sub Item Status with Real-time Data and Monitoring Information',
      link: {
        pathname: '/section/alpha/items/12345/details/789/sub-items/1/current'
      },
      onClick: () => console.log('Current Sub Item clicked')
    }],
    tree: treeData
  }
}`,...(N=(E=r.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const K=["SingleBreadcrumb","BackButton","ThreeBreadcrumbs","FiveBreadcrumbs","TenBreadcrumbs","LongTitles","WithTreeMenu","LongTitlesWithTree"];export{n as BackButton,i as FiveBreadcrumbs,o as LongTitles,r as LongTitlesWithTree,t as SingleBreadcrumb,a as TenBreadcrumbs,l as ThreeBreadcrumbs,s as WithTreeMenu,K as __namedExportsOrder,J as default};
