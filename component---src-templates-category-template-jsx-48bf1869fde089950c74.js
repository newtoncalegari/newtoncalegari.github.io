(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/3mp":function(t,e,a){},"1Jpo":function(t,e,a){"use strict";var r=a("q1tI"),o=a.n(r),n=a("Wbzz"),p=a("wd/R"),s=a.n(p);a("/3mp");var c=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=this.props.data.node.frontmatter,e=t.title,a=t.date,r=t.category,p=t.description,c=this.props.data.node.fields,i=c.slug,l=c.categorySlug;this.props.data.node.frontmatter.thumbnail,this.props.data.node.frontmatter.thumbnail_alt;return o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post__meta"},o.a.createElement("time",{className:"post__meta-time",dateTime:s()(a).format("MMMM D, YYYY")},s()(a).format("DD MMM YYYY")),o.a.createElement("span",{className:"post__meta-divider"}),o.a.createElement("span",{className:"post__meta-category",key:l},o.a.createElement(n.Link,{to:l,className:"post__meta-category-link"},r))),o.a.createElement("h2",{className:"post__title"},o.a.createElement(n.Link,{className:"post__title-link",to:i},e)),o.a.createElement("p",{className:"post__description"},p),o.a.createElement(n.Link,{className:"post__readmore",to:i},"Ler o artigo"))},r}(o.a.Component);e.a=c},nz5Z:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",(function(){return d}));var r=a("q1tI"),o=a.n(r),n=a("TJpk"),p=a.n(n),s=a("ntAx"),c=a("kfNp"),i=a("1Jpo");var l=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=[],e=this.props.pageContext.category;return this.props.data.allMarkdownRemark.edges.forEach((function(e){t.push(o.a.createElement(i.a,{data:e,key:e.node.fields.slug}))})),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"content__inner"},o.a.createElement("div",{className:"page"},o.a.createElement("h1",{className:"page__title"},e),o.a.createElement("div",{className:"page__body"},t))))},r}(o.a.Component);var m=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=this.props.data.site.siteMetadata.title,e=this.props.pageContext.category;return o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(p.a,{title:e+" - "+t}),o.a.createElement(c.a,this.props),o.a.createElement(l,this.props)))},r}(o.a.Component),d=(e.default=m,"3354381261")}}]);
//# sourceMappingURL=component---src-templates-category-template-jsx-48bf1869fde089950c74.js.map