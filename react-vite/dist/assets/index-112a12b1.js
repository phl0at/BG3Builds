import{a as u,f as g,b as c,j as e,I as o,c as p}from"./index-201131fa.js";import{s as a}from"./index-4d13d329.js";import{E as h}from"./ErrorModal-35c91b94.js";import"./index-5f7f485e.js";import"./OpenModalButton-40f7c118.js";function N(){const d=u(),{setModalContent:l}=g(),n=c(s=>s.static.backgrounds),t=c(s=>s.builds.current.origin),i=c(s=>s.builds.current.background),m=(s,r)=>{s.preventDefault(),t===8?d(p("build/setBackground",r)):l(e.jsx(h,{errors:{FAQ:["Cannot change an Origin Characters background"]}}))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:a.title,children:"Background"}),e.jsx("div",{className:a.list,children:Object.values(n).map(s=>e.jsx(e.Fragment,{children:s.id!=12&&e.jsxs("div",{onClick:r=>m(r,s.id),className:a.item,children:[e.jsx(o,{path:`bg_icons/${s.name}.png`,id:a.bgImg,className:i===s.id?a.selected_img:a.img}),s.name]},s.id)}))}),e.jsxs("div",{className:a.select,children:[t===7&&e.jsx(o,{className:a.bgImg,path:"bg_icons/Haunted One.png"}),e.jsx("div",{className:a.name,children:n[i].name}),e.jsx("div",{className:a.description,children:n[i].description})]})]})}export{N as default};