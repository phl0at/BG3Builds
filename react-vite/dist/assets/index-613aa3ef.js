import{f,a as j,j as s,c as m,b as o,m as g,I as N}from"./index-06a6b07d.js";import{s as a}from"./index-0ab24066.js";import{O as _}from"./OpenModalButton-89f23bac.js";import{b as y,c as k,p as I}from"./index-2c1fdd07.js";import"./ErrorModal-4827accb.js";const A="_main_yrgfa_1",D="_title_yrgfa_13",M="_buttons_yrgfa_18",S="_reset_yrgfa_25",$="_cancel_yrgfa_35",n={main:A,title:D,buttons:M,reset:S,cancel:$};function z(){const{closeModal:c}=f(),r=j(),d=l=>{l.preventDefault(),r(m("build/resetClasses")),c()},t=l=>{l.preventDefault(),c()};return s.jsxs("main",{className:n.main,children:[s.jsx("span",{className:n.title,children:"RESETTING CLASSES"}),s.jsx("span",{className:n.confirm,children:"Are you sure?"}),s.jsxs("div",{className:n.buttons,children:[s.jsx("button",{onClick:d,children:s.jsx(y,{className:n.reset,size:"30"})}),s.jsx("button",{onClick:t,children:s.jsx(k,{className:n.cancel,size:"30"})})]})]})}function T(){var u,x;const c=j(),r=o(g),d=o(e=>e.builds.current.level),t=o(e=>e.builds.current.class),l=o(e=>e.static.classes),p=!d||d<12,C=(e,i)=>{e.preventDefault(),c(m("build/setClass",i))},h=(e,i,v)=>{e.preventDefault();const b={class_id:i.class_id,name:i.name,modifier:i.modifier,sub_class:v};c(m("build/addBuildClass",b))};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:a.header,children:[s.jsx("div",{className:a.reset,children:r.length>0&&s.jsx(_,{buttonText:s.jsx(I,{size:"40"}),modalComponent:s.jsx(z,{})})}),s.jsx("div",{className:a.title,children:"Class"}),s.jsx("div",{className:a.spacer})]}),s.jsx("div",{className:a.list,children:Object.values(l).map(e=>s.jsxs("div",{onClick:i=>C(i,e.class_id),className:a.item,children:[s.jsx(N,{loading:"lazy",path:`class_icons/${e.name}.png`,id:a.classImg,className:t===e.class_id?a.selected_img:a.img}),e.name]},e.class_id))}),s.jsxs("div",{className:a.select,children:[s.jsx("div",{className:a.name,children:t&&s.jsxs(s.Fragment,{children:[(u=l[t])==null?void 0:u.name,p&&s.jsx("button",{className:a.addButton,onClick:e=>h(e,l[t],null),children:"Add Class"})]})}),s.jsx("div",{className:a.description,children:(x=l[t])==null?void 0:x.description})]}),s.jsx("div",{className:a.buildClassList,children:r.map(e=>s.jsxs("div",{className:a.buildClass,children:[s.jsx("img",{id:a.bcImg,src:`https://ik.imagekit.io/phl0at/images/class_icons/${e.name}.png`}),`${e.name}: ${e.level}`]},e.class_id))})]})}export{T as default};
