import{u,a as n,j as c,s as o,b as s}from"./index-65797d60.js";const m="_title_1illu_1",h="_select_1illu_10",_="_name_1illu_18",g="_description_1illu_23",b="_characterList_1illu_29",p="_character_1illu_29",j="_charImg_1illu_54",x="_selected_charImg_1illu_62",a={title:m,select:h,name:_,description:g,characterList:b,character:p,charImg:j,selected_charImg:x};function v(){const e=u(),l=n(t=>t.builds.current.origin),i=n(t=>t.static.origins),d=(t,r)=>{switch(t.preventDefault(),e(o(r,i[r].name)),r){case 1:return e(s("build/setRace",1)),e(s("build/setBackground",2));case 2:return e(s("build/setRace",5)),e(s("build/setBackground",10));case 3:return e(s("build/setRace",4)),e(s("build/setBackground",9));case 4:return e(s("build/setRace",7)),e(s("build/setBackground",1));case 5:return e(s("build/setRace",4)),e(s("build/setBackground",5));case 6:return e(s("build/setRace",2)),e(s("build/setBackground",8));case 7:return e(s("build/setRace",10)),e(s("build/setBackground",12));case 8:return e(s("build/setRace",1)),e(s("build/setBackground",1))}};return c.jsx(c.Fragment,{children:c.jsxs(c.Fragment,{children:[c.jsx("div",{className:a.title,children:"Origin"}),c.jsx("div",{className:a.characterList,children:Object.values(i).map(t=>c.jsxs("div",{className:a.character,children:[c.jsx("img",{loading:"lazy",onClick:r=>d(r,t.id),className:l===t.id?a.selected_charImg:a.charImg,src:`https://ik.imagekit.io/phl0at/images/char_icons/${t.id!=2?t.name.replaceAll(" ",""):"Laezel"}.png`}),i[t.id].name]},t.id))}),c.jsx("div",{className:a.select,children:i[l]!=null&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:a.name,children:i[l].name}),c.jsx("div",{className:a.description,children:i[l].description})]})})]})})}export{v as default};
