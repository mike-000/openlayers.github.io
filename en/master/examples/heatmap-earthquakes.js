(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{415:function(t,e,n){"use strict";n.r(e);var r=n(3),a=n(2),o=n(101),i=n(7),u=n(34),s=n(30),l=n(21),d=n(13),f=n(171),c={BLUR:"blur",GRADIENT:"gradient",RADIUS:"radius"},p=["#00f","#0ff","#0f0","#ff0","#f00"];var g=function(t){function e(e){var n=e||{},r=Object(d.a)({},n);delete r.gradient,delete r.radius,delete r.blur,delete r.weight,t.call(this,r),this.gradient_=null,Object(i.a)(this,Object(u.b)(c.GRADIENT),this.handleGradientChanged_,this),this.setGradient(n.gradient?n.gradient:p),this.setBlur(void 0!==n.blur?n.blur:15),this.setRadius(void 0!==n.radius?n.radius:8);var a=n.weight?n.weight:"weight";this.weightFunction_="string"==typeof a?function(t){return t.get(a)}:a,this.setRenderOrder(null)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getBlur=function(){return this.get(c.BLUR)},e.prototype.getGradient=function(){return this.get(c.GRADIENT)},e.prototype.getRadius=function(){return this.get(c.RADIUS)},e.prototype.handleGradientChanged_=function(){this.gradient_=function(t){for(var e=Object(s.a)(1,256),n=e.createLinearGradient(0,0,1,256),r=1/(t.length-1),a=0,o=t.length;a<o;++a)n.addColorStop(a*r,t[a]);return e.fillStyle=n,e.fillRect(0,0,1,256),e.canvas}(this.getGradient())},e.prototype.setBlur=function(t){this.set(c.BLUR,t)},e.prototype.setGradient=function(t){this.set(c.GRADIENT,t)},e.prototype.setRadius=function(t){this.set(c.RADIUS,t)},e.prototype.createRenderer=function(){return new f.a(this,{vertexShader:"\n        precision mediump float;\n        attribute vec2 a_position;\n        attribute vec2 a_texCoord;\n        attribute float a_rotateWithView;\n        attribute vec2 a_offsets;\n        attribute float a_opacity;\n\n        uniform mat4 u_projectionMatrix;\n        uniform mat4 u_offsetScaleMatrix;\n        uniform mat4 u_offsetRotateMatrix;\n        uniform float u_size;\n\n        varying vec2 v_texCoord;\n        varying float v_opacity;\n\n        void main(void) {\n          mat4 offsetMatrix = u_offsetScaleMatrix;\n          if (a_rotateWithView == 1.0) {\n            offsetMatrix = u_offsetScaleMatrix * u_offsetRotateMatrix;\n          }\n          vec4 offsets = offsetMatrix * vec4(a_offsets, 0.0, 0.0);\n          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets * u_size;\n          v_texCoord = a_texCoord;\n          v_opacity = a_opacity;\n        }",fragmentShader:"\n        precision mediump float;\n        uniform float u_resolution;\n        uniform float u_blurSlope;\n\n        varying vec2 v_texCoord;\n        varying float v_opacity;\n\n        void main(void) {\n          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);\n          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;\n          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;\n          float alpha = smoothstep(0.0, 1.0, value) * v_opacity;\n          gl_FragColor = vec4(alpha, alpha, alpha, alpha);\n        }",uniforms:{u_size:function(){return 2*(this.get(c.RADIUS)+this.get(c.BLUR))}.bind(this),u_blurSlope:function(){return this.get(c.RADIUS)/Math.max(1,this.get(c.BLUR))}.bind(this),u_resolution:function(t){return t.viewState.resolution}},postProcesses:[{fragmentShader:"\n            precision mediump float;\n\n            uniform sampler2D u_image;\n            uniform sampler2D u_gradientTexture;\n\n            varying vec2 v_texCoord;\n            varying vec2 v_screenCoord;\n\n            void main() {\n              vec4 color = texture2D(u_image, v_texCoord);\n              gl_FragColor.a = color.a;\n              gl_FragColor.rgb = texture2D(u_gradientTexture, vec2(0.5, color.a)).rgb;\n              gl_FragColor.rgb *= gl_FragColor.a;\n            }",uniforms:{u_gradientTexture:this.gradient_}}],opacityCallback:this.weightFunction_})},e}(l.a),v=n(6),_=n(66),h=n(12),m=document.getElementById("blur"),x=document.getElementById("radius"),y=new g({source:new h.a({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new o.a({extractStyles:!1})}),blur:parseInt(m.value,10),radius:parseInt(x.value,10)});y.getSource().on("addfeature",function(t){var e=t.feature.get("name"),n=parseFloat(e.substr(2));t.feature.set("weight",n-5)});var b=new v.a({source:new _.a({layer:"toner"})}),w=(new r.a({layers:[b,y],target:"map",view:new a.a({center:[0,0],zoom:2})}),function(){y.setBlur(parseInt(m.value,10))});m.addEventListener("input",w),m.addEventListener("change",w);var R=function(){y.setRadius(parseInt(x.value,10))};x.addEventListener("input",R),x.addEventListener("change",R)}},[[415,0]]]);
//# sourceMappingURL=heatmap-earthquakes.js.map