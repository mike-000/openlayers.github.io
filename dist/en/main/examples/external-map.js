"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6827],{47264:function(e,t,n){var i=n(1055),d=n(55117),s=n(72893),o=n(40824),a=n(19870),c=n(35777),l=n(47703),u=n(81625);class r extends a.Z{constructor(){super({element:document.createElement("div")}),this.element.setAttribute("hidden","hidden"),this.element.className="ol-mask",this.element.innerHTML="<div>Map not usable</div>"}}const m=document.getElementById("map"),h=new i.Z({target:m,controls:(0,c.c)().extend([new l.Z,new r]),layers:[new s.Z({source:new d.Z})],view:new o.ZP({center:(0,u.mi)([37.41,8.82]),zoom:4})});let b;function v(){b&&(b.close(),b=void 0)}window.addEventListener("pagehide",v);const w=document.getElementById("external-map-button");function p(){m.style.height="",h.setTarget(m),w.disabled=!1}function g(){if(!b)return;const e=b.document.getElementById("map");e&&("visible"===document.visibilityState?(e.classList.remove("unusable"),e.setAttribute("tabindex","0"),e.focus()):(e.removeAttribute("tabindex"),e.classList.add("unusable")))}window.addEventListener("visibilitychange",g),w.addEventListener("click",(function(){const e=document.getElementById("blocker-notice");e.setAttribute("hidden","hidden"),w.disabled=!0;let t=setTimeout((function(){v(),p(),e.removeAttribute("hidden"),t=void 0}),3e3);b=window.open("resources/external-map-map.html","MapWindow","toolbar=0,location=0,menubar=0,width=800,height=600"),b.addEventListener("DOMContentLoaded",(function(){const e=b.document.getElementById("map");m.style.height="0px",h.setTarget(e),t&&(t=clearTimeout(t)),b.addEventListener("pagehide",(function(){p(),v()})),g()}))}))}},function(e){var t;t=47264,e(e.s=t)}]);
//# sourceMappingURL=external-map.js.map