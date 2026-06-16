import{j as d}from"./jsx-runtime-2f188e98.js";import{r as b}from"./index-3553ef47.js";import{S as lt}from"./dragNDrop-624e49aa.js";import{F as ce}from"./filterItem-b755c94e.js";import{i as v,D as ct,S as R,a as ut,b as qe,T as ft,u as ht,c as gt,d as pt}from"./treeSortableItem-5243dce9.js";import{i as ue}from"./isEmpty-6ac0b123.js";import"./bind-d8141dee.js";import"./useEllipsisTitle-1cddebe3.js";import"./actionMenu-fb657254.js";import"./details-d199936c.js";import"./baseIconButton-9b03f096.js";import"./popover-8346e5d8.js";import"./floating-ui.react-ea29885b.js";import"./index-d0bd1ed5.js";import"./floatingUi-c696ea36.js";import"./useOnClickOutside-b0fffa8f.js";function w(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var fe=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),J=function(){return Math.random().toString(36).substring(7).split("").join(".")},he={INIT:"@@redux/INIT"+J(),REPLACE:"@@redux/REPLACE"+J(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+J()}};function mt(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function We(t,e,n){var i;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(w(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(w(1));return n(We)(t,e)}if(typeof t!="function")throw new Error(w(2));var r=t,s=e,o=[],a=o,l=!1;function h(){a===o&&(a=o.slice())}function p(){if(l)throw new Error(w(3));return s}function y(c){if(typeof c!="function")throw new Error(w(4));if(l)throw new Error(w(5));var u=!0;return h(),a.push(c),function(){if(u){if(l)throw new Error(w(6));u=!1,h();var x=a.indexOf(c);a.splice(x,1),o=null}}}function m(c){if(!mt(c))throw new Error(w(7));if(typeof c.type>"u")throw new Error(w(8));if(l)throw new Error(w(9));try{l=!0,s=r(s,c)}finally{l=!1}for(var u=o=a,f=0;f<u.length;f++){var x=u[f];x()}return c}function g(c){if(typeof c!="function")throw new Error(w(10));r=c,m({type:he.REPLACE})}function D(){var c,u=y;return c={subscribe:function(x){if(typeof x!="object"||x===null)throw new Error(w(11));function S(){x.next&&x.next(p())}S();var T=u(S);return{unsubscribe:T}}},c[fe]=function(){return this},c}return m({type:he.INIT}),i={dispatch:m,subscribe:y,getState:p,replaceReducer:g},i[fe]=D,i}function vt(t,e,n){return e.split(".").reduce((i,r)=>i&&i[r]?i[r]:n||null,t)}function xt(t,e){return t.filter(n=>n!==e)}function Ge(t){return typeof t=="object"}function yt(t,e){const n=new Map,i=s=>{n.set(s,n.has(s)?n.get(s)+1:1)};t.forEach(i),e.forEach(i);const r=[];return n.forEach((s,o)=>{s===1&&r.push(o)}),r}function St(t,e){return t.filter(n=>e.indexOf(n)>-1)}const re="dnd-core/INIT_COORDS",G="dnd-core/BEGIN_DRAG",ie="dnd-core/PUBLISH_DRAG_SOURCE",Y="dnd-core/HOVER",V="dnd-core/DROP",X="dnd-core/END_DRAG";function ge(t,e){return{type:re,payload:{sourceClientOffset:e||null,clientOffset:t||null}}}const Dt={type:re,payload:{clientOffset:null,sourceClientOffset:null}};function It(t){return function(n=[],i={publishSource:!0}){const{publishSource:r=!0,clientOffset:s,getSourceClientOffset:o}=i,a=t.getMonitor(),l=t.getRegistry();t.dispatch(ge(s)),bt(n,a,l);const h=Et(n,a);if(h==null){t.dispatch(Dt);return}let p=null;if(s){if(!o)throw new Error("getSourceClientOffset must be defined");Tt(o),p=o(h)}t.dispatch(ge(s,p));const m=l.getSource(h).beginDrag(a,h);if(m==null)return;wt(m),l.pinSource(h);const g=l.getSourceType(h);return{type:G,payload:{itemType:g,item:m,sourceId:h,clientOffset:s||null,sourceClientOffset:p||null,isSourcePublic:!!r}}}}function bt(t,e,n){v(!e.isDragging(),"Cannot call beginDrag while dragging."),t.forEach(function(i){v(n.getSource(i),"Expected sourceIds to be registered.")})}function Tt(t){v(typeof t=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function wt(t){v(Ge(t),"Item must be an object.")}function Et(t,e){let n=null;for(let i=t.length-1;i>=0;i--)if(e.canDragSource(t[i])){n=t[i];break}return n}function Ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ct(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){Ot(t,r,n[r])})}return t}function Nt(t){return function(n={}){const i=t.getMonitor(),r=t.getRegistry();Pt(i),Lt(i).forEach((o,a)=>{const l=Rt(o,a,r,i),h={type:V,payload:{dropResult:Ct({},n,l)}};t.dispatch(h)})}}function Pt(t){v(t.isDragging(),"Cannot call drop while not dragging."),v(!t.didDrop(),"Cannot call drop twice during one drag operation.")}function Rt(t,e,n,i){const r=n.getTarget(t);let s=r?r.drop(i,t):void 0;return _t(s),typeof s>"u"&&(s=e===0?{}:i.getDropResult()),s}function _t(t){v(typeof t>"u"||Ge(t),"Drop result must either be an object or undefined.")}function Lt(t){const e=t.getTargetIds().filter(t.canDropOnTarget,t);return e.reverse(),e}function Ft(t){return function(){const n=t.getMonitor(),i=t.getRegistry();jt(n);const r=n.getSourceId();return r!=null&&(i.getSource(r,!0).endDrag(n,r),i.unpinSource()),{type:X}}}function jt(t){v(t.isDragging(),"Cannot call endDrag while not dragging.")}function ee(t,e){return e===null?t===null:Array.isArray(t)?t.some(n=>n===e):t===e}function At(t){return function(n,{clientOffset:i}={}){kt(n);const r=n.slice(0),s=t.getMonitor(),o=t.getRegistry(),a=s.getItemType();return Ht(r,o,a),Mt(r,s,o),Ut(r,s,o),{type:Y,payload:{targetIds:r,clientOffset:i||null}}}}function kt(t){v(Array.isArray(t),"Expected targetIds to be an array.")}function Mt(t,e,n){v(e.isDragging(),"Cannot call hover while not dragging."),v(!e.didDrop(),"Cannot call hover after drop.");for(let i=0;i<t.length;i++){const r=t[i];v(t.lastIndexOf(r)===i,"Expected targetIds to be unique in the passed array.");const s=n.getTarget(r);v(s,"Expected targetIds to be registered.")}}function Ht(t,e,n){for(let i=t.length-1;i>=0;i--){const r=t[i],s=e.getTargetType(r);ee(s,n)||t.splice(i,1)}}function Ut(t,e,n){t.forEach(function(i){n.getTarget(i).hover(e,i)})}function Bt(t){return function(){if(t.getMonitor().isDragging())return{type:ie}}}function zt(t){return{beginDrag:It(t),publishDragSource:Bt(t),hover:At(t),drop:Nt(t),endDrag:Ft(t)}}class $t{receiveBackend(e){this.backend=e}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const e=this,{dispatch:n}=this.store;function i(s){return(...o)=>{const a=s.apply(e,o);typeof a<"u"&&n(a)}}const r=zt(this);return Object.keys(r).reduce((s,o)=>{const a=r[o];return s[o]=i(a),s},{})}dispatch(e){this.store.dispatch(e)}constructor(e,n){this.isSetUp=!1,this.handleRefCountChange=()=>{const i=this.store.getState().refCount>0;this.backend&&(i&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!i&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=e,this.monitor=n,e.subscribe(this.handleRefCountChange)}}function qt(t,e){return{x:t.x+e.x,y:t.y+e.y}}function Ye(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Wt(t){const{clientOffset:e,initialClientOffset:n,initialSourceClientOffset:i}=t;return!e||!n||!i?null:Ye(qt(e,i),n)}function Gt(t){const{clientOffset:e,initialClientOffset:n}=t;return!e||!n?null:Ye(e,n)}const L=[],se=[];L.__IS_NONE__=!0;se.__IS_ALL__=!0;function Yt(t,e){return t===L?!1:t===se||typeof e>"u"?!0:St(e,t).length>0}class Vt{subscribeToStateChange(e,n={}){const{handlerIds:i}=n;v(typeof e=="function","listener must be a function."),v(typeof i>"u"||Array.isArray(i),"handlerIds, when specified, must be an array of strings.");let r=this.store.getState().stateId;const s=()=>{const o=this.store.getState(),a=o.stateId;try{a===r||a===r+1&&!Yt(o.dirtyHandlerIds,i)||e()}finally{r=a}};return this.store.subscribe(s)}subscribeToOffsetChange(e){v(typeof e=="function","listener must be a function.");let n=this.store.getState().dragOffset;const i=()=>{const r=this.store.getState().dragOffset;r!==n&&(n=r,e())};return this.store.subscribe(i)}canDragSource(e){if(!e)return!1;const n=this.registry.getSource(e);return v(n,`Expected to find a valid source. sourceId=${e}`),this.isDragging()?!1:n.canDrag(this,e)}canDropOnTarget(e){if(!e)return!1;const n=this.registry.getTarget(e);if(v(n,`Expected to find a valid target. targetId=${e}`),!this.isDragging()||this.didDrop())return!1;const i=this.registry.getTargetType(e),r=this.getItemType();return ee(i,r)&&n.canDrop(this,e)}isDragging(){return!!this.getItemType()}isDraggingSource(e){if(!e)return!1;const n=this.registry.getSource(e,!0);if(v(n,`Expected to find a valid source. sourceId=${e}`),!this.isDragging()||!this.isSourcePublic())return!1;const i=this.registry.getSourceType(e),r=this.getItemType();return i!==r?!1:n.isDragging(this,e)}isOverTarget(e,n={shallow:!1}){if(!e)return!1;const{shallow:i}=n;if(!this.isDragging())return!1;const r=this.registry.getTargetType(e),s=this.getItemType();if(s&&!ee(r,s))return!1;const o=this.getTargetIds();if(!o.length)return!1;const a=o.indexOf(e);return i?a===o.length-1:a>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return Wt(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return Gt(this.store.getState().dragOffset)}constructor(e,n){this.store=e,this.registry=n}}const pe=typeof global<"u"?global:self,Ve=pe.MutationObserver||pe.WebKitMutationObserver;function Xe(t){return function(){const n=setTimeout(r,0),i=setInterval(r,50);function r(){clearTimeout(n),clearInterval(i),t()}}}function Xt(t){let e=1;const n=new Ve(t),i=document.createTextNode("");return n.observe(i,{characterData:!0}),function(){e=-e,i.data=e}}const Qt=typeof Ve=="function"?Xt:Xe;class Jt{enqueueTask(e){const{queue:n,requestFlush:i}=this;n.length||(i(),this.flushing=!0),n[n.length]=e}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:e}=this;for(;this.index<e.length;){const n=this.index;if(this.index++,e[n].call(),this.index>this.capacity){for(let i=0,r=e.length-this.index;i<r;i++)e[i]=e[i+this.index];e.length-=this.index,this.index=0}}e.length=0,this.index=0,this.flushing=!1},this.registerPendingError=e=>{this.pendingErrors.push(e),this.requestErrorThrow()},this.requestFlush=Qt(this.flush),this.requestErrorThrow=Xe(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class Zt{call(){try{this.task&&this.task()}catch(e){this.onError(e)}finally{this.task=null,this.release(this)}}constructor(e,n){this.onError=e,this.release=n,this.task=null}}class Kt{create(e){const n=this.freeTasks,i=n.length?n.pop():new Zt(this.onError,r=>n[n.length]=r);return i.task=e,i}constructor(e){this.onError=e,this.freeTasks=[]}}const Qe=new Jt,en=new Kt(Qe.registerPendingError);function tn(t){Qe.enqueueTask(en.create(t))}const oe="dnd-core/ADD_SOURCE",ae="dnd-core/ADD_TARGET",de="dnd-core/REMOVE_SOURCE",Q="dnd-core/REMOVE_TARGET";function nn(t){return{type:oe,payload:{sourceId:t}}}function rn(t){return{type:ae,payload:{targetId:t}}}function sn(t){return{type:de,payload:{sourceId:t}}}function on(t){return{type:Q,payload:{targetId:t}}}function an(t){v(typeof t.canDrag=="function","Expected canDrag to be a function."),v(typeof t.beginDrag=="function","Expected beginDrag to be a function."),v(typeof t.endDrag=="function","Expected endDrag to be a function.")}function dn(t){v(typeof t.canDrop=="function","Expected canDrop to be a function."),v(typeof t.hover=="function","Expected hover to be a function."),v(typeof t.drop=="function","Expected beginDrag to be a function.")}function te(t,e){if(e&&Array.isArray(t)){t.forEach(n=>te(n,!1));return}v(typeof t=="string"||typeof t=="symbol",e?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var E;(function(t){t.SOURCE="SOURCE",t.TARGET="TARGET"})(E||(E={}));let ln=0;function cn(){return ln++}function un(t){const e=cn().toString();switch(t){case E.SOURCE:return`S${e}`;case E.TARGET:return`T${e}`;default:throw new Error(`Unknown Handler Role: ${t}`)}}function me(t){switch(t[0]){case"S":return E.SOURCE;case"T":return E.TARGET;default:throw new Error(`Cannot parse handler ID: ${t}`)}}function ve(t,e){const n=t.entries();let i=!1;do{const{done:r,value:[,s]}=n.next();if(s===e)return!0;i=!!r}while(!i);return!1}class fn{addSource(e,n){te(e),an(n);const i=this.addHandler(E.SOURCE,e,n);return this.store.dispatch(nn(i)),i}addTarget(e,n){te(e,!0),dn(n);const i=this.addHandler(E.TARGET,e,n);return this.store.dispatch(rn(i)),i}containsHandler(e){return ve(this.dragSources,e)||ve(this.dropTargets,e)}getSource(e,n=!1){return v(this.isSourceId(e),"Expected a valid source ID."),n&&e===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(e)}getTarget(e){return v(this.isTargetId(e),"Expected a valid target ID."),this.dropTargets.get(e)}getSourceType(e){return v(this.isSourceId(e),"Expected a valid source ID."),this.types.get(e)}getTargetType(e){return v(this.isTargetId(e),"Expected a valid target ID."),this.types.get(e)}isSourceId(e){return me(e)===E.SOURCE}isTargetId(e){return me(e)===E.TARGET}removeSource(e){v(this.getSource(e),"Expected an existing source."),this.store.dispatch(sn(e)),tn(()=>{this.dragSources.delete(e),this.types.delete(e)})}removeTarget(e){v(this.getTarget(e),"Expected an existing target."),this.store.dispatch(on(e)),this.dropTargets.delete(e),this.types.delete(e)}pinSource(e){const n=this.getSource(e);v(n,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=n}unpinSource(){v(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(e,n,i){const r=un(e);return this.types.set(r,n),e===E.SOURCE?this.dragSources.set(r,i):e===E.TARGET&&this.dropTargets.set(r,i),r}constructor(e){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=e}}const hn=(t,e)=>t===e;function gn(t,e){return!t&&!e?!0:!t||!e?!1:t.x===e.x&&t.y===e.y}function pn(t,e,n=hn){if(t.length!==e.length)return!1;for(let i=0;i<t.length;++i)if(!n(t[i],e[i]))return!1;return!0}function mn(t=L,e){switch(e.type){case Y:break;case oe:case ae:case Q:case de:return L;case G:case ie:case X:case V:default:return se}const{targetIds:n=[],prevTargetIds:i=[]}=e.payload,r=yt(n,i);if(!(r.length>0||!pn(n,i)))return L;const o=i[i.length-1],a=n[n.length-1];return o!==a&&(o&&r.push(o),a&&r.push(a)),r}function vn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){vn(t,r,n[r])})}return t}const xe={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function yn(t=xe,e){const{payload:n}=e;switch(e.type){case re:case G:return{initialSourceClientOffset:n.sourceClientOffset,initialClientOffset:n.clientOffset,clientOffset:n.clientOffset};case Y:return gn(t.clientOffset,n.clientOffset)?t:xn({},t,{clientOffset:n.clientOffset});case X:case V:return xe;default:return t}}function Sn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function N(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){Sn(t,r,n[r])})}return t}const Dn={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function In(t=Dn,e){const{payload:n}=e;switch(e.type){case G:return N({},t,{itemType:n.itemType,item:n.item,sourceId:n.sourceId,isSourcePublic:n.isSourcePublic,dropResult:null,didDrop:!1});case ie:return N({},t,{isSourcePublic:!0});case Y:return N({},t,{targetIds:n.targetIds});case Q:return t.targetIds.indexOf(n.targetId)===-1?t:N({},t,{targetIds:xt(t.targetIds,n.targetId)});case V:return N({},t,{dropResult:n.dropResult,didDrop:!0,targetIds:[]});case X:return N({},t,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return t}}function bn(t=0,e){switch(e.type){case oe:case ae:return t+1;case de:case Q:return t-1;default:return t}}function Tn(t=0){return t+1}function wn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function En(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){wn(t,r,n[r])})}return t}function On(t={},e){return{dirtyHandlerIds:mn(t.dirtyHandlerIds,{type:e.type,payload:En({},e.payload,{prevTargetIds:vt(t,"dragOperation.targetIds",[])})}),dragOffset:yn(t.dragOffset,e),refCount:bn(t.refCount,e),dragOperation:In(t.dragOperation,e),stateId:Tn(t.stateId)}}function Cn(t,e=void 0,n={},i=!1){const r=Nn(i),s=new Vt(r,new fn(r)),o=new $t(r,s),a=t(o,e,n);return o.receiveBackend(a),o}function Nn(t){const e=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return We(On,t&&e&&e({name:"dnd-core",instanceId:"dnd-core"}))}function Pn(t,e){if(t==null)return{};var n=Rn(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Rn(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}let ye=0;const q=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var _n=b.memo(function(e){var{children:n}=e,i=Pn(e,["children"]);const[r,s]=Ln(i);return b.useEffect(()=>{if(s){const o=Je();return++ye,()=>{--ye===0&&(o[q]=null)}}},[]),d.jsx(ct.Provider,{value:r,children:n})});function Ln(t){if("manager"in t)return[{dragDropManager:t.manager},!1];const e=Fn(t.backend,t.context,t.options,t.debugMode),n=!t.context;return[e,n]}function Fn(t,e=Je(),n,i){const r=e;return r[q]||(r[q]={dragDropManager:Cn(t,e,n,i)}),r[q]}function Je(){return typeof global<"u"?global:window}function Ze(t){let e=null;return()=>(e==null&&(e=t()),e)}function jn(t,e){return t.filter(n=>n!==e)}function An(t,e){const n=new Set,i=s=>n.add(s);t.forEach(i),e.forEach(i);const r=[];return n.forEach(s=>r.push(s)),r}class kn{enter(e){const n=this.entered.length,i=r=>this.isNodeInDocument(r)&&(!r.contains||r.contains(e));return this.entered=An(this.entered.filter(i),[e]),n===0&&this.entered.length>0}leave(e){const n=this.entered.length;return this.entered=jn(this.entered.filter(this.isNodeInDocument),e),n>0&&this.entered.length===0}reset(){this.entered=[]}constructor(e){this.entered=[],this.isNodeInDocument=e}}class Mn{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(e=>{Object.defineProperty(this.item,e,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${e}" until the drop event.`),null}})})}loadDataTransfer(e){if(e){const n={};Object.keys(this.config.exposeProperties).forEach(i=>{const r=this.config.exposeProperties[i];r!=null&&(n[i]={value:r(e,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,n)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(e,n){return n===e.getSourceId()}endDrag(){}constructor(e){this.config=e,this.item={},this.initializeExposedProperties()}}const Ke="__NATIVE_FILE__",et="__NATIVE_URL__",tt="__NATIVE_TEXT__",nt="__NATIVE_HTML__",Se=Object.freeze(Object.defineProperty({__proto__:null,FILE:Ke,HTML:nt,TEXT:tt,URL:et},Symbol.toStringTag,{value:"Module"}));function Z(t,e,n){const i=e.reduce((r,s)=>r||t.getData(s),"");return i??n}const ne={[Ke]:{exposeProperties:{files:t=>Array.prototype.slice.call(t.files),items:t=>t.items,dataTransfer:t=>t},matchesTypes:["Files"]},[nt]:{exposeProperties:{html:(t,e)=>Z(t,e,""),dataTransfer:t=>t},matchesTypes:["Html","text/html"]},[et]:{exposeProperties:{urls:(t,e)=>Z(t,e,"").split(`
`),dataTransfer:t=>t},matchesTypes:["Url","text/uri-list"]},[tt]:{exposeProperties:{text:(t,e)=>Z(t,e,""),dataTransfer:t=>t},matchesTypes:["Text","text/plain"]}};function Hn(t,e){const n=ne[t];if(!n)throw new Error(`native type ${t} has no configuration`);const i=new Mn(n);return i.loadDataTransfer(e),i}function K(t){if(!t)return null;const e=Array.prototype.slice.call(t.types||[]);return Object.keys(ne).filter(n=>{const i=ne[n];return i!=null&&i.matchesTypes?i.matchesTypes.some(r=>e.indexOf(r)>-1):!1})[0]||null}const Un=Ze(()=>/firefox/i.test(navigator.userAgent)),rt=Ze(()=>!!window.safari);class De{interpolate(e){const{xs:n,ys:i,c1s:r,c2s:s,c3s:o}=this;let a=n.length-1;if(e===n[a])return i[a];let l=0,h=o.length-1,p;for(;l<=h;){p=Math.floor(.5*(l+h));const g=n[p];if(g<e)l=p+1;else if(g>e)h=p-1;else return i[p]}a=Math.max(0,h);const y=e-n[a],m=y*y;return i[a]+r[a]*y+s[a]*m+o[a]*y*m}constructor(e,n){const{length:i}=e,r=[];for(let g=0;g<i;g++)r.push(g);r.sort((g,D)=>e[g]<e[D]?-1:1);const s=[],o=[];let a,l;for(let g=0;g<i-1;g++)a=e[g+1]-e[g],l=n[g+1]-n[g],s.push(a),o.push(l/a);const h=[o[0]];for(let g=0;g<s.length-1;g++){const D=o[g],c=o[g+1];if(D*c<=0)h.push(0);else{a=s[g];const u=s[g+1],f=a+u;h.push(3*f/((f+u)/D+(f+a)/c))}}h.push(o[o.length-1]);const p=[],y=[];let m;for(let g=0;g<h.length-1;g++){m=o[g];const D=h[g],c=1/s[g],u=D+h[g+1]-m-m;p.push((m-D-u)*c),y.push(u*c*c)}this.xs=e,this.ys=n,this.c1s=h,this.c2s=p,this.c3s=y}}const Bn=1;function it(t){const e=t.nodeType===Bn?t:t.parentElement;if(!e)return null;const{top:n,left:i}=e.getBoundingClientRect();return{x:i,y:n}}function j(t){return{x:t.clientX,y:t.clientY}}function zn(t){var e;return t.nodeName==="IMG"&&(Un()||!(!((e=document.documentElement)===null||e===void 0)&&e.contains(t)))}function $n(t,e,n,i){let r=t?e.width:n,s=t?e.height:i;return rt()&&t&&(s/=window.devicePixelRatio,r/=window.devicePixelRatio),{dragPreviewWidth:r,dragPreviewHeight:s}}function qn(t,e,n,i,r){const s=zn(e),a=it(s?t:e),l={x:n.x-a.x,y:n.y-a.y},{offsetWidth:h,offsetHeight:p}=t,{anchorX:y,anchorY:m}=i,{dragPreviewWidth:g,dragPreviewHeight:D}=$n(s,e,h,p),c=()=>{let O=new De([0,.5,1],[l.y,l.y/p*D,l.y+D-p]).interpolate(m);return rt()&&s&&(O+=(window.devicePixelRatio-1)*D),O},u=()=>new De([0,.5,1],[l.x,l.x/h*g,l.x+g-h]).interpolate(y),{offsetX:f,offsetY:x}=r,S=f===0||f,T=x===0||x;return{x:S?f:u(),y:T?x:c()}}class Wn{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var e;return!((e=this.globalContext)===null||e===void 0)&&e.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var e;return((e=this.optionsArgs)===null||e===void 0?void 0:e.rootElement)||this.window}constructor(e,n){this.ownerDocument=null,this.globalContext=e,this.optionsArgs=n}}function Gn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ie(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){Gn(t,r,n[r])})}return t}class Yn{profile(){var e,n;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((e=this.dragStartSourceIds)===null||e===void 0?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((n=this.dragOverTargetIds)===null||n===void 0?void 0:n.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const e=this.rootElement;if(e!==void 0){if(e.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");e.__isReactDndBackendSetUp=!0,this.addEventListeners(e)}}teardown(){const e=this.rootElement;if(e!==void 0&&(e.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var n;(n=this.window)===null||n===void 0||n.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(e,n,i){return this.sourcePreviewNodeOptions.set(e,i),this.sourcePreviewNodes.set(e,n),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDragSource(e,n,i){this.sourceNodes.set(e,n),this.sourceNodeOptions.set(e,i);const r=o=>this.handleDragStart(o,e),s=o=>this.handleSelectStart(o);return n.setAttribute("draggable","true"),n.addEventListener("dragstart",r),n.addEventListener("selectstart",s),()=>{this.sourceNodes.delete(e),this.sourceNodeOptions.delete(e),n.removeEventListener("dragstart",r),n.removeEventListener("selectstart",s),n.setAttribute("draggable","false")}}connectDropTarget(e,n){const i=o=>this.handleDragEnter(o,e),r=o=>this.handleDragOver(o,e),s=o=>this.handleDrop(o,e);return n.addEventListener("dragenter",i),n.addEventListener("dragover",r),n.addEventListener("drop",s),()=>{n.removeEventListener("dragenter",i),n.removeEventListener("dragover",r),n.removeEventListener("drop",s)}}addEventListeners(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const e=this.monitor.getSourceId(),n=this.sourceNodeOptions.get(e);return Ie({dropEffect:this.altKeyPressed?"copy":"move"},n||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const e=this.monitor.getSourceId(),n=this.sourcePreviewNodeOptions.get(e);return Ie({anchorX:.5,anchorY:.5,captureDraggingState:!1},n||{})}isDraggingNativeItem(){const e=this.monitor.getItemType();return Object.keys(Se).some(n=>Se[n]===e)}beginDragNativeItem(e,n){this.clearCurrentDragSourceNode(),this.currentNativeSource=Hn(e,n),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e;const n=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var i;return(i=this.rootElement)===null||i===void 0?void 0:i.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},n)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var e;(e=this.window)===null||e===void 0||e.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(e,n){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(n))}handleDragEnter(e,n){this.dragEnterTargetIds.unshift(n)}handleDragOver(e,n){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(n)}handleDrop(e,n){this.dropTargetIds.unshift(n)}constructor(e,n,i){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=r=>{const s=this.sourceNodes.get(r);return s&&it(s)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=r=>!!(r&&this.document&&this.document.body&&this.document.body.contains(r)),this.endDragIfSourceWasRemovedFromDOM=()=>{const r=this.currentDragSourceNode;r==null||this.isNodeInDocument(r)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=r=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(r||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=r=>{if(r.defaultPrevented)return;const{dragStartSourceIds:s}=this;this.dragStartSourceIds=null;const o=j(r);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(s||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:o});const{dataTransfer:a}=r,l=K(a);if(this.monitor.isDragging()){if(a&&typeof a.setDragImage=="function"){const p=this.monitor.getSourceId(),y=this.sourceNodes.get(p),m=this.sourcePreviewNodes.get(p)||y;if(m){const{anchorX:g,anchorY:D,offsetX:c,offsetY:u}=this.getCurrentSourcePreviewNodeOptions(),S=qn(y,m,o,{anchorX:g,anchorY:D},{offsetX:c,offsetY:u});a.setDragImage(m,S.x,S.y)}}try{a==null||a.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(r.target);const{captureDraggingState:h}=this.getCurrentSourcePreviewNodeOptions();h?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(l)this.beginDragNativeItem(l);else{if(a&&!a.types&&(r.target&&!r.target.hasAttribute||!r.target.hasAttribute("draggable")))return;r.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=r=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var s;(s=this.currentNativeSource)===null||s===void 0||s.loadDataTransfer(r.dataTransfer)}if(!this.enterLeaveCounter.enter(r.target)||this.monitor.isDragging())return;const{dataTransfer:a}=r,l=K(a);l&&this.beginDragNativeItem(l,a)},this.handleTopDragEnter=r=>{const{dragEnterTargetIds:s}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=r.altKey,s.length>0&&this.actions.hover(s,{clientOffset:j(r)}),s.some(a=>this.monitor.canDropOnTarget(a))&&(r.preventDefault(),r.dataTransfer&&(r.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=r=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var s;(s=this.currentNativeSource)===null||s===void 0||s.loadDataTransfer(r.dataTransfer)}},this.handleTopDragOver=r=>{const{dragOverTargetIds:s}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){r.preventDefault(),r.dataTransfer&&(r.dataTransfer.dropEffect="none");return}this.altKeyPressed=r.altKey,this.lastClientOffset=j(r),this.scheduleHover(s),(s||[]).some(a=>this.monitor.canDropOnTarget(a))?(r.preventDefault(),r.dataTransfer&&(r.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?r.preventDefault():(r.preventDefault(),r.dataTransfer&&(r.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=r=>{this.isDraggingNativeItem()&&r.preventDefault(),this.enterLeaveCounter.leave(r.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=r=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var s;r.preventDefault(),(s=this.currentNativeSource)===null||s===void 0||s.loadDataTransfer(r.dataTransfer)}else K(r.dataTransfer)&&r.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=r=>{const{dropTargetIds:s}=this;this.dropTargetIds=[],this.actions.hover(s,{clientOffset:j(r)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=r=>{const s=r.target;typeof s.dragDrop=="function"&&(s.tagName==="INPUT"||s.tagName==="SELECT"||s.tagName==="TEXTAREA"||s.isContentEditable||(r.preventDefault(),s.dragDrop()))},this.options=new Wn(n,i),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.enterLeaveCounter=new kn(this.isNodeInDocument)}}const Vn=function(e,n,i){return new Yn(e,n,i)};/*!
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
 */const P=t=>String(t),Xn=(t,e,n,i="children")=>{const r=P(t),s=P(e),o=(p,y)=>{for(const m of y){if(P(m.id)===p)return m;const g=m[i]||[];if(!ue(g)){const D=o(p,g);if(D)return D}}return null},a=o(r,n);if(!a)return!1;const l=p=>{for(const y of p){if(P(y.id)===s)return!0;const m=y[i]||[];if(!ue(m)&&l(m))return!0}return!1},h=a[i]||[];return l(h)},Qn=({items:t,childrenKey:e="children"})=>({canDropOn:b.useCallback((i,r)=>{const s=P(i.id),o=P(r);return s===o?!1:!Xn(i.id,r,t,e)},[t,e])}),C={"chip-item":"_chip-item_1q47w_16","chip-item-dragging":"_chip-item-dragging_1q47w_21","chip-drag-preview":"_chip-drag-preview_1q47w_26","custom-drag-preview":"_custom-drag-preview_1q47w_27","chip-wrapper":"_chip-wrapper_1q47w_36","chip-handle":"_chip-handle_1q47w_41","chip-handle-icon":"_chip-handle-icon_1q47w_55","chips-list":"_chips-list_1q47w_72"},Tr={title:"DnD/Sortable",component:R,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>d.jsx(_n,{backend:Vn,children:d.jsx(t,{})})]},F={display:"flex",alignItems:"center",gap:"12px",padding:"12px 16px",backgroundColor:"var(--rp-ui-base-bg-000, #fff)",border:"1px solid #e1e5e9",borderRadius:"4px",marginBottom:"8px",cursor:"grab"},le={cursor:"grab",color:"#9ca3af",display:"flex",alignItems:"center"},W=()=>d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[d.jsx("circle",{cx:"5",cy:"3",r:"1.5"}),d.jsx("circle",{cx:"11",cy:"3",r:"1.5"}),d.jsx("circle",{cx:"5",cy:"8",r:"1.5"}),d.jsx("circle",{cx:"11",cy:"8",r:"1.5"}),d.jsx("circle",{cx:"5",cy:"13",r:"1.5"}),d.jsx("circle",{cx:"11",cy:"13",r:"1.5"})]}),A={render:()=>{const[t,e]=b.useState([{id:1,name:"Item 1"},{id:2,name:"Item 2"},{id:3,name:"Item 3"}]),n=(i,r)=>{const s=[...t],[o]=s.splice(i,1);s.splice(r,0,o),e(s)};return d.jsxs("div",{style:{width:"300px"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"Drag items to reorder"}),t.map((i,r)=>d.jsx(R,{id:i.id,index:r,onDrop:n,isLast:r===t.length-1,children:d.jsx("div",{style:F,children:i.name})},i.id))]})}},k={render:()=>{const[t,e]=b.useState([{id:1,name:"Drag by handle only"},{id:2,name:"Click handle to drag"},{id:3,name:"Third item"}]),n=(i,r)=>{const s=[...t],[o]=s.splice(i,1);s.splice(r,0,o),e(s)};return d.jsxs("div",{style:{width:"300px"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"Use the handle (⋮⋮) to drag items"}),t.map((i,r)=>d.jsx(R,{id:i.id,index:r,onDrop:n,isLast:r===t.length-1,children:({dragRef:s})=>d.jsxs("div",{style:F,children:[d.jsx("span",{ref:s,style:le,children:d.jsx(W,{})}),d.jsx("span",{children:i.name})]})},i.id))]})}},M={render:()=>{const[t,e]=b.useState([{id:1,name:"First task"},{id:2,name:"Second task"},{id:3,name:"Third task"},{id:4,name:"Fourth task"},{id:5,name:"Fifth task"}]);return d.jsxs("div",{style:{width:"350px"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"SortableList Component"}),d.jsx(ut,{items:t,onReorder:e,renderItem:(n,i,r)=>d.jsxs("div",{style:F,children:[d.jsx("span",{ref:r,style:le,children:d.jsx(W,{})}),d.jsx("span",{children:n.name})]})})]})}},Jn={display:"flex",alignItems:"center",gap:"8px",padding:"12px 16px",backgroundColor:"#fff",border:"1px solid #3b82f6",borderRadius:"4px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",fontSize:"14px",fontWeight:500},H={render:()=>{const t="CUSTOM_SORTABLE",[e,n]=b.useState([{id:1,name:"Item with custom preview"},{id:2,name:"Another draggable item"},{id:3,name:"Third draggable item"}]),i=(s,o)=>{const a=[...e],[l]=a.splice(s,1);a.splice(o,0,l),n(a)},r=s=>{const o=e.find(a=>a.id===s.id);return d.jsxs("div",{style:Jn,children:[d.jsx(W,{}),d.jsx("span",{children:(o==null?void 0:o.name)||"Unknown"})]})};return d.jsxs("div",{style:{width:"350px"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"Custom drag preview (styled differently from original)"}),d.jsx(qe,{type:t,renderPreview:r,previewClassName:C["custom-drag-preview"]}),e.map((s,o)=>d.jsx(R,{id:s.id,index:o,type:t,onDrop:i,hideDefaultPreview:!0,isLast:o===e.length-1,children:({dragRef:a,isDragging:l})=>d.jsxs("div",{style:{...F,opacity:l?.5:1},children:[d.jsx("span",{ref:a,style:le,children:d.jsx(W,{})}),d.jsx("span",{children:s.name})]})},s.id))]})}},U={render:()=>{const[t]=b.useState([{id:1,name:"Cannot drag this"},{id:2,name:"Also not draggable"},{id:3,name:"Disabled item"}]),e={...F,opacity:.5,cursor:"not-allowed"};return d.jsxs("div",{style:{width:"300px"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"Disabled sortable items"}),t.map((n,i)=>d.jsx(R,{id:n.id,index:i,isDisabled:!0,isLast:i===t.length-1,children:d.jsx("div",{style:e,children:n.name})},n.id))]})}},Zn=t=>{const[e,n]=b.useState(!1);return b.useEffect(()=>{let i;return t?i=setTimeout(()=>n(!0),50):n(!1),()=>clearTimeout(i)},[t]),e},B={name:"Horizontal - Filter Chips (FilterItem)",render:()=>{const t="FILTER_ITEM_CHIP",[e,n]=b.useState([{id:1,name:"Personal 1"},{id:2,name:"API tests & Back_ST"},{id:3,name:"Regression"},{id:4,name:"Personal 2"},{id:5,name:"Attribute oriented - AT"},{id:6,name:"Functional"}]),i=(o,a)=>{const l=[...e],[h]=l.splice(o,1);l.splice(a,0,h),n(l)},r=o=>{const a=e.find(l=>l.id===o.id);return d.jsx(ce,{id:String(o.id),caption:(a==null?void 0:a.name)??"",actions:[]})},s=({dragRef:o,isDragging:a,item:l})=>{const h=Zn(a);return d.jsxs("div",{className:C["chip-wrapper"],style:h?{position:"absolute",width:0,height:0,overflow:"hidden",pointerEvents:"none"}:void 0,children:[d.jsx("span",{ref:o,className:C["chip-handle"],children:d.jsx("span",{className:C["chip-handle-icon"],children:d.jsx(lt,{})})}),!h&&d.jsx(ce,{id:String(l.id),caption:l.name,actions:[]})]})};return d.jsxs("div",{style:{width:"450px",padding:"24px 16px 16px",border:"1px solid #e1e5e9",borderRadius:"8px",backgroundColor:"#f9fafb"},children:[d.jsx("h3",{style:{marginBottom:"16px",fontSize:"14px",color:"#666"},children:"Hover over a filter to reveal the drag handle, then drag to reorder (FilterItem)"}),d.jsx(qe,{type:t,renderPreview:r,previewClassName:C["chip-drag-preview"]}),d.jsx("div",{className:C["chips-list"],style:{display:"flex",flexWrap:"wrap",gap:0,paddingTop:"12px"},children:e.map((o,a)=>d.jsx(R,{id:o.id,index:a,type:t,orientation:"horizontal",dropDetectionMode:"hover",hideDefaultPreview:!0,className:C["chip-item"],draggingClassName:C["chip-item-dragging"],onDrop:i,isLast:a===e.length-1,children:({dragRef:l,isDragging:h})=>d.jsx(s,{dragRef:l,isDragging:h,item:o})},o.id))})]})}},Kn=()=>d.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:d.jsx("path",{d:"M1 3.5A1.5 1.5 0 0 1 2.5 2h3.172a1.5 1.5 0 0 1 1.06.44l.829.828a.5.5 0 0 0 .353.147H13.5A1.5 1.5 0 0 1 15 4.914V12.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9z"})}),er=()=>d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[d.jsx("path",{d:"M1 4.5A1.5 1.5 0 0 1 2.5 3h3.172a1.5 1.5 0 0 1 1.06.44l.829.828A.5.5 0 0 0 7.914 4.5H13.5A1.5 1.5 0 0 1 15 6v.5H2V4.5z"}),d.jsx("path",{d:"M1.5 7h13l-1.5 7H3L1.5 7z"})]}),tr=({isExpanded:t})=>d.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",style:{transform:t?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.2s ease"},children:d.jsx("path",{d:"M4.5 2L9 6l-4.5 4V2z"})}),nr="FOLDER_ITEM",rr=[{id:1,name:"Documents",children:[{id:11,name:"Work",children:[{id:111,name:"Reports",children:[]},{id:112,name:"Presentations",children:[]}]},{id:12,name:"Personal",children:[{id:121,name:"Photos",children:[]},{id:122,name:"Receipts",children:[]}]}]},{id:2,name:"Projects",children:[{id:21,name:"UI Kit",children:[]},{id:22,name:"Service UI",children:[]},{id:23,name:"API",children:[]}]},{id:3,name:"Downloads",children:[]},{id:4,name:"Archive",children:[{id:41,name:"2023",children:[]},{id:42,name:"2024",children:[]}]}];let ir=Date.now();const sr=()=>++ir,st=t=>({...t,id:sr(),children:t.children.map(st)}),ot=(t,e)=>{for(const n of t){if(n.id===e)return n;const i=ot(n.children,e);if(i)return i}return null},z=(t,e)=>{const n=ot(t,e);return(n==null?void 0:n.name)||"Unknown"},or=t=>{const e=[],n=i=>{for(const r of i)e.push(r.name),r.children.length>0&&n(r.children)};return n(t),e},ar=(t,e)=>{const n=/^(.*?)\((\d+)\)$/,i=t.match(n),r=i?i[1]:t;if(!e.includes(r))return r;let s=1;for(;e.includes(`${r}(${s})`);)s++;return`${r}(${s})`},at=({folder:t,index:e,depth:n,parentId:i,isLast:r,expandedIds:s,onToggle:o,canDropOn:a,onDrop:l})=>{const h=s.has(t.id),p=t.children.length>0,y=ht(),m=y==null?void 0:y.pendingDraggedItemId,{draggedItem:g}=gt(u=>({draggedItem:u.getItem()})),D=(()=>{if(!a)return!1;const u=g||(m?{id:m}:null);if(!u)return!1;const f=String(u.id),x=String(t.id);return f===x?!1:!a(u,t.id)})(),c={display:"flex",alignItems:"center",gap:"4px",padding:"6px 8px",backgroundColor:"var(--rp-ui-base-bg-000, #fff)",borderRadius:"4px",cursor:"grab",fontSize:"13px",userSelect:"none"};return d.jsxs(d.Fragment,{children:[d.jsx(pt,{id:t.id,index:e,parentId:i,type:nr,isLast:r,canDropOn:a,onDrop:l,style:{"--tree-item-indent":`${n*20}px`},children:({isDragging:u,dragRef:f})=>d.jsxs("div",{ref:f,style:{...c,paddingLeft:`${n*20}px`,opacity:u||D?.4:1,cursor:D?"not-allowed":c.cursor,pointerEvents:u||D?"none":"auto"},children:[d.jsx("span",{onClick:x=>{x.stopPropagation(),p&&o(t.id)},style:{width:"16px",display:"flex",alignItems:"center",justifyContent:"center",color:"#9ca3af",cursor:p?"pointer":"default",visibility:p?"visible":"hidden"},children:d.jsx(tr,{isExpanded:h})}),d.jsx("span",{style:{color:"#f59e0b"},children:h?d.jsx(er,{}):d.jsx(Kn,{})}),d.jsx("span",{style:{flex:1},children:t.name})]})}),h&&t.children.map((u,f)=>d.jsx(at,{folder:u,index:f,depth:n+1,parentId:t.id,isLast:f===t.children.length-1,expandedIds:s,onToggle:o,canDropOn:a,onDrop:l},u.id))]})},$={name:"Tree Sortable - Nested Folders",render:()=>{const[t,e]=b.useState(rr),[n,i]=b.useState(new Set([1,2])),[r,s]=b.useState([]),o=c=>{i(u=>{const f=new Set(u);return f.has(c)?f.delete(c):f.add(c),f})},a=()=>{const c=new Set,u=f=>{f.forEach(x=>{x.children.length>0&&(c.add(x.id),u(x.children))})};u(t),i(c)},l=()=>{i(new Set)},{canDropOn:h}=Qn({items:t}),p=(c,u)=>{let f=null;const x=c.filter(S=>S.id===u?(f={...S,children:[...S.children]},!1):!0);return f?[x,f]:[x.map(S=>{const[T,I]=p(S.children,u);return I&&(f=I),{...S,children:T}}),f]},y=(c,u,f,x)=>{const S=[];for(let T=0;T<c.length;T++){const I=c[T];I.id===u?x==="before"?(S.push(f),S.push({...I,children:[...I.children]})):x==="after"?(S.push({...I,children:[...I.children]}),S.push(f)):x==="inside"&&(S.push({...I,children:[...I.children,f]}),i(O=>new Set([...O,I.id]))):S.push({...I,children:y(I.children,u,f,x)})}return S},m=(c,u,f)=>{const x=z(t,c.id),S=z(t,u),T=`MOVED "${x}" → ${f==null?void 0:f.toUpperCase()} "${S}"`;s(_=>[T,..._.slice(0,4)]);const[I,O]=p(t,c.id);if(O&&f){const _=y(I,u,O,f);e(_)}},g=(c,u,f)=>{const x=z(t,c.id),S=z(t,u),T=`DUPLICATED "${x}" → ${f==null?void 0:f.toUpperCase()} "${S}"`;s(O=>[T,...O.slice(0,4)]);const[,I]=p(t,c.id);if(I&&f){const O=or(t),_={...st(I),name:ar(I.name,O)},dt=y(t,u,_,f);e(dt)}},D=()=>{s(c=>["CANCELLED drop action",...c.slice(0,4)])};return d.jsxs("div",{style:{width:"400px"},children:[d.jsx("h3",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:"Nested Folder Tree - Drag & Drop with Confirmation"}),d.jsx("p",{style:{marginBottom:"12px",fontSize:"12px",color:"#999"},children:"Click chevron to expand • Drag to: top = before, middle = inside, bottom = after • Drop to see confirmation popup"}),d.jsxs("div",{style:{marginBottom:"12px",display:"flex",gap:"8px"},children:[d.jsx("button",{onClick:a,style:{padding:"4px 12px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",backgroundColor:"#fff",cursor:"pointer"},children:"Expand All"}),d.jsx("button",{onClick:l,style:{padding:"4px 12px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",backgroundColor:"#fff",cursor:"pointer"},children:"Collapse All"})]}),d.jsx(ft,{showDropConfirmation:!0,onMove:m,onDuplicate:g,onCancel:D,children:d.jsx("div",{style:{border:"1px solid #e1e5e9",borderRadius:"8px",padding:"8px",backgroundColor:"#f9fafb",maxHeight:"400px",overflowY:"auto"},children:t.map((c,u)=>d.jsx(at,{folder:c,index:u,depth:0,parentId:null,isLast:u===t.length-1,expandedIds:n,onToggle:o,canDropOn:h,onDrop:m},c.id))})}),r.length>0&&d.jsxs("div",{style:{marginTop:"16px",padding:"8px 12px",backgroundColor:"#f0fdf4",border:"1px solid #86efac",borderRadius:"4px",fontSize:"11px",color:"#166534"},children:[d.jsx("div",{style:{fontWeight:600,marginBottom:"4px"},children:"Recent Actions:"}),r.map((c,u)=>d.jsxs("div",{style:{opacity:1-u*.15},children:["✓ ",c]},u))]})]})}};var be,Te,we;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(we=(Te=A.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var Ee,Oe,Ce;k.parameters={...k.parameters,docs:{...(Ee=k.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ce=(Oe=k.parameters)==null?void 0:Oe.docs)==null?void 0:Ce.source}}};var Ne,Pe,Re;M.parameters={...M.parameters,docs:{...(Ne=M.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Re=(Pe=M.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var _e,Le,Fe;H.parameters={...H.parameters,docs:{...(_e=H.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Fe=(Le=H.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source}}};var je,Ae,ke;U.parameters={...U.parameters,docs:{...(je=U.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(ke=(Ae=U.parameters)==null?void 0:Ae.docs)==null?void 0:ke.source}}};var Me,He,Ue;B.parameters={...B.parameters,docs:{...(Me=B.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
      return <div className={storyStyles['chip-wrapper']} style={shouldHide ? {
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      } : undefined}>
          <span ref={dragRef as Ref<HTMLSpanElement>} className={storyStyles['chip-handle']}>
            <span className={storyStyles['chip-handle-icon']}>
              <DragNDropIcon />
            </span>
          </span>
          {!shouldHide && <FilterItem id={String(item.id)} caption={item.name} actions={[]} />}
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
}`,...(Ue=(He=B.parameters)==null?void 0:He.docs)==null?void 0:Ue.source}}};var Be,ze,$e;$.parameters={...$.parameters,docs:{...(Be=$.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...($e=(ze=$.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};const wr=["BasicSortableItem","WithDragHandle","UsingSortableList","WithCustomDragPreview","DisabledState","HorizontalFilterChipsWithFilterItem","TreeSortableNested"];export{A as BasicSortableItem,U as DisabledState,B as HorizontalFilterChipsWithFilterItem,$ as TreeSortableNested,M as UsingSortableList,H as WithCustomDragPreview,k as WithDragHandle,wr as __namedExportsOrder,Tr as default};
