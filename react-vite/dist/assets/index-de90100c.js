import{a as k,u,j as e,A as b,w as B,N as f,x as p,y as I,r as j,z as S,P as z,B as $}from"./index-daaa0bd4.js";import{m as F,e as w,C as A,a as L,n as D,o as y,p as R}from"./index-76b4ea14.js";const q="_main_17bqz_1",H="_loading_17bqz_10",O="_fadeIn_17bqz_1",U={main:q,loading:H,fadeIn:O},P="_main_rr8nk_1",E="_navButton_rr8nk_13",V="_toCreate_rr8nk_21",G="_body_rr8nk_27",M="_scroll_rr8nk_37",T="_buildsList_rr8nk_44",W="_noBuilds_rr8nk_56",J="_sorry_rr8nk_64",K="_favorited_rr8nk_67",Q="_build_rr8nk_44",X="_select_rr8nk_87",Y="_buildName_rr8nk_105",Z="_buildClassList_rr8nk_116",ee="_selectedBuild_rr8nk_123",se="_selectedHeader_rr8nk_135",te="_favoriteContainer_rr8nk_142",ae="_favorite_rr8nk_67",ne="_headerRight_rr8nk_155",ie="_selectedClassImg_rr8nk_158",le="_selectedBody_rr8nk_169",re="_selectedName_rr8nk_183",ce="_selectedAttributes_rr8nk_186",de="_stat_rr8nk_191",oe="_selectedClasses_rr8nk_197",_e="_selClass_rr8nk_205",me="_listImage_rr8nk_212",ue="_selectedCharacter_rr8nk_216",he="_char_rr8nk_224",je="_toBuild_rr8nk_231",xe="_orange_rr8nk_243",ve="_hidden_rr8nk_257",Ce="_loading_rr8nk_261",Ne="_fadeIn_rr8nk_1",t={main:P,navButton:E,toCreate:V,body:G,scroll:M,buildsList:T,noBuilds:W,sorry:J,favorited:K,build:Q,select:X,buildName:Y,buildClassList:Z,selectedBuild:ee,selectedHeader:se,favoriteContainer:te,favorite:ae,headerRight:ne,selectedClassImg:ie,selectedBody:le,selectedName:re,selectedAttributes:ce,stat:de,selectedClasses:oe,selClass:_e,listImage:me,selectedCharacter:ue,char:he,toBuild:je,orange:xe,hidden:ve,loading:Ce,fadeIn:Ne};function fe({build:s}){const i=k(),r=u(n=>{var x;return(x=n.session.user)==null?void 0:x.favorites}),m=u(n=>n.static.races[s.race].name),o=u(n=>n.static.backgrounds[s.background].name),d=["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"],l=n=>{n.preventDefault(),r[s.id]?i(p(s.id)):i(I(s.id))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:t.selectedHeader,children:[e.jsx("div",{className:t.favoriteContainer,children:r&&e.jsx("button",{title:"Add to favorites",className:t.favorite,onClick:l,children:r[s.id]?e.jsx(b,{size:"40"}):e.jsx(B,{size:"40"})})}),e.jsx("div",{className:t.selectedClassImg,children:s.build_classes.length>0&&e.jsx("img",{src:`https://ik.imagekit.io/phl0at/images/class_icons/${s.build_classes[0].name}.png`})}),e.jsx("div",{className:t.headerRight})]}),e.jsxs("div",{className:t.selectedBody,children:[e.jsx("div",{className:t.selectedName,children:s.name}),e.jsx("div",{className:t.selectedAttributes,children:d.map(n=>e.jsxs("div",{className:t.stat,children:[e.jsx("div",{className:t.orange,children:n.slice(0,3)}),e.jsx("div",{children:s[n.toLowerCase()]})]},n))}),e.jsx("div",{className:t.selectedClasses,children:s.build_classes.map(n=>e.jsxs("div",{className:t.selClass,children:[e.jsx("img",{title:n.name,className:t.listImage,src:`https://ik.imagekit.io/phl0at/images/class_icons/${n.name}.png`}),e.jsx("div",{children:n.level})]},n.class_id))}),e.jsxs("div",{className:t.selectedCharacter,children:[e.jsx("div",{className:t.char,children:s.character_name}),"|",e.jsx("div",{className:t.char,children:m}),"|",e.jsx("div",{className:t.char,children:o})]}),e.jsx(f,{title:"Go to build",className:t.toBuild,to:`/build/${s.id}`,children:e.jsx(F,{size:"50"})})]})]})}function ge({filters:s,setFilters:i}){const[r,m]=j.useState(null),o=u(a=>a.builds[r]),d=u(a=>a.users),l=u(a=>a.session.user),n=u(a=>a.builds),x=Object.values(s).find(a=>a!=null),c=j.useMemo(()=>S(n,s,l),[n,s,l]);j.useEffect(()=>{if(!l){const a={...s};delete a.owned,delete a.favorites,i({...a})}},[l]);const N=(a,v)=>{a.preventDefault(),m(v)};return c.length<1&!x?e.jsx("main",{className:t.main,children:e.jsx("div",{className:t.scroll,children:e.jsx(z,{className:t.loading,color:"#e4c274",size:"20px"})})}):e.jsx("main",{className:t.main,children:e.jsxs("div",{className:t.body,children:[e.jsx("div",{className:t.scroll,children:e.jsxs("div",{className:t.buildsList,children:[c!=null&&c.map((a,v)=>{var h;return e.jsx("button",{onClick:C=>N(C,a.id),className:r===a.id?t.select:t.build,children:e.jsxs(e.Fragment,{children:[l&&l.favorites[a.id]?e.jsx(b,{className:t.favorited,size:"17"}):null,e.jsx("div",{className:t.buildName,children:a.name}),e.jsx("div",{className:t.owner,children:`Created By: ${(h=d[a.user_id])==null?void 0:h.username}`}),e.jsx("div",{className:t.buildComments,children:`Comments: ${Object.values(a.comments).length}`}),e.jsx("div",{className:t.buildClassList,children:Object.values(a.build_classes).map(C=>e.jsx("div",{className:t.buildClass,children:`| ${C.level} ${C.name}`},C.class_id))},v)]})},a.id)}),c.length<1&&e.jsxs("div",{className:t.noBuilds,children:[e.jsx("div",{className:t.sorry,children:"Sorry, adventurer!"}),e.jsxs("div",{className:t.message,children:["There are no builds matching the current filters",e.jsxs("div",{children:["Head over to the ",e.jsx(f,{to:"/create",children:"Create Build Page"})," to make one!"]})]})]})]})}),e.jsx("div",{className:r?t.selectedBuild:t.hidden,children:r&&e.jsx(e.Fragment,{children:e.jsx(fe,{build:o})})}),e.jsx("div",{className:t.navButton,children:e.jsx(f,{title:"Create build",className:t.toCreate,to:"/create",children:e.jsx(w,{size:"50"})})})]})})}const ke="_main_149ub_1",be="_title_149ub_16",Be="_filterContainer_149ub_27",pe="_filter_149ub_27",Ie="_hidden_149ub_49",Se="_list_149ub_62",ze="_listItem_149ub_75",$e="_selected_149ub_78",Fe="_clear_149ub_85",_={main:ke,title:be,filterContainer:Be,filter:pe,hidden:Ie,list:Se,listItem:ze,selected:$e,clear:Fe};function g({type:s,filters:i,setFilters:r}){const m=s[0].toUpperCase()+s.slice(1);return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs("button",{className:_.filter,onClick:o=>{o.preventDefault(),r(d=>i[s]?{...d,[s]:null}:{...d,[s]:!0})},children:[i[s]?e.jsx(A,{size:"24"}):e.jsx(L,{size:"24"}),m]})})})}function we({type:s,selectedItem:i,setSelectedItem:r,filters:m,setFilters:o}){const[d,l]=j.useState(!1),n=s[0].toUpperCase()+s.slice(1),x=u(c=>c.static[s]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsxs("button",{className:_.filter,onClick:c=>{c.preventDefault(),l(!d)},children:[d?e.jsx(D,{size:"24"}):e.jsx(y,{size:"24"}),n]})}),e.jsx("div",{className:d?_.list:_.hidden,children:Object.values(x).map((c,N)=>{const a=c.class_id?"class_id":"id";return e.jsx("div",{children:e.jsx("button",{className:i[s]===c.name?_.selected:_.listItem,onClick:v=>{v.preventDefault(),o(h=>m[s]===c[a]?{...h,[s]:null}:{...h,[s]:c[a]}),r(h=>i[s]===c.name?{...h,[s]:null}:{...h,[s]:c.name})},children:c.name})},N)})})]})}function Ae({filters:s,setFilters:i}){const r=u(l=>l.session.user),[m,o]=j.useState({}),d=["origins","races","backgrounds","classes"];return e.jsxs("main",{className:_.main,children:[e.jsxs("div",{className:_.title,children:["Filters",Object.values(s).find(l=>l!=null)&&e.jsx("button",{className:_.clear,onClick:l=>{l.preventDefault(),i({}),o({})},children:e.jsx(R,{size:"30"})})]}),e.jsx("div",{className:_.filterContainer,children:e.jsxs("div",{children:[r&&e.jsxs(e.Fragment,{children:[e.jsx(g,{type:"owned",filters:s,setFilters:i}),e.jsx(g,{type:"favorites",filters:s,setFilters:i})]}),d.map((l,n)=>e.jsx(we,{type:l,selectedItem:m,setSelectedItem:o,filters:s,setFilters:i},n))]})})]})}function ye(){const s=k(),[i,r]=j.useState({});return j.useEffect(()=>{s($())},[s]),e.jsxs("main",{className:U.main,children:[e.jsx(Ae,{filters:i,setFilters:r}),e.jsx(ge,{filters:i,setFilters:r})]})}export{ye as default};