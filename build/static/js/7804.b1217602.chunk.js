"use strict";(self.webpackChunkyour_app=self.webpackChunkyour_app||[]).push([[7804],{4311:function(e,t,n){n(2791);t.Z=n.p+"static/media/menu-dots.615dcc243479fa7dd0431ff9882656f2.svg"},4047:function(e,t,n){n.d(t,{Z:function(){return l}});var s=n(885),a=n(2791),r=(n(3498),n(184)),i=n(364),c=n(7258),o=n(1727),u=(n(559),n(6933)),l=(0,i.$j)(null,{clearCurrentTour:c.bL,setEditing:c.D_,copyTour:c.Tt})((function(e){e.title;var t=e.copyTour,n=e.tour_id,i=e.button_name,l=e.action,d=(0,a.useState)(!1),m=(0,s.Z)(d,2),h=m[0],x=m[1],p=(0,a.useState)(""),f=(0,s.Z)(p,2),j=f[0],b=f[1],v=(0,a.useState)(""),g=(0,s.Z)(v,2);g[0],g[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{onClick:function(){x(!0)},style:{cursor:"pointer"},children:i}),(0,r.jsx)("div",{className:"modal-wrapper ".concat(h&&"modal-active"),children:(0,r.jsxs)("div",{className:"modal-body",children:[(0,r.jsxs)("div",{className:"modal-header",children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u043e\u0432\u043e\u0433\u043e \u0442\u0443\u0440\u0430.",(0,r.jsx)("div",{onClick:function(){x(!1)},className:"modal-close-button"})]}),(0,r.jsx)("div",{className:"modal-content",children:(0,r.jsx)("div",{className:"my-tours-input-section",children:(0,r.jsx)("div",{className:"my-tours-input-full-modal",children:(0,r.jsx)(o.Z,{action:function(e,t){b(t)},name:"start_date",label:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430 \u0442\u0443\u0440\u0430",value:j,type:"date"})})})}),(0,r.jsx)("div",{className:"modal-footer",children:(0,r.jsx)(u.Z,{text:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0443\u0440",action:function(){t(n,{start_date:j}),(0,c.bL)(),(0,c.D_)(!1),x(!1),l()}})})]})})]})}))},7714:function(e,t,n){var s=n(885),a=n(2791),r=n(2753),i=n(1642),c=n(7571),o=n(9741),u=n(364),l=n(5039),d=n(7880),m=n(7258),h=n(184);t.Z=(0,u.$j)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user,status:e.auth.status,page:e.auth.page,tour:e.tours.current_tour}}),{load_user:d.L4,openSecondaryMenu:m.E3})((function(e){var t=e.title,n=e.subtitle,u=e.menu_item,m=e.isAuthenticated,x=e.children,p=e.tour,f=e.openSecondaryMenu;if(!m)return(0,h.jsx)(c.l_,{to:"/login"});p.secondary&&f(!1);var j=(0,a.useState)(""),b=(0,s.Z)(j,2);b[0],b[1];return(0,a.useEffect)((function(){(0,d.L4)()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(i.ZP,{children:[(0,h.jsx)("title",{children:t}),(0,h.jsx)("meta",{name:"description",content:""}),(0,h.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,h.jsxs)(r.Z,{page:u,children:[(0,h.jsx)("section",{children:(0,h.jsx)("div",{className:"wrapper",children:(0,h.jsxs)("div",{className:"breadcrumbs breadcrumbs_margin",children:[(0,h.jsx)("span",{children:(0,h.jsx)(o.rU,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})," - ",(0,h.jsx)("span",{children:(0,h.jsx)(o.rU,{to:"/account",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),n&&" - ",n&&(0,h.jsx)("span",{children:(0,h.jsx)(o.rU,{to:"/account/".concat(u),children:n})}),t&&" - ",(0,h.jsx)("span",{style:{textDecoration:"none",pointerEvents:"none"},children:t})]})})}),(0,h.jsx)("section",{children:(0,h.jsx)("div",{className:"wrapper",children:(0,h.jsxs)("div",{className:"account_block",children:[(0,h.jsx)(l.Z,{menu_item:u}),x]})})})]})]})}))},3881:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var s=n(5861),a=(n(4942),n(1413)),r=n(885),i=n(7757),c=n.n(i),o=n(2791),u=(n(4301),n(7571)),l=n(7714),d=n(364),m=n(7880),h=n(7258),x=n(3239),p=n(4554),f=n(4311),j=(n(4047),n(7448)),b=n(8324),v=n(184),g=(0,d.$j)(null,{getTeamMember:j.PB,deleteTeamMember:j.MH})((function(e){var t=e.member,n=e.deleteTeamMember,s=(e.getTeamMember,(0,u.k6)()),a=(0,o.useRef)(),i=(0,o.useState)(!1),c=(0,r.Z)(i,2),l=c[0],d=c[1],m=(0,o.useState)(!1),h=(0,r.Z)(m,2),x=h[0],p=h[1],j=(0,o.useState)(!1),g=(0,r.Z)(j,2),N=g[0],y=g[1],Z=(0,o.useState)(""),k=(0,r.Z)(Z,2),_=k[0],S=k[1],T=(0,o.useState)(!1),C=(0,r.Z)(T,2),w=C[0],M=C[1];(0,o.useEffect)((function(){t&&t.about&&t.about.length>120?(p(!0),S(t.about.substring(0,120)+"...")):S(t.about)})),(0,o.useEffect)((function(){return document.addEventListener("mousedown",E),function(){return document.removeEventListener("mousedown",E)}}));var E=function(e){a.current.contains(e.target)||d(!1)},A=function(){s.push("/account/team/".concat(t.id,"/edit"))};return(0,v.jsxs)(v.Fragment,{children:[w&&(0,v.jsx)(b.Z,{status:"danger",title:"\u0423\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?",text:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u0430 \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430.",button:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",button2:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",action:function(){return M(!1)},second_action:function(){n(t.id),M(!1)}}),(0,v.jsxs)("div",{className:"team-card",children:[(0,v.jsxs)("div",{className:"team-image-wrapper",children:[(0,v.jsx)("div",{onClick:A,className:"team-image",style:{backgroundImage:"url("+t.avatar+")"}}),(0,v.jsx)("div",{className:"tour-menu-dots",style:{padding:"5px",position:"absolute",top:0,right:0,cursor:"pointer"},onClick:function(){d(!0)},children:(0,v.jsx)("img",{src:f.Z,alt:"menu"})}),(0,v.jsxs)("div",{className:"tour-menu",ref:a,style:{position:"absolute",top:20,right:25,border:"1px solid rgba(0, 0, 0, 0.1)",boxShadow:"0px 10px 20px rgba(0, 0, 0, 0.05)",borderRadius:8,backgroundColor:"#fff",display:l?"block":"none"},children:[(0,v.jsx)("div",{className:"tour-item-top",style:{padding:10,borderBottom:"1px solid rgba(0, 0, 0, 0.1)",lineHeight:"15px",textAlign:"right",cursor:"pointer"},onClick:A,children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),(0,v.jsx)("div",{className:"tour-item-bottom",style:{padding:10,lineHeight:"15px",textAlign:"right",cursor:"pointer"},onClick:function(){return M(!0)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]}),(0,v.jsxs)("div",{className:"team-data",children:[(0,v.jsx)("div",{className:"team-name",onClick:A,style:{cursor:"pointer"},children:t.full_name}),(0,v.jsx)("div",{className:"team-text",children:N?t.about:_}),x&&(0,v.jsx)("div",{className:"team-more",onClick:function(){return y(!N)},children:N?"\u0441\u043a\u0440\u044b\u0442\u044c":"\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435..."})]})]})]})})),N=(0,d.$j)((function(e){return{members:e.profile.members,user:e.auth.user}}),{getTeamMembers:j.YY})((function(e){var t=e.members,n=e.getTeamMembers;e.user;(0,o.useEffect)((function(){n()}),[]);var s=(0,o.useState)(!1),a=(0,r.Z)(s,2),i=a[0],c=a[1];(0,o.useEffect)((function(){t.length>0&&i&&c(!1)}),[t,i]);var u=function(){c(!0)};return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"tours-wrapper",children:[!i&&t.map((function(e,t){if(!e.is_expert)return(0,v.jsx)(g,{member:e,action:u},t)})),i&&(0,v.jsx)(p.Z,{sx:{display:"flex"},children:(0,v.jsx)(x.Z,{})})]})})})),y=n(4569),Z=n.n(y),k=(0,d.$j)((function(e){return{user:e.auth.user,status:e.auth.status,languages:e.tours.languages,member:e.profile.member}}),{addTeamMember:j.Lt,clearTeamMember:j.Om})((function(e){var t=e.user,n=e.status,i=(e.addTeamMember,e.members,e.member,e.clearTeamMember),d=(0,u.k6)();(0,o.useEffect)((function(){(0,m.YA)("team"),(0,h.Vb)(),i()}),[]);var x=(0,o.useState)({}),p=(0,r.Z)(x,2),f=p[0],j=p[1];(0,o.useEffect)((function(){t&&j((0,a.Z)((0,a.Z)({},f),{},{country:t.country,city:t.city,languages:t.languages,visited_countries:t.visited_countries,about:t.about}))}),[t]);var b=function(){var e=(0,s.Z)(c().mark((function e(){var t,n,s,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},n={},s=JSON.stringify(n),e.prev=3,e.next=6,Z().post("".concat("https://traveler.market","/api/teammembers/"),s,t);case 6:a=e.sent,d.push("/account/team/".concat(a.data.id,"/edit")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();return(0,v.jsx)(l.Z,{title:"\u041c\u043e\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430",menu_item:"team",children:(0,v.jsx)(v.Fragment,{children:"experts"===n&&(0,v.jsxs)("main",{children:[(0,v.jsx)("div",{className:"global-h2-heading",children:(0,v.jsx)("h2",{children:"\u041c\u043e\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430"})}),(0,v.jsxs)("div",{className:"tours-list-add-button-wrapper",children:[(0,v.jsx)("div",{className:"tours-list-add-button-text",children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0447\u043b\u0435\u043d\u043e\u0432 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u043e\u0432\u043e\u0434\u044f\u0442 \u0442\u0443\u0440\u044b \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0432\u0430\u043c\u0438."}),(0,v.jsx)("div",{className:"tours-list-add-button-button blue",children:(0,v.jsx)("div",{onClick:b,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]}),(0,v.jsx)("div",{className:"team-subtitle",children:"\u0427\u043b\u0435\u043d\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),(0,v.jsx)(N,{})]})})})})),_=k},4301:function(){}}]);
//# sourceMappingURL=7804.b1217602.chunk.js.map