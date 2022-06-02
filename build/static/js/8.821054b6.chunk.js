"use strict";(self.webpackChunkyour_app=self.webpackChunkyour_app||[]).push([[8],{6257:function(e,a,r){var t=r(885),n=r(2791),i=r(184);a.Z=function(e){var a=e.label,r=e.action,s=e.name,l=e.value,o=e.rows,c=void 0===o?5:o,d=e.required,u=e.error,v=void 0===u?{}:u,m=(0,n.useState)(""),h=(0,t.Z)(m,2),x=h[0],f=h[1],p=(0,n.useState)([]),b=(0,t.Z)(p,2),j=b[0],g=b[1];(0,n.useEffect)((function(){if(v&&v.detail){var e=[];e.push(v.detail),g(e)}else v&&"re_password"===s?g(v.password):v&&v[s]&&g(v[s])}),[v,s]),(0,n.useEffect)((function(){l&&f(l)}),[l]);return(0,i.jsxs)("div",{className:"with-errors-wrapper",id:s,children:[(0,i.jsx)("textarea",{required:d,className:"custom-textarea-style ".concat(j.length>0?"error":"ok"),placeholder:a,name:s,value:x,onChange:function(e){g([]),f(e.target.value),r(s,e.target.value)},rows:c}),(0,i.jsx)("div",{className:"errors-list",children:(0,i.jsx)("ul",{children:Array.isArray(j)&&j.length>0&&j.map((function(e,a){return(0,i.jsx)("li",{children:e},a)}))})})]})}},8059:function(e,a,r){r(2791);var t=r(184);a.Z=function(e){var a=e.children,r=e.ratio,n=void 0===r?"1-2":r,i=e.comment,s=e.full,l=e.tour,o=e.undertext,c=void 0!==o&&o;return(0,t.jsxs)("div",{className:"tour-input-wrapper",children:[(0,t.jsx)("div",{className:"double-input-input ratio-".concat(n," ").concat(s?"full":""),children:a&&a.map((function(e,a){return(0,t.jsxs)("div",{className:"double-input-item",children:[c?"":(0,t.jsx)("div",{className:"input-label",children:"".concat(e.props.label," ").concat(l&&l.required_fields&&l.required_fields.includes(e.props.name)?"*":"")}),e]},a)}))}),(0,t.jsx)("div",{className:"tour-input-comment",children:(0,t.jsx)("div",{className:"tour-input-comment-content",children:i})})]})}},7714:function(e,a,r){var t=r(885),n=r(2791),i=r(2753),s=r(1642),l=r(7571),o=r(9741),c=r(364),d=r(5039),u=r(7880),v=r(7258),m=r(184);a.Z=(0,c.$j)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user,status:e.auth.status,page:e.auth.page,tour:e.tours.current_tour}}),{load_user:u.L4,openSecondaryMenu:v.E3})((function(e){var a=e.title,r=e.subtitle,c=e.menu_item,v=e.isAuthenticated,h=e.children,x=e.tour,f=e.openSecondaryMenu;if(!v)return(0,m.jsx)(l.l_,{to:"/login"});x.secondary&&f(!1);var p=(0,n.useState)(""),b=(0,t.Z)(p,2);b[0],b[1];return(0,n.useEffect)((function(){(0,u.L4)()}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(s.ZP,{children:[(0,m.jsx)("title",{children:a}),(0,m.jsx)("meta",{name:"description",content:""}),(0,m.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,m.jsxs)(i.Z,{page:c,children:[(0,m.jsx)("section",{children:(0,m.jsx)("div",{className:"wrapper",children:(0,m.jsxs)("div",{className:"breadcrumbs breadcrumbs_margin",children:[(0,m.jsx)("span",{children:(0,m.jsx)(o.rU,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})," - ",(0,m.jsx)("span",{children:(0,m.jsx)(o.rU,{to:"/account",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),r&&" - ",r&&(0,m.jsx)("span",{children:(0,m.jsx)(o.rU,{to:"/account/".concat(c),children:r})}),a&&" - ",(0,m.jsx)("span",{style:{textDecoration:"none",pointerEvents:"none"},children:a})]})})}),(0,m.jsx)("section",{children:(0,m.jsx)("div",{className:"wrapper",children:(0,m.jsxs)("div",{className:"account_block",children:[(0,m.jsx)(d.Z,{menu_item:c}),h]})})})]})]})}))},3197:function(e,a,r){r.r(a),r.d(a,{default:function(){return S}});var t=r(885),n=r(2791),i=r(7714),s=r(7571),l=r(364),o=r(6933),c=r(7630),d=r(7448),u=r(7880),v=r(7258),m=r(8324),h=r(4942),x=r(1413),f=r(3498),p=r(559),b=r(8059),j=r(1727),g=r(1470),_=r(3166),Z=r(5523),k=r(1417),y=r(6257),w=r(184),N=(0,c.ZP)("span")((function(e){var a=e.theme;return{borderRadius:"50%",width:24,height:24,boxShadow:"dark"===a.palette.mode?"0 0 0 1px rgb(16 22 26 / 40%)":"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"dark"===a.palette.mode?"#394b59":"#f5f8fa",backgroundImage:"dark"===a.palette.mode?"linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))":"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",".Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"dark"===a.palette.mode?"#30404d":"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"dark"===a.palette.mode?"rgba(57,75,89,.5)":"rgba(206,217,224,.5)"}}})),C=(0,c.ZP)(N)({backgroundColor:"#84BB59",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:24,height:24,backgroundImage:"radial-gradient(#fff,#fff 28%,transparent 32%)",content:'""'},"input:hover ~ &":{backgroundColor:"#84BB59"}});function I(e){return(0,w.jsx)(g.Z,(0,x.Z)({sx:{"&:hover":{bgcolor:"transparent"},"&.MuiRadio-root":{paddingRight:"20px",marginLeft:"8px"}},disableRipple:!0,color:"default",checkedIcon:(0,w.jsx)(C,{}),icon:(0,w.jsx)(N,{})},e))}var V=(0,l.$j)((function(e){return{user:e.auth.user,error:e.auth.error}}),{setPage:u.YA,getUserInn:d.D_,resetUserInn:d.Yd,update_local_user:u.cC,getCountries:v.ox,getRecipientInnData:u.Vo,resetRecipientInnData:u.Pw,updateLegalVerificationData:u.h3,updateVerificationData:u.MG,clear_verification_status:u.T,update_user:u.sC,load_user:u.L4,clear_errors:u.BS})((function(e){var a=e.user,r=e.error,i=e.update_local_user,s=e.countries,l=e.clear_errors,o=a.verification,c=(0,n.useState)({last_name:a.last_name,first_name:a.first_name,license:"yes"}),d=(0,t.Z)(c,2),u=d[0],v=d[1];(0,n.useEffect)((function(){r&&function(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"center",behavior:"smooth"})}(Object.keys(r)[0]);return function(){return l()}}),[r]),(0,n.useEffect)((function(){i((0,x.Z)((0,x.Z)({},a),{},{verification:(0,x.Z)((0,x.Z)({},a.verification),u)}))}),[u]);var m=function(e,a){v((0,x.Z)((0,x.Z)({},u),{},(0,h.Z)({},e,a)))};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f.Z,{label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",width:"100%",margin:"0",children:(0,w.jsx)(j.Z,{label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",action:m,name:"last_name",value:null===o||void 0===o?void 0:o.last_name})}),(0,w.jsxs)(b.Z,{full:!0,margin:0,children:[(0,w.jsx)(j.Z,{label:"\u0418\u043c\u044f",action:m,name:"first_name",value:null===o||void 0===o?void 0:o.first_name}),(0,w.jsx)(j.Z,{label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",action:m,name:"patronymic",value:null===o||void 0===o?void 0:o.patronymic})]}),(0,w.jsxs)(b.Z,{full:!0,margin:0,children:[(0,w.jsx)(j.Z,{error:r,label:"\u0421\u0435\u0440\u0438\u044f \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430",action:m,name:"passport_series",value:null===o||void 0===o?void 0:o.passport_series}),(0,w.jsx)(j.Z,{error:r,label:"\u041d\u043e\u043c\u0435\u0440 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430",action:m,name:"passport_number",value:null===o||void 0===o?void 0:o.passport_number})]}),(0,w.jsx)(f.Z,{label:"\u041a\u0435\u043c \u0432\u044b\u0434\u0430\u043d",width:"100%",margin:"0",children:(0,w.jsx)(j.Z,{error:r,label:"\u041a\u0435\u043c \u0432\u044b\u0434\u0430\u043d",action:m,name:"passport_issued_by",value:null===o||void 0===o?void 0:o.passport_issued_by})}),(0,w.jsxs)(b.Z,{full:!0,margin:0,children:[(0,w.jsx)(j.Z,{error:r,label:"\u041d\u043e\u043c\u0435\u0440 \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f",action:m,name:"passport_code_issued_by",value:null===o||void 0===o?void 0:o.passport_code_issued_by}),(0,w.jsx)(j.Z,{error:r,label:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438",action:m,name:"passport_date",value:null===o||void 0===o?void 0:o.passport_date,type:"date"})]}),(0,w.jsx)(f.Z,{margin:0,label:"\u0420\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u043e\u043c \u043a\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u044b \u0432\u044b \u044f\u0432\u043b\u044f\u0435\u0442\u0435\u0441\u044c?",width:"100%",children:(0,w.jsx)(p.Z,{error:r,label:"\u0420\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u043e\u043c \u043a\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u044b \u0432\u044b \u044f\u0432\u043b\u044f\u0435\u0442\u0435\u0441\u044c?",action:m,name:"residency",val:null===o||void 0===o?void 0:o.residency,options:s})}),(0,w.jsx)("div",{className:"team-subtitle",children:"\u0415\u0441\u0442\u044c \u043b\u0438 \u0443 \u0432\u0430\u0441 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u044f \u0442\u0443\u0440\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430?"}),(0,w.jsx)("div",{className:"radio-set",children:(0,w.jsx)(k.Z,{children:(0,w.jsxs)(_.Z,{defaultValue:"yes","aria-labelledby":"demo-customized-radios",name:"license",onChange:function(e){return m(e.target.name,e.target.value)},children:[(0,w.jsx)(Z.Z,{checked:"yes"===(null===o||void 0===o?void 0:o.license),value:"yes",control:(0,w.jsx)(I,{}),label:"\u0414\u0430"}),(0,w.jsx)(Z.Z,{checked:"no"===(null===o||void 0===o?void 0:o.license),value:"no",control:(0,w.jsx)(I,{}),label:"\u041d\u0435\u0442"})]})})}),(0,w.jsx)("div",{className:"team-subtitle",children:"\u0412\u044b \u0443\u0436\u0435 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043b\u0438 \u0442\u0443\u0440\u044b \u043d\u0430 \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u043e\u0439 \u043e\u0441\u043d\u043e\u0432\u0435?"}),(0,w.jsx)("div",{className:"radio-set",children:(0,w.jsx)(k.Z,{children:(0,w.jsxs)(_.Z,{defaultValue:"no","aria-labelledby":"demo-customized-radios",name:"commercial_tours",onChange:function(e){return m(e.target.name,e.target.value)},children:[(0,w.jsx)(Z.Z,{checked:"yes"===(null===o||void 0===o?void 0:o.commercial_tours),value:"yes",control:(0,w.jsx)(I,{}),label:"\u0414\u0430"}),(0,w.jsx)(Z.Z,{checked:"no"===(null===o||void 0===o?void 0:o.commercial_tours),value:"no",control:(0,w.jsx)(I,{}),label:"\u041d\u0435\u0442"})]})})}),"yes"===(null===o||void 0===o?void 0:o.commercial_tours)&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"team-subtitle",children:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0442\u0443\u0440\u043e\u0432 \u0432\u044b \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u0435 \u0432 \u0433\u043e\u0434?"}),(0,w.jsx)("div",{className:"radio-set",children:(0,w.jsx)(k.Z,{children:(0,w.jsxs)(_.Z,{defaultValue:"\u0434\u043e 5","aria-labelledby":"demo-customized-radios",name:"commercial_tours_yearly",onChange:function(e){return m(e.target.name,e.target.value)},children:[(0,w.jsx)(Z.Z,{checked:"\u0434\u043e 5"===(null===o||void 0===o?void 0:o.commercial_tours_yearly),value:"\u0434\u043e 5",control:(0,w.jsx)(I,{}),label:"\u0434\u043e 5"}),(0,w.jsx)(Z.Z,{checked:"5-12"===(null===o||void 0===o?void 0:o.commercial_tours_yearly),value:"5-12",control:(0,w.jsx)(I,{}),label:"5-12"}),(0,w.jsx)(Z.Z,{checked:"13-20"===(null===o||void 0===o?void 0:o.commercial_tours_yearly),value:"13-20",control:(0,w.jsx)(I,{}),label:"13-20"}),(0,w.jsx)(Z.Z,{checked:"21-30"===(null===o||void 0===o?void 0:o.commercial_tours_yearly),value:"21-30",control:(0,w.jsx)(I,{}),label:"21-30"}),(0,w.jsx)(Z.Z,{checked:"30+"===(null===o||void 0===o?void 0:o.commercial_tours_yearly),value:"30+",control:(0,w.jsx)(I,{}),label:"30+"})]})})}),(0,w.jsx)(f.Z,{label:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043e\u0442\u0437\u044b\u0432\u044b",comment:"\u0412\u0432\u043e\u0434\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e",name:"reviews_links",children:(0,w.jsx)(y.Z,{action:m,name:"reviews_links",label:"",value:null===o||void 0===o?void 0:o.reviews_links,rows:"7",error:r})})]}),(0,w.jsx)(f.Z,{margin:0,label:"\u0412 \u043a\u0430\u043a\u0438\u0435 \u0441\u0442\u0440\u0430\u043d\u044b \u0432\u044b \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0442\u0443\u0440\u044b?",width:"100%",children:(0,w.jsx)(p.Z,{error:r,label:"\u0412 \u043a\u0430\u043a\u0438\u0435 \u0441\u0442\u0440\u0430\u043d\u044b \u0432\u044b \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0442\u0443\u0440\u044b?",action:m,name:"tours_countries",val:null===o||void 0===o?void 0:o.tours_countries,options:s,multiple:!0})}),(0,w.jsx)(f.Z,{label:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u044b (\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438, \u0421\u0430\u0439\u0442\u044b), \u0433\u0434\u0435 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u044b \u0432\u0430\u0448\u0438 \u0442\u0443\u0440\u044b",comment:"\u0412\u0432\u043e\u0434\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e",name:"tours_links",children:(0,w.jsx)(y.Z,{action:m,name:"tours_links",label:"",value:null===o||void 0===o?void 0:o.tours_links,rows:"7",error:r})}),(0,w.jsx)("div",{className:"team-subtitle",children:"\u0412\u043e\u0437\u043d\u0438\u043a\u0430\u043b\u0438 \u043b\u0438 \u0443 \u0432\u0430\u0441 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u043d\u044b\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u0441 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430\u043c\u0438 \u0442\u0443\u0440\u0430?"}),(0,w.jsx)("div",{className:"radio-set",children:(0,w.jsx)(k.Z,{children:(0,w.jsxs)(_.Z,{defaultValue:"no","aria-labelledby":"demo-customized-radios",name:"conflicts",onChange:function(e){return m(e.target.name,e.target.value)},children:[(0,w.jsx)(Z.Z,{checked:"yes"===(null===o||void 0===o?void 0:o.conflicts),value:"yes",control:(0,w.jsx)(I,{}),label:"\u0414\u0430"}),(0,w.jsx)(Z.Z,{checked:"no"===(null===o||void 0===o?void 0:o.conflicts),value:"no",control:(0,w.jsx)(I,{}),label:"\u041d\u0435\u0442"})]})})}),"yes"===(null===o||void 0===o?void 0:o.conflicts)&&(0,w.jsx)(f.Z,{label:"\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u043a\u0440\u0430\u0442\u0446\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e",comment:"",name:"conflicts_review",children:(0,w.jsx)(y.Z,{action:m,name:"conflicts_review",label:"",value:null===o||void 0===o?void 0:o.conflicts_review,rows:"7",error:r})}),(0,w.jsx)("div",{className:"team-subtitle",children:"\u0418\u043c\u0435\u044e\u0442\u0441\u044f \u043b\u0438 \u0443 \u0432\u0430\u0441 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f?"}),(0,w.jsx)("div",{className:"radio-set",children:(0,w.jsx)(k.Z,{children:(0,w.jsxs)(_.Z,{defaultValue:"no","aria-labelledby":"demo-customized-radios",name:"legal_restrictions",onChange:function(e){return m(e.target.name,e.target.value)},children:[(0,w.jsx)(Z.Z,{checked:"yes"===(null===o||void 0===o?void 0:o.legal_restrictions),value:"yes",control:(0,w.jsx)(I,{}),label:"\u0414\u0430"}),(0,w.jsx)(Z.Z,{checked:"no"===(null===o||void 0===o?void 0:o.legal_restrictions),value:"no",control:(0,w.jsx)(I,{}),label:"\u041d\u0435\u0442"})]})})}),"yes"===(null===o||void 0===o?void 0:o.legal_restrictions)&&(0,w.jsx)(f.Z,{label:"\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u043a\u0440\u0430\u0442\u0446\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e",comment:"",name:"legal_restrictions_review",children:(0,w.jsx)(y.Z,{action:m,name:"legal_restrictions_review",label:"",value:null===o||void 0===o?void 0:o.legal_restrictions_review,rows:"7",error:r})})]})})),D=(0,c.ZP)("span")((function(e){var a=e.theme;return{borderRadius:"50%",width:24,height:24,boxShadow:"dark"===a.palette.mode?"0 0 0 1px rgb(16 22 26 / 40%)":"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"dark"===a.palette.mode?"#394b59":"#f5f8fa",backgroundImage:"dark"===a.palette.mode?"linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))":"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",".Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"dark"===a.palette.mode?"#30404d":"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"dark"===a.palette.mode?"rgba(57,75,89,.5)":"rgba(206,217,224,.5)"}}}));(0,c.ZP)(D)({backgroundColor:"#84BB59",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:24,height:24,backgroundImage:"radial-gradient(#fff,#fff 28%,transparent 32%)",content:'""'},"input:hover ~ &":{backgroundColor:"#84BB59"}});var S=(0,l.$j)((function(e){return{user:e.auth.user,inn_data:e.auth.inn_data,update_verification_status:e.auth.update_verification_status,status:e.auth.status,error:e.auth.error,countries:e.tours.countries}}),{setPage:u.YA,getUserInn:d.D_,resetUserInn:d.Yd,update_local_user:u.cC,getCountries:v.ox,getRecipientInnData:u.Vo,resetRecipientInnData:u.Pw,updateLegalVerificationData:u.h3,updateVerificationData:u.MG,clear_verification_status:u.T,update_user:u.sC,load_user:u.L4,clear_errors:u.BS})((function(e){var a=e.user,r=e.status,l=e.setPage,c=e.getCountries,d=e.countries,u=e.updateVerificationData,v=(e.updateLegalVerificationData,e.update_verification_status),h=e.clear_verification_status,x=e.load_user;e.clear_errors,e.update_user;a||x();var f=(0,n.useState)(!1),p=(0,t.Z)(f,2),b=p[0],j=p[1];if("customers"===r)return(0,w.jsx)(s.l_,{to:"/404"});(0,n.useEffect)((function(){c()}),[]),(0,n.useEffect)((function(){v>=200&&v<300&&j(!0)}),[v]);return(0,n.useEffect)((function(){l("requests")}),[]),(0,w.jsx)(i.Z,{menu_item:"requests",title:"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443",children:(0,w.jsxs)(w.Fragment,{children:[b&&(0,w.jsx)(m.Z,{status:"ok",title:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b",text:"",button:"\u041e\u043a",action:function(){j(!1),h()}}),"experts"===r&&(0,w.jsxs)("main",{children:[(0,w.jsx)("div",{className:"global-h2-heading",children:(0,w.jsx)("h2",{children:"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443"})}),(0,w.jsx)(V,{countries:d}),(0,w.jsx)(o.Z,{text:"\u041e\u0422\u041f\u0420\u0410\u0412\u0418\u0422\u042c \u0417\u0410\u041f\u0420\u041e\u0421 \u041d\u0410 \u041f\u0420\u041e\u0412\u0415\u0420\u041a\u0423",action:function(){u(a.id,a.verification)}})]})]})})}))}}]);
//# sourceMappingURL=8.821054b6.chunk.js.map