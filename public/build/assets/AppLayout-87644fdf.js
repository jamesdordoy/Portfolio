import{o,f as n,a as t,d as y,n as u,g as d,t as w,j as x,k as A,l as F,m as H,e as f,p as M,v as S,b as r,w as s,T as J,q as L,c as g,r as h,h as a,F as C,i as N}from"./app-166e967f.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{H as E,L as O}from"./index-074b336d.js";const V={},I={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},q=t("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),R=t("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),U=[q,R];function G(e,i){return o(),n("svg",I,U)}const K=b(V,[["render",G]]),Q=y({data(){return{show:!0}},computed:{style(){var e;return((e=this.$page.props.jetstream.flash)==null?void 0:e.bannerStyle)||"success"},message(){var e;return((e=this.$page.props.jetstream.flash)==null?void 0:e.banner)||""}}}),W={class:"mx-auto max-w-screen-xl py-2 px-3 sm:px-6 lg:px-8"},X={class:"flex flex-wrap items-center justify-between"},Y={class:"flex w-0 min-w-0 flex-1 items-center"},Z={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ee=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),te=[ee],se={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},oe=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),re=[oe],ne={class:"ml-3 truncate text-sm font-medium text-white"},ae={class:"flex-shrink-0 sm:ml-3"},ie=t("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),le=[ie];function de(e,i,m,k,$,j){return o(),n("div",null,[e.show&&e.message?(o(),n("div",{key:0,class:u({"bg-indigo-500":e.style=="success","bg-red-700":e.style=="danger"})},[t("div",W,[t("div",X,[t("div",Y,[t("span",{class:u(["flex rounded-lg p-2",{"bg-indigo-600":e.style=="success","bg-red-600":e.style=="danger"}])},[e.style=="success"?(o(),n("svg",Z,te)):d("",!0),e.style=="danger"?(o(),n("svg",se,re)):d("",!0)],2),t("p",ne,w(e.message),1)]),t("div",ae,[t("button",{type:"button",class:u(["-mr-1 flex rounded-md p-2 transition focus:outline-none sm:-mr-2",{"hover:bg-indigo-600 focus:bg-indigo-600":e.style=="success","hover:bg-red-600 focus:bg-red-600":e.style=="danger"}]),"aria-label":"Dismiss",onClick:i[0]||(i[0]=x(c=>e.show=!1,["prevent"]))},le,2)])])])],2)):d("",!0)])}const ue=b(Q,[["render",de]]),ce=y({props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white"]}},setup(){let e=A(!1);const i=m=>{e.value&&m.keyCode===27&&(e.value=!1)};return F(()=>document.addEventListener("keydown",i)),H(()=>document.removeEventListener("keydown",i)),{open:e}},computed:{widthClass(){return{48:"w-48"}[this.width.toString()]},alignmentClasses(){return this.align==="left"?"origin-top-left left-0":this.align==="right"?"origin-top-right right-0":"origin-top"}}}),pe={class:"relative"};function he(e,i,m,k,$,j){return o(),n("div",pe,[t("div",{onClick:i[0]||(i[0]=c=>e.open=!e.open)},[f(e.$slots,"trigger")]),M(t("div",{class:"fixed inset-0 z-40",onClick:i[1]||(i[1]=c=>e.open=!1)},null,512),[[S,e.open]]),r(J,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:s(()=>[M(t("div",{class:u(["absolute z-50 mt-2 rounded-md shadow-lg",[e.widthClass,e.alignmentClasses]]),style:{display:"none"},onClick:i[2]||(i[2]=c=>e.open=!1)},[t("div",{class:u(["rounded-md ring-1 ring-black ring-opacity-5",e.contentClasses])},[f(e.$slots,"content")],2)],2),[[S,e.open]])]),_:3})])}const fe=b(ce,[["render",he]]),ge=y({components:{Link:L},props:["href","as"]}),me={key:0,type:"submit",class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"},ve=["href"];function _e(e,i,m,k,$,j){const c=h("Link");return o(),n("div",null,[e.as=="button"?(o(),n("button",me,[f(e.$slots,"default")])):e.as=="a"?(o(),n("a",{key:1,href:e.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 transition hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"},[f(e.$slots,"default")],8,ve)):(o(),g(c,{key:2,href:e.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 transition hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"},{default:s(()=>[f(e.$slots,"default")]),_:3},8,["href"]))])}const we=b(ge,[["render",_e]]),be=y({components:{Link:L},props:{href:{},active:{},target:{default:""},external:{default:!1}},computed:{classes(){return this.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition"}}}),ye=["href","target"];function ke(e,i,m,k,$,j){const c=h("Link");return e.external?(o(),n("a",{key:0,href:e.href,target:e.target,class:u(e.classes)},[f(e.$slots,"default")],10,ye)):(o(),g(c,{key:1,target:e.target,href:e.href,class:u(e.classes)},{default:s(()=>[f(e.$slots,"default")]),_:3},8,["target","href","class"]))}const $e=b(be,[["render",ke]]),je=y({components:{Link:L},props:["active","href","as"],computed:{classes(){return this.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition"}}});function xe(e,i,m,k,$,j){const c=h("Link");return o(),n("div",null,[e.as=="button"?(o(),n("button",{key:0,class:u([e.classes,"w-full text-left"])},[f(e.$slots,"default")],2)):(o(),g(c,{key:1,href:e.href,class:u(e.classes)},{default:s(()=>[f(e.$slots,"default")]),_:3},8,["href","class"]))])}const Ce=b(je,[["render",xe]]),Le=y({props:{title:String},components:{Head:E,JetApplicationMark:K,JetBanner:ue,JetDropdown:fe,JetDropdownLink:we,JetNavLink:$e,JetResponsiveNavLink:Ce,Link:O},data(){return{showingNavigationDropdown:!1}},methods:{switchToTeam(e){this.$inertia.put(route("current-team.update"),{team_id:e.id},{preserveState:!1})},logout(){this.$inertia.post(route("logout"))}}}),Te={class:"min-h-screen bg-gray-100"},Me={class:"border-b border-gray-100 bg-white"},Se={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Ne={class:"flex h-16 justify-between"},De={class:"flex"},Be={class:"flex flex-shrink-0 items-center"},ze={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},Pe={class:"hidden sm:ml-6 sm:flex sm:items-center"},Ae={class:"relative ml-3"},Fe={class:"inline-flex rounded-md"},He={type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:bg-gray-50 focus:outline-none active:bg-gray-50"},Je=t("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Ee={class:"w-60"},Oe=t("div",{class:"block px-4 py-2 text-xs text-gray-400"},"Manage Team",-1),Ve=t("div",{class:"border-t border-gray-100"},null,-1),Ie=t("div",{class:"block px-4 py-2 text-xs text-gray-400"},"Switch Teams",-1),qe=["onSubmit"],Re={class:"flex items-center"},Ue={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},Ge=t("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Ke=[Ge],Qe={class:"relative ml-3"},We={key:0,class:"flex rounded-full border-2 border-transparent text-sm transition focus:border-gray-300 focus:outline-none"},Xe=["src","alt"],Ye={key:1,class:"inline-flex rounded-md"},Ze={type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition hover:text-gray-700 focus:outline-none"},et=t("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),tt=t("div",{class:"block px-4 py-2 text-xs text-gray-400"},"Manage Account",-1),st=t("div",{class:"border-t border-gray-100"},null,-1),ot={class:"-mr-2 flex items-center sm:hidden"},rt={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},nt={class:"space-y-1 pt-2 pb-3"},at={class:"border-t border-gray-200 pt-4 pb-1"},it={class:"flex items-center px-4"},lt={key:0,class:"mr-3 flex-shrink-0"},dt=["src","alt"],ut={class:"text-base font-medium text-gray-800"},ct={class:"text-sm font-medium text-gray-500"},pt={class:"mt-3 space-y-1"},ht=t("div",{class:"border-t border-gray-200"},null,-1),ft=t("div",{class:"block px-4 py-2 text-xs text-gray-400"},"Manage Team",-1),gt=t("div",{class:"border-t border-gray-200"},null,-1),mt=t("div",{class:"block px-4 py-2 text-xs text-gray-400"},"Switch Teams",-1),vt=["onSubmit"],_t={class:"flex items-center"},wt={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},bt=t("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),yt=[bt],kt={key:0,class:"bg-white shadow"},$t={class:"mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8"};function jt(e,i,m,k,$,j){const c=h("Head"),D=h("jet-banner"),B=h("jet-application-mark"),z=h("Link"),p=h("jet-nav-link"),v=h("jet-dropdown-link"),T=h("jet-dropdown"),_=h("jet-responsive-nav-link");return o(),n("div",null,[r(c,{title:e.title},null,8,["title"]),r(D),t("div",Te,[t("nav",Me,[t("div",Se,[t("div",Ne,[t("div",De,[t("div",Be,[r(z,{href:e.route("dashboard")},{default:s(()=>[r(B,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),t("div",ze,[r(p,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:s(()=>[a(" Dashboard ")]),_:1},8,["href","active"]),r(p,{href:e.route("languages"),active:e.route().current("languages")},{default:s(()=>[a(" Languages ")]),_:1},8,["href","active"]),r(p,{active:e.route().current("frameworks")},{default:s(()=>[a(" Frameworks ")]),_:1},8,["active"]),r(p,{active:e.route().current("project_types")},{default:s(()=>[a(" Project Types ")]),_:1},8,["active"]),r(p,{active:e.route().current("contact")},{default:s(()=>[a(" Contact ")]),_:1},8,["active"]),r(p,{active:e.route().current("blog")},{default:s(()=>[a(" Blog ")]),_:1},8,["active"]),r(p,{href:e.route("tags"),active:e.route().current("tags")},{default:s(()=>[a(" Tags ")]),_:1},8,["href","active"]),r(p,{href:e.route("projects"),active:e.route().current("projects")},{default:s(()=>[a(" Projects ")]),_:1},8,["href","active"]),r(p,{external:!0,href:e.route("horizon.index")},{default:s(()=>[a(" Horizon ")]),_:1},8,["href"]),r(p,{external:!0,href:e.route("telescope")},{default:s(()=>[a(" Telescope ")]),_:1},8,["href"]),r(p,{target:"_blank",external:!0,href:"https://stats.jamesdordoy.co.uk/"},{default:s(()=>[a(" Stats ")]),_:1},8,["href"])])]),t("div",Pe,[t("div",Ae,[e.$page.props.jetstream.hasTeamFeatures?(o(),g(T,{key:0,align:"right",width:"60"},{trigger:s(()=>[t("span",Fe,[t("button",He,[a(w(e.$page.props.user.current_team.name)+" ",1),Je])])]),content:s(()=>[t("div",Ee,[e.$page.props.jetstream.hasTeamFeatures?(o(),n(C,{key:0},[Oe,r(v,{href:e.route("teams.show",e.$page.props.user.current_team)},{default:s(()=>[a(" Team Settings ")]),_:1},8,["href"]),e.$page.props.jetstream.canCreateTeams?(o(),g(v,{key:0,href:e.route("teams.create")},{default:s(()=>[a(" Create New Team ")]),_:1},8,["href"])):d("",!0),Ve,Ie,(o(!0),n(C,null,N(e.$page.props.user.all_teams,l=>(o(),n("form",{key:l.id,onSubmit:x(P=>e.switchToTeam(l),["prevent"])},[r(v,{as:"button"},{default:s(()=>[t("div",Re,[l.id==e.$page.props.user.current_team_id?(o(),n("svg",Ue,Ke)):d("",!0),t("div",null,w(l.name),1)])]),_:2},1024)],40,qe))),128))],64)):d("",!0)])]),_:1})):d("",!0)]),t("div",Qe,[r(T,{align:"right",width:"48"},{trigger:s(()=>[e.$page.props.jetstream.managesProfilePhotos?(o(),n("button",We,[t("img",{class:"h-8 w-8 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,Xe)])):(o(),n("span",Ye,[t("button",Ze,[a(w(e.$page.props.user.name)+" ",1),et])]))]),content:s(()=>[tt,r(v,{href:e.route("home")},{default:s(()=>[a(" Home ")]),_:1},8,["href"]),r(v,{href:e.route("profile.show")},{default:s(()=>[a(" Profile ")]),_:1},8,["href"]),e.$page.props.jetstream.hasApiFeatures?(o(),g(v,{key:0,href:e.route("api-tokens.index")},{default:s(()=>[a(" API Tokens ")]),_:1},8,["href"])):d("",!0),st,t("form",{onSubmit:i[0]||(i[0]=x((...l)=>e.logout&&e.logout(...l),["prevent"]))},[r(v,{as:"button"},{default:s(()=>[a(" Log Out ")]),_:1})],32)]),_:1})])]),t("div",ot,[t("button",{onClick:i[1]||(i[1]=l=>e.showingNavigationDropdown=!e.showingNavigationDropdown),class:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"},[(o(),n("svg",rt,[t("path",{class:u({hidden:e.showingNavigationDropdown,"inline-flex":!e.showingNavigationDropdown}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:u({hidden:!e.showingNavigationDropdown,"inline-flex":e.showingNavigationDropdown}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),t("div",{class:u([{block:e.showingNavigationDropdown,hidden:!e.showingNavigationDropdown},"sm:hidden"])},[t("div",nt,[r(_,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:s(()=>[a(" Dashboard ")]),_:1},8,["href","active"])]),t("div",at,[t("div",it,[e.$page.props.jetstream.managesProfilePhotos?(o(),n("div",lt,[t("img",{class:"h-10 w-10 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,dt)])):d("",!0),t("div",null,[t("div",ut,w(e.$page.props.user.name),1),t("div",ct,w(e.$page.props.user.email),1)])]),t("div",pt,[r(_,{href:e.route("profile.show"),active:e.route().current("profile.show")},{default:s(()=>[a(" Profile ")]),_:1},8,["href","active"]),e.$page.props.jetstream.hasApiFeatures?(o(),g(_,{key:0,href:e.route("api-tokens.index"),active:e.route().current("api-tokens.index")},{default:s(()=>[a(" API Tokens ")]),_:1},8,["href","active"])):d("",!0),t("form",{method:"POST",onSubmit:i[2]||(i[2]=x((...l)=>e.logout&&e.logout(...l),["prevent"]))},[r(_,{as:"button"},{default:s(()=>[a(" Log Out ")]),_:1})],32),e.$page.props.jetstream.hasTeamFeatures?(o(),n(C,{key:1},[ht,ft,r(_,{href:e.route("teams.show",e.$page.props.user.current_team),active:e.route().current("teams.show")},{default:s(()=>[a(" Team Settings ")]),_:1},8,["href","active"]),e.$page.props.jetstream.canCreateTeams?(o(),g(_,{key:0,href:e.route("teams.create"),active:e.route().current("teams.create")},{default:s(()=>[a(" Create New Team ")]),_:1},8,["href","active"])):d("",!0),gt,mt,(o(!0),n(C,null,N(e.$page.props.user.all_teams,l=>(o(),n("form",{key:l.id,onSubmit:x(P=>e.switchToTeam(l),["prevent"])},[r(_,{as:"button"},{default:s(()=>[t("div",_t,[l.id==e.$page.props.user.current_team_id?(o(),n("svg",wt,yt)):d("",!0),t("div",null,w(l.name),1)])]),_:2},1024)],40,vt))),128))],64)):d("",!0)])])],2)]),e.$slots.header?(o(),n("header",kt,[t("div",$t,[f(e.$slots,"header")])])):d("",!0),t("main",null,[f(e.$slots,"default")])])])}const Tt=b(Le,[["render",jt]]);export{Tt as A};