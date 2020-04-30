(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),o=(n(0),n(200)),c={title:"Colors"},i={id:"general/colors",title:"Colors",description:"When supplying colors to Chart options, you can use a number of formats. You can specify the color as a string in hexadecimal, RGB, or HSL notations. If a color is needed, but not specified, Chart.js will use the global default color. This color is stored at `Chart.defaults.color`. It is initially set to `'rgba(0, 0, 0, 0.1)'`.",source:"@site/docs/general/colors.md",permalink:"/docs/VERSION/general/colors",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/general/colors.md",sidebar:"someSidebar",previous:{title:"Options",permalink:"/docs/VERSION/general/options"},next:{title:"Fonts",permalink:"/docs/VERSION/general/fonts"}},l=[{value:"Patterns and Gradients",id:"patterns-and-gradients",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When supplying colors to Chart options, you can use a number of formats. You can specify the color as a string in hexadecimal, RGB, or HSL notations. If a color is needed, but not specified, Chart.js will use the global default color. This color is stored at ",Object(o.b)("inlineCode",{parentName:"p"},"Chart.defaults.color"),". It is initially set to ",Object(o.b)("inlineCode",{parentName:"p"},"'rgba(0, 0, 0, 0.1)'"),"."),Object(o.b)("p",null,"You can also pass a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient"}),"CanvasGradient")," object. You will need to create this before passing to the chart, but using it you can achieve some interesting effects."),Object(o.b)("h2",{id:"patterns-and-gradients"},"Patterns and Gradients"),Object(o.b)("p",null,"An alternative option is to pass a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern"}),"CanvasPattern")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/API/CanvasGradient"}),"CanvasGradient")," object instead of a string colour."),Object(o.b)("p",null,"For example, if you wanted to fill a dataset with a pattern from an image you could do the following."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var img = new Image();\nimg.src = 'https://example.com/my_image.png';\nimg.onload = function() {\n    var ctx = document.getElementById('canvas').getContext('2d');\n    var fillPattern = ctx.createPattern(img, 'repeat');\n\n    var chart = new Chart(ctx, {\n        data: {\n            labels: ['Item 1', 'Item 2', 'Item 3'],\n            datasets: [{\n                data: [10, 20, 30],\n                backgroundColor: fillPattern\n            }]\n        }\n    });\n};\n")),Object(o.b)("p",null,"Using pattern fills for data graphics can help viewers with vision deficiencies (e.g. color-blindness or partial sight) to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://betweentwobrackets.com/data-graphics-and-colour-vision/"}),"more easily understand your data"),"."),Object(o.b)("p",null,"Using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ashiguruma/patternomaly"}),"Patternomaly")," library you can generate patterns to fill datasets."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var chartData = {\n    datasets: [{\n        data: [45, 25, 20, 10],\n        backgroundColor: [\n            pattern.draw('square', '#ff6384'),\n            pattern.draw('circle', '#36a2eb'),\n            pattern.draw('diamond', '#cc65fe'),\n            pattern.draw('triangle', '#ffce56')\n        ]\n    }],\n    labels: ['Red', 'Blue', 'Purple', 'Yellow']\n};\n")))}p.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(f,i({ref:t},s,{components:n})):r.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);