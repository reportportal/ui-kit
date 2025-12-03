import{A as k}from"./adaptiveTagList-c8c662c9.js";import"./jsx-runtime-3169928d.js";import"./index-d33a4676.js";import"./bind-f5c6fce5.js";import"./button-1ebb3b4f.js";import"./close-3561dacf.js";import"./isEmpty-6ac0b123.js";const K={title:"Components/AdaptiveTagList",component:k,parameters:{layout:"padded"},tags:["autodocs"]},a=["authentication","security","login","user-management","api","database","frontend","backend","testing","deployment"],O=["bug","critical","frontend"],s={args:{tags:a}},e={args:{tags:O}},t={args:{tags:[]}},r={args:{tags:[],noTagsMessage:"Please add some tags"}},o={args:{tags:a,onRemoveTag:c=>{console.log("Remove tag:",c)}}},g={args:{tags:a,isShowAllView:!0,defaultVisibleLines:2}},n={args:{tags:a,isShowAllView:!0,defaultVisibleLines:3,onRemoveTag:c=>{console.log("Remove tag:",c)}}},i={args:{tags:["tag1","tag2","tag3","tag4","tag5","tag6","tag7","tag8","tag9","tag10","tag11","tag12","tag13","tag14","tag15","tag16","tag17","tag18","tag19","tag20"]}},l={args:{tags:a,isShowAllView:!0,defaultVisibleLines:2,showAllText:"Expand all tags",hideAllText:"Collapse all tags",showLessText:"Show fewer tags"}};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tags: sampleTags
  }
} satisfies Story`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,T,w;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tags: shortTagList
  }
} satisfies Story`,...(w=(T=e.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var S,h,f;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tags: []
  }
} satisfies Story`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var A,V,y;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    tags: [],
    noTagsMessage: 'Please add some tags'
  }
} satisfies Story`,...(y=(V=r.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var b,v,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    tags: sampleTags,
    onRemoveTag: (tag: string) => {
      console.log('Remove tag:', tag);
    }
  }
} satisfies Story`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var L,R,C;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    tags: sampleTags,
    isShowAllView: true,
    defaultVisibleLines: 2
  }
} satisfies Story`,...(C=(R=g.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var E,M,W;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    tags: sampleTags,
    isShowAllView: true,
    defaultVisibleLines: 3,
    onRemoveTag: (tag: string) => {
      console.log('Remove tag:', tag);
    }
  }
} satisfies Story`,...(W=(M=n.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var N,D,F;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8', 'tag9', 'tag10', 'tag11', 'tag12', 'tag13', 'tag14', 'tag15', 'tag16', 'tag17', 'tag18', 'tag19', 'tag20']
  }
} satisfies Story`,...(F=(D=i.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var H,P,_;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    tags: sampleTags,
    isShowAllView: true,
    defaultVisibleLines: 2,
    showAllText: 'Expand all tags',
    hideAllText: 'Collapse all tags',
    showLessText: 'Show fewer tags'
  }
} satisfies Story`,...(_=(P=l.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const Q=["Default","WithFewTags","NoTags","NoTagsWithCustomMessage","EditableWithRemoveHandler","ShowAllView","ShowAllViewEditable","ManyTags","CustomTexts"];export{l as CustomTexts,s as Default,o as EditableWithRemoveHandler,i as ManyTags,t as NoTags,r as NoTagsWithCustomMessage,g as ShowAllView,n as ShowAllViewEditable,e as WithFewTags,Q as __namedExportsOrder,K as default};
