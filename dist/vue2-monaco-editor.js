(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t(require("monaco-editor")):"function"===typeof define&&define.amd?define("MonacoEditor",["monaco-editor"],t):"object"===typeof exports?exports["MonacoEditor"]=t(require("monaco-editor")):e["MonacoEditor"]=t(e["monaco-editor"])})(window,function(e){return function(e){function t(t){for(var n,u,d=t[0],c=t[1],a=t[2],l=0,s=[];l<d.length;l++)u=d[l],r[u]&&s.push(r[u][0]),r[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(s.length)s.shift()();return i.push.apply(i,a||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,d=1;d<o.length;d++){var c=o[d];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=o[0]))}return e}var n={},r={index:0},i=[];function u(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=e,u.c=n,u.d=function(e,t,o){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(o,n,function(t){return e[t]}.bind(null,n));return o},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var d=window["webpackJsonpMonacoEditor"]=window["webpackJsonpMonacoEditor"]||[],c=d.push.bind(d);d.push=t,d=d.slice();for(var a=0;a<d.length;a++)t(d[a]);var f=c;return i.push([0,"chunk-vendors"]),o()}({0:function(e,t,o){e.exports=o("b635")},2364:function(t,o){t.exports=e},b635:function(e,t,o){"use strict";o.r(t);o("7f7f"),o("cadf"),o("551c"),o("097d");var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"editor",style:{width:e.width,height:e.height},attrs:{id:e.editorId}})},r=[],i=o("2364"),u={name:"MonacoEditor",props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"},value:{type:String,default:""},options:{type:Object}},data:function(){return{}},computed:{editorId:function(){return"editor".concat(this._uid)}},methods:{},mounted:function(){this.options.value=this.value,this.editor=i["editor"].create(document.getElementById(this.editorId),this.options);var e=this;this.editor.onDidChangeModelContent(function(t){e.$emit("onDidChangeModelContent",t),e.$emit("input",e.editor.getValue())}),this.editor.onMouseMove(function(t){e.$emit("onMouseMove",t)}),this.getSelections=this.editor.getSelections}},d=u,c=o("2877"),a=Object(c["a"])(d,n,r,!1,null,null,null);a.options.__file="MonacoEditor.vue";var f=a.exports;"undefined"!==typeof window&&window.Vue&&window.Vue.component(f.name,f);t["default"]=f}})});
//# sourceMappingURL=vue2-monaco-editor.js.map