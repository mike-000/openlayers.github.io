"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9490],{3500:function(e,n,t){var a=t(1376),c=t(9847),r=t(2010),i=t(4354),o=t(1327);const u=new(t(9912).Z);let s;fetch("data/WMTSCapabilities.xml").then((function(e){return e.text()})).then((function(e){const n=u.read(e),t=(0,o.B)(n,{layer:"layer-7328",matrixSet:"EPSG:3857"});s=new a.Z({layers:[new r.Z({source:new c.Z,opacity:.7}),new r.Z({opacity:1,source:new o.Z(t)})],target:"map",view:new i.ZP({center:[19412406.33,-5050500.21],zoom:5})})}))}},function(e){var n=function(n){return e(e.s=n)};n(9877),n(3500)}]);
//# sourceMappingURL=wmts-layer-from-capabilities.js.map