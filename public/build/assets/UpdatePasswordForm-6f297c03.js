import{J as f}from"./ActionMessage-f68a8e17.js";import{J as w}from"./Button-9d112428.js";import{J as _}from"./FormSection-ba65181c.js";import{J as g}from"./Input-b731e5bd.js";import{J as b}from"./InputError-a0d922d4.js";import{J}from"./Label-afad9d04.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{d as V,c as h,w as e,r as t,o as v,h as n,a as l,b as o,n as P}from"./app-166e967f.js";const S=V({components:{JetActionMessage:f,JetButton:w,JetFormSection:_,JetInput:g,JetInputError:b,JetLabel:J},data(){return{form:this.$inertia.form({current_password:"",password:"",password_confirmation:""})}},methods:{updatePassword(){this.form.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>this.form.reset(),onError:()=>{this.form.errors.password&&(this.form.reset("password","password_confirmation"),this.$refs.password.focus()),this.form.errors.current_password&&(this.form.reset("current_password"),this.$refs.current_password.focus())}})}}}),y={class:"col-span-6 sm:col-span-4"},$={class:"col-span-6 sm:col-span-4"},B={class:"col-span-6 sm:col-span-4"};function C(s,r,k,U,N,E){const m=t("jet-label"),d=t("jet-input"),p=t("jet-input-error"),i=t("jet-action-message"),u=t("jet-button"),c=t("jet-form-section");return v(),h(c,{onSubmitted:s.updatePassword},{title:e(()=>[n(" Update Password ")]),description:e(()=>[n(" Ensure your account is using a long, random password to stay secure. ")]),form:e(()=>[l("div",y,[o(m,{for:"current_password",value:"Current Password"}),o(d,{id:"current_password",type:"password",class:"mt-1 block w-full",modelValue:s.form.current_password,"onUpdate:modelValue":r[0]||(r[0]=a=>s.form.current_password=a),ref:"current_password",autocomplete:"current-password"},null,8,["modelValue"]),o(p,{message:s.form.errors.current_password,class:"mt-2"},null,8,["message"])]),l("div",$,[o(m,{for:"password",value:"New Password"}),o(d,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s.form.password,"onUpdate:modelValue":r[1]||(r[1]=a=>s.form.password=a),ref:"password",autocomplete:"new-password"},null,8,["modelValue"]),o(p,{message:s.form.errors.password,class:"mt-2"},null,8,["message"])]),l("div",B,[o(m,{for:"password_confirmation",value:"Confirm Password"}),o(d,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s.form.password_confirmation,"onUpdate:modelValue":r[2]||(r[2]=a=>s.form.password_confirmation=a),autocomplete:"new-password"},null,8,["modelValue"]),o(p,{message:s.form.errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[o(i,{on:s.form.recentlySuccessful,class:"mr-3"},{default:e(()=>[n(" Saved. ")]),_:1},8,["on"]),o(u,{class:P({"opacity-25":s.form.processing}),disabled:s.form.processing},{default:e(()=>[n(" Save ")]),_:1},8,["class","disabled"])]),_:1},8,["onSubmitted"])}const D=j(S,[["render",C]]);export{D as default};