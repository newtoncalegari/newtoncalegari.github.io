(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";n("pIFo"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("/SS/"),n("91GP"),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n("q1tI")),i=s(n("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=["shortname","identifier","title","url","category_id","onNewComment","language"],p=!1;function d(e,t){var n=t.onNewComment,r=t.language,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var o in a)e.page[o]=a[o];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var m=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return c.some((function(e){return e===n}))?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!p){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),p=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};c.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){d(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){d(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);m.displayName="DisqusThread",m.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},m.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=m},WAk8:function(e,t,n){},reCm:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return g}));var r=n("q1tI"),a=n.n(r),o=n("TJpk"),i=n.n(o),s=n("ntAx"),l=(n("f3/d"),n("Wbzz")),u=n("wd/R"),c=n.n(u),p=n("RPjP"),d=n.n(p);function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(m(n)),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(m(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},o.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},o.render=function(){var e=this.props,t=e.postNode,n=e.siteMetadata;if(!n.disqusShortname)return null;var r=t.frontmatter,o=n.url+t.fields.slug;return a.a.createElement(d.a,{shortname:n.disqusShortname,identifier:r.title,title:r.title,url:o,category_id:r.category_id,onNewComment:this.notifyAboutComment})},r}(r.Component);n("WAk8");var h=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.subtitle,n=e.author,r=this.props.data.markdownRemark,o=r.fields.tagSlugs,i=a.a.createElement("div",null,a.a.createElement(l.Link,{className:"post-single__home-button",to:"/"},"All Articles")),s=a.a.createElement("div",{className:"post-single__tags"},a.a.createElement("ul",{className:"post-single__tags-list"},o&&o.map((function(e,t){return a.a.createElement("li",{className:"post-single__tags-list-item",key:e},a.a.createElement(l.Link,{to:e,className:"post-single__tags-list-item-link"},r.frontmatter.tags[t]))})))),u=a.a.createElement("div",null,a.a.createElement(f,{postNode:r,siteMetadata:this.props.data.site.siteMetadata}));return a.a.createElement("div",null,i,a.a.createElement("div",{className:"post-single"},a.a.createElement("div",{className:"post-single__inner"},a.a.createElement("h1",{className:"post-single__title"},r.frontmatter.title),a.a.createElement("div",{className:"post-single__body",dangerouslySetInnerHTML:{__html:r.html}}),a.a.createElement("div",{className:"post-single__date"},a.a.createElement("em",null,"Published ",c()(r.frontmatter.date).format("D MMM YYYY")))),a.a.createElement("div",{className:"post-single__footer"},s,a.a.createElement("hr",null),a.a.createElement("p",{className:"post-single__footer-text"},t,a.a.createElement("a",{href:"https://twitter.com/"+n.twitter,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("br",null)," ",a.a.createElement("strong",null,n.name)," on Twitter")),u)))},r}(a.a.Component);var y=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,n=e.subtitle,r=this.props.data.markdownRemark.frontmatter,o=r.title,l=r.description,u=null!==l?l:n;return a.a.createElement(s.a,null,a.a.createElement("div",null,a.a.createElement(i.a,null,a.a.createElement("title",null,o+" - "+t),a.a.createElement("meta",{name:"description",content:u})),a.a.createElement(h,this.props)))},r}(a.a.Component),g=(t.default=y,"1471525526")}}]);
//# sourceMappingURL=component---src-templates-post-template-jsx-c6a819ee7a1a5e60bd9b.js.map