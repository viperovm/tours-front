"use strict";(self.webpackChunkyour_app=self.webpackChunkyour_app||[]).push([[9197],{6933:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.active,n=void 0===t||t,i=e.action,a=e.color,o=void 0===a?"button-success":a,s=e.text,c=void 0===s?"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c":s,d=e.width,u=e.padding,l=e.margin,p=e.type,h=void 0===p?"button":p,f=e.formAction,m=e.name,v=e.small,g=void 0!==v&&v;return(0,r.jsx)("button",{disabled:!n,onClick:i,className:"add-tour-button ".concat(n?o:"button-disabled"," ").concat(g?"small":""),style:{width:d||"auto",marginRight:d?"30px":"0",padding:u,margin:l},type:h,formAction:f,name:m,children:c})}},1727:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(885),i=n(2791);var a=n.p+"static/media/message.7098f1183e37ea2fd88604e4b79d0bd8.svg";var o=n.p+"static/media/padlock5.73596860cc7faf8dcb74f6f36df2dddf.svg";var s=n.p+"static/media/user.098d856a1aa6b8cf2f14d43c2ade863f.svg",c=n(3239),d=n(4554),u=n(184),l=function(e){var t=e.disabled,n=void 0!==t&&t,l=e.label,p=e.action,h=e.name,f=e.type,m=void 0===f?"text":f,v=e.value,g=e.required,x=e.icon,_=e.error,b=void 0===_?null:_,j=e.margin,w=void 0===j?"0":j,y=(e.tour,e.spinner),Z=void 0!==y&&y,N=e.clear,k=void 0!==N&&N,S=e.blur_action,z=(0,i.useState)(""),R=(0,r.Z)(z,2),C=R[0],F=R[1],A=(0,i.useState)([]),E=(0,r.Z)(A,2),W=E[0],L=E[1];(0,i.useEffect)((function(){k&&F("")}),[k]),(0,i.useEffect)((function(){if(b&&b.detail){var e=[];e.push(b.detail),L(e)}else b&&"re_password"===h?L(b.password):b&&"phone"===h?L(b.phone):b&&b[h]&&L(b[h])}),[b,h]),(0,i.useEffect)((function(){v&&F(v)}),[v]);var P=function(e){L([]),F(e.target.value),p(h,e.target.value)};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"with-errors-wrapper",style:{margin:w},id:h,children:["date"===m&&(0,u.jsx)("input",{required:g,className:"custom-input-style ".concat((null===W||void 0===W?void 0:W.length)>0?"error":"ok"),placeholder:l,name:h,value:C,type:m,onChange:P,max:"2999-12-31",onBlur:S}),"date"!==m&&(0,u.jsxs)(u.Fragment,{children:[x&&!Z&&(0,u.jsxs)("div",{className:"with-icon",children:[(0,u.jsx)("input",{required:g,className:"custom-input-style ".concat((null===W||void 0===W?void 0:W.length)>0?"error":"ok"),placeholder:l,name:h,value:C,type:m,onChange:P}),(0,u.jsx)("div",{className:"with-icon-image",children:(0,u.jsx)("img",{src:"email"===x?a:"user"===x?s:o,alt:"icon"})})]}),!x&&!Z&&(0,u.jsx)("div",{children:(0,u.jsx)("input",{required:g,className:"custom-input-style ".concat((null===W||void 0===W?void 0:W.length)>0?"error":"ok"),placeholder:l,name:h,value:C,type:m,onChange:P,disabled:n})}),Z&&(0,u.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,u.jsx)(c.Z,{})})]}),(0,u.jsx)("div",{className:"errors-list",children:(0,u.jsx)("ul",{children:Array.isArray(W)&&W.length>0&&W.map((function(e,t){return(0,u.jsx)("li",{children:e},t)}))})})]})})}},8324:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(2791),i=n(6401);var a=n.p+"static/media/ok.049f60dc1d294a1796d8554d61ea3b55.svg";var o=n.p+"static/media/cancel.6b5d8304d125c0da51f869c7520183b5.svg",s=n(6933),c=n(2948),d=n(184),u=function(e){var t=e.status,n=e.title,u=e.text,l=e.button,p=e.action,h=e.second_action,f=e.button2,m=e.is_saved,v=e.second_color,g=void 0===v?"button-danger":v,x=e.with_field,_=void 0!==x&&x,b=e.input_action,j=e.input_value,w=(e.width,e.min_width),y=(0,r.useRef)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:i.Z.popup_wrapper,children:(0,d.jsxs)("div",{className:i.Z.popup_body,style:{minWidth:w},children:[t&&(0,d.jsx)("div",{className:i.Z.popup_icon,children:(0,d.jsx)("img",{src:"ok"===t?a:o,alt:""})}),(0,d.jsx)("div",{className:i.Z.popup_title,children:n}),(0,d.jsx)("div",{className:i.Z.popup_text,children:u}),_&&(0,d.jsx)(c.Z,{className:i.Z.pop_up_input,ref:y,placeholder:"\u041f\u0440\u0438\u0447\u0438\u043d\u044b \u043e\u0442\u043a\u0430\u0437\u0430:",onChange:b,value:j,maxRows:5}),l&&(0,d.jsx)(s.Z,{text:l,action:p,color:"button-primary",width:"100%",margin:"0"}),("danger"===t||m)&&(0,d.jsx)(s.Z,{text:f,action:h,color:g,width:"100%",margin:"20px 0 0 0"})]})})})}},9197:function(e,t,n){n.r(t);var r=n(5861),i=n(4942),a=n(1413),o=n(885),s=n(7757),c=n.n(s),d=n(2791),u=n(2753),l=n(7880),p=n(364),h=n(7571),f=n(9741),m=n(1727),v=n(8324),g=n(184);t.default=(0,p.$j)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.auth.error,reg_status:e.auth.reg_status}}),{login:l.x4,checkAuthenticated:l.jb,clear_errors:l.BS,reset_password:l.q6})((function(e){var t=e.isAuthenticated,n=(e.login,e.checkAuthenticated,e.error),s=(e.clear_errors,e.reg_status,e.reset_password),l=(0,d.useState)({}),p=(0,o.Z)(l,2),x=p[0],_=p[1],b=(0,d.useState)(!0),j=(0,o.Z)(b,2),w=(j[0],j[1],(0,d.useState)(!1)),y=(0,o.Z)(w,2),Z=y[0],N=y[1];if(t)return(0,g.jsx)(h.l_,{to:"/account"});var k=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s(x.email);case 3:N(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,g.jsx)(u.Z,{children:(0,g.jsxs)(g.Fragment,{children:[Z&&(0,g.jsx)(v.Z,{status:"ok",title:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u043f\u043e\u0447\u0442\u0443",button:"\u041e\u043a",action:function(){return N(!1)}}),(0,g.jsx)("section",{children:(0,g.jsx)("div",{className:"wrapper",children:(0,g.jsxs)("div",{className:"breadcrumbs breadcrumbs_margin",children:[(0,g.jsx)("span",{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})," - ",(0,g.jsx)("span",{children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f"})]})})}),(0,g.jsx)("section",{children:(0,g.jsx)("div",{className:"wrapper wrapper_center",children:(0,g.jsxs)("div",{className:"login_page_block recover",children:[(0,g.jsxs)("div",{className:"login_block_left",children:[(0,g.jsxs)("div",{className:"info_block_text_login",children:[(0,g.jsx)("div",{className:"info_block_text_left",children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),(0,g.jsx)(f.rU,{to:"/login",className:"info_block_text_right",children:"\u0412\u043e\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442"})]}),(0,g.jsxs)("div",{className:"login_page_text_block",children:[(0,g.jsx)("p",{children:"\u0415\u0441\u043b\u0438 \u0432\u044b \u0437\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b."}),(0,g.jsx)("p",{children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u043c\u0435\u043d\u044b \u043f\u0430\u0440\u043e\u043b\u044f \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0441\u043b\u0430\u043d\u0430 \u0432\u0430\u043c \u043d\u0430 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b."})]}),(0,g.jsx)("div",{className:"auth_form",children:(0,g.jsxs)("form",{onSubmit:k,children:[(0,g.jsx)(m.Z,{required:!0,action:function(e,t){_((0,a.Z)((0,a.Z)({},x),{},(0,i.Z)({},e,t)))},name:"email",label:"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b. \u043f\u043e\u0447\u0442\u044b",icon:"email",type:"email",value:x.email,margin:"0 0 25px 0",error:n}),(0,g.jsx)("button",{className:"enter_site enter_site_registration",type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})]}),(0,g.jsx)("div",{className:"login_block_right",children:"\u041c\u0430\u0440\u043a\u0435\u0442\u043f\u043b\u0435\u0439\u0441 \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0445 \u0442\u0443\u0440\u043e\u0432"})]})})})]})})}))},2948:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7462),i=n(3366),a=n(2791),o=a.useLayoutEffect,s=function(e,t){"function"!==typeof e?e.current=t:e(t)},c=function(e,t){var n=(0,a.useRef)();return(0,a.useCallback)((function(r){e.current=r,n.current&&s(n.current,null),n.current=t,t&&s(t,r)}),[t])},d={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},u=function(e){Object.keys(d).forEach((function(t){e.style.setProperty(t,d[t],"important")}))},l=null;var p=function(){},h=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],f=!!document.documentElement.currentStyle,m=function(e){var t=function(e){var t=a.useRef(e);return o((function(){t.current=e})),t}(e);(0,a.useLayoutEffect)((function(){var e=function(e){t.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[])},v=function(e,t){var n=e.cacheMeasurements,o=e.maxRows,s=e.minRows,d=e.onChange,v=void 0===d?p:d,g=e.onHeightChange,x=void 0===g?p:g,_=(0,i.Z)(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]);var b=void 0!==_.value,j=(0,a.useRef)(null),w=c(j,t),y=(0,a.useRef)(0),Z=(0,a.useRef)(),N=function(){var e=j.current,t=n&&Z.current?Z.current:function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n,r=(n=t,h.reduce((function(e,t){return e[t]=n[t],e}),{})),i=r.boxSizing;return""===i?null:(f&&"border-box"===i&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px"),{sizingStyle:r,paddingSize:parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),borderSize:parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth)})}(e);if(t){Z.current=t;var r=function(e,t,n,r){void 0===n&&(n=1),void 0===r&&(r=1/0),l||((l=document.createElement("textarea")).setAttribute("tabindex","-1"),l.setAttribute("aria-hidden","true"),u(l)),null===l.parentNode&&document.body.appendChild(l);var i=e.paddingSize,a=e.borderSize,o=e.sizingStyle,s=o.boxSizing;Object.keys(o).forEach((function(e){var t=e;l.style[t]=o[t]})),u(l),l.value=t;var c=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize}(l,e);l.value="x";var d=l.scrollHeight-i,p=d*n;"border-box"===s&&(p=p+i+a),c=Math.max(p,c);var h=d*r;return"border-box"===s&&(h=h+i+a),[c=Math.min(h,c),d]}(t,e.value||e.placeholder||"x",s,o),i=r[0],a=r[1];y.current!==i&&(y.current=i,e.style.setProperty("height",i+"px","important"),x(i,{rowHeight:a}))}};return(0,a.useLayoutEffect)(N),m(N),(0,a.createElement)("textarea",(0,r.Z)({},_,{onChange:function(e){b||N(),v(e)},ref:w}))},g=(0,a.forwardRef)(v)},6401:function(e,t){t.Z={popup_wrapper:"PopUp_popup_wrapper__9l9sO",popup_body:"PopUp_popup_body__OwDft",popup_icon:"PopUp_popup_icon__K3QI2",popup_title:"PopUp_popup_title__XhUA0",popup_text:"PopUp_popup_text__kOfK+",pop_up_input:"PopUp_pop_up_input__F9wNA"}}}]);
//# sourceMappingURL=9197.13dce656.chunk.js.map