"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9932],{1879:function(e,t,n){var a=n(687),r=n(1055),u=n(5277),s=n(4711),l=n(824),c=n(361),o=n(2893);const i=document.getElementById("blur"),d=document.getElementById("radius"),p=new c.Z({source:new s.Z({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new a.ZP({extractStyles:!1})}),blur:parseInt(i.value,10),radius:parseInt(d.value,10),weight:function(e){const t=e.get("name");return parseFloat(t.substr(2))-5}}),w=new o.Z({source:new u.Z({layer:"toner"})});new r.Z({layers:[w,p],target:"map",view:new l.ZP({center:[0,0],zoom:2})}),i.addEventListener("input",(function(){p.setBlur(parseInt(i.value,10))})),d.addEventListener("input",(function(){p.setRadius(parseInt(d.value,10))}))}},function(e){var t;t=1879,e(e.s=t)}]);
//# sourceMappingURL=heatmap-earthquakes.js.map