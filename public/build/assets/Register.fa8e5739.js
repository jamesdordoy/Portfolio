import{d as b,r,o as d,f as u,b as o,w as i,F as v,H as y,L as k,a,g as j,n as V,j as J,i as m}from"./app.f31e65ed.js";import{J as C}from"./AuthenticationCard.e2d5db11.js";import{J as L}from"./AuthenticationCardLogo.9620cc89.js";import{J as P}from"./Button.3ea206ef.js";import{J as $}from"./Input.ebb4fc4c.js";import{J as B}from"./Checkbox.d1269ff4.js";import{J as N}from"./Label.8cd7d262.js";import{J as U}from"./ValidationErrors.bddfb3f2.js";import{_ as q}from"./_plugin-vue_export-helper.cdc0426e.js";const A=b({components:{Head:y,JetAuthenticationCard:C,JetAuthenticationCardLogo:L,JetButton:P,JetInput:$,JetCheckbox:B,JetLabel:N,JetValidationErrors:U,Link:k},data(){return{form:this.$inertia.form({name:"",email:"",password:"",password_confirmation:"",terms:!1})}},methods:{submit(){this.form.post(this.route("register"),{onFinish:()=>this.form.reset("password","password_confirmation")})}}}),F={class:"mt-4"},H={class:"mt-4"},E={class:"mt-4"},R={key:0,class:"mt-4"},T={class:"flex items-center"},x={class:"ml-2"},I=m(" I agree to the "),S=["href"],z=m(" and "),M=["href"],D={class:"flex items-center justify-end mt-4"},G=m(" Already registered? "),K=m(" Register ");function O(e,t,Q,W,X,Y){const c=r("Head"),p=r("jet-authentication-card-logo"),f=r("jet-validation-errors"),n=r("jet-label"),l=r("jet-input"),_=r("jet-checkbox"),h=r("Link"),w=r("jet-button"),g=r("jet-authentication-card");return d(),u(v,null,[o(c,{title:"Register"}),o(g,null,{logo:i(()=>[o(p)]),default:i(()=>[o(f,{class:"mb-4"}),a("form",{onSubmit:t[5]||(t[5]=J((...s)=>e.submit&&e.submit(...s),["prevent"]))},[a("div",null,[o(n,{for:"name",value:"Name"}),o(l,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=s=>e.form.name=s),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),a("div",F,[o(n,{for:"email",value:"Email"}),o(l,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.form.email,"onUpdate:modelValue":t[1]||(t[1]=s=>e.form.email=s),required:""},null,8,["modelValue"])]),a("div",H,[o(n,{for:"password",value:"Password"}),o(l,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e.form.password,"onUpdate:modelValue":t[2]||(t[2]=s=>e.form.password=s),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),a("div",E,[o(n,{for:"password_confirmation",value:"Confirm Password"}),o(l,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e.form.password_confirmation,"onUpdate:modelValue":t[3]||(t[3]=s=>e.form.password_confirmation=s),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),e.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(d(),u("div",R,[o(n,{for:"terms"},{default:i(()=>[a("div",T,[o(_,{name:"terms",id:"terms",checked:e.form.terms,"onUpdate:checked":t[4]||(t[4]=s=>e.form.terms=s)},null,8,["checked"]),a("div",x,[I,a("a",{target:"_blank",href:e.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Terms of Service",8,S),z,a("a",{target:"_blank",href:e.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Privacy Policy",8,M)])])]),_:1})])):j("",!0),a("div",D,[o(h,{href:e.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:i(()=>[G]),_:1},8,["href"]),o(w,{class:V(["ml-4",{"opacity-25":e.form.processing}]),disabled:e.form.processing},{default:i(()=>[K]),_:1},8,["class","disabled"])])],32)]),_:1})],64)}const le=q(A,[["render",O]]);export{le as default};
