function c(t,o,a){const e={...o,_pageNo:a};try{window.localStorage.setItem(t,JSON.stringify(e))}catch(r){console.warn(`Could not save survey data: ${t}`,r)}}function l(t){const o={};try{const a=window.localStorage.getItem(t);if(a!==null){const e=JSON.parse(a),{_pageNo:r,...n}=e;o.oldPageIndex=r,o.oldData=n}}catch(a){console.warn("Could not retrieve saved survey data",a)}return o}function s(t){const o={};try{window.localStorage.removeItem(t)}catch(a){console.warn("Could not clear survey data",a)}return o}export{s as c,l,c as s};
