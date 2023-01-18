import{d as y,c as v,w as s,r as a,o as n,h as t,f as i,F as k,i as b,a as e,t as c,g as B,b as l,bo as j,n as C}from"./app-166e967f.js";import{J as S}from"./ActionMessage-f68a8e17.js";import{J,a as L}from"./DialogModal-3e98c12b.js";import{J as M}from"./Button-9d112428.js";import{J as x}from"./Input-b731e5bd.js";import{J as O}from"./InputError-a0d922d4.js";import{J as V}from"./SecondaryButton-5917792c.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";const F=y({props:["sessions"],components:{JetActionMessage:S,JetActionSection:J,JetButton:M,JetDialogModal:L,JetInput:x,JetInputError:O,JetSecondaryButton:V},data(){return{confirmingLogout:!1,form:this.$inertia.form({password:""})}},methods:{confirmLogout(){this.confirmingLogout=!0,setTimeout(()=>this.$refs.password.focus(),250)},logoutOtherBrowserSessions(){this.form.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>this.closeModal(),onError:()=>this.$refs.password.focus(),onFinish:()=>this.form.reset()})},closeModal(){this.confirmingLogout=!1,this.form.reset()}}}),I=e("div",{class:"max-w-xl text-sm text-gray-600"}," If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. ",-1),N={key:0,class:"mt-5 space-y-6"},z={key:0,fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor",class:"h-8 w-8 text-gray-500"},D=e("path",{d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},null,-1),E=[D],K={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"h-8 w-8 text-gray-500"},T=e("path",{d:"M0 0h24v24H0z",stroke:"none"},null,-1),A=e("rect",{x:"7",y:"4",width:"10",height:"16",rx:"1"},null,-1),H=e("path",{d:"M11 5h2M12 17v.01"},null,-1),P=[T,A,H],U={class:"ml-3"},q={class:"text-sm text-gray-600"},G={class:"text-xs text-gray-500"},Q={key:0,class:"font-semibold text-green-500"},R={key:1},W={class:"mt-5 flex items-center"},X={class:"mt-4"};function Y(o,d,Z,oo,eo,so){const u=a("jet-button"),m=a("jet-action-message"),p=a("jet-input"),h=a("jet-input-error"),_=a("jet-secondary-button"),f=a("jet-dialog-modal"),g=a("jet-action-section");return n(),v(g,null,{title:s(()=>[t(" Browser Sessions ")]),description:s(()=>[t(" Manage and log out your active sessions on other browsers and devices. ")]),content:s(()=>[I,o.sessions.length>0?(n(),i("div",N,[(n(!0),i(k,null,b(o.sessions,(r,w)=>(n(),i("div",{class:"flex items-center",key:w},[e("div",null,[r.agent.is_desktop?(n(),i("svg",z,E)):(n(),i("svg",K,P))]),e("div",U,[e("div",q,c(r.agent.platform)+" - "+c(r.agent.browser),1),e("div",null,[e("div",G,[t(c(r.ip_address)+", ",1),r.is_current_device?(n(),i("span",Q,"This device")):(n(),i("span",R,"Last active "+c(r.last_active),1))])])])]))),128))])):B("",!0),e("div",W,[l(u,{onClick:o.confirmLogout},{default:s(()=>[t(" Log Out Other Browser Sessions ")]),_:1},8,["onClick"]),l(m,{on:o.form.recentlySuccessful,class:"ml-3"},{default:s(()=>[t(" Done. ")]),_:1},8,["on"])]),l(f,{show:o.confirmingLogout,onClose:o.closeModal},{title:s(()=>[t(" Log Out Other Browser Sessions ")]),content:s(()=>[t(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),e("div",X,[l(p,{type:"password",class:"mt-1 block w-3/4",placeholder:"Password",ref:"password",modelValue:o.form.password,"onUpdate:modelValue":d[0]||(d[0]=r=>o.form.password=r),onKeyup:j(o.logoutOtherBrowserSessions,["enter"])},null,8,["modelValue","onKeyup"]),l(h,{message:o.form.errors.password,class:"mt-2"},null,8,["message"])])]),footer:s(()=>[l(_,{onClick:o.closeModal},{default:s(()=>[t(" Cancel ")]),_:1},8,["onClick"]),l(u,{class:C(["ml-2",{"opacity-25":o.form.processing}]),onClick:o.logoutOtherBrowserSessions,disabled:o.form.processing},{default:s(()=>[t(" Log Out Other Browser Sessions ")]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show","onClose"])]),_:1})}const mo=$(F,[["render",Y]]);export{mo as default};
