import{j as d}from"./jsx-runtime-2f188e98.js";import{r as m,g as or}from"./index-3553ef47.js";import{S as ar}from"./dragNDrop-624e49aa.js";import{F as Ue}from"./filterItem-cda71fac.js";import{c as ue}from"./bind-d8141dee.js";import{r as xt}from"./index-d0bd1ed5.js";import{u as dr}from"./useOnClickOutside-b0fffa8f.js";import{i as Ve}from"./isEmpty-6ac0b123.js";import"./useEllipsisTitle-1cddebe3.js";import"./actionMenu-4acef103.js";import"./meatballMenu-8b9878d9.js";import"./baseIconButton-9b03f096.js";import"./popover-79ca4f84.js";import"./floating-ui.react-60d1f04e.js";import"./floating-ui.react-dom-a94e415a.js";import"./floatingUi-59569704.js";function Oe(t){return typeof t=="function"}const wt=m.createContext({dragDropManager:void 0});function k(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var ze=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ve=function(){return Math.random().toString(36).substring(7).split("").join(".")},$e={INIT:"@@redux/INIT"+ve(),REPLACE:"@@redux/REPLACE"+ve(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ve()}};function lr(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Et(t,e,r){var n;if(typeof e=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(k(0));if(typeof e=="function"&&typeof r>"u"&&(r=e,e=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(k(1));return r(Et)(t,e)}if(typeof t!="function")throw new Error(k(2));var i=t,s=e,o=[],a=o,l=!1;function c(){a===o&&(a=o.slice())}function u(){if(l)throw new Error(k(3));return s}function D(g){if(typeof g!="function")throw new Error(k(4));if(l)throw new Error(k(5));var f=!0;return c(),a.push(g),function(){if(f){if(l)throw new Error(k(6));f=!1,c();var T=a.indexOf(g);a.splice(T,1),o=null}}}function v(g){if(!lr(g))throw new Error(k(7));if(typeof g.type>"u")throw new Error(k(8));if(l)throw new Error(k(9));try{l=!0,s=i(s,g)}finally{l=!1}for(var f=o=a,p=0;p<f.length;p++){var T=f[p];T()}return g}function h(g){if(typeof g!="function")throw new Error(k(10));i=g,v({type:$e.REPLACE})}function I(){var g,f=D;return g={subscribe:function(T){if(typeof T!="object"||T===null)throw new Error(k(11));function y(){T.next&&T.next(u())}y();var w=f(y);return{unsubscribe:w}}},g[ze]=function(){return this},g}return v({type:$e.INIT}),n={dispatch:v,subscribe:D,getState:u,replaceReducer:h},n[ze]=I,n}function S(t,e,...r){if(cr()&&e===void 0)throw new Error("invariant requires an error message argument");if(!t){let n;if(e===void 0)n=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let i=0;n=new Error(e.replace(/%s/g,function(){return r[i++]})),n.name="Invariant Violation"}throw n.framesToPop=1,n}}function cr(){return typeof process<"u"&&process.env.NODE_ENV==="production"}function ur(t,e,r){return e.split(".").reduce((n,i)=>n&&n[i]?n[i]:r||null,t)}function gr(t,e){return t.filter(r=>r!==e)}function Ct(t){return typeof t=="object"}function pr(t,e){const r=new Map,n=s=>{r.set(s,r.has(s)?r.get(s)+1:1)};t.forEach(n),e.forEach(n);const i=[];return r.forEach((s,o)=>{s===1&&i.push(o)}),i}function fr(t,e){return t.filter(r=>e.indexOf(r)>-1)}const Pe="dnd-core/INIT_COORDS",ge="dnd-core/BEGIN_DRAG",Ne="dnd-core/PUBLISH_DRAG_SOURCE",pe="dnd-core/HOVER",fe="dnd-core/DROP",he="dnd-core/END_DRAG";function Ye(t,e){return{type:Pe,payload:{sourceClientOffset:e||null,clientOffset:t||null}}}const hr={type:Pe,payload:{clientOffset:null,sourceClientOffset:null}};function mr(t){return function(r=[],n={publishSource:!0}){const{publishSource:i=!0,clientOffset:s,getSourceClientOffset:o}=n,a=t.getMonitor(),l=t.getRegistry();t.dispatch(Ye(s)),vr(r,a,l);const c=Ir(r,a);if(c==null){t.dispatch(hr);return}let u=null;if(s){if(!o)throw new Error("getSourceClientOffset must be defined");Dr(o),u=o(c)}t.dispatch(Ye(s,u));const v=l.getSource(c).beginDrag(a,c);if(v==null)return;yr(v),l.pinSource(c);const h=l.getSourceType(c);return{type:ge,payload:{itemType:h,item:v,sourceId:c,clientOffset:s||null,sourceClientOffset:u||null,isSourcePublic:!!i}}}}function vr(t,e,r){S(!e.isDragging(),"Cannot call beginDrag while dragging."),t.forEach(function(n){S(r.getSource(n),"Expected sourceIds to be registered.")})}function Dr(t){S(typeof t=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function yr(t){S(Ct(t),"Item must be an object.")}function Ir(t,e){let r=null;for(let n=t.length-1;n>=0;n--)if(e.canDragSource(t[n])){r=t[n];break}return r}function Tr(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function br(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){Tr(t,i,r[i])})}return t}function Sr(t){return function(r={}){const n=t.getMonitor(),i=t.getRegistry();Or(n),Er(n).forEach((o,a)=>{const l=xr(o,a,i,n),c={type:fe,payload:{dropResult:br({},r,l)}};t.dispatch(c)})}}function Or(t){S(t.isDragging(),"Cannot call drop while not dragging."),S(!t.didDrop(),"Cannot call drop twice during one drag operation.")}function xr(t,e,r,n){const i=r.getTarget(t);let s=i?i.drop(n,t):void 0;return wr(s),typeof s>"u"&&(s=e===0?{}:n.getDropResult()),s}function wr(t){S(typeof t>"u"||Ct(t),"Drop result must either be an object or undefined.")}function Er(t){const e=t.getTargetIds().filter(t.canDropOnTarget,t);return e.reverse(),e}function Cr(t){return function(){const r=t.getMonitor(),n=t.getRegistry();Rr(r);const i=r.getSourceId();return i!=null&&(n.getSource(i,!0).endDrag(r,i),n.unpinSource()),{type:he}}}function Rr(t){S(t.isDragging(),"Cannot call endDrag while not dragging.")}function xe(t,e){return e===null?t===null:Array.isArray(t)?t.some(r=>r===e):t===e}function Pr(t){return function(r,{clientOffset:n}={}){Nr(r);const i=r.slice(0),s=t.getMonitor(),o=t.getRegistry(),a=s.getItemType();return Lr(i,o,a),_r(i,s,o),Ar(i,s,o),{type:pe,payload:{targetIds:i,clientOffset:n||null}}}}function Nr(t){S(Array.isArray(t),"Expected targetIds to be an array.")}function _r(t,e,r){S(e.isDragging(),"Cannot call hover while not dragging."),S(!e.didDrop(),"Cannot call hover after drop.");for(let n=0;n<t.length;n++){const i=t[n];S(t.lastIndexOf(i)===n,"Expected targetIds to be unique in the passed array.");const s=r.getTarget(i);S(s,"Expected targetIds to be registered.")}}function Lr(t,e,r){for(let n=t.length-1;n>=0;n--){const i=t[n],s=e.getTargetType(i);xe(s,r)||t.splice(n,1)}}function Ar(t,e,r){t.forEach(function(n){r.getTarget(n).hover(e,n)})}function Fr(t){return function(){if(t.getMonitor().isDragging())return{type:Ne}}}function Mr(t){return{beginDrag:mr(t),publishDragSource:Fr(t),hover:Pr(t),drop:Sr(t),endDrag:Cr(t)}}class kr{receiveBackend(e){this.backend=e}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const e=this,{dispatch:r}=this.store;function n(s){return(...o)=>{const a=s.apply(e,o);typeof a<"u"&&r(a)}}const i=Mr(this);return Object.keys(i).reduce((s,o)=>{const a=i[o];return s[o]=n(a),s},{})}dispatch(e){this.store.dispatch(e)}constructor(e,r){this.isSetUp=!1,this.handleRefCountChange=()=>{const n=this.store.getState().refCount>0;this.backend&&(n&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!n&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=e,this.monitor=r,e.subscribe(this.handleRefCountChange)}}function jr(t,e){return{x:t.x+e.x,y:t.y+e.y}}function Rt(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Hr(t){const{clientOffset:e,initialClientOffset:r,initialSourceClientOffset:n}=t;return!e||!r||!n?null:Rt(jr(e,n),r)}function Br(t){const{clientOffset:e,initialClientOffset:r}=t;return!e||!r?null:Rt(e,r)}const G=[],_e=[];G.__IS_NONE__=!0;_e.__IS_ALL__=!0;function qr(t,e){return t===G?!1:t===_e||typeof e>"u"?!0:fr(e,t).length>0}class Ur{subscribeToStateChange(e,r={}){const{handlerIds:n}=r;S(typeof e=="function","listener must be a function."),S(typeof n>"u"||Array.isArray(n),"handlerIds, when specified, must be an array of strings.");let i=this.store.getState().stateId;const s=()=>{const o=this.store.getState(),a=o.stateId;try{a===i||a===i+1&&!qr(o.dirtyHandlerIds,n)||e()}finally{i=a}};return this.store.subscribe(s)}subscribeToOffsetChange(e){S(typeof e=="function","listener must be a function.");let r=this.store.getState().dragOffset;const n=()=>{const i=this.store.getState().dragOffset;i!==r&&(r=i,e())};return this.store.subscribe(n)}canDragSource(e){if(!e)return!1;const r=this.registry.getSource(e);return S(r,`Expected to find a valid source. sourceId=${e}`),this.isDragging()?!1:r.canDrag(this,e)}canDropOnTarget(e){if(!e)return!1;const r=this.registry.getTarget(e);if(S(r,`Expected to find a valid target. targetId=${e}`),!this.isDragging()||this.didDrop())return!1;const n=this.registry.getTargetType(e),i=this.getItemType();return xe(n,i)&&r.canDrop(this,e)}isDragging(){return!!this.getItemType()}isDraggingSource(e){if(!e)return!1;const r=this.registry.getSource(e,!0);if(S(r,`Expected to find a valid source. sourceId=${e}`),!this.isDragging()||!this.isSourcePublic())return!1;const n=this.registry.getSourceType(e),i=this.getItemType();return n!==i?!1:r.isDragging(this,e)}isOverTarget(e,r={shallow:!1}){if(!e)return!1;const{shallow:n}=r;if(!this.isDragging())return!1;const i=this.registry.getTargetType(e),s=this.getItemType();if(s&&!xe(i,s))return!1;const o=this.getTargetIds();if(!o.length)return!1;const a=o.indexOf(e);return n?a===o.length-1:a>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return Hr(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return Br(this.store.getState().dragOffset)}constructor(e,r){this.store=e,this.registry=r}}const We=typeof global<"u"?global:self,Pt=We.MutationObserver||We.WebKitMutationObserver;function Nt(t){return function(){const r=setTimeout(i,0),n=setInterval(i,50);function i(){clearTimeout(r),clearInterval(n),t()}}}function Vr(t){let e=1;const r=new Pt(t),n=document.createTextNode("");return r.observe(n,{characterData:!0}),function(){e=-e,n.data=e}}const zr=typeof Pt=="function"?Vr:Nt;class $r{enqueueTask(e){const{queue:r,requestFlush:n}=this;r.length||(n(),this.flushing=!0),r[r.length]=e}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:e}=this;for(;this.index<e.length;){const r=this.index;if(this.index++,e[r].call(),this.index>this.capacity){for(let n=0,i=e.length-this.index;n<i;n++)e[n]=e[n+this.index];e.length-=this.index,this.index=0}}e.length=0,this.index=0,this.flushing=!1},this.registerPendingError=e=>{this.pendingErrors.push(e),this.requestErrorThrow()},this.requestFlush=zr(this.flush),this.requestErrorThrow=Nt(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class Yr{call(){try{this.task&&this.task()}catch(e){this.onError(e)}finally{this.task=null,this.release(this)}}constructor(e,r){this.onError=e,this.release=r,this.task=null}}class Wr{create(e){const r=this.freeTasks,n=r.length?r.pop():new Yr(this.onError,i=>r[r.length]=i);return n.task=e,n}constructor(e){this.onError=e,this.freeTasks=[]}}const _t=new $r,Gr=new Wr(_t.registerPendingError);function Xr(t){_t.enqueueTask(Gr.create(t))}const Le="dnd-core/ADD_SOURCE",Ae="dnd-core/ADD_TARGET",Fe="dnd-core/REMOVE_SOURCE",me="dnd-core/REMOVE_TARGET";function Zr(t){return{type:Le,payload:{sourceId:t}}}function Qr(t){return{type:Ae,payload:{targetId:t}}}function Jr(t){return{type:Fe,payload:{sourceId:t}}}function Kr(t){return{type:me,payload:{targetId:t}}}function en(t){S(typeof t.canDrag=="function","Expected canDrag to be a function."),S(typeof t.beginDrag=="function","Expected beginDrag to be a function."),S(typeof t.endDrag=="function","Expected endDrag to be a function.")}function tn(t){S(typeof t.canDrop=="function","Expected canDrop to be a function."),S(typeof t.hover=="function","Expected hover to be a function."),S(typeof t.drop=="function","Expected beginDrag to be a function.")}function we(t,e){if(e&&Array.isArray(t)){t.forEach(r=>we(r,!1));return}S(typeof t=="string"||typeof t=="symbol",e?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var j;(function(t){t.SOURCE="SOURCE",t.TARGET="TARGET"})(j||(j={}));let rn=0;function nn(){return rn++}function sn(t){const e=nn().toString();switch(t){case j.SOURCE:return`S${e}`;case j.TARGET:return`T${e}`;default:throw new Error(`Unknown Handler Role: ${t}`)}}function Ge(t){switch(t[0]){case"S":return j.SOURCE;case"T":return j.TARGET;default:throw new Error(`Cannot parse handler ID: ${t}`)}}function Xe(t,e){const r=t.entries();let n=!1;do{const{done:i,value:[,s]}=r.next();if(s===e)return!0;n=!!i}while(!n);return!1}class on{addSource(e,r){we(e),en(r);const n=this.addHandler(j.SOURCE,e,r);return this.store.dispatch(Zr(n)),n}addTarget(e,r){we(e,!0),tn(r);const n=this.addHandler(j.TARGET,e,r);return this.store.dispatch(Qr(n)),n}containsHandler(e){return Xe(this.dragSources,e)||Xe(this.dropTargets,e)}getSource(e,r=!1){return S(this.isSourceId(e),"Expected a valid source ID."),r&&e===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(e)}getTarget(e){return S(this.isTargetId(e),"Expected a valid target ID."),this.dropTargets.get(e)}getSourceType(e){return S(this.isSourceId(e),"Expected a valid source ID."),this.types.get(e)}getTargetType(e){return S(this.isTargetId(e),"Expected a valid target ID."),this.types.get(e)}isSourceId(e){return Ge(e)===j.SOURCE}isTargetId(e){return Ge(e)===j.TARGET}removeSource(e){S(this.getSource(e),"Expected an existing source."),this.store.dispatch(Jr(e)),Xr(()=>{this.dragSources.delete(e),this.types.delete(e)})}removeTarget(e){S(this.getTarget(e),"Expected an existing target."),this.store.dispatch(Kr(e)),this.dropTargets.delete(e),this.types.delete(e)}pinSource(e){const r=this.getSource(e);S(r,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=r}unpinSource(){S(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(e,r,n){const i=sn(e);return this.types.set(i,r),e===j.SOURCE?this.dragSources.set(i,n):e===j.TARGET&&this.dropTargets.set(i,n),i}constructor(e){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=e}}const an=(t,e)=>t===e;function dn(t,e){return!t&&!e?!0:!t||!e?!1:t.x===e.x&&t.y===e.y}function ln(t,e,r=an){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(!r(t[n],e[n]))return!1;return!0}function cn(t=G,e){switch(e.type){case pe:break;case Le:case Ae:case me:case Fe:return G;case ge:case Ne:case he:case fe:default:return _e}const{targetIds:r=[],prevTargetIds:n=[]}=e.payload,i=pr(r,n);if(!(i.length>0||!ln(r,n)))return G;const o=n[n.length-1],a=r[r.length-1];return o!==a&&(o&&i.push(o),a&&i.push(a)),i}function un(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function gn(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){un(t,i,r[i])})}return t}const Ze={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function pn(t=Ze,e){const{payload:r}=e;switch(e.type){case Pe:case ge:return{initialSourceClientOffset:r.sourceClientOffset,initialClientOffset:r.clientOffset,clientOffset:r.clientOffset};case pe:return dn(t.clientOffset,r.clientOffset)?t:gn({},t,{clientOffset:r.clientOffset});case he:case fe:return Ze;default:return t}}function fn(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function $(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){fn(t,i,r[i])})}return t}const hn={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function mn(t=hn,e){const{payload:r}=e;switch(e.type){case ge:return $({},t,{itemType:r.itemType,item:r.item,sourceId:r.sourceId,isSourcePublic:r.isSourcePublic,dropResult:null,didDrop:!1});case Ne:return $({},t,{isSourcePublic:!0});case pe:return $({},t,{targetIds:r.targetIds});case me:return t.targetIds.indexOf(r.targetId)===-1?t:$({},t,{targetIds:gr(t.targetIds,r.targetId)});case fe:return $({},t,{dropResult:r.dropResult,didDrop:!0,targetIds:[]});case he:return $({},t,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return t}}function vn(t=0,e){switch(e.type){case Le:case Ae:return t+1;case Fe:case me:return t-1;default:return t}}function Dn(t=0){return t+1}function yn(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function In(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){yn(t,i,r[i])})}return t}function Tn(t={},e){return{dirtyHandlerIds:cn(t.dirtyHandlerIds,{type:e.type,payload:In({},e.payload,{prevTargetIds:ur(t,"dragOperation.targetIds",[])})}),dragOffset:pn(t.dragOffset,e),refCount:vn(t.refCount,e),dragOperation:mn(t.dragOperation,e),stateId:Dn(t.stateId)}}function bn(t,e=void 0,r={},n=!1){const i=Sn(n),s=new Ur(i,new on(i)),o=new kr(i,s),a=t(o,e,r);return o.receiveBackend(a),o}function Sn(t){const e=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return Et(Tn,t&&e&&e({name:"dnd-core",instanceId:"dnd-core"}))}function On(t,e){if(t==null)return{};var r=xn(t,e),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function xn(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,s;for(s=0;s<n.length;s++)i=n[s],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}let Qe=0;const ae=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var wn=m.memo(function(e){var{children:r}=e,n=On(e,["children"]);const[i,s]=En(n);return m.useEffect(()=>{if(s){const o=Lt();return++Qe,()=>{--Qe===0&&(o[ae]=null)}}},[]),d.jsx(wt.Provider,{value:i,children:r})});function En(t){if("manager"in t)return[{dragDropManager:t.manager},!1];const e=Cn(t.backend,t.context,t.options,t.debugMode),r=!t.context;return[e,r]}function Cn(t,e=Lt(),r,n){const i=e;return i[ae]||(i[ae]={dragDropManager:bn(t,e,r,n)}),i[ae]}function Lt(){return typeof global<"u"?global:window}var Rn=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,i,s;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(i=n;i--!==0;)if(!t(e[i],r[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(s=Object.keys(e),n=s.length,n!==Object.keys(r).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(r,s[i]))return!1;for(i=n;i--!==0;){var o=s[i];if(!t(e[o],r[o]))return!1}return!0}return e!==e&&r!==r};const Pn=or(Rn),V=typeof window<"u"?m.useLayoutEffect:m.useEffect;function At(t,e,r){const[n,i]=m.useState(()=>e(t)),s=m.useCallback(()=>{const o=e(t);Pn(n,o)||(i(o),r&&r())},[n,t,r]);return V(s),[n,s]}function Nn(t,e,r){const[n,i]=At(t,e,r);return V(function(){const o=t.getHandlerId();if(o!=null)return t.subscribeToStateChange(i,{handlerIds:[o]})},[t,i]),n}function Ft(t,e,r){return Nn(e,t||(()=>({})),()=>r.reconnect())}function Mt(t,e){const r=[...e||[]];return e==null&&typeof t!="function"&&r.push(t),m.useMemo(()=>typeof t=="function"?t():t,r)}function _n(t){return m.useMemo(()=>t.hooks.dragSource(),[t])}function Ln(t){return m.useMemo(()=>t.hooks.dragPreview(),[t])}let De=!1,ye=!1;class An{receiveHandlerId(e){this.sourceId=e}getHandlerId(){return this.sourceId}canDrag(){S(!De,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return De=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{De=!1}}isDragging(){if(!this.sourceId)return!1;S(!ye,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return ye=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{ye=!1}}subscribeToStateChange(e,r){return this.internalMonitor.subscribeToStateChange(e,r)}isDraggingSource(e){return this.internalMonitor.isDraggingSource(e)}isOverTarget(e,r){return this.internalMonitor.isOverTarget(e,r)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(e){return this.internalMonitor.subscribeToOffsetChange(e)}canDragSource(e){return this.internalMonitor.canDragSource(e)}canDropOnTarget(e){return this.internalMonitor.canDropOnTarget(e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.sourceId=null,this.internalMonitor=e.getMonitor()}}let Ie=!1;class Fn{receiveHandlerId(e){this.targetId=e}getHandlerId(){return this.targetId}subscribeToStateChange(e,r){return this.internalMonitor.subscribeToStateChange(e,r)}canDrop(){if(!this.targetId)return!1;S(!Ie,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return Ie=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{Ie=!1}}isOver(e){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,e):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.targetId=null,this.internalMonitor=e.getMonitor()}}function Mn(t,e,r){const n=r.getRegistry(),i=n.addTarget(t,e);return[i,()=>n.removeTarget(i)]}function kn(t,e,r){const n=r.getRegistry(),i=n.addSource(t,e);return[i,()=>n.removeSource(i)]}function Ee(t,e,r,n){let i=r?r.call(n,t,e):void 0;if(i!==void 0)return!!i;if(t===e)return!0;if(typeof t!="object"||!t||typeof e!="object"||!e)return!1;const s=Object.keys(t),o=Object.keys(e);if(s.length!==o.length)return!1;const a=Object.prototype.hasOwnProperty.bind(e);for(let l=0;l<s.length;l++){const c=s[l];if(!a(c))return!1;const u=t[c],D=e[c];if(i=r?r.call(n,u,D,c):void 0,i===!1||i===void 0&&u!==D)return!1}return!0}function Ce(t){return t!==null&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function jn(t){if(typeof t.type=="string")return;const e=t.type.displayName||t.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${e} into a <div>, or turn it into a drag source or a drop target itself.`)}function Hn(t){return(e=null,r=null)=>{if(!m.isValidElement(e)){const s=e;return t(s,r),s}const n=e;return jn(n),Bn(n,r?s=>t(s,r):t)}}function kt(t){const e={};return Object.keys(t).forEach(r=>{const n=t[r];if(r.endsWith("Ref"))e[r]=t[r];else{const i=Hn(n);e[r]=()=>i}}),e}function Je(t,e){typeof t=="function"?t(e):t.current=e}function Bn(t,e){const r=t.ref;return S(typeof r!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r?m.cloneElement(t,{ref:n=>{Je(r,n),Je(e,n)}}):m.cloneElement(t,{ref:e})}class qn{receiveHandlerId(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(e){this.dragSourceOptionsInternal=e}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(e){this.dragPreviewOptionsInternal=e}reconnect(){const e=this.reconnectDragSource();this.reconnectDragPreview(e)}reconnectDragSource(){const e=this.dragSource,r=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return r&&this.disconnectDragSource(),this.handlerId?e?(r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)),r):(this.lastConnectedDragSource=e,r):r}reconnectDragPreview(e=!1){const r=this.dragPreview,n=e||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(n&&this.disconnectDragPreview(),!!this.handlerId){if(!r){this.lastConnectedDragPreview=r;return}n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=r,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,r,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!Ee(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!Ee(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(e){this.hooks=kt({dragSource:(r,n)=>{this.clearDragSource(),this.dragSourceOptions=n||null,Ce(r)?this.dragSourceRef=r:this.dragSourceNode=r,this.reconnectDragSource()},dragPreview:(r,n)=>{this.clearDragPreview(),this.dragPreviewOptions=n||null,Ce(r)?this.dragPreviewRef=r:this.dragPreviewNode=r,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=e}}class Un{get connectTarget(){return this.dropTarget}reconnect(){const e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();const r=this.dropTarget;if(this.handlerId){if(!r){this.lastConnectedDropTarget=r;return}e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=r,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,r,this.dropTargetOptions))}}receiveHandlerId(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(e){this.dropTargetOptionsInternal=e}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!Ee(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(e){this.hooks=kt({dropTarget:(r,n)=>{this.clearDropTarget(),this.dropTargetOptions=n,Ce(r)?this.dropTargetRef=r:this.dropTargetNode=r,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=e}}function z(){const{dragDropManager:t}=m.useContext(wt);return S(t!=null,"Expected drag drop context"),t}function Vn(t,e){const r=z(),n=m.useMemo(()=>new qn(r.getBackend()),[r]);return V(()=>(n.dragSourceOptions=t||null,n.reconnect(),()=>n.disconnectDragSource()),[n,t]),V(()=>(n.dragPreviewOptions=e||null,n.reconnect(),()=>n.disconnectDragPreview()),[n,e]),n}function zn(){const t=z();return m.useMemo(()=>new An(t),[t])}class $n{beginDrag(){const e=this.spec,r=this.monitor;let n=null;return typeof e.item=="object"?n=e.item:typeof e.item=="function"?n=e.item(r):n={},n??null}canDrag(){const e=this.spec,r=this.monitor;return typeof e.canDrag=="boolean"?e.canDrag:typeof e.canDrag=="function"?e.canDrag(r):!0}isDragging(e,r){const n=this.spec,i=this.monitor,{isDragging:s}=n;return s?s(i):r===e.getSourceId()}endDrag(){const e=this.spec,r=this.monitor,n=this.connector,{end:i}=e;i&&i(r.getItem(),r),n.reconnect()}constructor(e,r,n){this.spec=e,this.monitor=r,this.connector=n}}function Yn(t,e,r){const n=m.useMemo(()=>new $n(t,e,r),[e,r]);return m.useEffect(()=>{n.spec=t},[t]),n}function Wn(t){return m.useMemo(()=>{const e=t.type;return S(e!=null,"spec.type must be defined"),e},[t])}function Gn(t,e,r){const n=z(),i=Yn(t,e,r),s=Wn(t);V(function(){if(s!=null){const[a,l]=kn(s,i,n);return e.receiveHandlerId(a),r.receiveHandlerId(a),l}},[n,e,r,i,s])}function jt(t,e){const r=Mt(t,e);S(!r.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const n=zn(),i=Vn(r.options,r.previewOptions);return Gn(r,n,i),[Ft(r.collect,n,i),_n(i),Ln(i)]}function Ht(t){const r=z().getMonitor(),[n,i]=At(r,t);return m.useEffect(()=>r.subscribeToOffsetChange(i)),m.useEffect(()=>r.subscribeToStateChange(i)),n}function Xn(t){return m.useMemo(()=>t.hooks.dropTarget(),[t])}function Zn(t){const e=z(),r=m.useMemo(()=>new Un(e.getBackend()),[e]);return V(()=>(r.dropTargetOptions=t||null,r.reconnect(),()=>r.disconnectDropTarget()),[t]),r}function Qn(){const t=z();return m.useMemo(()=>new Fn(t),[t])}function Jn(t){const{accept:e}=t;return m.useMemo(()=>(S(t.accept!=null,"accept must be defined"),Array.isArray(e)?e:[e]),[e])}class Kn{canDrop(){const e=this.spec,r=this.monitor;return e.canDrop?e.canDrop(r.getItem(),r):!0}hover(){const e=this.spec,r=this.monitor;e.hover&&e.hover(r.getItem(),r)}drop(){const e=this.spec,r=this.monitor;if(e.drop)return e.drop(r.getItem(),r)}constructor(e,r){this.spec=e,this.monitor=r}}function ei(t,e){const r=m.useMemo(()=>new Kn(t,e),[e]);return m.useEffect(()=>{r.spec=t},[t]),r}function ti(t,e,r){const n=z(),i=ei(t,e),s=Jn(t);V(function(){const[a,l]=Mn(s,i,n);return e.receiveHandlerId(a),r.receiveHandlerId(a),l},[n,e,i,r,s.map(o=>o.toString()).join("|")])}function Bt(t,e){const r=Mt(t,e),n=Qn(),i=Zn(r.options);return ti(r,n,i),[Ft(r.collect,n,i),Xn(i)]}function qt(t){let e=null;return()=>(e==null&&(e=t()),e)}function ri(t,e){return t.filter(r=>r!==e)}function ni(t,e){const r=new Set,n=s=>r.add(s);t.forEach(n),e.forEach(n);const i=[];return r.forEach(s=>i.push(s)),i}class ii{enter(e){const r=this.entered.length,n=i=>this.isNodeInDocument(i)&&(!i.contains||i.contains(e));return this.entered=ni(this.entered.filter(n),[e]),r===0&&this.entered.length>0}leave(e){const r=this.entered.length;return this.entered=ri(this.entered.filter(this.isNodeInDocument),e),r>0&&this.entered.length===0}reset(){this.entered=[]}constructor(e){this.entered=[],this.isNodeInDocument=e}}class si{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(e=>{Object.defineProperty(this.item,e,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${e}" until the drop event.`),null}})})}loadDataTransfer(e){if(e){const r={};Object.keys(this.config.exposeProperties).forEach(n=>{const i=this.config.exposeProperties[n];i!=null&&(r[n]={value:i(e,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,r)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(e,r){return r===e.getSourceId()}endDrag(){}constructor(e){this.config=e,this.item={},this.initializeExposedProperties()}}const Ut="__NATIVE_FILE__",Vt="__NATIVE_URL__",zt="__NATIVE_TEXT__",$t="__NATIVE_HTML__",Ke=Object.freeze(Object.defineProperty({__proto__:null,FILE:Ut,HTML:$t,TEXT:zt,URL:Vt},Symbol.toStringTag,{value:"Module"}));function Te(t,e,r){const n=e.reduce((i,s)=>i||t.getData(s),"");return n??r}const Re={[Ut]:{exposeProperties:{files:t=>Array.prototype.slice.call(t.files),items:t=>t.items,dataTransfer:t=>t},matchesTypes:["Files"]},[$t]:{exposeProperties:{html:(t,e)=>Te(t,e,""),dataTransfer:t=>t},matchesTypes:["Html","text/html"]},[Vt]:{exposeProperties:{urls:(t,e)=>Te(t,e,"").split(`
`),dataTransfer:t=>t},matchesTypes:["Url","text/uri-list"]},[zt]:{exposeProperties:{text:(t,e)=>Te(t,e,""),dataTransfer:t=>t},matchesTypes:["Text","text/plain"]}};function oi(t,e){const r=Re[t];if(!r)throw new Error(`native type ${t} has no configuration`);const n=new si(r);return n.loadDataTransfer(e),n}function be(t){if(!t)return null;const e=Array.prototype.slice.call(t.types||[]);return Object.keys(Re).filter(r=>{const n=Re[r];return n!=null&&n.matchesTypes?n.matchesTypes.some(i=>e.indexOf(i)>-1):!1})[0]||null}const ai=qt(()=>/firefox/i.test(navigator.userAgent)),Yt=qt(()=>!!window.safari);class et{interpolate(e){const{xs:r,ys:n,c1s:i,c2s:s,c3s:o}=this;let a=r.length-1;if(e===r[a])return n[a];let l=0,c=o.length-1,u;for(;l<=c;){u=Math.floor(.5*(l+c));const h=r[u];if(h<e)l=u+1;else if(h>e)c=u-1;else return n[u]}a=Math.max(0,c);const D=e-r[a],v=D*D;return n[a]+i[a]*D+s[a]*v+o[a]*D*v}constructor(e,r){const{length:n}=e,i=[];for(let h=0;h<n;h++)i.push(h);i.sort((h,I)=>e[h]<e[I]?-1:1);const s=[],o=[];let a,l;for(let h=0;h<n-1;h++)a=e[h+1]-e[h],l=r[h+1]-r[h],s.push(a),o.push(l/a);const c=[o[0]];for(let h=0;h<s.length-1;h++){const I=o[h],g=o[h+1];if(I*g<=0)c.push(0);else{a=s[h];const f=s[h+1],p=a+f;c.push(3*p/((p+f)/I+(p+a)/g))}}c.push(o[o.length-1]);const u=[],D=[];let v;for(let h=0;h<c.length-1;h++){v=o[h];const I=c[h],g=1/s[h],f=I+c[h+1]-v-v;u.push((v-I-f)*g),D.push(f*g*g)}this.xs=e,this.ys=r,this.c1s=c,this.c2s=u,this.c3s=D}}const di=1;function Wt(t){const e=t.nodeType===di?t:t.parentElement;if(!e)return null;const{top:r,left:n}=e.getBoundingClientRect();return{x:n,y:r}}function Q(t){return{x:t.clientX,y:t.clientY}}function li(t){var e;return t.nodeName==="IMG"&&(ai()||!(!((e=document.documentElement)===null||e===void 0)&&e.contains(t)))}function ci(t,e,r,n){let i=t?e.width:r,s=t?e.height:n;return Yt()&&t&&(s/=window.devicePixelRatio,i/=window.devicePixelRatio),{dragPreviewWidth:i,dragPreviewHeight:s}}function ui(t,e,r,n,i){const s=li(e),a=Wt(s?t:e),l={x:r.x-a.x,y:r.y-a.y},{offsetWidth:c,offsetHeight:u}=t,{anchorX:D,anchorY:v}=n,{dragPreviewWidth:h,dragPreviewHeight:I}=ci(s,e,c,u),g=()=>{let E=new et([0,.5,1],[l.y,l.y/u*I,l.y+I-u]).interpolate(v);return Yt()&&s&&(E+=(window.devicePixelRatio-1)*I),E},f=()=>new et([0,.5,1],[l.x,l.x/c*h,l.x+h-c]).interpolate(D),{offsetX:p,offsetY:T}=i,y=p===0||p,w=T===0||T;return{x:y?p:f(),y:w?T:g()}}class gi{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var e;return!((e=this.globalContext)===null||e===void 0)&&e.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var e;return((e=this.optionsArgs)===null||e===void 0?void 0:e.rootElement)||this.window}constructor(e,r){this.ownerDocument=null,this.globalContext=e,this.optionsArgs=r}}function pi(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function tt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){pi(t,i,r[i])})}return t}class fi{profile(){var e,r;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((e=this.dragStartSourceIds)===null||e===void 0?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((r=this.dragOverTargetIds)===null||r===void 0?void 0:r.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const e=this.rootElement;if(e!==void 0){if(e.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");e.__isReactDndBackendSetUp=!0,this.addEventListeners(e)}}teardown(){const e=this.rootElement;if(e!==void 0&&(e.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var r;(r=this.window)===null||r===void 0||r.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(e,r,n){return this.sourcePreviewNodeOptions.set(e,n),this.sourcePreviewNodes.set(e,r),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDragSource(e,r,n){this.sourceNodes.set(e,r),this.sourceNodeOptions.set(e,n);const i=o=>this.handleDragStart(o,e),s=o=>this.handleSelectStart(o);return r.setAttribute("draggable","true"),r.addEventListener("dragstart",i),r.addEventListener("selectstart",s),()=>{this.sourceNodes.delete(e),this.sourceNodeOptions.delete(e),r.removeEventListener("dragstart",i),r.removeEventListener("selectstart",s),r.setAttribute("draggable","false")}}connectDropTarget(e,r){const n=o=>this.handleDragEnter(o,e),i=o=>this.handleDragOver(o,e),s=o=>this.handleDrop(o,e);return r.addEventListener("dragenter",n),r.addEventListener("dragover",i),r.addEventListener("drop",s),()=>{r.removeEventListener("dragenter",n),r.removeEventListener("dragover",i),r.removeEventListener("drop",s)}}addEventListeners(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const e=this.monitor.getSourceId(),r=this.sourceNodeOptions.get(e);return tt({dropEffect:this.altKeyPressed?"copy":"move"},r||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const e=this.monitor.getSourceId(),r=this.sourcePreviewNodeOptions.get(e);return tt({anchorX:.5,anchorY:.5,captureDraggingState:!1},r||{})}isDraggingNativeItem(){const e=this.monitor.getItemType();return Object.keys(Ke).some(r=>Ke[r]===e)}beginDragNativeItem(e,r){this.clearCurrentDragSourceNode(),this.currentNativeSource=oi(e,r),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e;const r=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var n;return(n=this.rootElement)===null||n===void 0?void 0:n.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},r)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var e;(e=this.window)===null||e===void 0||e.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(e,r){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(r))}handleDragEnter(e,r){this.dragEnterTargetIds.unshift(r)}handleDragOver(e,r){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(r)}handleDrop(e,r){this.dropTargetIds.unshift(r)}constructor(e,r,n){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=i=>{const s=this.sourceNodes.get(i);return s&&Wt(s)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=i=>!!(i&&this.document&&this.document.body&&this.document.body.contains(i)),this.endDragIfSourceWasRemovedFromDOM=()=>{const i=this.currentDragSourceNode;i==null||this.isNodeInDocument(i)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=i=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(i||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=i=>{if(i.defaultPrevented)return;const{dragStartSourceIds:s}=this;this.dragStartSourceIds=null;const o=Q(i);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(s||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:o});const{dataTransfer:a}=i,l=be(a);if(this.monitor.isDragging()){if(a&&typeof a.setDragImage=="function"){const u=this.monitor.getSourceId(),D=this.sourceNodes.get(u),v=this.sourcePreviewNodes.get(u)||D;if(v){const{anchorX:h,anchorY:I,offsetX:g,offsetY:f}=this.getCurrentSourcePreviewNodeOptions(),y=ui(D,v,o,{anchorX:h,anchorY:I},{offsetX:g,offsetY:f});a.setDragImage(v,y.x,y.y)}}try{a==null||a.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(i.target);const{captureDraggingState:c}=this.getCurrentSourcePreviewNodeOptions();c?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(l)this.beginDragNativeItem(l);else{if(a&&!a.types&&(i.target&&!i.target.hasAttribute||!i.target.hasAttribute("draggable")))return;i.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=i=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var s;(s=this.currentNativeSource)===null||s===void 0||s.loadDataTransfer(i.dataTransfer)}if(!this.enterLeaveCounter.enter(i.target)||this.monitor.isDragging())return;const{dataTransfer:a}=i,l=be(a);l&&this.beginDragNativeItem(l,a)},this.handleTopDragEnter=i=>{const{dragEnterTargetIds:s}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=i.altKey,s.length>0&&this.actions.hover(s,{clientOffset:Q(i)}),s.some(a=>this.monitor.canDropOnTarget(a))&&(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=i=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var s;(s=this.currentNativeSource)===null||s===void 0||s.loadDataTransfer(i.dataTransfer)}},this.handleTopDragOver=i=>{const{dragOverTargetIds:s}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none");return}this.altKeyPressed=i.altKey,this.lastClientOffset=Q(i),this.scheduleHover(s),(s||[]).some(a=>this.monitor.canDropOnTarget(a))?(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?i.preventDefault():(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=i=>{this.isDraggingNativeItem()&&i.preventDefault(),this.enterLeaveCounter.leave(i.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=i=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var s;i.preventDefault(),(s=this.currentNativeSource)===null||s===void 0||s.loadDataTransfer(i.dataTransfer)}else be(i.dataTransfer)&&i.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=i=>{const{dropTargetIds:s}=this;this.dropTargetIds=[],this.actions.hover(s,{clientOffset:Q(i)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=i=>{const s=i.target;typeof s.dragDrop=="function"&&(s.tagName==="INPUT"||s.tagName==="SELECT"||s.tagName==="TEXTAREA"||s.isContentEditable||(i.preventDefault(),s.dragDrop()))},this.options=new gi(r,n),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.enterLeaveCounter=new ii(this.isNodeInDocument)}}let J;function Gt(){return J||(J=new Image,J.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),J}const hi=function(e,r,n){return new fi(e,r,n)},X="SORTABLE_ITEM",mi="EXTERNAL_TREE_DROP",L={TOP:"top",BOTTOM:"bottom",LEFT:"left",RIGHT:"right"},de={INDEX_BASED:"indexBased",HOVER:"hover"},le={VERTICAL:"vertical",HORIZONTAL:"horizontal"},N={BEFORE:"before",INSIDE:"inside",AFTER:"after"},A={MOVE:"move",DUPLICATE:"duplicate",CANCEL:"cancel"},vi=t=>{if(!t)return{display:"none"};const{x:e,y:r}=t,n=`translate(${e}px, ${r}px)`;return{transform:n,WebkitTransform:n}},Di=({fromIndex:t,targetIndex:e,isTopZone:r})=>r?t<e?e-1:e:t>e?e+1:e,yi=(t,e)=>t/e<.5?L.TOP:L.BOTTOM,Ii=(t,e)=>t/e<.5?L.LEFT:L.RIGHT,Ti=({id:t,index:e,type:r=X,isDisabled:n=!1,isLast:i=!1,onDrop:s,hideDefaultPreview:o=!1,dropDetectionMode:a=de.INDEX_BASED,orientation:l=le.VERTICAL})=>{const c=a===de.HOVER,u=l===le.HORIZONTAL,D=m.useRef(null),v=m.useRef(null),[h,I]=m.useState(null),[{isDragging:g},f,p]=jt(()=>({type:r,item:{id:t,index:e,type:r},collect:b=>({isDragging:b.isDragging()}),canDrag:()=>!n}),[t,e,r,n]);m.useEffect(()=>{o&&p(Gt(),{captureDraggingState:!0})},[o,p]);const[{isOver:T,draggedItemIndex:y},w]=Bt(()=>({accept:r,collect:b=>{const C=b.getItem(),R=(C==null?void 0:C.id)!==t?b.isOver():!1;return{isOver:R,draggedItemIndex:R?(C==null?void 0:C.index)??null:null}},hover:(b,C)=>{if(!c)return;if(b.id===t){I(null);return}const P=D.current;if(!P){I(null);return}const R=P.getBoundingClientRect(),F=C.getClientOffset();if(!F){I(null);return}let _;if(u){const H=R.right-R.left,M=F.x-R.left;_=Ii(M,H)}else{const H=R.bottom-R.top,M=F.y-R.top;_=yi(M,H)}_===null?(I(null),v.current=null):(I(_),v.current=_)},drop:b=>{if(!(b.id===t||!s))if(c){const C=v.current;if(!C)return;const P=u?C===L.LEFT:C===L.TOP,R=Di({fromIndex:b.index,targetIndex:e,isTopZone:P});s(b.index,R)}else s(b.index,e)}}),[t,e,r,s,i,c,u]),x=m.useCallback(b=>(D.current=b,w(b)),[w]);m.useEffect(()=>{T||I(null)},[T]);const O=c?h:(()=>y===null?null:u?y>e?L.LEFT:L.RIGHT:y>e?L.TOP:L.BOTTOM)();return{isDragging:g,isOver:T,draggedItemIndex:y,dropPosition:O,dragRef:f,dropRef:x,previewRef:p}},bi=(t,e,r=!1,n=!1)=>{if(!t||!e)return null;if(n)return N.INSIDE;const{top:i,height:s}=e,a=t.y-i,l=6;return a>=0&&a<l?N.BEFORE:r&&a>=s-l&&a<=s?N.AFTER:N.INSIDE},Se=(t,e)=>!!(t&&(t.isExternal||t.type===e)),Si=({id:t,index:e,parentId:r=null,type:n=X,isDisabled:i=!1,acceptDrop:s=!0,isLast:o=!1,canDropOn:a,onDrop:l,hideDefaultPreview:c=!1,acceptExternalDrop:u=!1,externalDropType:D=mi})=>{const v=m.useRef(null),h=m.useRef(null),[I,g]=m.useState(null),f=u?[n,D]:n,[{isDragging:p},T,y]=jt(()=>({type:n,item:{id:t,index:e,type:n,parentId:r},collect:O=>({isDragging:O.isDragging()}),canDrag:()=>!i}),[t,e,n,r,i]);m.useEffect(()=>{c&&y(Gt(),{captureDraggingState:!0})},[c,y]);const[{isOver:w},x]=Bt(()=>({accept:f,hover:(O,b)=>{const C=Se(O,D),P=s||u&&C;if(!v.current||O.id===t||!P)return;if(!a||a(O,t)){const F=b.getClientOffset(),_=v.current.getBoundingClientRect();if(F&&_){const M=bi(F,_,o,C&&u);M!==I&&(g(M),h.current=M)}}else I!==null&&(g(null),h.current=null)},collect:O=>{const b=O.getItem(),C=Se(b,D),P=(b==null?void 0:b.id)!==t&&(s||u&&C),R=!a||!b||a(b,t),F=O.isOver({shallow:!0}),_=P&&R;return!F&&I!==null&&(g(null),h.current=null),{isOver:F&&_}},drop:(O,b)=>{if(b.didDrop())return;const C=!a||a(O,t);O.id!==t&&(s||u&&Se(O,D))&&C&&l&&h.current&&l(O,t,h.current)}}),[t,n,s,u,D,o,a,l,I]);return{isDragging:p,isOver:w,dropPosition:I,dragRef:T,dropRef:O=>{v.current=O,x(O)},previewRef:y,elementRef:v}};/*!
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
 */const Y=t=>String(t),Oi=(t,e,r,n="children")=>{const i=Y(t),s=Y(e),o=(u,D)=>{for(const v of D){if(Y(v.id)===u)return v;const h=v[n]||[];if(!Ve(h)){const I=o(u,h);if(I)return I}}return null},a=o(i,r);if(!a)return!1;const l=u=>{for(const D of u){if(Y(D.id)===s)return!0;const v=D[n]||[];if(!Ve(v)&&l(v))return!0}return!1},c=a[n]||[];return l(c)},xi=({items:t,childrenKey:e="children"})=>({canDropOn:m.useCallback((n,i)=>{const s=Y(n.id),o=Y(i);return s===o?!1:!Oi(n.id,i,t,e)},[t,e])}),wi={"sortable-item":"_sortable-item_1l4xp_16","sortable-item--horizontal":"_sortable-item--horizontal_1l4xp_22","sortable-item--drop-target-top":"_sortable-item--drop-target-top_1l4xp_25","sortable-item--drop-target-bottom":"_sortable-item--drop-target-bottom_1l4xp_38","sortable-item--hover-mode":"_sortable-item--hover-mode_1l4xp_51","sortable-item--drop-target-left":"_sortable-item--drop-target-left_1l4xp_67","sortable-item--drop-target-right":"_sortable-item--drop-target-right_1l4xp_77","drag-handle":"_drag-handle_1l4xp_88","drag-handle--disabled":"_drag-handle--disabled_1l4xp_95"},Ei=ue.bind(wi),q=({id:t,index:e,type:r=X,isDisabled:n=!1,className:i,draggingClassName:s,dropTargetClassName:o,onDrop:a,hideDefaultPreview:l=!1,dropDetectionMode:c=de.INDEX_BASED,orientation:u=le.VERTICAL,isLast:D=!1,children:v})=>{const{isDragging:h,dropPosition:I,dragRef:g,dropRef:f,previewRef:p}=Ti({id:t,index:e,type:r,isDisabled:n,onDrop:a,hideDefaultPreview:l,dropDetectionMode:c,orientation:u,isLast:D}),T=Oe(v),y=c===de.HOVER,w=u===le.HORIZONTAL,x=Ei("sortable-item",i,{"sortable-item--horizontal":w,"sortable-item--dragging":h,"sortable-item--hover-mode":y,"sortable-item--drop-target-top":I===L.TOP,"sortable-item--drop-target-bottom":I===L.BOTTOM,"sortable-item--drop-target-left":I===L.LEFT,"sortable-item--drop-target-right":I===L.RIGHT,[s||""]:h&&s,[o||""]:I&&o}),E=O=>{f(O),l||p(O),T||g(O)};return d.jsx("div",{ref:E,className:x,children:T?v({isDragging:h,isOver:I!==null,dragRef:g}):v})};q.__docgenInfo={description:"",methods:[],displayName:"SortableItem",props:{id:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},index:{required:!0,tsType:{name:"number"},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'SORTABLE_ITEM'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},draggingClassName:{required:!1,tsType:{name:"string"},description:""},dropTargetClassName:{required:!1,tsType:{name:"string"},description:""},onDrop:{required:!1,tsType:{name:"signature",type:"function",raw:"(fromIndex: number, toIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"fromIndex"},{type:{name:"number"},name:"toIndex"}],return:{name:"void"}}},description:""},hideDefaultPreview:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},dropDetectionMode:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof DROP_DETECTION_MODE)[keyof typeof DROP_DETECTION_MODE]"},description:"",defaultValue:{value:"'indexBased'",computed:!1}},orientation:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof SORTABLE_ORIENTATION)[keyof typeof SORTABLE_ORIENTATION]"},description:"",defaultValue:{value:"'vertical'",computed:!1}},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ((props: SortableItemRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""}}};const Xt=({items:t,type:e=X,isDisabled:r=!1,className:n,itemClassName:i,onReorder:s,renderItem:o,keyExtractor:a=l=>l.id})=>{const l=m.useCallback((c,u)=>{const D=[...t],[v]=D.splice(c,1);D.splice(u,0,v),s(D)},[t,s]);return d.jsx("div",{className:n,children:t.map((c,u)=>d.jsx(q,{id:a(c),index:u,type:e,isDisabled:r,className:i,onDrop:l,isLast:u===t.length-1,children:({dragRef:D,isDragging:v})=>o(c,u,D,v)},a(c)))})};Xt.__docgenInfo={description:"",methods:[],displayName:"SortableList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'SORTABLE_ITEM'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},itemClassName:{required:!1,tsType:{name:"string"},description:""},onReorder:{required:!0,tsType:{name:"signature",type:"function",raw:"(reorderedItems: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"reorderedItems"}],return:{name:"void"}}},description:""},renderItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T, index: number, dragRef: Ref<HTMLElement>, isDragging: boolean) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"},{type:{name:"Ref",elements:[{name:"HTMLElement"}],raw:"Ref<HTMLElement>"},name:"dragRef"},{type:{name:"boolean"},name:"isDragging"}],return:{name:"ReactNode"}}},description:""},keyExtractor:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string | number",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"",defaultValue:{value:"(item) => item.id",computed:!1}}}};const B={"chip-item":"_chip-item_1q47w_16","chip-item-dragging":"_chip-item-dragging_1q47w_21","chip-drag-preview":"_chip-drag-preview_1q47w_26","custom-drag-preview":"_custom-drag-preview_1q47w_27","chip-wrapper":"_chip-wrapper_1q47w_36","chip-handle":"_chip-handle_1q47w_41","chip-handle-icon":"_chip-handle-icon_1q47w_55","chips-list":"_chips-list_1q47w_72"},Ci={"drag-layer":"_drag-layer_1izcx_1","drag-preview":"_drag-preview_1izcx_11"},rt=ue.bind(Ci),Zt=({type:t,renderPreview:e,className:r,previewClassName:n,portalTarget:i=document.body})=>{const{itemType:s,isDragging:o,item:a,clientOffset:l}=Ht(u=>({item:u.getItem(),itemType:u.getItemType(),clientOffset:u.getClientOffset(),isDragging:u.isDragging()}));if(!o||s!==t||!a||!i)return null;const c=d.jsx("div",{className:rt("drag-layer",r),children:d.jsx("div",{className:rt("drag-preview",n),style:vi(l),children:e(a)})});return xt.createPortal(c,i)},Qt=m.createContext(null),Jt=()=>m.useContext(Qt),Ri={"drop-confirmation-popover":"_drop-confirmation-popover_ie1p0_16","drop-confirmation-popover--before":"_drop-confirmation-popover--before_ie1p0_31","drop-confirmation-popover--after":"_drop-confirmation-popover--after_ie1p0_35","drop-confirmation-popover--inside":"_drop-confirmation-popover--inside_ie1p0_40","drop-confirmation-popover__button":"_drop-confirmation-popover__button_ie1p0_68","drop-confirmation-popover__divider":"_drop-confirmation-popover__divider_ie1p0_84"},W=ue.bind(Ri),nt=2,Pi={[A.MOVE]:"Move",[A.DUPLICATE]:"Duplicate",[A.CANCEL]:"Cancel"},Kt=({children:t,showDropConfirmation:e=!1,confirmationLabels:r,portalTarget:n,onMove:i,onDuplicate:s,onMoveExternal:o,onDuplicateExternal:a,onCancel:l})=>{const[c,u]=m.useState(null),[D,v]=m.useState(null),h=m.useRef(null),I={...Pi,...r},g=m.useCallback(()=>{u(null),v(null)},[]),f=m.useCallback((w,x,E,O)=>{if(!e){const R=w.isExternal?o:i;R==null||R(w,x,E);return}const b=O.getBoundingClientRect(),C=b.left+b.width/2;let P;E===N.BEFORE?P=b.top+nt:E===N.AFTER?P=b.top+b.height+nt:P=b.top,v({top:P,left:C}),u({draggedItem:w,targetId:x,position:E})},[e,i,o]),p=m.useCallback(w=>{if(!c){g();return}const{draggedItem:x,targetId:E,position:O}=c,b=x.isExternal===!0;switch(w){case A.MOVE:b?o==null||o(x,E,O):i==null||i(x,E,O);break;case A.DUPLICATE:b?a==null||a(x,E,O):s==null||s(x,E,O);break;case A.CANCEL:l==null||l();break}g()},[c,i,s,o,a,l,g]);dr(h,c&&e?()=>p(A.CANCEL):void 0);const T={showDropConfirmation:e,pendingDraggedItemId:(c==null?void 0:c.draggedItem.id)??null,pendingTargetId:(c==null?void 0:c.targetId)??null,pendingDropPosition:(c==null?void 0:c.position)??null,requestDrop:f},y=n??(typeof document<"u"?document.body:null);return d.jsxs(Qt.Provider,{value:T,children:[t,c&&D&&y&&xt.createPortal(d.jsxs("div",{ref:h,className:W("drop-confirmation-popover",{"drop-confirmation-popover--before":c.position===N.BEFORE,"drop-confirmation-popover--after":c.position===N.AFTER,"drop-confirmation-popover--inside":c.position===N.INSIDE}),style:{top:D.top,left:D.left},children:[d.jsx("button",{type:"button",className:W("drop-confirmation-popover__button"),onClick:()=>p(A.MOVE),children:I[A.MOVE]}),d.jsx("button",{type:"button",className:W("drop-confirmation-popover__button"),onClick:()=>p(A.DUPLICATE),children:I[A.DUPLICATE]}),d.jsx("div",{className:W("drop-confirmation-popover__divider")}),d.jsx("button",{type:"button",className:W("drop-confirmation-popover__button"),onClick:()=>p(A.CANCEL),children:I[A.CANCEL]})]}),y)]})};Kt.__docgenInfo={description:"",methods:[],displayName:"TreeSortableContainer",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},showDropConfirmation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},confirmationLabels:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"unknown[union]",raw:"(typeof DROP_ACTIONS)[keyof typeof DROP_ACTIONS]"},{name:"string"}],raw:"Record<DropAction, string>"}],raw:"Partial<Record<DropAction, string>>"},description:""},portalTarget:{required:!1,tsType:{name:"union",raw:"Element | null",elements:[{name:"Element"},{name:"null"}]},description:""},onMove:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  draggedItem: TreeDragItem,
  targetId: string | number,
  position: TreeDropPosition,
) => void`,signature:{arguments:[{type:{name:"TreeDragItem"},name:"draggedItem"},{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"targetId"},{type:{name:"union",raw:"TreeDropPositionValue | null",elements:[{name:"unknown[union]",raw:"(typeof TREE_DROP_POSITIONS)[keyof typeof TREE_DROP_POSITIONS]"},{name:"null"}]},name:"position"}],return:{name:"void"}}},description:""},onDuplicate:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  draggedItem: TreeDragItem,
  targetId: string | number,
  position: TreeDropPosition,
) => void`,signature:{arguments:[{type:{name:"TreeDragItem"},name:"draggedItem"},{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"targetId"},{type:{name:"union",raw:"TreeDropPositionValue | null",elements:[{name:"unknown[union]",raw:"(typeof TREE_DROP_POSITIONS)[keyof typeof TREE_DROP_POSITIONS]"},{name:"null"}]},name:"position"}],return:{name:"void"}}},description:""},onMoveExternal:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  draggedItem: TreeDragItem,
  targetId: string | number,
  position: TreeDropPosition,
) => void`,signature:{arguments:[{type:{name:"TreeDragItem"},name:"draggedItem"},{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"targetId"},{type:{name:"union",raw:"TreeDropPositionValue | null",elements:[{name:"unknown[union]",raw:"(typeof TREE_DROP_POSITIONS)[keyof typeof TREE_DROP_POSITIONS]"},{name:"null"}]},name:"position"}],return:{name:"void"}}},description:""},onDuplicateExternal:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  draggedItem: TreeDragItem,
  targetId: string | number,
  position: TreeDropPosition,
) => void`,signature:{arguments:[{type:{name:"TreeDragItem"},name:"draggedItem"},{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"targetId"},{type:{name:"union",raw:"TreeDropPositionValue | null",elements:[{name:"unknown[union]",raw:"(typeof TREE_DROP_POSITIONS)[keyof typeof TREE_DROP_POSITIONS]"},{name:"null"}]},name:"position"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ni={"tree-sortable-item":"_tree-sortable-item_xdaea_16","tree-sortable-item--dragging":"_tree-sortable-item--dragging_xdaea_20","tree-sortable-item--pending":"_tree-sortable-item--pending_xdaea_23","tree-sortable-item--drop-before":"_tree-sortable-item--drop-before_xdaea_29","tree-sortable-item--drop-after":"_tree-sortable-item--drop-after_xdaea_40","tree-sortable-item--drop-inside":"_tree-sortable-item--drop-inside_xdaea_51"},_i=ue.bind(Ni),er=({id:t,index:e,parentId:r,type:n=X,isDisabled:i=!1,acceptDrop:s=!0,isLast:o=!1,canDropOn:a,acceptExternalDrop:l=!1,externalDropType:c,className:u,style:D,draggingClassName:v,dropBeforeClassName:h,dropInsideClassName:I,dropAfterClassName:g,onDrop:f,hideDefaultPreview:p=!1,children:T})=>{const y=Jt(),w=m.useRef(null),x=m.useCallback((U,Be,qe)=>{y!=null&&y.showDropConfirmation&&w.current?y.requestDrop(U,Be,qe,w.current):f==null||f(U,Be,qe)},[y,f]),{isDragging:E,isOver:O,dropPosition:b,dragRef:C,dropRef:P,previewRef:R}=Si({id:t,index:e,parentId:r,type:n,isDisabled:i,acceptDrop:s,isLast:o,canDropOn:a,acceptExternalDrop:l,externalDropType:c,onDrop:x,hideDefaultPreview:p}),F=(y==null?void 0:y.pendingDraggedItemId)===t,_=E||F,H=(y==null?void 0:y.pendingTargetId)===t,M=y==null?void 0:y.pendingDropPosition,ke=O&&b===N.BEFORE||H&&M===N.BEFORE,je=O&&b===N.INSIDE||H&&M===N.INSIDE,He=o&&(O&&b===N.AFTER||H&&M===N.AFTER),ir=Oe(T)?T({isDragging:_,isOver:O||H,dropPosition:H?M??null:b,dragRef:C}):T,sr=_i("tree-sortable-item",u,{"tree-sortable-item--dragging":_,"tree-sortable-item--pending":F,"tree-sortable-item--drop-before":ke,"tree-sortable-item--drop-inside":je,"tree-sortable-item--drop-after":He,[v||""]:_&&v,[h||""]:ke&&h,[I||""]:je&&I,[g||""]:He&&g});return d.jsx("div",{ref:U=>{w.current=U,P(U),Oe(T)||(C(U),R(U))},className:sr,style:D,children:ir})};er.__docgenInfo={description:"",methods:[],displayName:"TreeSortableItem",props:{id:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},index:{required:!0,tsType:{name:"number"},description:""},parentId:{required:!1,tsType:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'SORTABLE_ITEM'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},acceptDrop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},canDropOn:{required:!1,tsType:{name:"signature",type:"function",raw:"(draggedItem: TreeDragItem, targetId: string | number) => boolean",signature:{arguments:[{type:{name:"TreeDragItem"},name:"draggedItem"},{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"targetId"}],return:{name:"boolean"}}},description:""},acceptExternalDrop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},externalDropType:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},draggingClassName:{required:!1,tsType:{name:"string"},description:""},dropBeforeClassName:{required:!1,tsType:{name:"string"},description:""},dropInsideClassName:{required:!1,tsType:{name:"string"},description:""},dropAfterClassName:{required:!1,tsType:{name:"string"},description:""},onDrop:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  draggedItem: TreeDragItem,
  targetId: string | number,
  position: TreeDropPosition,
) => void`,signature:{arguments:[{type:{name:"TreeDragItem"},name:"draggedItem"},{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"targetId"},{type:{name:"union",raw:"TreeDropPositionValue | null",elements:[{name:"unknown[union]",raw:"(typeof TREE_DROP_POSITIONS)[keyof typeof TREE_DROP_POSITIONS]"},{name:"null"}]},name:"position"}],return:{name:"void"}}},description:""},hideDefaultPreview:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ((props: TreeSortableItemRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""}}};const os={title:"DnD/Sortable",component:q,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>d.jsx(wn,{backend:hi,children:d.jsx(t,{})})]},Z={display:"flex",alignItems:"center",gap:"12px",padding:"12px 16px",backgroundColor:"var(--rp-ui-base-bg-000, #fff)",border:"1px solid #e1e5e9",borderRadius:"4px",marginBottom:"8px",cursor:"grab"},Me={cursor:"grab",color:"#9ca3af",display:"flex",alignItems:"center"},ce=()=>d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[d.jsx("circle",{cx:"5",cy:"3",r:"1.5"}),d.jsx("circle",{cx:"11",cy:"3",r:"1.5"}),d.jsx("circle",{cx:"5",cy:"8",r:"1.5"}),d.jsx("circle",{cx:"11",cy:"8",r:"1.5"}),d.jsx("circle",{cx:"5",cy:"13",r:"1.5"}),d.jsx("circle",{cx:"11",cy:"13",r:"1.5"})]}),K={render:()=>{const[t,e]=m.useState([{id:1,name:"Item 1"},{id:2,name:"Item 2"},{id:3,name:"Item 3"}]),r=(n,i)=>{const s=[...t],[o]=s.splice(n,1);s.splice(i,0,o),e(s)};return d.jsxs("div",{style:{width:"300px"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"Drag items to reorder"}),t.map((n,i)=>d.jsx(q,{id:n.id,index:i,onDrop:r,isLast:i===t.length-1,children:d.jsx("div",{style:Z,children:n.name})},n.id))]})}},ee={render:()=>{const[t,e]=m.useState([{id:1,name:"Drag by handle only"},{id:2,name:"Click handle to drag"},{id:3,name:"Third item"}]),r=(n,i)=>{const s=[...t],[o]=s.splice(n,1);s.splice(i,0,o),e(s)};return d.jsxs("div",{style:{width:"300px"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"Use the handle (⋮⋮) to drag items"}),t.map((n,i)=>d.jsx(q,{id:n.id,index:i,onDrop:r,isLast:i===t.length-1,children:({dragRef:s})=>d.jsxs("div",{style:Z,children:[d.jsx("span",{ref:s,style:Me,children:d.jsx(ce,{})}),d.jsx("span",{children:n.name})]})},n.id))]})}},te={render:()=>{const[t,e]=m.useState([{id:1,name:"First task"},{id:2,name:"Second task"},{id:3,name:"Third task"},{id:4,name:"Fourth task"},{id:5,name:"Fifth task"}]);return d.jsxs("div",{style:{width:"350px"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"SortableList Component"}),d.jsx(Xt,{items:t,onReorder:e,renderItem:(r,n,i)=>d.jsxs("div",{style:Z,children:[d.jsx("span",{ref:i,style:Me,children:d.jsx(ce,{})}),d.jsx("span",{children:r.name})]})})]})}},Li={display:"flex",alignItems:"center",gap:"8px",padding:"12px 16px",backgroundColor:"#fff",border:"1px solid #3b82f6",borderRadius:"4px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",fontSize:"14px",fontWeight:500},re={render:()=>{const t="CUSTOM_SORTABLE",[e,r]=m.useState([{id:1,name:"Item with custom preview"},{id:2,name:"Another draggable item"},{id:3,name:"Third draggable item"}]),n=(s,o)=>{const a=[...e],[l]=a.splice(s,1);a.splice(o,0,l),r(a)},i=s=>{const o=e.find(a=>a.id===s.id);return d.jsxs("div",{style:Li,children:[d.jsx(ce,{}),d.jsx("span",{children:(o==null?void 0:o.name)||"Unknown"})]})};return d.jsxs("div",{style:{width:"350px"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"Custom drag preview (styled differently from original)"}),d.jsx(Zt,{type:t,renderPreview:i,previewClassName:B["custom-drag-preview"]}),e.map((s,o)=>d.jsx(q,{id:s.id,index:o,type:t,onDrop:n,hideDefaultPreview:!0,isLast:o===e.length-1,children:({dragRef:a,isDragging:l})=>d.jsxs("div",{style:{...Z,opacity:l?.5:1},children:[d.jsx("span",{ref:a,style:Me,children:d.jsx(ce,{})}),d.jsx("span",{children:s.name})]})},s.id))]})}},ne={render:()=>{const[t]=m.useState([{id:1,name:"Cannot drag this"},{id:2,name:"Also not draggable"},{id:3,name:"Disabled item"}]),e={...Z,opacity:.5,cursor:"not-allowed"};return d.jsxs("div",{style:{width:"300px"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"Disabled sortable items"}),t.map((r,n)=>d.jsx(q,{id:r.id,index:n,isDisabled:!0,isLast:n===t.length-1,children:d.jsx("div",{style:e,children:r.name})},r.id))]})}},Ai=t=>{const[e,r]=m.useState(!1);return m.useEffect(()=>{let n;return t?n=setTimeout(()=>r(!0),50):r(!1),()=>clearTimeout(n)},[t]),e},ie={name:"Horizontal - Filter Chips (FilterItem)",render:()=>{const t="FILTER_ITEM_CHIP",[e,r]=m.useState([{id:1,name:"Personal 1"},{id:2,name:"API tests & Back_ST"},{id:3,name:"Regression"},{id:4,name:"Personal 2"},{id:5,name:"Attribute oriented - AT"},{id:6,name:"Functional"}]),n=(o,a)=>{const l=[...e],[c]=l.splice(o,1);l.splice(a,0,c),r(l)},i=o=>{const a=e.find(l=>l.id===o.id);return d.jsx(Ue,{id:String(o.id),caption:(a==null?void 0:a.name)??"",actions:[]})},s=({dragRef:o,isDragging:a,item:l})=>Ai(a)?null:d.jsxs("div",{className:B["chip-wrapper"],children:[d.jsx("span",{ref:o,className:B["chip-handle"],children:d.jsx("span",{className:B["chip-handle-icon"],children:d.jsx(ar,{})})}),d.jsx(Ue,{id:String(l.id),caption:l.name,actions:[]})]});return d.jsxs("div",{style:{width:"450px",padding:"24px 16px 16px",border:"1px solid #e1e5e9",borderRadius:"8px",backgroundColor:"#f9fafb"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"Hover over a filter to reveal the drag handle, then drag to reorder (FilterItem)"}),d.jsx(Zt,{type:t,renderPreview:i,previewClassName:B["chip-drag-preview"]}),d.jsx("div",{className:B["chips-list"],style:{display:"flex",flexWrap:"wrap",gap:0,paddingTop:"12px"},children:e.map((o,a)=>d.jsx(q,{id:o.id,index:a,type:t,orientation:"horizontal",dropDetectionMode:"hover",hideDefaultPreview:!0,className:B["chip-item"],draggingClassName:B["chip-item-dragging"],onDrop:n,isLast:a===e.length-1,children:({dragRef:l,isDragging:c})=>d.jsx(s,{dragRef:l,isDragging:c,item:o})},o.id))})]})}},Fi=()=>d.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:d.jsx("path",{d:"M1 3.5A1.5 1.5 0 0 1 2.5 2h3.172a1.5 1.5 0 0 1 1.06.44l.829.828a.5.5 0 0 0 .353.147H13.5A1.5 1.5 0 0 1 15 4.914V12.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9z"})}),Mi=()=>d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[d.jsx("path",{d:"M1 4.5A1.5 1.5 0 0 1 2.5 3h3.172a1.5 1.5 0 0 1 1.06.44l.829.828A.5.5 0 0 0 7.914 4.5H13.5A1.5 1.5 0 0 1 15 6v.5H2V4.5z"}),d.jsx("path",{d:"M1.5 7h13l-1.5 7H3L1.5 7z"})]}),ki=({isExpanded:t})=>d.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",style:{transform:t?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.2s ease"},children:d.jsx("path",{d:"M4.5 2L9 6l-4.5 4V2z"})}),ji="FOLDER_ITEM",Hi=[{id:1,name:"Documents",children:[{id:11,name:"Work",children:[{id:111,name:"Reports",children:[]},{id:112,name:"Presentations",children:[]}]},{id:12,name:"Personal",children:[{id:121,name:"Photos",children:[]},{id:122,name:"Receipts",children:[]}]}]},{id:2,name:"Projects",children:[{id:21,name:"UI Kit",children:[]},{id:22,name:"Service UI",children:[]},{id:23,name:"API",children:[]}]},{id:3,name:"Downloads",children:[]},{id:4,name:"Archive",children:[{id:41,name:"2023",children:[]},{id:42,name:"2024",children:[]}]}];let Bi=Date.now();const qi=()=>++Bi,tr=t=>({...t,id:qi(),children:t.children.map(tr)}),rr=(t,e)=>{for(const r of t){if(r.id===e)return r;const n=rr(r.children,e);if(n)return n}return null},se=(t,e)=>{const r=rr(t,e);return(r==null?void 0:r.name)||"Unknown"},Ui=t=>{const e=[],r=n=>{for(const i of n)e.push(i.name),i.children.length>0&&r(i.children)};return r(t),e},Vi=(t,e)=>{const r=/^(.*?)\((\d+)\)$/,n=t.match(r),i=n?n[1]:t;if(!e.includes(i))return i;let s=1;for(;e.includes(`${i}(${s})`);)s++;return`${i}(${s})`},nr=({folder:t,index:e,depth:r,parentId:n,isLast:i,expandedIds:s,onToggle:o,canDropOn:a,onDrop:l})=>{const c=s.has(t.id),u=t.children.length>0,D=Jt(),v=D==null?void 0:D.pendingDraggedItemId,{draggedItem:h}=Ht(f=>({draggedItem:f.getItem()})),I=(()=>{if(!a)return!1;const f=h||(v?{id:v}:null);if(!f)return!1;const p=String(f.id),T=String(t.id);return p===T?!1:!a(f,t.id)})(),g={display:"flex",alignItems:"center",gap:"4px",padding:"6px 8px",backgroundColor:"var(--rp-ui-base-bg-000, #fff)",borderRadius:"4px",cursor:"grab",fontSize:"13px",userSelect:"none"};return d.jsxs(d.Fragment,{children:[d.jsx(er,{id:t.id,index:e,parentId:n,type:ji,isLast:i,canDropOn:a,onDrop:l,style:{"--tree-item-indent":`${r*20}px`},children:({isDragging:f,dragRef:p})=>d.jsxs("div",{ref:p,style:{...g,paddingLeft:`${r*20}px`,opacity:f||I?.4:1,cursor:I?"not-allowed":g.cursor,pointerEvents:f||I?"none":"auto"},children:[d.jsx("span",{onClick:T=>{T.stopPropagation(),u&&o(t.id)},style:{width:"16px",display:"flex",alignItems:"center",justifyContent:"center",color:"#9ca3af",cursor:u?"pointer":"default",visibility:u?"visible":"hidden"},children:d.jsx(ki,{isExpanded:c})}),d.jsx("span",{style:{color:"#f59e0b"},children:c?d.jsx(Mi,{}):d.jsx(Fi,{})}),d.jsx("span",{style:{flex:1},children:t.name})]})}),c&&t.children.map((f,p)=>d.jsx(nr,{folder:f,index:p,depth:r+1,parentId:t.id,isLast:p===t.children.length-1,expandedIds:s,onToggle:o,canDropOn:a,onDrop:l},f.id))]})},oe={name:"Tree Sortable - Nested Folders",render:()=>{const[t,e]=m.useState(Hi),[r,n]=m.useState(new Set([1,2])),[i,s]=m.useState([]),o=g=>{n(f=>{const p=new Set(f);return p.has(g)?p.delete(g):p.add(g),p})},a=()=>{const g=new Set,f=p=>{p.forEach(T=>{T.children.length>0&&(g.add(T.id),f(T.children))})};f(t),n(g)},l=()=>{n(new Set)},{canDropOn:c}=xi({items:t}),u=(g,f)=>{let p=null;const T=g.filter(y=>y.id===f?(p={...y,children:[...y.children]},!1):!0);return p?[T,p]:[T.map(y=>{const[w,x]=u(y.children,f);return x&&(p=x),{...y,children:w}}),p]},D=(g,f,p,T)=>{const y=[];for(let w=0;w<g.length;w++){const x=g[w];x.id===f?T==="before"?(y.push(p),y.push({...x,children:[...x.children]})):T==="after"?(y.push({...x,children:[...x.children]}),y.push(p)):T==="inside"&&(y.push({...x,children:[...x.children,p]}),n(E=>new Set([...E,x.id]))):y.push({...x,children:D(x.children,f,p,T)})}return y},v=(g,f,p)=>{const T=se(t,g.id),y=se(t,f),w=`MOVED "${T}" → ${p==null?void 0:p.toUpperCase()} "${y}"`;s(O=>[w,...O.slice(0,4)]);const[x,E]=u(t,g.id);if(E&&p){const O=D(x,f,E,p);e(O)}},h=(g,f,p)=>{const T=se(t,g.id),y=se(t,f),w=`DUPLICATED "${T}" → ${p==null?void 0:p.toUpperCase()} "${y}"`;s(E=>[w,...E.slice(0,4)]);const[,x]=u(t,g.id);if(x&&p){const E=Ui(t),O={...tr(x),name:Vi(x.name,E)},b=D(t,f,O,p);e(b)}},I=()=>{s(g=>["CANCELLED drop action",...g.slice(0,4)])};return d.jsxs("div",{style:{width:"400px"},children:[d.jsx("h3",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:"Nested Folder Tree - Drag & Drop with Confirmation"}),d.jsx("p",{style:{marginBottom:"12px",fontSize:"12px",color:"#999"},children:"Click chevron to expand • Drag to: top = before, middle = inside, bottom = after • Drop to see confirmation popup"}),d.jsxs("div",{style:{marginBottom:"12px",display:"flex",gap:"8px"},children:[d.jsx("button",{onClick:a,style:{padding:"4px 12px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",backgroundColor:"#fff",cursor:"pointer"},children:"Expand All"}),d.jsx("button",{onClick:l,style:{padding:"4px 12px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",backgroundColor:"#fff",cursor:"pointer"},children:"Collapse All"})]}),d.jsx(Kt,{showDropConfirmation:!0,onMove:v,onDuplicate:h,onCancel:I,children:d.jsx("div",{style:{border:"1px solid #e1e5e9",borderRadius:"8px",padding:"8px",backgroundColor:"#f9fafb",maxHeight:"400px",overflowY:"auto"},children:t.map((g,f)=>d.jsx(nr,{folder:g,index:f,depth:0,parentId:null,isLast:f===t.length-1,expandedIds:r,onToggle:o,canDropOn:c,onDrop:v},g.id))})}),i.length>0&&d.jsxs("div",{style:{marginTop:"16px",padding:"8px 12px",backgroundColor:"#f0fdf4",border:"1px solid #86efac",borderRadius:"4px",fontSize:"11px",color:"#166534"},children:[d.jsx("div",{style:{fontWeight:600,marginBottom:"4px"},children:"Recent Actions:"}),i.map((g,f)=>d.jsxs("div",{style:{opacity:1-f*.15},children:["✓ ",g]},f))]})]})}};var it,st,ot;K.parameters={...K.parameters,docs:{...(it=K.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ot=(st=K.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var at,dt,lt;ee.parameters={...ee.parameters,docs:{...(at=ee.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(lt=(dt=ee.parameters)==null?void 0:dt.docs)==null?void 0:lt.source}}};var ct,ut,gt;te.parameters={...te.parameters,docs:{...(ct=te.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(gt=(ut=te.parameters)==null?void 0:ut.docs)==null?void 0:gt.source}}};var pt,ft,ht;re.parameters={...re.parameters,docs:{...(pt=re.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(ht=(ft=re.parameters)==null?void 0:ft.docs)==null?void 0:ht.source}}};var mt,vt,Dt;ne.parameters={...ne.parameters,docs:{...(mt=ne.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(Dt=(vt=ne.parameters)==null?void 0:vt.docs)==null?void 0:Dt.source}}};var yt,It,Tt;ie.parameters={...ie.parameters,docs:{...(yt=ie.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(Tt=(It=ie.parameters)==null?void 0:It.docs)==null?void 0:Tt.source}}};var bt,St,Ot;oe.parameters={...oe.parameters,docs:{...(bt=oe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(Ot=(St=oe.parameters)==null?void 0:St.docs)==null?void 0:Ot.source}}};const as=["BasicSortableItem","WithDragHandle","UsingSortableList","WithCustomDragPreview","DisabledState","HorizontalFilterChipsWithFilterItem","TreeSortableNested"];export{K as BasicSortableItem,ne as DisabledState,ie as HorizontalFilterChipsWithFilterItem,oe as TreeSortableNested,te as UsingSortableList,re as WithCustomDragPreview,ee as WithDragHandle,as as __namedExportsOrder,os as default};
