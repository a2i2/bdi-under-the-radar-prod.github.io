import{f as $,x as u,h as j,c as v,j as o,e,J as x,P as w,Q as y,k as l,l as m,F as I,m as S,D as z,o as _,T as H,A as n,p as Q,b as K,ay as X,av as Y,ax as Z,az as O,aA as ee,_ as te}from"./index.5725d0b9.js";import{C as ae}from"./CheckboxControl.ced2a8ad.js";const k=h=>(Q("data-v-8d9f8ed9"),h=h(),K(),h),le={class:"auth-test-page"},oe=k(()=>e("hr",null,null,-1)),se={class:"atp-grid"},ne={class:"atp-mobile"},ie=["disabled"],ue={class:"atp-email"},de=["disabled"],ce={class:"atp-participant"},re={class:"atp-otp"},pe=["disabled"],ve={class:"atp-button-row"},me=k(()=>e("hr",null,null,-1)),_e=k(()=>e("hr",null,null,-1)),he={key:0},be={class:"profile-box"},ge=["src"],fe={key:1},xe=$({__name:"TestAuthView",setup(h){var E,P;const{user:d,isLoggedIn:c,email:N,mobile:L,startPasswordlessEmailLogin:U,submitEmailOTP:A,startPasswordlessSmsLogin:B,submitSmsOTP:R,getRouterTargetForHomeOrLoginIfNeeded:G,logout:M}=z(),b=u(""),g=u(""),r=u((E=N.value)!=null?E:""),p=u((P=L.value)!=null?P:""),f=u(""),i=u(!0),C=j(()=>{var t,a;return(a=(t=d.value)==null?void 0:t.user_metadata.participantId)!=null?a:""});async function D(){try{const t=await X();b.value=JSON.stringify(t,null,"	")}catch(t){b.value=`${t}`}}async function F(){try{const a=await Y("00000000-0000-0000-0000-000000000001");g.value=JSON.stringify(a,null,"	")}catch(t){console.log("caught"),g.value=`${t}`}}async function J(){const t=i.value?p.value:void 0,a=i.value?void 0:r.value;return await Z(a,t),V()}async function V(){i.value?await B(p.value):await U(r.value)}async function q(){const t=f.value;i.value?await R(t,p.value):await A(t,r.value),O.push(G())}const T=()=>{M(),O.push("/")},W=async()=>{await ee(C.value),T()};return(t,a)=>(_(),v("div",le,[o(H,{label:"Back",link:"/"}),oe,e("div",se,[e("div",null,[e("div",ne,[x("mobile: "),w(e("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>p.value=s),type:"text",disabled:l(c)},null,8,ie),[[y,p.value]])]),e("div",ue,[x("email: "),w(e("input",{"onUpdate:modelValue":a[1]||(a[1]=s=>r.value=s),type:"text",disabled:l(c)},null,8,de),[[y,r.value]])]),e("div",ce,"participantId: "+m(l(C)),1),e("div",re,[x("otp response: "),w(e("input",{"onUpdate:modelValue":a[2]||(a[2]=s=>f.value=s),type:"text",disabled:l(c)},null,8,pe),[[y,f.value]])]),e("div",ve,[l(c)?S("",!0):(_(),v(I,{key:0},[o(n,{label:"Sign Up",onClick:J}),o(n,{label:"Request OTP Code",onClick:V}),o(n,{label:"Enter OTP Code",onClick:q}),o(ae,{modelValue:i.value,"onUpdate:modelValue":a[3]||(a[3]=s=>i.value=s),label:"Use Mobile Login"},null,8,["modelValue"])],64)),l(c)?(_(),v(I,{key:1},[o(n,{label:"Log Out",icon:"signup",onClick:T}),o(n,{label:"Withdraw (delete user info)",icon:"signup",onClick:W})],64)):S("",!0)]),me,e("div",null,[o(n,{label:"Get Experiments",icon:"download",onClick:D}),e("pre",null,m(b.value),1)]),_e,e("div",null,[o(n,{label:"Get Experiment",icon:"download",onClick:F}),e("pre",null,m(g.value),1)])]),e("div",null,[l(d)?(_(),v("div",he,[e("div",be,[e("img",{src:l(d).picture,alt:"Profile"},null,8,ge),e("div",null,[e("h2",null,m(l(d).nickname),1),e("span",null,m(l(d).email),1)])])])):(_(),v("div",fe,"No User info"))])])]))}});const ke=te(xe,[["__scopeId","data-v-8d9f8ed9"]]);export{ke as default};
