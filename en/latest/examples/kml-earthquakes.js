"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3124],{3226:function(t,e,n){var o=n(7103),r=n(1376),a=n(4703),i=n(5783),l=n(4354),c=n(9039),s=n(7138),u=n(7975),w=n(720),f=n(1372),g=n(2010);const p={},m=new f.Z({source:new i.Z({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new o.ZP({extractStyles:!1})}),style:function(t){const e=t.get("name"),n=5+20*(parseFloat(e.substr(2))-5);let o=p[n];return o||(o=new c.ZP({image:new s.Z({radius:n,fill:new u.Z({color:"rgba(255, 153, 0, 0.4)"}),stroke:new w.Z({color:"rgba(255, 204, 0, 0.2)",width:1})})}),p[n]=o),o}}),Z=new g.Z({source:new a.Z({layer:"toner"})}),h=new r.Z({layers:[Z,m],target:"map",view:new l.ZP({center:[0,0],zoom:2})}),k=$("#info");k.tooltip({animation:!1,trigger:"manual"});const d=function(t){k.css({left:t[0]+"px",top:t[1]-15+"px"});const e=h.forEachFeatureAtPixel(t,(function(t){return t}));e?k.attr("data-original-title",e.get("name")).tooltip("show"):k.tooltip("hide")};h.on("pointermove",(function(t){t.dragging?k.tooltip("hide"):d(h.getEventPixel(t.originalEvent))})),h.on("click",(function(t){d(t.pixel)}))}},function(t){var e=function(e){return t(t.s=e)};e(9877),e(3226)}]);
//# sourceMappingURL=kml-earthquakes.js.map