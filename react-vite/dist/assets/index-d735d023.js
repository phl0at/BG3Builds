import{b as m,h as _,d as n,j as s,I as u,f as g}from"./index-4420b638.js";import{E as p}from"./ErrorModal-6f5da3c3.js";const h="_title_3u90d_1",j="_select_3u90d_10",x="_name_3u90d_17",I="_description_3u90d_22",v="_raceList_3u90d_27",f="_race_3u90d_27",N="_raceImg_3u90d_50",C="_selected_raceImg_3u90d_57",R="_error_3u90d_66",c={title:h,select:j,name:x,description:I,raceList:v,race:f,raceImg:N,selected_raceImg:C,error:R};function E(){const o=m(),{setModalContent:d}=_(),i=n(e=>e.builds.current.origin),t=n(e=>e.builds.current.race),a=n(e=>e.static.races),l=(e,r)=>{e.preventDefault(),i===7||i===8?o(g("build/setRace",r)):d(s.jsx(p,{errors:{FAQ:["Cannot change an Origin Characters race"]}}))};return s.jsx(s.Fragment,{children:s.jsxs(s.Fragment,{children:[s.jsx("div",{className:c.title,children:"Race"}),s.jsx("div",{className:c.raceList,children:Object.values(a).map(e=>s.jsxs("div",{className:c.race,children:[s.jsx(u,{onClick:r=>l(r,e.id),path:`race_icons/${e.name}.png`,className:t===e.id?c.selected_raceImg:c.raceImg}),e.name]},e.id))}),s.jsxs("div",{className:c.select,children:[s.jsx("div",{className:c.name,children:a[t].name}),s.jsx("div",{className:c.description,children:a[t].description})]})]})})}export{E as default};
