import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let t={email:"",message:""};const a=document.querySelector(".feedback-form"),l=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e===null)return;t=e;for(const o in t)t.hasOwnProperty(o)&&(a.elements[o].value=t[o])}catch(e){console.log(e)}};l();const m=(e,o)=>{try{localStorage.setItem(e,JSON.stringify(o))}catch(r){console.log(r)}},n=e=>{const o=e.target,r=o.value.trim(),s=o.name;t[s]=r,m("feedback-form-state",t)},c=e=>{if(e.preventDefault(),t.email.trim()===""||t.message.trim()===""){alert("Fill please all fields");return}console.log("Submitted data:",t),localStorage.removeItem("feedback-form-state"),t={email:"",message:""},e.currentTarget.reset()};a.addEventListener("input",n);a.addEventListener("submit",c);const i=document.querySelector("button");i.classList.add("submit-btn");
//# sourceMappingURL=2-form.js.map
