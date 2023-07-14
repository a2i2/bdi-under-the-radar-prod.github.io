import{E as M,x as l,au as _,av as B,f as O,y as A,h as Y,S as H,z as U,B as G,c as V,v as q,k as $,C as K,N as W,aw as z,ax as j,o as g,D as J}from"./index.75cb67ee.js";import{s as Q}from"./surveyExampleBase.55db71c1.js";import{a as X,u as Z,O as ee,g as te,b as ae,p as ne,c as ie,d as oe}from"./pcmServiceApi.c0b44892.js";import{l as se,c as re,s as le}from"./surveyStorage.34c3760f.js";import{_ as ue}from"./SurveyJsWrapper.vue_vue_type_script_setup_true_lang.34307d4e.js";const ce={name:"ELY1",type:"text",isRequired:!0,title:"How old are you?",inputType:"number",step:1},de={name:"qELY1_valid",expression:"{ELY1} >= 18"},pe={name:"ELY2",type:"radiogroup",isRequired:!0,title:"How would you describe your gender?",choices:[{text:"Male",value:0},{text:"Female",value:1},{text:"Non-binary",value:2},{text:"I use a different term",value:3}]},me={name:"qELY2_valid",expression:"{ELY2} == 0"},ye={name:"ELY3",type:"radiogroup",isRequired:!0,title:"How do you rate your English ability?",choices:[{text:"Basic",value:0},{text:"Advanced",value:1},{text:"Fluent/Native Speaker",value:2}]},ve={name:"qELY3_valid",expression:"{ELY3} > 0"},ge={name:"ELY4",type:"radiogroup",isRequired:!0,title:"Are you currently living in Australia?",choices:[{text:"No",value:0},{text:"Yes",value:1}]},he={name:"qELY4_valid",expression:"{ELY4} > 0"},fe={name:"ELY5",type:"radiogroup",isRequired:!0,title:"Have you thought of dying or hurting yourself in the past six months?",choices:[{text:"Not at all",value:0},{text:"Several days",value:1},{text:"More than half the days",value:2},{text:"Nearly every day",value:3}]},Ee={name:"qELY5_valid",expression:"{ELY5} > 0"},xe={name:"ELY6",type:"radiogroup",isRequired:!0,title:"Have you seen a counsellor, psychologist, psychiatrist or other mental health professional, or General Practitioner for a mental health problem in the past six months?",choices:[{text:"No",value:0},{text:"Yes",value:1},{text:"Don't know",value:2}]},Le={name:"qELY6_valid",expression:"{ELY6} == 0"},_e={name:"description",type:"html",html:'<div class="utr-html-section"><h2>To protect your privacy and the confidentiality of your data, we will ask you to register with the study using an active email address.</h2><p>Your account will provide you with access to the Under the Radar study surveys, and periodic email notifications will be sent when surveys are available.</div>'},Ye={name:"preferredName",type:"text",isRequired:!0,title:"What is your preferred name?",inputType:"text",maxLength:128},qe={name:"email",type:"text",isRequired:!0,title:"What is your email address?",inputType:"email",maxLength:128},Se={...Q,pages:[{name:"Under the Radar",elements:[ce,pe,ye,ge,fe,xe]},{name:"Under the Radar",elements:[_e,Ye,qe],visibleIf:"{__needContactPage} || ({eligible_for_study})"}],calculatedValues:[de,me,ve,he,Ee,Le,{name:"eligible_for_study",expression:"{qELY1_valid} && {qELY2_valid} && {qELY3_valid} && {qELY4_valid} && {qELY5_valid} && {qELY6_valid}",includeIntoResult:!0}]},Ce=M("experiment",()=>{const s=l(null),i=c=>{s.value=c},u=()=>{s.value=null},a=_(B),o=_(X);return{setExperimentId:i,clearExperimentId:u,getESExperimentCached:a.cacheFn,getPCMExperimentCached:o.cacheFn}}),Te=O({__name:"EligibilityView",props:{experimentId:null},setup(s){const i=s,u=J(),a=A(),o=Z(),c=Ce(),d=K(),p=l(),m=l(),h=l(),S=Y(()=>Se),y=Y(()=>`eligibility:${i.experimentId}`);H(()=>{const e=se(y.value);h.value=e.oldData}),U(async()=>{if(!o.acceptStudy){const e=i.experimentId?`/consent/${i.experimentId}`:"/consent-test";d.push({path:e})}try{i.experimentId&&await c.getPCMExperimentCached(i.experimentId)}catch(e){console.error(e),d.push({path:"/error-page"})}});function C(e){return!!e.eligible_for_study}function w(e){return e.ELY1>=18}function b(e){const t=e.email;if(t==null)return null;if(typeof t!="string")throw new Error("email is not a string");return t}function v(e){m.value=e,p.value&&(p.value.scrollTop=0)}async function I(e){a.openLoadingOverlay();let t=!0;try{const n=await R(e);v(n),n==="signed up"&&(a.closeLoadingOverlay(),t=!1,await W(10*1e3),d.push("/login"))}catch(n){n instanceof z?v("existing account"):v("error")}finally{t&&a.closeLoadingOverlay(),re(y.value)}}async function R(e){const t=C(e);if(!w(e))return"ineligible";const n={...e,accept_data_sharing:o.acceptDataSharing,accept_future_contact:o.acceptFutureContact,request_feedback:o.requestFeedback,consent:o.acceptStudy},f=await te(i.experimentId),D=await ae(i.experimentId);let E=await ne(i.experimentId,f.id,n);if(!E)return"no consent";const x=E.participantCandidateMappingId,r=b(e);let L=await ie(x,D.id,r,t,e);if(!t||!r||!L||L.state!=="REGISTRATION_PENDING_CONFIRMATION")return"ineligible";u.storeEmail(r);const F=await j(r);return await oe(x,F.id),"signed up"}function P(e){a.setPageCount(e.pageCount),a.setPageTitle(e.currentPage.name),a.setPageIndex(e.currentPageNo),a.setShowProgressBar(!0);const t=o.requestFeedback||o.acceptFutureContact;e.setVariable("__needContactPage",t)}G(()=>{a.setShowProgressBar(!1)});function T(e,t,n){a.setPageIndex(e),a.setPageTitle(n)}function N(e,t){const n={...e};delete n.eligible_for_study,le(y.value,n,t)}function k(e){a.setHelpKey(e)}return(e,t)=>(g(),V("div",{ref_key:"surveyContainerRef",ref:p,class:"eligibility-view"},[m.value?(g(),q(ee,{key:1,"completion-state":m.value,"login-link":"/login"},null,8,["completion-state"])):(g(),q(ue,{key:0,"survey-data":$(S),"initial-state":h.value,onComplete:I,onLoaded:P,onPageChanged:T,onPartialSend:N,onHelp:k},null,8,["survey-data","initial-state"]))],512))}});export{Te as default};
