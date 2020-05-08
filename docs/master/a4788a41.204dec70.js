(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"ExampleChart",(function(){return d})),a.d(t,"default",(function(){return O}));var n=a(1),r=a(9),b=a(0),c=a(200),l={title:"Doughnut and Pie Charts"},i={id:"charts/doughnut",title:"Doughnut and Pie Charts",description:"Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.",source:"@site/docs/charts/doughnut.mdx",permalink:"/docs/master/charts/doughnut",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/charts/doughnut.mdx",sidebar:"someSidebar",previous:{title:"Radar Chart",permalink:"/docs/master/charts/radar"},next:{title:"Polar Area Chart",permalink:"/docs/master/charts/polar"}},o=[{value:"Example Usage",id:"example-usage",children:[]},{value:"Dataset Properties",id:"dataset-properties",children:[{value:"General",id:"general",children:[]},{value:"Styling",id:"styling",children:[]},{value:"Border Alignment",id:"border-alignment",children:[]},{value:"Interactions",id:"interactions",children:[]}]},{value:"Config Options",id:"config-options",children:[]},{value:"Default Options",id:"default-options",children:[]},{value:"Data Structure",id:"data-structure",children:[]}],d=function(){return Object(b.useEffect)((function(){new Chart(document.getElementById("chartjs-0").getContext("2d"),{type:"doughnut",data:{labels:["Red","Blue","Yellow"],datasets:[{label:"My First Dataset",data:[300,50,100],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]}]}})})),Object(c.b)("div",{className:"chartjs-wrapper"},Object(c.b)("canvas",{id:"chartjs-0",className:"chartjs"}))},p={rightToc:o,ExampleChart:d};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data."),Object(c.b)("p",null,"They are excellent at showing the relational proportions between data."),Object(c.b)("p",null,"Pie and doughnut charts are effectively the same class in Chart.js, but have one different default value - their ",Object(c.b)("inlineCode",{parentName:"p"},"cutoutPercentage"),". This equates what percentage of the inner should be cut out. This defaults to ",Object(c.b)("inlineCode",{parentName:"p"},"0")," for pie charts, and ",Object(c.b)("inlineCode",{parentName:"p"},"50")," for doughnuts."),Object(c.b)("p",null,"They are also registered under two aliases in the ",Object(c.b)("inlineCode",{parentName:"p"},"Chart")," core. Other than their different default value, and different alias, they are exactly the same."),Object(c.b)(d,{mdxType:"ExampleChart"}),Object(c.b)("h2",{id:"example-usage"},"Example Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// For a pie chart\nvar myPieChart = new Chart(ctx, {\n    type: 'pie',\n    data: data,\n    options: options\n});\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// And for a doughnut chart\nvar myDoughnutChart = new Chart(ctx, {\n    type: 'doughnut',\n    data: data,\n    options: options\n});\n")),Object(c.b)("h2",{id:"dataset-properties"},"Dataset Properties"),Object(c.b)("p",null,"The doughnut/pie chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colours of the dataset's arcs are generally set this way."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"/docs/master/general/options#scriptable-options"}),"Scriptable")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"/docs/master/general/options#indexable-options"}),"Indexable")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#styling"}),Object(c.b)("inlineCode",{parentName:"a"},"backgroundColor"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/general/colors"}),Object(c.b)("inlineCode",{parentName:"a"},"Color"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"'rgba(0, 0, 0, 0.1)'"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#border-alignment"}),Object(c.b)("inlineCode",{parentName:"a"},"borderAlign"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"'center'"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#styling"}),Object(c.b)("inlineCode",{parentName:"a"},"borderColor"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/general/colors"}),Object(c.b)("inlineCode",{parentName:"a"},"Color"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"'#fff'"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#styling"}),Object(c.b)("inlineCode",{parentName:"a"},"borderWidth"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"2"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#general"}),Object(c.b)("inlineCode",{parentName:"a"},"clip"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"number","|","object")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"undefined"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#data-structure"}),Object(c.b)("inlineCode",{parentName:"a"},"data"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"number[]")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"required"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#interations"}),Object(c.b)("inlineCode",{parentName:"a"},"hoverBackgroundColor"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/general/colors"}),Object(c.b)("inlineCode",{parentName:"a"},"Color"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"undefined"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#interactions"}),Object(c.b)("inlineCode",{parentName:"a"},"hoverBorderColor"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/general/colors"}),Object(c.b)("inlineCode",{parentName:"a"},"Color"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"undefined"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#interactions"}),Object(c.b)("inlineCode",{parentName:"a"},"hoverBorderWidth"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"undefined"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#styling"}),Object(c.b)("inlineCode",{parentName:"a"},"weight"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"1"))))),Object(c.b)("h3",{id:"general"},"General"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"clip")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. ",Object(c.b)("inlineCode",{parentName:"td"},"0")," = clip at chartArea. Clipping can also be configured per side: ",Object(c.b)("inlineCode",{parentName:"td"},"clip: {left: 5, top: false, right: -2, bottom: 0}"))))),Object(c.b)("h3",{id:"styling"},"Styling"),Object(c.b)("p",null,"The style of each arc can be controlled with the following properties:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"backgroundColor")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc background color.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"borderColor")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc border color.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"borderWidth")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc border width (in pixels).")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"weight")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The relative thickness of the dataset. Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values.")))),Object(c.b)("p",null,"All these values, if ",Object(c.b)("inlineCode",{parentName:"p"},"undefined"),", fallback to the associated ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/configuration/elements#arc-configuration"}),Object(c.b)("inlineCode",{parentName:"a"},"elements.arc.*"))," options."),Object(c.b)("h3",{id:"border-alignment"},"Border Alignment"),Object(c.b)("p",null,"The following values are supported for ",Object(c.b)("inlineCode",{parentName:"p"},"borderAlign"),"."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"'center'")," (default)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"'inner'"))),Object(c.b)("p",null,"When ",Object(c.b)("inlineCode",{parentName:"p"},"'center'")," is set, the borders of arcs next to each other will overlap. When ",Object(c.b)("inlineCode",{parentName:"p"},"'inner'")," is set, it is guaranteed that all borders will not overlap."),Object(c.b)("h3",{id:"interactions"},"Interactions"),Object(c.b)("p",null,"The interaction with each arc can be controlled with the following properties:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"hoverBackgroundColor")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc background color when hovered.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"hoverBorderColor")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc border color when hovered.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"hoverBorderWidth")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc border width when hovered (in pixels).")))),Object(c.b)("p",null,"All these values, if ",Object(c.b)("inlineCode",{parentName:"p"},"undefined"),", fallback to the associated ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/configuration/elements#arc-configuration"}),Object(c.b)("inlineCode",{parentName:"a"},"elements.arc.*"))," options."),Object(c.b)("h2",{id:"config-options"},"Config Options"),Object(c.b)("p",null,"These are the customisation options specific to Pie & Doughnut charts. These options are merged with the global chart configuration options, and form the options of the chart."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"cutoutPercentage")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"50")," - for doughnut, ",Object(c.b)("inlineCode",{parentName:"td"},"0")," - for pie"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The percentage of the chart that is cut out of the middle.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"rotation")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"-0.5 * Math.PI")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Starting angle to draw arcs from.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"circumference")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"2 * Math.PI")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sweep to allow arcs to cover.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"animation.animateRotate")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"true")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the chart will animate in with a rotation animation. This property is in the ",Object(c.b)("inlineCode",{parentName:"td"},"options.animation")," object.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"animation.animateScale")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, will animate scaling the chart from the center outwards.")))),Object(c.b)("h2",{id:"default-options"},"Default Options"),Object(c.b)("p",null,"We can also change these default values for each Doughnut type that is created, this object is available at ",Object(c.b)("inlineCode",{parentName:"p"},"Chart.defaults.doughnut"),". Pie charts also have a clone of these defaults available to change at ",Object(c.b)("inlineCode",{parentName:"p"},"Chart.defaults.pie"),", with the only difference being ",Object(c.b)("inlineCode",{parentName:"p"},"cutoutPercentage")," being set to 0."),Object(c.b)("h2",{id:"data-structure"},"Data Structure"),Object(c.b)("p",null,"For a pie chart, datasets need to contain an array of data points. The data points should be a number, Chart.js will total all of the numbers and calculate the relative proportion of each."),Object(c.b)("p",null,"You also need to specify an array of labels so that tooltips appear correctly."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"data = {\n    datasets: [{\n        data: [10, 20, 30]\n    }],\n\n    // These labels appear in the legend and in the tooltips when hovering different arcs\n    labels: [\n        'Red',\n        'Yellow',\n        'Blue'\n    ]\n};\n")))}O.isMDXComponent=!0},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(a),j=n,m=p["".concat(c,".").concat(j)]||p[j]||O[j]||b;return a?r.a.createElement(m,l({ref:t},o,{components:a})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);