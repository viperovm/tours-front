"use strict";(self.webpackChunkyour_app=self.webpackChunkyour_app||[]).push([[556],{1497:function(e,r,t){t.d(r,{Z:function(){return A}});var a=t(2791),n=t(3561),c=(t(9431),t(364)),i=t(7258),_=t(885),s="SearchPopUp_popup_wrapper__NgXhK",l="SearchPopUp_popup_card__zyQnN",o="SearchPopUp_popup_header__DImqD",u="SearchPopUp_popup_header_title__s2jwS",d="SearchPopUp_popup_body__e+8YF",h="SearchPopUp_popup_footer__Gs3LX",p="SearchPopUp_popup_footer_text__LvEcf",f="SearchPopUp_popup_card_button__dkdAf",v="SearchPopUp_active__Y+cwn",g="SearchPopUp_search_type_wrapper__6WlDV",x="SearchPopUp_search_type_element__xf5GO";var m=t.p+"static/media/close.6e010b3bee7f92e6c5fff34890c8fd4a.svg",j=t(184),b={resetFilter:i.sx},S=(0,c.$j)((function(e){return{}}),b)((function(e){var r=e.children,t=e.title,n=e.type,c=e.active_button,i=e.resetFilter,g=(0,a.useState)(!1),x=(0,_.Z)(g,2),b=x[0],S=x[1];return(0,j.jsxs)(j.Fragment,{children:[b&&(0,j.jsx)("div",{className:s,children:(0,j.jsxs)("div",{className:l,children:[(0,j.jsxs)("div",{className:o,children:[(0,j.jsx)("div",{className:u,children:t}),(0,j.jsx)("img",{src:m,alt:"close button",onClick:function(){return S(!1)}})]}),(0,j.jsx)("div",{className:d,children:r}),(0,j.jsx)("div",{className:h,onClick:function(){i(n)},children:(0,j.jsx)("div",{className:p,children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440"})})]})}),(0,j.jsx)("button",{onClick:function(){return S(!0)},className:"".concat(f," ").concat(c?v:""),children:t})]})})),y="MultiRangeSlider_range_wrapper__JBStY",B="MultiRangeSlider_slider__ZaUSw",N="MultiRangeSlider_slider__track__tLYhV",Z="MultiRangeSlider_slider__range__rF2le",F="MultiRangeSlider_slider__left_value__RGYg3",w="MultiRangeSlider_slider__right_value__rpCXR",M="MultiRangeSlider_thumb__iWP9M",R="MultiRangeSlider_thumb__left__MUnN6",P="MultiRangeSlider_thumb__right__J8Asq",k="MultiRangeSlider_slider_values__A2F1R",U=(0,c.$j)((function(e){return{}}),{})((function(e){var r=e.min,t=e.max,n=e.value_min,c=e.value_max,i=e.onChange,s=(0,a.useState)(r),l=(0,_.Z)(s,2),o=l[0],u=l[1],d=(0,a.useState)(t),h=(0,_.Z)(d,2),p=h[0],f=h[1],v=(0,a.useRef)(r),g=(0,a.useRef)(t),x=(0,a.useRef)(null);(0,a.useEffect)((function(){u(n||r)}),[]),(0,a.useEffect)((function(){f(c||t)}),[]),console.log(n),console.log(c);var m=(0,a.useCallback)((function(e){return Math.round((e-r)/(t-r)*100)}),[r,t]);return(0,a.useEffect)((function(){var e=m(o),r=m(g.current);x.current&&(x.current.style.left="".concat(e,"%"),x.current.style.width="".concat(r-e,"%"))}),[o,m]),(0,a.useEffect)((function(){var e=m(v.current),r=m(p);x.current&&(x.current.style.width="".concat(r-e,"%"))}),[p,m]),(0,a.useEffect)((function(){i(o,p)}),[o,p]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:y,children:[(0,j.jsx)("input",{type:"range",min:r,max:t,value:o,onChange:function(e){var r=Math.min(Number(e.target.value),p-1);u(r),v.current=r},className:"".concat(M," ").concat(R),style:{zIndex:n>t-100&&"5"}}),(0,j.jsx)("input",{type:"range",min:r,max:t,value:p,onChange:function(e){var r=Math.max(Number(e.target.value),o+1);f(r),g.current=r},className:"".concat(M," ").concat(P)}),(0,j.jsxs)("div",{className:B,children:[(0,j.jsx)("div",{className:N}),(0,j.jsx)("div",{ref:x,className:Z})]})]}),(0,j.jsxs)("div",{className:k,children:[(0,j.jsx)("div",{className:F,children:o}),(0,j.jsx)("div",{className:w,children:p})]})]})})),C={setFilters:i.rr,getToursByFilters:i._5,setRangeFilters:i.Eu},E=(0,c.$j)((function(e){return{current_filters:e.tours.current_filters}}),C)((function(e){var r=e.setFilters,t=e.filter,n=e.current_filters,c=(e.getToursByFilters,e.setRangeFilters),i=t.title,s=t.type,l=t.data,o=t.filter_type,u=(0,a.useState)(0),d=(0,_.Z)(u,2),h=d[0],p=d[1],f=(0,a.useState)([]),m=(0,_.Z)(f,2),b=m[0],y=m[1];"price"===s&&(console.log(t),console.log(b)),(0,a.useEffect)((function(){n&&y(n.some((function(e){return e.type===s}))?n.filter((function(e){return e.type===s}))[0].data:[])}),[n]),(0,a.useEffect)((function(){"range"===o?p(1):Array.isArray(l)&&"range"!==o&&((null===l||void 0===l?void 0:l.length)<=14?p(2):(null===l||void 0===l?void 0:l.length)<=21?p(3):(null===l||void 0===l?void 0:l.length)<=28?p(4):(null===l||void 0===l?void 0:l.length)<=35?p(5):p(6))}),[l]);return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(S,{title:i,type:s,active_button:b.length>0,children:(0,j.jsxs)("div",{className:g,style:{columns:h},children:["range"!==o&&Array.isArray(l)&&(null===l||void 0===l?void 0:l.map((function(e,t){return(0,j.jsx)("div",{className:"".concat(x," ").concat(b.includes(e.id)?v:""),onClick:function(){return t=e.id,void r(s,t);var t},children:e.name},t)}))),"range"===o&&l&&(0,j.jsx)(U,{value_min:b.length>0?b[0]:l[0],value_max:b.length>0?b[1]:l[1],min:l[0],max:l[1],onChange:function(e,r){var t=[e,r];console.log(t),c(s,t)}})]})})})})),T={getSearchFilters:i.qL,getToursByFilters:i._5},V=(0,c.$j)((function(e){return{current_filters:e.tours.current_filters}}),T)((function(e){var r=e.action,t=e.getSearchFilters,n=e.filters,c=e.current_filters,i=e.getToursByFilters;return(0,a.useEffect)((function(){var e;if(c){console.log(c);var t=c.filter((function(e){return!e.hasOwnProperty("field")})).map((function(e){return e.type+"="+e.data.join(",")}));console.log(t);var a=c.filter((function(e){return e.hasOwnProperty("field")}))[0];e=t.join("&")+"&field="+(null===a||void 0===a?void 0:a.field),r(),i(e)}}),[c]),(0,a.useEffect)((function(){t()}),[]),(0,j.jsx)(j.Fragment,{children:null===n||void 0===n?void 0:n.map((function(e,r){return(0,j.jsx)(E,{filter:e},r)}))})})),A=function(e){var r=e.action,t=e.data;return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("div",{className:"wrapper",children:(0,j.jsx)("div",{className:n.Z.buttons_set,children:(0,j.jsx)(V,{filters:t,action:r})})})})}},3422:function(e,r,t){t(2791);var a=t(3561),n=t(7828),c=t(1052),i=t.n(c),_=(t(6505),t(184)),s={0:{items:1},568:{items:2},1024:{items:3}};r.Z=function(e){var r=e.tours,t=void 0===r?[]:r;e.action;return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("section",{children:(0,_.jsx)("div",{className:"wrapper",children:(0,_.jsxs)("div",{className:a.Z.tours_set_section,children:[t.length<=3&&(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:a.Z.tours_wrapper,children:t&&t.map((function(e,r){return(0,_.jsx)(n.Z,{tour:e},r)}))})}),t.length>3&&(0,_.jsx)(i(),{mouseTracking:!0,infinite:!0,items:t&&t.map((function(e,r){return(0,_.jsx)(n.Z,{tour:e},r)})),responsive:s,controlsStrategy:"alternate",disableDotsControls:!0})]})})})})}},556:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}});var a=t(885),n=t(2791),c=t(3561),i=t(364),_=t(1642),s=t(2753),l=t(9741),o=t(1497),u=t(3922),d=(t(3422),t(6385)),h=t(8151),p=t(7258),f=t(4240),v=t(7828),g=t(4554),x=t(3239),m=t(184),j={getToursByFilters:p._5},b=(0,i.$j)((function(e){return{tours_page_data:e.tours.tours_page_data,all_tours:e.tours.all_tours}}),j)((function(e){var r=e.location,t=e.all_tours,i=e.getToursByFilters,p=e.tours_page_data,j=(0,n.useState)(!1),b=(0,a.Z)(j,2),S=b[0],y=b[1];(0,n.useEffect)((function(){S&&(null===t||void 0===t?void 0:t.length)>0&&y(!1)}),[t,S]),(0,n.useEffect)((function(){i()}),[]);var B=r.pathname,N="/"===B[0]?B.substring(1):B,Z=(0,m.jsx)("div",{className:c.Z.sort_button,children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(_.ZP,{children:[(0,m.jsx)("title",{children:"Traveler Market - \u041c\u0430\u0440\u043a\u0435\u0442\u043f\u043b\u0435\u0439\u0441 \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0445 \u0442\u0443\u0440\u043e\u0432"}),(0,m.jsx)("meta",{name:"description",content:""})]}),(0,m.jsxs)(s.Z,{page:N,children:[(0,m.jsxs)(f.Z,{children:[(0,m.jsxs)("div",{className:"breadcrumbs breadcrumbs_margin",children:[(0,m.jsx)("span",{children:(0,m.jsx)(l.rU,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})," - ",(0,m.jsx)("span",{children:"\u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044f"})]}),(0,m.jsx)(o.Z,{data:null===p||void 0===p?void 0:p.filter_set,action:function(){y(!0)}})]}),(0,m.jsxs)(f.Z,{padding:"0 0 10px 0",children:[(0,m.jsx)(u.Z,{title:"\u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044f",border_color:"blue",left:Z,travels_count:null===t||void 0===t?void 0:t.length}),S&&(0,m.jsx)(g.Z,{sx:{display:"flex"},children:(0,m.jsx)(x.Z,{})}),!S&&(0,m.jsx)("div",{className:c.Z.tours_wrapper,children:null===t||void 0===t?void 0:t.map((function(e,r){return(0,m.jsx)(v.Z,{tour:e},r)}))})]}),(0,m.jsx)(d.Z,{}),(0,m.jsxs)(f.Z,{padding:"40px 0",children:[(0,m.jsx)(u.Z,{title:"Traveler.market",sub_title:"\u041d\u0435\u043c\u043d\u043e\u0433\u043e \u043e \u043d\u0430\u0441 \u0438 \u043d\u0430\u0448\u0438\u0445 \u0443\u0441\u043b\u0443\u0433\u0430\u0445",border_color:"orange"}),(0,m.jsx)(h.Z,{})]})]})]})}))},9431:function(e,r){r.Z={search_bar_wrapper:"SearchBar_search_bar_wrapper__ct+cP",active_region:"SearchBar_active_region__5DoKO",search_field_wrapper:"SearchBar_search_field_wrapper__5Xl2e",search_field:"SearchBar_search_field__QpMdO",search_bar_country:"SearchBar_search_bar_country__UocF+",search_bar_country_input:"SearchBar_search_bar_country_input__xkStd",search_bar_country_input_text:"SearchBar_search_bar_country_input_text__cDk1V",active:"SearchBar_active__z7p0F",search_bar_date:"SearchBar_search_bar_date__SY1Hf",search_bar_date_input:"SearchBar_search_bar_date_input__BrsvK",search_bar_date_input_text:"SearchBar_search_bar_date_input_text__zBAmV",search_bar_date_active:"SearchBar_search_bar_date_active__1QZ1V",search_bar_button:"SearchBar_search_bar_button__1iV9J",traveler_calendar:"SearchBar_traveler_calendar__rOdlw","react-calendar__tile--active":"SearchBar_react-calendar__tile--active__VMoVn","react-calendar__tile--now":"SearchBar_react-calendar__tile--now__5JB6z",search_bar_date_active_footer:"SearchBar_search_bar_date_active_footer__TP6SM",search_bar_region_active:"SearchBar_search_bar_region_active__ez5VY",traveler_region:"SearchBar_traveler_region__QYatT",filter_buttons_wrapper:"SearchBar_filter_buttons_wrapper__bjVDF",filter_button:"SearchBar_filter_button__OCa9M",filter_selectable_data_wrapper:"SearchBar_filter_selectable_data_wrapper__ZnSMv",selectable_data:"SearchBar_selectable_data__rAdnY",active_data:"SearchBar_active_data__cUD69"}}}]);
//# sourceMappingURL=556.aab131ad.chunk.js.map