import{C as j,az as W,z as C,E as k,y as xe,a4 as T,ba as se,aA as Q,bb as Te,G as ce,bc as Oe,bd as B,be as Le,aP as ue,bf as Fe,bg as ve,bh as X,bi as Z,bj as de,bk as Be,bl as me,aG as F,bm as ye,bn as De,I as Ie,b5 as pe,A as _e,J as Me,B as He,m as Ne,Y as We,a1 as Ve,aK as je,g as qe,D as ze,a5 as $e,bo as Ge,aj as Ye,M as Ue,a9 as Ke,bp as Je,e as Qe,f as M,ai as G,bq as ee,br as Xe,O as Ze,Q as et,R as tt,ac as nt,ae as ot,T as at,bs as rt}from"./index-1c897125.js";import{B as te,g as ge,n as it,a as lt,s as st}from"./easing-9f15041e.js";function Pe(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function ct(e){for(;e;){if(fe(e))return e;e=e.parentElement}return document.scrollingElement}function K(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(fe(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function fe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function ut(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const ft=j({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function vt(e,n){const t={},o=r=>()=>{if(!W)return Promise.resolve(!0);const a=r==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(i=>{const s=parseInt(e[r]??0,10);t[r]=window.setTimeout(()=>{n==null||n(a),i(a)},s)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const dt=Symbol.for("vuetify:v-menu"),mt=j({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...ft()},"v-overlay-activator");function yt(e,n){let{isActive:t,isTop:o}=n;const r=C();let a=!1,i=!1,s=!0;const u=k(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=k(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:c,runCloseDelay:v}=vt(e,l=>{l===(e.openOnHover&&a||u.value&&i)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(s=!0),t.value=l)}),m={click:l=>{l.stopPropagation(),r.value=l.currentTarget||l.target,t.value=!t.value},mouseenter:l=>{var A;(A=l.sourceCapabilities)!=null&&A.firesTouchEvents||(a=!0,r.value=l.currentTarget||l.target,c())},mouseleave:l=>{a=!1,v()},focus:l=>{Le&&!l.target.matches(":focus-visible")||(i=!0,l.stopPropagation(),r.value=l.currentTarget||l.target,c())},blur:l=>{i=!1,l.stopPropagation(),v()}},O=k(()=>{const l={};return f.value&&(l.click=m.click),e.openOnHover&&(l.mouseenter=m.mouseenter,l.mouseleave=m.mouseleave),u.value&&(l.focus=m.focus,l.blur=m.blur),l}),y=k(()=>{const l={};if(e.openOnHover&&(l.mouseenter=()=>{a=!0,c()},l.mouseleave=()=>{a=!1,v()}),e.closeOnContentClick){const A=xe(dt,null);l.click=()=>{t.value=!1,A==null||A.closeParents()}}return l}),d=k(()=>{const l={};return e.openOnHover&&(l.mouseenter=()=>{s&&(a=!0,s=!1,c())},l.mouseleave=()=>{a=!1,v()}),l});T(o,l=>{l&&(e.openOnHover&&!a&&(!u.value||!i)||u.value&&!i&&(!e.openOnHover||!a))&&(t.value=!1)});const P=C();se(()=>{P.value&&Q(()=>{const l=P.value;r.value=Te(l)?l.$el:l})});const p=ce("useActivator");let w;return T(()=>!!e.activator,l=>{l&&W?(w=Oe(),w.run(()=>{gt(e,p,{activatorEl:r,activatorEvents:O})})):w&&w.stop()},{flush:"post",immediate:!0}),B(()=>{w==null||w.stop()}),{activatorEl:r,activatorRef:P,activatorEvents:O,contentEvents:y,scrimEvents:d}}function gt(e,n,t){let{activatorEl:o,activatorEvents:r}=t;T(()=>e.activator,(u,f)=>{if(f&&u!==f){const c=s(f);c&&i(c)}u&&Q(()=>a())},{immediate:!0}),T(()=>e.activatorProps,()=>{a()}),B(()=>{i()});function a(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&(Object.entries(r.value).forEach(c=>{let[v,m]=c;u.addEventListener(v,m)}),Object.keys(f).forEach(c=>{f[c]==null?u.removeAttribute(c):u.setAttribute(c,f[c])}))}function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&(Object.entries(r.value).forEach(c=>{let[v,m]=c;u.removeEventListener(v,m)}),Object.keys(f).forEach(c=>{u.removeAttribute(c)}))}function s(){var c,v;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,f;if(u)if(u==="parent"){let m=(v=(c=n==null?void 0:n.proxy)==null?void 0:c.$el)==null?void 0:v.parentNode;for(;m.hasAttribute("data-no-activator");)m=m.parentNode;f=m}else typeof u=="string"?f=document.querySelector(u):"$el"in u?f=u.$el:f=u;return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:null,o.value}}const ht=j({eager:Boolean},"lazy");function bt(e,n){const t=C(!1),o=k(()=>t.value||e.eager||n.value);T(n,()=>t.value=!0);function r(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:r}}function ne(e,n){return{x:e.x+n.x,y:e.y+n.y}}function wt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function he(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,r=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,a=t==="top"?0:t==="bottom"?n.height:t;return ne({x:r,y:a},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,r=t==="left"?0:t==="right"?n.width:t,a=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ne({x:r,y:a},n)}return ne({x:n.width/2,y:n.height/2},n)}const ke={static:xt,connected:pt},Et=j({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in ke},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function St(e,n){const t=C({}),o=C();W&&(ue(()=>!!(n.isActive.value&&e.locationStrategy),a=>{var i,s;T(()=>e.locationStrategy,a),B(()=>{o.value=void 0}),typeof e.locationStrategy=="function"?o.value=(i=e.locationStrategy(n,e,t))==null?void 0:i.updateLocation:o.value=(s=ke[e.locationStrategy](n,e,t))==null?void 0:s.updateLocation}),window.addEventListener("resize",r,{passive:!0}),B(()=>{window.removeEventListener("resize",r),o.value=void 0}));function r(a){var i;(i=o.value)==null||i.call(o,a)}return{contentStyles:t,updateLocation:o}}function xt(){}function Ot(e,n){const t=it(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function pt(e,n,t){ut(e.activatorEl.value)&&Object.assign(t.value,{position:"fixed"});const{preferredAnchor:r,preferredOrigin:a}=Fe(()=>{const y=ve(n.location,e.isRtl.value),d=n.origin==="overlap"?y:n.origin==="auto"?X(y):ve(n.origin,e.isRtl.value);return y.side===d.side&&y.align===Z(d).align?{preferredAnchor:de(y),preferredOrigin:de(d)}:{preferredAnchor:y,preferredOrigin:d}}),[i,s,u,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(y=>k(()=>{const d=parseFloat(n[y]);return isNaN(d)?1/0:d})),c=k(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const y=n.offset.split(" ").map(parseFloat);return y.length<2&&y.push(0),y}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let v=!1;const m=new ResizeObserver(()=>{v&&O()});T([e.activatorEl,e.contentEl],(y,d)=>{let[P,p]=y,[w,l]=d;w&&m.unobserve(w),P&&m.observe(P),l&&m.unobserve(l),p&&m.observe(p)},{immediate:!0}),B(()=>{m.disconnect()});function O(){if(v=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>v=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const y=e.activatorEl.value.getBoundingClientRect(),d=Ot(e.contentEl.value,e.isRtl.value),P=K(e.contentEl.value),p=12;P.length||(P.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(d.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),d.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=P.reduce((S,E)=>{const g=E.getBoundingClientRect(),b=new te({x:E===document.documentElement?0:g.x,y:E===document.documentElement?0:g.y,width:E.clientWidth,height:E.clientHeight});return S?new te({x:Math.max(S.left,b.left),y:Math.max(S.top,b.top),width:Math.min(S.right,b.right)-Math.max(S.left,b.left),height:Math.min(S.bottom,b.bottom)-Math.max(S.top,b.top)}):b},void 0);w.x+=p,w.y+=p,w.width-=p*2,w.height-=p*2;let l={anchor:r.value,origin:a.value};function A(S){const E=new te(d),g=he(S.anchor,y),b=he(S.origin,E);let{x:R,y:L}=wt(g,b);switch(S.anchor.side){case"top":L-=c.value[0];break;case"bottom":L+=c.value[0];break;case"left":R-=c.value[0];break;case"right":R+=c.value[0];break}switch(S.anchor.align){case"top":L-=c.value[1];break;case"bottom":L+=c.value[1];break;case"left":R-=c.value[1];break;case"right":R+=c.value[1];break}return E.x+=R,E.y+=L,E.width=Math.min(E.width,u.value),E.height=Math.min(E.height,f.value),{overflows:ge(E,w),x:R,y:L}}let I=0,H=0;const N={x:0,y:0},q={x:!1,y:!1};let z=-1;for(;;){if(z++>10){Be("Infinite loop detected in connectedLocationStrategy");break}const{x:S,y:E,overflows:g}=A(l);I+=S,H+=E,d.x+=S,d.y+=E;{const b=me(l.anchor),R=g.x.before||g.x.after,L=g.y.before||g.y.after;let V=!1;if(["x","y"].forEach(x=>{if(x==="x"&&R&&!q.x||x==="y"&&L&&!q.y){const h={anchor:{...l.anchor},origin:{...l.origin}},D=x==="x"?b==="y"?Z:X:b==="y"?X:Z;h.anchor=D(h.anchor),h.origin=D(h.origin);const{overflows:Y}=A(h);(Y[x].before<=g[x].before&&Y[x].after<=g[x].after||Y[x].before+Y[x].after<(g[x].before+g[x].after)/2)&&(l=h,V=q[x]=!0)}}),V)continue}g.x.before&&(I+=g.x.before,d.x+=g.x.before),g.x.after&&(I-=g.x.after,d.x-=g.x.after),g.y.before&&(H+=g.y.before,d.y+=g.y.before),g.y.after&&(H-=g.y.after,d.y-=g.y.after);{const b=ge(d,w);N.x=w.width-b.x.before-b.x.after,N.y=w.height-b.y.before-b.y.after,I+=b.x.before,d.x+=b.x.before,H+=b.y.before,d.y+=b.y.before}break}const _=me(l.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${l.anchor.side} ${l.anchor.align}`,transformOrigin:`${l.origin.side} ${l.origin.align}`,top:F(oe(H)),left:e.isRtl.value?void 0:F(oe(I)),right:e.isRtl.value?F(oe(-I)):void 0,minWidth:F(_==="y"?Math.min(i.value,y.width):i.value),maxWidth:F(be(ye(N.x,i.value===1/0?0:i.value,u.value))),maxHeight:F(be(ye(N.y,s.value===1/0?0:s.value,f.value)))}),{available:N,contentBox:d}}return T(()=>[r.value,a.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>O()),Q(()=>{const y=O();if(!y)return;const{available:d,contentBox:P}=y;P.height>d.y&&requestAnimationFrame(()=>{O(),requestAnimationFrame(()=>{O()})})}),{updateLocation:O}}function oe(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function be(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ie=!0;const J=[];function Pt(e){!ie||J.length?(J.push(e),le()):(ie=!1,e(),le())}let we=-1;function le(){cancelAnimationFrame(we),we=requestAnimationFrame(()=>{const e=J.shift();e&&e(),J.length?le():ie=!0})}const U={none:null,close:At,block:Rt,reposition:Tt},kt=j({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in U}},"v-overlay-scroll-strategies");function Ct(e,n){if(!W)return;let t;se(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Oe(),await Q(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=U[e.scrollStrategy])==null||o.call(U,n,e,t)}))}),B(()=>{t==null||t.stop()})}function At(e){function n(t){e.isActive.value=!1}Ce(e.activatorEl.value??e.contentEl.value,n)}function Rt(e,n){var i;const t=(i=e.root.value)==null?void 0:i.offsetParent,o=[...new Set([...K(e.activatorEl.value,n.contained?t:void 0),...K(e.contentEl.value,n.contained?t:void 0)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,a=(s=>fe(s)&&s)(t||document.documentElement);a&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((s,u)=>{s.style.setProperty("--v-body-scroll-x",F(-s.scrollLeft)),s.style.setProperty("--v-body-scroll-y",F(-s.scrollTop)),s.style.setProperty("--v-scrollbar-offset",F(r)),s.classList.add("v-overlay-scroll-blocked")}),B(()=>{o.forEach((s,u)=>{const f=parseFloat(s.style.getPropertyValue("--v-body-scroll-x")),c=parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));s.style.removeProperty("--v-body-scroll-x"),s.style.removeProperty("--v-body-scroll-y"),s.style.removeProperty("--v-scrollbar-offset"),s.classList.remove("v-overlay-scroll-blocked"),s.scrollLeft=-f,s.scrollTop=-c}),a&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Tt(e,n,t){let o=!1,r=-1,a=-1;function i(s){Pt(()=>{var c,v;const u=performance.now();(v=(c=e.updateLocation).value)==null||v.call(c,s),o=(performance.now()-u)/(1e3/60)>2})}a=(typeof requestIdleCallback>"u"?s=>s():requestIdleCallback)(()=>{t.run(()=>{Ce(e.activatorEl.value??e.contentEl.value,s=>{o?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{i(s)})})):i(s)})})}),B(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(a),cancelAnimationFrame(r)})}function Ce(e,n){const t=[document,...K(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),B(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}function Lt(){if(!W)return C(!1);const{ssr:e}=De();if(e){const n=C(!1);return Ie(()=>{n.value=!0}),n}else return C(!0)}function Ft(){const n=ce("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Ee=Symbol.for("vuetify:stack"),$=pe([]);function Bt(e,n,t){const o=ce("useStack"),r=!t,a=xe(Ee,void 0),i=pe({activeChildren:new Set});_e(Ee,i);const s=C(+n.value);ue(e,()=>{var v;const c=(v=$.at(-1))==null?void 0:v[1];s.value=c?c+10:+n.value,r&&$.push([o.uid,s.value]),a==null||a.activeChildren.add(o.uid),B(()=>{if(r){const m=He($).findIndex(O=>O[0]===o.uid);$.splice(m,1)}a==null||a.activeChildren.delete(o.uid)})});const u=C(!0);r&&se(()=>{var v;const c=((v=$.at(-1))==null?void 0:v[0])===o.uid;setTimeout(()=>u.value=c)});const f=k(()=>!i.activeChildren.size);return{globalTop:Me(u),localTop:f,stackStyles:k(()=>({zIndex:s.value}))}}function Dt(e){return{teleportTarget:k(()=>{const t=e.value;if(t===!0||!W)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let r=o.querySelector(":scope > .v-overlay-container");return r||(r=document.createElement("div"),r.className="v-overlay-container",o.appendChild(r)),r})}}function It(){return!0}function Ae(e,n,t){if(!e||Re(e,t)===!1)return!1;const o=Pe(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const r=(typeof t.value=="object"&&t.value.include||(()=>[]))();return r.push(n),!r.some(a=>a==null?void 0:a.contains(e.target))}function Re(e,n){return(typeof n.value=="object"&&n.value.closeConditional||It)(e)}function _t(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Ae(e,n,t)&&setTimeout(()=>{Re(e,t)&&o&&o(e)},0)}function Se(e,n){const t=Pe(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Mt={mounted(e,n){const t=r=>_t(r,e,n),o=r=>{e._clickOutside.lastMousedownWasOutside=Ae(r,e,n)};Se(e,r=>{r.addEventListener("click",t,!0),r.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Se(e,t=>{var a;if(!t||!((a=e._clickOutside)!=null&&a[n.instance.$.uid]))return;const{onClick:o,onMousedown:r}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",r,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Ht(e){const{modelValue:n,color:t,...o}=e;return M(at,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&M("div",G({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Nt=j({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...mt(),...Ne(),...We(),...ht(),...Et(),...kt(),...Ve(),...je()},"v-overlay"),jt=qe()({name:"VOverlay",directives:{ClickOutside:Mt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Nt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:r}=n;const a=ze(e,"modelValue"),i=k({get:()=>a.value,set:h=>{h&&e.disabled||(a.value=h)}}),{teleportTarget:s}=Dt(k(()=>e.attach||e.contained)),{themeClasses:u}=$e(e),{rtlClasses:f,isRtl:c}=Ge(),{hasContent:v,onAfterLeave:m}=bt(e,i),O=Ye(k(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:y,localTop:d,stackStyles:P}=Bt(i,Ue(e,"zIndex"),e._disableGlobalStack),{activatorEl:p,activatorRef:w,activatorEvents:l,contentEvents:A,scrimEvents:I}=yt(e,{isActive:i,isTop:d}),{dimensionStyles:H}=Ke(e),N=Lt(),{scopeId:q}=Ft();T(()=>e.disabled,h=>{h&&(i.value=!1)});const z=C(),_=C(),{contentStyles:S,updateLocation:E}=St(e,{isRtl:c,contentEl:_,activatorEl:p,isActive:i});Ct(e,{root:z,contentEl:_,activatorEl:p,isActive:i,updateLocation:E});function g(h){r("click:outside",h),e.persistent?x():i.value=!1}function b(){return i.value&&y.value}W&&T(i,h=>{h?window.addEventListener("keydown",R):window.removeEventListener("keydown",R)},{immediate:!0});function R(h){h.key==="Escape"&&y.value&&(e.persistent?x():i.value=!1)}const L=Je();ue(()=>e.closeOnBack,()=>{rt(L,h=>{y.value&&i.value?(h(!1),e.persistent?x():i.value=!1):h()})});const V=C();T(()=>i.value&&(e.absolute||e.contained)&&s.value==null,h=>{if(h){const D=ct(z.value);D&&D!==document.scrollingElement&&(V.value=D.scrollTop)}});function x(){e.noClickAnimation||_.value&&lt(_.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:st})}return Qe(()=>{var h;return M(ot,null,[(h=t.activator)==null?void 0:h.call(t,{isActive:i.value,props:G({ref:w},ee(l.value),e.activatorProps)}),N.value&&M(Xe,{disabled:!s.value,to:s.value},{default:()=>[v.value&&M("div",G({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},u.value,f.value,e.class],style:[P.value,{top:F(V.value)},e.style],ref:z},q,o),[M(Ht,G({color:O,modelValue:i.value&&!!e.scrim},ee(I.value)),null),M(Ze,{appear:!0,persisted:!0,transition:e.transition,target:p.value,onAfterLeave:()=>{m(),r("afterLeave")}},{default:()=>{var D;return[et(M("div",G({ref:_,class:["v-overlay__content",e.contentClass],style:[H.value,S.value]},ee(A.value),e.contentProps),[(D=t.default)==null?void 0:D.call(t,{isActive:i})]),[[tt,i.value],[nt("click-outside"),{handler:g,closeConditional:b,include:()=>[p.value]}]])]}})])]})])}),{activatorEl:p,animateClick:x,contentEl:_,globalTop:y,localTop:d,updateLocation:E}}}),ae=Symbol("Forwarded refs");function re(e,n){let t=e;for(;t;){const o=Reflect.getOwnPropertyDescriptor(t,n);if(o)return o;t=Object.getPrototypeOf(t)}}function qt(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];return e[ae]=t,new Proxy(e,{get(r,a){if(Reflect.has(r,a))return Reflect.get(r,a);if(!(typeof a=="symbol"||a.startsWith("__"))){for(const i of t)if(i.value&&Reflect.has(i.value,a)){const s=Reflect.get(i.value,a);return typeof s=="function"?s.bind(i.value):s}}},has(r,a){if(Reflect.has(r,a))return!0;if(typeof a=="symbol"||a.startsWith("__"))return!1;for(const i of t)if(i.value&&Reflect.has(i.value,a))return!0;return!1},getOwnPropertyDescriptor(r,a){var s;const i=Reflect.getOwnPropertyDescriptor(r,a);if(i)return i;if(!(typeof a=="symbol"||a.startsWith("__"))){for(const u of t){if(!u.value)continue;const f=re(u.value,a)??("_"in u.value?re((s=u.value._)==null?void 0:s.setupState,a):void 0);if(f)return f}for(const u of t){const f=u.value&&u.value[ae];if(!f)continue;const c=f.slice();for(;c.length;){const v=c.shift(),m=re(v.value,a);if(m)return m;const O=v.value&&v.value[ae];O&&c.push(...O)}}}}})}export{jt as V,qt as f,Nt as m,Ft as u};
