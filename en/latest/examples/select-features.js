"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4363],{4142:function(e,t,n){var o=n(1118),l=n(1376),c=n(2110),s=n(1372),r=n(5783),i=n(4354),u=n(9039),a=n(7975),d=n(720),g=n(6104);const w=new u.ZP({fill:new a.Z({color:"#eeeeee"})}),f=new s.Z({source:new r.Z({url:"https://openlayers.org/data/vector/ecoregions.json",format:new o.Z}),background:"white",style:function(e){const t=e.get("COLOR")||"#eeeeee";return w.getFill().setColor(t),w}}),Z=new l.Z({layers:[f],target:"map",view:new i.ZP({center:[0,0],zoom:2})});let h=null;const p=new u.ZP({fill:new a.Z({color:"#eeeeee"}),stroke:new d.Z({color:"rgba(255, 255, 255, 0.7)",width:2})});function y(e){const t=e.get("COLOR")||"#eeeeee";return p.getFill().setColor(t),p}const k=new c.Z({style:y}),m=new c.Z({condition:g.V4,style:y}),v=new c.Z({condition:g.MJ,style:y}),C=new c.Z({style:y,condition:function(e){return(0,g.V4)(e)&&(0,g.Ko)(e)}}),b=document.getElementById("type"),I=function(){null!==h&&Z.removeInteraction(h);const e=b.value;h="singleclick"==e?k:"click"==e?m:"pointermove"==e?v:"altclick"==e?C:null,null!==h&&(Z.addInteraction(h),h.on("select",(function(e){document.getElementById("status").innerHTML="&nbsp;"+e.target.getFeatures().getLength()+" selected features (last operation selected "+e.selected.length+" and deselected "+e.deselected.length+" features)"})))};b.onchange=I,I()}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(4142)}]);
//# sourceMappingURL=select-features.js.map