import{J as f}from"./ActionMessage.9162fdbe.js";import{J as w}from"./Button.58dbfe03.js";import{J as _}from"./FormSection.ff185d60.js";import{J as g}from"./Input.00e03342.js";import{J as h}from"./InputError.8ed46cea.js";import{J}from"./Label.91734160.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";import{d as j,c as V,w as e,r as t,o as v,a as l,l as o,n as P,m as n}from"./app.8e3291d0.js";const S=j({components:{JetActionMessage:f,JetButton:w,JetFormSection:_,JetInput:g,JetInputError:h,JetLabel:J},data(){return{form:this.$inertia.form({current_password:"",password:"",password_confirmation:""})}},methods:{updatePassword(){this.form.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>this.form.reset(),onError:()=>{this.form.errors.password&&(this.form.reset("password","password_confirmation"),this.$refs.password.focus()),this.form.errors.current_password&&(this.form.reset("current_password"),this.$refs.current_password.focus())}})}}}),y=n(" Update Password "),$=n(" Ensure your account is using a long, random password to stay secure. "),B={class:"col-span-6 sm:col-span-4"},C={class:"col-span-6 sm:col-span-4"},k={class:"col-span-6 sm:col-span-4"},U=n(" Saved. "),N=n(" Save ");function E(s,r,F,I,z,A){const d=t("jet-label"),m=t("jet-input"),p=t("jet-input-error"),i=t("jet-action-message"),c=t("jet-button"),u=t("jet-form-section");return v(),V(u,{onSubmitted:s.updatePassword},{title:e(()=>[y]),description:e(()=>[$]),form:e(()=>[l("div",B,[o(d,{for:"current_password",value:"Current Password"}),o(m,{id:"current_password",type:"password",class:"mt-1 block w-full",modelValue:s.form.current_password,"onUpdate:modelValue":r[0]||(r[0]=a=>s.form.current_password=a),ref:"current_password",autocomplete:"current-password"},null,8,["modelValue"]),o(p,{message:s.form.errors.current_password,class:"mt-2"},null,8,["message"])]),l("div",C,[o(d,{for:"password",value:"New Password"}),o(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s.form.password,"onUpdate:modelValue":r[1]||(r[1]=a=>s.form.password=a),ref:"password",autocomplete:"new-password"},null,8,["modelValue"]),o(p,{message:s.form.errors.password,class:"mt-2"},null,8,["message"])]),l("div",k,[o(d,{for:"password_confirmation",value:"Confirm Password"}),o(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s.form.password_confirmation,"onUpdate:modelValue":r[2]||(r[2]=a=>s.form.password_confirmation=a),autocomplete:"new-password"},null,8,["modelValue"]),o(p,{message:s.form.errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[o(i,{on:s.form.recentlySuccessful,class:"mr-3"},{default:e(()=>[U]),_:1},8,["on"]),o(c,{class:P({"opacity-25":s.form.processing}),disabled:s.form.processing},{default:e(()=>[N]),_:1},8,["class","disabled"])]),_:1},8,["onSubmitted"])}var O=b(S,[["render",E]]);export{O as default};