"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[566],{7506:function(e,n,t){var o=t(4805),r=t(3479),s=t(1055),c=t(5117),a=t(4711),u=t(824),Z=t(7051),w=t(5925),f=t(3814),i=t(6667),d=t(4729),h=t(8105),l=t(1733),m=t(2893),g=t(1625);const j=new a.Z;fetch("data/geojson/roads-seoul.geojson").then((function(e){return e.json()})).then((function(e){const n=(new o.Z).readFeatures(e,{featureProjection:"EPSG:3857"}),t=new jsts.io.OL3Parser;t.inject(Z.Z,w.Z,r.Z,f.ZP,i.Z,d.Z,h.Z);for(let e=0;e<n.length;e++){const o=n[e],r=t.read(o.getGeometry()).buffer(40);o.setGeometry(t.write(r))}j.addFeatures(n)}));const P=new l.Z({source:j}),k=new m.Z({source:new c.Z});new s.Z({layers:[k,P],target:document.getElementById("map"),view:new u.ZP({center:(0,g.mi)([126.979293,37.528787]),zoom:15})})}},function(e){var n;n=7506,e(e.s=n)}]);
//# sourceMappingURL=jsts.js.map