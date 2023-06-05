import{E as S,f as x,u as C,h as L,c as d,e as t,J as c,F as A,j as g,T,m as V,k as n,ae as v,l as _,o as p,af as I,ag as H,ah as B,ai as E,aj as R,ak as P,al as $,am as O,an as U,ao as j,ap as F,aq as M,p as N,b as J,n as D,_ as G,ar as h,as as m,at as f}from"./index.bc5e5718.js";const we=S("consent",{state:()=>({acceptStudy:!1,acceptDataSharing:!1,acceptFutureContact:!1,requestFeedback:!1})}),r=e=>(N("data-v-d99ec7ba"),e=e(),J(),e),q={class:"onboarding-survey-complete"},Y={class:"osp-container utr-card-page"},Z={class:"osp-header-section"},Q=r(()=>t("h2",null,"Thank you for your interest in the Under the Radar Study.",-1)),z={key:0,class:"utr-text-body1"},K={key:1,class:"utr-text-body1"},W=r(()=>t("strong",null,"no account",-1)),X=r(()=>t("p",{class:"utr-text-body1"},"You have successfully registered and an account has been created.",-1)),ee=r(()=>t("p",{class:"utr-text-body1"},"You will now be redirected to login using an OTP sent to your email address.",-1)),te={key:3,class:"utr-text-body1"},se={key:4,class:"utr-text-body1"},oe=r(()=>t("strong",null,"no account",-1)),ne=r(()=>t("p",{class:"utr-text-body1"},"If you are concerned about your mental health, help is available.",-1)),ae={class:"osp-sponsors"},ie={class:"osp-body-section"},re=r(()=>t("p",{class:"utr-text-body1"}," For information on other online mental health services that are available, including support services tailored to specific communities (e.g. LGBTIQ+, Aboriginal and Torres Strait Islander peoples, carers), and services specific to the state you live in, visit: ",-1)),ce={class:"osp-item-link"},le=["href"],ue={class:"utr-text-link osp-dark-link"},de=r(()=>t("span",{role:"img",class:"mdi mdi-launch"},[t("svg",{fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"})])],-1)),pe={class:"osp-body-section"},he={class:"utr-text-body1"},ye=["href"],me={class:"osp-item-link"},ge=["href"],ve={class:"utr-text-link osp-dark-link"},_e=r(()=>t("span",{role:"img",class:"mdi mdi-launch"},[t("svg",{fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"})])],-1)),be=x({__name:"OnboardingSurveyComplete",props:{completionState:null,loginLink:null},setup(e){D(o=>({"5d48e624":n(a).containerColumns,"76965a48":n(a).gridJustifyItems}));const s=C(),a=L(()=>{const o={containerColumns:3,gridJustifyItems:"stretch"};switch(s.breakpoint){case"mobile":case"small":case"xl":o.containerColumns=1,o.gridJustifyItems="center";break}return o});return(o,i)=>(p(),d("div",q,[t("div",Y,[t("div",Z,[Q,e.completionState==="no consent"?(p(),d("p",z," As you have not agreed to the terms, you will not be included in the study. ")):e.completionState==="ineligible"?(p(),d("p",K,[c(" At this stage of the project, we have enough participants already who have a similar profile to yours, and we are unable to take more, unfortunately. Please note that "),W,c(" was created as a result of this. ")])):e.completionState==="signed up"?(p(),d(A,{key:2},[X,ee],64)):e.completionState==="existing account"?(p(),d("p",te,[c(" You have already registered for this study. Please "),g(T,{"text-class":"osp-login-btn",color:"var(--utr-primary-color)","hover-color":"var(--utr-primary-color-light)",label:"Log In",link:e.loginLink},null,8,["link"]),c(" to view your available surveys. ")])):e.completionState==="error"?(p(),d("p",se,[c(" Unfortunately something went wrong. Please note that "),oe,c(" was created as a result of this. ")])):V("",!0),ne]),t("div",ae,[g(v,{name:"Lifeline",description:"Crisis support and suicide prevention","phone-number":"13 11 14","phone-availability":"Available 24/7","chat-link":n(I),"chat-availability":`Available 7pm to midnight
        AEST`,"sponsor-link":n(H)},null,8,["chat-link","sponsor-link"]),g(v,{name:"Suicide Call Back Service",description:"Counselling and support for people affected by suicide","phone-number":"1300 659 467","phone-availability":"Available 24/7","chat-link":n(B),"chat-availability":"Available 24/7","sponsor-link":n(E)},null,8,["chat-link","sponsor-link"]),g(v,{name:"Beyond Blue",description:"Support and information for people experiencing depreession or anxiety","phone-number":"1300 224 636","phone-availability":"Available 24/7","chat-link":n(R),"chat-availability":"Available 11am to midnight AEST","sponsor-link":n(P)},null,8,["chat-link","sponsor-link"])]),t("div",ie,[re,t("div",ce,[t("a",{href:n($),target:"_blank"},[t("span",ue,_(n(O)),1),de],8,le)])]),t("div",pe,[t("p",he,[c(" If you have any questions about your application, please contact "),t("a",{href:n(U),class:"utr-text-link osp-mailto"},_(` ${n(j)}`),9,ye),c(". For information about other ways to get involved with Black Dog Institute, please visit: ")]),t("div",me,[t("a",{href:n(F),target:"_blank"},[t("span",ve,_(n(M)),1),_e],8,ge)])])])]))}});const Se=G(be,[["__scopeId","data-v-d99ec7ba"]]);async function xe(e,s,a){const o=new URL(`experiments/${e}/consent`,h),i={applicationId:f,surveyId:s,surveyResponse:a},l=await m(o,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}});if(!l.ok){const b=`An error has occured: ${l.status}`;throw console.error(l),new Error(b)}const u=await l.text();return u?JSON.parse(u):null}async function Ce(e,s,a,o,i){const l=new URL(`participantCandidateMappings/${e}/register`,h),u={applicationId:f,surveyId:s,email:a!=null?a:void 0,eligible_for_study:o,surveyResponse:i},y=await m(l,{method:"POST",body:JSON.stringify(u),headers:{"Content-Type":"application/json"}});if(!y.ok){const w=`An error has occured: ${y.status}`;throw console.error(y),new Error(w)}return await y.json()}async function Le(e,s){const a=new URL(`participantCandidateMappings/${e}`,h),o={id:e,participantId:s,state:"REGISTERED"},i=await m(a,{method:"PATCH",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}});if(!i.ok){const u=`An error has occured: ${i.status}`;throw console.error(i),new Error(u)}return await i.json()}async function Ae(e){const s=new URL(`experiments/${e}/consentForm`,h);return k(s.toString())}async function Te(e){const s=new URL(`experiments/${e}/registrationSurvey`,h);return k(s.toString())}async function k(e){const s=await m(e);if(!s.ok){const o=`An error has occured: ${s.status}`;throw console.error(s),new Error(o)}return await s.json()}async function Ve(e){if(!e)throw new Error("Missing experimentId");const s=new URL(`experiments/${e}`,h);return fe(s.toString())}async function fe(e){const s=await m(e);if(!s.ok){const o=`An error has occured: ${s.status}`;throw console.error(s),new Error(o)}return await s.json()}export{Se as O,Ve as a,Te as b,Ce as c,Le as d,Ae as g,xe as p,we as u};
