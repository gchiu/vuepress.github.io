(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{284:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-container","aria-hidden":"true"}},[t._v("#")]),t._v(" vuepress-plugin-container "),a("GitHubLink",{attrs:{repo:"vuepress/vuepress-community"}})],1),t._v(" "),a("p",[t._v("在你的 VuePress 站点中注册新的 Markdown 容器。")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D vuepress-plugin-container\n")])])]),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你可以多次使用这个插件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-container'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'right'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        defaultTitle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-container'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'theorem'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("info")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('<div class="theorem"><p class="title">')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("</p>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        after"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'</div>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是 VuePress 默认主题使用这个插件的方式")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-container'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        defaultTitle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TIP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/zh/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提示'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-stylus extra-class"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/styles/index.styl")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".theorem")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("rem "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("rem "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),t._v("rem")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4")]),t._v("rem")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#f0f4f8")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".title")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),t._v(" bold")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".custom-block")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&.right")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token func"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transparentify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$textColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),t._v("rem")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),t._v(" right")]),t._v("\n")])])]),a("h2",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),a("h3",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type","aria-hidden":"true"}},[t._v("#")]),t._v(" type")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型:")]),t._v(" "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("这是一个必需的选项")])]),t._v(" "),a("p",[t._v("容器的类型。举个例子，如果 "),a("code",[t._v("type")]),t._v(" 被设置为 "),a("code",[t._v("foo")]),t._v("，则仅有下面的语法会被解析为 markdown 容器：")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("::: foo bar\n随便写点啥 ~\n:::\n")])])]),a("h3",{attrs:{id:"defaulttitle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaulttitle","aria-hidden":"true"}},[t._v("#")]),t._v(" defaultTitle")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型:")]),t._v(" "),a("code",[t._v("string | Record<string, string>")])]),t._v(" "),a("li",[a("strong",[t._v("默认值:")]),t._v(" "),a("code",[t._v("type")]),t._v(" 的大写形式")])]),t._v(" "),a("p",[t._v("容器的默认标题。如果没有提供标题，则会使用 "),a("code",[t._v("defaultTitle")]),t._v(" 作为容器的标题。")]),t._v(" "),a("p",[t._v("提供一个对象作为多语言配置，则默认标题将会基于当前 "),a("code",[t._v("locale")]),t._v(" 选取。")]),t._v(" "),a("h3",{attrs:{id:"before"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before","aria-hidden":"true"}},[t._v("#")]),t._v(" before")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型:")]),t._v(" "),a("code",[t._v("string | ((info: string) => string)")])]),t._v(" "),a("li",[a("strong",[t._v("默认值:")]),t._v(" "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("要插入在容器前的 HTML。")]),t._v(" "),a("p",[t._v("如果设置为一个函数，将传入当前的 "),a("code",[t._v("info")]),t._v(" 作为第一个参数。（在上面的例子中，"),a("code",[t._v("info")]),t._v(" 的值为 "),a("code",[t._v("bar")]),t._v("。）")]),t._v(" "),a("p",[t._v("如果设置了 "),a("code",[t._v("before")]),t._v(" 的值， "),a("code",[t._v("defaultTitle")]),t._v(" 将会被忽略。")]),t._v(" "),a("h3",{attrs:{id:"after"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after","aria-hidden":"true"}},[t._v("#")]),t._v(" after")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型:")]),t._v(" "),a("code",[t._v("string | ((info: string) => string)")])]),t._v(" "),a("li",[a("strong",[t._v("默认值:")]),t._v(" "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("要插入在容器后的 HTML。")]),t._v(" "),a("p",[t._v("如果设置为一个函数，将传入当前的 "),a("code",[t._v("info")]),t._v(" 作为第一个参数。（在上面的例子中，"),a("code",[t._v("info")]),t._v(" 的值为 "),a("code",[t._v("bar")]),t._v("。）")]),t._v(" "),a("h3",{attrs:{id:"validate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validate","aria-hidden":"true"}},[t._v("#")]),t._v(" validate")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型:")]),t._v(" "),a("code",[t._v("((params: string) => boolean)")])]),t._v(" "),a("li",[a("strong",[t._v("默认值:")]),t._v(" "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("一个用于判定容器是否结束的函数。当认定容器范围结束时应返回一个 "),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("参考 "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-container API"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render","aria-hidden":"true"}},[t._v("#")]),t._v(" render")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型:")]),t._v(" "),a("code",[t._v("Function")])]),t._v(" "),a("li",[a("strong",[t._v("默认值:")]),t._v(" "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("容器开头和结束 token 的渲染函数。如果设置了这个值， "),a("code",[t._v("before")]),t._v(", "),a("code",[t._v("after")]),t._v(" 和 "),a("code",[t._v("defaultTitle")]),t._v(" 都将被忽略。")]),t._v(" "),a("blockquote",[a("p",[t._v("参考 "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-container API"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"marker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#marker","aria-hidden":"true"}},[t._v("#")]),t._v(" marker")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型:")]),t._v(" "),a("code",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("默认值:")]),t._v(" "),a("code",[t._v("':'")])])]),t._v(" "),a("p",[t._v("用于分隔符的字符。")]),t._v(" "),a("blockquote",[a("p",[t._v("参考 "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-container API"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#演示","aria-hidden":"true"}},[t._v("#")]),t._v(" 演示")]),t._v(" "),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("::: theorem 牛顿第一定律\n假若施加于某物体的外力为零，则该物体的运动速度不变。\n\n::: right\n来自 "),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("维基百科")]),t._v("](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)")]),t._v("\n:::\n:::\n\n::: tip\n"),a("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`@vuepress/theme-default`")]),t._v(" 的提示容器\n:::\n")])])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("div",{staticClass:"theorem"},[a("p",{staticClass:"title"},[t._v("牛顿第一定律")]),a("p",[t._v("假若施加于某物体的外力为零，则该物体的运动速度不变。")]),t._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[t._v("来自 "),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科"),a("OutboundLink")],1)])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[a("code",[t._v("@vuepress/theme-default")]),t._v(" 的提示容器")])])])}),[],!1,null,null,null);s.default=e.exports}}]);