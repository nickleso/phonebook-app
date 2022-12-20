"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[416],{416:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(434),s=n(277),c=n(329),r=function(){var e=(0,a.I0)(),t=(0,a.v9)(s.K2);return(0,c.jsxs)("div",{className:"contacts",children:[(0,c.jsx)("h2",{className:"contacts__title",children:"Add new contacts"}),(0,c.jsxs)("form",{className:"contacts__form",onSubmit:function(n){n.preventDefault();var a=n.target,c=a.elements.name.value,r=c.toLowerCase(),l=a.elements.number.value;if(t.find((function(e){return e.name.toLowerCase()===r})))alert("".concat(c," is already in contacts."));else{var i={name:c,number:l};e((0,s.uK)(i)),a.reset()}},children:[(0,c.jsxs)("label",{className:"contacts__label",children:["Name",(0,c.jsx)("input",{className:"contacts__input",type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,c.jsxs)("label",{className:"contacts__label",children:["Phone",(0,c.jsx)("input",{className:"contacts__input",type:"tel",name:"number",placeholder:"Phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,c.jsx)("button",{className:"contacts__button",type:"submit",children:"Add contact"})]})]})},l=n(791),i="App_contact__button__lTinc",o=function(e){var t=e.contact,n=(0,a.I0)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("p",{children:[t.name,": ",(0,c.jsx)("span",{children:t.number})]}),(0,c.jsx)("button",{className:i,type:"button",onClick:function(){return n((0,s.GK)(t.id))},children:"Delete"})]})},d=function(){var e=(0,a.I0)(),t=(0,a.v9)(s.K2),n=(0,a.v9)(s.zK);(0,l.useEffect)((function(){e((0,s.yF)())}),[e]);var r=function(){if(!n)return t;var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return(0,c.jsxs)("div",{className:"contactsList",children:[(0,c.jsx)("h2",{className:"contactsList__title",children:"Contacts list"}),(0,c.jsx)("ul",{className:"contactsList__form",children:r.map((function(e){return(0,c.jsx)("li",{className:"contactsList__label",children:(0,c.jsx)(o,{contact:e})},e.id)}))})]})},u=function(){var e=(0,a.I0)(),t=(0,a.v9)(s.K2);return(0,c.jsxs)("div",{className:"filter",children:[(0,c.jsx)("h2",{className:"filter__title",children:"Filter contacts"}),(0,c.jsxs)("div",{className:"filter__form",children:[(0,c.jsxs)("label",{className:"filter__label",children:["Find contacts by name",(0,c.jsx)("input",{className:"filter__input",name:"filter",onChange:function(t){var n=t.currentTarget.value;e((0,s.xO)(n))}})]}),(0,c.jsxs)("p",{className:"filter__descr",children:["Total contacts: ",t.length]})]})]})},m=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("main",{children:(0,c.jsx)("section",{className:"section",children:(0,c.jsxs)("div",{className:"container phonebook",children:[(0,c.jsx)("h1",{className:"hidden",children:"Phonebook"}),(0,c.jsx)(r,{}),(0,c.jsx)(u,{}),(0,c.jsx)(d,{})]})})})})}}}]);
//# sourceMappingURL=416.b51caa8e.chunk.js.map