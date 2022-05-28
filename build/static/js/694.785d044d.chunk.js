"use strict";(self.webpackChunkyour_app=self.webpackChunkyour_app||[]).push([[694],{7926:function(e,s,t){t.r(s),t.d(s,{default:function(){return p}});var a=t(2791),n=t(5774),r=t(364),c=t(7714),o=t(3924),i=t(885),u=(t(7685),t(4553),t(4461)),l=t(184),d=function(e){var s=e.data,t=e.author,r=e.user_id,c=(0,a.useState)(!1),o=(0,i.Z)(c,2),d=o[0],m=o[1];return(0,a.useEffect)((function(){(null===t||void 0===t?void 0:t.id)===r&&m(!0)}),[t]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"".concat(n.Z.message_wrapper," ").concat(d?n.Z.is_mine:""),children:[(0,l.jsx)("div",{className:n.Z.user_avatar,style:{backgroundImage:"url(".concat(null===t||void 0===t?void 0:t.avatar,")")}}),(0,l.jsxs)("div",{className:n.Z.message_body,children:[(0,l.jsxs)("div",{className:n.Z.message_header,children:[(0,l.jsx)("div",{className:n.Z.message_author_name,children:d?"\u0412\u044b":(null===t||void 0===t?void 0:t.first_name)+" "+(null===t||void 0===t?void 0:t.last_name)}),(0,l.jsx)("div",{className:n.Z.message_date_time,children:s.created_at}),d&&(0,l.jsx)(u.Z,{is_read:s.is_read})]}),(0,l.jsx)("div",{className:n.Z.message_text,dangerouslySetInnerHTML:{__html:s.message.replace(/\n/g,"<br />")}})]})]})})},m=(t(4659),t(5087)),f=t(8087),v=t(2948),g=function(e){var s=e.action,t=(0,a.useRef)(),n=(0,a.useRef)(),r=(0,a.useState)(""),c=(0,i.Z)(r,2),o=c[0],u=c[1],d=function(e){o?(e.preventDefault(),s(o),u("")):e.preventDefault()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{ref:n,onSubmit:d,children:[(0,l.jsx)(v.Z,{ref:t,placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",onChange:function(e){u(e.target.value)},onKeyDown:function(e){13===e.keyCode&&!1===e.shiftKey&&d(e)},value:o,maxRows:3}),(0,l.jsx)("button",{type:"submit",children:(0,l.jsx)("img",{src:f.Z,alt:""})})]})})},h=(0,r.$j)((function(e){return{user:e.auth.user,current_messages:e.chat.current_messages}}))((function(e){var s=e.current_messages,t=e.user,r=(0,a.useRef)(null);return(0,a.useEffect)((function(){r&&r.current.addEventListener("DOMNodeInserted",(function(e){var s=e.currentTarget;s.scroll({top:s.scrollHeight,behavior:"smooth"})}))}),[s]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{ref:r,className:n.Z.chat_messages_messages,children:null===s||void 0===s?void 0:s.map((function(e,s){return(0,l.jsx)(d,{data:e,author:e.author,user_id:t.id},s)}))})})})),_={set_current_messages:o.Pm,clear_current_messages:o.ZL,set_all_messages_read:o.$S,set_all_messages_unread:o.E8},j=(0,r.$j)((function(e){return{chat_rooms:e.chat.chat_rooms,current_room:e.chat.current_room}}),_)((function(e){var s=e.current_room,t=e.set_current_messages,r=e.clear_current_messages,c=e.set_all_messages_read,o=e.set_all_messages_unread,i=s?new m.w3cwebsocket("wss://traveler.market/ws/chat/".concat(s,"/?token=").concat(localStorage.getItem("access"))):null;(0,a.useEffect)((function(){return function(){r(),null===i||void 0===i||i.close()}})),(0,a.useEffect)((function(){i&&(i.onopen=function(){console.log("WebSocket Client Connected")},i.onclose=function(){console.log("WebSocket Client Disconnected")},i.onerror=function(e){console.error(e),console.log("Connection Error")},i.onmessage=function(e){var s=JSON.parse(e.data);s&&("set_read"===(null===s||void 0===s?void 0:s.command)?c():"set_unread"===(null===s||void 0===s?void 0:s.command)?o():t(s))})}),[i]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:n.Z.chat_messages,children:[(0,l.jsx)(h,{}),(0,l.jsx)("div",{className:n.Z.send_button,children:(0,l.jsx)(g,{action:function(e){i.send(JSON.stringify({message:e}))}})})]})})})),x=(t(1212),t(5198)),A=(0,r.$j)((function(e){return{users_online:e.chat.users_online}}),{set_users_online:o.Ju})((function(e){var s=e.room,t=e.action,r=e.active,c=void 0!==r&&r,o=e.first,i=void 0!==o&&o,u=e.users_online,d=e.set_users_online,m=s.id,f=(s.last_message,s.room_members[0]),v=f.avatar,g=f.first_name,h=f.last_name,_=f.last_message_date,j=f.is_online,A=s.room_members[0].id;(0,a.useEffect)((function(){j&&A&&d(A)}),[j,A]),console.log(A);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"".concat(n.Z.chat_contact_card," ").concat(c?n.Z.active:""," ").concat(i?n.Z.first:""),onClick:function(){t(m)},children:[(0,l.jsxs)("div",{className:n.Z.chat_contact_wrapper,children:[(0,l.jsx)("div",{className:"".concat(n.Z.chat_contact_avatar).concat(null!==u&&void 0!==u&&u.includes(A)?" "+n.Z.active_user:""),style:{backgroundImage:"url(".concat(v,")")}}),(0,l.jsxs)("div",{className:n.Z.chat_contact_data,children:[(0,l.jsx)("div",{className:n.Z.chat_contact_name,children:g+" "+h[0]}),(0,l.jsx)("div",{className:n.Z.chat_contact_last_message,children:(0,x.aF)(null===s||void 0===s?void 0:s.last_message,20)})]})]}),(0,l.jsx)("div",{className:n.Z.chat_contact_last_message_date,children:_})]})})})),w=(0,r.$j)((function(e){return{chat_rooms:e.chat.chat_rooms,current_room:e.chat.current_room}}),{set_current_room:o.OC,delete_chat_user:o.r9,clear_current_room:o.Uw,set_all_messages_unread:o.E8})((function(e){var s=e.chat_rooms,t=e.current_room,a=e.set_current_room,r=e.delete_chat_user,c=e.clear_current_room,o=e.set_all_messages_unread,i=function(e){r(),c(),o(),a(e)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:n.Z.chat_contacts,children:null===s||void 0===s?void 0:s.map((function(e,s){return(0,l.jsx)(A,{room:e,action:i,active:t===e.id,first:0===s},s)}))})})})),Z={get_chat_rooms:o.nS,delete_chat_user:o.r9,clear_current_room:o.Uw,set_all_messages_unread:o.E8},p=(0,r.$j)(null,Z)((function(e){var s=e.get_chat_rooms,t=e.delete_chat_user,r=e.clear_current_room,o=e.set_all_messages_unread;return(0,a.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,a.useEffect)((function(){return s(),function(){t(),r(),o()}}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c.Z,{title:"\u0427\u0430\u0442",menu_item:"chat",children:(0,l.jsxs)("div",{className:n.Z.chat_wrapper,children:[(0,l.jsx)(w,{}),(0,l.jsx)(j,{})]})})})}))},1212:function(e,s,t){e.exports=t.p+"static/media/wallpaper.d8baaad2a138d5cd01bc.png"},4659:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=694.785d044d.chunk.js.map