"use strict";var e=require("react"),t=require("prop-types"),a=require("moment");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=n(e),r=n(t),i=n(a);function d({displayText:e,isCurrentDate:t,dateObj:a,firstDayStyle:n={},date:r="",handleDaySelect:i=(()=>{}),isDisabled:d=!1,isDateSelected:s=!1,...o}){return l.default.createElement("a",{onClick:()=>{d||i(r)},"data-date":r,className:`date-container js-dateContainer ${t?"today":""} ${d?"disabled-date":""} ${s?"selected":""}   `,style:{...n}},l.default.createElement("time",null,e))}function s({displayText:e="",...t}){return l.default.createElement("span",{className:"day-title js-dayTitle"},e)}function o({displayMonth:e,displayYear:t,...a}){return l.default.createElement("div",{className:"month"},l.default.createElement("div",null,e,l.default.createElement("span",{className:"year"},t)))}const f=(e=null)=>{if(e){let t=e.split("-"),a=t[0]?t[0]:null,n=t[1]?t[1]:null,l=t[2]?t[2]:null;if(a&&n&&l)return new Date(l,n-1,a)}return new Date},c=(e,t)=>{let a=Math.floor(e.getTime()-t.getTime()),n=Math.floor(a/24192e5);return Math.abs(Math.round(n))},u=(e,t="DD-MM-yyyy")=>i.default.isMoment(e)?i.default(e).format(t):"",y=(e="",t="DD-MM-yyyy")=>e?i.default(e,t):"",m=(e="",t="",a="")=>!!(p(e)&&p(t)&&p(a))&&i.default(e.format("YYYY-MM-DD")).isBetween(t.format("YYYY-MM-DD"),a.format("YYYY-MM-DD")),p=e=>i.default.isMoment(e),h=e=>"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e),b=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],D=()=>{};function M({calendarHeight:t=500,calendarWidth:a=450,renderMinDate:n,renderMaxDate:r,visibleDate:p,inifinityScroll:M,isMultipleSelect:g=false,handleDateSelect:Y=D,selectedDates:x=[],disabledDates:w=[],calendarContainerClass:S="",calendarHeaderContainerClass:C="",calendarDateContainerClass:v="",...E}){let T=b;const j=parseInt(350),[N,$]=e.useState(""),[k,A]=e.useState(""),[I,H]=e.useState(x),[O,_]=e.useState(w),[R,q]=e.useState([]),[B,W]=e.useState(!1),[z,F]=e.useState(0),G=e.useRef(null);e.useEffect((()=>{L(),J(),K()}),[]);const J=()=>{let e=[];Array.isArray(x)&&x.map((t=>{let a=f(t);h(a)&&e.push(t)})),H(e)},K=()=>{let e=[];Array.isArray(w)&&w.map((t=>{let a=f(t);h(a)&&e.push(t)})),_(e)};e.useEffect((()=>{setTimeout((()=>{X()}),200)}),[G]);const L=()=>{let e=P(),t=e.start_date,a=e.end_date,n=f(t),l=f(a),r=c(n,l);$(u(y(t),"MMMM")),A(u(y(t),"YYYY")),Q(t,r)},P=()=>{let e,t,a=new Date,l=new Date(2023,0,1);if(n&&h(n)&&(a=n),r&&h(r)&&(l=r),!p&&!n&&!r)return{start_date:u(i.default(a).subtract(1,"months")),end_date:u(i.default(a).add(10,"months"))};if(p&&h(p)&&!n&&!r)return{start_date:u(i.default(p).subtract(1,"months")),end_date:u(i.default(p).add(10,"months"))};let d=new Date;if(p&&h(p)&&(d=p),!n&&r&&h(r)&&(a=f(u(i.default(r).subtract(12,"months"))),p||(d=r)),m(y(d),y(a),y(l))){let t=c(a,d);t-=1,e=u(i.default(d,"DD-MM-YYYY").subtract(t,"months"))}else e=u(i.default(a,"DD-MMMM-YYYY"));return t=u(i.default(l,"DD-MM-YYYY")),{start_date:e,end_date:t}},Q=(e,t)=>{let a=new Array(t).fill().map(((t,a)=>i.default(e,"DD-MM-YYYY").add(a,"M").format("DD-MM-YYYY")));q(a)},U=(e,t)=>{M&&(e<=500&&V(!0),t<=500&&B&&V(!1))},V=(e=!0,t=!1)=>{let a=[...R];if(a.length>0){let n=a.pop(),l=a[0],r=6;if(e){let e=u(y(n));for(let t=0;t<6;t++)a=[...a,i.default(e,"DD-MM-YYYY").add(t,"M").format("DD-MM-YYYY")];q(a)}else{let e=u(y(l));t&&(r=3);for(let t=0;t<r;t++){a=[i.default(e,"DD-MM-YYYY").subtract(t+1,"months").format("DD-MM-YYYY"),...a]}q(a)}}},X=()=>{let e=new Date;p&&h(p)?e=p:n&&h(n)||(e=r);let t=u(i.default(e)),a=G.current.querySelector(`.js-dateContainer[data-date='${t}']`);if(a){let e=a.offsetTop;e-=parseInt(j)-100,G.current.scrollTo({top:e,behavior:"smooth"}),setTimeout((()=>{W(!0)}),1e3)}},Z=e=>{let t=[...I];if(g){t.includes(e)?t=t.filter((t=>t!==e)):t.push(e),H([...t]),Y([...t])}else H([e]),Y([e])};return l.default.createElement("div",{className:`infinity-calendar ${S} `,style:{height:parseInt(t),width:parseInt(a)}},l.default.createElement("div",{className:`infinity-calendar-header ${C} `},l.default.createElement(o,{displayMonth:N,displayYear:k}),l.default.createElement("div",{className:"days"},T.map(((e,t)=>l.default.createElement(s,{displayText:e,key:t}))))),l.default.createElement("div",{ref:G,className:`infinity-calendar-day-container ${v} `,onScroll:e=>{let t=e.target,a=t.scrollHeight,n=t.scrollTop,l=z,r=parseInt(j)-10,i=Math.floor(n/r),d=Math.floor(a/i);U(d,n);let s=[...t.querySelectorAll(".js-calendarSubContainer")];if(l!==i){F(i);let e=s[i],t=`${e.getAttribute("data-month")} `,a=e.getAttribute("data-year");$(t),A(a)}},style:{maxHeight:parseInt(t)-200,width:a-30}},R.length>0?R.map(((e,t)=>((e,t)=>{let a=u(i.default()),s=e.daysInMonth(),o=u(e,"MMMM"),f=e.year();const c=Array(s).fill().map(((e,t)=>t+1));let p=null,b=null;return n&&h(n)&&(p=y(n)),r&&h(r)&&(b=y(r)),l.default.createElement("div",{key:u(e),className:"js-calendarSubContainer infinity-calendar-sub-container","data-month":o,"data-year":f,"data-date":u(e),style:{height:parseInt(j),minHeigth:parseInt(j),maxHeight:parseInt(j)}},l.default.createElement("div",{className:"dates"},c.map(((t,n)=>{let r=i.default(`${n+1}-${e.month()+1}-${e.year()}`,"DD-MM-yyyy"),s=u(r),o=a===s,f={};1===r.date()&&(f={gridColumn:e.day()});let c=!1,y=!0;return p&&b?y=m(r,p,b):p?y=r.diff(p)>=0:b&&(y=b.diff(r)>=0),y?O.includes(s)&&(c=!0):c=!0,l.default.createElement(d,{key:n,date:s,firstDayStyle:f,displayText:`${t}`,dateObj:r,isCurrentDate:o,handleDaySelect:Z,isDisabled:c,isDateSelected:I.includes(s)})}))))})(i.default(e,"DD-MM-YYYY")))):null))}!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===a&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}('@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Rowdies:wght@400;700&display=swap");.infinity-calendar{background:transparent;border:1px solid #881ceb;border-radius:12px;box-shadow:0 1px 70px 15px rgba(0,0,0,.1);display:inline-grid;font-family:initial;font-family:Roboto,sans-serif;justify-content:center;scroll-behavior:smooth}.infinity-calendar-header{background:#881ceb;border-radius:12px 12px 0 0;color:#fff;display:flex;flex-direction:column;justify-content:center;padding:20px 15px}.infinity-calendar .month{align-items:center;display:flex;font-size:20px;font-weight:300;justify-content:center;margin-bottom:20px}.infinity-calendar .month div{font-family:Roboto,sans-serif;font-weight:700}.infinity-calendar .month .year{font-weight:600;margin-left:10px}.infinity-calendar .days{align-items:center;color:#fff;display:grid;font-weight:600;grid-template-columns:repeat(7,1fr);justify-content:center}.infinity-calendar .days .day-title{align-self:center;color:#fff;font-family:Roboto,sans-serif;font-weight:400;justify-self:center;min-width:50px;text-align:center}.infinity-calendar-day-container{background:#fff none repeat scroll 0 0;overflow:auto;padding:20px 15px;scroll-behavior:smooth}.infinity-calendar-sub-container{margin-top:0}.infinity-calendar .dates{display:grid;grid-template-columns:repeat(7,1fr)}.infinity-calendar .dates .date-container{align-items:center;align-self:center;background:transparent;border:0;border-radius:50px;cursor:pointer;display:flex;font-family:Roboto,sans-serif;font-size:16px;font-weight:400;height:50px;justify-content:center;justify-self:center;margin:5px;min-width:50px;outline:0;transition-duration:.2s;width:50px}.infinity-calendar .dates .date-container.today{background:#ff9d0a;border:#ff9d0a;box-shadow:inset 0 0 0 2px #ff9d0a;color:#fff}.infinity-calendar .dates .date-container:hover{border:#881ceb;box-shadow:inset 0 0 0 2px #881ceb}.infinity-calendar .dates .date-container.selected{background:#881ceb;border:#881ceb;box-shadow:inset 0 0 0 2px #881ceb;color:#fff}.infinity-calendar .dates .date-container.disabled-date{background:#efefef!important;border:#efefef;box-shadow:inset 0 0 0 2px #efefef;color:#000}'),M.propTypes={name:r.default.string,showHeader:r.default.bool,calendarHeight:r.default.number,calendarWidth:r.default.number,renderMinDate:r.default.instanceOf(Date),renderMaxDate:r.default.instanceOf(Date),visibleDate:r.default.instanceOf(Date),inifinityScroll:r.default.bool,isMultipleSelect:r.default.bool,handleDateSelect:r.default.func,selectedDates:r.default.arrayOf(r.default.string),disabledDates:r.default.arrayOf(r.default.string),calendarContainerClass:r.default.string,calendarHeaderContainerClass:r.default.string,calendarDateContainerClass:r.default.string},module.exports=M;
