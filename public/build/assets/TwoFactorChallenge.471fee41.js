import{d as g,H as b,b as n,l as o,w as l,F as c,r as s,o as a,a as d,f,n as j,m as i}from"./app.8e3291d0.js";import{J}from"./AuthenticationCard.188dc95e.js";import{J as k}from"./AuthenticationCardLogo.9ba0af40.js";import{J as C}from"./Button.58dbfe03.js";import{J as V}from"./Input.00e03342.js";import{J as w}from"./Label.91734160.js";import{J as $}from"./ValidationErrors.276cf014.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";const H=g({components:{Head:b,JetAuthenticationCard:J,JetAuthenticationCardLogo:k,JetButton:C,JetInput:V,JetLabel:w,JetValidationErrors:$},data(){return{recovery:!1,form:this.$inertia.form({code:"",recovery_code:""})}},methods:{toggleRecovery(){this.recovery^=!0,this.$nextTick(()=>{this.recovery?(this.$refs.recovery_code.focus(),this.form.code=""):(this.$refs.code.focus(),this.form.recovery_code="")})},submit(){this.form.post(this.route("two-factor.login"))}}}),R={class:"mb-4 text-sm text-gray-600"},T=i(" Please confirm access to your account by entering the authentication code provided by your authenticator application. "),U=i(" Please confirm access to your account by entering one of your emergency recovery codes. "),F={key:0},L={key:1},N={class:"flex items-center justify-end mt-4"},A=i(" Use a recovery code "),E=i(" Use an authentication code "),P=i(" Log in ");function x(e,t,z,I,M,S){const p=s("Head"),y=s("jet-authentication-card-logo"),_=s("jet-validation-errors"),m=s("jet-label"),u=s("jet-input"),v=s("jet-button"),h=s("jet-authentication-card");return a(),n(c,null,[o(p,{title:"Two-factor Confirmation"}),o(h,null,{logo:l(()=>[o(y)]),default:l(()=>[d("div",R,[e.recovery?(a(),n(c,{key:1},[U],64)):(a(),n(c,{key:0},[T],64))]),o(_,{class:"mb-4"}),d("form",{onSubmit:t[3]||(t[3]=f((...r)=>e.submit&&e.submit(...r),["prevent"]))},[e.recovery?(a(),n("div",L,[o(m,{for:"recovery_code",value:"Recovery Code"}),o(u,{ref:"recovery_code",id:"recovery_code",type:"text",class:"mt-1 block w-full",modelValue:e.form.recovery_code,"onUpdate:modelValue":t[1]||(t[1]=r=>e.form.recovery_code=r),autocomplete:"one-time-code"},null,8,["modelValue"])])):(a(),n("div",F,[o(m,{for:"code",value:"Code"}),o(u,{ref:"code",id:"code",type:"text",inputmode:"numeric",class:"mt-1 block w-full",modelValue:e.form.code,"onUpdate:modelValue":t[0]||(t[0]=r=>e.form.code=r),autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"])])),d("div",N,[d("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:t[2]||(t[2]=f((...r)=>e.toggleRecovery&&e.toggleRecovery(...r),["prevent"]))},[e.recovery?(a(),n(c,{key:1},[E],64)):(a(),n(c,{key:0},[A],64))]),o(v,{class:j(["ml-4",{"opacity-25":e.form.processing}]),disabled:e.form.processing},{default:l(()=>[P]),_:1},8,["class","disabled"])])],32)]),_:1})],64)}var Y=B(H,[["render",x]]);export{Y as default};