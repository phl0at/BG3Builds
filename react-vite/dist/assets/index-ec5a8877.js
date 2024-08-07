import{a as f,f as N,b as d,r as h,j as s,I,c as r,E as v,F as j}from"./index-201131fa.js";import{E as S}from"./ErrorModal-35c91b94.js";import{q as E,r as P,b as w,c as D,p as M}from"./index-5f7f485e.js";import{O as z}from"./OpenModalButton-40f7c118.js";const L="_header_13eev_1",R="_title_13eev_9",T="_reset_13eev_18",$="_heading_13eev_24",B="_abilityList_13eev_35",F="_red_13eev_42",O="_stat_13eev_46",q="_statImg_13eev_51",U="_label_13eev_55",y="_values_13eev_60",G="_valueContainer_13eev_69",K="_num_13eev_78",Q="_disabled_13eev_85",V="_enabled_13eev_92",H="_bonuses_13eev_101",J="_plus_13eev_107",W="_plusSelected_13eev_117",X="_error_13eev_137",e={header:L,title:R,reset:T,heading:$,abilityList:B,red:F,stat:O,statImg:q,label:U,values:y,valueContainer:G,num:K,disabled:Q,enabled:V,bonuses:H,plus:J,plusSelected:W,error:X};function Y({ability:c}){const l=f(),{setModalContent:_}=N(),a=d(t=>t.builds.current[c]),n=d(t=>t.builds.current.points),m=d(t=>t.builds.current.plus_1),p=d(t=>t.builds.current.plus_2),[o,b]=h.useState(a-8),x=c[0].toUpperCase()+c.slice(1);h.useEffect(()=>{b(p===c?a-10:m===c?a-9:a-8)},[a]);const C=(t,i)=>{t.preventDefault(),o<6?(l(r("build/raisePoints",1)),l(r("build/lowerAbility",i))):(l(r("build/raisePoints",2)),l(r("build/lowerAbility",i)))},g=(t,i)=>{t.preventDefault(),o<5?(l(r("build/lowerPoints",1)),l(r("build/raiseAbility",i))):o>=5&n>1?(l(r("build/lowerPoints",2)),l(r("build/raiseAbility",i))):_(s.jsx(S,{errors:{FAQ:["Increasing this ability requires 2 points"]}}))},A=(t,i)=>{t.preventDefault(),p===i?l(v("plus_2",i)):(m===i&&l(v("plus_1",i)),l(j("plus_2",i)))},k=(t,i)=>{t.preventDefault(),m===i?l(v("plus_1",i)):(p===i&&l(v("plus_2",i)),l(j("plus_1",i)))};return s.jsxs("div",{className:e.stat,children:[s.jsxs("div",{className:e.label,children:[s.jsx(I,{loading:"lazy",className:e.statImg,path:`stat_icons/${x}.png`}),s.jsx("div",{className:e.name,children:x})]}),s.jsxs("div",{className:e.values,children:[s.jsxs("div",{className:e.valueContainer,children:[s.jsx("button",{disabled:o<1||n>26,className:o<1||n>26?e.disabled:e.enabled,onClick:t=>C(t,c),children:s.jsx(E,{size:"35"})}),s.jsx("div",{className:e.num,children:a}),s.jsx("button",{disabled:o>6||n<1,className:o>6||n<1?e.disabled:e.enabled,onClick:t=>g(t,c),children:s.jsx(P,{size:"35"})})]}),s.jsxs("div",{className:e.bonuses,children:[s.jsx("button",{onClick:t=>A(t,c),className:p===c?e.plusSelected:e.plus}),s.jsx("button",{onClick:t=>k(t,c),className:m===c?e.plusSelected:e.plus})]})]})]})}const Z="_main_yrgfa_1",ss="_title_yrgfa_13",es="_buttons_yrgfa_18",ts="_reset_yrgfa_25",ls="_cancel_yrgfa_35",u={main:Z,title:ss,buttons:es,reset:ts,cancel:ls};function ns(){const c=f(),{closeModal:l}=N(),_=n=>{n.preventDefault(),c(r("build/resetAbilities")),l()},a=n=>{n.preventDefault(),l()};return s.jsxs("main",{className:u.main,children:[s.jsx("span",{className:u.title,children:"RESETTING ABILITIES"}),s.jsx("span",{className:u.confirm,children:"Are you sure?"}),s.jsxs("div",{className:u.buttons,children:[s.jsx("button",{onClick:_,children:s.jsx(w,{className:u.reset,size:"30"})}),s.jsx("button",{onClick:a,children:s.jsx(D,{className:u.cancel,size:"30"})})]})]})}function os(){const c=d(n=>n.builds.current.points),l=d(n=>n.builds.current.plus_1),_=d(n=>n.builds.current.plus_2),a=["strength","dexterity","constitution","intelligence","wisdom","charisma"];return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:e.header,children:[s.jsx("div",{className:e.reset,children:c<27&&s.jsx(z,{buttonText:s.jsx(M,{size:"40"}),modalComponent:s.jsx(ns,{})})}),s.jsx("div",{className:e.title,children:"Abilities"})]}),s.jsx("div",{className:e.points,children:`Ability Points: ${c}`}),s.jsxs("div",{className:e.abilityList,children:[s.jsxs("div",{className:e.heading,children:[s.jsx("div",{className:_===""?e.red:"",children:"+2"}),s.jsx("div",{className:l===""?e.red:"",children:"+1"})]}),a.map(n=>s.jsx(Y,{ability:n},n))]})]})}export{os as default};