import{J as j}from"./ActionMessage-e1111825.js";import{J as v}from"./Button-fc5b6e87.js";import{J as w}from"./FormSection-d973d867.js";import{J as S}from"./Input-a4fe5ebf.js";import{J as B}from"./InputError-26b5d6e1.js";import{J as k}from"./Label-048be1ea.js";import{_ as c}from"./_plugin-vue_export-helper-c27b6911.js";import{d,o as u,f as y,c as C,w as r,r as s,h as n,a as l,b as o,n as E}from"./app-d6652298.js";const N=d({props:["modelValue"],emits:["update:modelValue"],methods:{focus(){this.$refs.input.focus()}}}),T=["value"];function I(e,t,p,f,g,_){return u(),y("textarea",{ref:"input",class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:t[0]||(t[0]=a=>e.$emit("update:modelValue",a.target.value))},`
    `,40,T)}const L=c(N,[["render",I]]),P=d({components:{JetActionMessage:j,JetButton:v,JetFormSection:w,JetInput:S,JetInputError:B,JetLabel:k,JetTextarea:L},data(){return{form:this.$inertia.form({name:"",description:""})}},methods:{updatePassword(){this.form.post(route("languages.store"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>this.form.reset(),onError:()=>{this.form.errors.name&&this.$refs.name.focus(),this.form.errors.description&&this.$refs.description.focus()}})}}}),A={class:"col-span-6 sm:col-span-4"},F={class:"col-span-6 sm:col-span-4"};function U(e,t,p,f,g,_){const a=s("jet-label"),J=s("jet-input"),i=s("jet-input-error"),$=s("JetTextarea"),b=s("jet-action-message"),h=s("jet-button"),V=s("jet-form-section");return u(),C(V,{onSubmitted:e.updatePassword},{title:r(()=>[n(" Add a Language ")]),description:r(()=>[n(" Enter a name and description for the new language ")]),form:r(()=>[l("div",A,[o(a,{for:"language_name",value:"Name"}),o(J,{id:"language_name",type:"text",class:"mt-1 block w-full",modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=m=>e.form.name=m),ref:"name"},null,8,["modelValue"]),o(i,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),l("div",F,[o(a,{for:"language_description",value:"Description"}),o($,{id:"language_description",class:"mt-1 block w-full",modelValue:e.form.description,"onUpdate:modelValue":t[1]||(t[1]=m=>e.form.description=m),ref:"description"},null,8,["modelValue"]),o(i,{message:e.form.errors.description,class:"mt-2"},null,8,["message"])])]),actions:r(()=>[o(b,{on:e.form.recentlySuccessful,class:"mr-3"},{default:r(()=>[n(" Saved. ")]),_:1},8,["on"]),o(h,{class:E({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:r(()=>[n(" Save ")]),_:1},8,["class","disabled"])]),_:1},8,["onSubmitted"])}const Q=c(P,[["render",U]]);export{Q as default};
