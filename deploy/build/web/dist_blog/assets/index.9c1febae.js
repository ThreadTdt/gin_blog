import{L as y,r,o as k,H as b,m as w,A as g,q as s,u as c,b as o,f as e,c as d,z as v,h as _,s as $,i as l,F as f}from"./index.51c47497.js";import{d as L}from"./dayjs.min.82740e12.js";import{_ as B}from"./BannerPage.1c7b25ea.js";import"./AppFooter.c5b29d52.js";import"./ULoading.5b6f27d6.js";const Y={class:"grid grid-cols-12 gap-x-4 gap-y-2"},D={class:"animate-zoom-in animate-duration-650 rounded-xl bg-white pb-2 shadow-md transition-300 hover:shadow-2xl"},I={class:"overflow-hidden"},M=["src"],R={class:"space-y-1.5"},j={class:"inline-block px-3 pt-2 hover:color-violet"},q={class:"flex justify-between px-3"},z={class:"flex items-center"},A=e("span",{class:"i-mdi:clock-outline mr-1"},null,-1),C={class:"flex items-center text-#4c4948 transition-300 hover:color-violet"},F=e("span",{class:"i-ic:outline-bookmark mr-1"},null,-1),N=e("div",{class:"my-2 h-0.5 bg-gray-200"},null,-1),V={class:"px-3 space-x-1.5"},E={class:"inline-block cursor-pointer rounded-xl from-green-400 to-blue-500 bg-gradient-to-r px-2 py-1 text-xs text-white transition-500 hover:scale-110 hover:from-pink-500 hover:to-yellow-500"},P={__name:"index",setup(H){const a=y(),u=r(!0),m=r([]),x=r(a.query.name);return k(async()=>{const p=await b.getArticles({category_id:a.params.categoryId,tag_id:a.params.tagId});m.value=p.data,u.value=!1}),(p,S)=>{var h;const n=w("RouterLink");return o(),g(B,{loading:u.value,title:`${(h=c(a).meta)==null?void 0:h.title} - ${x.value}`,label:"article_list"},{default:s(()=>[e("div",Y,[(o(!0),d(f,null,v(m.value,t=>(o(),d("div",{key:t.id,class:"col-span-12 lg:col-span-4 md:col-span-6"},[e("div",D,[e("div",I,[_(n,{to:`/article/${t.id}`},{default:s(()=>[e("img",{src:c($)(t.img),class:"h-[220px] w-full rounded-t-xl transition-600 hover:scale-110"},null,8,M)]),_:2},1032,["to"])]),e("div",null,[e("div",R,[_(n,{to:`/article/${t.id}`},{default:s(()=>[e("p",j,l(t.title),1)]),_:2},1032,["to"]),e("div",q,[e("span",z,[A,e("span",null,l(c(L)(t.created_at).format("YYYY-MM-DD")),1)]),_(n,{to:`/categories/${t.category_id}?name=${t.category.name}`},{default:s(()=>[e("div",C,[F,e("span",null,l(t.category.name),1)])]),_:2},1032,["to"])])]),N,e("div",V,[(o(!0),d(f,null,v(t.tags,i=>(o(),g(n,{key:i.id,to:`/tags/${i.id}?name=${i.name}`},{default:s(()=>[e("span",E,l(i.name),1)]),_:2},1032,["to"]))),128))])])])]))),128))])]),_:1},8,["loading","title"])}}};export{P as default};
