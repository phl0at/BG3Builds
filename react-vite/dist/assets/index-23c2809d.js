import{a as u,u as d,j as a,I as m,y as o,h as s}from"./index-e7b7d67e.js";import{s as c}from"./index-7bdf2da7.js";import"./index-779cb976.js";function p(){const e=u(),n=d(t=>t.builds.current.origin),i=d(t=>t.static.origins),l=(t,r)=>{switch(t.preventDefault(),e(o(r,i[r].name)),r){case 1:return e(s("build/setRace",1)),e(s("build/setBackground",2));case 2:return e(s("build/setRace",5)),e(s("build/setBackground",10));case 3:return e(s("build/setRace",4)),e(s("build/setBackground",9));case 4:return e(s("build/setRace",7)),e(s("build/setBackground",1));case 5:return e(s("build/setRace",4)),e(s("build/setBackground",5));case 6:return e(s("build/setRace",2)),e(s("build/setBackground",8));case 7:return e(s("build/setRace",10)),e(s("build/setBackground",12));case 8:return e(s("build/setRace",1)),e(s("build/setBackground",1))}};return a.jsx(a.Fragment,{children:a.jsxs(a.Fragment,{children:[a.jsx("div",{className:c.title,children:"Origin"}),a.jsx("div",{className:c.list,children:Object.values(i).map(t=>a.jsxs("div",{onClick:r=>l(r,t.id),className:c.item,children:[a.jsx(m,{id:c.charImg,className:n===t.id?c.selected_img:c.img,path:`char_icons/${t.name}.png`}),i[t.id].name]},t.id))}),a.jsx("div",{className:c.select,children:i[n]!=null&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:c.name,children:i[n].name}),a.jsx("div",{className:c.description,children:i[n].description})]})})]})})}export{p as default};
