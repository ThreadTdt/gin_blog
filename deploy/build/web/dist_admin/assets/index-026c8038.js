import{M as ce,z as h,ag as pn,ah as pe,ai as nt,aj as tt,X as lt,k as O,ak as Xe,T as $,al as at,a4 as U,x as wn,am as it,an as gn,ao as Nn,ap as ot,L as E,a3 as ee,aq as I,ar as vn,as as me,at as xe,au as rt,O as dt,a5 as st,Q as Rn,av as ct,aw as De,R as F,S as $e,a0 as Ue,W as Ye,ax as Le,ay as yn,az as ut,Y as j,aA as ft,aB as Qe,U as ht,aC as bn,a9 as gt,aD as vt,m as oe,o as Je,c as Ze,w as q,a as G,b as kn,u as L,l as yt,y as bt,d as Sn,A as kt,N as Te,F as mt,B as en}from"./index-7e9df7d9.js";import{_ as xt}from"./CommonPage-7491aea4.js";import{_ as pt}from"./QueryItem-0f282244.js";import{_ as wt}from"./CrudModal-d60ad9bd.js";import{_ as Nt}from"./CrudTable-121684b7.js";import{u as Rt}from"./useCRUD-f64dec52.js";import{N as St}from"./Checkbox-ac1591ea.js";import{V as Ct}from"./RadioGroup-757891b8.js";import{c as Kt}from"./Space-f54cd109.js";import{N as Dt}from"./Switch-9d808840.js";import{N as nn}from"./Input-5db271d7.js";import{N as Lt,a as ze}from"./FormItem-e99f0659.js";import{N as Tt}from"./Popconfirm-6b45faf2.js";import"./AppPage-848b5b84.js";import"./Forward-8d8448e7.js";import"./get-slot-1efb97e5.js";function Cn(e){return typeof e=="string"?`s-${e}`:`n-${e}`}const At=ce({name:"Switcher",render(){return h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},h("path",{d:"M12 8l10 8l-10 8z"}))}}),Kn=pn("n-tree-select"),Ae=pn("n-tree"),Ft=ce({name:"NTreeSwitcher",props:{clsPrefix:{type:String,required:!0},indent:{type:Number,required:!0},expanded:Boolean,selected:Boolean,hide:Boolean,loading:Boolean,onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{renderSwitcherIconRef:l}=pe(Ae,null);return()=>{const{clsPrefix:d,expanded:u,hide:s,indent:i,onClick:m}=e;return h("span",{"data-switcher":!0,class:[`${d}-tree-node-switcher`,u&&`${d}-tree-node-switcher--expanded`,s&&`${d}-tree-node-switcher--hide`],style:{width:`${i}px`},onClick:m},h("div",{class:`${d}-tree-node-switcher__icon`},h(nt,null,{default:()=>{if(e.loading)return h(tt,{clsPrefix:d,key:"loading",radius:85,strokeWidth:20});const{value:x}=l;return x?x({expanded:e.expanded,selected:e.selected,option:e.tmNode.rawNode}):h(lt,{clsPrefix:d,key:"switcher"},{default:()=>h(At,null)})}})))}}}),Pt=ce({name:"NTreeNodeCheckbox",props:{clsPrefix:{type:String,required:!0},indent:{type:Number,required:!0},right:Boolean,focusable:Boolean,disabled:Boolean,checked:Boolean,indeterminate:Boolean,onCheck:Function},setup(e){const l=pe(Ae);function d(s){const{onCheck:i}=e;i&&i(s)}function u(s){d(s)}return{handleUpdateValue:u,mergedTheme:l.mergedThemeRef}},render(){const{clsPrefix:e,mergedTheme:l,checked:d,indeterminate:u,disabled:s,focusable:i,indent:m,handleUpdateValue:x}=this;return h("span",{class:[`${e}-tree-node-checkbox`,this.right&&`${e}-tree-node-checkbox--right`],style:{width:`${m}px`},"data-checkbox":!0},h(St,{focusable:i,disabled:s,theme:l.peers.Checkbox,themeOverrides:l.peerOverrides.Checkbox,checked:d,indeterminate:u,onUpdateChecked:x}))}}),Ot=ce({name:"TreeNodeContent",props:{clsPrefix:{type:String,required:!0},disabled:Boolean,checked:Boolean,selected:Boolean,onClick:Function,onDragstart:Function,tmNode:{type:Object,required:!0},nodeProps:Object},setup(e){const{renderLabelRef:l,renderPrefixRef:d,renderSuffixRef:u,labelFieldRef:s}=pe(Ae),i=O(null);function m(v){const{onClick:w}=e;w&&w(v)}function x(v){m(v)}return{selfRef:i,renderLabel:l,renderPrefix:d,renderSuffix:u,labelField:s,handleClick:x}},render(){const{clsPrefix:e,labelField:l,nodeProps:d,checked:u=!1,selected:s=!1,renderLabel:i,renderPrefix:m,renderSuffix:x,handleClick:v,onDragstart:w,tmNode:{rawNode:g,rawNode:{prefix:R,suffix:y,[l]:f}}}=this;return h("span",Object.assign({},d,{ref:"selfRef",class:[`${e}-tree-node-content`,d==null?void 0:d.class],onClick:v,draggable:w===void 0?void 0:!0,onDragstart:w}),m||R?h("div",{class:`${e}-tree-node-content__prefix`},m?m({option:g,selected:s,checked:u}):Xe(R)):null,h("div",{class:`${e}-tree-node-content__text`},i?i({option:g,selected:s,checked:u}):Xe(f)),x||y?h("div",{class:`${e}-tree-node-content__suffix`},x?x({option:g,selected:s,checked:u}):Xe(y)):null)}});function mn({position:e,offsetLevel:l,indent:d,el:u}){const s={position:"absolute",boxSizing:"border-box",right:0};if(e==="inside")s.left=0,s.top=0,s.bottom=0,s.borderRadius="inherit",s.boxShadow="inset 0 0 0 2px var(--n-drop-mark-color)";else{const i=e==="before"?"top":"bottom";s[i]=0,s.left=`${u.offsetLeft+6-l*d}px`,s.height="2px",s.backgroundColor="var(--n-drop-mark-color)",s.transformOrigin=i,s.borderRadius="1px",s.transform=e==="before"?"translateY(-4px)":"translateY(4px)"}return h("div",{style:s})}function Et({dropPosition:e,node:l}){return l.isLeaf===!1||l.children?!0:e!=="inside"}function _t(e){return $(()=>e.leafOnly?"child":e.checkStrategy)}function re(e,l){return!!e.rawNode[l]}function Dn(e,l,d,u){e==null||e.forEach(s=>{d(s),Dn(s[l],l,d,u),u(s)})}function It(e,l,d,u,s){const i=new Set,m=new Set,x=[];return Dn(e,u,v=>{if(x.push(v),s(l,v)){m.add(v[d]);for(let w=x.length-2;w>=0;--w)if(!i.has(x[w][d]))i.add(x[w][d]);else return}},()=>{x.pop()}),{expandedKeys:Array.from(i),highlightKeySet:m}}if(at&&Image){const e=new Image;e.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}function Bt(e,l,d,u,s){const i=new Set,m=new Set,x=new Set,v=[],w=[],g=[];function R(f){f.forEach(N=>{if(g.push(N),l(d,N)){i.add(N[u]),x.add(N[u]);for(let C=g.length-2;C>=0;--C){const b=g[C][u];if(!m.has(b))m.add(b),i.has(b)&&i.delete(b);else break}}const S=N[s];S&&R(S),g.pop()})}R(e);function y(f,N){f.forEach(S=>{const C=S[u],b=i.has(C),p=m.has(C);if(!b&&!p)return;const k=S[s];if(k)if(b)N.push(S);else{v.push(C);const _=Object.assign(Object.assign({},S),{[s]:[]});N.push(_),y(k,_[s])}else N.push(S)})}return y(e,w),{filteredTree:w,highlightKeySet:x,expandedKeys:v}}const $t=ce({name:"TreeNode",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const l=pe(Ae),{droppingNodeParentRef:d,droppingMouseNodeRef:u,draggingNodeRef:s,droppingPositionRef:i,droppingOffsetLevelRef:m,nodePropsRef:x,indentRef:v,blockLineRef:w,checkboxPlacementRef:g,checkOnClickRef:R,disabledFieldRef:y,showLineRef:f}=l,N=U(()=>!!e.tmNode.rawNode.checkboxDisabled),S=U(()=>re(e.tmNode,y.value)),C=U(()=>l.disabledRef.value||S.value),b=$(()=>{const{value:o}=x;if(o)return o({option:e.tmNode.rawNode})}),p=O(null),k={value:null};wn(()=>{k.value=p.value.$el});function _(){const{tmNode:o}=e;if(!o.isLeaf&&!o.shallowLoaded){if(!l.loadingKeysRef.value.has(o.key))l.loadingKeysRef.value.add(o.key);else return;const{onLoadRef:{value:K}}=l;K&&K(o.rawNode).then(A=>{A!==!1&&l.handleSwitcherClick(o)}).finally(()=>{l.loadingKeysRef.value.delete(o.key)})}else l.handleSwitcherClick(o)}const H=U(()=>!S.value&&l.selectableRef.value&&(l.internalTreeSelect?l.mergedCheckStrategyRef.value!=="child"||l.multipleRef.value&&l.cascadeRef.value||e.tmNode.isLeaf:!0)),ne=U(()=>l.checkableRef.value&&(l.cascadeRef.value||l.mergedCheckStrategyRef.value!=="child"||e.tmNode.isLeaf)),ue=U(()=>l.displayedCheckedKeysRef.value.includes(e.tmNode.key)),de=U(()=>{const{value:o}=ne;if(!o)return!1;const{value:K}=R,{tmNode:A}=e;return typeof K=="boolean"?!A.disabled&&K:K(e.tmNode.rawNode)});function Fe(o){const{value:K}=l.expandOnClickRef,{value:A}=H,{value:z}=de;if(!A&&!K&&!z||gn(o,"checkbox")||gn(o,"switcher"))return;const{tmNode:Pe}=e;A&&l.handleSelect(Pe),K&&!Pe.isLeaf&&_(),z&&Ne(!ue.value)}function fe(o){var K,A;w.value||(C.value||Fe(o),(A=(K=b.value)===null||K===void 0?void 0:K.onClick)===null||A===void 0||A.call(K,o))}function we(o){var K,A;w.value&&(C.value||Fe(o),(A=(K=b.value)===null||K===void 0?void 0:K.onClick)===null||A===void 0||A.call(K,o))}function Ne(o){l.handleCheck(e.tmNode,o)}function Me(o){l.handleDragStart({event:o,node:e.tmNode})}function X(o){o.currentTarget===o.target&&l.handleDragEnter({event:o,node:e.tmNode})}function te(o){o.preventDefault(),l.handleDragOver({event:o,node:e.tmNode})}function le(o){l.handleDragEnd({event:o,node:e.tmNode})}function je(o){o.currentTarget===o.target&&l.handleDragLeave({event:o,node:e.tmNode})}function J(o){o.preventDefault(),i.value!==null&&l.handleDrop({event:o,node:e.tmNode,dropPosition:i.value})}const ae=$(()=>{const{clsPrefix:o}=e,{value:K}=v;if(f.value){const A=[];let z=e.tmNode.parent;for(;z;)z.isLastChild?A.push(h("div",{class:`${o}-tree-node-indent`},h("div",{style:{width:`${K}px`}}))):A.push(h("div",{class:[`${o}-tree-node-indent`,`${o}-tree-node-indent--show-line`]},h("div",{style:{width:`${K}px`}}))),z=z.parent;return A.reverse()}else return it(e.tmNode.level,h("div",{class:`${e.clsPrefix}-tree-node-indent`},h("div",{style:{width:`${K}px`}})))});return{showDropMark:U(()=>{const{value:o}=s;if(!o)return;const{value:K}=i;if(!K)return;const{value:A}=u;if(!A)return;const{tmNode:z}=e;return z.key===A.key}),showDropMarkAsParent:U(()=>{const{value:o}=d;if(!o)return!1;const{tmNode:K}=e,{value:A}=i;return A==="before"||A==="after"?o.key===K.key:!1}),pending:U(()=>l.pendingNodeKeyRef.value===e.tmNode.key),loading:U(()=>l.loadingKeysRef.value.has(e.tmNode.key)),highlight:U(()=>{var o;return(o=l.highlightKeySetRef.value)===null||o===void 0?void 0:o.has(e.tmNode.key)}),checked:ue,indeterminate:U(()=>l.displayedIndeterminateKeysRef.value.includes(e.tmNode.key)),selected:U(()=>l.mergedSelectedKeysRef.value.includes(e.tmNode.key)),expanded:U(()=>l.mergedExpandedKeysRef.value.includes(e.tmNode.key)),disabled:C,checkable:ne,mergedCheckOnClick:de,checkboxDisabled:N,selectable:H,expandOnClick:l.expandOnClickRef,internalScrollable:l.internalScrollableRef,draggable:l.draggableRef,blockLine:w,nodeProps:b,checkboxFocusable:l.internalCheckboxFocusableRef,droppingPosition:i,droppingOffsetLevel:m,indent:v,checkboxPlacement:g,showLine:f,contentInstRef:p,contentElRef:k,indentNodes:ae,handleCheck:Ne,handleDrop:J,handleDragStart:Me,handleDragEnter:X,handleDragOver:te,handleDragEnd:le,handleDragLeave:je,handleLineClick:we,handleContentClick:fe,handleSwitcherClick:_}},render(){const{tmNode:e,clsPrefix:l,checkable:d,expandOnClick:u,selectable:s,selected:i,checked:m,highlight:x,draggable:v,blockLine:w,indent:g,indentNodes:R,disabled:y,pending:f,internalScrollable:N,nodeProps:S,checkboxPlacement:C}=this,b=v&&!y?{onDragenter:this.handleDragEnter,onDragleave:this.handleDragLeave,onDragend:this.handleDragEnd,onDrop:this.handleDrop,onDragover:this.handleDragOver}:void 0,p=N?Cn(e.key):void 0,k=C==="right",_=d?h(Pt,{indent:g,right:k,focusable:this.checkboxFocusable,disabled:y||this.checkboxDisabled,clsPrefix:l,checked:this.checked,indeterminate:this.indeterminate,onCheck:this.handleCheck}):null;return h("div",Object.assign({class:`${l}-tree-node-wrapper`},b),h("div",Object.assign({},w?S:void 0,{class:[`${l}-tree-node`,{[`${l}-tree-node--selected`]:i,[`${l}-tree-node--checkable`]:d,[`${l}-tree-node--highlight`]:x,[`${l}-tree-node--pending`]:f,[`${l}-tree-node--disabled`]:y,[`${l}-tree-node--selectable`]:s,[`${l}-tree-node--clickable`]:s||u||this.mergedCheckOnClick},S==null?void 0:S.class],"data-key":p,draggable:v&&w,onClick:this.handleLineClick,onDragstart:v&&w&&!y?this.handleDragStart:void 0}),R,e.isLeaf&&this.showLine?h("div",{class:[`${l}-tree-node-indent`,`${l}-tree-node-indent--show-line`,e.isLeaf&&`${l}-tree-node-indent--is-leaf`,e.isLastChild&&`${l}-tree-node-indent--last-child`]},h("div",{style:{width:`${g}px`}})):h(Ft,{clsPrefix:l,expanded:this.expanded,selected:i,loading:this.loading,hide:e.isLeaf,tmNode:this.tmNode,indent:g,onClick:this.handleSwitcherClick}),k?null:_,h(Ot,{ref:"contentInstRef",clsPrefix:l,checked:m,selected:i,onClick:this.handleContentClick,nodeProps:w?void 0:S,onDragstart:v&&!w&&!y?this.handleDragStart:void 0,tmNode:e}),v?this.showDropMark?mn({el:this.contentElRef.value,position:this.droppingPosition,offsetLevel:this.droppingOffsetLevel,indent:g}):this.showDropMarkAsParent?mn({el:this.contentElRef.value,position:"inside",offsetLevel:this.droppingOffsetLevel,indent:g}):null:null,k?_:null))}}),Ln=$t;function Ut({props:e,fNodesRef:l,mergedExpandedKeysRef:d,mergedSelectedKeysRef:u,handleSelect:s,handleSwitcherClick:i}){const{value:m}=u,x=pe(Kn,null),v=x?x.pendingNodeKeyRef:O(m.length?m[m.length-1]:null);function w(g){if(!e.keyboard)return;const{value:R}=v;if(R===null){if((g.key==="ArrowDown"||g.key==="ArrowUp")&&g.preventDefault(),["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(g.key)&&R===null){const{value:y}=l;let f=0;for(;f<y.length;){if(!y[f].disabled){v.value=y[f].key;break}f+=1}}}else{const{value:y}=l;let f=y.findIndex(N=>N.key===R);if(!~f)return;if(g.key==="Enter")s(y[f]);else if(g.key==="ArrowDown")for(g.preventDefault(),f+=1;f<y.length;){if(!y[f].disabled){v.value=y[f].key;break}f+=1}else if(g.key==="ArrowUp")for(g.preventDefault(),f-=1;f>=0;){if(!y[f].disabled){v.value=y[f].key;break}f-=1}else if(g.key==="ArrowLeft"){const N=y[f];if(N.isLeaf||!d.value.includes(R)){const S=N.getParent();S&&(v.value=S.key)}else i(N)}else if(g.key==="ArrowRight"){const N=y[f];if(N.isLeaf)return;if(!d.value.includes(R))i(N);else for(f+=1;f<y.length;){if(!y[f].disabled){v.value=y[f].key;break}f+=1}}}}return{pendingNodeKeyRef:v,handleKeydown:w}}const zt=ce({name:"TreeMotionWrapper",props:{clsPrefix:{type:String,required:!0},height:Number,nodes:{type:Array,required:!0},mode:{type:String,required:!0},onAfterEnter:{type:Function,required:!0}},render(){const{clsPrefix:e}=this;return h(ot,{onAfterEnter:this.onAfterEnter,appear:!0,reverse:this.mode==="collapse"},{default:()=>h("div",{class:[`${e}-tree-motion-wrapper`,`${e}-tree-motion-wrapper--${this.mode}`],style:{height:Nn(this.height)}},this.nodes.map(l=>h(Ln,{clsPrefix:e,tmNode:l})))})}}),tn=rt(),Mt=E("tree",`
 font-size: var(--n-font-size);
 outline: none;
`,[ee("ul, li",`
 margin: 0;
 padding: 0;
 list-style: none;
 `),ee(">",[E("tree-node",[ee("&:first-child","margin-top: 0;")])]),E("tree-motion-wrapper",[I("expand",[vn({duration:"0.2s"})]),I("collapse",[vn({duration:"0.2s",reverse:!0})])]),E("tree-node-wrapper",`
 box-sizing: border-box;
 padding: var(--n-node-wrapper-padding);
 `),E("tree-node",`
 transform: translate3d(0,0,0);
 position: relative;
 display: flex;
 border-radius: var(--n-node-border-radius);
 transition: background-color .3s var(--n-bezier);
 `,[I("highlight",[E("tree-node-content",[me("text","border-bottom-color: var(--n-node-text-color-disabled);")])]),I("disabled",[E("tree-node-content",`
 color: var(--n-node-text-color-disabled);
 cursor: not-allowed;
 `)]),xe("disabled",[I("clickable",[E("tree-node-content",`
 cursor: pointer;
 `)])])]),I("block-node",[E("tree-node-content",`
 flex: 1;
 min-width: 0;
 `)]),xe("block-line",[E("tree-node",[xe("disabled",[E("tree-node-content",[ee("&:hover","background: var(--n-node-color-hover);")]),I("selectable",[E("tree-node-content",[ee("&:active","background: var(--n-node-color-pressed);")])]),I("pending",[E("tree-node-content",`
 background: var(--n-node-color-hover);
 `)]),I("selected",[E("tree-node-content","background: var(--n-node-color-active);")])])])]),I("block-line",[E("tree-node",[xe("disabled",[ee("&:hover","background: var(--n-node-color-hover);"),I("pending",`
 background: var(--n-node-color-hover);
 `),I("selectable",[xe("selected",[ee("&:active","background: var(--n-node-color-pressed);")])]),I("selected","background: var(--n-node-color-active);")]),I("disabled",`
 cursor: not-allowed;
 `)])]),E("tree-node-indent",`
 flex-grow: 0;
 flex-shrink: 0;
 `,[I("show-line","position: relative",[ee("&::before",`
 position: absolute;
 left: 50%;
 border-left: 1px solid var(--n-border-color);
 transition: border-color .3s var(--n-bezier);
 transform: translate(-50%);
 content: "";
 top: var(--n-line-offset-top);
 bottom: var(--n-line-offset-bottom);
 `),I("last-child",[ee("&::before",`
 bottom: 50%;
 `)]),I("is-leaf",[ee("&::after",`
 position: absolute;
 content: "";
 left: calc(50% + 0.5px);
 right: 0;
 bottom: 50%;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-border-color);
 `)])]),xe("show-line","height: 0;")]),E("tree-node-switcher",`
 cursor: pointer;
 display: inline-flex;
 flex-shrink: 0;
 height: var(--n-node-content-height);
 align-items: center;
 justify-content: center;
 transition: transform .15s var(--n-bezier);
 vertical-align: bottom;
 `,[me("icon",`
 position: relative;
 height: 14px;
 width: 14px;
 display: flex;
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 font-size: 14px;
 `,[E("icon",[tn]),E("base-loading",`
 color: var(--n-loading-color);
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[tn]),E("base-icon",[tn])]),I("hide","visibility: hidden;"),I("expanded","transform: rotate(90deg);")]),E("tree-node-checkbox",`
 display: inline-flex;
 height: var(--n-node-content-height);
 vertical-align: bottom;
 align-items: center;
 justify-content: center;
 `),E("tree-node-content",`
 user-select: none;
 position: relative;
 display: inline-flex;
 align-items: center;
 min-height: var(--n-node-content-height);
 box-sizing: border-box;
 line-height: var(--n-line-height);
 vertical-align: bottom;
 padding: 0 6px 0 4px;
 cursor: default;
 border-radius: var(--n-node-border-radius);
 color: var(--n-node-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[ee("&:last-child","margin-bottom: 0;"),me("prefix",`
 display: inline-flex;
 margin-right: 8px;
 `),me("text",`
 border-bottom: 1px solid #0000;
 transition: border-color .3s var(--n-bezier);
 flex-grow: 1;
 max-width: 100%;
 `),me("suffix",`
 display: inline-flex;
 `)]),me("empty","margin: auto;")]);var jt=globalThis&&globalThis.__awaiter||function(e,l,d,u){function s(i){return i instanceof d?i:new d(function(m){m(i)})}return new(d||(d=Promise))(function(i,m){function x(g){try{w(u.next(g))}catch(R){m(R)}}function v(g){try{w(u.throw(g))}catch(R){m(R)}}function w(g){g.done?i(g.value):s(g.value).then(x,v)}w((u=u.apply(e,l||[])).next())})};function qt(e,l,d,u){return{getIsGroup(){return!1},getKey(i){return i[e]},getChildren:u||(i=>i[l]),getDisabled(i){return!!(i[d]||i.checkboxDisabled)}}}const Ht={allowCheckingNotLoaded:Boolean,filter:Function,defaultExpandAll:Boolean,expandedKeys:Array,keyField:{type:String,default:"key"},labelField:{type:String,default:"label"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandedKeys:{type:Array,default:()=>[]},indeterminateKeys:Array,renderSwitcherIcon:Function,onUpdateIndeterminateKeys:[Function,Array],"onUpdate:indeterminateKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],"onUpdate:expandedKeys":[Function,Array]},Vt=Object.assign(Object.assign(Object.assign(Object.assign({},Rn.props),{accordion:Boolean,showIrrelevantNodes:{type:Boolean,default:!0},data:{type:Array,default:()=>[]},expandOnDragenter:{type:Boolean,default:!0},expandOnClick:Boolean,checkOnClick:{type:[Boolean,Function],default:!1},cancelable:{type:Boolean,default:!0},checkable:Boolean,draggable:Boolean,blockNode:Boolean,blockLine:Boolean,showLine:Boolean,disabled:Boolean,checkedKeys:Array,defaultCheckedKeys:{type:Array,default:()=>[]},selectedKeys:Array,defaultSelectedKeys:{type:Array,default:()=>[]},multiple:Boolean,pattern:{type:String,default:""},onLoad:Function,cascade:Boolean,selectable:{type:Boolean,default:!0},scrollbarProps:Object,indent:{type:Number,default:24},allowDrop:{type:Function,default:Et},animated:{type:Boolean,default:!0},checkboxPlacement:{type:String,default:"left"},virtualScroll:Boolean,watchProps:Array,renderLabel:Function,renderPrefix:Function,renderSuffix:Function,nodeProps:Function,keyboard:{type:Boolean,default:!0},getChildren:Function,onDragenter:[Function,Array],onDragleave:[Function,Array],onDragend:[Function,Array],onDragstart:[Function,Array],onDragover:[Function,Array],onDrop:[Function,Array],onUpdateCheckedKeys:[Function,Array],"onUpdate:checkedKeys":[Function,Array],onUpdateSelectedKeys:[Function,Array],"onUpdate:selectedKeys":[Function,Array]}),Ht),{internalTreeSelect:Boolean,internalScrollable:Boolean,internalScrollablePadding:String,internalRenderEmpty:Function,internalHighlightKeySet:Object,internalUnifySelectCheck:Boolean,internalCheckboxFocusable:{type:Boolean,default:!0},internalFocusable:{type:Boolean,default:!0},checkStrategy:{type:String,default:"all"},leafOnly:Boolean}),xn=ce({name:"Tree",props:Vt,setup(e){const{mergedClsPrefixRef:l,inlineThemeDisabled:d,mergedRtlRef:u}=dt(e),s=st("Tree",u,l),i=Rn("Tree","-tree",Mt,vt,e,l),m=O(null),x=O(null),v=O(null);function w(){var n;return(n=v.value)===null||n===void 0?void 0:n.listElRef}function g(){var n;return(n=v.value)===null||n===void 0?void 0:n.itemsElRef}const R=$(()=>{const{filter:n}=e;if(n)return n;const{labelField:t}=e;return(a,c)=>{if(!a.length)return!0;const r=c[t];return typeof r=="string"?r.toLowerCase().includes(a.toLowerCase()):!1}}),y=$(()=>{const{pattern:n}=e;return n?!n.length||!R.value?{filteredTree:e.data,highlightKeySet:null,expandedKeys:void 0}:Bt(e.data,R.value,n,e.keyField,e.childrenField):{filteredTree:e.data,highlightKeySet:null,expandedKeys:void 0}}),f=$(()=>ct(e.showIrrelevantNodes?e.data:y.value.filteredTree,qt(e.keyField,e.childrenField,e.disabledField,e.getChildren))),N=pe(Kn,null),S=e.internalTreeSelect?N.dataTreeMate:f,{watchProps:C}=e,b=O([]);C!=null&&C.includes("defaultCheckedKeys")?De(()=>{b.value=e.defaultCheckedKeys}):b.value=e.defaultCheckedKeys;const p=F(e,"checkedKeys"),k=$e(p,b),_=$(()=>S.value.getCheckedKeys(k.value,{cascade:e.cascade,allowNotLoaded:e.allowCheckingNotLoaded})),H=_t(e),ne=$(()=>_.value.checkedKeys),ue=$(()=>{const{indeterminateKeys:n}=e;return n!==void 0?n:_.value.indeterminateKeys}),de=O([]);C!=null&&C.includes("defaultSelectedKeys")?De(()=>{de.value=e.defaultSelectedKeys}):de.value=e.defaultSelectedKeys;const Fe=F(e,"selectedKeys"),fe=$e(Fe,de),we=O([]),Ne=n=>{we.value=e.defaultExpandAll?S.value.getNonLeafKeys():n===void 0?e.defaultExpandedKeys:n};C!=null&&C.includes("defaultExpandedKeys")?De(()=>{Ne(void 0)}):De(()=>{Ne(e.defaultExpandedKeys)});const Me=F(e,"expandedKeys"),X=$e(Me,we),te=$(()=>f.value.getFlattenedNodes(X.value)),{pendingNodeKeyRef:le,handleKeydown:je}=Ut({props:e,mergedSelectedKeysRef:fe,fNodesRef:te,mergedExpandedKeysRef:X,handleSelect:We,handleSwitcherClick:dn});let J=null,ae=null;const o=O(new Set),K=$(()=>e.internalHighlightKeySet||y.value.highlightKeySet),A=$e(K,o),z=O(new Set),Pe=$(()=>X.value.filter(n=>!z.value.has(n)));let ln=0;const Re=O(null),Oe=O(null),Ee=O(null),_e=O(null),Ie=O(0),Tn=$(()=>{const{value:n}=Oe;return n?n.parent:null});Ue(F(e,"data"),()=>{z.value.clear(),le.value=null,Ce()},{deep:!1});let qe=!1;const He=()=>{qe=!0,Ye(()=>{qe=!1})};let Se;Ue(F(e,"pattern"),(n,t)=>{if(e.showIrrelevantNodes)if(Se=void 0,n){const{expandedKeys:a,highlightKeySet:c}=It(e.data,e.pattern,e.keyField,e.childrenField,R.value);o.value=c,He(),ge(a,V(a),{node:null,action:"filter"})}else o.value=new Set;else if(!n.length)Se!==void 0&&(He(),ge(Se,V(Se),{node:null,action:"filter"}));else{t.length||(Se=X.value);const{expandedKeys:a}=y.value;a!==void 0&&(He(),ge(a,V(a),{node:null,action:"filter"}))}});function an(n){return jt(this,void 0,void 0,function*(){const{onLoad:t}=e;if(!t){yield Promise.resolve();return}const{value:a}=z;if(!a.has(n.key)){a.add(n.key);try{(yield t(n.rawNode))===!1&&ve()}catch{ve()}a.delete(n.key)}})}De(()=>{var n;const{value:t}=f;if(!t)return;const{getNode:a}=t;(n=X.value)===null||n===void 0||n.forEach(c=>{const r=a(c);r&&!r.shallowLoaded&&an(r)})});const he=O(!1),ie=O([]);Ue(Pe,(n,t)=>{if(!e.animated||qe){Ye(Be);return}const a=Le(i.value.self.nodeHeight),c=new Set(t);let r=null,P=null;for(const T of n)if(!c.has(T)){if(r!==null)return;r=T}const M=new Set(n);for(const T of t)if(!M.has(T)){if(P!==null)return;P=T}if(r===null&&P===null)return;const{virtualScroll:W}=e,be=(W?v.value.listElRef:m.value).offsetHeight,ke=Math.ceil(be/a)+1;let Y;if(r!==null&&(Y=t),P!==null&&(Y===void 0?Y=n:Y=Y.filter(T=>T!==P)),he.value=!0,ie.value=f.value.getFlattenedNodes(Y),r!==null){const T=ie.value.findIndex(Q=>Q.key===r);if(~T){const Q=ie.value[T].children;if(Q){const Z=yn(Q,n);ie.value.splice(T+1,0,{__motion:!0,mode:"expand",height:W?Z.length*a:void 0,nodes:W?Z.slice(0,ke):Z})}}}if(P!==null){const T=ie.value.findIndex(Q=>Q.key===P);if(~T){const Q=ie.value[T].children;if(!Q)return;he.value=!0;const Z=yn(Q,n);ie.value.splice(T+1,0,{__motion:!0,mode:"collapse",height:W?Z.length*a:void 0,nodes:W?Z.slice(0,ke):Z})}}});const An=$(()=>ut(te.value)),Fn=$(()=>he.value?ie.value:te.value);function Be(){const{value:n}=x;n&&n.sync()}function Pn(){he.value=!1,e.virtualScroll&&Ye(Be)}function V(n){const{getNode:t}=S.value;return n.map(a=>{var c;return((c=t(a))===null||c===void 0?void 0:c.rawNode)||null})}function ge(n,t,a){const{"onUpdate:expandedKeys":c,onUpdateExpandedKeys:r}=e;we.value=n,c&&j(c,n,t,a),r&&j(r,n,t,a)}function on(n,t,a){const{"onUpdate:checkedKeys":c,onUpdateCheckedKeys:r}=e;b.value=n,r&&j(r,n,t,a),c&&j(c,n,t,a)}function On(n,t){const{"onUpdate:indeterminateKeys":a,onUpdateIndeterminateKeys:c}=e;a&&j(a,n,t),c&&j(c,n,t)}function Ve(n,t,a){const{"onUpdate:selectedKeys":c,onUpdateSelectedKeys:r}=e;de.value=n,r&&j(r,n,t,a),c&&j(c,n,t,a)}function En(n){const{onDragenter:t}=e;t&&j(t,n)}function _n(n){const{onDragleave:t}=e;t&&j(t,n)}function In(n){const{onDragend:t}=e;t&&j(t,n)}function Bn(n){const{onDragstart:t}=e;t&&j(t,n)}function $n(n){const{onDragover:t}=e;t&&j(t,n)}function Un(n){const{onDrop:t}=e;t&&j(t,n)}function Ce(){zn(),se()}function zn(){Re.value=null}function se(){Ie.value=0,Oe.value=null,Ee.value=null,_e.value=null,ve()}function ve(){J&&(window.clearTimeout(J),J=null),ae=null}function rn(n,t){if(e.disabled||re(n,e.disabledField))return;if(e.internalUnifySelectCheck&&!e.multiple){We(n);return}const a=t?"check":"uncheck",{checkedKeys:c,indeterminateKeys:r}=S.value[a](n.key,ne.value,{cascade:e.cascade,checkStrategy:H.value,allowNotLoaded:e.allowCheckingNotLoaded});on(c,V(c),{node:n.rawNode,action:a}),On(r,V(r))}function Mn(n){if(e.disabled)return;const{key:t}=n,{value:a}=X,c=a.findIndex(r=>r===t);if(~c){const r=Array.from(a);r.splice(c,1),ge(r,V(r),{node:n.rawNode,action:"collapse"})}else{const r=f.value.getNode(t);if(!r||r.isLeaf)return;let P;if(e.accordion){const M=new Set(n.siblings.map(({key:W})=>W));P=a.filter(W=>!M.has(W)),P.push(t)}else P=a.concat(t);ge(P,V(P),{node:n.rawNode,action:"expand"})}}function dn(n){e.disabled||he.value||Mn(n)}function We(n){if(!(e.disabled||!e.selectable)){if(le.value=n.key,e.internalUnifySelectCheck){const{value:{checkedKeys:t,indeterminateKeys:a}}=_;e.multiple?rn(n,!(t.includes(n.key)||a.includes(n.key))):on([n.key],V([n.key]),{node:n.rawNode,action:"check"})}if(e.multiple){const t=Array.from(fe.value),a=t.findIndex(c=>c===n.key);~a?e.cancelable&&t.splice(a,1):~a||t.push(n.key),Ve(t,V(t),{node:n.rawNode,action:~a?"unselect":"select"})}else fe.value.includes(n.key)?e.cancelable&&Ve([],[],{node:n.rawNode,action:"unselect"}):Ve([n.key],V([n.key]),{node:n.rawNode,action:"select"})}}function jn(n){if(J&&(window.clearTimeout(J),J=null),n.isLeaf)return;ae=n.key;const t=()=>{if(ae!==n.key)return;const{value:a}=Ee;if(a&&a.key===n.key&&!X.value.includes(n.key)){const c=X.value.concat(n.key);ge(c,V(c),{node:n.rawNode,action:"expand"})}J=null,ae=null};n.shallowLoaded?J=window.setTimeout(()=>{t()},1e3):J=window.setTimeout(()=>{an(n).then(()=>{t()})},1e3)}function qn({event:n,node:t}){!e.draggable||e.disabled||re(t,e.disabledField)||(sn({event:n,node:t},!1),En({event:n,node:t.rawNode}))}function Hn({event:n,node:t}){!e.draggable||e.disabled||re(t,e.disabledField)||_n({event:n,node:t.rawNode})}function Vn(n){n.target===n.currentTarget&&se()}function Wn({event:n,node:t}){Ce(),!(!e.draggable||e.disabled||re(t,e.disabledField))&&In({event:n,node:t.rawNode})}function Gn({event:n,node:t}){!e.draggable||e.disabled||re(t,e.disabledField)||(ln=n.clientX,Re.value=t,Bn({event:n,node:t.rawNode}))}function sn({event:n,node:t},a=!0){var c;if(!e.draggable||e.disabled||re(t,e.disabledField))return;const{value:r}=Re;if(!r)return;const{allowDrop:P,indent:M}=e;a&&$n({event:n,node:t.rawNode});const W=n.currentTarget,{height:be,top:ke}=W.getBoundingClientRect(),Y=n.clientY-ke;let T;P({node:t.rawNode,dropPosition:"inside",phase:"drag"})?Y<=8?T="before":Y>=be-8?T="after":T="inside":Y<=be/2?T="before":T="after";const{value:Z}=An;let D,B;const Ke=Z(t.key);if(Ke===null){se();return}let un=!1;T==="inside"?(D=t,B="inside"):T==="before"?t.isFirstChild?(D=t,B="before"):(D=te.value[Ke-1],B="after"):(D=t,B="after"),!D.isLeaf&&X.value.includes(D.key)&&(un=!0,B==="after"&&(D=te.value[Ke+1],D?B="before":(D=t,B="inside")));const fn=D;if(Ee.value=fn,!un&&r.isLastChild&&r.key===D.key&&(B="after"),B==="after"){let hn=ln-n.clientX,Ge=0;for(;hn>=M/2&&D.parent!==null&&D.isLastChild&&Ge<1;)hn-=M,Ge+=1,D=D.parent;Ie.value=Ge}else Ie.value=0;if((r.contains(D)||B==="inside"&&((c=r.parent)===null||c===void 0?void 0:c.key)===D.key)&&!(r.key===fn.key&&r.key===D.key)){se();return}if(!P({node:D.rawNode,dropPosition:B,phase:"drag"})){se();return}if(r.key===D.key)ve();else if(ae!==D.key)if(B==="inside"){if(e.expandOnDragenter){if(jn(D),!D.shallowLoaded&&ae!==D.key){Ce();return}}else if(!D.shallowLoaded){Ce();return}}else ve();else B!=="inside"&&ve();_e.value=B,Oe.value=D}function Xn({event:n,node:t,dropPosition:a}){if(!e.draggable||e.disabled||re(t,e.disabledField))return;const{value:c}=Re,{value:r}=Oe,{value:P}=_e;if(!(!c||!r||!P)&&e.allowDrop({node:r.rawNode,dropPosition:P,phase:"drag"})&&c.key!==r.key){if(P==="before"){const M=c.getNext({includeDisabled:!0});if(M&&M.key===r.key){se();return}}if(P==="after"){const M=c.getPrev({includeDisabled:!0});if(M&&M.key===r.key){se();return}}Un({event:n,node:r.rawNode,dragNode:c.rawNode,dropPosition:a}),Ce()}}function Yn(){Be()}function Qn(){Be()}function Jn(n){var t;if(e.virtualScroll||e.internalScrollable){const{value:a}=x;if(!((t=a==null?void 0:a.containerRef)===null||t===void 0)&&t.contains(n.relatedTarget))return;le.value=null}else{const{value:a}=m;if(a!=null&&a.contains(n.relatedTarget))return;le.value=null}}Ue(le,n=>{var t,a;if(n!==null){if(e.virtualScroll)(t=v.value)===null||t===void 0||t.scrollTo({key:n});else if(e.internalScrollable){const{value:c}=x;if(c===null)return;const r=(a=c.contentRef)===null||a===void 0?void 0:a.querySelector(`[data-key="${Cn(n)}"]`);if(!r)return;c.scrollTo({el:r})}}}),ft(Ae,{loadingKeysRef:z,highlightKeySetRef:A,displayedCheckedKeysRef:ne,displayedIndeterminateKeysRef:ue,mergedSelectedKeysRef:fe,mergedExpandedKeysRef:X,mergedThemeRef:i,mergedCheckStrategyRef:H,nodePropsRef:F(e,"nodeProps"),disabledRef:F(e,"disabled"),checkableRef:F(e,"checkable"),selectableRef:F(e,"selectable"),expandOnClickRef:F(e,"expandOnClick"),onLoadRef:F(e,"onLoad"),draggableRef:F(e,"draggable"),blockLineRef:F(e,"blockLine"),indentRef:F(e,"indent"),cascadeRef:F(e,"cascade"),checkOnClickRef:F(e,"checkOnClick"),checkboxPlacementRef:e.checkboxPlacement,droppingMouseNodeRef:Ee,droppingNodeParentRef:Tn,draggingNodeRef:Re,droppingPositionRef:_e,droppingOffsetLevelRef:Ie,fNodesRef:te,pendingNodeKeyRef:le,showLineRef:F(e,"showLine"),disabledFieldRef:F(e,"disabledField"),internalScrollableRef:F(e,"internalScrollable"),internalCheckboxFocusableRef:F(e,"internalCheckboxFocusable"),internalTreeSelect:e.internalTreeSelect,renderLabelRef:F(e,"renderLabel"),renderPrefixRef:F(e,"renderPrefix"),renderSuffixRef:F(e,"renderSuffix"),renderSwitcherIconRef:F(e,"renderSwitcherIcon"),labelFieldRef:F(e,"labelField"),multipleRef:F(e,"multiple"),handleSwitcherClick:dn,handleDragEnd:Wn,handleDragEnter:qn,handleDragLeave:Hn,handleDragStart:Gn,handleDrop:Xn,handleDragOver:sn,handleSelect:We,handleCheck:rn});function Zn(n){var t;(t=v.value)===null||t===void 0||t.scrollTo(n)}const et={handleKeydown:je,scrollTo:Zn,getCheckedData:()=>{if(!e.checkable)return{keys:[],options:[]};const{checkedKeys:n}=_.value;return{keys:n,options:V(n)}},getIndeterminateData:()=>{if(!e.checkable)return{keys:[],options:[]};const{indeterminateKeys:n}=_.value;return{keys:n,options:V(n)}}},cn=$(()=>{const{common:{cubicBezierEaseInOut:n},self:{fontSize:t,nodeBorderRadius:a,nodeColorHover:c,nodeColorPressed:r,nodeColorActive:P,arrowColor:M,loadingColor:W,nodeTextColor:be,nodeTextColorDisabled:ke,dropMarkColor:Y,nodeWrapperPadding:T,nodeHeight:Q,lineHeight:Z}}=i.value,D=Qe(T,"top"),B=Qe(T,"bottom"),Ke=Nn(Le(Q)-Le(D)-Le(B));return{"--n-arrow-color":M,"--n-loading-color":W,"--n-bezier":n,"--n-font-size":t,"--n-node-border-radius":a,"--n-node-color-active":P,"--n-node-color-hover":c,"--n-node-color-pressed":r,"--n-node-text-color":be,"--n-node-text-color-disabled":ke,"--n-drop-mark-color":Y,"--n-node-wrapper-padding":T,"--n-line-offset-top":`-${D}`,"--n-line-offset-bottom":`-${B}`,"--n-node-content-height":Ke,"--n-line-height":Z}}),ye=d?ht("tree",void 0,cn,e):void 0;return Object.assign(Object.assign({},et),{mergedClsPrefix:l,mergedTheme:i,rtlEnabled:s,fNodes:Fn,aip:he,selfElRef:m,virtualListInstRef:v,scrollbarInstRef:x,handleFocusout:Jn,handleDragLeaveTree:Vn,handleScroll:Yn,getScrollContainer:w,getScrollContent:g,handleAfterEnter:Pn,handleResize:Qn,cssVars:d?void 0:cn,themeClass:ye==null?void 0:ye.themeClass,onRender:ye==null?void 0:ye.onRender})},render(){var e;const{fNodes:l,internalRenderEmpty:d}=this;if(!l.length&&d)return d();const{mergedClsPrefix:u,blockNode:s,blockLine:i,draggable:m,disabled:x,internalFocusable:v,checkable:w,handleKeydown:g,rtlEnabled:R,handleFocusout:y,scrollbarProps:f}=this,N=v&&!x,S=N?"0":void 0,C=[`${u}-tree`,R&&`${u}-tree--rtl`,w&&`${u}-tree--checkable`,(i||s)&&`${u}-tree--block-node`,i&&`${u}-tree--block-line`],b=k=>"__motion"in k?h(zt,{height:k.height,nodes:k.nodes,clsPrefix:u,mode:k.mode,onAfterEnter:this.handleAfterEnter}):h(Ln,{key:k.key,tmNode:k,clsPrefix:u});if(this.virtualScroll){const{mergedTheme:k,internalScrollablePadding:_}=this,H=Qe(_||"0");return h(bn,Object.assign({},f,{ref:"scrollbarInstRef",onDragleave:m?this.handleDragLeaveTree:void 0,container:this.getScrollContainer,content:this.getScrollContent,class:C,theme:k.peers.Scrollbar,themeOverrides:k.peerOverrides.Scrollbar,tabindex:S,onKeydown:N?g:void 0,onFocusout:N?y:void 0}),{default:()=>{var ne;return(ne=this.onRender)===null||ne===void 0||ne.call(this),h(Ct,{ref:"virtualListInstRef",items:this.fNodes,itemSize:Le(k.self.nodeHeight),ignoreItemResize:this.aip,paddingTop:H.top,paddingBottom:H.bottom,class:this.themeClass,style:[this.cssVars,{paddingLeft:H.left,paddingRight:H.right}],onScroll:this.handleScroll,onResize:this.handleResize,showScrollbar:!1,itemResizable:!0},{default:({item:ue})=>b(ue)})}})}const{internalScrollable:p}=this;return C.push(this.themeClass),(e=this.onRender)===null||e===void 0||e.call(this),p?h(bn,Object.assign({},f,{class:C,tabindex:S,onKeydown:N?g:void 0,onFocusout:N?y:void 0,style:this.cssVars,contentStyle:{padding:this.internalScrollablePadding}}),{default:()=>h("div",{onDragleave:m?this.handleDragLeaveTree:void 0,ref:"selfElRef"},this.fNodes.map(b))}):h("div",{class:C,tabindex:S,ref:"selfElRef",style:this.cssVars,onKeydown:N?g:void 0,onFocusout:N?y:void 0,onDragleave:m?this.handleDragLeaveTree:void 0},l.length?l.map(b):gt(this.$slots.empty,()=>[h(Kt,{class:`${u}-tree__empty`,theme:this.mergedTheme.peers.Empty,themeOverrides:this.mergedTheme.peerOverrides.Empty})]))}}),Wt=Sn("i",{class:"i-material-symbols:add"},null,-1),Gt=Sn("i",{class:"i-material-symbols:add"},null,-1),ul=Object.assign({name:"角色管理"},{__name:"index",setup(e){const l=O(null),d=O({keyword:""}),{modalVisible:u,modalAction:s,modalTitle:i,modalLoading:m,handleAdd:x,handleDelete:v,handleEdit:w,handleSave:g,modalForm:R,modalFormRef:y}=Rt({name:"角色",initForm:{},doCreate:oe.saveOrUpdateRole,doDelete:oe.deleteRole,doUpdate:oe.saveOrUpdateRole,refresh:()=>{var b;return(b=l.value)==null?void 0:b.handleSearch()}}),f=O(!0),N=O([]),S=O([]);wn(()=>{var b;(b=l.value)==null||b.handleSearch(),oe.getResourceOption().then(p=>N.value=p.data),oe.getMenuOption().then(p=>S.value=p.data)});const C=[{type:"selection",width:15,fixed:"left"},{title:"角色名",key:"name",width:80,align:"center",ellipsis:{tooltip:!0}},{title:"角色标签",key:"label",width:80,align:"center",render(b){return h(mt,{type:"info"},{default:()=>b.label})}},{title:"创建日期",key:"created_at",width:60,align:"center",render(b){return h("span",kt(b.created_at))}},{title:"是否禁用",key:"is_disable",width:30,align:"center",fixed:"left",render(b){return h(Dt,{size:"small",rubberBand:!1,value:b.is_disable,loading:!!b.publishing,checkedValue:1,uncheckedValue:0,onUpdateValue:()=>$message.info("这个功能暂时还不支持~")})}},{title:"操作",key:"actions",width:100,align:"center",fixed:"right",render(b){return[h(Te,{size:"tiny",quaternary:!0,type:"info",onClick:()=>{f.value=!0,oe.getMenuOption().then(p=>S.value=p.data),w(b)}},{default:()=>"菜单权限",icon:en("material-symbols:edit-outline",{size:16})}),h(Te,{size:"tiny",quaternary:!0,type:"info",onClick:()=>{f.value=!1,oe.getResourceOption().then(p=>N.value=p.data),w(b)}},{default:()=>"资源权限",icon:en("ic:baseline-folder-open",{size:16})}),h(Tt,{onPositiveClick:()=>v([b.id],!1),onNegativeClick:()=>{}},{trigger:()=>h(Te,{size:"small",type:"error",style:"margin-left: 15px;"},{default:()=>"删除",icon:en("material-symbols:delete-outline",{size:16})}),default:()=>h("div",{},"确定删除该角色吗?")})]}}];return(b,p)=>(Je(),Ze(xt,{title:"角色管理"},{action:q(()=>{var k;return[G(L(Te),{type:"primary",onClick:L(x)},{icon:q(()=>[Wt]),default:q(()=>[kn(" 新建角色 ")]),_:1},8,["onClick"]),G(L(Te),{type:"error",disabled:!((k=l.value)!=null&&k.selections.length),onClick:p[0]||(p[0]=_=>{var H;return L(v)((H=l.value)==null?void 0:H.selections)})},{icon:q(()=>[Gt]),default:q(()=>[kn(" 批量删除 ")]),_:1},8,["disabled"])]}),default:q(()=>[G(Nt,{ref_key:"$table",ref:l,"query-items":d.value,"onUpdate:queryItems":p[3]||(p[3]=k=>d.value=k),columns:C,"get-data":L(oe).getRoles},{queryBar:q(()=>[G(pt,{label:"角色名","label-width":50},{default:q(()=>[G(L(nn),{value:d.value.keyword,"onUpdate:value":p[1]||(p[1]=k=>d.value.keyword=k),clearable:"",type:"text",placeholder:"请输入角色名",onKeydown:p[2]||(p[2]=yt(k=>{var _;return(_=l.value)==null?void 0:_.handleSearch()},["enter"]))},null,8,["value"])]),_:1})]),_:1},8,["query-items","get-data"]),G(wt,{visible:L(u),"onUpdate:visible":p[8]||(p[8]=k=>bt(u)?u.value=k:null),title:L(i),loading:L(m),onSave:L(g)},{default:q(()=>[G(L(Lt),{ref_key:"modalFormRef",ref:y,"label-placement":"left","label-align":"left","label-width":80,model:L(R),disabled:L(s)==="view"},{default:q(()=>[G(L(ze),{label:"角色名",path:"name"},{default:q(()=>[G(L(nn),{value:L(R).name,"onUpdate:value":p[4]||(p[4]=k=>L(R).name=k),placeholder:"请输入角色名称"},null,8,["value"])]),_:1}),G(L(ze),{label:"角色标签",path:"name"},{default:q(()=>[G(L(nn),{value:L(R).label,"onUpdate:value":p[5]||(p[5]=k=>L(R).label=k),placeholder:"请输入角色标签"},null,8,["value"])]),_:1}),f.value?(Je(),Ze(L(ze),{key:0,label:"菜单权限",path:"menu_ids"},{default:q(()=>[G(L(xn),{data:S.value,"checked-keys":L(R).menu_ids,checkable:"","expand-on-click":"","block-line":"","onUpdate:checkedKeys":p[6]||(p[6]=k=>L(R).menu_ids=k)},null,8,["data","checked-keys"])]),_:1})):(Je(),Ze(L(ze),{key:1,label:"资源权限",path:"resource_ids"},{default:q(()=>[G(L(xn),{data:N.value,"checked-keys":L(R).resource_ids,"block-line":"",checkable:"","expand-on-click":"",cascade:"",accordion:"","onUpdate:checkedKeys":p[7]||(p[7]=k=>L(R).resource_ids=k)},null,8,["data","checked-keys"])]),_:1}))]),_:1},8,["model","disabled"])]),_:1},8,["visible","title","loading","onSave"])]),_:1}))}});export{ul as default};
