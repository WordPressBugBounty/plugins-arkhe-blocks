(()=>{var e={1991:(e,t)=>{var n;!function(){"use strict";var a=function(){function e(){}function t(e,t){for(var n=t.length,a=0;a<n;++a)r(e,t[a])}e.prototype=Object.create(null);var n={}.hasOwnProperty,a=/\s+/;function r(e,r){if(r){var c=typeof r;"string"===c?function(e,t){for(var n=t.split(a),r=n.length,c=0;c<r;++c)e[n[c]]=!0}(e,r):Array.isArray(r)?t(e,r):"object"===c?function(e,t){if(t.toString===Object.prototype.toString||t.toString.toString().includes("[native code]"))for(var a in t)n.call(t,a)&&(e[a]=!!t[a]);else e[t.toString()]=!0}(e,r):"number"===c&&function(e,t){e[t]=!0}(e,r)}}return function(){for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var c=new e;t(c,a);var l=[];for(var o in c)c[o]&&l.push(o);return l.join(" ")}}();e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React,t=window.wp.i18n,a=window.wp.data,r=window.wp.blocks,c=window.wp.blockEditor,l=window.wp.components,o="function"==typeof c.useInnerBlocksProps?c.useInnerBlocksProps:c.__experimentalUseInnerBlocksProps,s=JSON.parse('{"u2":"arkhe-blocks/accordion"}'),i={name:"arkhe-blocks/accordion-item",attributes:{title:"Accordion Title."},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}}]},m={innerBlocks:[i,i]},u=(0,e.createElement)("svg",{viewBox:"0 0 56 56"},(0,e.createElement)("path",{d:"M45.8,17.2v-1.4c0-0.1-0.1-0.2-0.2-0.2h-2.3c-0.1,0-0.2-0.1-0.2-0.2V13c0-0.1-0.1-0.2-0.2-0.2h-1.4 c-0.1,0-0.2,0.1-0.2,0.2v2.3c0,0.1-0.1,0.2-0.2,0.2h-2.3c-0.1,0-0.2,0.1-0.2,0.2v1.4c0,0.1,0.1,0.2,0.2,0.2h2.3 c0.1,0,0.2,0.1,0.2,0.2V20c0,0.1,0.1,0.2,0.2,0.2h1.4c0.1,0,0.2-0.1,0.2-0.2v-2.3c0-0.1,0.1-0.2,0.2-0.2h2.3 C45.6,17.5,45.8,17.3,45.8,17.2z"}),(0,e.createElement)("path",{d:"M51,25.5H5c-0.6,0-1-0.4-1-1v-16c0-0.6,0.4-1,1-1h46c0.6,0,1,0.4,1,1v16C52,25.1,51.6,25.5,51,25.5z M6,23.5 h44v-14H6V23.5z"}),(0,e.createElement)("path",{d:"M45.8,40.2v-1.4c0-0.1-0.1-0.2-0.2-0.2h-2.3c-0.1,0-0.2-0.1-0.2-0.2V36c0-0.1-0.1-0.2-0.2-0.2h-1.4 c-0.1,0-0.2,0.1-0.2,0.2v2.3c0,0.1-0.1,0.2-0.2,0.2h-2.3c-0.1,0-0.2,0.1-0.2,0.2v1.4c0,0.1,0.1,0.2,0.2,0.2h2.3 c0.1,0,0.2,0.1,0.2,0.2V43c0,0.1,0.1,0.2,0.2,0.2h1.4c0.1,0,0.2-0.1,0.2-0.2v-2.3c0-0.1,0.1-0.2,0.2-0.2h2.3 C45.6,40.5,45.8,40.3,45.8,40.2z"}),(0,e.createElement)("path",{d:"M51,48.5H5c-0.6,0-1-0.4-1-1v-16c0-0.6,0.4-1,1-1h46c0.6,0,1,0.4,1,1v16C52,48.1,51.6,48.5,51,48.5z M6,46.5 h44v-14H6V46.5z"})),p=[{supports:{anchor:!0,className:!1},attributes:{},migrate:e=>{const t={...e};return t.iconType="plus",t},save:()=>{const t=c.useBlockProps.save({className:"ark-block-accordion"});return(0,e.createElement)("div",{...t},(0,e.createElement)(c.InnerBlocks.Content,null))}}],d=window.wp.element,b=(0,e.createElement)("svg",{viewBox:"0 0 40 40","aria-hidden":"true",width:"20",height:"20"},(0,e.createElement)("polygon",{points:"38.3,39 36.3,39 36.3,33.5 3.7,33.5 3.7,39 1.7,39 1.7,31.5 38.3,31.5 "}),(0,e.createElement)("g",null,(0,e.createElement)("rect",{x:"19",y:"6",width:"2",height:"18"}),(0,e.createElement)("polygon",{points:"20,1 12,7.1 28,7.1 \t"}),(0,e.createElement)("polygon",{points:"20,28.9 28,22.7 12,22.7 \t"})));function k(e,t){return-1!==e.split(" ").indexOf(t)}var h=n(1991),v=n.n(h);const E=[{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"0",title:"0",mbClass:"u-mt-0"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"0.5rem",title:"0.5rem",mbClass:"u-mt-5"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"1rem",title:"1rem",mbClass:"u-mt-10"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"1.5rem",title:"1.5rem",mbClass:"u-mt-15"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"2rem",title:"2rem",mbClass:"u-mt-20"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"3rem",title:"3rem",mbClass:"u-mt-30"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"4rem",title:"4rem",mbClass:"u-mt-40"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"6rem",title:"6rem",mbClass:"u-mt-60"},{icon:(0,e.createElement)("span",{className:"arkb-null-icon"}),size:"8rem",title:"8rem",mbClass:"u-mt-80"}],f=E.map((e=>e.mbClass)),w=(0,d.memo)((({className:n,setAttributes:a})=>{if(!window.arkbSettings?.isArkhe)return null;const r=n||"";let c;E.forEach((e=>{k(r,e.mbClass)&&(c=e)}));const o=c?c.mbClass:"";return(0,e.createElement)(l.ToolbarGroup,{className:"arkb-toolbar",isCollapsed:!0,icon:c?(0,e.createElement)("span",{className:"arkb-toolbtn--margin"},b,c.size):b,label:(0,t.__)("Margins on the block","arkhe-blocks"),controls:E.map((e=>{const{mbClass:t}=e,n=o===t;return{...e,isActive:n,onClick:()=>{const e=function(e,t,n,a=""){if(k(e,t))return e;let r;if(n){const c={};n.map((e=>{c[e]=!1})),a&&(c[a]=!1),r=v()(e,c),t&&(r=v()(r,a,t))}else t&&(r=v()(e,t));return r}(r,n?"":t,f);a({className:e})}}}))})})),g=[{name:"plus"},{name:"caret"},{name:"triangle"}],y="ark-block-accordion";(0,r.registerBlockType)(s.u2,{title:(0,t.__)("Accordion","arkhe-blocks"),description:(0,t.__)("Create content that can be expanded with a click.","arkhe-blocks"),icon:u,styles:[{name:"box",label:(0,t._x)("Box","style","arkhe-blocks")}],example:m,edit:({attributes:n,setAttributes:r,isSelected:s,clientId:i})=>{const{iconType:m}=n,u=(0,a.useSelect)((e=>e("core/block-editor").hasSelectedInnerBlock(i,!1)),[i]),p=(0,c.useBlockProps)({className:`${y} ark-has-guide ark-has-appender`,"data-icon-type":m}),d=o(p,{allowedBlocks:["arkhe-blocks/accordion-item"],template:[["arkhe-blocks/accordion-item"]],templateLock:!1,renderAppender:!(!s&&!u)&&c.InnerBlocks.ButtonBlockAppender});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(c.BlockControls,null,(0,e.createElement)(w,{attributes:n,setAttributes:r})),(0,e.createElement)(c.InspectorControls,null,(0,e.createElement)(l.PanelBody,{title:(0,t.__)("Settings","arkhe-blocks"),initialOpen:!0},(0,e.createElement)(l.BaseControl,null,(0,e.createElement)(l.BaseControl.VisualLabel,null,(0,t.__)("Icon","arkhe-blocks")),(0,e.createElement)(l.ButtonGroup,{className:"arkb-btns--acc"},g.map(((t,n)=>(0,e.createElement)(l.Button,{key:`iconset_${n}`,isPrimary:t.name===m,onClick:()=>{r({iconType:t.name})},"data-icon-type":t.name},(0,e.createElement)("span",{className:"is-opened"},(0,e.createElement)("span",{className:`${y}__icon`})),(0,e.createElement)("span",null,"/"),(0,e.createElement)("span",null,(0,e.createElement)("span",{className:`${y}__icon`}))))))))),(0,e.createElement)("div",{...d}))},save:({attributes:t})=>{const{iconType:n}=t,a=c.useBlockProps.save({className:y,"data-icon-type":n});return(0,e.createElement)("div",{...a},(0,e.createElement)(c.InnerBlocks.Content,null))},deprecated:p})})()})();