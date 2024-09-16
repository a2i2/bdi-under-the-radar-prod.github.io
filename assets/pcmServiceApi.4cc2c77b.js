import{E as x,f as C,u as L,h as A,c as i,e as t,J as u,F as T,j as g,T as H,m as V,k as n,ae as v,l as _,o as r,af as I,ag as R,ah as B,ai as E,aj as P,ak as U,al as O,am as $,an as M,ao as j,ap as F,aq as N,p as D,b as J,n as Y,_ as G,ar as p,as as h,i as q,at as k}from"./index.91d85916.js";const Ae=x("consent",{state:()=>({acceptStudy:!1,acceptDataSharing:!1,acceptFutureContact:!1,requestFeedback:!1})}),d=e=>(D("data-v-a78a20b4"),e=e(),J(),e),Z={class:"onboarding-survey-complete"},Q={class:"osp-container utr-card-page"},z={class:"osp-header-section"},K={key:0},W={key:1},X={key:2},ee={key:3,class:"utr-text-body1"},te={key:4,class:"utr-text-body1"},oe=d(()=>t("strong",null,"no account",-1)),se=d(()=>t("p",{class:"utr-text-body1"},"You have successfully registered and an account has been created.",-1)),ne=d(()=>t("p",{class:"utr-text-body1"},"You will now be redirected to login using an OTP sent to your mobile.",-1)),ae={key:6,class:"utr-text-body1"},ie={key:7,class:"utr-text-body1"},re=d(()=>t("strong",null,"no account",-1)),ce=d(()=>t("p",{class:"utr-text-body1"},"If you are concerned about your mental health, help is available.",-1)),le={class:"osp-sponsors"},ue={class:"osp-body-section"},de=d(()=>t("p",{class:"utr-text-body1"}," For information on other online mental health services that are available, including support services tailored to specific communities (e.g. LGBTIQ+, Aboriginal and Torres Strait Islander peoples, carers), and services specific to the state you live in, visit: ",-1)),pe={class:"osp-item-link"},he=["href"],ye={class:"utr-text-link osp-dark-link"},me=d(()=>t("span",{role:"img",class:"mdi mdi-launch"},[t("svg",{fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"})])],-1)),ge={class:"osp-body-section"},fe={class:"utr-text-body1"},ve=["href"],_e={class:"osp-item-link"},be=["href"],ke={class:"utr-text-link osp-dark-link"},we=d(()=>t("span",{role:"img",class:"mdi mdi-launch"},[t("svg",{fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"})])],-1)),Se=C({__name:"OnboardingSurveyComplete",props:{completionState:null,loginLink:null},setup(e){Y(s=>({e86e5bee:n(a).containerColumns,"31039f63":n(a).gridJustifyItems}));const o=L(),a=A(()=>{const s={containerColumns:3,gridJustifyItems:"stretch"};switch(o.breakpoint){case"mobile":case"small":case"xl":s.containerColumns=1,s.gridJustifyItems="center";break}return s});return(s,c)=>(r(),i("div",Z,[t("div",Q,[t("div",z,[e.completionState==="signed up"?(r(),i("h2",K,"You are successfully registered in the Under the Radar Study.")):e.completionState==="existing account"?(r(),i("h2",W," You are already registered in the Under the Radar Study. ")):(r(),i("h2",X,"Thank you for your interest in the Under the Radar Study.")),e.completionState==="no consent"?(r(),i("p",ee," As you have not agreed to the terms, you will not be included in the study. ")):e.completionState==="ineligible"?(r(),i("p",te,[u(" At this stage of the project, we have enough participants already who have a similar profile to yours, and we are unable to take more, unfortunately. Please note that "),oe,u(" was created as a result of this. ")])):e.completionState==="signed up"?(r(),i(T,{key:5},[se,ne],64)):e.completionState==="existing account"?(r(),i("p",ae,[u(" Please "),g(H,{"text-class":"osp-login-btn",color:"var(--utr-primary-color)","hover-color":"var(--utr-primary-color-light)",label:"Log In",link:e.loginLink},null,8,["link"]),u(" to view your available surveys. ")])):e.completionState==="error"?(r(),i("p",ie,[u(" Unfortunately something went wrong. Please note that "),re,u(" was created as a result of this. ")])):V("",!0),ce]),t("div",le,[g(v,{name:"Lifeline",description:"Crisis support and suicide prevention","phone-number":"13 11 14","phone-availability":"Available 24/7","chat-link":n(I),"chat-availability":`Available 7pm to midnight
        AEST`,"sponsor-link":n(R)},null,8,["chat-link","sponsor-link"]),g(v,{name:"Suicide Call Back Service",description:"Counselling and support for people affected by suicide","phone-number":"1300 659 467","phone-availability":"Available 24/7","chat-link":n(B),"chat-availability":"Available 24/7","sponsor-link":n(E)},null,8,["chat-link","sponsor-link"]),g(v,{name:"Beyond Blue",description:"Support and information for people experiencing depreession or anxiety","phone-number":"1300 224 636","phone-availability":"Available 24/7","chat-link":n(P),"chat-availability":"Available 11am to midnight AEST","sponsor-link":n(U)},null,8,["chat-link","sponsor-link"])]),t("div",ue,[de,t("div",pe,[t("a",{href:n(O),target:"_blank"},[t("span",ye,_(n($)),1),me],8,he)])]),t("div",ge,[t("p",fe,[u(" If you have any questions about your application, please contact "),t("a",{href:n(M),class:"utr-text-link osp-mailto"},_(` ${n(j)}`),9,ve),u(". For information about other ways to get involved with Black Dog Institute, please visit: ")]),t("div",_e,[t("a",{href:n(F),target:"_blank"},[t("span",ke,_(n(N)),1),we],8,be)])])])]))}});const Te=G(Se,[["__scopeId","data-v-a78a20b4"]]);async function He(e,o,a){const s=new URL(`experiments/${e}/consent`,p),c={applicationId:k,surveyId:o,surveyResponse:a},l=await h(s,{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}});if(!l.ok){const f=`An error has occured: ${l.status}`;throw console.error(l),new Error(f)}const y=await l.text();return y?JSON.parse(y):null}async function Ve(e,o,a,s,c,l){const y=new URL(`participantCandidateMappings/${e}/register`,p),b=q(new Date,"Y-MM-dd'T'HH:mm:ssx"),f={applicationId:k,surveyId:o,email:a!=null?a:void 0,mobile:s!=null?s:void 0,eligible_for_study:c,recordedAt:b,surveyResponse:l},m=await h(y,{method:"POST",body:JSON.stringify(f),headers:{"Content-Type":"application/json"}});if(!m.ok){const S=`An error has occured: ${m.status}`;throw console.error(m),new Error(S)}return await m.json()}async function Ie(e,o){const a=new URL(`participantCandidateMappings/${e}`,p),s={id:e,participantId:o,state:"REGISTERED"},c=await h(a,{method:"PATCH",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}});if(!c.ok){const l=`An error has occured: ${c.status}`;throw console.error(c),new Error(l)}}async function Re(e){const o=new URL(`experiments/${e}/consentForm`,p);return w(o.toString())}async function Be(e){const o=new URL(`experiments/${e}/registrationSurvey`,p);return w(o.toString())}async function w(e){const o=await h(e);if(!o.ok){const s=`An error has occured: ${o.status}`;throw console.error(o),new Error(s)}return await o.json()}async function Ee(e){if(!e)throw new Error("Missing experimentId");const o=new URL(`experiments/${e}`,p);return xe(o.toString())}async function xe(e){const o=await h(e);if(!o.ok){const s=`An error has occured: ${o.status}`;throw console.error(o),new Error(s)}return await o.json()}export{Te as O,Ee as a,Be as b,Ve as c,Ie as d,Re as g,He as p,Ae as u};
