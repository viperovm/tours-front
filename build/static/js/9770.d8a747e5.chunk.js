"use strict";(self.webpackChunkyour_app=self.webpackChunkyour_app||[]).push([[9770],{8537:function(e,t,a){a(2791);t.Z=a.p+"static/media/trash.6d1ed156c7e05e39c7b941f18eef2919.svg"},8925:function(e,t,a){a(2791);var n=a(184);t.Z=function(e){var t=e.children,a=e.label;return(0,n.jsxs)("div",{className:"profile-input-section",children:[(0,n.jsx)("div",{className:"input-label",children:a}),(0,n.jsx)("div",{className:"profile-input-full",children:t})]})}},679:function(e,t,a){var n=a(885),r=a(2791),i=a(3239),s=a(4554),l=a(8537),u=a(364),c=a(7258),o=a(7880),d=a(7448),f=a(8324),p=a(7746),m=a(184);t.Z=(0,u.$j)((function(e){return{tour:e.tours.current_tour}}),{deleteTourWallpaper:c.Ao,delete_avatar:o.TQ,deleteTeamMemberAvatar:d.nR,deleteActivityImage:c.ar})((function(e){var t=e.action,a=e.name,u=e.value,c=e.max,o=e.tour,d=e.deleteTourWallpaper,x=e.delete_avatar,h=e.required,g=e.type,v=e.deleteTeamMemberAvatar,j=e.member,b=e.error,Z=void 0===b?{}:b,N=e.activity_id,y=void 0===N?null:N,k=e.deleteActivityImage,_=(0,r.useState)([]),S=(0,n.Z)(_,2),A=(S[0],S[1]),E=(0,r.useState)(!1),w=(0,n.Z)(E,2),C=(w[0],w[1]),T=(0,r.useState)(!0),M=(0,n.Z)(T,2),q=M[0],F=M[1],R=(0,r.useState)(!1),I=(0,n.Z)(R,2),L=I[0],O=I[1],W=(0,r.useState)(null),$=(0,n.Z)(W,2),D=$[0],H=$[1],K=(0,r.useState)(!1),P=(0,n.Z)(K,2),Q=P[0],U=P[1],B=(0,r.useState)([]),V=(0,n.Z)(B,2),Y=V[0],z=V[1],G=(0,r.useState)(!1),J=(0,n.Z)(G,2),X=J[0],ee=J[1],te=(0,r.useState)(!1),ae=(0,n.Z)(te,2),ne=ae[0],re=ae[1],ie=(0,r.useRef)(null);(0,r.useEffect)((function(){ee(!0);var e=setTimeout((function(){return ee(!1)}),500);return function(){return clearTimeout(e)}}),[]),(0,r.useEffect)((function(){ne&&re(!1)}),[ne]),(0,r.useEffect)((function(){X&&u&&u.length>0&&ee(!1)}),[X,u]),(0,r.useEffect)((function(){if((0,p.Z)(Z)&&Z.detail){var e=[];e.push(Z.detail),z(e)}else Z[a]&&z(Z[a])}),[Z,a]),(0,r.useEffect)((function(){if(u)if(1===c)H(u);else if(D){var e=D;e.push(u),H(e)}else{var t=[];t.push(u),H(t)}}),[u]),(0,r.useEffect)((function(){c&&D&&D.length>=c&&F(!1)}),[c,D]);var se=function(){ie.current.click()};return(0,m.jsxs)(m.Fragment,{children:[Q&&(0,m.jsx)(f.Z,{status:"danger",title:"\u0423\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?",text:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u0430 \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430.",button:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",button2:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",action:function(){return U(!1)},second_action:function(){return"wallpaper"===a&&(d(o.id),H(null),F(!0)),"avatar"===a&&"team_member"!==g&&(x(),H(null),F(!0)),"avatar"===a&&"team_member"===g&&j&&(v(j.id),H(null),F(!0)),y&&(k(y),H(null),F(!0)),U(!1),void re(!0)}}),!ne&&(0,m.jsxs)("div",{className:"fake-file-input-component",id:a,children:[(0,m.jsx)("input",{required:h,name:a,type:"file",onChange:function(e){ee(!0),e.target.files[0]&&(z([]),A(e.target.files[0]),t(e.target.files[0]),C(!1))},ref:ie,accept:"image/png, image/jpeg, image/jpg"}),(0,m.jsxs)("div",{className:"fake-file-input-wrapper",children:[(0,m.jsxs)("div",{className:"fake-file-input file-input ".concat(q?"file-input-active":"file-input-inactive"," ").concat(Array.isArray(Y)&&Y.length>0?"error":"ok"),onClick:se,children:[(0,m.jsx)("div",{className:"camera-image"}),(0,m.jsx)("div",{className:"fake-file-input-text",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0444\u043e\u0442\u043e"})]}),X&&(0,m.jsx)("div",{className:"fake-file-input loader-spinner",onClick:se,children:(0,m.jsx)(s.Z,{sx:{display:"flex"},children:(0,m.jsx)(i.Z,{})})}),Y.length>0&&(0,m.jsx)("div",{className:"errors-list",children:(0,m.jsx)("ul",{children:Array.isArray(Y)&&Y.length>0&&Y.map((function(e,t){return(0,m.jsx)("li",{children:e},t)}))})}),1!==c&&D&&D.map((function(e,t){return(0,m.jsx)(r.Fragment,{children:(0,m.jsxs)("div",{className:"fake-file-input image-container",style:{backgroundImage:"url("+e+")",position:"relative"},children:[(0,m.jsx)("div",{className:"tour-menu-dots",style:{padding:"5px",position:"absolute",top:15,right:15,cursor:"pointer"},onMouseOver:function(){return O(!0)},onMouseOut:function(){return O(!1)},onClick:function(){return U(!0)},children:(0,m.jsx)("img",{src:l.Z,alt:"menu"})}),L&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"tour-menu",style:{position:"absolute",top:20,right:40,border:"1px solid rgba(0, 0, 0, 0.1)",boxShadow:"0px 10px 20px rgba(0, 0, 0, 0.05)",borderRadius:8,backgroundColor:"#fff"},children:(0,m.jsx)("div",{className:"tour-item-top",style:{padding:10,lineHeight:"15px",textAlign:"right"},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})})]},t)},t)})),1===c&&D&&(0,m.jsxs)("div",{className:"fake-file-input image-container",style:{backgroundImage:"url("+D+")",position:"relative"},children:[(0,m.jsx)("div",{className:"tour-menu-dots",style:{padding:"5px",position:"absolute",top:15,right:15,cursor:"pointer"},onMouseOver:function(){return O(!0)},onMouseOut:function(){return O(!1)},onClick:function(){return U(!0)},children:(0,m.jsx)("img",{src:l.Z,alt:"menu"})}),L&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"tour-menu",style:{position:"absolute",top:20,right:40,border:"1px solid rgba(0, 0, 0, 0.1)",boxShadow:"0px 10px 20px rgba(0, 0, 0, 0.05)",borderRadius:8,backgroundColor:"#fff"},children:(0,m.jsx)("div",{className:"tour-item-top",style:{padding:10,lineHeight:"15px",textAlign:"right"},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})})]})]})]}),ne&&(0,m.jsx)("div",{className:"fake-file-input loader-spinner",onClick:se,children:(0,m.jsx)(s.Z,{sx:{display:"flex"},children:(0,m.jsx)(i.Z,{})})})]})}))},6257:function(e,t,a){var n=a(885),r=a(2791),i=a(184);t.Z=function(e){var t=e.label,a=e.action,s=e.name,l=e.value,u=e.rows,c=void 0===u?5:u,o=e.required,d=e.error,f=void 0===d?{}:d,p=(0,r.useState)(""),m=(0,n.Z)(p,2),x=m[0],h=m[1],g=(0,r.useState)([]),v=(0,n.Z)(g,2),j=v[0],b=v[1];(0,r.useEffect)((function(){if(f&&f.detail){var e=[];e.push(f.detail),b(e)}else f&&"re_password"===s?b(f.password):f&&f[s]&&b(f[s])}),[f,s]),(0,r.useEffect)((function(){l&&h(l)}),[l]);return(0,i.jsxs)("div",{className:"with-errors-wrapper",id:s,children:[(0,i.jsx)("textarea",{required:o,className:"custom-textarea-style ".concat(j.length>0?"error":"ok"),placeholder:t,name:s,value:x,onChange:function(e){b([]),h(e.target.value),a(s,e.target.value)},rows:c}),(0,i.jsx)("div",{className:"errors-list",children:(0,i.jsx)("ul",{children:Array.isArray(j)&&j.length>0&&j.map((function(e,t){return(0,i.jsx)("li",{children:e},t)}))})})]})}},651:function(e,t,a){var n=a(885),r=a(2791),i=a(3239),s=a(7746),l=a(184);t.Z=function(e){var t=e.action,u=e.name,c=e.value,o=(e.required,e.error),d=void 0===o?{}:o,f=(0,r.useRef)(),p=(0,r.useState)(!1),m=(0,n.Z)(p,2),x=m[0],h=m[1],g=f.current||{},v=g.CKEditor,j=g.ClassicEditor,b=(0,r.useState)([]),Z=(0,n.Z)(b,2),N=Z[0],y=Z[1];(0,r.useEffect)((function(){if((0,s.Z)(d)&&d.detail){var e=[];e.push(d.detail),y(e)}else(0,s.Z)(d)&&"re_password"===u?y(d.password):d[u]&&y(d[u])}),[d,u]),(0,r.useEffect)((function(){f.current={CKEditor:a(7551).CKEditor,ClassicEditor:a(2443)},h(!0)}),[]);var k=(0,r.useState)(""),_=(0,n.Z)(k,2),S=_[0],A=_[1];return(0,r.useEffect)((function(){c&&A(c)}),[c]),x?(0,l.jsxs)("div",{className:"ckeditor-textarea-wrapper with-errors-wrapper ".concat(N.length>0?"error":"ok"),id:u,children:[(0,l.jsx)(v,{editor:j,data:S,value:S,config:{toolbar:["bold","italic","blockQuote","|","numberedList","bulletedList","|","undo","redo"]},onChange:function(e,a){y([]);var n=a.getData();t(u,n)},onBlur:function(e,a){var n=a.getData();t(u,"<p></p>"===n?"":n)}}),(0,l.jsx)("div",{className:"errors-list",children:(0,l.jsx)("ul",{children:Array.isArray(N)&&N.length>0&&N.map((function(e,t){return(0,l.jsx)("li",{children:e},t)}))})})]}):(0,l.jsx)("div",{children:(0,l.jsx)(i.Z,{})})}},8059:function(e,t,a){a(2791);var n=a(184);t.Z=function(e){var t=e.children,a=e.ratio,r=void 0===a?"1-2":a,i=e.comment,s=e.full,l=e.tour,u=e.undertext,c=void 0!==u&&u;return(0,n.jsxs)("div",{className:"tour-input-wrapper",children:[(0,n.jsx)("div",{className:"double-input-input ratio-".concat(r," ").concat(s?"full":""),children:t&&t.map((function(e,t){return(0,n.jsxs)("div",{className:"double-input-item",children:[c?"":(0,n.jsx)("div",{className:"input-label",children:"".concat(e.props.label," ").concat(l&&l.required_fields&&l.required_fields.includes(e.props.name)?"*":"")}),e]},t)}))}),(0,n.jsx)("div",{className:"tour-input-comment",children:(0,n.jsx)("div",{className:"tour-input-comment-content",children:i})})]})}},7714:function(e,t,a){var n=a(885),r=a(2791),i=a(2753),s=a(1642),l=a(7571),u=a(9741),c=a(364),o=a(5039),d=a(7880),f=a(7258),p=a(184);t.Z=(0,c.$j)((function(e){return{language:e.languages.language,isAuthenticated:e.auth.isAuthenticated,user:e.auth.user,status:e.auth.status,page:e.auth.page,tour:e.tours.current_tour}}),{load_user:d.L4,openSecondaryMenu:f.E3})((function(e){var t=e.language,a=e.title,c=e.subtitle,f=e.menu_item,m=e.isAuthenticated,x=e.children,h=e.tour,g=e.openSecondaryMenu;if(!m)return(0,p.jsx)(l.l_,{to:"/".concat(t,"/login")});h.secondary&&g(!1);var v=(0,r.useState)(""),j=(0,n.Z)(v,2);j[0],j[1];return(0,r.useEffect)((function(){(0,d.L4)()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(s.ZP,{children:[(0,p.jsx)("title",{children:a}),(0,p.jsx)("meta",{name:"description",content:""}),(0,p.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,p.jsxs)(i.Z,{page:f,children:[(0,p.jsx)("section",{children:(0,p.jsx)("div",{className:"wrapper",children:(0,p.jsxs)("div",{className:"breadcrumbs breadcrumbs_margin",children:[(0,p.jsx)("span",{children:(0,p.jsx)(u.rU,{to:"/".concat(t),children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})," - ",(0,p.jsx)("span",{children:(0,p.jsx)(u.rU,{to:"/".concat(t,"/account"),children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),c&&" - ",c&&(0,p.jsx)("span",{children:(0,p.jsx)(u.rU,{to:"/".concat(t,"/account/").concat(f),children:c})}),a&&" - ",(0,p.jsx)("span",{style:{textDecoration:"none",pointerEvents:"none"},children:a})]})})}),(0,p.jsx)("section",{children:(0,p.jsx)("div",{className:"wrapper",children:(0,p.jsxs)("div",{className:"account_block",children:[(0,p.jsx)(o.Z,{menu_item:f}),x]})})})]})]})}))},2726:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var n=a(4942),r=a(1413),i=a(885),s=a(2791),l=a(7714),u=a(364),c=a(7880),o=a(7258),d=a(7571),f=a(1727),p=a(3498),m=(a(8925),a(6257),a(6933)),x=a(559),h=a(651),g=a(8324),v=a(8059),j=(a(679),a(3239)),b=a(4554),Z=a(8537),N=a(7448),y=a(7746),k=a(184),_=(0,u.$j)((function(e){return{tour:e.tours.current_tour}}),{deleteTourWallpaper:o.Ao,delete_avatar:c.TQ,deleteTeamMemberAvatar:N.nR,deleteActivityImage:o.ar})((function(e){var t=e.action,a=e.name,n=e.value,r=e.max,l=e.tour,u=e.deleteTourWallpaper,c=e.delete_avatar,o=e.required,d=e.type,f=e.deleteTeamMemberAvatar,p=e.member,m=e.error,x=void 0===m?{}:m,h=e.activity_id,v=void 0===h?null:h,N=e.deleteActivityImage,_=(0,s.useState)([]),S=(0,i.Z)(_,2),A=(S[0],S[1]),E=(0,s.useState)(!1),w=(0,i.Z)(E,2),C=(w[0],w[1]),T=(0,s.useState)(!0),M=(0,i.Z)(T,2),q=M[0],F=M[1],R=(0,s.useState)(!1),I=(0,i.Z)(R,2),L=I[0],O=I[1],W=(0,s.useState)(null),$=(0,i.Z)(W,2),D=$[0],H=$[1],K=(0,s.useState)(!1),P=(0,i.Z)(K,2),Q=P[0],U=P[1],B=(0,s.useState)([]),V=(0,i.Z)(B,2),Y=V[0],z=V[1],G=(0,s.useState)(!1),J=(0,i.Z)(G,2),X=J[0],ee=J[1],te=(0,s.useState)(!1),ae=(0,i.Z)(te,2),ne=ae[0],re=ae[1],ie=(0,s.useRef)(null);(0,s.useEffect)((function(){ee(!0);var e=setTimeout((function(){return ee(!1)}),500);return function(){return clearTimeout(e)}}),[]),(0,s.useEffect)((function(){ne&&re(!1)}),[ne]),(0,s.useEffect)((function(){X&&n&&n.length>0&&ee(!1)}),[X,n]),(0,s.useEffect)((function(){if((0,y.Z)(x)&&x.detail){var e=[];e.push(x.detail),z(e)}else x[a]&&z(x[a])}),[x,a]),(0,s.useEffect)((function(){if(n)if(1===r)H(n);else if(D){var e=D;e.push(n),H(e)}else{var t=[];t.push(n),H(t)}}),[n]),(0,s.useEffect)((function(){r&&D&&D.length>=r&&F(!1)}),[r,D]);var se=function(){ie.current.click()};return(0,k.jsxs)(k.Fragment,{children:[Q&&(0,k.jsx)(g.Z,{status:"danger",title:"\u0423\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?",text:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u0430 \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430.",button:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",button2:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",action:function(){return U(!1)},second_action:function(){return"wallpaper"===a&&(u(l.id),H(null),F(!0)),"avatar"===a&&"team_member"!==d&&(c(),H(null),F(!0)),"avatar"===a&&"team_member"===d&&p&&(f(p.id),H(null),F(!0)),v&&(N(v),H(null),F(!0)),U(!1),void re(!0)}}),!ne&&(0,k.jsxs)("div",{className:"fake-file-input-component",id:a,children:[(0,k.jsx)("input",{required:o,name:a,type:"file",onChange:function(e){ee(!0),e.target.files[0]&&(z([]),A(e.target.files[0]),t(e.target.files[0]),C(!1))},ref:ie,accept:"image/png, image/jpeg, image/jpg"}),(0,k.jsxs)("div",{className:"fake-file-input-wrapper",children:[!D&&(0,k.jsxs)("div",{className:"fake-file-input avatar file-input ".concat(q?"file-input-active":"file-input-inactive"," ").concat(Array.isArray(Y)&&Y.length>0?"error":"ok"),onClick:se,children:[(0,k.jsx)("div",{className:"camera-image"}),(0,k.jsx)("div",{className:"fake-file-input-text",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0444\u043e\u0442\u043e"})]}),X&&(0,k.jsx)("div",{className:"fake-file-input loader-spinner",onClick:se,children:(0,k.jsx)(b.Z,{sx:{display:"flex"},children:(0,k.jsx)(j.Z,{})})}),Y.length>0&&(0,k.jsx)("div",{className:"errors-list",children:(0,k.jsx)("ul",{children:Array.isArray(Y)&&Y.length>0&&Y.map((function(e,t){return(0,k.jsx)("li",{children:e},t)}))})}),D&&(0,k.jsxs)("div",{className:"fake-file-input avatar image-container",style:{backgroundImage:"url("+D+")",position:"relative"},children:[(0,k.jsx)("div",{className:"tour-menu-dots",style:{padding:"5px",position:"absolute",top:15,right:15,cursor:"pointer"},onMouseOver:function(){return O(!0)},onMouseOut:function(){return O(!1)},onClick:function(){return U(!0)},children:(0,k.jsx)("img",{src:Z.Z,alt:"menu"})}),L&&(0,k.jsx)(k.Fragment,{children:(0,k.jsx)("div",{className:"tour-menu",style:{position:"absolute",top:20,right:40,border:"1px solid rgba(0, 0, 0, 0.1)",boxShadow:"0px 10px 20px rgba(0, 0, 0, 0.05)",borderRadius:8,backgroundColor:"#fff"},children:(0,k.jsx)("div",{className:"tour-item-top",style:{padding:10,lineHeight:"15px",textAlign:"right"},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})})]})]})]}),ne&&(0,k.jsx)("div",{className:"fake-file-input loader-spinner",onClick:se,children:(0,k.jsx)(b.Z,{sx:{display:"flex"},children:(0,k.jsx)(j.Z,{})})})]})})),S=(0,u.$j)((function(e){return{language:e.languages.language,user:e.auth.user,status:e.auth.status,languages:e.tours.languages,error:e.auth.error,reg_status:e.auth.reg_status}}),{setPage:c.YA,update_user:c.sC,getLanguages:o.Vb,clear_errors:c.BS,update_avatar:c.Fl,update_local_user:c.cC})((function(e){var t=e.language,a=e.error,u=e.reg_status,c=e.user,o=e.status,j=e.setPage,b=e.update_user,Z=e.getLanguages,N=e.languages,y=e.clear_errors,S=e.update_avatar,A=e.update_local_user;(0,s.useEffect)((function(){return j("profile"),Z(),function(){y(),R(!1)}}),[]);var E=(0,s.useState)(!1),w=(0,i.Z)(E,2),C=w[0],T=w[1],M=(0,s.useState)(!1),q=(0,i.Z)(M,2),F=q[0],R=q[1],I=(0,s.useState)(!1),L=(0,i.Z)(I,2),O=(L[0],L[1]),W=(0,d.k6)();(0,s.useEffect)((function(){C&&u>=200&&u<300&&R(!0)}),[C,u]);var $=function(e,t){A((0,r.Z)((0,r.Z)({},c),{},(0,n.Z)({},e,t)))};return(0,k.jsxs)(l.Z,{title:"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c",menu_item:"profile",children:[F&&(0,k.jsx)(g.Z,{status:"ok",title:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e",text:"",button:"\u041e\u043a",action:function(){return R(!1)}}),(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("main",{children:[(0,k.jsx)("div",{className:"global-h2-heading",children:(0,k.jsx)("h2",{children:"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"})}),"experts"===o&&(0,k.jsxs)("div",{className:"tours-list-add-button-wrapper",children:[(0,k.jsx)("div",{className:"tours-list-add-button-text",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u0430\u043c \u0442\u0443\u0440\u0438\u0441\u0442\u044b \u0434\u043e\u0432\u0435\u0440\u044f\u044e\u0442 \u043d\u0430 75% \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u043c. \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e!"}),(0,k.jsx)("div",{className:"tours-list-add-button-button blue",children:(0,k.jsx)("div",{onClick:function(){W.push("/".concat(t,"/account/requests"))},style:{cursor:"pointer"},children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"})})]}),(0,k.jsxs)("div",{className:"profile-page-body",children:[(0,k.jsxs)("aside",{className:"user-profile-aside",children:[(0,k.jsx)(_,{max:1,action:function(e){O(!0),S(e),O(!1)},name:"avatar",value:c&&c.avatar,type:"file"}),"experts"===o&&(0,k.jsx)("div",{className:"user-profile-aside-text",children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043d\u0435 \u043f\u0443\u0431\u043b\u0438\u043a\u0443\u0439\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439, \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b, \u0431\u0440\u0435\u043d\u0434\u044b \u0438 \u0441\u0441\u044b\u043b\u043a\u0438. \u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0441 \u043f\u043e\u0434\u043e\u0431\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u044b \u0432 \u043e\u0434\u043d\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0435\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435."})]}),(0,k.jsxs)("div",{className:"profile-page-content",children:[(0,k.jsxs)(v.Z,{full:!0,children:[(0,k.jsx)(f.Z,{label:"\u0418\u043c\u044f",action:$,name:"first_name",value:c&&c.first_name}),(0,k.jsx)(f.Z,{label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",action:$,name:"last_name",value:c&&c.last_name})]}),"experts"===o&&(0,k.jsx)(p.Z,{label:"\u042f\u0437\u044b\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0432\u044b \u0432\u043b\u0430\u0434\u0435\u0435\u0442\u0435",full:!0,margin:"0",children:(0,k.jsx)(x.Z,{name:"languages",label:"\u042f\u0437\u044b\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0432\u044b \u0432\u043b\u0430\u0434\u0435\u0435\u0442\u0435",action:$,options:N,val:c&&c.languages,multiple:!0})}),"customers"===o&&(0,k.jsx)(p.Z,{label:"Email",width:"100%",margin:"0",children:(0,k.jsx)(f.Z,{label:"Email",action:$,name:"email",value:c&&c.email,error:a})}),(0,k.jsx)(p.Z,{label:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435 (\u044d\u0442\u043e \u0432\u0441\u0435\u043c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e)",width:"100%",margin:"0",children:(0,k.jsx)(h.Z,{name:"about",label:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435",rows:"7",value:c&&c.about,action:$})}),(0,k.jsx)(m.Z,{text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",action:function(){T(!0),b((0,r.Z)({},c))}})]})]})]})})]})}))}}]);
//# sourceMappingURL=9770.d8a747e5.chunk.js.map