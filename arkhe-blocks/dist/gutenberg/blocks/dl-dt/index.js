(()=>{"use strict";const e=window.React,t=window.wp.i18n,c=window.wp.blocks,a=window.wp.blockEditor,n=JSON.parse('{"u2":"arkhe-blocks/dl-dt"}'),r="ark-block-dl";(0,c.registerBlockType)(n.u2,{title:(0,t._x)("Term","block-name","arkhe-blocks"),icon:(0,e.createElement)("svg",{viewBox:"0 0 56 56"},(0,e.createElement)("rect",{x:"13",y:"26",width:"36",height:"4"}),(0,e.createElement)("rect",{x:"7",y:"26",width:"2",height:"4"})),edit:c=>{const{attributes:n,setAttributes:o}=c,s=(0,a.useBlockProps)({className:`${r}__dt`});return(0,e.createElement)("div",{...s},(0,e.createElement)(a.RichText,{tagName:"span",placeholder:(0,t.__)("Enter text","arkhe-blocks")+"...",value:n.content,onChange:e=>o({content:e})}))},save:({attributes:t})=>{const c=a.useBlockProps.save({className:`${r}__dt`});return(0,e.createElement)("dt",{...c},(0,e.createElement)(a.RichText.Content,{tagName:"span",value:t.content}))}})})();