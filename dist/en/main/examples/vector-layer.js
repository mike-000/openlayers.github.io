"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[685],{40171:function(e,t,n){var o=n(54805),r=n(1055),c=n(1733),l=n(4711),s=n(40824);const i=new c.Z({background:"#1a2b39",source:new l.Z({url:"https://openlayers.org/data/vector/ecoregions.json",format:new o.Z}),style:[{filter:["get","COLOR"],style:{"fill-color":["get","COLOR"]}},{else:!0,style:{"fill-color":"#eee"}}]}),a=new r.Z({layers:[i],target:"map",view:new s.ZP({center:[0,0],zoom:1})}),u=new c.Z({source:new l.Z,map:a,style:{"stroke-color":"rgba(255, 255, 255, 0.7)","stroke-width":2}});let g;const f=function(e){const t=a.forEachFeatureAtPixel(e,(function(e){return e})),n=document.getElementById("info");n.innerHTML=t&&t.get("ECO_NAME")||"&nbsp;",t!==g&&(g&&u.getSource().removeFeature(g),t&&u.getSource().addFeature(t),g=t)};a.on("pointermove",(function(e){if(e.dragging)return;const t=a.getEventPixel(e.originalEvent);f(t)})),a.on("click",(function(e){f(e.pixel)}))}},function(e){var t;t=40171,e(e.s=t)}]);
//# sourceMappingURL=vector-layer.js.map