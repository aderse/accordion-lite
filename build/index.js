!function(){"use strict";var e,t={847:function(){var e=window.wp.blocks,t=window.React,l=window.wp.i18n,n=window.wp.blockEditor,o=window.wp.components,r=JSON.parse('{"u2":"aderse/accordion-lite"}');(0,e.registerBlockType)(r.u2,{edit:function({attributes:e,setAttributes:r}){const a=(0,n.useBlockProps)(),{InnerBlocks:c}=wp.blockEditor,i={padding:e.titlePadding,backgroundColor:e.titleBackgroundColor},u={fontSize:e.titleSize,color:e.titleColor};return(0,t.createElement)("div",null,(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:(0,l.__)("Accordion Title Settings"),initialOpen:!0},(0,t.createElement)("p",null,(0,t.createElement)("strong",null,"Title Size"),(0,t.createElement)("br",null),(0,t.createElement)("small",null,"in pixels")),(0,t.createElement)(o.TextControl,{value:e.titleSize,onChange:e=>r({titleSize:e})}),(0,t.createElement)("p",null,(0,t.createElement)("strong",null,"Title Padding"),(0,t.createElement)("br",null),(0,t.createElement)("small",null,"follow box: 20px 10px 20px 10px")),(0,t.createElement)(o.TextControl,{value:e.titlePadding,onChange:e=>r({titlePadding:e})}),(0,t.createElement)("p",null,(0,t.createElement)("strong",null,"Title Background Color")),(0,t.createElement)(o.ColorPalette,{value:e.titleBackgroundColor,onChange:e=>r({titleBackgroundColor:e})}),(0,t.createElement)("p",null,(0,t.createElement)("strong",null,"Title Color")),(0,t.createElement)(o.ColorPalette,{value:e.titleColor,onChange:e=>r({titleColor:e})}),(0,t.createElement)("p",null,(0,t.createElement)("strong",null,"Panel Background Color")),(0,t.createElement)(o.ColorPalette,{value:e.panelBackgroundColor,onChange:e=>r({panelBackgroundColor:e})}))),(0,t.createElement)("div",{className:"simpleaccordion-accordion",style:i},(0,t.createElement)(n.RichText,{...a,tagName:"h3",label:"Title",value:e.title,onChange:e=>r({title:e}),placeholder:"Accordion Title",style:u}),(0,t.createElement)("span",{className:"simpleaccordion-expand",style:{color:e.titleColor}},"+")),(0,t.createElement)("div",{className:"simpleaccordion-panel",style:{backgroundColor:e.panelBackgroundColor}},(0,t.createElement)(c,null)))},save:function({attributes:e}){const l=n.useBlockProps.save(),{InnerBlocks:o}=wp.blockEditor,r={padding:e.titlePadding,backgroundColor:e.titleBackgroundColor},a={fontSize:e.titleSize,color:e.titleColor};return(0,t.createElement)("div",{...l},(0,t.createElement)("div",{className:"simpleaccordion-accordion",style:r},(0,t.createElement)(n.RichText.Content,{tagName:"h3",value:e.title,style:a}),(0,t.createElement)("span",{className:"simpleaccordion-expand",style:{color:e.titleColor}},"+")),(0,t.createElement)("div",{className:"simpleaccordion-panel",style:{backgroundColor:e.panelBackgroundColor}},(0,t.createElement)(o.Content,null)))}})}},l={};function n(e){var o=l[e];if(void 0!==o)return o.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=function(t,l,o,r){if(!l){var a=1/0;for(s=0;s<e.length;s++){l=e[s][0],o=e[s][1],r=e[s][2];for(var c=!0,i=0;i<l.length;i++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](l[i])}))?l.splice(i--,1):(c=!1,r<a&&(a=r));if(c){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[l,o,r]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,r,a=l[0],c=l[1],i=l[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(i)var s=i(n)}for(t&&t(l);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(s)},l=self.webpackChunkaccordion_lite=self.webpackChunkaccordion_lite||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var o=n.O(void 0,[431],(function(){return n(847)}));o=n.O(o)}();