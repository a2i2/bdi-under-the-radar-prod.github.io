import{f as P,h as y,x as r,H as O,I as K,c,j as d,F as R,e as s,J as w,l as q,m as E,K as N,k as b,A as I,T,L as U,M as j,N as H,p as z,b as W,o as m,O as J,_ as M,u as Y,z as G,C as Q,D as Z,n as ee}from"./index.6518d06d.js";import{T as L}from"./TextInput.0a8153ba.js";const X=t=>(z("data-v-4624e6ca"),t=t(),W(),t),te=["onSubmit","onKeyup"],oe=X(()=>s("h2",null,"Under The Radar",-1)),se={class:"lp-mobile-text"},le={class:"lp-input-area"},re={key:0,class:"lp-error utr-text-caption"},ae={key:1,class:"lp-error"},ne={class:"lp-button-row"},ue={class:"lp-verification-text"},ie=X(()=>s("span",null,"An SMS with your verification code has been sent to",-1)),ce={class:"lp-mobile"},de={class:"lp-input-area"},me={key:0,class:"lp-error"},ve={key:1,class:"lp-error"},be={class:"lp-no-code-text"},pe={class:"lp-button-row"},fe=P({__name:"LoginPanel",props:{mobile:null,codeRequested:{type:Boolean},isBusy:{type:Boolean},submissionError:null,requestError:null},emits:["requestCode","submitCode"],setup(t,{emit:S}){var B;const g=t,u=3,p=y(()=>({type:"submit",justifyContent:"center",icon:"chevron-right",color:"var(--utr-green)",hoverColor:"var(--utr-green-light)"})),i=y(()=>({justifyContent:"center",textClass:"lp-text-button"})),f=r(""),l=r((B=g.mobile)!=null?B:""),a=r(""),_=r(!1),n=r("enter-mobile"),V=y(()=>{let e=l.value;return h(e)?(e.startsWith("+61")&&(e="0"+e.substring(3)),e=e.replace(/[ -]/g,""),e.replace(/(\d{4})(\d{3})(\d{3})/,"$1 $2 $3")):e}),x=y(()=>{let e=l.value;return e.startsWith("0")&&(e="+61"+e.substring(1)),e.replace(/[ -]/g,"")}),v=/^(0|\+61)4[0-9]{8}$/;function h(e){return e.replace(/[ -]/g,"").match(v)}O(()=>{g.codeRequested&&(n.value="enter-code")});async function k(e=!1){const o=x.value;if(S("requestCode",o),n.value="enter-code",e){_.value=!0;try{await H(u*1e3)}finally{_.value=!1}}}function $(){const e=x.value;S("submitCode",e,f.value)}function F(){n.value=="enter-mobile"?k(!1):$()}function A(){n.value=="enter-code"&&(n.value="enter-mobile")}K(l,e=>{h(e)?a.value="":a.value="Please enter a valid mobile phone number"},{immediate:!0});const D=y(()=>!!(l.value&&!a.value));return(e,o)=>(m(),c("form",{class:"login-panel",onSubmit:U(F,["prevent"]),onKeyup:j(A,["esc"])},[d(J,{height:"128px","large-logo":!0}),oe,n.value=="enter-mobile"?(m(),c(R,{key:0},[s("div",se,[w(" Enter your mobile number to log in "),s("div",le,[d(L,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=C=>l.value=C),class:"utr-text-body1 lp-control",autofocus:"",placeholder:"04XX XXX XXX"},null,8,["modelValue"]),a.value?(m(),c("div",re,q(a.value),1)):E("",!0),t.requestError?(m(),c("div",ae,q(t.requestError),1)):E("",!0)])]),s("div",ne,[d(I,N({class:"lp-control",label:"CONTINUE",disabled:!b(D)},b(p)),null,16,["disabled"])])],64)):(m(),c(R,{key:1},[s("div",ue,[ie,s("div",ce,q(b(V)),1),s("div",de,[d(L,{modelValue:f.value,"onUpdate:modelValue":o[1]||(o[1]=C=>f.value=C),class:"lp-input-code",autofocus:"",placeholder:"000000",size:"6"},null,8,["modelValue"]),t.requestError?(m(),c("div",me,q(t.requestError),1)):E("",!0),t.submissionError?(m(),c("div",ve,q(t.submissionError),1)):E("",!0)]),s("div",be,[w(" Didn't receive code? "),d(T,N({label:"Request again",disabled:t.isBusy||_.value},b(i),{onClick:o[2]||(o[2]=C=>k(!0))}),null,16,["disabled"]),w(". ")])]),s("div",pe,[d(I,N({class:"lp-control",label:"VERIFY",disabled:t.isBusy},b(p)),null,16,["disabled"])]),s("span",null,[w("Not your number? "),d(T,N({label:"Click here."},b(i),{onClick:o[3]||(o[3]=C=>n.value="enter-mobile")}),null,16)])],64))],40,te))}});const _e=M(fe,[["__scopeId","data-v-4624e6ca"]]),he={class:"login-view"},ye=P({__name:"LoginView",setup(t){var x;ee(v=>({aff706ec:b(V)}));const S=Y(),g=Q(),u=Z(),p=r((x=u.mobile.value)!=null?x:""),i=r(!1),f=r(!1),l=r(""),a=r("");G(()=>{u.isLoggedIn.value?g.push(u.getRouterTargetForHomeOrLoginIfNeeded()):p.value&&_(p.value)});async function _(v){f.value=!0,l.value="";try{i.value=!0,await u.startPasswordlessSmsLogin(v)}catch{l.value="Failed to send code, please check your phone number is correct."}finally{i.value=!1}}async function n(v,h){a.value="";try{i.value=!0,await u.submitSmsOTP(h,v),g.push(u.getRouterTargetForHomeOrLoginIfNeeded())}catch{a.value="An error occurred while submitting the code"}finally{i.value=!1}}const V=y(()=>S.breakpoint==="mobile"?"1rem 0.5rem":"2rem");return(v,h)=>(m(),c("div",he,[d(_e,{mobile:p.value,"code-requested":f.value,"is-busy":i.value,"submission-error":a.value,"request-error":l.value,onSubmitCode:n,onRequestCode:_},null,8,["mobile","code-requested","is-busy","submission-error","request-error"])]))}});const Ce=M(ye,[["__scopeId","data-v-9e4ce605"]]);export{Ce as default};
