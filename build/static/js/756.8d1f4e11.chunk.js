"use strict";(self.webpackChunkyour_app=self.webpackChunkyour_app||[]).push([[756],{6933:function(e,t,n){n(2791);var i=n(184);t.Z=function(e){var t=e.active,n=void 0===t||t,r=e.action,a=e.color,o=void 0===a?"button-success":a,s=e.text,c=void 0===s?"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c":s,l=e.width,d=e.padding,u=e.margin,p=e.type,h=void 0===p?"button":p,f=e.formAction,m=e.name,v=e.small,x=void 0!==v&&v;return(0,i.jsx)("button",{disabled:!n,onClick:r,className:"add-tour-button ".concat(n?o:"button-disabled"," ").concat(x?"small":""),style:{width:l||"auto",marginRight:l?"30px":"0",padding:d,margin:u},type:h,formAction:f,name:m,children:c})}},1727:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(885),r=n(2791);var a=n.p+"static/media/message.7098f1183e37ea2fd88604e4b79d0bd8.svg";var o=n.p+"static/media/padlock5.73596860cc7faf8dcb74f6f36df2dddf.svg";var s=n.p+"static/media/user.098d856a1aa6b8cf2f14d43c2ade863f.svg",c=n(3239),l=n(4554),d=n(184),u=function(e){var t=e.disabled,n=void 0!==t&&t,u=e.label,p=e.action,h=e.name,f=e.type,m=void 0===f?"text":f,v=e.value,x=e.required,g=e.icon,_=e.error,b=void 0===_?null:_,j=e.margin,y=void 0===j?"0":j,w=(e.tour,e.spinner),k=void 0!==w&&w,N=e.clear,Z=void 0!==N&&N,S=e.blur_action,z=(0,r.useState)(""),C=(0,i.Z)(z,2),R=C[0],E=C[1],F=(0,r.useState)([]),U=(0,i.Z)(F,2),L=U[0],W=U[1];(0,r.useEffect)((function(){Z&&E("")}),[Z]),(0,r.useEffect)((function(){if(b&&b.detail){var e=[];e.push(b.detail),W(e)}else b&&"re_password"===h?W(b.password):b&&"phone"===h?W(b.phone):b&&b[h]&&W(b[h])}),[b,h]),(0,r.useEffect)((function(){v&&E(v)}),[v]);var q=function(e){W([]),E(e.target.value),p(h,e.target.value)};return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"with-errors-wrapper",style:{margin:y},id:h,children:["date"===m&&(0,d.jsx)("input",{required:x,className:"custom-input-style ".concat((null===L||void 0===L?void 0:L.length)>0?"error":"ok"),placeholder:u,name:h,value:R,type:m,onChange:q,max:"2999-12-31",onBlur:S}),"date"!==m&&(0,d.jsxs)(d.Fragment,{children:[g&&!k&&(0,d.jsxs)("div",{className:"with-icon",children:[(0,d.jsx)("input",{required:x,className:"custom-input-style ".concat((null===L||void 0===L?void 0:L.length)>0?"error":"ok"),placeholder:u,name:h,value:R,type:m,onChange:q}),(0,d.jsx)("div",{className:"with-icon-image",children:(0,d.jsx)("img",{src:"email"===g?a:"user"===g?s:o,alt:"icon"})})]}),!g&&!k&&(0,d.jsx)("div",{children:(0,d.jsx)("input",{required:x,className:"custom-input-style ".concat((null===L||void 0===L?void 0:L.length)>0?"error":"ok"),placeholder:u,name:h,value:R,type:m,onChange:q,disabled:n})}),k&&(0,d.jsx)(l.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,d.jsx)(c.Z,{})})]}),(0,d.jsx)("div",{className:"errors-list",children:(0,d.jsx)("ul",{children:Array.isArray(L)&&L.length>0&&L.map((function(e,t){return(0,d.jsx)("li",{children:e},t)}))})})]})})}},8324:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(2791),r=n(6401);var a=n.p+"static/media/ok.049f60dc1d294a1796d8554d61ea3b55.svg";var o=n.p+"static/media/cancel.6b5d8304d125c0da51f869c7520183b5.svg",s=n(6933),c=n(2948),l=n(184),d=function(e){var t=e.status,n=e.title,d=e.text,u=e.button,p=e.action,h=e.second_action,f=e.button2,m=e.is_saved,v=e.second_color,x=void 0===v?"button-danger":v,g=e.with_field,_=void 0!==g&&g,b=e.input_action,j=e.input_value,y=(0,i.useRef)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:r.Z.popup_wrapper,children:(0,l.jsxs)("div",{className:r.Z.popup_body,children:[t&&(0,l.jsx)("div",{className:r.Z.popup_icon,children:(0,l.jsx)("img",{src:"ok"===t?a:o,alt:""})}),(0,l.jsx)("div",{className:r.Z.popup_title,children:n}),(0,l.jsx)("div",{className:r.Z.popup_text,children:d}),_&&(0,l.jsx)(c.Z,{className:r.Z.pop_up_input,ref:y,placeholder:"\u041f\u0440\u0438\u0447\u0438\u043d\u044b \u043e\u0442\u043a\u0430\u0437\u0430:",onChange:b,value:j,maxRows:3}),u&&(0,l.jsx)(s.Z,{text:u,action:p,color:"button-primary",width:"100%",margin:"0"}),("danger"===t||m)&&(0,l.jsx)(s.Z,{text:f,action:h,color:x,width:"100%",margin:"20px 0 0 0"})]})})})}},756:function(e,t,n){n.r(t);var i=n(4942),r=n(1413),a=n(885),o=n(2791),s=n(2753),c=n(7880),l=n(364),d=n(7571),u=n(9741),p=n(1727),h=n(8324),f=n(184),m={signUp:c.y1,clear_errors:c.BS};t.default=(0,l.$j)((function(e){return{error:e.auth.error,reg_status:e.auth.reg_status}}),m)((function(e){var t=e.signUp,n=e.error,c=e.reg_status,l=e.clear_errors,m=(0,o.useState)({}),v=(0,a.Z)(m,2),x=v[0],g=v[1],_=(0,o.useState)(!1),b=(0,a.Z)(_,2),j=b[0],y=b[1],w=(0,o.useState)(""),k=(0,a.Z)(w,2),N=k[0],Z=k[1],S=(0,o.useState)(!1),z=(0,a.Z)(S,2),C=z[0],R=z[1],E=(0,o.useState)(!1),F=(0,a.Z)(E,2),U=F[0],L=F[1],W=(0,d.k6)();(0,o.useEffect)((function(){C&&c>=200&&c<300&&L(!0)}),[C,c]),(0,o.useEffect)((function(){return function(){l(),L(!1)}}),[]),(0,o.useEffect)((function(){Z(j?"experts":"customers")}),[j]);var q=function(e,t){g((0,r.Z)((0,r.Z)({},x),{},(0,i.Z)({},e,t)))};return(0,f.jsx)(s.Z,{children:(0,f.jsxs)(f.Fragment,{children:[U&&(0,f.jsx)(h.Z,{status:"ok",title:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c",text:'\u0414\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b "\u0412\u0445\u043e\u0434"',button:"\u041e\u043a",action:function(){W.push("/login")}}),(0,f.jsx)("section",{children:(0,f.jsx)("div",{className:"wrapper",children:(0,f.jsxs)("div",{className:"breadcrumbs breadcrumbs_margin",children:[(0,f.jsx)("span",{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})," - ",(0,f.jsx)("span",{children:"\u0422\u0438\u043f\u044b \u0442\u0443\u0440\u043e\u0432"})]})})}),(0,f.jsx)("section",{children:(0,f.jsx)("div",{className:"wrapper wrapper_center",children:(0,f.jsxs)("div",{className:"login_page_block",children:[(0,f.jsxs)("div",{className:"login_block_left",children:[(0,f.jsxs)("div",{className:"info_block_text_login",children:[(0,f.jsx)("div",{className:"info_block_text_left",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),(0,f.jsx)("div",{className:"info_block_text_right",children:(0,f.jsx)(u.rU,{to:"/login",children:"\u0412\u043e\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442"})})]}),(0,f.jsxs)("div",{className:"auth_form",children:[(0,f.jsxs)("div",{className:"change_type_block",children:[(0,f.jsx)("button",{className:j?"":"active",onClick:function(){return y(!1)},children:"\u042f \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a"}),(0,f.jsx)("button",{className:j?"active":"",onClick:function(){return y(!0)},children:"\u042f \u0442\u0440\u0435\u0432\u0435\u043b-\u044d\u043a\u0441\u043f\u0435\u0440\u0442"})]}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),R(!0),t(N,x)},children:[(0,f.jsx)(p.Z,{required:!0,action:q,name:"name",label:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0442\u0435\u0441\u044c",icon:"user",type:"text",value:x.name,margin:"0 0 25px 0",error:n}),(0,f.jsx)(p.Z,{required:!0,action:q,name:"email",label:"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b. \u043f\u043e\u0447\u0442\u044b",icon:"email",type:"email",value:x.email,margin:"0 0 25px 0",error:n}),(0,f.jsx)(p.Z,{required:!0,action:q,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",icon:"password",type:"password",value:x.password,margin:"0 0 25px 0",error:n}),(0,f.jsx)(p.Z,{required:!0,action:q,name:"re_password",label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",icon:"password",type:"password",value:x.re_password,margin:"0 0 25px 0",error:n}),(0,f.jsxs)("div",{className:"social_links_block_info social_links_block_info_registration",children:["\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044f \u0444\u043e\u0440\u043c\u0443 \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441"," ",(0,f.jsx)(u.rU,{to:"/support/offer",children:"\u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u043e\u0444\u0435\u0440\u0442\u044b"})," ","\u0438 \u0432\u044b\u0440\u0430\u0436\u0430\u0435\u0442\u0435 \u0441\u0432\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443"," ",(0,f.jsx)(u.rU,{to:"/support/personal-data",children:"\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"}),"."]}),(0,f.jsx)("button",{className:"enter_site enter_site_registration",type:"submit",children:"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0442\u044c\u0441\u044f \u0438 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]})]}),!j&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"title_social",children:"\u0438\u043b\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u0447\u0435\u0440\u0435\u0437 \u0441\u043e\u0446. \u0441\u0435\u0442\u0438"}),(0,f.jsxs)("div",{className:"social_links_block",children:[(0,f.jsx)("div",{className:"social_links_block_item apple"}),(0,f.jsx)("div",{className:"social_links_block_item vk"}),(0,f.jsx)("div",{className:"social_links_block_item fb"}),(0,f.jsx)("div",{className:"social_links_block_item google"})]})]})]}),(0,f.jsx)("div",{className:"login_block_right login_block_right_registration_guide",children:(0,f.jsxs)("div",{children:["\u0421\u0442\u0430\u043d\u044c \u0447\u0430\u0441\u0442\u044c\u044e \u0442\u0440\u0435\u0432\u0435\u043b-\u043a\u043e\u043c\u044c\u044e\u043d\u0438\u0442\u0438",(0,f.jsx)("p",{children:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0439\u0441\u044f \u043a \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0443 \u0438\u0437 10 000 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u043e\u0432 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435."})]})})]})})})]})})}))},2948:function(e,t,n){n.d(t,{Z:function(){return x}});var i=n(7462),r=n(3366),a=n(2791),o=a.useLayoutEffect,s=function(e,t){"function"!==typeof e?e.current=t:e(t)},c=function(e,t){var n=(0,a.useRef)();return(0,a.useCallback)((function(i){e.current=i,n.current&&s(n.current,null),n.current=t,t&&s(t,i)}),[t])},l={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},d=function(e){Object.keys(l).forEach((function(t){e.style.setProperty(t,l[t],"important")}))},u=null;var p=function(){},h=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],f=!!document.documentElement.currentStyle,m=function(e){var t=function(e){var t=a.useRef(e);return o((function(){t.current=e})),t}(e);(0,a.useLayoutEffect)((function(){var e=function(e){t.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[])},v=function(e,t){var n=e.cacheMeasurements,o=e.maxRows,s=e.minRows,l=e.onChange,v=void 0===l?p:l,x=e.onHeightChange,g=void 0===x?p:x,_=(0,r.Z)(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]);var b=void 0!==_.value,j=(0,a.useRef)(null),y=c(j,t),w=(0,a.useRef)(0),k=(0,a.useRef)(),N=function(){var e=j.current,t=n&&k.current?k.current:function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n,i=(n=t,h.reduce((function(e,t){return e[t]=n[t],e}),{})),r=i.boxSizing;return""===r?null:(f&&"border-box"===r&&(i.width=parseFloat(i.width)+parseFloat(i.borderRightWidth)+parseFloat(i.borderLeftWidth)+parseFloat(i.paddingRight)+parseFloat(i.paddingLeft)+"px"),{sizingStyle:i,paddingSize:parseFloat(i.paddingBottom)+parseFloat(i.paddingTop),borderSize:parseFloat(i.borderBottomWidth)+parseFloat(i.borderTopWidth)})}(e);if(t){k.current=t;var i=function(e,t,n,i){void 0===n&&(n=1),void 0===i&&(i=1/0),u||((u=document.createElement("textarea")).setAttribute("tabindex","-1"),u.setAttribute("aria-hidden","true"),d(u)),null===u.parentNode&&document.body.appendChild(u);var r=e.paddingSize,a=e.borderSize,o=e.sizingStyle,s=o.boxSizing;Object.keys(o).forEach((function(e){var t=e;u.style[t]=o[t]})),d(u),u.value=t;var c=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize}(u,e);u.value="x";var l=u.scrollHeight-r,p=l*n;"border-box"===s&&(p=p+r+a),c=Math.max(p,c);var h=l*i;return"border-box"===s&&(h=h+r+a),[c=Math.min(h,c),l]}(t,e.value||e.placeholder||"x",s,o),r=i[0],a=i[1];w.current!==r&&(w.current=r,e.style.setProperty("height",r+"px","important"),g(r,{rowHeight:a}))}};return(0,a.useLayoutEffect)(N),m(N),(0,a.createElement)("textarea",(0,i.Z)({},_,{onChange:function(e){b||N(),v(e)},ref:y}))},x=(0,a.forwardRef)(v)},6401:function(e,t){t.Z={popup_wrapper:"PopUp_popup_wrapper__9l9sO",popup_body:"PopUp_popup_body__OwDft",popup_icon:"PopUp_popup_icon__K3QI2",popup_title:"PopUp_popup_title__XhUA0",popup_text:"PopUp_popup_text__kOfK+",pop_up_input:"PopUp_pop_up_input__F9wNA"}}}]);
//# sourceMappingURL=756.8d1f4e11.chunk.js.map