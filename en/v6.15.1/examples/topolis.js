"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1181],{714:function(e,t,n){var o=n(2739),r=n(1376),d=n(7145),i=n(4354),c=n(9039),a=n(7138),w=n(7975),s=n(720),g=n(729),l=n(1038),u=n(9247),Z=n(5265),f=n(5469),y=n(5528),h=n(9847),m=n(5783),p=n(2010),k=n(1372);const P=new p.Z({source:new h.Z}),v=new m.Z({wrapX:!1}),I=new k.Z({source:v,style:function(e){return[new c.ZP({image:new a.Z({radius:8,fill:new w.Z({color:"rgba(255, 0, 0, 0.2)"}),stroke:new s.Z({color:"red",width:1})}),text:new g.Z({text:e.get("node").id.toString(),fill:new w.Z({color:"red"}),stroke:new s.Z({color:"white",width:3})})})]}}),F=new m.Z({wrapX:!1}),b=new k.Z({source:F,style:function(e){return[new c.ZP({stroke:new s.Z({color:"blue",width:1}),text:new g.Z({text:e.get("edge").id.toString(),fill:new w.Z({color:"blue"}),stroke:new s.Z({color:"white",width:2})})})]}}),B=new m.Z({wrapX:!1}),x=new k.Z({source:B,style:function(e){return[new c.ZP({stroke:new s.Z({color:"black",width:1}),fill:new w.Z({color:"rgba(0, 255, 0, 0.2)"}),text:new g.Z({font:"bold 12px sans-serif",text:e.get("face").id.toString(),fill:new w.Z({color:"green"}),stroke:new s.Z({color:"white",width:2})})})]}}),E=new r.Z({layers:[P,x,b,I],target:"map",view:new i.ZP({center:[-11e6,46e5],zoom:16})}),N=topolis.createTopology();function S(e,t){const n=e.getFeatureById(t.id);e.removeFeature(n)}function C(e,t){let n;const o=e.getEdgeByPoint(t,5)[0];return n=o?e.modEdgeSplit(o,t):e.addIsoNode(t),n}N.on("addnode",(function(e){const t=new o.Z({geometry:new f.Z(e.coordinate),node:e});t.setId(e.id),v.addFeature(t)})),N.on("removenode",(function(e){S(v,e)})),N.on("addedge",(function(e){const t=new o.Z({geometry:new Z.Z(e.coordinates),edge:e});t.setId(e.id),F.addFeature(t)})),N.on("modedge",(function(e){F.getFeatureById(e.id).setGeometry(new Z.Z(e.coordinates))})),N.on("removeedge",(function(e){S(F,e)})),N.on("addface",(function(e){const t=N.getFaceGeometry(e),n=new o.Z({geometry:new y.ZP(t),face:e});n.setId(e.id),B.addFeature(n)})),N.on("removeface",(function(e){S(B,e)}));const G=new l.ZP({type:"LineString"});G.on("drawend",(function(e){const t=e.feature.getGeometry().getCoordinates(),n=t[0],o=t[t.length-1];let r,d;try{r=N.getNodeByPoint(n),d=N.getNodeByPoint(o);const e=N.getEdgeByPoint(n,5),i=N.getEdgeByPoint(o,5),c=N.getEdgesByLine(t);if(1===c.length&&!r&&!d&&0===e.length&&0===i.length)return N.remEdgeNewFace(c[0]),r=c[0].start,r.face&&N.removeIsoNode(r),d=c[0].end,void(d.face&&N.removeIsoNode(d));r||(r=C(N,n),t[0]=r.coordinate),d||(d=C(N,o),t[t.length-1]=d.coordinate),N.addEdgeNewFaces(r,d,t)}catch(e){toastr.warning(e.toString())}})),E.addInteraction(G);const X=new u.Z({source:F});E.addInteraction(X),E.addControl(new d.Z)}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(714)}]);
//# sourceMappingURL=topolis.js.map