(()=>{"use strict";const e=window.React,t=window.wp.i18n,a=window.wp.blocks,c=window.wp.blockEditor,n="function"==typeof c.useInnerBlocksProps?c.useInnerBlocksProps:c.__experimentalUseInnerBlocksProps,r=JSON.parse('{"u2":"arkhe-blocks/tab-body"}'),o=(0,e.createElement)("svg",{viewBox:"0 0 56 56"},(0,e.createElement)("path",{d:"M50.4,46H5.5C5.2,46,5,45.8,5,45.5v-35C5,10.2,5.2,10,5.5,10h45c0.3,0,0.5,0.2,0.5,0.5v35C50.9,45.8,50.7,46,50.4,46z M8.4,43.1h39.3c0.3,0,0.5-0.2,0.5-0.5V13.4c0-0.3-0.2-0.5-0.5-0.5H8.4c-0.3,0-0.5,0.2-0.5,0.5v29.2C7.9,42.9,8.1,43.1,8.4,43.1z"}),(0,e.createElement)("path",{d:"M41.5,33h-27c-0.3,0-0.5-0.2-0.5-0.5v-1c0-0.3,0.2-0.5,0.5-0.5h27c0.3,0,0.5,0.2,0.5,0.5v1C42,32.8,41.8,33,41.5,33z"}),(0,e.createElement)("path",{d:"M41.5,25h-27c-0.3,0-0.5-0.2-0.5-0.5v-1c0-0.3,0.2-0.5,0.5-0.5h27c0.3,0,0.5,0.2,0.5,0.5v1C42,24.8,41.8,25,41.5,25z"}));(0,a.registerBlockType)(r.u2,{title:(0,t.__)("Tab content","arkhe-blocks"),icon:o,edit:()=>{const t=(0,c.useBlockProps)({className:"arkb-tabBody__content ark-keep-mt--s ark-has-guide"}),a=n(t,{template:[["core/paragraph"]],templateLock:!1});return(0,e.createElement)("div",{...a})},save:({attributes:t})=>{const{tabId:a,bodyId:n,activeTab:r}=t,o=c.useBlockProps.save({className:"arkb-tabBody__content ark-keep-mt--s",id:`tab-${a}-${n}`,role:"tabpanel","aria-hidden":r===n?"false":"true"});return(0,e.createElement)("div",{...o},(0,e.createElement)(c.InnerBlocks.Content,null))}})})();