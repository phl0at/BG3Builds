import{b,r as a,h as j,j as e,B as v}from"./index-582e0531.js";import{E as g}from"./ErrorModal-d6e10587.js";const E="_main_oqxhz_1",q="_title_oqxhz_14",S="_form_oqxhz_27",w="_submitButton_oqxhz_37",y="_error_oqxhz_51",o={main:E,title:q,form:S,submitButton:w,error:y};function M({setLoading:n}){const m=b(),[s,u]=a.useState(""),[i,c]=a.useState(""),[d,r]=a.useState(""),{closeModal:h,setModalContent:p}=j(),x=async t=>{t.preventDefault(),r("");const _=["com","net","mil","org","edu"],f=s.split(".")[s.split(".").length-1];if(!s.includes("@"))r("Please enter a valid email address");else if(!_.includes(f))r("Email must end in .com, .net, .mil, .org, or .edu");else{n(!0);const l=await m(v({email:s,password:i}));l?(p(e.jsx(g,{errors:l})),n(!1)):h()}};return e.jsxs("main",{className:o.main,children:[e.jsx("div",{className:o.title,children:"Log In"}),e.jsx("div",{className:o.error,children:d}),e.jsxs("form",{className:o.form,onSubmit:x,children:[e.jsx("input",{type:"text",value:s,placeholder:"Email",onChange:t=>u(t.target.value),required:!0}),e.jsx("input",{type:"password",value:i,placeholder:"Password",onChange:t=>c(t.target.value),required:!0}),e.jsx("button",{className:o.submitButton,type:"submit",children:"Submit"})]})]})}export{M as default};