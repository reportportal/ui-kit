import{j as r}from"./jsx-runtime-2f188e98.js";import{b as Aa,r as w}from"./index-3553ef47.js";import{p as $e}from"./index-4c891f75.js";import{r as Xn}from"./index-d0bd1ed5.js";import{c as ja}from"./clsx-9eb2d624.js";import{c as Kn}from"./bind-d8141dee.js";import{b as Pa,a as Rt,S as Oa}from"./resizeColumn-b3ee80ba.js";import{S as Dt}from"./chevronDownDropdown-69a9d5c1.js";import{C as kt}from"./checkbox-9336290e.js";import{T as Na}from"./tooltip-ec7e1ee7.js";import{i as Ma}from"./isEmpty-6ac0b123.js";import{P as Wa}from"./popover-326b55b2.js";import{S as Ha}from"./meatballMenu-8b9878d9.js";import"./keyCodes-e5060420.js";import"./floating-ui.react-99bd99d2.js";import"./floatingUi-59569704.js";const Jn=e=>typeof e=="string";var rt={exports:{}},be={},Fe={exports:{}},Gn={};const $a=Aa(ja);var z={},q={};Object.defineProperty(q,"__esModule",{value:!0});q.dontSetMe=qa;q.findInArray=Fa;q.int=Ia;q.isFunction=La;q.isNum=Ba;function Fa(e,t){for(let n=0,a=e.length;n<a;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function La(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function Ba(e){return typeof e=="number"&&!isNaN(e)}function Ia(e){return parseInt(e,10)}function qa(e,t,n){if(e[t])return new Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`)}var te={};Object.defineProperty(te,"__esModule",{value:!0});te.browserPrefixToKey=Zn;te.browserPrefixToStyle=Ua;te.default=void 0;te.getPrefix=Qn;const Xe=["Moz","Webkit","O","ms"];function Qn(){var n,a;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const t=(a=(n=window.document)==null?void 0:n.documentElement)==null?void 0:a.style;if(!t||e in t)return"";for(let o=0;o<Xe.length;o++)if(Zn(e,Xe[o])in t)return Xe[o];return""}function Zn(e,t){return t?`${t}${Ya(e)}`:e}function Ua(e,t){return t?`-${t.toLowerCase()}-${e}`:e}function Ya(e){let t="",n=!0;for(let a=0;a<e.length;a++)n?(t+=e[a].toUpperCase(),n=!1):e[a]==="-"?n=!0:t+=e[a];return t}te.default=Qn();Object.defineProperty(z,"__esModule",{value:!0});z.addClassName=na;z.addEvent=Xa;z.addUserSelectStyles=so;z.createCSSTransform=to;z.createSVGTransform=no;z.getTouch=ao;z.getTouchIdentifier=oo;z.getTranslation=it;z.innerHeight=Qa;z.innerWidth=Za;z.matchesSelector=ta;z.matchesSelectorAndParentsTo=Va;z.offsetXYFromParent=eo;z.outerHeight=Ja;z.outerWidth=Ga;z.removeClassName=aa;z.removeEvent=Ka;z.scheduleRemoveUserSelectStyles=ro;var F=q,Tt=ea(te);function ea(e,t){if(typeof WeakMap=="function")var n=new WeakMap,a=new WeakMap;return(ea=function(o,s){if(!s&&o&&o.__esModule)return o;var i,d,l={__proto__:null,default:o};if(o===null||typeof o!="object"&&typeof o!="function")return l;if(i=s?a:n){if(i.has(o))return i.get(o);i.set(o,l)}for(const c in o)c!=="default"&&{}.hasOwnProperty.call(o,c)&&((d=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(o,c))&&(d.get||d.set)?i(l,c,d):l[c]=o[c]);return l})(e,t)}let ke="";function ta(e,t){return ke||(ke=(0,F.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,F.isFunction)(e[n])})),(0,F.isFunction)(e[ke])?e[ke](t):!1}function Va(e,t,n){let a=e;do{if(ta(a,t))return!0;if(a===n)return!1;a=a.parentNode}while(a);return!1}function Xa(e,t,n,a){if(!e)return;const o={capture:!0,...a};e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function Ka(e,t,n,a){if(!e)return;const o={capture:!0,...a};e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function Ja(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,F.int)(n.borderTopWidth),t+=(0,F.int)(n.borderBottomWidth),t}function Ga(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,F.int)(n.borderLeftWidth),t+=(0,F.int)(n.borderRightWidth),t}function Qa(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,F.int)(n.paddingTop),t-=(0,F.int)(n.paddingBottom),t}function Za(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,F.int)(n.paddingLeft),t-=(0,F.int)(n.paddingRight),t}function eo(e,t,n){const o=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),s=(e.clientX+t.scrollLeft-o.left)/n,i=(e.clientY+t.scrollTop-o.top)/n;return{x:s,y:i}}function to(e,t){const n=it(e,t,"px");return{[(0,Tt.browserPrefixToKey)("transform",Tt.default)]:n}}function no(e,t){return it(e,t,"")}function it(e,t,n){let{x:a,y:o}=e,s=`translate(${a}${n},${o}${n})`;if(t){const i=`${typeof t.x=="string"?t.x:t.x+n}`,d=`${typeof t.y=="string"?t.y:t.y+n}`;s=`translate(${i}, ${d})`+s}return s}function ao(e,t){return e.targetTouches&&(0,F.findInArray)(e.targetTouches,n=>t===n.identifier)||e.changedTouches&&(0,F.findInArray)(e.changedTouches,n=>t===n.identifier)}function oo(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function so(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&na(e.body,"react-draggable-transparent-selection")}function ro(e){window.requestAnimationFrame?window.requestAnimationFrame(()=>{zt(e)}):zt(e)}function zt(e){if(e)try{if(e.body&&aa(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function na(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp(`(?:^|\\s)${t}(?!\\S)`))||(e.className+=` ${t}`)}function aa(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(`(?:^|\\s)${t}(?!\\S)`,"g"),"")}var U={};Object.defineProperty(U,"__esModule",{value:!0});U.canDragX=co;U.canDragY=po;U.createCoreData=mo;U.createDraggableData=ho;U.getBoundPosition=io;U.getControlPosition=uo;U.snapToGrid=lo;var $=q,ne=z;function io(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:a}=e.props;a=typeof a=="string"?a:fo(a);const o=lt(e);if(typeof a=="string"){const{ownerDocument:s}=o,i=s.defaultView;let d;if(a==="parent"?d=o.parentNode:d=o.getRootNode().querySelector(a),!(d instanceof i.HTMLElement))throw new Error('Bounds selector "'+a+'" could not find an element.');const l=d,c=i.getComputedStyle(o),u=i.getComputedStyle(l);a={left:-o.offsetLeft+(0,$.int)(u.paddingLeft)+(0,$.int)(c.marginLeft),top:-o.offsetTop+(0,$.int)(u.paddingTop)+(0,$.int)(c.marginTop),right:(0,ne.innerWidth)(l)-(0,ne.outerWidth)(o)-o.offsetLeft+(0,$.int)(u.paddingRight)-(0,$.int)(c.marginRight),bottom:(0,ne.innerHeight)(l)-(0,ne.outerHeight)(o)-o.offsetTop+(0,$.int)(u.paddingBottom)-(0,$.int)(c.marginBottom)}}return(0,$.isNum)(a.right)&&(t=Math.min(t,a.right)),(0,$.isNum)(a.bottom)&&(n=Math.min(n,a.bottom)),(0,$.isNum)(a.left)&&(t=Math.max(t,a.left)),(0,$.isNum)(a.top)&&(n=Math.max(n,a.top)),[t,n]}function lo(e,t,n){const a=Math.round(t/e[0])*e[0],o=Math.round(n/e[1])*e[1];return[a,o]}function co(e){return e.props.axis==="both"||e.props.axis==="x"}function po(e){return e.props.axis==="both"||e.props.axis==="y"}function uo(e,t,n){const a=typeof t=="number"?(0,ne.getTouch)(e,t):null;if(typeof t=="number"&&!a)return null;const o=lt(n),s=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,ne.offsetXYFromParent)(a||e,s,n.props.scale)}function mo(e,t,n){const a=!(0,$.isNum)(e.lastX),o=lt(e);return a?{node:o,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:o,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function ho(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function fo(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function lt(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var Le={},Be={};Object.defineProperty(Be,"__esModule",{value:!0});Be.default=go;function go(){}Object.defineProperty(Le,"__esModule",{value:!0});Le.default=void 0;var Ke=oa(w),P=dt($e),wo=dt(Xn),A=z,X=U,Je=q,re=dt(Be);function dt(e){return e&&e.__esModule?e:{default:e}}function oa(e,t){if(typeof WeakMap=="function")var n=new WeakMap,a=new WeakMap;return(oa=function(o,s){if(!s&&o&&o.__esModule)return o;var i,d,l={__proto__:null,default:o};if(o===null||typeof o!="object"&&typeof o!="function")return l;if(i=s?a:n){if(i.has(o))return i.get(o);i.set(o,l)}for(const c in o)c!=="default"&&{}.hasOwnProperty.call(o,c)&&((d=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(o,c))&&(d.get||d.set)?i(l,c,d):l[c]=o[c]);return l})(e,t)}function O(e,t,n){return(t=yo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yo(e){var t=xo(e,"string");return typeof t=="symbol"?t:t+""}function xo(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const B={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let K=B.mouse,Ie=class extends Ke.Component{constructor(){super(...arguments),O(this,"dragging",!1),O(this,"lastX",NaN),O(this,"lastY",NaN),O(this,"touchIdentifier",null),O(this,"mounted",!1),O(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:a}=n;if(this.props.disabled||!(t.target instanceof a.defaultView.Node)||this.props.handle&&!(0,A.matchesSelectorAndParentsTo)(t.target,this.props.handle,n)||this.props.cancel&&(0,A.matchesSelectorAndParentsTo)(t.target,this.props.cancel,n))return;t.type==="touchstart"&&!this.props.allowMobileScroll&&t.preventDefault();const o=(0,A.getTouchIdentifier)(t);this.touchIdentifier=o;const s=(0,X.getControlPosition)(t,o,this);if(s==null)return;const{x:i,y:d}=s,l=(0,X.createCoreData)(this,i,d);(0,re.default)("DraggableCore: handleDragStart: %j",l),(0,re.default)("calling",this.props.onStart),!(this.props.onStart(t,l)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,A.addUserSelectStyles)(a),this.dragging=!0,this.lastX=i,this.lastY=d,(0,A.addEvent)(a,K.move,this.handleDrag),(0,A.addEvent)(a,K.stop,this.handleDragStop))}),O(this,"handleDrag",t=>{const n=(0,X.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:a,y:o}=n;if(Array.isArray(this.props.grid)){let d=a-this.lastX,l=o-this.lastY;if([d,l]=(0,X.snapToGrid)(this.props.grid,d,l),!d&&!l)return;a=this.lastX+d,o=this.lastY+l}const s=(0,X.createCoreData)(this,a,o);if((0,re.default)("DraggableCore: handleDrag: %j",s),this.props.onDrag(t,s)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const l=document.createEvent("MouseEvents");l.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(l)}return}this.lastX=a,this.lastY=o}),O(this,"handleDragStop",t=>{if(!this.dragging)return;const n=(0,X.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:a,y:o}=n;if(Array.isArray(this.props.grid)){let l=a-this.lastX||0,c=o-this.lastY||0;[l,c]=(0,X.snapToGrid)(this.props.grid,l,c),a=this.lastX+l,o=this.lastY+c}const s=(0,X.createCoreData)(this,a,o);if(this.props.onStop(t,s)===!1||this.mounted===!1)return!1;const d=this.findDOMNode();d&&this.props.enableUserSelectHack&&(0,A.scheduleRemoveUserSelectStyles)(d.ownerDocument),(0,re.default)("DraggableCore: handleDragStop: %j",s),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,d&&((0,re.default)("DraggableCore: Removing handlers"),(0,A.removeEvent)(d.ownerDocument,K.move,this.handleDrag),(0,A.removeEvent)(d.ownerDocument,K.stop,this.handleDragStop))}),O(this,"onMouseDown",t=>(K=B.mouse,this.handleDragStart(t))),O(this,"onMouseUp",t=>(K=B.mouse,this.handleDragStop(t))),O(this,"onTouchStart",t=>(K=B.touch,this.handleDragStart(t))),O(this,"onTouchEnd",t=>(K=B.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,A.addEvent)(t,B.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:n}=t;(0,A.removeEvent)(n,B.mouse.move,this.handleDrag),(0,A.removeEvent)(n,B.touch.move,this.handleDrag),(0,A.removeEvent)(n,B.mouse.stop,this.handleDragStop),(0,A.removeEvent)(n,B.touch.stop,this.handleDragStop),(0,A.removeEvent)(t,B.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,A.scheduleRemoveUserSelectStyles)(n)}}findDOMNode(){var t,n,a;return(t=this.props)!=null&&t.nodeRef?(a=(n=this.props)==null?void 0:n.nodeRef)==null?void 0:a.current:wo.default.findDOMNode(this)}render(){return Ke.cloneElement(Ke.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};Le.default=Ie;O(Ie,"displayName","DraggableCore");O(Ie,"propTypes",{allowAnyClick:P.default.bool,allowMobileScroll:P.default.bool,children:P.default.node.isRequired,disabled:P.default.bool,enableUserSelectHack:P.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:P.default.arrayOf(P.default.number),handle:P.default.string,cancel:P.default.string,nodeRef:P.default.object,onStart:P.default.func,onDrag:P.default.func,onStop:P.default.func,onMouseDown:P.default.func,scale:P.default.number,className:Je.dontSetMe,style:Je.dontSetMe,transform:Je.dontSetMe});O(Ie,"defaultProps",{allowAnyClick:!1,allowMobileScroll:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return l.default}}),e.default=void 0;var t=h(w),n=u($e),a=u(Xn),o=$a,s=z,i=U,d=q,l=u(Le),c=u(Be);function u(x){return x&&x.__esModule?x:{default:x}}function h(x,y){if(typeof WeakMap=="function")var C=new WeakMap,g=new WeakMap;return(h=function(S,D){if(!D&&S&&S.__esModule)return S;var j,M,W={__proto__:null,default:S};if(S===null||typeof S!="object"&&typeof S!="function")return W;if(j=D?g:C){if(j.has(S))return j.get(S);j.set(S,W)}for(const H in S)H!=="default"&&{}.hasOwnProperty.call(S,H)&&((M=(j=Object.defineProperty)&&Object.getOwnPropertyDescriptor(S,H))&&(M.get||M.set)?j(W,H,M):W[H]=S[H]);return W})(x,y)}function p(){return p=Object.assign?Object.assign.bind():function(x){for(var y=1;y<arguments.length;y++){var C=arguments[y];for(var g in C)({}).hasOwnProperty.call(C,g)&&(x[g]=C[g])}return x},p.apply(null,arguments)}function f(x,y,C){return(y=v(y))in x?Object.defineProperty(x,y,{value:C,enumerable:!0,configurable:!0,writable:!0}):x[y]=C,x}function v(x){var y=R(x,"string");return typeof y=="symbol"?y:y+""}function R(x,y){if(typeof x!="object"||!x)return x;var C=x[Symbol.toPrimitive];if(C!==void 0){var g=C.call(x,y||"default");if(typeof g!="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return(y==="string"?String:Number)(x)}class k extends t.Component{static getDerivedStateFromProps(y,C){let{position:g}=y,{prevPropsPosition:S}=C;return g&&(!S||g.x!==S.x||g.y!==S.y)?((0,c.default)("Draggable: getDerivedStateFromProps %j",{position:g,prevPropsPosition:S}),{x:g.x,y:g.y,prevPropsPosition:{...g}}):null}constructor(y){super(y),f(this,"onDragStart",(C,g)=>{if((0,c.default)("Draggable: onDragStart: %j",g),this.props.onStart(C,(0,i.createDraggableData)(this,g))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),f(this,"onDrag",(C,g)=>{if(!this.state.dragging)return!1;(0,c.default)("Draggable: onDrag: %j",g);const S=(0,i.createDraggableData)(this,g),D={x:S.x,y:S.y,slackX:0,slackY:0};if(this.props.bounds){const{x:M,y:W}=D;D.x+=this.state.slackX,D.y+=this.state.slackY;const[H,Ce]=(0,i.getBoundPosition)(this,D.x,D.y);D.x=H,D.y=Ce,D.slackX=this.state.slackX+(M-D.x),D.slackY=this.state.slackY+(W-D.y),S.x=D.x,S.y=D.y,S.deltaX=D.x-this.state.x,S.deltaY=D.y-this.state.y}if(this.props.onDrag(C,S)===!1)return!1;this.setState(D)}),f(this,"onDragStop",(C,g)=>{if(!this.state.dragging||this.props.onStop(C,(0,i.createDraggableData)(this,g))===!1)return!1;(0,c.default)("Draggable: onDragStop: %j",g);const D={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:M,y:W}=this.props.position;D.x=M,D.y=W}this.setState(D)}),this.state={dragging:!1,dragged:!1,x:y.position?y.position.x:y.defaultPosition.x,y:y.position?y.position.y:y.defaultPosition.y,prevPropsPosition:{...y.position},slackX:0,slackY:0,isElementSVG:!1},y.position&&!(y.onDrag||y.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.state.dragging&&this.setState({dragging:!1})}findDOMNode(){var y,C;return((C=(y=this.props)==null?void 0:y.nodeRef)==null?void 0:C.current)??a.default.findDOMNode(this)}render(){const{axis:y,bounds:C,children:g,defaultPosition:S,defaultClassName:D,defaultClassNameDragging:j,defaultClassNameDragged:M,position:W,positionOffset:H,scale:Ce,...Ue}=this.props;let ve={},J=null;const G=!!!W||this.state.dragging,L=W||S,Q={x:(0,i.canDragX)(this)&&G?this.state.x:L.x,y:(0,i.canDragY)(this)&&G?this.state.y:L.y};this.state.isElementSVG?J=(0,s.createSVGTransform)(Q,H):ve=(0,s.createCSSTransform)(Q,H);const Re=(0,o.clsx)(g.props.className||"",D,{[j]:this.state.dragging,[M]:this.state.dragged});return t.createElement(l.default,p({},Ue,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(g),{className:Re,style:{...g.props.style,...ve},transform:J}))}}e.default=k,f(k,"displayName","Draggable"),f(k,"propTypes",{...l.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:d.dontSetMe,style:d.dontSetMe,transform:d.dontSetMe}),f(k,"defaultProps",{...l.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(Gn);const{default:sa,DraggableCore:bo}=Gn;Fe.exports=sa;Fe.exports.default=sa;Fe.exports.DraggableCore=bo;var So=Fe.exports,ct={};ct.__esModule=!0;ct.cloneElement=To;var Co=vo(w);function vo(e){return e&&e.__esModule?e:{default:e}}function Et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function _t(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Et(Object(n),!0).forEach(function(a){Ro(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Et(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ro(e,t,n){return t=Do(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Do(e){var t=ko(e,"string");return typeof t=="symbol"?t:String(t)}function ko(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function To(e,t){return t.style&&e.props.style&&(t.style=_t(_t({},e.props.style),t.style)),t.className&&e.props.className&&(t.className=e.props.className+" "+t.className),Co.default.cloneElement(e,t)}var Se={};Se.__esModule=!0;Se.resizableProps=void 0;var b=zo($e);function zo(e){return e&&e.__esModule?e:{default:e}}var Eo={axis:b.default.oneOf(["both","x","y","none"]),className:b.default.string,children:b.default.element.isRequired,draggableOpts:b.default.shape({allowAnyClick:b.default.bool,cancel:b.default.string,children:b.default.node,disabled:b.default.bool,enableUserSelectHack:b.default.bool,offsetParent:b.default.node,grid:b.default.arrayOf(b.default.number),handle:b.default.string,nodeRef:b.default.object,onStart:b.default.func,onDrag:b.default.func,onStop:b.default.func,onMouseDown:b.default.func,scale:b.default.number}),height:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var o=n[0];if(o.axis==="both"||o.axis==="y"){var s;return(s=b.default.number).isRequired.apply(s,n)}return b.default.number.apply(b.default,n)},handle:b.default.oneOfType([b.default.node,b.default.func]),handleSize:b.default.arrayOf(b.default.number),lockAspectRatio:b.default.bool,maxConstraints:b.default.arrayOf(b.default.number),minConstraints:b.default.arrayOf(b.default.number),onResizeStop:b.default.func,onResizeStart:b.default.func,onResize:b.default.func,resizeHandles:b.default.arrayOf(b.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:b.default.number,width:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var o=n[0];if(o.axis==="both"||o.axis==="x"){var s;return(s=b.default.number).isRequired.apply(s,n)}return b.default.number.apply(b.default,n)}};Se.resizableProps=Eo;be.__esModule=!0;be.default=void 0;var ie=Oo(w),_o=So,Ao=ct,jo=Se,Po=["children","className","draggableOpts","width","height","handle","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"];function ra(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(ra=function(o){return o?n:t})(e)}function Oo(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=ra(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var i=o?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(a,s,i):a[s]=e[s]}return a.default=e,n&&n.set(e,a),a}function nt(){return nt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},nt.apply(this,arguments)}function No(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,s;for(s=0;s<a.length;s++)o=a[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function At(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function Ge(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?At(Object(n),!0).forEach(function(a){Mo(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):At(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Mo(e,t,n){return t=Wo(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wo(e){var t=Ho(e,"string");return typeof t=="symbol"?t:String(t)}function Ho(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,at(e,t)}function at(e,t){return at=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,o){return a.__proto__=o,a},at(e,t)}var pt=function(e){$o(t,e);function t(){for(var a,o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return a=e.call.apply(e,[this].concat(s))||this,a.handleRefs={},a.lastHandleRect=null,a.slack=null,a}var n=t.prototype;return n.componentWillUnmount=function(){this.resetData()},n.resetData=function(){this.lastHandleRect=this.slack=null},n.runConstraints=function(o,s){var i=this.props,d=i.minConstraints,l=i.maxConstraints,c=i.lockAspectRatio;if(!d&&!l&&!c)return[o,s];if(c){var u=this.props.width/this.props.height,h=o-this.props.width,p=s-this.props.height;Math.abs(h)>Math.abs(p*u)?s=o/u:o=s*u}var f=o,v=s,R=this.slack||[0,0],k=R[0],x=R[1];return o+=k,s+=x,d&&(o=Math.max(d[0],o),s=Math.max(d[1],s)),l&&(o=Math.min(l[0],o),s=Math.min(l[1],s)),this.slack=[k+(f-o),x+(v-s)],[o,s]},n.resizeHandler=function(o,s){var i=this;return function(d,l){var c=l.node,u=l.deltaX,h=l.deltaY;o==="onResizeStart"&&i.resetData();var p=(i.props.axis==="both"||i.props.axis==="x")&&s!=="n"&&s!=="s",f=(i.props.axis==="both"||i.props.axis==="y")&&s!=="e"&&s!=="w";if(!(!p&&!f)){var v=s[0],R=s[s.length-1],k=c.getBoundingClientRect();if(i.lastHandleRect!=null){if(R==="w"){var x=k.left-i.lastHandleRect.left;u+=x}if(v==="n"){var y=k.top-i.lastHandleRect.top;h+=y}}i.lastHandleRect=k,R==="w"&&(u=-u),v==="n"&&(h=-h);var C=i.props.width+(p?u/i.props.transformScale:0),g=i.props.height+(f?h/i.props.transformScale:0),S=i.runConstraints(C,g);C=S[0],g=S[1];var D=C!==i.props.width||g!==i.props.height,j=typeof i.props[o]=="function"?i.props[o]:null,M=o==="onResize"&&!D;j&&!M&&(d.persist==null||d.persist(),j(d,{node:c,size:{width:C,height:g},handle:s})),o==="onResizeStop"&&i.resetData()}}},n.renderResizeHandle=function(o,s){var i=this.props.handle;if(!i)return ie.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+o,ref:s});if(typeof i=="function")return i(o,s);var d=typeof i.type=="string",l=Ge({ref:s},d?{}:{handleAxis:o});return ie.cloneElement(i,l)},n.render=function(){var o=this,s=this.props,i=s.children,d=s.className,l=s.draggableOpts;s.width,s.height,s.handle,s.handleSize,s.lockAspectRatio,s.axis,s.minConstraints,s.maxConstraints,s.onResize,s.onResizeStop,s.onResizeStart;var c=s.resizeHandles;s.transformScale;var u=No(s,Po);return(0,Ao.cloneElement)(i,Ge(Ge({},u),{},{className:(d?d+" ":"")+"react-resizable",children:[].concat(i.props.children,c.map(function(h){var p,f=(p=o.handleRefs[h])!=null?p:o.handleRefs[h]=ie.createRef();return ie.createElement(_o.DraggableCore,nt({},l,{nodeRef:f,key:"resizableHandle-"+h,onStop:o.resizeHandler("onResizeStop",h),onStart:o.resizeHandler("onResizeStart",h),onDrag:o.resizeHandler("onResize",h)}),o.renderResizeHandle(h,f))}))}))},t}(ie.Component);be.default=pt;pt.propTypes=jo.resizableProps;pt.defaultProps={axis:"both",handleSize:[20,20],lockAspectRatio:!1,minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1};var qe={};qe.__esModule=!0;qe.default=void 0;var Qe=qo(w),Fo=ia($e),Lo=ia(be),Bo=Se,Io=["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles","style","transformScale"];function ia(e){return e&&e.__esModule?e:{default:e}}function la(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(la=function(o){return o?n:t})(e)}function qo(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=la(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var i=o?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(a,s,i):a[s]=e[s]}return a.default=e,n&&n.set(e,a),a}function ot(){return ot=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ot.apply(this,arguments)}function jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jt(Object(n),!0).forEach(function(a){Uo(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Uo(e,t,n){return t=Yo(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yo(e){var t=Vo(e,"string");return typeof t=="symbol"?t:String(t)}function Vo(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xo(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,s;for(s=0;s<a.length;s++)o=a[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ko(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,st(e,t)}function st(e,t){return st=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,o){return a.__proto__=o,a},st(e,t)}var da=function(e){Ko(t,e);function t(){for(var a,o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return a=e.call.apply(e,[this].concat(s))||this,a.state={width:a.props.width,height:a.props.height,propsWidth:a.props.width,propsHeight:a.props.height},a.onResize=function(d,l){var c=l.size;a.props.onResize?(d.persist==null||d.persist(),a.setState(c,function(){return a.props.onResize&&a.props.onResize(d,l)})):a.setState(c)},a}t.getDerivedStateFromProps=function(o,s){return s.propsWidth!==o.width||s.propsHeight!==o.height?{width:o.width,height:o.height,propsWidth:o.width,propsHeight:o.height}:null};var n=t.prototype;return n.render=function(){var o=this.props,s=o.handle,i=o.handleSize;o.onResize;var d=o.onResizeStart,l=o.onResizeStop,c=o.draggableOpts,u=o.minConstraints,h=o.maxConstraints,p=o.lockAspectRatio,f=o.axis;o.width,o.height;var v=o.resizeHandles,R=o.style,k=o.transformScale,x=Xo(o,Io);return Qe.createElement(Lo.default,{axis:f,draggableOpts:c,handle:s,handleSize:i,height:this.state.height,lockAspectRatio:p,maxConstraints:h,minConstraints:u,onResizeStart:d,onResize:this.onResize,onResizeStop:l,resizeHandles:v,transformScale:k,width:this.state.width},Qe.createElement("div",ot({},x,{style:Ne(Ne({},R),{},{width:this.state.width+"px",height:this.state.height+"px"})})))},t}(Qe.Component);qe.default=da;da.propTypes=Ne(Ne({},Bo.resizableProps),{},{children:Fo.default.element});rt.exports=function(){throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")};var Jo=rt.exports.Resizable=be.default;rt.exports.ResizableBox=qe.default;const Go="_table_1244e_1",Qo="_resizable_1244e_46",Zo="_selectable_1244e_63",es="_expanded_1244e_59",ts="_label_1244e_303",ns={table:Go,"fixed-header":"_fixed-header_1244e_8","horizontally-scrollable-container":"_horizontally-scrollable-container_1244e_14","table-header":"_table-header_1244e_19","sticky-header":"_sticky-header_1244e_26","horizontally-scrollable":"_horizontally-scrollable_1244e_14",resizable:Qo,"resizable-column":"_resizable-column_1244e_46","table-row":"_table-row_1244e_54","expanded-cell":"_expanded-cell_1244e_59",selectable:Zo,"row-content-wrapper":"_row-content-wrapper_1244e_67","table-row-content":"_table-row-content_1244e_75","expand-cell":"_expand-cell_1244e_89","size-small":"_size-small_1244e_92","size-large":"_size-large_1244e_103","table-body":"_table-body_1244e_115","scrollable-body":"_scrollable-body_1244e_121","table-header-cell":"_table-header-cell_1244e_181","table-cell":"_table-cell_1244e_182","action-menu-cell":"_action-menu-cell_1244e_188","checkbox-cell":"_checkbox-cell_1244e_213","expand-all-tooltip-wrapper":"_expand-all-tooltip-wrapper_1244e_255","expand-all-tooltip-content":"_expand-all-tooltip-content_1244e_264","expand-icon":"_expand-icon_1244e_273",expanded:es,"primary-cell":"_primary-cell_1244e_282",label:ts,"sortable-cell":"_sortable-cell_1244e_317","align-right":"_align-right_1244e_320","align-center":"_align-center_1244e_326","pinned-column":"_pinned-column_1244e_329"},ee="asc",as="desc",oe=32,ca=100,os=48,Me=e=>e.toLowerCase()===ee,We=(e,t)=>t?[...e].sort((n,a)=>{const o=n[t.key].content||n[t.key],s=a[t.key].content||a[t.key];return o<s?Me(t.direction)?-1:1:o>s?Me(t.direction)?1:-1:0}):e,ss=e=>e.map(t=>t.key),pa=e=>Me(e)?as:ee,Z=e=>"primary"in e&&e.primary===!0,rs=e=>{var n;return`size-${((n=e.rowConfigs)==null?void 0:n.size)??"default"}`},Ze=e=>Jn(e)?e:`${e}px`,is=(e,t,n,a,o)=>{let s=0;a&&(s+=oe),o&&(s+=oe);for(let i=0;i<e;i++){const d=t[i];if(Z(d)){const l=n.current.get(d.key)||ca;s+=l}else{const l=d,c=Jn(l.width)?parseInt(l.width,10)||0:l.width;s+=c}}return s},Te=(e,t,n,a,o,s,i)=>{const d={};if(!Z(e)){const l=e;d.textAlign=l.align}if(t&&n!==void 0){const l=is(n,a,o,s,i);d.left=`${l}px`}return d},Pt=(e,t,n,a,o,s=!1,i,d=!1)=>{const l=[];n&&l.push(`${oe}px`),s&&a&&l.push(`${oe}px`);const c=u=>{if((i==null?void 0:i[u.key])!==void 0){l.push(`${i[u.key]}px`);return}if(Z(u)){const h=u;if(d&&h.width){l.push(Ze(h.width));return}const p=h.width?Ze(h.width):`${ca}px`;l.push(`minmax(${p}, 1fr)`)}else{const p=Ze(u.width);l.push(p)}};return e.forEach(c),t.forEach(c),o&&l.push(`${os}px`),l.join(" ")},ls=({primaryColumns:e,fixedColumns:t,pinnedColumnKeys:n})=>w.useMemo(()=>{const a=[],o=[];return e.forEach(s=>{const i={...s,primary:!0};n.includes(s.key)?a.push(i):o.push(i)}),t.forEach(s=>{n.includes(s.key)?a.push(s):o.push(s)}),{pinnedColumns:a,scrollableColumns:o}},[e,t,n]),ds=()=>{const[e,t]=w.useState(null),[n,a]=w.useState(null),o=w.useCallback(l=>{t(l)},[]),s=w.useCallback(()=>{t(null)},[]),i=w.useCallback(l=>{a(l)},[]),d=w.useCallback(()=>{a(null)},[]);return{hoveredColumn:e,hoveredRow:n,handleColumnMouseEnter:o,handleColumnMouseLeave:s,handleRowMouseEnter:i,handleRowMouseLeave:d}},cs=({primaryColumns:e,fixedColumns:t,expandedRowIds:n,onToggleRowExpansion:a})=>{const[o,s]=w.useState(new Set);w.useEffect(()=>{const l=[...e.map(u=>u.key),...t.map(u=>u.key)],c=new Set;n.forEach(u=>{l.forEach(h=>{c.add(`${u}-${h}`)})}),s(u=>{if(u.size===c.size){let h=!0;if(u.forEach(p=>{c.has(p)||(h=!1)}),h)return u}return c})},[n,e,t]);const i=w.useCallback(l=>{const c=new Set(o),u=n.includes(l),h=[...e.map(p=>p.key),...t.map(p=>p.key)];u?h.forEach(p=>{const f=`${l}-${p}`;c.delete(f)}):h.forEach(p=>{const f=`${l}-${p}`;c.add(f)}),s(c),a(l)},[o,n,e,t,a]),d=w.useCallback((l,c)=>{const u=`${l}-${c}`;return o.has(u)},[o]);return{expandedCells:o,handleToggleRowExpansion:i,isCellExpanded:d}},ps=()=>{const e=w.useRef(new Map),t=w.useCallback(n=>a=>{if(!a)return;const o=a.getBoundingClientRect().width;o>0&&e.current.set(n,o)},[]);return{columnWidthsRef:e,setCellRef:t}},us=({enabled:e=!1,minWidth:t=50,maxWidth:n=500,columnWidthsRef:a,onColumnResize:o})=>{const[s,i]=w.useState({}),d=w.useCallback(()=>{if(!e||Object.keys(s).length>0||!a)return;const u={};a.current.forEach((h,p)=>{u[p]=h}),i(u)},[e,s,a]),l=w.useCallback(u=>(h,{size:p})=>{if(!e)return;const f=Math.min(n,Math.max(t,p.width));i(v=>({...v,[u]:f}))},[e,t,n]),c=w.useCallback(u=>()=>{!e||!s[u]||o==null||o(u,s[u])},[e,s,o]);return{columnWidths:s,handleResize:l,handleResizeStop:c,handleResizeStart:d}},ms={"resize-handle":"_resize-handle_15uk3_1"},hs=Kn.bind(ms),ua=w.forwardRef((e,t)=>r.jsx("div",{ref:t,className:hs("resize-handle"),...e,children:r.jsx(Pa,{})}));ua.__docgenInfo={description:"",methods:[],displayName:"ResizeHandle"};const T=Kn.bind(ns),Ot=({column:e})=>{const t=w.useRef(null),[n,a]=w.useState(!1);return w.useEffect(()=>{if(t.current){const o=t.current.offsetWidth,s=t.current.scrollWidth;a(s>o)}},[e.header]),r.jsx("span",{ref:t,title:n?e.header:void 0,children:e.header})},_=({data:e,primaryColumn:t,fixedColumns:n,renderRowActions:a,className:o="",rowClassName:s="",headerClassName:i="",bodyClassName:d="",selectable:l=!1,selectedRowIds:c=[],sortingDirection:u=ee,sortingColumn:h,sortableColumns:p,isHeaderFixed:f=!1,isHorizontallyScrollable:v=!1,pinnedColumnKeys:R=[],isRowsExpandable:k=!1,expandedRowIds:x=[],isAllExpandedByDefault:y,expandAllTooltip:C,isResizable:g=!1,minColumnWidth:S=50,maxColumnWidth:D=500,isSelectAllCheckboxAlwaysVisible:j=!1,onChangeSorting:M=()=>{},onToggleRowSelection:W=()=>{},onToggleAllRowsSelection:H=()=>{},onToggleRowExpansion:Ce=()=>{},onToggleAllRowsExpansion:Ue=()=>{},onColumnResize:ve=()=>{}})=>{const J=w.useMemo(()=>Array.isArray(t)?t:[t],[t]),I=h??J[0],G=p??ss([...J,...n]),{pinnedColumns:L,scrollableColumns:Q}=ls({primaryColumns:J,fixedColumns:n,pinnedColumnKeys:R}),{hoveredColumn:Re,hoveredRow:ma,handleColumnMouseEnter:ht,handleColumnMouseLeave:ft,handleRowMouseEnter:ha,handleRowMouseLeave:fa}=ds(),{columnWidthsRef:se,setCellRef:gt}=ps(),{handleToggleRowExpansion:ga,isCellExpanded:wt}=cs({primaryColumns:J,fixedColumns:n,expandedRowIds:x,onToggleRowExpansion:Ce}),{columnWidths:Ye,handleResize:wa,handleResizeStop:ya,handleResizeStart:xa}=us({enabled:g,minWidth:S,maxWidth:D,columnWidthsRef:se,onColumnResize:ve}),yt=(m,Y)=>r.jsx(Jo,{width:Ye[m.key]??(typeof m.width=="number"?m.width:S),height:0,axis:"x",handle:r.jsx(ua,{}),onResizeStart:xa,onResize:wa(m.key),onResizeStop:ya(m.key),minConstraints:[S,0],maxConstraints:[D,0],className:T("resizable-column"),children:Y},m.key),xt=m=>{G.includes(m)&&M({key:m,direction:u})},ba=m=>{W(m)},Sa=()=>{H()},Ca=()=>{Ue()},bt=m=>G.includes(m)?(I==null?void 0:I.key)===m?Me(u)?r.jsx(Rt,{}):r.jsx(Oa,{}):r.jsx(Rt,{}):null,va=e.every(m=>c.includes(m.id)),Ra=e.some(m=>c.includes(m.id)),St=(c==null?void 0:c.length)>0,Da=!Ma(e),ka=j&&Da||St,Ta=e.every(m=>x.includes(m.id)),za=y!==void 0?y:Ta,Ea=Pt(L,Q,k,l,!!a,!1,g?Ye:void 0,g),_a=Pt(L,Q,k,l,!!a,!0,g?Ye:void 0,g),Ct=r.jsx("button",{onClick:Ca,"aria-label":"Toggle all rows expansion",children:r.jsx("span",{className:T("expand-icon",{expanded:za}),children:r.jsx(Dt,{})})});return r.jsxs("div",{className:T("table",{"fixed-header":f,"horizontally-scrollable-container":f&&(v||g)},o),children:[r.jsxs("div",{className:T("table-header",{"sticky-header":f,"horizontally-scrollable":v,resizable:g},i),style:{gridTemplateColumns:_a},children:[l&&r.jsx("div",{className:T("table-header-cell","checkbox-cell"),style:{left:k?`${oe}px`:"0"},children:ka&&r.jsx(kt,{value:va,partiallyChecked:Ra,onChange:Sa,className:T("checkbox-cell")})}),k&&r.jsx("div",{className:T("table-header-cell","expand-cell"),style:{left:"0"},children:C?r.jsx(Na,{content:C,placement:"top",wrapperClassName:T("expand-all-tooltip-wrapper"),contentClassName:T("expand-all-tooltip-content"),children:Ct}):Ct}),L.map((m,Y)=>{const E=r.jsx("button",{className:T("table-header-cell","pinned-column",{[`align-${m.align}`]:"align"in m,"primary-cell":Z(m),"sortable-cell":G.includes(m.key),resizable:g}),style:Te(m,!0,Y,L,se,k,l),children:r.jsxs("div",{className:T("label"),onClick:()=>xt(m.key),onMouseEnter:()=>ht(m.key),onMouseLeave:ft,children:[r.jsx(Ot,{column:m}),(Re===m.key||(I==null?void 0:I.key)===m.key)&&bt(m.key)]})},m.key);return g?yt(m,E):E}),Q.map(m=>{const Y=r.jsx("button",{className:T("table-header-cell",{[`align-${m.align}`]:"align"in m,"primary-cell":Z(m),"sortable-cell":G.includes(m.key),resizable:g}),style:Te(m,!1,void 0,L,se,k,l),children:r.jsxs("div",{className:T("label"),onClick:()=>xt(m.key),onMouseEnter:()=>ht(m.key),onMouseLeave:ft,children:[r.jsx(Ot,{column:m}),(Re===m.key||(I==null?void 0:I.key)===m.key)&&bt(m.key)]})},m.key);return g?yt(m,Y):Y}),a&&r.jsx("div",{className:T("table-header-cell","action-menu-cell")})]}),r.jsx("div",{className:T("table-body",{"scrollable-body":f,"horizontally-scrollable":v,resizable:g},d),children:e.map((m,Y)=>r.jsxs("div",{className:T("table-row",rs(m),s,{selectable:l}),onMouseEnter:()=>ha(Y),onMouseLeave:fa,children:[l&&r.jsx("div",{className:T("table-cell","checkbox-cell"),style:{left:k?`${oe}px`:"0"},children:(St||ma===Y)&&r.jsx(kt,{value:c.includes(m.id),onChange:()=>ba(m.id),className:T("checkbox-cell")})}),r.jsx("div",{className:T("row-content-wrapper"),children:r.jsxs("div",{className:T("table-row-content"),style:{gridTemplateColumns:Ea},children:[k&&r.jsx("div",{className:T("table-cell","expand-cell"),style:{left:"0"},children:r.jsx("button",{onClick:()=>ga(m.id),"aria-label":x.includes(m.id)?"Collapse row":"Expand row","aria-expanded":x.includes(m.id),children:r.jsx("span",{className:T("expand-icon",{expanded:x.includes(m.id)}),children:r.jsx(Dt,{})})})}),L.map((E,Ve)=>{const De=wt(m.id,E.key),vt=Z(E);return r.jsx("div",{ref:vt?gt(E.key):void 0,className:T("table-cell","pinned-column",{"primary-cell":vt,"expanded-cell":De}),style:Te(E,!0,Ve,L,se,k,l),children:m[E.key].component||m[E.key].content||m[E.key]},E.key)}),Q.map(E=>{const Ve=wt(m.id,E.key),De=Z(E);return r.jsx("div",{ref:De?gt(E.key):void 0,className:T("table-cell",{"primary-cell":De,"expanded-cell":Ve}),style:Te(E,!1,void 0,L,se,k,l),children:m[E.key].component||m[E.key].content||m[E.key]},E.key)}),a&&r.jsx("div",{className:T("table-cell","action-menu-cell"),children:a(m.metaData)})]})})]},m.id))})]})};_.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"RowData"}],raw:"RowData[]"},description:""},primaryColumn:{required:!0,tsType:{name:"union",raw:"Column | Column[]",elements:[{name:"Column"},{name:"Array",elements:[{name:"Column"}],raw:"Column[]"}]},description:""},fixedColumns:{required:!0,tsType:{name:"Array",elements:[{name:"FixedColumn"}],raw:"FixedColumn[]"},description:""},renderRowActions:{required:!1,tsType:{name:"signature",type:"function",raw:"(metaData?: MetaData) => ReactNode",signature:{arguments:[{type:{name:"MetaData"},name:"metaData"}],return:{name:"ReactNode"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},headerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},bodyClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rowClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortingDirection:{required:!1,tsType:{name:"union",raw:"typeof ASC | typeof DESC | Uppercase<typeof ASC | typeof DESC>",elements:[{name:"ASC"},{name:"DESC"},{name:"Uppercase",elements:[{name:"union",raw:"typeof ASC | typeof DESC",elements:[{name:"ASC"},{name:"DESC"}]}],raw:"Uppercase<typeof ASC | typeof DESC>"}]},description:"",defaultValue:{value:"'asc'",computed:!1}},sortingColumn:{required:!1,tsType:{name:"Column"},description:""},sortableColumns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isHeaderFixed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontallyScrollable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pinnedColumnKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},isRowsExpandable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},isSelectAllCheckboxAlwaysVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},setExpandedRowIds:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Set",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Set<string | number>"}],raw:"SetStateAction<Set<string | number>>"}],raw:"Dispatch<SetStateAction<Set<string | number>>>"},description:""},isAllExpandedByDefault:{required:!1,tsType:{name:"boolean"},description:""},expandAllTooltip:{required:!1,tsType:{name:"ReactNode"},description:""},isResizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},minColumnWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},maxColumnWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"500",computed:!1}},onChangeSorting:{required:!1,tsType:{name:"signature",type:"function",raw:"(sortConfig?: SortConfig) => void",signature:{arguments:[{type:{name:"SortConfig"},name:"sortConfig"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onColumnResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnKey: string, width: number) => void",signature:{arguments:[{type:{name:"string"},name:"columnKey"},{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const Ws={title:"Tables & Lists/Table",component:_,parameters:{layout:"centered",docs:{description:{component:"\nA flexible table component with support for:\n- **Row sizes**: Configure via `rowConfigs: { size: 'small' | 'medium' | 'large' }` in row data\n- **Expandable rows**: Enable with `isRowsExpandable` prop\n- **Pinned columns**: Use `pinnedColumnKeys` to pin columns to the left\n- **Sorting**: Configure with `sortableColumns`, `sortingColumn`, `sortingDirection`\n- **Selection**: Enable with `selectable` prop\n- **Custom cell content**: Use `DetailedCellData` with `content` and `component` properties\n        "}}},tags:["autodocs"],argTypes:{data:{description:"Array of row data. Each row should have an `id` and can include `rowConfigs` for size configuration.",table:{type:{summary:"RowData[]"}}},primaryColumn:{description:"The main column configuration (typically the name/title column).",table:{type:{summary:"Column | Column[]"}}},fixedColumns:{description:"Array of fixed-width columns with optional alignment.",table:{type:{summary:"FixedColumn[]"}}},selectable:{description:"Enable row selection with checkboxes.",control:"boolean",table:{defaultValue:{summary:"false"}}},isRowsExpandable:{description:"Enable expand/collapse functionality for rows with long content.",control:"boolean",table:{defaultValue:{summary:"false"}}},expandedRowIds:{description:"Array of row IDs that are currently expanded.",table:{type:{summary:"(string | number)[]"}}},isAllExpandedByDefault:{description:"Whether all rows should be expanded by default.",control:"boolean",table:{defaultValue:{summary:"false"}}},expandAllTooltip:{description:"Tooltip text for the expand all button.",table:{type:{summary:"ReactNode"}}},pinnedColumnKeys:{description:"Array of column keys to pin to the left side of the table.",table:{type:{summary:"string[]"}}},sortableColumns:{description:"Array of column keys that can be sorted.",table:{type:{summary:"string[]"}}},sortingColumn:{description:"Currently sorted column.",table:{type:{summary:"Column"}}},sortingDirection:{description:"Current sorting direction.",control:"select",options:["ASC","DESC"],table:{type:{summary:"'ASC' | 'DESC'"}}},isHeaderFixed:{description:"Keep the header fixed when scrolling vertically.",control:"boolean",table:{defaultValue:{summary:"false"}}},isHorizontallyScrollable:{description:"Enable horizontal scrolling for wide tables.",control:"boolean",table:{defaultValue:{summary:"false"}}},className:{description:"Custom CSS class for the table container.",table:{type:{summary:"string"}}},headerClassName:{description:"Custom CSS class for the table header. Use this to customize header background, borders, etc.",table:{type:{summary:"string"}}},bodyClassName:{description:"Custom CSS class for the table body. Use this to customize row gap, padding, etc.",table:{type:{summary:"string"}}},rowClassName:{description:"Custom CSS class for table rows.",table:{type:{summary:"string"}}},onToggleRowExpansion:{description:"Callback when a row is expanded/collapsed.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsExpansion:{description:"Callback when all rows are expanded/collapsed.",table:{type:{summary:"() => void"}}},onToggleRowSelection:{description:"Callback when a row is selected/deselected.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsSelection:{description:"Callback when all rows are selected/deselected.",table:{type:{summary:"() => void"}}},onChangeSorting:{description:"Callback when sorting changes.",table:{type:{summary:"(sortConfig?: SortConfig) => void"}}},renderRowActions:{description:"Function to render action menu for each row.",table:{type:{summary:"(metaData?: MetaData) => ReactNode"}}}},args:{selectable:!0}},V=()=>r.jsx(Wa,{placement:"bottom-end",content:r.jsxs("div",{children:[r.jsx("p",{children:"Edit"}),r.jsx("p",{children:"Rename"})]}),children:r.jsx(Ha,{})}),ae=[{id:1,name:{content:"Sam",component:r.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],N=[{key:"name",header:"Name"}],xe=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],ze={render:e=>{const[t,n]=w.useState({key:N[0].key,direction:ee}),[a,o]=w.useState(N[0]),[s,i]=w.useState(ee),d=We(ae,t),[l,c]=w.useState(d),[u,h]=w.useState(new Set([]));return w.useEffect(()=>{const{key:p,direction:f}=t,v=[...xe,...N].find(R=>R.key===p);i(f),o(v)},[t]),r.jsx("div",{style:{minWidth:"700px"},children:r.jsx(_,{...e,primaryColumn:N,data:l,sortableColumns:[N[0].key],onChangeSorting:(p=t)=>{let{direction:f}=p;const{key:v}=p;f=pa(f);const R=We(l,{key:v,direction:f});n({key:v,direction:f}),c(R)},onToggleRowSelection:p=>{const f=new Set(u);f.has(p)?f.delete(p):f.add(p),h(f)},onToggleAllRowsSelection:()=>{if(u.size===ae.length)h(new Set);else{const p=new Set(ae.map(f=>f.id));h(p)}},selectedRowIds:[...u],sortingColumn:a,sortingDirection:s})})},args:{fixedColumns:xe,renderRowActions:V,selectable:!0}},we=[{id:1,name:"John Doe",email:"john.doe@example.com",phone:"+1-555-123-4567",address:"123 Main Street, New York, NY 10001",department:"Engineering",role:"Senior Software Engineer",salary:"$120,000",startDate:"2020-01-15",status:"Active",manager:"Jane Smith",projects:"Project Alpha, Project Beta",rowConfigs:{size:"small"}},{id:2,name:"Jane Smith",email:"jane.smith@example.com",phone:"+1-555-987-6543",address:"456 Oak Avenue, Los Angeles, CA 90210",department:"Marketing",role:"Marketing Director",salary:"$95,000",startDate:"2019-03-20",status:"Active",manager:"Robert Johnson",projects:"Campaign X, Campaign Y",rowConfigs:{size:"small"}},{id:3,name:"Mike Wilson",email:"mike.wilson@example.com",phone:"+1-555-456-7890",address:"789 Pine Road, Chicago, IL 60601",department:"Sales",role:"Sales Representative",salary:"$75,000",startDate:"2021-06-10",status:"Active",manager:"Sarah Davis",projects:"Client Onboarding, Lead Generation",rowConfigs:{size:"small"}},{id:4,name:"Sarah Davis",email:"sarah.davis@example.com",phone:"+1-555-234-5678",address:"321 Elm Street, Houston, TX 77001",department:"HR",role:"HR Manager",salary:"$85,000",startDate:"2018-09-12",status:"Active",manager:"Michael Brown",projects:"Employee Onboarding, Policy Updates",rowConfigs:{size:"small"}},{id:5,name:"Robert Johnson",email:"robert.johnson@example.com",phone:"+1-555-345-6789",address:"654 Maple Drive, Phoenix, AZ 85001",department:"Finance",role:"Financial Analyst",salary:"$78,000",startDate:"2020-11-08",status:"Active",manager:"Emily White",projects:"Budget Planning, Cost Analysis",rowConfigs:{size:"small"}},{id:6,name:"Emily White",email:"emily.white@example.com",phone:"+1-555-456-7891",address:"987 Cedar Lane, Philadelphia, PA 19101",department:"Operations",role:"Operations Manager",salary:"$110,000",startDate:"2017-05-22",status:"Active",manager:"David Green",projects:"Process Optimization, Quality Control",rowConfigs:{size:"small"}},{id:7,name:"David Green",email:"david.green@example.com",phone:"+1-555-567-8901",address:"147 Birch Avenue, San Antonio, TX 78201",department:"Engineering",role:"Lead Developer",salary:"$135,000",startDate:"2016-02-14",status:"Active",manager:"Lisa Thompson",projects:"Architecture Review, Team Mentoring",rowConfigs:{size:"small"}},{id:8,name:"Lisa Thompson",email:"lisa.thompson@example.com",phone:"+1-555-678-9012",address:"258 Spruce Court, San Diego, CA 92101",department:"Product",role:"Product Manager",salary:"$105,000",startDate:"2019-08-30",status:"Active",manager:"Tom Anderson",projects:"Feature Planning, User Research",rowConfigs:{size:"small"}},{id:9,name:"Tom Anderson",email:"tom.anderson@example.com",phone:"+1-555-789-0123",address:"369 Willow Street, Dallas, TX 75201",department:"Design",role:"UX Designer",salary:"$88,000",startDate:"2021-01-18",status:"Active",manager:"Anna Martinez",projects:"UI Redesign, User Testing",rowConfigs:{size:"small"}},{id:10,name:"Anna Martinez",email:"anna.martinez@example.com",phone:"+1-555-890-1234",address:"741 Poplar Boulevard, San Jose, CA 95101",department:"QA",role:"QA Engineer",salary:"$82,000",startDate:"2020-07-25",status:"Active",manager:"John Doe",projects:"Automation Testing, Bug Tracking",rowConfigs:{size:"small"}}],ut=[{key:"name",header:"Full Name"}],mt=[{key:"email",header:"Email Address",width:200},{key:"phone",header:"Phone Number",width:150},{key:"address",header:"Address",width:250},{key:"department",header:"Department",width:120},{key:"role",header:"Job Role",width:180},{key:"salary",header:"Salary",width:100},{key:"startDate",header:"Start Date",width:120},{key:"status",header:"Status",width:100},{key:"manager",header:"Manager",width:150},{key:"projects",header:"Current Projects",width:200}],fs=e=>{const t=["John","Jane","Mike","Sarah","David","Emma","Chris","Lisa","Tom","Anna"],n=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose"],a=["Engineering","Marketing","Sales","HR","Finance","Operations","Design","Product","Legal","Support"];return Array.from({length:e},(o,s)=>({id:s+1,name:`${t[s%t.length]} ${s+1}`,age:22+s%40,city:n[s%n.length],department:a[s%a.length],email:`user${s+1}@example.com`,salary:`$${(5e4+s*1e3%1e5).toLocaleString()}`}))},ye=fs(50),He=[{key:"age",header:"Age",width:80,align:"right"},{key:"city",header:"City",width:120},{key:"department",header:"Department",width:120},{key:"email",header:"Email",width:200},{key:"salary",header:"Salary",width:100,align:"right"}],Ee={render:e=>{const[t,n]=w.useState({key:N[0].key,direction:ee}),[a,o]=w.useState(N[0]),[s,i]=w.useState(ee),d=We(ye,t),[l,c]=w.useState(d),[u,h]=w.useState(new Set([]));return w.useEffect(()=>{const{key:p,direction:f}=t,v=[...He,...N].find(R=>R.key===p);i(f),o(v)},[t]),r.jsxs("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Fixed Header Table with Scrollable Body"}),r.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",overflow:"auto"},children:r.jsx(_,{...e,data:l,primaryColumn:N,fixedColumns:He,isHeaderFixed:!0,sortableColumns:[N[0].key,"age","department"],onChangeSorting:(p=t)=>{let{direction:f}=p;const{key:v}=p;f=pa(f);const R=We(l,{key:v,direction:f});n({key:v,direction:f}),c(R)},onToggleRowSelection:p=>{const f=new Set(u);f.has(p)?f.delete(p):f.add(p),h(f)},onToggleAllRowsSelection:()=>{if(u.size===ye.length)h(new Set);else{const p=new Set(ye.map(f=>f.id));h(p)}},selectedRowIds:[...u],sortingColumn:a,sortingDirection:s})})]})},args:{selectable:!0,renderRowActions:V}},_e={render:e=>r.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Fixed Header + Horizontal Scroll: Both scrollbars visible when needed"}),r.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",position:"relative"},children:r.jsx(_,{...e,data:we,primaryColumn:ut,fixedColumns:mt,isHorizontallyScrollable:!0,isHeaderFixed:!0})})]}),args:{selectable:!1,renderRowActions:V}},Ae={render:e=>{const[t,n]=w.useState(new Set([]));return r.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Pinned Columns + Fixed Header: Name and Email pinned with vertical and horizontal scrolling"}),r.jsx("div",{className:"storybook-table-wrapper",style:{width:"550px",height:"calc(100% - 50px)",position:"relative"},children:r.jsx(_,{...e,data:we,primaryColumn:ut,fixedColumns:mt,isHorizontallyScrollable:!0,isHeaderFixed:!0,pinnedColumnKeys:["name","email","department"],onToggleRowSelection:a=>{const o=new Set(t);o.has(a)?o.delete(a):o.add(a),n(o)},onToggleAllRowsSelection:()=>{if(t.size===we.length)n(new Set);else{const a=new Set(we.map(o=>o.id));n(a)}},selectedRowIds:[...t]})})]})},args:{selectable:!0,renderRowActions:V}},je={render:e=>{const[t,n]=w.useState(new Set([1])),[a,o]=w.useState(new Set([])),s=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"sam.johnson@example.com"},{id:2,name:"Anna Smith",age:32,city:"San Francisco",department:"Design",email:"anna.smith@example.com"},{id:3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",email:"mike.davis@example.com"},{id:4,name:"Sarah Wilson",age:35,city:"Chicago",department:"Sales",email:"sarah.wilson@example.com"}],i=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:100},{key:"city",header:"City",width:100}],d=[{key:"name",header:"Name"}];return r.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows Example"}),r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Click the expand/collapse icons to view detailed information for each row. Rows can be expanded and collapsed independently."}),r.jsx(_,{...e,data:s,primaryColumn:d,fixedColumns:i,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...t],setExpandedRowIds:n,onToggleRowExpansion:l=>{const c=new Set(t);c.has(l)?c.delete(l):c.add(l),n(c)},onToggleAllRowsExpansion:()=>{if(t.size===s.length)n(new Set);else{const l=new Set(s.map(c=>c.id));n(l)}},selectedRowIds:[...a],onToggleRowSelection:l=>{const c=new Set(a);c.has(l)?c.delete(l):c.add(l),o(c)},onToggleAllRowsSelection:()=>{if(a.size===s.length)o(new Set);else{const l=new Set(s.map(c=>c.id));o(l)}}})]})},args:{selectable:!0}},Pe={render:e=>{const[t,n]=w.useState(new Set([1,2,3,4])),[a,o]=w.useState(!0),[s,i]=w.useState(new Set([])),d=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"anna.smith@example.com"},{id:2,name:"Mike Davis",age:32,city:"San Francisco",department:"Design",email:"mike.davis@example.com"},{id:3,name:"Sarah Wilson",age:28,city:"Los Angeles",department:"Marketing",email:"sarah.wilson@example.com"},{id:4,name:"John Brown",age:35,city:"Chicago",department:"Sales",email:"john.brown@example.com"}],l=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],c=[{key:"name",header:"Name"}],u=a?"Expanded by default":"Collapsed by default";return r.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows with Default State"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Demonstrates ",r.jsx("strong",{children:"isAllExpandedByDefault"})," and ",r.jsx("strong",{children:"expandAllTooltip"})," ","props. The expandAll icon shows the default state regardless of individual row states. Hover over the expandAll icon to see the tooltip."]}),r.jsx(_,{...e,data:d,primaryColumn:c,fixedColumns:l,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...t],isAllExpandedByDefault:a,expandAllTooltip:u,onToggleRowExpansion:h=>{const p=new Set(t);p.has(h)?p.delete(h):p.add(h),n(p)},onToggleAllRowsExpansion:()=>{const h=!a;o(h),n(h?new Set(d.map(p=>p.id)):new Set)},selectedRowIds:[...s],onToggleRowSelection:h=>{const p=new Set(s);p.has(h)?p.delete(h):p.add(h),i(p)},onToggleAllRowsSelection:()=>{if(s.size===d.length)i(new Set);else{const h=new Set(d.map(p=>p.id));i(h)}}})]})},args:{selectable:!0}},et=[{id:1,name:"John Alexander Maximilian Winchester-Blackwood III",description:"This is long text but anyway no matter ellipsed or opened it should not overcome his width it can be brake. When you click on this cell, it will expand to show the full content without ellipsis truncation, and the text should wrap properly within the cell boundaries without breaking the table layout.",shortText:"Brief note",longTitle:"Senior Vice President of Engineering and Technology Development for Enterprise Solutions and Digital Transformation Initiatives",email:"john.alexander.maximilian.winchester.blackwood.third@very-long-company-name-example.com",notes:"This is a comprehensive test of how the table handles extremely long content that would normally break layouts. The content should be properly contained within cell boundaries."},{id:2,name:"Maria Elena Rodriguez-Martinez",description:"Another extremely lengthy description that showcases the cell expansion capabilities. This description contains detailed information about the person, their role, responsibilities, and achievements. The purpose is to demonstrate how users can easily expand cells to read full content when the default view shows only a truncated version with ellipsis.",shortText:"Quick summary here",longTitle:"Chief Marketing Officer and Head of Brand Strategy for Global Markets and Customer Experience Enhancement",email:"maria.elena.rodriguez.martinez@another-extremely-long-domain-name.example.org",notes:"Testing various content lengths and how they behave in both collapsed and expanded states. The text should wrap appropriately without overflowing."},{id:3,name:"Robert James Thompson",description:"A comprehensive description that tests the expand functionality with moderate length content. This shows how the feature works with different content lengths and provides a good example of real-world usage.",shortText:"Standard",longTitle:"Director of Operations",email:"robert.thompson@company.com",notes:"Short note about this person and their current projects."},{id:4,name:"Dr. Elizabeth Catherine Pemberton-Williams, PhD, MBA, CISSP",description:"This cell contains an exceptionally detailed description that really pushes the limits of what might be considered reasonable content length. It includes professional background, educational achievements, current responsibilities, ongoing projects, future goals, and various other details that would typically require a much larger display area.",shortText:"Complex background",longTitle:"Chief Technology Officer and Principal Software Architect for Distributed Systems and Cloud Infrastructure with specialization in Cybersecurity and Data Analytics",email:"dr.elizabeth.catherine.pemberton.williams.phd.mba.cissp@enterprise-solutions-technology-consulting.example.net",notes:"Comprehensive notes about professional achievements, certifications, ongoing projects, and future development plans. This tests the maximum reasonable content length."}],gs=[{key:"description",header:"Description",width:200},{key:"longTitle",header:"Job Title",width:120},{key:"email",header:"Email Address",width:100},{key:"shortText",header:"Type",width:100},{key:"notes",header:"Notes",width:100}],Oe={render:e=>{const[t,n]=w.useState(new Set);return r.jsxs("div",{style:{width:"1000px",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Row Content Expansion - Long Text Handling"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666",lineHeight:1.5},children:[r.jsx("strong",{children:"Click the expand icon"})," at the beginning of each row to expand/collapse ALL cells in that row. This example tests:",r.jsx("br",{}),"• Very long email addresses that should be ellipsed when collapsed",r.jsx("br",{}),"• Long text content that should wrap without breaking cell width constraints",r.jsx("br",{}),"• Proper word breaking for extremely long content",r.jsx("br",{}),"• Layout stability when transitioning between collapsed and expanded states"]}),r.jsx("div",{style:{border:"1px solid #e1e5e9",borderRadius:"8px",overflow:"hidden"},children:r.jsx(_,{...e,data:et,primaryColumn:[{key:"name",header:"Full Name"}],fixedColumns:gs,selectable:!1,isRowsExpandable:!0,expandedRowIds:[...t],onToggleRowExpansion:a=>{const o=new Set(t);o.has(a)?o.delete(a):o.add(a),n(o)},onToggleAllRowsExpansion:()=>{if(t.size===et.length)n(new Set);else{const a=new Set(et.map(o=>o.id));n(a)}}})}),r.jsx("p",{style:{margin:"16px 0 0 0",fontSize:"12px",color:"#888",fontStyle:"italic"},children:"Test the table with your browser's developer tools at different widths to verify responsive behavior."})]})},args:{renderRowActions:void 0}},le={render:e=>{const[t,n]=w.useState(new Set([1])),[a,o]=w.useState(new Set([5])),[s,i]=w.useState(new Set([9])),d=(v,R)=>[{id:v+1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",rowConfigs:R?{size:R}:void 0},{id:v+2,name:"John Doe with a very long name that should wrap when expanded and demonstrate how the row height increases to accommodate multiple lines of text content",age:32,city:"San Francisco Bay Area, California, United States of America",department:"Design and User Experience Research Department",rowConfigs:R?{size:R}:void 0},{id:v+3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",rowConfigs:R?{size:R}:void 0},{id:v+4,name:"Sarah Elizabeth Wilson-Montgomery III with an exceptionally long hyphenated surname that demonstrates text wrapping behavior in expanded table rows when the content exceeds the available column width",age:35,city:"Chicago Metropolitan Area",department:"Sales and Business Development International Operations",rowConfigs:R?{size:R}:void 0}],l=d(0,"small"),c=d(4),u=d(8,"large"),h=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],p=[{key:"name",header:"Name"}],f=(v,R,k,x,y)=>r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{margin:"0 0 4px 0",fontSize:"14px",color:"#333"},children:v}),r.jsx("p",{style:{margin:"0 0 12px 0",fontSize:"12px",color:"#666"},children:R}),r.jsx(_,{...e,data:k,primaryColumn:p,fixedColumns:h,isRowsExpandable:!0,expandedRowIds:[...x],onToggleRowExpansion:C=>{const g=new Set(x);g.has(C)?g.delete(C):g.add(C),y(g)},onToggleAllRowsExpansion:()=>{if(x.size===k.length)y(new Set);else{const C=new Set(k.map(g=>g.id));y(C)}}})]});return r.jsxs("div",{style:{minWidth:"800px",maxWidth:"1000px"},children:[r.jsx("h3",{style:{margin:"0 0 24px 0",fontSize:"18px",color:"#333"},children:"Row Sizes with Expand - Testing Jump Fix"}),r.jsx("p",{style:{margin:"0 0 24px 0",fontSize:"14px",color:"#666"},children:"Test expand/collapse on each table size. The row height should NOT change when expanding/collapsing (unless content requires more space)."}),f("Small Rows (44px)",'rowConfigs: { size: "small" }',l,t,n),f("Default Rows (64px)","No rowConfigs specified",c,a,o),f("Large Rows (80px)",'rowConfigs: { size: "large" }',u,s,i)]})}},de={render:()=>{const e=[{key:"name",header:"Name"}],t=[{key:"status",header:"Status",width:100},{key:"description",header:"Description",width:250}],n=[{id:1,name:"Small Row 1",description:"Compact row for dense tables",status:"Active",rowConfigs:{size:"small"}},{id:2,name:"Small Row 2",description:"Height: 44px",status:"Active",rowConfigs:{size:"small"}}],a=[{id:1,name:"Default Row 1",description:"Standard row size",status:"Active"},{id:2,name:"Default Row 2",description:"Height: 64px (no rowConfigs needed)",status:"Active"}],o=[{id:1,name:"Large Row 1",description:"Prominent row for emphasis",status:"Active",rowConfigs:{size:"large"}},{id:2,name:"Large Row 2",description:"Height: 80px",status:"Active",rowConfigs:{size:"large"}}];return r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Small (44px)"}),r.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "small" }']}),r.jsx(_,{data:n,primaryColumn:e[0],fixedColumns:t,selectable:!1})]}),r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Default (64px)"}),r.jsx("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:"No rowConfigs needed"}),r.jsx(_,{data:a,primaryColumn:e[0],fixedColumns:t,selectable:!1})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Large (80px)"}),r.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "large" }']}),r.jsx(_,{data:o,primaryColumn:e[0],fixedColumns:t,selectable:!1})]})]})}},ws=[{key:"name",header:"Name"}],ys=[{key:"status",header:"Status",width:100},{key:"category",header:"Category",width:120}],tt=[{id:1,name:"Test execution with a very long name that demonstrates how text behaves in expanded rows with custom header styling",status:"Passed",category:"Smoke",rowConfigs:{size:"small"}},{id:2,name:"Another test case",status:"Failed",category:"Regression",rowConfigs:{size:"small"}},{id:3,name:"Quick sanity check",status:"Skipped",category:"Sanity",rowConfigs:{size:"small"}}],xs=()=>{const[e,t]=w.useState(new Set);return r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"18px",color:"#333"},children:"Custom Header Background Color"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Use the ",r.jsx("code",{children:"headerClassName"})," prop with your own CSS class to customize the header. Pinned columns and expand button inherit the background color automatically."]}),r.jsx("style",{children:`
          .custom-gray-header {
            background-color: var(--rp-ui-base-bg-200) !important;
            border-top: 1px solid var(--rp-ui-base-e-200);
            border-bottom: none;
          }
        `}),r.jsx("div",{style:{border:"1px solid var(--rp-ui-base-e-200)",borderRadius:"4px",overflow:"hidden"},children:r.jsx(_,{data:tt,primaryColumn:ws[0],fixedColumns:ys,pinnedColumnKeys:["status"],isRowsExpandable:!0,expandedRowIds:Array.from(e),selectable:!1,headerClassName:"custom-gray-header",onToggleRowExpansion:n=>{const a=new Set(e);a.has(n)?a.delete(n):a.add(n),t(a)},onToggleAllRowsExpansion:()=>{e.size===tt.length?t(new Set):t(new Set(tt.map(n=>n.id)))}})}),r.jsxs("div",{style:{marginTop:"24px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#333"},children:"How to use:"}),r.jsx("pre",{style:{backgroundColor:"#f5f5f5",padding:"12px",borderRadius:"4px",fontSize:"12px",overflow:"auto"},children:`// In your SCSS file:
.custom-header {
  background-color: var(--rp-ui-base-bg-200);
  border-top: 1px solid var(--rp-ui-base-e-200);
  border-bottom: none;
}

// In your component:
<Table
  headerClassName="custom-header"
  // ... other props
/>`})]})]})},ce={render:()=>r.jsx(xs,{})},pe={render:e=>r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Resizable Columns (Default Constraints)"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Drag the column borders in the header to adjust widths. Default constraints:"," ",r.jsx("code",{children:"minColumnWidth=50"}),", ",r.jsx("code",{children:"maxColumnWidth=500"})]}),r.jsx(_,{...e,primaryColumn:N,data:ae,fixedColumns:xe})]}),args:{renderRowActions:V,isResizable:!0}},ue={render:e=>r.jsx("div",{style:{minWidth:"600px"},children:r.jsx(_,{...e,primaryColumn:N,data:ae,fixedColumns:xe})}),args:{isResizable:!0}},me={render:e=>r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Resizable Columns (Custom Constraints)"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Columns can be resized between 80px and 300px. Custom constraints:"," ",r.jsx("code",{children:"minColumnWidth=80"}),", ",r.jsx("code",{children:"maxColumnWidth=300"})]}),r.jsx(_,{...e,primaryColumn:N,data:ae,fixedColumns:xe})]}),args:{renderRowActions:V,isResizable:!0,minColumnWidth:80,maxColumnWidth:300}},he={render:e=>r.jsx("div",{style:{width:"900px",height:"400px",border:"1px solid #ccc",padding:"16px"},children:r.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:r.jsx(_,{...e,data:ye,primaryColumn:N,fixedColumns:He})})}),args:{renderRowActions:V,isResizable:!0,isHeaderFixed:!0}},fe={render:e=>r.jsx("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:r.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:r.jsx(_,{...e,data:we,primaryColumn:ut,fixedColumns:mt,isHorizontallyScrollable:!0,isHeaderFixed:!0})})}),args:{renderRowActions:V,isResizable:!0}},ge={render:e=>r.jsx("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:r.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:r.jsx(_,{...e,data:ye,primaryColumn:N,fixedColumns:He,pinnedColumnKeys:["name","email"],isHorizontallyScrollable:!0,isHeaderFixed:!0})})}),args:{renderRowActions:V,isResizable:!0}};var Nt,Mt,Wt;ze.parameters={...ze.parameters,docs:{...(Nt=ze.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Wt=(Mt=ze.parameters)==null?void 0:Mt.docs)==null?void 0:Wt.source}}};var Ht,$t,Ft;Ee.parameters={...Ee.parameters,docs:{...(Ht=Ee.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Ft=($t=Ee.parameters)==null?void 0:$t.docs)==null?void 0:Ft.source}}};var Lt,Bt,It;_e.parameters={..._e.parameters,docs:{...(Lt=_e.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(It=(Bt=_e.parameters)==null?void 0:Bt.docs)==null?void 0:It.source}}};var qt,Ut,Yt;Ae.parameters={...Ae.parameters,docs:{...(qt=Ae.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Yt=(Ut=Ae.parameters)==null?void 0:Ut.docs)==null?void 0:Yt.source}}};var Vt,Xt,Kt;je.parameters={...je.parameters,docs:{...(Vt=je.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Kt=(Xt=je.parameters)==null?void 0:Xt.docs)==null?void 0:Kt.source}}};var Jt,Gt,Qt;Pe.parameters={...Pe.parameters,docs:{...(Jt=Pe.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Qt=(Gt=Pe.parameters)==null?void 0:Gt.docs)==null?void 0:Qt.source}}};var Zt,en,tn;Oe.parameters={...Oe.parameters,docs:{...(Zt=Oe.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(tn=(en=Oe.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var nn,an,on,sn,rn;le.parameters={...le.parameters,docs:{...(nn=le.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(on=(an=le.parameters)==null?void 0:an.docs)==null?void 0:on.source},description:{story:`Demonstrates all row sizes (small: 44px, default: 64px, large: 80px) with expandable content.
Useful for testing that row heights behave correctly when expanding/collapsing cells with long text.`,...(rn=(sn=le.parameters)==null?void 0:sn.docs)==null?void 0:rn.description}}};var ln,dn,cn,pn,un;de.parameters={...de.parameters,docs:{...(ln=de.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(cn=(dn=de.parameters)==null?void 0:dn.docs)==null?void 0:cn.source},description:{story:`Simple demonstration of row sizes without expand functionality.

Row sizes are configured via \`rowConfigs: { size: 'small' | 'medium' | 'large' }\` in each row data object.

Available sizes:
- **small**: 44px height - best for dense data tables
- **medium** (default): 64px height - standard table row
- **large**: 80px height - for tables with more visual prominence`,...(un=(pn=de.parameters)==null?void 0:pn.docs)==null?void 0:un.description}}};var mn,hn,fn,gn,wn;ce.parameters={...ce.parameters,docs:{...(mn=ce.parameters)==null?void 0:mn.docs,source:{originalSource:`{
  render: () => <CustomHeaderDemo />
}`,...(fn=(hn=ce.parameters)==null?void 0:hn.docs)==null?void 0:fn.source},description:{story:`Demonstrates how to customize the table header background color using CSS.

The Table component supports custom header styling via the \`headerClassName\` prop.
Pinned columns and expand cells will inherit the header background color automatically.

This is useful when you need to match the table header with your application's design,
for example, using a gray header on a white background or vice versa.`,...(wn=(gn=ce.parameters)==null?void 0:gn.docs)==null?void 0:wn.description}}};var yn,xn,bn,Sn,Cn;pe.parameters={...pe.parameters,docs:{...(yn=pe.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(bn=(xn=pe.parameters)==null?void 0:xn.docs)==null?void 0:bn.source},description:{story:`Demonstrates resizable columns with default constraints (min: 50px, max: 500px).

Users can drag the column borders in the header to adjust column widths.
Initial widths are taken from column.width property.`,...(Cn=(Sn=pe.parameters)==null?void 0:Sn.docs)==null?void 0:Cn.description}}};var vn,Rn,Dn,kn,Tn;ue.parameters={...ue.parameters,docs:{...(vn=ue.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    minWidth: '600px'
  }}>
      <Table {...args} primaryColumn={primaryColumns} data={data} fixedColumns={fixedColumns} />
    </div>,
  args: {
    isResizable: true
  }
}`,...(Dn=(Rn=ue.parameters)==null?void 0:Rn.docs)==null?void 0:Dn.source},description:{story:"Demonstrates resizable columns without row actions.",...(Tn=(kn=ue.parameters)==null?void 0:kn.docs)==null?void 0:Tn.description}}};var zn,En,_n,An,jn;me.parameters={...me.parameters,docs:{...(zn=me.parameters)==null?void 0:zn.docs,source:{originalSource:`{
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
}`,...(_n=(En=me.parameters)==null?void 0:En.docs)==null?void 0:_n.source},description:{story:`Demonstrates resizable columns with custom min/max constraints.

Columns can be resized between 80px and 300px.`,...(jn=(An=me.parameters)==null?void 0:An.docs)==null?void 0:jn.description}}};var Pn,On,Nn,Mn,Wn;he.parameters={...he.parameters,docs:{...(Pn=he.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
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
}`,...(Nn=(On=he.parameters)==null?void 0:On.docs)==null?void 0:Nn.source},description:{story:"Demonstrates resizable columns with fixed header.",...(Wn=(Mn=he.parameters)==null?void 0:Mn.docs)==null?void 0:Wn.description}}};var Hn,$n,Fn,Ln,Bn;fe.parameters={...fe.parameters,docs:{...(Hn=fe.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
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
}`,...(Fn=($n=fe.parameters)==null?void 0:$n.docs)==null?void 0:Fn.source},description:{story:"Demonstrates resizable columns with horizontal scroll and fixed header.",...(Bn=(Ln=fe.parameters)==null?void 0:Ln.docs)==null?void 0:Bn.description}}};var In,qn,Un,Yn,Vn;ge.parameters={...ge.parameters,docs:{...(In=ge.parameters)==null?void 0:In.docs,source:{originalSource:`{
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
}`,...(Un=(qn=ge.parameters)==null?void 0:qn.docs)==null?void 0:Un.source},description:{story:"Demonstrates resizable columns with pinned columns.",...(Vn=(Yn=ge.parameters)==null?void 0:Yn.docs)==null?void 0:Vn.description}}};const Hs=["Default","FixedHeader","HorizontalScrollWithFixedHeaderControl","PinnedColumnsWithFixedHeader","ExpandableRows","ExpandableRowsWithDefaultState","CellExpansion","RowSizesWithExpand","RowSizes","CustomHeaderStyle","ResizableColumns","ResizableColumnsWithoutActions","ResizableColumnsWithConstraints","ResizableColumnsWithFixedHeader","ResizableColumnsWithHorizontalScroll","ResizableColumnsWithPinnedColumns"];export{Oe as CellExpansion,ce as CustomHeaderStyle,ze as Default,je as ExpandableRows,Pe as ExpandableRowsWithDefaultState,Ee as FixedHeader,_e as HorizontalScrollWithFixedHeaderControl,Ae as PinnedColumnsWithFixedHeader,pe as ResizableColumns,me as ResizableColumnsWithConstraints,he as ResizableColumnsWithFixedHeader,fe as ResizableColumnsWithHorizontalScroll,ge as ResizableColumnsWithPinnedColumns,ue as ResizableColumnsWithoutActions,de as RowSizes,le as RowSizesWithExpand,Hs as __namedExportsOrder,Ws as default};
