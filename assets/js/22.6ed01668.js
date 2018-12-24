(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{188:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("In Vue Storefront there are two types of plugins:")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("Each of these plugins works and is registered like a normal Vue.js plugin. You can read about them "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/plugins.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),n("p",[t._v("Currently there are two core plugins:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"working-with-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Working with plugins")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("strong",[t._v("Core plugins")]),t._v(" - placed in "),n("code",[t._v("core/plugins")]),t._v(" and available for any theme and extension. You shouldn't modify these plugins as they are part of upgradable core.")]),t._v(" "),n("li",[n("strong",[t._v("Theme plugins")]),t._v(" - placed in "),n("code",[t._v("src/{theme}/plugins")]),t._v(" and available only for specific theme")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"core-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#core-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Core plugins")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Core plugins are exported in "),s("code",[this._v("core/plugins/index.js")]),this._v(" file as JavaScript objects")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" EventBusPlugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ConfigPlugin "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("and then registered in "),s("code",[this._v("core/app.js")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("keys")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pluginsObject"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("forEach")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pluginsObject"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("strong",[t._v("config")]),t._v(" - This plugin is responsible for easy access to your storefront config. It can be accessed via "),n("code",[t._v("this.$config")]),t._v(" alias")]),t._v(" "),n("li",[n("strong",[t._v("event-bus")]),t._v(" - Global Event Bus that can be used in any place of the application via "),n("code",[t._v("this.$bus")]),t._v(" alias. It also provides some functionalities for intercepting and modifying core events.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"theme-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theme-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Theme plugins")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It's a good practice to register theme plugins under "),s("code",[this._v("{theme}/plugins")]),this._v(" folder.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuetify "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vuetify'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// import other plugins")]),t._v("\n\nVue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vuetify"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// other plugins")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you want to make a custom plugin for your theme, you should create a directory for it in "),s("code",[this._v("src/{theme}/plugins")]),this._v(" (eg. "),s("code",[this._v("src/{theme}/plugins/custom_plugin")]),this._v(") and register it in "),s("code",[this._v("src/{theme}/plugins/index.js")]),this._v(" like a 3rd party plugin in example above.")])}],!1,null,null,null);a.options.__file="plugins.md";s.default=a.exports}}]);