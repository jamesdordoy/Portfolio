import{f as i,a as e,n as o,b5 as s,F as x,i as u,o as l,h as n,t as c,b as d,W as h,bx as _,r as p}from"./app-72597c56.js";const f={class:"timeline-container"},y={class:"min-h-screen"},T={class:"flex min-h-screen justify-center"},b={class:"mx-2 w-full"},g={key:0,class:"flex w-full flex-row"},w={class:"w-4/5 py-10"},v={class:"mb-2 flex justify-between text-gray-600"},C=["innerHTML"],$=h('<div class="flex flex-row"><button class="mr-2 text-blue-500 transition duration-200 hover:text-blue-300"><i class="far fa-edit"></i></button><button class="text-red-500 transition duration-200 hover:text-red-300"><i class="far fa-trash-alt"></i></button></div>',1),M=["innerHTML"],L={class:"flex w-1/5 justify-center"},S={key:1,class:"flex w-full flex-row"},H={class:"flex w-1/5 justify-center"},k={class:"w-4/5 px-2 py-10"},j={class:"mb-2 flex justify-between text-gray-600"},B=["innerHTML"],E=["innerHTML"],N={__name:"MyExperianceSection",props:{timeline:{type:Array,required:!0}},setup(m){const t=_();return(V,D)=>{const a=p("font-awesome-icon");return l(),i("div",null,[e("h2",{class:o(["varela mb-8 text-center text-3xl",`text-${s(t).getters.primaryThemeTextColour}`])}," My Experience ",2),e("div",f,[e("div",{class:o(["timeline",`timeline-${s(t).getters.primaryThemeColour}`])},[e("div",y,[e("div",T,[e("div",b,[(l(!0),i(x,null,u(m.timeline,r=>(l(),i("div",{key:r.id},[r.id&1?(l(),i("div",g,[e("div",w,[e("div",{class:o(["flex w-full flex-col border-b px-4 py-5 shadow",`bg-${s(t).getters.primaryThemeBgDarker} border-${s(t).getters.primaryThemeColour}-${s(t).getters.primaryThemeColourShade}`])},[e("div",v,[e("div",{class:o([`text-${s(t).getters.primaryThemeTextColour}`,"font-bold"])},[e("p",{class:"mb-1 text-lg",innerHTML:r.name},null,8,C),n(" "+c(r.title),1)],2),$]),e("p",{class:o(`text-${s(t).getters.primaryThemeTextColour}`),innerHTML:r.body},null,10,M)],2)]),e("div",L,[d(a,{class:o(["m-auto text-5xl",`text-${s(t).getters.primaryThemeColour}-${s(t).getters.primaryThemeColourShade}`]),icon:r.icon},null,8,["class","icon"])])])):(l(),i("div",S,[e("div",H,[d(a,{class:o(["m-auto text-5xl",`text-${s(t).getters.primaryThemeColour}-${s(t).getters.primaryThemeColourShade}`]),icon:r.icon},null,8,["class","icon"])]),e("div",k,[e("div",{class:o(["flex w-full flex-col border-b px-4 py-5 shadow",`bg-${s(t).getters.primaryThemeBgDarker} border-${s(t).getters.primaryThemeColour}-${s(t).getters.primaryThemeColourShade}`])},[e("div",j,[e("div",{class:o([`text-${s(t).getters.primaryThemeTextColour}`,"font-bold"])},[e("p",{class:"mb-1 text-lg",innerHTML:r.name},null,8,B),n(" "+c(r.title),1)],2)]),e("p",{class:o(`text-${s(t).getters.primaryThemeTextColour}`),innerHTML:r.body},null,10,E)],2)])]))]))),128))])])])],2)])])}}},q=N;export{q as default};
