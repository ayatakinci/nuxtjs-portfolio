(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{306:function(t,r,e){var content=e(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(26).default)("e09ff958",content,!0,{sourceMap:!1})},310:function(t,r,e){var content=e(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(26).default)("7a55487e",content,!0,{sourceMap:!1})},311:function(t,r,e){"use strict";e(306)},312:function(t,r,e){var o=e(25)((function(i){return i[1]}));o.push([t.i,".imgContainer[data-v-1ffd69dc]{position:absolute;height:30vh;height:100%;width:100%;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgba(100, 255, 218, var(--tw-bg-opacity));opacity:0.2;background-blend-mode:multiply;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}@media (min-width: 768px){.imgContainer[data-v-1ffd69dc]{top:25%}.imgContainer[data-v-1ffd69dc]{width:66.666667%}.imgContainer[data-v-1ffd69dc]{opacity:1}.imgContainer[data-v-1ffd69dc]:hover{cursor:pointer}.imgContainer[data-v-1ffd69dc]:hover{background-blend-mode:normal}}.imgContainer[data-v-1ffd69dc]{background-size:cover;background-repeat:no-repeat}a[data-v-1ffd69dc]{display:flex;padding:0.75rem;--tw-text-opacity:1;color:rgba(204, 214, 246, var(--tw-text-opacity));transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:500ms;transition-timing-function:cubic-bezier(0.645, 0.045, 0.355, 1)}a[data-v-1ffd69dc]:hover{--tw-text-opacity:1;color:rgba(100, 255, 218, var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},313:function(t,r,e){"use strict";e.r(r);var o={props:{order:{require:!0},title:{type:String,require:!0},githubUrl:{type:String,require:!1},demoLink:{type:String,require:!1},previewTexts:{type:Array,require:!0},thumbnailUrl:{type:String,require:!0},tags:{type:Array,require:!0}},computed:{imgUrlStyle:function(){return"background-image: url('".concat(this.thumbnailUrl,"')")}}},n=(e(311),e(7)),component=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("li",{staticClass:"relative flex mb-7 sm:mb-16 md:mb-24",class:[t.order?"justify-end":""]},[e("div",{staticClass:"z-0 md:z-10 imgContainer",class:[t.order?"left-0":"right-0"],style:t.imgUrlStyle}),t._v(" "),e("div",{staticClass:"relative mx-4 mb-2 sm:mx-8 mt-[10%] flex flex-col md:w-8/12",class:[t.order?"md:items-end":"md:items-start"]},[e("h3",{staticClass:"z-0 text-bcColor font-mono text-bcXxs pb-3"},[t._v("\n            Featured Project\n        ")]),t._v(" "),e("h3",{staticClass:"z-0 text-bcWhite pb-6"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"\n                z-20\n                text-bcMd\n                pb-6\n                md:bg-bcLightNavy\n                md:p-4\n                md:mb-4\n                md:rounded-md\n                md:shadow-lg\n            ",class:[t.order?"md:text-right":""]},[t._v("\n            "+t._s(t.previewTexts[0].point1)+"\n        ")]),t._v(" "),e("ul",{staticClass:"z-20 flex flex-row font-mono text-bcXs pb-4"},t._l(t.tags,(function(r){return e("li",{key:r,staticClass:"pr-4"},[t._v(t._s(r))])})),0),t._v(" "),e("div",{staticClass:"z-10 md:z-0 flex flex-row -ml-3"},[t.githubUrl?e("a",{attrs:{href:""+t.githubUrl,target:"_blank",rel:"noopener noreferrer"}},[e("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-github","stroke-width":"2"}},[e("title",[t._v("GitHub")]),t._v(" "),e("path",{attrs:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}})])]):t._e(),t._v(" "),t.demoLink?e("a",{attrs:{href:""+t.demoLink,target:"_blank",rel:"noopener noreferrer"}},[e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}})])]):t._e()])])])}),[],!1,null,"1ffd69dc",null);r.default=component.exports},321:function(t,r,e){"use strict";e(310)},322:function(t,r,e){var o=e(25)((function(i){return i[1]}));o.push([t.i,"a[data-v-f8d8c4f2]:hover{--tw-text-opacity:1;color:rgba(100, 255, 218, var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},328:function(t,r,e){"use strict";e.r(r);var o=e(47),n={data:function(){return{socialMedia:null,projectNames:null}},props:{title:{type:String,require:!0},content:{type:String,require:!0},posts:{type:Array}},created:function(){this.socialMedia=o.socialMedia,this.projectNames=o.projectNames}},l=(e(321),e(7)),component=Object(l.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",{staticClass:"max-w-[1000px] transition-all"},[e("h2",{staticClass:"numberedHeading"},[t._v("Things I've Built")]),t._v(" "),e("ul",t._l(t.posts,(function(t){return e("Project",{key:t.id,attrs:{order:t.order,title:t.title,githubUrl:t.githubUrl,demoLink:t.demoLink,previewTexts:t.previewTexts,thumbnailUrl:t.thumbnailUrl,tags:t.tags}})})),1)])}),[],!1,null,"f8d8c4f2",null);r.default=component.exports;installComponents(component,{Project:e(313).default})}}]);