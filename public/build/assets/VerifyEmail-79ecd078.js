import{d as h,f as a,b as e,w as n,F as _,r as o,o as r,g,a as i,n as y,h as m,j as b}from"./app-166e967f.js";import{J as v}from"./AuthenticationCard-7e9bcde2.js";import{J as k}from"./AuthenticationCardLogo-de0e4f8e.js";import{J as j}from"./Button-9d112428.js";import{H as w,L}from"./index-074b336d.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const C=h({components:{Head:w,JetAuthenticationCard:v,JetAuthenticationCardLogo:k,JetButton:j,Link:L},props:{status:String},data(){return{form:this.$inertia.form()}},methods:{submit(){this.form.post(this.route("verification.send"))}},computed:{verificationLinkSent(){return this.status==="verification-link-sent"}}}),J=i("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 text-sm font-medium text-green-600"},B={class:"mt-4 flex items-center justify-between"};function $(t,s,E,H,N,S){const d=o("Head"),c=o("jet-authentication-card-logo"),u=o("jet-button"),l=o("Link"),f=o("jet-authentication-card");return r(),a(_,null,[e(d,{title:"Email Verification"}),e(f,null,{logo:n(()=>[e(c)]),default:n(()=>[J,t.verificationLinkSent?(r(),a("div",V," A new verification link has been sent to the email address you provided during registration. ")):g("",!0),i("form",{onSubmit:s[0]||(s[0]=b((...p)=>t.submit&&t.submit(...p),["prevent"]))},[i("div",B,[e(u,{class:y({"opacity-25":t.form.processing}),disabled:t.form.processing},{default:n(()=>[m(" Resend Verification Email ")]),_:1},8,["class","disabled"]),e(l,{href:t.route("logout"),method:"post",as:"button",class:"text-sm text-gray-600 underline hover:text-gray-900"},{default:n(()=>[m("Log Out")]),_:1},8,["href"])])],32)]),_:1})],64)}const O=x(C,[["render",$]]);export{O as default};
