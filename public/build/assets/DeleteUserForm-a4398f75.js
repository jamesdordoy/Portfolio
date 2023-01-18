import{d as f,c as _,w as o,r as s,o as y,h as t,a as r,b as n,bo as w,n as h}from"./app-166e967f.js";import{J as g,a as D}from"./DialogModal-3e98c12b.js";import{J as C}from"./DangerButton-cc96dbe2.js";import{J as j}from"./Input-b731e5bd.js";import{J}from"./InputError-a0d922d4.js";import{J as b}from"./SecondaryButton-5917792c.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";const k=f({components:{JetActionSection:g,JetDangerButton:C,JetDialogModal:D,JetInput:j,JetInputError:J,JetSecondaryButton:b},data(){return{confirmingUserDeletion:!1,form:this.$inertia.form({password:""})}},methods:{confirmUserDeletion(){this.confirmingUserDeletion=!0,setTimeout(()=>this.$refs.password.focus(),250)},deleteUser(){this.form.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>this.closeModal(),onError:()=>this.$refs.password.focus(),onFinish:()=>this.form.reset()})},closeModal(){this.confirmingUserDeletion=!1,this.form.reset()}}}),B=r("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),$={class:"mt-5"},A={class:"mt-4"};function V(e,a,v,M,S,K){const l=s("jet-danger-button"),i=s("jet-input"),c=s("jet-input-error"),d=s("jet-secondary-button"),m=s("jet-dialog-modal"),u=s("jet-action-section");return y(),_(u,null,{title:o(()=>[t(" Delete Account ")]),description:o(()=>[t(" Permanently delete your account. ")]),content:o(()=>[B,r("div",$,[n(l,{onClick:e.confirmUserDeletion},{default:o(()=>[t(" Delete Account ")]),_:1},8,["onClick"])]),n(m,{show:e.confirmingUserDeletion,onClose:e.closeModal},{title:o(()=>[t(" Delete Account ")]),content:o(()=>[t(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),r("div",A,[n(i,{type:"password",class:"mt-1 block w-3/4",placeholder:"Password",ref:"password",modelValue:e.form.password,"onUpdate:modelValue":a[0]||(a[0]=p=>e.form.password=p),onKeyup:w(e.deleteUser,["enter"])},null,8,["modelValue","onKeyup"]),n(c,{message:e.form.errors.password,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[n(d,{onClick:e.closeModal},{default:o(()=>[t(" Cancel ")]),_:1},8,["onClick"]),n(l,{class:h(["ml-2",{"opacity-25":e.form.processing}]),onClick:e.deleteUser,disabled:e.form.processing},{default:o(()=>[t(" Delete Account ")]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show","onClose"])]),_:1})}const z=U(k,[["render",V]]);export{z as default};
