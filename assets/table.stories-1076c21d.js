import{j as r}from"./jsx-runtime-2f188e98.js";import{b as os,r as p}from"./index-3553ef47.js";import{p as pt}from"./index-4c891f75.js";import{r as Xt}from"./index-d0bd1ed5.js";import{c as as}from"./clsx-9eb2d624.js";import{c as Gt}from"./bind-d8141dee.js";import{S as ss,a as En,b as rs}from"./resizeColumn-eebfb371.js";import{S as zn}from"./chevronDownDropdown-69a9d5c1.js";import{C as Pt}from"./checkbox-322ca70a.js";import{T as Nt}from"./tooltip-280b52d3.js";import{u as is}from"./useEllipsisTitle-1cddebe3.js";import{i as ls}from"./isEmpty-6ac0b123.js";import{A as ds}from"./actionMenu-fb657254.js";import"./keyCodes-e5060420.js";import"./floating-ui.react-ea29885b.js";import"./floatingUi-c696ea36.js";import"./details-d199936c.js";import"./baseIconButton-9b03f096.js";import"./popover-8346e5d8.js";const pa=e=>typeof e=="string";var Jt={exports:{}},Ie={},mt={exports:{}},ma={};const cs=os(as);var O={},ne={};Object.defineProperty(ne,"__esModule",{value:!0});ne.dontSetMe=fs;ne.findInArray=us;ne.int=hs;ne.isFunction=ps;ne.isNum=ms;function us(e,t){for(let n=0,o=e.length;n<o;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function ps(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function ms(e){return typeof e=="number"&&!isNaN(e)}function hs(e){return parseInt(e,10)}function fs(e,t,n){if(e[t])return new Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`)}var ge={};Object.defineProperty(ge,"__esModule",{value:!0});ge.browserPrefixToKey=fa;ge.browserPrefixToStyle=gs;ge.default=void 0;ge.getPrefix=ha;const Mt=["Moz","Webkit","O","ms"];function ha(){var n,o;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const t=(o=(n=window.document)==null?void 0:n.documentElement)==null?void 0:o.style;if(!t||e in t)return"";for(let a=0;a<Mt.length;a++)if(fa(e,Mt[a])in t)return Mt[a];return""}function fa(e,t){return t?`${t}${ws(e)}`:e}function gs(e,t){return t?`-${t.toLowerCase()}-${e}`:e}function ws(e){let t="",n=!0;for(let o=0;o<e.length;o++)n?(t+=e[o].toUpperCase(),n=!1):e[o]==="-"?n=!0:t+=e[o];return t}ge.default=ha();Object.defineProperty(O,"__esModule",{value:!0});O.addClassName=xa;O.addEvent=ys;O.addUserSelectStyles=_s;O.createCSSTransform=Ds;O.createSVGTransform=Ts;O.getTouch=Es;O.getTouchIdentifier=zs;O.getTranslation=Kt;O.innerHeight=Cs;O.innerWidth=Rs;O.matchesSelector=wa;O.matchesSelectorAndParentsTo=xs;O.offsetXYFromParent=ks;O.outerHeight=Ss;O.outerWidth=vs;O.removeClassName=ya;O.removeEvent=bs;O.scheduleRemoveUserSelectStyles=As;var K=ne,_n=ga(ge);function ga(e,t){if(typeof WeakMap=="function")var n=new WeakMap,o=new WeakMap;return(ga=function(a,s){if(!s&&a&&a.__esModule)return a;var i,u,d={__proto__:null,default:a};if(a===null||typeof a!="object"&&typeof a!="function")return d;if(i=s?o:n){if(i.has(a))return i.get(a);i.set(a,d)}for(const c in a)c!=="default"&&{}.hasOwnProperty.call(a,c)&&((u=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(a,c))&&(u.get||u.set)?i(d,c,u):d[c]=a[c]);return d})(e,t)}let Ze="";function wa(e,t){return Ze||(Ze=(0,K.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,K.isFunction)(e[n])})),(0,K.isFunction)(e[Ze])?e[Ze](t):!1}function xs(e,t,n){let o=e;do{if(wa(o,t))return!0;if(o===n)return!1;o=o.parentNode}while(o);return!1}function ys(e,t,n,o){if(!e)return;const a={capture:!0,...o};e.addEventListener?e.addEventListener(t,n,a):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function bs(e,t,n,o){if(!e)return;const a={capture:!0,...o};e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function Ss(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,K.int)(n.borderTopWidth),t+=(0,K.int)(n.borderBottomWidth),t}function vs(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,K.int)(n.borderLeftWidth),t+=(0,K.int)(n.borderRightWidth),t}function Cs(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,K.int)(n.paddingTop),t-=(0,K.int)(n.paddingBottom),t}function Rs(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,K.int)(n.paddingLeft),t-=(0,K.int)(n.paddingRight),t}function ks(e,t,n){const a=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),s=(e.clientX+t.scrollLeft-a.left)/n,i=(e.clientY+t.scrollTop-a.top)/n;return{x:s,y:i}}function Ds(e,t){const n=Kt(e,t,"px");return{[(0,_n.browserPrefixToKey)("transform",_n.default)]:n}}function Ts(e,t){return Kt(e,t,"")}function Kt(e,t,n){let{x:o,y:a}=e,s=`translate(${o}${n},${a}${n})`;if(t){const i=`${typeof t.x=="string"?t.x:t.x+n}`,u=`${typeof t.y=="string"?t.y:t.y+n}`;s=`translate(${i}, ${u})`+s}return s}function Es(e,t){return e.targetTouches&&(0,K.findInArray)(e.targetTouches,n=>t===n.identifier)||e.changedTouches&&(0,K.findInArray)(e.changedTouches,n=>t===n.identifier)}function zs(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function _s(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&xa(e.body,"react-draggable-transparent-selection")}function As(e){window.requestAnimationFrame?window.requestAnimationFrame(()=>{An(e)}):An(e)}function An(e){if(e)try{if(e.body&&ya(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function xa(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp(`(?:^|\\s)${t}(?!\\S)`))||(e.className+=` ${t}`)}function ya(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(`(?:^|\\s)${t}(?!\\S)`,"g"),"")}var oe={};Object.defineProperty(oe,"__esModule",{value:!0});oe.canDragX=Ns;oe.canDragY=Ms;oe.createCoreData=Hs;oe.createDraggableData=Ws;oe.getBoundPosition=js;oe.getControlPosition=Os;oe.snapToGrid=Ps;var J=ne,ve=O;function js(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:o}=e.props;o=typeof o=="string"?o:Ls(o);const a=Qt(e);if(typeof o=="string"){const{ownerDocument:s}=a,i=s.defaultView;let u;if(o==="parent"?u=a.parentNode:u=a.getRootNode().querySelector(o),!(u instanceof i.HTMLElement))throw new Error('Bounds selector "'+o+'" could not find an element.');const d=u,c=i.getComputedStyle(a),f=i.getComputedStyle(d);o={left:-a.offsetLeft+(0,J.int)(f.paddingLeft)+(0,J.int)(c.marginLeft),top:-a.offsetTop+(0,J.int)(f.paddingTop)+(0,J.int)(c.marginTop),right:(0,ve.innerWidth)(d)-(0,ve.outerWidth)(a)-a.offsetLeft+(0,J.int)(f.paddingRight)-(0,J.int)(c.marginRight),bottom:(0,ve.innerHeight)(d)-(0,ve.outerHeight)(a)-a.offsetTop+(0,J.int)(f.paddingBottom)-(0,J.int)(c.marginBottom)}}return(0,J.isNum)(o.right)&&(t=Math.min(t,o.right)),(0,J.isNum)(o.bottom)&&(n=Math.min(n,o.bottom)),(0,J.isNum)(o.left)&&(t=Math.max(t,o.left)),(0,J.isNum)(o.top)&&(n=Math.max(n,o.top)),[t,n]}function Ps(e,t,n){const o=Math.round(t/e[0])*e[0],a=Math.round(n/e[1])*e[1];return[o,a]}function Ns(e){return e.props.axis==="both"||e.props.axis==="x"}function Ms(e){return e.props.axis==="both"||e.props.axis==="y"}function Os(e,t,n){const o=typeof t=="number"?(0,ve.getTouch)(e,t):null;if(typeof t=="number"&&!o)return null;const a=Qt(n),s=n.props.offsetParent||a.offsetParent||a.ownerDocument.body;return(0,ve.offsetXYFromParent)(o||e,s,n.props.scale)}function Hs(e,t,n){const o=!(0,J.isNum)(e.lastX),a=Qt(e);return o?{node:a,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:a,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function Ws(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function Ls(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Qt(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var ht={},ft={};Object.defineProperty(ft,"__esModule",{value:!0});ft.default=$s;function $s(){}Object.defineProperty(ht,"__esModule",{value:!0});ht.default=void 0;var Ot=ba(p),V=Zt(pt),Fs=Zt(Xt),F=O,le=oe,Ht=ne,ze=Zt(ft);function Zt(e){return e&&e.__esModule?e:{default:e}}function ba(e,t){if(typeof WeakMap=="function")var n=new WeakMap,o=new WeakMap;return(ba=function(a,s){if(!s&&a&&a.__esModule)return a;var i,u,d={__proto__:null,default:a};if(a===null||typeof a!="object"&&typeof a!="function")return d;if(i=s?o:n){if(i.has(a))return i.get(a);i.set(a,d)}for(const c in a)c!=="default"&&{}.hasOwnProperty.call(a,c)&&((u=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(a,c))&&(u.get||u.set)?i(d,c,u):d[c]=a[c]);return d})(e,t)}function U(e,t,n){return(t=Bs(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bs(e){var t=Is(e,"string");return typeof t=="symbol"?t:t+""}function Is(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const Z={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let de=Z.mouse,gt=class extends Ot.Component{constructor(){super(...arguments),U(this,"dragging",!1),U(this,"lastX",NaN),U(this,"lastY",NaN),U(this,"touchIdentifier",null),U(this,"mounted",!1),U(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:o}=n;if(this.props.disabled||!(t.target instanceof o.defaultView.Node)||this.props.handle&&!(0,F.matchesSelectorAndParentsTo)(t.target,this.props.handle,n)||this.props.cancel&&(0,F.matchesSelectorAndParentsTo)(t.target,this.props.cancel,n))return;t.type==="touchstart"&&!this.props.allowMobileScroll&&t.preventDefault();const a=(0,F.getTouchIdentifier)(t);this.touchIdentifier=a;const s=(0,le.getControlPosition)(t,a,this);if(s==null)return;const{x:i,y:u}=s,d=(0,le.createCoreData)(this,i,u);(0,ze.default)("DraggableCore: handleDragStart: %j",d),(0,ze.default)("calling",this.props.onStart),!(this.props.onStart(t,d)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,F.addUserSelectStyles)(o),this.dragging=!0,this.lastX=i,this.lastY=u,(0,F.addEvent)(o,de.move,this.handleDrag),(0,F.addEvent)(o,de.stop,this.handleDragStop))}),U(this,"handleDrag",t=>{const n=(0,le.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:o,y:a}=n;if(Array.isArray(this.props.grid)){let u=o-this.lastX,d=a-this.lastY;if([u,d]=(0,le.snapToGrid)(this.props.grid,u,d),!u&&!d)return;o=this.lastX+u,a=this.lastY+d}const s=(0,le.createCoreData)(this,o,a);if((0,ze.default)("DraggableCore: handleDrag: %j",s),this.props.onDrag(t,s)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const d=document.createEvent("MouseEvents");d.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(d)}return}this.lastX=o,this.lastY=a}),U(this,"handleDragStop",t=>{if(!this.dragging)return;const n=(0,le.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:o,y:a}=n;if(Array.isArray(this.props.grid)){let d=o-this.lastX||0,c=a-this.lastY||0;[d,c]=(0,le.snapToGrid)(this.props.grid,d,c),o=this.lastX+d,a=this.lastY+c}const s=(0,le.createCoreData)(this,o,a);if(this.props.onStop(t,s)===!1||this.mounted===!1)return!1;const u=this.findDOMNode();u&&this.props.enableUserSelectHack&&(0,F.scheduleRemoveUserSelectStyles)(u.ownerDocument),(0,ze.default)("DraggableCore: handleDragStop: %j",s),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,u&&((0,ze.default)("DraggableCore: Removing handlers"),(0,F.removeEvent)(u.ownerDocument,de.move,this.handleDrag),(0,F.removeEvent)(u.ownerDocument,de.stop,this.handleDragStop))}),U(this,"onMouseDown",t=>(de=Z.mouse,this.handleDragStart(t))),U(this,"onMouseUp",t=>(de=Z.mouse,this.handleDragStop(t))),U(this,"onTouchStart",t=>(de=Z.touch,this.handleDragStart(t))),U(this,"onTouchEnd",t=>(de=Z.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,F.addEvent)(t,Z.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:n}=t;(0,F.removeEvent)(n,Z.mouse.move,this.handleDrag),(0,F.removeEvent)(n,Z.touch.move,this.handleDrag),(0,F.removeEvent)(n,Z.mouse.stop,this.handleDragStop),(0,F.removeEvent)(n,Z.touch.stop,this.handleDragStop),(0,F.removeEvent)(t,Z.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,F.scheduleRemoveUserSelectStyles)(n)}}findDOMNode(){var t,n,o;return(t=this.props)!=null&&t.nodeRef?(o=(n=this.props)==null?void 0:n.nodeRef)==null?void 0:o.current:Fs.default.findDOMNode(this)}render(){return Ot.cloneElement(Ot.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};ht.default=gt;U(gt,"displayName","DraggableCore");U(gt,"propTypes",{allowAnyClick:V.default.bool,allowMobileScroll:V.default.bool,children:V.default.node.isRequired,disabled:V.default.bool,enableUserSelectHack:V.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:V.default.arrayOf(V.default.number),handle:V.default.string,cancel:V.default.string,nodeRef:V.default.object,onStart:V.default.func,onDrag:V.default.func,onStop:V.default.func,onMouseDown:V.default.func,scale:V.default.number,className:Ht.dontSetMe,style:Ht.dontSetMe,transform:Ht.dontSetMe});U(gt,"defaultProps",{allowAnyClick:!1,allowMobileScroll:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return d.default}}),e.default=void 0;var t=h(p),n=f(pt),o=f(Xt),a=cs,s=O,i=oe,u=ne,d=f(ht),c=f(ft);function f(x){return x&&x.__esModule?x:{default:x}}function h(x,k){if(typeof WeakMap=="function")var b=new WeakMap,C=new WeakMap;return(h=function(D,A){if(!A&&D&&D.__esModule)return D;var $,W,I={__proto__:null,default:D};if(D===null||typeof D!="object"&&typeof D!="function")return I;if($=A?C:b){if($.has(D))return $.get(D);$.set(D,I)}for(const Y in D)Y!=="default"&&{}.hasOwnProperty.call(D,Y)&&((W=($=Object.defineProperty)&&Object.getOwnPropertyDescriptor(D,Y))&&(W.get||W.set)?$(I,Y,W):I[Y]=D[Y]);return I})(x,k)}function m(){return m=Object.assign?Object.assign.bind():function(x){for(var k=1;k<arguments.length;k++){var b=arguments[k];for(var C in b)({}).hasOwnProperty.call(b,C)&&(x[C]=b[C])}return x},m.apply(null,arguments)}function w(x,k,b){return(k=R(k))in x?Object.defineProperty(x,k,{value:b,enumerable:!0,configurable:!0,writable:!0}):x[k]=b,x}function R(x){var k=y(x,"string");return typeof k=="symbol"?k:k+""}function y(x,k){if(typeof x!="object"||!x)return x;var b=x[Symbol.toPrimitive];if(b!==void 0){var C=b.call(x,k||"default");if(typeof C!="object")return C;throw new TypeError("@@toPrimitive must return a primitive value.")}return(k==="string"?String:Number)(x)}class v extends t.Component{static getDerivedStateFromProps(k,b){let{position:C}=k,{prevPropsPosition:D}=b;return C&&(!D||C.x!==D.x||C.y!==D.y)?((0,c.default)("Draggable: getDerivedStateFromProps %j",{position:C,prevPropsPosition:D}),{x:C.x,y:C.y,prevPropsPosition:{...C}}):null}constructor(k){super(k),w(this,"onDragStart",(b,C)=>{if((0,c.default)("Draggable: onDragStart: %j",C),this.props.onStart(b,(0,i.createDraggableData)(this,C))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),w(this,"onDrag",(b,C)=>{if(!this.state.dragging)return!1;(0,c.default)("Draggable: onDrag: %j",C);const D=(0,i.createDraggableData)(this,C),A={x:D.x,y:D.y,slackX:0,slackY:0};if(this.props.bounds){const{x:W,y:I}=A;A.x+=this.state.slackX,A.y+=this.state.slackY;const[Y,q]=(0,i.getBoundPosition)(this,A.x,A.y);A.x=Y,A.y=q,A.slackX=this.state.slackX+(W-A.x),A.slackY=this.state.slackY+(I-A.y),D.x=A.x,D.y=A.y,D.deltaX=A.x-this.state.x,D.deltaY=A.y-this.state.y}if(this.props.onDrag(b,D)===!1)return!1;this.setState(A)}),w(this,"onDragStop",(b,C)=>{if(!this.state.dragging||this.props.onStop(b,(0,i.createDraggableData)(this,C))===!1)return!1;(0,c.default)("Draggable: onDragStop: %j",C);const A={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:W,y:I}=this.props.position;A.x=W,A.y=I}this.setState(A)}),this.state={dragging:!1,dragged:!1,x:k.position?k.position.x:k.defaultPosition.x,y:k.position?k.position.y:k.defaultPosition.y,prevPropsPosition:{...k.position},slackX:0,slackY:0,isElementSVG:!1},k.position&&!(k.onDrag||k.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.state.dragging&&this.setState({dragging:!1})}findDOMNode(){var k,b;return((b=(k=this.props)==null?void 0:k.nodeRef)==null?void 0:b.current)??o.default.findDOMNode(this)}render(){const{axis:k,bounds:b,children:C,defaultPosition:D,defaultClassName:A,defaultClassNameDragging:$,defaultClassNameDragged:W,position:I,positionOffset:Y,scale:q,...X}=this.props;let we={},ke=null;const M=!!!I||this.state.dragging,xe=I||D,Ve={x:(0,i.canDragX)(this)&&M?this.state.x:xe.x,y:(0,i.canDragY)(this)&&M?this.state.y:xe.y};this.state.isElementSVG?ke=(0,s.createSVGTransform)(Ve,Y):we=(0,s.createCSSTransform)(Ve,Y);const xt=(0,a.clsx)(C.props.className||"",A,{[$]:this.state.dragging,[W]:this.state.dragged});return t.createElement(d.default,m({},X,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(C),{className:xt,style:{...C.props.style,...we},transform:ke}))}}e.default=v,w(v,"displayName","Draggable"),w(v,"propTypes",{...d.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:u.dontSetMe,style:u.dontSetMe,transform:u.dontSetMe}),w(v,"defaultProps",{...d.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(ma);const{default:Sa,DraggableCore:qs}=ma;mt.exports=Sa;mt.exports.default=Sa;mt.exports.DraggableCore=qs;var Vs=mt.exports,en={};en.__esModule=!0;en.cloneElement=Ks;var Us=Ys(p);function Ys(e){return e&&e.__esModule?e:{default:e}}function jn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Pn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jn(Object(n),!0).forEach(function(o){Xs(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jn(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Xs(e,t,n){return t=Gs(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gs(e){var t=Js(e,"string");return typeof t=="symbol"?t:String(t)}function Js(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ks(e,t){return t.style&&e.props.style&&(t.style=Pn(Pn({},e.props.style),t.style)),t.className&&e.props.className&&(t.className=e.props.className+" "+t.className),Us.default.cloneElement(e,t)}var qe={};qe.__esModule=!0;qe.resizableProps=void 0;var T=Qs(pt);function Qs(e){return e&&e.__esModule?e:{default:e}}var Zs={axis:T.default.oneOf(["both","x","y","none"]),className:T.default.string,children:T.default.element.isRequired,draggableOpts:T.default.shape({allowAnyClick:T.default.bool,cancel:T.default.string,children:T.default.node,disabled:T.default.bool,enableUserSelectHack:T.default.bool,offsetParent:T.default.node,grid:T.default.arrayOf(T.default.number),handle:T.default.string,nodeRef:T.default.object,onStart:T.default.func,onDrag:T.default.func,onStop:T.default.func,onMouseDown:T.default.func,scale:T.default.number}),height:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var a=n[0];if(a.axis==="both"||a.axis==="y"){var s;return(s=T.default.number).isRequired.apply(s,n)}return T.default.number.apply(T.default,n)},handle:T.default.oneOfType([T.default.node,T.default.func]),handleSize:T.default.arrayOf(T.default.number),lockAspectRatio:T.default.bool,maxConstraints:T.default.arrayOf(T.default.number),minConstraints:T.default.arrayOf(T.default.number),onResizeStop:T.default.func,onResizeStart:T.default.func,onResize:T.default.func,resizeHandles:T.default.arrayOf(T.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:T.default.number,width:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var a=n[0];if(a.axis==="both"||a.axis==="x"){var s;return(s=T.default.number).isRequired.apply(s,n)}return T.default.number.apply(T.default,n)}};qe.resizableProps=Zs;Ie.__esModule=!0;Ie.default=void 0;var _e=ar(p),er=Vs,tr=en,nr=qe,or=["children","className","draggableOpts","width","height","handle","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"];function va(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(va=function(a){return a?n:t})(e)}function ar(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=va(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var i=a?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(o,s,i):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o}function It(){return It=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},It.apply(this,arguments)}function sr(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Nn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Wt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nn(Object(n),!0).forEach(function(o){rr(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nn(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function rr(e,t,n){return t=ir(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ir(e){var t=lr(e,"string");return typeof t=="symbol"?t:String(t)}function lr(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function dr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,qt(e,t)}function qt(e,t){return qt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},qt(e,t)}var tn=function(e){dr(t,e);function t(){for(var o,a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return o=e.call.apply(e,[this].concat(s))||this,o.handleRefs={},o.lastHandleRect=null,o.slack=null,o}var n=t.prototype;return n.componentWillUnmount=function(){this.resetData()},n.resetData=function(){this.lastHandleRect=this.slack=null},n.runConstraints=function(a,s){var i=this.props,u=i.minConstraints,d=i.maxConstraints,c=i.lockAspectRatio;if(!u&&!d&&!c)return[a,s];if(c){var f=this.props.width/this.props.height,h=a-this.props.width,m=s-this.props.height;Math.abs(h)>Math.abs(m*f)?s=a/f:a=s*f}var w=a,R=s,y=this.slack||[0,0],v=y[0],x=y[1];return a+=v,s+=x,u&&(a=Math.max(u[0],a),s=Math.max(u[1],s)),d&&(a=Math.min(d[0],a),s=Math.min(d[1],s)),this.slack=[v+(w-a),x+(R-s)],[a,s]},n.resizeHandler=function(a,s){var i=this;return function(u,d){var c=d.node,f=d.deltaX,h=d.deltaY;a==="onResizeStart"&&i.resetData();var m=(i.props.axis==="both"||i.props.axis==="x")&&s!=="n"&&s!=="s",w=(i.props.axis==="both"||i.props.axis==="y")&&s!=="e"&&s!=="w";if(!(!m&&!w)){var R=s[0],y=s[s.length-1],v=c.getBoundingClientRect();if(i.lastHandleRect!=null){if(y==="w"){var x=v.left-i.lastHandleRect.left;f+=x}if(R==="n"){var k=v.top-i.lastHandleRect.top;h+=k}}i.lastHandleRect=v,y==="w"&&(f=-f),R==="n"&&(h=-h);var b=i.props.width+(m?f/i.props.transformScale:0),C=i.props.height+(w?h/i.props.transformScale:0),D=i.runConstraints(b,C);b=D[0],C=D[1];var A=b!==i.props.width||C!==i.props.height,$=typeof i.props[a]=="function"?i.props[a]:null,W=a==="onResize"&&!A;$&&!W&&(u.persist==null||u.persist(),$(u,{node:c,size:{width:b,height:C},handle:s})),a==="onResizeStop"&&i.resetData()}}},n.renderResizeHandle=function(a,s){var i=this.props.handle;if(!i)return _e.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+a,ref:s});if(typeof i=="function")return i(a,s);var u=typeof i.type=="string",d=Wt({ref:s},u?{}:{handleAxis:a});return _e.cloneElement(i,d)},n.render=function(){var a=this,s=this.props,i=s.children,u=s.className,d=s.draggableOpts;s.width,s.height,s.handle,s.handleSize,s.lockAspectRatio,s.axis,s.minConstraints,s.maxConstraints,s.onResize,s.onResizeStop,s.onResizeStart;var c=s.resizeHandles;s.transformScale;var f=sr(s,or);return(0,tr.cloneElement)(i,Wt(Wt({},f),{},{className:(u?u+" ":"")+"react-resizable",children:[].concat(i.props.children,c.map(function(h){var m,w=(m=a.handleRefs[h])!=null?m:a.handleRefs[h]=_e.createRef();return _e.createElement(er.DraggableCore,It({},d,{nodeRef:w,key:"resizableHandle-"+h,onStop:a.resizeHandler("onResizeStop",h),onStart:a.resizeHandler("onResizeStart",h),onDrag:a.resizeHandler("onResize",h)}),a.renderResizeHandle(h,w))}))}))},t}(_e.Component);Ie.default=tn;tn.propTypes=nr.resizableProps;tn.defaultProps={axis:"both",handleSize:[20,20],lockAspectRatio:!1,minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1};var wt={};wt.__esModule=!0;wt.default=void 0;var Lt=hr(p),cr=Ca(pt),ur=Ca(Ie),pr=qe,mr=["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles","style","transformScale"];function Ca(e){return e&&e.__esModule?e:{default:e}}function Ra(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Ra=function(a){return a?n:t})(e)}function hr(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Ra(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var i=a?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(o,s,i):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o}function Vt(){return Vt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Vt.apply(this,arguments)}function Mn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function dt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mn(Object(n),!0).forEach(function(o){fr(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mn(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function fr(e,t,n){return t=gr(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gr(e){var t=wr(e,"string");return typeof t=="symbol"?t:String(t)}function wr(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function xr(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function yr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ut(e,t)}function Ut(e,t){return Ut=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},Ut(e,t)}var ka=function(e){yr(t,e);function t(){for(var o,a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return o=e.call.apply(e,[this].concat(s))||this,o.state={width:o.props.width,height:o.props.height,propsWidth:o.props.width,propsHeight:o.props.height},o.onResize=function(u,d){var c=d.size;o.props.onResize?(u.persist==null||u.persist(),o.setState(c,function(){return o.props.onResize&&o.props.onResize(u,d)})):o.setState(c)},o}t.getDerivedStateFromProps=function(a,s){return s.propsWidth!==a.width||s.propsHeight!==a.height?{width:a.width,height:a.height,propsWidth:a.width,propsHeight:a.height}:null};var n=t.prototype;return n.render=function(){var a=this.props,s=a.handle,i=a.handleSize;a.onResize;var u=a.onResizeStart,d=a.onResizeStop,c=a.draggableOpts,f=a.minConstraints,h=a.maxConstraints,m=a.lockAspectRatio,w=a.axis;a.width,a.height;var R=a.resizeHandles,y=a.style,v=a.transformScale,x=xr(a,mr);return Lt.createElement(ur.default,{axis:w,draggableOpts:c,handle:s,handleSize:i,height:this.state.height,lockAspectRatio:m,maxConstraints:h,minConstraints:f,onResizeStart:u,onResize:this.onResize,onResizeStop:d,resizeHandles:R,transformScale:v,width:this.state.width},Lt.createElement("div",Vt({},x,{style:dt(dt({},y),{},{width:this.state.width+"px",height:this.state.height+"px"})})))},t}(Lt.Component);wt.default=ka;ka.propTypes=dt(dt({},pr.resizableProps),{},{children:cr.default.element});Jt.exports=function(){throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")};var br=Jt.exports.Resizable=Ie.default;Jt.exports.ResizableBox=wt.default;const Sr="_table_1d64d_1",vr="_resizable_1d64d_66",Cr="_selectable_1d64d_91",Rr="_expanded_1d64d_87",kr="_label_1d64d_392",Dr={table:Sr,"fixed-header":"_fixed-header_1d64d_9","external-scroll-container":"_external-scroll-container_1d64d_13","horizontally-scrollable-container":"_horizontally-scrollable-container_1d64d_20","table-header":"_table-header_1d64d_25","sticky-header":"_sticky-header_1d64d_33","pinned-header":"_pinned-header_1d64d_43","horizontally-scrollable":"_horizontally-scrollable_1d64d_20",resizable:vr,"resizable-column":"_resizable-column_1d64d_66","select-all-checkbox":"_select-all-checkbox_1d64d_73","select-all-checkbox-selected":"_select-all-checkbox-selected_1d64d_77","table-row":"_table-row_1d64d_82","expanded-cell":"_expanded-cell_1d64d_87",selectable:Cr,"row-content-wrapper":"_row-content-wrapper_1d64d_95","pinned-column":"_pinned-column_1d64d_103","has-scroll":"_has-scroll_1d64d_103","table-row-content":"_table-row-content_1d64d_106","expand-cell":"_expand-cell_1d64d_123","left-border-accent":"_left-border-accent_1d64d_126","size-small":"_size-small_1d64d_136","size-large":"_size-large_1d64d_147","table-body":"_table-body_1d64d_159","scrollable-body":"_scrollable-body_1d64d_165","expanded-content-row":"_expanded-content-row_1d64d_229","with-checkbox-track":"_with-checkbox-track_1d64d_244","expanded-content-cell":"_expanded-content-cell_1d64d_247","primitive-cell-text":"_primitive-cell-text_1d64d_256","table-header-cell":"_table-header-cell_1d64d_265","table-cell":"_table-cell_1d64d_266","action-menu-cell":"_action-menu-cell_1d64d_272","checkbox-cell":"_checkbox-cell_1d64d_300","expand-all-tooltip-wrapper":"_expand-all-tooltip-wrapper_1d64d_341","expand-all-tooltip-content":"_expand-all-tooltip-content_1d64d_350","expand-icon":"_expand-icon_1d64d_359",expanded:Rr,"primary-cell":"_primary-cell_1d64d_368",label:kr,"sortable-cell":"_sortable-cell_1d64d_406","sort-disabled":"_sort-disabled_1d64d_409","sort-disabled-tooltip-wrapper":"_sort-disabled-tooltip-wrapper_1d64d_415","align-right":"_align-right_1d64d_420","align-center":"_align-center_1d64d_426","table-wrapper":"_table-wrapper_1d64d_480","checkbox-column":"_checkbox-column_1d64d_492","checkbox-header":"_checkbox-header_1d64d_501","checkbox-body":"_checkbox-body_1d64d_522","checkbox-row":"_checkbox-row_1d64d_529","checkbox-tooltip-wrapper":"_checkbox-tooltip-wrapper_1d64d_540"},se="asc",Tr="desc",me=32,Da=100,Er=48,Yt=48,ct=e=>e.toLowerCase()===se,Ce=(e,t)=>t?[...e].sort((n,o)=>{const a=n[t.key].content||n[t.key],s=o[t.key].content||o[t.key];return a<s?ct(t.direction)?-1:1:a>s?ct(t.direction)?1:-1:0}):e,zr=e=>e.map(t=>t.key),nn=e=>ct(e)?Tr:se,pe=e=>"primary"in e&&e.primary===!0,On=e=>{var n;return`size-${((n=e.rowConfigs)==null?void 0:n.size)??"default"}`},$t=e=>pa(e)?e:`${e}px`,_r=(e,t,n,o,a,s=!1)=>{let i=0;o&&(i+=me),a&&!s&&(i+=me);for(let u=0;u<e;u++){const d=t[u];if(pe(d)){const c=n.current.get(d.key)||Da;i+=c}else{const c=d,f=pa(c.width)?parseInt(c.width,10)||0:c.width;i+=f}}return i},et=(e,t,n,o,a,s,i,u=!1)=>{const d={};if(!pe(e)){const c=e;d.textAlign=c.align}if(t&&n!==void 0){const c=_r(n,o,a,s,i,u);d.left=`${c}px`}return d},Hn=(e,t,n,o,a,s=!1,i,u=!1,d=!1)=>{const c=[];n&&c.push(`${me}px`),s&&o&&!d&&c.push(`${me}px`);const f=h=>{if((i==null?void 0:i[h.key])!==void 0){c.push(`${i[h.key]}px`);return}if(pe(h)){const m=h;if(u&&m.width){c.push($t(m.width));return}const w=m.width?$t(m.width):`${Da}px`;c.push(`minmax(${w}, 1fr)`)}else{const w=$t(h.width);c.push(w)}};return e.forEach(f),t.forEach(f),a&&c.push(`${Er}px`),c.join(" ")},Ar=({primaryColumns:e,fixedColumns:t,pinnedColumnKeys:n})=>p.useMemo(()=>{const o=[],a=[];return e.forEach(s=>{const i={...s,primary:!0};n.includes(s.key)?o.push(i):a.push(i)}),t.forEach(s=>{n.includes(s.key)?o.push(s):a.push(s)}),{pinnedColumns:o,scrollableColumns:a}},[e,t,n]),jr=()=>{const[e,t]=p.useState(null),[n,o]=p.useState(null),a=p.useCallback(d=>{t(d)},[]),s=p.useCallback(()=>{t(null)},[]),i=p.useCallback(d=>{o(d)},[]),u=p.useCallback(()=>{o(null)},[]);return{hoveredColumn:e,hoveredRow:n,handleColumnMouseEnter:a,handleColumnMouseLeave:s,handleRowMouseEnter:i,handleRowMouseLeave:u}},Pr=({primaryColumns:e,fixedColumns:t,expandedRowIds:n,onToggleRowExpansion:o})=>{const[a,s]=p.useState(new Set);p.useEffect(()=>{const d=[...e.map(f=>f.key),...t.map(f=>f.key)],c=new Set;n.forEach(f=>{d.forEach(h=>{c.add(`${f}-${h}`)})}),s(f=>{if(f.size===c.size){let h=!0;if(f.forEach(m=>{c.has(m)||(h=!1)}),h)return f}return c})},[n,e,t]);const i=p.useCallback(d=>{const c=new Set(a),f=n.includes(d),h=[...e.map(m=>m.key),...t.map(m=>m.key)];f?h.forEach(m=>{const w=`${d}-${m}`;c.delete(w)}):h.forEach(m=>{const w=`${d}-${m}`;c.add(w)}),s(c),o(d)},[a,n,e,t,o]),u=p.useCallback((d,c)=>{const f=`${d}-${c}`;return a.has(f)},[a]);return{expandedCells:a,handleToggleRowExpansion:i,isCellExpanded:u}},Nr=()=>{const e=p.useRef(new Map),t=p.useCallback(n=>o=>{if(!o)return;const a=o.getBoundingClientRect().width;a>0&&e.current.set(n,a)},[]);return{columnWidthsRef:e,setCellRef:t}},Mr=({enabled:e=!1,minWidth:t=50,maxWidth:n=500,columns:o=[],columnWidthsRef:a,onColumnResize:s,initialColumnWidths:i})=>{const[u,d]=p.useState({}),c=p.useRef(o),f=p.useRef(void 0);p.useEffect(()=>{c.current=o},[o]);const h=p.useCallback(y=>{const v=o.find(x=>x.key===y);return{minWidth:(v==null?void 0:v.minWidth)??t,maxWidth:(v==null?void 0:v.maxWidth)??n}},[o,t,n]);p.useEffect(()=>{if(i&&f.current!==i){const v={};Object.entries(i).forEach(([x,k])=>{const b=c.current.find(A=>A.key===x),C=(b==null?void 0:b.minWidth)??t,D=(b==null?void 0:b.maxWidth)??n;v[x]=Math.min(D,Math.max(C,k))}),d(v),f.current=i}},[i,t,n]);const m=p.useCallback(()=>{if(!e||Object.keys(u).length>0||!a)return;const y={};a.current.forEach((v,x)=>{y[x]=v}),d(y)},[e,u,a]),w=p.useCallback(y=>(v,{size:x})=>{if(!e)return;const{minWidth:k,maxWidth:b}=h(y),C=Math.min(b,Math.max(k,x.width));d(D=>({...D,[y]:C}))},[e,h]),R=p.useCallback(y=>()=>{!e||!u[y]||s==null||s(y,u[y])},[e,u,s]);return{columnWidths:u,handleResize:w,handleResizeStop:R,handleResizeStart:m}},Or=(e,t,n,o,a,s,i,u)=>p.useMemo(()=>{if(!e)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};if(!(a+e.clientWidth<i))return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const c=e.getBoundingClientRect(),f=(t==null?void 0:t.offsetHeight)||0,h=n==null?void 0:n.getBoundingClientRect(),m=Math.min(c.bottom,(h==null?void 0:h.bottom)||Number.MAX_SAFE_INTEGER);let w;o&&n&&h?w=h.top-c.top+f:w=f;const R=c.top+w,v=e.scrollWidth>e.clientWidth?e.offsetHeight-e.clientHeight:0,x=m-R-v,b=e.scrollHeight>e.clientHeight?e.offsetWidth-e.clientWidth:0,C=c.right-Yt-b;return{visible:!0,position:{top:R,left:C},size:{width:Yt,height:x}}},[e,t,n,o,a,s,i,u]),Hr=(e,t,n,o,a,s,i,u)=>p.useMemo(()=>{if(!e)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};if(!(t>0))return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const c=e.querySelector('[data-row-index="0"]');if(!c)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const f=Array.from(c.querySelectorAll("[data-pinned-index]"));if(f.length===0)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const h=Math.max(...f.map(W=>parseInt(W.getAttribute("data-pinned-index")||"-1",10)));if(h<0)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const m=f.find(W=>parseInt(W.getAttribute("data-pinned-index")||"-1",10)===h);if(!m)return{visible:!1,position:{top:0,left:0},size:{width:0,height:0}};const w=m.getBoundingClientRect(),R=e.getBoundingClientRect(),y=(n==null?void 0:n.offsetHeight)||0,v=o==null?void 0:o.getBoundingClientRect(),x=w.right,k=Math.min(R.bottom,(v==null?void 0:v.bottom)||Number.MAX_SAFE_INTEGER);let b;a&&o&&v?b=v.top-R.top+y:b=y;const C=R.top+b,A=e.scrollWidth>e.clientWidth?e.offsetHeight-e.clientHeight:0,$=k-C-A;return{visible:!0,position:{top:C,left:x},size:{width:Yt,height:$}}},[e,t,n,o,a,s,i,u]),Wr=({enabled:e,rowCount:t})=>{const n=p.useRef(new Map),o=p.useRef(new Map),a=p.useCallback(d=>c=>{const f=String(d);c?n.current.set(f,c):n.current.delete(f)},[]),s=p.useCallback(d=>c=>{const f=String(d);c?o.current.set(f,c):o.current.delete(f)},[]),i=p.useCallback((d,c)=>{const f=`${d.offsetHeight}px`;c.style.height!==f&&(c.style.height=f)},[]),u=p.useCallback(()=>{n.current.forEach((d,c)=>{const f=o.current.get(c);f&&i(d,f)})},[i]);return p.useEffect(()=>{if(!e)return;const d=new ResizeObserver(c=>{requestAnimationFrame(()=>{c.forEach(f=>{const h=f.target,m=h.dataset.rowId,w=m?o.current.get(m):void 0;w&&i(h,w)})})});return n.current.forEach(c=>d.observe(c)),()=>d.disconnect()},[e,t,i]),p.useLayoutEffect(()=>{e&&u()},[e,t,u]),{setTableRowRef:a,setCheckboxRowRef:s,syncAllHeights:u}},Lr={"resize-handle":"_resize-handle_15uk3_1"},$r=Gt.bind(Lr),Ta=p.forwardRef((e,t)=>r.jsx("div",{ref:t,className:$r("resize-handle"),...e,children:r.jsx(ss,{})}));Ta.__docgenInfo={description:"",methods:[],displayName:"ResizeHandle"};const Fr={"gradient-overlay":"_gradient-overlay_hx7m8_1","direction-right":"_direction-right_hx7m8_5","direction-left":"_direction-left_hx7m8_13"},Br=Gt.bind(Fr),Wn=({portalContainer:e,visible:t,position:n,size:o,direction:a,className:s,dataTestId:i})=>{if(!t||!e)return null;const u={position:"fixed",top:`${n.top}px`,width:`${o.width}px`,height:`${o.height}px`};return n.left!==void 0&&(u.left=`${n.left}px`),n.right!==void 0&&(u.right=`${n.right}px`),Xt.createPortal(r.jsx("div",{className:Br("gradient-overlay",`direction-${a}`,s),style:u,"data-gradient-type":i}),e)},_=Gt.bind(Dr),Ir=({value:e,expanded:t})=>{const{ref:n,title:o}=is(t?void 0:e),a=String(e);return r.jsx("span",{ref:n,title:t?void 0:o,className:_({"primitive-cell-text":!t}),children:a})},Ln=(e,t)=>{if(e==null)return null;let n;if(typeof e=="object"&&("component"in e||"content"in e)){const o=e;if(n=o.component??o.content,n==null)return null}else n=e;return typeof n=="string"||typeof n=="number"?r.jsx(Ir,{value:n,expanded:t}):n},qr=({column:e})=>{const t=p.useRef(null),[n,o]=p.useState(!1);return p.useEffect(()=>{if(t.current){const a=t.current.offsetWidth,s=t.current.scrollWidth;o(s>a)}},[e.header]),r.jsx("span",{ref:t,title:n?e.header:void 0,children:e.header})},N=({data:e,primaryColumn:t,fixedColumns:n,renderRowActions:o,className:a="",wrapperClassName:s="",rowClassName:i="",headerClassName:u="",bodyClassName:d="",checkboxColumnClassName:c="",expandColumnClassName:f="",selectable:h=!1,selectedRowIds:m=[],sortingDirection:w=se,sortingColumn:R,sortableColumns:y,isHeaderFixed:v=!1,isHorizontallyScrollable:x=!1,pinnedColumnKeys:k=[],isRowsExpandable:b=!1,isExpandAllVisible:C=!0,expandedRowIds:D=[],canExpandRow:A=()=>!0,rowExpansionMode:$="cellContent",renderExpandedRow:W,isAllExpandedByDefault:I,expandAllTooltip:Y,sortDisabledColumnTooltips:q,isResizable:X=!1,minColumnWidth:we=50,maxColumnWidth:ke=500,isSelectAllCheckboxAlwaysVisible:on=!1,isCheckboxOutside:M=!1,disabledRowIds:xe,onChangeSorting:Ve=()=>{},onToggleRowSelection:xt=()=>{},onToggleAllRowsSelection:Ea=()=>{},onToggleRowExpansion:za=()=>{},onToggleAllRowsExpansion:_a=()=>{},onColumnResize:Aa=()=>{},getRowCheckboxTooltip:yt=()=>{},externalScrollContainerRef:j,portalContainer:Ue=typeof document<"u"?document.body:null,rightGradientClassName:ja,pinnedGradientClassName:Pa})=>{const ye=p.useMemo(()=>Array.isArray(t)?t:[t],[t]),be=R??ye[0],Ye=y??zr([...ye,...n]),{pinnedColumns:te,scrollableColumns:Se}=Ar({primaryColumns:ye,fixedColumns:n,pinnedColumnKeys:k}),{hoveredColumn:Na,hoveredRow:an,handleColumnMouseEnter:Ma,handleColumnMouseLeave:Oa,handleRowMouseEnter:sn,handleRowMouseLeave:rn}=jr(),{columnWidthsRef:De,setCellRef:ln}=Nr(),Ha=p.useMemo(()=>{const l={};return ye.forEach(g=>{"width"in g&&typeof g.width=="number"&&(l[g.key]=g.width)}),n.forEach(g=>{"width"in g&&typeof g.width=="number"&&(l[g.key]=g.width)}),Object.keys(l).length>0?l:void 0},[ye,n]),{handleToggleRowExpansion:Wa,isCellExpanded:dn}=Pr({primaryColumns:ye,fixedColumns:n,expandedRowIds:D,onToggleRowExpansion:za}),La=p.useMemo(()=>[...te,...Se],[te,Se]),{columnWidths:Xe,handleResize:$a,handleResizeStop:Fa,handleResizeStart:Ba}=Mr({enabled:X,minWidth:we,maxWidth:ke,columns:La,columnWidthsRef:De,onColumnResize:Aa,initialColumnWidths:Ha}),{setTableRowRef:Ia,setCheckboxRowRef:qa}=Wr({enabled:h&&M,rowCount:e.length}),cn=(l,g)=>{const S=l.minWidth??we,E=l.maxWidth??ke;return r.jsx(br,{width:Xe[l.key]??(typeof l.width=="number"?l.width:we),height:0,axis:"x",handle:r.jsx(Ta,{}),onResizeStart:Ba,onResize:$a(l.key),onResizeStop:Fa(l.key),minConstraints:[S,0],maxConstraints:[E,0],className:_("resizable-column"),children:g},l.key)},L=p.useRef(null),re=p.useRef(null),Va=p.useRef(null),Te=p.useRef(null),bt=p.useRef(null),[ce,Ua]=p.useState(!1),Ge=p.useCallback(l=>{const g=re.current;if(g&&g.contains(l))return;const S=l.parentElement;if(!S)return;const E=window.getComputedStyle(S),z=parseFloat(E.paddingTop)||0,P=parseFloat(E.paddingBottom)||0,G=l.offsetHeight+z+P;l.style.setProperty("--expand-cell-top",`${z}px`),l.style.setProperty("--expand-cell-height",`${G}px`)},[]),[un,St]=p.useState(0),[pn,vt]=p.useState(0),[mn,Ct]=p.useState(0),[hn,fn]=p.useState(0),Je=p.useRef(!1),Rt=p.useRef(new Set),Ee=p.useRef(null),kt=Or(L.current,re.current,(j==null?void 0:j.current)instanceof HTMLElement?j.current:null,ce,un,pn,mn,hn),Dt=Hr(L.current,un,re.current,(j==null?void 0:j.current)instanceof HTMLElement?j.current:null,ce,pn,mn,hn),Ya=l=>{Ye.includes(l)&&(q!=null&&q[l]||Ve({key:l,direction:w}))},Xa=l=>Ye.includes(l)?(be==null?void 0:be.key)===l?ct(w)?r.jsx(En,{}):r.jsx(rs,{}):r.jsx(En,{}):null,gn=(l,g)=>{const S=q==null?void 0:q[g],E=r.jsxs("div",{className:_("label",{"sort-disabled":!!S}),onClick:()=>Ya(g),onMouseEnter:()=>Ma(g),onMouseLeave:Oa,children:[r.jsx(qr,{column:l}),(Na===g||(be==null?void 0:be.key)===g)&&Xa(g)]});return S?r.jsx(Nt,{content:S,placement:"top",dynamicWidth:!0,portalRoot:Ue??void 0,wrapperClassName:_("sort-disabled-tooltip-wrapper"),wrapperTabIndex:-1,children:E}):E},Ga=l=>{xt(l)},wn=()=>{Ea()},Tt=b?e.filter(A):[],xn=Tt.length>0,Ja=()=>{_a(Tt.map(l=>l.id))},Et=l=>(xe==null?void 0:xe.includes(l))??!1,yn=e.every(l=>Et(l.id)||m.includes(l.id)),zt=e.some(l=>!Et(l.id)&&m.includes(l.id)),_t=(m==null?void 0:m.length)>0,Ka=!ls(e),bn=on&&Ka||_t,At=$==="detail",Qa=xn&&Tt.every(l=>D.includes(l.id)),Za=I!==void 0?I:Qa,jt=Hn(te,Se,b,h,!!o,!1,X?Xe:void 0,X,M),es=Hn(te,Se,b,h,!!o,!0,X?Xe:void 0,X,M),Sn=h&&!M,ts=Sn?`${me}px ${jt}`:jt,vn=r.jsx("button",{onClick:Ja,"aria-label":"Toggle all rows expansion",children:r.jsx("span",{className:_("expand-icon",{expanded:Za}),children:r.jsx(zn,{})})});p.useEffect(()=>{if(!(j!=null&&j.current)||!L.current||!re.current)return;const l=j.current,g=L.current,S=re.current,E=bt.current,z=()=>{const H=g.getBoundingClientRect(),G=l.getBoundingClientRect(),ue=S.offsetHeight,ie=H.top-G.top,Ke=H.bottom-G.top,Dn=l.scrollTop>0&&ie<=0&&Ke>ue;if(Ua(Dn),Dn){const Qe=H.left,Tn=G.top;S.classList.add(_("pinned-header")),x&&(S.style.overflow="hidden",S.style.overflowX="hidden"),S.style.left=`${Qe}px`,S.style.top=`${Tn}px`,S.style.width=`${H.width}px`,E&&M&&(E.style.top=`${Tn}px`)}else{const Qe=g.scrollLeft;Je.current=!0,S.classList.remove(_("pinned-header")),x&&(S.scrollLeft=0),S.style.left="",S.style.top="",S.style.width="",x&&(S.style.overflow="",S.style.overflowX=""),E&&M&&(E.style.top="",E.classList.remove(_("pinned-header"))),x&&Qe>0?requestAnimationFrame(()=>{g.scrollLeft=Qe,setTimeout(()=>{Je.current=!1},0)}):Je.current=!1}},P=requestAnimationFrame(()=>{z()});return l.addEventListener("scroll",z),window.addEventListener("resize",z),()=>{cancelAnimationFrame(P),l.removeEventListener("scroll",z),window.removeEventListener("resize",z)}},[j,x,M]),p.useEffect(()=>{if(!(j!=null&&j.current)||!L.current||!re.current||!ce)return;const l=j.current,g=L.current,S=re.current,E=bt.current,z=()=>{const ie=g.getBoundingClientRect(),Ke=l.getBoundingClientRect();S.style.left=`${ie.left}px`,S.style.top=`${Ke.top}px`,S.style.width=`${ie.width}px`,E&&M&&(E.style.top=`${Ke.top}px`)},P=ie=>{Je.current||(ie===S?g.scrollLeft=S.scrollLeft:S.scrollLeft=g.scrollLeft,Ee.current&&Ee.current())},H=()=>{P(g),z()},G=()=>{P(S)},ue=()=>{z()};return g.addEventListener("scroll",H),x&&S.addEventListener("scroll",G),l.addEventListener("scroll",ue),window.addEventListener("resize",z),P(g),z(),()=>{g.removeEventListener("scroll",H),x&&S.removeEventListener("scroll",G),l.removeEventListener("scroll",ue),window.removeEventListener("resize",z)}},[ce,j,x,M]),p.useEffect(()=>{if(!L.current||!x)return;const l=L.current,g=j==null?void 0:j.current;St(l.scrollLeft),vt((g==null?void 0:g.scrollTop)||l.scrollTop||0),Ct(l.scrollWidth);const S=()=>{l&&(St(l.scrollLeft),vt((g==null?void 0:g.scrollTop)||l.scrollTop||0),Ct(l.scrollWidth))};let E=null;const z=()=>{E===null&&(E=requestAnimationFrame(()=>{S(),E=null}))},P=()=>{z()},H=()=>{z()};l.addEventListener("scroll",P,{passive:!0}),g&&g.addEventListener("scroll",H,{passive:!0});const G=()=>{S(),fn(ie=>ie+1)};window.addEventListener("resize",G),Ee.current=S,S();const ue=new ResizeObserver(()=>{S()});return l&&ue.observe(l),()=>{l.removeEventListener("scroll",P),g&&g.removeEventListener("scroll",H),window.removeEventListener("resize",G),ue.disconnect(),E!==null&&(cancelAnimationFrame(E),E=null)}},[x,j,ce,D]),p.useEffect(()=>{if(!L.current||!x)return;const l=L.current,g=j==null?void 0:j.current;requestAnimationFrame(()=>{l&&(St(l.scrollLeft),vt((g==null?void 0:g.scrollTop)||l.scrollTop||0),Ct(l.scrollWidth),Ee.current&&Ee.current())})},[Xe,x,j]),p.useEffect(()=>{if(!L.current)return;const l=L.current,g=()=>{Array.from(l.querySelectorAll('[data-base-left="0"]')).forEach(Ge)};requestAnimationFrame(()=>{g()})},[b,e,Ge]),p.useEffect(()=>{if(!L.current)return;const l=L.current,g=new Set(D),S=Rt.current,E=new Set;if(D.forEach(P=>{S.has(P)||E.add(P)}),S.forEach(P=>{g.has(P)||E.add(P)}),E.size===0){Rt.current=g;return}const z=setTimeout(()=>{E.forEach(P=>{const H=l.querySelector(`[data-base-left="0"][data-row-id="${P}"]`);H&&Ge(H)}),fn(P=>P+1)},0);return Rt.current=g,()=>clearTimeout(z)},[b,D,Ge]),p.useEffect(()=>{if(!Te.current||!L.current||!M)return;const l=Te.current,g=L.current,S=()=>{requestAnimationFrame(()=>{l.scrollTop=g.scrollTop})};return g.addEventListener("scroll",S),()=>{g.removeEventListener("scroll",S)}},[e,M]),p.useLayoutEffect(()=>{if(!L.current||!Te.current)return;const l=L.current,g=Te.current,S=()=>{const z=`${l.clientHeight}px`;g.style.height!==z&&(g.style.height=z)};S();const E=new ResizeObserver(()=>{requestAnimationFrame(S)});return E.observe(l),()=>E.disconnect()},[]);const Cn=l=>{const g=Et(l.id),S=yt==null?void 0:yt(l.id),E=r.jsx(Pt,{value:m.includes(l.id),disabled:g,onChange:()=>Ga(l.id),className:_("checkbox-cell")});return S?r.jsx(Nt,{content:S,placement:"top",wrapperClassName:_("checkbox-tooltip-wrapper"),portalRoot:Ue??void 0,children:E}):E},Rn=_("checkbox-cell","select-all-checkbox",{"select-all-checkbox-selected":zt}),ns=()=>r.jsxs("div",{className:_("checkbox-column",c),ref:Te,children:[r.jsx("div",{ref:bt,className:_("table-header","checkbox-header",{"pinned-header":ce},u),children:bn&&r.jsx(Pt,{value:yn,partiallyChecked:zt,onChange:wn,className:Rn})}),r.jsx("div",{className:_("checkbox-body",d),children:e.map((l,g)=>r.jsx("div",{ref:qa(l.id),className:_("checkbox-row","table-row",On(l),i),onMouseEnter:()=>sn(g),onMouseLeave:rn,children:(_t||an===g)&&Cn(l)},l.id))})]}),kn=()=>r.jsxs("div",{ref:L,className:_("table",{"fixed-header":v,"horizontally-scrollable-container":v&&(x||X),"external-scroll-container":v&&!!j},a),children:[r.jsxs("div",{ref:re,className:_("table-header",{"sticky-header":v&&!ce,"horizontally-scrollable":x,resizable:X},u),style:{gridTemplateColumns:es},children:[h&&!M&&r.jsx("div",{className:_("table-header-cell","checkbox-cell"),"data-base-left":b?me:0,children:bn&&r.jsx(Pt,{value:yn,partiallyChecked:zt,onChange:wn,className:Rn})}),b&&r.jsx("div",{className:_("table-header-cell","expand-cell","left-border-accent",f),"data-base-left":"0",children:C&&xn&&(Y?r.jsx(Nt,{content:Y,placement:"top",wrapperClassName:_("expand-all-tooltip-wrapper"),contentClassName:_("expand-all-tooltip-content"),children:vn}):vn)}),te.map((l,g)=>{const S=r.jsx("button",{"data-column-key":l.key,"data-pinned-index":g,"aria-disabled":!!(q!=null&&q[l.key]),className:_("table-header-cell","pinned-column",{[`align-${l.align}`]:"align"in l,"primary-cell":pe(l),"sortable-cell":Ye.includes(l.key),resizable:X}),style:et(l,!0,g,te,De,b,h,M),children:gn(l,l.key)},l.key);return X?cn(l,S):S}),Se.map(l=>{const g=r.jsx("button",{"aria-disabled":!!(q!=null&&q[l.key]),className:_("table-header-cell",{[`align-${l.align}`]:"align"in l,"primary-cell":pe(l),"sortable-cell":Ye.includes(l.key),resizable:X}),style:et(l,!1,void 0,te,De,b,h,M),children:gn(l,l.key)},l.key);return X?cn(l,g):g}),o&&r.jsx("div",{className:_("table-header-cell","action-menu-cell")})]}),r.jsx("div",{ref:Va,className:_("table-body",{"scrollable-body":v,"horizontally-scrollable":x,resizable:X},d),children:e.map((l,g)=>{const S=b&&A(l),E=S&&D.includes(l.id);return r.jsxs(p.Fragment,{children:[r.jsxs("div",{"data-row-index":g,"data-row-id":l.id,ref:Ia(l.id),className:_("table-row",On(l),i,{selectable:h&&!M}),onMouseEnter:()=>sn(g),onMouseLeave:rn,children:[h&&!M&&r.jsx("div",{className:_("table-cell","checkbox-cell"),"data-base-left":b?me:0,children:(_t||an===g)&&Cn(l)}),r.jsx("div",{className:_("row-content-wrapper"),children:r.jsxs("div",{className:_("table-row-content"),style:{gridTemplateColumns:jt},children:[b&&r.jsx("div",{className:_("table-cell","expand-cell","left-border-accent",f),"data-base-left":"0","data-row-id":l.id,children:S&&r.jsx("button",{onClick:()=>Wa(l.id),"aria-label":E?"Collapse row":"Expand row","aria-expanded":E,children:r.jsx("span",{className:_("expand-icon",{expanded:E}),children:r.jsx(zn,{})})})}),te.map((z,P)=>{const H=!At&&dn(l.id,z.key),G=pe(z);return r.jsx("div",{"data-column-key":z.key,"data-pinned-index":P,ref:G?ln(z.key):void 0,className:_("table-cell","pinned-column",{"primary-cell":G,"expanded-cell":H}),style:et(z,!0,P,te,De,b,h,M),children:Ln(l[z.key],H)},z.key)}),Se.map(z=>{const P=!At&&dn(l.id,z.key),H=pe(z);return r.jsx("div",{ref:H?ln(z.key):void 0,className:_("table-cell",{"primary-cell":H,"expanded-cell":P}),style:et(z,!1,void 0,te,De,b,h,M),children:Ln(l[z.key],P)},z.key)}),o&&r.jsx("div",{className:_("table-cell","action-menu-cell"),children:o(l.metaData)})]})})]}),E&&At&&W&&r.jsx("div",{className:_("expanded-content-row",{"with-checkbox-track":Sn}),"data-expanded-row-for":l.id,style:{gridTemplateColumns:ts},children:r.jsx("div",{className:_("expanded-content-cell"),children:W(l)})})]},l.id)})}),x&&r.jsxs(r.Fragment,{children:[r.jsx(Wn,{portalContainer:Ue,visible:kt.visible,position:kt.position,size:kt.size,direction:"right",className:ja,dataTestId:"right-gradient"}),r.jsx(Wn,{portalContainer:Ue,visible:Dt.visible,position:Dt.position,size:Dt.size,direction:"left",className:Pa,dataTestId:"pinned-gradient"})]})]});return M?r.jsxs("div",{className:_("table-wrapper",{"fixed-header":v},s),children:[ns(),kn()]}):kn()};N.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"RowData"}],raw:"RowData[]"},description:""},primaryColumn:{required:!0,tsType:{name:"union",raw:"Column | Column[]",elements:[{name:"Column"},{name:"Array",elements:[{name:"Column"}],raw:"Column[]"}]},description:""},fixedColumns:{required:!0,tsType:{name:"Array",elements:[{name:"FixedColumn"}],raw:"FixedColumn[]"},description:""},renderRowActions:{required:!1,tsType:{name:"signature",type:"function",raw:"(metaData?: MetaData) => ReactNode",signature:{arguments:[{type:{name:"MetaData"},name:"metaData"}],return:{name:"ReactNode"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isCheckboxOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},wrapperClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},headerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},bodyClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rowClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},checkboxColumnClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},expandColumnClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortingDirection:{required:!1,tsType:{name:"union",raw:"typeof ASC | typeof DESC | Uppercase<typeof ASC | typeof DESC>",elements:[{name:"ASC"},{name:"DESC"},{name:"Uppercase",elements:[{name:"union",raw:"typeof ASC | typeof DESC",elements:[{name:"ASC"},{name:"DESC"}]}],raw:"Uppercase<typeof ASC | typeof DESC>"}]},description:"",defaultValue:{value:"'asc'",computed:!1}},sortingColumn:{required:!1,tsType:{name:"Column"},description:""},sortableColumns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isHeaderFixed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHorizontallyScrollable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pinnedColumnKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},isRowsExpandable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isExpandAllVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},expandedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},canExpandRow:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: RowData) => boolean",signature:{arguments:[{type:{name:"RowData"},name:"row"}],return:{name:"boolean"}}},description:"",defaultValue:{value:"() => true",computed:!1}},rowExpansionMode:{required:!1,tsType:{name:"union",raw:"'cellContent' | 'detail'",elements:[{name:"literal",value:"'cellContent'"},{name:"literal",value:"'detail'"}]},description:"",defaultValue:{value:"'cellContent'",computed:!1}},renderExpandedRow:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: RowData) => ReactNode",signature:{arguments:[{type:{name:"RowData"},name:"row"}],return:{name:"ReactNode"}}},description:""},isSelectAllCheckboxAlwaysVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabledRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:""},setExpandedRowIds:{required:!1,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Set",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Set<string | number>"}],raw:"SetStateAction<Set<string | number>>"}],raw:"Dispatch<SetStateAction<Set<string | number>>>"},description:""},isAllExpandedByDefault:{required:!1,tsType:{name:"boolean"},description:""},expandAllTooltip:{required:!1,tsType:{name:"ReactNode"},description:""},sortDisabledColumnTooltips:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"ReactNode"}],raw:"Record<string, ReactNode>"},description:""},isResizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},minColumnWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},maxColumnWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"500",computed:!1}},onChangeSorting:{required:!1,tsType:{name:"signature",type:"function",raw:"(sortConfig?: SortConfig) => void",signature:{arguments:[{type:{name:"SortConfig"},name:"sortConfig"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsSelection:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleRowExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onToggleAllRowsExpansion:{required:!1,tsType:{name:"signature",type:"function",raw:"(expandableRowIds: (string | number)[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},name:"expandableRowIds"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onColumnResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnKey: string, width: number) => void",signature:{arguments:[{type:{name:"string"},name:"columnKey"},{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},getRowCheckboxTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(rowId: string | number) => ReactNode",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"rowId"}],return:{name:"ReactNode"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},externalScrollContainerRef:{required:!1,tsType:{name:"union",raw:"RefObject<HTMLElement> | RefObject<Element> | null | undefined",elements:[{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},{name:"RefObject",elements:[{name:"Element"}],raw:"RefObject<Element>"},{name:"null"},{name:"undefined"}]},description:""},portalContainer:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:"",defaultValue:{value:"typeof document !== 'undefined' ? document.body : null",computed:!1}},rightGradientClassName:{required:!1,tsType:{name:"string"},description:""},pinnedGradientClassName:{required:!1,tsType:{name:"string"},description:""}}};const wi={title:"Tables & Lists/Table",component:N,parameters:{layout:"centered",docs:{description:{component:"\nA flexible table component with support for:\n- **Row sizes**: Configure via `rowConfigs: { size: 'small' | 'medium' | 'large' }` in row data\n- **Expandable rows**: Enable with `isRowsExpandable` prop\n- **Pinned columns**: Use `pinnedColumnKeys` to pin columns to the left\n- **Sorting**: Configure with `sortableColumns`, `sortingColumn`, `sortingDirection`\n- **Disabled sort tooltips**: Use `sortDisabledColumnTooltips` to show a tooltip and block sorting for specific columns\n- **Selection**: Enable with `selectable` prop\n- **Custom cell content**: Use `DetailedCellData` with `content` and `component` properties\n        "}}},tags:["autodocs"],argTypes:{data:{description:"Array of row data. Each row should have an `id` and can include `rowConfigs` for size configuration.",table:{type:{summary:"RowData[]"}}},primaryColumn:{description:"The main column configuration (typically the name/title column).",table:{type:{summary:"Column | Column[]"}}},fixedColumns:{description:"Array of fixed-width columns with optional alignment.",table:{type:{summary:"FixedColumn[]"}}},selectable:{description:"Enable row selection with checkboxes.",control:"boolean",table:{defaultValue:{summary:"false"}}},isRowsExpandable:{description:"Enable expand/collapse functionality for row cells or detail content.",control:"boolean",table:{defaultValue:{summary:"false"}}},isExpandAllVisible:{description:"Show the expand-all control in the table header.",control:"boolean",table:{defaultValue:{summary:"true"}}},rowExpansionMode:{description:'Which expansion behavior a row uses: "cellContent" un-truncates long cell text, "detail" renders full-width content below the row via renderExpandedRow.',control:"radio",options:["cellContent","detail"],table:{defaultValue:{summary:"cellContent"}}},canExpandRow:{description:"Determine whether an individual row can be expanded.",table:{type:{summary:"(row: RowData) => boolean"}}},renderExpandedRow:{description:'Render full-width detail content below an expanded row (mode "detail" only).',table:{type:{summary:"(row: RowData) => ReactNode"}}},expandedRowIds:{description:"Array of row IDs that are currently expanded.",table:{type:{summary:"(string | number)[]"}}},isAllExpandedByDefault:{description:"Whether all rows should be expanded by default.",control:"boolean",table:{defaultValue:{summary:"false"}}},expandAllTooltip:{description:"Tooltip text for the expand all button.",table:{type:{summary:"ReactNode"}}},sortDisabledColumnTooltips:{description:"Tooltips for sortable column headers where sorting is disabled. Sort clicks are ignored for matching column keys.",table:{type:{summary:"Record<string, ReactNode>"}}},pinnedColumnKeys:{description:"Array of column keys to pin to the left side of the table.",table:{type:{summary:"string[]"}}},sortableColumns:{description:"Array of column keys that can be sorted.",table:{type:{summary:"string[]"}}},sortingColumn:{description:"Currently sorted column.",table:{type:{summary:"Column"}}},sortingDirection:{description:"Current sorting direction.",control:"select",options:["ASC","DESC"],table:{type:{summary:"'ASC' | 'DESC'"}}},isHeaderFixed:{description:"Keep the header fixed when scrolling vertically.",control:"boolean",table:{defaultValue:{summary:"false"}}},isHorizontallyScrollable:{description:"Enable horizontal scrolling for wide tables.",control:"boolean",table:{defaultValue:{summary:"false"}}},className:{description:"Custom CSS class for the table container.",table:{type:{summary:"string"}}},headerClassName:{description:"Custom CSS class for the table header. Use this to customize header background, borders, etc.",table:{type:{summary:"string"}}},bodyClassName:{description:"Custom CSS class for the table body. Use this to customize row gap, padding, etc.",table:{type:{summary:"string"}}},rowClassName:{description:"Custom CSS class for table rows.",table:{type:{summary:"string"}}},onToggleRowExpansion:{description:"Callback when a row is expanded/collapsed.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsExpansion:{description:"Callback when the expand-all control is toggled. Receives the ids of the currently expandable rows (respecting canExpandRow), so a controlled parent can toggle exactly the eligible set.",table:{type:{summary:"(expandableRowIds: (string | number)[]) => void"}}},onToggleRowSelection:{description:"Callback when a row is selected/deselected.",table:{type:{summary:"(id: string | number) => void"}}},onToggleAllRowsSelection:{description:"Callback when all rows are selected/deselected.",table:{type:{summary:"() => void"}}},onChangeSorting:{description:"Callback when sorting changes.",table:{type:{summary:"(sortConfig?: SortConfig) => void"}}},renderRowActions:{description:"Function to render action menu for each row.",table:{type:{summary:"(metaData?: MetaData) => ReactNode"}}}},args:{selectable:!0}},ee=()=>r.jsx(ds,{items:[{label:"Edit"},{label:"Rename"},{type:"divider"},{label:"Delete"}],placement:"bottom-end"}),he=[{id:1,name:{content:"Sam",component:r.jsx("a",{href:"https://example.com/profile/sam",style:{color:"inherit",textDecoration:"none"},children:"Sam"})},age:25,city:"New York"},{name:"Anna",age:3,city:"New York1",id:2},{name:"Mike",age:30,city:"Los Angeles",config:{size:"small"},id:3}],B=[{key:"name",header:"Name"}],fe=[{key:"age",header:"Age",align:"right",width:100},{key:"city",header:"City",width:150}],tt={render:e=>{const[t,n]=p.useState({key:B[0].key,direction:se}),[o,a]=p.useState(B[0]),[s,i]=p.useState(se),u=Ce(he,t),[d,c]=p.useState(u),[f,h]=p.useState(new Set([]));return p.useEffect(()=>{const{key:m,direction:w}=t,R=[...fe,...B].find(y=>y.key===m);i(w),a(R)},[t]),r.jsx("div",{style:{minWidth:"700px"},children:r.jsx(N,{...e,primaryColumn:B,data:d,sortableColumns:[B[0].key],onChangeSorting:(m=t)=>{let{direction:w}=m;const{key:R}=m;w=nn(w);const y=Ce(d,{key:R,direction:w});n({key:R,direction:w}),c(y)},onToggleRowSelection:m=>{const w=new Set(f);w.has(m)?w.delete(m):w.add(m),h(w)},onToggleAllRowsSelection:()=>{if(f.size===he.length)h(new Set);else{const m=new Set(he.map(w=>w.id));h(m)}},selectedRowIds:[...f],sortingColumn:o,sortingDirection:s})})},args:{fixedColumns:fe,renderRowActions:ee,selectable:!0}},nt={render:()=>{const e=fe[0],t="Sorting is unavailable in 'Latest executions only' view.";return r.jsxs("div",{style:{minWidth:"500px"},children:[r.jsxs("p",{style:{margin:"0 0 12px",fontSize:"13px",color:"#8d95a1"},children:["Only the ",r.jsx("strong",{children:"Age"})," column shows a sort icon (DESC). Hover it for the tooltip; clicking does not change sorting. Other columns have no sort affordance."]}),r.jsx(N,{primaryColumn:B,fixedColumns:fe,data:he,sortableColumns:[e.key],sortDisabledColumnTooltips:{[e.key]:t},sortingColumn:e,sortingDirection:"DESC",onChangeSorting:()=>{}})]})}},Q=[{id:1,name:"John Doe",email:"john.doe@example.com",phone:"+1-555-123-4567",address:"123 Main Street, New York, NY 10001",department:"Engineering",role:"Senior Software Engineer",salary:"$120,000",startDate:"2020-01-15",status:"Active",manager:"Jane Smith",projects:"Project Alpha, Project Beta",rowConfigs:{size:"small"}},{id:2,name:"Jane Smith",email:"jane.smith@example.com",phone:"+1-555-987-6543",address:"456 Oak Avenue, Los Angeles, CA 90210",department:"Marketing",role:"Marketing Director",salary:"$95,000",startDate:"2019-03-20",status:"Active",manager:"Robert Johnson",projects:"Campaign X, Campaign Y",rowConfigs:{size:"small"}},{id:3,name:"Mike Wilson",email:"mike.wilson@example.com",phone:"+1-555-456-7890",address:"789 Pine Road, Chicago, IL 60601",department:"Sales",role:"Sales Representative",salary:"$75,000",startDate:"2021-06-10",status:"Active",manager:"Sarah Davis",projects:"Client Onboarding, Lead Generation",rowConfigs:{size:"small"}},{id:4,name:"Sarah Davis",email:"sarah.davis@example.com",phone:"+1-555-234-5678",address:"321 Elm Street, Houston, TX 77001",department:"HR",role:"HR Manager",salary:"$85,000",startDate:"2018-09-12",status:"Active",manager:"Michael Brown",projects:"Employee Onboarding, Policy Updates",rowConfigs:{size:"small"}},{id:5,name:"Robert Johnson",email:"robert.johnson@example.com",phone:"+1-555-345-6789",address:"654 Maple Drive, Phoenix, AZ 85001",department:"Finance",role:"Financial Analyst",salary:"$78,000",startDate:"2020-11-08",status:"Active",manager:"Emily White",projects:"Budget Planning, Cost Analysis",rowConfigs:{size:"small"}},{id:6,name:"Emily White",email:"emily.white@example.com",phone:"+1-555-456-7891",address:"987 Cedar Lane, Philadelphia, PA 19101",department:"Operations",role:"Operations Manager",salary:"$110,000",startDate:"2017-05-22",status:"Active",manager:"David Green",projects:"Process Optimization, Quality Control",rowConfigs:{size:"small"}},{id:7,name:"David Green",email:"david.green@example.com",phone:"+1-555-567-8901",address:"147 Birch Avenue, San Antonio, TX 78201",department:"Engineering",role:"Lead Developer",salary:"$135,000",startDate:"2016-02-14",status:"Active",manager:"Lisa Thompson",projects:"Architecture Review, Team Mentoring",rowConfigs:{size:"small"}},{id:8,name:"Lisa Thompson",email:"lisa.thompson@example.com",phone:"+1-555-678-9012",address:"258 Spruce Court, San Diego, CA 92101",department:"Product",role:"Product Manager",salary:"$105,000",startDate:"2019-08-30",status:"Active",manager:"Tom Anderson",projects:"Feature Planning, User Research",rowConfigs:{size:"small"}},{id:9,name:"Tom Anderson",email:"tom.anderson@example.com",phone:"+1-555-789-0123",address:"369 Willow Street, Dallas, TX 75201",department:"Design",role:"UX Designer",salary:"$88,000",startDate:"2021-01-18",status:"Active",manager:"Anna Martinez",projects:"UI Redesign, User Testing",rowConfigs:{size:"small"}},{id:10,name:"Anna Martinez",email:"anna.martinez@example.com",phone:"+1-555-890-1234",address:"741 Poplar Boulevard, San Jose, CA 95101",department:"QA",role:"QA Engineer",salary:"$82,000",startDate:"2020-07-25",status:"Active",manager:"John Doe",projects:"Automation Testing, Bug Tracking",rowConfigs:{size:"small"}}],ae=[{key:"name",header:"Full Name"}],Re=[{key:"email",header:"Email Address",width:200},{key:"phone",header:"Phone Number",width:150},{key:"address",header:"Address",width:250},{key:"department",header:"Department",width:120},{key:"role",header:"Job Role",width:180},{key:"salary",header:"Salary",width:100},{key:"startDate",header:"Start Date",width:120},{key:"status",header:"Status",width:100},{key:"manager",header:"Manager",width:150},{key:"projects",header:"Current Projects",width:200}],Vr=e=>{const t=["John","Jane","Mike","Sarah","David","Emma","Chris","Lisa","Tom","Anna"],n=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose"],o=["Engineering","Marketing","Sales","HR","Finance","Operations","Design","Product","Legal","Support"];return Array.from({length:e},(a,s)=>({id:s+1,name:`${t[s%t.length]} ${s+1}`,age:22+s%40,city:n[s%n.length],department:o[s%o.length],email:`user${s+1}@example.com`,salary:`$${(5e4+s*1e3%1e5).toLocaleString()}`}))},Be=Vr(50),ut=[{key:"age",header:"Age",width:80,align:"right"},{key:"city",header:"City",width:120},{key:"department",header:"Department",width:120},{key:"email",header:"Email",width:200},{key:"salary",header:"Salary",width:100,align:"right"}],ot={render:e=>{const[t,n]=p.useState({key:B[0].key,direction:se}),[o,a]=p.useState(B[0]),[s,i]=p.useState(se),u=Ce(Be,t),[d,c]=p.useState(u),[f,h]=p.useState(new Set([]));return p.useEffect(()=>{const{key:m,direction:w}=t,R=[...ut,...B].find(y=>y.key===m);i(w),a(R)},[t]),r.jsxs("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Fixed Header Table with Scrollable Body"}),r.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",overflow:"auto"},children:r.jsx(N,{...e,data:d,primaryColumn:B,fixedColumns:ut,isHeaderFixed:!0,sortableColumns:[B[0].key,"age","department"],onChangeSorting:(m=t)=>{let{direction:w}=m;const{key:R}=m;w=nn(w);const y=Ce(d,{key:R,direction:w});n({key:R,direction:w}),c(y)},onToggleRowSelection:m=>{const w=new Set(f);w.has(m)?w.delete(m):w.add(m),h(w)},onToggleAllRowsSelection:()=>{if(f.size===Be.length)h(new Set);else{const m=new Set(Be.map(w=>w.id));h(m)}},selectedRowIds:[...f],sortingColumn:o,sortingDirection:s})})]})},args:{selectable:!0,renderRowActions:ee}},at={render:e=>r.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Fixed Header + Horizontal Scroll: Both scrollbars visible when needed"}),r.jsx("div",{className:"storybook-table-wrapper",style:{height:"calc(100% - 50px)",position:"relative"},children:r.jsx(N,{...e,data:Q,primaryColumn:ae,fixedColumns:Re,isHorizontallyScrollable:!0,isHeaderFixed:!0})})]}),args:{selectable:!1,renderRowActions:ee}},st={render:e=>{const[t,n]=p.useState(new Set([]));return r.jsxs("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Pinned Columns + Fixed Header: Name and Email pinned with vertical and horizontal scrolling"}),r.jsx("div",{className:"storybook-table-wrapper",style:{width:"550px",height:"calc(100% - 50px)",position:"relative"},children:r.jsx(N,{...e,data:Q,primaryColumn:ae,fixedColumns:Re,isHorizontallyScrollable:!0,isHeaderFixed:!0,pinnedColumnKeys:["name","email","department"],onToggleRowSelection:o=>{const a=new Set(t);a.has(o)?a.delete(o):a.add(o),n(a)},onToggleAllRowsSelection:()=>{if(t.size===Q.length)n(new Set);else{const o=new Set(Q.map(a=>a.id));n(o)}},selectedRowIds:[...t]})})]})},args:{selectable:!0,renderRowActions:ee}},rt={render:e=>{const[t,n]=p.useState(new Set([1])),[o,a]=p.useState(new Set([])),s=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"sam.johnson@example.com"},{id:2,name:"Anna Smith",age:32,city:"San Francisco",department:"Design",email:"anna.smith@example.com"},{id:3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",email:"mike.davis@example.com"},{id:4,name:"Sarah Wilson",age:35,city:"Chicago",department:"Sales",email:"sarah.wilson@example.com"}],i=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:100},{key:"city",header:"City",width:100}],u=[{key:"name",header:"Name"}];return r.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows Example"}),r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"Click the expand/collapse icons to view detailed information for each row. Rows can be expanded and collapsed independently."}),r.jsx(N,{...e,data:s,primaryColumn:u,fixedColumns:i,isRowsExpandable:!0,selectable:!0,rowExpansionMode:"detail",expandedRowIds:[...t],setExpandedRowIds:n,renderExpandedRow:d=>r.jsxs("div",{style:{padding:"16px",borderRadius:"4px",background:"var(--rp-ui-base-bg-100)"},children:["Contact: ",d.email]}),onToggleRowExpansion:d=>{const c=new Set(t);c.has(d)?c.delete(d):c.add(d),n(c)},onToggleAllRowsExpansion:d=>{const c=d.every(f=>t.has(f));n(c?new Set:new Set(d))},selectedRowIds:[...o],onToggleRowSelection:d=>{const c=new Set(o);c.has(d)?c.delete(d):c.add(d),a(c)},onToggleAllRowsSelection:()=>{if(o.size===s.length)a(new Set);else{const d=new Set(s.map(c=>c.id));a(d)}}})]})},args:{selectable:!0}},it={render:e=>{const[t,n]=p.useState(new Set([1,2,3,4])),[o,a]=p.useState(!0),[s,i]=p.useState(new Set([])),u=[{id:1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",email:"anna.smith@example.com"},{id:2,name:"Mike Davis",age:32,city:"San Francisco",department:"Design",email:"mike.davis@example.com"},{id:3,name:"Sarah Wilson",age:28,city:"Los Angeles",department:"Marketing",email:"sarah.wilson@example.com"},{id:4,name:"John Brown",age:35,city:"Chicago",department:"Sales",email:"john.brown@example.com"}],d=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],c=[{key:"name",header:"Name"}],f=o?"Expanded by default":"Collapsed by default";return r.jsxs("div",{style:{minWidth:"800px",maxWidth:"1300px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Expandable Rows with Default State"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Demonstrates ",r.jsx("strong",{children:"isAllExpandedByDefault"})," and ",r.jsx("strong",{children:"expandAllTooltip"})," ","props. The expandAll icon shows the default state regardless of individual row states. Hover over the expandAll icon to see the tooltip."]}),r.jsx(N,{...e,data:u,primaryColumn:c,fixedColumns:d,isRowsExpandable:!0,selectable:!0,expandedRowIds:[...t],isAllExpandedByDefault:o,expandAllTooltip:f,onToggleRowExpansion:h=>{const m=new Set(t);m.has(h)?m.delete(h):m.add(h),n(m)},onToggleAllRowsExpansion:()=>{const h=!o;a(h),n(h?new Set(u.map(m=>m.id)):new Set)},selectedRowIds:[...s],onToggleRowSelection:h=>{const m=new Set(s);m.has(h)?m.delete(h):m.add(h),i(m)},onToggleAllRowsSelection:()=>{if(s.size===u.length)i(new Set);else{const h=new Set(u.map(m=>m.id));i(h)}}})]})},args:{selectable:!0}},Ft=[{id:1,name:"John Alexander Maximilian Winchester-Blackwood III",description:"This is long text but anyway no matter ellipsed or opened it should not overcome his width it can be brake. When you click on this cell, it will expand to show the full content without ellipsis truncation, and the text should wrap properly within the cell boundaries without breaking the table layout.",shortText:"Brief note",longTitle:"Senior Vice President of Engineering and Technology Development for Enterprise Solutions and Digital Transformation Initiatives",email:"john.alexander.maximilian.winchester.blackwood.third@very-long-company-name-example.com",notes:"This is a comprehensive test of how the table handles extremely long content that would normally break layouts. The content should be properly contained within cell boundaries."},{id:2,name:"Maria Elena Rodriguez-Martinez",description:"Another extremely lengthy description that showcases the cell expansion capabilities. This description contains detailed information about the person, their role, responsibilities, and achievements. The purpose is to demonstrate how users can easily expand cells to read full content when the default view shows only a truncated version with ellipsis.",shortText:"Quick summary here",longTitle:"Chief Marketing Officer and Head of Brand Strategy for Global Markets and Customer Experience Enhancement",email:"maria.elena.rodriguez.martinez@another-extremely-long-domain-name.example.org",notes:"Testing various content lengths and how they behave in both collapsed and expanded states. The text should wrap appropriately without overflowing."},{id:3,name:"Robert James Thompson",description:"A comprehensive description that tests the expand functionality with moderate length content. This shows how the feature works with different content lengths and provides a good example of real-world usage.",shortText:"Standard",longTitle:"Director of Operations",email:"robert.thompson@company.com",notes:"Short note about this person and their current projects."},{id:4,name:"Dr. Elizabeth Catherine Pemberton-Williams, PhD, MBA, CISSP",description:"This cell contains an exceptionally detailed description that really pushes the limits of what might be considered reasonable content length. It includes professional background, educational achievements, current responsibilities, ongoing projects, future goals, and various other details that would typically require a much larger display area.",shortText:"Complex background",longTitle:"Chief Technology Officer and Principal Software Architect for Distributed Systems and Cloud Infrastructure with specialization in Cybersecurity and Data Analytics",email:"dr.elizabeth.catherine.pemberton.williams.phd.mba.cissp@enterprise-solutions-technology-consulting.example.net",notes:"Comprehensive notes about professional achievements, certifications, ongoing projects, and future development plans. This tests the maximum reasonable content length."}],Ur=[{key:"description",header:"Description",width:200},{key:"longTitle",header:"Job Title",width:120},{key:"email",header:"Email Address",width:100},{key:"shortText",header:"Type",width:100},{key:"notes",header:"Notes",width:100}],lt={render:e=>{const[t,n]=p.useState(new Set);return r.jsxs("div",{style:{width:"1000px",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Row Content Expansion - Long Text Handling"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666",lineHeight:1.5},children:[r.jsx("strong",{children:"Click the expand icon"})," at the beginning of each row to expand/collapse ALL cells in that row. This example tests:",r.jsx("br",{}),"• Very long email addresses that should be ellipsed when collapsed",r.jsx("br",{}),"• Long text content that should wrap without breaking cell width constraints",r.jsx("br",{}),"• Proper word breaking for extremely long content",r.jsx("br",{}),"• Layout stability when transitioning between collapsed and expanded states"]}),r.jsx("div",{style:{border:"1px solid #e1e5e9",borderRadius:"8px",overflow:"hidden"},children:r.jsx(N,{...e,data:Ft,primaryColumn:[{key:"name",header:"Full Name"}],fixedColumns:Ur,selectable:!1,isRowsExpandable:!0,expandedRowIds:[...t],onToggleRowExpansion:o=>{const a=new Set(t);a.has(o)?a.delete(o):a.add(o),n(a)},onToggleAllRowsExpansion:()=>{if(t.size===Ft.length)n(new Set);else{const o=new Set(Ft.map(a=>a.id));n(o)}}})}),r.jsx("p",{style:{margin:"16px 0 0 0",fontSize:"12px",color:"#888",fontStyle:"italic"},children:"Test the table with your browser's developer tools at different widths to verify responsive behavior."})]})},args:{renderRowActions:void 0}},Ae={render:e=>{const[t,n]=p.useState(new Set([1])),[o,a]=p.useState(new Set([5])),[s,i]=p.useState(new Set([9])),u=(R,y)=>[{id:R+1,name:"Anna Smith",age:25,city:"New York",department:"Engineering",rowConfigs:y?{size:y}:void 0},{id:R+2,name:"John Doe with a very long name that should wrap when expanded and demonstrate how the row height increases to accommodate multiple lines of text content",age:32,city:"San Francisco Bay Area, California, United States of America",department:"Design and User Experience Research Department",rowConfigs:y?{size:y}:void 0},{id:R+3,name:"Mike Davis",age:28,city:"Los Angeles",department:"Marketing",rowConfigs:y?{size:y}:void 0},{id:R+4,name:"Sarah Elizabeth Wilson-Montgomery III with an exceptionally long hyphenated surname that demonstrates text wrapping behavior in expanded table rows when the content exceeds the available column width",age:35,city:"Chicago Metropolitan Area",department:"Sales and Business Development International Operations",rowConfigs:y?{size:y}:void 0}],d=u(0,"small"),c=u(4),f=u(8,"large"),h=[{key:"age",header:"Age",align:"right",width:80},{key:"department",header:"Department",width:120},{key:"city",header:"City",width:120}],m=[{key:"name",header:"Name"}],w=(R,y,v,x,k)=>r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{margin:"0 0 4px 0",fontSize:"14px",color:"#333"},children:R}),r.jsx("p",{style:{margin:"0 0 12px 0",fontSize:"12px",color:"#666"},children:y}),r.jsx(N,{...e,data:v,primaryColumn:m,fixedColumns:h,isRowsExpandable:!0,expandedRowIds:[...x],onToggleRowExpansion:b=>{const C=new Set(x);C.has(b)?C.delete(b):C.add(b),k(C)},onToggleAllRowsExpansion:()=>{if(x.size===v.length)k(new Set);else{const b=new Set(v.map(C=>C.id));k(b)}}})]});return r.jsxs("div",{style:{minWidth:"800px",maxWidth:"1000px"},children:[r.jsx("h3",{style:{margin:"0 0 24px 0",fontSize:"18px",color:"#333"},children:"Row Sizes with Expand - Testing Jump Fix"}),r.jsx("p",{style:{margin:"0 0 24px 0",fontSize:"14px",color:"#666"},children:"Test expand/collapse on each table size. The row height should NOT change when expanding/collapsing (unless content requires more space)."}),w("Small Rows (44px)",'rowConfigs: { size: "small" }',d,t,n),w("Default Rows (64px)","No rowConfigs specified",c,o,a),w("Large Rows (80px)",'rowConfigs: { size: "large" }',f,s,i)]})}},je={render:()=>{const e=[{key:"name",header:"Name"}],t=[{key:"status",header:"Status",width:100},{key:"description",header:"Description",width:250}],n=[{id:1,name:"Small Row 1",description:"Compact row for dense tables",status:"Active",rowConfigs:{size:"small"}},{id:2,name:"Small Row 2",description:"Height: 44px",status:"Active",rowConfigs:{size:"small"}}],o=[{id:1,name:"Default Row 1",description:"Standard row size",status:"Active"},{id:2,name:"Default Row 2",description:"Height: 64px (no rowConfigs needed)",status:"Active"}],a=[{id:1,name:"Large Row 1",description:"Prominent row for emphasis",status:"Active",rowConfigs:{size:"large"}},{id:2,name:"Large Row 2",description:"Height: 80px",status:"Active",rowConfigs:{size:"large"}}];return r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Small (44px)"}),r.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "small" }']}),r.jsx(N,{data:n,primaryColumn:e[0],fixedColumns:t,selectable:!1})]}),r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Default (64px)"}),r.jsx("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:"No rowConfigs needed"}),r.jsx(N,{data:o,primaryColumn:e[0],fixedColumns:t,selectable:!1})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Large (80px)"}),r.jsxs("code",{style:{display:"block",marginBottom:"8px",color:"#666",fontSize:"12px"},children:["rowConfigs: ",'{ size: "large" }']}),r.jsx(N,{data:a,primaryColumn:e[0],fixedColumns:t,selectable:!1})]})]})}},Yr=[{key:"name",header:"Name"}],Xr=[{key:"status",header:"Status",width:100},{key:"category",header:"Category",width:120}],Bt=[{id:1,name:"Test execution with a very long name that demonstrates how text behaves in expanded rows with custom header styling",status:"Passed",category:"Smoke",rowConfigs:{size:"small"}},{id:2,name:"Another test case",status:"Failed",category:"Regression",rowConfigs:{size:"small"}},{id:3,name:"Quick sanity check",status:"Skipped",category:"Sanity",rowConfigs:{size:"small"}}],Gr=()=>{const[e,t]=p.useState(new Set);return r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"18px",color:"#333"},children:"Custom Header Background Color"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Use the ",r.jsx("code",{children:"headerClassName"})," prop with your own CSS class to customize the header. Pinned columns and expand button inherit the background color automatically."]}),r.jsx("style",{children:`
          .custom-gray-header {
            background-color: var(--rp-ui-base-bg-200) !important;
            border-top: 1px solid var(--rp-ui-base-e-200);
            border-bottom: none;
          }
        `}),r.jsx("div",{style:{border:"1px solid var(--rp-ui-base-e-200)",borderRadius:"4px",overflow:"hidden"},children:r.jsx(N,{data:Bt,primaryColumn:Yr[0],fixedColumns:Xr,pinnedColumnKeys:["status"],isRowsExpandable:!0,expandedRowIds:Array.from(e),selectable:!1,headerClassName:"custom-gray-header",onToggleRowExpansion:n=>{const o=new Set(e);o.has(n)?o.delete(n):o.add(n),t(o)},onToggleAllRowsExpansion:()=>{e.size===Bt.length?t(new Set):t(new Set(Bt.map(n=>n.id)))}})}),r.jsxs("div",{style:{marginTop:"24px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#333"},children:"How to use:"}),r.jsx("pre",{style:{backgroundColor:"#f5f5f5",padding:"12px",borderRadius:"4px",fontSize:"12px",overflow:"auto"},children:`// In your SCSS file:
.custom-header {
  background-color: var(--rp-ui-base-bg-200);
  border-top: 1px solid var(--rp-ui-base-e-200);
  border-bottom: none;
}

// In your component:
<Table
  headerClassName="custom-header"
  // ... other props
/>`})]})]})},Pe={render:()=>r.jsx(Gr,{})},Ne={render:e=>r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Resizable Columns (Default Constraints)"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Drag the column borders in the header to adjust widths. Default constraints:"," ",r.jsx("code",{children:"minColumnWidth=50"}),", ",r.jsx("code",{children:"maxColumnWidth=500"})]}),r.jsx(N,{...e,primaryColumn:B,data:he,fixedColumns:fe})]}),args:{renderRowActions:ee,isResizable:!0}},Me={render:e=>r.jsx("div",{style:{minWidth:"600px"},children:r.jsx(N,{...e,primaryColumn:B,data:he,fixedColumns:fe})}),args:{isResizable:!0}},Oe={render:e=>r.jsxs("div",{style:{minWidth:"600px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",color:"#333"},children:"Resizable Columns (Custom Constraints)"}),r.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:["Columns can be resized between 80px and 300px. Custom constraints:"," ",r.jsx("code",{children:"minColumnWidth=80"}),", ",r.jsx("code",{children:"maxColumnWidth=300"})]}),r.jsx(N,{...e,primaryColumn:B,data:he,fixedColumns:fe})]}),args:{renderRowActions:ee,isResizable:!0,minColumnWidth:80,maxColumnWidth:300}},He={render:e=>r.jsx("div",{style:{width:"900px",height:"400px",border:"1px solid #ccc",padding:"16px"},children:r.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:r.jsx(N,{...e,data:Be,primaryColumn:B,fixedColumns:ut})})}),args:{renderRowActions:ee,isResizable:!0,isHeaderFixed:!0}},We={render:e=>r.jsx("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:r.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:r.jsx(N,{...e,data:Q,primaryColumn:ae,fixedColumns:Re,isHorizontallyScrollable:!0,isHeaderFixed:!0})})}),args:{renderRowActions:ee,isResizable:!0}},Le={render:e=>r.jsx("div",{style:{width:"900px",height:"500px",border:"1px solid #ccc",padding:"16px"},children:r.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:r.jsx(N,{...e,data:Be,primaryColumn:B,fixedColumns:ut,pinnedColumnKeys:["name","email"],isHorizontallyScrollable:!0,isHeaderFixed:!0})})}),args:{renderRowActions:ee,isResizable:!0}},$e={render:e=>{const t=p.useRef(null),[n,o]=p.useState({key:ae[0].key,direction:se}),[a,s]=p.useState(ae[0]),[i,u]=p.useState(se),d=p.useMemo(()=>{const R=[...Q];for(let y=0;y<3;y++)R.push(...Q.map(v=>({...v,id:`${v.id}-copy-${y+1}`})));return R},[]),c=Ce(d,n),[f,h]=p.useState(c),[m,w]=p.useState(new Set([]));return p.useEffect(()=>{const{key:R,direction:y}=n,v=[...Re,...ae].find(x=>x.key===R);u(y),s(v)},[n]),r.jsxs("div",{style:{width:"800px",height:"600px",border:"1px solid #ccc",padding:"16px"},children:[r.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Table with Horizontal Scroll + Pinned Header (External Scroll Container)"}),r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"This example demonstrates a pinned header that activates when scrolling in an external container. The table header pins to the top when the scroll position reaches it. Scroll vertically in the container to see the header pinning, and horizontally to see pinned columns and gradient effects."}),r.jsxs("div",{ref:t,style:{height:"calc(100% - 100px)",overflowY:"auto",overflowX:"hidden",position:"relative"},children:[r.jsxs("div",{style:{padding:"16px",backgroundColor:"#f0f0f0",marginBottom:"16px"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"16px"},children:"Content Above Table"}),r.jsx("p",{style:{margin:"0",fontSize:"14px",color:"#666"},children:"This content is inside the scrollable container. When you scroll down, this text will move up and disappear, but the table header will stick to the top."}),r.jsx("p",{style:{margin:"8px 0 0",fontSize:"14px",color:"#666"},children:"Scroll down to see the header pinning effect. The table header will remain fixed at the top while this content scrolls away."})]}),r.jsx(N,{...e,data:f,primaryColumn:ae,fixedColumns:Re,isHeaderFixed:!0,isHorizontallyScrollable:!0,pinnedColumnKeys:["name","email"],externalScrollContainerRef:t,sortableColumns:[ae[0].key,"department","status"],onChangeSorting:(R=n)=>{let{direction:y}=R;const{key:v}=R;y=nn(y);const x=Ce(f,{key:v,direction:y});o({key:v,direction:y}),h(x)},onToggleRowSelection:R=>{const y=new Set(m);y.has(R)?y.delete(R):y.add(R),w(y)},onToggleAllRowsSelection:()=>{if(m.size===d.length)w(new Set);else{const R=new Set(d.map(y=>y.id));w(R)}},selectedRowIds:[...m],sortingColumn:a,sortingDirection:i})]})]})},args:{selectable:!0,renderRowActions:ee}},Fe={render:e=>{const[t,n]=p.useState(new Set([])),[o,a]=p.useState(new Set([]));return r.jsx("div",{style:{width:"600px",height:"500px",border:"1px solid #ccc",padding:"16px",paddingLeft:"48px"},children:r.jsx("div",{style:{height:"calc(100% - 16px)",position:"relative"},children:r.jsx(N,{...e,data:Q,primaryColumn:ae,fixedColumns:Re,expandedRowIds:[...o],selectedRowIds:[...t],onToggleRowSelection:s=>{const i=new Set(t);i.has(s)?i.delete(s):i.add(s),n(i)},onToggleAllRowsSelection:()=>{if(t.size===Q.length)n(new Set);else{const s=new Set(Q.map(i=>i.id));n(s)}},onToggleRowExpansion:s=>{const i=new Set(o);i.has(s)?i.delete(s):i.add(s),a(i)},onToggleAllRowsExpansion:()=>{if(o.size===Q.length)a(new Set);else{const s=new Set(Q.map(i=>i.id));a(s)}}})})})},args:{renderRowActions:ee,isResizable:!0,isHeaderFixed:!0,isHorizontallyScrollable:!0,pinnedColumnKeys:["name","email"],selectable:!0,isRowsExpandable:!0,isCheckboxOutside:!0}};var $n,Fn,Bn;tt.parameters={...tt.parameters,docs:{...($n=tt.parameters)==null?void 0:$n.docs,source:{originalSource:`{
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
}`,...(Bn=(Fn=tt.parameters)==null?void 0:Fn.docs)==null?void 0:Bn.source}}};var In,qn,Vn;nt.parameters={...nt.parameters,docs:{...(In=nt.parameters)==null?void 0:In.docs,source:{originalSource:`{
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
}`,...(Vn=(qn=nt.parameters)==null?void 0:qn.docs)==null?void 0:Vn.source}}};var Un,Yn,Xn;ot.parameters={...ot.parameters,docs:{...(Un=ot.parameters)==null?void 0:Un.docs,source:{originalSource:`{
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
}`,...(Xn=(Yn=ot.parameters)==null?void 0:Yn.docs)==null?void 0:Xn.source}}};var Gn,Jn,Kn;at.parameters={...at.parameters,docs:{...(Gn=at.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
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
}`,...(Kn=(Jn=at.parameters)==null?void 0:Jn.docs)==null?void 0:Kn.source}}};var Qn,Zn,eo;st.parameters={...st.parameters,docs:{...(Qn=st.parameters)==null?void 0:Qn.docs,source:{originalSource:`{
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
}`,...(eo=(Zn=st.parameters)==null?void 0:Zn.docs)==null?void 0:eo.source}}};var to,no,oo;rt.parameters={...rt.parameters,docs:{...(to=rt.parameters)==null?void 0:to.docs,source:{originalSource:`{
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
        <Table {...args} data={expandableData} primaryColumn={expandablePrimaryColumns} fixedColumns={expandableFixedColumns} isRowsExpandable={true} selectable={true} rowExpansionMode="detail" expandedRowIds={[...expandedRows]} setExpandedRowIds={setExpandedRows} renderExpandedRow={row => <div style={{
        padding: '16px',
        borderRadius: '4px',
        background: 'var(--rp-ui-base-bg-100)'
      }}>
              Contact: {row.email}
            </div>} onToggleRowExpansion={id => {
        const newExpandedRows = new Set(expandedRows);
        if (newExpandedRows.has(id)) {
          newExpandedRows.delete(id);
        } else {
          newExpandedRows.add(id);
        }
        setExpandedRows(newExpandedRows);
      }} onToggleAllRowsExpansion={expandableRowIds => {
        const allExpanded = expandableRowIds.every(id => expandedRows.has(id));
        setExpandedRows(allExpanded ? new Set() : new Set(expandableRowIds));
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
}`,...(oo=(no=rt.parameters)==null?void 0:no.docs)==null?void 0:oo.source}}};var ao,so,ro;it.parameters={...it.parameters,docs:{...(ao=it.parameters)==null?void 0:ao.docs,source:{originalSource:`{
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
}`,...(ro=(so=it.parameters)==null?void 0:so.docs)==null?void 0:ro.source}}};var io,lo,co;lt.parameters={...lt.parameters,docs:{...(io=lt.parameters)==null?void 0:io.docs,source:{originalSource:`{
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
}`,...(co=(lo=lt.parameters)==null?void 0:lo.docs)==null?void 0:co.source}}};var uo,po,mo,ho,fo;Ae.parameters={...Ae.parameters,docs:{...(uo=Ae.parameters)==null?void 0:uo.docs,source:{originalSource:`{
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
}`,...(mo=(po=Ae.parameters)==null?void 0:po.docs)==null?void 0:mo.source},description:{story:`Demonstrates all row sizes (small: 44px, default: 64px, large: 80px) with expandable content.
Useful for testing that row heights behave correctly when expanding/collapsing cells with long text.`,...(fo=(ho=Ae.parameters)==null?void 0:ho.docs)==null?void 0:fo.description}}};var go,wo,xo,yo,bo;je.parameters={...je.parameters,docs:{...(go=je.parameters)==null?void 0:go.docs,source:{originalSource:`{
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
}`,...(xo=(wo=je.parameters)==null?void 0:wo.docs)==null?void 0:xo.source},description:{story:`Simple demonstration of row sizes without expand functionality.

Row sizes are configured via \`rowConfigs: { size: 'small' | 'medium' | 'large' }\` in each row data object.

Available sizes:
- **small**: 44px height - best for dense data tables
- **medium** (default): 64px height - standard table row
- **large**: 80px height - for tables with more visual prominence`,...(bo=(yo=je.parameters)==null?void 0:yo.docs)==null?void 0:bo.description}}};var So,vo,Co,Ro,ko;Pe.parameters={...Pe.parameters,docs:{...(So=Pe.parameters)==null?void 0:So.docs,source:{originalSource:`{
  render: () => <CustomHeaderDemo />
}`,...(Co=(vo=Pe.parameters)==null?void 0:vo.docs)==null?void 0:Co.source},description:{story:`Demonstrates how to customize the table header background color using CSS.

The Table component supports custom header styling via the \`headerClassName\` prop.
Pinned columns and expand cells will inherit the header background color automatically.

This is useful when you need to match the table header with your application's design,
for example, using a gray header on a white background or vice versa.`,...(ko=(Ro=Pe.parameters)==null?void 0:Ro.docs)==null?void 0:ko.description}}};var Do,To,Eo,zo,_o;Ne.parameters={...Ne.parameters,docs:{...(Do=Ne.parameters)==null?void 0:Do.docs,source:{originalSource:`{
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
}`,...(Eo=(To=Ne.parameters)==null?void 0:To.docs)==null?void 0:Eo.source},description:{story:`Demonstrates resizable columns with default constraints (min: 50px, max: 500px).

Users can drag the column borders in the header to adjust column widths.
Initial widths are taken from column.width property.`,...(_o=(zo=Ne.parameters)==null?void 0:zo.docs)==null?void 0:_o.description}}};var Ao,jo,Po,No,Mo;Me.parameters={...Me.parameters,docs:{...(Ao=Me.parameters)==null?void 0:Ao.docs,source:{originalSource:`{
  render: (args: TableComponentProps) => <div style={{
    minWidth: '600px'
  }}>
      <Table {...args} primaryColumn={primaryColumns} data={data} fixedColumns={fixedColumns} />
    </div>,
  args: {
    isResizable: true
  }
}`,...(Po=(jo=Me.parameters)==null?void 0:jo.docs)==null?void 0:Po.source},description:{story:"Demonstrates resizable columns without row actions.",...(Mo=(No=Me.parameters)==null?void 0:No.docs)==null?void 0:Mo.description}}};var Oo,Ho,Wo,Lo,$o;Oe.parameters={...Oe.parameters,docs:{...(Oo=Oe.parameters)==null?void 0:Oo.docs,source:{originalSource:`{
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
}`,...(Wo=(Ho=Oe.parameters)==null?void 0:Ho.docs)==null?void 0:Wo.source},description:{story:`Demonstrates resizable columns with custom min/max constraints.

Columns can be resized between 80px and 300px.`,...($o=(Lo=Oe.parameters)==null?void 0:Lo.docs)==null?void 0:$o.description}}};var Fo,Bo,Io,qo,Vo;He.parameters={...He.parameters,docs:{...(Fo=He.parameters)==null?void 0:Fo.docs,source:{originalSource:`{
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
}`,...(Io=(Bo=He.parameters)==null?void 0:Bo.docs)==null?void 0:Io.source},description:{story:"Demonstrates resizable columns with fixed header.",...(Vo=(qo=He.parameters)==null?void 0:qo.docs)==null?void 0:Vo.description}}};var Uo,Yo,Xo,Go,Jo;We.parameters={...We.parameters,docs:{...(Uo=We.parameters)==null?void 0:Uo.docs,source:{originalSource:`{
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
}`,...(Xo=(Yo=We.parameters)==null?void 0:Yo.docs)==null?void 0:Xo.source},description:{story:"Demonstrates resizable columns with horizontal scroll and fixed header.",...(Jo=(Go=We.parameters)==null?void 0:Go.docs)==null?void 0:Jo.description}}};var Ko,Qo,Zo,ea,ta;Le.parameters={...Le.parameters,docs:{...(Ko=Le.parameters)==null?void 0:Ko.docs,source:{originalSource:`{
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
}`,...(Zo=(Qo=Le.parameters)==null?void 0:Qo.docs)==null?void 0:Zo.source},description:{story:"Demonstrates resizable columns with pinned columns.",...(ta=(ea=Le.parameters)==null?void 0:ea.docs)==null?void 0:ta.description}}};var na,oa,aa,sa,ra;$e.parameters={...$e.parameters,docs:{...(na=$e.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(aa=(oa=$e.parameters)==null?void 0:oa.docs)==null?void 0:aa.source},description:{story:`Demonstrates a table with pinned header when scrolling is handled by an external container.

This example shows:
- Horizontal scrolling when table content is wider than the container
- Pinned header that pins to the top when scrolling vertically in the external container
- Pinned columns that stay visible during horizontal scroll
- Gradient effects on pinned columns and right edge

Note: This is different from a fixed header with internal table scrolling. Here, the scroll
container is external (parent div), and the header pins when scrolling reaches the table top.

Scroll vertically in the external container to see the header pinning, and horizontally to see
pinned columns and gradients.`,...(ra=(sa=$e.parameters)==null?void 0:sa.docs)==null?void 0:ra.description}}};var ia,la,da,ca,ua;Fe.parameters={...Fe.parameters,docs:{...(ia=Fe.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(da=(la=Fe.parameters)==null?void 0:la.docs)==null?void 0:da.source},description:{story:"Demonstrates resizable columns with horizontal scroll and checkbox outside.",...(ua=(ca=Fe.parameters)==null?void 0:ca.docs)==null?void 0:ua.description}}};const xi=["Default","SortDisabledColumnTooltips","FixedHeader","HorizontalScrollWithFixedHeaderControl","PinnedColumnsWithFixedHeader","ExpandableRows","ExpandableRowsWithDefaultState","CellExpansion","RowSizesWithExpand","RowSizes","CustomHeaderStyle","ResizableColumns","ResizableColumnsWithoutActions","ResizableColumnsWithConstraints","ResizableColumnsWithFixedHeader","ResizableColumnsWithHorizontalScroll","ResizableColumnsWithPinnedColumns","HorizontalScrollWithPinnedHeader","ResizableColumnsWithCheckboxOutside"];export{lt as CellExpansion,Pe as CustomHeaderStyle,tt as Default,rt as ExpandableRows,it as ExpandableRowsWithDefaultState,ot as FixedHeader,at as HorizontalScrollWithFixedHeaderControl,$e as HorizontalScrollWithPinnedHeader,st as PinnedColumnsWithFixedHeader,Ne as ResizableColumns,Fe as ResizableColumnsWithCheckboxOutside,Oe as ResizableColumnsWithConstraints,He as ResizableColumnsWithFixedHeader,We as ResizableColumnsWithHorizontalScroll,Le as ResizableColumnsWithPinnedColumns,Me as ResizableColumnsWithoutActions,je as RowSizes,Ae as RowSizesWithExpand,nt as SortDisabledColumnTooltips,xi as __namedExportsOrder,wi as default};
