import{k as g,x as F,o as T,c as q,w as i,m,a as r,b as _,u as e,l as B,y as S,d as k,z as o,N as s,F as I,A as b,B as u}from"./index-7e9df7d9.js";import{_ as D}from"./CommonPage-7491aea4.js";import{_ as R}from"./QueryItem-0f282244.js";import{_ as V}from"./CrudModal-d60ad9bd.js";import{_ as O}from"./CrudTable-121684b7.js";import{u as A}from"./useCRUD-f64dec52.js";import{N as h}from"./Input-5db271d7.js";import{N as K,a as P}from"./FormItem-e99f0659.js";import{N as j}from"./Popconfirm-6b45faf2.js";import"./AppPage-848b5b84.js";import"./Space-f54cd109.js";import"./RadioGroup-757891b8.js";import"./get-slot-1efb97e5.js";import"./Checkbox-ac1591ea.js";import"./Forward-8d8448e7.js";const E=k("i",{class:"i-material-symbols:add"},null,-1),L=k("span",{class:"i-material-symbols:playlist-remove"},null,-1),ne=Object.assign({name:"标签管理"},{__name:"index",setup(M){const n=g(null),d=g({keyword:""});F(()=>{var t;(t=n.value)==null||t.handleSearch()});const{modalVisible:p,modalTitle:w,modalLoading:N,handleAdd:x,handleDelete:y,handleEdit:z,handleSave:C,modalForm:f,modalFormRef:U}=A({name:"标签",initForm:{},doCreate:m.saveOrUpdateTag,doDelete:m.deleteTag,doUpdate:m.saveOrUpdateTag,refresh:()=>{var t;return(t=n.value)==null?void 0:t.handleSearch()}}),$=[{type:"selection",width:15,fixed:"left"},{title:"标签名",key:"name",width:100,align:"center",render(t){return o(I,{type:"info"},{default:()=>t.name})}},{title:"文章量",key:"article_count",width:30,align:"center"},{title:"创建日期",key:"created_at",width:80,align:"center",render(t){return o(s,{size:"small",type:"text",ghost:!0},{default:()=>b(t.created_at),icon:u("mdi:clock-time-three-outline",{size:17})})}},{title:"更新日期",key:"updated_at",width:80,align:"center",render(t){return o(s,{size:"small",type:"text",ghost:!0},{default:()=>b(t.updated_at),icon:u("mdi:update",{size:18})})}},{title:"操作",key:"actions",width:100,align:"center",fixed:"right",render(t){return[o(s,{size:"small",type:"primary",onClick:()=>z(t)},{default:()=>"编辑",icon:u("material-symbols:edit-outline",{size:16})}),o(j,{onPositiveClick:()=>y([t.id],!1)},{trigger:()=>o(s,{size:"small",type:"error",style:"margin-left: 15px;"},{default:()=>"删除",icon:u("material-symbols:delete-outline",{size:16})}),default:()=>o("div",{},"确定删除该标签吗?")})]}}];return(t,a)=>(T(),q(D,{title:"标签管理"},{action:i(()=>{var l;return[r(e(s),{type:"primary",onClick:e(x)},{icon:i(()=>[E]),default:i(()=>[_(" 新建标签 ")]),_:1},8,["onClick"]),r(e(s),{type:"error",disabled:!((l=n.value)!=null&&l.selections.length),onClick:a[0]||(a[0]=c=>{var v;return e(y)((v=n.value)==null?void 0:v.selections)})},{icon:i(()=>[L]),default:i(()=>[_(" 批量删除 ")]),_:1},8,["disabled"])]}),default:i(()=>[r(O,{ref_key:"$table",ref:n,"query-items":d.value,"onUpdate:queryItems":a[3]||(a[3]=l=>d.value=l),columns:$,"get-data":e(m).getTags},{queryBar:i(()=>[r(R,{label:"标签名","label-width":50},{default:i(()=>[r(e(h),{value:d.value.keyword,"onUpdate:value":a[1]||(a[1]=l=>d.value.keyword=l),clearable:"",type:"text",placeholder:"请输入标签名",onKeydown:a[2]||(a[2]=B(l=>{var c;return(c=n.value)==null?void 0:c.handleSearch()},["enter"]))},null,8,["value"])]),_:1})]),_:1},8,["query-items","get-data"]),r(V,{visible:e(p),"onUpdate:visible":a[5]||(a[5]=l=>S(p)?p.value=l:null),title:e(w),loading:e(N),onSave:e(C)},{default:i(()=>[r(e(K),{ref_key:"modalFormRef",ref:U,"label-placement":"left","label-align":"left","label-width":80,model:e(f)},{default:i(()=>[r(e(P),{label:"文章标签",path:"name",rule:{required:!0,message:"请输入标签名称",trigger:["input","blur"]}},{default:i(()=>[r(e(h),{value:e(f).name,"onUpdate:value":a[4]||(a[4]=l=>e(f).name=l),placeholder:"请输入标签名称",clearable:""},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title","loading","onSave"])]),_:1}))}});export{ne as default};
