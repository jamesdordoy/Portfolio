import{d as c,bw as w,f as _,b as o,w as l,F as b,r as a,o as j,a as r,n as h,h as J,j as V}from"./app-72597c56.js";import{J as v}from"./AuthenticationCard-29a20d55.js";import{J as g}from"./AuthenticationCardLogo-47203211.js";import{J as k}from"./Button-4c9c6d2d.js";import{J as C}from"./Input-9aac45ba.js";import{J as y}from"./Label-b1112c56.js";import{J as B}from"./ValidationErrors-7bf78781.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";const $=c({components:{Head:w,JetAuthenticationCard:v,JetAuthenticationCardLogo:g,JetButton:k,JetInput:C,JetLabel:y,JetValidationErrors:B},props:{email:String,token:String},data(){return{form:this.$inertia.form({token:this.token,email:this.email,password:"",password_confirmation:""})}},methods:{submit(){this.form.post(this.route("password.update"),{onFinish:()=>this.form.reset("password","password_confirmation")})}}}),q={class:"mt-4"},E={class:"mt-4"},F={class:"mt-4 flex items-center justify-end"};function H(t,e,N,R,S,U){const m=a("Head"),d=a("jet-authentication-card-logo"),p=a("jet-validation-errors"),n=a("jet-label"),i=a("jet-input"),u=a("jet-button"),f=a("jet-authentication-card");return j(),_(b,null,[o(m,{title:"Reset Password"}),o(f,null,{logo:l(()=>[o(d)]),default:l(()=>[o(p,{class:"mb-4"}),r("form",{onSubmit:e[3]||(e[3]=V((...s)=>t.submit&&t.submit(...s),["prevent"]))},[r("div",null,[o(n,{for:"email",value:"Email"}),o(i,{id:"email",modelValue:t.form.email,"onUpdate:modelValue":e[0]||(e[0]=s=>t.form.email=s),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"])]),r("div",q,[o(n,{for:"password",value:"Password"}),o(i,{id:"password",modelValue:t.form.password,"onUpdate:modelValue":e[1]||(e[1]=s=>t.form.password=s),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),r("div",E,[o(n,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",modelValue:t.form.password_confirmation,"onUpdate:modelValue":e[2]||(e[2]=s=>t.form.password_confirmation=s),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),r("div",F,[o(u,{class:h({"opacity-25":t.form.processing}),disabled:t.form.processing},{default:l(()=>[J(" Reset Password ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64)}const G=P($,[["render",H]]);export{G as default};