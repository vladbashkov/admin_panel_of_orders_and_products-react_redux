"use strict";(self.webpackChunkdzen_code=self.webpackChunkdzen_code||[]).push([[197],{8275:function(e,t,r){r.d(t,{Z:function(){return b}});var a=r(1413),s=r(9439),n=r(3749),l=r(2791),c=r(6030),i=r(2810),o=r(1134),d=r(6291),u=r(8558),m=r(184),h=function(){var e=(0,l.useState)(""),t=(0,s.Z)(e,2),r=t[0],h=t[1],f=(0,l.useState)(""),p=(0,s.Z)(f,2),x=p[0],b=p[1],g=(0,c.I0)(),N=(0,n.i)().request,j=(0,u.Z)(!0),v=(0,o.cI)(),y=v.register,S=v.handleSubmit,Z=v.formState.errors;return(0,m.jsxs)("form",{className:"border p-4 shadow-lg rounded mb-4",onSubmit:S((function(e){var t={id:(0,i.Z)(),title:r,date:j,description:x};N("http://localhost:3001/orders","POST",JSON.stringify(t)).then((function(e){return console.log(e,"Success")})).then(g((0,d.Cx)(t))).catch((function(e){return console.log(e)})),h(""),b("")})),children:[(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"title",className:"form-label fs-4",children:"Order title"}),(0,m.jsx)("input",(0,a.Z)((0,a.Z)({type:"text"},y("title",{required:!0})),{},{className:"form-control",id:"title",placeholder:"Order title",value:r,onChange:function(e){return h(e.target.value.trimLeft())}})),Z.title&&(0,m.jsx)("p",{className:"text-danger my-2",children:"This field is required"})]}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"desc",className:"form-label fs-4",children:"Order title"}),(0,m.jsx)("input",(0,a.Z)((0,a.Z)({type:"text"},y("desc",{required:!0})),{},{className:"form-control",id:"desc",placeholder:"Order description",value:x,onChange:function(e){return b(e.target.value.trimLeft())}})),Z.desc&&(0,m.jsx)("p",{className:"text-danger my-2",children:"This field is required"})]}),(0,m.jsx)("button",{type:"submit",className:"btn btn-success",children:"Create order"})]})},f=r(3433),p=r(2013),x=function(){var e=(0,l.useState)(""),t=(0,s.Z)(e,2),r=t[0],d=t[1],h=(0,l.useState)(""),x=(0,s.Z)(h,2),b=x[0],g=x[1],N=(0,l.useState)(""),j=(0,s.Z)(N,2),v=j[0],y=j[1],S=(0,l.useState)(""),Z=(0,s.Z)(S,2),C=Z[0],w=Z[1],q=(0,l.useState)(""),T=(0,s.Z)(q,2),k=T[0],P=T[1],D=(0,l.useState)(""),F=(0,s.Z)(D,2),E=F[0],L=F[1],I=(0,l.useState)(""),O=(0,s.Z)(I,2),A=O[0],M=O[1],J=(0,l.useState)(""),_=(0,s.Z)(J,2),G=_[0],B=_[1],U=(0,l.useState)([{value:"",symbol:"",isDefault:!1}]),z=(0,s.Z)(U,2),Y=z[0],H=z[1],W=(0,c.v9)((function(e){return e.filters})),K=W.filters,Q=W.filtersLoadingStatus,R=(0,c.I0)(),V=(0,n.i)().request,X=(0,u.Z)(!0),$=(0,o.cI)(),ee=$.register,te=$.handleSubmit,re=$.formState.errors,ae=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=e.target,s=a.name,n=a.value,l=a.checked,c=(0,f.Z)(Y);r?(document.querySelectorAll("input[type=checkbox]").forEach((function(e){e.checked=!1})),Y.forEach((function(e){e.isDefault=!1})),e.target.checked=l,c[t][s]=l):c[t][s]=n.trimLeft(),H(c)},se=function(){console.log(Y),H([].concat((0,f.Z)(Y),[{value:"",symbol:"",isDefault:!1}]))};return(0,m.jsxs)("form",{className:"border p-4 shadow-lg rounded mb-4",onSubmit:te((function(e){var t={id:(0,i.Z)(),serialNumber:b,isNew:v,photo:C,title:r,type:k,specification:E,guarantee:{start:A,end:G},price:Y,date:X};V("http://localhost:3001/products","POST",JSON.stringify(t)).then((function(e){console.log(e,"Success"),document.getElementById("createProduct").innerText="Success",setTimeout((function(){document.getElementById("collapseForm").classList.remove("show"),document.getElementById("createProduct").innerText="Create product"}),2e3)})).then(R((0,p.dn)(t))).catch((function(e){return console.log(e)})),g(""),y(""),w(""),d(""),P(""),L(""),M(""),B(""),H([{value:"",symbol:"",isDefault:!1}])})),children:[(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"serialNumber",className:"form-label fs-4",children:"Serial Number"}),(0,m.jsx)("input",(0,a.Z)((0,a.Z)({type:"text"},ee("serialNumber",{required:!0})),{},{className:"form-control",id:"serialNumber",placeholder:"Serial Number",value:b,onChange:function(e){return g(e.target.value.trimLeft())}})),re.serialNumber&&(0,m.jsx)("p",{className:"text-danger my-2",children:"This field is required"})]}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"isNew",className:"form-label",children:"Product Usage"}),(0,m.jsxs)("select",(0,a.Z)((0,a.Z)({className:"form-select",id:"isNew"},ee("isNew",{required:!0})),{},{value:v,onChange:function(e){return y(e.target.value)},children:[(0,m.jsx)("option",{value:"",children:"Usage"}),function(e,t){return"loading"===t?(0,m.jsx)("option",{children:"Loading"}):"error"===t?(0,m.jsx)("option",{children:"Error"}):e&&e.length>0?e.map((function(e){var t=e.name,r=e.label;if("all"!==t)return(0,m.jsx)("option",{value:t,children:r},t)})):void 0}(K,Q)]})),re.isNew&&(0,m.jsx)("p",{className:"text-danger my-2",children:"This field is required"})]}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"title",className:"form-label fs-4",children:"Product Title"}),(0,m.jsx)("input",(0,a.Z)((0,a.Z)({type:"text"},ee("title",{required:!0})),{},{className:"form-control",id:"title",placeholder:"Product Title",value:r,onChange:function(e){return d(e.target.value.trimLeft())}})),re.title&&(0,m.jsx)("p",{className:"text-danger my-2",children:"This field is required"})]}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"type",className:"form-label fs-4",children:"Product Type"}),(0,m.jsx)("input",(0,a.Z)((0,a.Z)({type:"text"},ee("type",{required:!0})),{},{className:"form-control",id:"type",placeholder:"Product Type",value:k,onChange:function(e){return P(e.target.value.trimLeft())}})),re.type&&(0,m.jsx)("p",{className:"text-danger my-2",children:"This field is required"})]}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"specification",className:"form-label fs-4",children:"Product specification"}),(0,m.jsx)("input",(0,a.Z)((0,a.Z)({type:"text"},ee("specification",{required:!0})),{},{className:"form-control",id:"specification",placeholder:"Product specification",value:E,onChange:function(e){return L(e.target.value.trimLeft())}})),re.specification&&(0,m.jsx)("p",{className:"text-danger my-2",children:"This field is required"})]}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"guarStart",className:"form-label fs-4",children:"Product Guarantee Start"}),(0,m.jsx)("input",(0,a.Z)((0,a.Z)({type:"text"},ee("guarStart",{required:!0})),{},{className:"form-control",id:"guarStart",placeholder:"Product Guarantee",value:A,onChange:function(e){return M(e.target.value.trimLeft())}})),re.guarStart&&(0,m.jsx)("p",{className:"text-danger my-2",children:"This field is required"}),(0,m.jsx)("label",{htmlFor:"guarEnd",className:"form-label fs-4",children:"Product Guarantee End"}),(0,m.jsx)("input",(0,a.Z)((0,a.Z)({type:"text"},ee("guarEnd",{required:!0})),{},{className:"form-control",id:"guarEnd",placeholder:"Product Guarantee",value:G,onChange:function(e){return B(e.target.value.trimLeft())}})),re.guarEnd&&(0,m.jsx)("p",{className:"text-danger my-2",children:"This field is required"})]}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("h3",{className:"fs-4",children:"Product Price"}),Y.map((function(e,t){return(0,m.jsxs)("div",{className:"prices-container",children:[(0,m.jsxs)("div",{className:"border rounded p-4 mb-3",children:[1!==Y.length&&(0,m.jsxs)("div",{className:"input-group",children:[(0,m.jsx)("input",{type:"text",name:"value",className:"form-control mb-2",id:e.value,placeholder:"Price",value:e.value.replace(/\D/,""),onChange:function(e){return ae(e,t)}},t),(0,m.jsx)("input",{type:"text",name:"symbol",className:"form-control mb-2",id:e.symbol,placeholder:"Currency",value:e.symbol,onChange:function(e){return ae(e,t)}},t+1)]}),1===Y.length&&(0,m.jsxs)("div",{className:"input-group ".concat(re.value||re.symbol?"d-flex":""),children:[(0,m.jsx)("input",(0,a.Z)((0,a.Z)({type:"text"},ee("value",{required:!0})),{},{className:"form-control mb-2",id:e.value,placeholder:"Price",value:e.value.replace(/\D/,""),onChange:function(e){return ae(e,t)}}),t),re.value&&(0,m.jsx)("p",{className:"text-danger mx-2 my-2",children:"This field is required"}),(0,m.jsx)("input",(0,a.Z)((0,a.Z)({type:"text"},ee("symbol",{required:!0})),{},{className:"form-control mb-2",id:e.symbol,placeholder:"Currency",value:e.symbol,onChange:function(e){return ae(e,t)}}),t+1),re.symbol&&(0,m.jsx)("p",{className:"text-danger mx-2 my-2",children:"This field is required"})]}),(0,m.jsxs)("div",{className:"form-check form-switch",children:[(0,m.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault_".concat(t),children:"Default price"}),(0,m.jsx)("input",{type:"checkbox",name:"isDefault",className:"form-check-input mb-2",id:"flexSwitchCheckDefault_".concat(t),value:e.isDefault,onChange:function(e){return ae(e,t,!0)}},t+2)]}),1!==Y.length&&(0,m.jsx)("button",{type:"button",onClick:function(){return function(e){var t=(0,f.Z)(Y);t.splice(e,1),H(t)}(t)},className:"btn btn-danger mt-2",children:(0,m.jsx)("span",{children:"Delete Price"})},t+3)]}),Y.length-1===t&&(0,m.jsx)("button",{type:"button",onClick:se,className:"btn btn-success my-4 w-100",children:(0,m.jsx)("span",{children:"Add Price"})},t+4)]},"key".concat(t))}))]}),(0,m.jsx)("button",{type:"submit",id:"createProduct",className:"btn btn-success w-100",children:"Create product"})]})},b=function(e){return"orders"===e.itemType?(0,m.jsx)(h,{}):"products"===e.itemType?(0,m.jsx)(x,{}):void 0}},1197:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var a=r(1413),s=r(5987),n=r(2791),l=r(6030),c=r(6983),i=r(6291),o=r(184),d=function(e){var t=e.title,r=e.date,a=e.description,s=e.onDelete,n=e.getProducts;return(0,o.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-dark p-1",children:[(0,o.jsx)("img",{src:"https://www.sacbee.com/reviews/wp-content/uploads/2022/06/spectre-sacramento.jpg",className:"img-fluid w-25 d-inline",alt:"Monitor",style:{objectFit:"cover"}}),(0,o.jsxs)("div",{className:"card-body d-flex justify-content-between",children:[(0,o.jsxs)("div",{className:"card-body_text",children:[(0,o.jsx)("h3",{className:"card-title display-3",children:t}),(0,o.jsx)("p",{className:"card-text",children:a}),(0,o.jsx)("p",{className:"card-text",children:r})]}),(0,o.jsx)("span",{onClick:n,className:"rounded-pill align-self-center",children:(0,o.jsx)("button",{type:"button",className:"btn btn-info text-white","aria-label":"Info",children:"Info"})}),(0,o.jsx)("span",{children:(0,o.jsx)("button",{onClick:s,type:"button",className:"btn-close bg-danger","aria-label":"Close"})})]})]})},u=r(8275),m=r(3394),h=r(3749),f=["id"],p=function(){var e=(0,l.v9)((function(e){return e.orders})),t=e.orders,r=e.ordersLoadingStatus,p=(0,l.I0)(),x=(0,h.i)().request;(0,n.useEffect)((function(){p((0,i.AU)())}),[]);var b=(0,n.useCallback)((function(e){x("http://localhost:3001/orders/".concat(e),"DELETE").then((function(e){return console.log(e,"Deleted")})).then(p((0,i.gY)(e))).catch((function(e){return console.log(e)}))}),[x]);if("loading"===r)return(0,o.jsx)(m.Z,{});if("error"===r)return(0,o.jsx)("h5",{className:"text-center mt-5",children:"Loading error"});var g,N=0===(g=t).length?(0,o.jsx)(c.Z,{timeout:0,in:!0,classNames:"fade",children:(0,o.jsx)("h5",{className:"text-center mt-5",children:"No orders yet"})}):g.map((function(e){var t=e.id,r=(0,s.Z)(e,f);return(0,o.jsx)(c.Z,{in:!0,timeout:500,classNames:"fade",children:(0,n.createElement)(d,(0,a.Z)((0,a.Z)({},r),{},{key:t,onDelete:function(){return b(t)}}))},t)}));return(0,o.jsxs)("div",{className:"mb-3 card-body",children:[(0,o.jsx)("button",{className:"btn btn-success mb-4 btn-lg btn-block w-100",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseForm","aria-expanded":"false","aria-controls":"collapseForm",children:"Add New Order"}),(0,o.jsx)("div",{className:"collapse",id:"collapseForm",children:(0,o.jsx)(u.Z,{itemType:"orders"})}),(0,o.jsx)("ul",{children:N})]})}},3394:function(e,t,r){var a=r(184);t.Z=function(){return(0,a.jsx)("div",{className:"spinner-border mx-auto mt-5 d-flex",role:"status",children:(0,a.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}},8558:function(e,t){t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new Date,r=t.getHours().toString().padStart(2,"0")+":"+t.getMinutes().toString().padStart(2,"0")+":"+t.getSeconds().toString().padStart(2,"0"),a=t.getDay(),s=t.getDate(),n=t.getMonth()+1,l=t.getFullYear();return e?"".concat(l,"-").concat(n.toString().padStart(2,"0"),"-").concat(s.toString().padStart(2,"0")," ").concat(r):"".concat(["Sunday","Monday","Tuesday","Wednesda","Thursday","Friday","Saturday"][a]," ").concat(s," ").concat(["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"][n-1]," ").concat(l)}}}]);
//# sourceMappingURL=197.5a839168.chunk.js.map