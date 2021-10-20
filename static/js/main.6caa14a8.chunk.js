(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var n=c(8),s=c.n(n),a=(c(15),c(10)),i=c(3),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},j=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},u=c(2),d=c.n(u),b=c(5),m=c(9),v=c.n(m),h=function(){var e=Object(b.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://www.omdbapi.com/?apikey=f3c39190&").concat(t));case 2:if((c=e.sent).ok){e.next=5;break}throw new Error(c.statusText);case 5:return e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("t=".concat(t));case 2:if("False"!==(c=e.sent).Response){e.next=5;break}throw new Error("Can't find a movie with such a title");case 5:return e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(c(21),function(e){var t=e.onMovieAdd,c=Object(r.useState)(""),n=Object(i.a)(c,2),s=n[0],a=n[1],j=Object(r.useState)(null),u=Object(i.a)(j,2),m=u[0],h=u[1],O=Object(r.useState)(null),f=Object(i.a)(O,2),p=f[0],N=f[1],g=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(s);case 3:t=e.sent,h(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),N(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),m&&(t(m),h(null),a(""))},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:v()("input",{"is-danger":p}),value:s,onChange:function(e){a(e.currentTarget.value),N(null)}})})]}),p&&Object(l.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-light",onClick:g,children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit",className:"button is-primary",disabled:!m,children:"Add to the list"})})]})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),m&&Object(l.jsx)(o,{movie:m})]})]})}),f=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(j,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(O,{onMovieAdd:function(e){c.every((function(t){var c=t.imdbID;return e.imdbID!==c}))&&n((function(t){return[].concat(Object(a.a)(t),[e])}))}})})]})};s.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.6caa14a8.chunk.js.map