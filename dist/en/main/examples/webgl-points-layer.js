"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9578],{69812:function(e,t,o){var n=o(54805),i=o(1055),l=o(55117),a=o(72893),r=o(4711),s=o(40824),c=o(22318);const f=new r.Z({url:"data/geojson/world-cities.geojson",format:new n.Z,wrapX:!0}),p={icons:{symbol:{symbolType:"image",src:"data/icon.png",size:[18,28],color:"lightyellow",rotateWithView:!1,offset:[0,9]}},triangles:{symbol:{symbolType:"triangle",size:18,color:["interpolate",["linear"],["get","population"],2e4,"#5aca5b",3e5,"#ff6a19"],rotateWithView:!0}},"triangles-latitude":{symbol:{symbolType:"triangle",size:["interpolate",["linear"],["get","population"],4e4,12,2e6,24],color:["interpolate",["linear"],["get","latitude"],-60,"#ff14c3",-20,"#ff621d",20,"#ffed02",60,"#00ff67"],offset:[0,0],opacity:.95}},circles:{symbol:{symbolType:"circle",size:["interpolate",["linear"],["get","population"],4e4,8,2e6,28],color:["match",["get","hover"],1,"#ff3f3f","#006688"],rotateWithView:!1,offset:[0,0],opacity:["interpolate",["linear"],["get","population"],4e4,.6,2e6,.92]}},"circles-zoom":{symbol:{symbolType:"circle",size:["interpolate",["exponential",2],["zoom"],5,3,15,3*Math.pow(2,10)],color:["match",["get","hover"],1,"#ff3f3f","#006688"],offset:[0,0],opacity:.95}},"rotating-bars":{symbol:{symbolType:"square",rotation:["*",["time"],.1],size:["array",4,["interpolate",["linear"],["get","population"],2e4,4,3e5,28]],color:["interpolate",["linear"],["get","population"],2e4,"#ffdc00",3e5,"#ff5b19"],offset:["array",0,["interpolate",["linear"],["get","population"],2e4,2,3e5,14]]}}},y=new i.Z({layers:[new a.Z({source:new l.Z})],target:document.getElementById("map"),view:new s.ZP({center:[0,0],zoom:2})});let u,m,d=null;function g(e){const t=m;m=new c.Z({source:f,style:e}),y.addLayer(m),t&&(y.removeLayer(t),t.dispose()),u=e}y.on("pointermove",(function(e){null!==d&&(d.set("hover",0),d=null),y.forEachFeatureAtPixel(e.pixel,(function(e){return e.set("hover",1),d=e,!0}))}));const h=document.getElementById("style-valid"),w=document.getElementById("style-invalid");function b(e){const t="string"==typeof e;h.style.display=null===e?"initial":"none",w.firstElementChild.innerText=t?e:"",w.style.display=t?"initial":"none"}const v=document.getElementById("style-editor");v.addEventListener("input",(function(){const e=v.value;try{const t=JSON.parse(e);JSON.stringify(t)!==JSON.stringify(u)&&g(t),b(null)}catch(e){b(e.message)}}));const z=document.getElementById("style-select");function E(){const e=z.value,t=p[e];v.value=JSON.stringify(t,null,2);try{g(t),b()}catch(e){b(e.message)}}z.value="circles",E(),z.addEventListener("change",E),function e(){y.render(),window.requestAnimationFrame(e)}()}},function(e){var t;t=69812,e(e.s=t)}]);
//# sourceMappingURL=webgl-points-layer.js.map