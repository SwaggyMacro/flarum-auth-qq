module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e,n){"use strict";function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return o}))},,,,,function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(1),i=n(6),u=function(t){function e(){return t.apply(this,arguments)||this}Object(a.a)(e,t);var n=e.prototype;return n.className=function(){return"QQSettingsModal Modal--small"},n.title=function(){return app.translator.trans("hehongyuanlove-auth-qq.admin.qq_settings.title")},n.form=function(){return[m("div",{className:"Form-group"},m("label",null,app.translator.trans("hehongyuanlove-auth-qq.admin.qq_settings.client_id_label")),m("input",{className:"FormControl",bidi:this.setting("hehongyuanlove-auth-qq.client_id")})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("hehongyuanlove-auth-qq.admin.qq_settings.client_secret_label")),m("input",{className:"FormControl",bidi:this.setting("hehongyuanlove-auth-qq.client_secret")}))]},e}(n.n(i).a);r.a.initializers.add("hehongyuanlove-auth-qq",(function(t){t.forum.attribute("version").split(".")[0]<1?t.extensionSettings["hehongyuanlove-auth-qq"]=function(){return t.modal.show(new u)}:t.extensionData.for("hehongyuanlove-auth-qq").registerSetting({setting:"hehongyuanlove-auth-qq.client_id",label:t.translator.trans("hehongyuanlove-auth-qq.admin.qq_settings.client_id_label"),type:"text"},30).registerSetting({setting:"hehongyuanlove-auth-qq.client_secret",label:t.translator.trans("hehongyuanlove-auth-qq.admin.qq_settings.client_secret_label"),type:"text"},30)}))}]);
//# sourceMappingURL=admin.js.map