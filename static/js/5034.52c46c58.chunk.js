"use strict";(self.webpackChunkctic=self.webpackChunkctic||[]).push([[5034],{48143:function(e,r,t){t.d(r,{Z:function(){return f}});var n=t(1413),a=t(45987),i=(t(72791),t(28182)),o="AppCard_card__lJ6Uc",s="AppCard_heightFull__T8kun",l="AppCard_cardBody__Yq-vX",c="AppCard_cardHeader__Y+R+4",d="AppCard_cardTitle__HaekO",h="AppCard_action__sd-8L",p="AppCard_cardFooter__qAyRn",m=t(9140),x=t(80184),u=["title","footer","children","className","titleClass","actionClass","footerClass","cardBodyClass","cardHeaderClass","action","heightFull","cardImg"],y=function(e){var r=e.title,t=e.footer,y=e.children,f=e.className,v=e.titleClass,g=e.actionClass,C=e.footerClass,j=e.cardBodyClass,L=e.cardHeaderClass,A=e.action,k=e.heightFull,b=e.cardImg,w=(0,a.Z)(e,u);return(0,x.jsxs)(m.Z,(0,n.Z)((0,n.Z)({className:(0,i.default)(o,k?s:"",f),title:r},w),{},{children:[b?(0,x.jsx)(m.Z.Img,{variant:"top",src:b}):null,r||A?(0,x.jsxs)(m.Z.Header,{className:(0,i.default)(c,L),children:["object"===typeof r?r:(0,x.jsx)(m.Z.Title,{className:(0,i.default)(d,"mb-0 text-truncate",v),children:r}),"object"===typeof A?A:(0,x.jsx)("a",{className:(0,i.default)(h,"text-decoration-none ms-1",g),href:"#",children:A})]}):null,(0,x.jsx)(m.Z.Body,{className:(0,i.default)(l,j),children:y}),t?(0,x.jsx)(m.Z.Footer,{className:(0,i.default)(p,C),children:t}):null]}))},f=y;y.defaultProps={}},38081:function(e,r,t){t.d(r,{Z:function(){return q}});var n,a=t(72791),i=t(10077),o=t(1413),s=t(29439),l=t(60185),c=t(28182),d={plain:{color:"#F8F8F2",fontFamily:"Poppins",fontWeight:t(1975).F3.REGULAR,backgroundColor:"#333333"},styles:[{types:["prolog","constant","builtin"],style:{color:"#FFFFFF"}},{types:["inserted","tag","function"],style:{color:"#E6DB74"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","selector"],style:{color:"#98CD2F"}},{types:["keyword","variable"],style:{color:"#65D4EA"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"#98CD2F"}}]},h=t(38109),p="AppComponentCard_compCardTitleDescription__SHL6w",m="AppComponentCard_preTag__0+EII",x="AppComponentCard_componentRoot__dgPU7",u="AppComponentCard_codeIcon__mUnRp",y=t(15671),f=t(43144),v=t(60136),g=t(27277),C=t(4942),j=t(80184),L="close",A="closing",k="closed",b="open",w="opening",K="opened",Z=(n={},(0,C.Z)(n,L,L),(0,C.Z)(n,k,L),(0,C.Z)(n,w,L),(0,C.Z)(n,A,b),(0,C.Z)(n,b,b),(0,C.Z)(n,K,b),n),R=function(e){(0,v.Z)(t,e);var r=(0,g.Z)(t);function t(e){var n;return(0,y.Z)(this,t),(n=r.call(this,e)).getClientHeight=function(){return n.refWrapper.scrollHeight},n.getDefaultExpandStyle=function(){switch(n.state.status){case w:case L:case k:return{height:0,opacity:0,overflow:"hidden"};case K:case A:return{height:n.getClientHeight(),opacity:1,overflow:"hidden"};default:return{height:"auto",opacity:1,overflow:"unset"}}},n.getExpandStyle=function(){return(0,o.Z)((0,o.Z)({},n.getDefaultExpandStyle()),n.props.styles[Z[n.state.status]])},n.getTransition=function(e){return"".concat(e," ").concat(n.props.duration,"ms ").concat(n.props.easing)},n.updateStatus=function(e){return n.setState({status:e})},n.delay=function(e,r){n.timeout=setTimeout(e,r)},n.clearDelay=function(){n.timeout&&clearTimeout(n.timeout)},n.transit=function(e,r,t){var a=n.props.duration;n.updateStatus(e),n.delay((function(){n.updateStatus(r),n.delay((function(){n.updateStatus(t)}),a)}),20)},n.toggle=function(e){n.clearDelay(),e?n.transit(w,K,b):n.transit(A,k,L)},n.setRef=function(e){n.refWrapper=e},n.state={status:n.props.open?b:L},n}return(0,f.Z)(t,[{key:"componentDidUpdate",value:function(e){e.open!==this.props.open&&this.toggle(this.props.open)}},{key:"componentWillUnmount",value:function(){this.clearDelay()}},{key:"getStyle",value:function(){var e=this.props.transitions.map(this.getTransition).join(",");return(0,o.Z)((0,o.Z)({},this.getExpandStyle()),{},{transition:e})}},{key:"render",value:function(){var e=this.props,r=e.className,t=e.children,n=e.tag,a={className:r,style:this.getStyle(),ref:this.setRef};return(0,j.jsx)(n,(0,o.Z)((0,o.Z)({},a),{},{children:t}))}}]),t}(a.Component);R.defaultProps={open:!1,duration:200,easing:"ease-in-out",className:"",tag:"div",transitions:["height","opacity"],styles:{}};var D=R,E=t(48143),N=t(58617),F=t(43360),_=function(e){var r=e.title,t=e.description,n=e.className,i=e.maxHeight,y=e.component,f=e.source,v=(0,a.useState)(!1),g=(0,s.Z)(v,2),C=g[0],L=g[1];return(0,j.jsxs)(E.Z,{className:n,title:(0,j.jsxs)("div",{className:"w-100",children:[(0,j.jsx)("div",{children:r}),(0,j.jsx)("div",{className:(0,c.default)(p,"text-truncate"),children:t})]}),extra:f?(0,j.jsx)(F.Z,{"aria-label":"view code",shape:"circle",onClick:function(){return L(!C)},children:(0,j.jsx)(N.oT$,{className:u})}):null,children:[(0,j.jsx)(D,{open:C,children:f?(0,j.jsx)(h.Z,{style:{borderRadius:8,background:"#333333",height:350,maxHeight:400},children:(0,j.jsx)(l.ZP,(0,o.Z)((0,o.Z)({},l.lG),{},{code:f,language:"jsx",theme:d,children:function(e){var r=e.style,t=e.tokens,n=e.getLineProps,a=e.getTokenProps;return(0,j.jsx)("pre",{className:m,style:(0,o.Z)((0,o.Z)({},r),{},{maxHeight:500}),children:t.map((function(e,r){return(0,j.jsx)("div",(0,o.Z)((0,o.Z)({},n({line:e,key:r})),{},{children:e.map((function(e,t){return(0,j.jsx)("span",(0,o.Z)({},a({token:e,key:t})),r)}))}),r)}))})}}))}):null}),(0,j.jsx)(h.Z,{style:{maxHeight:i},className:"position-relative",children:(0,j.jsx)("div",{className:(0,c.default)(x,"d-flex align-items-center justify-content-center w-100 p-3"),children:(0,j.jsx)(y,{})})})]})},T=_;_.defaultProps={description:"",maxHeight:500};var P=function(e){var r=e.title,t=e.description,n=e.className,a=e.maxHeight,o=e.component,s=e.source;return(0,j.jsx)(i.Z,{type:"bottom",interval:100,duration:450,children:(0,j.jsx)(T,{title:r,description:t,className:n,maxHeight:a,component:o,source:s},"card")})},q=P;P.defaultProps={description:"",maxHeight:500}},66398:function(e,r,t){t.d(r,{Z:function(){return d}});t(72791);var n="AppComponentHeader_headerTitle__A9HGS",a="AppComponentHeader_titleH3__owcvF",i="AppComponentHeader_textBase__Hw4ll",o=t(10077),s=t(43360),l=t(80184),c=function(e){var r=e.title,t=e.description,c=e.refUrl;return(0,l.jsx)(o.Z,{type:"top",height:"auto",interval:100,duration:450,children:(0,l.jsxs)("div",{className:"d-flex flex-column pb-3 flex-sm-row justify-content-sm-between pt-xxl-3",children:[(0,l.jsxs)("div",{className:n,children:[(0,l.jsx)("h3",{className:a,children:r}),t?(0,l.jsx)("h5",{className:i,children:t}):null]}),c?(0,l.jsx)("div",{style:{height:30},children:(0,l.jsx)(s.Z,{variant:"primary",href:c,target:"_blank",children:"Reference"})}):null]},"header")})},d=c;c.defaultProps={}},61708:function(e,r,t){t(72791);var n=t(89743),a=t(92914),i=t(80184);r.Z=function(e){var r=e.children;return(0,i.jsx)(n.Z,{className:a.Z.row,children:r})}},37462:function(e,r,t){t.r(r),t.d(r,{default:function(){return T}});var n=t(72791),a=t(19913),i=t(82165),o=t(90466),s=t(12891),l=t(82839),c=t(35667),d=t(27281),h=t(62066),p=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],m=t(80184),x=function(){return(0,m.jsx)(a.h,{width:"100%",height:200,children:(0,m.jsxs)(i.w,{data:p,margin:{top:10,right:0,left:-25,bottom:0},children:[(0,m.jsx)(o.K,{dataKey:"name"}),(0,m.jsx)(s.B,{}),(0,m.jsx)(l.q,{strokeDasharray:"3 3"}),(0,m.jsx)(c.u,{}),(0,m.jsx)(d.D,{}),(0,m.jsx)(h.x,{type:"monotone",dataKey:"pv",stroke:"#4299E1",activeDot:{r:8}}),(0,m.jsx)(h.x,{type:"monotone",dataKey:"uv",stroke:"#F04F47"})]})})},u=function(){return(0,m.jsx)(a.h,{width:"100%",height:200,children:(0,m.jsxs)(i.w,{layout:"vertical",data:p,margin:{top:10,right:0,left:-13,bottom:0},children:[(0,m.jsx)(o.K,{type:"number"}),(0,m.jsx)(s.B,{dataKey:"name",type:"category"}),(0,m.jsx)(l.q,{strokeDasharray:"3 3"}),(0,m.jsx)(c.u,{}),(0,m.jsx)(d.D,{}),(0,m.jsx)(h.x,{dataKey:"pv",stroke:"#4299E1"}),(0,m.jsx)(h.x,{dataKey:"uv",stroke:"#F04F47"})]})})},y=t(15671),f=t(43144),v=t(60136),g=t(27277),C=function(e){(0,v.Z)(t,e);var r=(0,g.Z)(t);function t(){return(0,y.Z)(this,t),r.apply(this,arguments)}return(0,f.Z)(t,[{key:"render",value:function(){var e=this.props,r=e.cx,t=e.cy;return e.value>2500?(0,m.jsx)("svg",{x:r-10,y:t-10,width:20,height:20,fill:"#dc3545",viewBox:"0 0 1024 1024",children:(0,m.jsx)("path",{d:"M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z"})}):(0,m.jsx)("svg",{x:r-10,y:t-10,width:20,height:20,fill:"#198754",viewBox:"0 0 1024 1024",children:(0,m.jsx)("path",{d:"M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z"})})}}]),t}(n.Component),j=function(){return(0,m.jsx)(a.h,{width:"100%",height:200,children:(0,m.jsxs)(i.w,{data:p,margin:{top:10,right:0,left:-25,bottom:0},children:[(0,m.jsx)(o.K,{dataKey:"name"}),(0,m.jsx)(s.B,{}),(0,m.jsx)(l.q,{strokeDasharray:"3 3"}),(0,m.jsx)(c.u,{}),(0,m.jsx)(d.D,{}),(0,m.jsx)(h.x,{type:"monotone",dataKey:"pv",stroke:"#4299E1",dot:(0,m.jsx)(C,{})}),(0,m.jsx)(h.x,{type:"monotone",dataKey:"uv",stroke:"#F04F47"})]})})},L=t(94783),A=function(){return(0,m.jsx)(a.h,{width:"100%",height:200,children:(0,m.jsxs)(i.w,{data:p,margin:{top:10,right:0,left:-25,bottom:0},children:[(0,m.jsx)(o.K,{dataKey:"name"}),(0,m.jsx)(s.B,{}),(0,m.jsx)(l.q,{strokeDasharray:"3 3"}),(0,m.jsx)(c.u,{}),(0,m.jsx)(d.D,{}),(0,m.jsx)(L.d,{x:"Page C",stroke:"#dc3545",label:"Max PV PAGE"}),(0,m.jsx)(L.d,{y:9800,label:"Max",stroke:"#dc3545"}),(0,m.jsx)(h.x,{type:"monotone",dataKey:"pv",stroke:"#4299E1"}),(0,m.jsx)(h.x,{type:"monotone",dataKey:"uv",stroke:"#F04F47"})]})})},k=function(){return(0,m.jsx)(a.h,{width:"100%",height:200,children:(0,m.jsxs)(i.w,{data:p,margin:{top:10,right:0,left:-25,bottom:0},children:[(0,m.jsx)(o.K,{dataKey:"name"}),(0,m.jsx)(s.B,{}),(0,m.jsx)(l.q,{strokeDasharray:"3 3"}),(0,m.jsx)(c.u,{}),(0,m.jsx)(d.D,{}),(0,m.jsx)(h.x,{type:"monotone",dataKey:"pv",stroke:"#4299E1",strokeDasharray:"5 5"}),(0,m.jsx)(h.x,{type:"monotone",dataKey:"uv",stroke:"#F04F47",strokeDasharray:"3 4 5 2"})]})})},b=function(){return(0,m.jsx)(a.h,{width:"100%",height:200,children:(0,m.jsxs)(i.w,{data:p,margin:{top:10,right:0,left:-25,bottom:0},children:[(0,m.jsx)(o.K,{dataKey:"name",padding:{left:30,right:30}}),(0,m.jsx)(s.B,{}),(0,m.jsx)(l.q,{strokeDasharray:"3 3"}),(0,m.jsx)(c.u,{}),(0,m.jsx)(d.D,{}),(0,m.jsx)(h.x,{type:"monotone",dataKey:"pv",stroke:"#4299E1",activeDot:{r:8}}),(0,m.jsx)(h.x,{type:"monotone",dataKey:"uv",stroke:"#F04F47"})]})})},w=(t.p,function(){return(0,m.jsx)(a.h,{width:"100%",height:600,children:(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"recharts-component-item",children:(0,m.jsx)(a.h,{width:"100%",height:200,children:(0,m.jsxs)(i.w,{data:p,margin:{top:10,right:0,left:-25,bottom:0},children:[(0,m.jsx)(o.K,{dataKey:"name"}),(0,m.jsx)(s.B,{}),(0,m.jsx)(l.q,{strokeDasharray:"3 3"}),(0,m.jsx)(c.u,{}),(0,m.jsx)(h.x,{type:"monotone",dataKey:"uv",stroke:"#4299E1",fill:"#4299E1"})]})})}),(0,m.jsx)("div",{className:"recharts-component-item",children:(0,m.jsx)(a.h,{width:"100%",height:200,children:(0,m.jsxs)(i.w,{data:p,margin:{top:10,right:0,left:-25,bottom:0},children:[(0,m.jsx)(o.K,{dataKey:"name"}),(0,m.jsx)(s.B,{}),(0,m.jsx)(l.q,{strokeDasharray:"3 3"}),(0,m.jsx)(c.u,{}),(0,m.jsx)(h.x,{connectNulls:!0,type:"monotone",dataKey:"uv",stroke:"#4299E1",fill:"#4299E1"})]})})})]})})}),K=t(28265),Z=t(18602),R=t(95697),D=function(){return(0,m.jsx)(a.h,{width:"100%",height:700,children:(0,m.jsxs)("div",{className:"recharts-component",children:[(0,m.jsx)("p",{children:"A demo of synchronized AreaCharts"}),(0,m.jsx)("div",{className:"recharts-component-item",children:(0,m.jsx)(a.h,{width:"100%",height:200,children:(0,m.jsxs)(i.w,{data:p,syncId:"anyId",margin:{top:10,right:0,left:-25,bottom:0},children:[(0,m.jsx)(o.K,{dataKey:"name"}),(0,m.jsx)(s.B,{}),(0,m.jsx)(l.q,{strokeDasharray:"3 3"}),(0,m.jsx)(c.u,{}),(0,m.jsx)(h.x,{type:"monotone",dataKey:"uv",stroke:"#4299E1",fill:"#4299E1"})]})})}),(0,m.jsx)("p",{children:"Maybe some other content"}),(0,m.jsx)("div",{className:"recharts-component-item",children:(0,m.jsx)(a.h,{width:"100%",height:200,children:(0,m.jsxs)(i.w,{data:p,syncId:"anyId",margin:{top:10,right:0,left:-25,bottom:0},children:[(0,m.jsx)(o.K,{dataKey:"name"}),(0,m.jsx)(s.B,{}),(0,m.jsx)(l.q,{strokeDasharray:"3 3"}),(0,m.jsx)(c.u,{}),(0,m.jsx)(h.x,{type:"monotone",dataKey:"pv",stroke:"#4299E1",fill:"#4299E1"})]})})}),(0,m.jsx)("div",{className:"recharts-component-item",children:(0,m.jsx)(a.h,{width:"100%",height:200,children:(0,m.jsxs)(K.T,{data:p,syncId:"anyId",margin:{top:10,right:0,left:-25,bottom:0},children:[(0,m.jsx)(o.K,{dataKey:"name"}),(0,m.jsx)(s.B,{}),(0,m.jsx)(l.q,{strokeDasharray:"3 3"}),(0,m.jsx)(c.u,{}),(0,m.jsx)(Z.u,{type:"monotone",dataKey:"pv",stroke:"#4299E1",fill:"#4299E1"}),(0,m.jsx)(R.B,{})]})})})]})})},E=t(2677),N=t(38081),F=t(66398),_=t(61708),T=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(F.Z,{title:"Line Chart",description:"All svg elements can be added into the LineChart component, such as defs.",refUrl:"http://recharts.org/en-US/api/LineChart"}),(0,m.jsxs)(_.Z,{children:[(0,m.jsx)(E.Z,{xs:12,xl:6,children:(0,m.jsx)(N.Z,{title:"Simple Line Chart",component:x,source:"import React from 'react';\r\nimport {\r\n  CartesianGrid,\r\n  Legend,\r\n  Line,\r\n  LineChart,\r\n  ResponsiveContainer,\r\n  Tooltip,\r\n  XAxis,\r\n  YAxis,\r\n} from 'recharts';\r\nimport data from './data';\r\n\r\nconst SimpleLineChart = () => (\r\n  <ResponsiveContainer width='100%' height={200}>\r\n    <LineChart data={data} margin={{top: 10, right: 0, left: -25, bottom: 0}}>\r\n      <XAxis dataKey='name' />\r\n      <YAxis />\r\n      <CartesianGrid strokeDasharray='3 3' />\r\n      <Tooltip />\r\n      <Legend />\r\n      <Line type='monotone' dataKey='pv' stroke='#4299E1' activeDot={{r: 8}} />\r\n      <Line type='monotone' dataKey='uv' stroke='#F04F47' />\r\n    </LineChart>\r\n  </ResponsiveContainer>\r\n);\r\n\r\nexport default SimpleLineChart;\r\n"})}),(0,m.jsx)(E.Z,{xs:12,xl:6,children:(0,m.jsx)(N.Z,{title:"Vertical Line Chart",component:u,source:"import React from 'react';\r\nimport {\r\n  CartesianGrid,\r\n  Legend,\r\n  Line,\r\n  LineChart,\r\n  ResponsiveContainer,\r\n  Tooltip,\r\n  XAxis,\r\n  YAxis,\r\n} from 'recharts';\r\nimport data from './data';\r\n\r\nconst VerticalLineChart = () => (\r\n  <ResponsiveContainer width='100%' height={200}>\r\n    <LineChart\r\n      layout='vertical'\r\n      data={data}\r\n      margin={{top: 10, right: 0, left: -13, bottom: 0}}>\r\n      <XAxis type='number' />\r\n      <YAxis dataKey='name' type='category' />\r\n      <CartesianGrid strokeDasharray='3 3' />\r\n      <Tooltip />\r\n      <Legend />\r\n      <Line dataKey='pv' stroke='#4299E1' />\r\n      <Line dataKey='uv' stroke='#F04F47' />\r\n    </LineChart>\r\n  </ResponsiveContainer>\r\n);\r\n\r\nexport default VerticalLineChart;\r\n"})}),(0,m.jsx)(E.Z,{xs:12,xl:6,children:(0,m.jsx)(N.Z,{title:"Customized Dot Line Chart",component:j,source:"import React, {Component} from 'react';\r\nimport {\r\n  CartesianGrid,\r\n  Legend,\r\n  Line,\r\n  LineChart,\r\n  ResponsiveContainer,\r\n  Tooltip,\r\n  XAxis,\r\n  YAxis,\r\n} from 'recharts';\r\nimport data from './data';\r\nimport PropTypes from 'prop-types';\r\n\r\nclass CustomizedDot extends Component {\r\n  render() {\r\n    const {cx, cy, value} = this.props;\r\n\r\n    if (value > 2500) {\r\n      return (\r\n        <svg\r\n          x={cx - 10}\r\n          y={cy - 10}\r\n          width={20}\r\n          height={20}\r\n          fill='#dc3545'\r\n          viewBox='0 0 1024 1024'>\r\n          <path d='M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z' />\r\n        </svg>\r\n      );\r\n    }\r\n\r\n    return (\r\n      <svg\r\n        x={cx - 10}\r\n        y={cy - 10}\r\n        width={20}\r\n        height={20}\r\n        fill='#198754'\r\n        viewBox='0 0 1024 1024'>\r\n        <path d='M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z' />\r\n      </svg>\r\n    );\r\n  }\r\n}\r\n\r\nCustomizedDot.propTypes = {\r\n  cx: PropTypes.number,\r\n  cy: PropTypes.number,\r\n  value: PropTypes.number,\r\n};\r\nconst CustomizedDotLineChart = () => (\r\n  <ResponsiveContainer width='100%' height={200}>\r\n    <LineChart data={data} margin={{top: 10, right: 0, left: -25, bottom: 0}}>\r\n      <XAxis dataKey='name' />\r\n      <YAxis />\r\n      <CartesianGrid strokeDasharray='3 3' />\r\n      <Tooltip />\r\n      <Legend />\r\n      <Line\r\n        type='monotone'\r\n        dataKey='pv'\r\n        stroke='#4299E1'\r\n        dot={<CustomizedDot />}\r\n      />\r\n      <Line type='monotone' dataKey='uv' stroke='#F04F47' />\r\n    </LineChart>\r\n  </ResponsiveContainer>\r\n);\r\n\r\nexport default CustomizedDotLineChart;\r\n"})}),(0,m.jsx)(E.Z,{xs:12,xl:6,children:(0,m.jsx)(N.Z,{title:"Line Chart With Reference Lines",component:A,source:"import React from 'react';\r\nimport {\r\n  CartesianGrid,\r\n  Legend,\r\n  Line,\r\n  LineChart,\r\n  ReferenceLine,\r\n  ResponsiveContainer,\r\n  Tooltip,\r\n  XAxis,\r\n  YAxis,\r\n} from 'recharts';\r\nimport data from './data';\r\n\r\nconst LineChartWithReferenceLines = () => (\r\n  <ResponsiveContainer width='100%' height={200}>\r\n    <LineChart data={data} margin={{top: 10, right: 0, left: -25, bottom: 0}}>\r\n      <XAxis dataKey='name' />\r\n      <YAxis />\r\n      <CartesianGrid strokeDasharray='3 3' />\r\n      <Tooltip />\r\n      <Legend />\r\n      <ReferenceLine x='Page C' stroke='#dc3545' label='Max PV PAGE' />\r\n      <ReferenceLine y={9800} label='Max' stroke='#dc3545' />\r\n      <Line type='monotone' dataKey='pv' stroke='#4299E1' />\r\n      <Line type='monotone' dataKey='uv' stroke='#F04F47' />\r\n    </LineChart>\r\n  </ResponsiveContainer>\r\n);\r\n\r\nexport default LineChartWithReferenceLines;\r\n"})}),(0,m.jsx)(E.Z,{xs:12,xl:6,children:(0,m.jsx)(N.Z,{title:"Dashed Line Chart",component:k,source:"import React from 'react';\r\nimport {\r\n  CartesianGrid,\r\n  Legend,\r\n  Line,\r\n  LineChart,\r\n  ResponsiveContainer,\r\n  Tooltip,\r\n  XAxis,\r\n  YAxis,\r\n} from 'recharts';\r\nimport data from './data';\r\n\r\nconst DashedLineChart = () => (\r\n  <ResponsiveContainer width='100%' height={200}>\r\n    <LineChart data={data} margin={{top: 10, right: 0, left: -25, bottom: 0}}>\r\n      <XAxis dataKey='name' />\r\n      <YAxis />\r\n      <CartesianGrid strokeDasharray='3 3' />\r\n      <Tooltip />\r\n      <Legend />\r\n      <Line\r\n        type='monotone'\r\n        dataKey='pv'\r\n        stroke='#4299E1'\r\n        strokeDasharray='5 5'\r\n      />\r\n      <Line\r\n        type='monotone'\r\n        dataKey='uv'\r\n        stroke='#F04F47'\r\n        strokeDasharray='3 4 5 2'\r\n      />\r\n    </LineChart>\r\n  </ResponsiveContainer>\r\n);\r\n\r\nexport default DashedLineChart;\r\n"})}),(0,m.jsx)(E.Z,{xs:12,xl:6,children:(0,m.jsx)(N.Z,{title:"Line Chart With X-Axis Padding",component:b,source:"import React from 'react';\r\nimport {\r\n  CartesianGrid,\r\n  Legend,\r\n  Line,\r\n  LineChart,\r\n  ResponsiveContainer,\r\n  Tooltip,\r\n  XAxis,\r\n  YAxis,\r\n} from 'recharts';\r\nimport data from './data';\r\n\r\nconst LineChartWithXAxisPading = () => (\r\n  <ResponsiveContainer width='100%' height={200}>\r\n    <LineChart data={data} margin={{top: 10, right: 0, left: -25, bottom: 0}}>\r\n      <XAxis dataKey='name' padding={{left: 30, right: 30}} />\r\n      <YAxis />\r\n      <CartesianGrid strokeDasharray='3 3' />\r\n      <Tooltip />\r\n      <Legend />\r\n      <Line type='monotone' dataKey='pv' stroke='#4299E1' activeDot={{r: 8}} />\r\n      <Line type='monotone' dataKey='uv' stroke='#F04F47' />\r\n    </LineChart>\r\n  </ResponsiveContainer>\r\n);\r\n\r\nexport default LineChartWithXAxisPading;\r\n"})}),(0,m.jsx)(E.Z,{xs:12,xl:6,children:(0,m.jsx)(N.Z,{title:"Synchronized Line Chart",component:D,source:"import React from 'react';\r\nimport {\r\n  Area,\r\n  AreaChart,\r\n  Brush,\r\n  CartesianGrid,\r\n  Line,\r\n  LineChart,\r\n  ResponsiveContainer,\r\n  Tooltip,\r\n  XAxis,\r\n  YAxis,\r\n} from 'recharts';\r\nimport data from './data';\r\nimport './index.style.less';\r\n\r\nconst SynchronizedLineChart = () => (\r\n  <ResponsiveContainer width='100%' height={700}>\r\n    <div className='recharts-component'>\r\n      <p>A demo of synchronized AreaCharts</p>\r\n      <div className='recharts-component-item'>\r\n        <ResponsiveContainer width='100%' height={200}>\r\n          <LineChart\r\n            data={data}\r\n            syncId='anyId'\r\n            margin={{top: 10, right: 0, left: -25, bottom: 0}}>\r\n            <XAxis dataKey='name' />\r\n            <YAxis />\r\n            <CartesianGrid strokeDasharray='3 3' />\r\n            <Tooltip />\r\n            <Line\r\n              type='monotone'\r\n              dataKey='uv'\r\n              stroke='#4299E1'\r\n              fill='#4299E1'\r\n            />\r\n          </LineChart>\r\n        </ResponsiveContainer>\r\n      </div>\r\n      <p>Maybe some other content</p>\r\n      <div className='recharts-component-item'>\r\n        <ResponsiveContainer width='100%' height={200}>\r\n          <LineChart\r\n            data={data}\r\n            syncId='anyId'\r\n            margin={{top: 10, right: 0, left: -25, bottom: 0}}>\r\n            <XAxis dataKey='name' />\r\n            <YAxis />\r\n            <CartesianGrid strokeDasharray='3 3' />\r\n            <Tooltip />\r\n            <Line\r\n              type='monotone'\r\n              dataKey='pv'\r\n              stroke='#4299E1'\r\n              fill='#4299E1'\r\n            />\r\n          </LineChart>\r\n        </ResponsiveContainer>\r\n      </div>\r\n      <div className='recharts-component-item'>\r\n        <ResponsiveContainer width='100%' height={200}>\r\n          <AreaChart\r\n            data={data}\r\n            syncId='anyId'\r\n            margin={{top: 10, right: 0, left: -25, bottom: 0}}>\r\n            <XAxis dataKey='name' />\r\n            <YAxis />\r\n            <CartesianGrid strokeDasharray='3 3' />\r\n            <Tooltip />\r\n            <Area\r\n              type='monotone'\r\n              dataKey='pv'\r\n              stroke='#4299E1'\r\n              fill='#4299E1'\r\n            />\r\n            <Brush />\r\n          </AreaChart>\r\n        </ResponsiveContainer>\r\n      </div>\r\n    </div>\r\n  </ResponsiveContainer>\r\n);\r\n\r\nexport default SynchronizedLineChart;\r\n"})}),(0,m.jsx)(E.Z,{xs:12,xl:6,children:(0,m.jsx)(N.Z,{title:"Line Chart Connect Nulls",component:w,source:"import React from 'react';\r\nimport {\r\n  CartesianGrid,\r\n  Line,\r\n  LineChart,\r\n  ResponsiveContainer,\r\n  Tooltip,\r\n  XAxis,\r\n  YAxis,\r\n} from 'recharts';\r\nimport data from './data';\r\nimport './index.style.less';\r\n\r\nconst LineChartConnectNulls = () => (\r\n  <ResponsiveContainer width='100%' height={600}>\r\n    <div>\r\n      <div className='recharts-component-item'>\r\n        <ResponsiveContainer width='100%' height={200}>\r\n          <LineChart\r\n            data={data}\r\n            margin={{top: 10, right: 0, left: -25, bottom: 0}}>\r\n            <XAxis dataKey='name' />\r\n            <YAxis />\r\n            <CartesianGrid strokeDasharray='3 3' />\r\n            <Tooltip />\r\n            <Line\r\n              type='monotone'\r\n              dataKey='uv'\r\n              stroke='#4299E1'\r\n              fill='#4299E1'\r\n            />\r\n          </LineChart>\r\n        </ResponsiveContainer>\r\n      </div>\r\n      <div className='recharts-component-item'>\r\n        <ResponsiveContainer width='100%' height={200}>\r\n          <LineChart\r\n            data={data}\r\n            margin={{top: 10, right: 0, left: -25, bottom: 0}}>\r\n            <XAxis dataKey='name' />\r\n            <YAxis />\r\n            <CartesianGrid strokeDasharray='3 3' />\r\n            <Tooltip />\r\n            <Line\r\n              connectNulls={true}\r\n              type='monotone'\r\n              dataKey='uv'\r\n              stroke='#4299E1'\r\n              fill='#4299E1'\r\n            />\r\n          </LineChart>\r\n        </ResponsiveContainer>\r\n      </div>\r\n    </div>\r\n  </ResponsiveContainer>\r\n);\r\n\r\nexport default LineChartConnectNulls;\r\n"})})]})]})}},85992:function(e,r,t){t.d(r,{W:function(){return d}});var n=t(72791),a=t(46044),i=t(57241);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(l){a=!0,i=l}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return t}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function d(e){var r=e.offset,t=e.layout,l=e.width,d=e.dataKey,h=e.data,p=e.dataPointFormatter,m=e.xAxis,x=e.yAxis,u=c(e,["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"]),y=(0,i.L6)(u),f=h.map((function(e,i){var c=p(e,d),h=c.x,u=c.y,f=c.value,v=c.errorVal;if(!v)return null;var g,C,j=[];if(Array.isArray(v)){var L=s(v,2);g=L[0],C=L[1]}else g=C=v;if("vertical"===t){var A=m.scale,k=u+r,b=k+l,w=k-l,K=A(f-g),Z=A(f+C);j.push({x1:Z,y1:b,x2:Z,y2:w}),j.push({x1:K,y1:k,x2:Z,y2:k}),j.push({x1:K,y1:b,x2:K,y2:w})}else if("horizontal"===t){var R=x.scale,D=h+r,E=D-l,N=D+l,F=R(f-g),_=R(f+C);j.push({x1:E,y1:_,x2:N,y2:_}),j.push({x1:D,y1:F,x2:D,y2:_}),j.push({x1:E,y1:F,x2:N,y2:F})}return n.createElement(a.m,o({className:"recharts-errorBar",key:"bar-".concat(i)},y),j.map((function(e,r){return n.createElement("line",o({},e,{key:"line-".concat(r)}))})))}));return n.createElement(a.m,{className:"recharts-errorBars"},f)}d.defaultProps={stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"},d.displayName="ErrorBar"},28265:function(e,r,t){t.d(r,{T:function(){return l}});var n=t(58351),a=t(18602),i=t(90466),o=t(12891),s=t(93137),l=(0,n.z)({chartName:"AreaChart",GraphicalChild:a.u,axisComponents:[{axisType:"xAxis",AxisComp:i.K},{axisType:"yAxis",AxisComp:o.B}],formatAxisMap:s.t9})},82165:function(e,r,t){t.d(r,{w:function(){return l}});var n=t(58351),a=t(62066),i=t(90466),o=t(12891),s=t(93137),l=(0,n.z)({chartName:"LineChart",GraphicalChild:a.x,axisComponents:[{axisType:"xAxis",AxisComp:i.K},{axisType:"yAxis",AxisComp:o.B}],formatAxisMap:s.t9})},92914:function(e,r){r.Z={row:"AppRowContainer_row__lSYCd"}}}]);
//# sourceMappingURL=5034.52c46c58.chunk.js.map