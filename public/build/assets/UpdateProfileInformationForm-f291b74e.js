import{d as j,c as f,w as s,r,o as p,h as n,f as y,a,b as o,p as h,v,as as J,j as P,g as _,n as k}from"./app-166e967f.js";import{J as S}from"./Button-9d112428.js";import{J as $}from"./FormSection-ba65181c.js";import{J as C}from"./Input-b731e5bd.js";import{J as I}from"./InputError-a0d922d4.js";import{J as V}from"./Label-afad9d04.js";import{J as B}from"./ActionMessage-f68a8e17.js";import{J as N}from"./SecondaryButton-5917792c.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const U=j({components:{JetActionMessage:B,JetButton:S,JetFormSection:$,JetInput:C,JetInputError:I,JetLabel:V,JetSecondaryButton:N},props:["user"],data(){return{form:this.$inertia.form({_method:"PUT",name:this.user.name,email:this.user.email,photo:null}),photoPreview:null}},methods:{updateProfileInformation(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>this.clearPhotoFileInput()})},selectNewPhoto(){this.$refs.photo.click()},updatePhotoPreview(){const e=this.$refs.photo.files[0];if(!e)return;const t=new FileReader;t.onload=u=>{this.photoPreview=u.target.result},t.readAsDataURL(e)},deletePhoto(){this.$inertia.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{this.photoPreview=null,this.clearPhotoFileInput()}})},clearPhotoFileInput(){var e;(e=this.$refs.photo)!=null&&e.value&&(this.$refs.photo.value=null)}}}),A={key:0,class:"col-span-6 sm:col-span-4"},E={class:"mt-2"},R=["src","alt"],z={class:"mt-2"},D={class:"col-span-6 sm:col-span-4"},L={class:"col-span-6 sm:col-span-4"};function M(e,t,u,T,q,G){const i=r("jet-label"),c=r("jet-secondary-button"),m=r("jet-input-error"),d=r("jet-input"),g=r("jet-action-message"),b=r("jet-button"),w=r("jet-form-section");return p(),f(w,{onSubmitted:e.updateProfileInformation},{title:s(()=>[n(" Profile Information ")]),description:s(()=>[n(" Update your account's profile information and email address. ")]),form:s(()=>[e.$page.props.jetstream.managesProfilePhotos?(p(),y("div",A,[a("input",{type:"file",class:"hidden",ref:"photo",onChange:t[0]||(t[0]=(...l)=>e.updatePhotoPreview&&e.updatePhotoPreview(...l))},null,544),o(i,{for:"photo",value:"Photo"}),h(a("div",E,[a("img",{src:e.user.profile_photo_url,alt:e.user.name,class:"h-20 w-20 rounded-full object-cover"},null,8,R)],512),[[v,!e.photoPreview]]),h(a("div",z,[a("span",{class:"block h-20 w-20 rounded-full bg-cover bg-center bg-no-repeat",style:J("background-image: url('"+e.photoPreview+"');")},null,4)],512),[[v,e.photoPreview]]),o(c,{class:"mt-2 mr-2",type:"button",onClick:P(e.selectNewPhoto,["prevent"])},{default:s(()=>[n(" Select A New Photo ")]),_:1},8,["onClick"]),e.user.profile_photo_path?(p(),f(c,{key:0,type:"button",class:"mt-2",onClick:P(e.deletePhoto,["prevent"])},{default:s(()=>[n(" Remove Photo ")]),_:1},8,["onClick"])):_("",!0),o(m,{message:e.form.errors.photo,class:"mt-2"},null,8,["message"])])):_("",!0),a("div",D,[o(i,{for:"name",value:"Name"}),o(d,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e.form.name,"onUpdate:modelValue":t[1]||(t[1]=l=>e.form.name=l),autocomplete:"name"},null,8,["modelValue"]),o(m,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),a("div",L,[o(i,{for:"email",value:"Email"}),o(d,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.form.email,"onUpdate:modelValue":t[2]||(t[2]=l=>e.form.email=l)},null,8,["modelValue"]),o(m,{message:e.form.errors.email,class:"mt-2"},null,8,["message"])])]),actions:s(()=>[o(g,{on:e.form.recentlySuccessful,class:"mr-3"},{default:s(()=>[n(" Saved. ")]),_:1},8,["on"]),o(b,{class:k({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:s(()=>[n(" Save ")]),_:1},8,["class","disabled"])]),_:1},8,["onSubmitted"])}const ee=F(U,[["render",M]]);export{ee as default};
