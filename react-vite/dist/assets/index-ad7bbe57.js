import{b as B,d as v,j as e,N,x as S,y as w,r as h,z as I,P as z,A}from"./index-4420b638.js";import{G as k,m as y,c as $,C as F,a as L,n as D,o as R}from"./index-669f94ff.js";const O="_main_17bqz_1",q="_loading_17bqz_10",H="_fadeIn_17bqz_1",P={main:O,loading:q,fadeIn:H},U="_main_oxo1e_1",E="_navButton_oxo1e_13",G="_toCreate_oxo1e_21",M="_body_oxo1e_27",V="_scroll_oxo1e_37",T="_buildsList_oxo1e_44",W="_noBuilds_oxo1e_56",J="_sorry_oxo1e_64",K="_favorited_oxo1e_67",Q="_build_oxo1e_44",X="_select_oxo1e_87",Y="_buildName_oxo1e_105",Z="_buildClassList_oxo1e_116",ee="_selectedBuild_oxo1e_123",se="_selectedHeader_oxo1e_135",te="_favoriteContainer_oxo1e_142",ae="_favorite_oxo1e_67",le="_headerRight_oxo1e_155",ie="_selectedClassImg_oxo1e_158",ce="_selectedBody_oxo1e_169",ne="_selectedName_oxo1e_183",oe="_selectedAttributes_oxo1e_186",de="_stat_oxo1e_191",re="_selectedClasses_oxo1e_197",_e="_selClass_oxo1e_205",me="_listImage_oxo1e_212",ue="_selectedCharacter_oxo1e_216",he="_char_oxo1e_224",xe="_toBuild_oxo1e_231",je="_orange_oxo1e_243",ve="_hidden_oxo1e_257",ge="_loading_oxo1e_261",Ce="_fadeIn_oxo1e_1",t={main:U,navButton:E,toCreate:G,body:M,scroll:V,buildsList:T,noBuilds:W,sorry:J,favorited:K,build:Q,select:X,buildName:Y,buildClassList:Z,selectedBuild:ee,selectedHeader:se,favoriteContainer:te,favorite:ae,headerRight:le,selectedClassImg:ie,selectedBody:ce,selectedName:ne,selectedAttributes:oe,stat:de,selectedClasses:re,selClass:_e,listImage:me,selectedCharacter:ue,char:he,toBuild:xe,orange:je,hidden:ve,loading:ge,fadeIn:Ce};function p(s){return k({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(s)}function fe(s){return k({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(s)}function Ne({build:s}){const i=B(),n=v(l=>{var j;return(j=l.session.user)==null?void 0:j.favorites}),_=v(l=>l.static.races[s.race].name),m=v(l=>l.static.backgrounds[s.background].name),u=["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"],d=l=>{l.preventDefault(),n[s.id]?i(S(s.id)):i(w(s.id))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:t.selectedHeader,children:[e.jsx("div",{className:t.favoriteContainer,children:n&&e.jsx("button",{title:"Add to favorites",className:t.favorite,onClick:d,children:n[s.id]?e.jsx(p,{size:"40"}):e.jsx(fe,{size:"40"})})}),e.jsx("div",{className:t.selectedClassImg,children:s.build_classes.length>0&&e.jsx("img",{src:`https://ik.imagekit.io/phl0at/images/class_icons/${s.build_classes[0].name}.png`})}),e.jsx("div",{className:t.headerRight})]}),e.jsxs("div",{className:t.selectedBody,children:[e.jsx("div",{className:t.selectedName,children:s.name}),e.jsx("div",{className:t.selectedAttributes,children:u.map(l=>e.jsxs("div",{className:t.stat,children:[e.jsx("div",{className:t.orange,children:l.slice(0,3)}),e.jsx("div",{children:s[l.toLowerCase()]})]},l))}),e.jsx("div",{className:t.selectedClasses,children:s.build_classes.map(l=>e.jsxs("div",{className:t.selClass,children:[e.jsx("img",{title:l.name,className:t.listImage,src:`https://ik.imagekit.io/phl0at/images/class_icons/${l.name}.png`}),e.jsx("div",{children:l.level})]},l.class_id))}),e.jsxs("div",{className:t.selectedCharacter,children:[e.jsx("div",{className:t.char,children:s.character_name}),"|",e.jsx("div",{className:t.char,children:_}),"|",e.jsx("div",{className:t.char,children:m})]}),e.jsx(N,{title:"Go to build",className:t.toBuild,to:`/build/${s.id}`,children:e.jsx(y,{size:"50"})})]})]})}function be({filters:s,setFilters:i}){const[n,_]=h.useState(null),m=v(a=>a.builds[n]),u=v(a=>a.users),d=v(a=>a.session.user),l=v(a=>a.builds),j=Object.values(s).find(a=>a!=null),c=h.useMemo(()=>I(l,s,d),[l,s,d]);h.useEffect(()=>{if(!d){const a={...s};delete a.owned,delete a.favorites,i({...a})}},[d]);const g=(a,r)=>{a.preventDefault(),_(r)};return c.length<1&!j?e.jsx("main",{className:t.main,children:e.jsx("div",{className:t.scroll,children:e.jsx(z,{className:t.loading,color:"#e4c274",size:"20px"})})}):e.jsx("main",{className:t.main,children:e.jsxs("div",{className:t.body,children:[e.jsx("div",{className:t.scroll,children:e.jsxs("div",{className:t.buildsList,children:[c!=null&&c.map((a,r)=>{var o;return e.jsx("button",{onClick:C=>g(C,a.id),className:n===a.id?t.select:t.build,children:e.jsxs(e.Fragment,{children:[d&&d.favorites[a.id]?e.jsx(p,{className:t.favorited,size:"17"}):null,e.jsx("div",{className:t.buildName,children:a.name}),e.jsx("div",{className:t.owner,children:`Created By: ${(o=u[a.user_id])==null?void 0:o.username}`}),e.jsx("div",{className:t.buildComments,children:`Comments: ${Object.values(a.comments).length}`}),e.jsx("div",{className:t.buildClassList,children:Object.values(a.build_classes).map(C=>e.jsx("div",{className:t.buildClass,children:`| ${C.level} ${C.name}`},C.class_id))},r)]})},a.id)}),c.length<1&&e.jsxs("div",{className:t.noBuilds,children:[e.jsx("div",{className:t.sorry,children:"Sorry, adventurer!"}),e.jsxs("div",{className:t.message,children:["There are no builds matching the current filters",e.jsxs("div",{children:["Head over to the ",e.jsx(N,{to:"/create",children:"Create Build Page"})," to make one!"]})]})]})]})}),e.jsx("div",{className:n?t.selectedBuild:t.hidden,children:n&&e.jsx(e.Fragment,{children:e.jsx(Ne,{build:m})})}),e.jsx("div",{className:t.navButton,children:e.jsx(N,{title:"Create build",className:t.toCreate,to:"/create",children:e.jsx($,{size:"50"})})})]})})}const Be="_main_mkgt8_1",ke="_title_mkgt8_17",pe="_filterContainer_mkgt8_27",Se="_filter_mkgt8_27",we="_list_mkgt8_48",Ie="_listItem_mkgt8_57",ze="_selected_mkgt8_60",Ae="_clear_mkgt8_67",ye="_button_mkgt8_73",x={main:Be,title:ke,filterContainer:pe,filter:Se,list:we,listItem:Ie,selected:ze,clear:Ae,button:ye};function b({type:s,filters:i,setFilters:n}){const _=s[0].toUpperCase()+s.slice(1);return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs("button",{className:x.filter,onClick:m=>{m.preventDefault(),n(u=>i[s]?{...u,[s]:null}:{...u,[s]:!0})},children:[i[s]?e.jsx(F,{size:"24"}):e.jsx(L,{size:"24"}),_]})})})}function f({type:s,show:i,setShow:n,selectedItem:_,setSelectedItem:m,filters:u,setFilters:d}){const l=s[0].toUpperCase()+s.slice(1),j=v(c=>c.static[s]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsxs("button",{className:x.filter,onClick:c=>{c.preventDefault(),n(!i)},children:[i?e.jsx(D,{size:"24"}):e.jsx(R,{size:"24"}),l]})}),i&&e.jsx("div",{className:x.list,children:Object.values(j).map((c,g)=>{const a=c.class_id?"class_id":"id";return e.jsx("div",{children:e.jsx("button",{className:_[s]===c.name?x.selected:x.listItem,onClick:r=>{r.preventDefault(),d(o=>u[s]===c[a]?{...o,[s]:null}:{...o,[s]:c[a]}),m(o=>_[s]===c.name?{...o,[s]:null}:{...o,[s]:c.name})},children:c.name})},g)})})]})}function $e({filters:s,setFilters:i}){const n=v(o=>o.session.user),[_,m]=h.useState(!1),[u,d]=h.useState(!1),[l,j]=h.useState(!1),[c,g]=h.useState(!1),[a,r]=h.useState({});return e.jsxs("main",{className:x.main,children:[e.jsx("div",{className:x.title,children:"Filters"}),e.jsxs("div",{className:x.filterContainer,children:[e.jsxs("div",{children:[n&&e.jsxs(e.Fragment,{children:[e.jsx(b,{type:"owned",filters:s,setFilters:i}),e.jsx(b,{type:"favorites",filters:s,setFilters:i})]}),e.jsx(f,{type:"origins",show:_,setShow:m,selectedItem:a,setSelectedItem:r,filters:s,setFilters:i}),e.jsx(f,{type:"races",show:u,setShow:d,selectedItem:a,setSelectedItem:r,filters:s,setFilters:i}),e.jsx(f,{type:"backgrounds",show:l,setShow:j,selectedItem:a,setSelectedItem:r,filters:s,setFilters:i}),e.jsx(f,{type:"classes",show:c,setShow:g,selectedItem:a,setSelectedItem:r,filters:s,setFilters:i})]}),e.jsx("div",{className:x.clear,children:Object.values(s).find(o=>o!=null)&&e.jsx("button",{className:x.button,onClick:o=>{o.preventDefault(),i({}),r({}),m(!1),d(!1),j(!1),g(!1)},children:"Clear Filters"})}),e.jsx("div",{})]})]})}function De(){const s=B(),[i,n]=h.useState({});return h.useEffect(()=>{s(A())},[s]),e.jsxs("main",{className:P.main,children:[e.jsx($e,{filters:i,setFilters:n}),e.jsx(be,{filters:i,setFilters:n})]})}export{De as default};
