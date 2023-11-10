(()=>{var e={};e.id=677,e.ids=[677],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},19391:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>p,routeModule:()=>g,tree:()=>l});var r=a(67096),s=a(16132),n=a(37284),i=a.n(n),o=a(32564),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);a.d(t,d);let l=["",{children:["page_selection",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,20543)),"C:\\Users\\denys\\Documents\\GitHub\\gameplay-planner\\src\\app\\page_selection\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,31941)),"C:\\Users\\denys\\Documents\\GitHub\\gameplay-planner\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["C:\\Users\\denys\\Documents\\GitHub\\gameplay-planner\\src\\app\\page_selection\\page.js"],c="/page_selection/page",u={require:a,loadChunk:()=>Promise.resolve()},g=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/page_selection/page",pathname:"/page_selection",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},87254:(e,t,a)=>{Promise.resolve().then(a.bind(a,47478))},47478:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>PageSelection});var r=a(30784),s=a(9885),n=a(3779),i=a(11440),o=a.n(i),d=a(52451),l=a.n(d);let page_card=({page:e,setTab:t,redBorder:a})=>{let s,n="",i="",d="";switch(e){case"upload":n="file_upload",i="Upload",d="/";break;case"expedition":n="signpost",i="Expedition",d="/expeditions";break;case"pets":n="paw_plus",i="Equip Pets",d="/pets";break;case"farm":n="farming",i="Farm",d="/farming";break;case"cards":n="badge",i="Cards",d="/cards";break;case"protein":n="gear_lightgray",i="Protein",d="/protein";break;case"donation":n="donation-cropped",i="Donations",d="/donation";break;case"gratitude":n="heart",i="Gratitude",d="/gratitude";break;default:n="file_upload",i="Upload"}return r.jsx(o(),{href:d,style:{textDecoration:"none"},children:(0,r.jsxs)("div",{className:"hover",style:{height:"148px",width:"150px",marginRight:"48px",borderRadius:"6px",pointerEvents:"",opacity:""},children:[r.jsx("div",{className:`${a?"borderToFadeInAndOutRed":""}`,style:{height:"80%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255,255,255, 0.05)",borderTopRightRadius:"12px",borderTopLeftRadius:"12px",padding:"6px 6px 6px 6px",borderTop:"2px solid rgba(255,255,255,0.8)",borderLeft:"2px solid rgba(255,255,255,0.8)",borderRight:"2px solid rgba(255,255,255,0.8)"},children:r.jsx("div",{style:{position:"relative",height:"calc(100% - 12px)",width:"calc(100% - 12px)"},children:r.jsx(l(),{alt:`navigation item, picture of ${n}`,src:s||`/images/icons/${n}.svg`,fill:!0,priority:!0})})}),r.jsx("div",{className:`${a?"borderToFadeInAndOutRed":""}`,style:{height:"20%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255,255,255, 0.12)",borderBottomRightRadius:"12px",borderBottomLeftRadius:"12px",borderBottom:"2px solid rgba(255,255,255,0.8)",borderLeft:"2px solid rgba(255,255,255,0.8)",borderRight:"2px solid rgba(255,255,255,0.8)"},children:r.jsx("div",{className:"importantText",style:{fontSize:"20px"},children:i})})]})})},util_Dot=({size:e,radius:t})=>r.jsx("div",{className:"elementToFadeInAndOut",style:{color:"red",backgroundColor:"red",width:e||"12px",height:e||"12px",borderRadius:t||"6px"}});function BlinkDot({data:e}){let t=(0,s.useRef)(null);return t.current&&(console.log(t.current),console.log(t.current.parents)),r.jsx("div",{style:{position:"absolute",left:"-15px",zIndex:"3"},id:"blinkingDot",children:r.jsx(util_Dot,{})})}var p=a(35877),c=a.n(p),u=a(27428);function PageSelection(){(0,s.useEffect)(()=>{},[]);let[e,t]=c()("userData",u),[a,n]=(0,s.useState)(u);(0,s.useEffect)(()=>{n(e)},[e]);let i=a.CurrentCardCharge===a.MaxCardCharge&&0!==a.MaxCardCharge&&a.AscensionCount>=6;return(0,r.jsxs)("div",{style:{display:"flex",flex:"1",backgroundColor:"black",position:"relative"},children:[r.jsx(BlinkDot,{data:a}),(0,r.jsxs)("div",{style:{paddingLeft:"6px",display:"flex",flexDirection:"column",flex:"1",justifyContent:"center",backgroundColor:"rgba(255,255,255, 0.08)",paddingLeft:"60px"},children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[r.jsx(page_card,{page:"upload"}),r.jsx(page_card,{page:"expedition"}),r.jsx(page_card,{page:"pets"})]}),(0,r.jsxs)("div",{style:{display:"flex",marginTop:"36px"},children:[r.jsx(page_card,{page:"farm"}),r.jsx(page_card,{page:"cards",redBorder:i}),r.jsx(page_card,{page:"protein"}),r.jsx(page_card,{page:"gratitude"})]})]})]})}n.ZP.initialize([{trackingId:"G-GGLPK02VH8"}])},20543:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Page,generateMetadata:()=>generateMetadata});var r=a(4656),s=a(95153);let n=(0,s.createProxy)(String.raw`C:\Users\denys\Documents\GitHub\gameplay-planner\src\app\page_selection\page_content.jsx`),{__esModule:i,$$typeof:o}=n,d=n.default;async function generateMetadata({params:e,searchParams:t},a){return{title:"Page Selection - Gameplay Planner",description:"Planner selector page, pick what tool you want to use to plan your playthrough!"}}function Page(){return r.jsx(d,{})}},11440:(e,t,a)=>{e.exports=a(30614)}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[655,990,877,822,340],()=>__webpack_exec__(19391));module.exports=a})();