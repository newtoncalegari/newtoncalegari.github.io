(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/3mp":function(t,e,a){},"1Jpo":function(t,e,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("Wbzz"),s=a("wd/R"),p=a.n(s);a("/3mp");var c=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=this.props.data.node.frontmatter,e=t.title,a=t.date,r=t.category,s=t.description,c=t.language,i=this.props.data.node.fields,l=i.slug,m=i.categorySlug,d=(this.props.data.node.frontmatter.thumbnail,this.props.data.node.frontmatter.thumbnail_alt,"en"===c?"Read the article":"Leia o artigo");return n.a.createElement("div",{className:"post",lang:c},n.a.createElement("div",{className:"post__meta"},n.a.createElement("time",{className:"post__meta-time",dateTime:p()(a).format("MMMM D, YYYY")},p()(a).format("DD MMM YYYY")),n.a.createElement("span",{className:"post__meta-divider"}),n.a.createElement("span",{className:"post__meta-category",key:m},n.a.createElement(o.Link,{to:m,className:"post__meta-category-link"},r))),n.a.createElement("h2",{className:"post__title"},n.a.createElement(o.Link,{className:"post__title-link",to:l},e)),n.a.createElement("p",{className:"post__description"},s),n.a.createElement(o.Link,{className:"post__readmore",to:l},d))},r}(n.a.Component);e.a=c},Uvt8:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",(function(){return d}));var r=a("q1tI"),n=a.n(r),o=a("TJpk"),s=a.n(o),p=a("ntAx"),c=a("kfNp"),i=a("1Jpo");var l=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=[],e=this.props.pageContext.tag;return this.props.data.allMarkdownRemark.edges.forEach((function(e){t.push(n.a.createElement(i.a,{data:e,key:e.node.fields.slug}))})),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"content__inner"},n.a.createElement("div",{className:"page"},n.a.createElement("h1",{className:"page__title"},'All Posts tagged as "',e,'"'),n.a.createElement("div",{className:"page__body"},t))))},r}(n.a.Component);var m=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=this.props.data.site.siteMetadata.title,e=this.props.pageContext.tag;return n.a.createElement(p.a,null,n.a.createElement("div",null,n.a.createElement(s.a,{title:'All Posts tagged as "'+e+'" - '+t}),n.a.createElement(c.a,this.props),n.a.createElement(l,this.props)))},r}(n.a.Component),d=(e.default=m,"1253915135")}}]);
//# sourceMappingURL=component---src-templates-tag-template-jsx-ac2a4391a2790cde6f9d.js.map