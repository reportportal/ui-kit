import{j as d}from"./jsx-runtime-2f188e98.js";import{r as m,g as rr}from"./index-3553ef47.js";import{S as nr}from"./dragNDrop-624e49aa.js";import{F as He}from"./filterItem-cda71fac.js";import{c as ue}from"./bind-d8141dee.js";import{r as Tt}from"./index-d0bd1ed5.js";import{u as ir}from"./useOnClickOutside-b0fffa8f.js";import{i as Be}from"./isEmpty-6ac0b123.js";import"./useEllipsisTitle-1cddebe3.js";import"./actionMenu-4acef103.js";import"./meatballMenu-8b9878d9.js";import"./baseIconButton-9b03f096.js";import"./popover-79ca4f84.js";import"./floating-ui.react-60d1f04e.js";import"./floating-ui.react-dom-a94e415a.js";import"./floatingUi-59569704.js";function Se(t){return typeof t=="function"}const bt=m.createContext({dragDropManager:void 0});function _(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var qe=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ve=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ue={INIT:"@@redux/INIT"+ve(),REPLACE:"@@redux/REPLACE"+ve(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ve()}};function sr(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function St(t,e,r){var n;if(typeof e=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(_(0));if(typeof e=="function"&&typeof r>"u"&&(r=e,e=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(_(1));return r(St)(t,e)}if(typeof t!="function")throw new Error(_(2));var i=t,s=e,a=[],o=a,l=!1;function u(){o===a&&(o=a.slice())}function g(){if(l)throw new Error(_(3));return s}function D(f){if(typeof f!="function")throw new Error(_(4));if(l)throw new Error(_(5));var p=!0;return u(),o.push(f),function(){if(p){if(l)throw new Error(_(6));p=!1,u();var y=o.indexOf(f);o.splice(y,1),a=null}}}function v(f){if(!sr(f))throw new Error(_(7));if(typeof f.type>"u")throw new Error(_(8));if(l)throw new Error(_(9));try{l=!0,s=i(s,f)}finally{l=!1}for(var p=a=o,c=0;c<p.length;c++){var y=p[c];y()}return f}function h(f){if(typeof f!="function")throw new Error(_(10));i=f,v({type:Ue.REPLACE})}function I(){var f,p=D;return f={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(_(11));function S(){y.next&&y.next(g())}S();var b=p(S);return{unsubscribe:b}}},f[qe]=function(){return this},f}return v({type:Ue.INIT}),n={dispatch:v,subscribe:D,getState:g,replaceReducer:h},n[qe]=I,n}function x(t,e,...r){if(or()&&e===void 0)throw new Error("invariant requires an error message argument");if(!t){let n;if(e===void 0)n=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let i=0;n=new Error(e.replace(/%s/g,function(){return r[i++]})),n.name="Invariant Violation"}throw n.framesToPop=1,n}}function or(){return typeof process<"u"&&process.env.NODE_ENV==="production"}function ar(t,e,r){return e.split(".").reduce((n,i)=>n&&n[i]?n[i]:r||null,t)}function dr(t,e){return t.filter(r=>r!==e)}function xt(t){return typeof t=="object"}function lr(t,e){const r=new Map,n=s=>{r.set(s,r.has(s)?r.get(s)+1:1)};t.forEach(n),e.forEach(n);const i=[];return r.forEach((s,a)=>{s===1&&i.push(a)}),i}function cr(t,e){return t.filter(r=>e.indexOf(r)>-1)}const Re="dnd-core/INIT_COORDS",ge="dnd-core/BEGIN_DRAG",Ne="dnd-core/PUBLISH_DRAG_SOURCE",fe="dnd-core/HOVER",pe="dnd-core/DROP",he="dnd-core/END_DRAG";function ze(t,e){return{type:Re,payload:{sourceClientOffset:e||null,clientOffset:t||null}}}const ur={type:Re,payload:{clientOffset:null,sourceClientOffset:null}};function gr(t){return function(r=[],n={publishSource:!0}){const{publishSource:i=!0,clientOffset:s,getSourceClientOffset:a}=n,o=t.getMonitor(),l=t.getRegistry();t.dispatch(ze(s)),fr(r,o,l);const u=mr(r,o);if(u==null){t.dispatch(ur);return}let g=null;if(s){if(!a)throw new Error("getSourceClientOffset must be defined");pr(a),g=a(u)}t.dispatch(ze(s,g));const v=l.getSource(u).beginDrag(o,u);if(v==null)return;hr(v),l.pinSource(u);const h=l.getSourceType(u);return{type:ge,payload:{itemType:h,item:v,sourceId:u,clientOffset:s||null,sourceClientOffset:g||null,isSourcePublic:!!i}}}}function fr(t,e,r){x(!e.isDragging(),"Cannot call beginDrag while dragging."),t.forEach(function(n){x(r.getSource(n),"Expected sourceIds to be registered.")})}function pr(t){x(typeof t=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function hr(t){x(xt(t),"Item must be an object.")}function mr(t,e){let r=null;for(let n=t.length-1;n>=0;n--)if(e.canDragSource(t[n])){r=t[n];break}return r}function vr(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Dr(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){vr(t,i,r[i])})}return t}function yr(t){return function(r={}){const n=t.getMonitor(),i=t.getRegistry();Ir(n),Sr(n).forEach((a,o)=>{const l=Tr(a,o,i,n),u={type:pe,payload:{dropResult:Dr({},r,l)}};t.dispatch(u)})}}function Ir(t){x(t.isDragging(),"Cannot call drop while not dragging."),x(!t.didDrop(),"Cannot call drop twice during one drag operation.")}function Tr(t,e,r,n){const i=r.getTarget(t);let s=i?i.drop(n,t):void 0;return br(s),typeof s>"u"&&(s=e===0?{}:n.getDropResult()),s}function br(t){x(typeof t>"u"||xt(t),"Drop result must either be an object or undefined.")}function Sr(t){const e=t.getTargetIds().filter(t.canDropOnTarget,t);return e.reverse(),e}function xr(t){return function(){const r=t.getMonitor(),n=t.getRegistry();Or(r);const i=r.getSourceId();return i!=null&&(n.getSource(i,!0).endDrag(r,i),n.unpinSource()),{type:he}}}function Or(t){x(t.isDragging(),"Cannot call endDrag while not dragging.")}function xe(t,e){return e===null?t===null:Array.isArray(t)?t.some(r=>r===e):t===e}function wr(t){return function(r,{clientOffset:n}={}){Er(r);const i=r.slice(0),s=t.getMonitor(),a=t.getRegistry(),o=s.getItemType();return Rr(i,a,o),Cr(i,s,a),Nr(i,s,a),{type:fe,payload:{targetIds:i,clientOffset:n||null}}}}function Er(t){x(Array.isArray(t),"Expected targetIds to be an array.")}function Cr(t,e,r){x(e.isDragging(),"Cannot call hover while not dragging."),x(!e.didDrop(),"Cannot call hover after drop.");for(let n=0;n<t.length;n++){const i=t[n];x(t.lastIndexOf(i)===n,"Expected targetIds to be unique in the passed array.");const s=r.getTarget(i);x(s,"Expected targetIds to be registered.")}}function Rr(t,e,r){for(let n=t.length-1;n>=0;n--){const i=t[n],s=e.getTargetType(i);xe(s,r)||t.splice(n,1)}}function Nr(t,e,r){t.forEach(function(n){r.getTarget(n).hover(e,n)})}function Pr(t){return function(){if(t.getMonitor().isDragging())return{type:Ne}}}function _r(t){return{beginDrag:gr(t),publishDragSource:Pr(t),hover:wr(t),drop:yr(t),endDrag:xr(t)}}class Lr{receiveBackend(e){this.backend=e}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const e=this,{dispatch:r}=this.store;function n(s){return(...a)=>{const o=s.apply(e,a);typeof o<"u"&&r(o)}}const i=_r(this);return Object.keys(i).reduce((s,a)=>{const o=i[a];return s[a]=n(o),s},{})}dispatch(e){this.store.dispatch(e)}constructor(e,r){this.isSetUp=!1,this.handleRefCountChange=()=>{const n=this.store.getState().refCount>0;this.backend&&(n&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!n&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=e,this.monitor=r,e.subscribe(this.handleRefCountChange)}}function Ar(t,e){return{x:t.x+e.x,y:t.y+e.y}}function Ot(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Mr(t){const{clientOffset:e,initialClientOffset:r,initialSourceClientOffset:n}=t;return!e||!r||!n?null:Ot(Ar(e,n),r)}function Fr(t){const{clientOffset:e,initialClientOffset:r}=t;return!e||!r?null:Ot(e,r)}const G=[],Pe=[];G.__IS_NONE__=!0;Pe.__IS_ALL__=!0;function kr(t,e){return t===G?!1:t===Pe||typeof e>"u"?!0:cr(e,t).length>0}class jr{subscribeToStateChange(e,r={}){const{handlerIds:n}=r;x(typeof e=="function","listener must be a function."),x(typeof n>"u"||Array.isArray(n),"handlerIds, when specified, must be an array of strings.");let i=this.store.getState().stateId;const s=()=>{const a=this.store.getState(),o=a.stateId;try{o===i||o===i+1&&!kr(a.dirtyHandlerIds,n)||e()}finally{i=o}};return this.store.subscribe(s)}subscribeToOffsetChange(e){x(typeof e=="function","listener must be a function.");let r=this.store.getState().dragOffset;const n=()=>{const i=this.store.getState().dragOffset;i!==r&&(r=i,e())};return this.store.subscribe(n)}canDragSource(e){if(!e)return!1;const r=this.registry.getSource(e);return x(r,`Expected to find a valid source. sourceId=${e}`),this.isDragging()?!1:r.canDrag(this,e)}canDropOnTarget(e){if(!e)return!1;const r=this.registry.getTarget(e);if(x(r,`Expected to find a valid target. targetId=${e}`),!this.isDragging()||this.didDrop())return!1;const n=this.registry.getTargetType(e),i=this.getItemType();return xe(n,i)&&r.canDrop(this,e)}isDragging(){return!!this.getItemType()}isDraggingSource(e){if(!e)return!1;const r=this.registry.getSource(e,!0);if(x(r,`Expected to find a valid source. sourceId=${e}`),!this.isDragging()||!this.isSourcePublic())return!1;const n=this.registry.getSourceType(e),i=this.getItemType();return n!==i?!1:r.isDragging(this,e)}isOverTarget(e,r={shallow:!1}){if(!e)return!1;const{shallow:n}=r;if(!this.isDragging())return!1;const i=this.registry.getTargetType(e),s=this.getItemType();if(s&&!xe(i,s))return!1;const a=this.getTargetIds();if(!a.length)return!1;const o=a.indexOf(e);return n?o===a.length-1:o>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return Mr(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return Fr(this.store.getState().dragOffset)}constructor(e,r){this.store=e,this.registry=r}}const Ve=typeof global<"u"?global:self,wt=Ve.MutationObserver||Ve.WebKitMutationObserver;function Et(t){return function(){const r=setTimeout(i,0),n=setInterval(i,50);function i(){clearTimeout(r),clearInterval(n),t()}}}function Hr(t){let e=1;const r=new wt(t),n=document.createTextNode("");return r.observe(n,{characterData:!0}),function(){e=-e,n.data=e}}const Br=typeof wt=="function"?Hr:Et;class qr{enqueueTask(e){const{queue:r,requestFlush:n}=this;r.length||(n(),this.flushing=!0),r[r.length]=e}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:e}=this;for(;this.index<e.length;){const r=this.index;if(this.index++,e[r].call(),this.index>this.capacity){for(let n=0,i=e.length-this.index;n<i;n++)e[n]=e[n+this.index];e.length-=this.index,this.index=0}}e.length=0,this.index=0,this.flushing=!1},this.registerPendingError=e=>{this.pendingErrors.push(e),this.requestErrorThrow()},this.requestFlush=Br(this.flush),this.requestErrorThrow=Et(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class Ur{call(){try{this.task&&this.task()}catch(e){this.onError(e)}finally{this.task=null,this.release(this)}}constructor(e,r){this.onError=e,this.release=r,this.task=null}}class zr{create(e){const r=this.freeTasks,n=r.length?r.pop():new Ur(this.onError,i=>r[r.length]=i);return n.task=e,n}constructor(e){this.onError=e,this.freeTasks=[]}}const Ct=new qr,Vr=new zr(Ct.registerPendingError);function $r(t){Ct.enqueueTask(Vr.create(t))}const _e="dnd-core/ADD_SOURCE",Le="dnd-core/ADD_TARGET",Ae="dnd-core/REMOVE_SOURCE",me="dnd-core/REMOVE_TARGET";function Yr(t){return{type:_e,payload:{sourceId:t}}}function Wr(t){return{type:Le,payload:{targetId:t}}}function Gr(t){return{type:Ae,payload:{sourceId:t}}}function Xr(t){return{type:me,payload:{targetId:t}}}function Zr(t){x(typeof t.canDrag=="function","Expected canDrag to be a function."),x(typeof t.beginDrag=="function","Expected beginDrag to be a function."),x(typeof t.endDrag=="function","Expected endDrag to be a function.")}function Qr(t){x(typeof t.canDrop=="function","Expected canDrop to be a function."),x(typeof t.hover=="function","Expected hover to be a function."),x(typeof t.drop=="function","Expected beginDrag to be a function.")}function Oe(t,e){if(e&&Array.isArray(t)){t.forEach(r=>Oe(r,!1));return}x(typeof t=="string"||typeof t=="symbol",e?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var L;(function(t){t.SOURCE="SOURCE",t.TARGET="TARGET"})(L||(L={}));let Jr=0;function Kr(){return Jr++}function en(t){const e=Kr().toString();switch(t){case L.SOURCE:return`S${e}`;case L.TARGET:return`T${e}`;default:throw new Error(`Unknown Handler Role: ${t}`)}}function $e(t){switch(t[0]){case"S":return L.SOURCE;case"T":return L.TARGET;default:throw new Error(`Cannot parse handler ID: ${t}`)}}function Ye(t,e){const r=t.entries();let n=!1;do{const{done:i,value:[,s]}=r.next();if(s===e)return!0;n=!!i}while(!n);return!1}class tn{addSource(e,r){Oe(e),Zr(r);const n=this.addHandler(L.SOURCE,e,r);return this.store.dispatch(Yr(n)),n}addTarget(e,r){Oe(e,!0),Qr(r);const n=this.addHandler(L.TARGET,e,r);return this.store.dispatch(Wr(n)),n}containsHandler(e){return Ye(this.dragSources,e)||Ye(this.dropTargets,e)}getSource(e,r=!1){return x(this.isSourceId(e),"Expected a valid source ID."),r&&e===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(e)}getTarget(e){return x(this.isTargetId(e),"Expected a valid target ID."),this.dropTargets.get(e)}getSourceType(e){return x(this.isSourceId(e),"Expected a valid source ID."),this.types.get(e)}getTargetType(e){return x(this.isTargetId(e),"Expected a valid target ID."),this.types.get(e)}isSourceId(e){return $e(e)===L.SOURCE}isTargetId(e){return $e(e)===L.TARGET}removeSource(e){x(this.getSource(e),"Expected an existing source."),this.store.dispatch(Gr(e)),$r(()=>{this.dragSources.delete(e),this.types.delete(e)})}removeTarget(e){x(this.getTarget(e),"Expected an existing target."),this.store.dispatch(Xr(e)),this.dropTargets.delete(e),this.types.delete(e)}pinSource(e){const r=this.getSource(e);x(r,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=r}unpinSource(){x(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(e,r,n){const i=en(e);return this.types.set(i,r),e===L.SOURCE?this.dragSources.set(i,n):e===L.TARGET&&this.dropTargets.set(i,n),i}constructor(e){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=e}}const rn=(t,e)=>t===e;function nn(t,e){return!t&&!e?!0:!t||!e?!1:t.x===e.x&&t.y===e.y}function sn(t,e,r=rn){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(!r(t[n],e[n]))return!1;return!0}function on(t=G,e){switch(e.type){case fe:break;case _e:case Le:case me:case Ae:return G;case ge:case Ne:case he:case pe:default:return Pe}const{targetIds:r=[],prevTargetIds:n=[]}=e.payload,i=lr(r,n);if(!(i.length>0||!sn(r,n)))return G;const a=n[n.length-1],o=r[r.length-1];return a!==o&&(a&&i.push(a),o&&i.push(o)),i}function an(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function dn(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){an(t,i,r[i])})}return t}const We={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function ln(t=We,e){const{payload:r}=e;switch(e.type){case Re:case ge:return{initialSourceClientOffset:r.sourceClientOffset,initialClientOffset:r.clientOffset,clientOffset:r.clientOffset};case fe:return nn(t.clientOffset,r.clientOffset)?t:dn({},t,{clientOffset:r.clientOffset});case he:case pe:return We;default:return t}}function cn(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function $(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){cn(t,i,r[i])})}return t}const un={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function gn(t=un,e){const{payload:r}=e;switch(e.type){case ge:return $({},t,{itemType:r.itemType,item:r.item,sourceId:r.sourceId,isSourcePublic:r.isSourcePublic,dropResult:null,didDrop:!1});case Ne:return $({},t,{isSourcePublic:!0});case fe:return $({},t,{targetIds:r.targetIds});case me:return t.targetIds.indexOf(r.targetId)===-1?t:$({},t,{targetIds:dr(t.targetIds,r.targetId)});case pe:return $({},t,{dropResult:r.dropResult,didDrop:!0,targetIds:[]});case he:return $({},t,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return t}}function fn(t=0,e){switch(e.type){case _e:case Le:return t+1;case Ae:case me:return t-1;default:return t}}function pn(t=0){return t+1}function hn(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function mn(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){hn(t,i,r[i])})}return t}function vn(t={},e){return{dirtyHandlerIds:on(t.dirtyHandlerIds,{type:e.type,payload:mn({},e.payload,{prevTargetIds:ar(t,"dragOperation.targetIds",[])})}),dragOffset:ln(t.dragOffset,e),refCount:fn(t.refCount,e),dragOperation:gn(t.dragOperation,e),stateId:pn(t.stateId)}}function Dn(t,e=void 0,r={},n=!1){const i=yn(n),s=new jr(i,new tn(i)),a=new Lr(i,s),o=t(a,e,r);return a.receiveBackend(o),a}function yn(t){const e=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return St(vn,t&&e&&e({name:"dnd-core",instanceId:"dnd-core"}))}function In(t,e){if(t==null)return{};var r=Tn(t,e),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Tn(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,s;for(s=0;s<n.length;s++)i=n[s],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}let Ge=0;const ae=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var bn=m.memo(function(e){var{children:r}=e,n=In(e,["children"]);const[i,s]=Sn(n);return m.useEffect(()=>{if(s){const a=Rt();return++Ge,()=>{--Ge===0&&(a[ae]=null)}}},[]),d.jsx(bt.Provider,{value:i,children:r})});function Sn(t){if("manager"in t)return[{dragDropManager:t.manager},!1];const e=xn(t.backend,t.context,t.options,t.debugMode),r=!t.context;return[e,r]}function xn(t,e=Rt(),r,n){const i=e;return i[ae]||(i[ae]={dragDropManager:Dn(t,e,r,n)}),i[ae]}function Rt(){return typeof global<"u"?global:window}var On=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,i,s;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(i=n;i--!==0;)if(!t(e[i],r[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(s=Object.keys(e),n=s.length,n!==Object.keys(r).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(r,s[i]))return!1;for(i=n;i--!==0;){var a=s[i];if(!t(e[a],r[a]))return!1}return!0}return e!==e&&r!==r};const wn=rr(On),q=typeof window<"u"?m.useLayoutEffect:m.useEffect;function Nt(t,e,r){const[n,i]=m.useState(()=>e(t)),s=m.useCallback(()=>{const a=e(t);wn(n,a)||(i(a),r&&r())},[n,t,r]);return q(s),[n,s]}function En(t,e,r){const[n,i]=Nt(t,e,r);return q(function(){const a=t.getHandlerId();if(a!=null)return t.subscribeToStateChange(i,{handlerIds:[a]})},[t,i]),n}function Pt(t,e,r){return En(e,t||(()=>({})),()=>r.reconnect())}function _t(t,e){const r=[...e||[]];return e==null&&typeof t!="function"&&r.push(t),m.useMemo(()=>typeof t=="function"?t():t,r)}function Cn(t){return m.useMemo(()=>t.hooks.dragSource(),[t])}function Rn(t){return m.useMemo(()=>t.hooks.dragPreview(),[t])}let De=!1,ye=!1;class Nn{receiveHandlerId(e){this.sourceId=e}getHandlerId(){return this.sourceId}canDrag(){x(!De,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return De=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{De=!1}}isDragging(){if(!this.sourceId)return!1;x(!ye,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return ye=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{ye=!1}}subscribeToStateChange(e,r){return this.internalMonitor.subscribeToStateChange(e,r)}isDraggingSource(e){return this.internalMonitor.isDraggingSource(e)}isOverTarget(e,r){return this.internalMonitor.isOverTarget(e,r)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(e){return this.internalMonitor.subscribeToOffsetChange(e)}canDragSource(e){return this.internalMonitor.canDragSource(e)}canDropOnTarget(e){return this.internalMonitor.canDropOnTarget(e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.sourceId=null,this.internalMonitor=e.getMonitor()}}let Ie=!1;class Pn{receiveHandlerId(e){this.targetId=e}getHandlerId(){return this.targetId}subscribeToStateChange(e,r){return this.internalMonitor.subscribeToStateChange(e,r)}canDrop(){if(!this.targetId)return!1;x(!Ie,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return Ie=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{Ie=!1}}isOver(e){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,e):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.targetId=null,this.internalMonitor=e.getMonitor()}}function _n(t,e,r){const n=r.getRegistry(),i=n.addTarget(t,e);return[i,()=>n.removeTarget(i)]}function Ln(t,e,r){const n=r.getRegistry(),i=n.addSource(t,e);return[i,()=>n.removeSource(i)]}function we(t,e,r,n){let i=r?r.call(n,t,e):void 0;if(i!==void 0)return!!i;if(t===e)return!0;if(typeof t!="object"||!t||typeof e!="object"||!e)return!1;const s=Object.keys(t),a=Object.keys(e);if(s.length!==a.length)return!1;const o=Object.prototype.hasOwnProperty.bind(e);for(let l=0;l<s.length;l++){const u=s[l];if(!o(u))return!1;const g=t[u],D=e[u];if(i=r?r.call(n,g,D,u):void 0,i===!1||i===void 0&&g!==D)return!1}return!0}function Ee(t){return t!==null&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function An(t){if(typeof t.type=="string")return;const e=t.type.displayName||t.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${e} into a <div>, or turn it into a drag source or a drop target itself.`)}function Mn(t){return(e=null,r=null)=>{if(!m.isValidElement(e)){const s=e;return t(s,r),s}const n=e;return An(n),Fn(n,r?s=>t(s,r):t)}}function Lt(t){const e={};return Object.keys(t).forEach(r=>{const n=t[r];if(r.endsWith("Ref"))e[r]=t[r];else{const i=Mn(n);e[r]=()=>i}}),e}function Xe(t,e){typeof t=="function"?t(e):t.current=e}function Fn(t,e){const r=t.ref;return x(typeof r!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r?m.cloneElement(t,{ref:n=>{Xe(r,n),Xe(e,n)}}):m.cloneElement(t,{ref:e})}class kn{receiveHandlerId(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(e){this.dragSourceOptionsInternal=e}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(e){this.dragPreviewOptionsInternal=e}reconnect(){const e=this.reconnectDragSource();this.reconnectDragPreview(e)}reconnectDragSource(){const e=this.dragSource,r=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return r&&this.disconnectDragSource(),this.handlerId?e?(r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)),r):(this.lastConnectedDragSource=e,r):r}reconnectDragPreview(e=!1){const r=this.dragPreview,n=e||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(n&&this.disconnectDragPreview(),!!this.handlerId){if(!r){this.lastConnectedDragPreview=r;return}n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=r,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,r,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!we(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!we(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(e){this.hooks=Lt({dragSource:(r,n)=>{this.clearDragSource(),this.dragSourceOptions=n||null,Ee(r)?this.dragSourceRef=r:this.dragSourceNode=r,this.reconnectDragSource()},dragPreview:(r,n)=>{this.clearDragPreview(),this.dragPreviewOptions=n||null,Ee(r)?this.dragPreviewRef=r:this.dragPreviewNode=r,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=e}}class jn{get connectTarget(){return this.dropTarget}reconnect(){const e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();const r=this.dropTarget;if(this.handlerId){if(!r){this.lastConnectedDropTarget=r;return}e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=r,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,r,this.dropTargetOptions))}}receiveHandlerId(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(e){this.dropTargetOptionsInternal=e}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!we(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(e){this.hooks=Lt({dropTarget:(r,n)=>{this.clearDropTarget(),this.dropTargetOptions=n,Ee(r)?this.dropTargetRef=r:this.dropTargetNode=r,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=e}}function U(){const{dragDropManager:t}=m.useContext(bt);return x(t!=null,"Expected drag drop context"),t}function Hn(t,e){const r=U(),n=m.useMemo(()=>new kn(r.getBackend()),[r]);return q(()=>(n.dragSourceOptions=t||null,n.reconnect(),()=>n.disconnectDragSource()),[n,t]),q(()=>(n.dragPreviewOptions=e||null,n.reconnect(),()=>n.disconnectDragPreview()),[n,e]),n}function Bn(){const t=U();return m.useMemo(()=>new Nn(t),[t])}class qn{beginDrag(){const e=this.spec,r=this.monitor;let n=null;return typeof e.item=="object"?n=e.item:typeof e.item=="function"?n=e.item(r):n={},n??null}canDrag(){const e=this.spec,r=this.monitor;return typeof e.canDrag=="boolean"?e.canDrag:typeof e.canDrag=="function"?e.canDrag(r):!0}isDragging(e,r){const n=this.spec,i=this.monitor,{isDragging:s}=n;return s?s(i):r===e.getSourceId()}endDrag(){const e=this.spec,r=this.monitor,n=this.connector,{end:i}=e;i&&i(r.getItem(),r),n.reconnect()}constructor(e,r,n){this.spec=e,this.monitor=r,this.connector=n}}function Un(t,e,r){const n=m.useMemo(()=>new qn(t,e,r),[e,r]);return m.useEffect(()=>{n.spec=t},[t]),n}function zn(t){return m.useMemo(()=>{const e=t.type;return x(e!=null,"spec.type must be defined"),e},[t])}function Vn(t,e,r){const n=U(),i=Un(t,e,r),s=zn(t);q(function(){if(s!=null){const[o,l]=Ln(s,i,n);return e.receiveHandlerId(o),r.receiveHandlerId(o),l}},[n,e,r,i,s])}function At(t,e){const r=_t(t,e);x(!r.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const n=Bn(),i=Hn(r.options,r.previewOptions);return Vn(r,n,i),[Pt(r.collect,n,i),Cn(i),Rn(i)]}function Mt(t){const r=U().getMonitor(),[n,i]=Nt(r,t);return m.useEffect(()=>r.subscribeToOffsetChange(i)),m.useEffect(()=>r.subscribeToStateChange(i)),n}function $n(t){return m.useMemo(()=>t.hooks.dropTarget(),[t])}function Yn(t){const e=U(),r=m.useMemo(()=>new jn(e.getBackend()),[e]);return q(()=>(r.dropTargetOptions=t||null,r.reconnect(),()=>r.disconnectDropTarget()),[t]),r}function Wn(){const t=U();return m.useMemo(()=>new Pn(t),[t])}function Gn(t){const{accept:e}=t;return m.useMemo(()=>(x(t.accept!=null,"accept must be defined"),Array.isArray(e)?e:[e]),[e])}class Xn{canDrop(){const e=this.spec,r=this.monitor;return e.canDrop?e.canDrop(r.getItem(),r):!0}hover(){const e=this.spec,r=this.monitor;e.hover&&e.hover(r.getItem(),r)}drop(){const e=this.spec,r=this.monitor;if(e.drop)return e.drop(r.getItem(),r)}constructor(e,r){this.spec=e,this.monitor=r}}function Zn(t,e){const r=m.useMemo(()=>new Xn(t,e),[e]);return m.useEffect(()=>{r.spec=t},[t]),r}function Qn(t,e,r){const n=U(),i=Zn(t,e),s=Gn(t);q(function(){const[o,l]=_n(s,i,n);return e.receiveHandlerId(o),r.receiveHandlerId(o),l},[n,e,i,r,s.map(a=>a.toString()).join("|")])}function Ft(t,e){const r=_t(t,e),n=Wn(),i=Yn(r.options);return Qn(r,n,i),[Pt(r.collect,n,i),$n(i)]}function kt(t){let e=null;return()=>(e==null&&(e=t()),e)}function Jn(t,e){return t.filter(r=>r!==e)}function Kn(t,e){const r=new Set,n=s=>r.add(s);t.forEach(n),e.forEach(n);const i=[];return r.forEach(s=>i.push(s)),i}class ei{enter(e){const r=this.entered.length,n=i=>this.isNodeInDocument(i)&&(!i.contains||i.contains(e));return this.entered=Kn(this.entered.filter(n),[e]),r===0&&this.entered.length>0}leave(e){const r=this.entered.length;return this.entered=Jn(this.entered.filter(this.isNodeInDocument),e),r>0&&this.entered.length===0}reset(){this.entered=[]}constructor(e){this.entered=[],this.isNodeInDocument=e}}class ti{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(e=>{Object.defineProperty(this.item,e,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${e}" until the drop event.`),null}})})}loadDataTransfer(e){if(e){const r={};Object.keys(this.config.exposeProperties).forEach(n=>{const i=this.config.exposeProperties[n];i!=null&&(r[n]={value:i(e,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,r)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(e,r){return r===e.getSourceId()}endDrag(){}constructor(e){this.config=e,this.item={},this.initializeExposedProperties()}}const jt="__NATIVE_FILE__",Ht="__NATIVE_URL__",Bt="__NATIVE_TEXT__",qt="__NATIVE_HTML__",Ze=Object.freeze(Object.defineProperty({__proto__:null,FILE:jt,HTML:qt,TEXT:Bt,URL:Ht},Symbol.toStringTag,{value:"Module"}));function Te(t,e,r){const n=e.reduce((i,s)=>i||t.getData(s),"");return n??r}const Ce={[jt]:{exposeProperties:{files:t=>Array.prototype.slice.call(t.files),items:t=>t.items,dataTransfer:t=>t},matchesTypes:["Files"]},[qt]:{exposeProperties:{html:(t,e)=>Te(t,e,""),dataTransfer:t=>t},matchesTypes:["Html","text/html"]},[Ht]:{exposeProperties:{urls:(t,e)=>Te(t,e,"").split(`
`),dataTransfer:t=>t},matchesTypes:["Url","text/uri-list"]},[Bt]:{exposeProperties:{text:(t,e)=>Te(t,e,""),dataTransfer:t=>t},matchesTypes:["Text","text/plain"]}};function ri(t,e){const r=Ce[t];if(!r)throw new Error(`native type ${t} has no configuration`);const n=new ti(r);return n.loadDataTransfer(e),n}function be(t){if(!t)return null;const e=Array.prototype.slice.call(t.types||[]);return Object.keys(Ce).filter(r=>{const n=Ce[r];return n!=null&&n.matchesTypes?n.matchesTypes.some(i=>e.indexOf(i)>-1):!1})[0]||null}const ni=kt(()=>/firefox/i.test(navigator.userAgent)),Ut=kt(()=>!!window.safari);class Qe{interpolate(e){const{xs:r,ys:n,c1s:i,c2s:s,c3s:a}=this;let o=r.length-1;if(e===r[o])return n[o];let l=0,u=a.length-1,g;for(;l<=u;){g=Math.floor(.5*(l+u));const h=r[g];if(h<e)l=g+1;else if(h>e)u=g-1;else return n[g]}o=Math.max(0,u);const D=e-r[o],v=D*D;return n[o]+i[o]*D+s[o]*v+a[o]*D*v}constructor(e,r){const{length:n}=e,i=[];for(let h=0;h<n;h++)i.push(h);i.sort((h,I)=>e[h]<e[I]?-1:1);const s=[],a=[];let o,l;for(let h=0;h<n-1;h++)o=e[h+1]-e[h],l=r[h+1]-r[h],s.push(o),a.push(l/o);const u=[a[0]];for(let h=0;h<s.length-1;h++){const I=a[h],f=a[h+1];if(I*f<=0)u.push(0);else{o=s[h];const p=s[h+1],c=o+p;u.push(3*c/((c+p)/I+(c+o)/f))}}u.push(a[a.length-1]);const g=[],D=[];let v;for(let h=0;h<u.length-1;h++){v=a[h];const I=u[h],f=1/s[h],p=I+u[h+1]-v-v;g.push((v-I-p)*f),D.push(p*f*f)}this.xs=e,this.ys=r,this.c1s=u,this.c2s=g,this.c3s=D}}const ii=1;function zt(t){const e=t.nodeType===ii?t:t.parentElement;if(!e)return null;const{top:r,left:n}=e.getBoundingClientRect();return{x:n,y:r}}function Q(t){return{x:t.clientX,y:t.clientY}}function si(t){var e;return t.nodeName==="IMG"&&(ni()||!(!((e=document.documentElement)===null||e===void 0)&&e.contains(t)))}function oi(t,e,r,n){let i=t?e.width:r,s=t?e.height:n;return Ut()&&t&&(s/=window.devicePixelRatio,i/=window.devicePixelRatio),{dragPreviewWidth:i,dragPreviewHeight:s}}function ai(t,e,r,n,i){const s=si(e),o=zt(s?t:e),l={x:r.x-o.x,y:r.y-o.y},{offsetWidth:u,offsetHeight:g}=t,{anchorX:D,anchorY:v}=n,{dragPreviewWidth:h,dragPreviewHeight:I}=oi(s,e,u,g),f=()=>{let O=new Qe([0,.5,1],[l.y,l.y/g*I,l.y+I-g]).interpolate(v);return Ut()&&s&&(O+=(window.devicePixelRatio-1)*I),O},p=()=>new Qe([0,.5,1],[l.x,l.x/u*h,l.x+h-u]).interpolate(D),{offsetX:c,offsetY:y}=i,S=c===0||c,b=y===0||y;return{x:S?c:p(),y:b?y:f()}}class di{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var e;return!((e=this.globalContext)===null||e===void 0)&&e.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var e;return((e=this.optionsArgs)===null||e===void 0?void 0:e.rootElement)||this.window}constructor(e,r){this.ownerDocument=null,this.globalContext=e,this.optionsArgs=r}}function li(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Je(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){li(t,i,r[i])})}return t}class ci{profile(){var e,r;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((e=this.dragStartSourceIds)===null||e===void 0?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((r=this.dragOverTargetIds)===null||r===void 0?void 0:r.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const e=this.rootElement;if(e!==void 0){if(e.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");e.__isReactDndBackendSetUp=!0,this.addEventListeners(e)}}teardown(){const e=this.rootElement;if(e!==void 0&&(e.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var r;(r=this.window)===null||r===void 0||r.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(e,r,n){return this.sourcePreviewNodeOptions.set(e,n),this.sourcePreviewNodes.set(e,r),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDragSource(e,r,n){this.sourceNodes.set(e,r),this.sourceNodeOptions.set(e,n);const i=a=>this.handleDragStart(a,e),s=a=>this.handleSelectStart(a);return r.setAttribute("draggable","true"),r.addEventListener("dragstart",i),r.addEventListener("selectstart",s),()=>{this.sourceNodes.delete(e),this.sourceNodeOptions.delete(e),r.removeEventListener("dragstart",i),r.removeEventListener("selectstart",s),r.setAttribute("draggable","false")}}connectDropTarget(e,r){const n=a=>this.handleDragEnter(a,e),i=a=>this.handleDragOver(a,e),s=a=>this.handleDrop(a,e);return r.addEventListener("dragenter",n),r.addEventListener("dragover",i),r.addEventListener("drop",s),()=>{r.removeEventListener("dragenter",n),r.removeEventListener("dragover",i),r.removeEventListener("drop",s)}}addEventListeners(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const e=this.monitor.getSourceId(),r=this.sourceNodeOptions.get(e);return Je({dropEffect:this.altKeyPressed?"copy":"move"},r||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const e=this.monitor.getSourceId(),r=this.sourcePreviewNodeOptions.get(e);return Je({anchorX:.5,anchorY:.5,captureDraggingState:!1},r||{})}isDraggingNativeItem(){const e=this.monitor.getItemType();return Object.keys(Ze).some(r=>Ze[r]===e)}beginDragNativeItem(e,r){this.clearCurrentDragSourceNode(),this.currentNativeSource=ri(e,r),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e;const r=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var n;return(n=this.rootElement)===null||n===void 0?void 0:n.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},r)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var e;(e=this.window)===null||e===void 0||e.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(e,r){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(r))}handleDragEnter(e,r){this.dragEnterTargetIds.unshift(r)}handleDragOver(e,r){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(r)}handleDrop(e,r){this.dropTargetIds.unshift(r)}constructor(e,r,n){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=i=>{const s=this.sourceNodes.get(i);return s&&zt(s)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=i=>!!(i&&this.document&&this.document.body&&this.document.body.contains(i)),this.endDragIfSourceWasRemovedFromDOM=()=>{const i=this.currentDragSourceNode;i==null||this.isNodeInDocument(i)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=i=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(i||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=i=>{if(i.defaultPrevented)return;const{dragStartSourceIds:s}=this;this.dragStartSourceIds=null;const a=Q(i);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(s||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:a});const{dataTransfer:o}=i,l=be(o);if(this.monitor.isDragging()){if(o&&typeof o.setDragImage=="function"){const g=this.monitor.getSourceId(),D=this.sourceNodes.get(g),v=this.sourcePreviewNodes.get(g)||D;if(v){const{anchorX:h,anchorY:I,offsetX:f,offsetY:p}=this.getCurrentSourcePreviewNodeOptions(),S=ai(D,v,a,{anchorX:h,anchorY:I},{offsetX:f,offsetY:p});o.setDragImage(v,S.x,S.y)}}try{o==null||o.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(i.target);const{captureDraggingState:u}=this.getCurrentSourcePreviewNodeOptions();u?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(l)this.beginDragNativeItem(l);else{if(o&&!o.types&&(i.target&&!i.target.hasAttribute||!i.target.hasAttribute("draggable")))return;i.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=i=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var s;(s=this.currentNativeSource)===null||s===void 0||s.loadDataTransfer(i.dataTransfer)}if(!this.enterLeaveCounter.enter(i.target)||this.monitor.isDragging())return;const{dataTransfer:o}=i,l=be(o);l&&this.beginDragNativeItem(l,o)},this.handleTopDragEnter=i=>{const{dragEnterTargetIds:s}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=i.altKey,s.length>0&&this.actions.hover(s,{clientOffset:Q(i)}),s.some(o=>this.monitor.canDropOnTarget(o))&&(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=i=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var s;(s=this.currentNativeSource)===null||s===void 0||s.loadDataTransfer(i.dataTransfer)}},this.handleTopDragOver=i=>{const{dragOverTargetIds:s}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none");return}this.altKeyPressed=i.altKey,this.lastClientOffset=Q(i),this.scheduleHover(s),(s||[]).some(o=>this.monitor.canDropOnTarget(o))?(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?i.preventDefault():(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=i=>{this.isDraggingNativeItem()&&i.preventDefault(),this.enterLeaveCounter.leave(i.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=i=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var s;i.preventDefault(),(s=this.currentNativeSource)===null||s===void 0||s.loadDataTransfer(i.dataTransfer)}else be(i.dataTransfer)&&i.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=i=>{const{dropTargetIds:s}=this;this.dropTargetIds=[],this.actions.hover(s,{clientOffset:Q(i)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=i=>{const s=i.target;typeof s.dragDrop=="function"&&(s.tagName==="INPUT"||s.tagName==="SELECT"||s.tagName==="TEXTAREA"||s.isContentEditable||(i.preventDefault(),s.dragDrop()))},this.options=new di(r,n),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.enterLeaveCounter=new ei(this.isNodeInDocument)}}let J;function Vt(){return J||(J=new Image,J.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),J}const ui=function(e,r,n){return new ci(e,r,n)},X="SORTABLE_ITEM",N={TOP:"top",BOTTOM:"bottom",LEFT:"left",RIGHT:"right"},de={INDEX_BASED:"indexBased",HOVER:"hover"},le={VERTICAL:"vertical",HORIZONTAL:"horizontal"},F={BEFORE:"before",INSIDE:"inside",AFTER:"after"},P={MOVE:"move",DUPLICATE:"duplicate",CANCEL:"cancel"},gi=t=>{if(!t)return{display:"none"};const{x:e,y:r}=t,n=`translate(${e}px, ${r}px)`;return{transform:n,WebkitTransform:n}},fi=({fromIndex:t,targetIndex:e,isTopZone:r})=>r?t<e?e-1:e:t>e?e+1:e,pi=(t,e)=>t/e<.5?N.TOP:N.BOTTOM,hi=(t,e)=>t/e<.5?N.LEFT:N.RIGHT,mi=({id:t,index:e,type:r=X,isDisabled:n=!1,isLast:i=!1,onDrop:s,hideDefaultPreview:a=!1,dropDetectionMode:o=de.INDEX_BASED,orientation:l=le.VERTICAL})=>{const u=o===de.HOVER,g=l===le.HORIZONTAL,D=m.useRef(null),v=m.useRef(null),[h,I]=m.useState(null),[{isDragging:f},p,c]=At(()=>({type:r,item:{id:t,index:e,type:r},collect:w=>({isDragging:w.isDragging()}),canDrag:()=>!n}),[t,e,r,n]);m.useEffect(()=>{a&&c(Vt(),{captureDraggingState:!0})},[a,c]);const[{isOver:y,draggedItemIndex:S},b]=Ft(()=>({accept:r,collect:w=>{const C=w.getItem(),R=(C==null?void 0:C.id)!==t?w.isOver():!1;return{isOver:R,draggedItemIndex:R?(C==null?void 0:C.index)??null:null}},hover:(w,C)=>{if(!u)return;if(w.id===t){I(null);return}const k=D.current;if(!k){I(null);return}const R=k.getBoundingClientRect(),M=C.getClientOffset();if(!M){I(null);return}let A;if(g){const z=R.right-R.left,V=M.x-R.left;A=hi(V,z)}else{const z=R.bottom-R.top,V=M.y-R.top;A=pi(V,z)}A===null?(I(null),v.current=null):(I(A),v.current=A)},drop:w=>{if(!(w.id===t||!s))if(u){const C=v.current;if(!C)return;const k=g?C===N.LEFT:C===N.TOP,R=fi({fromIndex:w.index,targetIndex:e,isTopZone:k});s(w.index,R)}else s(w.index,e)}}),[t,e,r,s,i,u,g]),T=m.useCallback(w=>(D.current=w,b(w)),[b]);m.useEffect(()=>{y||I(null)},[y]);const E=u?h:(()=>S===null?null:g?S>e?N.LEFT:N.RIGHT:S>e?N.TOP:N.BOTTOM)();return{isDragging:f,isOver:y,draggedItemIndex:S,dropPosition:E,dragRef:p,dropRef:T,previewRef:c}},vi=(t,e,r=!1)=>{if(!t||!e)return null;const{top:n,height:i}=e,a=t.y-n,o=6;return a>=0&&a<o?F.BEFORE:r&&a>=i-o&&a<=i?F.AFTER:F.INSIDE},Di=({id:t,index:e,parentId:r=null,type:n=X,isDisabled:i=!1,acceptDrop:s=!0,isLast:a=!1,canDropOn:o,onDrop:l,hideDefaultPreview:u=!1})=>{const g=m.useRef(null),D=m.useRef(null),[v,h]=m.useState(null),[{isDragging:I},f,p]=At(()=>({type:n,item:{id:t,index:e,type:n,parentId:r},collect:b=>({isDragging:b.isDragging()}),canDrag:()=>!i}),[t,e,n,r,i]);m.useEffect(()=>{u&&p(Vt(),{captureDraggingState:!0})},[u,p]);const[{isOver:c},y]=Ft(()=>({accept:n,hover:(b,T)=>{if(g.current&&b.id!==t&&s)if(!o||o(b,t)){const E=T.getClientOffset(),w=g.current.getBoundingClientRect();if(E&&w){const C=vi(E,w,a);C!==v&&(h(C),D.current=C)}}else v!==null&&(h(null),D.current=null)},collect:b=>{const T=b.getItem(),O=(T==null?void 0:T.id)!==t&&s,E=!o||!T||o(T,t),w=b.isOver({shallow:!0}),C=O&&E;return!w&&v!==null&&(h(null),D.current=null),{isOver:w&&C}},drop:(b,T)=>{if(T.didDrop())return;const O=!o||o(b,t);b.id!==t&&s&&O&&l&&D.current&&l(b,t,D.current)}}),[t,n,s,a,o,l,v]);return{isDragging:I,isOver:c,dropPosition:v,dragRef:f,dropRef:b=>{g.current=b,y(b)},previewRef:p,elementRef:g}};/*!
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
 */const Y=t=>String(t),yi=(t,e,r,n="children")=>{const i=Y(t),s=Y(e),a=(g,D)=>{for(const v of D){if(Y(v.id)===g)return v;const h=v[n]||[];if(!Be(h)){const I=a(g,h);if(I)return I}}return null},o=a(i,r);if(!o)return!1;const l=g=>{for(const D of g){if(Y(D.id)===s)return!0;const v=D[n]||[];if(!Be(v)&&l(v))return!0}return!1},u=o[n]||[];return l(u)},Ii=({items:t,childrenKey:e="children"})=>({canDropOn:m.useCallback((n,i)=>{const s=Y(n.id),a=Y(i);return s===a?!1:!yi(n.id,i,t,e)},[t,e])}),Ti={"sortable-item":"_sortable-item_1l4xp_16","sortable-item--horizontal":"_sortable-item--horizontal_1l4xp_22","sortable-item--drop-target-top":"_sortable-item--drop-target-top_1l4xp_25","sortable-item--drop-target-bottom":"_sortable-item--drop-target-bottom_1l4xp_38","sortable-item--hover-mode":"_sortable-item--hover-mode_1l4xp_51","sortable-item--drop-target-left":"_sortable-item--drop-target-left_1l4xp_67","sortable-item--drop-target-right":"_sortable-item--drop-target-right_1l4xp_77","drag-handle":"_drag-handle_1l4xp_88","drag-handle--disabled":"_drag-handle--disabled_1l4xp_95"},bi=ue.bind(Ti),H=({id:t,index:e,type:r=X,isDisabled:n=!1,className:i,draggingClassName:s,dropTargetClassName:a,onDrop:o,hideDefaultPreview:l=!1,dropDetectionMode:u=de.INDEX_BASED,orientation:g=le.VERTICAL,isLast:D=!1,children:v})=>{const{isDragging:h,dropPosition:I,dragRef:f,dropRef:p,previewRef:c}=mi({id:t,index:e,type:r,isDisabled:n,onDrop:o,hideDefaultPreview:l,dropDetectionMode:u,orientation:g,isLast:D}),y=Se(v),S=u===de.HOVER,b=g===le.HORIZONTAL,T=bi("sortable-item",i,{"sortable-item--horizontal":b,"sortable-item--dragging":h,"sortable-item--hover-mode":S,"sortable-item--drop-target-top":I===N.TOP,"sortable-item--drop-target-bottom":I===N.BOTTOM,"sortable-item--drop-target-left":I===N.LEFT,"sortable-item--drop-target-right":I===N.RIGHT,[s||""]:h&&s,[a||""]:I&&a}),O=E=>{p(E),l||c(E),y||f(E)};return d.jsx("div",{ref:O,className:T,children:y?v({isDragging:h,isOver:I!==null,dragRef:f}):v})};H.__docgenInfo={description:"",methods:[],displayName:"SortableItem",props:{id:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},index:{required:!0,tsType:{name:"number"},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'SORTABLE_ITEM'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},draggingClassName:{required:!1,tsType:{name:"string"},description:""},dropTargetClassName:{required:!1,tsType:{name:"string"},description:""},onDrop:{required:!1,tsType:{name:"signature",type:"function",raw:"(fromIndex: number, toIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"fromIndex"},{type:{name:"number"},name:"toIndex"}],return:{name:"void"}}},description:""},hideDefaultPreview:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},dropDetectionMode:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof DROP_DETECTION_MODE)[keyof typeof DROP_DETECTION_MODE]"},description:"",defaultValue:{value:"'indexBased'",computed:!1}},orientation:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof SORTABLE_ORIENTATION)[keyof typeof SORTABLE_ORIENTATION]"},description:"",defaultValue:{value:"'vertical'",computed:!1}},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ((props: SortableItemRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""}}};const $t=({items:t,type:e=X,isDisabled:r=!1,className:n,itemClassName:i,onReorder:s,renderItem:a,keyExtractor:o=l=>l.id})=>{const l=m.useCallback((u,g)=>{const D=[...t],[v]=D.splice(u,1);D.splice(g,0,v),s(D)},[t,s]);return d.jsx("div",{className:n,children:t.map((u,g)=>d.jsx(H,{id:o(u),index:g,type:e,isDisabled:r,className:i,onDrop:l,isLast:g===t.length-1,children:({dragRef:D,isDragging:v})=>a(u,g,D,v)},o(u)))})};$t.__docgenInfo={description:"",methods:[],displayName:"SortableList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'SORTABLE_ITEM'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},itemClassName:{required:!1,tsType:{name:"string"},description:""},onReorder:{required:!0,tsType:{name:"signature",type:"function",raw:"(reorderedItems: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"reorderedItems"}],return:{name:"void"}}},description:""},renderItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T, index: number, dragRef: Ref<HTMLElement>, isDragging: boolean) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"},{type:{name:"Ref",elements:[{name:"HTMLElement"}],raw:"Ref<HTMLElement>"},name:"dragRef"},{type:{name:"boolean"},name:"isDragging"}],return:{name:"ReactNode"}}},description:""},keyExtractor:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string | number",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"",defaultValue:{value:"(item) => item.id",computed:!1}}}};const j={"chip-item":"_chip-item_1q47w_16","chip-item-dragging":"_chip-item-dragging_1q47w_21","chip-drag-preview":"_chip-drag-preview_1q47w_26","custom-drag-preview":"_custom-drag-preview_1q47w_27","chip-wrapper":"_chip-wrapper_1q47w_36","chip-handle":"_chip-handle_1q47w_41","chip-handle-icon":"_chip-handle-icon_1q47w_55","chips-list":"_chips-list_1q47w_72"},Si={"drag-layer":"_drag-layer_1izcx_1","drag-preview":"_drag-preview_1izcx_11"},Ke=ue.bind(Si),Yt=({type:t,renderPreview:e,className:r,previewClassName:n,portalTarget:i=document.body})=>{const{itemType:s,isDragging:a,item:o,clientOffset:l}=Mt(g=>({item:g.getItem(),itemType:g.getItemType(),clientOffset:g.getClientOffset(),isDragging:g.isDragging()}));if(!a||s!==t||!o||!i)return null;const u=d.jsx("div",{className:Ke("drag-layer",r),children:d.jsx("div",{className:Ke("drag-preview",n),style:gi(l),children:e(o)})});return Tt.createPortal(u,i)},Wt=m.createContext(null),Gt=()=>m.useContext(Wt),xi={"drop-confirmation-popover":"_drop-confirmation-popover_obz3t_16","drop-confirmation-popover--before":"_drop-confirmation-popover--before_obz3t_31","drop-confirmation-popover--after":"_drop-confirmation-popover--after_obz3t_35","drop-confirmation-popover__button":"_drop-confirmation-popover__button_obz3t_59","drop-confirmation-popover__divider":"_drop-confirmation-popover__divider_obz3t_75"},W=ue.bind(xi),Oi={[P.MOVE]:"Move",[P.DUPLICATE]:"Duplicate",[P.CANCEL]:"Cancel"},Xt=({children:t,showDropConfirmation:e=!1,confirmationLabels:r,portalTarget:n,onMove:i,onDuplicate:s,onCancel:a})=>{const[o,l]=m.useState(null),[u,g]=m.useState(null),D=m.useRef(null),v={...Oi,...r},h=m.useCallback(()=>{l(null),g(null)},[]),I=m.useCallback((y,S,b,T)=>{if(!e){i==null||i(y,S,b);return}const O=T.getBoundingClientRect(),E=O.left+O.width/2;let w;b==="before"?w=O.top:b==="after"?w=O.top+O.height:w=O.top,g({top:w,left:E}),l({draggedItem:y,targetId:S,position:b})},[e,i]),f=m.useCallback(y=>{if(!o){h();return}const{draggedItem:S,targetId:b,position:T}=o;switch(y){case P.MOVE:i==null||i(S,b,T);break;case P.DUPLICATE:s==null||s(S,b,T);break;case P.CANCEL:a==null||a();break}h()},[o,i,s,a,h]);ir(D,o&&e?()=>f(P.CANCEL):void 0);const p={showDropConfirmation:e,pendingDraggedItemId:(o==null?void 0:o.draggedItem.id)??null,pendingTargetId:(o==null?void 0:o.targetId)??null,pendingDropPosition:(o==null?void 0:o.position)??null,requestDrop:I},c=n??(typeof document<"u"?document.body:null);return d.jsxs(Wt.Provider,{value:p,children:[t,o&&u&&c&&Tt.createPortal(d.jsxs("div",{ref:D,className:W("drop-confirmation-popover",{"drop-confirmation-popover--before":o.position==="before","drop-confirmation-popover--after":o.position==="after"}),style:{top:u.top,left:u.left},children:[d.jsx("button",{type:"button",className:W("drop-confirmation-popover__button"),onClick:()=>f(P.MOVE),children:v[P.MOVE]}),d.jsx("button",{type:"button",className:W("drop-confirmation-popover__button"),onClick:()=>f(P.DUPLICATE),children:v[P.DUPLICATE]}),d.jsx("div",{className:W("drop-confirmation-popover__divider")}),d.jsx("button",{type:"button",className:W("drop-confirmation-popover__button"),onClick:()=>f(P.CANCEL),children:v[P.CANCEL]})]}),c)]})};Xt.__docgenInfo={description:"",methods:[],displayName:"TreeSortableContainer",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},showDropConfirmation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},confirmationLabels:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"unknown[union]",raw:"(typeof DROP_ACTIONS)[keyof typeof DROP_ACTIONS]"},{name:"string"}],raw:"Record<DropAction, string>"}],raw:"Partial<Record<DropAction, string>>"},description:""},portalTarget:{required:!1,tsType:{name:"union",raw:"Element | null",elements:[{name:"Element"},{name:"null"}]},description:""},onMove:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  draggedItem: TreeDragItem,
  targetId: string | number,
  position: TreeDropPosition,
) => void`,signature:{arguments:[{type:{name:"TreeDragItem"},name:"draggedItem"},{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"targetId"},{type:{name:"union",raw:"TreeDropPositionValue | null",elements:[{name:"unknown[union]",raw:"(typeof TREE_DROP_POSITIONS)[keyof typeof TREE_DROP_POSITIONS]"},{name:"null"}]},name:"position"}],return:{name:"void"}}},description:""},onDuplicate:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  draggedItem: TreeDragItem,
  targetId: string | number,
  position: TreeDropPosition,
) => void`,signature:{arguments:[{type:{name:"TreeDragItem"},name:"draggedItem"},{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"targetId"},{type:{name:"union",raw:"TreeDropPositionValue | null",elements:[{name:"unknown[union]",raw:"(typeof TREE_DROP_POSITIONS)[keyof typeof TREE_DROP_POSITIONS]"},{name:"null"}]},name:"position"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const wi={"tree-sortable-item":"_tree-sortable-item_13y35_16","tree-sortable-item--dragging":"_tree-sortable-item--dragging_13y35_20","tree-sortable-item--pending":"_tree-sortable-item--pending_13y35_23","tree-sortable-item--drop-before":"_tree-sortable-item--drop-before_13y35_29","tree-sortable-item--drop-after":"_tree-sortable-item--drop-after_13y35_40","tree-sortable-item--drop-inside":"_tree-sortable-item--drop-inside_13y35_51"},Ei=ue.bind(wi),Zt=({id:t,index:e,parentId:r,type:n=X,isDisabled:i=!1,acceptDrop:s=!0,isLast:a=!1,canDropOn:o,className:l,style:u,draggingClassName:g,dropBeforeClassName:D,dropInsideClassName:v,dropAfterClassName:h,onDrop:I,hideDefaultPreview:f=!1,children:p})=>{const c=Gt(),y=m.useRef(null),S=m.useCallback((B,ke,je)=>{c!=null&&c.showDropConfirmation&&y.current?c.requestDrop(B,ke,je,y.current):I==null||I(B,ke,je)},[c,I]),{isDragging:b,isOver:T,dropPosition:O,dragRef:E,dropRef:w,previewRef:C}=Di({id:t,index:e,parentId:r,type:n,isDisabled:i,acceptDrop:s,isLast:a,canDropOn:o,onDrop:S,hideDefaultPreview:f}),k=(c==null?void 0:c.pendingDraggedItemId)===t,R=b||k,M=(c==null?void 0:c.pendingTargetId)===t,A=c==null?void 0:c.pendingDropPosition,z=T&&O===F.BEFORE||M&&A===F.BEFORE,V=T&&O===F.INSIDE||M&&A===F.INSIDE,Fe=a&&(T&&O===F.AFTER||M&&A===F.AFTER),er=Se(p)?p({isDragging:R,isOver:T||M,dropPosition:M?A??null:O,dragRef:E}):p,tr=Ei("tree-sortable-item",l,{"tree-sortable-item--dragging":R,"tree-sortable-item--pending":k,"tree-sortable-item--drop-before":z,"tree-sortable-item--drop-inside":V,"tree-sortable-item--drop-after":Fe,[g||""]:R&&g,[D||""]:z&&D,[v||""]:V&&v,[h||""]:Fe&&h});return d.jsx("div",{ref:B=>{y.current=B,w(B),Se(p)||(E(B),C(B))},className:tr,style:u,children:er})};Zt.__docgenInfo={description:"",methods:[],displayName:"TreeSortableItem",props:{id:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},index:{required:!0,tsType:{name:"number"},description:""},parentId:{required:!1,tsType:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'SORTABLE_ITEM'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},acceptDrop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},canDropOn:{required:!1,tsType:{name:"signature",type:"function",raw:"(draggedItem: TreeDragItem, targetId: string | number) => boolean",signature:{arguments:[{type:{name:"TreeDragItem"},name:"draggedItem"},{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"targetId"}],return:{name:"boolean"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},draggingClassName:{required:!1,tsType:{name:"string"},description:""},dropBeforeClassName:{required:!1,tsType:{name:"string"},description:""},dropInsideClassName:{required:!1,tsType:{name:"string"},description:""},dropAfterClassName:{required:!1,tsType:{name:"string"},description:""},onDrop:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  draggedItem: TreeDragItem,
  targetId: string | number,
  position: TreeDropPosition,
) => void`,signature:{arguments:[{type:{name:"TreeDragItem"},name:"draggedItem"},{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"targetId"},{type:{name:"union",raw:"TreeDropPositionValue | null",elements:[{name:"unknown[union]",raw:"(typeof TREE_DROP_POSITIONS)[keyof typeof TREE_DROP_POSITIONS]"},{name:"null"}]},name:"position"}],return:{name:"void"}}},description:""},hideDefaultPreview:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ((props: TreeSortableItemRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""}}};const ts={title:"DnD/Sortable",component:H,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>d.jsx(bn,{backend:ui,children:d.jsx(t,{})})]},Z={display:"flex",alignItems:"center",gap:"12px",padding:"12px 16px",backgroundColor:"var(--rp-ui-base-bg-000, #fff)",border:"1px solid #e1e5e9",borderRadius:"4px",marginBottom:"8px",cursor:"grab"},Me={cursor:"grab",color:"#9ca3af",display:"flex",alignItems:"center"},ce=()=>d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[d.jsx("circle",{cx:"5",cy:"3",r:"1.5"}),d.jsx("circle",{cx:"11",cy:"3",r:"1.5"}),d.jsx("circle",{cx:"5",cy:"8",r:"1.5"}),d.jsx("circle",{cx:"11",cy:"8",r:"1.5"}),d.jsx("circle",{cx:"5",cy:"13",r:"1.5"}),d.jsx("circle",{cx:"11",cy:"13",r:"1.5"})]}),K={render:()=>{const[t,e]=m.useState([{id:1,name:"Item 1"},{id:2,name:"Item 2"},{id:3,name:"Item 3"}]),r=(n,i)=>{const s=[...t],[a]=s.splice(n,1);s.splice(i,0,a),e(s)};return d.jsxs("div",{style:{width:"300px"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"Drag items to reorder"}),t.map((n,i)=>d.jsx(H,{id:n.id,index:i,onDrop:r,isLast:i===t.length-1,children:d.jsx("div",{style:Z,children:n.name})},n.id))]})}},ee={render:()=>{const[t,e]=m.useState([{id:1,name:"Drag by handle only"},{id:2,name:"Click handle to drag"},{id:3,name:"Third item"}]),r=(n,i)=>{const s=[...t],[a]=s.splice(n,1);s.splice(i,0,a),e(s)};return d.jsxs("div",{style:{width:"300px"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"Use the handle (⋮⋮) to drag items"}),t.map((n,i)=>d.jsx(H,{id:n.id,index:i,onDrop:r,isLast:i===t.length-1,children:({dragRef:s})=>d.jsxs("div",{style:Z,children:[d.jsx("span",{ref:s,style:Me,children:d.jsx(ce,{})}),d.jsx("span",{children:n.name})]})},n.id))]})}},te={render:()=>{const[t,e]=m.useState([{id:1,name:"First task"},{id:2,name:"Second task"},{id:3,name:"Third task"},{id:4,name:"Fourth task"},{id:5,name:"Fifth task"}]);return d.jsxs("div",{style:{width:"350px"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"SortableList Component"}),d.jsx($t,{items:t,onReorder:e,renderItem:(r,n,i)=>d.jsxs("div",{style:Z,children:[d.jsx("span",{ref:i,style:Me,children:d.jsx(ce,{})}),d.jsx("span",{children:r.name})]})})]})}},Ci={display:"flex",alignItems:"center",gap:"8px",padding:"12px 16px",backgroundColor:"#fff",border:"1px solid #3b82f6",borderRadius:"4px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",fontSize:"14px",fontWeight:500},re={render:()=>{const t="CUSTOM_SORTABLE",[e,r]=m.useState([{id:1,name:"Item with custom preview"},{id:2,name:"Another draggable item"},{id:3,name:"Third draggable item"}]),n=(s,a)=>{const o=[...e],[l]=o.splice(s,1);o.splice(a,0,l),r(o)},i=s=>{const a=e.find(o=>o.id===s.id);return d.jsxs("div",{style:Ci,children:[d.jsx(ce,{}),d.jsx("span",{children:(a==null?void 0:a.name)||"Unknown"})]})};return d.jsxs("div",{style:{width:"350px"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"Custom drag preview (styled differently from original)"}),d.jsx(Yt,{type:t,renderPreview:i,previewClassName:j["custom-drag-preview"]}),e.map((s,a)=>d.jsx(H,{id:s.id,index:a,type:t,onDrop:n,hideDefaultPreview:!0,isLast:a===e.length-1,children:({dragRef:o,isDragging:l})=>d.jsxs("div",{style:{...Z,opacity:l?.5:1},children:[d.jsx("span",{ref:o,style:Me,children:d.jsx(ce,{})}),d.jsx("span",{children:s.name})]})},s.id))]})}},ne={render:()=>{const[t]=m.useState([{id:1,name:"Cannot drag this"},{id:2,name:"Also not draggable"},{id:3,name:"Disabled item"}]),e={...Z,opacity:.5,cursor:"not-allowed"};return d.jsxs("div",{style:{width:"300px"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"Disabled sortable items"}),t.map((r,n)=>d.jsx(H,{id:r.id,index:n,isDisabled:!0,isLast:n===t.length-1,children:d.jsx("div",{style:e,children:r.name})},r.id))]})}},Ri=t=>{const[e,r]=m.useState(!1);return m.useEffect(()=>{let n;return t?n=setTimeout(()=>r(!0),50):r(!1),()=>clearTimeout(n)},[t]),e},ie={name:"Horizontal - Filter Chips (FilterItem)",render:()=>{const t="FILTER_ITEM_CHIP",[e,r]=m.useState([{id:1,name:"Personal 1"},{id:2,name:"API tests & Back_ST"},{id:3,name:"Regression"},{id:4,name:"Personal 2"},{id:5,name:"Attribute oriented - AT"},{id:6,name:"Functional"}]),n=(a,o)=>{const l=[...e],[u]=l.splice(a,1);l.splice(o,0,u),r(l)},i=a=>{const o=e.find(l=>l.id===a.id);return d.jsx(He,{id:String(a.id),caption:(o==null?void 0:o.name)??"",actions:[]})},s=({dragRef:a,isDragging:o,item:l})=>Ri(o)?null:d.jsxs("div",{className:j["chip-wrapper"],children:[d.jsx("span",{ref:a,className:j["chip-handle"],children:d.jsx("span",{className:j["chip-handle-icon"],children:d.jsx(nr,{})})}),d.jsx(He,{id:String(l.id),caption:l.name,actions:[]})]});return d.jsxs("div",{style:{width:"450px",padding:"24px 16px 16px",border:"1px solid #e1e5e9",borderRadius:"8px",backgroundColor:"#f9fafb"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"Hover over a filter to reveal the drag handle, then drag to reorder (FilterItem)"}),d.jsx(Yt,{type:t,renderPreview:i,previewClassName:j["chip-drag-preview"]}),d.jsx("div",{className:j["chips-list"],style:{display:"flex",flexWrap:"wrap",gap:0,paddingTop:"12px"},children:e.map((a,o)=>d.jsx(H,{id:a.id,index:o,type:t,orientation:"horizontal",dropDetectionMode:"hover",hideDefaultPreview:!0,className:j["chip-item"],draggingClassName:j["chip-item-dragging"],onDrop:n,isLast:o===e.length-1,children:({dragRef:l,isDragging:u})=>d.jsx(s,{dragRef:l,isDragging:u,item:a})},a.id))})]})}},Ni=()=>d.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:d.jsx("path",{d:"M1 3.5A1.5 1.5 0 0 1 2.5 2h3.172a1.5 1.5 0 0 1 1.06.44l.829.828a.5.5 0 0 0 .353.147H13.5A1.5 1.5 0 0 1 15 4.914V12.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9z"})}),Pi=()=>d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[d.jsx("path",{d:"M1 4.5A1.5 1.5 0 0 1 2.5 3h3.172a1.5 1.5 0 0 1 1.06.44l.829.828A.5.5 0 0 0 7.914 4.5H13.5A1.5 1.5 0 0 1 15 6v.5H2V4.5z"}),d.jsx("path",{d:"M1.5 7h13l-1.5 7H3L1.5 7z"})]}),_i=({isExpanded:t})=>d.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",style:{transform:t?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.2s ease"},children:d.jsx("path",{d:"M4.5 2L9 6l-4.5 4V2z"})}),Li="FOLDER_ITEM",Ai=[{id:1,name:"Documents",children:[{id:11,name:"Work",children:[{id:111,name:"Reports",children:[]},{id:112,name:"Presentations",children:[]}]},{id:12,name:"Personal",children:[{id:121,name:"Photos",children:[]},{id:122,name:"Receipts",children:[]}]}]},{id:2,name:"Projects",children:[{id:21,name:"UI Kit",children:[]},{id:22,name:"Service UI",children:[]},{id:23,name:"API",children:[]}]},{id:3,name:"Downloads",children:[]},{id:4,name:"Archive",children:[{id:41,name:"2023",children:[]},{id:42,name:"2024",children:[]}]}];let Mi=Date.now();const Fi=()=>++Mi,Qt=t=>({...t,id:Fi(),children:t.children.map(Qt)}),Jt=(t,e)=>{for(const r of t){if(r.id===e)return r;const n=Jt(r.children,e);if(n)return n}return null},se=(t,e)=>{const r=Jt(t,e);return(r==null?void 0:r.name)||"Unknown"},ki=t=>{const e=[],r=n=>{for(const i of n)e.push(i.name),i.children.length>0&&r(i.children)};return r(t),e},ji=(t,e)=>{const r=/^(.*?)\((\d+)\)$/,n=t.match(r),i=n?n[1]:t;if(!e.includes(i))return i;let s=1;for(;e.includes(`${i}(${s})`);)s++;return`${i}(${s})`},Kt=({folder:t,index:e,depth:r,parentId:n,isLast:i,expandedIds:s,onToggle:a,canDropOn:o,onDrop:l})=>{const u=s.has(t.id),g=t.children.length>0,D=Gt(),v=D==null?void 0:D.pendingDraggedItemId,{draggedItem:h}=Mt(p=>({draggedItem:p.getItem()})),I=(()=>{if(!o)return!1;const p=h||(v?{id:v}:null);if(!p)return!1;const c=String(p.id),y=String(t.id);return c===y?!1:!o(p,t.id)})(),f={display:"flex",alignItems:"center",gap:"4px",padding:"6px 8px",backgroundColor:"var(--rp-ui-base-bg-000, #fff)",borderRadius:"4px",cursor:"grab",fontSize:"13px",userSelect:"none"};return d.jsxs(d.Fragment,{children:[d.jsx(Zt,{id:t.id,index:e,parentId:n,type:Li,isLast:i,canDropOn:o,onDrop:l,style:{"--tree-item-indent":`${r*20}px`},children:({isDragging:p,dragRef:c})=>d.jsxs("div",{ref:c,style:{...f,paddingLeft:`${r*20}px`,opacity:p||I?.4:1,cursor:I?"not-allowed":f.cursor,pointerEvents:p||I?"none":"auto"},children:[d.jsx("span",{onClick:y=>{y.stopPropagation(),g&&a(t.id)},style:{width:"16px",display:"flex",alignItems:"center",justifyContent:"center",color:"#9ca3af",cursor:g?"pointer":"default",visibility:g?"visible":"hidden"},children:d.jsx(_i,{isExpanded:u})}),d.jsx("span",{style:{color:"#f59e0b"},children:u?d.jsx(Pi,{}):d.jsx(Ni,{})}),d.jsx("span",{style:{flex:1},children:t.name})]})}),u&&t.children.map((p,c)=>d.jsx(Kt,{folder:p,index:c,depth:r+1,parentId:t.id,isLast:c===t.children.length-1,expandedIds:s,onToggle:a,canDropOn:o,onDrop:l},p.id))]})},oe={name:"Tree Sortable - Nested Folders",render:()=>{const[t,e]=m.useState(Ai),[r,n]=m.useState(new Set([1,2])),[i,s]=m.useState([]),a=f=>{n(p=>{const c=new Set(p);return c.has(f)?c.delete(f):c.add(f),c})},o=()=>{const f=new Set,p=c=>{c.forEach(y=>{y.children.length>0&&(f.add(y.id),p(y.children))})};p(t),n(f)},l=()=>{n(new Set)},{canDropOn:u}=Ii({items:t}),g=(f,p)=>{let c=null;const y=f.filter(S=>S.id===p?(c={...S,children:[...S.children]},!1):!0);return c?[y,c]:[y.map(S=>{const[b,T]=g(S.children,p);return T&&(c=T),{...S,children:b}}),c]},D=(f,p,c,y)=>{const S=[];for(let b=0;b<f.length;b++){const T=f[b];T.id===p?y==="before"?(S.push(c),S.push({...T,children:[...T.children]})):y==="after"?(S.push({...T,children:[...T.children]}),S.push(c)):y==="inside"&&(S.push({...T,children:[...T.children,c]}),n(O=>new Set([...O,T.id]))):S.push({...T,children:D(T.children,p,c,y)})}return S},v=(f,p,c)=>{const y=se(t,f.id),S=se(t,p),b=`MOVED "${y}" → ${c==null?void 0:c.toUpperCase()} "${S}"`;s(E=>[b,...E.slice(0,4)]);const[T,O]=g(t,f.id);if(O&&c){const E=D(T,p,O,c);e(E)}},h=(f,p,c)=>{const y=se(t,f.id),S=se(t,p),b=`DUPLICATED "${y}" → ${c==null?void 0:c.toUpperCase()} "${S}"`;s(O=>[b,...O.slice(0,4)]);const[,T]=g(t,f.id);if(T&&c){const O=ki(t),E={...Qt(T),name:ji(T.name,O)},w=D(t,p,E,c);e(w)}},I=()=>{s(f=>["CANCELLED drop action",...f.slice(0,4)])};return d.jsxs("div",{style:{width:"400px"},children:[d.jsx("h3",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:"Nested Folder Tree - Drag & Drop with Confirmation"}),d.jsx("p",{style:{marginBottom:"12px",fontSize:"12px",color:"#999"},children:"Click chevron to expand • Drag to: top = before, middle = inside, bottom = after • Drop to see confirmation popup"}),d.jsxs("div",{style:{marginBottom:"12px",display:"flex",gap:"8px"},children:[d.jsx("button",{onClick:o,style:{padding:"4px 12px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",backgroundColor:"#fff",cursor:"pointer"},children:"Expand All"}),d.jsx("button",{onClick:l,style:{padding:"4px 12px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",backgroundColor:"#fff",cursor:"pointer"},children:"Collapse All"})]}),d.jsx(Xt,{showDropConfirmation:!0,onMove:v,onDuplicate:h,onCancel:I,children:d.jsx("div",{style:{border:"1px solid #e1e5e9",borderRadius:"8px",padding:"8px",backgroundColor:"#f9fafb",maxHeight:"400px",overflowY:"auto"},children:t.map((f,p)=>d.jsx(Kt,{folder:f,index:p,depth:0,parentId:null,isLast:p===t.length-1,expandedIds:r,onToggle:a,canDropOn:u,onDrop:v},f.id))})}),i.length>0&&d.jsxs("div",{style:{marginTop:"16px",padding:"8px 12px",backgroundColor:"#f0fdf4",border:"1px solid #86efac",borderRadius:"4px",fontSize:"11px",color:"#166534"},children:[d.jsx("div",{style:{fontWeight:600,marginBottom:"4px"},children:"Recent Actions:"}),i.map((f,p)=>d.jsxs("div",{style:{opacity:1-p*.15},children:["✓ ",f]},p))]})]})}};var et,tt,rt;K.parameters={...K.parameters,docs:{...(et=K.parameters)==null?void 0:et.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<ListItem[]>([{
      id: 1,
      name: 'Item 1'
    }, {
      id: 2,
      name: 'Item 2'
    }, {
      id: 3,
      name: 'Item 3'
    }]);
    const handleDrop = (fromIndex: number, toIndex: number) => {
      const newItems = [...items];
      const [movedItem] = newItems.splice(fromIndex, 1);
      newItems.splice(toIndex, 0, movedItem);
      setItems(newItems);
    };
    return <div style={{
      width: '300px'
    }}>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '14px',
        color: '#666'
      }}>
          Drag items to reorder
        </h3>
        {items.map((item, index) => <SortableItem key={item.id} id={item.id} index={index} onDrop={handleDrop} isLast={index === items.length - 1}>
            <div style={itemStyle}>{item.name}</div>
          </SortableItem>)}
      </div>;
  }
}`,...(rt=(tt=K.parameters)==null?void 0:tt.docs)==null?void 0:rt.source}}};var nt,it,st;ee.parameters={...ee.parameters,docs:{...(nt=ee.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<ListItem[]>([{
      id: 1,
      name: 'Drag by handle only'
    }, {
      id: 2,
      name: 'Click handle to drag'
    }, {
      id: 3,
      name: 'Third item'
    }]);
    const handleDrop = (fromIndex: number, toIndex: number) => {
      const newItems = [...items];
      const [movedItem] = newItems.splice(fromIndex, 1);
      newItems.splice(toIndex, 0, movedItem);
      setItems(newItems);
    };
    return <div style={{
      width: '300px'
    }}>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '14px',
        color: '#666'
      }}>
          Use the handle (⋮⋮) to drag items
        </h3>
        {items.map((item, index) => <SortableItem key={item.id} id={item.id} index={index} onDrop={handleDrop} isLast={index === items.length - 1}>
            {({
          dragRef
        }) => <div style={itemStyle}>
                <span ref={dragRef as Ref<HTMLSpanElement>} style={dragHandleStyle}>
                  <DragHandleIcon />
                </span>
                <span>{item.name}</span>
              </div>}
          </SortableItem>)}
      </div>;
  }
}`,...(st=(it=ee.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var ot,at,dt;te.parameters={...te.parameters,docs:{...(ot=te.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<ListItem[]>([{
      id: 1,
      name: 'First task'
    }, {
      id: 2,
      name: 'Second task'
    }, {
      id: 3,
      name: 'Third task'
    }, {
      id: 4,
      name: 'Fourth task'
    }, {
      id: 5,
      name: 'Fifth task'
    }]);
    return <div style={{
      width: '350px'
    }}>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '14px',
        color: '#666'
      }}>
          SortableList Component
        </h3>
        <SortableList items={items} onReorder={setItems} renderItem={(item, _index, dragRef) => <div style={itemStyle}>
              <span ref={dragRef as Ref<HTMLSpanElement>} style={dragHandleStyle}>
                <DragHandleIcon />
              </span>
              <span>{item.name}</span>
            </div>} />
      </div>;
  }
}`,...(dt=(at=te.parameters)==null?void 0:at.docs)==null?void 0:dt.source}}};var lt,ct,ut;re.parameters={...re.parameters,docs:{...(lt=re.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  render: () => {
    const CUSTOM_TYPE = 'CUSTOM_SORTABLE';

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<ListItem[]>([{
      id: 1,
      name: 'Item with custom preview'
    }, {
      id: 2,
      name: 'Another draggable item'
    }, {
      id: 3,
      name: 'Third draggable item'
    }]);
    const handleDrop = (fromIndex: number, toIndex: number) => {
      const newItems = [...items];
      const [movedItem] = newItems.splice(fromIndex, 1);
      newItems.splice(toIndex, 0, movedItem);
      setItems(newItems);
    };
    const renderPreview = (dragItem: DragItem) => {
      const item = items.find(i => i.id === dragItem.id);
      return <div style={previewStyle}>
          <DragHandleIcon />
          <span>{item?.name || 'Unknown'}</span>
        </div>;
    };
    return <div style={{
      width: '350px'
    }}>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '14px',
        color: '#666'
      }}>
          Custom drag preview (styled differently from original)
        </h3>
        <DragLayer type={CUSTOM_TYPE} renderPreview={renderPreview} previewClassName={storyStyles['custom-drag-preview']} />
        {items.map((item, index) => <SortableItem key={item.id} id={item.id} index={index} type={CUSTOM_TYPE} onDrop={handleDrop} hideDefaultPreview isLast={index === items.length - 1}>
            {({
          dragRef,
          isDragging
        }) => <div style={{
          ...itemStyle,
          opacity: isDragging ? 0.5 : 1
        }}>
                <span ref={dragRef as Ref<HTMLSpanElement>} style={dragHandleStyle}>
                  <DragHandleIcon />
                </span>
                <span>{item.name}</span>
              </div>}
          </SortableItem>)}
      </div>;
  }
}`,...(ut=(ct=re.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};var gt,ft,pt;ne.parameters={...ne.parameters,docs:{...(gt=ne.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items] = useState<ListItem[]>([{
      id: 1,
      name: 'Cannot drag this'
    }, {
      id: 2,
      name: 'Also not draggable'
    }, {
      id: 3,
      name: 'Disabled item'
    }]);
    const disabledStyle: CSSProperties = {
      ...itemStyle,
      opacity: 0.5,
      cursor: 'not-allowed'
    };
    return <div style={{
      width: '300px'
    }}>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '14px',
        color: '#666'
      }}>
          Disabled sortable items
        </h3>
        {items.map((item, index) => <SortableItem key={item.id} id={item.id} index={index} isDisabled isLast={index === items.length - 1}>
            <div style={disabledStyle}>{item.name}</div>
          </SortableItem>)}
      </div>;
  }
}`,...(pt=(ft=ne.parameters)==null?void 0:ft.docs)==null?void 0:pt.source}}};var ht,mt,vt;ie.parameters={...ie.parameters,docs:{...(ht=ie.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  name: 'Horizontal - Filter Chips (FilterItem)',
  render: () => {
    const FILTER_ITEM_TYPE = 'FILTER_ITEM_CHIP';

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState<ListItem[]>([{
      id: 1,
      name: 'Personal 1'
    }, {
      id: 2,
      name: 'API tests & Back_ST'
    }, {
      id: 3,
      name: 'Regression'
    }, {
      id: 4,
      name: 'Personal 2'
    }, {
      id: 5,
      name: 'Attribute oriented - AT'
    }, {
      id: 6,
      name: 'Functional'
    }]);
    const handleDrop = (fromIndex: number, toIndex: number) => {
      const newItems = [...items];
      const [moved] = newItems.splice(fromIndex, 1);
      newItems.splice(toIndex, 0, moved);
      setItems(newItems);
    };
    const renderPreview = (dragItem: DragItem) => {
      const item = items.find(i => i.id === dragItem.id);
      return <FilterItem id={String(dragItem.id)} caption={item?.name ?? ''} actions={[]} />;
    };
    const FilterItemContent = ({
      dragRef,
      isDragging,
      item
    }: {
      dragRef: Ref<HTMLElement>;
      isDragging: boolean;
      item: ListItem;
    }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const shouldHide = useHideOnDrag(isDragging);
      if (shouldHide) return null;
      return <div className={storyStyles['chip-wrapper']}>
          <span ref={dragRef as Ref<HTMLSpanElement>} className={storyStyles['chip-handle']}>
            <span className={storyStyles['chip-handle-icon']}>
              <DragNDropIcon />
            </span>
          </span>
          <FilterItem id={String(item.id)} caption={item.name} actions={[]} />
        </div>;
    };
    return <div style={{
      width: '450px',
      padding: '24px 16px 16px',
      border: '1px solid #e1e5e9',
      borderRadius: '8px',
      backgroundColor: '#f9fafb'
    }}>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '14px',
        color: '#666'
      }}>
          Hover over a filter to reveal the drag handle, then drag to reorder (FilterItem)
        </h3>
        <DragLayer type={FILTER_ITEM_TYPE} renderPreview={renderPreview} previewClassName={storyStyles['chip-drag-preview']} />
        <div className={storyStyles['chips-list']} style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 0,
        paddingTop: '12px'
      }}>
          {items.map((item, index) => <SortableItem key={item.id} id={item.id} index={index} type={FILTER_ITEM_TYPE} orientation="horizontal" dropDetectionMode="hover" hideDefaultPreview className={storyStyles['chip-item']} draggingClassName={storyStyles['chip-item-dragging']} onDrop={handleDrop} isLast={index === items.length - 1}>
              {({
            dragRef,
            isDragging
          }) => <FilterItemContent dragRef={dragRef} isDragging={isDragging} item={item} />}
            </SortableItem>)}
        </div>
      </div>;
  }
}`,...(vt=(mt=ie.parameters)==null?void 0:mt.docs)==null?void 0:vt.source}}};var Dt,yt,It;oe.parameters={...oe.parameters,docs:{...(Dt=oe.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  name: 'Tree Sortable - Nested Folders',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [folders, setFolders] = useState<NestedFolder[]>(initialFolders);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set([1, 2]));

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [actionLog, setActionLog] = useState<string[]>([]);
    const toggleFolder = (id: number) => {
      setExpandedIds(prev => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    };
    const expandAll = () => {
      const allIds = new Set<number>();
      const collectIds = (items: NestedFolder[]) => {
        items.forEach(item => {
          if (item.children.length > 0) {
            allIds.add(item.id);
            collectIds(item.children);
          }
        });
      };
      collectIds(folders);
      setExpandedIds(allIds);
    };
    const collapseAll = () => {
      setExpandedIds(new Set());
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {
      canDropOn
    } = useTreeDropValidation({
      items: folders
    });
    const removeFolder = (items: NestedFolder[], id: number): [NestedFolder[], NestedFolder | null] => {
      let removed: NestedFolder | null = null;
      const filtered = items.filter(item => {
        if (item.id === id) {
          removed = {
            ...item,
            children: [...item.children]
          };
          return false;
        }
        return true;
      });
      if (!removed) {
        return [filtered.map(item => {
          const [newChildren, found] = removeFolder(item.children, id);
          if (found) removed = found;
          return {
            ...item,
            children: newChildren
          };
        }), removed];
      }
      return [filtered, removed];
    };
    const insertFolder = (items: NestedFolder[], insertTargetId: number, folder: NestedFolder, pos: TreeDropPosition): NestedFolder[] => {
      const result: NestedFolder[] = [];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === insertTargetId) {
          if (pos === 'before') {
            result.push(folder);
            result.push({
              ...item,
              children: [...item.children]
            });
          } else if (pos === 'after') {
            result.push({
              ...item,
              children: [...item.children]
            });
            result.push(folder);
          } else if (pos === 'inside') {
            result.push({
              ...item,
              children: [...item.children, folder]
            });
            setExpandedIds(prev => new Set([...prev, item.id]));
          }
        } else {
          result.push({
            ...item,
            children: insertFolder(item.children, insertTargetId, folder, pos)
          });
        }
      }
      return result;
    };
    const handleMove = (draggedItem: TreeDragItem, targetId: string | number, position: TreeDropPosition) => {
      const draggedName = getFolderName(folders, draggedItem.id as number);
      const targetName = getFolderName(folders, targetId as number);
      const action = \`MOVED "\${draggedName}" → \${position?.toUpperCase()} "\${targetName}"\`;
      setActionLog(prev => [action, ...prev.slice(0, 4)]);
      const [withoutDragged, draggedFolder] = removeFolder(folders, draggedItem.id as number);
      if (draggedFolder && position) {
        const newFolders = insertFolder(withoutDragged, targetId as number, draggedFolder, position);
        setFolders(newFolders);
      }
    };
    const handleDuplicate = (draggedItem: TreeDragItem, targetId: string | number, position: TreeDropPosition) => {
      const draggedName = getFolderName(folders, draggedItem.id as number);
      const targetName = getFolderName(folders, targetId as number);
      const action = \`DUPLICATED "\${draggedName}" → \${position?.toUpperCase()} "\${targetName}"\`;
      setActionLog(prev => [action, ...prev.slice(0, 4)]);
      const [, draggedFolder] = removeFolder(folders, draggedItem.id as number);
      if (draggedFolder && position) {
        const existingNames = getAllFolderNames(folders);

        // Create a deep copy with new IDs for all folders and subfolders
        const duplicatedFolder = {
          ...cloneFolderWithNewIds(draggedFolder),
          name: getNextDuplicateName(draggedFolder.name, existingNames)
        };
        const newFolders = insertFolder(folders, targetId as number, duplicatedFolder, position);
        setFolders(newFolders);
      }
    };
    const handleCancel = () => {
      setActionLog(prev => ['CANCELLED drop action', ...prev.slice(0, 4)]);
    };
    return <div style={{
      width: '400px'
    }}>
        <h3 style={{
        marginBottom: '8px',
        fontSize: '14px',
        color: '#666'
      }}>
          Nested Folder Tree - Drag & Drop with Confirmation
        </h3>
        <p style={{
        marginBottom: '12px',
        fontSize: '12px',
        color: '#999'
      }}>
          Click chevron to expand • Drag to: top = before, middle = inside, bottom = after • Drop to
          see confirmation popup
        </p>

        <div style={{
        marginBottom: '12px',
        display: 'flex',
        gap: '8px'
      }}>
          <button onClick={expandAll} style={{
          padding: '4px 12px',
          fontSize: '12px',
          border: '1px solid #d1d5db',
          borderRadius: '4px',
          backgroundColor: '#fff',
          cursor: 'pointer'
        }}>
            Expand All
          </button>
          <button onClick={collapseAll} style={{
          padding: '4px 12px',
          fontSize: '12px',
          border: '1px solid #d1d5db',
          borderRadius: '4px',
          backgroundColor: '#fff',
          cursor: 'pointer'
        }}>
            Collapse All
          </button>
        </div>

        <TreeSortableContainer showDropConfirmation onMove={handleMove} onDuplicate={handleDuplicate} onCancel={handleCancel}>
          <div style={{
          border: '1px solid #e1e5e9',
          borderRadius: '8px',
          padding: '8px',
          backgroundColor: '#f9fafb',
          maxHeight: '400px',
          overflowY: 'auto'
        }}>
            {folders.map((folder, index) => <FolderNode key={folder.id} folder={folder} index={index} depth={0} parentId={null} isLast={index === folders.length - 1} expandedIds={expandedIds} onToggle={toggleFolder} canDropOn={canDropOn} onDrop={handleMove} />)}
          </div>
        </TreeSortableContainer>

        {actionLog.length > 0 && <div style={{
        marginTop: '16px',
        padding: '8px 12px',
        backgroundColor: '#f0fdf4',
        border: '1px solid #86efac',
        borderRadius: '4px',
        fontSize: '11px',
        color: '#166534'
      }}>
            <div style={{
          fontWeight: 600,
          marginBottom: '4px'
        }}>Recent Actions:</div>
            {actionLog.map((action, i) => <div key={i} style={{
          opacity: 1 - i * 0.15
        }}>
                ✓ {action}
              </div>)}
          </div>}
      </div>;
  }
}`,...(It=(yt=oe.parameters)==null?void 0:yt.docs)==null?void 0:It.source}}};const rs=["BasicSortableItem","WithDragHandle","UsingSortableList","WithCustomDragPreview","DisabledState","HorizontalFilterChipsWithFilterItem","TreeSortableNested"];export{K as BasicSortableItem,ne as DisabledState,ie as HorizontalFilterChipsWithFilterItem,oe as TreeSortableNested,te as UsingSortableList,re as WithCustomDragPreview,ee as WithDragHandle,rs as __namedExportsOrder,ts as default};
