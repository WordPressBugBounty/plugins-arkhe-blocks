(()=>{var e={1991:(e,t)=>{var n;!function(){"use strict";var a=function(){function e(){}function t(e,t){for(var n=t.length,a=0;a<n;++a)l(e,t[a])}e.prototype=Object.create(null);var n={}.hasOwnProperty,a=/\s+/;function l(e,l){if(l){var r=typeof l;"string"===r?function(e,t){for(var n=t.split(a),l=n.length,r=0;r<l;++r)e[n[r]]=!0}(e,l):Array.isArray(l)?t(e,l):"object"===r?function(e,t){if(t.toString===Object.prototype.toString||t.toString.toString().includes("[native code]"))for(var a in t)n.call(t,a)&&(e[a]=!!t[a]);else e[t.toString()]=!0}(e,l):"number"===r&&function(e,t){e[t]=!0}(e,l)}}return function(){for(var n=arguments.length,a=Array(n),l=0;l<n;l++)a[l]=arguments[l];var r=new e;t(r,a);var o=[];for(var c in r)r[c]&&o.push(c);return o.join(" ")}}();e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},4184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var o=l.apply(null,n);o&&e.push(o)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()}},t={};function n(a){var l=t[a];if(void 0!==l)return l.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React,t=window.wp.i18n,a=window.wp.blocks,l=window.wp.blockEditor,r=window.wp.element,o="function"==typeof l.useInnerBlocksProps?l.useInnerBlocksProps:l.__experimentalUseInnerBlocksProps,c=JSON.parse('{"u2":"arkhe-blocks/container"}'),i={container:(0,e.createElement)("svg",{viewBox:"0 0 56 56"},(0,e.createElement)("path",{d:"M49,34H24c-1.1,0-2-0.9-2-2V7c0-1.1,0.9-2,2-2h25c1.1,0,2,0.9,2,2v25C51,33.1,50.1,34,49,34z M25,32h23c0.6,0,1-0.4,1-1V8 c0-0.6-0.4-1-1-1H25c-0.6,0-1,0.4-1,1v23C24,31.6,24.4,32,25,32z"}),(0,e.createElement)("path",{d:"M32,51H7c-1.1,0-2-0.9-2-2V24c0-1.1,0.9-2,2-2h25c1.1,0,2,0.9,2,2v25C34,50.1,33.1,51,32,51z M8,49h23c0.6,0,1-0.4,1-1V25 c0-0.6-0.4-1-1-1H8c-0.6,0-1,0.4-1,1v23C7,48.6,7.4,49,8,49z"})),horizontal:(0,e.createElement)("svg",{viewBox:"0 0 56 56"},(0,e.createElement)("path",{d:"M50,43H34c-1.1,0-2-0.9-2-2V15c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v26C52,42.1,51.1,43,50,43z M35,41h14c0.6,0,1-0.4,1-1V16 c0-0.6-0.4-1-1-1H35c-0.6,0-1,0.4-1,1v24C34,40.6,34.4,41,35,41z"}),(0,e.createElement)("path",{d:"M22,43H6c-1.1,0-2-0.9-2-2V15c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v26C24,42.1,23.1,43,22,43z M7,41h14c0.6,0,1-0.4,1-1V16 c0-0.6-0.4-1-1-1H7c-0.6,0-1,0.4-1,1v24C6,40.6,6.4,41,7,41z"})),vertical:(0,e.createElement)("svg",{viewBox:"0 0 56 56"},(0,e.createElement)("path",{d:"M13,50V34c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2v16c0,1.1-0.9,2-2,2H15C13.9,52,13,51.1,13,50z M15,35v14c0,0.6,0.4,1,1,1h24 c0.6,0,1-0.4,1-1V35c0-0.6-0.4-1-1-1H16C15.4,34,15,34.4,15,35z"}),(0,e.createElement)("path",{d:"M13,22V6c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2v16c0,1.1-0.9,2-2,2H15C13.9,24,13,23.1,13,22z M15,7v14c0,0.6,0.4,1,1,1h24 c0.6,0,1-0.4,1-1V7c0-0.6-0.4-1-1-1H16C15.4,6,15,6.4,15,7z"}))};var s=n(4184),m=n.n(s);const u="ark-block-container",p=[{supports:{anchor:!0,className:!1,align:["wide","full"],color:{gradients:!0,__experimentalDefaultControls:{background:!0,text:!0}}},attributes:{layout:{type:"object"},templateLock:{type:["string","boolean"],enum:["all","insert",!1]},tagName:{type:"string",default:"div"},hasInner:{type:"boolean",default:!1},gap:{type:"object"},padding:{type:"object"}},migrate:e=>{const t={...e};return t.hasInnerSpace=!0,t.version="2",t},save:({attributes:t})=>{const{layout:n,hasInner:a,tagName:r="div"}=t,o="flex"===n?.type,c=l.useBlockProps.save({className:m()(u,{"has-inner":a,"ark-keep-mt":!a&&!o}),"data-flex":n?.orientation||null});return(0,e.createElement)(r,{...c},!a&&(0,e.createElement)(l.InnerBlocks.Content,null),a&&(0,e.createElement)("div",{className:m()(`${u}__inner`,{"ark-keep-mt":!o})},(0,e.createElement)(l.InnerBlocks.Content,null)))}}],g=window.wp.components;function d({style:t}){if(!r.Platform.isWeb)return null;const n=void 0!==l.BlockList.__unstableElementContext?(0,r.useContext)(l.BlockList.__unstableElementContext):document.querySelector("head");return t&&n?(0,r.createPortal)((0,e.createElement)((()=>(0,e.createElement)("style",null,t)),null),n):null}const h=({layout:t,defaultValue:n="left",onChange:a})=>{const{justifyContent:r=n,orientation:o="horizontal"}=t,c=["left","center","right"];return"horizontal"===o&&c.push("space-between"),(0,e.createElement)(l.JustifyContentControl,{allowedControls:c,value:r,onChange:e=>{a({...t,justifyContent:e})}})},b=({layout:t,onChange:n,defaultValue:a="center"})=>{const{verticalAlignment:r=a}=t;return(0,e.createElement)(l.BlockVerticalAlignmentControl,{onChange:e=>{n({...t,verticalAlignment:e})},value:r})},v=(0,e.createElement)("svg",{viewBox:"0 0 40 40","aria-hidden":"true",width:"20",height:"20"},(0,e.createElement)("polygon",{points:"38.3,39 36.3,39 36.3,33.5 3.7,33.5 3.7,39 1.7,39 1.7,31.5 38.3,31.5 "}),(0,e.createElement)("g",null,(0,e.createElement)("rect",{x:"19",y:"6",width:"2",height:"18"}),(0,e.createElement)("polygon",{points:"20,1 12,7.1 28,7.1 \t"}),(0,e.createElement)("polygon",{points:"20,28.9 28,22.7 12,22.7 \t"})));function k(e,t){return-1!==e.split(" ").indexOf(t)}var E=n(1991),f=n.n(E);const _=[{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"0",title:"0",mbClass:"u-mt-0"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"0.5rem",title:"0.5rem",mbClass:"u-mt-5"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"1rem",title:"1rem",mbClass:"u-mt-10"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"1.5rem",title:"1.5rem",mbClass:"u-mt-15"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"2rem",title:"2rem",mbClass:"u-mt-20"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"3rem",title:"3rem",mbClass:"u-mt-30"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"4rem",title:"4rem",mbClass:"u-mt-40"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"6rem",title:"6rem",mbClass:"u-mt-60"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"8rem",title:"8rem",mbClass:"u-mt-80"}],C=_.map((e=>e.mbClass)),w=(0,r.memo)((({className:n,setAttributes:a})=>{if(!window.arkbSettings?.isArkhe)return null;const l=n||"";let r;_.forEach((e=>{k(l,e.mbClass)&&(r=e)}));const o=r?r.mbClass:"";return(0,e.createElement)(g.ToolbarGroup,{className:"arkb-toolbar",isCollapsed:!0,icon:r?(0,e.createElement)("span",{className:"arkb-toolbtn--margin"},v,r.size):v,label:(0,t.__)("Margins on the block","arkhe-blocks"),controls:_.map((e=>{const{mbClass:t}=e,n=o===t;return{...e,isActive:n,onClick:()=>{const e=function(e,t,n,a=""){if(k(e,t))return e;let l;if(n){const r={};n.map((e=>{r[e]=!1})),a&&(r[a]=!1),l=f()(e,r),t&&(l=f()(l,a,t))}else t&&(l=f()(e,t));return l}(l,n?"":t,C);a({className:e})}}}))})})),x=window.wp.primitives,B=(0,e.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(x.Path,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"})),y=(0,e.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(x.Path,{d:"m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z"})),N=({layout:n,onChange:a})=>{const{orientation:l="horizontal"}=n;return(0,e.createElement)("fieldset",{className:"block-editor-hooks__flex-layout-orientation-controls"},(0,e.createElement)("legend",null,(0,t.__)("Orientation")),(0,e.createElement)(g.Button,{label:"horizontal",icon:B,isPressed:"horizontal"===l,onClick:()=>a({...n,orientation:"horizontal"})}),(0,e.createElement)(g.Button,{label:"vertical",icon:y,isPressed:"vertical"===l,onClick:()=>a({...n,orientation:"vertical"})}))},M=({layout:n,onChange:a})=>{const{flexWrap:l="wrap"}=n;return(0,e.createElement)(g.ToggleControl,{label:(0,t.__)("Allow to wrap to multiple lines"),onChange:e=>{a({...n,flexWrap:e?"wrap":"nowrap"})},checked:"wrap"===l})},A=window.wp.compose,z="function"==typeof l.UnitControl?l.UnitControl:l.__experimentalUnitControl,S=["px","rem","em","%","vw","vh"],V=({value:n,units:a,min:l,max:r,onChange:o,defaultUnit:c,steps:i,className:s="",widthRange:u=!1,onClear:p=null})=>{const d=a||S,{num:h,unit:b}=((e,t)=>{if(!e)return{num:"",unit:t||"px"};const n=e.toString(),a=n.replace(/[^0-9\.]/g,""),l=n.replace(/[0-9\.]/g,"");return{num:parseFloat(a),unit:l}})(n,c),v=(0,A.useInstanceId)(z);let k,E="0.1";return i&&i[b]?E=i[b]:"px"===b?E="1":"rem"!==b&&"em"!==b||(E="0.05"),null!==r&&"object"==typeof r?void 0!==r[b]?k=r[b]:void 0!==r.other&&(k=r.other):void 0!==r&&(k=r),(0,e.createElement)("div",{className:m()("arkb-unitNumber",s,{"has-clear":!!p})},(0,e.createElement)(z,{id:v,value:n||c||"px",min:l||0,max:k||void 0,step:E,units:d.map((e=>({label:e,value:e}))),onBlur:null,onChange:e=>{o(e)}}),u&&(0,e.createElement)(g.RangeControl,{value:h,onChange:e=>{o(`${e}${b}`)},initialPosition:h,withInputField:!1,step:E,min:l||0,max:k||void 0}),p&&(0,e.createElement)(g.Button,{isSmall:!0,isSecondary:!0,text:(0,t.__)("Clear"),onClick:()=>{p()}}))},P=(0,r.forwardRef)((function({icon:e,size:t=24,...n},a){return(0,r.cloneElement)(e,{width:t,height:t,...n,ref:a})})),H=(0,e.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(x.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),T=(0,e.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(x.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),I=(0,e.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(x.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})),$=({className:t,controlPC:n,controlSP:a,controlTab:l,controlMB:r,isHideTab:o})=>{const c=[{name:"pc",title:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(P,{icon:H}),(0,e.createElement)("span",null,"PC")),className:"__pc"}];l&&c.push({name:"tab",title:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(P,{icon:T}),(0,e.createElement)("span",null,"Tab")),className:"__tab"}),r&&c.push({name:"mb",title:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(P,{icon:I}),(0,e.createElement)("span",null,"Mobile")),className:"__mb"}),a&&c.push({name:"sp",title:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(P,{icon:I}),(0,e.createElement)("span",null,"SP")),className:"__sp"});let i="arkb-tabPanel -device";return t&&(i+=` ${t}`),o&&(i+=" is-hide"),(0,e.createElement)(g.TabPanel,{className:i,activeClass:"is-active",tabs:c,initialTabName:"pc"},(e=>"pc"===e.name?n:"tab"===e.name?l:"mb"===e.name?r:"sp"===e.name?a:void 0))},j=(0,e.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(x.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})),L=(0,e.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(x.Path,{d:"M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"})),O=({isLinked:n,...a})=>{const l=n?(0,t.__)("Unlink Sides"):(0,t.__)("Link Sides");return(0,e.createElement)(g.Tooltip,{text:l},(0,e.createElement)("span",{className:"__link"},(0,e.createElement)(g.Button,{...a,className:"component-box-control__linked-button",variant:n?"primary":"secondary",isSmall:!0,icon:n?j:L,iconSize:16,"aria-label":l})))},F=(0,r.memo)((({name:n,value:a,setAttributes:l,help:o,successionHelp:c,nullValue:i,resetValue:s,defaultUnit:m="rem",defaultOpen:u=!1,clearable:p=!1,isMargin:d=!1})=>{const[h,b]=(0,r.useState)(!u&&(e=>{const t=[e?.top,e?.right,e?.bottom,e?.left];return t.every((e=>e===t[0]))})(a)),v=d?-9999:0;let k=o||"";!c||d||h?c&&(k=(0,t.sprintf)((0,t.__)("If empty, %s is taken over","arkhe-blocks"),c)):k=(0,t.sprintf)((0,t.__)("If all are empty, %s will be taken over","arkhe-blocks"),c);const E=(e,t)=>{const r=e||i||void 0;if(h)l(void 0===(o=r)?{[n]:void 0}:{[n]:{...a,top:o,left:o,right:o,bottom:o}});else{const e={...a};void 0===r?delete e[t]:e[t]=r,Object.keys(e).length?l({[n]:e}):l({[n]:void 0})}var o};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:"arkb-ctrl--space"},(0,e.createElement)("div",{className:"__inner","data-is-linked":h},!d&&(0,e.createElement)(O,{onClick:()=>{b(!h)},isLinked:h}),(0,e.createElement)("div",{className:"__center"},(0,e.createElement)("span",{className:"__box--top"}),(0,e.createElement)("span",{className:"__box--left"}),(0,e.createElement)("span",{className:"__box--right"}),(0,e.createElement)("span",{className:"__box--bottom"})),(0,e.createElement)(V,{className:"__top",value:a?.top||m,min:v,onChange:e=>{E(e,"top")}}),(0,e.createElement)(V,{className:"__bottom",value:a?.bottom||m,min:v,onChange:e=>{E(e,"bottom")}}),(0,e.createElement)(V,{className:"__left",value:a?.left||m,min:v,onChange:e=>{E(e,"left")}}),(0,e.createElement)(V,{className:"__right",value:a?.right||m,min:v,onChange:e=>{E(e,"right")}})),k&&(0,e.createElement)("p",{className:"arkb-helpText u-arkb--mt--5"},k),p&&(0,e.createElement)(g.Button,{className:"__clear",isSmall:!0,variant:"secondary",text:(0,t.__)("Clear"),onClick:()=>{l({[n]:void 0})}}),s&&(0,e.createElement)(g.Button,{className:"__clear",isSmall:!0,variant:"secondary",text:(0,t.__)("Reset","arkhe-blocks"),onClick:()=>{l({[n]:s})}})))}));function G(e,t){return`${e?.top||t} ${e?.right||t} ${e?.bottom||t} ${e?.left||t}`}function U(e){let t="";return Object.keys(e).forEach((n=>{const a=e[n];""!==a&&(t+=`${n}:${a};`)})),t}function W(e,t){let n="",a="";return t?.all&&(a=U(t.all),a&&(n+=`${e}{${a}}`)),t?.pc&&(a=U(t.pc),a&&(n+=`\n\t\t\t@media (min-width: 1000px) {\n\t\t\t\t${e}{${a}}\n\t\t\t}`)),t?.sp&&(a=U(t.sp),a&&(n+=`\n\t\t\t@media not all and (min-width: 1000px) {\n\t\t\t\t${e}{${a}}\n\t\t\t}`)),t?.tab&&(a=U(t.tab),a&&(n+=`\n\t\t\t@media (min-width: 600px) {\n\t\t\t\t${e}{${a}}\n\t\t\t}`)),t?.mb&&(a=U(t.mb),a&&(n+=`\n\t\t\t@media not all and (min-width: 600px) {\n\t\t\t\t${e}{${a}}\n\t\t\t}`)),n}function R(e,t={}){let{orientation:n=t?.orientation||"horizontal",justifyContent:a=t?.justifyContent||"left",verticalAlignment:l=t?.verticalAlignment||"center",flexWrap:r=t?.flexWrap||"wrap"}=e;"left"===a?a="flex-start":"right"===a&&(a="flex-end");let o={};return"horizontal"===n?("top"===l?l="flex-start":"bottom"===l&&(l="flex-end"),o={"justify-content":a,"align-items":l,"flex-wrap":r}):o={"align-items":a,"flex-wrap":r},o}const Z=({attributes:n,setAttributes:a,clientId:r})=>{const{layout:o={},tagName:c="div",gap:i,padding:s,paddingTAB:m,paddingMB:u,margin:p,marginTAB:v,marginMB:k,hasInner:E,hasInnerSpace:f}=n,{type:_="",orientation:C=""}=o,x="flex"===_,B="horizontal"===C,y=W(`#block-${r}`,{all:{...R(o),"--arkb-gap":i?.x||""}}),A=W(E&&f?`#block-${r} > .ark-block-container__inner`:`#block-${r}`,function({padding:e,paddingTAB:t,paddingMB:n,margin:a,marginTAB:l,marginMB:r}){return{all:{"--arkb-padding":e?G(e,"0"):"","--arkb-margin--top":a?.top||"","--arkb-margin--left":a?.left||"","--arkb-margin--right":a?.right||"","--arkb-margin--bottom":a?.bottom||""},sp:{"--arkb-padding":t?G(t,"0"):"","--arkb-margin--top":l?.top||"","--arkb-margin--left":l?.left||"","--arkb-margin--right":l?.right||"","--arkb-margin--bottom":l?.bottom||""},mb:{"--arkb-padding":n?G(n,"0"):"","--arkb-margin--top":r?.top||"","--arkb-margin--left":r?.left||"","--arkb-margin--right":r?.right||"","--arkb-margin--bottom":r?.bottom||""}}}({padding:s,paddingTAB:m,paddingMB:u,margin:p,marginTAB:v,marginMB:k})),z=e=>a({layout:e});return(0,e.createElement)(e.Fragment,null,y&&(0,e.createElement)(d,{style:y}),A&&(0,e.createElement)(d,{style:A}),x&&(0,e.createElement)(l.BlockControls,{group:"block"},(0,e.createElement)(h,{layout:o,onChange:z}),B&&(0,e.createElement)(b,{layout:o,onChange:z})),(0,e.createElement)(l.BlockControls,null,(0,e.createElement)(w,{className:n.className,setAttributes:a})),(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(g.PanelBody,{title:(0,t.__)("Layout"),initialOpen:!0},(0,e.createElement)(g.ToggleControl,{label:(0,t.__)('Turn on "Flex"',"arkhe-blocks"),onChange:e=>{z(e?{...o,type:"flex",orientation:"horizontal",flexWrap:"nowrap"}:void 0)},checked:x}),x&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(N,{layout:o,onChange:z}),(0,e.createElement)(M,{layout:o,onChange:z}),(0,e.createElement)(g.BaseControl,{__nextHasNoMarginBottom:!0,className:"u-mb-25"},(0,e.createElement)(g.BaseControl.VisualLabel,null,(0,t.__)("Gap between blocks","arkhe-blocks")),(0,e.createElement)(V,{value:i?.x||"rem",onChange:e=>{a({gap:{x:e,y:e}})},onClear:()=>{a({gap:void 0})}})))),(0,e.createElement)(g.PanelBody,{title:(0,t.__)("Settings","arkhe-blocks")},(0,e.createElement)(g.ToggleControl,{label:(0,t.__)("Use inner <div>","arkhe-blocks"),checked:E,onChange:e=>{a({hasInner:e})}}),(0,e.createElement)(g.SelectControl,{label:(0,t.__)("HTML element"),options:[{label:"<div>",value:"div"},{label:"<section>",value:"section"}],value:c,onChange:e=>a({tagName:e})})),(0,e.createElement)(g.PanelBody,{title:(0,t.__)("Space Settings","arkhe-blocks")},E&&(0,e.createElement)(g.ToggleControl,{label:(0,t.__)("Apply space settings to the inner","arkhe-blocks"),checked:f,onChange:e=>{a({hasInnerSpace:e})}}),(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(g.BaseControl.VisualLabel,null,(0,t.__)("Padding","arkhe-blocks")),(0,e.createElement)($,{className:"-triple",controlPC:(0,e.createElement)(F,{name:"padding",value:s,setAttributes:a,clearable:!0}),controlTab:(0,e.createElement)(F,{name:"paddingTAB",value:m,setAttributes:a,clearable:!0,successionHelp:(0,t.__)("PC setting","arkhe-blocks")}),controlMB:(0,e.createElement)(F,{name:"paddingMB",value:u,setAttributes:a,clearable:!0,successionHelp:(0,t.__)("Tablet setting","arkhe-blocks")})})),(0,e.createElement)(g.BaseControl,null,(0,e.createElement)(g.BaseControl.VisualLabel,null,(0,t.__)("Margin","arkhe-blocks")),(0,e.createElement)($,{className:"-triple",controlPC:(0,e.createElement)(F,{isMargin:!0,name:"margin",value:p,setAttributes:a,clearable:!0,defaultOpen:!0}),controlTab:(0,e.createElement)(F,{isMargin:!0,name:"marginTAB",value:v,setAttributes:a,clearable:!0,defaultOpen:!0,successionHelp:(0,t.__)("PC setting","arkhe-blocks")}),controlMB:(0,e.createElement)(F,{isMargin:!0,name:"marginMB",value:k,setAttributes:a,clearable:!0,defaultOpen:!0,successionHelp:(0,t.__)("Tablet setting","arkhe-blocks")})})))))},J=({anchor:t="",className:n="",icon:a=null})=>{let l="";if(n){let e=n.split(" ");e=e.filter((e=>!e.startsWith("is-style-"))),l=e.join(".")}return t||l?(0,e.createElement)("span",{className:"lsSelectorPreview"},a&&(0,e.createElement)(g.Icon,{icon:a,className:"__icon"}),(0,e.createElement)("span",{className:"__selectors"},t&&(0,e.createElement)("span",{className:"__id"},`#${t}`),l&&(0,e.createElement)("span",{className:"__class"},`.${l}`))):null},q=({padding:e,paddingTAB:t,paddingMB:n,margin:a,marginTAB:l,marginMB:r})=>m()({"arkb-has-padding":!!e||!!t||!!n,"arkb-has-margin":!!a||!!l||!!r}),D="ark-block-container";(0,a.registerBlockType)(c.u2,{title:(0,t.__)("Container","arkhe-blocks"),icon:i.container,transforms:{from:[{type:"block",blocks:["core/group"],transform:(e,t)=>{const n=t,l={tagName:e.tagName};return(0,a.createBlock)(c.u2,l,n)}}]},edit:({clientId:t,attributes:n,setAttributes:a})=>{const{layout:c={},templateLock:s,tagName:u="div",padding:p,paddingTAB:g,paddingMB:d,margin:h,marginTAB:b,marginMB:v,hasInner:k,hasInnerSpace:E}=n;(0,r.useEffect)((()=>{"2"!==n.version&&a({version:"2"})}),[]);const f="flex"===c?.type,_=q({padding:p,paddingTAB:g,paddingMB:d,margin:h,marginTAB:b,marginMB:v});if(k){let r=m()(D,"has-inner","ark-has-guide"),p=m()(`${D}__inner`,{"ark-keep-mt":!f});E?p=m()(p,_):r=m()(r,_);const g=(0,l.useBlockProps)({className:r,"data-flex":c?.orientation||null}),d=o({className:p},{template:[["core/paragraph"]],templateLock:s,__experimentalLayout:c});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(Z,{clientId:t,attributes:n,setAttributes:a}),(0,e.createElement)(u,{...g},(0,e.createElement)(J,{icon:i.container,anchor:n.anchor,className:n.className}),(0,e.createElement)("div",{...d})))}const C=(0,l.useBlockProps)({className:m()(D,"ark-has-guide",_,{"ark-keep-mt":!f}),"data-flex":c?.orientation||null}),w=o(C,{template:[["core/paragraph"]],templateLock:s,__experimentalLayout:c}),{children:x,...B}=w;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(Z,{clientId:t,attributes:n,setAttributes:a}),(0,e.createElement)(u,{...B},(0,e.createElement)(J,{icon:i.container,anchor:n.anchor,className:n.className}),x))},save:({attributes:t})=>{const{layout:n,hasInner:a,hasInnerSpace:r,padding:o,paddingTAB:c,paddingMB:i,margin:s,marginTAB:u,marginMB:p,tagName:g="div"}=t,d="flex"===n?.type,h=q({padding:o,paddingTAB:c,paddingMB:i,margin:s,marginTAB:u,marginMB:p});if(a){let t=m()(D,"has-inner"),a=m()(`${D}__inner`,{"ark-keep-mt":!d});r?a=m()(a,h):t=m()(t,h);const o=l.useBlockProps.save({className:t,"data-flex":n?.orientation||null});return(0,e.createElement)(g,{...o},(0,e.createElement)("div",{className:a},(0,e.createElement)(l.InnerBlocks.Content,null)))}const b=l.useBlockProps.save({className:m()(D,h,{"ark-keep-mt":!d}),"data-flex":n?.orientation||null});return(0,e.createElement)(g,{...b},(0,e.createElement)(l.InnerBlocks.Content,null))},deprecated:p})})()})();