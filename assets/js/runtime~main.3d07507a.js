(()=>{"use strict";var e,a,d,b,f,t={},r={};function c(e){var a=r[e];if(void 0!==a)return a.exports;var d=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(d.exports,d,d.exports,c),d.loaded=!0,d.exports}c.m=t,c.c=r,e=[],c.O=(a,d,b,f)=>{if(!d){var t=1/0;for(i=0;i<e.length;i++){d=e[i][0],b=e[i][1],f=e[i][2];for(var r=!0,o=0;o<d.length;o++)(!1&f||t>=f)&&Object.keys(c.O).every((e=>c.O[e](d[o])))?d.splice(o--,1):(r=!1,f<t&&(t=f));if(r){e.splice(i--,1);var n=b();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[d,b,f]},c.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return c.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var f=Object.create(null);c.r(f);var t={};a=a||[null,d({}),d([]),d(d)];for(var r=2&b&&e;"object"==typeof r&&!~a.indexOf(r);r=d(r))Object.getOwnPropertyNames(r).forEach((a=>t[a]=()=>e[a]));return t.default=()=>e,c.d(f,t),f},c.d=(e,a)=>{for(var d in a)c.o(a,d)&&!c.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((a,d)=>(c.f[d](e,a),a)),[])),c.u=e=>"assets/js/"+({5:"742bfe39",53:"935f2afb",319:"0ae138b6",1727:"db9aa44b",2046:"3b13740e",2067:"5c5fb4fd",2079:"ff5b5042",2133:"83023f2c",2186:"a291eb0b",2450:"a679ac6c",2475:"e2b44e56",2862:"9ed0d4bd",2899:"ee1b7256",3013:"ceab7f0b",3051:"b2199d6e",3145:"b7487313",3900:"91bd9768",4002:"50224d63",4368:"a94703ab",4446:"9225b3a9",4533:"278799f9",4724:"eb3cf4dd",4854:"06f50554",4918:"829ab26d",5081:"c9aeb1e0",5740:"78d73247",5754:"1c6416c4",5867:"ab6e1c44",5956:"002b6aa0",6273:"83bef633",6454:"76b17401",6676:"794f6782",6857:"48914889",6971:"c377a04b",7046:"a8c20efa",7131:"45f505d9",7133:"28de19d4",7213:"08255d28",7488:"febb840b",7525:"a6172d87",7701:"2f09f935",7767:"bafff407",7770:"48f5ca05",7918:"17896441",8060:"b5dc1abf",8518:"a7bd4aaa",8826:"bcd1d5ff",8829:"0358906d",9178:"ce733c1a",9447:"84556e37",9661:"5e95c892",9787:"fafb21b2",9943:"8a2accea"}[e]||e)+"."+{5:"0675fe40",53:"56be029f",319:"6e77d2f4",868:"5ae9b6c4",1727:"302642e1",2046:"7f2a8f41",2067:"0790e880",2079:"336066df",2133:"683df42b",2186:"8b8222c8",2450:"f2d2ab9c",2475:"7679974e",2862:"e530a6e3",2899:"d78169af",3013:"e60da9ef",3051:"f8e72814",3145:"9addbc95",3332:"afed9ddb",3900:"cafa570f",4002:"3312a419",4368:"983f10c4",4446:"bb487991",4533:"8b15fc1e",4724:"3928c638",4854:"69436dde",4918:"10844674",5081:"57382117",5740:"40ad2293",5754:"ec1bfe55",5867:"20b95426",5956:"375c9bd2",6273:"b2298c92",6454:"d34be935",6676:"3c23e070",6857:"e81cd437",6971:"34d82fca",7046:"883a6f88",7131:"3419a4d8",7133:"7db5149f",7213:"93656845",7488:"734ffa93",7525:"eaf5bda1",7701:"7a880c4d",7767:"762820f5",7770:"c4b099f0",7918:"5ddc2b6b",8060:"52662008",8518:"9f0a946b",8826:"e74784a9",8829:"a6b09055",9178:"965c69c2",9447:"598bf534",9661:"d7e7ae94",9787:"cfcc1288",9943:"510198b1"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),b={},f="embedding-sdk-docs:",c.l=(e,a,d,t)=>{if(b[e])b[e].push(a);else{var r,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+d){r=u;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,c.nc&&r.setAttribute("nonce",c.nc),r.setAttribute("data-webpack",f+d),r.src=e),b[e]=[a];var l=(a,d)=>{r.onerror=r.onload=null,clearTimeout(s);var f=b[e];if(delete b[e],r.parentNode&&r.parentNode.removeChild(r),f&&f.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),o&&document.head.appendChild(r)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/embedding-sdk-docs/",c.gca=function(e){return e={17896441:"7918",48914889:"6857","742bfe39":"5","935f2afb":"53","0ae138b6":"319",db9aa44b:"1727","3b13740e":"2046","5c5fb4fd":"2067",ff5b5042:"2079","83023f2c":"2133",a291eb0b:"2186",a679ac6c:"2450",e2b44e56:"2475","9ed0d4bd":"2862",ee1b7256:"2899",ceab7f0b:"3013",b2199d6e:"3051",b7487313:"3145","91bd9768":"3900","50224d63":"4002",a94703ab:"4368","9225b3a9":"4446","278799f9":"4533",eb3cf4dd:"4724","06f50554":"4854","829ab26d":"4918",c9aeb1e0:"5081","78d73247":"5740","1c6416c4":"5754",ab6e1c44:"5867","002b6aa0":"5956","83bef633":"6273","76b17401":"6454","794f6782":"6676",c377a04b:"6971",a8c20efa:"7046","45f505d9":"7131","28de19d4":"7133","08255d28":"7213",febb840b:"7488",a6172d87:"7525","2f09f935":"7701",bafff407:"7767","48f5ca05":"7770",b5dc1abf:"8060",a7bd4aaa:"8518",bcd1d5ff:"8826","0358906d":"8829",ce733c1a:"9178","84556e37":"9447","5e95c892":"9661",fafb21b2:"9787","8a2accea":"9943"}[e]||e,c.p+c.u(e)},(()=>{var e={1303:0,532:0};c.f.j=(a,d)=>{var b=c.o(e,a)?e[a]:void 0;if(0!==b)if(b)d.push(b[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((d,f)=>b=e[a]=[d,f]));d.push(b[2]=f);var t=c.p+c.u(a),r=new Error;c.l(t,(d=>{if(c.o(e,a)&&(0!==(b=e[a])&&(e[a]=void 0),b)){var f=d&&("load"===d.type?"missing":d.type),t=d&&d.target&&d.target.src;r.message="Loading chunk "+a+" failed.\n("+f+": "+t+")",r.name="ChunkLoadError",r.type=f,r.request=t,b[1](r)}}),"chunk-"+a,a)}},c.O.j=a=>0===e[a];var a=(a,d)=>{var b,f,t=d[0],r=d[1],o=d[2],n=0;if(t.some((a=>0!==e[a]))){for(b in r)c.o(r,b)&&(c.m[b]=r[b]);if(o)var i=o(c)}for(a&&a(d);n<t.length;n++)f=t[n],c.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return c.O(i)},d=self.webpackChunkembedding_sdk_docs=self.webpackChunkembedding_sdk_docs||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();