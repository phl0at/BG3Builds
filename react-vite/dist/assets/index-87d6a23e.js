import{a as j,r as a,f as v,j as e,y as b}from"./index-06a6b07d.js";import{E as g}from"./ErrorModal-4827accb.js";const E="_main_oqxhz_1",q="_title_oqxhz_14",y="_form_oqxhz_27",S="_submitButton_oqxhz_37",w="_error_oqxhz_51",o={main:E,title:q,form:y,submitButton:S,error:w};function N({setLoading:n}){const m=j(),[s,u]=a.useState(""),[i,c]=a.useState(""),[d,r]=a.useState(""),{closeModal:p,setModalContent:h}=v(),x=async t=>{t.preventDefault(),r("");const f=["com","net","mil","org","edu"],_=s.split(".")[s.split(".").length-1];if(!s.includes("@"))r("Please enter a valid email address");else if(!f.includes(_))r("Email must end in .com, .net, .mil, .org, or .edu");else{n(!0);const l=await m(b({email:s,password:i}));l?(h(e.jsx(g,{errors:l})),n(!1)):p()}};return e.jsxs("main",{className:o.main,children:[e.jsx("div",{className:o.title,children:"Log In"}),e.jsx("div",{className:o.error,children:d}),e.jsxs("form",{className:o.form,onSubmit:x,children:[e.jsx("input",{type:"text",value:s,placeholder:"Email",onChange:t=>u(t.target.value),required:!0}),e.jsx("input",{type:"password",value:i,placeholder:"Password",onChange:t=>c(t.target.value),required:!0}),e.jsx("button",{className:o.submitButton,type:"submit",children:"Submit"})]})]})}export{N as default};
