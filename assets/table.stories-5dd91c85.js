import{j as i}from"./jsx-runtime-2f188e98.js";import{b as Ya,r as p}from"./index-3553ef47.js";import{p as ht}from"./index-4c891f75.js";import{r as qt}from"./index-d0bd1ed5.js";import{c as Xa}from"./clsx-9eb2d624.js";import{c as Ut}from"./bind-d8141dee.js";import{S as Ga,a as vn,b as Ja}from"./resizeColumn-eebfb371.js";import{S as Cn}from"./chevronDownDropdown-69a9d5c1.js";import{C as zt}from"./checkbox-322ca70a.js";import{T as _t}from"./tooltip-280b52d3.js";import{u as Ka}from"./useEllipsisTitle-1cddebe3.js";import{i as Qa}from"./isEmpty-6ac0b123.js";import{A as Za}from"./actionMenu-fb657254.js";import"./keyCodes-e5060420.js";import"./floating-ui.react-ea29885b.js";import"./floatingUi-c696ea36.js";import"./details-d199936c.js";import"./baseIconButton-9b03f096.js";import"./popover-8346e5d8.js";const ra=e=>typeof e=="string";var Vt={exports:{}},$e={},mt={exports:{}},ia={};const es=Ya(Xa);var O={},ee={};Object.defineProperty(ee,"__esModule",{value:!0});ee.dontSetMe=ss;ee.findInArray=ts;ee.int=as;ee.isFunction=ns;ee.isNum=os;function ts(e,t){for(let n=0,o=e.length;n<o;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function ns(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function os(e){return typeof e=="number"&&!isNaN(e)}function as(e){return parseInt(e,10)}function ss(e,t,n){if(e[t])return new Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`)}var he={};Object.defineProperty(he,"__esModule",{value:!0});he.browserPrefixToKey=da;he.browserPrefixToStyle=rs;he.default=void 0;he.getPrefix=la;const At=["Moz","Webkit","O","ms"];function la(){var n,o;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const t=(o=(n=window.document)==null?void 0:n.documentElement)==null?void 0:o.style;if(!t||e in t)return"";for(let a=0;a<At.length;a++)if(da(e,At[a])in t)return At[a];return""}function da(e,t){return t?`${t}${is(e)}`:e}function rs(e,t){return t?`-${t.toLowerCase()}-${e}`:e}function is(e){let t="",n=!0;for(let o=0;o<e.length;o++)n?(t+=e[o].toUpperCase(),n=!1):e[o]==="-"?n=!0:t+=e[o];return t}he.default=la();Object.defineProperty(O,"__esModule",{value:!0});O.addClassName=pa;O.addEvent=ds;O.addUserSelectStyles=bs;O.createCSSTransform=gs;O.createSVGTransform=ws;O.getTouch=ys;O.getTouchIdentifier=xs;O.getTranslation=Yt;O.innerHeight=hs;O.innerWidth=ms;O.matchesSelector=ua;O.matchesSelectorAndParentsTo=ls;O.offsetXYFromParent=fs;O.outerHeight=us;O.outerWidth=ps;O.removeClassName=ha;O.removeEvent=cs;O.scheduleRemoveUserSelectStyles=Ss;var X=ee,Rn=ca(he);function ca(e,t){if(typeof WeakMap=="function")var n=new WeakMap,o=new WeakMap;return(ca=function(a,s){if(!s&&a&&a.__esModule)return a;var r,u,c={__proto__:null,default:a};if(a===null||typeof a!="object"&&typeof a!="function")return c;if(r=s?o:n){if(r.has(a))return r.get(a);r.set(a,c)}for(const d in a)d!=="default"&&{}.hasOwnProperty.call(a,d)&&((u=(r=Object.defineProperty)&&Object.getOwnPropertyDescriptor(a,d))&&(u.get||u.set)?r(c,d,u):c[d]=a[d]);return c})(e,t)}let et="";function ua(e,t){return et||(et=(0,X.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,X.isFunction)(e[n])})),(0,X.isFunction)(e[et])?e[et](t):!1}function ls(e,t,n){let o=e;do{if(ua(o,t))return!0;if(o===n)return!1;o=o.parentNode}while(o);return!1}function ds(e,t,n,o){if(!e)return;const a={capture:!0,...o};e.addEventListener?e.addEventListener(t,n,a):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function cs(e,t,n,o){if(!e)return;const a={capture:!0,...o};e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function us(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,X.int)(n.borderTopWidth),t+=(0,X.int)(n.borderBottomWidth),t}function ps(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,X.int)(n.borderLeftWidth),t+=(0,X.int)(n.borderRightWidth),t}function hs(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,X.int)(n.paddingTop),t-=(0,X.int)(n.paddingBottom),t}function ms(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,X.int)(n.paddingLeft),t-=(0,X.int)(n.paddingRight),t}function fs(e,t,n){const a=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),s=(e.clientX+t.scrollLeft-a.left)/n,r=(e.clientY+t.scrollTop-a.top)/n;return{x:s,y:r}}function gs(e,t){const n=Yt(e,t,"px");return{[(0,Rn.browserPrefixToKey)("transform",Rn.default)]:n}}function ws(e,t){return Yt(e,t,"")}function Yt(e,t,n){let{x:o,y:a}=e,s=`translate(${o}${n},${a}${n})`;if(t){const r=`${typeof t.x=="string"?t.x:t.x+n}`,u=`${typeof t.y=="string"?t.y:t.y+n}`;s=`translate(${r}, ${u})`+s}return s}function ys(e,t){return e.targetTouches&&(0,X.findInArray)(e.targetTouches,n=>t===n.identifier)||e.changedTouches&&(0,X.findInArray)(e.changedTouches,n=>t===n.identifier)}function xs(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function bs(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&pa(e.body,"react-draggable-transparent-selection")}function Ss(e){window.requestAnimationFrame?window.requestAnimationFrame(()=>{kn(e)}):kn(e)}function kn(e){if(e)try{if(e.body&&ha(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function pa(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp(`(?:^|\\s)${t}(?!\\S)`))||(e.className+=` ${t}`)}function ha(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(`(?:^|\\s)${t}(?!\\S)`,"g"),"")}var te={};Object.defineProperty(te,"__esModule",{value:!0});te.canDragX=Rs;te.canDragY=ks;te.createCoreData=Ts;te.createDraggableData=Es;te.getBoundPosition=vs;te.getControlPosition=Ds;te.snapToGrid=Cs;var Y=ee,we=O;function vs(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:o}=e.props;o=typeof o=="string"?o:zs(o);const a=Xt(e);if(typeof o=="string"){const{ownerDocument:s}=a,r=s.defaultView;let u;if(o==="parent"?u=a.parentNode:u=a.getRootNode().querySelector(o),!(u instanceof r.HTMLElement))throw new Error('Bounds selector "'+o+'" could not find an element.');const c=u,d=r.getComputedStyle(a),h=r.getComputedStyle(c);o={left:-a.offsetLeft+(0,Y.int)(h.paddingLeft)+(0,Y.int)(d.marginLeft),top:-a.offsetTop+(0,Y.int)(h.paddingTop)+(0,Y.int)(d.marginTop),right:(0,we.innerWidth)(c)-(0,we.outerWidth)(a)-a.offsetLeft+(0,Y.int)(h.paddingRight)-(0,Y.int)(d.marginRight),bottom:(0,we.innerHeight)(c)-(0,we.outerHeight)(a)-a.offsetTop+(0,Y.int)(h.paddingBottom)-(0,Y.int)(d.marginBottom)}}return(0,Y.isNum)(o.right)&&(t=Math.min(t,o.right)),(0,Y.isNum)(o.bottom)&&(n=Math.min(n,o.bottom)),(0,Y.isNum)(o.left)&&(t=Math.max(t,o.left)),(0,Y.isNum)(o.top)&&(n=Math.max(n,o.top)),[t,n]}function Cs(e,t,n){const o=Math.round(t/e[0])*e[0],a=Math.round(n/e[1])*e[1];return[o,a]}function Rs(e){return e.props.axis==="both"||e.props.axis==="x"}function ks(e){return e.props.axis==="both"||e.props.axis==="y"}function Ds(e,t,n){const o=typeof t=="number"?(0,we.getTouch)(e,t):null;if(typeof t=="number"&&!o)return null;const a=Xt(n),s=n.props.offsetParent||a.offsetParent||a.ownerDocument.body;return(0,we.offsetXYFromParent)(o||e,s,n.props.scale)}function Ts(e,t,n){const o=!(0,Y.isNum)(e.lastX),a=Xt(e);return o?{node:a,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:a,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function Es(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function zs(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Xt(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var ft={},gt={};Object.defineProperty(gt,"__esModule",{value:!0});gt.default=_s;function _s(){}Object.defineProperty(ft,"__esModule",{value:!0});ft.default=void 0;var jt=ma(p),I=Gt(ht),As=Gt(qt),$=O,re=te,Pt=ee,De=Gt(gt);function Gt(e){return e&&e.__esModule?e:{default:e}}function ma(e,t){if(typeof WeakMap=="function")var n=new WeakMap,o=new WeakMap;return(ma=function(a,s){if(!s&&a&&a.__esModule)return a;var r,u,c={__proto__:null,default:a};if(a===null||typeof a!="object"&&typeof a!="function")return c;if(r=s?o:n){if(r.has(a))return r.get(a);r.set(a,c)}for(const d in a)d!=="default"&&{}.hasOwnProperty.call(a,d)&&((u=(r=Object.defineProperty)&&Object.getOwnPropertyDescriptor(a,d))&&(u.get||u.set)?r(c,d,u):c[d]=a[d]);return c})(e,t)}function q(e,t,n){return(t=js(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function js(e){var t=Ps(e,"string");return typeof t=="symbol"?t:t+""}function Ps(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const K={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let ie=K.mouse,wt=class extends jt.Component{constructor(){super(...arguments),q(this,"dragging",!1),q(this,"lastX",NaN),q(this,"lastY",NaN),q(this,"touchIdentifier",null),q(this,"mounted",!1),q(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:o}=n;if(this.props.disabled||!(t.target instanceof o.defaultView.Node)||this.props.handle&&!(0,$.matchesSelectorAndParentsTo)(t.target,this.props.handle,n)||this.props.cancel&&(0,$.matchesSelectorAndParentsTo)(t.target,this.props.cancel,n))return;t.type==="touchstart"&&!this.props.allowMobileScroll&&t.preventDefault();const a=(0,$.getTouchIdentifier)(t);this.touchIdentifier=a;const s=(0,re.getControlPosition)(t,a,this);if(s==null)return;const{x:r,y:u}=s,c=(0,re.createCoreData)(this,r,u);(0,De.default)("DraggableCore: handleDragStart: %j",c),(0,De.default)("calling",this.props.onStart),!(this.props.onStart(t,c)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,$.addUserSelectStyles)(o),this.dragging=!0,this.lastX=r,this.lastY=u,(0,$.addEvent)(o,ie.move,this.handleDrag),(0,$.addEvent)(o,ie.stop,this.handleDragStop))}),q(this,"handleDrag",t=>{const n=(0,re.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:o,y:a}=n;if(Array.isArray(this.props.grid)){let u=o-this.lastX,c=a-this.lastY;if([u,c]=(0,re.snapToGrid)(this.props.grid,u,c),!u&&!c)return;o=this.lastX+u,a=this.lastY+c}const s=(0,re.createCoreData)(this,o,a);if((0,De.default)("DraggableCore: handleDrag: %j",s),this.props.onDrag(t,s)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const c=document.createEvent("MouseEvents");c.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(c)}return}this.lastX=o,this.lastY=a}),q(this,"handleDragStop",t=>{if(!this.dragging)return;const n=(0,re.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:o,y:a}=n;if(Array.isArray(this.props.grid)){let c=o-this.lastX||0,d=a-this.lastY||0;[c,d]=(0,re.snapToGrid)(this.props.grid,c,d),o=this.lastX+c,a=this.lastY+d}const s=(0,re.createCoreData)(this,o,a);if(this.props.onStop(t,s)===!1||this.mounted===!1)return!1;const u=this.findDOMNode();u&&this.props.enableUserSelectHack&&(0,$.scheduleRemoveUserSelectStyles)(u.ownerDocument),(0,De.default)("DraggableCore: handleDragStop: %j",s),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,u&&((0,De.default)("DraggableCore: Removing handlers"),(0,$.removeEvent)(u.ownerDocument,ie.move,this.handleDrag),(0,$.removeEvent)(u.ownerDocument,ie.stop,this.handleDragStop))}),q(this,"onMouseDown",t=>(ie=K.mouse,this.handleDragStart(t))),q(this,"onMouseUp",t=>(ie=K.mouse,this.handleDragStop(t))),q(this,"onTouchStart",t=>(ie=K.touch,this.handleDragStart(t))),q(this,"onTouchEnd",t=>(ie=K.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,$.addEvent)(t,K.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:n}=t;(0,$.removeEvent)(n,K.mouse.move,this.handleDrag),(0,$.removeEvent)(n,K.touch.move,this.handleDrag),(0,$.removeEvent)(n,K.mouse.stop,this.handleDragStop),(0,$.removeEvent)(n,K.touch.stop,this.handleDragStop),(0,$.removeEvent)(t,K.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,$.scheduleRemoveUserSelectStyles)(n)}}findDOMNode(){var t,n,o;return(t=this.props)!=null&&t.nodeRef?(o=(n=this.props)==null?void 0:n.nodeRef)==null?void 0:o.current:As.default.findDOMNode(this)}render(){return jt.cloneElement(jt.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};ft.default=wt;q(wt,"displayName","DraggableCore");q(wt,"propTypes",{allowAnyClick:I.default.bool,allowMobileScroll:I.default.bool,children:I.default.node.isRequired,disabled:I.default.bool,enableUserSelectHack:I.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:I.default.arrayOf(I.default.number),handle:I.default.string,cancel:I.default.string,nodeRef:I.default.object,onStart:I.default.func,onDrag:I.default.func,onStop:I.default.func,onMouseDown:I.default.func,scale:I.default.number,className:Pt.dontSetMe,style:Pt.dontSetMe,transform:Pt.dontSetMe});q(wt,"defaultProps",{allowAnyClick:!1,allowMobileScroll:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return c.default}}),e.default=void 0;var t=f(p),n=h(ht),o=h(qt),a=es,s=O,r=te,u=ee,c=h(ft),d=h(gt);function h(C){return C&&C.__esModule?C:{default:C}}function f(C,S){if(typeof WeakMap=="function")var v=new WeakMap,R=new WeakMap;return(f=function(T,D){if(!D&&T&&T.__esModule)return T;var A,W,B={__proto__:null,default:T};if(T===null||typeof T!="object"&&typeof T!="function")return B;if(A=D?R:v){if(A.has(T))return A.get(T);A.set(T,B)}for(const V in T)V!=="default"&&{}.hasOwnProperty.call(T,V)&&((W=(A=Object.defineProperty)&&Object.getOwnPropertyDescriptor(T,V))&&(W.get||W.set)?A(B,V,W):B[V]=T[V]);return B})(C,S)}function m(){return m=Object.assign?Object.assign.bind():function(C){for(var S=1;S<arguments.length;S++){var v=arguments[S];for(var R in v)({}).hasOwnProperty.call(v,R)&&(C[R]=v[R])}return C},m.apply(null,arguments)}function w(C,S,v){return(S=k(S))in C?Object.defineProperty(C,S,{value:v,enumerable:!0,configurable:!0,writable:!0}):C[S]=v,C}function k(C){var S=y(C,"string");return typeof S=="symbol"?S:S+""}function y(C,S){if(typeof C!="object"||!C)return C;var v=C[Symbol.toPrimitive];if(v!==void 0){var R=v.call(C,S||"default");if(typeof R!="object")return R;throw new TypeError("@@toPrimitive must return a primitive value.")}return(S==="string"?String:Number)(C)}class b extends t.Component{static getDerivedStateFromProps(S,v){let{position:R}=S,{prevPropsPosition:T}=v;return R&&(!T||R.x!==T.x||R.y!==T.y)?((0,d.default)("Draggable: getDerivedStateFromProps %j",{position:R,prevPropsPosition:T}),{x:R.x,y:R.y,prevPropsPosition:{...R}}):null}constructor(S){super(S),w(this,"onDragStart",(v,R)=>{if((0,d.default)("Draggable: onDragStart: %j",R),this.props.onStart(v,(0,r.createDraggableData)(this,R))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),w(this,"onDrag",(v,R)=>{if(!this.state.dragging)return!1;(0,d.default)("Draggable: onDrag: %j",R);const T=(0,r.createDraggableData)(this,R),D={x:T.x,y:T.y,slackX:0,slackY:0};if(this.props.bounds){const{x:W,y:B}=D;D.x+=this.state.slackX,D.y+=this.state.slackY;const[V,H]=(0,r.getBoundPosition)(this,D.x,D.y);D.x=V,D.y=H,D.slackX=this.state.slackX+(W-D.x),D.slackY=this.state.slackY+(B-D.y),T.x=D.x,T.y=D.y,T.deltaX=D.x-this.state.x,T.deltaY=D.y-this.state.y}if(this.props.onDrag(v,T)===!1)return!1;this.setState(D)}),w(this,"onDragStop",(v,R)=>{if(!this.state.dragging||this.props.onStop(v,(0,r.createDraggableData)(this,R))===!1)return!1;(0,d.default)("Draggable: onDragStop: %j",R);const D={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:W,y:B}=this.props.position;D.x=W,D.y=B}this.setState(D)}),this.state={dragging:!1,dragged:!1,x:S.position?S.position.x:S.defaultPosition.x,y:S.position?S.position.y:S.defaultPosition.y,prevPropsPosition:{...S.position},slackX:0,slackY:0,isElementSVG:!1},S.position&&!(S.onDrag||S.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.state.dragging&&this.setState({dragging:!1})}findDOMNode(){var S,v;return((v=(S=this.props)==null?void 0:S.nodeRef)==null?void 0:v.current)??o.default.findDOMNode(this)}render(){const{axis:S,bounds:v,children:R,defaultPosition:T,defaultClassName:D,defaultClassNameDragging:A,defaultClassNameDragged:W,position:B,positionOffset:V,scale:H,...Se}=this.props;let Be={},Ie=null;const qe=!!!B||this.state.dragging,Ue=B||T,Ve={x:(0,r.canDragX)(this)&&qe?this.state.x:Ue.x,y:(0,r.canDragY)(this)&&qe?this.state.y:Ue.y};this.state.isElementSVG?Ie=(0,s.createSVGTransform)(Ve,V):Be=(0,s.createCSSTransform)(Ve,V);const ve=(0,a.clsx)(R.props.className||"",D,{[A]:this.state.dragging,[W]:this.state.dragged});return t.createElement(c.default,m({},Se,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(R),{className:ve,style:{...R.props.style,...Be},transform:Ie}))}}e.default=b,w(b,"displayName","Draggable"),w(b,"propTypes",{...c.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:u.dontSetMe,style:u.dontSetMe,transform:u.dontSetMe}),w(b,"defaultProps",{...c.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(ia);const{default:fa,DraggableCore:Ns}=ia;mt.exports=fa;mt.exports.default=fa;mt.exports.DraggableCore=Ns;var Ms=mt.exports,Jt={};Jt.__esModule=!0;Jt.cloneElement=Fs;var Os=Hs(p);function Hs(e){return e&&e.__esModule?e:{default:e}}function Dn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Tn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dn(Object(n),!0).forEach(function(o){Ws(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dn(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Ws(e,t,n){return t=Ls(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ls(e){var t=$s(e,"string");return typeof t=="symbol"?t:String(t)}function $s(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Fs(e,t){return t.style&&e.props.style&&(t.style=Tn(Tn({},e.props.style),t.style)),t.className&&e.props.className&&(t.className=e.props.className+" "+t.className),Os.default.cloneElement(e,t)}var Fe={};Fe.__esModule=!0;Fe.resizableProps=void 0;var E=Bs(ht);function Bs(e){return e&&e.__esModule?e:{default:e}}var Is={axis:E.default.oneOf(["both","x","y","none"]),className:E.default.string,children:E.default.element.isRequired,draggableOpts:E.default.shape({allowAnyClick:E.default.bool,cancel:E.default.string,children:E.default.node,disabled:E.default.bool,enableUserSelectHack:E.default.bool,offsetParent:E.default.node,grid:E.default.arrayOf(E.default.number),handle:E.default.string,nodeRef:E.default.object,onStart:E.default.func,onDrag:E.default.func,onStop:E.default.func,onMouseDown:E.default.func,scale:E.default.number}),height:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var a=n[0];if(a.axis==="both"||a.axis==="y"){var s;return(s=E.default.number).isRequired.apply(s,n)}return E.default.number.apply(E.default,n)},handle:E.default.oneOfType([E.default.node,E.default.func]),handleSize:E.default.arrayOf(E.default.number),lockAspectRatio:E.default.bool,maxConstraints:E.default.arrayOf(E.default.number),minConstraints:E.default.arrayOf(E.default.number),onResizeStop:E.default.func,onResizeStart:E.default.func,onResize:E.default.func,resizeHandles:E.default.arrayOf(E.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:E.default.number,width:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var a=n[0];if(a.axis==="both"||a.axis==="x"){var s;return(s=E.default.number).isRequired.apply(s,n)}return E.default.number.apply(E.default,n)}};Fe.resizableProps=Is;$e.__esModule=!0;$e.default=void 0;var Te=Xs(p),qs=Ms,Us=Jt,Vs=Fe,Ys=["children","className","draggableOpts","width","height","handle","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"];function ga(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(ga=function(a){return a?n:t})(e)}function Xs(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=ga(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var r=a?Object.getOwnPropertyDescriptor(e,s):null;r&&(r.get||r.set)?Object.defineProperty(o,s,r):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o}function Lt(){return Lt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Lt.apply(this,arguments)}function Gs(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function En(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?En(Object(n),!0).forEach(function(o){Js(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):En(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Js(e,t,n){return t=Ks(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ks(e){var t=Qs(e,"string");return typeof t=="symbol"?t:String(t)}function Qs(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Zs(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,$t(e,t)}function $t(e,t){return $t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},$t(e,t)}var Kt=function(e){Zs(t,e);function t(){for(var o,a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return o=e.call.apply(e,[this].concat(s))||this,o.handleRefs={},o.lastHandleRect=null,o.slack=null,o}var n=t.prototype;return n.componentWillUnmount=function(){this.resetData()},n.resetData=function(){this.lastHandleRect=this.slack=null},n.runConstraints=function(a,s){var r=this.props,u=r.minConstraints,c=r.maxConstraints,d=r.lockAspectRatio;if(!u&&!c&&!d)return[a,s];if(d){var h=this.props.width/this.props.height,f=a-this.props.width,m=s-this.props.height;Math.abs(f)>Math.abs(m*h)?s=a/h:a=s*h}var w=a,k=s,y=this.slack||[0,0],b=y[0],C=y[1];return a+=b,s+=C,u&&(a=Math.max(u[0],a),s=Math.max(u[1],s)),c&&(a=Math.min(c[0],a),s=Math.min(c[1],s)),this.slack=[b+(w-a),C+(k-s)],[a,s]},n.resizeHandler=function(a,s){var r=this;return function(u,c){var d=c.node,h=c.deltaX,f=c.deltaY;a==="onResizeStart"&&r.resetData();var m=(r.props.axis==="both"||r.props.axis==="x")&&s!=="n"&&s!=="s",w=(r.props.axis==="both"||r.props.axis==="y")&&s!=="e"&&s!=="w";if(!(!m&&!w)){var k=s[0],y=s[s.length-1],b=d.getBoundingClientRect();if(r.lastHandleRect!=null){if(y==="w"){var C=b.left-r.lastHandleRect.left;h+=C}if(k==="n"){var S=b.top-r.lastHandleRect.top;f+=S}}r.lastHandleRect=b,y==="w"&&(h=-h),k==="n"&&(f=-f);var v=r.props.width+(m?h/r.props.transformScale:0),R=r.props.height+(w?f/r.props.transformScale:0),T=r.runConstraints(v,R);v=T[0],R=T[1];var D=v!==r.props.width||R!==r.props.height,A=typeof r.props[a]=="function"?r.props[a]:null,W=a==="onResize"&&!D;A&&!W&&(u.persist==null||u.persist(),A(u,{node:d,size:{width:v,height:R},handle:s})),a==="onResizeStop"&&r.resetData()}}},n.renderResizeHandle=function(a,s){var r=this.props.handle;if(!r)return Te.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+a,ref:s});if(typeof r=="function")return r(a,s);var u=typeof r.type=="string",c=Nt({ref:s},u?{}:{handleAxis:a});return Te.cloneElement(r,c)},n.render=function(){var a=this,s=this.props,r=s.children,u=s.className,c=s.draggableOpts;s.width,s.height,s.handle,s.handleSize,s.lockAspectRatio,s.axis,s.minConstraints,s.maxConstraints,s.onResize,s.onResizeStop,s.onResizeStart;var d=s.resizeHandles;s.transformScale;var h=Gs(s,Ys);return(0,Us.cloneElement)(r,Nt(Nt({},h),{},{className:(u?u+" ":"")+"react-resizable",children:[].concat(r.props.children,d.map(function(f){var m,w=(m=a.handleRefs[f])!=null?m:a.handleRefs[f]=Te.createRef();return Te.createElement(qs.DraggableCore,Lt({},c,{nodeRef:w,key:"resizableHandle-"+f,onStop:a.resizeHandler("onResizeStop",f),onStart:a.resizeHandler("onResizeStart",f),onDrag:a.resizeHandler("onResize",f)}),a.renderResizeHandle(f,w))}))}))},t}(Te.Component);$e.default=Kt;Kt.propTypes=Vs.resizableProps;Kt.defaultProps={axis:"both",handleSize:[20,20],lockAspectRatio:!1,minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1};var yt={};yt.__esModule=!0;yt.default=void 0;var Mt=ar(p),er=wa(ht),tr=wa($e),nr=Fe,or=["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles","style","transformScale"];function wa(e){return e&&e.__esModule?e:{default:e}}function ya(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(ya=function(a){return a?n:t})(e)}function ar(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=ya(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var r=a?Object.getOwnPropertyDescriptor(e,s):null;r&&(r.get||r.set)?Object.defineProperty(o,s,r):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o}function Ft(){return Ft=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ft.apply(this,arguments)}function zn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function ct(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zn(Object(n),!0).forEach(function(o){sr(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zn(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function sr(e,t,n){return t=rr(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rr(e){var t=ir(e,"string");return typeof t=="symbol"?t:String(t)}function ir(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lr(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function dr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Bt(e,t)}function Bt(e,t){return Bt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},Bt(e,t)}var xa=function(e){dr(t,e);function t(){for(var o,a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return o=e.call.apply(e,[this].concat(s))||this,o.state={width:o.props.width,height:o.props.height,propsWidth:o.props.width,propsHeight:o.props.height},o.onResize=function(u,c){var d=c.size;o.props.onResize?(u.persist==null||u.persist(),o.setState(d,function(){return o.props.onResize&&o.props.onResize(u,c)})):o.setState(d)},o}t.getDerivedStateFromProps=function(a,s){return s.propsWidth!==a.width||s.propsHeight!==a.height?{width:a.width,height:a.height,propsWidth:a.width,propsHeight:a.height}:null};var n=t.prototype;return n.render=function(){var a=this.props,s=a.handle,r=a.handleSize;a.onResize;var u=a.onResizeStart,c=a.onResizeStop,d=a.draggableOpts,h=a.minConstraints,f=a.maxConstraints,m=a.lockAspectRatio,w=a.axis;a.width,a.height;var k=a.resizeHandles,y=a.style,b=a.transformScale,C=lr(a,or);return Mt.createElement(tr.default,{axis:w,draggableOpts:d,handle:s,handleSize:r,height:this.state.height,lockAspectRatio:m,maxConstraints:f,minConstraints:h,onResizeStart:u,onResize:this.onResize,onResizeStop:c,resizeHandles:k,transformScale:b,width:this.state.width},Mt.createElement("div",Ft({},C,{style:ct(ct({},y),{},{width:this.state.width+"px",height:this.state.height+"px"})})))},t}(Mt.Component);yt.default=xa;xa.propTypes=ct(ct({},nr.resizableProps),{},{children:er.default.element});Vt.exports=function(){throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")};var cr=Vt.exports.Resizable=$e.default;Vt.exports.ResizableBox=yt.default;const ur="_table_1fgyg_1",pr="_resizable_1fgyg_66",hr="_selectable_1fgyg_91",mr="_expanded_1fgyg_87",fr="_label_1fgyg_365",gr={table:ur,"fixed-header":"_fixed-header_1fgyg_9","external-scroll-container":"_external-scroll-container_1fgyg_13","horizontally-scrollable-container":"_horizontally-scrollable-container_1fgyg_20","table-header":"_table-header_1fgyg_25","sticky-header":"_sticky-header_1fgyg_33","pinned-header":"_pinned-header_1fgyg_43","horizontally-scrollable":"_horizontally-scrollable_1fgyg_20",resizable:pr,"resizable-column":"_resizable-column_1fgyg_66","select-all-checkbox":"_select-all-checkbox_1fgyg_73","select-all-checkbox-selected":"_select-all-checkbox-selected_1fgyg_77","table-row":"_table-row_1fgyg_82","expanded-cell":"_expanded-cell_1fgyg_87",selectable:hr,"row-content-wrapper":"_row-content-wrapper_1fgyg_95","pinned-column":"_pinned-column_1fgyg_103","has-scroll":"_has-scroll_1fgyg_103","table-row-content":"_table-row-content_1fgyg_106","expand-cell":"_expand-cell_1fgyg_123","left-border-accent":"_left-border-accent_1fgyg_126","size-small":"_size-small_1fgyg_136","size-large":"_size-large_1fgyg_147","table-body":"_table-body_1fgyg_159","scrollable-body":"_scrollable-body_1fgyg_165","primitive-cell-text":"_primitive-cell-text_1fgyg_229","table-header-cell":"_table-header-cell_1fgyg_238","table-cell":"_table-cell_1fgyg_239","action-menu-cell":"_action-menu-cell_1fgyg_245","checkbox-cell":"_checkbox-cell_1fgyg_273","expand-all-tooltip-wrapper":"_expand-all-tooltip-wrapper_1fgyg_314","expand-all-tooltip-content":"_expand-all-tooltip-content_1fgyg_323","expand-icon":"_expand-icon_1fgyg_332",expanded:mr,"primary-cell":"_primary-cell_1fgyg_341",label:fr,"sortable-cell":"_sortable-cell_1fgyg_379","sort-disabled":"_sort-disabled_1fgyg_382","sort-disabled-tooltip-wrapper":"_sort-disabled-tooltip-wrapper_1fgyg_385","align-right":"_align-right_1fgyg_390","align-center":"_align-center_1fgyg_396","table-wrapper":"_table-wrapper_1fgyg_450","checkbox-column":"_checkbox-column_1fgyg_462","checkbox-header":"_checkbox-header_1fgyg_471","checkbox-body":"_checkbox-body_1fgyg_492","checkbox-row":"_checkbox-row_1fgyg_499","checkbox-tooltip-wrapper":"_checkbox-tooltip-wrapper_1fgyg_510"},oe="asc",wr="desc",ye=32,ba=100,yr=48,It=48,ut=e=>e.toLowerCase()===oe,xe=(e,t)=>t?[...e].sort((n,o)=>{const a=n[t.key].content||n[t.key],s=o[t.key].content||o[t.key];return a<s?ut(t.direction)?-1:1:a>s?ut(t.direction)?1:-1:0}):e,xr=e=>e.map(t=>t.key),Qt=e=>ut(e)?wr:oe,ce=e=>"primary"in e&&e.primary===!0,_n=e=>{var n;return`size-${((n=e.rowConfigs)==null?void 0:n.size)??"default"}`},Ot=e=>ra(e)?e:`${e}px`,br=(e,t,n,o,a,s=!1)=>{let r=0;o&&(r+=ye),a&&!s&&(r+=ye);for(let u=0;u<e;u++){const c=t[u];if(ce(c)){const d=n.current.get(c.key)||ba;r+=d}else{const d=c,h=ra(d.width)?parseInt(d.width,10)||0:d.width;r+=h}}return r},tt=(e,t,n,o,a,s,r,u=!1)=>{const c={};if(!ce(e)){const d=e;c.textAlign=d.align}if(t&&n!==void 0){const d=br(n,o,a,s,r,u);c.left=`${d}px`}return c},An=(e,t,n,o,a,s=!1,r,u=!1,c=!1)=>{const d=[];n&&d.push(`${ye}px`),s&&o&&!c&&d.push(`${ye}px`);const h=f=>{if((r==null?void 0:r[f.key])!==void 0){d.push(`${r[f.key]}px`);return}if(ce(f)){const m=f;if(u&&m.width){d.push(Ot(m.width));return}const w=m.width?Ot(m.width):`${ba}px`;d.push(`minmax(${w}, 1fr)`)}else{const w=Ot(f.width);d.push(w)}};return e.forEach(h),t.forEach(h),a&&d.push(`${yr}px`),d.join(" ")},Sr=({primaryColumns:e,fixedColumns:t,pinnedColumnKeys:n})=>p.useMemo(()=>{const o=[],a=[];return e.forEach(s=>{const r={...s,primary:!0};n.includes(s.key)?o.push(r):a.push(r)}),t.forEach(s=>{n.includes(s.key)?o.push(s):a.push(s)}),{pinnedColumns:o,scrollableColumns:a}},[e,t,n]),vr=()=>{const[e,t]=p.useState(null),[n,o]=p.useState(null),a=p.useCallback(c=>{t(c)},[]),s=p.useCallback(()=>{t(null)},[]),r=p.useCallback(c=>{o(c)},[]),u=p.useCallback(()=>{o(null)},[]);return{hoveredColumn:e,hoveredRow:n,handleColumnMouseEnter:a,handleColumnMouseLeave:s,handleRowMouseEnter:r,handleRowMouseLeave:u}},Cr=({primaryColumns:e,fixedColumns:t,expandedRowIds:n,onToggleRowExpansion:o})=>{const[a,s]=p.useState(new Set);p.useEffect(()=>{const c=[...e.map(h=>h.key),...t.map(h=>h.key)],d=new Set;n.forEach(h=>{c.forEach(f=>{d.add(`${h}-${f}`)})}),s(h=>{if(h.size===d.size){let f=!0;if(h.forEach(m=>{d.has(m)||(f=!1)}),f)return h}return d})},[n,e,t]);const r=p.useCallback(c=>{const d=new Set(a),h=n.includes(c),f=[...e.map(m=>m.key),...t.map(m=>m.key)];h?f.forEach(m=>{const w=`${c}-${m}`;d.delete(w)}):f.forEach(m=>{const w=`${c}-${m}`;d.add(w)}),s(d),o(c)},[a,n,e,t,o]),u=p.useCallback((c,d)=>{const h=`${c}-${d}`;return a.has(h)},[a]);return{expandedCells:a,handleToggleRowExpansion:r,isCellExpanded:u}},Rr=()=>{const e=p.useRef(new Map),t=p.useCallback(n=>o=>{if(!o)return;const a=o.getBoundingClientRect().width;a>0&&e.current.set(n,a)},[]);return{columnWidthsRef:e,setCellRef:t}},kr=({enabled:e=!1,minWidth:t=50,maxWidth:n=500,columns:o=[],columnWidthsRef:a,onColumnResize:s,initialColumnWidths:r})=>{const[u,c]=p.useState({}),d=p.useRef(o),h=p.useRef(void 0);p.useEffect(()=>{d.current=o},[o]);const f=p.useCallback(y=>{const b=o.find(C=>C.key===y);return{minWidth:(b==null?void 0:b.minWidth)??t,maxWidth:(b==null?void 0:b.maxWidth)??n}},[o,t,n]);p.useEffect(()=>{if(r&&h.current!==r){const b={};Object.entries(r).forEach(([C,S])=>{const v=d.current.find(D=>D.key===C),R=(v==null?void 0:v.minWidth)??t,T=(v==null?void 0:v.maxWidth)??n;b[C]=Math.min(T,Math.max(R,S))}),c(b),h.current=r}},[r,t,n]);const m=p.useCallback(()=>{if(!e||Object.keys(u).length>0||!a)return;const y={};a.current.forEach((b,C)=>{y[C]=b}),c(y)},[e,u,a]),w=p.useCallback(y=>(b,{size:C})=>{if(!e)return;const{minWidth:S,maxWidth:v}=f(y),R=Math.min(v,Math.max(S,C.width));c(T=>({...T,[y]:R}))},[e,f]),k=p.useCallback(y=>()=>{!e||!u[y]||s==null||s(y,u[y])},[e,u,s]);return{columnWidths:u,handleResize:w,handleResizeStop:k,handleResizeStart:m}},Dr=(e,t,n,o,a,s,r,u)=>p.useMemo(()=>{if(!e)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};if(!(a+e.clientWidth<r))return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const d=e.getBoundingClientRect(),h=(t==null?void 0:t.offsetHeight)||0,f=n==null?void 0:n.getBoundingClientRect(),m=Math.min(d.bottom,(f==null?void 0:f.bottom)||Number.MAX_SAFE_INTEGER);let w;o&&n&&f?w=f.top-d.top+h:w=h;const k=d.top+w,b=e.scrollWidth>e.clientWidth?e.offsetHeight-e.clientHeight:0,C=m-k-b,v=e.scrollHeight>e.clientHeight?e.offsetWidth-e.clientWidth:0,R=d.right-It-v;return{visible:!0,position:{top:k,left:R},size:{width:It,height:C}}},[e,t,n,o,a,s,r,u]),Tr=(e,t,n,o,a,s,r,u)=>p.useMemo(()=>{if(!e)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};if(!(t>0))return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const d=e.querySelector('[data-row-index="0"]');if(!d)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const h=Array.from(d.querySelectorAll("[data-pinned-index]"));if(h.length===0)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const f=Math.max(...h.map(W=>parseInt(W.getAttribute("data-pinned-index")||"-1",10)));if(f<0)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const m=h.find(W=>parseInt(W.getAttribute("data-pinned-index")||"-1",10)===f);if(!m)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const w=m.getBoundingClientRect(),k=e.getBoundingClientRect(),y=(n==null?void 0:n.offsetHeight)||0,b=o==null?void 0:o.getBoundingClientRect(),C=w.right,S=Math.min(k.bottom,(b==null?void 0:b.bottom)||Number.MAX_SAFE_INTEGER);let v;a&&o&&b?v=b.top-k.top+y:v=y;const R=k.top+v,D=e.scrollWidth>e.clientWidth?e.offsetHeight-e.clientHeight:0,A=S-R-D;return{visible:!0,position:{top:R,left:C},size:{width:It,height:A}}},[e,t,n,o,a,s,r,u]),Er=({enabled:e,rowCount:t})=>{const n=p.useRef(new Map),o=p.useRef(new Map),a=p.useCallback(c=>d=>{const h=String(c);d?n.current.set(h,d):n.current.delete(h)},[]),s=p.useCallback(c=>d=>{const h=String(c);d?o.current.set(h,d):o.current.delete(h)},[]),r=p.useCallback((c,d)=>{const h=`${c.offsetHeight}px`;d.style.height!==h&&(d.style.height=h)},[]),u=p.useCallback(()=>{n.current.forEach((c,d)=>{const h=o.current.get(d);h&&r(c,h)})},[r]);return p.useEffect(()=>{if(!e)return;const c=new ResizeObserver(d=>{requestAnimationFrame(()=>{d.forEach(h=>{const f=h.target,m=f.dataset.rowId,w=m?o.current.get(m):void 0;w&&r(f,w)})})});return n.current.forEach(d=>c.observe(d)),()=>c.disconnect()},[e,t,r]),p.useLayoutEffect(()=>{e&&u()},[e,t,u]),{setTableRowRef:a,setCheckboxRowRef:s,syncAllHeights:u}},zr={"resize-handle":"_resize-handle_15uk3_1"},_r=Ut.bind(zr),Sa=p.forwardRef((e,t)=>i.jsx("div",{ref:t,className:_r("resize-handle"),...e,children:i.jsx(Ga,{})}));Sa.__docgenInfo={description:"",methods:[],displayName:"ResizeHandle"};const Ar={"gradient-overlay":"_gradient-overlay_hx7m8_1","direction-right":"_direction-right_hx7m8_5","direction-left":"_direction-left_hx7m8_13"},jr=Ut.bind(Ar),jn=({portalContainer:e,visible:t,position:n,size:o,direction:a,className:s,dataTestId:r})=>{if(!t||!e)return null;const u={position:"fixed",top:`${n.top}px`,width:`${o.width}px`,height:`${o.height}px`};return n.left!==void 0&&(u.left=`${n.left}px`),n.right!==void 0&&(u.right=`${n.right}px`),qt.createPortal(i.jsx("div",{className:jr("gradient-overlay",`direction-${a}`,s),style:u,"data-gradient-type":r}),e)},_=Ut.bind(gr),Pr=({value:e,expanded:t})=>{const{ref:n,title:o}=Ka(t?void 0:e),a=String(e);return i.jsx("span",{ref:n,title:t?void 0:o,className:_({"primitive-cell-text":!t}),children:a})},Pn=(e,t)=>{if(e==null)return null;let n;if(typeof e=="object"&&("component"in e||"content"in e)){const o=e;if(n=o.component??o.content,n==null)return null}else n=e;return typeof n=="string"||typeof n=="number"?i.jsx(Pr,{value:n,expanded:t}):n},Nr=({column:e})=>{const t=p.useRef(null),[n,o]=p.useState(!1);return p.useEffect(()=>{if(t.current){const a=t.current.offsetWidth,s=t.current.scrollWidth;o(s>a)}},[e.header]),i.jsx("span",{ref:t,title:n?e.header:void 0,children:e.header})},M=({data:e,primaryColumn:t,fixedColumns:n,renderRowActions:o,className:a="",wrapperClassName:s="",rowClassName:r="",headerClassName:u="",bodyClassName:c="",checkboxColumnClassName:d="",selectable:h=!1,selectedRowIds:f=[],sortingDirection:m=oe,sortingColumn:w,sortableColumns:k,isHeaderFixed:y=!1,isHorizontallyScrollable:b=!1,pinnedColumnKeys:C=[],isRowsExpandable:S=!1,expandedRowIds:v=[],isAllExpandedByDefault:R,expandAllTooltip:T,sortDisabledColumnTooltips:D,isResizable:A=!1,minColumnWidth:W=50,maxColumnWidth:B=500,isSelectAllCheckboxAlwaysVisible:V=!1,isCheckboxOutside:H=!1,disabledRowIds:Se,onChangeSorting:Be=()=>{},onToggleRowSelection:Ie=()=>{},onToggleAllRowsSelection:Zt=()=>{},onToggleRowExpansion:qe=()=>{},onToggleAllRowsExpansion:Ue=()=>{},onColumnResize:Ve=()=>{},getRowCheckboxTooltip:ve=()=>{},externalScrollContainerRef:P,portalContainer:Ye=typeof document<"u"?document.body:null,rightGradientClassName:va,pinnedGradientClassName:Ca})=>{const me=p.useMemo(()=>Array.isArray(t)?t:[t],[t]),fe=w??me[0],Xe=k??xr([...me,...n]),{pinnedColumns:Z,scrollableColumns:ge}=Sr({primaryColumns:me,fixedColumns:n,pinnedColumnKeys:C}),{hoveredColumn:Ra,hoveredRow:en,handleColumnMouseEnter:ka,handleColumnMouseLeave:Da,handleRowMouseEnter:tn,handleRowMouseLeave:nn}=vr(),{columnWidthsRef:Ce,setCellRef:on}=Rr(),Ta=p.useMemo(()=>{const l={};return me.forEach(g=>{"width"in g&&typeof g.width=="number"&&(l[g.key]=g.width)}),n.forEach(g=>{"width"in g&&typeof g.width=="number"&&(l[g.key]=g.width)}),Object.keys(l).length>0?l:void 0},[me,n]),{handleToggleRowExpansion:Ea,isCellExpanded:an}=Cr({primaryColumns:me,fixedColumns:n,expandedRowIds:v,onToggleRowExpansion:qe}),za=p.useMemo(()=>[...Z,...ge],[Z,ge]),{columnWidths:Ge,handleResize:_a,handleResizeStop:Aa,handleResizeStart:ja}=kr({enabled:A,minWidth:W,maxWidth:B,columns:za,columnWidthsRef:Ce,onColumnResize:Ve,initialColumnWidths:Ta}),{setTableRowRef:Pa,setCheckboxRowRef:Na}=Er({enabled:h&&H,rowCount:e.length}),sn=(l,g)=>{const x=l.minWidth??W,z=l.maxWidth??B;return i.jsx(cr,{width:Ge[l.key]??(typeof l.width=="number"?l.width:W),height:0,axis:"x",handle:i.jsx(Sa,{}),onResizeStart:ja,onResize:_a(l.key),onResizeStop:Aa(l.key),minConstraints:[x,0],maxConstraints:[z,0],className:_("resizable-column"),children:g},l.key)},L=p.useRef(null),ae=p.useRef(null),Ma=p.useRef(null),Re=p.useRef(null),xt=p.useRef(null),[le,Oa]=p.useState(!1),Je=p.useCallback(l=>{const g=ae.current;if(g&&g.contains(l))return;const x=l.parentElement;if(!x)return;const z=window.getComputedStyle(x),j=parseFloat(z.paddingTop)||0,N=parseFloat(z.paddingBottom)||0,J=l.offsetHeight+j+N;l.style.setProperty("--expand-cell-top",`${j}px`),l.style.setProperty("--expand-cell-height",`${J}px`)},[]),[rn,bt]=p.useState(0),[ln,St]=p.useState(0),[dn,vt]=p.useState(0),[cn,un]=p.useState(0),Ke=p.useRef(!1),Ct=p.useRef(new Set),ke=p.useRef(null),Rt=Dr(L.current,ae.current,(P==null?void 0:P.current)instanceof HTMLElement?P.current:null,le,rn,ln,dn,cn),kt=Tr(L.current,rn,ae.current,(P==null?void 0:P.current)instanceof HTMLElement?P.current:null,le,ln,dn,cn),Ha=l=>{Xe.includes(l)&&(D!=null&&D[l]||Be({key:l,direction:m}))},Wa=l=>Xe.includes(l)?(fe==null?void 0:fe.key)===l?ut(m)?i.jsx(vn,{}):i.jsx(Ja,{}):i.jsx(vn,{}):null,pn=(l,g)=>{const x=D==null?void 0:D[g],z=i.jsxs("div",{className:_("label",{"sort-disabled":!!x}),onClick:()=>Ha(g),onMouseEnter:()=>ka(g),onMouseLeave:Da,children:[i.jsx(Nr,{column:l}),(Ra===g||(fe==null?void 0:fe.key)===g)&&Wa(g)]});return x?i.jsx(_t,{content:x,placement:"top",dynamicWidth:!0,portalRoot:Ye??void 0,wrapperClassName:_("sort-disabled-tooltip-wrapper"),wrapperTabIndex:-1,children:z}):z},La=l=>{Ie(l)},hn=()=>{Zt()},$a=()=>{Ue()},Dt=l=>(Se==null?void 0:Se.includes(l))??!1,mn=e.every(l=>Dt(l.id)||f.includes(l.id)),Tt=e.some(l=>!Dt(l.id)&&f.includes(l.id)),Et=(f==null?void 0:f.length)>0,Fa=!Qa(e),fn=V&&Fa||Et,Ba=e.every(l=>v.includes(l.id)),Ia=R!==void 0?R:Ba,qa=An(Z,ge,S,h,!!o,!1,A?Ge:void 0,A,H),Ua=An(Z,ge,S,h,!!o,!0,A?Ge:void 0,A,H),gn=i.jsx("button",{onClick:$a,"aria-label":"Toggle all rows expansion",children:i.jsx("span",{className:_("expand-icon",{expanded:Ia}),children:i.jsx(Cn,{})})});p.useEffect(()=>{if(!(P!=null&&P.current)||!L.current||!ae.current)return;const l=P.current,g=L.current,x=ae.current,z=xt.current,j=()=>{const U=g.getBoundingClientRect(),J=l.getBoundingClientRect(),de=x.offsetHeight,se=U.top-J.top,Qe=U.bottom-J.top,bn=l.scrollTop>0&&se<=0&&Qe>de;if(Oa(bn),bn){const Ze=U.left,Sn=J.top;x.classList.add(_("pinned-header")),b&&(x.style.overflow="hidden",x.style.overflowX="hidden"),x.style.left=`${Ze}px`,x.style.top=`${Sn}px`,x.style.width=`${U.width}px`,z&&H&&(z.style.top=`${Sn}px`)}else{const Ze=g.scrollLeft;Ke.current=!0,x.classList.remove(_("pinned-header")),b&&(x.scrollLeft=0),x.style.left="",x.style.top="",x.style.width="",b&&(x.style.overflow="",x.style.overflowX=""),z&&H&&(z.style.top="",z.classList.remove(_("pinned-header"))),b&&Ze>0?requestAnimationFrame(()=>{g.scrollLeft=Ze,setTimeout(()=>{Ke.current=!1},0)}):Ke.current=!1}},N=requestAnimationFrame(()=>{j()});return l.addEventListener("scroll",j),window.addEventListener("resize",j),()=>{cancelAnimationFrame(N),l.removeEventListener("scroll",j),window.removeEventListener("resize",j)}},[P,b,H]),p.useEffect(()=>{if(!(P!=null&&P.current)||!L.current||!ae.current||!le)return;const l=P.current,g=L.current,x=ae.current,z=xt.current,j=()=>{const se=g.getBoundingClientRect(),Qe=l.getBoundingClientRect();x.style.left=`${se.left}px`,x.style.top=`${Qe.top}px`,x.style.width=`${se.width}px`,z&&H&&(z.style.top=`${Qe.top}px`)},N=se=>{Ke.current||(se===x?g.scrollLeft=x.scrollLeft:x.scrollLeft=g.scrollLeft,ke.current&&ke.current())},U=()=>{N(g),j()},J=()=>{N(x)},de=()=>{j()};return g.addEventListener("scroll",U),b&&x.addEventListener("scroll",J),l.addEventListener("scroll",de),window.addEventListener("resize",j),N(g),j(),()=>{g.removeEventListener("scroll",U),b&&x.removeEventListener("scroll",J),l.removeEventListener("scroll",de),window.removeEventListener("resize",j)}},[le,P,b,H]),p.useEffect(()=>{if(!L.current||!b)return;const l=L.current,g=P==null?void 0:P.current;bt(l.scrollLeft),St((g==null?void 0:g.scrollTop)||l.scrollTop||0),vt(l.scrollWidth);const x=()=>{l&&(bt(l.scrollLeft),St((g==null?void 0:g.scrollTop)||l.scrollTop||0),vt(l.scrollWidth))};let z=null;const j=()=>{z===null&&(z=requestAnimationFrame(()=>{x(),z=null}))},N=()=>{j()},U=()=>{j()};l.addEventListener("scroll",N,{passive:!0}),g&&g.addEventListener("scroll",U,{passive:!0});const J=()=>{x(),un(se=>se+1)};window.addEventListener("resize",J),ke.current=x,x();const de=new ResizeObserver(()=>{x()});return l&&de.observe(l),()=>{l.removeEventListener("scroll",N),g&&g.removeEventListener("scroll",U),window.removeEventListener("resize",J),de.disconnect(),z!==null&&(cancelAnimationFrame(z),z=null)}},[b,P,le,v]),p.useEffect(()=>{if(!L.current||!b)return;const l=L.current,g=P==null?void 0:P.current;requestAnimationFrame(()=>{l&&(bt(l.scrollLeft),St((g==null?void 0:g.scrollTop)||l.scrollTop||0),vt(l.scrollWidth),ke.current&&ke.current())})},[Ge,b,P]),p.useEffect(()=>{if(!L.current)return;const l=L.current,g=()=>{Array.from(l.querySelectorAll('[data-base-left="0"]')).forEach(Je)};requestAnimationFrame(()=>{g()})},[S,e,Je]),p.useEffect(()=>{if(!L.current)return;const l=L.current,g=new Set(v),x=Ct.current,z=new Set;if(v.forEach(N=>{x.has(N)||z.add(N)}),x.forEach(N=>{g.has(N)||z.add(N)}),z.size===0){Ct.current=g;return}const j=setTimeout(()=>{z.forEach(N=>{const U=l.querySelector(`[data-base-left="0"][data-row-id="${N}"]`);U&&Je(U)}),un(N=>N+1)},0);return Ct.current=g,()=>clearTimeout(j)},[S,v,Je]),p.useEffect(()=>{if(!Re.current||!L.current||!H)return;const l=Re.current,g=L.current,x=()=>{requestAnimationFrame(()=>{l.scrollTop=g.scrollTop})};return g.addEventListener("scroll",x),()=>{g.removeEventListener("scroll",x)}},[e,H]),p.useLayoutEffect(()=>{if(!L.current||!Re.current)return;const l=L.current,g=Re.current,x=()=>{const j=`${l.clientHeight}px`;g.style.height!==j&&(g.style.height=j)};x();const z=new ResizeObserver(()=>{requestAnimationFrame(x)});return z.observe(l),()=>z.disconnect()},[]);const wn=l=>{const g=Dt(l.id),x=ve==null?void 0:ve(l.id),z=i.jsx(zt,{value:f.includes(l.id),disabled:g,onChange:()=>La(l.id),className:_("checkbox-cell")});return x?i.jsx(_t,{content:x,placement:"top",wrapperClassName:_("checkbox-tooltip-wrapper"),portalRoot:Ye??void 0,children:z}):z},yn=_("checkbox-cell","select-all-checkbox",{"select-all-checkbox-selected":Tt}),Va=()=>i.jsxs("div",{className:_("checkbox-column",d),ref:Re,children:[i.jsx("div",{ref:xt,className:_("table-header","checkbox-header",{"pinned-header":le},u),children:fn&&i.jsx(zt,{value:mn,partiallyChecked:Tt,onChange:hn,className:yn})}),i.jsx("div",{className:_("checkbox-body",c),children:e.map((l,g)=>i.jsx("div",{ref:Na(l.id),className:_("checkbox-row","table-row",_n(l),r),onMouseEnter:()=>tn(g),onMouseLeave:nn,children:(Et||en===g)&&wn(l)},l.id))})]}),xn=()=>i.jsxs("div",{ref:L,className:_("table",{"fixed-header":y,"horizontally-scrollable-container":y&&(b||A),"external-scroll-container":y&&!!P},a),children:[i.jsxs("div",{ref:ae,className:_("table-header",{"sticky-header":y&&!le,"horizontally-scrollable":b,resizable:A},u),style:{gridTemplateColumns:Ua},children:[h&&!H&&i.jsx("div",{className:_("table-header-cell","checkbox-cell"),"data-base-left":S?ye:0,children:fn&&i.jsx(zt,{value:mn,partiallyChecked:Tt,onChange:hn,className:yn})}),S&&i.jsx("div",{className:_("table-header-cell","expand-cell","left-border-accent"),"data-base-left":"0",children:T?i.jsx(_t,{content:T,placement:"top",wrapperClassName:_("expand-all-tooltip-wrapper"),contentClassName:_("expand-all-tooltip-content"),children:gn}):gn}),Z.map((l,g)=>{const x=i.jsx("button",{"data-column-key":l.key,"data-pinned-index":g,"aria-disabled":!!(D!=null&&D[l.key]),className:_("table-header-cell","pinned-column",{[`align-${l.align}`]:"align"in l,"primary-cell":ce(l),"sortable-cell":Xe.includes(l.key),resizable:A}),style:tt(l,!0,g,Z,Ce,S,h,H),children:pn(l,l.key)},l.key);return A?sn(l,x):x}),ge.map(l=>{const g=i.jsx("button",{"aria-disabled":!!(D!=null&&D[l.key]),className:_("table-header-cell",{[`align-${l.align}`]:"align"in l,"primary-cell":ce(l),"sortable-cell":Xe.includes(l.key),resizable:A}),style:tt(l,!1,void 0,Z,Ce,S,h,H),children:pn(l,l.key)},l.key);return A?sn(l,g):g}),o&&i.jsx("div",{className:_("table-header-cell","action-menu-cell")})]}),i.jsx("div",{ref:Ma,className:_("table-body",{"scrollable-body":y,"horizontally-scrollable":b,resizable:A},c),children:e.map((l,g)=>i.jsxs("div",{"data-row-index":g,"data-row-id":l.id,ref:Pa(l.id),className:_("table-row",_n(l),r,{selectable:h&&!H}),onMouseEnter:()=>tn(g),onMouseLeave:nn,children:[h&&!H&&i.jsx("div",{className:_("table-cell","checkbox-cell"),"data-base-left":S?ye:0,children:(Et||en===g)&&wn(l)}),i.jsx("div",{className:_("row-content-wrapper"),children:i.jsxs("div",{className:_("table-row-content"),style:{gridTemplateColumns:qa},children:[S&&i.jsx("div",{className:_("table-cell","expand-cell","left-border-accent"),"data-base-left":"0","data-row-id":l.id,children:i.jsx("button",{onClick:()=>Ea(l.id),"aria-label":v.includes(l.id)?"Collapse row":"Expand row","aria-expanded":v.includes(l.id),children:i.jsx("span",{className:_("expand-icon",{expanded:v.includes(l.id)}),children:i.jsx(Cn,{})})})}),Z.map((x,z)=>{const j=an(l.id,x.key),N=ce(x);return i.jsx("div",{"data-column-key":x.key,"data-pinned-index":z,ref:N?on(x.key):void 0,className:_("table-cell","pinned-column",{"primary-cell":N,"expanded-cell":j}),style:tt(x,!0,z,Z,Ce,S,h,H),children:Pn(l[x.key],j)},x.key)}),ge.map(x=>{const z=an(l.id,x.key),j=ce(x);return i.jsx("div",{ref:j?on(x.key):void 0,className:_("table-cell",{"primary-cell":j,"expanded-cell":z}),style:tt(x,!1,void 0,Z,Ce,S,h,H),children:Pn(l[x.key],z)},x.key)}),o&&i.jsx("div",{className:_("table-cell","action-menu-cell"),children:o(l.metaData)})]})})]},l.id))}),b&&i.jsxs(i.Fragment,{children:[i.jsx(jn,{portalContainer:Ye,visible:Rt.visible,position:Rt.position,size:Rt.size,direction:"right",className:va,dataTestId:"right-gradient"}),i.jsx(jn,{portalContainer:Ye,visible:kt.visible,position:kt.position,size:kt.size,direction:"left",className:Ca,dataTestId:"pinned-gradient"})]})]});return H?i.jsxs("div",{className:_("table-wrapper",{"fixed-header":y},s),children:[Va(),xn()]}):xn()};M.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"RowData"}],raw:"RowData[]"},description:""},primaryColumn:{required:!0,tsType:{name:"union",raw:"Column | Column[]",elements:[{name:"Column"},{name:"Array",elements:[{name:"Column"}],raw:"Column[]"}]},description:""},fixedColumns:{required:!0,tsType:{name:"Array",elements:[{name:"FixedColumn"}],raw:"FixedColumn[]"},description:""},renderRowActions:{required:!1,tsType:{name:"signature",type:"function",raw:"(metaData?: MetaData) => ReactNode",signature:{arguments:[{type:{name:"MetaData"},name:"metaData"}],return:{name:"ReactNode"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isCheckboxOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},wrapperClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},headerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},bodyClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rowClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},checkboxColumnClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortingDirection:{required:!1,tsType:{name:"union",raw:"typeof ASC | typeof DESC | Uppercase<typeof ASC | typeof DESC>",elements:[{name:"ASC"},{name:"DESC"},{name:"Uppercase",elements:[{name:"union",raw:"typeof ASC | typeof DESC",elements:[{name:"ASC"},{name:"DESC"}]}],raw:"Uppercase<typeof ASC | typeof DESC>"}]},description:"",defaultValue:{value:"'asc'",computed:!1}},sortingColumn:{required:!1,tsType:{name:"Column"},description:""},sortableColumns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isHeaderFixed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontallyScrollable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pinnedColumnKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},isRowsExpandable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},isSelectAllCheckboxAlwaysVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabledRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:""},setExpandedRowIds:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Set",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Set<string | number>"}],raw:"SetStateAction<Set<string | number>>"}],raw:"Dispatch<SetStateAction<Set<string | number>>>"},description:""},isAllExpandedByDefault:{required:!1,tsType:{name:"boolean"},description:""},expandAllTooltip:{required:!1,tsType:{name:"ReactNode"},description:""},sortDisabledColumnTooltips:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"ReactNode"}],raw:"Record<string, ReactNode>"},description:""},isResizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},minColumnWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},maxColumnWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"500",computed:!1}},onChangeSorting:{required:!1,tsType:{name:"signature",type:"function",raw:"(sortConfig?: SortConfig) => void",signature:{arguments:[{type:{name:"SortConfig"},name:"sortConfig"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onColumnResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnKey: string, width: number) => void",signature:{arguments:[{type:{name:"string"},name:"columnKey"},{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},getRowCheckboxTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(rowId: string | number) => ReactNode",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"rowId"}],return:{name:"ReactNode"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},externalScrollContainerRef:{required:!1,tsType:{name:"union",raw:"RefObject<HTMLElement> | RefObject<Element> | null | undefined",elements:[{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},{name:"RefObject",elements:[{name:"Element"}],raw:"RefObject<Element>"},{name:"null"},{name:"undefined"}]},description:""},portalContainer:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:"",defaultValue:{value:"typeof document !== 'undefined' ? document.body : null",computed:!1}},rightGradientClassName:{required:!1,tsType:{name:"string"},description:""},pinnedGradientClassName:{required:!1,tsType:{name:"string"},description:""}}};const ii={title:"Tables & Lists/Table",component:M,parameters:{layout:"centered",docs:{description:{component:"\nA flexible table component with support for:\n- **Row sizes**: Configure via `rowConfigs: { size: 'small' | 'medium' | 'large' }` in row data\n- **Expandable rows**: Enable with `isRowsExpandable` prop\n- **Pinned columns**: Use `pinnedColumnKeys` to pin columns to the left\n- **Sorting**: Configure with `sortableColumns`, `sortingColumn`, `sortingDirection`\n- **Disabled sort tooltips**: Use `sortDisabledColumnTooltips` to show a tooltip and block sorting for specific columns\n- **Selection**: Enable with `selectable` prop\n- **Custom cell content**: Use `DetailedCellData` with `content` and `component` properties\n        "}}},tags:["autodocs"],argTypes:{data:{description:"Array of row data. Each row should have an `id` and can include `rowConfigs` for size configuration.",table:{type:{summary:"RowData[]"}}},primaryColumn:{description:"The main column configuration (typically the name/title column).",table:{type:{summary:"Column | Column[]"}}},fixedColumns:{description:"Array of fixed-width columns with optional alignment.",table:{type:{summary:"FixedColumn[]"}}},selectable:{description:"Enable row selection with checkboxes.",control:"boolean",table:{defaultValue:{summary:"false"}}},isRowsExpandable:{description:"Enable expand/collapse functionality for rows with long content.",control:"boolean",table:{defaultValue:{summary:"false"}}},expandedRowIds:{description:"Array of row IDs that are currently expanded.",table:{type:{summary:"(string | number)[]"}}},isAllExpandedByDefault:{description:"Whether all rows should be expanded by default.",control:"boolean",table:{defaultValue:{summary:"false"}}},expandAllTooltip:{description:"Tooltip text for the expand all button.",table:{type:{summary:"ReactNode"}}},sortDisabledColumnTooltips:{description:"Tooltips for sortable column headers where sorting is disabled. Sort clicks are ignored for matching column keys.",table:{type:{summary:"Record<string, ReactNode>"}}},pinnedColumnKeys:{description:"Array of column keys to pin to the left side of the table.",table:{type:{summary:"string[]"}}},sortableColumns:{description:"Array of column keys that can be sorted.",table:{type:{summary:"string[]"}}},sortingColumn:{description:"Currently sorted column.",table:{type:{summary:"Column"}}},sortingDirection:{description:"Current sorting direction.",control:"select",options:["ASC","DESC"],table:{type:{summary:"'ASC' | 'DESC'"}}},isHeaderFixed:{description:"Keep the header fixed when scrolling vertically.",control:"boolean",table:{defaultValue:{summary:"false"}}},isHorizontallyScrollable:{description:"Enable horizontal scrolling for wide tables.",control:"boolean",table:{defaultValue:{summary:"false"}}},className:{description:"Custom CSS class for the table container.",table:{type:{summary:"string"}}},headerClassName:{description:"Custom CSS class for the table header. Use this to customize header background, borders, etc.",table:{type:{summary:"string"}}},bodyClassName:{description:"Custom CSS class for the table body. Use this to customize row gap, padding, etc.",table:{type:{summary:"string"}}},rowClassName:{description:"Custom CSS class for table rows.",table:{type:{summary:"string"}}},onToggleRowExpansion:{description:"Callback when a row is expanded/collapsed.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsExpansion:{description:"Callback when all rows are expanded/collapsed.",table:{type:{summary:"() => void"}}},onToggleRowSelection:{description:"Callback when a row is selected/deselected.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsSelection:{description:"Callback when all rows are selected/deselected.",table:{type:{summary:"() => void"}}},onChangeSorting:{description:"Callback when sorting changes.",table:{type:{summary:"(sortConfig?: SortConfig) => void"}}},renderRowActions:{description:"Function to render action menu for each row.",table:{type:{summary:"(metaData?: MetaData) => ReactNode"}}}},args:{selectable:!0}},Q=()=>i.jsx(Za,{items:[{label:"Edit"},{label:"Rename"},{type:"divider"},{label:"Delete"}],placement:"bottom-end"}),ue=[{id:1,name:{content:"Sam",component:i.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],F=[{key:"name",header:"Name"}],pe=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],nt={render:e=>{const[t,n]=p.useState({key:F[0].key,direction:oe}),[o,a]=p.useState(F[0]),[s,r]=p.useState(oe),u=xe(ue,t),[c,d]=p.useState(u),[h,f]=p.useState(new Set([]));return p.useEffect(()=>{const{key:m,direction:w}=t,k=[...pe,...F].find(y=>y.key===m);r(w),a(k)},[t]),i.jsx("div",{style:{minWidth:"700px"},children:i.jsx(M,{...e,primaryColumn:F,data:c,sortableColumns:[F[0].key],onChangeSorting:(m=t)=>{let{direction:w}=m;const{key:k}=m;w=Qt(w);const y=xe(c,{key:k,direction:w});n({key:k,direction:w}),d(y)},onToggleRowSelection:m=>{const w=new Set(h);w.has(m)?w.delete(m):w.add(m),f(w)},onToggleAllRowsSelection:()=>{if(h.size===ue.length)f(new Set);else{const m=new Set(ue.map(w=>w.id));f(m)}},selectedRowIds:[...h],sortingColumn:o,sortingDirection:s})})},args:{fixedColumns:pe,renderRowActions:Q,selectable:!0}},ot={render:()=>{const e=pe[0],t="Sorting is unavailable in 'Latest executions only' view.";return i.jsxs("div",{style:{minWidth:"500px"},children:[i.jsxs("p",{style:{margin:"0 0 12px",fontSize:"13px",color:"#8d95a1"},children:["Only the ",i.jsx("strong",{children:"Age"})," column shows a sort icon (DESC). Hover it for the tooltip; clicking does not change sorting. Other columns have no sort affordance."]}),i.jsx(M,{primaryColumn:F,fixedColumns:pe,data:ue,sortableColumns:[e.key],sortDisabledColumnTooltips:{[e.key]:t},sortingColumn:e,sortingDirection:"DESC",onChangeSorting:()=>{}})]})}},G=[{id:1,name:"John Doe",email:"john.doe@example.com",phone:"+1-555-123-4567",address:"123 Main Street, New York, NY 10001",department:"Engineering",role:"Senior Software Engineer",salary:"$120,000",startDate:"2020-01-15",status:"Active",manager:"Jane Smith",projects:"Project Alpha, Project Beta",rowConfigs:{size:"small"}},{id:2,name:"Jane Smith",email:"jane.smith@example.com",phone:"+1-555-987-6543",address:"456 Oak Avenue, Los Angeles, CA 90210",department:"Marketing",role:"Marketing Director",salary:"$95,000",startDate:"2019-03-20",status:"Active",manager:"Robert Johnson",projects:"Campaign X, Campaign Y",rowConfigs:{size:"small"}},{id:3,name:"Mike Wilson",email:"mike.wilson@example.com",phone:"+1-555-456-7890",address:"789 Pine Road, Chicago, IL 60601",department:"Sales",role:"Sales Representative",salary:"$75,000",startDate:"2021-06-10",status:"Active",manager:"Sarah Davis",projects:"Client Onboarding, Lead Generation",rowConfigs:{size:"small"}},{id:4,name:"Sarah Davis",email:"sarah.davis@example.com",phone:"+1-555-234-5678",address:"321 Elm Street, Houston, TX 77001",department:"HR",role:"HR Manager",salary:"$85,000",startDate:"2018-09-12",status:"Active",manager:"Michael Brown",projects:"Employee Onboarding, Policy Updates",rowConfigs:{size:"small"}},{id:5,name:"Robert Johnson",email:"robert.johnson@example.com",phone:"+1-555-345-6789",address:"654 Maple Drive, Phoenix, AZ 85001",department:"Finance",role:"Financial Analyst",salary:"$78,000",startDate:"2020-11-08",status:"Active",manager:"Emily White",projects:"Budget Planning, Cost Analysis",rowConfigs:{size:"small"}},{id:6,name:"Emily White",email:"emily.white@example.com",phone:"+1-555-456-7891",address:"987 Cedar Lane, Philadelphia, PA 19101",department:"Operations",role:"Operations Manager",salary:"$110,000",startDate:"2017-05-22",status:"Active",manager:"David Green",projects:"Process Optimization, Quality Control",rowConfigs:{size:"small"}},{id:7,name:"David Green",email:"david.green@example.com",phone:"+1-555-567-8901",address:"147 Birch Avenue, San Antonio, TX 78201",department:"Engineering",role:"Lead Developer",salary:"$135,000",startDate:"2016-02-14",status:"Active",manager:"Lisa Thompson",projects:"Architecture Review, Team Mentoring",rowConfigs:{size:"small"}},{id:8,name:"Lisa Thompson",email:"lisa.thompson@example.com",phone:"+1-555-678-9012",address:"258 Spruce Court, San Diego, CA 92101",department:"Product",role:"Product Manager",salary:"$105,000",startDate:"2019-08-30",status:"Active",manager:"Tom Anderson",projects:"Feature Planning, User Research",rowConfigs:{size:"small"}},{id:9,name:"Tom Anderson",email:"tom.anderson@example.com",phone:"+1-555-789-0123",address:"369 Willow Street, Dallas, TX 75201",department:"Design",role:"UX Designer",salary:"$88,000",startDate:"2021-01-18",status:"Active",manager:"Anna Martinez",projects:"UI Redesign, User Testing",rowConfigs:{size:"small"}},{id:10,name:"Anna Martinez",email:"anna.martinez@example.com",phone:"+1-555-890-1234",address:"741 Poplar Boulevard, San Jose, CA 95101",department:"QA",role:"QA Engineer",salary:"$82,000",startDate:"2020-07-25",status:"Active",manager:"John Doe",projects:"Automation Testing, Bug Tracking",rowConfigs:{size:"small"}}],ne=[{key:"name",header:"Full Name"}],be=[{key:"email",header:"Email Address",width:200},{key:"phone",header:"Phone Number",width:150},{key:"address",header:"Address",width:250},{key:"department",header:"Department",width:120},{key:"role",header:"Job Role",width:180},{key:"salary",header:"Salary",width:100},{key:"startDate",header:"Start Date",width:120},{key:"status",header:"Status",width:100},{key:"manager",header:"Manager",width:150},{key:"projects",header:"Current Projects",width:200}],Mr=e=>{const t=["John","Jane","Mike","Sarah","David","Emma","Chris","Lisa","Tom","Anna"],n=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose"],o=["Engineering","Marketing","Sales","HR","Finance","Operations","Design","Product","Legal","Support"];return Array.from({length:e},(a,s)=>({id:s+1,name:`${t[s%t.length]} ${s+1}`,age:22+s%40,city:n[s%n.length],department:o[s%o.length],email:`user${s+1}@example.com`,salary:`$${(5e4+s*1e3%1e5).toLocaleString()}`}))},Le=Mr(50),pt=[{key:"age",header:"Age",width:80,align:"right"},{key:"city",header:"City",width:120},{key:"department",header:"Department",width:120},{key:"email",header:"Email",width:200},{key:"salary",header:"Salary",width:100,align:"right"}],at={render:e=>{const[t,n]=p.useState({key:F[0].key,direction:oe}),[o,a]=p.useState(F[0]),[s,r]=p.useState(oe),u=xe(Le,t),[c,d]=p.useState(u),[h,f]=p.useState(new Set([]));return p.useEffect(()=>{const{key:m,direction:w}=t,k=[...pt,...F].find(y=>y.key===m);r(w),a(k)},[t]),i.jsxs("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Fixed Header Table with Scrollable Body"}),i.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",overflow:"auto"},children:i.jsx(M,{...e,data:c,primaryColumn:F,fixedColumns:pt,isHeaderFixed:!0,sortableColumns:[F[0].key,"age","department"],onChangeSorting:(m=t)=>{let{direction:w}=m;const{key:k}=m;w=Qt(w);const y=xe(c,{key:k,direction:w});n({key:k,direction:w}),d(y)},onToggleRowSelection:m=>{const w=new Set(h);w.has(m)?w.delete(m):w.add(m),f(w)},onToggleAllRowsSelection:()=>{if(h.size===Le.length)f(new Set);else{const m=new Set(Le.map(w=>w.id));f(m)}},selectedRowIds:[...h],sortingColumn:o,sortingDirection:s})})]})},args:{selectable:!0,renderRowActions:Q}},st={render:e=>i.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Fixed Header + Horizontal Scroll: Both scrollbars visible when needed"}),i.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",position:"relative"},children:i.jsx(M,{...e,data:G,primaryColumn:ne,fixedColumns:be,isHorizontallyScrollable:!0,isHeaderFixed:!0})})]}),args:{selectable:!1,renderRowActions:Q}},rt={render:e=>{const[t,n]=p.useState(new Set([]));return i.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Pinned Columns + Fixed Header: Name and Email pinned with vertical and horizontal scrolling"}),i.jsx("div",{className:"storybook-table-wrapper",style:{width:"550px",height:"calc(100% - 50px)",position:"relative"},children:i.jsx(M,{...e,data:G,primaryColumn:ne,fixedColumns:be,isHorizontallyScrollable:!0,isHeaderFixed:!0,pinnedColumnKeys:["name","email","department"],onToggleRowSelection:o=>{const a=new Set(t);a.has(o)?a.delete(o):a.add(o),n(a)},onToggleAllRowsSelection:()=>{if(t.size===G.length)n(new Set);else{const o=new Set(G.map(a=>a.id));n(o)}},selectedRowIds:[...t]})})]})},args:{selectable:!0,renderRowActions:Q}},it={render:e=>{const[t,n]=p.useState(new Set([1])),[o,a]=p.useState(new Set([])),s=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"sam.johnson@example.com"},{id:2,name:"Anna Smith",age:32,city:"San Francisco",department:"Design",email:"anna.smith@example.com"},{id:3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",email:"mike.davis@example.com"},{id:4,name:"Sarah Wilson",age:35,city:"Chicago",department:"Sales",email:"sarah.wilson@example.com"}],r=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:100},{key:"city",header:"City",width:100}],u=[{key:"name",header:"Name"}];return i.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows Example"}),i.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Click the expand/collapse icons to view detailed information for each row. Rows can be expanded and collapsed independently."}),i.jsx(M,{...e,data:s,primaryColumn:u,fixedColumns:r,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...t],setExpandedRowIds:n,onToggleRowExpansion:c=>{const d=new Set(t);d.has(c)?d.delete(c):d.add(c),n(d)},onToggleAllRowsExpansion:()=>{if(t.size===s.length)n(new Set);else{const c=new Set(s.map(d=>d.id));n(c)}},selectedRowIds:[...o],onToggleRowSelection:c=>{const d=new Set(o);d.has(c)?d.delete(c):d.add(c),a(d)},onToggleAllRowsSelection:()=>{if(o.size===s.length)a(new Set);else{const c=new Set(s.map(d=>d.id));a(c)}}})]})},args:{selectable:!0}},lt={render:e=>{const[t,n]=p.useState(new Set([1,2,3,4])),[o,a]=p.useState(!0),[s,r]=p.useState(new Set([])),u=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"anna.smith@example.com"},{id:2,name:"Mike Davis",age:32,city:"San Francisco",department:"Design",email:"mike.davis@example.com"},{id:3,name:"Sarah Wilson",age:28,city:"Los Angeles",department:"Marketing",email:"sarah.wilson@example.com"},{id:4,name:"John Brown",age:35,city:"Chicago",department:"Sales",email:"john.brown@example.com"}],c=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],d=[{key:"name",header:"Name"}],h=o?"Expanded by default":"Collapsed by default";return i.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows with Default State"}),i.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Demonstrates ",i.jsx("strong",{children:"isAllExpandedByDefault"})," and ",i.jsx("strong",{children:"expandAllTooltip"})," ","props. The expandAll icon shows the default state regardless of individual row states. Hover over the expandAll icon to see the tooltip."]}),i.jsx(M,{...e,data:u,primaryColumn:d,fixedColumns:c,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...t],isAllExpandedByDefault:o,expandAllTooltip:h,onToggleRowExpansion:f=>{const m=new Set(t);m.has(f)?m.delete(f):m.add(f),n(m)},onToggleAllRowsExpansion:()=>{const f=!o;a(f),n(f?new Set(u.map(m=>m.id)):new Set)},selectedRowIds:[...s],onToggleRowSelection:f=>{const m=new Set(s);m.has(f)?m.delete(f):m.add(f),r(m)},onToggleAllRowsSelection:()=>{if(s.size===u.length)r(new Set);else{const f=new Set(u.map(m=>m.id));r(f)}}})]})},args:{selectable:!0}},Ht=[{id:1,name:"John Alexander Maximilian Winchester-Blackwood III",description:"This is long text but anyway no matter ellipsed or opened it should not overcome his width it can be brake. When you click on this cell, it will expand to show the full content without ellipsis truncation, and the text should wrap properly within the cell boundaries without breaking the table layout.",shortText:"Brief note",longTitle:"Senior Vice President of Engineering and Technology Development for Enterprise Solutions and Digital Transformation Initiatives",email:"john.alexander.maximilian.winchester.blackwood.third@very-long-company-name-example.com",notes:"This is a comprehensive test of how the table handles extremely long content that would normally break layouts. The content should be properly contained within cell boundaries."},{id:2,name:"Maria Elena Rodriguez-Martinez",description:"Another extremely lengthy description that showcases the cell expansion capabilities. This description contains detailed information about the person, their role, responsibilities, and achievements. The purpose is to demonstrate how users can easily expand cells to read full content when the default view shows only a truncated version with ellipsis.",shortText:"Quick summary here",longTitle:"Chief Marketing Officer and Head of Brand Strategy for Global Markets and Customer Experience Enhancement",email:"maria.elena.rodriguez.martinez@another-extremely-long-domain-name.example.org",notes:"Testing various content lengths and how they behave in both collapsed and expanded states. The text should wrap appropriately without overflowing."},{id:3,name:"Robert James Thompson",description:"A comprehensive description that tests the expand functionality with moderate length content. This shows how the feature works with different content lengths and provides a good example of real-world usage.",shortText:"Standard",longTitle:"Director of Operations",email:"robert.thompson@company.com",notes:"Short note about this person and their current projects."},{id:4,name:"Dr. Elizabeth Catherine Pemberton-Williams, PhD, MBA, CISSP",description:"This cell contains an exceptionally detailed description that really pushes the limits of what might be considered reasonable content length. It includes professional background, educational achievements, current responsibilities, ongoing projects, future goals, and various other details that would typically require a much larger display area.",shortText:"Complex background",longTitle:"Chief Technology Officer and Principal Software Architect for Distributed Systems and Cloud Infrastructure with specialization in Cybersecurity and Data Analytics",email:"dr.elizabeth.catherine.pemberton.williams.phd.mba.cissp@enterprise-solutions-technology-consulting.example.net",notes:"Comprehensive notes about professional achievements, certifications, ongoing projects, and future development plans. This tests the maximum reasonable content length."}],Or=[{key:"description",header:"Description",width:200},{key:"longTitle",header:"Job Title",width:120},{key:"email",header:"Email Address",width:100},{key:"shortText",header:"Type",width:100},{key:"notes",header:"Notes",width:100}],dt={render:e=>{const[t,n]=p.useState(new Set);return i.jsxs("div",{style:{width:"1000px",padding:"16px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Row Content Expansion - Long Text Handling"}),i.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666",lineHeight:1.5},children:[i.jsx("strong",{children:"Click the expand icon"})," at the beginning of each row to expand/collapse ALL cells in that row. This example tests:",i.jsx("br",{}),"• Very long email addresses that should be ellipsed when collapsed",i.jsx("br",{}),"• Long text content that should wrap without breaking cell width constraints",i.jsx("br",{}),"• Proper word breaking for extremely long content",i.jsx("br",{}),"• Layout stability when transitioning between collapsed and expanded states"]}),i.jsx("div",{style:{border:"1px solid #e1e5e9",borderRadius:"8px",overflow:"hidden"},children:i.jsx(M,{...e,data:Ht,primaryColumn:[{key:"name",header:"Full Name"}],fixedColumns:Or,selectable:!1,isRowsExpandable:!0,expandedRowIds:[...t],onToggleRowExpansion:o=>{const a=new Set(t);a.has(o)?a.delete(o):a.add(o),n(a)},onToggleAllRowsExpansion:()=>{if(t.size===Ht.length)n(new Set);else{const o=new Set(Ht.map(a=>a.id));n(o)}}})}),i.jsx("p",{style:{margin:"16px 0 0 0",fontSize:"12px",color:"#888",fontStyle:"italic"},children:"Test the table with your browser's developer tools at different widths to verify responsive behavior."})]})},args:{renderRowActions:void 0}},Ee={render:e=>{const[t,n]=p.useState(new Set([1])),[o,a]=p.useState(new Set([5])),[s,r]=p.useState(new Set([9])),u=(k,y)=>[{id:k+1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",rowConfigs:y?{size:y}:void 0},{id:k+2,name:"John Doe with a very long name that should wrap when expanded and demonstrate how the row height increases to accommodate multiple lines of text content",age:32,city:"San Francisco Bay Area, California, United States of America",department:"Design and User Experience Research Department",rowConfigs:y?{size:y}:void 0},{id:k+3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",rowConfigs:y?{size:y}:void 0},{id:k+4,name:"Sarah Elizabeth Wilson-Montgomery III with an exceptionally long hyphenated surname that demonstrates text wrapping behavior in expanded table rows when the content exceeds the available column width",age:35,city:"Chicago Metropolitan Area",department:"Sales and Business Development International Operations",rowConfigs:y?{size:y}:void 0}],c=u(0,"small"),d=u(4),h=u(8,"large"),f=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],m=[{key:"name",header:"Name"}],w=(k,y,b,C,S)=>i.jsxs("div",{style:{marginBottom:"32px"},children:[i.jsx("h4",{style:{margin:"0 0 4px 0",fontSize:"14px",color:"#333"},children:k}),i.jsx("p",{style:{margin:"0 0 12px 0",fontSize:"12px",color:"#666"},children:y}),i.jsx(M,{...e,data:b,primaryColumn:m,fixedColumns:f,isRowsExpandable:!0,expandedRowIds:[...C],onToggleRowExpansion:v=>{const R=new Set(C);R.has(v)?R.delete(v):R.add(v),S(R)},onToggleAllRowsExpansion:()=>{if(C.size===b.length)S(new Set);else{const v=new Set(b.map(R=>R.id));S(v)}}})]});return i.jsxs("div",{style:{minWidth:"800px",maxWidth:"1000px"},children:[i.jsx("h3",{style:{margin:"0 0 24px 0",fontSize:"18px",color:"#333"},children:"Row Sizes with Expand - Testing Jump Fix"}),i.jsx("p",{style:{margin:"0 0 24px 0",fontSize:"14px",color:"#666"},children:"Test expand/collapse on each table size. The row height should NOT change when expanding/collapsing (unless content requires more space)."}),w("Small Rows (44px)",'rowConfigs: { size: "small" }',c,t,n),w("Default Rows (64px)","No rowConfigs specified",d,o,a),w("Large Rows (80px)",'rowConfigs: { size: "large" }',h,s,r)]})}},ze={render:()=>{const e=[{key:"name",header:"Name"}],t=[{key:"status",header:"Status",width:100},{key:"description",header:"Description",width:250}],n=[{id:1,name:"Small Row 1",description:"Compact row for dense tables",status:"Active",rowConfigs:{size:"small"}},{id:2,name:"Small Row 2",description:"Height: 44px",status:"Active",rowConfigs:{size:"small"}}],o=[{id:1,name:"Default Row 1",description:"Standard row size",status:"Active"},{id:2,name:"Default Row 2",description:"Height: 64px (no rowConfigs needed)",status:"Active"}],a=[{id:1,name:"Large Row 1",description:"Prominent row for emphasis",status:"Active",rowConfigs:{size:"large"}},{id:2,name:"Large Row 2",description:"Height: 80px",status:"Active",rowConfigs:{size:"large"}}];return i.jsxs("div",{style:{minWidth:"600px"},children:[i.jsxs("div",{style:{marginBottom:"32px"},children:[i.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Small (44px)"}),i.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "small" }']}),i.jsx(M,{data:n,primaryColumn:e[0],fixedColumns:t,selectable:!1})]}),i.jsxs("div",{style:{marginBottom:"32px"},children:[i.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Default (64px)"}),i.jsx("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:"No rowConfigs needed"}),i.jsx(M,{data:o,primaryColumn:e[0],fixedColumns:t,selectable:!1})]}),i.jsxs("div",{children:[i.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Large (80px)"}),i.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "large" }']}),i.jsx(M,{data:a,primaryColumn:e[0],fixedColumns:t,selectable:!1})]})]})}},Hr=[{key:"name",header:"Name"}],Wr=[{key:"status",header:"Status",width:100},{key:"category",header:"Category",width:120}],Wt=[{id:1,name:"Test execution with a very long name that demonstrates how text behaves in expanded rows with custom header styling",status:"Passed",category:"Smoke",rowConfigs:{size:"small"}},{id:2,name:"Another test case",status:"Failed",category:"Regression",rowConfigs:{size:"small"}},{id:3,name:"Quick sanity check",status:"Skipped",category:"Sanity",rowConfigs:{size:"small"}}],Lr=()=>{const[e,t]=p.useState(new Set);return i.jsxs("div",{style:{minWidth:"600px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"18px",color:"#333"},children:"Custom Header Background Color"}),i.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Use the ",i.jsx("code",{children:"headerClassName"})," prop with your own CSS class to customize the header. Pinned columns and expand button inherit the background color automatically."]}),i.jsx("style",{children:`
          .custom-gray-header {
            background-color: var(--rp-ui-base-bg-200) !important;
            border-top: 1px solid var(--rp-ui-base-e-200);
            border-bottom: none;
          }
        `}),i.jsx("div",{style:{border:"1px solid var(--rp-ui-base-e-200)",borderRadius:"4px",overflow:"hidden"},children:i.jsx(M,{data:Wt,primaryColumn:Hr[0],fixedColumns:Wr,pinnedColumnKeys:["status"],isRowsExpandable:!0,expandedRowIds:Array.from(e),selectable:!1,headerClassName:"custom-gray-header",onToggleRowExpansion:n=>{const o=new Set(e);o.has(n)?o.delete(n):o.add(n),t(o)},onToggleAllRowsExpansion:()=>{e.size===Wt.length?t(new Set):t(new Set(Wt.map(n=>n.id)))}})}),i.jsxs("div",{style:{marginTop:"24px"},children:[i.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#333"},children:"How to use:"}),i.jsx("pre",{style:{backgroundColor:"#f5f5f5",padding:"12px",borderRadius:"4px",fontSize:"12px",overflow:"auto"},children:`// In your SCSS file:
.custom-header {
  background-color: var(--rp-ui-base-bg-200);
  border-top: 1px solid var(--rp-ui-base-e-200);
  border-bottom: none;
}

// In your component:
<Table
  headerClassName="custom-header"
  // ... other props
/>`})]})]})},_e={render:()=>i.jsx(Lr,{})},Ae={render:e=>i.jsxs("div",{style:{minWidth:"600px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Resizable Columns (Default Constraints)"}),i.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Drag the column borders in the header to adjust widths. Default constraints:"," ",i.jsx("code",{children:"minColumnWidth=50"}),", ",i.jsx("code",{children:"maxColumnWidth=500"})]}),i.jsx(M,{...e,primaryColumn:F,data:ue,fixedColumns:pe})]}),args:{renderRowActions:Q,isResizable:!0}},je={render:e=>i.jsx("div",{style:{minWidth:"600px"},children:i.jsx(M,{...e,primaryColumn:F,data:ue,fixedColumns:pe})}),args:{isResizable:!0}},Pe={render:e=>i.jsxs("div",{style:{minWidth:"600px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Resizable Columns (Custom Constraints)"}),i.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Columns can be resized between 80px and 300px. Custom constraints:"," ",i.jsx("code",{children:"minColumnWidth=80"}),", ",i.jsx("code",{children:"maxColumnWidth=300"})]}),i.jsx(M,{...e,primaryColumn:F,data:ue,fixedColumns:pe})]}),args:{renderRowActions:Q,isResizable:!0,minColumnWidth:80,maxColumnWidth:300}},Ne={render:e=>i.jsx("div",{style:{width:"900px",height:"400px",border:"1px solid #ccc",padding:"16px"},children:i.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:i.jsx(M,{...e,data:Le,primaryColumn:F,fixedColumns:pt})})}),args:{renderRowActions:Q,isResizable:!0,isHeaderFixed:!0}},Me={render:e=>i.jsx("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:i.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:i.jsx(M,{...e,data:G,primaryColumn:ne,fixedColumns:be,isHorizontallyScrollable:!0,isHeaderFixed:!0})})}),args:{renderRowActions:Q,isResizable:!0}},Oe={render:e=>i.jsx("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:i.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:i.jsx(M,{...e,data:Le,primaryColumn:F,fixedColumns:pt,pinnedColumnKeys:["name","email"],isHorizontallyScrollable:!0,isHeaderFixed:!0})})}),args:{renderRowActions:Q,isResizable:!0}},He={render:e=>{const t=p.useRef(null),[n,o]=p.useState({key:ne[0].key,direction:oe}),[a,s]=p.useState(ne[0]),[r,u]=p.useState(oe),c=p.useMemo(()=>{const k=[...G];for(let y=0;y<3;y++)k.push(...G.map(b=>({...b,id:`${b.id}-copy-${y+1}`})));return k},[]),d=xe(c,n),[h,f]=p.useState(d),[m,w]=p.useState(new Set([]));return p.useEffect(()=>{const{key:k,direction:y}=n,b=[...be,...ne].find(C=>C.key===k);u(y),s(b)},[n]),i.jsxs("div",{style:{width:"800px",height:"600px",border:"1px solid #ccc",padding:"16px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Table with Horizontal Scroll + Pinned Header (External Scroll Container)"}),i.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"This example demonstrates a pinned header that activates when scrolling in an external container. The table header pins to the top when the scroll position reaches it. Scroll vertically in the container to see the header pinning, and horizontally to see pinned columns and gradient effects."}),i.jsxs("div",{ref:t,style:{height:"calc(100% - 100px)",overflowY:"auto",overflowX:"hidden",position:"relative"},children:[i.jsxs("div",{style:{padding:"16px",backgroundColor:"#f0f0f0",marginBottom:"16px"},children:[i.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"16px"},children:"Content Above Table"}),i.jsx("p",{style:{margin:"0",fontSize:"14px",color:"#666"},children:"This content is inside the scrollable container. When you scroll down, this text will move up and disappear, but the table header will stick to the top."}),i.jsx("p",{style:{margin:"8px 0 0",fontSize:"14px",color:"#666"},children:"Scroll down to see the header pinning effect. The table header will remain fixed at the top while this content scrolls away."})]}),i.jsx(M,{...e,data:h,primaryColumn:ne,fixedColumns:be,isHeaderFixed:!0,isHorizontallyScrollable:!0,pinnedColumnKeys:["name","email"],externalScrollContainerRef:t,sortableColumns:[ne[0].key,"department","status"],onChangeSorting:(k=n)=>{let{direction:y}=k;const{key:b}=k;y=Qt(y);const C=xe(h,{key:b,direction:y});o({key:b,direction:y}),f(C)},onToggleRowSelection:k=>{const y=new Set(m);y.has(k)?y.delete(k):y.add(k),w(y)},onToggleAllRowsSelection:()=>{if(m.size===c.length)w(new Set);else{const k=new Set(c.map(y=>y.id));w(k)}},selectedRowIds:[...m],sortingColumn:a,sortingDirection:r})]})]})},args:{selectable:!0,renderRowActions:Q}},We={render:e=>{const[t,n]=p.useState(new Set([])),[o,a]=p.useState(new Set([]));return i.jsx("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px",paddingLeft:"48px"},children:i.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:i.jsx(M,{...e,data:G,primaryColumn:ne,fixedColumns:be,expandedRowIds:[...o],selectedRowIds:[...t],onToggleRowSelection:s=>{const r=new Set(t);r.has(s)?r.delete(s):r.add(s),n(r)},onToggleAllRowsSelection:()=>{if(t.size===G.length)n(new Set);else{const s=new Set(G.map(r=>r.id));n(s)}},onToggleRowExpansion:s=>{const r=new Set(o);r.has(s)?r.delete(s):r.add(s),a(r)},onToggleAllRowsExpansion:()=>{if(o.size===G.length)a(new Set);else{const s=new Set(G.map(r=>r.id));a(s)}}})})})},args:{renderRowActions:Q,isResizable:!0,isHeaderFixed:!0,isHorizontallyScrollable:!0,pinnedColumnKeys:["name","email"],selectable:!0,isRowsExpandable:!0,isCheckboxOutside:!0}};var Nn,Mn,On;nt.parameters={...nt.parameters,docs:{...(Nn=nt.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortConfig, setSortConfig] = useState<SortConfig>({
      key: primaryColumns[0].key,
      direction: ASC
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingColumn, setSortingColumn] = useState<Column>(primaryColumns[0]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingDirection, setSortingDirection] = useState<SortingDirection>(ASC);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const defaultSortedData = sortTableData(data, sortConfig);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tableData, setTableData] = useState(defaultSortedData);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const {
        key,
        direction
      } = sortConfig;
      const column = [...fixedColumns, ...primaryColumns].find(col => col.key === key);
      setSortingDirection(direction);
      setSortingColumn(column as Column);
    }, [sortConfig]);
    return <div style={{
      minWidth: '700px'
    }}>
        <Table {...args} primaryColumn={primaryColumns} data={tableData} sortableColumns={[primaryColumns[0].key]} onChangeSorting={(sortConfigParam = sortConfig) => {
        let {
          direction
        } = sortConfigParam;
        const {
          key
        } = sortConfigParam;
        direction = toggleDirection(direction);
        const sortedData = sortTableData(tableData, {
          key,
          direction
        });
        setSortConfig({
          key,
          direction
        });
        setTableData(sortedData);
      }} onToggleRowSelection={id => {
        const newCheckedRows = new Set(checkedRows);
        if (newCheckedRows.has(id)) {
          newCheckedRows.delete(id);
        } else {
          newCheckedRows.add(id);
        }
        setCheckedRows(newCheckedRows);
      }} onToggleAllRowsSelection={() => {
        if (checkedRows.size === data.length) {
          setCheckedRows(new Set());
        } else {
          const allRows = new Set(data.map(item => item.id));
          setCheckedRows(allRows);
        }
      }} selectedRowIds={[...checkedRows]} sortingColumn={sortingColumn} sortingDirection={sortingDirection} />
      </div>;
  },
  args: {
    fixedColumns,
    renderRowActions,
    selectable: true
  }
}`,...(On=(Mn=nt.parameters)==null?void 0:Mn.docs)==null?void 0:On.source}}};var Hn,Wn,Ln;ot.parameters={...ot.parameters,docs:{...(Hn=ot.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
  render: () => {
    const ageColumn = fixedColumns[0];
    const sortDisabledTooltip = "Sorting is unavailable in 'Latest executions only' view.";
    return <div style={{
      minWidth: '500px'
    }}>
        <p style={{
        margin: '0 0 12px',
        fontSize: '13px',
        color: '#8d95a1'
      }}>
          Only the <strong>Age</strong> column shows a sort icon (DESC). Hover it for the tooltip;
          clicking does not change sorting. Other columns have no sort affordance.
        </p>
        <Table primaryColumn={primaryColumns} fixedColumns={fixedColumns} data={data} sortableColumns={[ageColumn.key]} sortDisabledColumnTooltips={{
        [ageColumn.key]: sortDisabledTooltip
      }} sortingColumn={ageColumn} sortingDirection="DESC" onChangeSorting={() => {}} />
      </div>;
  }
}`,...(Ln=(Wn=ot.parameters)==null?void 0:Wn.docs)==null?void 0:Ln.source}}};var $n,Fn,Bn;at.parameters={...at.parameters,docs:{...($n=at.parameters)==null?void 0:$n.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortConfig, setSortConfig] = useState<SortConfig>({
      key: primaryColumns[0].key,
      direction: ASC
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingColumn, setSortingColumn] = useState<Column>(primaryColumns[0]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingDirection, setSortingDirection] = useState<SortingDirection>(ASC);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const defaultSortedData = sortTableData(largeDataSet, sortConfig);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tableData, setTableData] = useState(defaultSortedData);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const {
        key,
        direction
      } = sortConfig;
      const column = [...scrollableFixedColumns, ...primaryColumns].find(col => col.key === key);
      setSortingDirection(direction);
      setSortingColumn(column as Column);
    }, [sortConfig]);
    return <div style={{
      width: '900px',
      height: '500px',
      border: '1px solid #ccc',
      padding: '16px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0'
      }}>Fixed Header Table with Scrollable Body</h3>
        <div className="storybook-table-wrapper" style={{
        height: 'calc(100% - 50px)',
        overflow: 'auto'
      }}>
          <Table {...args} data={tableData} primaryColumn={primaryColumns} fixedColumns={scrollableFixedColumns} isHeaderFixed={true} sortableColumns={[primaryColumns[0].key, 'age', 'department']} onChangeSorting={(sortConfigParam = sortConfig) => {
          let {
            direction
          } = sortConfigParam;
          const {
            key
          } = sortConfigParam;
          direction = toggleDirection(direction);
          const sortedData = sortTableData(tableData, {
            key,
            direction
          });
          setSortConfig({
            key,
            direction
          });
          setTableData(sortedData);
        }} onToggleRowSelection={id => {
          const newCheckedRows = new Set(checkedRows);
          if (newCheckedRows.has(id)) {
            newCheckedRows.delete(id);
          } else {
            newCheckedRows.add(id);
          }
          setCheckedRows(newCheckedRows);
        }} onToggleAllRowsSelection={() => {
          if (checkedRows.size === largeDataSet.length) {
            setCheckedRows(new Set());
          } else {
            const allRows = new Set(largeDataSet.map(item => item.id));
            setCheckedRows(allRows);
          }
        }} selectedRowIds={[...checkedRows]} sortingColumn={sortingColumn} sortingDirection={sortingDirection} />
        </div>
      </div>;
  },
  args: {
    selectable: true,
    renderRowActions
  }
}`,...(Bn=(Fn=at.parameters)==null?void 0:Fn.docs)==null?void 0:Bn.source}}};var In,qn,Un;st.parameters={...st.parameters,docs:{...(In=st.parameters)==null?void 0:In.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    return <div style={{
      width: '600px',
      height: '500px',
      border: '1px solid #ccc',
      padding: '16px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>
          Fixed Header + Horizontal Scroll: Both scrollbars visible when needed
        </h3>
        <div className="storybook-table-wrapper" style={{
        height: 'calc(100% - 50px)',
        position: 'relative'
      }}>
          <Table {...args} data={wideTableData} primaryColumn={wideTablePrimaryColumns} fixedColumns={wideTableFixedColumns} isHorizontallyScrollable isHeaderFixed />
        </div>
      </div>;
  },
  args: {
    selectable: false,
    renderRowActions
  }
}`,...(Un=(qn=st.parameters)==null?void 0:qn.docs)==null?void 0:Un.source}}};var Vn,Yn,Xn;rt.parameters={...rt.parameters,docs:{...(Vn=rt.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));
    return <div style={{
      width: '600px',
      height: '500px',
      border: '1px solid #ccc',
      padding: '16px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>
          Pinned Columns + Fixed Header: Name and Email pinned with vertical and horizontal
          scrolling
        </h3>
        <div className="storybook-table-wrapper" style={{
        width: '550px',
        height: 'calc(100% - 50px)',
        position: 'relative'
      }}>
          <Table {...args} data={wideTableData} primaryColumn={wideTablePrimaryColumns} fixedColumns={wideTableFixedColumns} isHorizontallyScrollable isHeaderFixed pinnedColumnKeys={['name', 'email', 'department']} onToggleRowSelection={id => {
          const newCheckedRows = new Set(checkedRows);
          if (newCheckedRows.has(id)) {
            newCheckedRows.delete(id);
          } else {
            newCheckedRows.add(id);
          }
          setCheckedRows(newCheckedRows);
        }} onToggleAllRowsSelection={() => {
          if (checkedRows.size === wideTableData.length) {
            setCheckedRows(new Set());
          } else {
            const allRows = new Set(wideTableData.map(item => item.id));
            setCheckedRows(allRows);
          }
        }} selectedRowIds={[...checkedRows]} />
        </div>
      </div>;
  },
  args: {
    selectable: true,
    renderRowActions
  }
}`,...(Xn=(Yn=rt.parameters)==null?void 0:Yn.docs)==null?void 0:Xn.source}}};var Gn,Jn,Kn;it.parameters={...it.parameters,docs:{...(Gn=it.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRows, setExpandedRows] = useState<Set<number | string>>(new Set([1]));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));
    const expandableData: RowData[] = [{
      id: 1,
      name: 'Anna Smith',
      age: 25,
      city: 'New York',
      department: 'Engineering',
      email: 'sam.johnson@example.com'
    }, {
      id: 2,
      name: 'Anna Smith',
      age: 32,
      city: 'San Francisco',
      department: 'Design',
      email: 'anna.smith@example.com'
    }, {
      id: 3,
      name: 'Mike Davis',
      age: 28,
      city: 'Los Angeles',
      department: 'Marketing',
      email: 'mike.davis@example.com'
    }, {
      id: 4,
      name: 'Sarah Wilson',
      age: 35,
      city: 'Chicago',
      department: 'Sales',
      email: 'sarah.wilson@example.com'
    }];
    const expandableFixedColumns: FixedColumn[] = [{
      key: 'age',
      header: 'Age',
      align: 'right',
      width: 80
    }, {
      key: 'department',
      header: 'Department',
      width: 100
    }, {
      key: 'city',
      header: 'City',
      width: 100
    }];
    const expandablePrimaryColumns: Column[] = [{
      key: 'name',
      header: 'Name'
    }];
    return <div style={{
      minWidth: '800px',
      maxWidth: '1300px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '16px',
        color: '#333'
      }}>
          Expandable Rows Example
        </h3>
        <p style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>
          Click the expand/collapse icons to view detailed information for each row. Rows can be
          expanded and collapsed independently.
        </p>
        <Table {...args} data={expandableData} primaryColumn={expandablePrimaryColumns} fixedColumns={expandableFixedColumns} isRowsExpandable={true} selectable={true} expandedRowIds={[...expandedRows]} setExpandedRowIds={setExpandedRows} onToggleRowExpansion={id => {
        const newExpandedRows = new Set(expandedRows);
        if (newExpandedRows.has(id)) {
          newExpandedRows.delete(id);
        } else {
          newExpandedRows.add(id);
        }
        setExpandedRows(newExpandedRows);
      }} onToggleAllRowsExpansion={() => {
        if (expandedRows.size === expandableData.length) {
          setExpandedRows(new Set());
        } else {
          const allRows = new Set(expandableData.map(item => item.id));
          setExpandedRows(allRows);
        }
      }} selectedRowIds={[...checkedRows]} onToggleRowSelection={id => {
        const newCheckedRows = new Set(checkedRows);
        if (newCheckedRows.has(id)) {
          newCheckedRows.delete(id);
        } else {
          newCheckedRows.add(id);
        }
        setCheckedRows(newCheckedRows);
      }} onToggleAllRowsSelection={() => {
        if (checkedRows.size === expandableData.length) {
          setCheckedRows(new Set());
        } else {
          const allRows = new Set(expandableData.map(item => item.id));
          setCheckedRows(allRows);
        }
      }} />
      </div>;
  },
  args: {
    selectable: true
  }
}`,...(Kn=(Jn=it.parameters)==null?void 0:Jn.docs)==null?void 0:Kn.source}}};var Qn,Zn,eo;lt.parameters={...lt.parameters,docs:{...(Qn=lt.parameters)==null?void 0:Qn.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRows, setExpandedRows] = useState<Set<number | string>>(new Set([1, 2, 3, 4]));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isAllExpandedByDefault, setIsAllExpandedByDefault] = useState<boolean>(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));
    const expandableData: RowData[] = [{
      id: 1,
      name: 'Anna Smith',
      age: 25,
      city: 'New York',
      department: 'Engineering',
      email: 'anna.smith@example.com'
    }, {
      id: 2,
      name: 'Mike Davis',
      age: 32,
      city: 'San Francisco',
      department: 'Design',
      email: 'mike.davis@example.com'
    }, {
      id: 3,
      name: 'Sarah Wilson',
      age: 28,
      city: 'Los Angeles',
      department: 'Marketing',
      email: 'sarah.wilson@example.com'
    }, {
      id: 4,
      name: 'John Brown',
      age: 35,
      city: 'Chicago',
      department: 'Sales',
      email: 'john.brown@example.com'
    }];
    const expandableFixedColumns: FixedColumn[] = [{
      key: 'age',
      header: 'Age',
      align: 'right',
      width: 80
    }, {
      key: 'department',
      header: 'Department',
      width: 120
    }, {
      key: 'city',
      header: 'City',
      width: 120
    }];
    const expandablePrimaryColumns: Column[] = [{
      key: 'name',
      header: 'Name'
    }];
    const expandAllTooltip = isAllExpandedByDefault ? 'Expanded by default' : 'Collapsed by default';
    return <div style={{
      minWidth: '800px',
      maxWidth: '1300px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '16px',
        color: '#333'
      }}>
          Expandable Rows with Default State
        </h3>
        <p style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>
          Demonstrates <strong>isAllExpandedByDefault</strong> and <strong>expandAllTooltip</strong>{' '}
          props. The expandAll icon shows the default state regardless of individual row states.
          Hover over the expandAll icon to see the tooltip.
        </p>
        <Table {...args} data={expandableData} primaryColumn={expandablePrimaryColumns} fixedColumns={expandableFixedColumns} isRowsExpandable={true} selectable={true} expandedRowIds={[...expandedRows]} isAllExpandedByDefault={isAllExpandedByDefault} expandAllTooltip={expandAllTooltip} onToggleRowExpansion={id => {
        const newExpandedRows = new Set(expandedRows);
        if (newExpandedRows.has(id)) {
          newExpandedRows.delete(id);
        } else {
          newExpandedRows.add(id);
        }
        setExpandedRows(newExpandedRows);
      }} onToggleAllRowsExpansion={() => {
        const newIsAllExpandedByDefault = !isAllExpandedByDefault;
        setIsAllExpandedByDefault(newIsAllExpandedByDefault);
        if (newIsAllExpandedByDefault) {
          setExpandedRows(new Set(expandableData.map(item => item.id)));
        } else {
          setExpandedRows(new Set());
        }
      }} selectedRowIds={[...checkedRows]} onToggleRowSelection={id => {
        const newCheckedRows = new Set(checkedRows);
        if (newCheckedRows.has(id)) {
          newCheckedRows.delete(id);
        } else {
          newCheckedRows.add(id);
        }
        setCheckedRows(newCheckedRows);
      }} onToggleAllRowsSelection={() => {
        if (checkedRows.size === expandableData.length) {
          setCheckedRows(new Set());
        } else {
          const allRows = new Set(expandableData.map(item => item.id));
          setCheckedRows(allRows);
        }
      }} />
      </div>;
  },
  args: {
    selectable: true
  }
}`,...(eo=(Zn=lt.parameters)==null?void 0:Zn.docs)==null?void 0:eo.source}}};var to,no,oo;dt.parameters={...dt.parameters,docs:{...(to=dt.parameters)==null?void 0:to.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRows, setExpandedRows] = useState<Set<number | string>>(new Set());
    return <div style={{
      width: '1000px',
      padding: '16px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '16px',
        color: '#333'
      }}>
          Row Content Expansion - Long Text Handling
        </h3>
        <p style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666',
        lineHeight: 1.5
      }}>
          <strong>Click the expand icon</strong> at the beginning of each row to expand/collapse ALL
          cells in that row. This example tests:
          <br />• Very long email addresses that should be ellipsed when collapsed
          <br />• Long text content that should wrap without breaking cell width constraints
          <br />• Proper word breaking for extremely long content
          <br />• Layout stability when transitioning between collapsed and expanded states
        </p>
        <div style={{
        border: '1px solid #e1e5e9',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
          <Table {...args} data={longTextData} primaryColumn={[{
          key: 'name',
          header: 'Full Name'
        }]} fixedColumns={longTextColumns} selectable={false} isRowsExpandable={true} expandedRowIds={[...expandedRows]} onToggleRowExpansion={id => {
          const newExpandedRows = new Set(expandedRows);
          if (newExpandedRows.has(id)) {
            newExpandedRows.delete(id);
          } else {
            newExpandedRows.add(id);
          }
          setExpandedRows(newExpandedRows);
        }} onToggleAllRowsExpansion={() => {
          if (expandedRows.size === longTextData.length) {
            setExpandedRows(new Set());
          } else {
            const allRows = new Set(longTextData.map(item => item.id));
            setExpandedRows(allRows);
          }
        }} />
        </div>
        <p style={{
        margin: '16px 0 0 0',
        fontSize: '12px',
        color: '#888',
        fontStyle: 'italic'
      }}>
          Test the table with your browser's developer tools at different widths to verify
          responsive behavior.
        </p>
      </div>;
  },
  args: {
    renderRowActions: undefined
  }
}`,...(oo=(no=dt.parameters)==null?void 0:no.docs)==null?void 0:oo.source}}};var ao,so,ro,io,lo;Ee.parameters={...Ee.parameters,docs:{...(ao=Ee.parameters)==null?void 0:ao.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRowsSmall, setExpandedRowsSmall] = useState<Set<number | string>>(new Set([1]));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRowsDefault, setExpandedRowsDefault] = useState<Set<number | string>>(new Set([5]));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRowsLarge, setExpandedRowsLarge] = useState<Set<number | string>>(new Set([9]));
    const createData = (idOffset: number, size?: 'small' | 'medium' | 'large'): RowData[] => [{
      id: idOffset + 1,
      name: 'Anna Smith',
      age: 25,
      city: 'New York',
      department: 'Engineering',
      rowConfigs: size ? {
        size
      } : undefined
    }, {
      id: idOffset + 2,
      name: 'John Doe with a very long name that should wrap when expanded and demonstrate how the row height increases to accommodate multiple lines of text content',
      age: 32,
      city: 'San Francisco Bay Area, California, United States of America',
      department: 'Design and User Experience Research Department',
      rowConfigs: size ? {
        size
      } : undefined
    }, {
      id: idOffset + 3,
      name: 'Mike Davis',
      age: 28,
      city: 'Los Angeles',
      department: 'Marketing',
      rowConfigs: size ? {
        size
      } : undefined
    }, {
      id: idOffset + 4,
      name: 'Sarah Elizabeth Wilson-Montgomery III with an exceptionally long hyphenated surname that demonstrates text wrapping behavior in expanded table rows when the content exceeds the available column width',
      age: 35,
      city: 'Chicago Metropolitan Area',
      department: 'Sales and Business Development International Operations',
      rowConfigs: size ? {
        size
      } : undefined
    }];
    const smallData = createData(0, 'small');
    const defaultData = createData(4);
    const largeData = createData(8, 'large');
    const columns: FixedColumn[] = [{
      key: 'age',
      header: 'Age',
      align: 'right',
      width: 80
    }, {
      key: 'department',
      header: 'Department',
      width: 120
    }, {
      key: 'city',
      header: 'City',
      width: 120
    }];
    const primaryColumn: Column[] = [{
      key: 'name',
      header: 'Name'
    }];
    const renderTable = (title: string, subtitle: string, rowData: RowData[], expandedRows: Set<number | string>, setExpandedRows: React.Dispatch<React.SetStateAction<Set<number | string>>>) => <div style={{
      marginBottom: '32px'
    }}>
        <h4 style={{
        margin: '0 0 4px 0',
        fontSize: '14px',
        color: '#333'
      }}>{title}</h4>
        <p style={{
        margin: '0 0 12px 0',
        fontSize: '12px',
        color: '#666'
      }}>{subtitle}</p>
        <Table {...args} data={rowData} primaryColumn={primaryColumn} fixedColumns={columns} isRowsExpandable={true} expandedRowIds={[...expandedRows]} onToggleRowExpansion={id => {
        const newExpandedRows = new Set(expandedRows);
        if (newExpandedRows.has(id)) {
          newExpandedRows.delete(id);
        } else {
          newExpandedRows.add(id);
        }
        setExpandedRows(newExpandedRows);
      }} onToggleAllRowsExpansion={() => {
        if (expandedRows.size === rowData.length) {
          setExpandedRows(new Set());
        } else {
          const allRows = new Set(rowData.map(item => item.id));
          setExpandedRows(allRows);
        }
      }} />
      </div>;
    return <div style={{
      minWidth: '800px',
      maxWidth: '1000px'
    }}>
        <h3 style={{
        margin: '0 0 24px 0',
        fontSize: '18px',
        color: '#333'
      }}>
          Row Sizes with Expand - Testing Jump Fix
        </h3>
        <p style={{
        margin: '0 0 24px 0',
        fontSize: '14px',
        color: '#666'
      }}>
          Test expand/collapse on each table size. The row height should NOT change when
          expanding/collapsing (unless content requires more space).
        </p>

        {renderTable('Small Rows (44px)', 'rowConfigs: { size: "small" }', smallData, expandedRowsSmall, setExpandedRowsSmall)}

        {renderTable('Default Rows (64px)', 'No rowConfigs specified', defaultData, expandedRowsDefault, setExpandedRowsDefault)}

        {renderTable('Large Rows (80px)', 'rowConfigs: { size: "large" }', largeData, expandedRowsLarge, setExpandedRowsLarge)}
      </div>;
  }
}`,...(ro=(so=Ee.parameters)==null?void 0:so.docs)==null?void 0:ro.source},description:{story:`Demonstrates all row sizes (small: 44px, default: 64px, large: 80px) with expandable content.
Useful for testing that row heights behave correctly when expanding/collapsing cells with long text.`,...(lo=(io=Ee.parameters)==null?void 0:io.docs)==null?void 0:lo.description}}};var co,uo,po,ho,mo;ze.parameters={...ze.parameters,docs:{...(co=ze.parameters)==null?void 0:co.docs,source:{originalSource:`{
  render: () => {
    const rowSizesColumns: Column[] = [{
      key: 'name',
      header: 'Name'
    }];
    const rowSizesFixedColumns: FixedColumn[] = [{
      key: 'status',
      header: 'Status',
      width: 100
    }, {
      key: 'description',
      header: 'Description',
      width: 250
    }];
    const smallRowsData = [{
      id: 1,
      name: 'Small Row 1',
      description: 'Compact row for dense tables',
      status: 'Active',
      rowConfigs: {
        size: 'small' as const
      }
    }, {
      id: 2,
      name: 'Small Row 2',
      description: 'Height: 44px',
      status: 'Active',
      rowConfigs: {
        size: 'small' as const
      }
    }];
    const defaultRowsData = [{
      id: 1,
      name: 'Default Row 1',
      description: 'Standard row size',
      status: 'Active'
    }, {
      id: 2,
      name: 'Default Row 2',
      description: 'Height: 64px (no rowConfigs needed)',
      status: 'Active'
    }];
    const largeRowsData = [{
      id: 1,
      name: 'Large Row 1',
      description: 'Prominent row for emphasis',
      status: 'Active',
      rowConfigs: {
        size: 'large' as const
      }
    }, {
      id: 2,
      name: 'Large Row 2',
      description: 'Height: 80px',
      status: 'Active',
      rowConfigs: {
        size: 'large' as const
      }
    }];
    return <div style={{
      minWidth: '600px'
    }}>
        <div style={{
        marginBottom: '32px'
      }}>
          <h4 style={{
          margin: '0 0 8px 0'
        }}>Small (44px)</h4>
          <code style={{
          display: 'block',
          marginBottom: '8px',
          color: '#666',
          fontSize: '12px'
        }}>
            rowConfigs: {'{ size: "small" }'}
          </code>
          <Table data={smallRowsData} primaryColumn={rowSizesColumns[0]} fixedColumns={rowSizesFixedColumns} selectable={false} />
        </div>

        <div style={{
        marginBottom: '32px'
      }}>
          <h4 style={{
          margin: '0 0 8px 0'
        }}>Default (64px)</h4>
          <code style={{
          display: 'block',
          marginBottom: '8px',
          color: '#666',
          fontSize: '12px'
        }}>
            No rowConfigs needed
          </code>
          <Table data={defaultRowsData} primaryColumn={rowSizesColumns[0]} fixedColumns={rowSizesFixedColumns} selectable={false} />
        </div>

        <div>
          <h4 style={{
          margin: '0 0 8px 0'
        }}>Large (80px)</h4>
          <code style={{
          display: 'block',
          marginBottom: '8px',
          color: '#666',
          fontSize: '12px'
        }}>
            rowConfigs: {'{ size: "large" }'}
          </code>
          <Table data={largeRowsData} primaryColumn={rowSizesColumns[0]} fixedColumns={rowSizesFixedColumns} selectable={false} />
        </div>
      </div>;
  }
}`,...(po=(uo=ze.parameters)==null?void 0:uo.docs)==null?void 0:po.source},description:{story:`Simple demonstration of row sizes without expand functionality.

Row sizes are configured via \`rowConfigs: { size: 'small' | 'medium' | 'large' }\` in each row data object.

Available sizes:
- **small**: 44px height - best for dense data tables
- **medium** (default): 64px height - standard table row
- **large**: 80px height - for tables with more visual prominence`,...(mo=(ho=ze.parameters)==null?void 0:ho.docs)==null?void 0:mo.description}}};var fo,go,wo,yo,xo;_e.parameters={..._e.parameters,docs:{...(fo=_e.parameters)==null?void 0:fo.docs,source:{originalSource:`{
  render: () => <CustomHeaderDemo />
}`,...(wo=(go=_e.parameters)==null?void 0:go.docs)==null?void 0:wo.source},description:{story:`Demonstrates how to customize the table header background color using CSS.

The Table component supports custom header styling via the \`headerClassName\` prop.
Pinned columns and expand cells will inherit the header background color automatically.

This is useful when you need to match the table header with your application's design,
for example, using a gray header on a white background or vice versa.`,...(xo=(yo=_e.parameters)==null?void 0:yo.docs)==null?void 0:xo.description}}};var bo,So,vo,Co,Ro;Ae.parameters={...Ae.parameters,docs:{...(bo=Ae.parameters)==null?void 0:bo.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    minWidth: '600px'
  }}>
      <h3 style={{
      margin: '0 0 16px 0',
      fontSize: '16px',
      color: '#333'
    }}>
        Resizable Columns (Default Constraints)
      </h3>
      <p style={{
      margin: '0 0 16px 0',
      fontSize: '14px',
      color: '#666'
    }}>
        Drag the column borders in the header to adjust widths. Default constraints:{' '}
        <code>minColumnWidth=50</code>, <code>maxColumnWidth=500</code>
      </p>
      <Table {...args} primaryColumn={primaryColumns} data={data} fixedColumns={fixedColumns} />
    </div>,
  args: {
    renderRowActions,
    isResizable: true
  }
}`,...(vo=(So=Ae.parameters)==null?void 0:So.docs)==null?void 0:vo.source},description:{story:`Demonstrates resizable columns with default constraints (min: 50px, max: 500px).

Users can drag the column borders in the header to adjust column widths.
Initial widths are taken from column.width property.`,...(Ro=(Co=Ae.parameters)==null?void 0:Co.docs)==null?void 0:Ro.description}}};var ko,Do,To,Eo,zo;je.parameters={...je.parameters,docs:{...(ko=je.parameters)==null?void 0:ko.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    minWidth: '600px'
  }}>
      <Table {...args} primaryColumn={primaryColumns} data={data} fixedColumns={fixedColumns} />
    </div>,
  args: {
    isResizable: true
  }
}`,...(To=(Do=je.parameters)==null?void 0:Do.docs)==null?void 0:To.source},description:{story:"Demonstrates resizable columns without row actions.",...(zo=(Eo=je.parameters)==null?void 0:Eo.docs)==null?void 0:zo.description}}};var _o,Ao,jo,Po,No;Pe.parameters={...Pe.parameters,docs:{...(_o=Pe.parameters)==null?void 0:_o.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    minWidth: '600px'
  }}>
      <h3 style={{
      margin: '0 0 16px 0',
      fontSize: '16px',
      color: '#333'
    }}>
        Resizable Columns (Custom Constraints)
      </h3>
      <p style={{
      margin: '0 0 16px 0',
      fontSize: '14px',
      color: '#666'
    }}>
        Columns can be resized between 80px and 300px. Custom constraints:{' '}
        <code>minColumnWidth=80</code>, <code>maxColumnWidth=300</code>
      </p>
      <Table {...args} primaryColumn={primaryColumns} data={data} fixedColumns={fixedColumns} />
    </div>,
  args: {
    renderRowActions,
    isResizable: true,
    minColumnWidth: 80,
    maxColumnWidth: 300
  }
}`,...(jo=(Ao=Pe.parameters)==null?void 0:Ao.docs)==null?void 0:jo.source},description:{story:`Demonstrates resizable columns with custom min/max constraints.

Columns can be resized between 80px and 300px.`,...(No=(Po=Pe.parameters)==null?void 0:Po.docs)==null?void 0:No.description}}};var Mo,Oo,Ho,Wo,Lo;Ne.parameters={...Ne.parameters,docs:{...(Mo=Ne.parameters)==null?void 0:Mo.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    width: '900px',
    height: '400px',
    border: '1px solid #ccc',
    padding: '16px'
  }}>
      <div style={{
      height: 'calc(100% - 16px)',
      position: 'relative'
    }}>
        <Table {...args} data={largeDataSet} primaryColumn={primaryColumns} fixedColumns={scrollableFixedColumns} />
      </div>
    </div>,
  args: {
    renderRowActions,
    isResizable: true,
    isHeaderFixed: true
  }
}`,...(Ho=(Oo=Ne.parameters)==null?void 0:Oo.docs)==null?void 0:Ho.source},description:{story:"Demonstrates resizable columns with fixed header.",...(Lo=(Wo=Ne.parameters)==null?void 0:Wo.docs)==null?void 0:Lo.description}}};var $o,Fo,Bo,Io,qo;Me.parameters={...Me.parameters,docs:{...($o=Me.parameters)==null?void 0:$o.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    width: '600px',
    height: '500px',
    border: '1px solid #ccc',
    padding: '16px'
  }}>
      <div style={{
      height: 'calc(100% - 16px)',
      position: 'relative'
    }}>
        <Table {...args} data={wideTableData} primaryColumn={wideTablePrimaryColumns} fixedColumns={wideTableFixedColumns} isHorizontallyScrollable isHeaderFixed />
      </div>
    </div>,
  args: {
    renderRowActions,
    isResizable: true
  }
}`,...(Bo=(Fo=Me.parameters)==null?void 0:Fo.docs)==null?void 0:Bo.source},description:{story:"Demonstrates resizable columns with horizontal scroll and fixed header.",...(qo=(Io=Me.parameters)==null?void 0:Io.docs)==null?void 0:qo.description}}};var Uo,Vo,Yo,Xo,Go;Oe.parameters={...Oe.parameters,docs:{...(Uo=Oe.parameters)==null?void 0:Uo.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    width: '900px',
    height: '500px',
    border: '1px solid #ccc',
    padding: '16px'
  }}>
      <div style={{
      height: 'calc(100% - 16px)',
      position: 'relative'
    }}>
        <Table {...args} data={largeDataSet} primaryColumn={primaryColumns} fixedColumns={scrollableFixedColumns} pinnedColumnKeys={['name', 'email']} isHorizontallyScrollable isHeaderFixed />
      </div>
    </div>,
  args: {
    renderRowActions,
    isResizable: true
  }
}`,...(Yo=(Vo=Oe.parameters)==null?void 0:Vo.docs)==null?void 0:Yo.source},description:{story:"Demonstrates resizable columns with pinned columns.",...(Go=(Xo=Oe.parameters)==null?void 0:Xo.docs)==null?void 0:Go.description}}};var Jo,Ko,Qo,Zo,ea;He.parameters={...He.parameters,docs:{...(Jo=He.parameters)==null?void 0:Jo.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortConfig, setSortConfig] = useState<SortConfig>({
      key: wideTablePrimaryColumns[0].key,
      direction: ASC
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingColumn, setSortingColumn] = useState<Column>(wideTablePrimaryColumns[0]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingDirection, setSortingDirection] = useState<SortingDirection>(ASC);
    // Generate more data for vertical scrolling demonstration
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const extendedWideTableData = useMemo(() => {
      const baseData = [...wideTableData];
      // Duplicate data to make table taller than container
      for (let i = 0; i < 3; i++) {
        baseData.push(...wideTableData.map(item => ({
          ...item,
          id: \`\${item.id}-copy-\${i + 1}\`
        })));
      }
      return baseData;
    }, []);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const defaultSortedData = sortTableData(extendedWideTableData, sortConfig);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tableData, setTableData] = useState(defaultSortedData);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const {
        key,
        direction
      } = sortConfig;
      const column = [...wideTableFixedColumns, ...wideTablePrimaryColumns].find(col => col.key === key);
      setSortingDirection(direction);
      setSortingColumn(column as Column);
    }, [sortConfig]);
    return <div style={{
      width: '800px',
      height: '600px',
      border: '1px solid #ccc',
      padding: '16px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0'
      }}>
          Table with Horizontal Scroll + Pinned Header (External Scroll Container)
        </h3>
        <p style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>
          This example demonstrates a pinned header that activates when scrolling in an external
          container. The table header pins to the top when the scroll position reaches it. Scroll
          vertically in the container to see the header pinning, and horizontally to see pinned
          columns and gradient effects.
        </p>
        <div ref={scrollContainerRef} style={{
        height: 'calc(100% - 100px)',
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'relative'
      }}>
          <div style={{
          padding: '16px',
          backgroundColor: '#f0f0f0',
          marginBottom: '16px'
        }}>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '16px'
          }}>Content Above Table</h4>
            <p style={{
            margin: '0',
            fontSize: '14px',
            color: '#666'
          }}>
              This content is inside the scrollable container. When you scroll down, this text will
              move up and disappear, but the table header will stick to the top.
            </p>
            <p style={{
            margin: '8px 0 0',
            fontSize: '14px',
            color: '#666'
          }}>
              Scroll down to see the header pinning effect. The table header will remain fixed at
              the top while this content scrolls away.
            </p>
          </div>
          <Table {...args} data={tableData} primaryColumn={wideTablePrimaryColumns} fixedColumns={wideTableFixedColumns} isHeaderFixed={true} isHorizontallyScrollable={true} pinnedColumnKeys={['name', 'email']} externalScrollContainerRef={scrollContainerRef} sortableColumns={[wideTablePrimaryColumns[0].key, 'department', 'status']} onChangeSorting={(sortConfigParam = sortConfig) => {
          let {
            direction
          } = sortConfigParam;
          const {
            key
          } = sortConfigParam;
          direction = toggleDirection(direction);
          const sortedData = sortTableData(tableData, {
            key,
            direction
          });
          setSortConfig({
            key,
            direction
          });
          setTableData(sortedData);
        }} onToggleRowSelection={id => {
          const newCheckedRows = new Set(checkedRows);
          if (newCheckedRows.has(id)) {
            newCheckedRows.delete(id);
          } else {
            newCheckedRows.add(id);
          }
          setCheckedRows(newCheckedRows);
        }} onToggleAllRowsSelection={() => {
          if (checkedRows.size === extendedWideTableData.length) {
            setCheckedRows(new Set());
          } else {
            const allRows = new Set(extendedWideTableData.map(item => item.id));
            setCheckedRows(allRows);
          }
        }} selectedRowIds={[...checkedRows]} sortingColumn={sortingColumn} sortingDirection={sortingDirection} />
        </div>
      </div>;
  },
  args: {
    selectable: true,
    renderRowActions
  }
}`,...(Qo=(Ko=He.parameters)==null?void 0:Ko.docs)==null?void 0:Qo.source},description:{story:`Demonstrates a table with pinned header when scrolling is handled by an external container.

This example shows:
- Horizontal scrolling when table content is wider than the container
- Pinned header that pins to the top when scrolling vertically in the external container
- Pinned columns that stay visible during horizontal scroll
- Gradient effects on pinned columns and right edge

Note: This is different from a fixed header with internal table scrolling. Here, the scroll
container is external (parent div), and the header pins when scrolling reaches the table top.

Scroll vertically in the external container to see the header pinning, and horizontally to see
pinned columns and gradients.`,...(ea=(Zo=He.parameters)==null?void 0:Zo.docs)==null?void 0:ea.description}}};var ta,na,oa,aa,sa;We.parameters={...We.parameters,docs:{...(ta=We.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedRows, setExpandedRows] = useState<Set<number | string>>(new Set([]));
    return <div style={{
      width: '600px',
      height: '500px',
      border: '1px solid #ccc',
      padding: '16px',
      paddingLeft: '48px'
    }}>
        <div style={{
        height: 'calc(100% - 16px)',
        position: 'relative'
      }}>
          <Table {...args} data={wideTableData} primaryColumn={wideTablePrimaryColumns} fixedColumns={wideTableFixedColumns} expandedRowIds={[...expandedRows]} selectedRowIds={[...checkedRows]} onToggleRowSelection={id => {
          const newCheckedRows = new Set(checkedRows);
          if (newCheckedRows.has(id)) {
            newCheckedRows.delete(id);
          } else {
            newCheckedRows.add(id);
          }
          setCheckedRows(newCheckedRows);
        }} onToggleAllRowsSelection={() => {
          if (checkedRows.size === wideTableData.length) {
            setCheckedRows(new Set());
          } else {
            const allRows = new Set(wideTableData.map(item => item.id));
            setCheckedRows(allRows);
          }
        }} onToggleRowExpansion={id => {
          const newExpandedRows = new Set(expandedRows);
          if (newExpandedRows.has(id)) {
            newExpandedRows.delete(id);
          } else {
            newExpandedRows.add(id);
          }
          setExpandedRows(newExpandedRows);
        }} onToggleAllRowsExpansion={() => {
          if (expandedRows.size === wideTableData.length) {
            setExpandedRows(new Set());
          } else {
            const allRows = new Set(wideTableData.map(item => item.id));
            setExpandedRows(allRows);
          }
        }} />
        </div>
      </div>;
  },
  args: {
    renderRowActions,
    isResizable: true,
    isHeaderFixed: true,
    isHorizontallyScrollable: true,
    pinnedColumnKeys: ['name', 'email'],
    selectable: true,
    isRowsExpandable: true,
    isCheckboxOutside: true
  }
}`,...(oa=(na=We.parameters)==null?void 0:na.docs)==null?void 0:oa.source},description:{story:"Demonstrates resizable columns with horizontal scroll and checkbox outside.",...(sa=(aa=We.parameters)==null?void 0:aa.docs)==null?void 0:sa.description}}};const li=["Default","SortDisabledColumnTooltips","FixedHeader","HorizontalScrollWithFixedHeaderControl","PinnedColumnsWithFixedHeader","ExpandableRows","ExpandableRowsWithDefaultState","CellExpansion","RowSizesWithExpand","RowSizes","CustomHeaderStyle","ResizableColumns","ResizableColumnsWithoutActions","ResizableColumnsWithConstraints","ResizableColumnsWithFixedHeader","ResizableColumnsWithHorizontalScroll","ResizableColumnsWithPinnedColumns","HorizontalScrollWithPinnedHeader","ResizableColumnsWithCheckboxOutside"];export{dt as CellExpansion,_e as CustomHeaderStyle,nt as Default,it as ExpandableRows,lt as ExpandableRowsWithDefaultState,at as FixedHeader,st as HorizontalScrollWithFixedHeaderControl,He as HorizontalScrollWithPinnedHeader,rt as PinnedColumnsWithFixedHeader,Ae as ResizableColumns,We as ResizableColumnsWithCheckboxOutside,Pe as ResizableColumnsWithConstraints,Ne as ResizableColumnsWithFixedHeader,Me as ResizableColumnsWithHorizontalScroll,Oe as ResizableColumnsWithPinnedColumns,je as ResizableColumnsWithoutActions,ze as RowSizes,Ee as RowSizesWithExpand,ot as SortDisabledColumnTooltips,li as __namedExportsOrder,ii as default};
