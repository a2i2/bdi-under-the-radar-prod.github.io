import{f as N,h as B,x as a,H as F,I as Z,c as d,j as v,F as R,e as s,J as E,l as x,m as V,K as k,k as y,A as T,T as L,L as O,M as D,N as K,p as U,b as j,o as m,O as H,_ as P,u as M,z as J,C as Y,D as G,n as Q}from"./index.bc5e5718.js";import{T as A}from"./TextInput.982e4a54.js";var z={},W=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;z.validate=function(e){if(!e||e.length>254)return!1;var p=W.test(e);if(!p)return!1;var n=e.split("@");if(n[0].length>64)return!1;var o=n[1].split(".");return!o.some(function(u){return u.length>63})};const $=e=>(U("data-v-017ef86e"),e=e(),j(),e),X=["onSubmit","onKeyup"],ee=$(()=>s("h2",null,"Under The Radar",-1)),te={class:"lp-email-text"},se={class:"lp-input-area"},oe={key:0,class:"lp-error utr-text-caption"},ae={key:1,class:"lp-error"},le={class:"lp-button-row"},re={class:"lp-verification-text"},ne=$(()=>s("span",null,"An email with your verification code has been sent to",-1)),ue={class:"lp-email"},ie={class:"lp-input-area"},ce={key:0,class:"lp-error"},de={key:1,class:"lp-error"},ve={class:"lp-no-code-text"},me={class:"lp-button-row"},fe=N({__name:"LoginPanel",props:{email:null,codeRequested:{type:Boolean},isBusy:{type:Boolean},submissionError:null,requestError:null},emits:["requestCode","submitCode"],setup(e,{emit:p}){var I;const n=e,o=3,u=B(()=>({type:"submit",justifyContent:"center",icon:"chevron-right",color:"var(--utr-green)",hoverColor:"var(--utr-green-light)"})),i=B(()=>({justifyContent:"center",textClass:"lp-text-button"})),_=a(""),t=a((I=n.email)!=null?I:""),l=a(""),h=a(!1),r=a("enter-email");F(()=>{n.codeRequested&&(r.value="enter-code")});async function C(w=!1){if(p("requestCode",t.value),r.value="enter-code",w){h.value=!0;try{await K(o*1e3)}finally{h.value=!1}}}function q(){p("submitCode",t.value,_.value)}function f(){r.value=="enter-email"?C(!1):q()}function b(){r.value=="enter-code"&&(r.value="enter-email")}Z(t,w=>{z.validate(w)?l.value="":l.value="Please enter a valid email address"},{immediate:!0});const S=B(()=>!!(t.value&&!l.value));return(w,c)=>(m(),d("form",{class:"login-panel",onSubmit:O(f,["prevent"]),onKeyup:D(b,["esc"])},[v(H,{height:"128px","large-logo":!0}),ee,r.value=="enter-email"?(m(),d(R,{key:0},[s("div",te,[E(" Enter your email to log in "),s("div",se,[v(A,{modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=g=>t.value=g),class:"utr-text-body1 lp-control",autofocus:"",placeholder:"yours@example.com"},null,8,["modelValue"]),l.value?(m(),d("div",oe,x(l.value),1)):V("",!0),e.requestError?(m(),d("div",ae,x(e.requestError),1)):V("",!0)])]),s("div",le,[v(T,k({class:"lp-control",label:"CONTINUE",disabled:!y(S)},y(u)),null,16,["disabled"])])],64)):(m(),d(R,{key:1},[s("div",re,[ne,s("div",ue,x(t.value),1),s("div",ie,[v(A,{modelValue:_.value,"onUpdate:modelValue":c[1]||(c[1]=g=>_.value=g),class:"lp-input-code",autofocus:"",placeholder:"000000",size:"6"},null,8,["modelValue"]),e.requestError?(m(),d("div",ce,x(e.requestError),1)):V("",!0),e.submissionError?(m(),d("div",de,x(e.submissionError),1)):V("",!0)]),s("div",ve,[E(" Didn't receive code? "),v(L,k({label:"Request again",disabled:e.isBusy||h.value},y(i),{onClick:c[2]||(c[2]=g=>C(!0))}),null,16,["disabled"]),E(". ")])]),s("div",me,[v(T,k({class:"lp-control",label:"VERIFY",disabled:e.isBusy},y(u)),null,16,["disabled"])]),s("span",null,[E("Not your email? "),v(L,k({label:"Click here."},y(i),{onClick:c[3]||(c[3]=g=>r.value="enter-email")}),null,16)])],64))],40,X))}});const pe=P(fe,[["__scopeId","data-v-017ef86e"]]),_e={class:"login-view"},he=N({__name:"LoginView",setup(e){var q;Q(f=>({"2fe669ab":y(C)}));const p=M(),n=Y(),o=G(),u=a((q=o.email.value)!=null?q:""),i=a(!1),_=a(!1),t=a(""),l=a("");J(()=>{o.isLoggedIn.value?n.push(o.getRouterTargetForHomeOrLoginIfNeeded()):u.value&&h(u.value)});async function h(f){_.value=!0,t.value="";try{i.value=!0,await o.startPasswordlessLogin(f)}catch{t.value="Failed to send code, please check your email address is correct."}finally{i.value=!1}}async function r(f,b){l.value="";try{i.value=!0,await o.submitOTP(b,f),n.push(o.getRouterTargetForHomeOrLoginIfNeeded())}catch{l.value="An error occurred while submitting the code"}finally{i.value=!1}}const C=B(()=>p.breakpoint==="mobile"?"1rem 0.5rem":"2rem");return(f,b)=>(m(),d("div",_e,[v(pe,{email:u.value,"code-requested":_.value,"is-busy":i.value,"submission-error":l.value,"request-error":t.value,onSubmitCode:r,onRequestCode:h},null,8,["email","code-requested","is-busy","submission-error","request-error"])]))}});const ge=P(he,[["__scopeId","data-v-500fa918"]]);export{ge as default};
