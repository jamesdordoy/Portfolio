import{d as h,c as g,w as e,r as n,o as l,a as t,l as r,f as _,b as c,p as y,F as x,m as i,t as d}from"./app.8e3291d0.js";import{A as B}from"./AppLayout.697df4a1.js";import{W as v}from"./Welcome.332b0c6b.js";import{J as b}from"./Button.58dbfe03.js";import{J as w}from"./DangerButton.75a95fd2.js";import{_ as J}from"./inertiajs-tables-laravel-query-builder.es.e42a2baf.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";const $=h({components:{AppLayout:B,Welcome:v,Table:J,JetstreamButton:b,JetstreamDangerButton:w},props:{tags:Object}}),k={class:"flex justify-between"},C=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Tags ",-1),D=i(" Create new Tag "),N={class:"py-12"},j={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},F={class:"overflow-hidden shadow-xl"},V=t("th",null,"For",-1),A=t("th",null,null,-1),E={class:"flex justify-end"},I=i(" Edit "),L=i("Delete");function W(s,a,M,O,S,q){const m=n("JetstreamButton"),p=n("JetstreamDangerButton"),u=n("Table"),f=n("app-layout");return l(),g(f,{title:"Tags"},{header:e(()=>[t("div",k,[C,r(m,{href:s.route("tags.create")},{default:e(()=>[D]),_:1},8,["href"])])]),default:e(()=>[t("div",N,[t("div",j,[t("div",F,[r(u,{meta:s.tags},{head:e(()=>[t("tr",null,[t("th",{onClick:a[0]||(a[0]=_(o=>s.sortBy("id"),["prevent"]))},"ID"),t("th",{onClick:a[1]||(a[1]=_(o=>s.sortBy("name"),["prevent"]))},"Name"),V,A])]),body:e(()=>[(l(!0),c(x,null,y(s.tags.data,o=>(l(),c("tr",{key:o.id},[t("td",null,d(o.id),1),t("td",null,d(o.taggable.name),1),t("td",null,d(o.taggable_type),1),t("td",E,[r(m,{classes:"mr-2"},{default:e(()=>[I]),_:1}),r(p,null,{default:e(()=>[L]),_:1})])]))),128))]),_:1},8,["meta"])])])])]),_:1})}var U=T($,[["render",W]]);export{U as default};