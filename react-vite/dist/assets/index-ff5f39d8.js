import{c as N,a as j,j as s,h as m,u as o,l as b,O as f,I as _}from"./index-e7b7d67e.js";import{s as a}from"./index-7bdf2da7.js";import{b as y,c as k,p as I}from"./index-779cb976.js";const A="_main_yrgfa_1",D="_title_yrgfa_13",M="_buttons_yrgfa_18",S="_reset_yrgfa_25",$="_cancel_yrgfa_35",i={main:A,title:D,buttons:M,reset:S,cancel:$};function z(){const{closeModal:c}=N(),r=j(),d=l=>{l.preventDefault(),r(m("build/resetClasses")),c()},t=l=>{l.preventDefault(),c()};return s.jsxs("main",{className:i.main,children:[s.jsx("span",{className:i.title,children:"RESETTING CLASSES"}),s.jsx("span",{className:i.confirm,children:"Are you sure?"}),s.jsxs("div",{className:i.buttons,children:[s.jsx("button",{onClick:d,children:s.jsx(y,{className:i.reset,size:"30"})}),s.jsx("button",{onClick:t,children:s.jsx(k,{className:i.cancel,size:"30"})})]})]})}function R(){var u,x;const c=j(),r=o(b),d=o(e=>e.builds.current.level),t=o(e=>e.builds.current.class),l=o(e=>e.static.classes),h=!d||d<12,C=(e,n)=>{e.preventDefault(),c(m("build/setClass",n))},p=(e,n,v)=>{e.preventDefault();const g={class_id:n.class_id,name:n.name,modifier:n.modifier,sub_class:v};c(m("build/addBuildClass",g))};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:a.header,children:[s.jsx("div",{className:a.reset,children:r.length>0&&s.jsx(f,{buttonText:s.jsx(I,{size:"40"}),modalComponent:s.jsx(z,{})})}),s.jsx("div",{className:a.title,children:"Class"}),s.jsx("div",{className:a.spacer})]}),s.jsx("div",{className:a.list,children:Object.values(l).map(e=>s.jsxs("div",{onClick:n=>C(n,e.class_id),className:a.item,children:[s.jsx(_,{loading:"lazy",path:`class_icons/${e.name}.png`,id:a.classImg,className:t===e.class_id?a.selected_img:a.img}),e.name]},e.class_id))}),s.jsxs("div",{className:a.select,children:[s.jsx("div",{className:a.name,children:t&&s.jsxs(s.Fragment,{children:[(u=l[t])==null?void 0:u.name,h&&s.jsx("button",{className:a.addButton,onClick:e=>p(e,l[t],null),children:"Add Class"})]})}),s.jsx("div",{className:a.description,children:(x=l[t])==null?void 0:x.description})]}),s.jsx("div",{className:a.buildClassList,children:r.map(e=>s.jsxs("div",{className:a.buildClass,children:[s.jsx("img",{id:a.bcImg,src:`https://ik.imagekit.io/phl0at/images/class_icons/${e.name}.png`}),`${e.name}: ${e.level}`]},e.class_id))})]})}export{R as default};