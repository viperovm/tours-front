"use strict";(self.webpackChunkyour_app=self.webpackChunkyour_app||[]).push([[8343],{6933:function(e,r,a){a(2791);var t=a(184);r.Z=function(e){var r=e.active,a=void 0===r||r,c=e.action,n=e.color,_=void 0===n?"button-success":n,s=e.text,i=void 0===s?"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c":s,o=e.width,u=e.padding,l=e.margin,d=e.type,h=void 0===d?"button":d,v=e.formAction,m=e.name,x=e.small,g=void 0!==x&&x;return(0,t.jsx)("button",{disabled:!a,onClick:c,className:"add-tour-button ".concat(a?_:"button-disabled"," ").concat(g?"small":""),style:{width:o||"auto",marginRight:o?"30px":"0",padding:u,margin:l},type:h,formAction:v,name:m,children:i})}},2018:function(e,r,a){a.d(r,{Z:function(){return d}});a(2791);var t="Expert_tour_leader_section__vUltb",c="Expert_leader_avatar__UM4V5",n="Expert_tour_leader_name_section__b-vbK",_="Expert_leader_name__j-ZeG",s="Expert_leader_rating__zlm1-",i=a(364);var o=a.p+"static/media/star.44c37436dd759a64dd5eef5929633cb5.svg",u=a(9741),l=a(184),d=(0,i.$j)((function(e){return{}}),{})((function(e){var r=e.id,a=e.avatar,i=e.name,d=e.rating,h=e.reviews,v=e.extra;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(u.rU,{to:"/experts/".concat(r),className:t,children:[(0,l.jsx)("div",{className:c,style:{backgroundImage:"url("+a+")"}}),(0,l.jsxs)("div",{className:n,children:[(0,l.jsx)("div",{className:_,children:"".concat(i).concat(v||"")}),(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)("img",{src:o,alt:"star"}),(0,l.jsx)("span",{children:d})," ","(",h,")"]})]})]})})}))},2449:function(e,r,a){a.d(r,{Z:function(){return w}});var t=a(885),c=a(2791),n=a(9431),_=a(364);var s=a.p+"static/media/search.56657bd92ae8462ba52de0226dadb59c.svg";var i=a.p+"static/media/calendar.ddc12e16003eb0ab9ab2a2ef9be30a55.svg";var o=a.p+"static/media/mappin.1ecbf894984b3c7de931900aba2c073e.svg",u=a(2423),l=(a(830),a(7258)),d=a(184),h={setSearchDates:l.ns},v=(0,_.$j)((function(e){return{current_search_dates:e.tours.current_search_dates}}),h)((function(e){var r=e.current_search_dates,a=e.setSearchDates,_=(0,c.useState)(new Date),s=(0,t.Z)(_,2),i=s[0],o=s[1];return(0,c.useEffect)((function(){r.length>0?o(r):o(new Date)}),[r]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(u.Z,{minDate:new Date,onChange:a,value:i,className:n.Z.traveler_calendar,selectRange:!0})})})),m=a(6933),x=a(5198),g={setSearchIsRussia:l.YG,getSearchData:l.Im,setSearchRegion:l.nn,clearSearchRegion:l.jQ},b=(0,_.$j)((function(e){return{current_search_region:e.tours.current_search_region}}),g)((function(e){var r=e.setSearchIsRussia,a=e.getSearchData,t=e.setSearchRegion,c=e.clearSearchRegion,_=e.data,s=e.current_search_region;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("button",{className:"".concat(n.Z.filter_button," ").concat((null===s||void 0===s?void 0:s.id)===_.id?n.Z.active:""),onClick:function(){"\u0420\u043e\u0441\u0441\u0438\u044f"===_.name?(c(),r(!0),a(_.countries[0].country_regions),t(_)):(c(),r(!1),a(_.countries),t(_))},children:_.name})})})),p={getSearchRegions:l.KD},j=(0,_.$j)((function(e){return{search_regions:e.tours.search_regions}}),p)((function(e){var r=e.getSearchRegions,a=e.search_regions,t=void 0===a?[]:a;return(0,c.useEffect)((function(){r()}),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:n.Z.filter_buttons_wrapper,children:null===t||void 0===t?void 0:t.map((function(e,r){return(0,d.jsx)(b,{data:e},r)}))})})})),f={setSearchData:l.Y_},Z=(0,_.$j)((function(e){return{search_data:e.tours.search_data,current_search_data:e.tours.current_search_data}}),f)((function(e){var r=e.setSearchData,a=e.current_search_data,t=e.search_data,c=void 0===t?[]:t;return(0,d.jsx)(d.Fragment,{children:c.length>0&&(0,d.jsx)("div",{className:n.Z.filter_selectable_data_wrapper,children:null===c||void 0===c?void 0:c.map((function(e,t){return(0,d.jsx)("div",{onClick:function(){r(e)},className:"".concat(n.Z.selectable_data," ").concat(null!==a&&void 0!==a&&a.some((function(r){return r.id===e.id}))?n.Z.active_data:""),children:e.name},t)}))})})})),S=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:n.Z.traveler_region,children:[(0,d.jsx)(j,{}),(0,d.jsx)(Z,{})]})})},N={clearSearchRegion:l.jQ,clearSearchDates:l.jB},w=(0,_.$j)((function(e){return{current_search_region:e.tours.current_search_region,current_search_data:e.tours.current_search_data,current_search_dates:e.tours.current_search_dates}}),N)((function(e){var r=e.border,a=e.current_search_region,_=e.current_search_data,u=e.clearSearchRegion,l=e.clearSearchDates,h=e.current_search_dates,g=(0,c.useState)(!1),b=(0,t.Z)(g,2),p=b[0],j=b[1],f=(0,c.useState)(!1),Z=(0,t.Z)(f,2),N=Z[0],w=Z[1];return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"".concat(n.Z.search_bar_wrapper," ").concat(N?n.Z.active_region:""),style:{marginBottom:r?0:"80px"},children:[(0,d.jsxs)("div",{className:n.Z.search_field_wrapper,children:[(0,d.jsxs)("div",{className:n.Z.search_field,children:[(0,d.jsx)("div",{className:n.Z.search_bar_country,children:(0,d.jsxs)("div",{className:"".concat(n.Z.search_bar_country_input," ").concat(N?n.Z.active_region:""),onClick:function(){p&&j(!1),w((function(e){return!e}))},children:[(0,d.jsx)("img",{src:o,alt:"Map pin"}),!N&&a?(0,d.jsxs)("span",{className:"".concat(n.Z.search_bar_country_input_text," ").concat(n.Z.active),children:[null===a||void 0===a?void 0:a.name,(null===_||void 0===_?void 0:_.length)>0?" ("+_.map((function(e){return e.name})).join(", ")+")":""]}):(0,d.jsxs)("span",{className:"".concat(n.Z.search_bar_country_input_text," ").concat(N?n.Z.active:""),children:[N?"\u041a\u0443\u0434\u0430: ":"\u0421\u0442\u0440\u0430\u043d\u0430, \u0440\u0435\u0433\u0438\u043e\u043d \u0438\u043b\u0438 \u0433\u043e\u0440\u043e\u0434",null!==a&&void 0!==a&&a.name?null===a||void 0===a?void 0:a.name:"",(null===_||void 0===_?void 0:_.length)>0?" ("+_.map((function(e){return e.name})).join(", ")+")":""]})]})}),(0,d.jsxs)("div",{className:n.Z.search_bar_date,children:[(0,d.jsxs)("div",{className:n.Z.search_bar_date_input,onClick:function(){N&&w(!1),j((function(e){return!e}))},children:[(0,d.jsx)("img",{src:i,alt:"Calendar"}),!p&&h.length>0?(0,d.jsx)("span",{className:"".concat(n.Z.search_bar_date_input_text," ").concat(n.Z.active),children:h.length>0?" "+h.map((function(e){return(0,x.J5)(e)})).join(" - "):""}):(0,d.jsxs)("span",{className:"".concat(n.Z.search_bar_date_input_text," ").concat(p?n.Z.active:""),children:[p||h.length>0?"\u041a\u043e\u0433\u0434\u0430:":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u044b",h.length>0?" "+h.map((function(e){return(0,x.J5)(e)})).join(" - "):""]})]}),p&&(0,d.jsxs)("div",{className:n.Z.search_bar_date_active,children:[(0,d.jsx)(v,{}),(0,d.jsx)(m.Z,{width:"100%",color:"button-primary",text:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c",action:function(){return j(!1)}}),(0,d.jsx)("div",{className:n.Z.search_bar_date_active_footer,onClick:l,children:(0,d.jsx)("div",{children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440"})})]})]})]}),N&&(0,d.jsxs)("div",{className:n.Z.search_bar_region_active,children:[(0,d.jsx)(S,{}),(0,d.jsx)(m.Z,{width:"100%",color:"button-primary",text:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c",action:function(){return w(!1)}}),(0,d.jsx)("div",{className:n.Z.search_bar_date_active_footer,onClick:u,children:(0,d.jsx)("div",{children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440"})})]})]}),(0,d.jsxs)("div",{className:"".concat(n.Z.search_bar_button," ").concat(r?n.Z.search_bar_button_border:""),children:[(0,d.jsx)("img",{src:s,alt:"Search"}),(0,d.jsx)("span",{children:"\u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u0442\u0443\u0440"})]})]})})}))},4240:function(e,r,a){a.d(r,{Z:function(){return n}});a(2791);var t=a(364),c=a(184),n=(0,t.$j)((function(e){return{}}),{})((function(e){var r=e.children,a=e.background,t=void 0===a?"transparent":a,n=e.padding,_=void 0===n?"0 0 35px 0":n;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("section",{style:{backgroundColor:t,padding:_},children:(0,c.jsx)("div",{className:"wrapper",children:r})})})}))},6385:function(e,r,a){a(2791),a(3561),a(7828);var t=a(3922),c=a(4240),n=a(2449),_=a(184);r.Z=function(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(c.Z,{background:"#2AA2D6",padding:"40px 0",children:[(0,_.jsx)(t.Z,{title:"\u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u0442\u0443\u0440",sub_title:"\u041c\u044b \u043f\u043e\u0434\u0431\u0435\u0440\u0435\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u0443\u0447\u0448\u0435\u0435",color:"white",border_color:"white"}),(0,_.jsx)(n.Z,{border:!0})]})})}},8151:function(e,r,a){a(2791);var t=a(3561),c=(a(3922),a(184));r.Z=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("section",{children:(0,c.jsxs)("div",{className:"wrapper",children:[(0,c.jsx)("div",{className:t.Z.text_section_title,children:"\u041e\u0442\u0434\u044b\u0445 \u0432 \u0420\u043e\u0441\u0441\u0438\u0438 \u2014 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0442\u0443\u0440\u044b \u043f\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0435"}),(0,c.jsx)("div",{className:t.Z.text_section_subtitle,children:"\u0422\u0443\u0440\u044b \u043f\u043e \u0420\u043e\u0441\u0441\u0438\u0438 \u2014 \u0432\u0441\u0435 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0442\u0440\u0430\u043d\u044b"}),(0,c.jsxs)("div",{className:t.Z.text_section_text,children:[(0,c.jsx)("p",{children:"\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0421\u0442\u0440\u0430\u043d\u0430 \u2013 \u0441\u0430\u043c\u0430\u044f \u043f\u043e\u043b\u043d\u0430\u044f \u0431\u0430\u0437\u0430 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439 \u043f\u043e \u0420\u043e\u0441\u0441\u0438\u0438 \u043e\u0442 \u043f\u0440\u044f\u043c\u044b\u0445 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u043e\u0432 \u0431\u0435\u0437 \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0439 \u0438 \u043d\u0430\u0446\u0435\u043d\u043e\u043a \u0434\u043b\u044f \u0412\u0430\u0441."}),(0,c.jsx)("p",{children:"\u041c\u044b \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u043c \u0412\u0430\u043c \u043d\u0430\u0439\u0442\u0438 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043e\u0442\u0434\u044b\u0445\u0430 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0432\u0430\u0448\u0438\u043c \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u044f\u043c. \u041d\u0430 \u043d\u0430\u0448\u0435\u043c \u0441\u0430\u0439\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0430 \u0441\u0430\u043c\u0430\u044f \u043f\u043e\u043b\u043d\u0430\u044f \u0431\u0430\u0437\u0430 \u0442\u0443\u0440\u043e\u0432 \u043e\u0442 \u041a\u0440\u044b\u043c\u0430 \u0434\u043e \u041a\u0430\u043c\u0447\u0430\u0442\u043a\u0438 \u0438 \u043e\u0442 \u041a\u0430\u0432\u043a\u0430\u0437\u0430 \u0434\u043e \u0421\u0435\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044e\u0441\u0430."}),(0,c.jsx)("p",{children:"\u041a\u0443\u0434\u0430 \u0431\u044b \u0412\u044b \u043d\u0435 \u0441\u043e\u0431\u0438\u0440\u0430\u043b\u0438\u0441\u044c \u2013 \u0411\u0430\u0439\u043a\u0430\u043b, \u0410\u043b\u0442\u0430\u0439, \u041a\u0430\u0440\u0435\u043b\u0438\u044f, \u042f\u043a\u0443\u0442\u0438\u044f, \u0423\u0440\u0430\u043b \u2013 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u0442\u0440\u0430\u043d\u044b \u0412\u044b \u043d\u0430\u0439\u0434\u0435\u0442\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0432\u0438\u0434 \u043e\u0442\u0434\u044b\u0445\u0430 \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u0439, \u0431\u044e\u0434\u0436\u0435\u0442\u0430 \u0438 \u0443\u0440\u043e\u0432\u043d\u044f \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438. \u041f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u044b \u043f\u043e\u0438\u0441\u043a\u0430, \u0434\u0430\u0442\u044b \u043f\u043e\u0435\u0437\u0434\u043a\u0438, \u0432\u0438\u0434\u044b \u043e\u0442\u0434\u044b\u0445\u0430 \u0438 \u043f\u043e\u0434\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0442\u0443\u0440! \u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043e\u0442\u0434\u044b\u0445 \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0432\u043a\u0443\u0441"}),(0,c.jsx)("p",{children:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0442\u0443\u0440\u043e\u0432 \u043f\u043e \u0420\u043e\u0441\u0441\u0438\u0438 \u043c\u043d\u043e\u0433\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b \u0438 \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u044b. \u0415\u0441\u043b\u0438 \u0412\u0430\u0441 \u043c\u0430\u043d\u044f\u0442 \u0433\u043e\u0440\u044b, \u0441\u043e\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u0432\u043e\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043d\u0430 \u042d\u043b\u044c\u0431\u0440\u0443\u0441 \u0438\u043b\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435\u0441\u044c \u0432 \u043a\u043e\u043d\u043d\u044b\u0439 \u043f\u043e\u0445\u043e\u0434 \u043f\u043e \u0410\u043b\u0442\u0430\u044e. \u0412\u0430\u043c \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0432\u043e\u0434\u043d\u044b\u0439 \u0442\u0443\u0440\u0438\u0437\u043c? \u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0441\u043f\u043b\u0430\u0432 \u043f\u043e \u0423\u0440\u0430\u043b\u0443, \u041a\u0430\u0432\u043a\u0430\u0437\u0443 \u0438\u043b\u0438 \u041a\u0430\u0440\u0435\u043b\u0438\u0438, \u0438\u043b\u0438 \u043f\u0440\u043e\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u0442\u043f\u0443\u0441\u043a \u043d\u0430 \u0431\u0435\u0440\u0435\u0433\u0430\u0445 \u0411\u0430\u0439\u043a\u0430\u043b\u0430. \u041b\u044e\u0431\u0438\u0442\u0435 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435 \u0438 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c? \u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435\u0441\u044c \u0432 \u0432\u0435\u043b\u043e\u0442\u0443\u0440 \u043f\u043e \u041a\u0440\u044b\u043c\u0443 \u043b\u0435\u0442\u043e\u043c \u0438\u043b\u0438 \u0441\u0430\u0444\u0430\u0440\u0438 \u043d\u0430 \u0441\u043d\u0435\u0433\u043e\u0445\u043e\u0434\u0430\u0445 \u0437\u0438\u043c\u043e\u0439. \u0418\u0449\u0435\u0442\u0435 \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u044b\u0439 \u043e\u0442\u0434\u044b\u0445? \u041f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0442\u0440\u0435\u043a\u043a\u0438\u043d\u0433\u043e\u0432\u044b\u043c \u0442\u0440\u043e\u043f\u0430\u043c \u0421\u0438\u0431\u0438\u0440\u0438, \u0410\u0434\u044b\u0433\u0435\u0438 \u0438 \u0423\u0440\u0430\u043b\u0430 \u0438\u043b\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435\u0441\u044c \u0432 \u043a\u0440\u0443\u0438\u0437 \u043f\u043e \u0412\u043e\u043b\u0433\u0435. \u041f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u044f\u043c\u0438 \u043d\u0430\u0440\u043e\u0434\u043e\u0432 \u0420\u043e\u0441\u0441\u0438\u0438 \u0432 \u044d\u0442\u043d\u043e\u0442\u0443\u0440\u0430\u0445 \u043f\u043e \u0411\u0443\u0440\u044f\u0442\u0438\u0438, \u0425\u0430\u043a\u0430\u0441\u0438\u0438, \u0410\u043b\u0442\u0430\u044e \u0438 \u0414\u0430\u043b\u044c\u043d\u0435\u043c\u0443 \u0412\u043e\u0441\u0442\u043e\u043a\u0443."}),(0,c.jsx)("p",{children:"\u0410 \u0434\u043b\u044f \u0442\u0435\u0445, \u043a\u0442\u043e \u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u0447\u0443\u0432\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0431\u044f \u043f\u0435\u0440\u0432\u043e\u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u0435\u043b\u0435\u043c, \u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0421\u0442\u0440\u0430\u043d\u0430 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0439\u0442\u0438 \u044d\u043a\u0441\u043f\u0435\u0434\u0438\u0446\u0438\u0438 \u0432 \u0441\u0430\u043c\u044b\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0435 \u0443\u0433\u043e\u043b\u043a\u0438 \u0420\u043e\u0441\u0441\u0438\u0438 \u2013 \u0421\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u043e\u043b\u044e\u0441, \u041a\u0443\u0440\u0438\u043b\u044c\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430, \u0421\u0430\u0445\u0430\u043b\u0438\u043d, \u041a\u0430\u043c\u0447\u0430\u0442\u043a\u0443 \u0438 \u043f\u043b\u0430\u0442\u043e \u041f\u0443\u0442\u043e\u0440\u0430\u043d\u0430."}),(0,c.jsx)("p",{children:"\u0414\u043b\u044f \u0436\u0435\u043b\u0430\u044e\u0449\u0438\u0445 \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0438 \u0441\u0440\u0430\u0437\u0443 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0442\u0443\u0440\u044b, \u0441\u043e\u0447\u0435\u0442\u0430\u044e\u0449\u0438\u0435 \u0432 \u0441\u0435\u0431\u0435 \u0441\u043f\u043b\u0430\u0432\u044b, \u043a\u043e\u043d\u043d\u044b\u0435 \u043f\u043e\u0445\u043e\u0434\u044b, \u0432\u043e\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f, \u0432\u0435\u043b\u043e\u0442\u0443\u0440\u044b \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435."})]})]})})})}},3922:function(e,r,a){a(2791);var t=a(3561),c=a(184);r.Z=function(e){var r,a=e.title,n=e.sub_title,_=e.border_color,s=e.color,i=void 0===s?"black":s,o=e.left,u=e.travels_count,l=void 0===u?null:u,d=e.button,h=void 0===d?null:d;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:t.Z.title_section,children:[(0,c.jsxs)("div",{className:t.Z.title_set+" "+t.Z[_],children:[(0,c.jsx)("div",{className:t.Z.title+" "+t.Z[i],children:a}),(0,c.jsx)("div",{className:t.Z.sub_title+" "+t.Z[i],children:l?(r=l,"0"===String(r).slice(-1)||"5"===String(r).slice(-1)||"6"===String(r).slice(-1)||"7"===String(r).slice(-1)||"8"===String(r).slice(-1)||"9"===String(r).slice(-1)||11===r||12===r||13===r||14===r?"\u041d\u0430\u0439\u0434\u0435\u043d\u043e ".concat(r," \u0442\u0443\u0440\u043e\u0432"):11!==r&&"1"===String(r).slice(-1)?"\u041d\u0430\u0439\u0434\u0435\u043d\u043e ".concat(r," \u0442\u0443\u0440"):"2"===String(r).slice(-1)||"3"===String(r).slice(-1)||"4"===String(r).slice(-1)?"\u041d\u0430\u0439\u0434\u0435\u043d\u043e ".concat(r," \u0442\u0443\u0440\u0430"):void 0):n})]}),(0,c.jsx)("div",{children:h?(0,c.jsx)("button",{className:t.Z.title_button,children:h}):o})]})})}},7828:function(e,r,a){a.d(r,{Z:function(){return u}});a(2791);var t=a(3561);var c=a.p+"static/media/heart.c08e901a1b9c5322af84f94d7c80b88a.svg";a.p;var n=a(7571),_=a(9603),s=a(2018),i=a(364),o=a(184),u=(0,i.$j)((function(e){return{language:e.languages.language}}))((function(e){var r,a=e.tour,i=e.language,u=(0,n.k6)(),l=function(){var e=JSON.parse(localStorage.getItem("recent"));if(e){var r=e.filter((function(e){return e.id!==a.id}));r.splice(0,0,a),r.length>10&&(r.length=10),localStorage.setItem("recent",JSON.stringify(r))}else localStorage.setItem("recent",JSON.stringify([a]));u.push("/".concat(i,"/").concat(a.public_url))};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:t.Z.tour_card,children:[(0,o.jsxs)("div",{className:t.Z.tour_image,style:{backgroundImage:"url("+a.tmb_wallpaper+")"},onClick:l,children:[(0,o.jsxs)("div",{className:t.Z.tour_badges_upper,children:[(0,o.jsx)("img",{src:c,alt:"favourite"}),a.is_recomended&&(0,o.jsx)("div",{className:t.Z.tour_badges_recomended,children:"\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c"})]}),(0,o.jsxs)("div",{className:t.Z.tour_badges_lower,children:[a.main_type&&(0,o.jsx)("div",{className:t.Z.tour_badge+" "+t.Z.green,children:a.main_type}),a.vacants_number&&(0,o.jsx)("div",{className:t.Z.tour_badge+" "+t.Z.orange,children:"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u043c\u0435\u0441\u0442: ".concat(a.vacants_number)})]})]}),(0,o.jsxs)("div",{className:t.Z.tour_data,children:[(0,o.jsxs)("div",{className:t.Z.tour_name_section,children:[(0,o.jsx)("div",{className:t.Z.tour_country,children:"".concat(a.start_country," - ").concat(a.start_city)}),(0,o.jsx)("div",{className:t.Z.tour_name,onClick:l,children:a.name})]}),(0,o.jsxs)("div",{className:t.Z.tour_data_section,children:[(0,o.jsx)("div",{children:(null===a||void 0===a||null===(r=a.expert)||void 0===r?void 0:r.tmb_avatar)&&(0,o.jsx)(s.Z,{avatar:a.expert.tmb_avatar,id:a.expert.id,name:a.expert.first_name,rating:a.expert.rating,reviews:a.expert.reviews_count})}),(0,o.jsxs)("div",{className:t.Z.tour_price_section,children:[(0,o.jsx)("div",{className:t.Z.tour_duration,children:"".concat(a.duration," \u0434\u043d. (\u0441 ").concat((0,_.ZP)(new Date(a.start_date),"dd.mm.yyyy"),")")}),(0,o.jsxs)("div",{className:t.Z.tour_price,children:[a.discount&&(0,o.jsxs)("span",{className:t.Z.tour_discounted_price,style:{marginRight:"5px"},children:[a&&a.price?a.price.toLocaleString("ru"):"",(0,o.jsx)("span",{className:"rub-sign",children:a.currency.sign})]}),a&&a.discount?a.discount.toLocaleString("ru"):a.price.toLocaleString("ru"),(0,o.jsx)("span",{className:"rub-sign",children:a.currency.sign})]})]})]})]})]})})}))},9431:function(e,r){r.Z={search_bar_wrapper:"SearchBar_search_bar_wrapper__ct+cP",active_region:"SearchBar_active_region__5DoKO",search_field_wrapper:"SearchBar_search_field_wrapper__5Xl2e",search_field:"SearchBar_search_field__QpMdO",search_bar_country:"SearchBar_search_bar_country__UocF+",search_bar_country_input:"SearchBar_search_bar_country_input__xkStd",search_bar_country_input_text:"SearchBar_search_bar_country_input_text__cDk1V",active:"SearchBar_active__z7p0F",search_bar_date:"SearchBar_search_bar_date__SY1Hf",search_bar_date_input:"SearchBar_search_bar_date_input__BrsvK",search_bar_date_input_text:"SearchBar_search_bar_date_input_text__zBAmV",search_bar_date_active:"SearchBar_search_bar_date_active__1QZ1V",search_bar_button:"SearchBar_search_bar_button__1iV9J",search_bar_button_border:"SearchBar_search_bar_button_border__zqCnv",traveler_calendar:"SearchBar_traveler_calendar__rOdlw","react-calendar__tile--active":"SearchBar_react-calendar__tile--active__VMoVn","react-calendar__tile--now":"SearchBar_react-calendar__tile--now__5JB6z",search_bar_date_active_footer:"SearchBar_search_bar_date_active_footer__TP6SM",search_bar_region_active:"SearchBar_search_bar_region_active__ez5VY",traveler_region:"SearchBar_traveler_region__QYatT",filter_buttons_wrapper:"SearchBar_filter_buttons_wrapper__bjVDF",filter_button:"SearchBar_filter_button__OCa9M",filter_selectable_data_wrapper:"SearchBar_filter_selectable_data_wrapper__ZnSMv",selectable_data:"SearchBar_selectable_data__rAdnY",active_data:"SearchBar_active_data__cUD69"}},3561:function(e,r){r.Z={buttons_set:"Tours_buttons_set__QLThx",title_section:"Tours_title_section__Y44FP",title_set:"Tours_title_set__Wqnai",blue:"Tours_blue__hZnGt",white:"Tours_white__xGihk",orange:"Tours_orange__6nVRx",title:"Tours_title__ddyLW",sub_title:"Tours_sub_title__zoPgu",black:"Tours_black__76Lh2",sort_button:"Tours_sort_button__+cse8",search_section:"Tours_search_section__-H8JV",text_section_title:"Tours_text_section_title__g6IwU",text_section_subtitle:"Tours_text_section_subtitle__NVoi-",text_section_text:"Tours_text_section_text__1e7wI",tours_set_section:"Tours_tours_set_section__S1Icl",tours_wrapper:"Tours_tours_wrapper__nZEv2",tour_card:"Tours_tour_card__YdbuF",tour_image:"Tours_tour_image__3RGvH",tour_badges_upper:"Tours_tour_badges_upper__e-QOI",tour_badges_recomended:"Tours_tour_badges_recomended__9rIur",tour_badges_lower:"Tours_tour_badges_lower__xATbu",tour_badge:"Tours_tour_badge__Mi-m7",green:"Tours_green__mWHmE",tour_name_section:"Tours_tour_name_section__9QPMZ",tour_country:"Tours_tour_country__+oOvq",tour_name:"Tours_tour_name__Wq8xH",tour_data_section:"Tours_tour_data_section__FQN7A",tour_leader_section:"Tours_tour_leader_section__Y+sxS",leader_avatar:"Tours_leader_avatar__WXMx7",tour_leader_name_section:"Tours_tour_leader_name_section__KIxKj",leader_name:"Tours_leader_name__Vqrs2",leader_rating:"Tours_leader_rating__ACQ60",tour_price_section:"Tours_tour_price_section__Euv-i",tour_duration:"Tours_tour_duration__xGZPi",tour_price:"Tours_tour_price__u57SW",tour_discounted_price:"Tours_tour_discounted_price__GJESY",title_button:"Tours_title_button__UCWGR"}}}]);
//# sourceMappingURL=8343.707c06d0.chunk.js.map