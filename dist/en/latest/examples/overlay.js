"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6372],{7991:function(e,n,t){var o=t(1055),c=t(5117),i=t(787),a=t(2893),p=t(824),s=t(1625),r=t(9775);const l=new a.Z({source:new c.Z}),d=new o.Z({layers:[l],target:"map",view:new p.ZP({center:[0,0],zoom:2})}),m=(0,s.mi)([16.3725,48.208889]),u=new i.Z({element:document.getElementById("popup")});d.addOverlay(u);const w=new i.Z({position:m,positioning:"center-center",element:document.getElementById("marker"),stopEvent:!1});d.addOverlay(w);const v=new i.Z({position:m,element:document.getElementById("vienna")});d.addOverlay(v),d.on("click",(function(e){const n=u.getElement(),t=e.coordinate,o=(0,r.V7)((0,s.bU)(t));$(n).popover("dispose"),u.setPosition(t),$(n).popover({container:n,placement:"top",animation:!1,html:!0,content:"<p>The location you clicked was:</p><code>"+o+"</code>"}),$(n).popover("show")}))}},function(e){var n;n=7991,e(e.s=n)}]);
//# sourceMappingURL=overlay.js.map