(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4M6O":function(e,t,n){"use strict";n("m210"),n("4DPX"),n("Ggvi"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("ToIb");var i=n("5NKs");t.__esModule=!0,t.insertScript=function(e,t,n){var i=window.document.createElement("script");return i.async=!0,i.src=e,i.id=t,n.appendChild(i),i},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var i;return function(){var a=this,o=arguments,c=function(){i=null,n||e.apply(a,o)},l=n&&!i;window.clearTimeout(i),i=setTimeout(c,t),l&&e.apply(a,o)}},t.isReactElement=o,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),i=Array.isArray(n),a=0;for(n=i?n:n[Symbol.iterator]();;){var c;if(i){if(a>=n.length)break;c=n[a++]}else{if((a=n.next()).done)break;c=a.value}var l=c;if(e[l]!==t[l]&&!o(e[l]))return!0}return!1};var a=i(n("q1tI"));function o(e){return!!a.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return a.default.isValidElement(e)}))}},AIgE:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return ke}));var i=n("q1tI"),a=n.n(i),o=n("BBkP"),c=n("CMDK"),l=n("/MKj"),r=n("vOnD"),d=n("mcIw"),s=n("wqoF"),p=n("Hf4c"),u=(n("sC2a"),n("HQhv"),function(e){var t=e.data,n=Object(l.useDispatch)(),o=Object(i.useCallback)((function(){n(Object(d.b)())}),[]);return Object(i.useEffect)((function(){var e,n=t.tableOfContents.split(/"|\//).filter((function(e){return 0===e.indexOf("#")})).map((function(e){var t=e.substring(1);return{id:"toc-"+t,position:document.getElementById(t).offsetTop-60}})).reverse(),i=function(){for(var t,i=document.body.scrollTop||document.documentElement.scrollTop,a=0;a<n.length;a++)if(i>=n[a].position){t=n[a].id;break}e!==t&&(e&&(document.getElementById(e).parentElement.className=""),(e=t)&&(document.getElementById(e).parentElement.className="active"))};return n.length>0&&document.addEventListener("scroll",i),function(){n.length>0&&document.removeEventListener("scroll",i)}}),[t]),t.tableOfContents.length>0?a.a.createElement(m,null,a.a.createElement(f,null,"In this article"),a.a.createElement(h,{onClick:o,dangerouslySetInnerHTML:{__html:t.tableOfContents.replace(/href=\"(.*?#)(.*?)\"/gi,'id="toc-$2" href="/docs$1$2"')}})):a.a.createElement(a.a.Fragment,null)}),m=r.c.section.withConfig({displayName:"article-sections__Container",componentId:"dv409r-0"})(["margin-bottom:20px;"]),f=r.c.h6.withConfig({displayName:"article-sections__Title",componentId:"dv409r-1"})(["padding:0 25px;font-size:0.833em;@media only screen and (min-width:1300px){padding:0 20px;}"]),h=r.c.div.withConfig({displayName:"article-sections__Content",componentId:"dv409r-2"})(["> ul{display:flex;flex-direction:column;margin:0;padding:0 25px 10px;list-style-type:none;> li{flex:0 0 auto;margin:5px 0;padding:0;line-height:initial;&.active > a{font-weight:bold;}> a{font-size:0.833em;color:#666;:hover{color:#000;}}}@media only screen and (min-width:1300px){padding:0 20px 10px;}}"]);function g(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  body {\n    overflow-y: ",";\n\n    @media only screen and (min-width: 600px) {\n      overflow-y: initial;\n    }\n  }\n"]);return g=function(){return e},e}var x=Object(r.b)(["position:fixed;display:flex;flex-direction:column;*{user-select:none;}"]),v=Object(r.b)(["position:fixed;display:initial;padding:25px 0;width:250px;height:initial;background-color:initial;opacity:initial;box-shadow:initial;"]),w=r.c.div.withConfig({displayName:"doc-page-elements__FixedContainer",componentId:"c2lr7n-0"})(["position:absolute;display:none;padding:25px 0 0;width:100vw;height:calc(100vh - 85px);overflow-y:initial;background-color:white;opacity:0;transition:opacity 2s ease-in-out;&.show{display:initial;opacity:initial;}@media only screen and (min-width:600px){width:450px;box-shadow:0px 3px 6px 0px rgba(0,0,0,0.25);}"]),b=r.c.aside.withConfig({displayName:"doc-page-elements__Aside",componentId:"c2lr7n-1"})([""," z-index:2;right:0;> ","{right:0;}@media only screen and (min-width:1300px){position:relative;right:initial;flex:0 0 250px;> ","{",";right:initial;}}"],x,w,w,v),y=r.c.nav.withConfig({displayName:"doc-page-elements__Navigation",componentId:"c2lr7n-2"})([""," z-index:3;left:0;> ","{left:0;}@media only screen and (min-width:1050px){position:relative;left:initial;flex:0 0 250px;> ","{",";left:initial;}}"],x,w,w,v),E=Object(r.a)(g(),(function(e){return e.disableScrolling?"hidden":"initial"})),C=n("qGPU"),_=n.n(C),I=function(e){var t=e.showWhenScreenWidthIsSmallerThan,n=e.title,i=e.onClose;return a.a.createElement(j,{showWhenScreenWidthIsSmallerThan:t},a.a.createElement(k,null,n),a.a.createElement(O,{onClick:i}))},j=r.c.header.withConfig({displayName:"doc-page-pane-header__Header",componentId:"sc-1i87nrk-0"})(["display:flex;flex-direction:row;align-items:center;padding-bottom:10px;@media only screen and (min-width:","px){display:none;}"],(function(e){return e.showWhenScreenWidthIsSmallerThan})),k=r.c.h5.withConfig({displayName:"doc-page-pane-header__Title",componentId:"sc-1i87nrk-1"})(["flex:1 1 auto;margin-bottom:0;margin-left:25px;"]),O=Object(r.c)(_.a).withConfig({displayName:"doc-page-pane-header__CloseButton",componentId:"sc-1i87nrk-2"})(["flex:0 0 auto;margin-right:19px;margin-left:20px;width:26px;height:26px;opacity:0.5;cursor:pointer;transition:opacity 0.2s ease-in-out;&:hover{opacity:1;}"]);function N(e){var t=Object(i.useState)(!1),n=t[0],a=t[1],o=Object(i.createRef)(),c=Object(i.createRef)();return Object(i.useEffect)((function(){var t=function(){var t=document.body.clientWidth||document.documentElement.clientWidth;a(t>=e)};return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[e]),Object(i.useEffect)((function(){if(o.current&&c.current){var e=o.current,t=c.current;if(n){var i=function(){return function(e,t){var n=document.body.scrollTop||document.documentElement.scrollTop,i=e.offsetTop+e.offsetHeight;n+t.offsetHeight>=i?(t.style.position="absolute",t.style.top=e.offsetHeight-t.offsetHeight+"px"):(t.style.position="fixed",t.style.top="initial")}(e,t)};return i(),document.addEventListener("scroll",i),window.addEventListener("resize",i),function(){document.removeEventListener("scroll",i),window.removeEventListener("resize",i)}}!function(e){e.style.position="",e.style.top=""}(t)}}),[n]),{containerRef:o,elementRef:c}}var S=function(e){var t=e.children,n=N(1300),o=n.containerRef,c=n.elementRef,r=Object(l.useSelector)((function(e){return e.common.showAside})),s=Object(l.useDispatch)(),p=Object(i.useCallback)((function(){s(Object(d.i)())}),[]);return a.a.createElement(b,{ref:o},a.a.createElement(E,{disableScrolling:r}),a.a.createElement(w,{ref:c,className:r?"show":""},a.a.createElement(I,{title:"About this article",showWhenScreenWidthIsSmallerThan:1300,onClose:p}),t))},z=n("LOFe"),q=n("ZGSP"),D=n("DmWS"),T=n.n(D),H=n("+K7j"),P=n.n(H),M=function(e){var t=e.data,n=e.originPath,i=t.site.siteMetadata,o=i.repositoryUrl+"/blob/master/website/src/docs/"+n;return a.a.createElement(L,null,a.a.createElement(U,null,"Help us improving our content"),a.a.createElement(W,null,a.a.createElement(A,null,a.a.createElement(B,{to:o},a.a.createElement(z.a,null,a.a.createElement(T.a,null)),"Edit on GitHub")),a.a.createElement(A,null,a.a.createElement(B,{to:i.tools.slack},a.a.createElement(z.a,null,a.a.createElement(P.a,null)),"Discuss on Slack"))))},L=r.c.section.withConfig({displayName:"doc-page-community__Container",componentId:"sc-12dq8k-0"})(["margin-bottom:20px;"]),U=r.c.h6.withConfig({displayName:"doc-page-community__Title",componentId:"sc-12dq8k-1"})(["padding:0 25px;font-size:0.833em;@media only screen and (min-width:1300px){padding:0 20px;}"]),W=r.c.ol.withConfig({displayName:"doc-page-community__CommunityItems",componentId:"sc-12dq8k-2"})(["display:flex;flex-direction:column;margin:0;padding:0 25px 10px;list-style-type:none;@media only screen and (min-width:1300px){padding:0 20px 10px;}"]),A=r.c.li.withConfig({displayName:"doc-page-community__CommunityItem",componentId:"sc-12dq8k-3"})(["flex:0 0 auto;margin:5px 0;padding:0;line-height:initial;"]),B=Object(r.c)(q.a).withConfig({displayName:"doc-page-community__CommunityLink",componentId:"sc-12dq8k-4"})(["font-size:0.833em;color:#666;> ","{margin-right:10px;> svg{fill:#666;}}:hover{color:#000;> "," > svg{fill:#000;}}"],z.a,z.a),R=n("r5vi"),V=function(){var e=Object(l.useSelector)((function(e){return e.common.showLegacyDocInfo})),t=Object(l.useDispatch)(),n="chillicream-legacy-doc-info",o=Object(R.a)([n]),c=o[0],r=o[1],s=c[n];return Object(i.useEffect)((function(){t("true"===s?Object(d.f)():Object(d.h)())}),[s]),a.a.createElement(G,{role:"dialog","aria-live":"polite","aria-label":"legacydoc","aria-describedby":"legacydoc:desc",show:e},a.a.createElement(Q,null,a.a.createElement(X,{id:"legacydoc:desc"},a.a.createElement("strong",null,"Important:")," This documentation covers Hot Chocolate 11. For version 10 and lower click"," ",a.a.createElement(F,{to:"https://hotchocolate.io"},"here"),"."),a.a.createElement(K,{"aria-label":"dismiss cookie message",role:"button",onClick:function(){r(n,"true",{path:"/"})}},a.a.createElement(_.a,null))))},G=r.c.div.withConfig({displayName:"doc-page-legacy__Dialog",componentId:"sc-1ijx7hc-0"})(["display:",";background-color:#ffb806;"],(function(e){return e.show?"initial":"none"})),Q=r.c.div.withConfig({displayName:"doc-page-legacy__Container",componentId:"sc-1ijx7hc-1"})(["display:flex;flex-direction:row;padding:10px 20px;@media only screen and (min-width:800px){padding:10px 50px;}"]),X=r.c.div.withConfig({displayName:"doc-page-legacy__Message",componentId:"sc-1ijx7hc-2"})(["flex:0 1 auto;font-size:0.889em;line-height:1.667em;color:#4f3903;"]),F=Object(r.c)(q.a).withConfig({displayName:"doc-page-legacy__LegacyDocLink",componentId:"sc-1ijx7hc-3"})(["text-decoration:underline;color:#4f3903;"]),K=r.c.button.withConfig({displayName:"doc-page-legacy__CloseButton",componentId:"sc-1ijx7hc-4"})(["flex:0 0 auto;margin-left:auto;cursor:pointer;> svg{fill:#4f3903;width:24px;height:24px;}"]),Z=(n("TAD1"),n("gu/5"),n("eoYm"),n("v9g0"),n("l5rq")),$=n.n(Z),J=n("RkNZ"),Y=n.n(J),ee=n("XuCD"),te=n.n(ee),ne=function(e){var t,n,o=e.data,c=e.selectedPath,r=e.selectedProduct,s=N(1050),p=s.containerRef,u=s.elementRef,m=Object(l.useSelector)((function(e){return e.common.expandedPaths})),f=Object(l.useSelector)((function(e){return e.common.showTOC})),h=Object(l.useDispatch)(),g=Object(i.useState)(!1),x=g[0],v=g[1],b=(null===(t=o.config)||void 0===t?void 0:t.products)&&o.config.products.find((function(e){return(null==e?void 0:e.path)===r})),C=Object(i.useCallback)((function(e){e.stopPropagation(),h(Object(d.c)())}),[]),_=Object(i.useCallback)((function(){v(!1)}),[]),j=Object(i.useCallback)((function(){h(Object(d.k)())}),[]),k=Object(i.useCallback)((function(){h(Object(d.c)())}),[]),O=Object(i.useCallback)((function(e,t){e.stopPropagation(),v(!t)}),[]),S=Object(i.useCallback)((function(e,t){e.stopPropagation(),h(Object(d.j)({path:t}))}),[]);return Object(i.useEffect)((function(){return window.addEventListener("click",_),function(){window.removeEventListener("click",_)}}),[_]),Object(i.useEffect)((function(){var e=c.indexOf(r)+r.length+1,t=c.substring(e).split("/").filter((function(e){return e.length>0}));if(t.length>1){var n=c.substring(0,c.lastIndexOf(t[t.length-1])-1);m.includes(n)||h(Object(d.j)({path:n}))}}),[]),a.a.createElement(y,{ref:p},a.a.createElement(E,{disableScrolling:f}),a.a.createElement(w,{ref:u,className:f?"show":""},a.a.createElement(I,{title:"Table of contents",showWhenScreenWidthIsSmallerThan:1050,onClose:j}),a.a.createElement(oe,null,a.a.createElement(ce,{onClick:function(e){return O(e,x)}},null==b?void 0:b.title,a.a.createElement(z.a,{size:16},a.a.createElement(te.a,null))),a.a.createElement(le,{open:x,onClick:C},(null===(n=o.config)||void 0===n?void 0:n.products)&&o.config.products.map((function(e){return e===b?a.a.createElement(de,{key:e.path,onClick:_},a.a.createElement(pe,null,e.title),a.a.createElement(ue,null,e.description)):a.a.createElement(se,{key:e.path,to:"/docs/"+e.path+"/"},a.a.createElement(pe,null,e.title),a.a.createElement(ue,null,e.description))})))),(null==b?void 0:b.items)&&function e(t,n){return a.a.createElement(me,{open:!x},t.map((function(t){var i=t.path,o=t.title,l=t.items,r=l||"index"!==i?n+"/"+i:n;return a.a.createElement(ve,{key:r+(l?"/parent":""),className:l?ie(c,r)?"active":"":ae(c,r)?"active":"",onClick:k},l?a.a.createElement(ge,{expanded:-1!==m.indexOf(r)},a.a.createElement(fe,{onClick:function(e){return S(e,r)}},o,a.a.createElement(z.a,{size:16},a.a.createElement($.a,{className:"arrow-down"}),a.a.createElement(Y.a,{className:"arrow-up"}))),a.a.createElement(he,null,e(l,r))):a.a.createElement(xe,{to:r+"/"},o))})))}(b.items.filter((function(e){return!!e})).map((function(e){return{path:e.path,title:e.title,items:e.items?null==e?void 0:e.items.filter((function(e){return!!e})).map((function(e){return{path:e.path,title:e.title}})):void 0}})),"/docs/"+b.path)))};function ie(e,t){return e.startsWith(t)}function ae(e,t){return t===e.substring(0,e.lastIndexOf("/"))}var oe=r.c.div.withConfig({displayName:"doc-page-navigation__ProductSwitcher",componentId:"j0l58s-0"})(["display:flex;flex-wrap:wrap;align-items:center;@media only screen and (min-width:1050px){position:relative;flex-wrap:initial;overflow-y:initial;}"]),ce=r.c.button.withConfig({displayName:"doc-page-navigation__ProductSwitcherButton",componentId:"j0l58s-1"})(["display:flex;flex:0 0 auto;flex-direction:row;align-items:center;border:1px solid #ccc;border-radius:5px;margin:6px 14px 10px;padding:7px 10px;width:calc(100% - 28px);height:38px;font-size:0.833em;transition:background-color 0.2s ease-in-out;> ","{margin-left:auto;> svg{fill:#666;}}:hover{background-color:#ddd;}@media only screen and (min-width:1050px){margin-bottom:20px;padding:7px 5px;width:calc(100% - 28px);height:initial;}"],z.a),le=r.c.div.withConfig({displayName:"doc-page-navigation__ProductSwitcherDialog",componentId:"j0l58s-2"})(["display:",";flex:1 1 100%;flex-direction:column;padding:0 10px;background-color:#fff;@media only screen and (min-width:1050px){position:fixed;z-index:10;top:130px;flex-direction:row;flex-wrap:wrap;margin:0 14px;border-radius:5px;padding:10px;width:700px;height:initial;box-shadow:0 3px 6px 0 rgba(0,0,0,0.25);}"],(function(e){return e.open?"flex":"none"})),re=Object(r.b)(["flex:0 0 auto;border:1px solid #ccc;border-radius:5px;margin:5px;padding:10px;font-size:0.833em;color:#666;cursor:pointer;@media only screen and (min-width:1050px){flex:0 0 calc(50% - 32px);}"]),de=r.c.div.withConfig({displayName:"doc-page-navigation__ActiveProduct",componentId:"j0l58s-3"})(["",";background-color:#ddd;"],re),se=Object(r.c)(q.a).withConfig({displayName:"doc-page-navigation__ProductLink",componentId:"j0l58s-4"})(["",";transition:background-color 0.2s ease-in-out;:hover{background-color:#ddd;}"],re),pe=r.c.h6.withConfig({displayName:"doc-page-navigation__ProductTitle",componentId:"j0l58s-5"})(["font-size:1em;"]),ue=r.c.p.withConfig({displayName:"doc-page-navigation__ProductDescription",componentId:"j0l58s-6"})(["margin-bottom:0;"]),me=r.c.ol.withConfig({displayName:"doc-page-navigation__NavigationList",componentId:"j0l58s-7"})(["display:",";flex-direction:column;margin:0;padding:0 25px 20px;list-style-type:none;@media only screen and (min-width:1050px){display:flex;padding:0 20px 20px;}"],(function(e){return e.open?"flex":"none"})),fe=r.c.div.withConfig({displayName:"doc-page-navigation__NavigationGroupToggle",componentId:"j0l58s-8"})(["display:flex;flex-direction:row;align-items:center;min-height:20px;font-size:0.833em;"]),he=r.c.div.withConfig({displayName:"doc-page-navigation__NavigationGroupContent",componentId:"j0l58s-9"})(["> ","{padding:5px 10px;}"],me),ge=r.c.div.withConfig({displayName:"doc-page-navigation__NavigationGroup",componentId:"j0l58s-10"})(["display:flex;flex-direction:column;cursor:pointer;> ","{display:",";}> "," > ","{margin-left:auto;> .arrow-down{display:",";fill:#666;}> .arrow-up{display:",";fill:#666;}}"],he,(function(e){return e.expanded?"initial":"none"}),fe,z.a,(function(e){return e.expanded?"none":"initial"}),(function(e){return e.expanded?"initial":"none"})),xe=Object(r.c)(q.a).withConfig({displayName:"doc-page-navigation__NavigationLink",componentId:"j0l58s-11"})(["font-size:0.833em;color:#666;:hover{color:#000;}"]),ve=r.c.li.withConfig({displayName:"doc-page-navigation__NavigationItem",componentId:"j0l58s-12"})(["flex:0 0 auto;margin:5px 0;padding:0;min-height:20px;line-height:initial;&.active{> ",",> "," > ","{font-weight:bold;}}"],xe,ge,fe),we=n("t+sS"),be=n.n(we),ye=n("NmUf"),Ee=n.n(ye),Ce=function(e){var t=e.data,n=e.originPath,o=Object(l.useDispatch)(),c=t.file.childMarkdownRemark,r=c.fields,m=c.frontmatter,f=c.html,h=r.slug.substring(1),g="/docs/"+h,x=h.substring(0,h.indexOf("/")),v=m.title,w=Object(i.useCallback)((function(){o(Object(d.k)())}),[]),b=Object(i.useCallback)((function(){o(Object(d.i)())}),[]);return a.a.createElement(_e,null,a.a.createElement(ne,{data:t,selectedPath:g,selectedProduct:x}),a.a.createElement(p.e,null,a.a.createElement(p.a,null,a.a.createElement(V,null),a.a.createElement(p.c,null,a.a.createElement(Ie,null,a.a.createElement(je,{onClick:w,className:"toc-toggle"},a.a.createElement(be.a,null)," Table of contents"),a.a.createElement(je,{onClick:b,className:"aside-toggle"},a.a.createElement(Ee.a,null)," About this article")),a.a.createElement(p.d,null,v)),a.a.createElement(p.b,{dangerouslySetInnerHTML:{__html:f}})),a.a.createElement(s.a,{data:t,path:g,title:v})),a.a.createElement(S,null,a.a.createElement(M,{data:t,originPath:n}),a.a.createElement(u,{data:t.file.childMarkdownRemark})))},_e=r.c.div.withConfig({displayName:"doc-page__Container",componentId:"vhp4qm-0"})(["display:flex;flex-direction:row;width:100%;max-width:800px;@media only screen and (min-width:1050px){max-width:1050px;}@media only screen and (min-width:1300px){max-width:1300px;}"]),Ie=r.c.div.withConfig({displayName:"doc-page__ResponsiveMenu",componentId:"vhp4qm-1"})(["display:flex;flex-direction:row;align-items:center;padding:30px 20px 20px;@media only screen and (min-width:800px){padding-right:50px;padding-left:50px;}@media only screen and (min-width:1050px){> .toc-toggle{display:none;}}@media only screen and (min-width:1300px){display:none;}"]),je=r.c.button.withConfig({displayName:"doc-page__Button",componentId:"vhp4qm-2"})(["display:flex;flex-direction:row;align-items:center;color:#666;transition:color 0.2s ease-in-out;&.aside-toggle{margin-left:auto;}&:hover{color:#000;> svg{fill:#000;}}> svg{margin-right:5px;width:16px;height:16px;fill:#666;transition:fill 0.2s ease-in-out;}"]),ke=(t.default=function(e){var t=e.data,n=e.pageContext;return a.a.createElement(c.a,null,a.a.createElement(o.a,{title:t.file.childMarkdownRemark.frontmatter.title}),a.a.createElement(Ce,{data:t,originPath:n.originPath}))},"3185543776")},Hf4c:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return r}));var i=n("vOnD"),a=i.c.div.withConfig({displayName:"article-elements__ArticleWrapper",componentId:"sc-17wo9z6-0"})(["display:flex;flex:1 1 auto;flex-direction:column;"]),o=i.c.article.withConfig({displayName:"article-elements__Article",componentId:"sc-17wo9z6-1"})(["display:flex;flex:1 1 auto;flex-direction:column;margin-bottom:40px;padding-bottom:20px;@media only screen and (min-width:800px){border:1px solid #ccc;border-top:0 none;}"]),c=i.c.header.withConfig({displayName:"article-elements__ArticleHeader",componentId:"sc-17wo9z6-2"})([""]),l=i.c.h1.withConfig({displayName:"article-elements__ArticleTitle",componentId:"sc-17wo9z6-3"})(["margin:20px 20px 10px;font-size:2em;@media only screen and (min-width:800px){margin:20px 50px 10px;}"]),r=i.c.div.withConfig({displayName:"article-elements__ArticleContent",componentId:"sc-17wo9z6-4"})(['> *{padding-right:20px;padding-left:20px;}> h1 > a.anchor.before,> h2 > a.anchor.before,> h3 > a.anchor.before,> h4 > a.anchor.before,> h5 > a.anchor.before,> h6 > a.anchor.before{padding-right:4px;transform:translateX(0px);}> blockquote{padding:30px 20px;}> table{th:first-child,td:first-child{padding-left:20px;}th:last-child,td:last-child{padding-right:20px;}}> .gatsby-code-button-container{padding:0;}> .gatsby-highlight{padding-right:0;padding-left:0;> pre[class*="language-"]{padding:30px 20px;::before{left:20px;}}}@media only screen and (min-width:800px){> *{padding-right:50px;padding-left:50px;}> h1 > a.anchor.before,> h2 > a.anchor.before,> h3 > a.anchor.before,> h4 > a.anchor.before,> h5 > a.anchor.before,> h6 > a.anchor.before{transform:translateX(30px);}> blockquote{padding:30px 50px;}> table{th:first-child,td:first-child{padding-left:50px;}th:last-child,td:last-child{padding-right:50px;}}> .gatsby-code-button-container{padding:0;}> .gatsby-highlight{> pre[class*="language-"]{padding-right:50px;padding-left:50px;::before{left:50px;}}}}'])},NmUf:function(e,t,n){var i=n("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"}))}a.defaultProps={viewBox:"0 0 576 512"},e.exports=a,a.default=a},ORnI:function(e,t,n){"use strict";var i=n("5NKs");t.__esModule=!0,t.default=void 0;var a=i(n("VUT9"));t.Disqus=a.default;var o=i(n("qASQ"));t.CommentCount=o.default;var c=a.default;t.default=c},VUT9:function(e,t,n){"use strict";var i=n("5NKs");t.__esModule=!0,t.default=void 0;var a=i(n("j8BX")),o=i(n("uDP2")),c=i(n("XEEL")),l=i(n("q1tI")),r=i(n("17x9")),d=n("4M6O"),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="chillicream",t.config?n.config=t.config:n.config={identifier:t.identifier,url:t.url,title:t.title},n}(0,c.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var e=this.config;window.disqus_config=function(){this.page.identifier=e.identifier,this.page.title=e.title,this.page.url=e.url},(0,d.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},n.cleanInstance=function(){(0,d.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},n.render=function(){var e=this.props,t=(e.config,(0,o.default)(e,["config"]));return l.default.createElement("div",(0,a.default)({id:"disqus_thread"},t,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:73},__self:this}))},t}(l.default.Component);t.default=s,s.propTypes={config:r.default.shape({identifier:r.default.string,title:r.default.string,url:r.default.string}),identifier:r.default.string,title:r.default.string,url:r.default.string}},XuCD:function(e,t,n){var i=n("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"}))}a.defaultProps={viewBox:"0 0 512 512"},e.exports=a,a.default=a},l5rq:function(e,t,n){var i=n("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}))}a.defaultProps={viewBox:"0 0 448 512"},e.exports=a,a.default=a},qASQ:function(e,t,n){"use strict";var i=n("5NKs");t.__esModule=!0,t.default=void 0;var a=i(n("j8BX")),o=i(n("uDP2")),c=i(n("XEEL")),l=i(n("q1tI")),r=i(n("17x9")),d=n("4M6O"),s=(0,d.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="chillicream",n}(0,c.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?s():(0,d.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,d.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,i=(0,o.default)(e,["config","placeholder"]);return l.default.createElement("span",(0,a.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},i,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49},__self:this}),n)},t}(l.default.Component);t.default=p,p.defaultProps={placeholder:"..."},p.propTypes={config:r.default.shape({identifier:r.default.string,title:r.default.string,url:r.default.string}),placeholder:r.default.string}},"t+sS":function(e,t,n){var i=n("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"}))}a.defaultProps={viewBox:"0 0 512 512"},e.exports=a,a.default=a},wqoF:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("ORnI"),a=n("q1tI"),o=n.n(a),c=n("vOnD"),l=function(e){var t=e.data,n=e.path,i=e.title,a={url:t.site.siteMetadata.siteUrl+n,identifier:n,title:i};return o.a.createElement(r,{config:a})},r=Object(c.c)(i.Disqus).withConfig({displayName:"article-comments__DisqusWrapper",componentId:"sc-1uyp3j8-0"})(["margin:0 20px;@media only screen and (min-width:800px){margin:0 50px;}"])}}]);
//# sourceMappingURL=component---src-templates-doc-page-template-tsx-dd3aef83b1cb4a6002ed.js.map