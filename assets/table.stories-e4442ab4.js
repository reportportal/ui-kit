import{j as r}from"./jsx-runtime-2f188e98.js";import{b as ja,r as p}from"./index-3553ef47.js";import{p as dt}from"./index-4c891f75.js";import{r as Wt}from"./index-d0bd1ed5.js";import{c as Pa}from"./clsx-9eb2d624.js";import{c as Lt}from"./bind-d8141dee.js";import{b as Na,a as bn,S as Ma}from"./resizeColumn-b3ee80ba.js";import{S as Sn}from"./chevronDownDropdown-69a9d5c1.js";import{C as Ke}from"./checkbox-168f7e30.js";import{T as Oa}from"./tooltip-bc5f21f4.js";import{i as Ha}from"./isEmpty-6ac0b123.js";import{P as Wa}from"./popover-79ca4f84.js";import{S as La}from"./meatballMenu-8b9878d9.js";import"./keyCodes-e5060420.js";import"./floating-ui.react-60d1f04e.js";import"./floating-ui.react-dom-a94e415a.js";import"./floatingUi-59569704.js";const ta=e=>typeof e=="string";var $t={exports:{}},Oe={},ct={exports:{}},na={};const $a=ja(Pa);var O={},Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.dontSetMe=Ua;Q.findInArray=Fa;Q.int=qa;Q.isFunction=Ba;Q.isNum=Ia;function Fa(e,t){for(let n=0,o=e.length;n<o;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function Ba(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function Ia(e){return typeof e=="number"&&!isNaN(e)}function qa(e){return parseInt(e,10)}function Ua(e,t,n){if(e[t])return new Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`)}var ue={};Object.defineProperty(ue,"__esModule",{value:!0});ue.browserPrefixToKey=aa;ue.browserPrefixToStyle=Ya;ue.default=void 0;ue.getPrefix=oa;const kt=["Moz","Webkit","O","ms"];function oa(){var n,o;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const t=(o=(n=window.document)==null?void 0:n.documentElement)==null?void 0:o.style;if(!t||e in t)return"";for(let a=0;a<kt.length;a++)if(aa(e,kt[a])in t)return kt[a];return""}function aa(e,t){return t?`${t}${Va(e)}`:e}function Ya(e,t){return t?`-${t.toLowerCase()}-${e}`:e}function Va(e){let t="",n=!0;for(let o=0;o<e.length;o++)n?(t+=e[o].toUpperCase(),n=!1):e[o]==="-"?n=!0:t+=e[o];return t}ue.default=oa();Object.defineProperty(O,"__esModule",{value:!0});O.addClassName=ia;O.addEvent=Ga;O.addUserSelectStyles=rs;O.createCSSTransform=ns;O.createSVGTransform=os;O.getTouch=as;O.getTouchIdentifier=ss;O.getTranslation=Ft;O.innerHeight=Za;O.innerWidth=es;O.matchesSelector=ra;O.matchesSelectorAndParentsTo=Xa;O.offsetXYFromParent=ts;O.outerHeight=Ja;O.outerWidth=Qa;O.removeClassName=la;O.removeEvent=Ka;O.scheduleRemoveUserSelectStyles=is;var V=Q,vn=sa(ue);function sa(e,t){if(typeof WeakMap=="function")var n=new WeakMap,o=new WeakMap;return(sa=function(a,s){if(!s&&a&&a.__esModule)return a;var i,u,d={__proto__:null,default:a};if(a===null||typeof a!="object"&&typeof a!="function")return d;if(i=s?o:n){if(i.has(a))return i.get(a);i.set(a,d)}for(const l in a)l!=="default"&&{}.hasOwnProperty.call(a,l)&&((u=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(a,l))&&(u.get||u.set)?i(d,l,u):d[l]=a[l]);return d})(e,t)}let Je="";function ra(e,t){return Je||(Je=(0,V.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,V.isFunction)(e[n])})),(0,V.isFunction)(e[Je])?e[Je](t):!1}function Xa(e,t,n){let o=e;do{if(ra(o,t))return!0;if(o===n)return!1;o=o.parentNode}while(o);return!1}function Ga(e,t,n,o){if(!e)return;const a={capture:!0,...o};e.addEventListener?e.addEventListener(t,n,a):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function Ka(e,t,n,o){if(!e)return;const a={capture:!0,...o};e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function Ja(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,V.int)(n.borderTopWidth),t+=(0,V.int)(n.borderBottomWidth),t}function Qa(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,V.int)(n.borderLeftWidth),t+=(0,V.int)(n.borderRightWidth),t}function Za(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,V.int)(n.paddingTop),t-=(0,V.int)(n.paddingBottom),t}function es(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,V.int)(n.paddingLeft),t-=(0,V.int)(n.paddingRight),t}function ts(e,t,n){const a=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),s=(e.clientX+t.scrollLeft-a.left)/n,i=(e.clientY+t.scrollTop-a.top)/n;return{x:s,y:i}}function ns(e,t){const n=Ft(e,t,"px");return{[(0,vn.browserPrefixToKey)("transform",vn.default)]:n}}function os(e,t){return Ft(e,t,"")}function Ft(e,t,n){let{x:o,y:a}=e,s=`translate(${o}${n},${a}${n})`;if(t){const i=`${typeof t.x=="string"?t.x:t.x+n}`,u=`${typeof t.y=="string"?t.y:t.y+n}`;s=`translate(${i}, ${u})`+s}return s}function as(e,t){return e.targetTouches&&(0,V.findInArray)(e.targetTouches,n=>t===n.identifier)||e.changedTouches&&(0,V.findInArray)(e.changedTouches,n=>t===n.identifier)}function ss(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function rs(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&ia(e.body,"react-draggable-transparent-selection")}function is(e){window.requestAnimationFrame?window.requestAnimationFrame(()=>{Cn(e)}):Cn(e)}function Cn(e){if(e)try{if(e.body&&la(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function ia(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp(`(?:^|\\s)${t}(?!\\S)`))||(e.className+=` ${t}`)}function la(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(`(?:^|\\s)${t}(?!\\S)`,"g"),"")}var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.canDragX=cs;Z.canDragY=us;Z.createCoreData=hs;Z.createDraggableData=ms;Z.getBoundPosition=ls;Z.getControlPosition=ps;Z.snapToGrid=ds;var Y=Q,pe=O;function ls(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:o}=e.props;o=typeof o=="string"?o:fs(o);const a=Bt(e);if(typeof o=="string"){const{ownerDocument:s}=a,i=s.defaultView;let u;if(o==="parent"?u=a.parentNode:u=a.getRootNode().querySelector(o),!(u instanceof i.HTMLElement))throw new Error('Bounds selector "'+o+'" could not find an element.');const d=u,l=i.getComputedStyle(a),h=i.getComputedStyle(d);o={left:-a.offsetLeft+(0,Y.int)(h.paddingLeft)+(0,Y.int)(l.marginLeft),top:-a.offsetTop+(0,Y.int)(h.paddingTop)+(0,Y.int)(l.marginTop),right:(0,pe.innerWidth)(d)-(0,pe.outerWidth)(a)-a.offsetLeft+(0,Y.int)(h.paddingRight)-(0,Y.int)(l.marginRight),bottom:(0,pe.innerHeight)(d)-(0,pe.outerHeight)(a)-a.offsetTop+(0,Y.int)(h.paddingBottom)-(0,Y.int)(l.marginBottom)}}return(0,Y.isNum)(o.right)&&(t=Math.min(t,o.right)),(0,Y.isNum)(o.bottom)&&(n=Math.min(n,o.bottom)),(0,Y.isNum)(o.left)&&(t=Math.max(t,o.left)),(0,Y.isNum)(o.top)&&(n=Math.max(n,o.top)),[t,n]}function ds(e,t,n){const o=Math.round(t/e[0])*e[0],a=Math.round(n/e[1])*e[1];return[o,a]}function cs(e){return e.props.axis==="both"||e.props.axis==="x"}function us(e){return e.props.axis==="both"||e.props.axis==="y"}function ps(e,t,n){const o=typeof t=="number"?(0,pe.getTouch)(e,t):null;if(typeof t=="number"&&!o)return null;const a=Bt(n),s=n.props.offsetParent||a.offsetParent||a.ownerDocument.body;return(0,pe.offsetXYFromParent)(o||e,s,n.props.scale)}function hs(e,t,n){const o=!(0,Y.isNum)(e.lastX),a=Bt(e);return o?{node:a,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:a,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function ms(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function fs(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Bt(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var ut={},pt={};Object.defineProperty(pt,"__esModule",{value:!0});pt.default=gs;function gs(){}Object.defineProperty(ut,"__esModule",{value:!0});ut.default=void 0;var Dt=da(p),F=It(dt),ws=It(Wt),$=O,re=Z,Tt=Q,Se=It(pt);function It(e){return e&&e.__esModule?e:{default:e}}function da(e,t){if(typeof WeakMap=="function")var n=new WeakMap,o=new WeakMap;return(da=function(a,s){if(!s&&a&&a.__esModule)return a;var i,u,d={__proto__:null,default:a};if(a===null||typeof a!="object"&&typeof a!="function")return d;if(i=s?o:n){if(i.has(a))return i.get(a);i.set(a,d)}for(const l in a)l!=="default"&&{}.hasOwnProperty.call(a,l)&&((u=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(a,l))&&(u.get||u.set)?i(d,l,u):d[l]=a[l]);return d})(e,t)}function B(e,t,n){return(t=xs(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xs(e){var t=ys(e,"string");return typeof t=="symbol"?t:t+""}function ys(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const K={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let ie=K.mouse,ht=class extends Dt.Component{constructor(){super(...arguments),B(this,"dragging",!1),B(this,"lastX",NaN),B(this,"lastY",NaN),B(this,"touchIdentifier",null),B(this,"mounted",!1),B(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:o}=n;if(this.props.disabled||!(t.target instanceof o.defaultView.Node)||this.props.handle&&!(0,$.matchesSelectorAndParentsTo)(t.target,this.props.handle,n)||this.props.cancel&&(0,$.matchesSelectorAndParentsTo)(t.target,this.props.cancel,n))return;t.type==="touchstart"&&!this.props.allowMobileScroll&&t.preventDefault();const a=(0,$.getTouchIdentifier)(t);this.touchIdentifier=a;const s=(0,re.getControlPosition)(t,a,this);if(s==null)return;const{x:i,y:u}=s,d=(0,re.createCoreData)(this,i,u);(0,Se.default)("DraggableCore: handleDragStart: %j",d),(0,Se.default)("calling",this.props.onStart),!(this.props.onStart(t,d)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,$.addUserSelectStyles)(o),this.dragging=!0,this.lastX=i,this.lastY=u,(0,$.addEvent)(o,ie.move,this.handleDrag),(0,$.addEvent)(o,ie.stop,this.handleDragStop))}),B(this,"handleDrag",t=>{const n=(0,re.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:o,y:a}=n;if(Array.isArray(this.props.grid)){let u=o-this.lastX,d=a-this.lastY;if([u,d]=(0,re.snapToGrid)(this.props.grid,u,d),!u&&!d)return;o=this.lastX+u,a=this.lastY+d}const s=(0,re.createCoreData)(this,o,a);if((0,Se.default)("DraggableCore: handleDrag: %j",s),this.props.onDrag(t,s)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const d=document.createEvent("MouseEvents");d.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(d)}return}this.lastX=o,this.lastY=a}),B(this,"handleDragStop",t=>{if(!this.dragging)return;const n=(0,re.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:o,y:a}=n;if(Array.isArray(this.props.grid)){let d=o-this.lastX||0,l=a-this.lastY||0;[d,l]=(0,re.snapToGrid)(this.props.grid,d,l),o=this.lastX+d,a=this.lastY+l}const s=(0,re.createCoreData)(this,o,a);if(this.props.onStop(t,s)===!1||this.mounted===!1)return!1;const u=this.findDOMNode();u&&this.props.enableUserSelectHack&&(0,$.scheduleRemoveUserSelectStyles)(u.ownerDocument),(0,Se.default)("DraggableCore: handleDragStop: %j",s),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,u&&((0,Se.default)("DraggableCore: Removing handlers"),(0,$.removeEvent)(u.ownerDocument,ie.move,this.handleDrag),(0,$.removeEvent)(u.ownerDocument,ie.stop,this.handleDragStop))}),B(this,"onMouseDown",t=>(ie=K.mouse,this.handleDragStart(t))),B(this,"onMouseUp",t=>(ie=K.mouse,this.handleDragStop(t))),B(this,"onTouchStart",t=>(ie=K.touch,this.handleDragStart(t))),B(this,"onTouchEnd",t=>(ie=K.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,$.addEvent)(t,K.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:n}=t;(0,$.removeEvent)(n,K.mouse.move,this.handleDrag),(0,$.removeEvent)(n,K.touch.move,this.handleDrag),(0,$.removeEvent)(n,K.mouse.stop,this.handleDragStop),(0,$.removeEvent)(n,K.touch.stop,this.handleDragStop),(0,$.removeEvent)(t,K.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,$.scheduleRemoveUserSelectStyles)(n)}}findDOMNode(){var t,n,o;return(t=this.props)!=null&&t.nodeRef?(o=(n=this.props)==null?void 0:n.nodeRef)==null?void 0:o.current:ws.default.findDOMNode(this)}render(){return Dt.cloneElement(Dt.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};ut.default=ht;B(ht,"displayName","DraggableCore");B(ht,"propTypes",{allowAnyClick:F.default.bool,allowMobileScroll:F.default.bool,children:F.default.node.isRequired,disabled:F.default.bool,enableUserSelectHack:F.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:F.default.arrayOf(F.default.number),handle:F.default.string,cancel:F.default.string,nodeRef:F.default.object,onStart:F.default.func,onDrag:F.default.func,onStop:F.default.func,onMouseDown:F.default.func,scale:F.default.number,className:Tt.dontSetMe,style:Tt.dontSetMe,transform:Tt.dontSetMe});B(ht,"defaultProps",{allowAnyClick:!1,allowMobileScroll:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return d.default}}),e.default=void 0;var t=f(p),n=h(dt),o=h(Wt),a=$a,s=O,i=Z,u=Q,d=h(ut),l=h(pt);function h(b){return b&&b.__esModule?b:{default:b}}function f(b,v){if(typeof WeakMap=="function")var k=new WeakMap,C=new WeakMap;return(f=function(R,z){if(!z&&R&&R.__esModule)return R;var W,L,_={__proto__:null,default:R};if(R===null||typeof R!="object"&&typeof R!="function")return _;if(W=z?C:k){if(W.has(R))return W.get(R);W.set(R,_)}for(const U in R)U!=="default"&&{}.hasOwnProperty.call(R,U)&&((L=(W=Object.defineProperty)&&Object.getOwnPropertyDescriptor(R,U))&&(L.get||L.set)?W(_,U,L):_[U]=R[U]);return _})(b,v)}function m(){return m=Object.assign?Object.assign.bind():function(b){for(var v=1;v<arguments.length;v++){var k=arguments[v];for(var C in k)({}).hasOwnProperty.call(k,C)&&(b[C]=k[C])}return b},m.apply(null,arguments)}function g(b,v,k){return(v=S(v))in b?Object.defineProperty(b,v,{value:k,enumerable:!0,configurable:!0,writable:!0}):b[v]=k,b}function S(b){var v=w(b,"string");return typeof v=="symbol"?v:v+""}function w(b,v){if(typeof b!="object"||!b)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var C=k.call(b,v||"default");if(typeof C!="object")return C;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(b)}class T extends t.Component{static getDerivedStateFromProps(v,k){let{position:C}=v,{prevPropsPosition:R}=k;return C&&(!R||C.x!==R.x||C.y!==R.y)?((0,l.default)("Draggable: getDerivedStateFromProps %j",{position:C,prevPropsPosition:R}),{x:C.x,y:C.y,prevPropsPosition:{...C}}):null}constructor(v){super(v),g(this,"onDragStart",(k,C)=>{if((0,l.default)("Draggable: onDragStart: %j",C),this.props.onStart(k,(0,i.createDraggableData)(this,C))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),g(this,"onDrag",(k,C)=>{if(!this.state.dragging)return!1;(0,l.default)("Draggable: onDrag: %j",C);const R=(0,i.createDraggableData)(this,C),z={x:R.x,y:R.y,slackX:0,slackY:0};if(this.props.bounds){const{x:L,y:_}=z;z.x+=this.state.slackX,z.y+=this.state.slackY;const[U,We]=(0,i.getBoundPosition)(this,z.x,z.y);z.x=U,z.y=We,z.slackX=this.state.slackX+(L-z.x),z.slackY=this.state.slackY+(_-z.y),R.x=z.x,R.y=z.y,R.deltaX=z.x-this.state.x,R.deltaY=z.y-this.state.y}if(this.props.onDrag(k,R)===!1)return!1;this.setState(z)}),g(this,"onDragStop",(k,C)=>{if(!this.state.dragging||this.props.onStop(k,(0,i.createDraggableData)(this,C))===!1)return!1;(0,l.default)("Draggable: onDragStop: %j",C);const z={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:L,y:_}=this.props.position;z.x=L,z.y=_}this.setState(z)}),this.state={dragging:!1,dragged:!1,x:v.position?v.position.x:v.defaultPosition.x,y:v.position?v.position.y:v.defaultPosition.y,prevPropsPosition:{...v.position},slackX:0,slackY:0,isElementSVG:!1},v.position&&!(v.onDrag||v.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.state.dragging&&this.setState({dragging:!1})}findDOMNode(){var v,k;return((k=(v=this.props)==null?void 0:v.nodeRef)==null?void 0:k.current)??o.default.findDOMNode(this)}render(){const{axis:v,bounds:k,children:C,defaultPosition:R,defaultClassName:z,defaultClassNameDragging:W,defaultClassNameDragged:L,position:_,positionOffset:U,scale:We,...ft}=this.props;let Le={},$e=null;const j=!!!_||this.state.dragging,we=_||R,Fe={x:(0,i.canDragX)(this)&&j?this.state.x:we.x,y:(0,i.canDragY)(this)&&j?this.state.y:we.y};this.state.isElementSVG?$e=(0,s.createSVGTransform)(Fe,U):Le=(0,s.createCSSTransform)(Fe,U);const gt=(0,a.clsx)(C.props.className||"",z,{[W]:this.state.dragging,[L]:this.state.dragged});return t.createElement(d.default,m({},ft,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(C),{className:gt,style:{...C.props.style,...Le},transform:$e}))}}e.default=T,g(T,"displayName","Draggable"),g(T,"propTypes",{...d.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:u.dontSetMe,style:u.dontSetMe,transform:u.dontSetMe}),g(T,"defaultProps",{...d.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(na);const{default:ca,DraggableCore:bs}=na;ct.exports=ca;ct.exports.default=ca;ct.exports.DraggableCore=bs;var Ss=ct.exports,qt={};qt.__esModule=!0;qt.cloneElement=Ts;var vs=Cs(p);function Cs(e){return e&&e.__esModule?e:{default:e}}function Rn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function kn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rn(Object(n),!0).forEach(function(o){Rs(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rn(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Rs(e,t,n){return t=ks(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ks(e){var t=Ds(e,"string");return typeof t=="symbol"?t:String(t)}function Ds(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ts(e,t){return t.style&&e.props.style&&(t.style=kn(kn({},e.props.style),t.style)),t.className&&e.props.className&&(t.className=e.props.className+" "+t.className),vs.default.cloneElement(e,t)}var He={};He.__esModule=!0;He.resizableProps=void 0;var D=Es(dt);function Es(e){return e&&e.__esModule?e:{default:e}}var zs={axis:D.default.oneOf(["both","x","y","none"]),className:D.default.string,children:D.default.element.isRequired,draggableOpts:D.default.shape({allowAnyClick:D.default.bool,cancel:D.default.string,children:D.default.node,disabled:D.default.bool,enableUserSelectHack:D.default.bool,offsetParent:D.default.node,grid:D.default.arrayOf(D.default.number),handle:D.default.string,nodeRef:D.default.object,onStart:D.default.func,onDrag:D.default.func,onStop:D.default.func,onMouseDown:D.default.func,scale:D.default.number}),height:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var a=n[0];if(a.axis==="both"||a.axis==="y"){var s;return(s=D.default.number).isRequired.apply(s,n)}return D.default.number.apply(D.default,n)},handle:D.default.oneOfType([D.default.node,D.default.func]),handleSize:D.default.arrayOf(D.default.number),lockAspectRatio:D.default.bool,maxConstraints:D.default.arrayOf(D.default.number),minConstraints:D.default.arrayOf(D.default.number),onResizeStop:D.default.func,onResizeStart:D.default.func,onResize:D.default.func,resizeHandles:D.default.arrayOf(D.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:D.default.number,width:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var a=n[0];if(a.axis==="both"||a.axis==="x"){var s;return(s=D.default.number).isRequired.apply(s,n)}return D.default.number.apply(D.default,n)}};He.resizableProps=zs;Oe.__esModule=!0;Oe.default=void 0;var ve=Ns(p),_s=Ss,As=qt,js=He,Ps=["children","className","draggableOpts","width","height","handle","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"];function ua(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(ua=function(a){return a?n:t})(e)}function Ns(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=ua(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var i=a?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(o,s,i):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o}function Pt(){return Pt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Pt.apply(this,arguments)}function Ms(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Dn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Et(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dn(Object(n),!0).forEach(function(o){Os(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dn(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Os(e,t,n){return t=Hs(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hs(e){var t=Ws(e,"string");return typeof t=="symbol"?t:String(t)}function Ws(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ls(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Nt(e,t)}function Nt(e,t){return Nt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},Nt(e,t)}var Ut=function(e){Ls(t,e);function t(){for(var o,a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return o=e.call.apply(e,[this].concat(s))||this,o.handleRefs={},o.lastHandleRect=null,o.slack=null,o}var n=t.prototype;return n.componentWillUnmount=function(){this.resetData()},n.resetData=function(){this.lastHandleRect=this.slack=null},n.runConstraints=function(a,s){var i=this.props,u=i.minConstraints,d=i.maxConstraints,l=i.lockAspectRatio;if(!u&&!d&&!l)return[a,s];if(l){var h=this.props.width/this.props.height,f=a-this.props.width,m=s-this.props.height;Math.abs(f)>Math.abs(m*h)?s=a/h:a=s*h}var g=a,S=s,w=this.slack||[0,0],T=w[0],b=w[1];return a+=T,s+=b,u&&(a=Math.max(u[0],a),s=Math.max(u[1],s)),d&&(a=Math.min(d[0],a),s=Math.min(d[1],s)),this.slack=[T+(g-a),b+(S-s)],[a,s]},n.resizeHandler=function(a,s){var i=this;return function(u,d){var l=d.node,h=d.deltaX,f=d.deltaY;a==="onResizeStart"&&i.resetData();var m=(i.props.axis==="both"||i.props.axis==="x")&&s!=="n"&&s!=="s",g=(i.props.axis==="both"||i.props.axis==="y")&&s!=="e"&&s!=="w";if(!(!m&&!g)){var S=s[0],w=s[s.length-1],T=l.getBoundingClientRect();if(i.lastHandleRect!=null){if(w==="w"){var b=T.left-i.lastHandleRect.left;h+=b}if(S==="n"){var v=T.top-i.lastHandleRect.top;f+=v}}i.lastHandleRect=T,w==="w"&&(h=-h),S==="n"&&(f=-f);var k=i.props.width+(m?h/i.props.transformScale:0),C=i.props.height+(g?f/i.props.transformScale:0),R=i.runConstraints(k,C);k=R[0],C=R[1];var z=k!==i.props.width||C!==i.props.height,W=typeof i.props[a]=="function"?i.props[a]:null,L=a==="onResize"&&!z;W&&!L&&(u.persist==null||u.persist(),W(u,{node:l,size:{width:k,height:C},handle:s})),a==="onResizeStop"&&i.resetData()}}},n.renderResizeHandle=function(a,s){var i=this.props.handle;if(!i)return ve.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+a,ref:s});if(typeof i=="function")return i(a,s);var u=typeof i.type=="string",d=Et({ref:s},u?{}:{handleAxis:a});return ve.cloneElement(i,d)},n.render=function(){var a=this,s=this.props,i=s.children,u=s.className,d=s.draggableOpts;s.width,s.height,s.handle,s.handleSize,s.lockAspectRatio,s.axis,s.minConstraints,s.maxConstraints,s.onResize,s.onResizeStop,s.onResizeStart;var l=s.resizeHandles;s.transformScale;var h=Ms(s,Ps);return(0,As.cloneElement)(i,Et(Et({},h),{},{className:(u?u+" ":"")+"react-resizable",children:[].concat(i.props.children,l.map(function(f){var m,g=(m=a.handleRefs[f])!=null?m:a.handleRefs[f]=ve.createRef();return ve.createElement(_s.DraggableCore,Pt({},d,{nodeRef:g,key:"resizableHandle-"+f,onStop:a.resizeHandler("onResizeStop",f),onStart:a.resizeHandler("onResizeStart",f),onDrag:a.resizeHandler("onResize",f)}),a.renderResizeHandle(f,g))}))}))},t}(ve.Component);Oe.default=Ut;Ut.propTypes=js.resizableProps;Ut.defaultProps={axis:"both",handleSize:[20,20],lockAspectRatio:!1,minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1};var mt={};mt.__esModule=!0;mt.default=void 0;var zt=qs(p),$s=pa(dt),Fs=pa(Oe),Bs=He,Is=["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles","style","transformScale"];function pa(e){return e&&e.__esModule?e:{default:e}}function ha(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(ha=function(a){return a?n:t})(e)}function qs(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=ha(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var i=a?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(o,s,i):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o}function Mt(){return Mt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Mt.apply(this,arguments)}function Tn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tn(Object(n),!0).forEach(function(o){Us(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tn(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Us(e,t,n){return t=Ys(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ys(e){var t=Vs(e,"string");return typeof t=="symbol"?t:String(t)}function Vs(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xs(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Gs(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ot(e,t)}function Ot(e,t){return Ot=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},Ot(e,t)}var ma=function(e){Gs(t,e);function t(){for(var o,a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return o=e.call.apply(e,[this].concat(s))||this,o.state={width:o.props.width,height:o.props.height,propsWidth:o.props.width,propsHeight:o.props.height},o.onResize=function(u,d){var l=d.size;o.props.onResize?(u.persist==null||u.persist(),o.setState(l,function(){return o.props.onResize&&o.props.onResize(u,d)})):o.setState(l)},o}t.getDerivedStateFromProps=function(a,s){return s.propsWidth!==a.width||s.propsHeight!==a.height?{width:a.width,height:a.height,propsWidth:a.width,propsHeight:a.height}:null};var n=t.prototype;return n.render=function(){var a=this.props,s=a.handle,i=a.handleSize;a.onResize;var u=a.onResizeStart,d=a.onResizeStop,l=a.draggableOpts,h=a.minConstraints,f=a.maxConstraints,m=a.lockAspectRatio,g=a.axis;a.width,a.height;var S=a.resizeHandles,w=a.style,T=a.transformScale,b=Xs(a,Is);return zt.createElement(Fs.default,{axis:g,draggableOpts:l,handle:s,handleSize:i,height:this.state.height,lockAspectRatio:m,maxConstraints:f,minConstraints:h,onResizeStart:u,onResize:this.onResize,onResizeStop:d,resizeHandles:S,transformScale:T,width:this.state.width},zt.createElement("div",Mt({},b,{style:rt(rt({},w),{},{width:this.state.width+"px",height:this.state.height+"px"})})))},t}(zt.Component);mt.default=ma;ma.propTypes=rt(rt({},Bs.resizableProps),{},{children:$s.default.element});$t.exports=function(){throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")};var Ks=$t.exports.Resizable=Oe.default;$t.exports.ResizableBox=mt.default;const Js="_table_1rtld_1",Qs="_resizable_1rtld_67",Zs="_selectable_1rtld_84",er="_expanded_1rtld_80",tr="_label_1rtld_353",nr={table:Js,"fixed-header":"_fixed-header_1rtld_10","external-scroll-container":"_external-scroll-container_1rtld_14","horizontally-scrollable-container":"_horizontally-scrollable-container_1rtld_21","table-header":"_table-header_1rtld_26","sticky-header":"_sticky-header_1rtld_34","pinned-header":"_pinned-header_1rtld_44","horizontally-scrollable":"_horizontally-scrollable_1rtld_21",resizable:Qs,"resizable-column":"_resizable-column_1rtld_67","table-row":"_table-row_1rtld_75","expanded-cell":"_expanded-cell_1rtld_80",selectable:Zs,"row-content-wrapper":"_row-content-wrapper_1rtld_88","pinned-column":"_pinned-column_1rtld_96","has-scroll":"_has-scroll_1rtld_96","table-row-content":"_table-row-content_1rtld_99","expand-cell":"_expand-cell_1rtld_116","left-border-accent":"_left-border-accent_1rtld_119","size-small":"_size-small_1rtld_129","size-large":"_size-large_1rtld_140","table-body":"_table-body_1rtld_152","scrollable-body":"_scrollable-body_1rtld_158","table-header-cell":"_table-header-cell_1rtld_222","table-cell":"_table-cell_1rtld_223","action-menu-cell":"_action-menu-cell_1rtld_229","checkbox-cell":"_checkbox-cell_1rtld_257","expand-all-tooltip-wrapper":"_expand-all-tooltip-wrapper_1rtld_302","expand-all-tooltip-content":"_expand-all-tooltip-content_1rtld_311","expand-icon":"_expand-icon_1rtld_320",expanded:er,"primary-cell":"_primary-cell_1rtld_329",label:tr,"sortable-cell":"_sortable-cell_1rtld_367","align-right":"_align-right_1rtld_370","align-center":"_align-center_1rtld_376","table-wrapper":"_table-wrapper_1rtld_430","checkbox-column":"_checkbox-column_1rtld_442","checkbox-header":"_checkbox-header_1rtld_454","checkbox-body":"_checkbox-body_1rtld_478","checkbox-row":"_checkbox-row_1rtld_485"},ne="asc",or="desc",me=32,fa=100,ar=48,Ht=48,it=e=>e.toLowerCase()===ne,fe=(e,t)=>t?[...e].sort((n,o)=>{const a=n[t.key].content||n[t.key],s=o[t.key].content||o[t.key];return a<s?it(t.direction)?-1:1:a>s?it(t.direction)?1:-1:0}):e,sr=e=>e.map(t=>t.key),Yt=e=>it(e)?or:ne,ce=e=>"primary"in e&&e.primary===!0,En=e=>{var n;return`size-${((n=e.rowConfigs)==null?void 0:n.size)??"default"}`},_t=e=>ta(e)?e:`${e}px`,rr=(e,t,n,o,a,s=!1)=>{let i=0;o&&(i+=me),a&&!s&&(i+=me);for(let u=0;u<e;u++){const d=t[u];if(ce(d)){const l=n.current.get(d.key)||fa;i+=l}else{const l=d,h=ta(l.width)?parseInt(l.width,10)||0:l.width;i+=h}}return i},Qe=(e,t,n,o,a,s,i,u=!1)=>{const d={};if(!ce(e)){const l=e;d.textAlign=l.align}if(t&&n!==void 0){const l=rr(n,o,a,s,i,u);d.left=`${l}px`}return d},zn=(e,t,n,o,a,s=!1,i,u=!1,d=!1)=>{const l=[];n&&l.push(`${me}px`),s&&o&&!d&&l.push(`${me}px`);const h=f=>{if((i==null?void 0:i[f.key])!==void 0){l.push(`${i[f.key]}px`);return}if(ce(f)){const m=f;if(u&&m.width){l.push(_t(m.width));return}const g=m.width?_t(m.width):`${fa}px`;l.push(`minmax(${g}, 1fr)`)}else{const g=_t(f.width);l.push(g)}};return e.forEach(h),t.forEach(h),a&&l.push(`${ar}px`),l.join(" ")},ir=({primaryColumns:e,fixedColumns:t,pinnedColumnKeys:n})=>p.useMemo(()=>{const o=[],a=[];return e.forEach(s=>{const i={...s,primary:!0};n.includes(s.key)?o.push(i):a.push(i)}),t.forEach(s=>{n.includes(s.key)?o.push(s):a.push(s)}),{pinnedColumns:o,scrollableColumns:a}},[e,t,n]),lr=()=>{const[e,t]=p.useState(null),[n,o]=p.useState(null),a=p.useCallback(d=>{t(d)},[]),s=p.useCallback(()=>{t(null)},[]),i=p.useCallback(d=>{o(d)},[]),u=p.useCallback(()=>{o(null)},[]);return{hoveredColumn:e,hoveredRow:n,handleColumnMouseEnter:a,handleColumnMouseLeave:s,handleRowMouseEnter:i,handleRowMouseLeave:u}},dr=({primaryColumns:e,fixedColumns:t,expandedRowIds:n,onToggleRowExpansion:o})=>{const[a,s]=p.useState(new Set);p.useEffect(()=>{const d=[...e.map(h=>h.key),...t.map(h=>h.key)],l=new Set;n.forEach(h=>{d.forEach(f=>{l.add(`${h}-${f}`)})}),s(h=>{if(h.size===l.size){let f=!0;if(h.forEach(m=>{l.has(m)||(f=!1)}),f)return h}return l})},[n,e,t]);const i=p.useCallback(d=>{const l=new Set(a),h=n.includes(d),f=[...e.map(m=>m.key),...t.map(m=>m.key)];h?f.forEach(m=>{const g=`${d}-${m}`;l.delete(g)}):f.forEach(m=>{const g=`${d}-${m}`;l.add(g)}),s(l),o(d)},[a,n,e,t,o]),u=p.useCallback((d,l)=>{const h=`${d}-${l}`;return a.has(h)},[a]);return{expandedCells:a,handleToggleRowExpansion:i,isCellExpanded:u}},cr=()=>{const e=p.useRef(new Map),t=p.useCallback(n=>o=>{if(!o)return;const a=o.getBoundingClientRect().width;a>0&&e.current.set(n,a)},[]);return{columnWidthsRef:e,setCellRef:t}},ur=({enabled:e=!1,minWidth:t=50,maxWidth:n=500,columnWidthsRef:o,onColumnResize:a})=>{const[s,i]=p.useState({}),u=p.useCallback(()=>{if(!e||Object.keys(s).length>0||!o)return;const h={};o.current.forEach((f,m)=>{h[m]=f}),i(h)},[e,s,o]),d=p.useCallback(h=>(f,{size:m})=>{if(!e)return;const g=Math.min(n,Math.max(t,m.width));i(S=>({...S,[h]:g}))},[e,t,n]),l=p.useCallback(h=>()=>{!e||!s[h]||a==null||a(h,s[h])},[e,s,a]);return{columnWidths:s,handleResize:d,handleResizeStop:l,handleResizeStart:u}},pr=(e,t,n,o,a,s,i,u)=>p.useMemo(()=>{if(!e)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};if(!(a+e.clientWidth<i))return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const l=e.getBoundingClientRect(),h=(t==null?void 0:t.offsetHeight)||0,f=n==null?void 0:n.getBoundingClientRect(),m=Math.min(l.bottom,(f==null?void 0:f.bottom)||Number.MAX_SAFE_INTEGER);let g;o&&n&&f?g=f.top-l.top+h:g=h;const S=l.top+g,T=e.scrollWidth>e.clientWidth?e.offsetHeight-e.clientHeight:0,b=m-S-T,k=e.scrollHeight>e.clientHeight?e.offsetWidth-e.clientWidth:0,C=l.right-Ht-k;return{visible:!0,position:{top:S,left:C},size:{width:Ht,height:b}}},[e,t,n,o,a,s,i,u]),hr=(e,t,n,o,a,s,i,u)=>p.useMemo(()=>{if(!e)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};if(!(t>0))return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const l=e.querySelector('[data-row-index="0"]');if(!l)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const h=Array.from(l.querySelectorAll("[data-pinned-index]"));if(h.length===0)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const f=Math.max(...h.map(L=>parseInt(L.getAttribute("data-pinned-index")||"-1",10)));if(f<0)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const m=h.find(L=>parseInt(L.getAttribute("data-pinned-index")||"-1",10)===f);if(!m)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const g=m.getBoundingClientRect(),S=e.getBoundingClientRect(),w=(n==null?void 0:n.offsetHeight)||0,T=o==null?void 0:o.getBoundingClientRect(),b=g.right,v=Math.min(S.bottom,(T==null?void 0:T.bottom)||Number.MAX_SAFE_INTEGER);let k;a&&o&&T?k=T.top-S.top+w:k=w;const C=S.top+k,z=e.scrollWidth>e.clientWidth?e.offsetHeight-e.clientHeight:0,W=v-C-z;return{visible:!0,position:{top:C,left:b},size:{width:Ht,height:W}}},[e,t,n,o,a,s,i,u]),mr=({enabled:e,rowCount:t})=>{const n=p.useRef(new Map),o=p.useRef(new Map),a=p.useCallback(d=>l=>{l?n.current.set(d,l):n.current.delete(d)},[]),s=p.useCallback(d=>l=>{l?o.current.set(d,l):o.current.delete(d)},[]),i=p.useCallback((d,l)=>{const h=`${d.offsetHeight}px`;l.style.height!==h&&(l.style.height=h)},[]),u=p.useCallback(()=>{n.current.forEach((d,l)=>{const h=o.current.get(l);h&&i(d,h)})},[i]);return p.useEffect(()=>{if(!e)return;const d=new ResizeObserver(l=>{requestAnimationFrame(()=>{l.forEach(h=>{const f=h.target,m=parseInt(f.dataset.rowIndex||"-1",10),g=o.current.get(m);g&&m>=0&&i(f,g)})})});return n.current.forEach(l=>d.observe(l)),()=>d.disconnect()},[e,t,i]),p.useLayoutEffect(()=>{e&&u()},[e,t,u]),{setTableRowRef:a,setCheckboxRowRef:s,syncAllHeights:u}},fr={"resize-handle":"_resize-handle_15uk3_1"},gr=Lt.bind(fr),ga=p.forwardRef((e,t)=>r.jsx("div",{ref:t,className:gr("resize-handle"),...e,children:r.jsx(Na,{})}));ga.__docgenInfo={description:"",methods:[],displayName:"ResizeHandle"};const wr={"gradient-overlay":"_gradient-overlay_hx7m8_1","direction-right":"_direction-right_hx7m8_5","direction-left":"_direction-left_hx7m8_13"},xr=Lt.bind(wr),_n=({portalContainer:e,visible:t,position:n,size:o,direction:a,className:s,dataTestId:i})=>{if(!t||!e)return null;const u={position:"fixed",top:`${n.top}px`,width:`${o.width}px`,height:`${o.height}px`};return n.left!==void 0&&(u.left=`${n.left}px`),n.right!==void 0&&(u.right=`${n.right}px`),Wt.createPortal(r.jsx("div",{className:xr("gradient-overlay",`direction-${a}`,s),style:u,"data-gradient-type":i}),e)},E=Lt.bind(nr),An=({column:e})=>{const t=p.useRef(null),[n,o]=p.useState(!1);return p.useEffect(()=>{if(t.current){const a=t.current.offsetWidth,s=t.current.scrollWidth;o(s>a)}},[e.header]),r.jsx("span",{ref:t,title:n?e.header:void 0,children:e.header})},M=({data:e,primaryColumn:t,fixedColumns:n,renderRowActions:o,className:a="",wrapperClassName:s="",rowClassName:i="",headerClassName:u="",bodyClassName:d="",selectable:l=!1,selectedRowIds:h=[],sortingDirection:f=ne,sortingColumn:m,sortableColumns:g,isHeaderFixed:S=!1,isHorizontallyScrollable:w=!1,pinnedColumnKeys:T=[],isRowsExpandable:b=!1,expandedRowIds:v=[],isAllExpandedByDefault:k,expandAllTooltip:C,isResizable:R=!1,minColumnWidth:z=50,maxColumnWidth:W=500,isSelectAllCheckboxAlwaysVisible:L=!1,isCheckboxOutside:_=!1,onChangeSorting:U=()=>{},onToggleRowSelection:We=()=>{},onToggleAllRowsSelection:ft=()=>{},onToggleRowExpansion:Le=()=>{},onToggleAllRowsExpansion:$e=()=>{},onColumnResize:Vt=()=>{},externalScrollContainerRef:j,portalContainer:we=typeof document<"u"?document.body:null,rightGradientClassName:Fe,pinnedGradientClassName:gt})=>{const Be=p.useMemo(()=>Array.isArray(t)?t:[t],[t]),ee=m??Be[0],Ie=g??sr([...Be,...n]),{pinnedColumns:oe,scrollableColumns:qe}=ir({primaryColumns:Be,fixedColumns:n,pinnedColumnKeys:T}),{hoveredColumn:Xt,hoveredRow:Gt,handleColumnMouseEnter:Kt,handleColumnMouseLeave:Jt,handleRowMouseEnter:Qt,handleRowMouseLeave:Zt}=lr(),{columnWidthsRef:xe,setCellRef:en}=cr(),{handleToggleRowExpansion:wa,isCellExpanded:tn}=dr({primaryColumns:Be,fixedColumns:n,expandedRowIds:v,onToggleRowExpansion:Le}),{columnWidths:Ue,handleResize:xa,handleResizeStop:ya,handleResizeStart:ba}=ur({enabled:R,minWidth:z,maxWidth:W,columnWidthsRef:xe,onColumnResize:Vt}),{setTableRowRef:Sa,setCheckboxRowRef:va}=mr({enabled:l&&_,rowCount:e.length}),nn=(c,y)=>r.jsx(Ks,{width:Ue[c.key]??(typeof c.width=="number"?c.width:z),height:0,axis:"x",handle:r.jsx(ga,{}),onResizeStart:ba,onResize:xa(c.key),onResizeStop:ya(c.key),minConstraints:[z,0],maxConstraints:[W,0],className:E("resizable-column"),children:y},c.key),H=p.useRef(null),ae=p.useRef(null),Ca=p.useRef(null),ye=p.useRef(null),wt=p.useRef(null),[le,Ra]=p.useState(!1),Ye=p.useCallback(c=>{const y=ae.current;if(y&&y.contains(c))return;const x=c.parentElement;if(!x)return;const A=window.getComputedStyle(x),P=parseFloat(A.paddingTop)||0,N=parseFloat(A.paddingBottom)||0,G=c.offsetHeight+P+N;c.style.setProperty("--expand-cell-top",`${P}px`),c.style.setProperty("--expand-cell-height",`${G}px`)},[]),[on,xt]=p.useState(0),[an,yt]=p.useState(0),[sn,bt]=p.useState(0),[rn,ln]=p.useState(0),Ve=p.useRef(!1),St=p.useRef(new Set),be=p.useRef(null),vt=pr(H.current,ae.current,(j==null?void 0:j.current)instanceof HTMLElement?j.current:null,le,on,an,sn,rn),Ct=hr(H.current,on,ae.current,(j==null?void 0:j.current)instanceof HTMLElement?j.current:null,le,an,sn,rn),dn=c=>{Ie.includes(c)&&U({key:c,direction:f})},cn=c=>{We(c)},un=()=>{ft()},ka=()=>{$e()},pn=c=>Ie.includes(c)?(ee==null?void 0:ee.key)===c?it(f)?r.jsx(bn,{}):r.jsx(Ma,{}):r.jsx(bn,{}):null,hn=e.every(c=>h.includes(c.id)),mn=e.some(c=>h.includes(c.id)),Rt=(h==null?void 0:h.length)>0,Da=!Ha(e),fn=L&&Da||Rt,Ta=e.every(c=>v.includes(c.id)),Ea=k!==void 0?k:Ta,za=zn(oe,qe,b,l,!!o,!1,R?Ue:void 0,R,_),_a=zn(oe,qe,b,l,!!o,!0,R?Ue:void 0,R,_),gn=r.jsx("button",{onClick:ka,"aria-label":"Toggle all rows expansion",children:r.jsx("span",{className:E("expand-icon",{expanded:Ea}),children:r.jsx(Sn,{})})});p.useEffect(()=>{if(!(j!=null&&j.current)||!H.current||!ae.current)return;const c=j.current,y=H.current,x=ae.current,A=wt.current,P=()=>{const q=y.getBoundingClientRect(),G=c.getBoundingClientRect(),de=x.offsetHeight,se=q.top-G.top,Xe=q.bottom-G.top,xn=c.scrollTop>0&&se<=0&&Xe>de;if(Ra(xn),xn){const Ge=q.left,yn=G.top;x.classList.add(E("pinned-header")),w&&(x.style.overflow="hidden",x.style.overflowX="hidden"),x.style.left=`${Ge}px`,x.style.top=`${yn}px`,x.style.width=`${q.width}px`,A&&_&&(A.style.top=`${yn}px`)}else{const Ge=y.scrollLeft;Ve.current=!0,x.classList.remove(E("pinned-header")),w&&(x.scrollLeft=0),x.style.left="",x.style.top="",x.style.width="",w&&(x.style.overflow="",x.style.overflowX=""),A&&_&&(A.style.top="",A.classList.remove(E("pinned-header"))),w&&Ge>0?requestAnimationFrame(()=>{y.scrollLeft=Ge,setTimeout(()=>{Ve.current=!1},0)}):Ve.current=!1}},N=requestAnimationFrame(()=>{P()});return c.addEventListener("scroll",P),window.addEventListener("resize",P),()=>{cancelAnimationFrame(N),c.removeEventListener("scroll",P),window.removeEventListener("resize",P)}},[j,w,_]),p.useEffect(()=>{if(!(j!=null&&j.current)||!H.current||!ae.current||!le)return;const c=j.current,y=H.current,x=ae.current,A=wt.current,P=()=>{const se=y.getBoundingClientRect(),Xe=c.getBoundingClientRect();x.style.left=`${se.left}px`,x.style.top=`${Xe.top}px`,x.style.width=`${se.width}px`,A&&_&&(A.style.top=`${Xe.top}px`)},N=se=>{Ve.current||(se===x?y.scrollLeft=x.scrollLeft:x.scrollLeft=y.scrollLeft,be.current&&be.current())},q=()=>{N(y),P()},G=()=>{N(x)},de=()=>{P()};return y.addEventListener("scroll",q),w&&x.addEventListener("scroll",G),c.addEventListener("scroll",de),window.addEventListener("resize",P),N(y),P(),()=>{y.removeEventListener("scroll",q),w&&x.removeEventListener("scroll",G),c.removeEventListener("scroll",de),window.removeEventListener("resize",P)}},[le,j,w,_]),p.useEffect(()=>{if(!H.current||!w)return;const c=H.current,y=j==null?void 0:j.current;xt(c.scrollLeft),yt((y==null?void 0:y.scrollTop)||c.scrollTop||0),bt(c.scrollWidth);const x=()=>{c&&(xt(c.scrollLeft),yt((y==null?void 0:y.scrollTop)||c.scrollTop||0),bt(c.scrollWidth))};let A=null;const P=()=>{A===null&&(A=requestAnimationFrame(()=>{x(),A=null}))},N=()=>{P()},q=()=>{P()};c.addEventListener("scroll",N,{passive:!0}),y&&y.addEventListener("scroll",q,{passive:!0});const G=()=>{x(),ln(se=>se+1)};window.addEventListener("resize",G),be.current=x,x();const de=new ResizeObserver(()=>{x()});return c&&de.observe(c),()=>{c.removeEventListener("scroll",N),y&&y.removeEventListener("scroll",q),window.removeEventListener("resize",G),de.disconnect(),A!==null&&(cancelAnimationFrame(A),A=null)}},[w,j,le,v]),p.useEffect(()=>{if(!H.current||!w)return;const c=H.current,y=j==null?void 0:j.current;requestAnimationFrame(()=>{c&&(xt(c.scrollLeft),yt((y==null?void 0:y.scrollTop)||c.scrollTop||0),bt(c.scrollWidth),be.current&&be.current())})},[Ue,w,j]),p.useEffect(()=>{if(!H.current)return;const c=H.current,y=()=>{Array.from(c.querySelectorAll('[data-base-left="0"]')).forEach(Ye)};requestAnimationFrame(()=>{y()})},[b,e,Ye]),p.useEffect(()=>{if(!H.current)return;const c=H.current,y=new Set(v),x=St.current,A=new Set;if(v.forEach(N=>{x.has(N)||A.add(N)}),x.forEach(N=>{y.has(N)||A.add(N)}),A.size===0){St.current=y;return}const P=setTimeout(()=>{A.forEach(N=>{const q=c.querySelector(`[data-base-left="0"][data-row-id="${N}"]`);q&&Ye(q)}),ln(N=>N+1)},0);return St.current=y,()=>clearTimeout(P)},[b,v,Ye]),p.useEffect(()=>{if(!ye.current||!H.current||!_)return;const c=ye.current,y=H.current,x=()=>{requestAnimationFrame(()=>{c.scrollTop=y.scrollTop})};return y.addEventListener("scroll",x),()=>{y.removeEventListener("scroll",x)}},[e,_]),p.useLayoutEffect(()=>{if(!H.current||!ye.current)return;const c=H.current,y=ye.current,x=()=>{const P=`${c.clientHeight}px`;y.style.height!==P&&(y.style.height=P)};x();const A=new ResizeObserver(()=>{requestAnimationFrame(x)});return A.observe(c),()=>A.disconnect()},[]);const Aa=()=>r.jsxs("div",{className:E("checkbox-column"),ref:ye,children:[r.jsx("div",{ref:wt,className:E("table-header","checkbox-header",{"pinned-header":le},u),children:fn&&r.jsx(Ke,{value:hn,partiallyChecked:mn,onChange:un,className:E("checkbox-cell")})}),r.jsx("div",{className:E("checkbox-body",d),children:e.map((c,y)=>r.jsx("div",{ref:va(y),className:E("checkbox-row","table-row",En(c),i),onMouseEnter:()=>Qt(y),onMouseLeave:Zt,children:(Rt||Gt===y)&&r.jsx(Ke,{value:h.includes(c.id),onChange:()=>cn(c.id),className:E("checkbox-cell")})},c.id))})]}),wn=()=>r.jsxs("div",{ref:H,className:E("table",{"fixed-header":S,"horizontally-scrollable-container":S&&(w||R),"external-scroll-container":S&&!!j},a),children:[r.jsxs("div",{ref:ae,className:E("table-header",{"sticky-header":S&&!le,"horizontally-scrollable":w,resizable:R},u),style:{gridTemplateColumns:_a},children:[l&&!_&&r.jsx("div",{className:E("table-header-cell","checkbox-cell"),"data-base-left":b?me:0,children:fn&&r.jsx(Ke,{value:hn,partiallyChecked:mn,onChange:un,className:E("checkbox-cell")})}),b&&r.jsx("div",{className:E("table-header-cell","expand-cell","left-border-accent"),"data-base-left":"0",children:C?r.jsx(Oa,{content:C,placement:"top",wrapperClassName:E("expand-all-tooltip-wrapper"),contentClassName:E("expand-all-tooltip-content"),children:gn}):gn}),oe.map((c,y)=>{const x=r.jsx("button",{"data-column-key":c.key,"data-pinned-index":y,className:E("table-header-cell","pinned-column",{[`align-${c.align}`]:"align"in c,"primary-cell":ce(c),"sortable-cell":Ie.includes(c.key),resizable:R}),style:Qe(c,!0,y,oe,xe,b,l,_),children:r.jsxs("div",{className:E("label"),onClick:()=>dn(c.key),onMouseEnter:()=>Kt(c.key),onMouseLeave:Jt,children:[r.jsx(An,{column:c}),(Xt===c.key||(ee==null?void 0:ee.key)===c.key)&&pn(c.key)]})},c.key);return R?nn(c,x):x}),qe.map(c=>{const y=r.jsx("button",{className:E("table-header-cell",{[`align-${c.align}`]:"align"in c,"primary-cell":ce(c),"sortable-cell":Ie.includes(c.key),resizable:R}),style:Qe(c,!1,void 0,oe,xe,b,l,_),children:r.jsxs("div",{className:E("label"),onClick:()=>dn(c.key),onMouseEnter:()=>Kt(c.key),onMouseLeave:Jt,children:[r.jsx(An,{column:c}),(Xt===c.key||(ee==null?void 0:ee.key)===c.key)&&pn(c.key)]})},c.key);return R?nn(c,y):y}),o&&r.jsx("div",{className:E("table-header-cell","action-menu-cell")})]}),r.jsx("div",{ref:Ca,className:E("table-body",{"scrollable-body":S,"horizontally-scrollable":w,resizable:R},d),children:e.map((c,y)=>r.jsxs("div",{"data-row-index":y,ref:Sa(y),className:E("table-row",En(c),i,{selectable:l&&!_}),onMouseEnter:()=>Qt(y),onMouseLeave:Zt,children:[l&&!_&&r.jsx("div",{className:E("table-cell","checkbox-cell"),"data-base-left":b?me:0,children:(Rt||Gt===y)&&r.jsx(Ke,{value:h.includes(c.id),onChange:()=>cn(c.id),className:E("checkbox-cell")})}),r.jsx("div",{className:E("row-content-wrapper"),children:r.jsxs("div",{className:E("table-row-content"),style:{gridTemplateColumns:za},children:[b&&r.jsx("div",{className:E("table-cell","expand-cell","left-border-accent"),"data-base-left":"0","data-row-id":c.id,children:r.jsx("button",{onClick:()=>wa(c.id),"aria-label":v.includes(c.id)?"Collapse row":"Expand row","aria-expanded":v.includes(c.id),children:r.jsx("span",{className:E("expand-icon",{expanded:v.includes(c.id)}),children:r.jsx(Sn,{})})})}),oe.map((x,A)=>{const P=tn(c.id,x.key),N=ce(x);return r.jsx("div",{"data-column-key":x.key,"data-pinned-index":A,ref:N?en(x.key):void 0,className:E("table-cell","pinned-column",{"primary-cell":N,"expanded-cell":P}),style:Qe(x,!0,A,oe,xe,b,l,_),children:c[x.key].component||c[x.key].content||c[x.key]},x.key)}),qe.map(x=>{const A=tn(c.id,x.key),P=ce(x);return r.jsx("div",{ref:P?en(x.key):void 0,className:E("table-cell",{"primary-cell":P,"expanded-cell":A}),style:Qe(x,!1,void 0,oe,xe,b,l,_),children:c[x.key].component||c[x.key].content||c[x.key]},x.key)}),o&&r.jsx("div",{className:E("table-cell","action-menu-cell"),children:o(c.metaData)})]})})]},c.id))}),w&&r.jsxs(r.Fragment,{children:[r.jsx(_n,{portalContainer:we,visible:vt.visible,position:vt.position,size:vt.size,direction:"right",className:Fe,dataTestId:"right-gradient"}),r.jsx(_n,{portalContainer:we,visible:Ct.visible,position:Ct.position,size:Ct.size,direction:"left",className:gt,dataTestId:"pinned-gradient"})]})]});return _?r.jsxs("div",{className:E("table-wrapper",{"fixed-header":S},s),children:[Aa(),wn()]}):wn()};M.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"RowData"}],raw:"RowData[]"},description:""},primaryColumn:{required:!0,tsType:{name:"union",raw:"Column | Column[]",elements:[{name:"Column"},{name:"Array",elements:[{name:"Column"}],raw:"Column[]"}]},description:""},fixedColumns:{required:!0,tsType:{name:"Array",elements:[{name:"FixedColumn"}],raw:"FixedColumn[]"},description:""},renderRowActions:{required:!1,tsType:{name:"signature",type:"function",raw:"(metaData?: MetaData) => ReactNode",signature:{arguments:[{type:{name:"MetaData"},name:"metaData"}],return:{name:"ReactNode"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isCheckboxOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},wrapperClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},headerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},bodyClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rowClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortingDirection:{required:!1,tsType:{name:"union",raw:"typeof ASC | typeof DESC | Uppercase<typeof ASC | typeof DESC>",elements:[{name:"ASC"},{name:"DESC"},{name:"Uppercase",elements:[{name:"union",raw:"typeof ASC | typeof DESC",elements:[{name:"ASC"},{name:"DESC"}]}],raw:"Uppercase<typeof ASC | typeof DESC>"}]},description:"",defaultValue:{value:"'asc'",computed:!1}},sortingColumn:{required:!1,tsType:{name:"Column"},description:""},sortableColumns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isHeaderFixed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontallyScrollable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pinnedColumnKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},isRowsExpandable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},isSelectAllCheckboxAlwaysVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},setExpandedRowIds:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Set",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Set<string | number>"}],raw:"SetStateAction<Set<string | number>>"}],raw:"Dispatch<SetStateAction<Set<string | number>>>"},description:""},isAllExpandedByDefault:{required:!1,tsType:{name:"boolean"},description:""},expandAllTooltip:{required:!1,tsType:{name:"ReactNode"},description:""},isResizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},minColumnWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},maxColumnWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"500",computed:!1}},onChangeSorting:{required:!1,tsType:{name:"signature",type:"function",raw:"(sortConfig?: SortConfig) => void",signature:{arguments:[{type:{name:"SortConfig"},name:"sortConfig"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onColumnResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnKey: string, width: number) => void",signature:{arguments:[{type:{name:"string"},name:"columnKey"},{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},externalScrollContainerRef:{required:!1,tsType:{name:"union",raw:"RefObject<HTMLElement> | RefObject<Element> | null | undefined",elements:[{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},{name:"RefObject",elements:[{name:"Element"}],raw:"RefObject<Element>"},{name:"null"},{name:"undefined"}]},description:""},portalContainer:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:"",defaultValue:{value:"typeof document !== 'undefined' ? document.body : null",computed:!1}},rightGradientClassName:{required:!1,tsType:{name:"string"},description:""},pinnedGradientClassName:{required:!1,tsType:{name:"string"},description:""}}};const Ir={title:"Tables & Lists/Table",component:M,parameters:{layout:"centered",docs:{description:{component:"\nA flexible table component with support for:\n- **Row sizes**: Configure via `rowConfigs: { size: 'small' | 'medium' | 'large' }` in row data\n- **Expandable rows**: Enable with `isRowsExpandable` prop\n- **Pinned columns**: Use `pinnedColumnKeys` to pin columns to the left\n- **Sorting**: Configure with `sortableColumns`, `sortingColumn`, `sortingDirection`\n- **Selection**: Enable with `selectable` prop\n- **Custom cell content**: Use `DetailedCellData` with `content` and `component` properties\n        "}}},tags:["autodocs"],argTypes:{data:{description:"Array of row data. Each row should have an `id` and can include `rowConfigs` for size configuration.",table:{type:{summary:"RowData[]"}}},primaryColumn:{description:"The main column configuration (typically the name/title column).",table:{type:{summary:"Column | Column[]"}}},fixedColumns:{description:"Array of fixed-width columns with optional alignment.",table:{type:{summary:"FixedColumn[]"}}},selectable:{description:"Enable row selection with checkboxes.",control:"boolean",table:{defaultValue:{summary:"false"}}},isRowsExpandable:{description:"Enable expand/collapse functionality for rows with long content.",control:"boolean",table:{defaultValue:{summary:"false"}}},expandedRowIds:{description:"Array of row IDs that are currently expanded.",table:{type:{summary:"(string | number)[]"}}},isAllExpandedByDefault:{description:"Whether all rows should be expanded by default.",control:"boolean",table:{defaultValue:{summary:"false"}}},expandAllTooltip:{description:"Tooltip text for the expand all button.",table:{type:{summary:"ReactNode"}}},pinnedColumnKeys:{description:"Array of column keys to pin to the left side of the table.",table:{type:{summary:"string[]"}}},sortableColumns:{description:"Array of column keys that can be sorted.",table:{type:{summary:"string[]"}}},sortingColumn:{description:"Currently sorted column.",table:{type:{summary:"Column"}}},sortingDirection:{description:"Current sorting direction.",control:"select",options:["ASC","DESC"],table:{type:{summary:"'ASC' | 'DESC'"}}},isHeaderFixed:{description:"Keep the header fixed when scrolling vertically.",control:"boolean",table:{defaultValue:{summary:"false"}}},isHorizontallyScrollable:{description:"Enable horizontal scrolling for wide tables.",control:"boolean",table:{defaultValue:{summary:"false"}}},className:{description:"Custom CSS class for the table container.",table:{type:{summary:"string"}}},headerClassName:{description:"Custom CSS class for the table header. Use this to customize header background, borders, etc.",table:{type:{summary:"string"}}},bodyClassName:{description:"Custom CSS class for the table body. Use this to customize row gap, padding, etc.",table:{type:{summary:"string"}}},rowClassName:{description:"Custom CSS class for table rows.",table:{type:{summary:"string"}}},onToggleRowExpansion:{description:"Callback when a row is expanded/collapsed.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsExpansion:{description:"Callback when all rows are expanded/collapsed.",table:{type:{summary:"() => void"}}},onToggleRowSelection:{description:"Callback when a row is selected/deselected.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsSelection:{description:"Callback when all rows are selected/deselected.",table:{type:{summary:"() => void"}}},onChangeSorting:{description:"Callback when sorting changes.",table:{type:{summary:"(sortConfig?: SortConfig) => void"}}},renderRowActions:{description:"Function to render action menu for each row.",table:{type:{summary:"(metaData?: MetaData) => ReactNode"}}}},args:{selectable:!0}},J=()=>r.jsx(Wa,{placement:"bottom-end",content:r.jsxs("div",{children:[r.jsx("p",{children:"Edit"}),r.jsx("p",{children:"Rename"})]}),children:r.jsx(La,{})}),he=[{id:1,name:{content:"Sam",component:r.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],I=[{key:"name",header:"Name"}],Me=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],Ze={render:e=>{const[t,n]=p.useState({key:I[0].key,direction:ne}),[o,a]=p.useState(I[0]),[s,i]=p.useState(ne),u=fe(he,t),[d,l]=p.useState(u),[h,f]=p.useState(new Set([]));return p.useEffect(()=>{const{key:m,direction:g}=t,S=[...Me,...I].find(w=>w.key===m);i(g),a(S)},[t]),r.jsx("div",{style:{minWidth:"700px"},children:r.jsx(M,{...e,primaryColumn:I,data:d,sortableColumns:[I[0].key],onChangeSorting:(m=t)=>{let{direction:g}=m;const{key:S}=m;g=Yt(g);const w=fe(d,{key:S,direction:g});n({key:S,direction:g}),l(w)},onToggleRowSelection:m=>{const g=new Set(h);g.has(m)?g.delete(m):g.add(m),f(g)},onToggleAllRowsSelection:()=>{if(h.size===he.length)f(new Set);else{const m=new Set(he.map(g=>g.id));f(m)}},selectedRowIds:[...h],sortingColumn:o,sortingDirection:s})})},args:{fixedColumns:Me,renderRowActions:J,selectable:!0}},X=[{id:1,name:"John Doe",email:"john.doe@example.com",phone:"+1-555-123-4567",address:"123 Main Street, New York, NY 10001",department:"Engineering",role:"Senior Software Engineer",salary:"$120,000",startDate:"2020-01-15",status:"Active",manager:"Jane Smith",projects:"Project Alpha, Project Beta",rowConfigs:{size:"small"}},{id:2,name:"Jane Smith",email:"jane.smith@example.com",phone:"+1-555-987-6543",address:"456 Oak Avenue, Los Angeles, CA 90210",department:"Marketing",role:"Marketing Director",salary:"$95,000",startDate:"2019-03-20",status:"Active",manager:"Robert Johnson",projects:"Campaign X, Campaign Y",rowConfigs:{size:"small"}},{id:3,name:"Mike Wilson",email:"mike.wilson@example.com",phone:"+1-555-456-7890",address:"789 Pine Road, Chicago, IL 60601",department:"Sales",role:"Sales Representative",salary:"$75,000",startDate:"2021-06-10",status:"Active",manager:"Sarah Davis",projects:"Client Onboarding, Lead Generation",rowConfigs:{size:"small"}},{id:4,name:"Sarah Davis",email:"sarah.davis@example.com",phone:"+1-555-234-5678",address:"321 Elm Street, Houston, TX 77001",department:"HR",role:"HR Manager",salary:"$85,000",startDate:"2018-09-12",status:"Active",manager:"Michael Brown",projects:"Employee Onboarding, Policy Updates",rowConfigs:{size:"small"}},{id:5,name:"Robert Johnson",email:"robert.johnson@example.com",phone:"+1-555-345-6789",address:"654 Maple Drive, Phoenix, AZ 85001",department:"Finance",role:"Financial Analyst",salary:"$78,000",startDate:"2020-11-08",status:"Active",manager:"Emily White",projects:"Budget Planning, Cost Analysis",rowConfigs:{size:"small"}},{id:6,name:"Emily White",email:"emily.white@example.com",phone:"+1-555-456-7891",address:"987 Cedar Lane, Philadelphia, PA 19101",department:"Operations",role:"Operations Manager",salary:"$110,000",startDate:"2017-05-22",status:"Active",manager:"David Green",projects:"Process Optimization, Quality Control",rowConfigs:{size:"small"}},{id:7,name:"David Green",email:"david.green@example.com",phone:"+1-555-567-8901",address:"147 Birch Avenue, San Antonio, TX 78201",department:"Engineering",role:"Lead Developer",salary:"$135,000",startDate:"2016-02-14",status:"Active",manager:"Lisa Thompson",projects:"Architecture Review, Team Mentoring",rowConfigs:{size:"small"}},{id:8,name:"Lisa Thompson",email:"lisa.thompson@example.com",phone:"+1-555-678-9012",address:"258 Spruce Court, San Diego, CA 92101",department:"Product",role:"Product Manager",salary:"$105,000",startDate:"2019-08-30",status:"Active",manager:"Tom Anderson",projects:"Feature Planning, User Research",rowConfigs:{size:"small"}},{id:9,name:"Tom Anderson",email:"tom.anderson@example.com",phone:"+1-555-789-0123",address:"369 Willow Street, Dallas, TX 75201",department:"Design",role:"UX Designer",salary:"$88,000",startDate:"2021-01-18",status:"Active",manager:"Anna Martinez",projects:"UI Redesign, User Testing",rowConfigs:{size:"small"}},{id:10,name:"Anna Martinez",email:"anna.martinez@example.com",phone:"+1-555-890-1234",address:"741 Poplar Boulevard, San Jose, CA 95101",department:"QA",role:"QA Engineer",salary:"$82,000",startDate:"2020-07-25",status:"Active",manager:"John Doe",projects:"Automation Testing, Bug Tracking",rowConfigs:{size:"small"}}],te=[{key:"name",header:"Full Name"}],ge=[{key:"email",header:"Email Address",width:200},{key:"phone",header:"Phone Number",width:150},{key:"address",header:"Address",width:250},{key:"department",header:"Department",width:120},{key:"role",header:"Job Role",width:180},{key:"salary",header:"Salary",width:100},{key:"startDate",header:"Start Date",width:120},{key:"status",header:"Status",width:100},{key:"manager",header:"Manager",width:150},{key:"projects",header:"Current Projects",width:200}],yr=e=>{const t=["John","Jane","Mike","Sarah","David","Emma","Chris","Lisa","Tom","Anna"],n=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose"],o=["Engineering","Marketing","Sales","HR","Finance","Operations","Design","Product","Legal","Support"];return Array.from({length:e},(a,s)=>({id:s+1,name:`${t[s%t.length]} ${s+1}`,age:22+s%40,city:n[s%n.length],department:o[s%o.length],email:`user${s+1}@example.com`,salary:`$${(5e4+s*1e3%1e5).toLocaleString()}`}))},Ne=yr(50),lt=[{key:"age",header:"Age",width:80,align:"right"},{key:"city",header:"City",width:120},{key:"department",header:"Department",width:120},{key:"email",header:"Email",width:200},{key:"salary",header:"Salary",width:100,align:"right"}],et={render:e=>{const[t,n]=p.useState({key:I[0].key,direction:ne}),[o,a]=p.useState(I[0]),[s,i]=p.useState(ne),u=fe(Ne,t),[d,l]=p.useState(u),[h,f]=p.useState(new Set([]));return p.useEffect(()=>{const{key:m,direction:g}=t,S=[...lt,...I].find(w=>w.key===m);i(g),a(S)},[t]),r.jsxs("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Fixed Header Table with Scrollable Body"}),r.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",overflow:"auto"},children:r.jsx(M,{...e,data:d,primaryColumn:I,fixedColumns:lt,isHeaderFixed:!0,sortableColumns:[I[0].key,"age","department"],onChangeSorting:(m=t)=>{let{direction:g}=m;const{key:S}=m;g=Yt(g);const w=fe(d,{key:S,direction:g});n({key:S,direction:g}),l(w)},onToggleRowSelection:m=>{const g=new Set(h);g.has(m)?g.delete(m):g.add(m),f(g)},onToggleAllRowsSelection:()=>{if(h.size===Ne.length)f(new Set);else{const m=new Set(Ne.map(g=>g.id));f(m)}},selectedRowIds:[...h],sortingColumn:o,sortingDirection:s})})]})},args:{selectable:!0,renderRowActions:J}},tt={render:e=>r.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Fixed Header + Horizontal Scroll: Both scrollbars visible when needed"}),r.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",position:"relative"},children:r.jsx(M,{...e,data:X,primaryColumn:te,fixedColumns:ge,isHorizontallyScrollable:!0,isHeaderFixed:!0})})]}),args:{selectable:!1,renderRowActions:J}},nt={render:e=>{const[t,n]=p.useState(new Set([]));return r.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Pinned Columns + Fixed Header: Name and Email pinned with vertical and horizontal scrolling"}),r.jsx("div",{className:"storybook-table-wrapper",style:{width:"550px",height:"calc(100% - 50px)",position:"relative"},children:r.jsx(M,{...e,data:X,primaryColumn:te,fixedColumns:ge,isHorizontallyScrollable:!0,isHeaderFixed:!0,pinnedColumnKeys:["name","email","department"],onToggleRowSelection:o=>{const a=new Set(t);a.has(o)?a.delete(o):a.add(o),n(a)},onToggleAllRowsSelection:()=>{if(t.size===X.length)n(new Set);else{const o=new Set(X.map(a=>a.id));n(o)}},selectedRowIds:[...t]})})]})},args:{selectable:!0,renderRowActions:J}},ot={render:e=>{const[t,n]=p.useState(new Set([1])),[o,a]=p.useState(new Set([])),s=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"sam.johnson@example.com"},{id:2,name:"Anna Smith",age:32,city:"San Francisco",department:"Design",email:"anna.smith@example.com"},{id:3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",email:"mike.davis@example.com"},{id:4,name:"Sarah Wilson",age:35,city:"Chicago",department:"Sales",email:"sarah.wilson@example.com"}],i=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:100},{key:"city",header:"City",width:100}],u=[{key:"name",header:"Name"}];return r.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows Example"}),r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Click the expand/collapse icons to view detailed information for each row. Rows can be expanded and collapsed independently."}),r.jsx(M,{...e,data:s,primaryColumn:u,fixedColumns:i,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...t],setExpandedRowIds:n,onToggleRowExpansion:d=>{const l=new Set(t);l.has(d)?l.delete(d):l.add(d),n(l)},onToggleAllRowsExpansion:()=>{if(t.size===s.length)n(new Set);else{const d=new Set(s.map(l=>l.id));n(d)}},selectedRowIds:[...o],onToggleRowSelection:d=>{const l=new Set(o);l.has(d)?l.delete(d):l.add(d),a(l)},onToggleAllRowsSelection:()=>{if(o.size===s.length)a(new Set);else{const d=new Set(s.map(l=>l.id));a(d)}}})]})},args:{selectable:!0}},at={render:e=>{const[t,n]=p.useState(new Set([1,2,3,4])),[o,a]=p.useState(!0),[s,i]=p.useState(new Set([])),u=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"anna.smith@example.com"},{id:2,name:"Mike Davis",age:32,city:"San Francisco",department:"Design",email:"mike.davis@example.com"},{id:3,name:"Sarah Wilson",age:28,city:"Los Angeles",department:"Marketing",email:"sarah.wilson@example.com"},{id:4,name:"John Brown",age:35,city:"Chicago",department:"Sales",email:"john.brown@example.com"}],d=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],l=[{key:"name",header:"Name"}],h=o?"Expanded by default":"Collapsed by default";return r.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows with Default State"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Demonstrates ",r.jsx("strong",{children:"isAllExpandedByDefault"})," and ",r.jsx("strong",{children:"expandAllTooltip"})," ","props. The expandAll icon shows the default state regardless of individual row states. Hover over the expandAll icon to see the tooltip."]}),r.jsx(M,{...e,data:u,primaryColumn:l,fixedColumns:d,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...t],isAllExpandedByDefault:o,expandAllTooltip:h,onToggleRowExpansion:f=>{const m=new Set(t);m.has(f)?m.delete(f):m.add(f),n(m)},onToggleAllRowsExpansion:()=>{const f=!o;a(f),n(f?new Set(u.map(m=>m.id)):new Set)},selectedRowIds:[...s],onToggleRowSelection:f=>{const m=new Set(s);m.has(f)?m.delete(f):m.add(f),i(m)},onToggleAllRowsSelection:()=>{if(s.size===u.length)i(new Set);else{const f=new Set(u.map(m=>m.id));i(f)}}})]})},args:{selectable:!0}},At=[{id:1,name:"John Alexander Maximilian Winchester-Blackwood III",description:"This is long text but anyway no matter ellipsed or opened it should not overcome his width it can be brake. When you click on this cell, it will expand to show the full content without ellipsis truncation, and the text should wrap properly within the cell boundaries without breaking the table layout.",shortText:"Brief note",longTitle:"Senior Vice President of Engineering and Technology Development for Enterprise Solutions and Digital Transformation Initiatives",email:"john.alexander.maximilian.winchester.blackwood.third@very-long-company-name-example.com",notes:"This is a comprehensive test of how the table handles extremely long content that would normally break layouts. The content should be properly contained within cell boundaries."},{id:2,name:"Maria Elena Rodriguez-Martinez",description:"Another extremely lengthy description that showcases the cell expansion capabilities. This description contains detailed information about the person, their role, responsibilities, and achievements. The purpose is to demonstrate how users can easily expand cells to read full content when the default view shows only a truncated version with ellipsis.",shortText:"Quick summary here",longTitle:"Chief Marketing Officer and Head of Brand Strategy for Global Markets and Customer Experience Enhancement",email:"maria.elena.rodriguez.martinez@another-extremely-long-domain-name.example.org",notes:"Testing various content lengths and how they behave in both collapsed and expanded states. The text should wrap appropriately without overflowing."},{id:3,name:"Robert James Thompson",description:"A comprehensive description that tests the expand functionality with moderate length content. This shows how the feature works with different content lengths and provides a good example of real-world usage.",shortText:"Standard",longTitle:"Director of Operations",email:"robert.thompson@company.com",notes:"Short note about this person and their current projects."},{id:4,name:"Dr. Elizabeth Catherine Pemberton-Williams, PhD, MBA, CISSP",description:"This cell contains an exceptionally detailed description that really pushes the limits of what might be considered reasonable content length. It includes professional background, educational achievements, current responsibilities, ongoing projects, future goals, and various other details that would typically require a much larger display area.",shortText:"Complex background",longTitle:"Chief Technology Officer and Principal Software Architect for Distributed Systems and Cloud Infrastructure with specialization in Cybersecurity and Data Analytics",email:"dr.elizabeth.catherine.pemberton.williams.phd.mba.cissp@enterprise-solutions-technology-consulting.example.net",notes:"Comprehensive notes about professional achievements, certifications, ongoing projects, and future development plans. This tests the maximum reasonable content length."}],br=[{key:"description",header:"Description",width:200},{key:"longTitle",header:"Job Title",width:120},{key:"email",header:"Email Address",width:100},{key:"shortText",header:"Type",width:100},{key:"notes",header:"Notes",width:100}],st={render:e=>{const[t,n]=p.useState(new Set);return r.jsxs("div",{style:{width:"1000px",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Row Content Expansion - Long Text Handling"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666",lineHeight:1.5},children:[r.jsx("strong",{children:"Click the expand icon"})," at the beginning of each row to expand/collapse ALL cells in that row. This example tests:",r.jsx("br",{}),"• Very long email addresses that should be ellipsed when collapsed",r.jsx("br",{}),"• Long text content that should wrap without breaking cell width constraints",r.jsx("br",{}),"• Proper word breaking for extremely long content",r.jsx("br",{}),"• Layout stability when transitioning between collapsed and expanded states"]}),r.jsx("div",{style:{border:"1px solid #e1e5e9",borderRadius:"8px",overflow:"hidden"},children:r.jsx(M,{...e,data:At,primaryColumn:[{key:"name",header:"Full Name"}],fixedColumns:br,selectable:!1,isRowsExpandable:!0,expandedRowIds:[...t],onToggleRowExpansion:o=>{const a=new Set(t);a.has(o)?a.delete(o):a.add(o),n(a)},onToggleAllRowsExpansion:()=>{if(t.size===At.length)n(new Set);else{const o=new Set(At.map(a=>a.id));n(o)}}})}),r.jsx("p",{style:{margin:"16px 0 0 0",fontSize:"12px",color:"#888",fontStyle:"italic"},children:"Test the table with your browser's developer tools at different widths to verify responsive behavior."})]})},args:{renderRowActions:void 0}},Ce={render:e=>{const[t,n]=p.useState(new Set([1])),[o,a]=p.useState(new Set([5])),[s,i]=p.useState(new Set([9])),u=(S,w)=>[{id:S+1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",rowConfigs:w?{size:w}:void 0},{id:S+2,name:"John Doe with a very long name that should wrap when expanded and demonstrate how the row height increases to accommodate multiple lines of text content",age:32,city:"San Francisco Bay Area, California, United States of America",department:"Design and User Experience Research Department",rowConfigs:w?{size:w}:void 0},{id:S+3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",rowConfigs:w?{size:w}:void 0},{id:S+4,name:"Sarah Elizabeth Wilson-Montgomery III with an exceptionally long hyphenated surname that demonstrates text wrapping behavior in expanded table rows when the content exceeds the available column width",age:35,city:"Chicago Metropolitan Area",department:"Sales and Business Development International Operations",rowConfigs:w?{size:w}:void 0}],d=u(0,"small"),l=u(4),h=u(8,"large"),f=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],m=[{key:"name",header:"Name"}],g=(S,w,T,b,v)=>r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{margin:"0 0 4px 0",fontSize:"14px",color:"#333"},children:S}),r.jsx("p",{style:{margin:"0 0 12px 0",fontSize:"12px",color:"#666"},children:w}),r.jsx(M,{...e,data:T,primaryColumn:m,fixedColumns:f,isRowsExpandable:!0,expandedRowIds:[...b],onToggleRowExpansion:k=>{const C=new Set(b);C.has(k)?C.delete(k):C.add(k),v(C)},onToggleAllRowsExpansion:()=>{if(b.size===T.length)v(new Set);else{const k=new Set(T.map(C=>C.id));v(k)}}})]});return r.jsxs("div",{style:{minWidth:"800px",maxWidth:"1000px"},children:[r.jsx("h3",{style:{margin:"0 0 24px 0",fontSize:"18px",color:"#333"},children:"Row Sizes with Expand - Testing Jump Fix"}),r.jsx("p",{style:{margin:"0 0 24px 0",fontSize:"14px",color:"#666"},children:"Test expand/collapse on each table size. The row height should NOT change when expanding/collapsing (unless content requires more space)."}),g("Small Rows (44px)",'rowConfigs: { size: "small" }',d,t,n),g("Default Rows (64px)","No rowConfigs specified",l,o,a),g("Large Rows (80px)",'rowConfigs: { size: "large" }',h,s,i)]})}},Re={render:()=>{const e=[{key:"name",header:"Name"}],t=[{key:"status",header:"Status",width:100},{key:"description",header:"Description",width:250}],n=[{id:1,name:"Small Row 1",description:"Compact row for dense tables",status:"Active",rowConfigs:{size:"small"}},{id:2,name:"Small Row 2",description:"Height: 44px",status:"Active",rowConfigs:{size:"small"}}],o=[{id:1,name:"Default Row 1",description:"Standard row size",status:"Active"},{id:2,name:"Default Row 2",description:"Height: 64px (no rowConfigs needed)",status:"Active"}],a=[{id:1,name:"Large Row 1",description:"Prominent row for emphasis",status:"Active",rowConfigs:{size:"large"}},{id:2,name:"Large Row 2",description:"Height: 80px",status:"Active",rowConfigs:{size:"large"}}];return r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Small (44px)"}),r.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "small" }']}),r.jsx(M,{data:n,primaryColumn:e[0],fixedColumns:t,selectable:!1})]}),r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Default (64px)"}),r.jsx("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:"No rowConfigs needed"}),r.jsx(M,{data:o,primaryColumn:e[0],fixedColumns:t,selectable:!1})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Large (80px)"}),r.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "large" }']}),r.jsx(M,{data:a,primaryColumn:e[0],fixedColumns:t,selectable:!1})]})]})}},Sr=[{key:"name",header:"Name"}],vr=[{key:"status",header:"Status",width:100},{key:"category",header:"Category",width:120}],jt=[{id:1,name:"Test execution with a very long name that demonstrates how text behaves in expanded rows with custom header styling",status:"Passed",category:"Smoke",rowConfigs:{size:"small"}},{id:2,name:"Another test case",status:"Failed",category:"Regression",rowConfigs:{size:"small"}},{id:3,name:"Quick sanity check",status:"Skipped",category:"Sanity",rowConfigs:{size:"small"}}],Cr=()=>{const[e,t]=p.useState(new Set);return r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"18px",color:"#333"},children:"Custom Header Background Color"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Use the ",r.jsx("code",{children:"headerClassName"})," prop with your own CSS class to customize the header. Pinned columns and expand button inherit the background color automatically."]}),r.jsx("style",{children:`
          .custom-gray-header {
            background-color: var(--rp-ui-base-bg-200) !important;
            border-top: 1px solid var(--rp-ui-base-e-200);
            border-bottom: none;
          }
        `}),r.jsx("div",{style:{border:"1px solid var(--rp-ui-base-e-200)",borderRadius:"4px",overflow:"hidden"},children:r.jsx(M,{data:jt,primaryColumn:Sr[0],fixedColumns:vr,pinnedColumnKeys:["status"],isRowsExpandable:!0,expandedRowIds:Array.from(e),selectable:!1,headerClassName:"custom-gray-header",onToggleRowExpansion:n=>{const o=new Set(e);o.has(n)?o.delete(n):o.add(n),t(o)},onToggleAllRowsExpansion:()=>{e.size===jt.length?t(new Set):t(new Set(jt.map(n=>n.id)))}})}),r.jsxs("div",{style:{marginTop:"24px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#333"},children:"How to use:"}),r.jsx("pre",{style:{backgroundColor:"#f5f5f5",padding:"12px",borderRadius:"4px",fontSize:"12px",overflow:"auto"},children:`// In your SCSS file:
.custom-header {
  background-color: var(--rp-ui-base-bg-200);
  border-top: 1px solid var(--rp-ui-base-e-200);
  border-bottom: none;
}

// In your component:
<Table
  headerClassName="custom-header"
  // ... other props
/>`})]})]})},ke={render:()=>r.jsx(Cr,{})},De={render:e=>r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Resizable Columns (Default Constraints)"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Drag the column borders in the header to adjust widths. Default constraints:"," ",r.jsx("code",{children:"minColumnWidth=50"}),", ",r.jsx("code",{children:"maxColumnWidth=500"})]}),r.jsx(M,{...e,primaryColumn:I,data:he,fixedColumns:Me})]}),args:{renderRowActions:J,isResizable:!0}},Te={render:e=>r.jsx("div",{style:{minWidth:"600px"},children:r.jsx(M,{...e,primaryColumn:I,data:he,fixedColumns:Me})}),args:{isResizable:!0}},Ee={render:e=>r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Resizable Columns (Custom Constraints)"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Columns can be resized between 80px and 300px. Custom constraints:"," ",r.jsx("code",{children:"minColumnWidth=80"}),", ",r.jsx("code",{children:"maxColumnWidth=300"})]}),r.jsx(M,{...e,primaryColumn:I,data:he,fixedColumns:Me})]}),args:{renderRowActions:J,isResizable:!0,minColumnWidth:80,maxColumnWidth:300}},ze={render:e=>r.jsx("div",{style:{width:"900px",height:"400px",border:"1px solid #ccc",padding:"16px"},children:r.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:r.jsx(M,{...e,data:Ne,primaryColumn:I,fixedColumns:lt})})}),args:{renderRowActions:J,isResizable:!0,isHeaderFixed:!0}},_e={render:e=>r.jsx("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:r.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:r.jsx(M,{...e,data:X,primaryColumn:te,fixedColumns:ge,isHorizontallyScrollable:!0,isHeaderFixed:!0})})}),args:{renderRowActions:J,isResizable:!0}},Ae={render:e=>r.jsx("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:r.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:r.jsx(M,{...e,data:Ne,primaryColumn:I,fixedColumns:lt,pinnedColumnKeys:["name","email"],isHorizontallyScrollable:!0,isHeaderFixed:!0})})}),args:{renderRowActions:J,isResizable:!0}},je={render:e=>{const t=p.useRef(null),[n,o]=p.useState({key:te[0].key,direction:ne}),[a,s]=p.useState(te[0]),[i,u]=p.useState(ne),d=p.useMemo(()=>{const S=[...X];for(let w=0;w<3;w++)S.push(...X.map(T=>({...T,id:`${T.id}-copy-${w+1}`})));return S},[]),l=fe(d,n),[h,f]=p.useState(l),[m,g]=p.useState(new Set([]));return p.useEffect(()=>{const{key:S,direction:w}=n,T=[...ge,...te].find(b=>b.key===S);u(w),s(T)},[n]),r.jsxs("div",{style:{width:"800px",height:"600px",border:"1px solid #ccc",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Table with Horizontal Scroll + Pinned Header (External Scroll Container)"}),r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"This example demonstrates a pinned header that activates when scrolling in an external container. The table header pins to the top when the scroll position reaches it. Scroll vertically in the container to see the header pinning, and horizontally to see pinned columns and gradient effects."}),r.jsxs("div",{ref:t,style:{height:"calc(100% - 100px)",overflowY:"auto",overflowX:"hidden",position:"relative"},children:[r.jsxs("div",{style:{padding:"16px",backgroundColor:"#f0f0f0",marginBottom:"16px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"16px"},children:"Content Above Table"}),r.jsx("p",{style:{margin:"0",fontSize:"14px",color:"#666"},children:"This content is inside the scrollable container. When you scroll down, this text will move up and disappear, but the table header will stick to the top."}),r.jsx("p",{style:{margin:"8px 0 0",fontSize:"14px",color:"#666"},children:"Scroll down to see the header pinning effect. The table header will remain fixed at the top while this content scrolls away."})]}),r.jsx(M,{...e,data:h,primaryColumn:te,fixedColumns:ge,isHeaderFixed:!0,isHorizontallyScrollable:!0,pinnedColumnKeys:["name","email"],externalScrollContainerRef:t,sortableColumns:[te[0].key,"department","status"],onChangeSorting:(S=n)=>{let{direction:w}=S;const{key:T}=S;w=Yt(w);const b=fe(h,{key:T,direction:w});o({key:T,direction:w}),f(b)},onToggleRowSelection:S=>{const w=new Set(m);w.has(S)?w.delete(S):w.add(S),g(w)},onToggleAllRowsSelection:()=>{if(m.size===d.length)g(new Set);else{const S=new Set(d.map(w=>w.id));g(S)}},selectedRowIds:[...m],sortingColumn:a,sortingDirection:i})]})]})},args:{selectable:!0,renderRowActions:J}},Pe={render:e=>{const[t,n]=p.useState(new Set([])),[o,a]=p.useState(new Set([]));return r.jsx("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px",paddingLeft:"48px"},children:r.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:r.jsx(M,{...e,data:X,primaryColumn:te,fixedColumns:ge,expandedRowIds:[...o],selectedRowIds:[...t],onToggleRowSelection:s=>{const i=new Set(t);i.has(s)?i.delete(s):i.add(s),n(i)},onToggleAllRowsSelection:()=>{if(t.size===X.length)n(new Set);else{const s=new Set(X.map(i=>i.id));n(s)}},onToggleRowExpansion:s=>{const i=new Set(o);i.has(s)?i.delete(s):i.add(s),a(i)},onToggleAllRowsExpansion:()=>{if(o.size===X.length)a(new Set);else{const s=new Set(X.map(i=>i.id));a(s)}}})})})},args:{renderRowActions:J,isResizable:!0,isHeaderFixed:!0,isHorizontallyScrollable:!0,pinnedColumnKeys:["name","email"],selectable:!0,isRowsExpandable:!0,isCheckboxOutside:!0}};var jn,Pn,Nn;Ze.parameters={...Ze.parameters,docs:{...(jn=Ze.parameters)==null?void 0:jn.docs,source:{originalSource:`{
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
}`,...(Nn=(Pn=Ze.parameters)==null?void 0:Pn.docs)==null?void 0:Nn.source}}};var Mn,On,Hn;et.parameters={...et.parameters,docs:{...(Mn=et.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
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
}`,...(Hn=(On=et.parameters)==null?void 0:On.docs)==null?void 0:Hn.source}}};var Wn,Ln,$n;tt.parameters={...tt.parameters,docs:{...(Wn=tt.parameters)==null?void 0:Wn.docs,source:{originalSource:`{
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
}`,...($n=(Ln=tt.parameters)==null?void 0:Ln.docs)==null?void 0:$n.source}}};var Fn,Bn,In;nt.parameters={...nt.parameters,docs:{...(Fn=nt.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
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
}`,...(In=(Bn=nt.parameters)==null?void 0:Bn.docs)==null?void 0:In.source}}};var qn,Un,Yn;ot.parameters={...ot.parameters,docs:{...(qn=ot.parameters)==null?void 0:qn.docs,source:{originalSource:`{
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
}`,...(Yn=(Un=ot.parameters)==null?void 0:Un.docs)==null?void 0:Yn.source}}};var Vn,Xn,Gn;at.parameters={...at.parameters,docs:{...(Vn=at.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
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
}`,...(Gn=(Xn=at.parameters)==null?void 0:Xn.docs)==null?void 0:Gn.source}}};var Kn,Jn,Qn;st.parameters={...st.parameters,docs:{...(Kn=st.parameters)==null?void 0:Kn.docs,source:{originalSource:`{
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
}`,...(Qn=(Jn=st.parameters)==null?void 0:Jn.docs)==null?void 0:Qn.source}}};var Zn,eo,to,no,oo;Ce.parameters={...Ce.parameters,docs:{...(Zn=Ce.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
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
}`,...(to=(eo=Ce.parameters)==null?void 0:eo.docs)==null?void 0:to.source},description:{story:`Demonstrates all row sizes (small: 44px, default: 64px, large: 80px) with expandable content.
Useful for testing that row heights behave correctly when expanding/collapsing cells with long text.`,...(oo=(no=Ce.parameters)==null?void 0:no.docs)==null?void 0:oo.description}}};var ao,so,ro,io,lo;Re.parameters={...Re.parameters,docs:{...(ao=Re.parameters)==null?void 0:ao.docs,source:{originalSource:`{
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
}`,...(ro=(so=Re.parameters)==null?void 0:so.docs)==null?void 0:ro.source},description:{story:`Simple demonstration of row sizes without expand functionality.

Row sizes are configured via \`rowConfigs: { size: 'small' | 'medium' | 'large' }\` in each row data object.

Available sizes:
- **small**: 44px height - best for dense data tables
- **medium** (default): 64px height - standard table row
- **large**: 80px height - for tables with more visual prominence`,...(lo=(io=Re.parameters)==null?void 0:io.docs)==null?void 0:lo.description}}};var co,uo,po,ho,mo;ke.parameters={...ke.parameters,docs:{...(co=ke.parameters)==null?void 0:co.docs,source:{originalSource:`{
  render: () => <CustomHeaderDemo />
}`,...(po=(uo=ke.parameters)==null?void 0:uo.docs)==null?void 0:po.source},description:{story:`Demonstrates how to customize the table header background color using CSS.

The Table component supports custom header styling via the \`headerClassName\` prop.
Pinned columns and expand cells will inherit the header background color automatically.

This is useful when you need to match the table header with your application's design,
for example, using a gray header on a white background or vice versa.`,...(mo=(ho=ke.parameters)==null?void 0:ho.docs)==null?void 0:mo.description}}};var fo,go,wo,xo,yo;De.parameters={...De.parameters,docs:{...(fo=De.parameters)==null?void 0:fo.docs,source:{originalSource:`{
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
}`,...(wo=(go=De.parameters)==null?void 0:go.docs)==null?void 0:wo.source},description:{story:`Demonstrates resizable columns with default constraints (min: 50px, max: 500px).

Users can drag the column borders in the header to adjust column widths.
Initial widths are taken from column.width property.`,...(yo=(xo=De.parameters)==null?void 0:xo.docs)==null?void 0:yo.description}}};var bo,So,vo,Co,Ro;Te.parameters={...Te.parameters,docs:{...(bo=Te.parameters)==null?void 0:bo.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    minWidth: '600px'
  }}>
      <Table {...args} primaryColumn={primaryColumns} data={data} fixedColumns={fixedColumns} />
    </div>,
  args: {
    isResizable: true
  }
}`,...(vo=(So=Te.parameters)==null?void 0:So.docs)==null?void 0:vo.source},description:{story:"Demonstrates resizable columns without row actions.",...(Ro=(Co=Te.parameters)==null?void 0:Co.docs)==null?void 0:Ro.description}}};var ko,Do,To,Eo,zo;Ee.parameters={...Ee.parameters,docs:{...(ko=Ee.parameters)==null?void 0:ko.docs,source:{originalSource:`{
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
}`,...(To=(Do=Ee.parameters)==null?void 0:Do.docs)==null?void 0:To.source},description:{story:`Demonstrates resizable columns with custom min/max constraints.

Columns can be resized between 80px and 300px.`,...(zo=(Eo=Ee.parameters)==null?void 0:Eo.docs)==null?void 0:zo.description}}};var _o,Ao,jo,Po,No;ze.parameters={...ze.parameters,docs:{...(_o=ze.parameters)==null?void 0:_o.docs,source:{originalSource:`{
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
}`,...(jo=(Ao=ze.parameters)==null?void 0:Ao.docs)==null?void 0:jo.source},description:{story:"Demonstrates resizable columns with fixed header.",...(No=(Po=ze.parameters)==null?void 0:Po.docs)==null?void 0:No.description}}};var Mo,Oo,Ho,Wo,Lo;_e.parameters={..._e.parameters,docs:{...(Mo=_e.parameters)==null?void 0:Mo.docs,source:{originalSource:`{
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
}`,...(Ho=(Oo=_e.parameters)==null?void 0:Oo.docs)==null?void 0:Ho.source},description:{story:"Demonstrates resizable columns with horizontal scroll and fixed header.",...(Lo=(Wo=_e.parameters)==null?void 0:Wo.docs)==null?void 0:Lo.description}}};var $o,Fo,Bo,Io,qo;Ae.parameters={...Ae.parameters,docs:{...($o=Ae.parameters)==null?void 0:$o.docs,source:{originalSource:`{
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
}`,...(Bo=(Fo=Ae.parameters)==null?void 0:Fo.docs)==null?void 0:Bo.source},description:{story:"Demonstrates resizable columns with pinned columns.",...(qo=(Io=Ae.parameters)==null?void 0:Io.docs)==null?void 0:qo.description}}};var Uo,Yo,Vo,Xo,Go;je.parameters={...je.parameters,docs:{...(Uo=je.parameters)==null?void 0:Uo.docs,source:{originalSource:`{
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
}`,...(Vo=(Yo=je.parameters)==null?void 0:Yo.docs)==null?void 0:Vo.source},description:{story:`Demonstrates a table with pinned header when scrolling is handled by an external container.

This example shows:
- Horizontal scrolling when table content is wider than the container
- Pinned header that pins to the top when scrolling vertically in the external container
- Pinned columns that stay visible during horizontal scroll
- Gradient effects on pinned columns and right edge

Note: This is different from a fixed header with internal table scrolling. Here, the scroll
container is external (parent div), and the header pins when scrolling reaches the table top.

Scroll vertically in the external container to see the header pinning, and horizontally to see
pinned columns and gradients.`,...(Go=(Xo=je.parameters)==null?void 0:Xo.docs)==null?void 0:Go.description}}};var Ko,Jo,Qo,Zo,ea;Pe.parameters={...Pe.parameters,docs:{...(Ko=Pe.parameters)==null?void 0:Ko.docs,source:{originalSource:`{
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
}`,...(Qo=(Jo=Pe.parameters)==null?void 0:Jo.docs)==null?void 0:Qo.source},description:{story:"Demonstrates resizable columns with horizontal scroll and checkbox outside.",...(ea=(Zo=Pe.parameters)==null?void 0:Zo.docs)==null?void 0:ea.description}}};const qr=["Default","FixedHeader","HorizontalScrollWithFixedHeaderControl","PinnedColumnsWithFixedHeader","ExpandableRows","ExpandableRowsWithDefaultState","CellExpansion","RowSizesWithExpand","RowSizes","CustomHeaderStyle","ResizableColumns","ResizableColumnsWithoutActions","ResizableColumnsWithConstraints","ResizableColumnsWithFixedHeader","ResizableColumnsWithHorizontalScroll","ResizableColumnsWithPinnedColumns","HorizontalScrollWithPinnedHeader","ResizableColumnsWithCheckboxOutside"];export{st as CellExpansion,ke as CustomHeaderStyle,Ze as Default,ot as ExpandableRows,at as ExpandableRowsWithDefaultState,et as FixedHeader,tt as HorizontalScrollWithFixedHeaderControl,je as HorizontalScrollWithPinnedHeader,nt as PinnedColumnsWithFixedHeader,De as ResizableColumns,Pe as ResizableColumnsWithCheckboxOutside,Ee as ResizableColumnsWithConstraints,ze as ResizableColumnsWithFixedHeader,_e as ResizableColumnsWithHorizontalScroll,Ae as ResizableColumnsWithPinnedColumns,Te as ResizableColumnsWithoutActions,Re as RowSizes,Ce as RowSizesWithExpand,qr as __namedExportsOrder,Ir as default};
