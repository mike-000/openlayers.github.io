"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1950],{88650:function(e,n,t){var s=t(79619),a=t(1055),o=t(47051),r=t(1733),i=t(4711),l=t(40824),u=t(82776),c=t(80677),w=t(49243),Z=t(5002);const g=new u.Z({color:"black",width:1}),d={square:new c.ZP({image:new w.Z({fill:new Z.Z({color:"blue"}),stroke:g,points:4,radius:80,angle:Math.PI/4})}),triangle:new c.ZP({image:new w.Z({fill:new Z.Z({color:"red"}),stroke:g,points:3,radius:80,rotation:Math.PI/4,angle:0})}),star:new c.ZP({image:new w.Z({fill:new Z.Z({color:"green"}),stroke:g,points:5,radius:80,radius2:4,angle:0})})};function f(e,n,t){const a=new s.Z(new o.Z(e));a.setStyle(n);const l=new i.Z({features:[a]}),u=new r.Z({source:l});return u.setZIndex(t),u}const p=f([40,40],d.star),h=f([0,0],d.square,1),k=f([0,40],d.triangle,0),m=[];m.push(h),m.push(k);const I=new a.Z({layers:m,target:"map",view:new l.ZP({center:[0,0],zoom:18})});function P(e,n){const t=document.getElementById("idx"+e);t.onchange=function(){n.setZIndex(parseInt(this.value,10)||0)},t.value=String(n.getZIndex())}p.setMap(I),P(1,h),P(2,k)}},function(e){var n;n=88650,e(e.s=n)}]);
//# sourceMappingURL=layer-z-index.js.map