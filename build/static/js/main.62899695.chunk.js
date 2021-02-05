(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{35:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"fetchContactsRequest",(function(){return O})),n.d(c,"fetchContactsSuccess",(function(){return h})),n.d(c,"fetchContactsError",(function(){return m})),n.d(c,"addContactRequest",(function(){return C})),n.d(c,"addContactSuccess",(function(){return p})),n.d(c,"addContactError",(function(){return v})),n.d(c,"deleteContactRequest",(function(){return x})),n.d(c,"deleteContactSuccess",(function(){return g})),n.d(c,"deleteContactError",(function(){return y})),n.d(c,"filterContact",(function(){return S}));var r={};n.r(r),n.d(r,"fetchContacts",(function(){return w})),n.d(r,"addContact",(function(){return E})),n.d(r,"deleteContact",(function(){return N}));var a={};n.r(a),n.d(a,"getContacts",(function(){return L})),n.d(a,"getFilter",(function(){return R})),n.d(a,"getLoading",(function(){return q})),n.d(a,"getShownContacts",(function(){return A}));var o=n(1),u=n(0),i=n.n(u),s=n(10),b=n.n(s),d=(n(35),n(6)),l=n(9),j=n.n(l);j.a.defaults.baseURL="http://localhost:3000";var f=n(2),O=Object(f.b)("contacts/fetchContactsRequest"),h=Object(f.b)("contacts/fetchContactsSuccess"),m=Object(f.b)("contacts/fetchContactsError"),C=Object(f.b)("contacts/addContactRequest"),p=Object(f.b)("contacts/addContactSuccess"),v=Object(f.b)("contacts/addContactError"),x=Object(f.b)("contacts/deleteContactRequest"),g=Object(f.b)("contacts/deleteContactSuccess"),y=Object(f.b)("contacts/deleteContactError"),S=Object(f.b)("contacts/filter"),w=function(){return function(t){t(O()),j.a.get("/contacts").then((function(e){var n=e.data;return t(h(n))})).catch((function(e){return t(m(e))}))}},E=function(t,e){return function(n){var c={name:t,number:e};n(C()),function(t){return j.a.post("/contacts",t)}(c).then((function(t){var e=t.data;return n(p(e))})).catch((function(t){return n(v(t))}))}},N=function(t){return function(e){e(x()),function(t){return j.a.delete("/contacts/".concat(t))}(t).then((function(){return e(g(t))})).catch((function(t){return e(y(t))}))}},k=n(11),L=function(t){return t.contacts.items},R=function(t){return t.contacts.filter},q=function(t){return t.contacts.isLoading},A=Object(k.a)([L,R],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}));var D=function(){var t=Object(d.b)(),e=Object(d.c)(a.getShownContacts);return Object(u.useEffect)((function(){return t(r.fetchContacts())}),[t]),e.length?Object(o.jsx)("ul",{className:"contactList",children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(o.jsxs)("li",{className:"contactItem",children:[Object(o.jsxs)("p",{children:[c," : ",a]}),Object(o.jsx)("button",{type:"button",onClick:function(){return t(r.deleteContact(n))},className:"deleteContactButton",children:"Delete"})]},n)}))}):Object(o.jsx)("h3",{children:"Add new contacts"})};var F=function(){var t=Object(d.b)(),e=Object(d.c)(a.getFilter);return Object(o.jsxs)("label",{children:["Find contacts by name",Object(o.jsx)("input",{type:"text",value:e,name:"filter",onChange:function(e){t(c.filterContact(e.target.value))}})]})},J=n(17);var B=function(){var t=Object(u.useState)(""),e=Object(J.a)(t,2),n=e[0],c=e[1],a=Object(u.useState)(""),i=Object(J.a)(a,2),s=i[0],b=i[1],l=Object(d.b)(),j=function(t){var e=t.target,n=e.name,r=e.value;switch(n){case"name":c(r);break;case"number":b(r);break;default:return}},f=function(){c(""),b("")};return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),l(r.addContact(n,s)),f()},children:[Object(o.jsxs)("label",{className:"label name",children:["Enter name",Object(o.jsx)("input",{type:"text",value:n,name:"name",onChange:j,placeholder:"Jony Depp"})]}),Object(o.jsxs)("label",{className:"label number",children:["\u0415nter number",Object(o.jsx)("input",{type:"tel",value:s,name:"number",onChange:j,placeholder:"Number (7 to 9 digits)",pattern:"[0-9]{7,9}",title:"7 to 9 digits allowed"})]}),Object(o.jsx)("button",{type:"submit",className:"addContact",children:"Add contact"})]})},I=function(t){var e=t.title,n=t.children;return Object(o.jsxs)("section",{className:"section",children:[Object(o.jsx)("h2",{children:e}),n]})};n(61);var z,M,P=function(){return Object(o.jsxs)("div",{className:"main-container",children:[Object(o.jsx)(I,{title:"Phonebook",children:Object(o.jsx)(B,{})}),Object(o.jsxs)(I,{title:"Contacts",children:[Object(o.jsx)(F,{}),Object(o.jsx)(D,{})]})]})},T=n(13),U=n(4),G=n(3),H=Object(f.c)([],(z={},Object(U.a)(z,h,(function(t,e){return e.payload})),Object(U.a)(z,p,(function(t,e){var n=e.payload;return[].concat(Object(T.a)(t),[n])})),Object(U.a)(z,g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),z)),K=Object(f.c)(!1,(M={},Object(U.a)(M,O,(function(){return!0})),Object(U.a)(M,h,(function(){return!1})),Object(U.a)(M,m,(function(){return!1})),Object(U.a)(M,C,(function(){return!0})),Object(U.a)(M,p,(function(){return!1})),Object(U.a)(M,v,(function(){return!1})),Object(U.a)(M,x,(function(){return!0})),Object(U.a)(M,g,(function(){return!1})),Object(U.a)(M,y,(function(){return!1})),M)),Q=Object(f.c)("",Object(U.a)({},S,(function(t,e){return e.payload}))),V=Object(G.c)({items:H,filter:Q,isLoading:K}),W=n(29),X=n.n(W),Y=n(7),Z=[].concat(Object(T.a)(Object(f.d)({serializableCheck:{ignoredActions:[Y.a,Y.f,Y.b,Y.c,Y.d,Y.e]}})),[X.a]),$=Object(f.a)({reducer:{contacts:V},middleware:Z,devTools:!1});b.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(d.a,{store:$,children:Object(o.jsx)(P,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.62899695.chunk.js.map