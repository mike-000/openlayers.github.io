"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9869],{5579:function(e,t,n){var o=n(9066),i=n(1055),r=n(787),c=n(824),s=n(677),a=n(5002),l=n(2776),u=n(4688),d=n(3814),f=n(5925),g=n(5117),m=n(4711),w=n(2893),p=n(1733),h=n(8881),Z=n(1320);const v=new w.Z({source:new g.Z}),y=new m.Z,k=new p.Z({source:y,style:{"fill-color":"rgba(255, 255, 255, 0.2)","stroke-color":"#ffcc33","stroke-width":2,"circle-radius":7,"circle-fill-color":"#ffcc33"}});let P,b,C,L,M;const E=new i.Z({layers:[v,k],target:"map",view:new c.ZP({center:[-11e6,46e5],zoom:15})});E.on("pointermove",(function(e){if(e.dragging)return;let t="Click to start drawing";if(P){const e=P.getGeometry();e instanceof d.ZP?t="Click to continue drawing the polygon":e instanceof f.Z&&(t="Click to continue drawing the line")}b.innerHTML=t,C.setPosition(e.coordinate),b.classList.remove("hidden")})),E.getViewport().addEventListener("mouseout",(function(){b.classList.add("hidden")}));const N=document.getElementById("type");let I;const G=new s.ZP({fill:new a.Z({color:"rgba(255, 255, 255, 0.2)"}),stroke:new l.Z({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new u.Z({radius:5,stroke:new l.Z({color:"rgba(0, 0, 0, 0.7)"}),fill:new a.Z({color:"rgba(255, 255, 255, 0.2)"})})});function O(){const e="area"==N.value?"Polygon":"LineString";let t;I=new o.ZP({source:y,type:e,style:function(t){const n=t.getGeometry().getType();if(n===e||"Point"===n)return G}}),E.addInteraction(I),T(),function(){b&&b.parentNode.removeChild(b);b=document.createElement("div"),b.className="ol-tooltip hidden",C=new r.Z({element:b,offset:[15,0],positioning:"center-left"}),E.addOverlay(C)}(),I.on("drawstart",(function(e){P=e.feature;let n=e.coordinate;t=P.getGeometry().on("change",(function(e){const t=e.target;let o;t instanceof d.ZP?(o=function(e){const t=(0,h.bg)(e);let n;return n=t>1e4?Math.round(t/1e6*100)/100+" km<sup>2</sup>":Math.round(100*t)/100+" m<sup>2</sup>",n}(t),n=t.getInteriorPoint().getCoordinates()):t instanceof f.Z&&(o=function(e){const t=(0,h.xA)(e);let n;return n=t>100?Math.round(t/1e3*100)/100+" km":Math.round(100*t)/100+" m",n}(t),n=t.getLastCoordinate()),L.innerHTML=o,M.setPosition(n)}))})),I.on("drawend",(function(){L.className="ol-tooltip ol-tooltip-static",M.setOffset([0,-7]),P=null,L=null,T(),(0,Z.B)(t)}))}function T(){L&&L.parentNode.removeChild(L),L=document.createElement("div"),L.className="ol-tooltip ol-tooltip-measure",M=new r.Z({element:L,offset:[0,-15],positioning:"bottom-center",stopEvent:!1,insertFirst:!1}),E.addOverlay(M)}N.onchange=function(){E.removeInteraction(I),O()},O()}},function(e){var t;t=5579,e(e.s=t)}]);
//# sourceMappingURL=measure.js.map