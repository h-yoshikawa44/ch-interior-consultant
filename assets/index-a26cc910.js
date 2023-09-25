(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const _ of u.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&c(_)}).observe(document,{childList:!0,subtree:!0});function f(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function c(s){if(s.ep)return;s.ep=!0;const u=f(s);fetch(s.href,u)}})();var g=function(){function h(a,f){for(var c=0;c<f.length;c++){var s=f[c];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(a,s.key,s)}}return function(a,f,c){return f&&h(a.prototype,f),c&&h(a,c),a}}();function E(h,a){if(!(h instanceof a))throw new TypeError("Cannot call a class as a function")}(function(){if(typeof window>"u")return;var h=Array.prototype.slice,a=Element.prototype.matches||Element.prototype.msMatchesSelector,f=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),c=function(){function o(t,e){E(this,o),this._inertManager=e,this._rootElement=t,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return g(o,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(this._savedAriaHidden!==null?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach(function(e){this._unmanageNode(e.node)},this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(e){var n=this;_(e,function(d){return n._visitNode(d)});var i=document.activeElement;if(!document.body.contains(e)){for(var r=e,l=void 0;r;){if(r.nodeType===Node.DOCUMENT_FRAGMENT_NODE){l=r;break}r=r.parentNode}l&&(i=l.activeElement)}e.contains(i)&&(i.blur(),i===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(e){if(e.nodeType===Node.ELEMENT_NODE){var n=e;n!==this._rootElement&&n.hasAttribute("inert")&&this._adoptInertRoot(n),(a.call(n,f)||n.hasAttribute("tabindex"))&&this._manageNode(n)}}},{key:"_manageNode",value:function(e){var n=this._inertManager.register(e,this);this._managedNodes.add(n)}},{key:"_unmanageNode",value:function(e){var n=this._inertManager.deregister(e,this);n&&this._managedNodes.delete(n)}},{key:"_unmanageSubtree",value:function(e){var n=this;_(e,function(i){return n._unmanageNode(i)})}},{key:"_adoptInertRoot",value:function(e){var n=this._inertManager.getInertRoot(e);n||(this._inertManager.setInert(e,!0),n=this._inertManager.getInertRoot(e)),n.managedNodes.forEach(function(i){this._manageNode(i.node)},this)}},{key:"_onMutation",value:function(e,n){e.forEach(function(i){var r=i.target;if(i.type==="childList")h.call(i.addedNodes).forEach(function(d){this._makeSubtreeUnfocusable(d)},this),h.call(i.removedNodes).forEach(function(d){this._unmanageSubtree(d)},this);else if(i.type==="attributes"){if(i.attributeName==="tabindex")this._manageNode(r);else if(r!==this._rootElement&&i.attributeName==="inert"&&r.hasAttribute("inert")){this._adoptInertRoot(r);var l=this._inertManager.getInertRoot(r);this._managedNodes.forEach(function(d){r.contains(d.node)&&l._manageNode(d.node)})}}},this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return this._savedAriaHidden!==null}},{key:"savedAriaHidden",set:function(e){this._savedAriaHidden=e},get:function(){return this._savedAriaHidden}}]),o}(),s=function(){function o(t,e){E(this,o),this._node=t,this._overrodeFocusMethod=!1,this._inertRoots=new Set([e]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return g(o,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var e=this._node;this._savedTabIndex!==null?e.setAttribute("tabindex",this._savedTabIndex):e.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete e.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var e=this.node;if(a.call(e,f)){if(e.tabIndex===-1&&this.hasSavedTabIndex)return;e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)}else e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.add(e)}},{key:"removeInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.delete(e),this._inertRoots.size===0&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return this._savedTabIndex!==null}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(e){this._throwIfDestroyed(),this._savedTabIndex=e},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),o}(),u=function(){function o(t){if(E(this,o),!t)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=t,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),N(t.head||t.body||t.documentElement),t.readyState==="loading"?t.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return g(o,[{key:"setInert",value:function(e,n){if(n){if(this._inertRoots.has(e))return;var i=new c(e,this);if(e.setAttribute("inert",""),this._inertRoots.set(e,i),!this._document.body.contains(e))for(var r=e.parentNode;r;)r.nodeType===11&&N(r),r=r.parentNode}else{if(!this._inertRoots.has(e))return;var l=this._inertRoots.get(e);l.destructor(),this._inertRoots.delete(e),e.removeAttribute("inert")}}},{key:"getInertRoot",value:function(e){return this._inertRoots.get(e)}},{key:"register",value:function(e,n){var i=this._managedNodes.get(e);return i!==void 0?i.addInertRoot(n):i=new s(e,n),this._managedNodes.set(e,i),i}},{key:"deregister",value:function(e,n){var i=this._managedNodes.get(e);return i?(i.removeInertRoot(n),i.destroyed&&this._managedNodes.delete(e),i):null}},{key:"_onDocumentLoaded",value:function(){var e=h.call(this._document.querySelectorAll("[inert]"));e.forEach(function(n){this.setInert(n,!0)},this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(e,n){var i=this;e.forEach(function(r){switch(r.type){case"childList":h.call(r.addedNodes).forEach(function(m){if(m.nodeType===Node.ELEMENT_NODE){var v=h.call(m.querySelectorAll("[inert]"));a.call(m,"[inert]")&&v.unshift(m),v.forEach(function(b){this.setInert(b,!0)},i)}},i);break;case"attributes":if(r.attributeName!=="inert")return;var l=r.target,d=l.hasAttribute("inert");i.setInert(l,d);break}},this)}}]),o}();function _(o,t,e){if(o.nodeType==Node.ELEMENT_NODE){var n=o;t&&t(n);var i=n.shadowRoot;if(i){_(i,t);return}if(n.localName=="content"){for(var r=n,l=r.getDistributedNodes?r.getDistributedNodes():[],d=0;d<l.length;d++)_(l[d],t);return}if(n.localName=="slot"){for(var m=n,v=m.assignedNodes?m.assignedNodes({flatten:!0}):[],b=0;b<v.length;b++)_(v[b],t);return}}for(var y=o.firstChild;y!=null;)_(y,t),y=y.nextSibling}function N(o){if(!o.querySelector("style#inert-style, link#inert-style")){var t=document.createElement("style");t.setAttribute("id","inert-style"),t.textContent=`
[inert] {
  pointer-events: none;
  cursor: default;
}

[inert], [inert] * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`,o.appendChild(t)}}if(!HTMLElement.prototype.hasOwnProperty("inert")){var w=new u(document);Object.defineProperty(HTMLElement.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(t){w.setInert(this,t)}})}})();const I=document.getElementById("contents"),p=document.getElementById("menu"),M=()=>{p.classList.add("js-menu--open"),I.setAttribute("inert",!0),document.body.classList.add("js-overflow-hidden")},A=()=>{p.classList.remove("js-menu--open"),I.removeAttribute("inert",!1),document.body.classList.remove("js-overflow-hidden")};window.addEventListener("DOMContentLoaded",()=>{document.getElementById("open-menu-btn").addEventListener("click",M),document.getElementById("close-menu-btn").addEventListener("click",A)});window.addEventListener("load",()=>{document.getElementsByClassName("js-preload")[0].classList.remove("js-preload")});