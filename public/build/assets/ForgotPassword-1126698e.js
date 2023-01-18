import{d as b,bw as w,f as i,b as o,w as r,F as g,r as e,o as m,t as h,g as j,a,n as J,h as y,j as v}from"./app-166e967f.js";import{J as V}from"./AuthenticationCard-7e9bcde2.js";import{J as k}from"./AuthenticationCardLogo-de0e4f8e.js";import{J as C}from"./Button-9d112428.js";import{J as B}from"./Input-b731e5bd.js";import{J as F}from"./Label-afad9d04.js";import{J as N}from"./ValidationErrors-7345319b.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";const E=b({components:{Head:w,JetAuthenticationCard:V,JetAuthenticationCardLogo:k,JetButton:C,JetInput:B,JetLabel:F,JetValidationErrors:N},props:{status:String},data(){return{form:this.$inertia.form({email:""})}},methods:{submit(){this.form.post(this.route("password.email"))}}}),H=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),L={key:0,class:"mb-4 text-sm font-medium text-green-600"},P={class:"mt-4 flex items-center justify-end"};function S(t,s,x,A,q,z){const l=e("Head"),d=e("jet-authentication-card-logo"),u=e("jet-validation-errors"),c=e("jet-label"),p=e("jet-input"),f=e("jet-button"),_=e("jet-authentication-card");return m(),i(g,null,[o(l,{title:"Forgot Password"}),o(_,null,{logo:r(()=>[o(d)]),default:r(()=>[H,t.status?(m(),i("div",L,h(t.status),1)):j("",!0),o(u,{class:"mb-4"}),a("form",{onSubmit:s[1]||(s[1]=v((...n)=>t.submit&&t.submit(...n),["prevent"]))},[a("div",null,[o(c,{for:"email",value:"Email"}),o(p,{id:"email",modelValue:t.form.email,"onUpdate:modelValue":s[0]||(s[0]=n=>t.form.email=n),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"])]),a("div",P,[o(f,{class:J({"opacity-25":t.form.processing}),disabled:t.form.processing},{default:r(()=>[y(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64)}const K=$(E,[["render",S]]);export{K as default};
