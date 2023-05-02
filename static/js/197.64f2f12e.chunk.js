"use strict";(self.webpackChunkdzen_code=self.webpackChunkdzen_code||[]).push([[197],{8275:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(9439),n=a(4121),s=a(2791),l=a(6030),c=a(2810),o=a(6291),i=a(8558),u=a(184),d=function(){var e=(0,s.useState)(""),t=(0,r.Z)(e,2),a=t[0],d=t[1],m=(0,s.useState)(""),h=(0,r.Z)(m,2),f=h[0],p=h[1],b=(0,l.I0)(),x=(0,n.i)().request,g=(0,i.Z)(!0);return(0,u.jsxs)("form",{className:"border p-4 shadow-lg rounded mb-4",onSubmit:function(e){e.preventDefault();var t={id:(0,c.Z)(),title:a,date:g,description:f};x("http://localhost:3001/orders","POST",JSON.stringify(t)).then((function(e){return console.log(e,"Success")})).then(b((0,o.Cx)(t))).catch((function(e){return console.log(e)})),d(""),p("")},children:[(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{htmlFor:"title",className:"form-label fs-4",children:"Order title"}),(0,u.jsx)("input",{required:!0,type:"text",name:"title",className:"form-control",id:"title",placeholder:"Order title",value:a,onChange:function(e){return d(e.target.value)}})]}),(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{htmlFor:"desc",className:"form-label fs-4",children:"Order title"}),(0,u.jsx)("input",{required:!0,type:"text",name:"desc",className:"form-control",id:"desc",placeholder:"Order description",value:f,onChange:function(e){return p(e.target.value)}})]}),(0,u.jsx)("button",{type:"submit",className:"btn btn-success",children:"Create order"})]})},m=a(3433),h=a(2013),f=function(){var e=(0,s.useState)(""),t=(0,r.Z)(e,2),a=t[0],o=t[1],d=(0,s.useState)(""),f=(0,r.Z)(d,2),p=f[0],b=f[1],x=(0,s.useState)(""),g=(0,r.Z)(x,2),v=g[0],j=g[1],N=(0,s.useState)(""),y=(0,r.Z)(N,2),S=y[0],Z=y[1],w=(0,s.useState)(""),C=(0,r.Z)(w,2),k=C[0],P=C[1],D=(0,s.useState)(""),F=(0,r.Z)(D,2),q=F[0],E=F[1],T=(0,s.useState)(""),O=(0,r.Z)(T,2),I=O[0],L=O[1],A=(0,s.useState)(""),M=(0,r.Z)(A,2),J=M[0],_=M[1],G=(0,s.useState)([{value:"",symbol:"",isDefault:!1}]),B=(0,r.Z)(G,2),U=B[0],z=B[1],Y=(0,l.v9)((function(e){return e.filters})),H=Y.filters,W=Y.filtersLoadingStatus,K=(0,l.I0)(),Q=(0,n.i)().request,R=(0,i.Z)(!0),V=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.target,n=r.name,s=r.value,l=r.checked,c=(0,m.Z)(U);a?(document.querySelectorAll("input[type=checkbox]").forEach((function(e){e.checked=!1})),U.forEach((function(e){e.isDefault=!1})),e.target.checked=l,c[t][n]=l):c[t][n]=s,z(c)},X=function(){console.log(U),z([].concat((0,m.Z)(U),[{value:"",symbol:"",isDefault:!1}]))};return(0,u.jsxs)("form",{className:"border p-4 shadow-lg rounded mb-4",onSubmit:function(e){e.preventDefault();var t={id:(0,c.Z)(),serialNumber:p,isNew:v,photo:S,title:a,type:k,specification:q,guarantee:{start:I,end:J},price:U,date:R};Q("http://localhost:3001/products","POST",JSON.stringify(t)).then((function(e){console.log(e,"Success"),document.getElementById("createProduct").innerText="Success",setTimeout((function(){document.getElementById("collapseForm").classList.remove("show"),document.getElementById("createProduct").innerText="Create product"}),2e3)})).then(K((0,h.dn)(t))).catch((function(e){return console.log(e)})),b(""),j(""),Z(""),o(""),P(""),E(""),L(""),_(""),z([{value:"",symbol:"",isDefault:!1}])},children:[(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{htmlFor:"serialNumber",className:"form-label fs-4",children:"Serial Number"}),(0,u.jsx)("input",{required:!0,type:"text",name:"serialNumber",className:"form-control",id:"serialNumber",placeholder:"Serial Number",value:p,onChange:function(e){return b(e.target.value)}})]}),(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{htmlFor:"isNew",className:"form-label",children:"Product Usage"}),(0,u.jsxs)("select",{required:!0,className:"form-select",id:"isNew",name:"isNew",value:v,onChange:function(e){return j(e.target.value)},children:[(0,u.jsx)("option",{value:"",children:"Usage"}),function(e,t){return"loading"===t?(0,u.jsx)("option",{children:"Loading"}):"error"===t?(0,u.jsx)("option",{children:"Error"}):e&&e.length>0?e.map((function(e){var t=e.name,a=e.label;if("all"!==t)return(0,u.jsx)("option",{value:t,children:a},t)})):void 0}(H,W)]})]}),(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{htmlFor:"title",className:"form-label fs-4",children:"Product Title"}),(0,u.jsx)("input",{required:!0,type:"text",name:"title",className:"form-control",id:"title",placeholder:"Product Title",value:a,onChange:function(e){return o(e.target.value)}})]}),(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{htmlFor:"type",className:"form-label fs-4",children:"Product Type"}),(0,u.jsx)("input",{required:!0,type:"text",name:"type",className:"form-control",id:"type",placeholder:"Product Type",value:k,onChange:function(e){return P(e.target.value)}})]}),(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{htmlFor:"specification",className:"form-label fs-4",children:"Product specification"}),(0,u.jsx)("input",{required:!0,type:"text",name:"specification",className:"form-control",id:"specification",placeholder:"Product specification",value:q,onChange:function(e){return E(e.target.value)}})]}),(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{htmlFor:"guarStart",className:"form-label fs-4",children:"Product Guarantee Start"}),(0,u.jsx)("input",{required:!0,type:"text",name:"guarStart",className:"form-control",id:"guarStart",placeholder:"Product Guarantee",value:I,onChange:function(e){return L(e.target.value)}}),(0,u.jsx)("label",{htmlFor:"guarEnd",className:"form-label fs-4",children:"Product Guarantee End"}),(0,u.jsx)("input",{required:!0,type:"text",name:"guarEnd",className:"form-control",id:"guarEnd",placeholder:"Product Guarantee",value:J,onChange:function(e){return _(e.target.value)}})]}),(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("h3",{className:"fs-4",children:"Product Price"}),U.map((function(e,t){return(0,u.jsxs)("div",{className:"prices-container",children:[(0,u.jsxs)("div",{className:"border rounded p-4 mb-3",children:[(0,u.jsx)("input",{required:!0,type:"text",name:"value",className:"form-control mb-2",id:e.value,placeholder:"Price",value:e.value,onChange:function(e){return V(e,t)}},t),(0,u.jsx)("input",{required:!0,type:"text",name:"symbol",className:"form-control mb-2",id:e.symbol,placeholder:"Currency",value:e.symbol,onChange:function(e){return V(e,t)}},t+1),(0,u.jsxs)("div",{className:"form-check form-switch",children:[(0,u.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault_".concat(t),children:"Default price"}),(0,u.jsx)("input",{type:"checkbox",name:"isDefault",className:"form-check-input mb-2",id:"flexSwitchCheckDefault_".concat(t),value:e.isDefault,onChange:function(e){return V(e,t,!0)}},t+2)]}),1!==U.length&&(0,u.jsx)("button",{type:"button",onClick:function(){return function(e){var t=(0,m.Z)(U);t.splice(e,1),z(t)}(t)},className:"btn btn-danger mt-2",children:(0,u.jsx)("span",{children:"Delete Price"})},t+3)]}),U.length-1===t&&(0,u.jsx)("button",{type:"button",onClick:X,className:"btn btn-success my-4 w-100",children:(0,u.jsx)("span",{children:"Add Price"})},t+4)]},"key".concat(t))}))]}),(0,u.jsx)("button",{type:"submit",id:"createProduct",className:"btn btn-success w-100",children:"Create product"})]})},p=function(e){return"orders"===e.itemType?(0,u.jsx)(d,{}):"products"===e.itemType?(0,u.jsx)(f,{}):void 0}},1197:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(8683),n=a(5987),s=a(2791),l=a(6030),c=a(6983),o=a(6291),i=a(184),u=function(e){var t=e.title,a=e.date,r=e.description,n=e.onDelete,s=e.getProducts;return(0,i.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-dark p-1",children:[(0,i.jsx)("img",{src:"https://www.sacbee.com/reviews/wp-content/uploads/2022/06/spectre-sacramento.jpg",className:"img-fluid w-25 d-inline",alt:"Monitor",style:{objectFit:"cover"}}),(0,i.jsxs)("div",{className:"card-body d-flex justify-content-between",children:[(0,i.jsxs)("div",{className:"card-body_text",children:[(0,i.jsx)("h3",{className:"card-title display-3",children:t}),(0,i.jsx)("p",{className:"card-text",children:r}),(0,i.jsx)("p",{className:"card-text",children:a})]}),(0,i.jsx)("span",{onClick:s,className:"rounded-pill align-self-center",children:(0,i.jsx)("button",{type:"button",className:"btn btn-info text-white","aria-label":"Info",children:"Info"})}),(0,i.jsx)("span",{children:(0,i.jsx)("button",{onClick:n,type:"button",className:"btn-close bg-danger","aria-label":"Close"})})]})]})},d=a(8275),m=a(3394),h=a(4121),f=["id"],p=function(){var e=(0,l.v9)((function(e){return e.orders})),t=e.orders,a=e.ordersLoadingStatus,p=(0,l.I0)(),b=(0,h.i)().request;(0,s.useEffect)((function(){p((0,o.AU)())}),[]);var x=(0,s.useCallback)((function(e){b("http://localhost:3001/orders/".concat(e),"DELETE").then((function(e){return console.log(e,"Deleted")})).then(p((0,o.gY)(e))).catch((function(e){return console.log(e)}))}),[b]);if("loading"===a)return(0,i.jsx)(m.Z,{});if("error"===a)return(0,i.jsx)("h5",{className:"text-center mt-5",children:"Loading error"});var g,v=0===(g=t).length?(0,i.jsx)(c.Z,{timeout:0,in:!0,classNames:"fade",children:(0,i.jsx)("h5",{className:"text-center mt-5",children:"No orders yet"})}):g.map((function(e){var t=e.id,a=(0,n.Z)(e,f);return(0,i.jsx)(c.Z,{in:!0,timeout:500,classNames:"fade",children:(0,s.createElement)(u,(0,r.Z)((0,r.Z)({},a),{},{key:t,onDelete:function(){return x(t)}}))},t)}));return(0,i.jsxs)("div",{className:"mb-3 card-body",children:[(0,i.jsx)("button",{className:"btn btn-success mb-4 btn-lg btn-block w-100",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseForm","aria-expanded":"false","aria-controls":"collapseForm",children:"Add New Order"}),(0,i.jsx)("div",{className:"collapse",id:"collapseForm",children:(0,i.jsx)(d.Z,{itemType:"orders"})}),(0,i.jsx)("ul",{children:v})]})}},3394:function(e,t,a){var r=a(184);t.Z=function(){return(0,r.jsx)("div",{className:"spinner-border mx-auto mt-5 d-flex",role:"status",children:(0,r.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}},8558:function(e,t){t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new Date,a=t.getHours().toString().padStart(2,"0")+":"+t.getMinutes().toString().padStart(2,"0")+":"+t.getSeconds().toString().padStart(2,"0"),r=t.getDay(),n=t.getDate(),s=t.getMonth()+1,l=t.getFullYear();return e?"".concat(l,"-").concat(s.toString().padStart(2,"0"),"-").concat(n.toString().padStart(2,"0")," ").concat(a):"".concat(["Sunday","Monday","Tuesday","Wednesda","Thursday","Friday","Saturday"][r]," ").concat(n," ").concat(["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"][s-1]," ").concat(l)}}}]);
//# sourceMappingURL=197.64f2f12e.chunk.js.map