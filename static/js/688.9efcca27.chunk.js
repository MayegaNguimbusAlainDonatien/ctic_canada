"use strict";(self.webpackChunkctic=self.webpackChunkctic||[]).push([[688],{48143:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(1413),a=n(45987),i=(n(72791),n(28182)),o="AppCard_card__lJ6Uc",s="AppCard_heightFull__T8kun",l="AppCard_cardBody__Yq-vX",c="AppCard_cardHeader__Y+R+4",p="AppCard_cardTitle__HaekO",d="AppCard_action__sd-8L",u="AppCard_cardFooter__qAyRn",m=n(9140),h=n(80184),f=["title","footer","children","className","titleClass","actionClass","footerClass","cardBodyClass","cardHeaderClass","action","heightFull","cardImg"],y=function(e){var t=e.title,n=e.footer,y=e.children,x=e.className,v=e.titleClass,g=e.actionClass,C=e.footerClass,A=e.cardBodyClass,j=e.cardHeaderClass,b=e.action,k=e.heightFull,Z=e.cardImg,w=(0,a.Z)(e,f);return(0,h.jsxs)(m.Z,(0,r.Z)((0,r.Z)({className:(0,i.default)(o,k?s:"",x),title:t},w),{},{children:[Z?(0,h.jsx)(m.Z.Img,{variant:"top",src:Z}):null,t||b?(0,h.jsxs)(m.Z.Header,{className:(0,i.default)(c,j),children:["object"===typeof t?t:(0,h.jsx)(m.Z.Title,{className:(0,i.default)(p,"mb-0 text-truncate",v),children:t}),"object"===typeof b?b:(0,h.jsx)("a",{className:(0,i.default)(d,"text-decoration-none ms-1",g),href:"#",children:b})]}):null,(0,h.jsx)(m.Z.Body,{className:(0,i.default)(l,A),children:y}),n?(0,h.jsx)(m.Z.Footer,{className:(0,i.default)(u,C),children:n}):null]}))},x=y;y.defaultProps={}},38081:function(e,t,n){n.d(t,{Z:function(){return R}});var r,a=n(72791),i=n(10077),o=n(1413),s=n(29439),l=n(60185),c=n(28182),p={plain:{color:"#F8F8F2",fontFamily:"Poppins",fontWeight:n(1975).F3.REGULAR,backgroundColor:"#333333"},styles:[{types:["prolog","constant","builtin"],style:{color:"#FFFFFF"}},{types:["inserted","tag","function"],style:{color:"#E6DB74"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","selector"],style:{color:"#98CD2F"}},{types:["keyword","variable"],style:{color:"#65D4EA"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"#98CD2F"}}]},d=n(38109),u="AppComponentCard_compCardTitleDescription__SHL6w",m="AppComponentCard_preTag__0+EII",h="AppComponentCard_componentRoot__dgPU7",f="AppComponentCard_codeIcon__mUnRp",y=n(15671),x=n(43144),v=n(60136),g=n(27277),C=n(4942),A=n(80184),j="close",b="closing",k="closed",Z="open",w="opening",S="opened",F=(r={},(0,C.Z)(r,j,j),(0,C.Z)(r,k,j),(0,C.Z)(r,w,j),(0,C.Z)(r,b,Z),(0,C.Z)(r,Z,Z),(0,C.Z)(r,S,Z),r),P=function(e){(0,v.Z)(n,e);var t=(0,g.Z)(n);function n(e){var r;return(0,y.Z)(this,n),(r=t.call(this,e)).getClientHeight=function(){return r.refWrapper.scrollHeight},r.getDefaultExpandStyle=function(){switch(r.state.status){case w:case j:case k:return{height:0,opacity:0,overflow:"hidden"};case S:case b:return{height:r.getClientHeight(),opacity:1,overflow:"hidden"};default:return{height:"auto",opacity:1,overflow:"unset"}}},r.getExpandStyle=function(){return(0,o.Z)((0,o.Z)({},r.getDefaultExpandStyle()),r.props.styles[F[r.state.status]])},r.getTransition=function(e){return"".concat(e," ").concat(r.props.duration,"ms ").concat(r.props.easing)},r.updateStatus=function(e){return r.setState({status:e})},r.delay=function(e,t){r.timeout=setTimeout(e,t)},r.clearDelay=function(){r.timeout&&clearTimeout(r.timeout)},r.transit=function(e,t,n){var a=r.props.duration;r.updateStatus(e),r.delay((function(){r.updateStatus(t),r.delay((function(){r.updateStatus(n)}),a)}),20)},r.toggle=function(e){r.clearDelay(),e?r.transit(w,S,Z):r.transit(b,k,j)},r.setRef=function(e){r.refWrapper=e},r.state={status:r.props.open?Z:j},r}return(0,x.Z)(n,[{key:"componentDidUpdate",value:function(e){e.open!==this.props.open&&this.toggle(this.props.open)}},{key:"componentWillUnmount",value:function(){this.clearDelay()}},{key:"getStyle",value:function(){var e=this.props.transitions.map(this.getTransition).join(",");return(0,o.Z)((0,o.Z)({},this.getExpandStyle()),{},{transition:e})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=e.tag,a={className:t,style:this.getStyle(),ref:this.setRef};return(0,A.jsx)(r,(0,o.Z)((0,o.Z)({},a),{},{children:n}))}}]),n}(a.Component);P.defaultProps={open:!1,duration:200,easing:"ease-in-out",className:"",tag:"div",transitions:["height","opacity"],styles:{}};var _=P,K=n(48143),E=n(58617),B=n(43360),N=function(e){var t=e.title,n=e.description,r=e.className,i=e.maxHeight,y=e.component,x=e.source,v=(0,a.useState)(!1),g=(0,s.Z)(v,2),C=g[0],j=g[1];return(0,A.jsxs)(K.Z,{className:r,title:(0,A.jsxs)("div",{className:"w-100",children:[(0,A.jsx)("div",{children:t}),(0,A.jsx)("div",{className:(0,c.default)(u,"text-truncate"),children:n})]}),extra:x?(0,A.jsx)(B.Z,{"aria-label":"view code",shape:"circle",onClick:function(){return j(!C)},children:(0,A.jsx)(E.oT$,{className:f})}):null,children:[(0,A.jsx)(_,{open:C,children:x?(0,A.jsx)(d.Z,{style:{borderRadius:8,background:"#333333",height:350,maxHeight:400},children:(0,A.jsx)(l.ZP,(0,o.Z)((0,o.Z)({},l.lG),{},{code:x,language:"jsx",theme:p,children:function(e){var t=e.style,n=e.tokens,r=e.getLineProps,a=e.getTokenProps;return(0,A.jsx)("pre",{className:m,style:(0,o.Z)((0,o.Z)({},t),{},{maxHeight:500}),children:n.map((function(e,t){return(0,A.jsx)("div",(0,o.Z)((0,o.Z)({},r({line:e,key:t})),{},{children:e.map((function(e,n){return(0,A.jsx)("span",(0,o.Z)({},a({token:e,key:n})),t)}))}),t)}))})}}))}):null}),(0,A.jsx)(d.Z,{style:{maxHeight:i},className:"position-relative",children:(0,A.jsx)("div",{className:(0,c.default)(h,"d-flex align-items-center justify-content-center w-100 p-3"),children:(0,A.jsx)(y,{})})})]})},O=N;N.defaultProps={description:"",maxHeight:500};var L=function(e){var t=e.title,n=e.description,r=e.className,a=e.maxHeight,o=e.component,s=e.source;return(0,A.jsx)(i.Z,{type:"bottom",interval:100,duration:450,children:(0,A.jsx)(O,{title:t,description:n,className:r,maxHeight:a,component:o,source:s},"card")})},R=L;L.defaultProps={description:"",maxHeight:500}},66398:function(e,t,n){n.d(t,{Z:function(){return p}});n(72791);var r="AppComponentHeader_headerTitle__A9HGS",a="AppComponentHeader_titleH3__owcvF",i="AppComponentHeader_textBase__Hw4ll",o=n(10077),s=n(43360),l=n(80184),c=function(e){var t=e.title,n=e.description,c=e.refUrl;return(0,l.jsx)(o.Z,{type:"top",height:"auto",interval:100,duration:450,children:(0,l.jsxs)("div",{className:"d-flex flex-column pb-3 flex-sm-row justify-content-sm-between pt-xxl-3",children:[(0,l.jsxs)("div",{className:r,children:[(0,l.jsx)("h3",{className:a,children:t}),n?(0,l.jsx)("h5",{className:i,children:n}):null]}),c?(0,l.jsx)("div",{style:{height:30},children:(0,l.jsx)(s.Z,{variant:"primary",href:c,target:"_blank",children:"Reference"})}):null]},"header")})},p=c;c.defaultProps={}},61708:function(e,t,n){n(72791);var r=n(89743),a=n(92914),i=n(80184);t.Z=function(e){var t=e.children;return(0,i.jsx)(r.Z,{className:a.Z.row,children:t})}},20688:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});n(72791);var r=n(19913),a=n(58351),i=n(18602),o=n(57702),s=n(62066),l=n(64694),c=n(90466),p=n(12891),d=n(42633),u=n(93137),m=(0,a.z)({chartName:"ComposedChart",GraphicalChild:[s.x,i.u,o.$,l.b],axisComponents:[{axisType:"xAxis",AxisComp:c.K},{axisType:"yAxis",AxisComp:p.B},{axisType:"zAxis",AxisComp:d.d}],formatAxisMap:u.t9}),h=n(35667),f=n(27281),y=n(82839),x=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],v=n(80184),g=function(){return(0,v.jsx)(r.h,{width:"100%",height:200,children:(0,v.jsxs)(m,{data:x,margin:{top:10,right:0,left:-25,bottom:0},children:[(0,v.jsx)(c.K,{dataKey:"name"}),(0,v.jsx)(p.B,{}),(0,v.jsx)(h.u,{}),(0,v.jsx)(f.D,{}),(0,v.jsx)(y.q,{stroke:"#f5f5f5"}),(0,v.jsx)(i.u,{type:"monotone",dataKey:"amt",fill:"#F04F47",stroke:"#F04F47"}),(0,v.jsx)(o.$,{dataKey:"pv",barSize:20,fill:"#4299E1"}),(0,v.jsx)(s.x,{type:"monotone",dataKey:"uv",stroke:"#59AA2B"})]})})},C=function(){return(0,v.jsx)(r.h,{width:"100%",height:200,children:(0,v.jsxs)(m,{layout:"vertical",data:x,margin:{top:10,right:0,left:-12,bottom:0},children:[(0,v.jsx)(c.K,{type:"number"}),(0,v.jsx)(p.B,{dataKey:"name",type:"category"}),(0,v.jsx)(h.u,{}),(0,v.jsx)(f.D,{}),(0,v.jsx)(y.q,{stroke:"#f5f5f5"}),(0,v.jsx)(i.u,{dataKey:"amt",fill:"#F04F47",stroke:"#F04F47"}),(0,v.jsx)(o.$,{dataKey:"pv",barSize:20,fill:"#4299E1"}),(0,v.jsx)(s.x,{dataKey:"uv",stroke:"#59AA2B"})]})})},A=function(){return(0,v.jsx)(r.h,{width:"100%",height:200,children:(0,v.jsxs)(m,{data:x,margin:{top:10,right:0,left:-25,bottom:0},children:[(0,v.jsx)(c.K,{dataKey:"name"}),(0,v.jsx)(p.B,{}),(0,v.jsx)(h.u,{}),(0,v.jsx)(f.D,{}),(0,v.jsx)(y.q,{stroke:"#f5f5f5"}),(0,v.jsx)(o.$,{dataKey:"uv",barSize:20,fill:"#4299E1"}),(0,v.jsx)(s.x,{type:"monotone",dataKey:"uv",stroke:"#59AA2B"})]})})},j=function(){return(0,v.jsx)(r.h,{width:"100%",height:200,children:(0,v.jsxs)(m,{data:x,margin:{top:10,right:0,left:-25,bottom:0},children:[(0,v.jsx)(c.K,{dataKey:"name"}),(0,v.jsx)(p.B,{}),(0,v.jsx)(h.u,{}),(0,v.jsx)(f.D,{}),(0,v.jsx)(y.q,{stroke:"#f5f5f5"}),(0,v.jsx)(i.u,{type:"monotone",dataKey:"amt",fill:"#F04F47",stroke:"#F04F47"}),(0,v.jsx)(o.$,{dataKey:"pv",barSize:20,fill:"#4299E1"}),(0,v.jsx)(s.x,{type:"monotone",dataKey:"uv",stroke:"#59AA2B"})]})})},b=n(38081),k=n(66398),Z=n(61708),w=n(2677),S=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(k.Z,{title:"Composed Chart",description:"A chart composed of line, area, and bar charts. When you just want to draw a chart of a single type like line, then LineChart is recommended.",refUrl:"http://recharts.org/en-US/api/ComposedChart/"}),(0,v.jsxs)(Z.Z,{children:[(0,v.jsx)(w.Z,{xs:12,xl:6,children:(0,v.jsx)(b.Z,{title:"Line Bar Area Composed Chart",component:g,source:"import React from 'react';\r\nimport {\r\n  Area,\r\n  Bar,\r\n  CartesianGrid,\r\n  ComposedChart,\r\n  Legend,\r\n  Line,\r\n  ResponsiveContainer,\r\n  Tooltip,\r\n  XAxis,\r\n  YAxis,\r\n} from 'recharts';\r\nimport data from './data';\r\n\r\nconst LineBarAreaComposedChart = () => (\r\n  <ResponsiveContainer width='100%' height={200}>\r\n    <ComposedChart\r\n      data={data}\r\n      margin={{top: 10, right: 0, left: -25, bottom: 0}}>\r\n      <XAxis dataKey='name' />\r\n      <YAxis />\r\n      <Tooltip />\r\n      <Legend />\r\n      <CartesianGrid stroke='#f5f5f5' />\r\n      <Area type='monotone' dataKey='amt' fill='#F04F47' stroke='#F04F47' />\r\n      <Bar dataKey='pv' barSize={20} fill='#4299E1' />\r\n      <Line type='monotone' dataKey='uv' stroke='#59AA2B' />\r\n    </ComposedChart>\r\n  </ResponsiveContainer>\r\n);\r\n\r\nexport default LineBarAreaComposedChart;\r\n"})}),(0,v.jsx)(w.Z,{xs:12,xl:6,children:(0,v.jsx)(b.Z,{title:"Line Bar Area Composed Chart",component:C,source:"import React from 'react';\r\nimport {\r\n  Area,\r\n  Bar,\r\n  CartesianGrid,\r\n  ComposedChart,\r\n  Legend,\r\n  Line,\r\n  ResponsiveContainer,\r\n  Tooltip,\r\n  XAxis,\r\n  YAxis,\r\n} from 'recharts';\r\nimport data from './data';\r\n\r\nconst VerticalComposedChart = () => (\r\n  <ResponsiveContainer width='100%' height={200}>\r\n    <ComposedChart\r\n      layout='vertical'\r\n      data={data}\r\n      margin={{top: 10, right: 0, left: -12, bottom: 0}}>\r\n      <XAxis type='number' />\r\n      <YAxis dataKey='name' type='category' />\r\n      <Tooltip />\r\n      <Legend />\r\n      <CartesianGrid stroke='#f5f5f5' />\r\n      <Area dataKey='amt' fill='#F04F47' stroke='#F04F47' />\r\n      <Bar dataKey='pv' barSize={20} fill='#4299E1' />\r\n      <Line dataKey='uv' stroke='#59AA2B' />\r\n    </ComposedChart>\r\n  </ResponsiveContainer>\r\n);\r\n\r\nexport default VerticalComposedChart;\r\n"})}),(0,v.jsx)(w.Z,{xs:12,xl:6,children:(0,v.jsx)(b.Z,{title:"Same Data Composed Chart",component:A,source:"import React from 'react';\r\nimport {\r\n  Bar,\r\n  CartesianGrid,\r\n  ComposedChart,\r\n  Legend,\r\n  Line,\r\n  ResponsiveContainer,\r\n  Tooltip,\r\n  XAxis,\r\n  YAxis,\r\n} from 'recharts';\r\nimport data from './data';\r\n\r\nconst SameDataComposedChart = () => (\r\n  <ResponsiveContainer width='100%' height={200}>\r\n    <ComposedChart\r\n      data={data}\r\n      margin={{top: 10, right: 0, left: -25, bottom: 0}}>\r\n      <XAxis dataKey='name' />\r\n      <YAxis />\r\n      <Tooltip />\r\n      <Legend />\r\n      <CartesianGrid stroke='#f5f5f5' />\r\n      <Bar dataKey='uv' barSize={20} fill='#4299E1' />\r\n      <Line type='monotone' dataKey='uv' stroke='#59AA2B' />\r\n    </ComposedChart>\r\n  </ResponsiveContainer>\r\n);\r\n\r\nexport default SameDataComposedChart;\r\n"})}),(0,v.jsx)(w.Z,{xs:12,xl:6,children:(0,v.jsx)(b.Z,{title:"Composed Chart With Axis Labels",component:j,source:"import React from 'react';\r\nimport {\r\n  Area,\r\n  Bar,\r\n  CartesianGrid,\r\n  ComposedChart,\r\n  Legend,\r\n  Line,\r\n  ResponsiveContainer,\r\n  Tooltip,\r\n  XAxis,\r\n  YAxis,\r\n} from 'recharts';\r\nimport data from './data';\r\n\r\nconst ComposedChartWithAxisLabels = () => (\r\n  <ResponsiveContainer width='100%' height={200}>\r\n    <ComposedChart\r\n      data={data}\r\n      margin={{top: 10, right: 0, left: -25, bottom: 0}}>\r\n      <XAxis dataKey='name' />\r\n      <YAxis />\r\n      <Tooltip />\r\n      <Legend />\r\n      <CartesianGrid stroke='#f5f5f5' />\r\n      <Area type='monotone' dataKey='amt' fill='#F04F47' stroke='#F04F47' />\r\n      <Bar dataKey='pv' barSize={20} fill='#4299E1' />\r\n      <Line type='monotone' dataKey='uv' stroke='#59AA2B' />\r\n    </ComposedChart>\r\n  </ResponsiveContainer>\r\n);\r\n\r\nexport default ComposedChartWithAxisLabels;\r\n"})})]})]})}},64694:function(e,t,n){n.d(t,{b:function(){return N}});var r=n(18111),a=n.n(r),i=n(74786),o=n.n(i),s=n(42854),l=n.n(s),c=n(72791),p=n(35195),d=n(81694),u=n.n(d),m=n(46044),h=n(87970),f=n(23031),y=n(36768),x=n(42633),v=n(57139),g=n(65181),C=n(85992),A=n(41048),j=n(70587),b=n(39926),k=n(57241);function Z(e){return Z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},K(e,t)}function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=B(e);if(t){var a=B(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===Z(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var N=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(s,e);var t,n,r,i=E(s);function s(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=i.call.apply(i,[this].concat(n))).state={isAnimationFinished:!1},e.handleAnimationEnd=function(){e.setState({isAnimationFinished:!0})},e.handleAnimationStart=function(){e.setState({isAnimationFinished:!1})},e.id=(0,j.EL)("recharts-scatter-"),e}return t=s,r=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curPoints:e.points,prevPoints:t.curPoints}:e.points!==t.curPoints?{curPoints:e.points}:null}},{key:"renderSymbolItem",value:function(e,t){var n;return c.isValidElement(e)?n=c.cloneElement(e,t):o()(e)?n=e(t):"string"===typeof e&&(n=c.createElement(g.v,w({},t,{type:e}))),n}}],(n=[{key:"renderSymbolsStatically",value:function(e){var t=this,n=this.props,r=n.shape,a=n.activeShape,i=n.activeIndex,o=(0,k.L6)(this.props);return e.map((function(e,n){var l=F(F({key:"symbol-".concat(n)},o),e);return c.createElement(m.m,w({className:"recharts-scatter-symbol"},(0,k.bw)(t.props,e,n),{key:"symbol-".concat(n)}),s.renderSymbolItem(i===n?a:r,l))}))}},{key:"renderSymbolsWithAnimation",value:function(){var e=this,t=this.props,n=t.points,r=t.isAnimationActive,a=t.animationBegin,i=t.animationDuration,o=t.animationEasing,s=t.animationId,l=this.state.prevPoints;return c.createElement(p.ZP,{begin:a,duration:i,isActive:r,easing:o,from:{t:0},to:{t:1},key:"pie-".concat(s),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(t){var r=t.t,a=n.map((function(e,t){var n=l&&l[t];if(n){var a=(0,j.k4)(n.cx,e.cx),i=(0,j.k4)(n.cy,e.cy),o=(0,j.k4)(n.size,e.size);return F(F({},e),{},{cx:a(r),cy:i(r),size:o(r)})}var s=(0,j.k4)(0,e.size);return F(F({},e),{},{size:s(r)})}));return c.createElement(m.m,null,e.renderSymbolsStatically(a))}))}},{key:"renderSymbols",value:function(){var e=this.props,t=e.points,n=e.isAnimationActive,r=this.state.prevPoints;return!(n&&t&&t.length)||r&&a()(r,t)?this.renderSymbolsStatically(t):this.renderSymbolsWithAnimation()}},{key:"renderErrorBar",value:function(){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var e=this.props,t=e.points,n=e.xAxis,r=e.yAxis,a=e.children,i=(0,f.NN)(a,C.W.displayName);if(!i)return null;function o(e,t){return{x:e.cx,y:e.cy,value:+e.node.y,errorVal:(0,b.F$)(e,t)}}function s(e,t){return{x:e.cx,y:e.cy,value:+e.node.x,errorVal:(0,b.F$)(e,t)}}return i.map((function(e,a){var i=e.props.direction;return c.cloneElement(e,{key:a,data:t,xAxis:n,yAxis:r,layout:"x"===i?"vertical":"horizontal",dataPointFormatter:"x"===i?s:o})}))}},{key:"renderLine",value:function(){var e,t,n=this.props,r=n.points,a=n.line,i=n.lineType,s=n.lineJointType,l=(0,k.L6)(this.props),p=(0,k.L6)(a);if("joint"===i)e=r.map((function(e){return{x:e.cx,y:e.cy}}));else if("fitting"===i){var d=(0,j.wr)(r),u=d.xmin,h=d.xmax,f=d.a,y=d.b,x=function(e){return f*e+y};e=[{x:u,y:x(u)},{x:h,y:x(h)}]}var g=F(F(F({},l),{},{fill:"none",stroke:l&&l.fill},p),{},{points:e});return t=c.isValidElement(a)?c.cloneElement(a,g):o()(a)?a(g):c.createElement(v.H,w({},g,{type:s})),c.createElement(m.m,{className:"recharts-scatter-line",key:"recharts-scatter-line"},t)}},{key:"render",value:function(){var e=this.props,t=e.hide,n=e.points,r=e.line,a=e.className,i=e.xAxis,o=e.yAxis,s=e.left,p=e.top,d=e.width,f=e.height,y=e.id,x=e.isAnimationActive;if(t||!n||!n.length)return null;var v=this.state.isAnimationFinished,g=u()("recharts-scatter",a),C=i&&i.allowDataOverflow||o&&o.allowDataOverflow,A=l()(y)?this.id:y;return c.createElement(m.m,{className:g,clipPath:C?"url(#clipPath-".concat(A,")"):null},C?c.createElement("defs",null,c.createElement("clipPath",{id:"clipPath-".concat(A)},c.createElement("rect",{x:s,y:p,width:d,height:f}))):null,r&&this.renderLine(),this.renderErrorBar(),c.createElement(m.m,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!x||v)&&h.e.renderCallByParent(this.props,n))}}])&&_(t.prototype,n),r&&_(t,r),s}(c.PureComponent);N.displayName="Scatter",N.defaultProps={xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!y.x.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"},N.getComposedData=function(e){var t=e.xAxis,n=e.yAxis,r=e.zAxis,a=e.item,i=e.displayedData,o=e.xAxisTicks,s=e.yAxisTicks,c=e.offset,p=a.props.tooltipType,d=(0,f.NN)(a.props.children,A.b.displayName),u=l()(t.dataKey)?a.props.dataKey:t.dataKey,m=l()(n.dataKey)?a.props.dataKey:n.dataKey,h=r&&r.dataKey,y=r?r.range:x.d.defaultProps.range,v=y&&y[0],g=t.scale.bandwidth?t.scale.bandwidth():0,C=n.scale.bandwidth?n.scale.bandwidth():0,j=i.map((function(e,i){var c=(0,b.F$)(e,u),f=(0,b.F$)(e,m),y=!l()(h)&&(0,b.F$)(e,h)||"-",x=[{name:l()(t.dataKey)?a.props.name:t.name||t.dataKey,unit:t.unit||"",value:c,payload:e,dataKey:u,type:p},{name:l()(n.dataKey)?a.props.name:n.name||n.dataKey,unit:n.unit||"",value:f,payload:e,dataKey:m,type:p}];"-"!==y&&x.push({name:r.name||r.dataKey,unit:r.unit||"",value:y,payload:e,dataKey:h,type:p});var A=(0,b.Hv)({axis:t,ticks:o,bandSize:g,entry:e,index:i,dataKey:u}),j=(0,b.Hv)({axis:n,ticks:s,bandSize:C,entry:e,index:i,dataKey:m}),k="-"!==y?r.scale(y):v,Z=Math.sqrt(Math.max(k,0)/Math.PI);return F(F({},e),{},{cx:A,cy:j,x:A-Z,y:j-Z,xAxis:t,yAxis:n,zAxis:r,width:2*Z,height:2*Z,size:k,node:{x:c,y:f,z:y},tooltipPayload:x,tooltipPosition:{x:A,y:j},payload:e},d&&d[i]&&d[i].props)}));return F({points:j},c)}},42633:function(e,t,n){n.d(t,{d:function(){return r}});var r=function(){return null};r.displayName="ZAxis",r.defaultProps={zAxisId:0,range:[64,64],scale:"auto",type:"number"}},92914:function(e,t){t.Z={row:"AppRowContainer_row__lSYCd"}}}]);
//# sourceMappingURL=688.9efcca27.chunk.js.map