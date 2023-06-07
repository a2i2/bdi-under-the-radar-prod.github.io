import{f as m,y,x as b,I as h,c,e,j as l,T as t,J as k,F as x,s as f,o as d,A as g,p as w,b as I,_ as S}from"./index.d5f8d194.js";import{T}from"./TextInput.f9a4cae1.js";const r=i=>(w("data-v-c7d5628b"),i=i(),I(),i),V={class:"dev-home-view"},C=r(()=>e("h1",null,"Dev home page",-1)),E=r(()=>e("hr",null,null,-1)),D=r(()=>e("h3",null,"Actual Surveys",-1)),H=m({__name:"DevHomeView",setup(i){y().setPageTitle("Home");const u="testhomepage:experimentId",a=b(_());h(a,o=>{try{window.localStorage.setItem(u,o)}catch(n){console.warn(`Could not save experimentId: ${o}`,n)}});function _(){let o="00000000-0000-0000-0000-000000000001";try{const n=window.localStorage.getItem(u);console.log("found: ",n),n!==null&&(o=n)}catch(n){console.warn("Could not retrieve saved experimentId",n)}return o}function p(){a.value="00000000-0000-0000-0000-000000000001"}const v=["baseline","dce_1","dce_2","dce_3","dce_4","dce_5","follow_up","intervention_1","intervention_2","intervention_3","intervention_4","intervention_5","mental_health","video_feedback"];return(o,n)=>(d(),c("div",V,[C,e("ul",null,[e("li",null,[l(t,{label:"Root Home",link:"/"})]),e("li",null,[l(t,{label:"User Home (requires auth)",link:"your-surveys"})]),e("li",null,[l(t,{label:"Error Page",link:"error-page"})]),e("li",null,[l(t,{label:"Consent Page",link:"consent/"+a.value},null,8,["link"]),k(" - with experimentId: "),l(T,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s),type:"text"},null,8,["modelValue"]),l(g,{label:"Reset",icon:"reset",onClick:p})]),e("li",null,[l(t,{label:"UTR Survey",link:"utr-survey"})]),e("li",null,[l(t,{label:"Follow Up Survey",link:"follow-up-survey"})]),e("li",null,[l(t,{label:"Auth Test",link:"auth-test"})]),e("li",null,[l(t,{label:"Consent Test",link:"consent-test"})]),e("li",null,[l(t,{label:"Eligibility Test",link:"eligibility-test"})]),e("li",null,[l(t,{label:"DCE Survey Test",link:"dce-survey"})])]),E,D,e("ul",null,[(d(),c(x,null,f(v,s=>e("li",{key:s},[l(t,{label:s,link:"test-survey/"+s},null,8,["label","link"])])),64))])]))}});const F=S(H,[["__scopeId","data-v-c7d5628b"]]);export{F as default};
