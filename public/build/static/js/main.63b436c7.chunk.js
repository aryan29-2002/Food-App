(this.webpackJsonpfoodapp=this.webpackJsonpfoodapp||[]).push([[0],{15:function(e,s,t){},29:function(e,s,t){},37:function(e,s,t){},64:function(e,s,t){},65:function(e,s,t){},66:function(e,s,t){},67:function(e,s,t){},68:function(e,s,t){},69:function(e,s,t){},70:function(e,s,t){},71:function(e,s,t){},72:function(e,s,t){},73:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),n=t(30),r=t.n(n),i=(t(37),t(2)),l=t.n(i),j=t(5),o=t(3),d=t(6),b=t.n(d),u=t(7),m=t(0),h=c.a.createContext();function x(){return Object(a.useContext)(h)}var O=function(e){var s=e.children,t=Object(u.f)(),c=Object(a.useState)(""),n=Object(o.a)(c,2),r=n[0],i=n[1],d=Object(a.useState)(!1),x=Object(o.a)(d,2),O=x[0];function p(){return(p=Object(j.a)(l.a.mark((function e(s,t,a,c){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/user/signup",{name:s,email:t,password:a,confirmPassword:c});case 2:n=e.sent,console.log(n,r),i(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(j.a)(l.a.mark((function e(s,t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("/user/login",{email:s,password:t});case 3:return a=e.sent,console.log("dataaa",a.data),i(a.data),localStorage.setItem("user",JSON.stringify(a.data)),e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function N(){return(N=Object(j.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem("user"),e.next=3,b.a.get("/user/logout");case 3:s=e.sent,console.log(s),i(null);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}x[1],Object(a.useEffect)(Object(j.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=localStorage.getItem("user"),console.log(s,898787),s?(i(JSON.parse(s)),console.log(r),t.push("/")):i(null);case 3:case"end":return e.stop()}}),e)}))),[]);var f={user:r,login:function(e,s){return v.apply(this,arguments)},signUp:function(e,s,t,a){return p.apply(this,arguments)},logout:function(){return N.apply(this,arguments)}};return Object(m.jsx)(h.Provider,{value:f,children:!O&&s})};t(15);var p=function(e){var s=Object(u.f)(),t=Object(a.useState)(""),c=Object(o.a)(t,2),n=c[0],r=c[1],i=Object(a.useState)(""),d=Object(o.a)(i,2),b=d[0],x=d[1],O=Object(a.useState)(""),p=Object(o.a)(O,2),v=p[0],N=p[1],f=Object(a.useState)(""),g=Object(o.a)(f,2),y=g[0],w=g[1],C=Object(a.useContext)(h),S=C.signUp,B=(C.user,function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(n,v,b,y);case 3:s.push("/login"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}());return Object(m.jsx)("div",{className:"container-grey",children:Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"SIGN UP"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsxs)("div",{className:"loginBox",children:[Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Name"}),Object(m.jsx)("input",{className:"name input",type:"text",name:"Name",placeholder:"Your Name",required:"",onChange:function(e){return r(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Email"}),Object(m.jsx)("input",{className:"email input",type:"email",name:"Email",placeholder:"Your Email",required:"",onChange:function(e){return N(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Password"}),Object(m.jsx)("input",{className:"password input",type:"password",name:"Password",placeholder:"**********",onChange:function(e){return x(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Confirm  Password"}),Object(m.jsx)("input",{className:"confirmPassword input",type:"password",name:"ConfirmPassword",placeholder:"**********",onChange:function(e){return w(e.target.value)}})]}),Object(m.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:B,children:"Sign Up"})]})]})})},v=t.p+"static/media/date.fcfd3f00.png",N=t.p+"static/media/carrot.6508ea02.png",f=t.p+"static/media/fast.f1644b7d.png",g=t.p+"static/media/Capture.611de11d.png",y=t.p+"static/media/star.49259244.png";t(64);var w=function(){var e=Object(a.useState)([]),s=Object(o.a)(e,2),t=s[0],c=s[1];return Object(a.useEffect)(Object(j.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/review/top3");case 3:s=e.sent,console.log(s),c(s.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(m.jsx)("div",{className:"reviewImg",children:Object(m.jsxs)("div",{className:"reviewCard",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"REVIEWS"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsx)("div",{className:"rDetail",children:t&&(null===t||void 0===t?void 0:t.map((function(e,s){return Object(m.jsxs)("div",{className:"rCard",children:[console.log("ele in review.js",e),Object(m.jsx)("div",{className:"rimage",children:Object(m.jsx)("img",{alt:"",src:e.user.profileImage,className:"img"})}),Object(m.jsx)("div",{className:"rheader",children:Object(m.jsx)("h3",{className:"rh3",children:e.user.name})}),Object(m.jsx)("div",{className:"rsummary",children:Object(m.jsx)("p",{className:"para",children:e.review})}),Object(m.jsx)("div",{children:Object(m.jsxs)("h4",{children:["Plan Name : ",e.plan.name]})}),Object(m.jsx)("div",{className:"frate",children:Array.from(Array(e.rating).keys()).map((function(e,s){return Object(m.jsx)("img",{alt:"",src:y,className:"img"})}))})]},s)})))})]})})},C=(t(65),t.p+"static/media/check-mark.1c103279.png");var S=function(){var e=Object(a.useState)([]),s=Object(o.a)(e,2),t=s[0],c=s[1];return Object(a.useEffect)(Object(j.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/plans/top3");case 3:s=e.sent,console.log(s,23443),c(s.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(m.jsxs)("div",{className:"plansCard",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"START EATING HEALTHY TODAY"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsx)("div",{className:"planDetails",children:t&&(null===t||void 0===t?void 0:t.map((function(e,s){return Object(m.jsxs)("div",{className:"pCard",children:[Object(m.jsx)("h3",{className:"h3",children:e.name}),Object(m.jsxs)("div",{className:"pCard1",children:[Object(m.jsxs)("div",{className:"priceBox",children:[Object(m.jsxs)("div",{className:"price",children:["Rs ",e.price]}),Object(m.jsx)("div",{className:"duration",children:"/month"})]}),Object(m.jsx)("p",{className:"point",children:"That\u2019s only 2\u20b9 per meal"})]}),Object(m.jsxs)("div",{className:"pCard2",children:[Object(m.jsxs)("div",{className:"ppoints",children:[Object(m.jsx)("img",{src:C,alt:"",className:"img"}),Object(m.jsxs)("p",{className:"point",children:[e.duration," meal every day"]})]}),Object(m.jsxs)("div",{className:"ppoints",children:[Object(m.jsx)("img",{src:C,alt:"",className:"img"}),Object(m.jsxs)("p",{className:"point",children:[e.discount," discount available."]})]}),Object(m.jsxs)("div",{className:"ppoints",children:[Object(m.jsx)("img",{src:C,alt:"",className:"img"}),Object(m.jsxs)("p",{className:"point",children:[e.ratingsAverage," rated meal."]})]})]}),Object(m.jsx)("button",{className:"btn",children:"I'm Hungry"})]},s)})))})]})},B=(t(29),t.p+"static/media/Avocado.a47677c6.mp4"),E=t(4);var k=function(){return Object(m.jsxs)("div",{className:"contactCard",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"CONTACT US"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsxs)("div",{className:"cDetail",children:[Object(m.jsx)("div",{className:"videoBox",children:Object(m.jsx)("video",{src:B,className:"video",muted:"muted",type:"video/mp4",loop:!0,autoPlay:!0})}),Object(m.jsxs)("div",{className:"contactInfo",children:[Object(m.jsxs)("div",{className:"entry",children:[Object(m.jsx)("div",{className:"entry-text",children:"Name"}),Object(m.jsx)("input",{type:"text",name:"Name",placeholder:"Your Name",required:!0})]}),Object(m.jsxs)("div",{className:"entry",children:[Object(m.jsx)("div",{className:"entry-text",children:"Email"}),Object(m.jsx)("input",{type:"email",name:"email",placeholder:"Your Email"})]}),Object(m.jsxs)("div",{className:"entry",children:[Object(m.jsx)("div",{className:"entry-text",children:"How did you find us"}),Object(m.jsxs)("select",{name:"",id:"",className:"select",children:[Object(m.jsx)("option",{value:"",children:"friends"}),Object(m.jsx)("option",{value:"",children:"search"}),Object(m.jsx)("option",{value:"",children:"advertsiment"}),Object(m.jsx)("option",{value:"",children:"other"})]})]}),Object(m.jsxs)("div",{className:"textBox",children:[Object(m.jsx)("div",{className:"entry-text",children:"Drop us a line"}),Object(m.jsx)("textarea",{name:"",id:"",placeholder:"Your Message"})]}),Object(m.jsxs)("div",{className:"checkbox ",children:[Object(m.jsx)("input",{type:"checkbox",name:"email",className:"checkbox"}),Object(m.jsx)("span",{className:"checkbox-conditions",children:"I have read and agree with all the Privacy Policy and Terms Conditions"})]}),Object(m.jsx)("div",{className:"sendBtn",children:Object(m.jsx)(E.b,{to:"#",className:" btn-full form-button",children:"SEND"})})]})]})]})};t(66);var P=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"bgImageCard",children:Object(m.jsx)("div",{className:"introCard",children:Object(m.jsxs)("div",{className:"iCard",children:[Object(m.jsxs)("div",{className:"headerBox",children:[Object(m.jsx)("div",{className:"header1",children:Object(m.jsx)("h1",{className:"hh1",children:"MEAL PLANS."})}),Object(m.jsxs)("div",{className:"header2",children:[Object(m.jsx)("h1",{className:"hh1",children:"FOR"}),Object(m.jsx)("h1",{className:" animateh1",children:"EVERYONE"})]})]}),Object(m.jsxs)("div",{className:"btnBox",children:[Object(m.jsx)("button",{className:"bookNowBtn btn",children:" Book Now"}),Object(m.jsx)("button",{className:"showMoreBtn btn",children:"Show Me More"})]})]})})}),Object(m.jsxs)("div",{className:"featureCard",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"AWESOME FEATURES"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsxs)("div",{className:"fDetail",children:[Object(m.jsxs)("div",{className:"fCard",children:[Object(m.jsx)("div",{className:"fimage",children:Object(m.jsx)("img",{src:v,className:"fimg",alt:""})}),Object(m.jsx)("div",{className:"fheader",children:Object(m.jsx)("h3",{className:"h3",children:"365 DAYS/YEAR"})}),Object(m.jsx)("div",{className:"fsummary",children:Object(m.jsx)("p",{className:"para",children:"Never cook again! We really mean that. Our subscription plans include up to 365 days/year of coverage and you can also choose to order more flexibly if that is your style."})})]}),Object(m.jsxs)("div",{className:"fCard",children:[Object(m.jsx)("div",{className:"fimage",children:Object(m.jsx)("img",{src:f,alt:"",className:"fimg"})}),Object(m.jsx)("div",{className:"fheader",children:Object(m.jsx)("h3",{className:"h3",children:"30 MINUTES OR FREE"})}),Object(m.jsx)("div",{className:"fsummary",children:Object(m.jsx)("p",{className:"para",children:"You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy."})})]}),Object(m.jsxs)("div",{className:"fCard",children:[Object(m.jsx)("div",{className:"fimage",children:Object(m.jsx)("img",{src:N,alt:"",className:"fimg"})}),Object(m.jsx)("div",{className:"fheader",children:Object(m.jsx)("h3",{className:"h3",children:"100% ORGANIC"})}),Object(m.jsx)("div",{className:"fsummary",children:Object(m.jsx)("p",{className:"para",children:"All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!"})})]})]})]}),Object(m.jsxs)("div",{className:"stepsCard",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"STEPS TO FOLLOW"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsxs)("div",{className:"fDetail",children:[Object(m.jsx)("div",{className:"sbox1",children:Object(m.jsx)("img",{src:g,alt:" ",className:"fimg"})}),Object(m.jsxs)("div",{className:"sbox2",children:[Object(m.jsxs)("div",{className:"stepsBox",children:[Object(m.jsx)("div",{className:"num",children:" 1 "}),Object(m.jsx)("div",{className:"steps",children:Object(m.jsx)("p",{className:"para",children:"Choose the subscription plan that best fits your needs and sign up today."})})]}),Object(m.jsxs)("div",{className:"stepsBox",children:[Object(m.jsx)("div",{className:"num",children:" 2 "}),Object(m.jsx)("div",{className:"steps",children:Object(m.jsx)("p",{className:"para",children:"Order your delicious meal using our mobile app or website. Or you can even call us!"})})]}),Object(m.jsxs)("div",{className:"stepsBox",children:[Object(m.jsx)("div",{className:"num",children:" 3 "}),Object(m.jsx)("div",{className:"steps",children:Object(m.jsx)("p",{className:"para",children:"Enjoy your meal after less than 20 minutes. See you the next time!"})})]})]})]})]}),Object(m.jsx)(w,{}),Object(m.jsx)(S,{}),Object(m.jsx)(k,{})]})};t(67),t(68);var T=function(){var e,s=x(),t=s.user,c=s.logout;return Object(a.useEffect)((function(){var e=document.querySelector("nav");window.addEventListener("scroll",(function(){window.pageYOffset>0?e.setAttribute("class","activeNavBar"):0===window.pageYOffset&&e.classList.remove("activeNavBar")}))}),[]),Object(m.jsx)("nav",{children:Object(m.jsx)("div",{className:"menu",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(E.b,{to:"/",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(E.b,{to:"/allPlans",children:"Plans"})}),t?Object(m.jsxs)(m.Fragment,{children:[console.log(t),Object(m.jsx)("li",{children:Object(m.jsx)(E.b,{to:"/profilePage",children:null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.name})}),Object(m.jsx)("li",{children:Object(m.jsx)(E.b,{to:"",onClick:c,children:"Logout"})})]}):Object(m.jsx)("li",{children:Object(m.jsx)(E.b,{to:"/login",children:"Login"})})]})})})};t(69);var A=function(){return Object(m.jsx)("div",{className:"footerImg",children:Object(m.jsxs)("footer",{children:[Object(m.jsxs)("div",{className:"footer-parent",children:[Object(m.jsxs)("ul",{className:"footer-text",children:[Object(m.jsx)("li",{className:"text-value",children:Object(m.jsx)(E.b,{to:"#",children:"About us"})}),Object(m.jsx)("li",{className:"text-value",children:Object(m.jsx)(E.b,{to:"#",children:"ios App"})}),Object(m.jsx)("li",{className:"text-value",children:Object(m.jsx)(E.b,{to:"#",children:"Android App"})})]}),Object(m.jsxs)("ul",{className:"social-link",children:[Object(m.jsx)("li",{children:Object(m.jsx)(E.b,{to:"https://www.facebook.com/foodyy.chaachaa"})}),Object(m.jsx)("li",{children:Object(m.jsx)(E.b,{to:"https://www.instagram.com/foddy_chaachaa"})}),Object(m.jsx)("li",{children:Object(m.jsx)(E.b,{to:"https://twitter.com/ChaaFoody"})}),Object(m.jsx)("li",{children:Object(m.jsx)(E.b,{to:"#"})})]})]}),Object(m.jsx)("p",{className:"footer-p",children:"Copyright \xa9 2019 EVERYONE. All rights reserved."})]})})};var I=function(){var e=Object(u.f)(),s=Object(a.useState)(""),t=Object(o.a)(s,2),c=t[0],n=t[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),d=i[0],b=i[1],x=Object(a.useState)(!1),O=Object(o.a)(x,2),p=(O[0],O[1],Object(a.useContext)(h)),v=p.login,N=(p.user,function(){var s=Object(j.a)(l.a.mark((function s(){return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,v(d,c);case 3:e.push("/"),s.next=9;break;case 6:s.prev=6,s.t0=s.catch(0),console.log(s.t0);case 9:case"end":return s.stop()}}),s,null,[[0,6]])})));return function(){return s.apply(this,arguments)}}());return Object(m.jsx)("div",{className:"container-grey",children:Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"LOGIN"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsxs)("div",{className:"loginBox",children:[Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Email"}),Object(m.jsx)("input",{className:"email input",type:"email",name:"Email",placeholder:"Your Email",required:"",onChange:function(e){return b(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Password"}),Object(m.jsx)("input",{className:"password input",type:"password",name:"Password",placeholder:"**********",onChange:function(e){return n(e.target.value)}})]}),Object(m.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:N,children:"Login"}),Object(m.jsxs)("div",{className:"otherOption",children:[Object(m.jsx)("button",{className:" otherbtns form-button",type:"submit",children:Object(m.jsx)(E.b,{to:"/signup",className:"otherbtns",children:"Sign Up"})}),Object(m.jsx)("button",{className:" otherbtns form-button",type:"submit",children:Object(m.jsx)(E.b,{to:"/forgetPassword",className:"otherbtns",children:"Forget Password"})})]})]})]})})};var D=function(){var e=Object(u.f)(),s=Object(a.useState)(""),t=Object(o.a)(s,2),c=t[0],n=t[1],r=function(){var s=Object(j.a)(l.a.mark((function s(){var t;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,b.a.post("/user/forgetpassword",{email:c});case 3:t=s.sent,e.push("/resetpassword"),console.log(t),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(0),console.log(s.t0);case 11:case"end":return s.stop()}}),s,null,[[0,8]])})));return function(){return s.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"container-grey",children:Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"FORGET PASSWORD"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsxs)("div",{className:"loginBox",children:[Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Email"}),Object(m.jsx)("input",{className:"email input",type:"email",name:"Email",placeholder:"Your Email",required:"",onChange:function(e){return n(e.target.value)}})]}),Object(m.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:r,children:"Send Email"})]})]})})};var R=function(){Object(u.f)();var e=Object(a.useState)(""),s=Object(o.a)(e,2),t=s[0],c=s[1],n=Object(a.useState)(""),r=Object(o.a)(n,2),i=r[0],d=r[1],h=function(){var e=Object(j.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("/user/resetpassword/:token",{password:t,confirmPassword:i});case 3:s=e.sent,console.log(s),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"container-grey",children:Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"RESET PASSWORD"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsxs)("div",{className:"loginBox",children:[Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Password"}),Object(m.jsx)("input",{className:"password input",type:"password",name:"Password",placeholder:"**********",onChange:function(e){return c(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Confirm  Password"}),Object(m.jsx)("input",{className:"confirmPassword input",type:"password",name:"ConfirmPassword",placeholder:"**********",onChange:function(e){return d(e.target.value)}})]}),Object(m.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:h,children:"Reset Password"})]})]})})};t(70);var Y=function(){var e=Object(a.useState)([]),s=Object(o.a)(e,2),t=s[0],c=s[1];return Object(a.useEffect)(Object(j.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/plans/allPlans");case 3:s=e.sent,console.log(s.data),c(s.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(m.jsxs)("div",{className:"allplansCard",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"START EATING HEALTHY TODAY"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsx)("div",{className:"allplanDetails",children:Object(m.jsx)("div",{className:"planDetails",children:t&&(null===t||void 0===t?void 0:t.map((function(e,s){return Object(m.jsxs)("div",{className:"apCard",children:[Object(m.jsx)("h3",{className:"h3",children:e.name}),Object(m.jsxs)("div",{className:"pCard1",children:[Object(m.jsxs)("div",{className:"priceBox",children:[Object(m.jsxs)("div",{className:"price",children:["Rs ",e.price]}),Object(m.jsx)("div",{className:"duration",children:"/month"})]}),Object(m.jsx)("p",{className:"point",children:"That\u2019s only 2\u20b9 per meal"})]}),Object(m.jsxs)("div",{className:"pCard2",children:[Object(m.jsxs)("div",{className:"ppoints",children:[Object(m.jsx)("img",{src:C,alt:"",className:"img"}),Object(m.jsxs)("p",{className:"point",children:[e.duration," meal every day"]})]}),Object(m.jsxs)("div",{className:"ppoints",children:[Object(m.jsx)("img",{src:C,alt:"",className:"img"}),Object(m.jsxs)("p",{className:"point",children:[e.discount," discount available."]})]}),Object(m.jsxs)("div",{className:"ppoints",children:[Object(m.jsx)("img",{src:C,alt:"",className:"img"}),Object(m.jsxs)("p",{className:"point",children:[e.ratingsAverage," rated meal."]})]})]}),Object(m.jsxs)("button",{className:"btn",children:[" ",Object(m.jsx)(E.b,{to:"/planDetail/".concat(e._id),children:"I'm Hungry"})]})]},s)})))})})]})};t(71);var L=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("user")).data),s=Object(o.a)(e,2),t=s[0];s[1],Object(a.useEffect)(Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(t.name),i(t.password),N(t.email),x(t.password),console.log("abcd",t);case 5:case"end":return e.stop()}}),e)}))),[]);var c=Object(a.useState)(),n=Object(o.a)(c,2),r=n[0],i=n[1],d=Object(a.useState)(""),u=Object(o.a)(d,2),h=u[0],x=u[1],O=Object(a.useState)(""),p=Object(o.a)(O,2),v=p[0],N=p[1],f=Object(a.useState)(""),g=Object(o.a)(f,2),y=g[0],w=g[1],C=function(){var e=Object(j.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t._id),e.next=4,b.a.patch("/user/"+t._id,{email:v,name:y,password:r,confirmPassword:h,role:t.role,_id:t._id});case 4:s=e.sent,console.log(s.data.data),localStorage.setItem("user",JSON.stringify(s.data.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return console.log(t),Object(m.jsx)("div",{className:"container-grey",children:Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"Profile"}),Object(m.jsx)("div",{className:"line"}),Object(m.jsx)("div",{className:"profileImage"})]}),Object(m.jsxs)("div",{className:"loginBox",children:[Object(m.jsx)("div",{className:"entryBox",children:Object(m.jsx)("input",{type:"file"})}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Email"}),Object(m.jsx)("input",{className:"email input",type:"email",value:v,onChange:function(e){return N(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Password"}),Object(m.jsx)("input",{className:"password input",type:"text",value:r,onChange:function(e){return i(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Confirm Password"}),Object(m.jsx)("input",{className:"password input",type:"text",value:h,onChange:function(e){return x(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Name"}),Object(m.jsx)("input",{className:"password input",type:"text",value:y,onChange:function(e){return w(e.target.value)}})]}),Object(m.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:C,children:"Update Profile"})]})]})})};t(72);var F=function(){var e=Object(a.useState)({}),s=Object(o.a)(e,2),t=s[0],c=s[1],n=Object(u.g)().id,r=Object(a.useState)(),i=Object(o.a)(r,2),d=i[0],h=i[1],O=Object(a.useState)(""),p=Object(o.a)(O,2),v=p[0],N=p[1],f=Object(a.useState)(),g=Object(o.a)(f,2),y=g[0],w=g[1],C=x().user;function S(e){return e.charAt(0).toUpperCase()+e.slice(1)}console.log(n),Object(a.useEffect)(Object(j.a)(l.a.mark((function e(){var s,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("inside useeffect"),e.next=3,b.a.get("/plans/plan/"+n);case 3:return s=e.sent,console.log(s,565785765),delete s.data.data._id,delete s.data.data.__v,c(s.data.data),e.next=10,b.a.get("/review/"+n);case 10:t=e.sent,console.log(t.data.data),h(t.data.data);case 13:case"end":return e.stop()}}),e)}))),[]),console.log(y);var B=function(){var e=Object(j.a)(l.a.mark((function e(){var s,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(123645),e.next=3,b.a.post("/review/crud/"+n,{review:v,rating:y,user:C.data._id,plan:n});case 3:return s=e.sent,console.log(s),e.next=7,b.a.get("/review/"+n);case 7:t=e.sent,h(t.data.data);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(l.a.mark((function e(s){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("/review/crud/"+n,{data:{id:s}});case 3:return t=e.sent,console.log(t.config.data),e.next=7,b.a.get("/review/"+n);case 7:a=e.sent,console.log(a),h(a.data.data),alert("review deleted"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(s){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"pDetailBox",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"PLAN DETAILS"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsx)("div",{className:"planDetailBox",children:Object(m.jsx)("div",{className:"planDetail",children:Object(m.jsx)("div",{className:"loginBox",children:Object.keys(t).map((function(e,s){return Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:S(e)}),Object(m.jsx)("div",{className:" input",children:S(t[e].toString())})]},s)}))})})}),Object(m.jsxs)("div",{className:"reviewBox",children:[Object(m.jsxs)("div",{className:"reviewEnrty",children:[Object(m.jsx)("input",{type:"text",value:v,onChange:function(e){return N(e.target.value)}}),Object(m.jsxs)("select",{name:"",id:"",className:"select",onChange:function(e){w(e.target.value)},children:[Object(m.jsx)("option",{value:"5",children:"5 Excellent"}),Object(m.jsx)("option",{value:"4",children:"4 Very Good"}),Object(m.jsx)("option",{value:"3",children:"3 Good"}),Object(m.jsx)("option",{value:"2",children:"2 Poor"}),Object(m.jsx)("option",{value:"1",children:"1 Very Poor"})]}),Object(m.jsx)("button",{className:"btn",onClick:B,children:"Submit"})]}),d&&(null===d||void 0===d?void 0:d.map((function(e,s){return Object(m.jsxs)("div",{className:"reviewsCard",children:[Object(m.jsxs)("div",{className:"pdreviews",children:[Object(m.jsxs)("div",{className:"pdrdetail",children:[Object(m.jsx)("h3",{children:e.user.name}),Object(m.jsxs)("div",{className:"input",children:[" ",e.review]})]}),Object(m.jsx)("div",{className:"rate",children:Object(m.jsx)("label",{htmlFor:"star5",title:"text",children:e.rating})})]}),Object(m.jsx)("div",{className:"rcBtn",children:Object(m.jsx)("button",{className:"showMoreBtn btn",onClick:function(){E(e._id)},children:"Delete"})})]},s)})))]})]})};var _=function(){return Object(m.jsx)(E.a,{children:Object(m.jsxs)(O,{children:[Object(m.jsx)(T,{}),Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{path:"/signup",children:Object(m.jsx)(p,{})}),Object(m.jsx)(u.a,{path:"/login",children:Object(m.jsx)(I,{})}),Object(m.jsx)(u.a,{path:"/forgetPassword",children:Object(m.jsx)(D,{})}),Object(m.jsx)(u.a,{path:"/resetpassword",children:Object(m.jsx)(R,{})}),Object(m.jsx)(u.a,{path:"/allPlans",children:Object(m.jsx)(Y,{})}),Object(m.jsx)(u.a,{path:"/profilePage",children:Object(m.jsx)(L,{})}),Object(m.jsx)(u.a,{path:"/planDetail/:id",children:Object(m.jsx)(F,{})}),Object(m.jsx)(u.a,{path:"/",children:Object(m.jsx)(P,{})})]}),Object(m.jsx)(A,{})]})})},U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,74)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,n=s.getLCP,r=s.getTTFB;t(e),a(e),c(e),n(e),r(e)}))};r.a.render(Object(m.jsx)(_,{}),document.getElementById("root")),U()}},[[73,1,2]]]);
//# sourceMappingURL=main.63b436c7.chunk.js.map