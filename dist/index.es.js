import e,{useState as t,useRef as a,useEffect as n}from"react";import r from"prop-types";import i from"moment";function l({displayText:t,isCurrentDate:a,dateObj:n,firstDayStyle:r={},date:i="",handleDaySelect:l=(()=>{}),isDisabled:s=!1,isDateSelected:o=!1,...d}){return e.createElement("a",{onClick:()=>{s||l(i)},"data-date":i,className:`date-container js-dateContainer ${a?"today":""} ${s?"disabled-date":""} ${o?"selected":""}   `,style:{...r}},e.createElement("time",null,t))}function s({displayText:t="",...a}){return e.createElement("span",{className:"day-title js-dayTitle"},t)}function o({displayMonth:t,displayYear:a,...n}){return e.createElement("div",{className:"month"},e.createElement("div",null,t,e.createElement("span",{className:"year"},a)))}const d=(e=null)=>{if(e){let t=e.split("-"),a=t[0]?t[0]:null,n=t[1]?t[1]:null,r=t[2]?t[2]:null;if(a&&n&&r)return new Date(r,n-1,a)}return new Date},c=(e,t)=>{let a=Math.floor(e.getTime()-t.getTime()),n=Math.floor(a/24192e5);return Math.abs(Math.round(n))},f=(e,t="DD-MM-yyyy")=>i.isMoment(e)?i(e).format(t):"",y=(e="",t="DD-MM-yyyy")=>e?i(e,t):"",m=(e="",t="",a="")=>!!(p(e)&&p(t)&&p(a))&&i(e.format("YYYY-MM-DD")).isBetween(t.format("YYYY-MM-DD"),a.format("YYYY-MM-DD")),p=e=>i.isMoment(e),u=e=>"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e),h=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],b=()=>{};function D({calendarHeight:r=500,calendarWidth:p=450,renderMinDate:D,renderMaxDate:M,visibleDate:g,inifinityScroll:Y=!0,isMultipleSelect:x=false,handleDateSelect:w=b,selectedDates:C=[],disabledDates:S=[],calendarContainerClass:v="",calendarHeaderContainerClass:T="",calendarDateContainerClass:E="",...j}){let N=h;const $=parseInt(350),[k,A]=t(""),[I,H]=t(""),[O,_]=t(C),[R,B]=t(S),[W,q]=t([]),[z,F]=t(!1),[G,J]=t(0),K=a(null);n((()=>{Q(),L(),P()}),[]);const L=()=>{let e=[];Array.isArray(C)&&C.map((t=>{let a=d(t);u(a)&&e.push(t)})),_(e)},P=()=>{let e=[];Array.isArray(S)&&S.map((t=>{let a=d(t);u(a)&&e.push(t)})),B(e)};n((()=>{setTimeout((()=>{ee()}),200)}),[K]);const Q=()=>{let e=U(),t=e.start_date,a=e.end_date,n=d(t),r=d(a),i=c(n,r);A(f(y(t),"MMMM")),H(f(y(t),"YYYY")),V(t,i)},U=()=>{let e,t,a=new Date,n=new Date(2023,0,1);if(D&&u(D)&&(a=D),M&&u(M)&&(n=M),!g&&!D&&!M)return{start_date:f(i(a).subtract(1,"months")),end_date:f(i(a).add(10,"months"))};if(g&&u(g)&&!D&&!M)return{start_date:f(i(g).subtract(1,"months")),end_date:f(i(g).add(10,"months"))};let r=new Date;if(g&&u(g)&&(r=g),!D&&M&&u(M)&&(a=d(f(i(M).subtract(12,"months"))),g||(r=M)),m(y(r),y(a),y(n))){let t=c(a,r);t-=1,e=f(i(r,"DD-MM-YYYY").subtract(t,"months"))}else e=f(i(a,"DD-MMMM-YYYY"));return t=f(i(n,"DD-MM-YYYY")),{start_date:e,end_date:t}},V=(e,t)=>{let a=new Array(t).fill().map(((t,a)=>i(e,"DD-MM-YYYY").add(a,"M").format("DD-MM-YYYY")));q(a)},X=(e,t)=>{Y&&(e<=500&&Z(!0),t<=500&&z&&Z(!1))},Z=(e=!0,t=!1)=>{let a=[...W];if(a.length>0){let n=a.pop(),r=a[0],l=6;if(e){let e=f(y(n));for(let t=0;t<6;t++)a=[...a,i(e,"DD-MM-YYYY").add(t,"M").format("DD-MM-YYYY")];q(a)}else{let e=f(y(r));t&&(l=3);for(let t=0;t<l;t++){a=[i(e,"DD-MM-YYYY").subtract(t+1,"months").format("DD-MM-YYYY"),...a]}q(a)}}},ee=()=>{let e=new Date;g&&u(g)?e=g:D&&u(D)||(e=M);let t=f(i(e)),a=K.current.querySelector(`.js-dateContainer[data-date='${t}']`);if(a){let e=a.offsetTop;e-=parseInt($)-100,K.current.scrollTo({top:e,behavior:"smooth"}),setTimeout((()=>{F(!0)}),1e3)}},te=e=>{let t=[...O];if(x){t.includes(e)?t=t.filter((t=>t!==e)):t.push(e),_([...t]),w([...t])}else _([e]),w([e])};return e.createElement("div",{className:`infinity-calendar ${v} `,style:{height:parseInt(r),width:parseInt(p)}},e.createElement("div",{className:`infinity-calendar-header ${T} `},e.createElement(o,{displayMonth:k,displayYear:I}),e.createElement("div",{className:"days"},N.map(((t,a)=>e.createElement(s,{displayText:t,key:a}))))),e.createElement("div",{ref:K,className:`infinity-calendar-day-container ${E} `,onScroll:e=>{let t=e.target,a=t.scrollHeight,n=t.scrollTop,r=G,i=parseInt($)-10,l=Math.floor(n/i),s=Math.floor(a/l);X(s,n);let o=[...t.querySelectorAll(".js-calendarSubContainer")];if(r!==l){J(l);let e=o[l],t=`${e.getAttribute("data-month")} `,a=e.getAttribute("data-year");A(t),H(a)}},style:{maxHeight:parseInt(r)-200,width:p-30}},W.length>0?W.map(((t,a)=>((t,a)=>{let n=f(i()),r=t.daysInMonth(),s=f(t,"MMMM"),o=t.year();const d=Array(r).fill().map(((e,t)=>t+1));let c=null,p=null;return D&&u(D)&&(c=y(D)),M&&u(M)&&(p=y(M)),e.createElement("div",{key:f(t),className:"js-calendarSubContainer infinity-calendar-sub-container","data-month":s,"data-year":o,"data-date":f(t),style:{height:parseInt($),minHeigth:parseInt($),maxHeight:parseInt($)}},e.createElement("div",{className:"dates"},d.map(((a,r)=>{let s=i(`${r+1}-${t.month()+1}-${t.year()}`,"DD-MM-yyyy"),o=f(s),d=n===o,y={};1===s.date()&&(y={gridColumn:t.day()});let u=!1,h=!0;return c&&p?h=m(s,c,p):c?h=s.diff(c)>=0:p&&(h=p.diff(s)>=0),h?R.includes(o)&&(u=!0):u=!0,e.createElement(l,{key:r,date:o,firstDayStyle:y,displayText:`${a}`,dateObj:s,isCurrentDate:d,handleDaySelect:te,isDisabled:u,isDateSelected:O.includes(o)})}))))})(i(t,"DD-MM-YYYY")))):null))}!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===a&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}('@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Rowdies:wght@400;700&display=swap");.infinity-calendar{background:transparent;border:1px solid #881ceb;border-radius:12px;box-shadow:0 1px 70px 15px rgba(0,0,0,.1);display:inline-grid;font-family:initial;font-family:Roboto,sans-serif;justify-content:center;scroll-behavior:smooth}.infinity-calendar-header{background:#881ceb;border-radius:12px 12px 0 0;color:#fff;display:flex;flex-direction:column;justify-content:center;padding:20px 15px}.infinity-calendar .month{align-items:center;display:flex;font-size:20px;font-weight:300;justify-content:center;margin-bottom:20px}.infinity-calendar .month div{font-family:Roboto,sans-serif;font-weight:700}.infinity-calendar .month .year{font-weight:600;margin-left:10px}.infinity-calendar .days{align-items:center;color:#fff;display:grid;font-weight:600;grid-template-columns:repeat(7,1fr);justify-content:center}.infinity-calendar .days .day-title{align-self:center;color:#fff;font-family:Roboto,sans-serif;font-weight:400;justify-self:center;min-width:50px;text-align:center}.infinity-calendar-day-container{background:#fff none repeat scroll 0 0;overflow:auto;padding:20px 15px;scroll-behavior:smooth}.infinity-calendar-sub-container{margin-top:0}.infinity-calendar .dates{display:grid;grid-template-columns:repeat(7,1fr)}.infinity-calendar .dates .date-container{align-items:center;align-self:center;background:transparent;border:0;border-radius:50px;cursor:pointer;display:flex;font-family:Roboto,sans-serif;font-size:16px;font-weight:400;height:50px;justify-content:center;justify-self:center;margin:5px;min-width:50px;outline:0;transition-duration:.2s;width:50px}.infinity-calendar .dates .date-container.today{background:#ff9d0a;border:#ff9d0a;box-shadow:inset 0 0 0 2px #ff9d0a;color:#fff}.infinity-calendar .dates .date-container:hover{border:#881ceb;box-shadow:inset 0 0 0 2px #881ceb}.infinity-calendar .dates .date-container.selected{background:#881ceb;border:#881ceb;box-shadow:inset 0 0 0 2px #881ceb;color:#fff}.infinity-calendar .dates .date-container.disabled-date{background:#efefef!important;border:#efefef;box-shadow:inset 0 0 0 2px #efefef;color:#000}'),D.propTypes={calendarHeight:r.number,calendarWidth:r.number,renderMinDate:r.instanceOf(Date),renderMaxDate:r.instanceOf(Date),visibleDate:r.instanceOf(Date),inifinityScroll:r.bool,isMultipleSelect:r.bool,handleDateSelect:r.func,selectedDates:r.arrayOf(r.string),disabledDates:r.arrayOf(r.string),calendarContainerClass:r.string,calendarHeaderContainerClass:r.string,calendarDateContainerClass:r.string};export{D as default};
