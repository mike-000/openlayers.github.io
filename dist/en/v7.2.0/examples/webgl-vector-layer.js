"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5898],{4123:function(t,e,n){var r=n(4805),s=n(1462),i=n(1055),o=n(5117),a=n(463),c=n(4711),l=n(824),u=n(1159),h=n(5230),f=n(2765),d=n(4669);let g=0;var _=class{constructor(t,e,n,r,s){this.helper_=t,this.worker_=e,this.program_=this.helper_.getProgram(r,n),this.attributes=[],this.customAttributes=s}rebuild(t,e,n,r){t.renderInstructionsTransform=this.helper_.makeProjectionTransform(e,(0,d.Ue)()),this.generateRenderInstructions(t),this.generateBuffers_(t,n,r)}render(t,e,n,r){this.helper_.makeProjectionTransform(n,e),(0,d.Iu)(e,r,0),(0,d.Jp)(e,t.invertVerticesBufferTransform),this.helper_.useProgram(this.program_,n),this.helper_.bindBuffer(t.verticesBuffer),this.helper_.bindBuffer(t.indicesBuffer),this.helper_.enableAttributes(this.attributes);const s=t.indicesBuffer.getSize();this.helper_.drawElements(0,s)}generateRenderInstructions(t){(0,f.O3)()}generateBuffers_(t,e,n){const r=g++;let s;switch(e){case"Polygon":s=h.S.GENERATE_POLYGON_BUFFERS;break;case"Point":s=h.S.GENERATE_POINT_BUFFERS;break;case"LineString":s=h.S.GENERATE_LINE_STRING_BUFFERS}const i={id:r,type:s,renderInstructions:t.renderInstructions.buffer,renderInstructionsTransform:t.renderInstructionsTransform,customAttributesCount:this.customAttributes.length};this.worker_.postMessage(i,[t.renderInstructions.buffer]),t.renderInstructions=null;const o=e=>{const s=e.data;s.id===r&&(this.worker_.removeEventListener("message",o),t.verticesBufferTransform=s.renderInstructionsTransform,(0,d.nb)(t.invertVerticesBufferTransform,t.verticesBufferTransform),t.verticesBuffer.fromArrayBuffer(s.vertexBuffer),this.helper_.flushBufferData(t.verticesBuffer),t.indicesBuffer.fromArrayBuffer(s.indexBuffer),this.helper_.flushBufferData(t.indicesBuffer),t.renderInstructions=new Float32Array(s.renderInstructions),n())};this.worker_.addEventListener("message",o)}},v=n(439),m=n(1570);const p={SEGMENT_START:"a_segmentStart",SEGMENT_END:"a_segmentEnd",PARAMETERS:"a_parameters"};var y=class extends _{constructor(t,e,n,r,s){super(t,e,n,r,s),this.attributes=[{name:p.SEGMENT_START,size:2,type:v.GC.FLOAT},{name:p.SEGMENT_END,size:2,type:v.GC.FLOAT},{name:p.PARAMETERS,size:1,type:v.GC.FLOAT}].concat(s.map((function(t){return{name:"a_"+t.name,size:1,type:v.GC.FLOAT}})))}generateRenderInstructions(t){const e=2*t.verticesCount+(1+this.customAttributes.length)*t.geometriesCount;t.renderInstructions&&t.renderInstructions.length===e||(t.renderInstructions=new Float32Array(e));const n=[];let r=0;for(const e in t.entries){const s=t.entries[e];for(let e=0,i=s.flatCoordss.length;e<i;e++){n.length=s.flatCoordss[e].length,(0,m.vT)(s.flatCoordss[e],0,n.length,2,t.renderInstructionsTransform,n);for(let e=0,n=this.customAttributes.length;e<n;e++){const n=this.customAttributes[e].callback(s.feature);t.renderInstructions[r++]=n}t.renderInstructions[r++]=n.length/2;for(let e=0,s=n.length;e<s;e+=2)t.renderInstructions[r++]=n[e],t.renderInstructions[r++]=n[e+1]}}}},S=n(8001),C=n(1512);var B=class{constructor(){this.polygonBatch={entries:{},geometriesCount:0,verticesCount:0,ringsCount:0,renderInstructions:new Float32Array(0),verticesBuffer:new S.ZP(C.qO,C.kd),indicesBuffer:new S.ZP(C.cX,C.kd),renderInstructionsTransform:(0,d.Ue)(),verticesBufferTransform:(0,d.Ue)(),invertVerticesBufferTransform:(0,d.Ue)()},this.pointBatch={entries:{},geometriesCount:0,renderInstructions:new Float32Array(0),verticesBuffer:new S.ZP(C.qO,C.kd),indicesBuffer:new S.ZP(C.cX,C.kd),renderInstructionsTransform:(0,d.Ue)(),verticesBufferTransform:(0,d.Ue)(),invertVerticesBufferTransform:(0,d.Ue)()},this.lineStringBatch={entries:{},geometriesCount:0,verticesCount:0,renderInstructions:new Float32Array(0),verticesBuffer:new S.ZP(C.qO,C.kd),indicesBuffer:new S.ZP(C.cX,C.kd),renderInstructionsTransform:(0,d.Ue)(),verticesBufferTransform:(0,d.Ue)(),invertVerticesBufferTransform:(0,d.Ue)()}}addFeatures(t){for(let e=0;e<t.length;e++)this.addFeature(t[e])}addFeature(t){const e=t.getGeometry();e&&this.addGeometry_(e,t)}addFeatureEntryInPointBatch_(t){const e=(0,f.sq)(t);return e in this.pointBatch.entries||(this.pointBatch.entries[e]={feature:t,flatCoordss:[]}),this.pointBatch.entries[e]}addFeatureEntryInLineStringBatch_(t){const e=(0,f.sq)(t);return e in this.lineStringBatch.entries||(this.lineStringBatch.entries[e]={feature:t,flatCoordss:[],verticesCount:0}),this.lineStringBatch.entries[e]}addFeatureEntryInPolygonBatch_(t){const e=(0,f.sq)(t);return e in this.polygonBatch.entries||(this.polygonBatch.entries[e]={feature:t,flatCoordss:[],verticesCount:0,ringsCount:0,ringsVerticesCounts:[]}),this.polygonBatch.entries[e]}clearFeatureEntryInPointBatch_(t){const e=this.pointBatch.entries[(0,f.sq)(t)];e&&(this.pointBatch.geometriesCount-=e.flatCoordss.length,delete this.pointBatch.entries[(0,f.sq)(t)])}clearFeatureEntryInLineStringBatch_(t){const e=this.lineStringBatch.entries[(0,f.sq)(t)];e&&(this.lineStringBatch.verticesCount-=e.verticesCount,this.lineStringBatch.geometriesCount-=e.flatCoordss.length,delete this.lineStringBatch.entries[(0,f.sq)(t)])}clearFeatureEntryInPolygonBatch_(t){const e=this.polygonBatch.entries[(0,f.sq)(t)];e&&(this.polygonBatch.verticesCount-=e.verticesCount,this.polygonBatch.ringsCount-=e.ringsCount,this.polygonBatch.geometriesCount-=e.flatCoordss.length,delete this.polygonBatch.entries[(0,f.sq)(t)])}addGeometry_(t,e){let n,r,s;switch(t.getType()){case"GeometryCollection":t.getGeometries().map((t=>this.addGeometry_(t,e)));break;case"MultiPolygon":t.getPolygons().map((t=>this.addGeometry_(t,e)));break;case"MultiLineString":t.getLineStrings().map((t=>this.addGeometry_(t,e)));break;case"MultiPoint":t.getPoints().map((t=>this.addGeometry_(t,e)));break;case"Polygon":const i=t;s=this.addFeatureEntryInPolygonBatch_(e),n=i.getFlatCoordinates(),r=n.length/2;const o=i.getLinearRingCount(),a=i.getEnds().map(((t,e,n)=>e>0?(t-n[e-1])/2:t/2));this.polygonBatch.verticesCount+=r,this.polygonBatch.ringsCount+=o,this.polygonBatch.geometriesCount++,s.flatCoordss.push(n),s.ringsVerticesCounts.push(a),s.verticesCount+=r,s.ringsCount+=o,i.getLinearRings().map((t=>this.addGeometry_(t,e)));break;case"Point":const c=t;s=this.addFeatureEntryInPointBatch_(e),n=c.getFlatCoordinates(),this.pointBatch.geometriesCount++,s.flatCoordss.push(n);break;case"LineString":case"LinearRing":const l=t;s=this.addFeatureEntryInLineStringBatch_(e),n=l.getFlatCoordinates(),r=n.length/2,this.lineStringBatch.verticesCount+=r,this.lineStringBatch.geometriesCount++,s.flatCoordss.push(n),s.verticesCount+=r}}changeFeature(t){this.clearFeatureEntryInPointBatch_(t),this.clearFeatureEntryInPolygonBatch_(t),this.clearFeatureEntryInLineStringBatch_(t);const e=t.getGeometry();e&&this.addGeometry_(e,t)}removeFeature(t){this.clearFeatureEntryInPointBatch_(t),this.clearFeatureEntryInPolygonBatch_(t),this.clearFeatureEntryInLineStringBatch_(t)}clear(){this.polygonBatch.entries={},this.polygonBatch.geometriesCount=0,this.polygonBatch.verticesCount=0,this.polygonBatch.ringsCount=0,this.lineStringBatch.entries={},this.lineStringBatch.geometriesCount=0,this.lineStringBatch.verticesCount=0,this.pointBatch.entries={},this.pointBatch.geometriesCount=0}};const x={POSITION:"a_position",INDEX:"a_index"};var P=class extends _{constructor(t,e,n,r,s){super(t,e,n,r,s),this.attributes=[{name:x.POSITION,size:2,type:v.GC.FLOAT},{name:x.INDEX,size:1,type:v.GC.FLOAT}].concat(s.map((function(t){return{name:"a_"+t.name,size:1,type:v.GC.FLOAT}})))}generateRenderInstructions(t){const e=(2+this.customAttributes.length)*t.geometriesCount;t.renderInstructions&&t.renderInstructions.length===e||(t.renderInstructions=new Float32Array(e));const n=[];let r=0;for(const e in t.entries){const s=t.entries[e];for(let e=0,i=s.flatCoordss.length;e<i;e++){n[0]=s.flatCoordss[e][0],n[1]=s.flatCoordss[e][1],(0,d.nn)(t.renderInstructionsTransform,n),t.renderInstructions[r++]=n[0],t.renderInstructions[r++]=n[1];for(let e=0,n=this.customAttributes.length;e<n;e++){const n=this.customAttributes[e].callback(s.feature);t.renderInstructions[r++]=n}}}}};const b={POSITION:"a_position"};var E=class extends _{constructor(t,e,n,r,s){super(t,e,n,r,s),this.attributes=[{name:b.POSITION,size:2,type:v.GC.FLOAT}].concat(s.map((function(t){return{name:"a_"+t.name,size:1,type:v.GC.FLOAT}})))}generateRenderInstructions(t){const e=2*t.verticesCount+(1+this.customAttributes.length)*t.geometriesCount+t.ringsCount;t.renderInstructions&&t.renderInstructions.length===e||(t.renderInstructions=new Float32Array(e));const n=[];let r=0;for(const e in t.entries){const s=t.entries[e];for(let e=0,i=s.flatCoordss.length;e<i;e++){n.length=s.flatCoordss[e].length,(0,m.vT)(s.flatCoordss[e],0,n.length,2,t.renderInstructionsTransform,n);for(let e=0,n=this.customAttributes.length;e<n;e++){const n=this.customAttributes[e].callback(s.feature);t.renderInstructions[r++]=n}t.renderInstructions[r++]=s.ringsVerticesCounts[e].length;for(let n=0,i=s.ringsVerticesCounts[e].length;n<i;n++)t.renderInstructions[r++]=s.ringsVerticesCounts[e][n];for(let e=0,s=n.length;e<s;e+=2)t.renderInstructions[r++]=n[e],t.renderInstructions[r++]=n[e+1]}}}},I=n(487),T=n(7334),F=n(9295),A=n(1439);function w(t){const e=(0,A._2)(t);return 256*e[0]*256+256*e[1]+e[2]}const R="vec3(\n  fract(floor(a_color / 256.0 / 256.0) / 256.0),\n  fract(floor(a_color / 256.0) / 256.0),\n  fract(a_color / 256.0)\n);",k=`\n  precision mediump float;\n  uniform mat4 u_projectionMatrix;\n  attribute vec2 a_position;\n  attribute float a_color;\n  attribute float a_opacity;\n  varying vec3 v_color;\n  varying float v_opacity;\n\n  void main(void) {\n    gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0);\n    v_color = ${R}\n    v_opacity = a_opacity;\n  }`,L=`\n  precision mediump float;\n  uniform mat4 u_projectionMatrix;\n  uniform vec2 u_sizePx;\n  attribute vec2 a_segmentStart;\n  attribute vec2 a_segmentEnd;\n  attribute float a_parameters;\n  attribute float a_color;\n  attribute float a_opacity;\n  attribute float a_width;\n  varying vec2 v_segmentStart;\n  varying vec2 v_segmentEnd;\n  varying float v_angleStart;\n  varying float v_angleEnd;\n  varying vec3 v_color;\n  varying float v_opacity;\n  varying float v_width;\n\n  vec2 worldToPx(vec2 worldPos) {\n    vec4 screenPos = u_projectionMatrix * vec4(worldPos, 0.0, 1.0);\n    return (0.5 * screenPos.xy + 0.5) * u_sizePx;\n  }\n\n  vec4 pxToScreen(vec2 pxPos) {\n    vec2 screenPos = pxPos * 4.0 / u_sizePx;\n    return vec4(screenPos.xy, 0.0, 0.0);\n  }\n\n  vec2 getOffsetDirection(vec2 normalPx, vec2 tangentPx, float joinAngle) {\n    if (cos(joinAngle) > 0.93) return normalPx - tangentPx;\n    float halfAngle = joinAngle / 2.0;\n    vec2 angleBisectorNormal = vec2(\n      sin(halfAngle) * normalPx.x + cos(halfAngle) * normalPx.y,\n      -cos(halfAngle) * normalPx.x + sin(halfAngle) * normalPx.y\n    );\n    float length = 1.0 / sin(halfAngle);\n    return angleBisectorNormal * length;\n  }\n\n  void main(void) {\n    float anglePrecision = 1500.0;\n    float paramShift = 10000.0;\n    v_angleStart = fract(a_parameters / paramShift) * paramShift / anglePrecision;\n    v_angleEnd = fract(floor(a_parameters / paramShift + 0.5) / paramShift) * paramShift / anglePrecision;\n    float vertexNumber = floor(a_parameters / paramShift / paramShift + 0.0001);\n    vec2 tangentPx = worldToPx(a_segmentEnd) - worldToPx(a_segmentStart);\n    tangentPx = normalize(tangentPx);\n    vec2 normalPx = vec2(-tangentPx.y, tangentPx.x);\n    float normalDir = vertexNumber < 0.5 || (vertexNumber > 1.5 && vertexNumber < 2.5) ? 1.0 : -1.0;\n    float tangentDir = vertexNumber < 1.5 ? 1.0 : -1.0;\n    float angle = vertexNumber < 1.5 ? v_angleStart : v_angleEnd;\n    vec2 offsetPx = getOffsetDirection(normalPx * normalDir, tangentDir * tangentPx, angle) * a_width * 0.5;\n    vec2 position =  vertexNumber < 1.5 ? a_segmentStart : a_segmentEnd;\n    gl_Position = u_projectionMatrix * vec4(position, 0.0, 1.0) + pxToScreen(offsetPx);\n    v_segmentStart = worldToPx(a_segmentStart);\n    v_segmentEnd = worldToPx(a_segmentEnd);\n    v_color = ${R}\n    v_opacity = a_opacity;\n    v_width = a_width;\n  }`,N=`\n  precision mediump float;\n  uniform mat4 u_projectionMatrix;\n  uniform mat4 u_offsetScaleMatrix;\n  attribute vec2 a_position;\n  attribute float a_index;\n  attribute float a_color;\n  attribute float a_opacity;\n  varying vec2 v_texCoord;\n  varying vec3 v_color;\n  varying float v_opacity;\n\n  void main(void) {\n    mat4 offsetMatrix = u_offsetScaleMatrix;\n    float size = 6.0;\n    float offsetX = a_index == 0.0 || a_index == 3.0 ? -size / 2.0 : size / 2.0;\n    float offsetY = a_index == 0.0 || a_index == 1.0 ? -size / 2.0 : size / 2.0;\n    vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n    gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n    float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n    float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;\n    v_texCoord = vec2(u, v);\n    v_color = ${R}\n    v_opacity = a_opacity;\n  }`;var G=n(6117),O=n(1275),M=n(1507);function z(t){return Object.keys(t).map((e=>({name:e,callback:t[e]})))}class Z extends F.Z{constructor(t,e){const n=e.uniforms||{},r=(0,d.Ue)();n[v.ZC.PROJECTION_MATRIX]=r,super(t,{uniforms:n,postProcesses:e.postProcesses}),this.sourceRevision_=-1,this.previousExtent_=(0,G.lJ)(),this.currentTransform_=r;const s={color:function(){return w("#ddd")},opacity:function(){return 1},...e.fill&&e.fill.attributes},i={color:function(){return w("#eee")},opacity:function(){return 1},width:function(){return 1.5},...e.stroke&&e.stroke.attributes},o={color:function(){return w("#eee")},opacity:function(){return 1},...e.point&&e.point.attributes};this.fillVertexShader_=e.fill&&e.fill.vertexShader||k,this.fillFragmentShader_=e.fill&&e.fill.fragmentShader||"\n  precision mediump float;\n  varying vec3 v_color;\n  varying float v_opacity;\n\n  void main(void) {\n    gl_FragColor = vec4(v_color, 1.0) * v_opacity;\n  }",this.fillAttributes_=z(s),this.strokeVertexShader_=e.stroke&&e.stroke.vertexShader||L,this.strokeFragmentShader_=e.stroke&&e.stroke.fragmentShader||"\n  precision mediump float;\n  uniform float u_pixelRatio;\n  varying vec2 v_segmentStart;\n  varying vec2 v_segmentEnd;\n  varying float v_angleStart;\n  varying float v_angleEnd;\n  varying vec3 v_color;\n  varying float v_opacity;\n  varying float v_width;\n\n  float segmentDistanceField(vec2 point, vec2 start, vec2 end, float radius) {\n    vec2 startToPoint = point - start;\n    vec2 startToEnd = end - start;\n    float ratio = clamp(dot(startToPoint, startToEnd) / dot(startToEnd, startToEnd), 0.0, 1.0);\n    float dist = length(startToPoint - ratio * startToEnd);\n    return 1.0 - smoothstep(radius - 1.0, radius, dist);\n  }\n\n  void main(void) {\n    vec2 v_currentPoint = gl_FragCoord.xy / u_pixelRatio;\n    gl_FragColor = vec4(v_color, 1.0) * v_opacity;\n    gl_FragColor *= segmentDistanceField(v_currentPoint, v_segmentStart, v_segmentEnd, v_width);\n  }",this.strokeAttributes_=z(i),this.pointVertexShader_=e.point&&e.point.vertexShader||N,this.pointFragmentShader_=e.point&&e.point.fragmentShader||"\n  precision mediump float;\n  varying vec3 v_color;\n  varying float v_opacity;\n\n  void main(void) {\n      gl_FragColor = vec4(v_color, 1.0) * v_opacity;\n  }",this.pointAttributes_=z(o),this.worker_=(0,O.U)(),this.batch_=new B;const a=this.getLayer().getSource();this.batch_.addFeatures(a.getFeatures()),this.sourceListenKeys_=[(0,M.oL)(a,I.Z.ADDFEATURE,this.handleSourceFeatureAdded_,this),(0,M.oL)(a,I.Z.CHANGEFEATURE,this.handleSourceFeatureChanged_,this),(0,M.oL)(a,I.Z.REMOVEFEATURE,this.handleSourceFeatureDelete_,this),(0,M.oL)(a,I.Z.CLEAR,this.handleSourceFeatureClear_,this)]}afterHelperCreated(){this.polygonRenderer_=new E(this.helper,this.worker_,this.fillVertexShader_,this.fillFragmentShader_,this.fillAttributes_),this.pointRenderer_=new P(this.helper,this.worker_,this.pointVertexShader_,this.pointFragmentShader_,this.pointAttributes_),this.lineStringRenderer_=new y(this.helper,this.worker_,this.strokeVertexShader_,this.strokeFragmentShader_,this.strokeAttributes_)}handleSourceFeatureAdded_(t){const e=t.feature;this.batch_.addFeature(e)}handleSourceFeatureChanged_(t){const e=t.feature;this.batch_.changeFeature(e)}handleSourceFeatureDelete_(t){const e=t.feature;this.batch_.removeFeature(e)}handleSourceFeatureClear_(){this.batch_.clear()}renderFrame(t){const e=this.helper.getGL();this.preRender(e,t);const n=this.getLayer().getSource(),r=t.viewState.projection,s=n.getWrapX()&&r.canWrapX(),i=r.getExtent(),o=t.extent,a=s?(0,G.dz)(i):null,c=s?Math.ceil((o[2]-i[2])/a)+1:1;let l=s?Math.floor((o[0]-i[0])/a):0;do{this.polygonRenderer_.render(this.batch_.polygonBatch,this.currentTransform_,t,l*a),this.lineStringRenderer_.render(this.batch_.lineStringBatch,this.currentTransform_,t,l*a),this.pointRenderer_.render(this.batch_.pointBatch,this.currentTransform_,t,l*a)}while(++l<c);this.helper.finalizeDraw(t);const u=this.helper.getCanvas(),h=t.layerStatesArray[t.layerIndex].opacity;return h!==parseFloat(u.style.opacity)&&(u.style.opacity=String(h)),this.postRender(e,t),u}prepareFrameInternal(t){const e=this.getLayer(),n=e.getSource(),r=t.viewState,s=!t.viewHints[T.Z.ANIMATING]&&!t.viewHints[T.Z.INTERACTING],i=!(0,G.fS)(this.previousExtent_,t.extent),o=this.sourceRevision_<n.getRevision();if(o&&(this.sourceRevision_=n.getRevision()),s&&(i||o)){const s=r.projection,i=r.resolution,o=e instanceof u.Z?e.getRenderBuffer():0,a=(0,G.f3)(t.extent,o*i);n.loadFeatures(a,i,s),this.ready=!1;let c=3;const l=()=>{c--,this.ready=c<=0,this.getLayer().changed()};this.polygonRenderer_.rebuild(this.batch_.polygonBatch,t,"Polygon",l),this.lineStringRenderer_.rebuild(this.batch_.lineStringBatch,t,"LineString",l),this.pointRenderer_.rebuild(this.batch_.pointBatch,t,"Point",l),this.previousExtent_=t.extent.slice()}return this.helper.makeProjectionTransform(t,this.currentTransform_),this.helper.prepareDraw(t),!0}forEachFeatureAtCoordinate(t,e,n,r,s){}disposeInternal(){this.worker_.terminate(),this.layer_=null,this.sourceListenKeys_.forEach((function(t){(0,M.bN)(t)})),this.sourceListenKeys_=null,super.disposeInternal()}}var D=Z;class U extends s.Z{createRenderer(){return new D(this,{fill:{attributes:{color:function(t){const e=(0,A._2)(t.get("COLOR")||"#eee");return e[3]=.85,w(e)},opacity:function(){return.6}}},stroke:{attributes:{color:function(t){const e=[...(0,A._2)(t.get("COLOR")||"#eee")];return e.forEach(((t,n)=>e[n]=Math.round(.75*e[n]))),w(e)},width:function(){return 1.5},opacity:function(){return 1}}}})}}const j=new a.Z({source:new o.Z}),V=new U({source:new c.Z({url:"https://openlayers.org/data/vector/ecoregions.json",format:new r.Z})});new i.Z({layers:[j,V],target:"map",view:new l.ZP({center:[0,0],zoom:1})})}},function(t){var e;e=4123,t(t.s=e)}]);
//# sourceMappingURL=webgl-vector-layer.js.map