(this.webpackJsonplotrapp=this.webpackJsonplotrapp||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),s=c(15),i=c.n(s),j=c(5),o=c.n(j),u=c(16),d=c(3),l=c(6),b=c.n(l),O=c.p+"static/media/logo.f7b88891.png",h=function(){return Object(n.jsx)("header",{className:"center",children:Object(n.jsx)("img",{src:O,alt:""})})},m=c.p+"static/media/lotrimg.c5a13e45.jpg",p=function(e){var t=e.item;return Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"card-inner",children:[Object(n.jsx)("div",{className:"card-front",children:Object(n.jsx)("img",{src:m,alt:""})}),Object(n.jsxs)("div",{className:"card-back",children:[Object(n.jsx)("h1",{children:t.name}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Race:"})," ",t.race]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Wiki:"}),t.wikiUrl]})]})]})]})})},x=c.p+"static/media/spinner.11d9cde8.gif",f=function(){return Object(n.jsx)("img",{src:x,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},g=function(e){var t=e.items;return e.isLoading?Object(n.jsx)(f,{}):Object(n.jsx)("section",{className:"cards",children:t.map((function(e){return Object(n.jsx)(p,{item:e},e._id)}))})},v=(c(41),function(e){var t=e.getQuery,c=Object(r.useState)(""),a=Object(d.a)(c,2),s=a[0],i=a[1];return Object(n.jsx)("section",{className:"search",children:Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(s),i("")},children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Search characters",value:s,onChange:function(e){i(e.target.value)},autoFocus:!0})})})}),N=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)(!0),i=Object(d.a)(s,2),j=i[0],l=i[1],O=Object(r.useState)(""),m=Object(d.a)(O,2),p=m[0],x=m[1];return b.a.interceptors.request.use((function(e){return e.headers.authorization="Bearer ".concat("nU8gpmFKFbKK2O16gO4f"),e}),(function(e){return Promise.reject(e)})),Object(r.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("https://the-one-api.dev/v2/character?name=".concat(p));case 2:t=e.sent,console.log(t.data),a(t.data),l(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(h,{}),Object(n.jsx)(v,{getQuery:function(e){return x(e)}}),Object(n.jsx)(g,{isLoading:j,items:c.docs})]})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.3252a8ba.chunk.js.map