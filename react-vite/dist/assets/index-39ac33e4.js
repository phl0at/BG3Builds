import{a as m,c as u,u as n,j as e,I as p,i as h}from"./index-6f3e6fb1.js";import{s as a}from"./index-1d1e7942.js";import{E as j}from"./ErrorModal-8dc93f71.js";import"./index-9f40a002.js";import"./OpenModalButton-265efc6e.js";function C(){const o=m(),{setModalContent:l}=u(),r=n(s=>s.builds.current.origin),i=n(s=>s.builds.current.race),t=n(s=>s.static.races),d=(s,c)=>{s.preventDefault(),r===7||r===8?o(h("build/setRace",c)):l(e.jsx(j,{errors:{FAQ:["Cannot change an Origin Characters race"]}}))};return e.jsx(e.Fragment,{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:a.title,children:"Race"}),e.jsx("div",{className:a.list,children:Object.values(t).map(s=>e.jsxs("div",{onClick:c=>d(c,s.id),className:a.item,children:[e.jsx(p,{path:`race_icons/${s.name}.png`,id:a.raceImg,className:i===s.id?a.selected_img:a.img}),s.name]},s.id))}),e.jsxs("div",{className:a.select,children:[e.jsx("div",{className:a.name,children:t[i].name}),e.jsx("div",{className:a.description,children:t[i].description})]})]})})}export{C as default};