"use strict";(self.webpackChunkyour_app=self.webpackChunkyour_app||[]).push([[32],{4311:function(e,t,n){n(2791);t.Z=n.p+"static/media/menu-dots.615dcc243479fa7dd0431ff9882656f2.svg"},4047:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(885),i=n(2791),s=(n(3498),n(184)),a=n(364),c=n(7258),o=n(5807),l=(n(559),n(6933)),u=(0,a.$j)(null,{clearCurrentTour:c.bL,setEditing:c.D_,copyTour:c.Tt})((function(e){e.title;var t=e.copyTour,n=e.tour_id,a=e.button_name,u=e.action,d=(0,i.useState)(!1),m=(0,r.Z)(d,2),h=m[0],f=m[1],p=(0,i.useState)(""),x=(0,r.Z)(p,2),v=x[0],j=x[1],g=(0,i.useState)(""),b=(0,r.Z)(g,2);b[0],b[1];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{onClick:function(){f(!0)},style:{cursor:"pointer"},children:a}),(0,s.jsx)("div",{className:"modal-wrapper ".concat(h&&"modal-active"),children:(0,s.jsxs)("div",{className:"modal-body",children:[(0,s.jsxs)("div",{className:"modal-header",children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u043e\u0432\u043e\u0433\u043e \u0442\u0443\u0440\u0430.",(0,s.jsx)("div",{onClick:function(){f(!1)},className:"modal-close-button"})]}),(0,s.jsx)("div",{className:"modal-content",children:(0,s.jsx)("div",{className:"my-tours-input-section",children:(0,s.jsx)("div",{className:"my-tours-input-full-modal",children:(0,s.jsx)(o.Z,{action:function(e,t){j(t)},name:"start_date",label:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430 \u0442\u0443\u0440\u0430",value:v,type:"date"})})})}),(0,s.jsx)("div",{className:"modal-footer",children:(0,s.jsx)(l.Z,{text:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0443\u0440",action:function(){t(n,{start_date:v}),(0,c.bL)(),(0,c.D_)(!1),f(!1),u()}})})]})})]})}))},5807:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(885),i=n(2791);var s=n.p+"static/media/message.7098f1183e37ea2fd88604e4b79d0bd8.svg";var a=n.p+"static/media/padlock5.73596860cc7faf8dcb74f6f36df2dddf.svg",c=n(3239),o=n(4554),l=n(184),u=function(e){var t=e.disabled,n=void 0!==t&&t,u=e.label,d=e.action,m=e.name,h=e.type,f=void 0===h?"text":h,p=e.value,x=e.required,v=e.icon,j=e.error,g=void 0===j?null:j,b=e.margin,N=void 0===b?"0":b,y=(e.tour,e.spinner),_=void 0!==y&&y,Z=e.clear,k=void 0!==Z&&Z,w=e.blur_action,C=(0,i.useState)(""),S=(0,r.Z)(C,2),E=S[0],A=S[1],T=(0,i.useState)([]),F=(0,r.Z)(T,2),q=F[0],L=F[1];(0,i.useEffect)((function(){k&&A("")}),[k]),(0,i.useEffect)((function(){if(g&&g.detail){var e=[];e.push(g.detail),L(e)}else g&&"re_password"===m?L(g.password):g&&"phone"===m?L(g.phone):g&&g[m]&&L(g[m])}),[g,m]),(0,i.useEffect)((function(){p&&A(p)}),[p]);var U=function(e){L([]),A(e.target.value),d(m,e.target.value)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"with-errors-wrapper",style:{margin:N},id:m,children:["date"===f&&(0,l.jsx)("input",{required:x,className:"custom-input-style ".concat(q.length>0?"error":"ok"),placeholder:u,name:m,value:E,type:f,onChange:U,max:"2999-12-31",onBlur:w}),"date"!==f&&(0,l.jsxs)(l.Fragment,{children:[v&&!_&&(0,l.jsxs)("div",{className:"with-icon",children:[(0,l.jsx)("input",{required:x,className:"custom-input-style ".concat(q&&q.length>0?"error":"ok"),placeholder:u,name:m,value:E,type:f,onChange:U}),(0,l.jsx)("div",{className:"with-icon-image",children:(0,l.jsx)("img",{src:"email"===v?s:a,alt:"icon"})})]}),!v&&!_&&(0,l.jsx)("div",{children:(0,l.jsx)("input",{required:x,className:"custom-input-style ".concat(q&&q.length>0?"error":"ok"),placeholder:u,name:m,value:E,type:f,onChange:U,disabled:n})}),_&&(0,l.jsx)(o.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,l.jsx)(c.Z,{})})]}),(0,l.jsx)("div",{className:"errors-list",children:(0,l.jsx)("ul",{children:Array.isArray(q)&&q.length>0&&q.map((function(e,t){return(0,l.jsx)("li",{children:e},t)}))})})]})})}},559:function(e,t,n){var r=n(4942),i=n(1413),s=n(885),a=n(2791),c=n(1540),o=n(7746),l=n(364),u=n(7258),d=n(184);t.Z=(0,l.$j)((function(e){return{tour:e.tours.current_tour}}),{tourToServerUpdate:u.SR})((function(e){var t=e.action,n=e.name,l=(e.label,e.val),u=e.options,m=e.multiple,h=e.margin,f=e.basic_type,p=e.required,x=e.tour,v=e.tourToServerUpdate,j=e.labelField,g=void 0===j?"name":j,b=e.currency,N=e.prc,y=void 0!==N&&N,_=e.error,Z=void 0===_?{}:_,k=(0,a.useState)([]),w=(0,s.Z)(k,2),C=w[0],S=w[1],E=(0,a.useState)([]),A=(0,s.Z)(E,2),T=A[0],F=A[1],q=(0,a.useState)([]),L=(0,s.Z)(q,2),U=L[0],D=L[1];(0,a.useEffect)((function(){if(Z&&Z.detail){var e=[];e.push(Z.detail),D(e)}else Z&&"re_password"===n?D(Z.password):Z&&Z[n]&&D(Z[n])}),[Z,n]),(0,a.useEffect)((function(){y&&F(b?[{id:0,name:b},{id:1,name:"%"}]:[{id:1,name:"%"}])}),[y,b]),(0,a.useEffect)((function(){if(y&&T){var e=[];!0===l?e.push(T[1]):!1===l&&e.push(T[0]),S(e)}}),[y,T,l]);var P=function(e){D([]),t(n,m?e:e[0])};return(0,a.useEffect)((function(){f?F(u.filter((function(e){return e.id!==f.id}))):y||F(u)}),[u,f,y,l]),(0,a.useEffect)((function(){if(Array.isArray(l)&&l.length>0&&f)S(l.filter((function(e){return e.id!==f.id})));else if(Array.isArray(l)&&l.length>0)S(l);else if(l&&!Array.isArray(l)&&(0,o.Z)(l)){var e=[];e.push(l),S(e)}}),[l,f]),(0,d.jsxs)("div",{id:n,children:[!y&&(0,d.jsx)(c.ZP,{required:p,style:{margin:h,padding:"10px 20px"},className:"custom-select-style ".concat(U.length>0?"error":"ok"),placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",searchable:!0,searchBy:"name",multi:m,options:T,onChange:P,values:C,labelField:g,valueField:"id",create:!m&&!0,onCreateNew:function(e){v((0,i.Z)((0,i.Z)({},x),{},(0,r.Z)({},n,e.name)),x.id)},createNewLabel:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c {search}"}),y&&b&&T.length>0&&(0,d.jsx)(c.ZP,{required:p,style:{margin:h,padding:"10px 20px"},className:"custom-select-style ".concat(U.length>0?"error":"ok"),placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",options:T,onChange:P,values:C,labelField:"name",valueField:"id"}),(0,d.jsx)("div",{className:"errors-list",children:(0,d.jsx)("ul",{children:Array.isArray(U)&&U.length>0&&U.map((function(e,t){return(0,d.jsx)("li",{children:e},t)}))})})]})}))},3498:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.children,n=e.label,i=e.comment,s=e.margin,a=void 0===s?"0 30px 0 0":s,c=e.full,o=e.width,l=e.padding,u=e.name,d=e.tour;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"single-input-label",children:"".concat(n," ").concat(d&&d.required_fields&&d.required_fields.includes(u)?"*":"")}),(0,r.jsxs)("div",{className:"tour-input-wrapper",children:[(0,r.jsx)("div",{className:"single-input-input ".concat(c?"full":""),style:{margin:a,width:o,padding:l},children:t}),(0,r.jsx)("div",{className:"tour-input-comment",children:(0,r.jsx)("div",{className:"tour-input-comment-content",children:i})})]})]})}},7746:function(e,t){t.Z=function(e){return!(e&&0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype)}},7714:function(e,t,n){var r=n(885),i=n(2791),s=n(2753),a=n(1642),c=n(7571),o=n(9741),l=n(364),u=n(5039),d=n(7880),m=n(7258),h=n(184);t.Z=(0,l.$j)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user,status:e.auth.status,page:e.auth.page,tour:e.tours.current_tour}}),{load_user:d.L4,openSecondaryMenu:m.E3})((function(e){var t=e.title,n=e.subtitle,l=e.menu_item,m=e.isAuthenticated,f=e.children,p=e.tour,x=e.openSecondaryMenu;if(!m)return(0,h.jsx)(c.l_,{to:"/login"});p.secondary&&x(!1);var v=(0,i.useState)(""),j=(0,r.Z)(v,2);j[0],j[1];return(0,i.useEffect)((function(){(0,d.L4)()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(a.ZP,{children:[(0,h.jsx)("title",{children:t}),(0,h.jsx)("meta",{name:"description",content:""}),(0,h.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,h.jsxs)(s.Z,{page:l,children:[(0,h.jsx)("section",{children:(0,h.jsx)("div",{className:"wrapper",children:(0,h.jsxs)("div",{className:"breadcrumbs breadcrumbs_margin",children:[(0,h.jsx)("span",{children:(0,h.jsx)(o.rU,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})," - ",(0,h.jsx)("span",{children:(0,h.jsx)(o.rU,{to:"/account",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),n&&" - ",n&&(0,h.jsx)("span",{children:(0,h.jsx)(o.rU,{to:"/account/".concat(l),children:n})}),t&&" - ",(0,h.jsx)("span",{style:{textDecoration:"none",pointerEvents:"none"},children:t})]})})}),(0,h.jsx)("section",{children:(0,h.jsx)("div",{className:"wrapper",children:(0,h.jsxs)("div",{className:"account_block",children:[(0,h.jsx)(u.Z,{menu_item:l}),f]})})})]})]})}))},9362:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(885),i=n(2791),s=n(364);var a=n.p+"static/media/shopping-cart.eb387f9f75ce1623d22fb41d5855c2b0.svg";var c=n.p+"static/media/view.f8833f3c70eade3b3ef97ed856090dcc.svg",o=n(4311),l=n(9603),u=n(7258),d=n(4047),m=n(7571),h=n(8324),f=n(184),p=(0,s.$j)(null,{deleteTour:u.iM,updateTour:u.Mn,setEditing:u.D_,getTour:u.QU})((function(e){var t=e.tour,n=(e.action,e.menu_action,e.click_action,e.deleteTour),s=(e.updateTour,e.setEditing,e.getTour),u=(0,m.k6)(),p=t.is_active?"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e":t.on_moderation?"\u041d\u0430 \u041c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u0438":t.is_draft?"\u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a":"",x=t.is_active?"active":t.on_moderation?"moderation":t.is_draft?"draft":"",v=(0,i.useRef)(),j=(0,i.useState)(!1),g=(0,r.Z)(j,2),b=g[0],N=g[1],y=(0,i.useState)(!1),_=(0,r.Z)(y,2),Z=_[0],k=_[1];(0,i.useEffect)((function(){return document.addEventListener("mousedown",w),function(){return document.removeEventListener("mousedown",w)}}));var w=function(e){v.current.contains(e.target)||N(!1)},C=function(){s(t.id),N(!1),u.push("/account/tours/".concat(t.id,"/edit/main"))};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:"tour-card",children:[(0,f.jsxs)("div",{className:"tour-image",children:[(0,f.jsx)("div",{className:"tour-image",onClick:C,style:{backgroundImage:"url("+t.tmb_wallpaper+")",cursor:"pointer"}}),(0,f.jsx)("div",{className:"tour-menu-dots",style:{padding:"5px",position:"absolute",top:15,right:15,cursor:"pointer"},onClick:function(){N(!0)},children:(0,f.jsx)("img",{src:o.Z,alt:"menu"})}),(0,f.jsxs)("div",{className:"tour-menu",ref:v,style:{position:"absolute",top:20,right:25,border:"1px solid rgba(0, 0, 0, 0.1)",boxShadow:"0px 10px 20px rgba(0, 0, 0, 0.05)",borderRadius:8,backgroundColor:"#fff",display:b?"block":"none"},children:[(0,f.jsx)("div",{className:"tour-item-top",style:{padding:10,borderBottom:"1px solid rgba(0, 0, 0, 0.1)",lineHeight:"15px",textAlign:"right",cursor:"pointer"},onClick:C,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),(0,f.jsx)("div",{className:"tour-item-top",style:{padding:10,borderBottom:"1px solid rgba(0, 0, 0, 0.1)",lineHeight:"15px",textAlign:"right"},children:(0,f.jsx)(d.Z,{tour_id:t.id,button_name:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c",action:function(){return N(!1)}})}),(0,f.jsx)("div",{className:"tour-item-bottom",style:{padding:10,lineHeight:"15px",textAlign:"right",cursor:"pointer"},onClick:function(){return k(!0)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]}),Z&&(0,f.jsx)(h.Z,{status:"danger",title:"\u0423\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?",text:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u0430 \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430.",button:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",button2:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",action:function(){return k(!1)},second_action:function(){n(t.id),k(!1),N(!1)}}),(0,f.jsx)("div",{className:"tour-label tour-label".concat(x?"-"+x:""),children:p})]}),(0,f.jsxs)("div",{className:"tour-header",onClick:C,style:{cursor:"pointer"},children:[(0,f.jsx)("div",{className:"tour-region",children:t&&t.start_country&&t.start_country.name}),(0,f.jsx)("div",{className:"tour-name",onClick:C,children:t.name&&(t.name.length<=23?t.name:t.name.substring(0,23)+"...")})]}),(0,f.jsxs)("div",{className:"tour-footer",children:[(0,f.jsxs)("div",{className:"tour-footer-left",children:[(0,f.jsxs)("div",{className:"tour-footer-dates",children:[t.duration," \u0434\u043d. (\u0441"," ",(0,l.ZP)(new Date(t.start_date),"dd.mm.yyyy"),")"]}),(0,f.jsxs)("div",{className:"tour-footer-price",children:[t.price," ",(0,f.jsx)("span",{className:"rub-sign",children:"\u20bd"})]})]}),(0,f.jsxs)("div",{className:"tour-footer-right",children:[(0,f.jsxs)("div",{className:"tour-footer-sold",children:[(0,f.jsx)("div",{className:"tour-footer-value",children:t.sold?t.sold:"0"})," ",(0,f.jsx)("img",{src:a,alt:"shopping-cart"})]}),(0,f.jsxs)("div",{className:"tour-footer-watched",children:[(0,f.jsx)("div",{className:"tour-footer-value",children:t.watched?t.watched:"0"})," ",(0,f.jsx)("img",{src:c,alt:"view"})]})]})]})]})})})),x=n(3239),v=n(4554),j=function(e){var t=e.tours,n=(0,i.useState)(!1),s=(0,r.Z)(n,2),a=(s[0],s[1],(0,i.useState)(!1)),c=(0,r.Z)(a,2),o=c[0],l=c[1];(0,i.useEffect)((function(){t.length>0&&o&&l(!1)}),[t,o]);var u=function(){l(!0)};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:"tours-wrapper",children:[!o&&t&&t.length>0&&t.map((function(e,t){return(0,f.jsx)(p,{tour:e,action:u},t)})),o&&(0,f.jsx)(v.Z,{sx:{display:"flex"},children:(0,f.jsx)(x.Z,{})})]})})},g=n(7714),b=n(7746),N=(0,s.$j)((function(e){return{isAuthenticated:e.auth.isAuthenticated,tour:e.tours.current_tour,tours:e.tours.tours}}),{addTour:u.u4,getTours:u.SG,clearCurrentTour:u.bL})((function(e){var t=e.isAuthenticated,n=e.addTour,s=e.tour,a=e.tours,c=e.getTours,o=e.clearCurrentTour,l=(0,i.useState)(!1),u=(0,r.Z)(l,2),d=(u[0],u[1],(0,i.useState)("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435")),h=(0,r.Z)(d,2),p=(h[0],h[1]),x=(0,i.useState)(!1),v=(0,r.Z)(x,2),N=v[0],y=v[1],_=(0,i.useState)("all"),Z=(0,r.Z)(_,2),k=Z[0],w=Z[1],C=(0,i.useState)(null),S=(0,r.Z)(C,2),E=S[0],A=S[1];(0,i.useEffect)((function(){c(),o()}),[]),(0,i.useEffect)((function(){a&&"all"===k?A(a):a&&"is_active"===k?A(a.filter((function(e){return e.is_active}))):a&&"on_moderation"===k?A(a.filter((function(e){return e.on_moderation}))):a&&"is_draft"===k?A(a.filter((function(e){return e.is_draft}))):a&&"is_archive"===k&&A(a.filter((function(e){return e.is_archive})))}),[a,k]);var T=(0,m.k6)();if((0,i.useEffect)((function(){(0,b.Z)(s)&&N&&(y(!1),T.push("/account/tours/".concat(s.id,"/edit/main")))}),[s]),(0,i.useEffect)((function(){s.id?p("\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"):p("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435")}),[s]),!t)return(0,f.jsx)(m.l_,{to:"/login"});return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(g.Z,{title:"\u041c\u043e\u0438 \u0442\u0443\u0440\u044b",menu_item:"tours/list",children:(0,f.jsxs)("main",{children:[(0,f.jsx)("div",{className:"global-h2-heading",children:(0,f.jsx)("h2",{children:"\u041c\u043e\u0438 \u0442\u0443\u0440\u044b"})}),(0,f.jsxs)("div",{className:"tours-list-add-button-wrapper",children:[(0,f.jsx)("div",{className:"tours-list-add-button-text",children:"\u0412\u0430\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0431\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u043e\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0443\u0440\u043e\u0432 \u0438 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439, \u0431\u043e\u043b\u0435\u0435 2 000 000 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0436\u0434\u0443\u0442 \u0438\u0445."}),(0,f.jsx)("div",{className:"tours-list-add-button-button green",onClick:function(){y(!0),n()},children:(0,f.jsx)("div",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435"})})]}),(0,f.jsx)("div",{className:"control-buttons",children:(0,f.jsxs)("div",{className:"control-buttons-set",children:[(0,f.jsx)("button",{className:"all"===k?"active":"",onClick:function(){return w("all")},children:"\u0412\u0441\u0435"}),(0,f.jsx)("button",{className:"is_active"===k?"active":"",onClick:function(){return w("is_active")},children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e"}),(0,f.jsx)("button",{className:"on_moderation"===k?"active":"",onClick:function(){return w("on_moderation")},children:"\u041d\u0430 \u043c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u0438"}),(0,f.jsx)("button",{className:"is_draft"===k?"active":"",onClick:function(){return w("is_draft")},children:"\u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a\u0438"}),(0,f.jsx)("button",{className:"is_archive"===k?"active":"",onClick:function(){return w("is_archive")},children:"\u0412 \u0430\u0440\u0445\u0438\u0432\u0435"})]})}),E&&(0,f.jsx)(j,{tours:E})]})})})}))}}]);
//# sourceMappingURL=32.545e6888.chunk.js.map