"use strict";(self.webpackChunkyour_app=self.webpackChunkyour_app||[]).push([[756],{6933:function(e,s,i){i(2791);var t=i(184);s.Z=function(e){var s=e.active,i=void 0===s||s,a=e.action,n=e.color,r=void 0===n?"button-success":n,o=e.text,c=void 0===o?"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c":o,l=e.width,d=e.padding,p=e.margin,u=e.type,_=void 0===u?"button":u,m=e.formAction,x=e.name;return(0,t.jsx)("button",{disabled:!i,onClick:a,className:"add-tour-button ".concat(i?r:"button-disabled"),style:{width:l||"auto",marginRight:l?"30px":"0",padding:d,margin:p},type:_,formAction:m,name:x,children:c})}},5807:function(e,s,i){i.d(s,{Z:function(){return d}});var t=i(885),a=i(2791);var n=i.p+"static/media/message.7098f1183e37ea2fd88604e4b79d0bd8.svg";var r=i.p+"static/media/padlock5.73596860cc7faf8dcb74f6f36df2dddf.svg",o=i(3239),c=i(4554),l=i(184),d=function(e){var s=e.disabled,i=void 0!==s&&s,d=e.label,p=e.action,u=e.name,_=e.type,m=void 0===_?"text":_,x=e.value,h=e.required,v=e.icon,f=e.error,j=void 0===f?null:f,g=e.margin,b=void 0===g?"0":g,k=(e.tour,e.spinner),N=void 0!==k&&k,w=e.clear,Z=void 0!==w&&w,y=e.blur_action,U=(0,a.useState)(""),C=(0,t.Z)(U,2),S=C[0],q=C[1],A=(0,a.useState)([]),E=(0,t.Z)(A,2),F=E[0],P=E[1];(0,a.useEffect)((function(){Z&&q("")}),[Z]),(0,a.useEffect)((function(){if(j&&j.detail){var e=[];e.push(j.detail),P(e)}else j&&"re_password"===u?P(j.password):j&&"phone"===u?P(j.phone):j&&j[u]&&P(j[u])}),[j,u]),(0,a.useEffect)((function(){x&&q(x)}),[x]);var O=function(e){P([]),q(e.target.value),p(u,e.target.value)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"with-errors-wrapper",style:{margin:b},id:u,children:["date"===m&&(0,l.jsx)("input",{required:h,className:"custom-input-style ".concat(F.length>0?"error":"ok"),placeholder:d,name:u,value:S,type:m,onChange:O,max:"2999-12-31",onBlur:y}),"date"!==m&&(0,l.jsxs)(l.Fragment,{children:[v&&!N&&(0,l.jsxs)("div",{className:"with-icon",children:[(0,l.jsx)("input",{required:h,className:"custom-input-style ".concat(F&&F.length>0?"error":"ok"),placeholder:d,name:u,value:S,type:m,onChange:O}),(0,l.jsx)("div",{className:"with-icon-image",children:(0,l.jsx)("img",{src:"email"===v?n:r,alt:"icon"})})]}),!v&&!N&&(0,l.jsx)("div",{children:(0,l.jsx)("input",{required:h,className:"custom-input-style ".concat(F&&F.length>0?"error":"ok"),placeholder:d,name:u,value:S,type:m,onChange:O,disabled:i})}),N&&(0,l.jsx)(c.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,l.jsx)(o.Z,{})})]}),(0,l.jsx)("div",{className:"errors-list",children:(0,l.jsx)("ul",{children:Array.isArray(F)&&F.length>0&&F.map((function(e,s){return(0,l.jsx)("li",{children:e},s)}))})})]})})}},8324:function(e,s,i){i.d(s,{Z:function(){return c}});i(2791);var t=i(6401);var a=i.p+"static/media/ok.049f60dc1d294a1796d8554d61ea3b55.svg";var n=i.p+"static/media/cancel.6b5d8304d125c0da51f869c7520183b5.svg",r=i(6933),o=i(184),c=function(e){var s=e.status,i=e.title,c=e.text,l=e.button,d=e.action,p=e.second_action,u=e.button2,_=e.is_saved,m=e.second_color,x=void 0===m?"button-danger":m,h=e.with_field,v=void 0!==h&&h,f=e.input_action,j=e.input_value;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:t.Z.popup_wrapper,children:(0,o.jsxs)("div",{className:t.Z.popup_body,children:[s&&(0,o.jsx)("div",{className:t.Z.popup_icon,children:(0,o.jsx)("img",{src:"ok"===s?a:n,alt:""})}),(0,o.jsx)("div",{className:t.Z.popup_title,children:i}),(0,o.jsx)("div",{className:t.Z.popup_text,children:c}),v&&(0,o.jsx)("input",{className:t.Z.pop_up_input,type:"text",value:j,onChange:f}),l&&(0,o.jsx)(r.Z,{text:l,action:d,color:"button-primary",width:"100%",margin:"0"}),("danger"===s||_)&&(0,o.jsx)(r.Z,{text:u,action:p,color:x,width:"100%",margin:"20px 0 0 0"})]})})})}},756:function(e,s,i){i.r(s);var t=i(4942),a=i(1413),n=i(885),r=i(2791),o=i(2753),c=i(7880),l=i(364),d=i(7571),p=i(9741),u=i(5807),_=i(8324),m=i(184),x={signUp:c.y1,clear_errors:c.BS};s.default=(0,l.$j)((function(e){return{error:e.auth.error,reg_status:e.auth.reg_status}}),x)((function(e){var s=e.signUp,i=e.error,c=e.reg_status,l=e.clear_errors,x=(0,r.useState)({}),h=(0,n.Z)(x,2),v=h[0],f=h[1],j=(0,r.useState)(!1),g=(0,n.Z)(j,2),b=g[0],k=g[1],N=(0,r.useState)(""),w=(0,n.Z)(N,2),Z=w[0],y=w[1],U=(0,r.useState)(!1),C=(0,n.Z)(U,2),S=C[0],q=C[1],A=(0,r.useState)(!1),E=(0,n.Z)(A,2),F=E[0],P=E[1],O=(0,d.k6)();(0,r.useEffect)((function(){S&&c>=200&&c<300&&P(!0)}),[S,c]),(0,r.useEffect)((function(){return function(){l(),P(!1)}}),[]),(0,r.useEffect)((function(){y(b?"experts":"customers")}),[b]);var B=function(e,s){f((0,a.Z)((0,a.Z)({},v),{},(0,t.Z)({},e,s)))};return(0,m.jsx)(o.Z,{children:(0,m.jsxs)(m.Fragment,{children:[F&&(0,m.jsx)(_.Z,{status:"ok",title:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c",text:'\u0414\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b "\u0412\u0445\u043e\u0434"',button:"\u041e\u043a",action:function(){O.push("/login")}}),(0,m.jsx)("section",{children:(0,m.jsx)("div",{className:"wrapper",children:(0,m.jsxs)("div",{className:"breadcrumbs breadcrumbs_margin",children:[(0,m.jsx)("span",{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})," - ",(0,m.jsx)("span",{children:"\u0422\u0438\u043f\u044b \u0442\u0443\u0440\u043e\u0432"})]})})}),(0,m.jsx)("section",{children:(0,m.jsx)("div",{className:"wrapper wrapper_center",children:(0,m.jsxs)("div",{className:"login_page_block",children:[(0,m.jsxs)("div",{className:"login_block_left",children:[(0,m.jsxs)("div",{className:"info_block_text_login",children:[(0,m.jsx)("div",{className:"info_block_text_left",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),(0,m.jsx)("div",{className:"info_block_text_right",children:(0,m.jsx)(p.rU,{to:"/login",children:"\u0412\u043e\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442"})})]}),(0,m.jsxs)("div",{className:"auth_form",children:[(0,m.jsxs)("div",{className:"change_type_block",children:[(0,m.jsx)("button",{className:b?"":"active",onClick:function(){return k(!1)},children:"\u042f \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a"}),(0,m.jsx)("button",{className:b?"active":"",onClick:function(){return k(!0)},children:"\u042f \u0442\u0440\u0435\u0432\u0435\u043b-\u044d\u043a\u0441\u043f\u0435\u0440\u0442"})]}),(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),q(!0),s(Z,v)},children:[(0,m.jsx)(u.Z,{required:!0,action:B,name:"email",label:"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b. \u043f\u043e\u0447\u0442\u044b",icon:"email",type:"email",value:v.email,margin:"0 0 25px 0",error:i}),(0,m.jsx)(u.Z,{required:!0,action:B,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",icon:"password",type:"password",value:v.password,margin:"0 0 25px 0",error:i}),(0,m.jsx)(u.Z,{required:!0,action:B,name:"re_password",label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",icon:"password",type:"password",value:v.re_password,margin:"0 0 25px 0",error:i}),(0,m.jsxs)("div",{className:"social_links_block_info social_links_block_info_registration",children:["\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044f \u0444\u043e\u0440\u043c\u0443 \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441"," ",(0,m.jsx)(p.rU,{to:"/support/offer",children:"\u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u043e\u0444\u0435\u0440\u0442\u044b"})," ","\u0438 \u0432\u044b\u0440\u0430\u0436\u0430\u0435\u0442\u0435 \u0441\u0432\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443"," ",(0,m.jsx)(p.rU,{to:"/support/personal-data",children:"\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"}),"."]}),(0,m.jsx)("button",{className:"enter_site enter_site_registration",type:"submit",children:"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0442\u044c\u0441\u044f \u0438 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]})]}),!b&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"title_social",children:"\u0438\u043b\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u0447\u0435\u0440\u0435\u0437 \u0441\u043e\u0446. \u0441\u0435\u0442\u0438"}),(0,m.jsxs)("div",{className:"social_links_block",children:[(0,m.jsx)("div",{className:"social_links_block_item apple"}),(0,m.jsx)("div",{className:"social_links_block_item vk"}),(0,m.jsx)("div",{className:"social_links_block_item fb"}),(0,m.jsx)("div",{className:"social_links_block_item google"})]})]})]}),(0,m.jsx)("div",{className:"login_block_right login_block_right_registration_guide",children:(0,m.jsxs)("div",{children:["\u0421\u0442\u0430\u043d\u044c \u0447\u0430\u0441\u0442\u044c\u044e \u0442\u0440\u0435\u0432\u0435\u043b-\u043a\u043e\u043c\u044c\u044e\u043d\u0438\u0442\u0438",(0,m.jsx)("p",{children:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0439\u0441\u044f \u043a \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0443 \u0438\u0437 10 000 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u043e\u0432 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435."})]})})]})})})]})})}))},6401:function(e,s){s.Z={popup_wrapper:"PopUp_popup_wrapper__9l9sO",popup_body:"PopUp_popup_body__OwDft",popup_icon:"PopUp_popup_icon__K3QI2",popup_title:"PopUp_popup_title__XhUA0",popup_text:"PopUp_popup_text__kOfK+",pop_up_input:"PopUp_pop_up_input__F9wNA"}}}]);
//# sourceMappingURL=756.54a66c15.chunk.js.map