"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8087],{8234:function(e,t,n){var o=n(9619),r=n(4805),a=n(1055),s=n(824),i=n(5002),g=n(2776),l=n(4688),u=n(1652),c=n(677),w=n(1976),m=n(4711),f=n(8111),Z=n(4469),h=n(7051),p=n(5925),d=n(3814),y=n(1733),b=n(2893),x=n(6117),P=n(1625);const v=1,k=28,C=Math.PI/2,M=new i.Z({color:"rgba(255, 153, 0, 0.4)"}),G=new g.Z({color:"rgba(204, 85, 0, 1)",width:1.5}),E=new i.Z({color:"rgba(255, 153, 102, 0.3)"}),S=new i.Z({color:"rgba(255, 165, 0, 0.7)"}),I=new i.Z({color:"#fff"}),z=new g.Z({color:"rgba(0, 0, 0, 0.6)",width:3}),F=new l.Z({radius:14,fill:S}),j=new l.Z({radius:20,fill:E}),T=new u.Z({src:"data/icons/emoticon-cool.svg"}),V=new u.Z({src:"data/icons/emoticon-cool-outline.svg"});function B(e){return new c.ZP({geometry:e.getGeometry(),image:e.get("LEISTUNG")>5?T:V})}let D,H,J;function L(e,t){if(e!==D||t!==H)return null;const n=e.get("features"),r=e.getGeometry().getCoordinates();return function(e,t,n){let o=v*k*(2+e)/(2*Math.PI);const r=2*Math.PI/e,a=[];let s;o=Math.max(o,35)*n;for(let n=0;n<e;++n)s=C+n*r,a.push([t[0]+o*Math.cos(s),t[1]+o*Math.sin(s)]);return a}(n.length,e.getGeometry().getCoordinates(),t).reduce(((e,t,a)=>{const s=new h.Z(t),i=new p.Z([r,t]);return e.unshift(new c.ZP({geometry:i,stroke:G})),e.push(B(new o.Z({...n[a].getProperties(),geometry:s}))),e}),[])}function N(e){if(e!==J)return null;const t=e.get("features").map((e=>e.getGeometry().getCoordinates()));return new c.ZP({geometry:new d.ZP([monotoneChainConvexHull(t)]),fill:M,stroke:G})}const R=new m.Z({format:new r.Z,url:"data/geojson/photovoltaic.json"}),U=new f.Z({attributions:'Data: <a href="https://www.data.gv.at/auftritte/?organisation=stadt-wien">Stadt Wien</a>',distance:35,source:R}),W=new y.Z({source:U,style:N}),_=new y.Z({source:U,style:function(e){const t=e.get("features").length;return t>1?[new c.ZP({image:j}),new c.ZP({image:F,text:new w.Z({text:t.toString(),fill:I,stroke:z})})]:B(e.get("features")[0])}}),q=new y.Z({source:U,style:L}),A=new b.Z({source:new Z.Z({attributions:'Base map: <a target="_blank" href="https://basemap.at/">basemap.at</a>',url:"https://maps{1-4}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png"})}),K=new a.Z({layers:[A,W,_,q],target:"map",view:new s.ZP({center:[0,0],zoom:2,maxZoom:19,extent:[...(0,P.mi)([16.1793,48.1124]),...(0,P.mi)([16.5559,48.313])],showFullExtent:!0})});K.on("pointermove",(e=>{_.getFeatures(e.pixel).then((e=>{e[0]!==J&&(J=e[0],W.setStyle(N),K.getTargetElement().style.cursor=J&&J.get("features").length>1?"pointer":"")}))})),K.on("click",(e=>{_.getFeatures(e.pixel).then((e=>{if(e.length>0){const t=e[0].get("features");if(t.length>1){const n=(0,x.lJ)();t.forEach((e=>(0,x.l7)(n,e.getGeometry().getExtent())));const o=K.getView(),r=K.getView().getResolution();o.getZoom()===o.getMaxZoom()||(0,x.dz)(n)<r&&(0,x.Cr)(n)<r?(D=e[0],H=r,q.setStyle(L)):o.fit(n,{duration:500,padding:[50,50,50,50]})}}}))}))}},function(e){var t;t=8234,e(e.s=t)}]);
//# sourceMappingURL=clusters-dynamic.js.map