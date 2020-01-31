(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{47:function(e,t,a){e.exports=a(86)},62:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),o=a.n(c),l=a(12),i=a(13),m=a(16),s=a(14),u=a(15),d=a(88),p=a(89),E=a(90),h=a(91),f=a(92),b=a(93),O=a(94),g=a(95),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},r.a.createElement(p.a,null,r.a.createElement(E.a,{href:"/"},"WatchList"),r.a.createElement(h.a,{onClick:this.toggle}),r.a.createElement(f.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(b.a,{className:"ml-auto",navbar:!0},r.a.createElement(O.a,null,r.a.createElement(g.a,{href:"https://www.imdb.com/"},"IMDB")))))))}}]),t}(n.Component),y=(a(61),a(62),a(96)),j=a(97),k=a(98),I=a(107),w=a(105),_=(a(63),a(21)),T=a(23),D=a.n(T),C=function(){return{type:"ITEMS_LOADING"}},M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onDeleteClick=function(e){a.props.deleteItem(e)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getItems()}},{key:"render",value:function(){var e=this,t=this.props.item.items;return r.a.createElement(p.a,null,r.a.createElement(y.a,null,r.a.createElement(I.a,{className:"movie-list"},t.map((function(t){var a=t._id,n=t.name;return r.a.createElement(w.a,{key:a,timeout:400,classNames:"fade"},r.a.createElement(j.a,null,r.a.createElement(k.a,{className:"remove-btn",color:"danger",size:"sm",onClick:e.onDeleteClick.bind(e,a)},"\xd7"),n))})))))}}]),t}(n.Component),S=Object(_.b)((function(e){return{item:e.item}}),{getItems:function(){return function(e){e(C()),D.a.get("/api/items").then((function(t){return e({type:"GET_ITEMS",payload:t.data})}))}},deleteItem:function(e){return function(t){D.a.delete("/api/items/".concat(e)).then((function(a){return t({type:"DELETE_ITEM",payload:e})}))}}})(M),A=a(17),N=a(44),L=a(45),W=a(22),B={items:[],loading:!1},G=Object(A.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(W.a)({},e,{items:t.payload,loading:!1});case"DELETE_ITEM":return Object(W.a)({},e,{items:e.items.filter((function(e){return e._id!==t.payload}))});case"ADD_ITEM":return Object(W.a)({},e,{items:[t.payload].concat(Object(L.a)(e.items))});case"ITEMS_LOADING":return Object(W.a)({},e,{loading:!0});default:return e}}}),x=[N.a],J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.d,X=Object(A.e)(G,{},J(A.a.apply(void 0,x))),z=a(20),P=a(106),R=a(99),U=a(100),V=a(101),Y=a(102),$=a(103),q=a(104),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,name:""},a.toggle=function(){a.setState({modal:!a.state.modal})},a.onChange=function(e){a.setState(Object(z.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={name:a.state.name};a.props.addItem(t),a.toggle()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k.a,{color:"dark",style:{marginBottom:"2rem"},onClick:this.toggle},"Add Item"),r.a.createElement(P.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(R.a,{toggle:this.toggle},"Add To Your Watchlist",r.a.createElement(U.a,null,r.a.createElement(V.a,{onSubmit:this.onSubmit},r.a.createElement(Y.a,null,r.a.createElement($.a,{for:"item"},"Movie"),r.a.createElement(q.a,{type:"text",name:"name",id:"item",placeholder:"add Watch List",onChange:this.onChange}),r.a.createElement(k.a,{color:"dark",style:{marginTop:"2rem"},block:!0},"Add Movie")))))))}}]),t}(n.Component),H=Object(_.b)((function(e){return{item:e.item}}),{addItem:function(e){return function(t){D.a.post("/api/items",e).then((function(e){return t({type:"ADD_ITEM",payload:e.data})}))}}})(F),K=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(_.a,{store:X},r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(p.a,null,r.a.createElement(H,null),r.a.createElement(S,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.3d9a6ada.chunk.js.map