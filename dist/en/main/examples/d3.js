"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[891],{75390:function(t,e,s){var a=s(1055),n=s(53061),o=s(40824),r=s(91462),i=s(72893),c=s(81625),u=s(36117);class d extends r.Z{constructor(t){super(t),this.features=t.features,this.svg=d3.select(document.createElement("div")).append("svg").style("position","absolute"),this.svg.append("path").datum(this.features).attr("class","boundary")}getSourceState(){return"ready"}render(t){const e=t.size[0],s=t.size[1],a=t.viewState.projection,n=d3.geoMercator().scale(1).translate([0,0]);let o=d3.geoPath().projection(n);const r=o.bounds(this.features),i=r[1][0]-r[0][0],d=r[1][1]-r[0][1],h=d3.geoBounds(this.features),l=(0,c.mi)(h[0],a),p=(0,c.mi)(h[1],a);let g=p[0]-l[0];g<0&&(g+=(0,u.dz)(a.getExtent()));const v=g/i,f=(p[1]-l[1])/d,w=Math.max(v,f)/t.viewState.resolution,m=(0,c.bU)((0,u.qg)(t.extent),a),j=180*-t.viewState.rotation/Math.PI;return n.scale(w).center(m).translate([e/2,s/2]).angle(j),o=o.projection(n),o(this.features),this.svg.attr("width",e),this.svg.attr("height",s),this.svg.select("path").attr("d",o),this.svg.node()}}const h=new a.Z({layers:[new i.Z({source:new n.Z({layer:"stamen_watercolor"})})],target:"map",view:new o.ZP({center:(0,c.mi)([-97,38]),zoom:4})});d3.json("data/topojson/us.json").then((function(t){const e=new d({features:topojson.feature(t,t.objects.counties)});h.addLayer(e)}))}},function(t){var e;e=75390,t(t.s=e)}]);
//# sourceMappingURL=d3.js.map