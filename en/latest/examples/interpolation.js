"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5663],{9813:function(e,t,n){var r=n(1376),o=n(2010),i=n(4354),a=n(1998);const c="get_your_own_D6rA4zTHduk6KOKTXzGB",p='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',l=new o.Z({className:"ol-layer-dem",source:new a.Z({attributions:p,url:"https://api.maptiler.com/tiles/terrain-rgb/{z}/{x}/{y}.png?key="+c,tileSize:512,maxZoom:12,crossOrigin:"",interpolate:!1})}),s=new o.Z({source:new a.Z({attributions:p,url:"https://api.maptiler.com/tiles/terrain-rgb/{z}/{x}/{y}.png?key="+c,tileSize:512,maxZoom:12,crossOrigin:""})}),u=new i.ZP({center:[6.893,45.8295],zoom:16,projection:"EPSG:4326"}),m=new r.Z({target:"map1",layers:[l],view:u}),g=new r.Z({target:"map2",layers:[s],view:u}),w=document.getElementById("info1"),y=document.getElementById("info2"),f=function(e){e.dragging||(m.forEachLayerAtPixel(e.pixel,(function(e,t){const n=.1*(256*t[0]*256+256*t[1]+t[2])-1e4;w.innerText=n.toFixed(1)}),{layerFilter:function(e){return e===l}}),g.forEachLayerAtPixel(e.pixel,(function(e,t){const n=.1*(256*t[0]*256+256*t[1]+t[2])-1e4;y.innerText=n.toFixed(1)}),{layerFilter:function(e){return e===s}}))};m.on("pointermove",f),g.on("pointermove",f)}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(9813)}]);
//# sourceMappingURL=interpolation.js.map