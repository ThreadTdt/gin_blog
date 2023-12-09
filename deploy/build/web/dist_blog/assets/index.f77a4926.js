import{Z as b,r as v,l as w,s as x,b as n,c as l,f as e,I as y,P as k,E as $,o as U,A as I,q as S,h as B,z,i as C,e as D,N as F,F as N,H as V}from"./index.51c47497.js";import{_ as O}from"./BannerPage.1c7b25ea.js";import"./AppFooter.c5b29d52.js";import"./ULoading.5b6f27d6.js";const R={class:"flex items-center justify-center bg-gray-100 font-sans"},T={for:"dropzone-file",class:"mx-auto max-w-[300px] w-full cursor-pointer items-center border-1 border-blue-400 rounded-xl border-dashed bg-white p-2 text-center"},j={key:0,class:"group relative"},q=["src"],A=e("div",{class:"absolute bottom-0 left-0 right-0 top-0 f-c-c cursor-pointer"},[e("button",{class:"i-mdi:upload pointer-events-none inline-block text-[50px] text-white opacity-35 duration-200 group-hover:opacity-80"})],-1),E={key:1,class:"f-c-c lg:h-[160px] lg:w-[160px]"},M=e("div",{class:"flex flex-col items-center"},[e("span",{class:"i-mdi:upload text-[58px] text-blue-500"}),e("span",{class:"text-blue-400"}," \u70B9\u51FB\u4E0A\u4F20\u6587\u4EF6")],-1),P=[M],H={__name:"UploadOne",props:{preview:{type:String,default:""}},emits:["update:preview"],setup(m,{emit:t}){const i=m,a=t,c=b(),o=v(i.preview),r=w(()=>x(o.value)),s=v(null);async function d(){var f,h;const _=s.value.files[0],p=new FormData;p.append("file",_);try{const u=await(await fetch("/api/front/upload",{method:"POST",headers:{Authorization:`Bearer ${c}`},body:p})).json();if(u.code!==0){(f=window.$message)==null||f.error(u.message);return}o.value=u.data,a("update:preview",o)}catch(g){console.error(g),(h=window.$message)==null||h.error("\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25")}}return(_,p)=>(n(),l("main",R,[e("label",T,[o.value?(n(),l("div",j,[e("img",{class:"lg:h-[160px] lg:w-[160px]",src:r.value,alt:"user avatar"},null,8,q),A])):(n(),l("div",E,P)),e("input",{id:"dropzone-file",ref_key:"fileRef",ref:s,type:"file",class:"hidden",onChange:d},null,544)])]))}},J=e("p",{class:"mb-6 text-xl font-bold"}," \u57FA\u672C\u4FE1\u606F ",-1),L={class:"grid grid-cols-12 gap-4"},Z={class:"col-span-4 f-c-c"},G={class:"col-span-8 lg:col-span-7"},K={class:"my-6 space-y-3"},Q={class:"mb-2"},W=["onUpdate:modelValue","placeholder"],X=e("div",{class:"col-span-0 lg:col-span-1"},null,-1),oe={__name:"index",setup(m){const t=y(),i=k(),a=$({avatar:t.avatar,nickname:t.nickname,intro:t.intro,website:t.website,email:t.email});U(()=>{t.userId||i.push("/")});async function c(){var o;try{await V.updateUser(a),(o=window.$message)==null||o.success("\u4FEE\u6539\u6210\u529F!"),t.getUserInfo()}catch(r){console.error(r)}}return(o,r)=>(n(),I(O,{label:"user",title:"\u4E2A\u4EBA\u4E2D\u5FC3",card:""},{default:S(()=>[J,e("div",L,[e("div",Z,[B(H,{preview:a.avatar,"onUpdate:preview":r[0]||(r[0]=s=>a.avatar=s)},null,8,["preview"])]),e("div",G,[e("div",K,[(n(),l(N,null,z([{label:"\u6635\u79F0",key:"nickname"},{label:"\u4E2A\u4EBA\u7F51\u7AD9",key:"website"},{label:"\u7B80\u4ECB",key:"intro"},{label:"\u90AE\u7BB1",key:"email"}],s=>e("div",{key:s.label},[e("div",Q,C(s.label),1),D(e("input",{"onUpdate:modelValue":d=>a[s.key]=d,required:"",placeholder:`\u8BF7\u8F93\u5165${s.label}`,class:"block w-full border-0 rounded-md p-2 text-gray-900 shadow-sm outline-none ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-emerald"},null,8,W),[[F,a[s.key]]])])),64))]),e("button",{class:"the-button mt-2",onClick:c}," \u4FEE\u6539 ")]),X])]),_:1}))}};export{oe as default};
