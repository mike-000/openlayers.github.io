(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{342:function(e,n,o){"use strict";o.r(n);var t=o(3),a=o(83),c=o(2),i=o(28),r=o(6),p=o(4),s=o(54),u=document.getElementById("popup"),l=document.getElementById("popup-content"),d=document.getElementById("popup-closer"),m=new a.a({element:u,autoPan:!0,autoPanAnimation:{duration:250}});d.onclick=function(){return m.setPosition(void 0),d.blur(),!1},new t.a({layers:[new r.a({source:new s.a({url:"https://api.tiles.mapbox.com/v3/mapbox.natural-earth-hypso-bathy.json?secure",crossOrigin:"anonymous"})})],overlays:[m],target:"map",view:new c.a({center:[0,0],zoom:2})}).on("singleclick",function(e){var n=e.coordinate,o=Object(i.l)(Object(p.l)(n));l.innerHTML="<p>You clicked here:</p><code>"+o+"</code>",m.setPosition(n)})}},[[342,0]]]);
//# sourceMappingURL=popup.js.map