(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,function(t,e,n){t.exports={button:"ContactForm_button__2jQY8",form:"ContactForm_form__4Nebg"}},function(t,e,n){t.exports={list:"ContactsList_list__3NYzs",item:"ContactsList_item__2mfvi",contacts:"ContactsList_contacts__1xcGJ",button:"ContactsList_button__--6yh"}},,,,,,function(t,e,n){t.exports={label:"Filter_label__1g1fX",filter:"Filter_filter__6B90T"}},function(t,e,n){t.exports={section:"Section_section__1qL2R",title:"Section_title__1pw9G"}},,,function(t,e,n){t.exports={cotainer:"Container_cotainer__HJfrf"}},,,,,,function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),o=n.n(c),i=(n(20),n(15)),s=n(5),l=n(6),u=n(8),d=n(7),m=n(13),h=n(26),b=n(3),f=n.n(b),j=n(0),p={name:"",number:""},v=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state=p,t.handleInputForm=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(m.a)({},a,r))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number,c=t.props.onAdd;t.validateForm()&&(c({id:Object(h.a)(),name:a,number:r}),t.resetForm())},t.validateForm=function(){var e=t.state,n=e.name,a=e.number,r=t.props.onCheckContact;return n&&a?r(n):(alert("Some filed is empty"),!1)},t.resetForm=function(){return t.setState(p)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:f.a.form,onSubmit:this.handleFormSubmit,children:[Object(j.jsx)("label",{children:Object(j.jsx)("input",{className:f.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"Enter name",value:e,onChange:this.handleInputForm})}),Object(j.jsx)("label",{children:Object(j.jsx)("input",{className:f.a.input,type:"tell",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"Enter phone number",value:n,onChange:this.handleInputForm})}),Object(j.jsxs)("button",{className:f.a.button,type:"submit",children:[" ","Add Contact"," "]})]})}}]),n}(a.Component),C=v,O=n(2),x=n.n(O),_=n(4),g=n.n(_),y=function(t){var e=t.contacts,n=t.onRemove;return 0===e.length?null:Object(j.jsx)("div",{className:g.a.contacts,children:Object(j.jsx)("ul",{className:g.a.list,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(j.jsxs)("li",{className:g.a.item,children:[Object(j.jsxs)("p",{children:[a,": ",r]}),Object(j.jsx)("button",{className:g.a.button,type:"button",onClick:function(){return n(e)},children:"delete"})]},e)}))})})};y.protoTypes={contacts:x.a.arrayOf(x.a.shape({id:x.a.string.isRequired,name:x.a.string.isRequired,number:x.a.string.isRequired})).isRequired,onRemove:x.a.func.isRequired};var S=y,N=n(10),F=n.n(N),k=function(t){var e=t.filter,n=t.onChange;return Object(j.jsxs)("label",{className:F.a.label,children:["Find contacts by name",Object(j.jsx)("input",{className:F.a.input,type:"text",name:"filter",value:e,onChange:function(t){var e=t.target;return n(e.value)},placeholder:"Enter name for Search"})]})},A=n(14),R=n.n(A);var w=function(t){var e=t.children;return Object(j.jsx)("div",{className:R.a.container,children:e})},q=n(11),J=n.n(q);var L=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("section",{className:J.a.section,children:[Object(j.jsx)("h2",{className:J.a.title,children:e}),n]})},I=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handelAddContact=function(e){return t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(i.a)(n),[e])}}))},t.handelCheckContact=function(e){var n=t.state.contacts.some((function(t){return t.name===e}));return n&&alert("".concat(e," is already in contacts")),!n},t.handleDeleteContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){return t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=this.getVisibleContacts();return Object(j.jsxs)(w,{children:[Object(j.jsx)(L,{title:"Phonebook",children:Object(j.jsx)(C,{onAdd:this.handelAddContact,onCheckContact:this.handelCheckContact})}),Object(j.jsxs)(L,{title:"Contacts",children:[n.length>1&&Object(j.jsx)(k,{filter:e,onChange:this.handleFilterChange}),n.length>0?Object(j.jsx)(S,{contacts:a,onRemove:this.handleDeleteContact}):Object(j.jsx)("p",{children:"Your phonebook is empty. Please add contact"})]})]})}}]),n}(a.Component),z=I;o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.3b1a3535.chunk.js.map