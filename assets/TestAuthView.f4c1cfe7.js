import{f as D,x as _,h as F,c,j as n,e,J as b,P as C,Q as T,k as s,l as u,F as V,m as E,D as J,o as d,T as q,A as o,p as W,b as $,ay as j,av as z,ax as H,az as I,aA as M,_ as Q}from"./index.d5f8d194.js";const f=r=>(W("data-v-9c5218f9"),r=r(),$(),r),K={class:"auth-test-page"},X=f(()=>e("hr",null,null,-1)),Y={class:"atp-grid"},Z={class:"atp-email"},ee=["disabled"],te={class:"atp-participant"},ae={class:"atp-otp"},se=["disabled"],ne={class:"atp-button-row"},oe=f(()=>e("hr",null,null,-1)),le=f(()=>e("hr",null,null,-1)),ie={key:0},ce={class:"profile-box"},ue=["src"],de={key:1},re=D({__name:"TestAuthView",setup(r){var k;const{user:l,isLoggedIn:p,email:P,startPasswordlessLogin:x,submitOTP:N,getRouterTargetForHomeOrLoginIfNeeded:O,logout:S}=J(),v=_(""),m=_(""),i=_((k=P.value)!=null?k:""),h=_(""),w=F(()=>{var t,a;return(a=(t=l.value)==null?void 0:t.user_metadata.participantId)!=null?a:""});async function A(){try{const t=await j();v.value=JSON.stringify(t,null,"	")}catch(t){v.value=`${t}`}}async function B(){try{const a=await z("00000000-0000-0000-0000-000000000001");m.value=JSON.stringify(a,null,"	")}catch(t){console.log("caught"),m.value=`${t}`}}async function L(){const t=i.value;await H(t),await x(t)}async function R(){const t=i.value;await x(t)}async function U(){const t=i.value,a=h.value;await N(a,t),I.push(O())}const y=()=>{S(),I.push("/")},G=async()=>{await M(w.value),y()};return(t,a)=>(d(),c("div",K,[n(q,{label:"Back",link:"/"}),X,e("div",Y,[e("div",null,[e("div",Z,[b("email: "),C(e("input",{"onUpdate:modelValue":a[0]||(a[0]=g=>i.value=g),type:"text",disabled:s(p)},null,8,ee),[[T,i.value]])]),e("div",te,"participantId: "+u(s(w)),1),e("div",ae,[b("otp response: "),C(e("input",{"onUpdate:modelValue":a[1]||(a[1]=g=>h.value=g),type:"text",disabled:s(p)},null,8,se),[[T,h.value]])]),e("div",ne,[s(p)?E("",!0):(d(),c(V,{key:0},[n(o,{label:"Sign Up",onClick:L}),n(o,{label:"Request OTP Code",onClick:R}),n(o,{label:"Enter OTP Code",onClick:U})],64)),s(p)?(d(),c(V,{key:1},[n(o,{label:"Log Out",icon:"signup",onClick:y}),n(o,{label:"Withdraw (delete user info)",icon:"signup",onClick:G})],64)):E("",!0)]),oe,e("div",null,[n(o,{label:"Get Experiments",icon:"download",onClick:A}),e("pre",null,u(v.value),1)]),le,e("div",null,[n(o,{label:"Get Experiment",icon:"download",onClick:B}),e("pre",null,u(m.value),1)])]),e("div",null,[s(l)?(d(),c("div",ie,[e("div",ce,[e("img",{src:s(l).picture,alt:"Profile"},null,8,ue),e("div",null,[e("h2",null,u(s(l).nickname),1),e("span",null,u(s(l).email),1)])])])):(d(),c("div",de,"No User info"))])])]))}});const _e=Q(re,[["__scopeId","data-v-9c5218f9"]]);export{_e as default};
