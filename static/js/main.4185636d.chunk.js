(this["webpackJsonpgoit-react-hw-09-feedback"]=this["webpackJsonpgoit-react-hw-09-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={counterValue:"Statistics_counterValue__55z5w"}},function(e,t,n){e.exports={containerBtn:"FeedbackOptions_containerBtn__3cdP0",btn:"FeedbackOptions_btn__H0uwO"}},,,function(e,t,n){e.exports={title:"Section_title__3Gga4",counter:"Section_counter__-nBKy"}},,function(e,t,n){e.exports={notification:"Notification_notification__o4kJP"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),i=n.n(s),o=(n(13),n(4)),r=n(2),u=n.n(r),l=n(0);var b=function(e){var t=e.options,n=e.state,c=e.total,a=e.positiveFeedback;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{className:u.a.counter,children:t.map((function(e){return Object(l.jsxs)("li",{className:u.a.counterValue,children:[e.slice(0,1).toUpperCase()+e.slice(1)," : ",n[e]]},e)}))}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{className:u.a.counterValue,children:["Total: ",c]}),Object(l.jsxs)("p",{className:u.a.counterValue,children:["Positive feedback: ",a,"%"]})]})]})},j=n(3),d=n.n(j);var O=function(e){var t=e.onLeaveFeedback;return Object(l.jsxs)("div",{className:d.a.containerBtn,children:[Object(l.jsx)("button",{type:"button",className:d.a.btn,onClick:function(){return t("good")},children:"Good"}),Object(l.jsx)("button",{type:"button",className:d.a.btn,onClick:function(){return t("neutral")},children:"Neutral"}),Object(l.jsx)("button",{type:"button",className:d.a.btn,onClick:function(){return t("bad")},children:"Bad"})]})},f=n(8),h=n.n(f),x=function(e){var t=e.message;return Object(l.jsx)("p",{className:h.a.notification,children:t})},p=n(6),k=n.n(p),v=function(e){var t=e.title,n=e.children;return Object(l.jsxs)("div",{className:k.a.counter,children:[Object(l.jsx)("h2",{className:k.a.title,children:t}),n]})};function m(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),i=Object(o.a)(s,2),r=i[0],u=i[1],j=Object(c.useState)(0),d=Object(o.a)(j,2),f=d[0],h=d[1],p={good:n,neutral:r,bad:f};console.log(p);var k=n+r+f,m=Math.round(100*n/k);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(v,{title:"Please leave feedback",children:Object(l.jsx)(O,{options:[n,r,f],onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":u((function(e){return e+1}));break;case"bad":h((function(e){return e+1}));break;default:return}}})}),Object(l.jsx)(v,{title:"Statistics",children:k>0?Object(l.jsx)(b,{options:Object.keys(p),state:p,total:k,positiveFeedback:m}):Object(l.jsx)(x,{message:"No feedback given"})})]})}function _(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(m,{})})}i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.4185636d.chunk.js.map