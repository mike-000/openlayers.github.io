"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2799],{2091:function(t,e,i){var s=i(92486),n=i(58322),a=i(22222),r=i(41507),h=i(63312);function o(t){return parseFloat(t)}function l(t){return function(t){return(0,h.FH)(t,5)}(t).toString()}function _(t,e){return!isNaN(t)&&t!==o(l(e))}class p extends n.ZP{constructor(t){let e;super(),e=!0===(t=Object.assign({animate:!0,params:["x","y","z","r","l"],replace:!1,prefix:""},t||{})).animate?{duration:250}:t.animate?t.animate:null,this.animationOptions_=e,this.params_=t.params.reduce(((t,e)=>(t[e]=!0,t)),{}),this.replace_=t.replace,this.prefix_=t.prefix,this.listenerKeys_=[],this.initial_=!0,this.updateState_=this.updateState_.bind(this)}getParamName_(t){return this.prefix_?this.prefix_+t:t}get_(t,e){return t.get(this.getParamName_(e))}set_(t,e,i){e in this.params_&&t.set(this.getParamName_(e),i)}delete_(t,e){e in this.params_&&t.delete(this.getParamName_(e))}setMap(t){const e=this.getMap();super.setMap(t),t!==e&&(e&&this.unregisterListeners_(e),t&&(this.initial_=!0,this.updateState_(),this.registerListeners_(t)))}registerListeners_(t){this.listenerKeys_.push((0,r.oL)(t,a.Z.MOVEEND,this.updateUrl_,this),(0,r.oL)(t.getLayerGroup(),s.Z.CHANGE,this.updateUrl_,this),(0,r.oL)(t,"change:layergroup",this.handleChangeLayerGroup_,this)),this.replace_||addEventListener("popstate",this.updateState_)}unregisterListeners_(t){for(let t=0,e=this.listenerKeys_.length;t<e;++t)(0,r.bN)(this.listenerKeys_[t]);this.listenerKeys_.length=0,this.replace_||removeEventListener("popstate",this.updateState_);const e=new URL(window.location.href),i=e.searchParams;this.delete_(i,"x"),this.delete_(i,"y"),this.delete_(i,"z"),this.delete_(i,"r"),this.delete_(i,"l"),window.history.replaceState(null,"",e)}handleChangeLayerGroup_(){const t=this.getMap();t&&(this.unregisterListeners_(t),this.registerListeners_(t),this.initial_=!0,this.updateUrl_())}updateState_(){const t=this.getMap();if(!t)return;const e=t.getView();if(!e)return;const i=new URL(window.location.href).searchParams;let s=!1;const n={},a=o(this.get_(i,"z"));"z"in this.params_&&_(a,e.getZoom())&&(s=!0,n.zoom=a);const r=o(this.get_(i,"r"));"r"in this.params_&&_(r,e.getRotation())&&(s=!0,n.rotation=r);const h=[o(this.get_(i,"x")),o(this.get_(i,"y"))];var l,p;("x"in this.params_||"y"in this.params_)&&(l=h,p=e.getCenter(),_(l[0],p[0])||_(l[1],p[1]))&&(s=!0,n.center=h),s&&(!this.initial_&&this.animationOptions_?e.animate(Object.assign(n,this.animationOptions_)):(n.center&&e.setCenter(n.center),"zoom"in n&&e.setZoom(n.zoom),"rotation"in n&&e.setRotation(n.rotation)));const c=t.getAllLayers(),g=this.get_(i,"l");if("l"in this.params_&&g&&g.length===c.length)for(let t=0,e=c.length;t<e;++t){const e=parseInt(g[t]);if(!isNaN(e)){const i=Boolean(e),s=c[t];s.getVisible()!==i&&s.setVisible(i)}}}updateUrl_(){const t=this.getMap();if(!t)return;const e=t.getView();if(!e)return;const i=this.initial_;this.initial_=!1;const s=e.getCenter(),n=e.getZoom(),a=e.getRotation(),r=t.getAllLayers(),h=new Array(r.length);for(let t=0,e=r.length;t<e;++t)h[t]=r[t].getVisible()?"1":"0";const o=new URL(window.location.href),_=o.searchParams;this.set_(_,"x",l(s[0])),this.set_(_,"y",l(s[1])),this.set_(_,"z",l(n)),this.set_(_,"r",l(a)),this.set_(_,"l",h.join("")),o.href!==window.location.href&&(i||this.replace_?window.history.replaceState(history.state,"",o):window.history.pushState(null,"",o))}}var c=p,g=i(1055),u=i(55117),m=i(72893),d=i(40824);new g.Z({layers:[new m.Z({source:new u.Z})],target:"map",view:new d.ZP({center:[0,0],zoom:2})}).addInteraction(new c)}},function(t){var e;e=2091,t(t.s=e)}]);
//# sourceMappingURL=link.js.map