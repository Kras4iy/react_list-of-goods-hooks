(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(5),s=n.n(c),o=n(2),a=n(1),r=n(3),l=n.n(r),i=(n(10),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=new Array(u.length).fill(1).map((function(t){return t+Math.random()})),j=function(){var t=Object(a.useState)(!1),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(0),r=Object(o.a)(s,2),j=r[0],h=r[1],d=Object(a.useState)(!1),O=Object(o.a)(d,2),f=O[0],m=O[1],p=Object(a.useState)(1),g=Object(o.a)(p,2),x=g[0],v=g[1];return Object(i.jsxs)("div",{className:"App",children:[!n&&Object(i.jsx)("button",{type:"button",className:"button",onClick:function(){c(!0)},children:"Start"}),n&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("label",{children:["Choose a length",Object(i.jsx)("select",{value:x,className:"select",onChange:function(t){return v(+t.target.value)},children:new Array(10).fill(0).map((function(t,e){return Object(i.jsx)("option",{value:e+1,children:e+1},b[e])}))})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{type:"button",className:l()("button",1===j&&"active"),onClick:function(){h(1)},children:"Sort alphabetically"}),Object(i.jsx)("button",{type:"button",className:l()("button",2===j&&"active"),onClick:function(){h(2)},children:"Sort by length"}),Object(i.jsx)("button",{type:"button",className:l()("button",!1!==f&&"active"),onClick:function(){m(!f)},children:"Reverse"}),Object(i.jsx)("button",{type:"button",className:"button",onClick:function(){h(0),m(!1),v(1)},children:"Reset"})]}),Object(i.jsx)("ul",{className:"Goods",children:function(){var t=[].concat(u).filter((function(t){return t.length>x}));return t.sort((function(t,e){switch(j){case 1:return t.localeCompare(e);case 2:return t.length-e.length;default:return 0}})),f?t.reverse():t}().map((function(t){return Object(i.jsx)("li",{className:"Goods__item",children:t},t)}))})]})]})};s.a.render(Object(i.jsx)(j,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.05b98e65.chunk.js.map