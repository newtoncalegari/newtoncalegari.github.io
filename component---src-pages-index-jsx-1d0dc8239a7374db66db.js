(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/3mp":function(e,t,a){},"1Jpo":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),s=a("wd/R"),c=a.n(s);a("/3mp");var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,s=e.description,i=e.language,l=this.props.data.node.fields,p=l.slug,m=l.categorySlug,d=(this.props.data.node.frontmatter.thumbnail,this.props.data.node.frontmatter.thumbnail_alt,"en"===i?"Read the article":"Leia o artigo");return r.a.createElement("div",{className:"post",lang:i},r.a.createElement("div",{className:"post__meta"},r.a.createElement("time",{className:"post__meta-time",dateTime:c()(a).format("MMMM D, YYYY")},c()(a).format("DD MMM YYYY")),r.a.createElement("span",{className:"post__meta-divider"}),r.a.createElement("span",{className:"post__meta-category",key:m},r.a.createElement(o.Link,{to:m,className:"post__meta-category-link"},n))),r.a.createElement("h2",{className:"post__title"},r.a.createElement(o.Link,{className:"post__title-link",to:p},t)),r.a.createElement("p",{className:"post__description"},s),r.a.createElement(o.Link,{className:"post__readmore",to:p},d))},n}(r.a.Component);t.a=i},Dtc0:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));var n=a("q1tI"),r=a.n(n),o=a("TJpk"),s=a.n(o),c=a("ntAx"),i=a("1Jpo"),l=a("kfNp");var p=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=[],t=this.props.data.site.siteMetadata,a=t.title,n=(t.subtitle,t.meta_description),o=t.siteUrl;return this.props.data.allMarkdownRemark.edges.forEach((function(t){e.push(r.a.createElement(i.a,{data:t,key:t.node.fields.slug}))})),r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("link",{rel:"shortcut icon",href:"/favicon.ico"}),r.a.createElement("link",{rel:"canonical",href:o})),r.a.createElement(l.a,this.props),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content__inner"},e))))},n}(r.a.Component);t.default=p;var m="2970153744"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-1d0dc8239a7374db66db.js.map