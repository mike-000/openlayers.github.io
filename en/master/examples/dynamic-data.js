(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{266:function(e,a,r){"use strict";r.r(a);var n=r(3),t=r(2),w=r(71),o=r(26),s=r(6),i=r(10),l=r(14),c=r(49),d=r(24),h=r(20),m=r(65),u=new s.a({source:new i.b}),p=new n.a({layers:[u],target:"map",view:new t.a({center:[0,0],zoom:2})}),y=new l.c({image:new c.a({radius:5,fill:new d.a({color:"yellow"}),stroke:new h.a({color:"red",width:1})})}),b=new l.c({image:new c.a({radius:2,fill:new d.a({color:"blue"})})}),f=new l.c({image:new c.a({radius:5,fill:new d.a({color:"black"})})}),M=2e6;u.on("postrender",function(e){var a,r=Object(m.b)(e),n=e.frameState,t=2*Math.PI*n.time/3e4,s=[];for(a=0;a<200;++a){var i=t+2*Math.PI*a/200,l=9e6*Math.cos(i)+2e6*Math.cos(9e6*i/M),c=9e6*Math.sin(i)+2e6*Math.sin(9e6*i/M);s.push([l,c])}r.setStyle(y),r.drawGeometry(new w.a(s));var d=new o.a(s[s.length-1]);r.setStyle(f),r.drawGeometry(d),r.setStyle(b),r.drawGeometry(d),p.render()}),p.render()}},[[266,0]]]);
//# sourceMappingURL=dynamic-data.js.map