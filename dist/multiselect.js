import{toRefs as e,ref as t,computed as l,watch as n,nextTick as a,openBlock as u,createBlock as r,withKeys as i,withModifiers as o,createVNode as c,createCommentVNode as s,renderSlot as d,toDisplayString as v,withDirectives as p,vModelText as f,Fragment as h,renderList as m,createTextVNode as b,vShow as y,Transition as g,withCtx as S}from"vue";function w(e){return String(e).toLowerCase().trim()}function O(e){return-1!==[null,void 0,!1].indexOf(e)}function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function q(a,u,r){var i=e(a),o=i.options,c=i.mode,s=i.trackBy,d=i.limit,v=i.hideSelected,p=i.createTag,f=i.label,h=i.appendNewTag,m=i.multipleLabel,b=i.object,y=i.loading,g=i.delay,S=i.resolveOnLoad,q=i.minChars,x=i.filterResults,B=i.clearOnSearch,V=i.clearOnSelect,T=i.valueProp,j=i.canDeselect,M=i.max,A=r.internalValue,E=r.externalValue,C=r.search,I=r.blurSearch,N=r.clearSearch,$=r.update,H=r.blurInput,L=r.pointer,K=t([]),F=t([]),R=t(!1),D=l((function(){var e,t=F.value||[];return e=t,"[object Object]"===Object.prototype.toString.call(e)&&(t=Object.keys(t).map((function(e){var l,n=t[e];return P(l={},T.value,e),P(l,s.value,n),P(l,f.value,n),l}))),t=t.map((function(e,t){var l;return"object"===k(e)?e:(P(l={},T.value,t),P(l,s.value,e),P(l,f.value,e),l)})),K.value.length&&(t=t.concat(K.value)),t})),_=l((function(){var e=D.value;return J.value.length&&(e=J.value.concat(e)),C.value&&x.value&&(e=e.filter((function(e){return-1!==w(e[s.value]).indexOf(w(C.value))}))),v.value&&(e=e.filter((function(e){return!ie(e)}))),d.value>0&&(e=e.slice(0,d.value)),e})),U=l((function(){switch(c.value){case"single":return!O(A.value[T.value]);case"multiple":case"tags":return!O(A.value)&&A.value.length>0}})),W=l((function(){return void 0!==m&&void 0!==m.value?m.value(A.value):A.value&&A.value.length>1?"".concat(A.value.length," options selected"):"1 option selected"})),z=l((function(){return!D.value.length})),G=l((function(){return D.value.length>0&&0==_.value.length})),J=l((function(){var e;return!1!==p.value&&C.value?-1!==re(C.value)?[]:[(e={},P(e,T.value,C.value),P(e,f.value,C.value),P(e,s.value,C.value),e)]:[]})),Q=l((function(){switch(c.value){case"single":return null;case"multiple":case"tags":return[]}})),X=l((function(){return y.value||R.value})),Y=function(e){switch("object"!==k(e)&&(e=ue(e)),c.value){case"single":$(e);break;case"multiple":case"tags":$(A.value.concat(e))}u.emit("select",ee(e))},Z=function(e){switch("object"!==k(e)&&(e=ue(e)),c.value){case"single":te();break;case"tags":case"multiple":$(A.value.filter((function(t){return t[T.value]!=e[T.value]})))}u.emit("deselect",ee(e))},ee=function(e){return b.value?e:e[T.value]},te=function(){$(Q.value)},le=function(e){switch(c.value){case"single":return!O(A.value)&&A.value[T.value]==e[T.value];case"tags":case"multiple":return!O(A.value)&&-1!==A.value.map((function(e){return e[T.value]})).indexOf(e[T.value])}},ne=function(e){return!0===e.disabled},ae=function(){return!(void 0===M||-1===M.value||!U.value&&M.value>0)&&A.value.length>=M.value},ue=function(e){return D.value[D.value.map((function(e){return String(e[T.value])})).indexOf(String(e))]},re=function(e){return D.value.map((function(e){return w(e[s.value])})).indexOf(w(e))},ie=function(e){return"tags"===c.value&&v.value&&le(e)},oe=function(e){K.value.push(e)},ce=function(){O(E.value)||(A.value=de(E.value))},se=function(e){R.value=!0,o.value(C.value).then((function(t){F.value=t,R.value=!1,"function"==typeof e&&e(t)}))},de=function(e){return O(e)?"single"===c.value?{}:[]:b.value?e:"single"===c.value?ue(e)||{}:e.filter((function(e){return!!ue(e)})).map((function(e){return ue(e)}))};if("single"!==c.value&&!O(E.value)&&!Array.isArray(E.value))throw new Error('v-model must be an array when using "'.concat(c.value,'" mode'));return o&&"function"==typeof o.value?S.value?se(ce):1==b.value&&ce():(F.value=o&&o.value?o.value:[],ce()),g.value>-1&&n(C,(function(e){e.length<q.value||(B.value&&(F.value=[]),setTimeout((function(){e==C.value&&(R.value=!0,o.value(C.value).then((function(t){e==C.value&&(F.value=t,L.value=_.value.filter((function(e){return!0!==e.disabled}))[0]||null),R.value=!1})))}),g.value))}),{flush:"sync"}),n(E,(function(e){var t,l,n;if(O(e))A.value=de(e);else switch(c.value){case"single":(b.value?e[T.value]!=A.value[T.value]:e!=A.value[T.value])&&(A.value=de(e));break;case"multiple":case"tags":t=b.value?e.map((function(e){return e[T.value]})):e,l=A.value.map((function(e){return e[T.value]})),n=l.slice().sort(),t.length===l.length&&t.slice().sort().every((function(e,t){return e===n[t]}))||(A.value=de(e))}}),{deep:!0}),n((function(){return a.options}),(function(e){"function"!=typeof a.options&&(F.value=a.options)})),{filteredOptions:_,hasSelected:U,multipleLabelText:W,extendedOptions:D,noOptions:z,noResults:G,busy:X,select:Y,deselect:Z,remove:function(e){Z(e)},clear:te,isSelected:le,isDisabled:ne,isMax:ae,getOption:ue,handleOptionClick:function(e){if(!ne(e))switch(c.value){case"single":if(le(e))return void(j.value&&Z(e));Y(e),I(),H();break;case"multiple":if(le(e))return void Z(e);if(ae())return;Y(e),V.value&&N();break;case"tags":if(le(e))return void Z(e);if(ae())return;void 0===ue(e[T.value])&&p.value&&(u.emit("tag",e[T.value]),h.value&&oe(e),N()),V.value&&N(),Y(e)}},resolveOptions:se}}function x(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return B(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}var V={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1},id:{type:[String,Number],required:!1,default:"multiselect"},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},maxHeight:{type:Number,required:!1,default:160},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1}},setup(u,r){const i=function(l,n){var a=e(l),u=a.value,r=a.modelValue,i=a.mode;return{internalValue:t("single"!==i.value?[]:{}),externalValue:void 0!==n.expose?r:u}}(u,r),o=function(n,a,u){var r=e(n),i=r.searchable,o=r.id;return{multiselect:t(null),tabindex:l((function(){return i.value?-1:0})),blurInput:function(){document.getElementById(o.value).querySelector(".multiselect-input").blur()}}}(u),c={pointer:t(null)},s=function(n,a,u){var r=e(n),i=r.maxHeight,o=r.disabled,c=r.searchable,s=u.multiselect,d=t(!1),v=l((function(){return"".concat(i.value,"px")}));return{isOpen:d,contentMaxHeight:v,open:function(e){o.value||(d.value=!0,a.emit("open"))},close:function(){d.value=!1,a.emit("close")},handleInputMousedown:function(e){d.value&&!c.value&&(s.value.querySelector(".multiselect-input").dispatchEvent(new Event("blur")),s.value.querySelector(".multiselect-input").blur(),e.preventDefault())}}}(u,r,{multiselect:o.multiselect}),d=function(t,l,n){var a=e(t),u=a.object,r=a.valueProp,i=a.mode,o=n.internalValue,c=function(e){return u.value||O(e)?e:Array.isArray(e)?e.map((function(e){return e[r.value]})):e[r.value]},s=function(e){return O(e)?"single"===i.value?{}:[]:e};return{update:function(e){o.value=s(e);var t=c(e);l.emit("change",t),l.emit("input",t),l.emit("update:modelValue",t)}}}(u,r,{internalValue:i.internalValue}),v=function(a,u,r){var i=e(a),o=i.searchable,c=i.mode,s=r.internalValue,d=t(null),v=t(null),p=l((function(){return d.value?"".concat(d.value.length,"ch"):"tags"===c.value&&-1===[null,void 0].indexOf(s.value)&&s.value.length?"1ch":"100%"}));return n(d,(function(e){u.emit("search-change",e)})),{search:d,input:v,tagsSearchWidth:p,clearSearch:function(){d.value=""},blurSearch:function(){o.value&&v.value.blur()}}}(u,r,{internalValue:i.internalValue}),p=q(u,r,{externalValue:i.externalValue,internalValue:i.internalValue,search:v.search,blurSearch:v.blurSearch,clearSearch:v.clearSearch,update:d.update,blurInput:o.blurInput,pointer:c.pointer}),f=function(t,u,r){var i=e(t),o=i.id,c=i.valueProp,s=r.filteredOptions,d=r.handleOptionClick,v=r.search,p=r.pointer,f=l((function(){return s.value.filter((function(e){return!0!==e.disabled}))})),h=function(e){p.value=e},m=function(){p.value=f.value[0]||null},b=function(){p.value=null},y=function(){var e=document.getElementById(o.value).querySelector(".is-pointed");if(e){var t=e.parentElement;e.offsetTop+e.offsetHeight>t.clientHeight+t.scrollTop&&(t.scrollTop=e.offsetTop+e.offsetHeight-t.clientHeight),e.offsetTop<t.scrollTop&&(t.scrollTop=e.offsetTop)}};return n(v,(function(e){m()})),{pointer:p,isPointed:function(e){return!!p.value&&p.value[c.value]==e[c.value]},setPointer:h,setPointerFirst:m,clearPointer:b,selectPointer:function(){p.value&&!0!==p.value.disabled?(d(p.value),b()):b()},forwardPointer:function(){if(null===p.value)h(f.value[0]||null);else{var e=f.value.map((function(e){return e[c.value]})).indexOf(p.value[c.value])+1;f.value.length<=e&&(e=0),h(f.value[e]||null)}a((function(){y()}))},backwardPointer:function(){if(null===p.value)h(f.value[f.value.length-1]||null);else{var e=f.value.map((function(e){return e[c.value]})).indexOf(p.value[c.value])-1;e<0&&(e=f.value.length-1),h(f.value[e]||null)}a((function(){y()}))}}}(u,0,{filteredOptions:p.filteredOptions,handleOptionClick:p.handleOptionClick,search:v.search,pointer:c.pointer}),h=function(t,l,n){var a=e(t).mode,u=n.internalValue,r=n.update,i=n.close,o=n.clearPointer,c=n.search;return{handleBackspace:function(e){"single"!==a.value&&r(x(u.value).slice(0,-1))},handleEsc:function(e){i(),o(),e.target.blur()},handleSearchBackspace:function(e){""!==c.value&&e.stopPropagation()}}}(u,0,{internalValue:i.internalValue,update:d.update,close:s.close,clearPointer:f.clearPointer,search:v.search});return{...i,...s,...o,...c,...d,...v,...p,...f,...h}}};const T={class:"multiselect-single-label"},j={class:"multiselect-multiple-label"},M={key:2,class:"multiselect-search"},A={key:3,class:"multiselect-tags"},E={class:"multiselect-tag"},C={class:"multiselect-spinner"},I={class:"multiselect-no-options"},N={class:"multiselect-no-results"};V.render=function(e,t,l,n,a,w){return u(),r("div",{class:["multiselect",[`is-${l.mode}`,{"is-open":e.isOpen,"is-searchable":l.searchable,"is-disabled":l.disabled,"no-caret":!l.caret}]],id:l.id,onKeydown:t[27]||(t[27]=i(o((()=>{}),["prevent"]),["enter"])),ref:"multiselect"},[c("div",{class:"multiselect-input",tabindex:e.tabindex,onMousedown:t[18]||(t[18]=(...t)=>e.handleInputMousedown&&e.handleInputMousedown(...t)),onFocus:t[19]||(t[19]=(...t)=>e.open&&e.open(...t)),onBlur:t[20]||(t[20]=(...t)=>e.close&&e.close(...t)),onKeyup:[t[21]||(t[21]=i(((...t)=>e.handleEsc&&e.handleEsc(...t)),["esc"])),t[22]||(t[22]=i(((...t)=>e.selectPointer&&e.selectPointer(...t)),["enter"]))],onKeydown:[t[23]||(t[23]=i(o(((...t)=>e.handleBackspace&&e.handleBackspace(...t)),["prevent"]),["delete"])),t[24]||(t[24]=i(o(((...t)=>e.backwardPointer&&e.backwardPointer(...t)),["prevent"]),["up"])),t[25]||(t[25]=i(o(((...t)=>e.forwardPointer&&e.forwardPointer(...t)),["prevent"]),["down"]))]},[s(" Single label "),"single"==l.mode&&e.hasSelected&&!e.search&&e.internalValue?d(e.$slots,"singlelabel",{key:0,value:e.internalValue},(()=>[c("div",T,v(e.internalValue[l.label]),1)])):s("v-if",!0),s(" Multiple label "),"multiple"==l.mode&&e.hasSelected&&!e.search?d(e.$slots,"multiplelabel",{key:1,values:e.internalValue},(()=>[c("div",j,v(e.multipleLabelText),1)])):s("v-if",!0),s(" Search "),"tags"!==l.mode&&l.searchable&&!l.disabled?(u(),r("div",M,[p(c("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.search=t),onFocus:t[2]||(t[2]=o(((...t)=>e.open&&e.open(...t)),["stop"])),onBlur:t[3]||(t[3]=o(((...t)=>e.close&&e.close(...t)),["stop"])),onKeyup:[t[4]||(t[4]=i(o(((...t)=>e.handleEsc&&e.handleEsc(...t)),["stop"]),["esc"])),t[5]||(t[5]=i(o(((...t)=>e.selectPointer&&e.selectPointer(...t)),["stop"]),["enter"]))],onKeydown:[t[6]||(t[6]=i(((...t)=>e.handleSearchBackspace&&e.handleSearchBackspace(...t)),["delete"])),t[7]||(t[7]=i(o(((...t)=>e.backwardPointer&&e.backwardPointer(...t)),["stop"]),["up"])),t[8]||(t[8]=i(o(((...t)=>e.forwardPointer&&e.forwardPointer(...t)),["stop"]),["down"]))],ref:"input"},null,544),[[f,e.search]])])):s("v-if",!0),s(" Tags (with search) "),"tags"==l.mode?(u(),r("div",A,[(u(!0),r(h,null,m(e.internalValue,((n,a,i)=>(u(),r("span",{key:i},[d(e.$slots,"tag",{option:n,remove:e.remove,disabled:l.disabled},(()=>[c("div",E,[b(v(n[l.label])+" ",1),l.disabled?s("v-if",!0):(u(),r("i",{key:0,onClick:t[9]||(t[9]=o((()=>{}),["prevent"])),onMousedown:o((t=>e.remove(n)),["prevent","stop"])},null,40,["onMousedown"]))])]))])))),128)),l.searchable&&!l.disabled?(u(),r("div",{key:0,class:"multiselect-search",style:{width:e.tagsSearchWidth}},[p(c("input",{"onUpdate:modelValue":t[10]||(t[10]=t=>e.search=t),onFocus:t[11]||(t[11]=o(((...t)=>e.open&&e.open(...t)),["stop"])),onBlur:t[12]||(t[12]=o(((...t)=>e.close&&e.close(...t)),["stop"])),onKeyup:[t[13]||(t[13]=i(o(((...t)=>e.handleEsc&&e.handleEsc(...t)),["stop"]),["esc"])),t[14]||(t[14]=i(o(((...t)=>e.selectPointer&&e.selectPointer(...t)),["stop"]),["enter"]))],onKeydown:[t[15]||(t[15]=i(((...t)=>e.handleSearchBackspace&&e.handleSearchBackspace(...t)),["delete"])),t[16]||(t[16]=i(o(((...t)=>e.backwardPointer&&e.backwardPointer(...t)),["stop"]),["up"])),t[17]||(t[17]=i(o(((...t)=>e.forwardPointer&&e.forwardPointer(...t)),["stop"]),["down"]))],style:{width:e.tagsSearchWidth},ref:"input"},null,36),[[f,e.search]])],4)):s("v-if",!0)])):s("v-if",!0),s(" Placeholder "),p(c("div",{class:"multiselect-placeholder"},v(l.placeholder),513),[[y,l.placeholder&&!e.hasSelected&&!e.search]]),c(g,{name:"multiselect-loading"},{default:S((()=>[p(c("div",C,null,512),[[y,e.busy]])])),_:1})],40,["tabindex"]),s(" Options "),c(g,{name:"multiselect",onAfterLeave:e.clearSearch},{default:S((()=>[p(c("div",{class:"multiselect-options",style:{maxHeight:e.contentMaxHeight}},[d(e.$slots,"beforelist"),(u(!0),r(h,null,m(e.filteredOptions,((n,a,i)=>(u(),r("a",{href:"",class:["multiselect-option",{"is-pointed":e.isPointed(n),"is-selected":e.isSelected(n),"is-disabled":e.isDisabled(n)}],key:i,onMousedown:t[26]||(t[26]=o((()=>{}),["prevent"])),onMouseenter:t=>e.setPointer(n),onClick:o((t=>e.handleOptionClick(n)),["stop","prevent"])},[d(e.$slots,"option",{option:n,search:e.search},(()=>[c("span",null,v(n[l.label]),1)]))],42,["onMouseenter","onClick"])))),128)),p(c("span",null,[d(e.$slots,"nooptions",{},(()=>[c("div",I,v(l.noOptionsText),1)]))],512),[[y,e.noOptions]]),p(c("span",null,[d(e.$slots,"noresults",{},(()=>[c("div",N,v(l.noResultsText),1)]))],512),[[y,e.noResults]]),d(e.$slots,"afterlist")],4),[[y,e.isOpen]])])),_:3},8,["onAfterLeave"])],42,["id"])},V.__file="src/Multiselect.vue";export default V;
