import{a as u,c as g,u as r,j as e,I as o,h as p,E as h}from"./index-e7b7d67e.js";import{s as a}from"./index-7bdf2da7.js";import"./index-779cb976.js";function v(){const d=u(),{setModalContent:l}=g(),n=r(s=>s.static.backgrounds),t=r(s=>s.builds.current.origin),c=r(s=>s.builds.current.background),m=(s,i)=>{s.preventDefault(),t===8?d(p("build/setBackground",i)):l(e.jsx(h,{errors:{FAQ:["Cannot change an Origin Characters background"]}}))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:a.title,children:"Background"}),e.jsx("div",{className:a.list,children:Object.values(n).map(s=>e.jsx(e.Fragment,{children:s.id!=12&&e.jsxs("div",{onClick:i=>m(i,s.id),className:a.item,children:[e.jsx(o,{path:`bg_icons/${s.name}.png`,id:a.bgImg,className:c===s.id?a.selected_img:a.img}),s.name]},s.id)}))}),e.jsxs("div",{className:a.select,children:[t===7&&e.jsx(o,{className:a.bgImg,path:"bg_icons/Haunted One.png"}),e.jsx("div",{className:a.name,children:n[c].name}),e.jsx("div",{className:a.description,children:n[c].description})]})]})}export{v as default};