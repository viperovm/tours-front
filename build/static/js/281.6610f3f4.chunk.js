"use strict";(self.webpackChunkyour_app=self.webpackChunkyour_app||[]).push([[281],{8537:function(e,n,t){t(2791);n.Z=t.p+"static/media/trash.6d1ed156c7e05e39c7b941f18eef2919.svg"},1727:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(885),r=t(2791);var i=t.p+"static/media/message.7098f1183e37ea2fd88604e4b79d0bd8.svg";var l=t.p+"static/media/padlock5.73596860cc7faf8dcb74f6f36df2dddf.svg";var s=t.p+"static/media/user.098d856a1aa6b8cf2f14d43c2ade863f.svg",c=t(3239),o=t(4554),u=t(184),d=function(e){var n=e.disabled,t=void 0!==n&&n,d=e.label,p=e.action,f=e.name,m=e.type,v=void 0===m?"text":m,h=e.value,x=e.required,_=e.icon,b=e.error,g=void 0===b?null:b,j=e.margin,Z=void 0===j?"0":j,k=(e.tour,e.spinner),y=void 0!==k&&k,N=e.clear,S=void 0!==N&&N,w=e.blur_action,C=(0,r.useState)(""),E=(0,a.Z)(C,2),A=E[0],D=E[1],F=(0,r.useState)([]),q=(0,a.Z)(F,2),B=q[0],O=q[1];(0,r.useEffect)((function(){S&&D("")}),[S]),(0,r.useEffect)((function(){if(g&&g.detail){var e=[];e.push(g.detail),O(e)}else g&&"re_password"===f?O(g.password):g&&"phone"===f?O(g.phone):g&&g[f]&&O(g[f])}),[g,f]),(0,r.useEffect)((function(){h&&D(h)}),[h]);var R=function(e){O([]),D(e.target.value),p(f,e.target.value)};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"with-errors-wrapper",style:{margin:Z},id:f,children:["date"===v&&(0,u.jsx)("input",{required:x,className:"custom-input-style ".concat((null===B||void 0===B?void 0:B.length)>0?"error":"ok"),placeholder:d,name:f,value:A,type:v,onChange:R,max:"2999-12-31",onBlur:w}),"date"!==v&&(0,u.jsxs)(u.Fragment,{children:[_&&!y&&(0,u.jsxs)("div",{className:"with-icon",children:[(0,u.jsx)("input",{required:x,className:"custom-input-style ".concat((null===B||void 0===B?void 0:B.length)>0?"error":"ok"),placeholder:d,name:f,value:A,type:v,onChange:R}),(0,u.jsx)("div",{className:"with-icon-image",children:(0,u.jsx)("img",{src:"email"===_?i:"user"===_?s:l,alt:"icon"})})]}),!_&&!y&&(0,u.jsx)("div",{children:(0,u.jsx)("input",{required:x,className:"custom-input-style ".concat((null===B||void 0===B?void 0:B.length)>0?"error":"ok"),placeholder:d,name:f,value:A,type:v,onChange:R,disabled:t})}),y&&(0,u.jsx)(o.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,u.jsx)(c.Z,{})})]}),(0,u.jsx)("div",{className:"errors-list",children:(0,u.jsx)("ul",{children:Array.isArray(B)&&B.length>0&&B.map((function(e,n){return(0,u.jsx)("li",{children:e},n)}))})})]})})}},4790:function(e,n,t){var a=t(885),r=t(2791),i=t(3239),l=t(4554),s=t(8537),c=t(7258),o=t(7880),u=t(364),d=t(8324),p=t(7746),f=t(184);n.Z=(0,u.$j)(null,{deleteTourImage:c.zr,deleteTourWallpaper:c.Ao,delete_avatar:o.TQ,deletePropertyImage:c.N8,delete_docs:o.DG})((function(e){var n=e.tour,t=e.action,c=e.name,o=e.value,u=void 0===o?[]:o,m=e.max,v=e.required,h=e.position,x=e.deleteTourImage,_=e.deleteTourWallpaper,b=e.delete_avatar,g=e.deletePropertyImage,j=e.delete_action,Z=e.error,k=e.accept_all,y=void 0!==k&&k,N=e.delete_docs,S=(0,r.useState)([]),w=(0,a.Z)(S,2),C=(w[0],w[1]),E=(0,r.useState)(!1),A=(0,a.Z)(E,2),D=(A[0],A[1],(0,r.useState)(!0)),F=(0,a.Z)(D,2),q=F[0],B=F[1],O=(0,r.useState)(null),R=(0,a.Z)(O,2),T=R[0],I=R[1],U=(0,r.useState)([]),$=(0,a.Z)(U,2),M=($[0],$[1]),P=(0,r.useState)(!1),z=(0,a.Z)(P,2),G=z[0],H=z[1],L=(0,r.useState)(!1),W=(0,a.Z)(L,2),Y=W[0],K=W[1],Q=(0,r.useState)(!1),X=(0,a.Z)(Q,2),J=X[0],V=X[1],ee=(0,r.useState)(""),ne=(0,a.Z)(ee,2),te=ne[0],ae=ne[1],re=(0,r.useState)([]),ie=(0,a.Z)(re,2),le=ie[0],se=ie[1];(0,r.useEffect)((function(){K(!0);var e=setTimeout((function(){return K(!1)}),500);return function(){return clearTimeout(e)}}),[]),(0,r.useEffect)((function(){J&&V(!1)}),[J]),(0,r.useEffect)((function(){Y&&u&&u.length>0&&K(!1)}),[Y,u]);var ce=(0,r.useRef)(null);(0,r.useEffect)((function(){if(Z&&(0,p.Z)(Z)&&Z.detail){var e=[];e.push(Z.detail),se(e)}else Z&&Z[c]&&se(Z[c])}),[Z,c]),(0,r.useEffect)((function(){m&&u.length>=m&&B(!1)}),[m,u]);var oe=function(e){ae(e),H(!0)},ue=function(){ce.current.click()};return(0,f.jsxs)(f.Fragment,{children:[G&&(0,f.jsx)(d.Z,{status:"danger",title:"\u0423\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?",text:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u0430 \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430.",button:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",button2:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",action:function(){return H(!1)},second_action:function(){return V(!0),"wallpaper"===c&&(_(n.id),M(null),B(!0)),"avatar"===c&&(b(),M(null),B(!0)),"day_photo"===c&&(j(te),M(null),B(!0)),"gallery"===h&&x(te,n.id),"accommodation"===h&&g(te,n.id),"user_docs"===c&&N(te.id),void H(!1)}}),!J&&(0,f.jsxs)("div",{className:"fake-file-input-component",id:c,children:[(0,f.jsx)("input",{name:c,required:v,type:"file",onChange:function(e){K(!0),e.target.files[0]&&(se([]),C(e.target.files[0]),t(e.target.files[0]))},ref:ce,accept:y?"*":"image/png, image/jpeg, image/jpg"}),(0,f.jsxs)("div",{className:"fake-file-input-wrapper",children:[(0,f.jsxs)("div",{className:"fake-file-input file-input ".concat(q?"file-input-active":"file-input-inactive"),onClick:ue,children:[(0,f.jsx)("div",{className:"camera-image"}),(0,f.jsx)("div",{className:"fake-file-input-text",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0444\u043e\u0442\u043e"})]}),Y&&(0,f.jsx)("div",{className:"fake-file-input loader-spinner",onClick:ue,children:(0,f.jsx)(l.Z,{sx:{display:"flex"},children:(0,f.jsx)(i.Z,{})})}),le&&Array.isArray(le)&&le.length>0&&(0,f.jsx)("div",{className:"errors-list",children:(0,f.jsx)("ul",{children:le&&Array.isArray(le)&&le.length>0&&le.map((function(e,n){return(0,f.jsx)("li",{children:e},n)}))})}),"user_docs"===c&&u&&u.length>0&&u.map((function(e,n){return(0,f.jsx)(r.Fragment,{children:(0,f.jsxs)("div",{className:"fake-file-input file-input",children:[(0,f.jsx)("a",{href:e.file,target:"_blank",download:!0,style:{height:"100%",width:"100%",position:"absolute"}},n),(0,f.jsx)("div",{className:"tour-menu-dots",style:{padding:"5px",position:"absolute",top:15,right:15,cursor:"pointer"},onMouseOver:function(){return I(n)},onMouseOut:function(){return I(null)},onClick:function(){return oe(e)},children:(0,f.jsx)("img",{src:s.Z,alt:"menu"})}),n===T&&(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:"tour-menu",style:{position:"absolute",top:20,right:40,border:"1px solid rgba(0, 0, 0, 0.1)",boxShadow:"0px 10px 20px rgba(0, 0, 0, 0.05)",borderRadius:8,backgroundColor:"#fff"},children:(0,f.jsx)("div",{className:"tour-item-top",style:{padding:10,lineHeight:"15px",textAlign:"right"},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})}),(0,f.jsx)("div",{className:"doc-image"}),(0,f.jsx)("div",{className:"fake-file-input-text",children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u043a\u0430\u0447\u0430\u0442\u044c"})]},n)},n)})),"day_photo"===c&&u.length>0&&u.map((function(e,n){return(0,f.jsx)(r.Fragment,{children:(0,f.jsxs)("div",{className:"fake-file-input image-container",style:{backgroundImage:"url("+e.tmb_image+")",position:"relative"},children:[(0,f.jsx)("div",{className:"tour-menu-dots",style:{padding:"5px",position:"absolute",top:15,right:15,cursor:"pointer"},onMouseOver:function(){return I(n)},onMouseOut:function(){return I(null)},onClick:function(){return oe(e)},children:(0,f.jsx)("img",{src:s.Z,alt:"menu"})}),n===T&&(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:"tour-menu",style:{position:"absolute",top:20,right:40,border:"1px solid rgba(0, 0, 0, 0.1)",boxShadow:"0px 10px 20px rgba(0, 0, 0, 0.05)",borderRadius:8,backgroundColor:"#fff"},children:(0,f.jsx)("div",{className:"tour-item-top",style:{padding:10,lineHeight:"15px",textAlign:"right"},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})})]},n)},n)})),"user_docs"!==c&&"day_photo"!==c&&u.length>0&&u.map((function(e,n){return(0,f.jsx)(r.Fragment,{children:(0,f.jsxs)("div",{className:"fake-file-input image-container",style:{backgroundImage:"url("+e.tmb_image+")",position:"relative"},children:[(0,f.jsx)("div",{className:"tour-menu-dots",style:{padding:"5px",position:"absolute",top:15,right:15,cursor:"pointer"},onMouseOver:function(){return I(n)},onMouseOut:function(){return I(null)},onClick:function(){return oe(e)},children:(0,f.jsx)("img",{src:s.Z,alt:"menu"})}),n===T&&(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:"tour-menu",style:{position:"absolute",top:20,right:40,border:"1px solid rgba(0, 0, 0, 0.1)",boxShadow:"0px 10px 20px rgba(0, 0, 0, 0.05)",borderRadius:8,backgroundColor:"#fff"},children:(0,f.jsx)("div",{className:"tour-item-top",style:{padding:10,lineHeight:"15px",textAlign:"right"},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})})]},n)},n)}))]})]}),J&&(0,f.jsx)("div",{className:"fake-file-input loader-spinner",onClick:ue,children:(0,f.jsx)(l.Z,{sx:{display:"flex"},children:(0,f.jsx)(i.Z,{})})})]})}))},559:function(e,n,t){var a=t(4942),r=t(1413),i=t(885),l=t(2791),s=t(1540),c=t(7746),o=t(364),u=t(7258),d=t(184);n.Z=(0,o.$j)((function(e){return{tour:e.tours.current_tour}}),{tourToServerUpdate:u.SR})((function(e){var n=e.action,t=e.name,o=(e.label,e.val),u=e.options,p=e.multiple,f=e.margin,m=e.basic_type,v=e.required,h=e.tour,x=e.tourToServerUpdate,_=e.labelField,b=void 0===_?"name":_,g=e.currency,j=e.prc,Z=void 0!==j&&j,k=e.error,y=void 0===k?{}:k,N=(0,l.useState)([]),S=(0,i.Z)(N,2),w=S[0],C=S[1],E=(0,l.useState)([]),A=(0,i.Z)(E,2),D=A[0],F=A[1],q=(0,l.useState)([]),B=(0,i.Z)(q,2),O=B[0],R=B[1];(0,l.useEffect)((function(){if(y&&y.detail){var e=[];e.push(y.detail),R(e)}else y&&"re_password"===t?R(y.password):y&&y[t]&&R(y[t])}),[y,t]),(0,l.useEffect)((function(){Z&&F(g?[{id:0,name:g},{id:1,name:"%"}]:[{id:1,name:"%"}])}),[Z,g]),(0,l.useEffect)((function(){if(Z&&D){var e=[];!0===o?e.push(D[1]):!1===o&&e.push(D[0]),C(e)}}),[Z,D,o]);var T=function(e){R([]),n(t,p?e:e[0])};return(0,l.useEffect)((function(){m?F(u.filter((function(e){return e.id!==m.id}))):Z||F(u)}),[u,m,Z,o]),(0,l.useEffect)((function(){if(Array.isArray(o)&&o.length>0&&m)C(o.filter((function(e){return e.id!==m.id})));else if(Array.isArray(o)&&o.length>0)C(o);else if(o&&!Array.isArray(o)&&(0,c.Z)(o)){var e=[];e.push(o),C(e)}}),[o,m]),(0,d.jsxs)("div",{id:t,children:[!Z&&(0,d.jsx)(s.ZP,{required:v,style:{margin:f,padding:"10px 20px"},className:"custom-select-style ".concat(O.length>0?"error":"ok"),placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",searchable:!0,searchBy:"name",multi:p,options:D,onChange:T,values:w,labelField:b,valueField:"id",create:!p&&!0,onCreateNew:function(e){x((0,r.Z)((0,r.Z)({},h),{},(0,a.Z)({},t,e.name)),h.id)},createNewLabel:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c {search}"}),Z&&g&&D.length>0&&(0,d.jsx)(s.ZP,{required:v,style:{margin:f,padding:"10px 20px"},className:"custom-select-style ".concat(O.length>0?"error":"ok"),placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",options:D,onChange:T,values:w,labelField:"name",valueField:"id"}),(0,d.jsx)("div",{className:"errors-list",children:(0,d.jsx)("ul",{children:Array.isArray(O)&&O.length>0&&O.map((function(e,n){return(0,d.jsx)("li",{children:e},n)}))})})]})}))},8059:function(e,n,t){t(2791);var a=t(184);n.Z=function(e){var n=e.children,t=e.ratio,r=void 0===t?"1-2":t,i=e.comment,l=e.full,s=e.tour,c=e.undertext,o=void 0!==c&&c;return(0,a.jsxs)("div",{className:"tour-input-wrapper",children:[(0,a.jsx)("div",{className:"double-input-input ratio-".concat(r," ").concat(l?"full":""),children:n&&n.map((function(e,n){return(0,a.jsxs)("div",{className:"double-input-item",children:[o?"":(0,a.jsx)("div",{className:"input-label",children:"".concat(e.props.label," ").concat(s&&s.required_fields&&s.required_fields.includes(e.props.name)?"*":"")}),e]},n)}))}),(0,a.jsx)("div",{className:"tour-input-comment",children:(0,a.jsx)("div",{className:"tour-input-comment-content",children:i})})]})}},3498:function(e,n,t){t(2791);var a=t(184);n.Z=function(e){var n=e.children,t=e.label,r=e.comment,i=e.margin,l=void 0===i?"0 30px 0 0":i,s=e.full,c=e.width,o=e.padding,u=e.name,d=e.tour;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"single-input-label",children:"".concat(t," ").concat(d&&d.required_fields&&d.required_fields.includes(u)?"*":"")}),(0,a.jsxs)("div",{className:"tour-input-wrapper",children:[(0,a.jsx)("div",{className:"single-input-input ".concat(s?"full":""),style:{margin:l,width:c,padding:o},children:n}),(0,a.jsx)("div",{className:"tour-input-comment",children:(0,a.jsx)("div",{className:"tour-input-comment-content",children:r})})]})]})}},7746:function(e,n){n.Z=function(e){return!(e&&0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype)}},7714:function(e,n,t){var a=t(885),r=t(2791),i=t(2753),l=t(1642),s=t(7571),c=t(9741),o=t(364),u=t(5039),d=t(7880),p=t(7258),f=t(184);n.Z=(0,o.$j)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user,status:e.auth.status,page:e.auth.page,tour:e.tours.current_tour}}),{load_user:d.L4,openSecondaryMenu:p.E3})((function(e){var n=e.title,t=e.subtitle,o=e.menu_item,p=e.isAuthenticated,m=e.children,v=e.tour,h=e.openSecondaryMenu;if(!p)return(0,f.jsx)(s.l_,{to:"/login"});v.secondary&&h(!1);var x=(0,r.useState)(""),_=(0,a.Z)(x,2);_[0],_[1];return(0,r.useEffect)((function(){(0,d.L4)()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(l.ZP,{children:[(0,f.jsx)("title",{children:n}),(0,f.jsx)("meta",{name:"description",content:""}),(0,f.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,f.jsxs)(i.Z,{page:o,children:[(0,f.jsx)("section",{children:(0,f.jsx)("div",{className:"wrapper",children:(0,f.jsxs)("div",{className:"breadcrumbs breadcrumbs_margin",children:[(0,f.jsx)("span",{children:(0,f.jsx)(c.rU,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})," - ",(0,f.jsx)("span",{children:(0,f.jsx)(c.rU,{to:"/account",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),t&&" - ",t&&(0,f.jsx)("span",{children:(0,f.jsx)(c.rU,{to:"/account/".concat(o),children:t})}),n&&" - ",(0,f.jsx)("span",{style:{textDecoration:"none",pointerEvents:"none"},children:n})]})})}),(0,f.jsx)("section",{children:(0,f.jsx)("div",{className:"wrapper",children:(0,f.jsxs)("div",{className:"account_block",children:[(0,f.jsx)(u.Z,{menu_item:o}),m]})})})]})]})}))},4119:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a=t(885),r=t(2791),i=(t(559),t(6933)),l=t(7714),s=t(364),c=t(7880),o=t(7258),u=t(3498),d=t(1413),p=t(4942),f=t(8059),m=t(1727),v=t(5198),h=t(184),x=(0,s.$j)((function(e){return{user:e.auth.user,countries:e.tours.countries,status:e.auth.status,languages:e.tours.languages,bik_data:e.profile.bik_data,recipient_inn_data:e.profile.recipient_inn_data}}),{updateCardData:c.$i,getBikData:c.sl,resetBikData:c.Gw,update_local_user:c.cC,clear_errors:c.BS,getCountries:o.ox})((function(e){var n,t,i,l,s,c,o,u,x=e.user,_=e.getBikData,b=e.resetBikData,g=e.update_local_user,j=e.error,Z=e.clear_errors,k=(e.getCountries,e.countries,e.empty_action),y=(0,r.useState)(null),N=(0,a.Z)(y,2),S=N[0],w=N[1],C=(0,r.useState)(!1),E=(0,a.Z)(C,2),A=E[0],D=E[1],F=(0,r.useState)(!1),q=(0,a.Z)(F,2),B=q[0],O=q[1];(0,r.useEffect)((function(){return function(){return Z()}}),[]),(0,r.useEffect)((function(){S&&Object.values(S).some((function(e){return null!==e&&""!==e}))?k(!1):k(!0)}),[S]),(0,r.useEffect)((function(){(0,v.ez)(x)&&(0,v.ez)(x.debet_card)&&D(!1)}),[x]);var R=function(e,n){w((function(t){return(0,d.Z)((0,d.Z)({},t),{},(0,p.Z)({},e,n))}));var t=x.debet_card;g((0,d.Z)((0,d.Z)({},x),{},{debet_card:(0,d.Z)((0,d.Z)({},t),{},(0,p.Z)({},e,n))}))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(f.Z,{full:!0,margin:0,children:[(0,h.jsx)(m.Z,{label:"\u0411\u0418\u041a \u0411\u0430\u043d\u043a\u0430",action:function(e,n){var t;(D(!0),9===n.length)?(O(!1),_((t={},(0,p.Z)(t,e,n),(0,p.Z)(t,"payment_type","debet_card"),t),"card")):9!==n.length&&(O(!0),b("card"))},name:"bank_bik",value:null===x||void 0===x||null===(n=x.debet_card)||void 0===n?void 0:n.debet_card_bank_bik,error:j}),(0,h.jsx)(m.Z,{clear:B,spinner:A,label:"\u0411\u0430\u043d\u043a-\u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c",action:R,name:"bank_name",value:null===x||void 0===x||null===(t=x.debet_card)||void 0===t?void 0:t.debet_card_bank_name,error:j})]}),(0,h.jsxs)(f.Z,{full:!0,margin:0,children:[(0,h.jsx)(m.Z,{clear:B,spinner:A,label:"\u041a\u041f\u041f \u0411\u0430\u043d\u043a\u0430",action:R,name:"bank_kpp",value:null===x||void 0===x||null===(i=x.debet_card)||void 0===i?void 0:i.debet_card_bank_kpp,error:j}),(0,h.jsx)(m.Z,{clear:B,spinner:A,label:"\u0418\u041d\u041d \u0411\u0430\u043d\u043a\u0430",action:R,name:"bank_inn",value:null===x||void 0===x||null===(l=x.debet_card)||void 0===l?void 0:l.debet_card_bank_inn,error:j})]}),(0,h.jsxs)(f.Z,{full:!0,margin:0,children:[(0,h.jsx)(m.Z,{clear:B,spinner:A,label:"\u041a\u043e\u0440\u0440. \u0421\u0447\u0435\u0442",action:R,name:"bank_account",value:null===x||void 0===x||null===(s=x.debet_card)||void 0===s?void 0:s.debet_card_bank_account,error:j}),(0,h.jsx)(m.Z,{clear:B,spinner:A,label:"\u0420\u0430\u0441\u0441\u0447\u0435\u0442\u043d\u044b\u0439 \u0421\u0447\u0435\u0442",action:R,name:"recipient_account",value:null===x||void 0===x||null===(c=x.debet_card)||void 0===c?void 0:c.debet_card_recipient_account,error:j})]}),(0,h.jsxs)(f.Z,{full:!0,margin:0,children:[(0,h.jsx)(m.Z,{label:"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c (\u0424\u0418\u041e)",action:R,name:"recipient_full_name",value:null===x||void 0===x||null===(o=x.debet_card)||void 0===o?void 0:o.debet_card_recipient_full_name,error:j}),(0,h.jsx)(m.Z,{label:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u0430",action:R,name:"bank_payment_reason",value:null===x||void 0===x||null===(u=x.debet_card)||void 0===u?void 0:u.debet_card_payment_reason,error:j})]})]})})),_=t(4790),b=(0,s.$j)((function(e){return{user:e.auth.user,countries:e.tours.countries,status:e.auth.status,languages:e.tours.languages,bik_data:e.profile.bik_data,recipient_inn_data:e.profile.recipient_inn_data}}),{updateCardData:c.$i,getBikData:c.sl,resetBikData:c.Gw,update_local_user:c.cC,getInnData:c.XR,resetInnData:c.Rr,clear_errors:c.BS,getCountries:o.ox,upload_docs:c.GK})((function(e){var n,t,i,l,s,c,o,x,b,g,j,Z,k,y,N=e.user,S=e.getBikData,w=e.resetBikData,C=e.update_local_user,E=e.getInnData,A=e.resetInnData,D=e.error,F=e.clear_errors,q=(e.getCountries,e.countries,e.upload_docs),B=e.empty_action,O=(0,r.useState)(null),R=(0,a.Z)(O,2),T=R[0],I=R[1],U=(0,r.useState)(!1),$=(0,a.Z)(U,2),M=$[0],P=$[1],z=(0,r.useState)(!1),G=(0,a.Z)(z,2),H=G[0],L=G[1],W=(0,r.useState)(!1),Y=(0,a.Z)(W,2),K=Y[0],Q=Y[1],X=(0,r.useState)(!1),J=(0,a.Z)(X,2),V=(J[0],J[1]);(0,r.useEffect)((function(){return function(){return F()}}),[]),(0,r.useEffect)((function(){T&&Object.values(T).some((function(e){return null!==e&&""!==e}))?B(!1):B(!0)}),[T]),(0,r.useEffect)((function(){(0,v.ez)(N)&&(0,v.ez)(N.bank_transaction)&&(P(!1),L(!1))}),[N,M,H]);var ee=function(e,n){L(!0),10===n.length||12===n.length?(V(!1),E((0,p.Z)({},e,n))):10===n.length&&12===n.length||(V(!0),A())},ne=function(e,n){I((function(t){return(0,d.Z)((0,d.Z)({},t),{},(0,p.Z)({},e,n))}));var t=N.bank_transaction;C((0,d.Z)((0,d.Z)({},N),{},{bank_transaction:(0,d.Z)((0,d.Z)({},t),{},(0,p.Z)({},e,n))}))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(f.Z,{full:!0,margin:0,children:[(0,h.jsx)(m.Z,{label:"\u0418\u041d\u041d \u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f",action:ee,name:"recipient_inn",value:null===N||void 0===N||null===(n=N.bank_transaction)||void 0===n?void 0:n.transaction_recipient_inn,error:D}),(0,h.jsx)(m.Z,{error:D,clear:K,spinner:M,label:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u042e\u0440. \u043b\u0438\u0446\u0430",action:ne,name:"recipient_name",value:null===N||void 0===N||null===(t=N.bank_transaction)||void 0===t?void 0:t.transaction_recipient_name})]}),(0,h.jsx)(u.Z,{label:"\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441",width:"100%",margin:"0",children:(0,h.jsx)(m.Z,{error:D,label:"\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441",action:ne,name:"recipient_legal_address",value:null===N||void 0===N||null===(i=N.bank_transaction)||void 0===i?void 0:i.transaction_recipient_legal_address})}),(0,h.jsx)(u.Z,{label:"\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441",width:"100%",margin:"0",children:(0,h.jsx)(m.Z,{error:D,label:"\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441",action:ne,name:"recipient_real_address",value:null===N||void 0===N||null===(l=N.bank_transaction)||void 0===l?void 0:l.transaction_recipient_real_address})}),(0,h.jsxs)(f.Z,{full:!0,margin:0,children:[(0,h.jsx)(m.Z,{clear:K,spinner:M,label:"\u041e\u0413\u0420\u041d (\u041e\u0413\u0420\u041d\u0418\u041f)",action:ne,name:"recipient_ogrn",value:null===N||void 0===N||null===(s=N.bank_transaction)||void 0===s?void 0:s.transaction_recipient_ogrn,error:D}),(0,h.jsx)(m.Z,{label:"\u0411\u0418\u041a \u0411\u0430\u043d\u043a\u0430",action:function(e,n){var t;(P(!0),9===n.length)?(Q(!1),S((t={},(0,p.Z)(t,e,n),(0,p.Z)(t,"payment_type","transaction"),t),"transaction")):9!==n.length&&(Q(!0),w("transaction"))},name:"bank_bik",value:null===N||void 0===N||null===(c=N.bank_transaction)||void 0===c?void 0:c.transaction_bank_bik,error:D})]}),(0,h.jsxs)(f.Z,{full:!0,margin:0,children:[(0,h.jsx)(m.Z,{clear:K,spinner:M,label:"\u0418\u041d\u041d \u0411\u0430\u043d\u043a\u0430",action:ne,name:"bank_inn",value:null===N||void 0===N||null===(o=N.bank_transaction)||void 0===o?void 0:o.transaction_bank_inn,error:D}),(0,h.jsx)(m.Z,{clear:K,spinner:M,label:"\u0411\u0430\u043d\u043a-\u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c",action:ne,name:"bank_name",value:null===N||void 0===N||null===(x=N.bank_transaction)||void 0===x?void 0:x.transaction_bank_name,error:D})]}),(0,h.jsxs)(f.Z,{full:!0,margin:0,children:[(0,h.jsx)(m.Z,{clear:K,spinner:M,label:"\u041a\u041f\u041f \u0411\u0430\u043d\u043a\u0430",action:ne,name:"bank_kpp",value:null===N||void 0===N||null===(b=N.bank_transaction)||void 0===b?void 0:b.transaction_bank_kpp,error:D}),(0,h.jsx)(m.Z,{label:"\u0418\u041d\u041d \u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f",action:ee,name:"recipient_inn",value:null===N||void 0===N||null===(g=N.bank_transaction)||void 0===g?void 0:g.transaction_recipient_inn,error:D})]}),(0,h.jsxs)(f.Z,{full:!0,margin:0,children:[(0,h.jsx)(m.Z,{clear:K,spinner:M,label:"\u041a\u043e\u0440\u0440. \u0421\u0447\u0435\u0442",action:ne,name:"bank_account",value:null===N||void 0===N||null===(j=N.bank_transaction)||void 0===j?void 0:j.transaction_bank_account,error:D}),(0,h.jsx)(m.Z,{label:"\u0420/\u0421 \u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f",action:ne,name:"recipient_account",value:null===N||void 0===N||null===(Z=N.bank_transaction)||void 0===Z?void 0:Z.transaction_recipient_account,error:D})]}),(0,h.jsx)(u.Z,{full:!0,margin:0,label:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u0430",children:(0,h.jsx)(m.Z,{label:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u0430",action:ne,name:"bank_payment_reason",value:null===N||void 0===N||null===(k=N.bank_transaction)||void 0===k?void 0:k.transaction_payment_reason,error:D})}),(0,h.jsx)(u.Z,{label:"\u0421\u043a\u0430\u043d\u044b \u0443\u0441\u0442\u0430\u0432\u043d\u044b\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 (\u0418\u041d\u041d, \u041e\u0413\u0420\u041d)",width:"70%",margin:"0",children:(0,h.jsx)(_.Z,{accept_all:!0,error:D,label:"\u0421\u043a\u0430\u043d\u044b \u0443\u0441\u0442\u0430\u0432\u043d\u044b\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 (\u0418\u041d\u041d, \u041e\u0413\u0420\u041d)",action:function(e){q(e)},name:"user_docs",value:null===N||void 0===N||null===(y=N.bank_transaction)||void 0===y?void 0:y.transaction_scans})})]})})),g=t(8324),j=[{id:1,available:!0,title:"\u0414\u0435\u0431\u0435\u0442\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430",subtitle:"(\u0412\u0430\u043b\u044e\u0442\u0430: RUR)",list:["\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0422\u041e\u041b\u042c\u041a\u041e \u0434\u043b\u044f \u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u043e\u0432 \u0420\u0424 \u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u043e\u043c \u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d\u0430 \u0420\u0424.","\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u043e\u0439\u0442\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u0421\u041c\u042d\u0412 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430 \u0447\u0435\u0440\u0435\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u201c\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430\u044f \u0441\u0434\u0435\u043b\u043a\u0430\u201d.","\u041f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u0443 \u0447\u0435\u0440\u0435\u0437 48 \u0447\u0430\u0441\u043e\u0432 \u043f\u043e\u0441\u043b\u0435 \u043e\u043f\u043b\u0430\u0442\u044b \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c.","\u0412 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435 \u0438 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u0447\u043d\u044b\u0435 \u0434\u043d\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0430.","\u0411\u0435\u0437 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u0431\u043e\u0440\u043e\u0432."]},{id:2,available:!0,title:"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434",subtitle:"(\u0412\u0430\u043b\u044e\u0442\u0430: RUR)",list:["\u0412\u044b\u043f\u043b\u0430\u0442\u0430 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0440\u0430\u0441\u0447\u0435\u0442\u043d\u044b\u0439 \u0441\u0447\u0435\u0442 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043b\u0438\u0446\u0430, \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0432 \u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u043e\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438.","\u041f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u0443 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 8 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0445 \u0434\u043d\u0435\u0439 \u043f\u043e\u0441\u043b\u0435 \u043e\u043f\u043b\u0430\u0442\u044b \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c.","\u0412 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435 \u0438 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u0447\u043d\u044b\u0435 \u0434\u043d\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0430.","\u0411\u0435\u0437 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u0431\u043e\u0440\u043e\u0432."]},{id:3,available:!1,title:"\u041c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 Payoneer",subtitle:"(\u0412\u0430\u043b\u044e\u0442\u0430: USD/EUR) ",list:["\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430"]}],Z=(0,s.$j)((function(e){return{user:e.auth.user,error:e.auth.error,status:e.auth.status,update_status:e.auth.update_status,countries:e.tours.countries,bankCardData:e.profile.bank_card_data,bankTransactionData:e.profile.bank_transaction_data,recipient_inn_data:e.profile.recipient_inn_data}}),{setPage:c.YA,update_user:c.sC,updateCardData:c.$i,updateTransactionData:c.fc,getCountries:o.ox,clear_errors:c.BS,clear_update_status:c.un,update_local_user:c.cC})((function(e){e.update_local_user;var n=e.user,t=e.status,s=e.updateCardData,o=e.updateTransactionData,u=e.getCountries,d=(e.countries,e.clear_errors,e.error),p=e.update_status,f=e.clear_update_status,m=(0,r.useState)(1),_=(0,a.Z)(m,2),Z=_[0],k=_[1],y=(0,r.useState)(!1),N=(0,a.Z)(y,2),S=N[0],w=N[1],C=(0,r.useState)(!1),E=(0,a.Z)(C,2),A=E[0],D=E[1],F=(0,r.useState)(!0),q=(0,a.Z)(F,2),B=q[0],O=q[1];(0,r.useEffect)((function(){n&&n.debet_card&&(0,v.ez)(n.debet_card)?k(1):n&&n.bank_transaction&&(0,v.ez)(n.bank_transaction)?k(2):k(1)}),[]),(0,r.useEffect)((function(){return(0,c.YA)("profile"),u(),function(){return w(!1)}}),[]),(0,r.useEffect)((function(){p>=200&&p<300&&w(!0)}),[p]);var R=function(e){var n=e.title,t=e.subtitle,a=e.list,r=e.id,l=e.available;return(0,h.jsxs)("div",{className:"card-body ".concat(Z===r?"active":""),children:[(0,h.jsxs)("div",{className:"card-data",children:[(0,h.jsx)("div",{className:"card-title",children:n}),(0,h.jsx)("div",{className:"card-subtitle",children:t}),(0,h.jsx)("div",{className:"card-list",children:(0,h.jsx)("ul",{children:a.map((function(e,n){return(0,h.jsx)("li",{children:e},n)}))})})]}),(0,h.jsx)(i.Z,{text:"".concat(Z===r?"\u0412\u044b\u0431\u0440\u0430\u043d\u043e":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"),width:"100%",color:"".concat(Z===r?"button-success":"button-primary"),active:l,action:function(){return function(e){B?k(e):D(!0)}(r)}})]})};return(0,h.jsx)(l.Z,{title:"\u0420\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b",menu_item:"props",children:(0,h.jsxs)(h.Fragment,{children:[S&&(0,h.jsx)(g.Z,{status:"ok",title:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b",text:"",button:"\u041e\u043a",action:function(){w(!1),f()}}),A&&(0,h.jsx)(g.Z,{status:"cancel",title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435, \u043b\u0438\u0431\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u0435 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u0434\u0440\u0443\u0433\u043e\u0439 \u0440\u0430\u0437\u0434\u0435\u043b!",button:"\u041e\u043a",action:function(){D(!1)}}),"experts"===t&&(0,h.jsxs)("main",{children:[(0,h.jsx)("div",{className:"global-h2-heading",children:(0,h.jsx)("h2",{children:"\u0420\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b"})}),(0,h.jsx)("div",{className:"tours-list-add-button-wrapper",children:(0,h.jsxs)("div",{className:"tours-list-add-button-text",children:["\u041a\u043e\u043c\u0438\u0441\u0441\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c, \u0434\u043b\u044f \u0432\u0430\u0441 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0435\u0433\u043e: ",n.commission,"%"]})}),(0,h.jsx)("div",{className:"team-subtitle",children:"\u041c\u0435\u0442\u043e\u0434 \u0432\u044b\u043f\u043b\u0430\u0442\u044b"}),(0,h.jsx)("div",{className:"cards-wrapper",children:j.map((function(e,n){return(0,h.jsx)(R,{id:e.id,list:e.list,subtitle:e.subtitle,title:e.title,available:e.available},n)}))}),1===Z&&(0,h.jsx)(x,{error:d,empty_action:O}),2===Z&&(0,h.jsx)(b,{error:d,empty_action:O}),(0,h.jsx)(i.Z,{text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",width:"50%",action:function(){O(!0),1===Z?s(n.id,n.debet_card):2===Z&&o(n.id,n.bank_transaction)}})]})]})})}))}}]);
//# sourceMappingURL=281.6610f3f4.chunk.js.map