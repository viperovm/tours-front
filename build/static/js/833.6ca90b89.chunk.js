"use strict";(self.webpackChunkyour_app=self.webpackChunkyour_app||[]).push([[833],{8537:function(e,t,a){a(2791);t.Z=a.p+"static/media/trash.6d1ed156c7e05e39c7b941f18eef2919.svg"},679:function(e,t,a){var n=a(885),r=a(2791),i=a(3239),s=a(4554),l=a(8537),u=a(364),c=a(7258),o=a(7880),d=a(7448),m=a(8324),f=a(7746),p=a(184);t.Z=(0,u.$j)((function(e){return{tour:e.tours.current_tour}}),{deleteTourWallpaper:c.Ao,delete_avatar:o.TQ,deleteTeamMemberAvatar:d.nR,deleteActivityImage:c.ar})((function(e){var t=e.action,a=e.name,u=e.value,c=e.max,o=e.tour,d=e.deleteTourWallpaper,x=e.delete_avatar,h=e.required,v=e.type,g=e.deleteTeamMemberAvatar,j=e.member,b=e.error,Z=void 0===b?{}:b,_=e.activity_id,y=void 0===_?null:_,N=e.deleteActivityImage,k=(0,r.useState)([]),S=(0,n.Z)(k,2),A=(S[0],S[1]),w=(0,r.useState)(!1),E=(0,n.Z)(w,2),M=(E[0],E[1]),T=(0,r.useState)(!0),C=(0,n.Z)(T,2),q=C[0],F=C[1],I=(0,r.useState)(!1),L=(0,n.Z)(I,2),O=L[0],R=L[1],U=(0,r.useState)(null),$=(0,n.Z)(U,2),z=$[0],H=$[1],P=(0,r.useState)(!1),W=(0,n.Z)(P,2),B=W[0],D=W[1],K=(0,r.useState)([]),Q=(0,n.Z)(K,2),V=Q[0],G=Q[1],J=(0,r.useState)(!1),X=(0,n.Z)(J,2),Y=X[0],ee=X[1],te=(0,r.useState)(!1),ae=(0,n.Z)(te,2),ne=ae[0],re=ae[1],ie=(0,r.useRef)(null);(0,r.useEffect)((function(){ee(!0);var e=setTimeout((function(){return ee(!1)}),500);return function(){return clearTimeout(e)}}),[]),(0,r.useEffect)((function(){ne&&re(!1)}),[ne]),(0,r.useEffect)((function(){Y&&u&&u.length>0&&ee(!1)}),[Y,u]),(0,r.useEffect)((function(){if((0,f.Z)(Z)&&Z.detail){var e=[];e.push(Z.detail),G(e)}else Z[a]&&G(Z[a])}),[Z,a]),(0,r.useEffect)((function(){if(u)if(1===c)H(u);else if(z){var e=z;e.push(u),H(e)}else{var t=[];t.push(u),H(t)}}),[u]),(0,r.useEffect)((function(){c&&z&&z.length>=c&&F(!1)}),[c,z]);var se=function(){ie.current.click()};return(0,p.jsxs)(p.Fragment,{children:[B&&(0,p.jsx)(m.Z,{status:"danger",title:"\u0423\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?",text:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u0430 \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430.",button:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",button2:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",action:function(){return D(!1)},second_action:function(){return"wallpaper"===a&&(d(o.id),H(null),F(!0)),"avatar"===a&&"team_member"!==v&&(x(),H(null),F(!0)),"avatar"===a&&"team_member"===v&&j&&(g(j.id),H(null),F(!0)),y&&(N(y),H(null),F(!0)),D(!1),void re(!0)}}),!ne&&(0,p.jsxs)("div",{className:"fake-file-input-component",id:a,children:[(0,p.jsx)("input",{required:h,name:a,type:"file",onChange:function(e){ee(!0),e.target.files[0]&&(G([]),A(e.target.files[0]),t(e.target.files[0]),M(!1))},ref:ie,accept:"image/png, image/jpeg, image/jpg"}),(0,p.jsxs)("div",{className:"fake-file-input-wrapper",children:[(0,p.jsxs)("div",{className:"fake-file-input file-input ".concat(q?"file-input-active":"file-input-inactive"," ").concat(Array.isArray(V)&&V.length>0?"error":"ok"),onClick:se,children:[(0,p.jsx)("div",{className:"camera-image"}),(0,p.jsx)("div",{className:"fake-file-input-text",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0444\u043e\u0442\u043e"})]}),Y&&(0,p.jsx)("div",{className:"fake-file-input loader-spinner",onClick:se,children:(0,p.jsx)(s.Z,{sx:{display:"flex"},children:(0,p.jsx)(i.Z,{})})}),V.length>0&&(0,p.jsx)("div",{className:"errors-list",children:(0,p.jsx)("ul",{children:Array.isArray(V)&&V.length>0&&V.map((function(e,t){return(0,p.jsx)("li",{children:e},t)}))})}),1!==c&&z&&z.map((function(e,t){return(0,p.jsx)(r.Fragment,{children:(0,p.jsxs)("div",{className:"fake-file-input image-container",style:{backgroundImage:"url("+e+")",position:"relative"},children:[(0,p.jsx)("div",{className:"tour-menu-dots",style:{padding:"5px",position:"absolute",top:15,right:15,cursor:"pointer"},onMouseOver:function(){return R(!0)},onMouseOut:function(){return R(!1)},onClick:function(){return D(!0)},children:(0,p.jsx)("img",{src:l.Z,alt:"menu"})}),O&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:"tour-menu",style:{position:"absolute",top:20,right:40,border:"1px solid rgba(0, 0, 0, 0.1)",boxShadow:"0px 10px 20px rgba(0, 0, 0, 0.05)",borderRadius:8,backgroundColor:"#fff"},children:(0,p.jsx)("div",{className:"tour-item-top",style:{padding:10,lineHeight:"15px",textAlign:"right"},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})})]},t)},t)})),1===c&&z&&(0,p.jsxs)("div",{className:"fake-file-input image-container",style:{backgroundImage:"url("+z+")",position:"relative"},children:[(0,p.jsx)("div",{className:"tour-menu-dots",style:{padding:"5px",position:"absolute",top:15,right:15,cursor:"pointer"},onMouseOver:function(){return R(!0)},onMouseOut:function(){return R(!1)},onClick:function(){return D(!0)},children:(0,p.jsx)("img",{src:l.Z,alt:"menu"})}),O&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:"tour-menu",style:{position:"absolute",top:20,right:40,border:"1px solid rgba(0, 0, 0, 0.1)",boxShadow:"0px 10px 20px rgba(0, 0, 0, 0.05)",borderRadius:8,backgroundColor:"#fff"},children:(0,p.jsx)("div",{className:"tour-item-top",style:{padding:10,lineHeight:"15px",textAlign:"right"},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})})]})]})]}),ne&&(0,p.jsx)("div",{className:"fake-file-input loader-spinner",onClick:se,children:(0,p.jsx)(s.Z,{sx:{display:"flex"},children:(0,p.jsx)(i.Z,{})})})]})}))},6257:function(e,t,a){var n=a(885),r=a(2791),i=a(184);t.Z=function(e){var t=e.label,a=e.action,s=e.name,l=e.value,u=e.rows,c=void 0===u?5:u,o=e.required,d=e.error,m=void 0===d?{}:d,f=(0,r.useState)(""),p=(0,n.Z)(f,2),x=p[0],h=p[1],v=(0,r.useState)([]),g=(0,n.Z)(v,2),j=g[0],b=g[1];(0,r.useEffect)((function(){if(m&&m.detail){var e=[];e.push(m.detail),b(e)}else m&&"re_password"===s?b(m.password):m&&m[s]&&b(m[s])}),[m,s]),(0,r.useEffect)((function(){l&&h(l)}),[l]);return(0,i.jsxs)("div",{className:"with-errors-wrapper",id:s,children:[(0,i.jsx)("textarea",{required:o,className:"custom-textarea-style ".concat(j.length>0?"error":"ok"),placeholder:t,name:s,value:x,onChange:function(e){b([]),h(e.target.value),a(s,e.target.value)},rows:c}),(0,i.jsx)("div",{className:"errors-list",children:(0,i.jsx)("ul",{children:Array.isArray(j)&&j.length>0&&j.map((function(e,t){return(0,i.jsx)("li",{children:e},t)}))})})]})}},8059:function(e,t,a){a(2791);var n=a(184);t.Z=function(e){var t=e.children,a=e.ratio,r=void 0===a?"1-2":a,i=e.comment,s=e.full,l=e.tour,u=e.undertext,c=void 0!==u&&u;return(0,n.jsxs)("div",{className:"tour-input-wrapper",children:[(0,n.jsx)("div",{className:"double-input-input ratio-".concat(r," ").concat(s?"full":""),children:t&&t.map((function(e,t){return(0,n.jsxs)("div",{className:"double-input-item",children:[c?"":(0,n.jsx)("div",{className:"input-label",children:"".concat(e.props.label," ").concat(l&&l.required_fields&&l.required_fields.includes(e.props.name)?"*":"")}),e]},t)}))}),(0,n.jsx)("div",{className:"tour-input-comment",children:(0,n.jsx)("div",{className:"tour-input-comment-content",children:i})})]})}},7714:function(e,t,a){var n=a(885),r=a(2791),i=a(132),s=a(1642),l=a(7571),u=a(9741),c=a(364),o=a(5039),d=a(7880),m=a(7258),f=a(184);t.Z=(0,c.$j)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user,status:e.auth.status,page:e.auth.page,tour:e.tours.current_tour}}),{load_user:d.L4,openSecondaryMenu:m.E3})((function(e){var t=e.title,a=e.subtitle,c=e.menu_item,m=e.isAuthenticated,p=e.children,x=e.tour,h=e.openSecondaryMenu;if(!m)return(0,f.jsx)(l.l_,{to:"/login"});x.secondary&&h(!1);var v=(0,r.useState)(""),g=(0,n.Z)(v,2);g[0],g[1];return(0,r.useEffect)((function(){(0,d.L4)()}),[]),(0,f.jsx)(i.Z,{children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(s.ZP,{children:[(0,f.jsx)("title",{children:t}),(0,f.jsx)("meta",{name:"description",content:""}),(0,f.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,f.jsx)("section",{children:(0,f.jsx)("div",{className:"wrapper",children:(0,f.jsxs)("div",{className:"breadcrumbs breadcrumbs_margin",children:[(0,f.jsx)("span",{children:(0,f.jsx)(u.rU,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})," - ",(0,f.jsx)("span",{children:(0,f.jsx)(u.rU,{to:"/account",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),a&&" - ",a&&(0,f.jsx)("span",{children:(0,f.jsx)(u.rU,{to:"/account/".concat(c),children:a})}),t&&" - ",(0,f.jsx)("span",{style:{textDecoration:"none",pointerEvents:"none"},children:t})]})})}),(0,f.jsx)("section",{children:(0,f.jsx)("div",{className:"wrapper",children:(0,f.jsxs)("div",{className:"account_block",children:[(0,f.jsx)(o.Z,{menu_item:c}),p]})})})]})})}))},4908:function(e,t,a){a.r(t);var n=a(4942),r=a(1413),i=a(885),s=a(2791),l=a(7571),u=(a(4301),a(5807)),c=(a(559),a(6257)),o=a(6933),d=a(7714),m=a(364),f=a(7258),p=a(3498),x=a(679),h=a(8059),v=a(7448),g=a(3239),j=(a(5198),a(7880)),b=a(184);t.default=(0,m.$j)((function(e){return{user:e.auth.user,status:e.auth.status,languages:e.tours.languages,member:e.profile.member}}),{getLanguages:f.Vb,updateTeamMember:v.zZ,addTeamMemberAvatar:v.dK,getTeamMember:v.PB,email_confirm_request:j.yz,clear_confirm_status:j.au})((function(e){e.user;var t=e.status,a=e.getLanguages,m=(e.languages,e.member),f=e.updateTeamMember,v=e.addTeamMemberAvatar,j=e.getTeamMember,Z=(e.email_confirm_request,e.clear_confirm_status,e.match),_=(0,l.k6)(),y=Z.params.id;(0,s.useEffect)((function(){j(y)}),[]),(0,s.useEffect)((function(){a()}),[]);var N=(0,s.useState)({}),k=(0,i.Z)(N,2),S=k[0],A=k[1],w=(0,s.useState)(!1),E=(0,i.Z)(w,2),M=E[0],T=E[1],C=(0,s.useState)(!1),q=(0,i.Z)(C,2);q[0],q[1];(0,s.useEffect)((function(){m&&A((0,r.Z)((0,r.Z)({},S),{},{first_name:m.first_name,midle_name:m.midle_name,last_name:m.last_name,email:m.email,languages:m.languages,about:m.about}))}),[m]),(0,s.useEffect)((function(){M&&m&&m.avatar&&T(!1)}),[M,m]);var F=function(e,t){A((0,r.Z)((0,r.Z)({},S),{},(0,n.Z)({},e,t)))};return(0,b.jsx)(d.Z,{subtitle:"\u041c\u043e\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0447\u043b\u0435\u043d\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",menu_item:"team",children:(0,b.jsxs)(b.Fragment,{children:["experts"===t&&!M&&(0,b.jsxs)("main",{children:[(0,b.jsx)("div",{className:"global-h2-heading",children:(0,b.jsx)("h2",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0447\u043b\u0435\u043d\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"})}),(0,b.jsx)(p.Z,{full:!0,margin:0,label:"\u0410\u0432\u0430\u0442\u0430\u0440",children:(0,b.jsx)(x.Z,{name:"avatar",action:function(e){T(!0),v(e,m.id)},value:m&&m.avatar,max:1,type:"team_member",member:m})}),(0,b.jsx)(p.Z,{full:!0,margin:0,label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",children:(0,b.jsx)(u.Z,{label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",name:"last_name",action:F,value:S.last_name})}),(0,b.jsxs)(h.Z,{full:!0,margin:0,children:[(0,b.jsx)(u.Z,{label:"\u0418\u043c\u044f",name:"first_name",action:F,value:S.first_name}),(0,b.jsx)(u.Z,{label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",name:"midle_name",action:F,value:S.midle_name})]}),(0,b.jsxs)(h.Z,{full:!0,children:[(0,b.jsx)(u.Z,{label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",action:F,name:"phone",value:S.phone}),(0,b.jsx)(u.Z,{label:"Email",action:F,name:"email",value:S.email})]}),(0,b.jsx)(p.Z,{full:!0,margin:0,label:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0433\u0438\u0434\u0435*",children:(0,b.jsx)(c.Z,{name:"about",label:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0433\u0438\u0434\u0435",action:F,value:S.about})}),(0,b.jsx)(o.Z,{text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",width:"50%",action:function(){f((0,r.Z)({},S),m.id),_.push("/account/team")}})]}),M&&(0,b.jsx)(g.Z,{})]})})}))},4301:function(){}}]);
//# sourceMappingURL=833.6ca90b89.chunk.js.map