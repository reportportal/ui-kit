import{j as i}from"./jsx-runtime-2f188e98.js";import{b as Ma,r as p}from"./index-3553ef47.js";import{p as dt}from"./index-4c891f75.js";import{r as Wt}from"./index-d0bd1ed5.js";import{c as Na}from"./clsx-9eb2d624.js";import{c as Lt}from"./bind-d8141dee.js";import{b as Oa,a as bn,S as Ha}from"./resizeColumn-b3ee80ba.js";import{S as Sn}from"./chevronDownDropdown-69a9d5c1.js";import{C as Ke}from"./checkbox-168f7e30.js";import{T as Wa}from"./tooltip-8ee00f8c.js";import{i as La}from"./isEmpty-6ac0b123.js";import{P as $a}from"./popover-79ca4f84.js";import{S as Fa}from"./meatballMenu-8b9878d9.js";import"./keyCodes-e5060420.js";import"./floating-ui.react-60d1f04e.js";import"./floating-ui.react-dom-a94e415a.js";import"./floatingUi-59569704.js";const ta=e=>typeof e=="string";var $t={exports:{}},We={},ct={exports:{}},na={};const Ba=Ma(Na);var O={},Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.dontSetMe=Va;Z.findInArray=Ia;Z.int=Ya;Z.isFunction=qa;Z.isNum=Ua;function Ia(e,t){for(let n=0,o=e.length;n<o;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function qa(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function Ua(e){return typeof e=="number"&&!isNaN(e)}function Ya(e){return parseInt(e,10)}function Va(e,t,n){if(e[t])return new Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`)}var ue={};Object.defineProperty(ue,"__esModule",{value:!0});ue.browserPrefixToKey=aa;ue.browserPrefixToStyle=Xa;ue.default=void 0;ue.getPrefix=oa;const kt=["Moz","Webkit","O","ms"];function oa(){var n,o;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const t=(o=(n=window.document)==null?void 0:n.documentElement)==null?void 0:o.style;if(!t||e in t)return"";for(let a=0;a<kt.length;a++)if(aa(e,kt[a])in t)return kt[a];return""}function aa(e,t){return t?`${t}${Ga(e)}`:e}function Xa(e,t){return t?`-${t.toLowerCase()}-${e}`:e}function Ga(e){let t="",n=!0;for(let o=0;o<e.length;o++)n?(t+=e[o].toUpperCase(),n=!1):e[o]==="-"?n=!0:t+=e[o];return t}ue.default=oa();Object.defineProperty(O,"__esModule",{value:!0});O.addClassName=ia;O.addEvent=Ja;O.addUserSelectStyles=ls;O.createCSSTransform=as;O.createSVGTransform=ss;O.getTouch=rs;O.getTouchIdentifier=is;O.getTranslation=Ft;O.innerHeight=ts;O.innerWidth=ns;O.matchesSelector=ra;O.matchesSelectorAndParentsTo=Ka;O.offsetXYFromParent=os;O.outerHeight=Za;O.outerWidth=es;O.removeClassName=la;O.removeEvent=Qa;O.scheduleRemoveUserSelectStyles=ds;var V=Z,vn=sa(ue);function sa(e,t){if(typeof WeakMap=="function")var n=new WeakMap,o=new WeakMap;return(sa=function(a,s){if(!s&&a&&a.__esModule)return a;var r,u,d={__proto__:null,default:a};if(a===null||typeof a!="object"&&typeof a!="function")return d;if(r=s?o:n){if(r.has(a))return r.get(a);r.set(a,d)}for(const l in a)l!=="default"&&{}.hasOwnProperty.call(a,l)&&((u=(r=Object.defineProperty)&&Object.getOwnPropertyDescriptor(a,l))&&(u.get||u.set)?r(d,l,u):d[l]=a[l]);return d})(e,t)}let Je="";function ra(e,t){return Je||(Je=(0,V.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,V.isFunction)(e[n])})),(0,V.isFunction)(e[Je])?e[Je](t):!1}function Ka(e,t,n){let o=e;do{if(ra(o,t))return!0;if(o===n)return!1;o=o.parentNode}while(o);return!1}function Ja(e,t,n,o){if(!e)return;const a={capture:!0,...o};e.addEventListener?e.addEventListener(t,n,a):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function Qa(e,t,n,o){if(!e)return;const a={capture:!0,...o};e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function Za(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,V.int)(n.borderTopWidth),t+=(0,V.int)(n.borderBottomWidth),t}function es(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,V.int)(n.borderLeftWidth),t+=(0,V.int)(n.borderRightWidth),t}function ts(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,V.int)(n.paddingTop),t-=(0,V.int)(n.paddingBottom),t}function ns(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,V.int)(n.paddingLeft),t-=(0,V.int)(n.paddingRight),t}function os(e,t,n){const a=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),s=(e.clientX+t.scrollLeft-a.left)/n,r=(e.clientY+t.scrollTop-a.top)/n;return{x:s,y:r}}function as(e,t){const n=Ft(e,t,"px");return{[(0,vn.browserPrefixToKey)("transform",vn.default)]:n}}function ss(e,t){return Ft(e,t,"")}function Ft(e,t,n){let{x:o,y:a}=e,s=`translate(${o}${n},${a}${n})`;if(t){const r=`${typeof t.x=="string"?t.x:t.x+n}`,u=`${typeof t.y=="string"?t.y:t.y+n}`;s=`translate(${r}, ${u})`+s}return s}function rs(e,t){return e.targetTouches&&(0,V.findInArray)(e.targetTouches,n=>t===n.identifier)||e.changedTouches&&(0,V.findInArray)(e.changedTouches,n=>t===n.identifier)}function is(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function ls(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&ia(e.body,"react-draggable-transparent-selection")}function ds(e){window.requestAnimationFrame?window.requestAnimationFrame(()=>{Cn(e)}):Cn(e)}function Cn(e){if(e)try{if(e.body&&la(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function ia(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp(`(?:^|\\s)${t}(?!\\S)`))||(e.className+=` ${t}`)}function la(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(`(?:^|\\s)${t}(?!\\S)`,"g"),"")}var ee={};Object.defineProperty(ee,"__esModule",{value:!0});ee.canDragX=ps;ee.canDragY=hs;ee.createCoreData=fs;ee.createDraggableData=gs;ee.getBoundPosition=cs;ee.getControlPosition=ms;ee.snapToGrid=us;var Y=Z,me=O;function cs(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:o}=e.props;o=typeof o=="string"?o:ws(o);const a=Bt(e);if(typeof o=="string"){const{ownerDocument:s}=a,r=s.defaultView;let u;if(o==="parent"?u=a.parentNode:u=a.getRootNode().querySelector(o),!(u instanceof r.HTMLElement))throw new Error('Bounds selector "'+o+'" could not find an element.');const d=u,l=r.getComputedStyle(a),m=r.getComputedStyle(d);o={left:-a.offsetLeft+(0,Y.int)(m.paddingLeft)+(0,Y.int)(l.marginLeft),top:-a.offsetTop+(0,Y.int)(m.paddingTop)+(0,Y.int)(l.marginTop),right:(0,me.innerWidth)(d)-(0,me.outerWidth)(a)-a.offsetLeft+(0,Y.int)(m.paddingRight)-(0,Y.int)(l.marginRight),bottom:(0,me.innerHeight)(d)-(0,me.outerHeight)(a)-a.offsetTop+(0,Y.int)(m.paddingBottom)-(0,Y.int)(l.marginBottom)}}return(0,Y.isNum)(o.right)&&(t=Math.min(t,o.right)),(0,Y.isNum)(o.bottom)&&(n=Math.min(n,o.bottom)),(0,Y.isNum)(o.left)&&(t=Math.max(t,o.left)),(0,Y.isNum)(o.top)&&(n=Math.max(n,o.top)),[t,n]}function us(e,t,n){const o=Math.round(t/e[0])*e[0],a=Math.round(n/e[1])*e[1];return[o,a]}function ps(e){return e.props.axis==="both"||e.props.axis==="x"}function hs(e){return e.props.axis==="both"||e.props.axis==="y"}function ms(e,t,n){const o=typeof t=="number"?(0,me.getTouch)(e,t):null;if(typeof t=="number"&&!o)return null;const a=Bt(n),s=n.props.offsetParent||a.offsetParent||a.ownerDocument.body;return(0,me.offsetXYFromParent)(o||e,s,n.props.scale)}function fs(e,t,n){const o=!(0,Y.isNum)(e.lastX),a=Bt(e);return o?{node:a,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:a,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function gs(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function ws(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Bt(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var ut={},pt={};Object.defineProperty(pt,"__esModule",{value:!0});pt.default=xs;function xs(){}Object.defineProperty(ut,"__esModule",{value:!0});ut.default=void 0;var Dt=da(p),F=It(dt),ys=It(Wt),$=O,re=ee,Tt=Z,Ce=It(pt);function It(e){return e&&e.__esModule?e:{default:e}}function da(e,t){if(typeof WeakMap=="function")var n=new WeakMap,o=new WeakMap;return(da=function(a,s){if(!s&&a&&a.__esModule)return a;var r,u,d={__proto__:null,default:a};if(a===null||typeof a!="object"&&typeof a!="function")return d;if(r=s?o:n){if(r.has(a))return r.get(a);r.set(a,d)}for(const l in a)l!=="default"&&{}.hasOwnProperty.call(a,l)&&((u=(r=Object.defineProperty)&&Object.getOwnPropertyDescriptor(a,l))&&(u.get||u.set)?r(d,l,u):d[l]=a[l]);return d})(e,t)}function B(e,t,n){return(t=bs(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bs(e){var t=Ss(e,"string");return typeof t=="symbol"?t:t+""}function Ss(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const K={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let ie=K.mouse,ht=class extends Dt.Component{constructor(){super(...arguments),B(this,"dragging",!1),B(this,"lastX",NaN),B(this,"lastY",NaN),B(this,"touchIdentifier",null),B(this,"mounted",!1),B(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:o}=n;if(this.props.disabled||!(t.target instanceof o.defaultView.Node)||this.props.handle&&!(0,$.matchesSelectorAndParentsTo)(t.target,this.props.handle,n)||this.props.cancel&&(0,$.matchesSelectorAndParentsTo)(t.target,this.props.cancel,n))return;t.type==="touchstart"&&!this.props.allowMobileScroll&&t.preventDefault();const a=(0,$.getTouchIdentifier)(t);this.touchIdentifier=a;const s=(0,re.getControlPosition)(t,a,this);if(s==null)return;const{x:r,y:u}=s,d=(0,re.createCoreData)(this,r,u);(0,Ce.default)("DraggableCore: handleDragStart: %j",d),(0,Ce.default)("calling",this.props.onStart),!(this.props.onStart(t,d)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,$.addUserSelectStyles)(o),this.dragging=!0,this.lastX=r,this.lastY=u,(0,$.addEvent)(o,ie.move,this.handleDrag),(0,$.addEvent)(o,ie.stop,this.handleDragStop))}),B(this,"handleDrag",t=>{const n=(0,re.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:o,y:a}=n;if(Array.isArray(this.props.grid)){let u=o-this.lastX,d=a-this.lastY;if([u,d]=(0,re.snapToGrid)(this.props.grid,u,d),!u&&!d)return;o=this.lastX+u,a=this.lastY+d}const s=(0,re.createCoreData)(this,o,a);if((0,Ce.default)("DraggableCore: handleDrag: %j",s),this.props.onDrag(t,s)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const d=document.createEvent("MouseEvents");d.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(d)}return}this.lastX=o,this.lastY=a}),B(this,"handleDragStop",t=>{if(!this.dragging)return;const n=(0,re.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:o,y:a}=n;if(Array.isArray(this.props.grid)){let d=o-this.lastX||0,l=a-this.lastY||0;[d,l]=(0,re.snapToGrid)(this.props.grid,d,l),o=this.lastX+d,a=this.lastY+l}const s=(0,re.createCoreData)(this,o,a);if(this.props.onStop(t,s)===!1||this.mounted===!1)return!1;const u=this.findDOMNode();u&&this.props.enableUserSelectHack&&(0,$.scheduleRemoveUserSelectStyles)(u.ownerDocument),(0,Ce.default)("DraggableCore: handleDragStop: %j",s),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,u&&((0,Ce.default)("DraggableCore: Removing handlers"),(0,$.removeEvent)(u.ownerDocument,ie.move,this.handleDrag),(0,$.removeEvent)(u.ownerDocument,ie.stop,this.handleDragStop))}),B(this,"onMouseDown",t=>(ie=K.mouse,this.handleDragStart(t))),B(this,"onMouseUp",t=>(ie=K.mouse,this.handleDragStop(t))),B(this,"onTouchStart",t=>(ie=K.touch,this.handleDragStart(t))),B(this,"onTouchEnd",t=>(ie=K.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,$.addEvent)(t,K.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:n}=t;(0,$.removeEvent)(n,K.mouse.move,this.handleDrag),(0,$.removeEvent)(n,K.touch.move,this.handleDrag),(0,$.removeEvent)(n,K.mouse.stop,this.handleDragStop),(0,$.removeEvent)(n,K.touch.stop,this.handleDragStop),(0,$.removeEvent)(t,K.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,$.scheduleRemoveUserSelectStyles)(n)}}findDOMNode(){var t,n,o;return(t=this.props)!=null&&t.nodeRef?(o=(n=this.props)==null?void 0:n.nodeRef)==null?void 0:o.current:ys.default.findDOMNode(this)}render(){return Dt.cloneElement(Dt.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};ut.default=ht;B(ht,"displayName","DraggableCore");B(ht,"propTypes",{allowAnyClick:F.default.bool,allowMobileScroll:F.default.bool,children:F.default.node.isRequired,disabled:F.default.bool,enableUserSelectHack:F.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:F.default.arrayOf(F.default.number),handle:F.default.string,cancel:F.default.string,nodeRef:F.default.object,onStart:F.default.func,onDrag:F.default.func,onStop:F.default.func,onMouseDown:F.default.func,scale:F.default.number,className:Tt.dontSetMe,style:Tt.dontSetMe,transform:Tt.dontSetMe});B(ht,"defaultProps",{allowAnyClick:!1,allowMobileScroll:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return d.default}}),e.default=void 0;var t=g(p),n=m(dt),o=m(Wt),a=Ba,s=O,r=ee,u=Z,d=m(ut),l=m(pt);function m(b){return b&&b.__esModule?b:{default:b}}function g(b,S){if(typeof WeakMap=="function")var R=new WeakMap,C=new WeakMap;return(g=function(k,E){if(!E&&k&&k.__esModule)return k;var W,L,A={__proto__:null,default:k};if(k===null||typeof k!="object"&&typeof k!="function")return A;if(W=E?C:R){if(W.has(k))return W.get(k);W.set(k,A)}for(const U in k)U!=="default"&&{}.hasOwnProperty.call(k,U)&&((L=(W=Object.defineProperty)&&Object.getOwnPropertyDescriptor(k,U))&&(L.get||L.set)?W(A,U,L):A[U]=k[U]);return A})(b,S)}function h(){return h=Object.assign?Object.assign.bind():function(b){for(var S=1;S<arguments.length;S++){var R=arguments[S];for(var C in R)({}).hasOwnProperty.call(R,C)&&(b[C]=R[C])}return b},h.apply(null,arguments)}function w(b,S,R){return(S=v(S))in b?Object.defineProperty(b,S,{value:R,enumerable:!0,configurable:!0,writable:!0}):b[S]=R,b}function v(b){var S=f(b,"string");return typeof S=="symbol"?S:S+""}function f(b,S){if(typeof b!="object"||!b)return b;var R=b[Symbol.toPrimitive];if(R!==void 0){var C=R.call(b,S||"default");if(typeof C!="object")return C;throw new TypeError("@@toPrimitive must return a primitive value.")}return(S==="string"?String:Number)(b)}class D extends t.Component{static getDerivedStateFromProps(S,R){let{position:C}=S,{prevPropsPosition:k}=R;return C&&(!k||C.x!==k.x||C.y!==k.y)?((0,l.default)("Draggable: getDerivedStateFromProps %j",{position:C,prevPropsPosition:k}),{x:C.x,y:C.y,prevPropsPosition:{...C}}):null}constructor(S){super(S),w(this,"onDragStart",(R,C)=>{if((0,l.default)("Draggable: onDragStart: %j",C),this.props.onStart(R,(0,r.createDraggableData)(this,C))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),w(this,"onDrag",(R,C)=>{if(!this.state.dragging)return!1;(0,l.default)("Draggable: onDrag: %j",C);const k=(0,r.createDraggableData)(this,C),E={x:k.x,y:k.y,slackX:0,slackY:0};if(this.props.bounds){const{x:L,y:A}=E;E.x+=this.state.slackX,E.y+=this.state.slackY;const[U,$e]=(0,r.getBoundPosition)(this,E.x,E.y);E.x=U,E.y=$e,E.slackX=this.state.slackX+(L-E.x),E.slackY=this.state.slackY+(A-E.y),k.x=E.x,k.y=E.y,k.deltaX=E.x-this.state.x,k.deltaY=E.y-this.state.y}if(this.props.onDrag(R,k)===!1)return!1;this.setState(E)}),w(this,"onDragStop",(R,C)=>{if(!this.state.dragging||this.props.onStop(R,(0,r.createDraggableData)(this,C))===!1)return!1;(0,l.default)("Draggable: onDragStop: %j",C);const E={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:L,y:A}=this.props.position;E.x=L,E.y=A}this.setState(E)}),this.state={dragging:!1,dragged:!1,x:S.position?S.position.x:S.defaultPosition.x,y:S.position?S.position.y:S.defaultPosition.y,prevPropsPosition:{...S.position},slackX:0,slackY:0,isElementSVG:!1},S.position&&!(S.onDrag||S.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.state.dragging&&this.setState({dragging:!1})}findDOMNode(){var S,R;return((R=(S=this.props)==null?void 0:S.nodeRef)==null?void 0:R.current)??o.default.findDOMNode(this)}render(){const{axis:S,bounds:R,children:C,defaultPosition:k,defaultClassName:E,defaultClassNameDragging:W,defaultClassNameDragged:L,position:A,positionOffset:U,scale:$e,...ft}=this.props;let Fe={},Be=null;const j=!!!A||this.state.dragging,ye=A||k,Ie={x:(0,r.canDragX)(this)&&j?this.state.x:ye.x,y:(0,r.canDragY)(this)&&j?this.state.y:ye.y};this.state.isElementSVG?Be=(0,s.createSVGTransform)(Ie,U):Fe=(0,s.createCSSTransform)(Ie,U);const gt=(0,a.clsx)(C.props.className||"",E,{[W]:this.state.dragging,[L]:this.state.dragged});return t.createElement(d.default,h({},ft,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(C),{className:gt,style:{...C.props.style,...Fe},transform:Be}))}}e.default=D,w(D,"displayName","Draggable"),w(D,"propTypes",{...d.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:u.dontSetMe,style:u.dontSetMe,transform:u.dontSetMe}),w(D,"defaultProps",{...d.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(na);const{default:ca,DraggableCore:vs}=na;ct.exports=ca;ct.exports.default=ca;ct.exports.DraggableCore=vs;var Cs=ct.exports,qt={};qt.__esModule=!0;qt.cloneElement=zs;var Rs=ks(p);function ks(e){return e&&e.__esModule?e:{default:e}}function Rn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function kn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rn(Object(n),!0).forEach(function(o){Ds(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rn(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Ds(e,t,n){return t=Ts(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ts(e){var t=Es(e,"string");return typeof t=="symbol"?t:String(t)}function Es(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zs(e,t){return t.style&&e.props.style&&(t.style=kn(kn({},e.props.style),t.style)),t.className&&e.props.className&&(t.className=e.props.className+" "+t.className),Rs.default.cloneElement(e,t)}var Le={};Le.__esModule=!0;Le.resizableProps=void 0;var T=_s(dt);function _s(e){return e&&e.__esModule?e:{default:e}}var As={axis:T.default.oneOf(["both","x","y","none"]),className:T.default.string,children:T.default.element.isRequired,draggableOpts:T.default.shape({allowAnyClick:T.default.bool,cancel:T.default.string,children:T.default.node,disabled:T.default.bool,enableUserSelectHack:T.default.bool,offsetParent:T.default.node,grid:T.default.arrayOf(T.default.number),handle:T.default.string,nodeRef:T.default.object,onStart:T.default.func,onDrag:T.default.func,onStop:T.default.func,onMouseDown:T.default.func,scale:T.default.number}),height:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var a=n[0];if(a.axis==="both"||a.axis==="y"){var s;return(s=T.default.number).isRequired.apply(s,n)}return T.default.number.apply(T.default,n)},handle:T.default.oneOfType([T.default.node,T.default.func]),handleSize:T.default.arrayOf(T.default.number),lockAspectRatio:T.default.bool,maxConstraints:T.default.arrayOf(T.default.number),minConstraints:T.default.arrayOf(T.default.number),onResizeStop:T.default.func,onResizeStart:T.default.func,onResize:T.default.func,resizeHandles:T.default.arrayOf(T.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:T.default.number,width:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var a=n[0];if(a.axis==="both"||a.axis==="x"){var s;return(s=T.default.number).isRequired.apply(s,n)}return T.default.number.apply(T.default,n)}};Le.resizableProps=As;We.__esModule=!0;We.default=void 0;var Re=Os(p),js=Cs,Ps=qt,Ms=Le,Ns=["children","className","draggableOpts","width","height","handle","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"];function ua(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(ua=function(a){return a?n:t})(e)}function Os(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=ua(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var r=a?Object.getOwnPropertyDescriptor(e,s):null;r&&(r.get||r.set)?Object.defineProperty(o,s,r):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o}function Pt(){return Pt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Pt.apply(this,arguments)}function Hs(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Dn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Et(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dn(Object(n),!0).forEach(function(o){Ws(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dn(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Ws(e,t,n){return t=Ls(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ls(e){var t=$s(e,"string");return typeof t=="symbol"?t:String(t)}function $s(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Fs(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Mt(e,t)}function Mt(e,t){return Mt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},Mt(e,t)}var Ut=function(e){Fs(t,e);function t(){for(var o,a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return o=e.call.apply(e,[this].concat(s))||this,o.handleRefs={},o.lastHandleRect=null,o.slack=null,o}var n=t.prototype;return n.componentWillUnmount=function(){this.resetData()},n.resetData=function(){this.lastHandleRect=this.slack=null},n.runConstraints=function(a,s){var r=this.props,u=r.minConstraints,d=r.maxConstraints,l=r.lockAspectRatio;if(!u&&!d&&!l)return[a,s];if(l){var m=this.props.width/this.props.height,g=a-this.props.width,h=s-this.props.height;Math.abs(g)>Math.abs(h*m)?s=a/m:a=s*m}var w=a,v=s,f=this.slack||[0,0],D=f[0],b=f[1];return a+=D,s+=b,u&&(a=Math.max(u[0],a),s=Math.max(u[1],s)),d&&(a=Math.min(d[0],a),s=Math.min(d[1],s)),this.slack=[D+(w-a),b+(v-s)],[a,s]},n.resizeHandler=function(a,s){var r=this;return function(u,d){var l=d.node,m=d.deltaX,g=d.deltaY;a==="onResizeStart"&&r.resetData();var h=(r.props.axis==="both"||r.props.axis==="x")&&s!=="n"&&s!=="s",w=(r.props.axis==="both"||r.props.axis==="y")&&s!=="e"&&s!=="w";if(!(!h&&!w)){var v=s[0],f=s[s.length-1],D=l.getBoundingClientRect();if(r.lastHandleRect!=null){if(f==="w"){var b=D.left-r.lastHandleRect.left;m+=b}if(v==="n"){var S=D.top-r.lastHandleRect.top;g+=S}}r.lastHandleRect=D,f==="w"&&(m=-m),v==="n"&&(g=-g);var R=r.props.width+(h?m/r.props.transformScale:0),C=r.props.height+(w?g/r.props.transformScale:0),k=r.runConstraints(R,C);R=k[0],C=k[1];var E=R!==r.props.width||C!==r.props.height,W=typeof r.props[a]=="function"?r.props[a]:null,L=a==="onResize"&&!E;W&&!L&&(u.persist==null||u.persist(),W(u,{node:l,size:{width:R,height:C},handle:s})),a==="onResizeStop"&&r.resetData()}}},n.renderResizeHandle=function(a,s){var r=this.props.handle;if(!r)return Re.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+a,ref:s});if(typeof r=="function")return r(a,s);var u=typeof r.type=="string",d=Et({ref:s},u?{}:{handleAxis:a});return Re.cloneElement(r,d)},n.render=function(){var a=this,s=this.props,r=s.children,u=s.className,d=s.draggableOpts;s.width,s.height,s.handle,s.handleSize,s.lockAspectRatio,s.axis,s.minConstraints,s.maxConstraints,s.onResize,s.onResizeStop,s.onResizeStart;var l=s.resizeHandles;s.transformScale;var m=Hs(s,Ns);return(0,Ps.cloneElement)(r,Et(Et({},m),{},{className:(u?u+" ":"")+"react-resizable",children:[].concat(r.props.children,l.map(function(g){var h,w=(h=a.handleRefs[g])!=null?h:a.handleRefs[g]=Re.createRef();return Re.createElement(js.DraggableCore,Pt({},d,{nodeRef:w,key:"resizableHandle-"+g,onStop:a.resizeHandler("onResizeStop",g),onStart:a.resizeHandler("onResizeStart",g),onDrag:a.resizeHandler("onResize",g)}),a.renderResizeHandle(g,w))}))}))},t}(Re.Component);We.default=Ut;Ut.propTypes=Ms.resizableProps;Ut.defaultProps={axis:"both",handleSize:[20,20],lockAspectRatio:!1,minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1};var mt={};mt.__esModule=!0;mt.default=void 0;var zt=Ys(p),Bs=pa(dt),Is=pa(We),qs=Le,Us=["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles","style","transformScale"];function pa(e){return e&&e.__esModule?e:{default:e}}function ha(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(ha=function(a){return a?n:t})(e)}function Ys(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=ha(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var r=a?Object.getOwnPropertyDescriptor(e,s):null;r&&(r.get||r.set)?Object.defineProperty(o,s,r):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o}function Nt(){return Nt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Nt.apply(this,arguments)}function Tn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tn(Object(n),!0).forEach(function(o){Vs(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tn(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Vs(e,t,n){return t=Xs(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xs(e){var t=Gs(e,"string");return typeof t=="symbol"?t:String(t)}function Gs(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ks(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Js(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ot(e,t)}function Ot(e,t){return Ot=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},Ot(e,t)}var ma=function(e){Js(t,e);function t(){for(var o,a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return o=e.call.apply(e,[this].concat(s))||this,o.state={width:o.props.width,height:o.props.height,propsWidth:o.props.width,propsHeight:o.props.height},o.onResize=function(u,d){var l=d.size;o.props.onResize?(u.persist==null||u.persist(),o.setState(l,function(){return o.props.onResize&&o.props.onResize(u,d)})):o.setState(l)},o}t.getDerivedStateFromProps=function(a,s){return s.propsWidth!==a.width||s.propsHeight!==a.height?{width:a.width,height:a.height,propsWidth:a.width,propsHeight:a.height}:null};var n=t.prototype;return n.render=function(){var a=this.props,s=a.handle,r=a.handleSize;a.onResize;var u=a.onResizeStart,d=a.onResizeStop,l=a.draggableOpts,m=a.minConstraints,g=a.maxConstraints,h=a.lockAspectRatio,w=a.axis;a.width,a.height;var v=a.resizeHandles,f=a.style,D=a.transformScale,b=Ks(a,Us);return zt.createElement(Is.default,{axis:w,draggableOpts:l,handle:s,handleSize:r,height:this.state.height,lockAspectRatio:h,maxConstraints:g,minConstraints:m,onResizeStart:u,onResize:this.onResize,onResizeStop:d,resizeHandles:v,transformScale:D,width:this.state.width},zt.createElement("div",Nt({},b,{style:rt(rt({},f),{},{width:this.state.width+"px",height:this.state.height+"px"})})))},t}(zt.Component);mt.default=ma;ma.propTypes=rt(rt({},qs.resizableProps),{},{children:Bs.default.element});$t.exports=function(){throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")};var Qs=$t.exports.Resizable=We.default;$t.exports.ResizableBox=mt.default;const Zs="_table_1se0v_1",er="_resizable_1se0v_67",tr="_selectable_1se0v_84",nr="_expanded_1se0v_80",or="_label_1se0v_353",ar={table:Zs,"fixed-header":"_fixed-header_1se0v_10","external-scroll-container":"_external-scroll-container_1se0v_14","horizontally-scrollable-container":"_horizontally-scrollable-container_1se0v_21","table-header":"_table-header_1se0v_26","sticky-header":"_sticky-header_1se0v_34","pinned-header":"_pinned-header_1se0v_44","horizontally-scrollable":"_horizontally-scrollable_1se0v_21",resizable:er,"resizable-column":"_resizable-column_1se0v_67","table-row":"_table-row_1se0v_75","expanded-cell":"_expanded-cell_1se0v_80",selectable:tr,"row-content-wrapper":"_row-content-wrapper_1se0v_88","pinned-column":"_pinned-column_1se0v_96","has-scroll":"_has-scroll_1se0v_96","table-row-content":"_table-row-content_1se0v_99","expand-cell":"_expand-cell_1se0v_116","left-border-accent":"_left-border-accent_1se0v_119","size-small":"_size-small_1se0v_129","size-large":"_size-large_1se0v_140","table-body":"_table-body_1se0v_152","scrollable-body":"_scrollable-body_1se0v_158","table-header-cell":"_table-header-cell_1se0v_222","table-cell":"_table-cell_1se0v_223","action-menu-cell":"_action-menu-cell_1se0v_229","checkbox-cell":"_checkbox-cell_1se0v_257","expand-all-tooltip-wrapper":"_expand-all-tooltip-wrapper_1se0v_302","expand-all-tooltip-content":"_expand-all-tooltip-content_1se0v_311","expand-icon":"_expand-icon_1se0v_320",expanded:nr,"primary-cell":"_primary-cell_1se0v_329",label:or,"sortable-cell":"_sortable-cell_1se0v_367","align-right":"_align-right_1se0v_370","align-center":"_align-center_1se0v_376","table-wrapper":"_table-wrapper_1se0v_430","checkbox-column":"_checkbox-column_1se0v_442","checkbox-header":"_checkbox-header_1se0v_454","checkbox-body":"_checkbox-body_1se0v_478","checkbox-row":"_checkbox-row_1se0v_485"},oe="asc",sr="desc",ge=32,fa=100,rr=48,Ht=48,it=e=>e.toLowerCase()===oe,we=(e,t)=>t?[...e].sort((n,o)=>{const a=n[t.key].content||n[t.key],s=o[t.key].content||o[t.key];return a<s?it(t.direction)?-1:1:a>s?it(t.direction)?1:-1:0}):e,ir=e=>e.map(t=>t.key),Yt=e=>it(e)?sr:oe,ce=e=>"primary"in e&&e.primary===!0,En=e=>{var n;return`size-${((n=e.rowConfigs)==null?void 0:n.size)??"default"}`},_t=e=>ta(e)?e:`${e}px`,lr=(e,t,n,o,a,s=!1)=>{let r=0;o&&(r+=ge),a&&!s&&(r+=ge);for(let u=0;u<e;u++){const d=t[u];if(ce(d)){const l=n.current.get(d.key)||fa;r+=l}else{const l=d,m=ta(l.width)?parseInt(l.width,10)||0:l.width;r+=m}}return r},Qe=(e,t,n,o,a,s,r,u=!1)=>{const d={};if(!ce(e)){const l=e;d.textAlign=l.align}if(t&&n!==void 0){const l=lr(n,o,a,s,r,u);d.left=`${l}px`}return d},zn=(e,t,n,o,a,s=!1,r,u=!1,d=!1)=>{const l=[];n&&l.push(`${ge}px`),s&&o&&!d&&l.push(`${ge}px`);const m=g=>{if((r==null?void 0:r[g.key])!==void 0){l.push(`${r[g.key]}px`);return}if(ce(g)){const h=g;if(u&&h.width){l.push(_t(h.width));return}const w=h.width?_t(h.width):`${fa}px`;l.push(`minmax(${w}, 1fr)`)}else{const w=_t(g.width);l.push(w)}};return e.forEach(m),t.forEach(m),a&&l.push(`${rr}px`),l.join(" ")},dr=({primaryColumns:e,fixedColumns:t,pinnedColumnKeys:n})=>p.useMemo(()=>{const o=[],a=[];return e.forEach(s=>{const r={...s,primary:!0};n.includes(s.key)?o.push(r):a.push(r)}),t.forEach(s=>{n.includes(s.key)?o.push(s):a.push(s)}),{pinnedColumns:o,scrollableColumns:a}},[e,t,n]),cr=()=>{const[e,t]=p.useState(null),[n,o]=p.useState(null),a=p.useCallback(d=>{t(d)},[]),s=p.useCallback(()=>{t(null)},[]),r=p.useCallback(d=>{o(d)},[]),u=p.useCallback(()=>{o(null)},[]);return{hoveredColumn:e,hoveredRow:n,handleColumnMouseEnter:a,handleColumnMouseLeave:s,handleRowMouseEnter:r,handleRowMouseLeave:u}},ur=({primaryColumns:e,fixedColumns:t,expandedRowIds:n,onToggleRowExpansion:o})=>{const[a,s]=p.useState(new Set);p.useEffect(()=>{const d=[...e.map(m=>m.key),...t.map(m=>m.key)],l=new Set;n.forEach(m=>{d.forEach(g=>{l.add(`${m}-${g}`)})}),s(m=>{if(m.size===l.size){let g=!0;if(m.forEach(h=>{l.has(h)||(g=!1)}),g)return m}return l})},[n,e,t]);const r=p.useCallback(d=>{const l=new Set(a),m=n.includes(d),g=[...e.map(h=>h.key),...t.map(h=>h.key)];m?g.forEach(h=>{const w=`${d}-${h}`;l.delete(w)}):g.forEach(h=>{const w=`${d}-${h}`;l.add(w)}),s(l),o(d)},[a,n,e,t,o]),u=p.useCallback((d,l)=>{const m=`${d}-${l}`;return a.has(m)},[a]);return{expandedCells:a,handleToggleRowExpansion:r,isCellExpanded:u}},pr=()=>{const e=p.useRef(new Map),t=p.useCallback(n=>o=>{if(!o)return;const a=o.getBoundingClientRect().width;a>0&&e.current.set(n,a)},[]);return{columnWidthsRef:e,setCellRef:t}},hr=({enabled:e=!1,minWidth:t=50,maxWidth:n=500,columns:o=[],columnWidthsRef:a,onColumnResize:s,initialColumnWidths:r})=>{const[u,d]=p.useState({}),l=p.useRef(o),m=p.useRef(void 0);p.useEffect(()=>{l.current=o},[o]);const g=p.useCallback(f=>{const D=o.find(b=>b.key===f);return{minWidth:(D==null?void 0:D.minWidth)??t,maxWidth:(D==null?void 0:D.maxWidth)??n}},[o,t,n]);p.useEffect(()=>{if(r&&m.current!==r){const D={};Object.entries(r).forEach(([b,S])=>{const R=l.current.find(E=>E.key===b),C=(R==null?void 0:R.minWidth)??t,k=(R==null?void 0:R.maxWidth)??n;D[b]=Math.min(k,Math.max(C,S))}),d(D),m.current=r}},[r,t,n]);const h=p.useCallback(()=>{if(!e||Object.keys(u).length>0||!a)return;const f={};a.current.forEach((D,b)=>{f[b]=D}),d(f)},[e,u,a]),w=p.useCallback(f=>(D,{size:b})=>{if(!e)return;const{minWidth:S,maxWidth:R}=g(f),C=Math.min(R,Math.max(S,b.width));d(k=>({...k,[f]:C}))},[e,g]),v=p.useCallback(f=>()=>{!e||!u[f]||s==null||s(f,u[f])},[e,u,s]);return{columnWidths:u,handleResize:w,handleResizeStop:v,handleResizeStart:h}},mr=(e,t,n,o,a,s,r,u)=>p.useMemo(()=>{if(!e)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};if(!(a+e.clientWidth<r))return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const l=e.getBoundingClientRect(),m=(t==null?void 0:t.offsetHeight)||0,g=n==null?void 0:n.getBoundingClientRect(),h=Math.min(l.bottom,(g==null?void 0:g.bottom)||Number.MAX_SAFE_INTEGER);let w;o&&n&&g?w=g.top-l.top+m:w=m;const v=l.top+w,D=e.scrollWidth>e.clientWidth?e.offsetHeight-e.clientHeight:0,b=h-v-D,R=e.scrollHeight>e.clientHeight?e.offsetWidth-e.clientWidth:0,C=l.right-Ht-R;return{visible:!0,position:{top:v,left:C},size:{width:Ht,height:b}}},[e,t,n,o,a,s,r,u]),fr=(e,t,n,o,a,s,r,u)=>p.useMemo(()=>{if(!e)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};if(!(t>0))return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const l=e.querySelector('[data-row-index="0"]');if(!l)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const m=Array.from(l.querySelectorAll("[data-pinned-index]"));if(m.length===0)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const g=Math.max(...m.map(L=>parseInt(L.getAttribute("data-pinned-index")||"-1",10)));if(g<0)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const h=m.find(L=>parseInt(L.getAttribute("data-pinned-index")||"-1",10)===g);if(!h)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const w=h.getBoundingClientRect(),v=e.getBoundingClientRect(),f=(n==null?void 0:n.offsetHeight)||0,D=o==null?void 0:o.getBoundingClientRect(),b=w.right,S=Math.min(v.bottom,(D==null?void 0:D.bottom)||Number.MAX_SAFE_INTEGER);let R;a&&o&&D?R=D.top-v.top+f:R=f;const C=v.top+R,E=e.scrollWidth>e.clientWidth?e.offsetHeight-e.clientHeight:0,W=S-C-E;return{visible:!0,position:{top:C,left:b},size:{width:Ht,height:W}}},[e,t,n,o,a,s,r,u]),gr=({enabled:e,rowCount:t})=>{const n=p.useRef(new Map),o=p.useRef(new Map),a=p.useCallback(d=>l=>{l?n.current.set(d,l):n.current.delete(d)},[]),s=p.useCallback(d=>l=>{l?o.current.set(d,l):o.current.delete(d)},[]),r=p.useCallback((d,l)=>{const m=`${d.offsetHeight}px`;l.style.height!==m&&(l.style.height=m)},[]),u=p.useCallback(()=>{n.current.forEach((d,l)=>{const m=o.current.get(l);m&&r(d,m)})},[r]);return p.useEffect(()=>{if(!e)return;const d=new ResizeObserver(l=>{requestAnimationFrame(()=>{l.forEach(m=>{const g=m.target,h=parseInt(g.dataset.rowIndex||"-1",10),w=o.current.get(h);w&&h>=0&&r(g,w)})})});return n.current.forEach(l=>d.observe(l)),()=>d.disconnect()},[e,t,r]),p.useLayoutEffect(()=>{e&&u()},[e,t,u]),{setTableRowRef:a,setCheckboxRowRef:s,syncAllHeights:u}},wr={"resize-handle":"_resize-handle_15uk3_1"},xr=Lt.bind(wr),ga=p.forwardRef((e,t)=>i.jsx("div",{ref:t,className:xr("resize-handle"),...e,children:i.jsx(Oa,{})}));ga.__docgenInfo={description:"",methods:[],displayName:"ResizeHandle"};const yr={"gradient-overlay":"_gradient-overlay_hx7m8_1","direction-right":"_direction-right_hx7m8_5","direction-left":"_direction-left_hx7m8_13"},br=Lt.bind(yr),_n=({portalContainer:e,visible:t,position:n,size:o,direction:a,className:s,dataTestId:r})=>{if(!t||!e)return null;const u={position:"fixed",top:`${n.top}px`,width:`${o.width}px`,height:`${o.height}px`};return n.left!==void 0&&(u.left=`${n.left}px`),n.right!==void 0&&(u.right=`${n.right}px`),Wt.createPortal(i.jsx("div",{className:br("gradient-overlay",`direction-${a}`,s),style:u,"data-gradient-type":r}),e)},z=Lt.bind(ar),An=({column:e})=>{const t=p.useRef(null),[n,o]=p.useState(!1);return p.useEffect(()=>{if(t.current){const a=t.current.offsetWidth,s=t.current.scrollWidth;o(s>a)}},[e.header]),i.jsx("span",{ref:t,title:n?e.header:void 0,children:e.header})},N=({data:e,primaryColumn:t,fixedColumns:n,renderRowActions:o,className:a="",wrapperClassName:s="",rowClassName:r="",headerClassName:u="",bodyClassName:d="",selectable:l=!1,selectedRowIds:m=[],sortingDirection:g=oe,sortingColumn:h,sortableColumns:w,isHeaderFixed:v=!1,isHorizontallyScrollable:f=!1,pinnedColumnKeys:D=[],isRowsExpandable:b=!1,expandedRowIds:S=[],isAllExpandedByDefault:R,expandAllTooltip:C,isResizable:k=!1,minColumnWidth:E=50,maxColumnWidth:W=500,isSelectAllCheckboxAlwaysVisible:L=!1,isCheckboxOutside:A=!1,onChangeSorting:U=()=>{},onToggleRowSelection:$e=()=>{},onToggleAllRowsSelection:ft=()=>{},onToggleRowExpansion:Fe=()=>{},onToggleAllRowsExpansion:Be=()=>{},onColumnResize:Vt=()=>{},externalScrollContainerRef:j,portalContainer:ye=typeof document<"u"?document.body:null,rightGradientClassName:Ie,pinnedGradientClassName:gt})=>{const pe=p.useMemo(()=>Array.isArray(t)?t:[t],[t]),te=h??pe[0],qe=w??ir([...pe,...n]),{pinnedColumns:Q,scrollableColumns:he}=dr({primaryColumns:pe,fixedColumns:n,pinnedColumnKeys:D}),{hoveredColumn:Xt,hoveredRow:Gt,handleColumnMouseEnter:Kt,handleColumnMouseLeave:Jt,handleRowMouseEnter:Qt,handleRowMouseLeave:Zt}=cr(),{columnWidthsRef:be,setCellRef:en}=pr(),wa=p.useMemo(()=>{const c={};return pe.forEach(x=>{"width"in x&&typeof x.width=="number"&&(c[x.key]=x.width)}),n.forEach(x=>{"width"in x&&typeof x.width=="number"&&(c[x.key]=x.width)}),Object.keys(c).length>0?c:void 0},[pe,n]),{handleToggleRowExpansion:xa,isCellExpanded:tn}=ur({primaryColumns:pe,fixedColumns:n,expandedRowIds:S,onToggleRowExpansion:Fe}),ya=p.useMemo(()=>[...Q,...he],[Q,he]),{columnWidths:Ue,handleResize:ba,handleResizeStop:Sa,handleResizeStart:va}=hr({enabled:k,minWidth:E,maxWidth:W,columns:ya,columnWidthsRef:be,onColumnResize:Vt,initialColumnWidths:wa}),{setTableRowRef:Ca,setCheckboxRowRef:Ra}=gr({enabled:l&&A,rowCount:e.length}),nn=(c,x)=>{const y=c.minWidth??E,_=c.maxWidth??W;return i.jsx(Qs,{width:Ue[c.key]??(typeof c.width=="number"?c.width:E),height:0,axis:"x",handle:i.jsx(ga,{}),onResizeStart:va,onResize:ba(c.key),onResizeStop:Sa(c.key),minConstraints:[y,0],maxConstraints:[_,0],className:z("resizable-column"),children:x},c.key)},H=p.useRef(null),ae=p.useRef(null),ka=p.useRef(null),Se=p.useRef(null),wt=p.useRef(null),[le,Da]=p.useState(!1),Ye=p.useCallback(c=>{const x=ae.current;if(x&&x.contains(c))return;const y=c.parentElement;if(!y)return;const _=window.getComputedStyle(y),P=parseFloat(_.paddingTop)||0,M=parseFloat(_.paddingBottom)||0,G=c.offsetHeight+P+M;c.style.setProperty("--expand-cell-top",`${P}px`),c.style.setProperty("--expand-cell-height",`${G}px`)},[]),[on,xt]=p.useState(0),[an,yt]=p.useState(0),[sn,bt]=p.useState(0),[rn,ln]=p.useState(0),Ve=p.useRef(!1),St=p.useRef(new Set),ve=p.useRef(null),vt=mr(H.current,ae.current,(j==null?void 0:j.current)instanceof HTMLElement?j.current:null,le,on,an,sn,rn),Ct=fr(H.current,on,ae.current,(j==null?void 0:j.current)instanceof HTMLElement?j.current:null,le,an,sn,rn),dn=c=>{qe.includes(c)&&U({key:c,direction:g})},cn=c=>{$e(c)},un=()=>{ft()},Ta=()=>{Be()},pn=c=>qe.includes(c)?(te==null?void 0:te.key)===c?it(g)?i.jsx(bn,{}):i.jsx(Ha,{}):i.jsx(bn,{}):null,hn=e.every(c=>m.includes(c.id)),mn=e.some(c=>m.includes(c.id)),Rt=(m==null?void 0:m.length)>0,Ea=!La(e),fn=L&&Ea||Rt,za=e.every(c=>S.includes(c.id)),_a=R!==void 0?R:za,Aa=zn(Q,he,b,l,!!o,!1,k?Ue:void 0,k,A),ja=zn(Q,he,b,l,!!o,!0,k?Ue:void 0,k,A),gn=i.jsx("button",{onClick:Ta,"aria-label":"Toggle all rows expansion",children:i.jsx("span",{className:z("expand-icon",{expanded:_a}),children:i.jsx(Sn,{})})});p.useEffect(()=>{if(!(j!=null&&j.current)||!H.current||!ae.current)return;const c=j.current,x=H.current,y=ae.current,_=wt.current,P=()=>{const q=x.getBoundingClientRect(),G=c.getBoundingClientRect(),de=y.offsetHeight,se=q.top-G.top,Xe=q.bottom-G.top,xn=c.scrollTop>0&&se<=0&&Xe>de;if(Da(xn),xn){const Ge=q.left,yn=G.top;y.classList.add(z("pinned-header")),f&&(y.style.overflow="hidden",y.style.overflowX="hidden"),y.style.left=`${Ge}px`,y.style.top=`${yn}px`,y.style.width=`${q.width}px`,_&&A&&(_.style.top=`${yn}px`)}else{const Ge=x.scrollLeft;Ve.current=!0,y.classList.remove(z("pinned-header")),f&&(y.scrollLeft=0),y.style.left="",y.style.top="",y.style.width="",f&&(y.style.overflow="",y.style.overflowX=""),_&&A&&(_.style.top="",_.classList.remove(z("pinned-header"))),f&&Ge>0?requestAnimationFrame(()=>{x.scrollLeft=Ge,setTimeout(()=>{Ve.current=!1},0)}):Ve.current=!1}},M=requestAnimationFrame(()=>{P()});return c.addEventListener("scroll",P),window.addEventListener("resize",P),()=>{cancelAnimationFrame(M),c.removeEventListener("scroll",P),window.removeEventListener("resize",P)}},[j,f,A]),p.useEffect(()=>{if(!(j!=null&&j.current)||!H.current||!ae.current||!le)return;const c=j.current,x=H.current,y=ae.current,_=wt.current,P=()=>{const se=x.getBoundingClientRect(),Xe=c.getBoundingClientRect();y.style.left=`${se.left}px`,y.style.top=`${Xe.top}px`,y.style.width=`${se.width}px`,_&&A&&(_.style.top=`${Xe.top}px`)},M=se=>{Ve.current||(se===y?x.scrollLeft=y.scrollLeft:y.scrollLeft=x.scrollLeft,ve.current&&ve.current())},q=()=>{M(x),P()},G=()=>{M(y)},de=()=>{P()};return x.addEventListener("scroll",q),f&&y.addEventListener("scroll",G),c.addEventListener("scroll",de),window.addEventListener("resize",P),M(x),P(),()=>{x.removeEventListener("scroll",q),f&&y.removeEventListener("scroll",G),c.removeEventListener("scroll",de),window.removeEventListener("resize",P)}},[le,j,f,A]),p.useEffect(()=>{if(!H.current||!f)return;const c=H.current,x=j==null?void 0:j.current;xt(c.scrollLeft),yt((x==null?void 0:x.scrollTop)||c.scrollTop||0),bt(c.scrollWidth);const y=()=>{c&&(xt(c.scrollLeft),yt((x==null?void 0:x.scrollTop)||c.scrollTop||0),bt(c.scrollWidth))};let _=null;const P=()=>{_===null&&(_=requestAnimationFrame(()=>{y(),_=null}))},M=()=>{P()},q=()=>{P()};c.addEventListener("scroll",M,{passive:!0}),x&&x.addEventListener("scroll",q,{passive:!0});const G=()=>{y(),ln(se=>se+1)};window.addEventListener("resize",G),ve.current=y,y();const de=new ResizeObserver(()=>{y()});return c&&de.observe(c),()=>{c.removeEventListener("scroll",M),x&&x.removeEventListener("scroll",q),window.removeEventListener("resize",G),de.disconnect(),_!==null&&(cancelAnimationFrame(_),_=null)}},[f,j,le,S]),p.useEffect(()=>{if(!H.current||!f)return;const c=H.current,x=j==null?void 0:j.current;requestAnimationFrame(()=>{c&&(xt(c.scrollLeft),yt((x==null?void 0:x.scrollTop)||c.scrollTop||0),bt(c.scrollWidth),ve.current&&ve.current())})},[Ue,f,j]),p.useEffect(()=>{if(!H.current)return;const c=H.current,x=()=>{Array.from(c.querySelectorAll('[data-base-left="0"]')).forEach(Ye)};requestAnimationFrame(()=>{x()})},[b,e,Ye]),p.useEffect(()=>{if(!H.current)return;const c=H.current,x=new Set(S),y=St.current,_=new Set;if(S.forEach(M=>{y.has(M)||_.add(M)}),y.forEach(M=>{x.has(M)||_.add(M)}),_.size===0){St.current=x;return}const P=setTimeout(()=>{_.forEach(M=>{const q=c.querySelector(`[data-base-left="0"][data-row-id="${M}"]`);q&&Ye(q)}),ln(M=>M+1)},0);return St.current=x,()=>clearTimeout(P)},[b,S,Ye]),p.useEffect(()=>{if(!Se.current||!H.current||!A)return;const c=Se.current,x=H.current,y=()=>{requestAnimationFrame(()=>{c.scrollTop=x.scrollTop})};return x.addEventListener("scroll",y),()=>{x.removeEventListener("scroll",y)}},[e,A]),p.useLayoutEffect(()=>{if(!H.current||!Se.current)return;const c=H.current,x=Se.current,y=()=>{const P=`${c.clientHeight}px`;x.style.height!==P&&(x.style.height=P)};y();const _=new ResizeObserver(()=>{requestAnimationFrame(y)});return _.observe(c),()=>_.disconnect()},[]);const Pa=()=>i.jsxs("div",{className:z("checkbox-column"),ref:Se,children:[i.jsx("div",{ref:wt,className:z("table-header","checkbox-header",{"pinned-header":le},u),children:fn&&i.jsx(Ke,{value:hn,partiallyChecked:mn,onChange:un,className:z("checkbox-cell")})}),i.jsx("div",{className:z("checkbox-body",d),children:e.map((c,x)=>i.jsx("div",{ref:Ra(x),className:z("checkbox-row","table-row",En(c),r),onMouseEnter:()=>Qt(x),onMouseLeave:Zt,children:(Rt||Gt===x)&&i.jsx(Ke,{value:m.includes(c.id),onChange:()=>cn(c.id),className:z("checkbox-cell")})},c.id))})]}),wn=()=>i.jsxs("div",{ref:H,className:z("table",{"fixed-header":v,"horizontally-scrollable-container":v&&(f||k),"external-scroll-container":v&&!!j},a),children:[i.jsxs("div",{ref:ae,className:z("table-header",{"sticky-header":v&&!le,"horizontally-scrollable":f,resizable:k},u),style:{gridTemplateColumns:ja},children:[l&&!A&&i.jsx("div",{className:z("table-header-cell","checkbox-cell"),"data-base-left":b?ge:0,children:fn&&i.jsx(Ke,{value:hn,partiallyChecked:mn,onChange:un,className:z("checkbox-cell")})}),b&&i.jsx("div",{className:z("table-header-cell","expand-cell","left-border-accent"),"data-base-left":"0",children:C?i.jsx(Wa,{content:C,placement:"top",wrapperClassName:z("expand-all-tooltip-wrapper"),contentClassName:z("expand-all-tooltip-content"),children:gn}):gn}),Q.map((c,x)=>{const y=i.jsx("button",{"data-column-key":c.key,"data-pinned-index":x,className:z("table-header-cell","pinned-column",{[`align-${c.align}`]:"align"in c,"primary-cell":ce(c),"sortable-cell":qe.includes(c.key),resizable:k}),style:Qe(c,!0,x,Q,be,b,l,A),children:i.jsxs("div",{className:z("label"),onClick:()=>dn(c.key),onMouseEnter:()=>Kt(c.key),onMouseLeave:Jt,children:[i.jsx(An,{column:c}),(Xt===c.key||(te==null?void 0:te.key)===c.key)&&pn(c.key)]})},c.key);return k?nn(c,y):y}),he.map(c=>{const x=i.jsx("button",{className:z("table-header-cell",{[`align-${c.align}`]:"align"in c,"primary-cell":ce(c),"sortable-cell":qe.includes(c.key),resizable:k}),style:Qe(c,!1,void 0,Q,be,b,l,A),children:i.jsxs("div",{className:z("label"),onClick:()=>dn(c.key),onMouseEnter:()=>Kt(c.key),onMouseLeave:Jt,children:[i.jsx(An,{column:c}),(Xt===c.key||(te==null?void 0:te.key)===c.key)&&pn(c.key)]})},c.key);return k?nn(c,x):x}),o&&i.jsx("div",{className:z("table-header-cell","action-menu-cell")})]}),i.jsx("div",{ref:ka,className:z("table-body",{"scrollable-body":v,"horizontally-scrollable":f,resizable:k},d),children:e.map((c,x)=>i.jsxs("div",{"data-row-index":x,ref:Ca(x),className:z("table-row",En(c),r,{selectable:l&&!A}),onMouseEnter:()=>Qt(x),onMouseLeave:Zt,children:[l&&!A&&i.jsx("div",{className:z("table-cell","checkbox-cell"),"data-base-left":b?ge:0,children:(Rt||Gt===x)&&i.jsx(Ke,{value:m.includes(c.id),onChange:()=>cn(c.id),className:z("checkbox-cell")})}),i.jsx("div",{className:z("row-content-wrapper"),children:i.jsxs("div",{className:z("table-row-content"),style:{gridTemplateColumns:Aa},children:[b&&i.jsx("div",{className:z("table-cell","expand-cell","left-border-accent"),"data-base-left":"0","data-row-id":c.id,children:i.jsx("button",{onClick:()=>xa(c.id),"aria-label":S.includes(c.id)?"Collapse row":"Expand row","aria-expanded":S.includes(c.id),children:i.jsx("span",{className:z("expand-icon",{expanded:S.includes(c.id)}),children:i.jsx(Sn,{})})})}),Q.map((y,_)=>{const P=tn(c.id,y.key),M=ce(y);return i.jsx("div",{"data-column-key":y.key,"data-pinned-index":_,ref:M?en(y.key):void 0,className:z("table-cell","pinned-column",{"primary-cell":M,"expanded-cell":P}),style:Qe(y,!0,_,Q,be,b,l,A),children:c[y.key].component||c[y.key].content||c[y.key]},y.key)}),he.map(y=>{const _=tn(c.id,y.key),P=ce(y);return i.jsx("div",{ref:P?en(y.key):void 0,className:z("table-cell",{"primary-cell":P,"expanded-cell":_}),style:Qe(y,!1,void 0,Q,be,b,l,A),children:c[y.key].component||c[y.key].content||c[y.key]},y.key)}),o&&i.jsx("div",{className:z("table-cell","action-menu-cell"),children:o(c.metaData)})]})})]},c.id))}),f&&i.jsxs(i.Fragment,{children:[i.jsx(_n,{portalContainer:ye,visible:vt.visible,position:vt.position,size:vt.size,direction:"right",className:Ie,dataTestId:"right-gradient"}),i.jsx(_n,{portalContainer:ye,visible:Ct.visible,position:Ct.position,size:Ct.size,direction:"left",className:gt,dataTestId:"pinned-gradient"})]})]});return A?i.jsxs("div",{className:z("table-wrapper",{"fixed-header":v},s),children:[Pa(),wn()]}):wn()};N.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"RowData"}],raw:"RowData[]"},description:""},primaryColumn:{required:!0,tsType:{name:"union",raw:"Column | Column[]",elements:[{name:"Column"},{name:"Array",elements:[{name:"Column"}],raw:"Column[]"}]},description:""},fixedColumns:{required:!0,tsType:{name:"Array",elements:[{name:"FixedColumn"}],raw:"FixedColumn[]"},description:""},renderRowActions:{required:!1,tsType:{name:"signature",type:"function",raw:"(metaData?: MetaData) => ReactNode",signature:{arguments:[{type:{name:"MetaData"},name:"metaData"}],return:{name:"ReactNode"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isCheckboxOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},wrapperClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},headerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},bodyClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rowClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortingDirection:{required:!1,tsType:{name:"union",raw:"typeof ASC | typeof DESC | Uppercase<typeof ASC | typeof DESC>",elements:[{name:"ASC"},{name:"DESC"},{name:"Uppercase",elements:[{name:"union",raw:"typeof ASC | typeof DESC",elements:[{name:"ASC"},{name:"DESC"}]}],raw:"Uppercase<typeof ASC | typeof DESC>"}]},description:"",defaultValue:{value:"'asc'",computed:!1}},sortingColumn:{required:!1,tsType:{name:"Column"},description:""},sortableColumns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isHeaderFixed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontallyScrollable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pinnedColumnKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},isRowsExpandable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},isSelectAllCheckboxAlwaysVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},setExpandedRowIds:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Set",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Set<string | number>"}],raw:"SetStateAction<Set<string | number>>"}],raw:"Dispatch<SetStateAction<Set<string | number>>>"},description:""},isAllExpandedByDefault:{required:!1,tsType:{name:"boolean"},description:""},expandAllTooltip:{required:!1,tsType:{name:"ReactNode"},description:""},isResizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},minColumnWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},maxColumnWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"500",computed:!1}},onChangeSorting:{required:!1,tsType:{name:"signature",type:"function",raw:"(sortConfig?: SortConfig) => void",signature:{arguments:[{type:{name:"SortConfig"},name:"sortConfig"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onColumnResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnKey: string, width: number) => void",signature:{arguments:[{type:{name:"string"},name:"columnKey"},{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},externalScrollContainerRef:{required:!1,tsType:{name:"union",raw:"RefObject<HTMLElement> | RefObject<Element> | null | undefined",elements:[{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},{name:"RefObject",elements:[{name:"Element"}],raw:"RefObject<Element>"},{name:"null"},{name:"undefined"}]},description:""},portalContainer:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:"",defaultValue:{value:"typeof document !== 'undefined' ? document.body : null",computed:!1}},rightGradientClassName:{required:!1,tsType:{name:"string"},description:""},pinnedGradientClassName:{required:!1,tsType:{name:"string"},description:""}}};const Ur={title:"Tables & Lists/Table",component:N,parameters:{layout:"centered",docs:{description:{component:"\nA flexible table component with support for:\n- **Row sizes**: Configure via `rowConfigs: { size: 'small' | 'medium' | 'large' }` in row data\n- **Expandable rows**: Enable with `isRowsExpandable` prop\n- **Pinned columns**: Use `pinnedColumnKeys` to pin columns to the left\n- **Sorting**: Configure with `sortableColumns`, `sortingColumn`, `sortingDirection`\n- **Selection**: Enable with `selectable` prop\n- **Custom cell content**: Use `DetailedCellData` with `content` and `component` properties\n        "}}},tags:["autodocs"],argTypes:{data:{description:"Array of row data. Each row should have an `id` and can include `rowConfigs` for size configuration.",table:{type:{summary:"RowData[]"}}},primaryColumn:{description:"The main column configuration (typically the name/title column).",table:{type:{summary:"Column | Column[]"}}},fixedColumns:{description:"Array of fixed-width columns with optional alignment.",table:{type:{summary:"FixedColumn[]"}}},selectable:{description:"Enable row selection with checkboxes.",control:"boolean",table:{defaultValue:{summary:"false"}}},isRowsExpandable:{description:"Enable expand/collapse functionality for rows with long content.",control:"boolean",table:{defaultValue:{summary:"false"}}},expandedRowIds:{description:"Array of row IDs that are currently expanded.",table:{type:{summary:"(string | number)[]"}}},isAllExpandedByDefault:{description:"Whether all rows should be expanded by default.",control:"boolean",table:{defaultValue:{summary:"false"}}},expandAllTooltip:{description:"Tooltip text for the expand all button.",table:{type:{summary:"ReactNode"}}},pinnedColumnKeys:{description:"Array of column keys to pin to the left side of the table.",table:{type:{summary:"string[]"}}},sortableColumns:{description:"Array of column keys that can be sorted.",table:{type:{summary:"string[]"}}},sortingColumn:{description:"Currently sorted column.",table:{type:{summary:"Column"}}},sortingDirection:{description:"Current sorting direction.",control:"select",options:["ASC","DESC"],table:{type:{summary:"'ASC' | 'DESC'"}}},isHeaderFixed:{description:"Keep the header fixed when scrolling vertically.",control:"boolean",table:{defaultValue:{summary:"false"}}},isHorizontallyScrollable:{description:"Enable horizontal scrolling for wide tables.",control:"boolean",table:{defaultValue:{summary:"false"}}},className:{description:"Custom CSS class for the table container.",table:{type:{summary:"string"}}},headerClassName:{description:"Custom CSS class for the table header. Use this to customize header background, borders, etc.",table:{type:{summary:"string"}}},bodyClassName:{description:"Custom CSS class for the table body. Use this to customize row gap, padding, etc.",table:{type:{summary:"string"}}},rowClassName:{description:"Custom CSS class for table rows.",table:{type:{summary:"string"}}},onToggleRowExpansion:{description:"Callback when a row is expanded/collapsed.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsExpansion:{description:"Callback when all rows are expanded/collapsed.",table:{type:{summary:"() => void"}}},onToggleRowSelection:{description:"Callback when a row is selected/deselected.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsSelection:{description:"Callback when all rows are selected/deselected.",table:{type:{summary:"() => void"}}},onChangeSorting:{description:"Callback when sorting changes.",table:{type:{summary:"(sortConfig?: SortConfig) => void"}}},renderRowActions:{description:"Function to render action menu for each row.",table:{type:{summary:"(metaData?: MetaData) => ReactNode"}}}},args:{selectable:!0}},J=()=>i.jsx($a,{placement:"bottom-end",content:i.jsxs("div",{children:[i.jsx("p",{children:"Edit"}),i.jsx("p",{children:"Rename"})]}),children:i.jsx(Fa,{})}),fe=[{id:1,name:{content:"Sam",component:i.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],I=[{key:"name",header:"Name"}],He=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],Ze={render:e=>{const[t,n]=p.useState({key:I[0].key,direction:oe}),[o,a]=p.useState(I[0]),[s,r]=p.useState(oe),u=we(fe,t),[d,l]=p.useState(u),[m,g]=p.useState(new Set([]));return p.useEffect(()=>{const{key:h,direction:w}=t,v=[...He,...I].find(f=>f.key===h);r(w),a(v)},[t]),i.jsx("div",{style:{minWidth:"700px"},children:i.jsx(N,{...e,primaryColumn:I,data:d,sortableColumns:[I[0].key],onChangeSorting:(h=t)=>{let{direction:w}=h;const{key:v}=h;w=Yt(w);const f=we(d,{key:v,direction:w});n({key:v,direction:w}),l(f)},onToggleRowSelection:h=>{const w=new Set(m);w.has(h)?w.delete(h):w.add(h),g(w)},onToggleAllRowsSelection:()=>{if(m.size===fe.length)g(new Set);else{const h=new Set(fe.map(w=>w.id));g(h)}},selectedRowIds:[...m],sortingColumn:o,sortingDirection:s})})},args:{fixedColumns:He,renderRowActions:J,selectable:!0}},X=[{id:1,name:"John Doe",email:"john.doe@example.com",phone:"+1-555-123-4567",address:"123 Main Street, New York, NY 10001",department:"Engineering",role:"Senior Software Engineer",salary:"$120,000",startDate:"2020-01-15",status:"Active",manager:"Jane Smith",projects:"Project Alpha, Project Beta",rowConfigs:{size:"small"}},{id:2,name:"Jane Smith",email:"jane.smith@example.com",phone:"+1-555-987-6543",address:"456 Oak Avenue, Los Angeles, CA 90210",department:"Marketing",role:"Marketing Director",salary:"$95,000",startDate:"2019-03-20",status:"Active",manager:"Robert Johnson",projects:"Campaign X, Campaign Y",rowConfigs:{size:"small"}},{id:3,name:"Mike Wilson",email:"mike.wilson@example.com",phone:"+1-555-456-7890",address:"789 Pine Road, Chicago, IL 60601",department:"Sales",role:"Sales Representative",salary:"$75,000",startDate:"2021-06-10",status:"Active",manager:"Sarah Davis",projects:"Client Onboarding, Lead Generation",rowConfigs:{size:"small"}},{id:4,name:"Sarah Davis",email:"sarah.davis@example.com",phone:"+1-555-234-5678",address:"321 Elm Street, Houston, TX 77001",department:"HR",role:"HR Manager",salary:"$85,000",startDate:"2018-09-12",status:"Active",manager:"Michael Brown",projects:"Employee Onboarding, Policy Updates",rowConfigs:{size:"small"}},{id:5,name:"Robert Johnson",email:"robert.johnson@example.com",phone:"+1-555-345-6789",address:"654 Maple Drive, Phoenix, AZ 85001",department:"Finance",role:"Financial Analyst",salary:"$78,000",startDate:"2020-11-08",status:"Active",manager:"Emily White",projects:"Budget Planning, Cost Analysis",rowConfigs:{size:"small"}},{id:6,name:"Emily White",email:"emily.white@example.com",phone:"+1-555-456-7891",address:"987 Cedar Lane, Philadelphia, PA 19101",department:"Operations",role:"Operations Manager",salary:"$110,000",startDate:"2017-05-22",status:"Active",manager:"David Green",projects:"Process Optimization, Quality Control",rowConfigs:{size:"small"}},{id:7,name:"David Green",email:"david.green@example.com",phone:"+1-555-567-8901",address:"147 Birch Avenue, San Antonio, TX 78201",department:"Engineering",role:"Lead Developer",salary:"$135,000",startDate:"2016-02-14",status:"Active",manager:"Lisa Thompson",projects:"Architecture Review, Team Mentoring",rowConfigs:{size:"small"}},{id:8,name:"Lisa Thompson",email:"lisa.thompson@example.com",phone:"+1-555-678-9012",address:"258 Spruce Court, San Diego, CA 92101",department:"Product",role:"Product Manager",salary:"$105,000",startDate:"2019-08-30",status:"Active",manager:"Tom Anderson",projects:"Feature Planning, User Research",rowConfigs:{size:"small"}},{id:9,name:"Tom Anderson",email:"tom.anderson@example.com",phone:"+1-555-789-0123",address:"369 Willow Street, Dallas, TX 75201",department:"Design",role:"UX Designer",salary:"$88,000",startDate:"2021-01-18",status:"Active",manager:"Anna Martinez",projects:"UI Redesign, User Testing",rowConfigs:{size:"small"}},{id:10,name:"Anna Martinez",email:"anna.martinez@example.com",phone:"+1-555-890-1234",address:"741 Poplar Boulevard, San Jose, CA 95101",department:"QA",role:"QA Engineer",salary:"$82,000",startDate:"2020-07-25",status:"Active",manager:"John Doe",projects:"Automation Testing, Bug Tracking",rowConfigs:{size:"small"}}],ne=[{key:"name",header:"Full Name"}],xe=[{key:"email",header:"Email Address",width:200},{key:"phone",header:"Phone Number",width:150},{key:"address",header:"Address",width:250},{key:"department",header:"Department",width:120},{key:"role",header:"Job Role",width:180},{key:"salary",header:"Salary",width:100},{key:"startDate",header:"Start Date",width:120},{key:"status",header:"Status",width:100},{key:"manager",header:"Manager",width:150},{key:"projects",header:"Current Projects",width:200}],Sr=e=>{const t=["John","Jane","Mike","Sarah","David","Emma","Chris","Lisa","Tom","Anna"],n=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose"],o=["Engineering","Marketing","Sales","HR","Finance","Operations","Design","Product","Legal","Support"];return Array.from({length:e},(a,s)=>({id:s+1,name:`${t[s%t.length]} ${s+1}`,age:22+s%40,city:n[s%n.length],department:o[s%o.length],email:`user${s+1}@example.com`,salary:`$${(5e4+s*1e3%1e5).toLocaleString()}`}))},Oe=Sr(50),lt=[{key:"age",header:"Age",width:80,align:"right"},{key:"city",header:"City",width:120},{key:"department",header:"Department",width:120},{key:"email",header:"Email",width:200},{key:"salary",header:"Salary",width:100,align:"right"}],et={render:e=>{const[t,n]=p.useState({key:I[0].key,direction:oe}),[o,a]=p.useState(I[0]),[s,r]=p.useState(oe),u=we(Oe,t),[d,l]=p.useState(u),[m,g]=p.useState(new Set([]));return p.useEffect(()=>{const{key:h,direction:w}=t,v=[...lt,...I].find(f=>f.key===h);r(w),a(v)},[t]),i.jsxs("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Fixed Header Table with Scrollable Body"}),i.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",overflow:"auto"},children:i.jsx(N,{...e,data:d,primaryColumn:I,fixedColumns:lt,isHeaderFixed:!0,sortableColumns:[I[0].key,"age","department"],onChangeSorting:(h=t)=>{let{direction:w}=h;const{key:v}=h;w=Yt(w);const f=we(d,{key:v,direction:w});n({key:v,direction:w}),l(f)},onToggleRowSelection:h=>{const w=new Set(m);w.has(h)?w.delete(h):w.add(h),g(w)},onToggleAllRowsSelection:()=>{if(m.size===Oe.length)g(new Set);else{const h=new Set(Oe.map(w=>w.id));g(h)}},selectedRowIds:[...m],sortingColumn:o,sortingDirection:s})})]})},args:{selectable:!0,renderRowActions:J}},tt={render:e=>i.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Fixed Header + Horizontal Scroll: Both scrollbars visible when needed"}),i.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",position:"relative"},children:i.jsx(N,{...e,data:X,primaryColumn:ne,fixedColumns:xe,isHorizontallyScrollable:!0,isHeaderFixed:!0})})]}),args:{selectable:!1,renderRowActions:J}},nt={render:e=>{const[t,n]=p.useState(new Set([]));return i.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Pinned Columns + Fixed Header: Name and Email pinned with vertical and horizontal scrolling"}),i.jsx("div",{className:"storybook-table-wrapper",style:{width:"550px",height:"calc(100% - 50px)",position:"relative"},children:i.jsx(N,{...e,data:X,primaryColumn:ne,fixedColumns:xe,isHorizontallyScrollable:!0,isHeaderFixed:!0,pinnedColumnKeys:["name","email","department"],onToggleRowSelection:o=>{const a=new Set(t);a.has(o)?a.delete(o):a.add(o),n(a)},onToggleAllRowsSelection:()=>{if(t.size===X.length)n(new Set);else{const o=new Set(X.map(a=>a.id));n(o)}},selectedRowIds:[...t]})})]})},args:{selectable:!0,renderRowActions:J}},ot={render:e=>{const[t,n]=p.useState(new Set([1])),[o,a]=p.useState(new Set([])),s=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"sam.johnson@example.com"},{id:2,name:"Anna Smith",age:32,city:"San Francisco",department:"Design",email:"anna.smith@example.com"},{id:3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",email:"mike.davis@example.com"},{id:4,name:"Sarah Wilson",age:35,city:"Chicago",department:"Sales",email:"sarah.wilson@example.com"}],r=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:100},{key:"city",header:"City",width:100}],u=[{key:"name",header:"Name"}];return i.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows Example"}),i.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Click the expand/collapse icons to view detailed information for each row. Rows can be expanded and collapsed independently."}),i.jsx(N,{...e,data:s,primaryColumn:u,fixedColumns:r,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...t],setExpandedRowIds:n,onToggleRowExpansion:d=>{const l=new Set(t);l.has(d)?l.delete(d):l.add(d),n(l)},onToggleAllRowsExpansion:()=>{if(t.size===s.length)n(new Set);else{const d=new Set(s.map(l=>l.id));n(d)}},selectedRowIds:[...o],onToggleRowSelection:d=>{const l=new Set(o);l.has(d)?l.delete(d):l.add(d),a(l)},onToggleAllRowsSelection:()=>{if(o.size===s.length)a(new Set);else{const d=new Set(s.map(l=>l.id));a(d)}}})]})},args:{selectable:!0}},at={render:e=>{const[t,n]=p.useState(new Set([1,2,3,4])),[o,a]=p.useState(!0),[s,r]=p.useState(new Set([])),u=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"anna.smith@example.com"},{id:2,name:"Mike Davis",age:32,city:"San Francisco",department:"Design",email:"mike.davis@example.com"},{id:3,name:"Sarah Wilson",age:28,city:"Los Angeles",department:"Marketing",email:"sarah.wilson@example.com"},{id:4,name:"John Brown",age:35,city:"Chicago",department:"Sales",email:"john.brown@example.com"}],d=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],l=[{key:"name",header:"Name"}],m=o?"Expanded by default":"Collapsed by default";return i.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows with Default State"}),i.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Demonstrates ",i.jsx("strong",{children:"isAllExpandedByDefault"})," and ",i.jsx("strong",{children:"expandAllTooltip"})," ","props. The expandAll icon shows the default state regardless of individual row states. Hover over the expandAll icon to see the tooltip."]}),i.jsx(N,{...e,data:u,primaryColumn:l,fixedColumns:d,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...t],isAllExpandedByDefault:o,expandAllTooltip:m,onToggleRowExpansion:g=>{const h=new Set(t);h.has(g)?h.delete(g):h.add(g),n(h)},onToggleAllRowsExpansion:()=>{const g=!o;a(g),n(g?new Set(u.map(h=>h.id)):new Set)},selectedRowIds:[...s],onToggleRowSelection:g=>{const h=new Set(s);h.has(g)?h.delete(g):h.add(g),r(h)},onToggleAllRowsSelection:()=>{if(s.size===u.length)r(new Set);else{const g=new Set(u.map(h=>h.id));r(g)}}})]})},args:{selectable:!0}},At=[{id:1,name:"John Alexander Maximilian Winchester-Blackwood III",description:"This is long text but anyway no matter ellipsed or opened it should not overcome his width it can be brake. When you click on this cell, it will expand to show the full content without ellipsis truncation, and the text should wrap properly within the cell boundaries without breaking the table layout.",shortText:"Brief note",longTitle:"Senior Vice President of Engineering and Technology Development for Enterprise Solutions and Digital Transformation Initiatives",email:"john.alexander.maximilian.winchester.blackwood.third@very-long-company-name-example.com",notes:"This is a comprehensive test of how the table handles extremely long content that would normally break layouts. The content should be properly contained within cell boundaries."},{id:2,name:"Maria Elena Rodriguez-Martinez",description:"Another extremely lengthy description that showcases the cell expansion capabilities. This description contains detailed information about the person, their role, responsibilities, and achievements. The purpose is to demonstrate how users can easily expand cells to read full content when the default view shows only a truncated version with ellipsis.",shortText:"Quick summary here",longTitle:"Chief Marketing Officer and Head of Brand Strategy for Global Markets and Customer Experience Enhancement",email:"maria.elena.rodriguez.martinez@another-extremely-long-domain-name.example.org",notes:"Testing various content lengths and how they behave in both collapsed and expanded states. The text should wrap appropriately without overflowing."},{id:3,name:"Robert James Thompson",description:"A comprehensive description that tests the expand functionality with moderate length content. This shows how the feature works with different content lengths and provides a good example of real-world usage.",shortText:"Standard",longTitle:"Director of Operations",email:"robert.thompson@company.com",notes:"Short note about this person and their current projects."},{id:4,name:"Dr. Elizabeth Catherine Pemberton-Williams, PhD, MBA, CISSP",description:"This cell contains an exceptionally detailed description that really pushes the limits of what might be considered reasonable content length. It includes professional background, educational achievements, current responsibilities, ongoing projects, future goals, and various other details that would typically require a much larger display area.",shortText:"Complex background",longTitle:"Chief Technology Officer and Principal Software Architect for Distributed Systems and Cloud Infrastructure with specialization in Cybersecurity and Data Analytics",email:"dr.elizabeth.catherine.pemberton.williams.phd.mba.cissp@enterprise-solutions-technology-consulting.example.net",notes:"Comprehensive notes about professional achievements, certifications, ongoing projects, and future development plans. This tests the maximum reasonable content length."}],vr=[{key:"description",header:"Description",width:200},{key:"longTitle",header:"Job Title",width:120},{key:"email",header:"Email Address",width:100},{key:"shortText",header:"Type",width:100},{key:"notes",header:"Notes",width:100}],st={render:e=>{const[t,n]=p.useState(new Set);return i.jsxs("div",{style:{width:"1000px",padding:"16px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Row Content Expansion - Long Text Handling"}),i.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666",lineHeight:1.5},children:[i.jsx("strong",{children:"Click the expand icon"})," at the beginning of each row to expand/collapse ALL cells in that row. This example tests:",i.jsx("br",{}),"• Very long email addresses that should be ellipsed when collapsed",i.jsx("br",{}),"• Long text content that should wrap without breaking cell width constraints",i.jsx("br",{}),"• Proper word breaking for extremely long content",i.jsx("br",{}),"• Layout stability when transitioning between collapsed and expanded states"]}),i.jsx("div",{style:{border:"1px solid #e1e5e9",borderRadius:"8px",overflow:"hidden"},children:i.jsx(N,{...e,data:At,primaryColumn:[{key:"name",header:"Full Name"}],fixedColumns:vr,selectable:!1,isRowsExpandable:!0,expandedRowIds:[...t],onToggleRowExpansion:o=>{const a=new Set(t);a.has(o)?a.delete(o):a.add(o),n(a)},onToggleAllRowsExpansion:()=>{if(t.size===At.length)n(new Set);else{const o=new Set(At.map(a=>a.id));n(o)}}})}),i.jsx("p",{style:{margin:"16px 0 0 0",fontSize:"12px",color:"#888",fontStyle:"italic"},children:"Test the table with your browser's developer tools at different widths to verify responsive behavior."})]})},args:{renderRowActions:void 0}},ke={render:e=>{const[t,n]=p.useState(new Set([1])),[o,a]=p.useState(new Set([5])),[s,r]=p.useState(new Set([9])),u=(v,f)=>[{id:v+1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",rowConfigs:f?{size:f}:void 0},{id:v+2,name:"John Doe with a very long name that should wrap when expanded and demonstrate how the row height increases to accommodate multiple lines of text content",age:32,city:"San Francisco Bay Area, California, United States of America",department:"Design and User Experience Research Department",rowConfigs:f?{size:f}:void 0},{id:v+3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",rowConfigs:f?{size:f}:void 0},{id:v+4,name:"Sarah Elizabeth Wilson-Montgomery III with an exceptionally long hyphenated surname that demonstrates text wrapping behavior in expanded table rows when the content exceeds the available column width",age:35,city:"Chicago Metropolitan Area",department:"Sales and Business Development International Operations",rowConfigs:f?{size:f}:void 0}],d=u(0,"small"),l=u(4),m=u(8,"large"),g=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],h=[{key:"name",header:"Name"}],w=(v,f,D,b,S)=>i.jsxs("div",{style:{marginBottom:"32px"},children:[i.jsx("h4",{style:{margin:"0 0 4px 0",fontSize:"14px",color:"#333"},children:v}),i.jsx("p",{style:{margin:"0 0 12px 0",fontSize:"12px",color:"#666"},children:f}),i.jsx(N,{...e,data:D,primaryColumn:h,fixedColumns:g,isRowsExpandable:!0,expandedRowIds:[...b],onToggleRowExpansion:R=>{const C=new Set(b);C.has(R)?C.delete(R):C.add(R),S(C)},onToggleAllRowsExpansion:()=>{if(b.size===D.length)S(new Set);else{const R=new Set(D.map(C=>C.id));S(R)}}})]});return i.jsxs("div",{style:{minWidth:"800px",maxWidth:"1000px"},children:[i.jsx("h3",{style:{margin:"0 0 24px 0",fontSize:"18px",color:"#333"},children:"Row Sizes with Expand - Testing Jump Fix"}),i.jsx("p",{style:{margin:"0 0 24px 0",fontSize:"14px",color:"#666"},children:"Test expand/collapse on each table size. The row height should NOT change when expanding/collapsing (unless content requires more space)."}),w("Small Rows (44px)",'rowConfigs: { size: "small" }',d,t,n),w("Default Rows (64px)","No rowConfigs specified",l,o,a),w("Large Rows (80px)",'rowConfigs: { size: "large" }',m,s,r)]})}},De={render:()=>{const e=[{key:"name",header:"Name"}],t=[{key:"status",header:"Status",width:100},{key:"description",header:"Description",width:250}],n=[{id:1,name:"Small Row 1",description:"Compact row for dense tables",status:"Active",rowConfigs:{size:"small"}},{id:2,name:"Small Row 2",description:"Height: 44px",status:"Active",rowConfigs:{size:"small"}}],o=[{id:1,name:"Default Row 1",description:"Standard row size",status:"Active"},{id:2,name:"Default Row 2",description:"Height: 64px (no rowConfigs needed)",status:"Active"}],a=[{id:1,name:"Large Row 1",description:"Prominent row for emphasis",status:"Active",rowConfigs:{size:"large"}},{id:2,name:"Large Row 2",description:"Height: 80px",status:"Active",rowConfigs:{size:"large"}}];return i.jsxs("div",{style:{minWidth:"600px"},children:[i.jsxs("div",{style:{marginBottom:"32px"},children:[i.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Small (44px)"}),i.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "small" }']}),i.jsx(N,{data:n,primaryColumn:e[0],fixedColumns:t,selectable:!1})]}),i.jsxs("div",{style:{marginBottom:"32px"},children:[i.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Default (64px)"}),i.jsx("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:"No rowConfigs needed"}),i.jsx(N,{data:o,primaryColumn:e[0],fixedColumns:t,selectable:!1})]}),i.jsxs("div",{children:[i.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Large (80px)"}),i.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "large" }']}),i.jsx(N,{data:a,primaryColumn:e[0],fixedColumns:t,selectable:!1})]})]})}},Cr=[{key:"name",header:"Name"}],Rr=[{key:"status",header:"Status",width:100},{key:"category",header:"Category",width:120}],jt=[{id:1,name:"Test execution with a very long name that demonstrates how text behaves in expanded rows with custom header styling",status:"Passed",category:"Smoke",rowConfigs:{size:"small"}},{id:2,name:"Another test case",status:"Failed",category:"Regression",rowConfigs:{size:"small"}},{id:3,name:"Quick sanity check",status:"Skipped",category:"Sanity",rowConfigs:{size:"small"}}],kr=()=>{const[e,t]=p.useState(new Set);return i.jsxs("div",{style:{minWidth:"600px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"18px",color:"#333"},children:"Custom Header Background Color"}),i.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Use the ",i.jsx("code",{children:"headerClassName"})," prop with your own CSS class to customize the header. Pinned columns and expand button inherit the background color automatically."]}),i.jsx("style",{children:`
          .custom-gray-header {
            background-color: var(--rp-ui-base-bg-200) !important;
            border-top: 1px solid var(--rp-ui-base-e-200);
            border-bottom: none;
          }
        `}),i.jsx("div",{style:{border:"1px solid var(--rp-ui-base-e-200)",borderRadius:"4px",overflow:"hidden"},children:i.jsx(N,{data:jt,primaryColumn:Cr[0],fixedColumns:Rr,pinnedColumnKeys:["status"],isRowsExpandable:!0,expandedRowIds:Array.from(e),selectable:!1,headerClassName:"custom-gray-header",onToggleRowExpansion:n=>{const o=new Set(e);o.has(n)?o.delete(n):o.add(n),t(o)},onToggleAllRowsExpansion:()=>{e.size===jt.length?t(new Set):t(new Set(jt.map(n=>n.id)))}})}),i.jsxs("div",{style:{marginTop:"24px"},children:[i.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#333"},children:"How to use:"}),i.jsx("pre",{style:{backgroundColor:"#f5f5f5",padding:"12px",borderRadius:"4px",fontSize:"12px",overflow:"auto"},children:`// In your SCSS file:
.custom-header {
  background-color: var(--rp-ui-base-bg-200);
  border-top: 1px solid var(--rp-ui-base-e-200);
  border-bottom: none;
}

// In your component:
<Table
  headerClassName="custom-header"
  // ... other props
/>`})]})]})},Te={render:()=>i.jsx(kr,{})},Ee={render:e=>i.jsxs("div",{style:{minWidth:"600px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Resizable Columns (Default Constraints)"}),i.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Drag the column borders in the header to adjust widths. Default constraints:"," ",i.jsx("code",{children:"minColumnWidth=50"}),", ",i.jsx("code",{children:"maxColumnWidth=500"})]}),i.jsx(N,{...e,primaryColumn:I,data:fe,fixedColumns:He})]}),args:{renderRowActions:J,isResizable:!0}},ze={render:e=>i.jsx("div",{style:{minWidth:"600px"},children:i.jsx(N,{...e,primaryColumn:I,data:fe,fixedColumns:He})}),args:{isResizable:!0}},_e={render:e=>i.jsxs("div",{style:{minWidth:"600px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Resizable Columns (Custom Constraints)"}),i.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Columns can be resized between 80px and 300px. Custom constraints:"," ",i.jsx("code",{children:"minColumnWidth=80"}),", ",i.jsx("code",{children:"maxColumnWidth=300"})]}),i.jsx(N,{...e,primaryColumn:I,data:fe,fixedColumns:He})]}),args:{renderRowActions:J,isResizable:!0,minColumnWidth:80,maxColumnWidth:300}},Ae={render:e=>i.jsx("div",{style:{width:"900px",height:"400px",border:"1px solid #ccc",padding:"16px"},children:i.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:i.jsx(N,{...e,data:Oe,primaryColumn:I,fixedColumns:lt})})}),args:{renderRowActions:J,isResizable:!0,isHeaderFixed:!0}},je={render:e=>i.jsx("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:i.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:i.jsx(N,{...e,data:X,primaryColumn:ne,fixedColumns:xe,isHorizontallyScrollable:!0,isHeaderFixed:!0})})}),args:{renderRowActions:J,isResizable:!0}},Pe={render:e=>i.jsx("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:i.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:i.jsx(N,{...e,data:Oe,primaryColumn:I,fixedColumns:lt,pinnedColumnKeys:["name","email"],isHorizontallyScrollable:!0,isHeaderFixed:!0})})}),args:{renderRowActions:J,isResizable:!0}},Me={render:e=>{const t=p.useRef(null),[n,o]=p.useState({key:ne[0].key,direction:oe}),[a,s]=p.useState(ne[0]),[r,u]=p.useState(oe),d=p.useMemo(()=>{const v=[...X];for(let f=0;f<3;f++)v.push(...X.map(D=>({...D,id:`${D.id}-copy-${f+1}`})));return v},[]),l=we(d,n),[m,g]=p.useState(l),[h,w]=p.useState(new Set([]));return p.useEffect(()=>{const{key:v,direction:f}=n,D=[...xe,...ne].find(b=>b.key===v);u(f),s(D)},[n]),i.jsxs("div",{style:{width:"800px",height:"600px",border:"1px solid #ccc",padding:"16px"},children:[i.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Table with Horizontal Scroll + Pinned Header (External Scroll Container)"}),i.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"This example demonstrates a pinned header that activates when scrolling in an external container. The table header pins to the top when the scroll position reaches it. Scroll vertically in the container to see the header pinning, and horizontally to see pinned columns and gradient effects."}),i.jsxs("div",{ref:t,style:{height:"calc(100% - 100px)",overflowY:"auto",overflowX:"hidden",position:"relative"},children:[i.jsxs("div",{style:{padding:"16px",backgroundColor:"#f0f0f0",marginBottom:"16px"},children:[i.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"16px"},children:"Content Above Table"}),i.jsx("p",{style:{margin:"0",fontSize:"14px",color:"#666"},children:"This content is inside the scrollable container. When you scroll down, this text will move up and disappear, but the table header will stick to the top."}),i.jsx("p",{style:{margin:"8px 0 0",fontSize:"14px",color:"#666"},children:"Scroll down to see the header pinning effect. The table header will remain fixed at the top while this content scrolls away."})]}),i.jsx(N,{...e,data:m,primaryColumn:ne,fixedColumns:xe,isHeaderFixed:!0,isHorizontallyScrollable:!0,pinnedColumnKeys:["name","email"],externalScrollContainerRef:t,sortableColumns:[ne[0].key,"department","status"],onChangeSorting:(v=n)=>{let{direction:f}=v;const{key:D}=v;f=Yt(f);const b=we(m,{key:D,direction:f});o({key:D,direction:f}),g(b)},onToggleRowSelection:v=>{const f=new Set(h);f.has(v)?f.delete(v):f.add(v),w(f)},onToggleAllRowsSelection:()=>{if(h.size===d.length)w(new Set);else{const v=new Set(d.map(f=>f.id));w(v)}},selectedRowIds:[...h],sortingColumn:a,sortingDirection:r})]})]})},args:{selectable:!0,renderRowActions:J}},Ne={render:e=>{const[t,n]=p.useState(new Set([])),[o,a]=p.useState(new Set([]));return i.jsx("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px",paddingLeft:"48px"},children:i.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:i.jsx(N,{...e,data:X,primaryColumn:ne,fixedColumns:xe,expandedRowIds:[...o],selectedRowIds:[...t],onToggleRowSelection:s=>{const r=new Set(t);r.has(s)?r.delete(s):r.add(s),n(r)},onToggleAllRowsSelection:()=>{if(t.size===X.length)n(new Set);else{const s=new Set(X.map(r=>r.id));n(s)}},onToggleRowExpansion:s=>{const r=new Set(o);r.has(s)?r.delete(s):r.add(s),a(r)},onToggleAllRowsExpansion:()=>{if(o.size===X.length)a(new Set);else{const s=new Set(X.map(r=>r.id));a(s)}}})})})},args:{renderRowActions:J,isResizable:!0,isHeaderFixed:!0,isHorizontallyScrollable:!0,pinnedColumnKeys:["name","email"],selectable:!0,isRowsExpandable:!0,isCheckboxOutside:!0}};var jn,Pn,Mn;Ze.parameters={...Ze.parameters,docs:{...(jn=Ze.parameters)==null?void 0:jn.docs,source:{originalSource:`{
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
}`,...(Mn=(Pn=Ze.parameters)==null?void 0:Pn.docs)==null?void 0:Mn.source}}};var Nn,On,Hn;et.parameters={...et.parameters,docs:{...(Nn=et.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
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
}`,...(Qn=(Jn=st.parameters)==null?void 0:Jn.docs)==null?void 0:Qn.source}}};var Zn,eo,to,no,oo;ke.parameters={...ke.parameters,docs:{...(Zn=ke.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
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
}`,...(to=(eo=ke.parameters)==null?void 0:eo.docs)==null?void 0:to.source},description:{story:`Demonstrates all row sizes (small: 44px, default: 64px, large: 80px) with expandable content.
Useful for testing that row heights behave correctly when expanding/collapsing cells with long text.`,...(oo=(no=ke.parameters)==null?void 0:no.docs)==null?void 0:oo.description}}};var ao,so,ro,io,lo;De.parameters={...De.parameters,docs:{...(ao=De.parameters)==null?void 0:ao.docs,source:{originalSource:`{
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
}`,...(ro=(so=De.parameters)==null?void 0:so.docs)==null?void 0:ro.source},description:{story:`Simple demonstration of row sizes without expand functionality.

Row sizes are configured via \`rowConfigs: { size: 'small' | 'medium' | 'large' }\` in each row data object.

Available sizes:
- **small**: 44px height - best for dense data tables
- **medium** (default): 64px height - standard table row
- **large**: 80px height - for tables with more visual prominence`,...(lo=(io=De.parameters)==null?void 0:io.docs)==null?void 0:lo.description}}};var co,uo,po,ho,mo;Te.parameters={...Te.parameters,docs:{...(co=Te.parameters)==null?void 0:co.docs,source:{originalSource:`{
  render: () => <CustomHeaderDemo />
}`,...(po=(uo=Te.parameters)==null?void 0:uo.docs)==null?void 0:po.source},description:{story:`Demonstrates how to customize the table header background color using CSS.

The Table component supports custom header styling via the \`headerClassName\` prop.
Pinned columns and expand cells will inherit the header background color automatically.

This is useful when you need to match the table header with your application's design,
for example, using a gray header on a white background or vice versa.`,...(mo=(ho=Te.parameters)==null?void 0:ho.docs)==null?void 0:mo.description}}};var fo,go,wo,xo,yo;Ee.parameters={...Ee.parameters,docs:{...(fo=Ee.parameters)==null?void 0:fo.docs,source:{originalSource:`{
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
}`,...(wo=(go=Ee.parameters)==null?void 0:go.docs)==null?void 0:wo.source},description:{story:`Demonstrates resizable columns with default constraints (min: 50px, max: 500px).

Users can drag the column borders in the header to adjust column widths.
Initial widths are taken from column.width property.`,...(yo=(xo=Ee.parameters)==null?void 0:xo.docs)==null?void 0:yo.description}}};var bo,So,vo,Co,Ro;ze.parameters={...ze.parameters,docs:{...(bo=ze.parameters)==null?void 0:bo.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    minWidth: '600px'
  }}>
      <Table {...args} primaryColumn={primaryColumns} data={data} fixedColumns={fixedColumns} />
    </div>,
  args: {
    isResizable: true
  }
}`,...(vo=(So=ze.parameters)==null?void 0:So.docs)==null?void 0:vo.source},description:{story:"Demonstrates resizable columns without row actions.",...(Ro=(Co=ze.parameters)==null?void 0:Co.docs)==null?void 0:Ro.description}}};var ko,Do,To,Eo,zo;_e.parameters={..._e.parameters,docs:{...(ko=_e.parameters)==null?void 0:ko.docs,source:{originalSource:`{
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
}`,...(To=(Do=_e.parameters)==null?void 0:Do.docs)==null?void 0:To.source},description:{story:`Demonstrates resizable columns with custom min/max constraints.

Columns can be resized between 80px and 300px.`,...(zo=(Eo=_e.parameters)==null?void 0:Eo.docs)==null?void 0:zo.description}}};var _o,Ao,jo,Po,Mo;Ae.parameters={...Ae.parameters,docs:{...(_o=Ae.parameters)==null?void 0:_o.docs,source:{originalSource:`{
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
}`,...(jo=(Ao=Ae.parameters)==null?void 0:Ao.docs)==null?void 0:jo.source},description:{story:"Demonstrates resizable columns with fixed header.",...(Mo=(Po=Ae.parameters)==null?void 0:Po.docs)==null?void 0:Mo.description}}};var No,Oo,Ho,Wo,Lo;je.parameters={...je.parameters,docs:{...(No=je.parameters)==null?void 0:No.docs,source:{originalSource:`{
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
}`,...(Ho=(Oo=je.parameters)==null?void 0:Oo.docs)==null?void 0:Ho.source},description:{story:"Demonstrates resizable columns with horizontal scroll and fixed header.",...(Lo=(Wo=je.parameters)==null?void 0:Wo.docs)==null?void 0:Lo.description}}};var $o,Fo,Bo,Io,qo;Pe.parameters={...Pe.parameters,docs:{...($o=Pe.parameters)==null?void 0:$o.docs,source:{originalSource:`{
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
}`,...(Bo=(Fo=Pe.parameters)==null?void 0:Fo.docs)==null?void 0:Bo.source},description:{story:"Demonstrates resizable columns with pinned columns.",...(qo=(Io=Pe.parameters)==null?void 0:Io.docs)==null?void 0:qo.description}}};var Uo,Yo,Vo,Xo,Go;Me.parameters={...Me.parameters,docs:{...(Uo=Me.parameters)==null?void 0:Uo.docs,source:{originalSource:`{
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
}`,...(Vo=(Yo=Me.parameters)==null?void 0:Yo.docs)==null?void 0:Vo.source},description:{story:`Demonstrates a table with pinned header when scrolling is handled by an external container.

This example shows:
- Horizontal scrolling when table content is wider than the container
- Pinned header that pins to the top when scrolling vertically in the external container
- Pinned columns that stay visible during horizontal scroll
- Gradient effects on pinned columns and right edge

Note: This is different from a fixed header with internal table scrolling. Here, the scroll
container is external (parent div), and the header pins when scrolling reaches the table top.

Scroll vertically in the external container to see the header pinning, and horizontally to see
pinned columns and gradients.`,...(Go=(Xo=Me.parameters)==null?void 0:Xo.docs)==null?void 0:Go.description}}};var Ko,Jo,Qo,Zo,ea;Ne.parameters={...Ne.parameters,docs:{...(Ko=Ne.parameters)==null?void 0:Ko.docs,source:{originalSource:`{
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
}`,...(Qo=(Jo=Ne.parameters)==null?void 0:Jo.docs)==null?void 0:Qo.source},description:{story:"Demonstrates resizable columns with horizontal scroll and checkbox outside.",...(ea=(Zo=Ne.parameters)==null?void 0:Zo.docs)==null?void 0:ea.description}}};const Yr=["Default","FixedHeader","HorizontalScrollWithFixedHeaderControl","PinnedColumnsWithFixedHeader","ExpandableRows","ExpandableRowsWithDefaultState","CellExpansion","RowSizesWithExpand","RowSizes","CustomHeaderStyle","ResizableColumns","ResizableColumnsWithoutActions","ResizableColumnsWithConstraints","ResizableColumnsWithFixedHeader","ResizableColumnsWithHorizontalScroll","ResizableColumnsWithPinnedColumns","HorizontalScrollWithPinnedHeader","ResizableColumnsWithCheckboxOutside"];export{st as CellExpansion,Te as CustomHeaderStyle,Ze as Default,ot as ExpandableRows,at as ExpandableRowsWithDefaultState,et as FixedHeader,tt as HorizontalScrollWithFixedHeaderControl,Me as HorizontalScrollWithPinnedHeader,nt as PinnedColumnsWithFixedHeader,Ee as ResizableColumns,Ne as ResizableColumnsWithCheckboxOutside,_e as ResizableColumnsWithConstraints,Ae as ResizableColumnsWithFixedHeader,je as ResizableColumnsWithHorizontalScroll,Pe as ResizableColumnsWithPinnedColumns,ze as ResizableColumnsWithoutActions,De as RowSizes,ke as RowSizesWithExpand,Yr as __namedExportsOrder,Ur as default};
