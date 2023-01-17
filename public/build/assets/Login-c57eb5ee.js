import{d as k,H as j,L as J,f as d,b as t,w as n,F as v,r as o,o as m,t as y,g as c,a as r,c as V,h as u,n as L,j as C}from"./app-d6652298.js";import{J as B}from"./AuthenticationCard-862ee1ff.js";import{J as $}from"./AuthenticationCardLogo-001fe631.js";import{J as F}from"./Button-fc5b6e87.js";import{J as H}from"./Input-a4fe5ebf.js";import{J as N}from"./Checkbox-6dc8c132.js";import{J as q}from"./Label-048be1ea.js";import{J as x}from"./ValidationErrors-49a2e13b.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const P=k({components:{Head:j,JetAuthenticationCard:B,JetAuthenticationCardLogo:$,JetButton:F,JetInput:H,JetCheckbox:N,JetLabel:q,JetValidationErrors:x,Link:J},props:{canResetPassword:Boolean,status:String},data(){return{form:this.$inertia.form({email:"",password:"",remember:!1})}},methods:{submit(){this.form.transform(e=>({...e,remember:this.form.remember?"on":""})).post(this.route("login"),{onFinish:()=>this.form.reset("password")})}}}),R={key:0,class:"mb-4 font-medium text-sm text-green-600"},S={class:"mt-4"},U={class:"block mt-4"},A={class:"flex items-center"},z=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),D={class:"flex items-center justify-end mt-4"};function I(e,s,M,T,G,K){const p=o("Head"),f=o("jet-authentication-card-logo"),_=o("jet-validation-errors"),i=o("jet-label"),l=o("jet-input"),b=o("jet-checkbox"),h=o("Link"),g=o("jet-button"),w=o("jet-authentication-card");return m(),d(v,null,[t(p,{title:"Log in"}),t(w,null,{logo:n(()=>[t(f)]),default:n(()=>[t(_,{class:"mb-4"}),e.status?(m(),d("div",R,y(e.status),1)):c("",!0),r("form",{onSubmit:s[3]||(s[3]=C((...a)=>e.submit&&e.submit(...a),["prevent"]))},[r("div",null,[t(i,{for:"email",value:"Email"}),t(l,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.form.email,"onUpdate:modelValue":s[0]||(s[0]=a=>e.form.email=a),required:"",autofocus:""},null,8,["modelValue"])]),r("div",S,[t(i,{for:"password",value:"Password"}),t(l,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e.form.password,"onUpdate:modelValue":s[1]||(s[1]=a=>e.form.password=a),required:"",autocomplete:"current-password"},null,8,["modelValue"])]),r("div",U,[r("label",A,[t(b,{name:"remember",checked:e.form.remember,"onUpdate:checked":s[2]||(s[2]=a=>e.form.remember=a)},null,8,["checked"]),z])]),r("div",D,[e.canResetPassword?(m(),V(h,{key:0,href:e.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:n(()=>[u(" Forgot your password? ")]),_:1},8,["href"])):c("",!0),t(g,{class:L(["ml-4",{"opacity-25":e.form.processing}]),disabled:e.form.processing},{default:n(()=>[u(" Log in ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64)}const se=E(P,[["render",I]]);export{se as default};
