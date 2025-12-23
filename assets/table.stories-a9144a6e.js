import{j as r}from"./jsx-runtime-2f188e98.js";import{b as go,r as m}from"./index-3553ef47.js";import{p as ot}from"./index-4c891f75.js";import{r as _t}from"./index-d0bd1ed5.js";import{c as wo}from"./clsx-9eb2d624.js";import{c as Pt}from"./bind-d8141dee.js";import{b as yo,a as nn,S as xo}from"./resizeColumn-b3ee80ba.js";import{S as an}from"./chevronDownDropdown-69a9d5c1.js";import{C as on}from"./checkbox-9336290e.js";import{T as bo}from"./tooltip-780f23de.js";import{i as So}from"./isEmpty-6ac0b123.js";import{P as vo}from"./popover-79ca4f84.js";import{S as Co}from"./meatballMenu-8b9878d9.js";import"./keyCodes-e5060420.js";import"./floating-ui.react-60d1f04e.js";import"./floating-ui.react-dom-a94e415a.js";import"./floatingUi-59569704.js";const Pa=e=>typeof e=="string";var jt={exports:{}},Oe={},st={exports:{}},ja={};const Ro=go(wo);var j={},K={};Object.defineProperty(K,"__esModule",{value:!0});K.dontSetMe=Eo;K.findInArray=ko;K.int=zo;K.isFunction=Do;K.isNum=To;function ko(e,t){for(let n=0,a=e.length;n<a;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function Do(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function To(e){return typeof e=="number"&&!isNaN(e)}function zo(e){return parseInt(e,10)}function Eo(e,t,n){if(e[t])return new Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`)}var ce={};Object.defineProperty(ce,"__esModule",{value:!0});ce.browserPrefixToKey=Na;ce.browserPrefixToStyle=Ao;ce.default=void 0;ce.getPrefix=Oa;const yt=["Moz","Webkit","O","ms"];function Oa(){var n,a;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const t=(a=(n=window.document)==null?void 0:n.documentElement)==null?void 0:a.style;if(!t||e in t)return"";for(let o=0;o<yt.length;o++)if(Na(e,yt[o])in t)return yt[o];return""}function Na(e,t){return t?`${t}${_o(e)}`:e}function Ao(e,t){return t?`-${t.toLowerCase()}-${e}`:e}function _o(e){let t="",n=!0;for(let a=0;a<e.length;a++)n?(t+=e[a].toUpperCase(),n=!1):e[a]==="-"?n=!0:t+=e[a];return t}ce.default=Oa();Object.defineProperty(j,"__esModule",{value:!0});j.addClassName=Wa;j.addEvent=jo;j.addUserSelectStyles=qo;j.createCSSTransform=$o;j.createSVGTransform=Fo;j.getTouch=Bo;j.getTouchIdentifier=Io;j.getTranslation=Ot;j.innerHeight=Ho;j.innerWidth=Wo;j.matchesSelector=Ha;j.matchesSelectorAndParentsTo=Po;j.offsetXYFromParent=Lo;j.outerHeight=No;j.outerWidth=Mo;j.removeClassName=La;j.removeEvent=Oo;j.scheduleRemoveUserSelectStyles=Uo;var X=K,sn=Ma(ce);function Ma(e,t){if(typeof WeakMap=="function")var n=new WeakMap,a=new WeakMap;return(Ma=function(o,s){if(!s&&o&&o.__esModule)return o;var i,c,l={__proto__:null,default:o};if(o===null||typeof o!="object"&&typeof o!="function")return l;if(i=s?a:n){if(i.has(o))return i.get(o);i.set(o,l)}for(const p in o)p!=="default"&&{}.hasOwnProperty.call(o,p)&&((c=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(o,p))&&(c.get||c.set)?i(l,p,c):l[p]=o[p]);return l})(e,t)}let Ye="";function Ha(e,t){return Ye||(Ye=(0,X.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,X.isFunction)(e[n])})),(0,X.isFunction)(e[Ye])?e[Ye](t):!1}function Po(e,t,n){let a=e;do{if(Ha(a,t))return!0;if(a===n)return!1;a=a.parentNode}while(a);return!1}function jo(e,t,n,a){if(!e)return;const o={capture:!0,...a};e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function Oo(e,t,n,a){if(!e)return;const o={capture:!0,...a};e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function No(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,X.int)(n.borderTopWidth),t+=(0,X.int)(n.borderBottomWidth),t}function Mo(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,X.int)(n.borderLeftWidth),t+=(0,X.int)(n.borderRightWidth),t}function Ho(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,X.int)(n.paddingTop),t-=(0,X.int)(n.paddingBottom),t}function Wo(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,X.int)(n.paddingLeft),t-=(0,X.int)(n.paddingRight),t}function Lo(e,t,n){const o=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),s=(e.clientX+t.scrollLeft-o.left)/n,i=(e.clientY+t.scrollTop-o.top)/n;return{x:s,y:i}}function $o(e,t){const n=Ot(e,t,"px");return{[(0,sn.browserPrefixToKey)("transform",sn.default)]:n}}function Fo(e,t){return Ot(e,t,"")}function Ot(e,t,n){let{x:a,y:o}=e,s=`translate(${a}${n},${o}${n})`;if(t){const i=`${typeof t.x=="string"?t.x:t.x+n}`,c=`${typeof t.y=="string"?t.y:t.y+n}`;s=`translate(${i}, ${c})`+s}return s}function Bo(e,t){return e.targetTouches&&(0,X.findInArray)(e.targetTouches,n=>t===n.identifier)||e.changedTouches&&(0,X.findInArray)(e.changedTouches,n=>t===n.identifier)}function Io(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function qo(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&Wa(e.body,"react-draggable-transparent-selection")}function Uo(e){window.requestAnimationFrame?window.requestAnimationFrame(()=>{rn(e)}):rn(e)}function rn(e){if(e)try{if(e.body&&La(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function Wa(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp(`(?:^|\\s)${t}(?!\\S)`))||(e.className+=` ${t}`)}function La(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(`(?:^|\\s)${t}(?!\\S)`,"g"),"")}var J={};Object.defineProperty(J,"__esModule",{value:!0});J.canDragX=Vo;J.canDragY=Go;J.createCoreData=Jo;J.createDraggableData=Qo;J.getBoundPosition=Yo;J.getControlPosition=Ko;J.snapToGrid=Xo;var Y=K,ue=j;function Yo(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:a}=e.props;a=typeof a=="string"?a:Zo(a);const o=Nt(e);if(typeof a=="string"){const{ownerDocument:s}=o,i=s.defaultView;let c;if(a==="parent"?c=o.parentNode:c=o.getRootNode().querySelector(a),!(c instanceof i.HTMLElement))throw new Error('Bounds selector "'+a+'" could not find an element.');const l=c,p=i.getComputedStyle(o),h=i.getComputedStyle(l);a={left:-o.offsetLeft+(0,Y.int)(h.paddingLeft)+(0,Y.int)(p.marginLeft),top:-o.offsetTop+(0,Y.int)(h.paddingTop)+(0,Y.int)(p.marginTop),right:(0,ue.innerWidth)(l)-(0,ue.outerWidth)(o)-o.offsetLeft+(0,Y.int)(h.paddingRight)-(0,Y.int)(p.marginRight),bottom:(0,ue.innerHeight)(l)-(0,ue.outerHeight)(o)-o.offsetTop+(0,Y.int)(h.paddingBottom)-(0,Y.int)(p.marginBottom)}}return(0,Y.isNum)(a.right)&&(t=Math.min(t,a.right)),(0,Y.isNum)(a.bottom)&&(n=Math.min(n,a.bottom)),(0,Y.isNum)(a.left)&&(t=Math.max(t,a.left)),(0,Y.isNum)(a.top)&&(n=Math.max(n,a.top)),[t,n]}function Xo(e,t,n){const a=Math.round(t/e[0])*e[0],o=Math.round(n/e[1])*e[1];return[a,o]}function Vo(e){return e.props.axis==="both"||e.props.axis==="x"}function Go(e){return e.props.axis==="both"||e.props.axis==="y"}function Ko(e,t,n){const a=typeof t=="number"?(0,ue.getTouch)(e,t):null;if(typeof t=="number"&&!a)return null;const o=Nt(n),s=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,ue.offsetXYFromParent)(a||e,s,n.props.scale)}function Jo(e,t,n){const a=!(0,Y.isNum)(e.lastX),o=Nt(e);return a?{node:o,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:o,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function Qo(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function Zo(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Nt(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var rt={},it={};Object.defineProperty(it,"__esModule",{value:!0});it.default=es;function es(){}Object.defineProperty(rt,"__esModule",{value:!0});rt.default=void 0;var xt=$a(m),$=Mt(ot),ts=Mt(_t),W=j,oe=J,bt=K,xe=Mt(it);function Mt(e){return e&&e.__esModule?e:{default:e}}function $a(e,t){if(typeof WeakMap=="function")var n=new WeakMap,a=new WeakMap;return($a=function(o,s){if(!s&&o&&o.__esModule)return o;var i,c,l={__proto__:null,default:o};if(o===null||typeof o!="object"&&typeof o!="function")return l;if(i=s?a:n){if(i.has(o))return i.get(o);i.set(o,l)}for(const p in o)p!=="default"&&{}.hasOwnProperty.call(o,p)&&((c=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(o,p))&&(c.get||c.set)?i(l,p,c):l[p]=o[p]);return l})(e,t)}function F(e,t,n){return(t=ns(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ns(e){var t=as(e,"string");return typeof t=="symbol"?t:t+""}function as(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const G={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let se=G.mouse,lt=class extends xt.Component{constructor(){super(...arguments),F(this,"dragging",!1),F(this,"lastX",NaN),F(this,"lastY",NaN),F(this,"touchIdentifier",null),F(this,"mounted",!1),F(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:a}=n;if(this.props.disabled||!(t.target instanceof a.defaultView.Node)||this.props.handle&&!(0,W.matchesSelectorAndParentsTo)(t.target,this.props.handle,n)||this.props.cancel&&(0,W.matchesSelectorAndParentsTo)(t.target,this.props.cancel,n))return;t.type==="touchstart"&&!this.props.allowMobileScroll&&t.preventDefault();const o=(0,W.getTouchIdentifier)(t);this.touchIdentifier=o;const s=(0,oe.getControlPosition)(t,o,this);if(s==null)return;const{x:i,y:c}=s,l=(0,oe.createCoreData)(this,i,c);(0,xe.default)("DraggableCore: handleDragStart: %j",l),(0,xe.default)("calling",this.props.onStart),!(this.props.onStart(t,l)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,W.addUserSelectStyles)(a),this.dragging=!0,this.lastX=i,this.lastY=c,(0,W.addEvent)(a,se.move,this.handleDrag),(0,W.addEvent)(a,se.stop,this.handleDragStop))}),F(this,"handleDrag",t=>{const n=(0,oe.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:a,y:o}=n;if(Array.isArray(this.props.grid)){let c=a-this.lastX,l=o-this.lastY;if([c,l]=(0,oe.snapToGrid)(this.props.grid,c,l),!c&&!l)return;a=this.lastX+c,o=this.lastY+l}const s=(0,oe.createCoreData)(this,a,o);if((0,xe.default)("DraggableCore: handleDrag: %j",s),this.props.onDrag(t,s)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const l=document.createEvent("MouseEvents");l.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(l)}return}this.lastX=a,this.lastY=o}),F(this,"handleDragStop",t=>{if(!this.dragging)return;const n=(0,oe.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:a,y:o}=n;if(Array.isArray(this.props.grid)){let l=a-this.lastX||0,p=o-this.lastY||0;[l,p]=(0,oe.snapToGrid)(this.props.grid,l,p),a=this.lastX+l,o=this.lastY+p}const s=(0,oe.createCoreData)(this,a,o);if(this.props.onStop(t,s)===!1||this.mounted===!1)return!1;const c=this.findDOMNode();c&&this.props.enableUserSelectHack&&(0,W.scheduleRemoveUserSelectStyles)(c.ownerDocument),(0,xe.default)("DraggableCore: handleDragStop: %j",s),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,c&&((0,xe.default)("DraggableCore: Removing handlers"),(0,W.removeEvent)(c.ownerDocument,se.move,this.handleDrag),(0,W.removeEvent)(c.ownerDocument,se.stop,this.handleDragStop))}),F(this,"onMouseDown",t=>(se=G.mouse,this.handleDragStart(t))),F(this,"onMouseUp",t=>(se=G.mouse,this.handleDragStop(t))),F(this,"onTouchStart",t=>(se=G.touch,this.handleDragStart(t))),F(this,"onTouchEnd",t=>(se=G.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,W.addEvent)(t,G.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:n}=t;(0,W.removeEvent)(n,G.mouse.move,this.handleDrag),(0,W.removeEvent)(n,G.touch.move,this.handleDrag),(0,W.removeEvent)(n,G.mouse.stop,this.handleDragStop),(0,W.removeEvent)(n,G.touch.stop,this.handleDragStop),(0,W.removeEvent)(t,G.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,W.scheduleRemoveUserSelectStyles)(n)}}findDOMNode(){var t,n,a;return(t=this.props)!=null&&t.nodeRef?(a=(n=this.props)==null?void 0:n.nodeRef)==null?void 0:a.current:ts.default.findDOMNode(this)}render(){return xt.cloneElement(xt.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};rt.default=lt;F(lt,"displayName","DraggableCore");F(lt,"propTypes",{allowAnyClick:$.default.bool,allowMobileScroll:$.default.bool,children:$.default.node.isRequired,disabled:$.default.bool,enableUserSelectHack:$.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:$.default.arrayOf($.default.number),handle:$.default.string,cancel:$.default.string,nodeRef:$.default.object,onStart:$.default.func,onDrag:$.default.func,onStop:$.default.func,onMouseDown:$.default.func,scale:$.default.number,className:bt.dontSetMe,style:bt.dontSetMe,transform:bt.dontSetMe});F(lt,"defaultProps",{allowAnyClick:!1,allowMobileScroll:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return l.default}}),e.default=void 0;var t=f(m),n=h(ot),a=h(_t),o=Ro,s=j,i=J,c=K,l=h(rt),p=h(it);function h(b){return b&&b.__esModule?b:{default:b}}function f(b,v){if(typeof WeakMap=="function")var k=new WeakMap,y=new WeakMap;return(f=function(T,z){if(!z&&T&&T.__esModule)return T;var H,N,I={__proto__:null,default:T};if(T===null||typeof T!="object"&&typeof T!="function")return I;if(H=z?y:k){if(H.has(T))return H.get(T);H.set(T,I)}for(const q in T)q!=="default"&&{}.hasOwnProperty.call(T,q)&&((N=(H=Object.defineProperty)&&Object.getOwnPropertyDescriptor(T,q))&&(N.get||N.set)?H(I,q,N):I[q]=T[q]);return I})(b,v)}function u(){return u=Object.assign?Object.assign.bind():function(b){for(var v=1;v<arguments.length;v++){var k=arguments[v];for(var y in k)({}).hasOwnProperty.call(k,y)&&(b[y]=k[y])}return b},u.apply(null,arguments)}function g(b,v,k){return(v=w(v))in b?Object.defineProperty(b,v,{value:k,enumerable:!0,configurable:!0,writable:!0}):b[v]=k,b}function w(b){var v=S(b,"string");return typeof v=="symbol"?v:v+""}function S(b,v){if(typeof b!="object"||!b)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var y=k.call(b,v||"default");if(typeof y!="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(b)}class R extends t.Component{static getDerivedStateFromProps(v,k){let{position:y}=v,{prevPropsPosition:T}=k;return y&&(!T||y.x!==T.x||y.y!==T.y)?((0,p.default)("Draggable: getDerivedStateFromProps %j",{position:y,prevPropsPosition:T}),{x:y.x,y:y.y,prevPropsPosition:{...y}}):null}constructor(v){super(v),g(this,"onDragStart",(k,y)=>{if((0,p.default)("Draggable: onDragStart: %j",y),this.props.onStart(k,(0,i.createDraggableData)(this,y))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),g(this,"onDrag",(k,y)=>{if(!this.state.dragging)return!1;(0,p.default)("Draggable: onDrag: %j",y);const T=(0,i.createDraggableData)(this,y),z={x:T.x,y:T.y,slackX:0,slackY:0};if(this.props.bounds){const{x:N,y:I}=z;z.x+=this.state.slackX,z.y+=this.state.slackY;const[q,Me]=(0,i.getBoundPosition)(this,z.x,z.y);z.x=q,z.y=Me,z.slackX=this.state.slackX+(N-z.x),z.slackY=this.state.slackY+(I-z.y),T.x=z.x,T.y=z.y,T.deltaX=z.x-this.state.x,T.deltaY=z.y-this.state.y}if(this.props.onDrag(k,T)===!1)return!1;this.setState(z)}),g(this,"onDragStop",(k,y)=>{if(!this.state.dragging||this.props.onStop(k,(0,i.createDraggableData)(this,y))===!1)return!1;(0,p.default)("Draggable: onDragStop: %j",y);const z={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:N,y:I}=this.props.position;z.x=N,z.y=I}this.setState(z)}),this.state={dragging:!1,dragged:!1,x:v.position?v.position.x:v.defaultPosition.x,y:v.position?v.position.y:v.defaultPosition.y,prevPropsPosition:{...v.position},slackX:0,slackY:0,isElementSVG:!1},v.position&&!(v.onDrag||v.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.state.dragging&&this.setState({dragging:!1})}findDOMNode(){var v,k;return((k=(v=this.props)==null?void 0:v.nodeRef)==null?void 0:k.current)??a.default.findDOMNode(this)}render(){const{axis:v,bounds:k,children:y,defaultPosition:T,defaultClassName:z,defaultClassNameDragging:H,defaultClassNameDragged:N,position:I,positionOffset:q,scale:Me,...ct}=this.props;let He={},A=null;const We=!!!I||this.state.dragging,Le=I||T,ie={x:(0,i.canDragX)(this)&&We?this.state.x:Le.x,y:(0,i.canDragY)(this)&&We?this.state.y:Le.y};this.state.isElementSVG?A=(0,s.createSVGTransform)(ie,q):He=(0,s.createCSSTransform)(ie,q);const V=(0,o.clsx)(y.props.className||"",z,{[H]:this.state.dragging,[N]:this.state.dragged});return t.createElement(l.default,u({},ct,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(y),{className:V,style:{...y.props.style,...He},transform:A}))}}e.default=R,g(R,"displayName","Draggable"),g(R,"propTypes",{...l.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:c.dontSetMe,style:c.dontSetMe,transform:c.dontSetMe}),g(R,"defaultProps",{...l.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(ja);const{default:Fa,DraggableCore:os}=ja;st.exports=Fa;st.exports.default=Fa;st.exports.DraggableCore=os;var ss=st.exports,Ht={};Ht.__esModule=!0;Ht.cloneElement=ps;var rs=is(m);function is(e){return e&&e.__esModule?e:{default:e}}function ln(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function dn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ln(Object(n),!0).forEach(function(a){ls(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ln(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ls(e,t,n){return t=ds(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ds(e){var t=cs(e,"string");return typeof t=="symbol"?t:String(t)}function cs(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ps(e,t){return t.style&&e.props.style&&(t.style=dn(dn({},e.props.style),t.style)),t.className&&e.props.className&&(t.className=e.props.className+" "+t.className),rs.default.cloneElement(e,t)}var Ne={};Ne.__esModule=!0;Ne.resizableProps=void 0;var D=us(ot);function us(e){return e&&e.__esModule?e:{default:e}}var ms={axis:D.default.oneOf(["both","x","y","none"]),className:D.default.string,children:D.default.element.isRequired,draggableOpts:D.default.shape({allowAnyClick:D.default.bool,cancel:D.default.string,children:D.default.node,disabled:D.default.bool,enableUserSelectHack:D.default.bool,offsetParent:D.default.node,grid:D.default.arrayOf(D.default.number),handle:D.default.string,nodeRef:D.default.object,onStart:D.default.func,onDrag:D.default.func,onStop:D.default.func,onMouseDown:D.default.func,scale:D.default.number}),height:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var o=n[0];if(o.axis==="both"||o.axis==="y"){var s;return(s=D.default.number).isRequired.apply(s,n)}return D.default.number.apply(D.default,n)},handle:D.default.oneOfType([D.default.node,D.default.func]),handleSize:D.default.arrayOf(D.default.number),lockAspectRatio:D.default.bool,maxConstraints:D.default.arrayOf(D.default.number),minConstraints:D.default.arrayOf(D.default.number),onResizeStop:D.default.func,onResizeStart:D.default.func,onResize:D.default.func,resizeHandles:D.default.arrayOf(D.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:D.default.number,width:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var o=n[0];if(o.axis==="both"||o.axis==="x"){var s;return(s=D.default.number).isRequired.apply(s,n)}return D.default.number.apply(D.default,n)}};Ne.resizableProps=ms;Oe.__esModule=!0;Oe.default=void 0;var be=ys(m),hs=ss,fs=Ht,gs=Ne,ws=["children","className","draggableOpts","width","height","handle","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"];function Ba(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Ba=function(o){return o?n:t})(e)}function ys(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Ba(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var i=o?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(a,s,i):a[s]=e[s]}return a.default=e,n&&n.set(e,a),a}function Dt(){return Dt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Dt.apply(this,arguments)}function xs(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,s;for(s=0;s<a.length;s++)o=a[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function cn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function St(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cn(Object(n),!0).forEach(function(a){bs(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function bs(e,t,n){return t=Ss(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ss(e){var t=vs(e,"string");return typeof t=="symbol"?t:String(t)}function vs(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Cs(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Tt(e,t)}function Tt(e,t){return Tt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,o){return a.__proto__=o,a},Tt(e,t)}var Wt=function(e){Cs(t,e);function t(){for(var a,o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return a=e.call.apply(e,[this].concat(s))||this,a.handleRefs={},a.lastHandleRect=null,a.slack=null,a}var n=t.prototype;return n.componentWillUnmount=function(){this.resetData()},n.resetData=function(){this.lastHandleRect=this.slack=null},n.runConstraints=function(o,s){var i=this.props,c=i.minConstraints,l=i.maxConstraints,p=i.lockAspectRatio;if(!c&&!l&&!p)return[o,s];if(p){var h=this.props.width/this.props.height,f=o-this.props.width,u=s-this.props.height;Math.abs(f)>Math.abs(u*h)?s=o/h:o=s*h}var g=o,w=s,S=this.slack||[0,0],R=S[0],b=S[1];return o+=R,s+=b,c&&(o=Math.max(c[0],o),s=Math.max(c[1],s)),l&&(o=Math.min(l[0],o),s=Math.min(l[1],s)),this.slack=[R+(g-o),b+(w-s)],[o,s]},n.resizeHandler=function(o,s){var i=this;return function(c,l){var p=l.node,h=l.deltaX,f=l.deltaY;o==="onResizeStart"&&i.resetData();var u=(i.props.axis==="both"||i.props.axis==="x")&&s!=="n"&&s!=="s",g=(i.props.axis==="both"||i.props.axis==="y")&&s!=="e"&&s!=="w";if(!(!u&&!g)){var w=s[0],S=s[s.length-1],R=p.getBoundingClientRect();if(i.lastHandleRect!=null){if(S==="w"){var b=R.left-i.lastHandleRect.left;h+=b}if(w==="n"){var v=R.top-i.lastHandleRect.top;f+=v}}i.lastHandleRect=R,S==="w"&&(h=-h),w==="n"&&(f=-f);var k=i.props.width+(u?h/i.props.transformScale:0),y=i.props.height+(g?f/i.props.transformScale:0),T=i.runConstraints(k,y);k=T[0],y=T[1];var z=k!==i.props.width||y!==i.props.height,H=typeof i.props[o]=="function"?i.props[o]:null,N=o==="onResize"&&!z;H&&!N&&(c.persist==null||c.persist(),H(c,{node:p,size:{width:k,height:y},handle:s})),o==="onResizeStop"&&i.resetData()}}},n.renderResizeHandle=function(o,s){var i=this.props.handle;if(!i)return be.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+o,ref:s});if(typeof i=="function")return i(o,s);var c=typeof i.type=="string",l=St({ref:s},c?{}:{handleAxis:o});return be.cloneElement(i,l)},n.render=function(){var o=this,s=this.props,i=s.children,c=s.className,l=s.draggableOpts;s.width,s.height,s.handle,s.handleSize,s.lockAspectRatio,s.axis,s.minConstraints,s.maxConstraints,s.onResize,s.onResizeStop,s.onResizeStart;var p=s.resizeHandles;s.transformScale;var h=xs(s,ws);return(0,fs.cloneElement)(i,St(St({},h),{},{className:(c?c+" ":"")+"react-resizable",children:[].concat(i.props.children,p.map(function(f){var u,g=(u=o.handleRefs[f])!=null?u:o.handleRefs[f]=be.createRef();return be.createElement(hs.DraggableCore,Dt({},l,{nodeRef:g,key:"resizableHandle-"+f,onStop:o.resizeHandler("onResizeStop",f),onStart:o.resizeHandler("onResizeStart",f),onDrag:o.resizeHandler("onResize",f)}),o.renderResizeHandle(f,g))}))}))},t}(be.Component);Oe.default=Wt;Wt.propTypes=gs.resizableProps;Wt.defaultProps={axis:"both",handleSize:[20,20],lockAspectRatio:!1,minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1};var dt={};dt.__esModule=!0;dt.default=void 0;var vt=zs(m),Rs=Ia(ot),ks=Ia(Oe),Ds=Ne,Ts=["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles","style","transformScale"];function Ia(e){return e&&e.__esModule?e:{default:e}}function qa(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(qa=function(o){return o?n:t})(e)}function zs(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=qa(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var i=o?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(a,s,i):a[s]=e[s]}return a.default=e,n&&n.set(e,a),a}function zt(){return zt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},zt.apply(this,arguments)}function pn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pn(Object(n),!0).forEach(function(a){Es(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Es(e,t,n){return t=As(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function As(e){var t=_s(e,"string");return typeof t=="symbol"?t:String(t)}function _s(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ps(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,s;for(s=0;s<a.length;s++)o=a[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function js(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Et(e,t)}function Et(e,t){return Et=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,o){return a.__proto__=o,a},Et(e,t)}var Ua=function(e){js(t,e);function t(){for(var a,o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return a=e.call.apply(e,[this].concat(s))||this,a.state={width:a.props.width,height:a.props.height,propsWidth:a.props.width,propsHeight:a.props.height},a.onResize=function(c,l){var p=l.size;a.props.onResize?(c.persist==null||c.persist(),a.setState(p,function(){return a.props.onResize&&a.props.onResize(c,l)})):a.setState(p)},a}t.getDerivedStateFromProps=function(o,s){return s.propsWidth!==o.width||s.propsHeight!==o.height?{width:o.width,height:o.height,propsWidth:o.width,propsHeight:o.height}:null};var n=t.prototype;return n.render=function(){var o=this.props,s=o.handle,i=o.handleSize;o.onResize;var c=o.onResizeStart,l=o.onResizeStop,p=o.draggableOpts,h=o.minConstraints,f=o.maxConstraints,u=o.lockAspectRatio,g=o.axis;o.width,o.height;var w=o.resizeHandles,S=o.style,R=o.transformScale,b=Ps(o,Ts);return vt.createElement(ks.default,{axis:g,draggableOpts:p,handle:s,handleSize:i,height:this.state.height,lockAspectRatio:u,maxConstraints:f,minConstraints:h,onResizeStart:c,onResize:this.onResize,onResizeStop:l,resizeHandles:w,transformScale:R,width:this.state.width},vt.createElement("div",zt({},b,{style:tt(tt({},S),{},{width:this.state.width+"px",height:this.state.height+"px"})})))},t}(vt.Component);dt.default=Ua;Ua.propTypes=tt(tt({},Ds.resizableProps),{},{children:Rs.default.element});jt.exports=function(){throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")};var Os=jt.exports.Resizable=Oe.default;jt.exports.ResizableBox=dt.default;const Ns="_table_1s7py_1",Ms="_resizable_1s7py_67",Hs="_selectable_1s7py_84",Ws="_expanded_1s7py_80",Ls="_label_1s7py_352",$s={table:Ns,"fixed-header":"_fixed-header_1s7py_10","external-scroll-container":"_external-scroll-container_1s7py_14","horizontally-scrollable-container":"_horizontally-scrollable-container_1s7py_21","table-header":"_table-header_1s7py_26","sticky-header":"_sticky-header_1s7py_34","pinned-header":"_pinned-header_1s7py_44","horizontally-scrollable":"_horizontally-scrollable_1s7py_21",resizable:Ms,"resizable-column":"_resizable-column_1s7py_67","table-row":"_table-row_1s7py_75","expanded-cell":"_expanded-cell_1s7py_80",selectable:Hs,"row-content-wrapper":"_row-content-wrapper_1s7py_88","pinned-column":"_pinned-column_1s7py_96","has-scroll":"_has-scroll_1s7py_96","table-row-content":"_table-row-content_1s7py_99","expand-cell":"_expand-cell_1s7py_116","left-border-accent":"_left-border-accent_1s7py_119","size-small":"_size-small_1s7py_129","size-large":"_size-large_1s7py_140","table-body":"_table-body_1s7py_152","scrollable-body":"_scrollable-body_1s7py_158","table-header-cell":"_table-header-cell_1s7py_222","table-cell":"_table-cell_1s7py_223","action-menu-cell":"_action-menu-cell_1s7py_229","checkbox-cell":"_checkbox-cell_1s7py_257","expand-all-tooltip-wrapper":"_expand-all-tooltip-wrapper_1s7py_301","expand-all-tooltip-content":"_expand-all-tooltip-content_1s7py_310","expand-icon":"_expand-icon_1s7py_319",expanded:Ws,"primary-cell":"_primary-cell_1s7py_328",label:Ls,"sortable-cell":"_sortable-cell_1s7py_366","align-right":"_align-right_1s7py_369","align-center":"_align-center_1s7py_375"},te="asc",Fs="desc",he=32,Ya=100,Bs=48,At=48,nt=e=>e.toLowerCase()===te,fe=(e,t)=>t?[...e].sort((n,a)=>{const o=n[t.key].content||n[t.key],s=a[t.key].content||a[t.key];return o<s?nt(t.direction)?-1:1:o>s?nt(t.direction)?1:-1:0}):e,Is=e=>e.map(t=>t.key),Lt=e=>nt(e)?Fs:te,le=e=>"primary"in e&&e.primary===!0,qs=e=>{var n;return`size-${((n=e.rowConfigs)==null?void 0:n.size)??"default"}`},Ct=e=>Pa(e)?e:`${e}px`,Us=(e,t,n,a,o)=>{let s=0;a&&(s+=he),o&&(s+=he);for(let i=0;i<e;i++){const c=t[i];if(le(c)){const l=n.current.get(c.key)||Ya;s+=l}else{const l=c,p=Pa(l.width)?parseInt(l.width,10)||0:l.width;s+=p}}return s},Xe=(e,t,n,a,o,s,i)=>{const c={};if(!le(e)){const l=e;c.textAlign=l.align}if(t&&n!==void 0){const l=Us(n,a,o,s,i);c.left=`${l}px`}return c},un=(e,t,n,a,o,s=!1,i,c=!1)=>{const l=[];n&&l.push(`${he}px`),s&&a&&l.push(`${he}px`);const p=h=>{if((i==null?void 0:i[h.key])!==void 0){l.push(`${i[h.key]}px`);return}if(le(h)){const f=h;if(c&&f.width){l.push(Ct(f.width));return}const u=f.width?Ct(f.width):`${Ya}px`;l.push(`minmax(${u}, 1fr)`)}else{const u=Ct(h.width);l.push(u)}};return e.forEach(p),t.forEach(p),o&&l.push(`${Bs}px`),l.join(" ")},Ys=({primaryColumns:e,fixedColumns:t,pinnedColumnKeys:n})=>m.useMemo(()=>{const a=[],o=[];return e.forEach(s=>{const i={...s,primary:!0};n.includes(s.key)?a.push(i):o.push(i)}),t.forEach(s=>{n.includes(s.key)?a.push(s):o.push(s)}),{pinnedColumns:a,scrollableColumns:o}},[e,t,n]),Xs=()=>{const[e,t]=m.useState(null),[n,a]=m.useState(null),o=m.useCallback(l=>{t(l)},[]),s=m.useCallback(()=>{t(null)},[]),i=m.useCallback(l=>{a(l)},[]),c=m.useCallback(()=>{a(null)},[]);return{hoveredColumn:e,hoveredRow:n,handleColumnMouseEnter:o,handleColumnMouseLeave:s,handleRowMouseEnter:i,handleRowMouseLeave:c}},Vs=({primaryColumns:e,fixedColumns:t,expandedRowIds:n,onToggleRowExpansion:a})=>{const[o,s]=m.useState(new Set);m.useEffect(()=>{const l=[...e.map(h=>h.key),...t.map(h=>h.key)],p=new Set;n.forEach(h=>{l.forEach(f=>{p.add(`${h}-${f}`)})}),s(h=>{if(h.size===p.size){let f=!0;if(h.forEach(u=>{p.has(u)||(f=!1)}),f)return h}return p})},[n,e,t]);const i=m.useCallback(l=>{const p=new Set(o),h=n.includes(l),f=[...e.map(u=>u.key),...t.map(u=>u.key)];h?f.forEach(u=>{const g=`${l}-${u}`;p.delete(g)}):f.forEach(u=>{const g=`${l}-${u}`;p.add(g)}),s(p),a(l)},[o,n,e,t,a]),c=m.useCallback((l,p)=>{const h=`${l}-${p}`;return o.has(h)},[o]);return{expandedCells:o,handleToggleRowExpansion:i,isCellExpanded:c}},Gs=()=>{const e=m.useRef(new Map),t=m.useCallback(n=>a=>{if(!a)return;const o=a.getBoundingClientRect().width;o>0&&e.current.set(n,o)},[]);return{columnWidthsRef:e,setCellRef:t}},Ks=({enabled:e=!1,minWidth:t=50,maxWidth:n=500,columnWidthsRef:a,onColumnResize:o})=>{const[s,i]=m.useState({}),c=m.useCallback(()=>{if(!e||Object.keys(s).length>0||!a)return;const h={};a.current.forEach((f,u)=>{h[u]=f}),i(h)},[e,s,a]),l=m.useCallback(h=>(f,{size:u})=>{if(!e)return;const g=Math.min(n,Math.max(t,u.width));i(w=>({...w,[h]:g}))},[e,t,n]),p=m.useCallback(h=>()=>{!e||!s[h]||o==null||o(h,s[h])},[e,s,o]);return{columnWidths:s,handleResize:l,handleResizeStop:p,handleResizeStart:c}},Js=(e,t,n,a,o,s,i,c)=>m.useMemo(()=>{if(!e)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};if(!(o+e.clientWidth<i))return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const p=e.getBoundingClientRect(),h=(t==null?void 0:t.offsetHeight)||0,f=n==null?void 0:n.getBoundingClientRect(),u=Math.min(p.bottom,(f==null?void 0:f.bottom)||Number.MAX_SAFE_INTEGER);let g;a&&n&&f?g=f.top-p.top+h:g=h;const w=p.top+g,R=e.scrollWidth>e.clientWidth?e.offsetHeight-e.clientHeight:0,b=u-w-R,k=e.scrollHeight>e.clientHeight?e.offsetWidth-e.clientWidth:0,y=p.right-At-k;return{visible:!0,position:{top:w,left:y},size:{width:At,height:b}}},[e,t,n,a,o,s,i,c]),Qs=(e,t,n,a,o,s,i,c)=>m.useMemo(()=>{if(!e)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};if(!(t>0))return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const p=e.querySelector('[data-row-index="0"]');if(!p)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const h=Array.from(p.querySelectorAll("[data-pinned-index]"));if(h.length===0)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const f=Math.max(...h.map(N=>parseInt(N.getAttribute("data-pinned-index")||"-1",10)));if(f<0)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const u=h.find(N=>parseInt(N.getAttribute("data-pinned-index")||"-1",10)===f);if(!u)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const g=u.getBoundingClientRect(),w=e.getBoundingClientRect(),S=(n==null?void 0:n.offsetHeight)||0,R=a==null?void 0:a.getBoundingClientRect(),b=g.right,v=Math.min(w.bottom,(R==null?void 0:R.bottom)||Number.MAX_SAFE_INTEGER);let k;o&&a&&R?k=R.top-w.top+S:k=S;const y=w.top+k,z=e.scrollWidth>e.clientWidth?e.offsetHeight-e.clientHeight:0,H=v-y-z;return{visible:!0,position:{top:y,left:b},size:{width:At,height:H}}},[e,t,n,a,o,s,i,c]),Zs={"resize-handle":"_resize-handle_15uk3_1"},er=Pt.bind(Zs),Xa=m.forwardRef((e,t)=>r.jsx("div",{ref:t,className:er("resize-handle"),...e,children:r.jsx(yo,{})}));Xa.__docgenInfo={description:"",methods:[],displayName:"ResizeHandle"};const tr={"gradient-overlay":"_gradient-overlay_hx7m8_1","direction-right":"_direction-right_hx7m8_5","direction-left":"_direction-left_hx7m8_13"},nr=Pt.bind(tr),mn=({portalContainer:e,visible:t,position:n,size:a,direction:o,className:s,dataTestId:i})=>{if(!t||!e)return null;const c={position:"fixed",top:`${n.top}px`,width:`${a.width}px`,height:`${a.height}px`};return n.left!==void 0&&(c.left=`${n.left}px`),n.right!==void 0&&(c.right=`${n.right}px`),_t.createPortal(r.jsx("div",{className:nr("gradient-overlay",`direction-${o}`,s),style:c,"data-gradient-type":i}),e)},_=Pt.bind($s),hn=({column:e})=>{const t=m.useRef(null),[n,a]=m.useState(!1);return m.useEffect(()=>{if(t.current){const o=t.current.offsetWidth,s=t.current.scrollWidth;a(s>o)}},[e.header]),r.jsx("span",{ref:t,title:n?e.header:void 0,children:e.header})},O=({data:e,primaryColumn:t,fixedColumns:n,renderRowActions:a,className:o="",rowClassName:s="",headerClassName:i="",bodyClassName:c="",selectable:l=!1,selectedRowIds:p=[],sortingDirection:h=te,sortingColumn:f,sortableColumns:u,isHeaderFixed:g=!1,isHorizontallyScrollable:w=!1,pinnedColumnKeys:S=[],isRowsExpandable:R=!1,expandedRowIds:b=[],isAllExpandedByDefault:v,expandAllTooltip:k,isResizable:y=!1,minColumnWidth:T=50,maxColumnWidth:z=500,isSelectAllCheckboxAlwaysVisible:H=!1,onChangeSorting:N=()=>{},onToggleRowSelection:I=()=>{},onToggleAllRowsSelection:q=()=>{},onToggleRowExpansion:Me=()=>{},onToggleAllRowsExpansion:ct=()=>{},onColumnResize:He=()=>{},externalScrollContainerRef:A,portalContainer:pt=typeof document<"u"?document.body:null,rightGradientClassName:We,pinnedGradientClassName:Le})=>{const ie=m.useMemo(()=>Array.isArray(t)?t:[t],[t]),V=f??ie[0],$e=u??Is([...ie,...n]),{pinnedColumns:ne,scrollableColumns:Fe}=Ys({primaryColumns:ie,fixedColumns:n,pinnedColumnKeys:S}),{hoveredColumn:$t,hoveredRow:Va,handleColumnMouseEnter:Ft,handleColumnMouseLeave:Bt,handleRowMouseEnter:Ga,handleRowMouseLeave:Ka}=Xs(),{columnWidthsRef:ge,setCellRef:It}=Gs(),{handleToggleRowExpansion:Ja,isCellExpanded:qt}=Vs({primaryColumns:ie,fixedColumns:n,expandedRowIds:b,onToggleRowExpansion:Me}),{columnWidths:Be,handleResize:Qa,handleResizeStop:Za,handleResizeStart:eo}=Ks({enabled:y,minWidth:T,maxWidth:z,columnWidthsRef:ge,onColumnResize:He}),Ut=(d,C)=>r.jsx(Os,{width:Be[d.key]??(typeof d.width=="number"?d.width:T),height:0,axis:"x",handle:r.jsx(Xa,{}),onResizeStart:eo,onResize:Qa(d.key),onResizeStop:Za(d.key),minConstraints:[T,0],maxConstraints:[z,0],className:_("resizable-column"),children:C},d.key),L=m.useRef(null),ae=m.useRef(null),to=m.useRef(null),[pe,no]=m.useState(!1),Ie=m.useCallback(d=>{const C=ae.current;if(C&&C.contains(d))return;const x=d.parentElement;if(!x)return;const E=window.getComputedStyle(x),M=parseFloat(E.paddingTop)||0,P=parseFloat(E.paddingBottom)||0,Z=d.offsetHeight+M+P;d.style.setProperty("--expand-cell-top",`${M}px`),d.style.setProperty("--expand-cell-height",`${Z}px`)},[]),[Yt,ut]=m.useState(0),[Xt,mt]=m.useState(0),[Vt,ht]=m.useState(0),[Gt,Kt]=m.useState(0),qe=m.useRef(!1),ft=m.useRef(new Set),we=m.useRef(null),gt=Js(L.current,ae.current,(A==null?void 0:A.current)instanceof HTMLElement?A.current:null,pe,Yt,Xt,Vt,Gt),wt=Qs(L.current,Yt,ae.current,(A==null?void 0:A.current)instanceof HTMLElement?A.current:null,pe,Xt,Vt,Gt),Jt=d=>{$e.includes(d)&&N({key:d,direction:h})},ao=d=>{I(d)},oo=()=>{q()},so=()=>{ct()},Qt=d=>$e.includes(d)?(V==null?void 0:V.key)===d?nt(h)?r.jsx(nn,{}):r.jsx(xo,{}):r.jsx(nn,{}):null,ro=e.every(d=>p.includes(d.id)),io=e.some(d=>p.includes(d.id)),Zt=(p==null?void 0:p.length)>0,lo=!So(e),co=H&&lo||Zt,po=e.every(d=>b.includes(d.id)),uo=v!==void 0?v:po,mo=un(ne,Fe,R,l,!!a,!1,y?Be:void 0,y),ho=un(ne,Fe,R,l,!!a,!0,y?Be:void 0,y),en=r.jsx("button",{onClick:so,"aria-label":"Toggle all rows expansion",children:r.jsx("span",{className:_("expand-icon",{expanded:uo}),children:r.jsx(an,{})})});return m.useEffect(()=>{if(!(A!=null&&A.current)||!L.current||!ae.current)return;const d=A.current,C=L.current,x=ae.current,E=()=>{const P=C.getBoundingClientRect(),U=d.getBoundingClientRect(),Z=x.offsetHeight,ee=P.top-U.top,ye=P.bottom-U.top,tn=d.scrollTop>0&&ee<=0&&ye>Z;if(no(tn),tn){const Ue=P.left,fo=U.top;x.classList.add(_("pinned-header")),w&&(x.style.overflow="hidden",x.style.overflowX="hidden"),x.style.left=`${Ue}px`,x.style.top=`${fo}px`,x.style.width=`${P.width}px`}else{const Ue=C.scrollLeft;qe.current=!0,x.classList.remove(_("pinned-header")),w&&(x.scrollLeft=0),x.style.left="",x.style.top="",x.style.width="",w&&(x.style.overflow="",x.style.overflowX=""),w&&Ue>0?requestAnimationFrame(()=>{C.scrollLeft=Ue,setTimeout(()=>{qe.current=!1},0)}):qe.current=!1}},M=requestAnimationFrame(()=>{E()});return d.addEventListener("scroll",E),window.addEventListener("resize",E),()=>{cancelAnimationFrame(M),d.removeEventListener("scroll",E),window.removeEventListener("resize",E)}},[A,w]),m.useEffect(()=>{if(!(A!=null&&A.current)||!L.current||!ae.current||!pe)return;const d=A.current,C=L.current,x=ae.current,E=()=>{const ee=C.getBoundingClientRect(),ye=d.getBoundingClientRect();x.style.left=`${ee.left}px`,x.style.top=`${ye.top}px`,x.style.width=`${ee.width}px`},M=ee=>{qe.current||(ee===x?C.scrollLeft=x.scrollLeft:x.scrollLeft=C.scrollLeft,we.current&&we.current())},P=()=>{M(C),E()},U=()=>{M(x)},Z=()=>{E()};return C.addEventListener("scroll",P),w&&x.addEventListener("scroll",U),d.addEventListener("scroll",Z),window.addEventListener("resize",E),M(C),E(),()=>{C.removeEventListener("scroll",P),w&&x.removeEventListener("scroll",U),d.removeEventListener("scroll",Z),window.removeEventListener("resize",E)}},[pe,A,w]),m.useEffect(()=>{if(!L.current||!w)return;const d=L.current,C=A==null?void 0:A.current;ut(d.scrollLeft),mt((C==null?void 0:C.scrollTop)||d.scrollTop||0),ht(d.scrollWidth);const x=()=>{d&&(ut(d.scrollLeft),mt((C==null?void 0:C.scrollTop)||d.scrollTop||0),ht(d.scrollWidth))};let E=null;const M=()=>{E===null&&(E=requestAnimationFrame(()=>{x(),E=null}))},P=()=>{M()},U=()=>{M()};d.addEventListener("scroll",P,{passive:!0}),C&&C.addEventListener("scroll",U,{passive:!0});const Z=()=>{x(),Kt(ye=>ye+1)};window.addEventListener("resize",Z),we.current=x,x();const ee=new ResizeObserver(()=>{x()});return d&&ee.observe(d),()=>{d.removeEventListener("scroll",P),C&&C.removeEventListener("scroll",U),window.removeEventListener("resize",Z),ee.disconnect(),E!==null&&(cancelAnimationFrame(E),E=null)}},[w,A,pe,b]),m.useEffect(()=>{if(!L.current||!w)return;const d=L.current,C=A==null?void 0:A.current;requestAnimationFrame(()=>{d&&(ut(d.scrollLeft),mt((C==null?void 0:C.scrollTop)||d.scrollTop||0),ht(d.scrollWidth),we.current&&we.current())})},[Be,w,A]),m.useEffect(()=>{if(!L.current)return;const d=L.current,C=()=>{Array.from(d.querySelectorAll('[data-base-left="0"]')).forEach(Ie)};requestAnimationFrame(()=>{C()})},[R,e,Ie]),m.useEffect(()=>{if(!L.current)return;const d=L.current,C=new Set(b),x=ft.current,E=new Set;if(b.forEach(P=>{x.has(P)||E.add(P)}),x.forEach(P=>{C.has(P)||E.add(P)}),E.size===0){ft.current=C;return}const M=setTimeout(()=>{E.forEach(P=>{const U=d.querySelector(`[data-base-left="0"][data-row-id="${P}"]`);U&&Ie(U)}),Kt(P=>P+1)},0);return ft.current=C,()=>clearTimeout(M)},[R,b,Ie]),r.jsxs("div",{ref:L,className:_("table",{"fixed-header":g,"horizontally-scrollable-container":g&&(w||y),"external-scroll-container":g&&!!A},o),children:[r.jsxs("div",{ref:ae,className:_("table-header",{"sticky-header":g&&!pe,"horizontally-scrollable":w,resizable:y},i),style:{gridTemplateColumns:ho},children:[l&&r.jsx("div",{className:_("table-header-cell","checkbox-cell"),"data-base-left":R?he:0,children:co&&r.jsx(on,{value:ro,partiallyChecked:io,onChange:oo,className:_("checkbox-cell")})}),R&&r.jsx("div",{className:_("table-header-cell","expand-cell","left-border-accent"),"data-base-left":"0",children:k?r.jsx(bo,{content:k,placement:"top",wrapperClassName:_("expand-all-tooltip-wrapper"),contentClassName:_("expand-all-tooltip-content"),children:en}):en}),ne.map((d,C)=>{const x=r.jsx("button",{"data-column-key":d.key,"data-pinned-index":C,className:_("table-header-cell","pinned-column",{[`align-${d.align}`]:"align"in d,"primary-cell":le(d),"sortable-cell":$e.includes(d.key),resizable:y}),style:Xe(d,!0,C,ne,ge,R,l),children:r.jsxs("div",{className:_("label"),onClick:()=>Jt(d.key),onMouseEnter:()=>Ft(d.key),onMouseLeave:Bt,children:[r.jsx(hn,{column:d}),($t===d.key||(V==null?void 0:V.key)===d.key)&&Qt(d.key)]})},d.key);return y?Ut(d,x):x}),Fe.map(d=>{const C=r.jsx("button",{className:_("table-header-cell",{[`align-${d.align}`]:"align"in d,"primary-cell":le(d),"sortable-cell":$e.includes(d.key),resizable:y}),style:Xe(d,!1,void 0,ne,ge,R,l),children:r.jsxs("div",{className:_("label"),onClick:()=>Jt(d.key),onMouseEnter:()=>Ft(d.key),onMouseLeave:Bt,children:[r.jsx(hn,{column:d}),($t===d.key||(V==null?void 0:V.key)===d.key)&&Qt(d.key)]})},d.key);return y?Ut(d,C):C}),a&&r.jsx("div",{className:_("table-header-cell","action-menu-cell")})]}),r.jsx("div",{ref:to,className:_("table-body",{"scrollable-body":g,"horizontally-scrollable":w,resizable:y},c),children:e.map((d,C)=>r.jsxs("div",{"data-row-index":C,className:_("table-row",qs(d),s,{selectable:l}),onMouseEnter:()=>Ga(C),onMouseLeave:Ka,children:[l&&r.jsx("div",{className:_("table-cell","checkbox-cell"),"data-base-left":R?he:0,children:(Zt||Va===C)&&r.jsx(on,{value:p.includes(d.id),onChange:()=>ao(d.id),className:_("checkbox-cell")})}),r.jsx("div",{className:_("row-content-wrapper"),children:r.jsxs("div",{className:_("table-row-content"),style:{gridTemplateColumns:mo},children:[R&&r.jsx("div",{className:_("table-cell","expand-cell","left-border-accent"),"data-base-left":"0","data-row-id":d.id,children:r.jsx("button",{onClick:()=>Ja(d.id),"aria-label":b.includes(d.id)?"Collapse row":"Expand row","aria-expanded":b.includes(d.id),children:r.jsx("span",{className:_("expand-icon",{expanded:b.includes(d.id)}),children:r.jsx(an,{})})})}),ne.map((x,E)=>{const M=qt(d.id,x.key),P=le(x);return r.jsx("div",{"data-column-key":x.key,"data-pinned-index":E,ref:P?It(x.key):void 0,className:_("table-cell","pinned-column",{"primary-cell":P,"expanded-cell":M}),style:Xe(x,!0,E,ne,ge,R,l),children:d[x.key].component||d[x.key].content||d[x.key]},x.key)}),Fe.map(x=>{const E=qt(d.id,x.key),M=le(x);return r.jsx("div",{ref:M?It(x.key):void 0,className:_("table-cell",{"primary-cell":M,"expanded-cell":E}),style:Xe(x,!1,void 0,ne,ge,R,l),children:d[x.key].component||d[x.key].content||d[x.key]},x.key)}),a&&r.jsx("div",{className:_("table-cell","action-menu-cell"),children:a(d.metaData)})]})})]},d.id))}),w&&r.jsxs(r.Fragment,{children:[r.jsx(mn,{portalContainer:pt,visible:gt.visible,position:gt.position,size:gt.size,direction:"right",className:We,dataTestId:"right-gradient"}),r.jsx(mn,{portalContainer:pt,visible:wt.visible,position:wt.position,size:wt.size,direction:"left",className:Le,dataTestId:"pinned-gradient"})]})]})};O.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"RowData"}],raw:"RowData[]"},description:""},primaryColumn:{required:!0,tsType:{name:"union",raw:"Column | Column[]",elements:[{name:"Column"},{name:"Array",elements:[{name:"Column"}],raw:"Column[]"}]},description:""},fixedColumns:{required:!0,tsType:{name:"Array",elements:[{name:"FixedColumn"}],raw:"FixedColumn[]"},description:""},renderRowActions:{required:!1,tsType:{name:"signature",type:"function",raw:"(metaData?: MetaData) => ReactNode",signature:{arguments:[{type:{name:"MetaData"},name:"metaData"}],return:{name:"ReactNode"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},headerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},bodyClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rowClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortingDirection:{required:!1,tsType:{name:"union",raw:"typeof ASC | typeof DESC | Uppercase<typeof ASC | typeof DESC>",elements:[{name:"ASC"},{name:"DESC"},{name:"Uppercase",elements:[{name:"union",raw:"typeof ASC | typeof DESC",elements:[{name:"ASC"},{name:"DESC"}]}],raw:"Uppercase<typeof ASC | typeof DESC>"}]},description:"",defaultValue:{value:"'asc'",computed:!1}},sortingColumn:{required:!1,tsType:{name:"Column"},description:""},sortableColumns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isHeaderFixed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontallyScrollable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pinnedColumnKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},isRowsExpandable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},isSelectAllCheckboxAlwaysVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},setExpandedRowIds:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Set",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Set<string | number>"}],raw:"SetStateAction<Set<string | number>>"}],raw:"Dispatch<SetStateAction<Set<string | number>>>"},description:""},isAllExpandedByDefault:{required:!1,tsType:{name:"boolean"},description:""},expandAllTooltip:{required:!1,tsType:{name:"ReactNode"},description:""},isResizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},minColumnWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},maxColumnWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"500",computed:!1}},onChangeSorting:{required:!1,tsType:{name:"signature",type:"function",raw:"(sortConfig?: SortConfig) => void",signature:{arguments:[{type:{name:"SortConfig"},name:"sortConfig"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onColumnResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnKey: string, width: number) => void",signature:{arguments:[{type:{name:"string"},name:"columnKey"},{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},externalScrollContainerRef:{required:!1,tsType:{name:"union",raw:"RefObject<HTMLElement> | RefObject<Element> | null | undefined",elements:[{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},{name:"RefObject",elements:[{name:"Element"}],raw:"RefObject<Element>"},{name:"null"},{name:"undefined"}]},description:""},portalContainer:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:"",defaultValue:{value:"typeof document !== 'undefined' ? document.body : null",computed:!1}},rightGradientClassName:{required:!1,tsType:{name:"string"},description:""},pinnedGradientClassName:{required:!1,tsType:{name:"string"},description:""}}};const Tr={title:"Tables & Lists/Table",component:O,parameters:{layout:"centered",docs:{description:{component:"\nA flexible table component with support for:\n- **Row sizes**: Configure via `rowConfigs: { size: 'small' | 'medium' | 'large' }` in row data\n- **Expandable rows**: Enable with `isRowsExpandable` prop\n- **Pinned columns**: Use `pinnedColumnKeys` to pin columns to the left\n- **Sorting**: Configure with `sortableColumns`, `sortingColumn`, `sortingDirection`\n- **Selection**: Enable with `selectable` prop\n- **Custom cell content**: Use `DetailedCellData` with `content` and `component` properties\n        "}}},tags:["autodocs"],argTypes:{data:{description:"Array of row data. Each row should have an `id` and can include `rowConfigs` for size configuration.",table:{type:{summary:"RowData[]"}}},primaryColumn:{description:"The main column configuration (typically the name/title column).",table:{type:{summary:"Column | Column[]"}}},fixedColumns:{description:"Array of fixed-width columns with optional alignment.",table:{type:{summary:"FixedColumn[]"}}},selectable:{description:"Enable row selection with checkboxes.",control:"boolean",table:{defaultValue:{summary:"false"}}},isRowsExpandable:{description:"Enable expand/collapse functionality for rows with long content.",control:"boolean",table:{defaultValue:{summary:"false"}}},expandedRowIds:{description:"Array of row IDs that are currently expanded.",table:{type:{summary:"(string | number)[]"}}},isAllExpandedByDefault:{description:"Whether all rows should be expanded by default.",control:"boolean",table:{defaultValue:{summary:"false"}}},expandAllTooltip:{description:"Tooltip text for the expand all button.",table:{type:{summary:"ReactNode"}}},pinnedColumnKeys:{description:"Array of column keys to pin to the left side of the table.",table:{type:{summary:"string[]"}}},sortableColumns:{description:"Array of column keys that can be sorted.",table:{type:{summary:"string[]"}}},sortingColumn:{description:"Currently sorted column.",table:{type:{summary:"Column"}}},sortingDirection:{description:"Current sorting direction.",control:"select",options:["ASC","DESC"],table:{type:{summary:"'ASC' | 'DESC'"}}},isHeaderFixed:{description:"Keep the header fixed when scrolling vertically.",control:"boolean",table:{defaultValue:{summary:"false"}}},isHorizontallyScrollable:{description:"Enable horizontal scrolling for wide tables.",control:"boolean",table:{defaultValue:{summary:"false"}}},className:{description:"Custom CSS class for the table container.",table:{type:{summary:"string"}}},headerClassName:{description:"Custom CSS class for the table header. Use this to customize header background, borders, etc.",table:{type:{summary:"string"}}},bodyClassName:{description:"Custom CSS class for the table body. Use this to customize row gap, padding, etc.",table:{type:{summary:"string"}}},rowClassName:{description:"Custom CSS class for table rows.",table:{type:{summary:"string"}}},onToggleRowExpansion:{description:"Callback when a row is expanded/collapsed.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsExpansion:{description:"Callback when all rows are expanded/collapsed.",table:{type:{summary:"() => void"}}},onToggleRowSelection:{description:"Callback when a row is selected/deselected.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsSelection:{description:"Callback when all rows are selected/deselected.",table:{type:{summary:"() => void"}}},onChangeSorting:{description:"Callback when sorting changes.",table:{type:{summary:"(sortConfig?: SortConfig) => void"}}},renderRowActions:{description:"Function to render action menu for each row.",table:{type:{summary:"(metaData?: MetaData) => ReactNode"}}}},args:{selectable:!0}},Q=()=>r.jsx(vo,{placement:"bottom-end",content:r.jsxs("div",{children:[r.jsx("p",{children:"Edit"}),r.jsx("p",{children:"Rename"})]}),children:r.jsx(Co,{})}),me=[{id:1,name:{content:"Sam",component:r.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],B=[{key:"name",header:"Name"}],Pe=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],Ve={render:e=>{const[t,n]=m.useState({key:B[0].key,direction:te}),[a,o]=m.useState(B[0]),[s,i]=m.useState(te),c=fe(me,t),[l,p]=m.useState(c),[h,f]=m.useState(new Set([]));return m.useEffect(()=>{const{key:u,direction:g}=t,w=[...Pe,...B].find(S=>S.key===u);i(g),o(w)},[t]),r.jsx("div",{style:{minWidth:"700px"},children:r.jsx(O,{...e,primaryColumn:B,data:l,sortableColumns:[B[0].key],onChangeSorting:(u=t)=>{let{direction:g}=u;const{key:w}=u;g=Lt(g);const S=fe(l,{key:w,direction:g});n({key:w,direction:g}),p(S)},onToggleRowSelection:u=>{const g=new Set(h);g.has(u)?g.delete(u):g.add(u),f(g)},onToggleAllRowsSelection:()=>{if(h.size===me.length)f(new Set);else{const u=new Set(me.map(g=>g.id));f(u)}},selectedRowIds:[...h],sortingColumn:a,sortingDirection:s})})},args:{fixedColumns:Pe,renderRowActions:Q,selectable:!0}},de=[{id:1,name:"John Doe",email:"john.doe@example.com",phone:"+1-555-123-4567",address:"123 Main Street, New York, NY 10001",department:"Engineering",role:"Senior Software Engineer",salary:"$120,000",startDate:"2020-01-15",status:"Active",manager:"Jane Smith",projects:"Project Alpha, Project Beta",rowConfigs:{size:"small"}},{id:2,name:"Jane Smith",email:"jane.smith@example.com",phone:"+1-555-987-6543",address:"456 Oak Avenue, Los Angeles, CA 90210",department:"Marketing",role:"Marketing Director",salary:"$95,000",startDate:"2019-03-20",status:"Active",manager:"Robert Johnson",projects:"Campaign X, Campaign Y",rowConfigs:{size:"small"}},{id:3,name:"Mike Wilson",email:"mike.wilson@example.com",phone:"+1-555-456-7890",address:"789 Pine Road, Chicago, IL 60601",department:"Sales",role:"Sales Representative",salary:"$75,000",startDate:"2021-06-10",status:"Active",manager:"Sarah Davis",projects:"Client Onboarding, Lead Generation",rowConfigs:{size:"small"}},{id:4,name:"Sarah Davis",email:"sarah.davis@example.com",phone:"+1-555-234-5678",address:"321 Elm Street, Houston, TX 77001",department:"HR",role:"HR Manager",salary:"$85,000",startDate:"2018-09-12",status:"Active",manager:"Michael Brown",projects:"Employee Onboarding, Policy Updates",rowConfigs:{size:"small"}},{id:5,name:"Robert Johnson",email:"robert.johnson@example.com",phone:"+1-555-345-6789",address:"654 Maple Drive, Phoenix, AZ 85001",department:"Finance",role:"Financial Analyst",salary:"$78,000",startDate:"2020-11-08",status:"Active",manager:"Emily White",projects:"Budget Planning, Cost Analysis",rowConfigs:{size:"small"}},{id:6,name:"Emily White",email:"emily.white@example.com",phone:"+1-555-456-7891",address:"987 Cedar Lane, Philadelphia, PA 19101",department:"Operations",role:"Operations Manager",salary:"$110,000",startDate:"2017-05-22",status:"Active",manager:"David Green",projects:"Process Optimization, Quality Control",rowConfigs:{size:"small"}},{id:7,name:"David Green",email:"david.green@example.com",phone:"+1-555-567-8901",address:"147 Birch Avenue, San Antonio, TX 78201",department:"Engineering",role:"Lead Developer",salary:"$135,000",startDate:"2016-02-14",status:"Active",manager:"Lisa Thompson",projects:"Architecture Review, Team Mentoring",rowConfigs:{size:"small"}},{id:8,name:"Lisa Thompson",email:"lisa.thompson@example.com",phone:"+1-555-678-9012",address:"258 Spruce Court, San Diego, CA 92101",department:"Product",role:"Product Manager",salary:"$105,000",startDate:"2019-08-30",status:"Active",manager:"Tom Anderson",projects:"Feature Planning, User Research",rowConfigs:{size:"small"}},{id:9,name:"Tom Anderson",email:"tom.anderson@example.com",phone:"+1-555-789-0123",address:"369 Willow Street, Dallas, TX 75201",department:"Design",role:"UX Designer",salary:"$88,000",startDate:"2021-01-18",status:"Active",manager:"Anna Martinez",projects:"UI Redesign, User Testing",rowConfigs:{size:"small"}},{id:10,name:"Anna Martinez",email:"anna.martinez@example.com",phone:"+1-555-890-1234",address:"741 Poplar Boulevard, San Jose, CA 95101",department:"QA",role:"QA Engineer",salary:"$82,000",startDate:"2020-07-25",status:"Active",manager:"John Doe",projects:"Automation Testing, Bug Tracking",rowConfigs:{size:"small"}}],re=[{key:"name",header:"Full Name"}],je=[{key:"email",header:"Email Address",width:200},{key:"phone",header:"Phone Number",width:150},{key:"address",header:"Address",width:250},{key:"department",header:"Department",width:120},{key:"role",header:"Job Role",width:180},{key:"salary",header:"Salary",width:100},{key:"startDate",header:"Start Date",width:120},{key:"status",header:"Status",width:100},{key:"manager",header:"Manager",width:150},{key:"projects",header:"Current Projects",width:200}],ar=e=>{const t=["John","Jane","Mike","Sarah","David","Emma","Chris","Lisa","Tom","Anna"],n=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose"],a=["Engineering","Marketing","Sales","HR","Finance","Operations","Design","Product","Legal","Support"];return Array.from({length:e},(o,s)=>({id:s+1,name:`${t[s%t.length]} ${s+1}`,age:22+s%40,city:n[s%n.length],department:a[s%a.length],email:`user${s+1}@example.com`,salary:`$${(5e4+s*1e3%1e5).toLocaleString()}`}))},_e=ar(50),at=[{key:"age",header:"Age",width:80,align:"right"},{key:"city",header:"City",width:120},{key:"department",header:"Department",width:120},{key:"email",header:"Email",width:200},{key:"salary",header:"Salary",width:100,align:"right"}],Ge={render:e=>{const[t,n]=m.useState({key:B[0].key,direction:te}),[a,o]=m.useState(B[0]),[s,i]=m.useState(te),c=fe(_e,t),[l,p]=m.useState(c),[h,f]=m.useState(new Set([]));return m.useEffect(()=>{const{key:u,direction:g}=t,w=[...at,...B].find(S=>S.key===u);i(g),o(w)},[t]),r.jsxs("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Fixed Header Table with Scrollable Body"}),r.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",overflow:"auto"},children:r.jsx(O,{...e,data:l,primaryColumn:B,fixedColumns:at,isHeaderFixed:!0,sortableColumns:[B[0].key,"age","department"],onChangeSorting:(u=t)=>{let{direction:g}=u;const{key:w}=u;g=Lt(g);const S=fe(l,{key:w,direction:g});n({key:w,direction:g}),p(S)},onToggleRowSelection:u=>{const g=new Set(h);g.has(u)?g.delete(u):g.add(u),f(g)},onToggleAllRowsSelection:()=>{if(h.size===_e.length)f(new Set);else{const u=new Set(_e.map(g=>g.id));f(u)}},selectedRowIds:[...h],sortingColumn:a,sortingDirection:s})})]})},args:{selectable:!0,renderRowActions:Q}},Ke={render:e=>r.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Fixed Header + Horizontal Scroll: Both scrollbars visible when needed"}),r.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",position:"relative"},children:r.jsx(O,{...e,data:de,primaryColumn:re,fixedColumns:je,isHorizontallyScrollable:!0,isHeaderFixed:!0})})]}),args:{selectable:!1,renderRowActions:Q}},Je={render:e=>{const[t,n]=m.useState(new Set([]));return r.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Pinned Columns + Fixed Header: Name and Email pinned with vertical and horizontal scrolling"}),r.jsx("div",{className:"storybook-table-wrapper",style:{width:"550px",height:"calc(100% - 50px)",position:"relative"},children:r.jsx(O,{...e,data:de,primaryColumn:re,fixedColumns:je,isHorizontallyScrollable:!0,isHeaderFixed:!0,pinnedColumnKeys:["name","email","department"],onToggleRowSelection:a=>{const o=new Set(t);o.has(a)?o.delete(a):o.add(a),n(o)},onToggleAllRowsSelection:()=>{if(t.size===de.length)n(new Set);else{const a=new Set(de.map(o=>o.id));n(a)}},selectedRowIds:[...t]})})]})},args:{selectable:!0,renderRowActions:Q}},Qe={render:e=>{const[t,n]=m.useState(new Set([1])),[a,o]=m.useState(new Set([])),s=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"sam.johnson@example.com"},{id:2,name:"Anna Smith",age:32,city:"San Francisco",department:"Design",email:"anna.smith@example.com"},{id:3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",email:"mike.davis@example.com"},{id:4,name:"Sarah Wilson",age:35,city:"Chicago",department:"Sales",email:"sarah.wilson@example.com"}],i=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:100},{key:"city",header:"City",width:100}],c=[{key:"name",header:"Name"}];return r.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows Example"}),r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Click the expand/collapse icons to view detailed information for each row. Rows can be expanded and collapsed independently."}),r.jsx(O,{...e,data:s,primaryColumn:c,fixedColumns:i,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...t],setExpandedRowIds:n,onToggleRowExpansion:l=>{const p=new Set(t);p.has(l)?p.delete(l):p.add(l),n(p)},onToggleAllRowsExpansion:()=>{if(t.size===s.length)n(new Set);else{const l=new Set(s.map(p=>p.id));n(l)}},selectedRowIds:[...a],onToggleRowSelection:l=>{const p=new Set(a);p.has(l)?p.delete(l):p.add(l),o(p)},onToggleAllRowsSelection:()=>{if(a.size===s.length)o(new Set);else{const l=new Set(s.map(p=>p.id));o(l)}}})]})},args:{selectable:!0}},Ze={render:e=>{const[t,n]=m.useState(new Set([1,2,3,4])),[a,o]=m.useState(!0),[s,i]=m.useState(new Set([])),c=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"anna.smith@example.com"},{id:2,name:"Mike Davis",age:32,city:"San Francisco",department:"Design",email:"mike.davis@example.com"},{id:3,name:"Sarah Wilson",age:28,city:"Los Angeles",department:"Marketing",email:"sarah.wilson@example.com"},{id:4,name:"John Brown",age:35,city:"Chicago",department:"Sales",email:"john.brown@example.com"}],l=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],p=[{key:"name",header:"Name"}],h=a?"Expanded by default":"Collapsed by default";return r.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows with Default State"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Demonstrates ",r.jsx("strong",{children:"isAllExpandedByDefault"})," and ",r.jsx("strong",{children:"expandAllTooltip"})," ","props. The expandAll icon shows the default state regardless of individual row states. Hover over the expandAll icon to see the tooltip."]}),r.jsx(O,{...e,data:c,primaryColumn:p,fixedColumns:l,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...t],isAllExpandedByDefault:a,expandAllTooltip:h,onToggleRowExpansion:f=>{const u=new Set(t);u.has(f)?u.delete(f):u.add(f),n(u)},onToggleAllRowsExpansion:()=>{const f=!a;o(f),n(f?new Set(c.map(u=>u.id)):new Set)},selectedRowIds:[...s],onToggleRowSelection:f=>{const u=new Set(s);u.has(f)?u.delete(f):u.add(f),i(u)},onToggleAllRowsSelection:()=>{if(s.size===c.length)i(new Set);else{const f=new Set(c.map(u=>u.id));i(f)}}})]})},args:{selectable:!0}},Rt=[{id:1,name:"John Alexander Maximilian Winchester-Blackwood III",description:"This is long text but anyway no matter ellipsed or opened it should not overcome his width it can be brake. When you click on this cell, it will expand to show the full content without ellipsis truncation, and the text should wrap properly within the cell boundaries without breaking the table layout.",shortText:"Brief note",longTitle:"Senior Vice President of Engineering and Technology Development for Enterprise Solutions and Digital Transformation Initiatives",email:"john.alexander.maximilian.winchester.blackwood.third@very-long-company-name-example.com",notes:"This is a comprehensive test of how the table handles extremely long content that would normally break layouts. The content should be properly contained within cell boundaries."},{id:2,name:"Maria Elena Rodriguez-Martinez",description:"Another extremely lengthy description that showcases the cell expansion capabilities. This description contains detailed information about the person, their role, responsibilities, and achievements. The purpose is to demonstrate how users can easily expand cells to read full content when the default view shows only a truncated version with ellipsis.",shortText:"Quick summary here",longTitle:"Chief Marketing Officer and Head of Brand Strategy for Global Markets and Customer Experience Enhancement",email:"maria.elena.rodriguez.martinez@another-extremely-long-domain-name.example.org",notes:"Testing various content lengths and how they behave in both collapsed and expanded states. The text should wrap appropriately without overflowing."},{id:3,name:"Robert James Thompson",description:"A comprehensive description that tests the expand functionality with moderate length content. This shows how the feature works with different content lengths and provides a good example of real-world usage.",shortText:"Standard",longTitle:"Director of Operations",email:"robert.thompson@company.com",notes:"Short note about this person and their current projects."},{id:4,name:"Dr. Elizabeth Catherine Pemberton-Williams, PhD, MBA, CISSP",description:"This cell contains an exceptionally detailed description that really pushes the limits of what might be considered reasonable content length. It includes professional background, educational achievements, current responsibilities, ongoing projects, future goals, and various other details that would typically require a much larger display area.",shortText:"Complex background",longTitle:"Chief Technology Officer and Principal Software Architect for Distributed Systems and Cloud Infrastructure with specialization in Cybersecurity and Data Analytics",email:"dr.elizabeth.catherine.pemberton.williams.phd.mba.cissp@enterprise-solutions-technology-consulting.example.net",notes:"Comprehensive notes about professional achievements, certifications, ongoing projects, and future development plans. This tests the maximum reasonable content length."}],or=[{key:"description",header:"Description",width:200},{key:"longTitle",header:"Job Title",width:120},{key:"email",header:"Email Address",width:100},{key:"shortText",header:"Type",width:100},{key:"notes",header:"Notes",width:100}],et={render:e=>{const[t,n]=m.useState(new Set);return r.jsxs("div",{style:{width:"1000px",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Row Content Expansion - Long Text Handling"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666",lineHeight:1.5},children:[r.jsx("strong",{children:"Click the expand icon"})," at the beginning of each row to expand/collapse ALL cells in that row. This example tests:",r.jsx("br",{}),"• Very long email addresses that should be ellipsed when collapsed",r.jsx("br",{}),"• Long text content that should wrap without breaking cell width constraints",r.jsx("br",{}),"• Proper word breaking for extremely long content",r.jsx("br",{}),"• Layout stability when transitioning between collapsed and expanded states"]}),r.jsx("div",{style:{border:"1px solid #e1e5e9",borderRadius:"8px",overflow:"hidden"},children:r.jsx(O,{...e,data:Rt,primaryColumn:[{key:"name",header:"Full Name"}],fixedColumns:or,selectable:!1,isRowsExpandable:!0,expandedRowIds:[...t],onToggleRowExpansion:a=>{const o=new Set(t);o.has(a)?o.delete(a):o.add(a),n(o)},onToggleAllRowsExpansion:()=>{if(t.size===Rt.length)n(new Set);else{const a=new Set(Rt.map(o=>o.id));n(a)}}})}),r.jsx("p",{style:{margin:"16px 0 0 0",fontSize:"12px",color:"#888",fontStyle:"italic"},children:"Test the table with your browser's developer tools at different widths to verify responsive behavior."})]})},args:{renderRowActions:void 0}},Se={render:e=>{const[t,n]=m.useState(new Set([1])),[a,o]=m.useState(new Set([5])),[s,i]=m.useState(new Set([9])),c=(w,S)=>[{id:w+1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",rowConfigs:S?{size:S}:void 0},{id:w+2,name:"John Doe with a very long name that should wrap when expanded and demonstrate how the row height increases to accommodate multiple lines of text content",age:32,city:"San Francisco Bay Area, California, United States of America",department:"Design and User Experience Research Department",rowConfigs:S?{size:S}:void 0},{id:w+3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",rowConfigs:S?{size:S}:void 0},{id:w+4,name:"Sarah Elizabeth Wilson-Montgomery III with an exceptionally long hyphenated surname that demonstrates text wrapping behavior in expanded table rows when the content exceeds the available column width",age:35,city:"Chicago Metropolitan Area",department:"Sales and Business Development International Operations",rowConfigs:S?{size:S}:void 0}],l=c(0,"small"),p=c(4),h=c(8,"large"),f=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],u=[{key:"name",header:"Name"}],g=(w,S,R,b,v)=>r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{margin:"0 0 4px 0",fontSize:"14px",color:"#333"},children:w}),r.jsx("p",{style:{margin:"0 0 12px 0",fontSize:"12px",color:"#666"},children:S}),r.jsx(O,{...e,data:R,primaryColumn:u,fixedColumns:f,isRowsExpandable:!0,expandedRowIds:[...b],onToggleRowExpansion:k=>{const y=new Set(b);y.has(k)?y.delete(k):y.add(k),v(y)},onToggleAllRowsExpansion:()=>{if(b.size===R.length)v(new Set);else{const k=new Set(R.map(y=>y.id));v(k)}}})]});return r.jsxs("div",{style:{minWidth:"800px",maxWidth:"1000px"},children:[r.jsx("h3",{style:{margin:"0 0 24px 0",fontSize:"18px",color:"#333"},children:"Row Sizes with Expand - Testing Jump Fix"}),r.jsx("p",{style:{margin:"0 0 24px 0",fontSize:"14px",color:"#666"},children:"Test expand/collapse on each table size. The row height should NOT change when expanding/collapsing (unless content requires more space)."}),g("Small Rows (44px)",'rowConfigs: { size: "small" }',l,t,n),g("Default Rows (64px)","No rowConfigs specified",p,a,o),g("Large Rows (80px)",'rowConfigs: { size: "large" }',h,s,i)]})}},ve={render:()=>{const e=[{key:"name",header:"Name"}],t=[{key:"status",header:"Status",width:100},{key:"description",header:"Description",width:250}],n=[{id:1,name:"Small Row 1",description:"Compact row for dense tables",status:"Active",rowConfigs:{size:"small"}},{id:2,name:"Small Row 2",description:"Height: 44px",status:"Active",rowConfigs:{size:"small"}}],a=[{id:1,name:"Default Row 1",description:"Standard row size",status:"Active"},{id:2,name:"Default Row 2",description:"Height: 64px (no rowConfigs needed)",status:"Active"}],o=[{id:1,name:"Large Row 1",description:"Prominent row for emphasis",status:"Active",rowConfigs:{size:"large"}},{id:2,name:"Large Row 2",description:"Height: 80px",status:"Active",rowConfigs:{size:"large"}}];return r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Small (44px)"}),r.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "small" }']}),r.jsx(O,{data:n,primaryColumn:e[0],fixedColumns:t,selectable:!1})]}),r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Default (64px)"}),r.jsx("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:"No rowConfigs needed"}),r.jsx(O,{data:a,primaryColumn:e[0],fixedColumns:t,selectable:!1})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Large (80px)"}),r.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "large" }']}),r.jsx(O,{data:o,primaryColumn:e[0],fixedColumns:t,selectable:!1})]})]})}},sr=[{key:"name",header:"Name"}],rr=[{key:"status",header:"Status",width:100},{key:"category",header:"Category",width:120}],kt=[{id:1,name:"Test execution with a very long name that demonstrates how text behaves in expanded rows with custom header styling",status:"Passed",category:"Smoke",rowConfigs:{size:"small"}},{id:2,name:"Another test case",status:"Failed",category:"Regression",rowConfigs:{size:"small"}},{id:3,name:"Quick sanity check",status:"Skipped",category:"Sanity",rowConfigs:{size:"small"}}],ir=()=>{const[e,t]=m.useState(new Set);return r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"18px",color:"#333"},children:"Custom Header Background Color"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Use the ",r.jsx("code",{children:"headerClassName"})," prop with your own CSS class to customize the header. Pinned columns and expand button inherit the background color automatically."]}),r.jsx("style",{children:`
          .custom-gray-header {
            background-color: var(--rp-ui-base-bg-200) !important;
            border-top: 1px solid var(--rp-ui-base-e-200);
            border-bottom: none;
          }
        `}),r.jsx("div",{style:{border:"1px solid var(--rp-ui-base-e-200)",borderRadius:"4px",overflow:"hidden"},children:r.jsx(O,{data:kt,primaryColumn:sr[0],fixedColumns:rr,pinnedColumnKeys:["status"],isRowsExpandable:!0,expandedRowIds:Array.from(e),selectable:!1,headerClassName:"custom-gray-header",onToggleRowExpansion:n=>{const a=new Set(e);a.has(n)?a.delete(n):a.add(n),t(a)},onToggleAllRowsExpansion:()=>{e.size===kt.length?t(new Set):t(new Set(kt.map(n=>n.id)))}})}),r.jsxs("div",{style:{marginTop:"24px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#333"},children:"How to use:"}),r.jsx("pre",{style:{backgroundColor:"#f5f5f5",padding:"12px",borderRadius:"4px",fontSize:"12px",overflow:"auto"},children:`// In your SCSS file:
.custom-header {
  background-color: var(--rp-ui-base-bg-200);
  border-top: 1px solid var(--rp-ui-base-e-200);
  border-bottom: none;
}

// In your component:
<Table
  headerClassName="custom-header"
  // ... other props
/>`})]})]})},Ce={render:()=>r.jsx(ir,{})},Re={render:e=>r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Resizable Columns (Default Constraints)"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Drag the column borders in the header to adjust widths. Default constraints:"," ",r.jsx("code",{children:"minColumnWidth=50"}),", ",r.jsx("code",{children:"maxColumnWidth=500"})]}),r.jsx(O,{...e,primaryColumn:B,data:me,fixedColumns:Pe})]}),args:{renderRowActions:Q,isResizable:!0}},ke={render:e=>r.jsx("div",{style:{minWidth:"600px"},children:r.jsx(O,{...e,primaryColumn:B,data:me,fixedColumns:Pe})}),args:{isResizable:!0}},De={render:e=>r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Resizable Columns (Custom Constraints)"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Columns can be resized between 80px and 300px. Custom constraints:"," ",r.jsx("code",{children:"minColumnWidth=80"}),", ",r.jsx("code",{children:"maxColumnWidth=300"})]}),r.jsx(O,{...e,primaryColumn:B,data:me,fixedColumns:Pe})]}),args:{renderRowActions:Q,isResizable:!0,minColumnWidth:80,maxColumnWidth:300}},Te={render:e=>r.jsx("div",{style:{width:"900px",height:"400px",border:"1px solid #ccc",padding:"16px"},children:r.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:r.jsx(O,{...e,data:_e,primaryColumn:B,fixedColumns:at})})}),args:{renderRowActions:Q,isResizable:!0,isHeaderFixed:!0}},ze={render:e=>r.jsx("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:r.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:r.jsx(O,{...e,data:de,primaryColumn:re,fixedColumns:je,isHorizontallyScrollable:!0,isHeaderFixed:!0})})}),args:{renderRowActions:Q,isResizable:!0}},Ee={render:e=>r.jsx("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:r.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:r.jsx(O,{...e,data:_e,primaryColumn:B,fixedColumns:at,pinnedColumnKeys:["name","email"],isHorizontallyScrollable:!0,isHeaderFixed:!0})})}),args:{renderRowActions:Q,isResizable:!0}},Ae={render:e=>{const t=m.useRef(null),[n,a]=m.useState({key:re[0].key,direction:te}),[o,s]=m.useState(re[0]),[i,c]=m.useState(te),l=m.useMemo(()=>{const w=[...de];for(let S=0;S<3;S++)w.push(...de.map(R=>({...R,id:`${R.id}-copy-${S+1}`})));return w},[]),p=fe(l,n),[h,f]=m.useState(p),[u,g]=m.useState(new Set([]));return m.useEffect(()=>{const{key:w,direction:S}=n,R=[...je,...re].find(b=>b.key===w);c(S),s(R)},[n]),r.jsxs("div",{style:{width:"800px",height:"600px",border:"1px solid #ccc",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Table with Horizontal Scroll + Pinned Header (External Scroll Container)"}),r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"This example demonstrates a pinned header that activates when scrolling in an external container. The table header pins to the top when the scroll position reaches it. Scroll vertically in the container to see the header pinning, and horizontally to see pinned columns and gradient effects."}),r.jsxs("div",{ref:t,style:{height:"calc(100% - 100px)",overflowY:"auto",overflowX:"hidden",position:"relative"},children:[r.jsxs("div",{style:{padding:"16px",backgroundColor:"#f0f0f0",marginBottom:"16px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"16px"},children:"Content Above Table"}),r.jsx("p",{style:{margin:"0",fontSize:"14px",color:"#666"},children:"This content is inside the scrollable container. When you scroll down, this text will move up and disappear, but the table header will stick to the top."}),r.jsx("p",{style:{margin:"8px 0 0",fontSize:"14px",color:"#666"},children:"Scroll down to see the header pinning effect. The table header will remain fixed at the top while this content scrolls away."})]}),r.jsx(O,{...e,data:h,primaryColumn:re,fixedColumns:je,isHeaderFixed:!0,isHorizontallyScrollable:!0,pinnedColumnKeys:["name","email"],externalScrollContainerRef:t,sortableColumns:[re[0].key,"department","status"],onChangeSorting:(w=n)=>{let{direction:S}=w;const{key:R}=w;S=Lt(S);const b=fe(h,{key:R,direction:S});a({key:R,direction:S}),f(b)},onToggleRowSelection:w=>{const S=new Set(u);S.has(w)?S.delete(w):S.add(w),g(S)},onToggleAllRowsSelection:()=>{if(u.size===l.length)g(new Set);else{const w=new Set(l.map(S=>S.id));g(w)}},selectedRowIds:[...u],sortingColumn:o,sortingDirection:i})]})]})},args:{selectable:!0,renderRowActions:Q}};var fn,gn,wn;Ve.parameters={...Ve.parameters,docs:{...(fn=Ve.parameters)==null?void 0:fn.docs,source:{originalSource:`{
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
}`,...(wn=(gn=Ve.parameters)==null?void 0:gn.docs)==null?void 0:wn.source}}};var yn,xn,bn;Ge.parameters={...Ge.parameters,docs:{...(yn=Ge.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(bn=(xn=Ge.parameters)==null?void 0:xn.docs)==null?void 0:bn.source}}};var Sn,vn,Cn;Ke.parameters={...Ke.parameters,docs:{...(Sn=Ke.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(Cn=(vn=Ke.parameters)==null?void 0:vn.docs)==null?void 0:Cn.source}}};var Rn,kn,Dn;Je.parameters={...Je.parameters,docs:{...(Rn=Je.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
}`,...(Dn=(kn=Je.parameters)==null?void 0:kn.docs)==null?void 0:Dn.source}}};var Tn,zn,En;Qe.parameters={...Qe.parameters,docs:{...(Tn=Qe.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
}`,...(En=(zn=Qe.parameters)==null?void 0:zn.docs)==null?void 0:En.source}}};var An,_n,Pn;Ze.parameters={...Ze.parameters,docs:{...(An=Ze.parameters)==null?void 0:An.docs,source:{originalSource:`{
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
}`,...(Pn=(_n=Ze.parameters)==null?void 0:_n.docs)==null?void 0:Pn.source}}};var jn,On,Nn;et.parameters={...et.parameters,docs:{...(jn=et.parameters)==null?void 0:jn.docs,source:{originalSource:`{
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
}`,...(Nn=(On=et.parameters)==null?void 0:On.docs)==null?void 0:Nn.source}}};var Mn,Hn,Wn,Ln,$n;Se.parameters={...Se.parameters,docs:{...(Mn=Se.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
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
}`,...(Wn=(Hn=Se.parameters)==null?void 0:Hn.docs)==null?void 0:Wn.source},description:{story:`Demonstrates all row sizes (small: 44px, default: 64px, large: 80px) with expandable content.
Useful for testing that row heights behave correctly when expanding/collapsing cells with long text.`,...($n=(Ln=Se.parameters)==null?void 0:Ln.docs)==null?void 0:$n.description}}};var Fn,Bn,In,qn,Un;ve.parameters={...ve.parameters,docs:{...(Fn=ve.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
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
}`,...(In=(Bn=ve.parameters)==null?void 0:Bn.docs)==null?void 0:In.source},description:{story:`Simple demonstration of row sizes without expand functionality.

Row sizes are configured via \`rowConfigs: { size: 'small' | 'medium' | 'large' }\` in each row data object.

Available sizes:
- **small**: 44px height - best for dense data tables
- **medium** (default): 64px height - standard table row
- **large**: 80px height - for tables with more visual prominence`,...(Un=(qn=ve.parameters)==null?void 0:qn.docs)==null?void 0:Un.description}}};var Yn,Xn,Vn,Gn,Kn;Ce.parameters={...Ce.parameters,docs:{...(Yn=Ce.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
  render: () => <CustomHeaderDemo />
}`,...(Vn=(Xn=Ce.parameters)==null?void 0:Xn.docs)==null?void 0:Vn.source},description:{story:`Demonstrates how to customize the table header background color using CSS.

The Table component supports custom header styling via the \`headerClassName\` prop.
Pinned columns and expand cells will inherit the header background color automatically.

This is useful when you need to match the table header with your application's design,
for example, using a gray header on a white background or vice versa.`,...(Kn=(Gn=Ce.parameters)==null?void 0:Gn.docs)==null?void 0:Kn.description}}};var Jn,Qn,Zn,ea,ta;Re.parameters={...Re.parameters,docs:{...(Jn=Re.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
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
}`,...(Zn=(Qn=Re.parameters)==null?void 0:Qn.docs)==null?void 0:Zn.source},description:{story:`Demonstrates resizable columns with default constraints (min: 50px, max: 500px).

Users can drag the column borders in the header to adjust column widths.
Initial widths are taken from column.width property.`,...(ta=(ea=Re.parameters)==null?void 0:ea.docs)==null?void 0:ta.description}}};var na,aa,oa,sa,ra;ke.parameters={...ke.parameters,docs:{...(na=ke.parameters)==null?void 0:na.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    minWidth: '600px'
  }}>
      <Table {...args} primaryColumn={primaryColumns} data={data} fixedColumns={fixedColumns} />
    </div>,
  args: {
    isResizable: true
  }
}`,...(oa=(aa=ke.parameters)==null?void 0:aa.docs)==null?void 0:oa.source},description:{story:"Demonstrates resizable columns without row actions.",...(ra=(sa=ke.parameters)==null?void 0:sa.docs)==null?void 0:ra.description}}};var ia,la,da,ca,pa;De.parameters={...De.parameters,docs:{...(ia=De.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(da=(la=De.parameters)==null?void 0:la.docs)==null?void 0:da.source},description:{story:`Demonstrates resizable columns with custom min/max constraints.

Columns can be resized between 80px and 300px.`,...(pa=(ca=De.parameters)==null?void 0:ca.docs)==null?void 0:pa.description}}};var ua,ma,ha,fa,ga;Te.parameters={...Te.parameters,docs:{...(ua=Te.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
}`,...(ha=(ma=Te.parameters)==null?void 0:ma.docs)==null?void 0:ha.source},description:{story:"Demonstrates resizable columns with fixed header.",...(ga=(fa=Te.parameters)==null?void 0:fa.docs)==null?void 0:ga.description}}};var wa,ya,xa,ba,Sa;ze.parameters={...ze.parameters,docs:{...(wa=ze.parameters)==null?void 0:wa.docs,source:{originalSource:`{
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
}`,...(xa=(ya=ze.parameters)==null?void 0:ya.docs)==null?void 0:xa.source},description:{story:"Demonstrates resizable columns with horizontal scroll and fixed header.",...(Sa=(ba=ze.parameters)==null?void 0:ba.docs)==null?void 0:Sa.description}}};var va,Ca,Ra,ka,Da;Ee.parameters={...Ee.parameters,docs:{...(va=Ee.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(Ra=(Ca=Ee.parameters)==null?void 0:Ca.docs)==null?void 0:Ra.source},description:{story:"Demonstrates resizable columns with pinned columns.",...(Da=(ka=Ee.parameters)==null?void 0:ka.docs)==null?void 0:Da.description}}};var Ta,za,Ea,Aa,_a;Ae.parameters={...Ae.parameters,docs:{...(Ta=Ae.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(Ea=(za=Ae.parameters)==null?void 0:za.docs)==null?void 0:Ea.source},description:{story:`Demonstrates a table with pinned header when scrolling is handled by an external container.

This example shows:
- Horizontal scrolling when table content is wider than the container
- Pinned header that pins to the top when scrolling vertically in the external container
- Pinned columns that stay visible during horizontal scroll
- Gradient effects on pinned columns and right edge

Note: This is different from a fixed header with internal table scrolling. Here, the scroll
container is external (parent div), and the header pins when scrolling reaches the table top.

Scroll vertically in the external container to see the header pinning, and horizontally to see
pinned columns and gradients.`,...(_a=(Aa=Ae.parameters)==null?void 0:Aa.docs)==null?void 0:_a.description}}};const zr=["Default","FixedHeader","HorizontalScrollWithFixedHeaderControl","PinnedColumnsWithFixedHeader","ExpandableRows","ExpandableRowsWithDefaultState","CellExpansion","RowSizesWithExpand","RowSizes","CustomHeaderStyle","ResizableColumns","ResizableColumnsWithoutActions","ResizableColumnsWithConstraints","ResizableColumnsWithFixedHeader","ResizableColumnsWithHorizontalScroll","ResizableColumnsWithPinnedColumns","HorizontalScrollWithPinnedHeader"];export{et as CellExpansion,Ce as CustomHeaderStyle,Ve as Default,Qe as ExpandableRows,Ze as ExpandableRowsWithDefaultState,Ge as FixedHeader,Ke as HorizontalScrollWithFixedHeaderControl,Ae as HorizontalScrollWithPinnedHeader,Je as PinnedColumnsWithFixedHeader,Re as ResizableColumns,De as ResizableColumnsWithConstraints,Te as ResizableColumnsWithFixedHeader,ze as ResizableColumnsWithHorizontalScroll,Ee as ResizableColumnsWithPinnedColumns,ke as ResizableColumnsWithoutActions,ve as RowSizes,Se as RowSizesWithExpand,zr as __namedExportsOrder,Tr as default};
