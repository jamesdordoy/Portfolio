import{a as F,J as P}from"./DialogModal.b88c784f.js";import{J as y}from"./Button.3ea206ef.js";import{d as b,r as a,o as t,f as r,a as n,e as T,b as s,w as e,i,t as f,J as S,n as g,c as _,g as u,F as B,h as R}from"./app.f31e65ed.js";import{J as A}from"./Input.ebb4fc4c.js";import{J as E}from"./InputError.4f753ba2.js";import{J as C}from"./SecondaryButton.0301f7fe.js";import{_ as v}from"./_plugin-vue_export-helper.cdc0426e.js";import{J as M}from"./DangerButton.73dd4eae.js";const V=b({emits:["confirmed"],props:{title:{default:"Confirm Password"},content:{default:"For your security, please confirm your password to continue."},button:{default:"Confirm"}},components:{JetButton:y,JetDialogModal:F,JetInput:A,JetInputError:E,JetSecondaryButton:C},data(){return{confirmingPassword:!1,form:{password:"",error:""}}},methods:{startConfirmingPassword(){axios.get(route("password.confirmation")).then(o=>{o.data.confirmed?this.$emit("confirmed"):(this.confirmingPassword=!0,setTimeout(()=>this.$refs.password.focus(),250))})},confirmPassword(){this.form.processing=!0,axios.post(route("password.confirm"),{password:this.form.password}).then(()=>{this.form.processing=!1,this.closeModal(),this.$nextTick(()=>this.$emit("confirmed"))}).catch(o=>{this.form.processing=!1,this.form.error=o.response.data.errors.password[0],this.$refs.password.focus()})},closeModal(){this.confirmingPassword=!1,this.form.password="",this.form.error=""}}}),q={class:"mt-4"},D=i(" Cancel ");function N(o,l,k,$,j,J){const p=a("jet-input"),d=a("jet-input-error"),m=a("jet-secondary-button"),h=a("jet-button"),w=a("jet-dialog-modal");return t(),r("span",null,[n("span",{onClick:l[0]||(l[0]=(...c)=>o.startConfirmingPassword&&o.startConfirmingPassword(...c))},[T(o.$slots,"default")]),s(w,{show:o.confirmingPassword,onClose:o.closeModal},{title:e(()=>[i(f(o.title),1)]),content:e(()=>[i(f(o.content)+" ",1),n("div",q,[s(p,{type:"password",class:"mt-1 block w-3/4",placeholder:"Password",ref:"password",modelValue:o.form.password,"onUpdate:modelValue":l[1]||(l[1]=c=>o.form.password=c),onKeyup:S(o.confirmPassword,["enter"])},null,8,["modelValue","onKeyup"]),s(d,{message:o.form.error,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[s(m,{onClick:o.closeModal},{default:e(()=>[D]),_:1},8,["onClick"]),s(h,{class:g(["ml-2",{"opacity-25":o.form.processing}]),onClick:o.confirmPassword,disabled:o.form.processing},{default:e(()=>[i(f(o.button),1)]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show","onClose"])])}const K=v(V,[["render",N]]),L=b({components:{JetActionSection:P,JetButton:y,JetConfirmsPassword:K,JetDangerButton:M,JetSecondaryButton:C},data(){return{enabling:!1,disabling:!1,qrCode:null,recoveryCodes:[]}},methods:{enableTwoFactorAuthentication(){this.enabling=!0,this.$inertia.post("/user/two-factor-authentication",{},{preserveScroll:!0,onSuccess:()=>Promise.all([this.showQrCode(),this.showRecoveryCodes()]),onFinish:()=>this.enabling=!1})},showQrCode(){return axios.get("/user/two-factor-qr-code").then(o=>{this.qrCode=o.data.svg})},showRecoveryCodes(){return axios.get("/user/two-factor-recovery-codes").then(o=>{this.recoveryCodes=o.data})},regenerateRecoveryCodes(){axios.post("/user/two-factor-recovery-codes").then(o=>{this.showRecoveryCodes()})},disableTwoFactorAuthentication(){this.disabling=!0,this.$inertia.delete("/user/two-factor-authentication",{preserveScroll:!0,onSuccess:()=>this.disabling=!1})}},computed:{twoFactorEnabled(){return!this.enabling&&this.$page.props.user.two_factor_enabled}}}),Q=i(" Two Factor Authentication "),Y=i(" Add additional security to your account using two factor authentication. "),H={key:0,class:"text-lg font-medium text-gray-900"},I={key:1,class:"text-lg font-medium text-gray-900"},z=n("div",{class:"mt-3 max-w-xl text-sm text-gray-600"},[n("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),G={key:2},U={key:0},W=n("div",{class:"mt-4 max-w-xl text-sm text-gray-600"},[n("p",{class:"font-semibold"}," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application. ")],-1),O=["innerHTML"],X={key:1},Z=n("div",{class:"mt-4 max-w-xl text-sm text-gray-600"},[n("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),x={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"},oo={class:"mt-5"},eo={key:0},to=i(" Enable "),so={key:1},no=i(" Regenerate Recovery Codes "),ro=i(" Show Recovery Codes "),ao=i(" Disable ");function io(o,l,k,$,j,J){const p=a("jet-button"),d=a("jet-confirms-password"),m=a("jet-secondary-button"),h=a("jet-danger-button"),w=a("jet-action-section");return t(),_(w,null,{title:e(()=>[Q]),description:e(()=>[Y]),content:e(()=>[o.twoFactorEnabled?(t(),r("h3",H," You have enabled two factor authentication. ")):(t(),r("h3",I," You have not enabled two factor authentication. ")),z,o.twoFactorEnabled?(t(),r("div",G,[o.qrCode?(t(),r("div",U,[W,n("div",{class:"mt-4",innerHTML:o.qrCode},null,8,O)])):u("",!0),o.recoveryCodes.length>0?(t(),r("div",X,[Z,n("div",x,[(t(!0),r(B,null,R(o.recoveryCodes,c=>(t(),r("div",{key:c},f(c),1))),128))])])):u("",!0)])):u("",!0),n("div",oo,[o.twoFactorEnabled?(t(),r("div",so,[s(d,{onConfirmed:o.regenerateRecoveryCodes},{default:e(()=>[o.recoveryCodes.length>0?(t(),_(m,{key:0,class:"mr-3"},{default:e(()=>[no]),_:1})):u("",!0)]),_:1},8,["onConfirmed"]),s(d,{onConfirmed:o.showRecoveryCodes},{default:e(()=>[o.recoveryCodes.length===0?(t(),_(m,{key:0,class:"mr-3"},{default:e(()=>[ro]),_:1})):u("",!0)]),_:1},8,["onConfirmed"]),s(d,{onConfirmed:o.disableTwoFactorAuthentication},{default:e(()=>[s(h,{class:g({"opacity-25":o.disabling}),disabled:o.disabling},{default:e(()=>[ao]),_:1},8,["class","disabled"])]),_:1},8,["onConfirmed"])])):(t(),r("div",eo,[s(d,{onConfirmed:o.enableTwoFactorAuthentication},{default:e(()=>[s(p,{type:"button",class:g({"opacity-25":o.enabling}),disabled:o.enabling},{default:e(()=>[to]),_:1},8,["class","disabled"])]),_:1},8,["onConfirmed"])]))])]),_:1})}const _o=v(L,[["render",io]]);export{_o as default};
