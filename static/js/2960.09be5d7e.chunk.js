"use strict";(self.webpackChunkctic=self.webpackChunkctic||[]).push([[2960],{48143:function(n,e,r){r.d(e,{Z:function(){return x}});var o=r(1413),t=r(45987),i=(r(72791),r(28182)),d="AppCard_card__lJ6Uc",s="AppCard_heightFull__T8kun",a="AppCard_cardBody__Yq-vX",l="AppCard_cardHeader__Y+R+4",p="AppCard_cardTitle__HaekO",c="AppCard_action__sd-8L",m="AppCard_cardFooter__qAyRn",u=r(9140),h=r(80184),w=["title","footer","children","className","titleClass","actionClass","footerClass","cardBodyClass","cardHeaderClass","action","heightFull","cardImg"],D=function(n){var e=n.title,r=n.footer,D=n.children,x=n.className,v=n.titleClass,f=n.actionClass,g=n.footerClass,Z=n.cardBodyClass,I=n.cardHeaderClass,j=n.action,y=n.heightFull,b=n.cardImg,A=(0,t.Z)(n,w);return(0,h.jsxs)(u.Z,(0,o.Z)((0,o.Z)({className:(0,i.default)(d,y?s:"",x),title:e},A),{},{children:[b?(0,h.jsx)(u.Z.Img,{variant:"top",src:b}):null,e||j?(0,h.jsxs)(u.Z.Header,{className:(0,i.default)(l,I),children:["object"===typeof e?e:(0,h.jsx)(u.Z.Title,{className:(0,i.default)(p,"mb-0 text-truncate",v),children:e}),"object"===typeof j?j:(0,h.jsx)("a",{className:(0,i.default)(c,"text-decoration-none ms-1",f),href:"#",children:j})]}):null,(0,h.jsx)(u.Z.Body,{className:(0,i.default)(a,Z),children:D}),r?(0,h.jsx)(u.Z.Footer,{className:(0,i.default)(m,g),children:r}):null]}))},x=D;D.defaultProps={}},38081:function(n,e,r){r.d(e,{Z:function(){return H}});var o,t=r(72791),i=r(10077),d=r(1413),s=r(29439),a=r(60185),l=r(28182),p={plain:{color:"#F8F8F2",fontFamily:"Poppins",fontWeight:r(1975).F3.REGULAR,backgroundColor:"#333333"},styles:[{types:["prolog","constant","builtin"],style:{color:"#FFFFFF"}},{types:["inserted","tag","function"],style:{color:"#E6DB74"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","selector"],style:{color:"#98CD2F"}},{types:["keyword","variable"],style:{color:"#65D4EA"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"#98CD2F"}}]},c=r(38109),m="AppComponentCard_compCardTitleDescription__SHL6w",u="AppComponentCard_preTag__0+EII",h="AppComponentCard_componentRoot__dgPU7",w="AppComponentCard_codeIcon__mUnRp",D=r(15671),x=r(43144),v=r(60136),f=r(27277),g=r(4942),Z=r(80184),I="close",j="closing",y="closed",b="open",A="opening",S="opened",k=(o={},(0,g.Z)(o,I,I),(0,g.Z)(o,y,I),(0,g.Z)(o,A,I),(0,g.Z)(o,j,b),(0,g.Z)(o,b,b),(0,g.Z)(o,S,b),o),B=function(n){(0,v.Z)(r,n);var e=(0,f.Z)(r);function r(n){var o;return(0,D.Z)(this,r),(o=e.call(this,n)).getClientHeight=function(){return o.refWrapper.scrollHeight},o.getDefaultExpandStyle=function(){switch(o.state.status){case A:case I:case y:return{height:0,opacity:0,overflow:"hidden"};case S:case j:return{height:o.getClientHeight(),opacity:1,overflow:"hidden"};default:return{height:"auto",opacity:1,overflow:"unset"}}},o.getExpandStyle=function(){return(0,d.Z)((0,d.Z)({},o.getDefaultExpandStyle()),o.props.styles[k[o.state.status]])},o.getTransition=function(n){return"".concat(n," ").concat(o.props.duration,"ms ").concat(o.props.easing)},o.updateStatus=function(n){return o.setState({status:n})},o.delay=function(n,e){o.timeout=setTimeout(n,e)},o.clearDelay=function(){o.timeout&&clearTimeout(o.timeout)},o.transit=function(n,e,r){var t=o.props.duration;o.updateStatus(n),o.delay((function(){o.updateStatus(e),o.delay((function(){o.updateStatus(r)}),t)}),20)},o.toggle=function(n){o.clearDelay(),n?o.transit(A,S,b):o.transit(j,y,I)},o.setRef=function(n){o.refWrapper=n},o.state={status:o.props.open?b:I},o}return(0,x.Z)(r,[{key:"componentDidUpdate",value:function(n){n.open!==this.props.open&&this.toggle(this.props.open)}},{key:"componentWillUnmount",value:function(){this.clearDelay()}},{key:"getStyle",value:function(){var n=this.props.transitions.map(this.getTransition).join(",");return(0,d.Z)((0,d.Z)({},this.getExpandStyle()),{},{transition:n})}},{key:"render",value:function(){var n=this.props,e=n.className,r=n.children,o=n.tag,t={className:e,style:this.getStyle(),ref:this.setRef};return(0,Z.jsx)(o,(0,d.Z)((0,d.Z)({},t),{},{children:r}))}}]),r}(t.Component);B.defaultProps={open:!1,duration:200,easing:"ease-in-out",className:"",tag:"div",transitions:["height","opacity"],styles:{}};var N=B,M=r(48143),C=r(58617),K=r(43360),T=function(n){var e=n.title,r=n.description,o=n.className,i=n.maxHeight,D=n.component,x=n.source,v=(0,t.useState)(!1),f=(0,s.Z)(v,2),g=f[0],I=f[1];return(0,Z.jsxs)(M.Z,{className:o,title:(0,Z.jsxs)("div",{className:"w-100",children:[(0,Z.jsx)("div",{children:e}),(0,Z.jsx)("div",{className:(0,l.default)(m,"text-truncate"),children:r})]}),extra:x?(0,Z.jsx)(K.Z,{"aria-label":"view code",shape:"circle",onClick:function(){return I(!g)},children:(0,Z.jsx)(C.oT$,{className:w})}):null,children:[(0,Z.jsx)(N,{open:g,children:x?(0,Z.jsx)(c.Z,{style:{borderRadius:8,background:"#333333",height:350,maxHeight:400},children:(0,Z.jsx)(a.ZP,(0,d.Z)((0,d.Z)({},a.lG),{},{code:x,language:"jsx",theme:p,children:function(n){var e=n.style,r=n.tokens,o=n.getLineProps,t=n.getTokenProps;return(0,Z.jsx)("pre",{className:u,style:(0,d.Z)((0,d.Z)({},e),{},{maxHeight:500}),children:r.map((function(n,e){return(0,Z.jsx)("div",(0,d.Z)((0,d.Z)({},o({line:n,key:e})),{},{children:n.map((function(n,r){return(0,Z.jsx)("span",(0,d.Z)({},t({token:n,key:r})),e)}))}),e)}))})}}))}):null}),(0,Z.jsx)(c.Z,{style:{maxHeight:i},className:"position-relative",children:(0,Z.jsx)("div",{className:(0,l.default)(h,"d-flex align-items-center justify-content-center w-100 p-3"),children:(0,Z.jsx)(D,{})})})]})},_=T;T.defaultProps={description:"",maxHeight:500};var R=function(n){var e=n.title,r=n.description,o=n.className,t=n.maxHeight,d=n.component,s=n.source;return(0,Z.jsx)(i.Z,{type:"bottom",interval:100,duration:450,children:(0,Z.jsx)(_,{title:e,description:r,className:o,maxHeight:t,component:d,source:s},"card")})},H=R;R.defaultProps={description:"",maxHeight:500}},66398:function(n,e,r){r.d(e,{Z:function(){return p}});r(72791);var o="AppComponentHeader_headerTitle__A9HGS",t="AppComponentHeader_titleH3__owcvF",i="AppComponentHeader_textBase__Hw4ll",d=r(10077),s=r(43360),a=r(80184),l=function(n){var e=n.title,r=n.description,l=n.refUrl;return(0,a.jsx)(d.Z,{type:"top",height:"auto",interval:100,duration:450,children:(0,a.jsxs)("div",{className:"d-flex flex-column pb-3 flex-sm-row justify-content-sm-between pt-xxl-3",children:[(0,a.jsxs)("div",{className:o,children:[(0,a.jsx)("h3",{className:t,children:e}),r?(0,a.jsx)("h5",{className:i,children:r}):null]}),l?(0,a.jsx)("div",{style:{height:30},children:(0,a.jsx)(s.Z,{variant:"primary",href:l,target:"_blank",children:"Reference"})}):null]},"header")})},p=l;l.defaultProps={}},11406:function(n,e,r){var o=r(45987),t=r(1413),i=(r(72791),r(92914)),d=r(10077),s=r(89743),a=r(80184),l=["children"],p=function(n){return(0,a.jsx)(s.Z,(0,t.Z)({className:i.Z.row},n))};e.Z=function(n){var e=n.children,r=(0,o.Z)(n,l);return(0,a.jsx)(d.Z,(0,t.Z)((0,t.Z)({animateStyle:{flexDirection:"row"},component:p,type:"bottom",ease:"easeInOutQuart",height:"auto"},r),{},{children:e}))}},29711:function(n,e,r){r(72791);var o=r(45279),t=r(56144),i=r(82457),d=r(49391),s=r(17011),a=r(80184);e.Z=function(){return(0,a.jsx)("div",{style:{width:"100%"},children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"mb-2",children:["up","down","start","end"].map((function(n){return(0,a.jsxs)(o.Z,{as:t.Z,id:"dropdown-button-drop-".concat(n),drop:n,variant:"secondary",title:" Drop ".concat(n," "),children:[(0,a.jsx)(i.Z.Item,{eventKey:"1",children:"Action"}),(0,a.jsx)(i.Z.Item,{eventKey:"2",children:"Another action"}),(0,a.jsx)(i.Z.Item,{eventKey:"3",children:"Something else here"}),(0,a.jsx)(i.Z.Divider,{}),(0,a.jsx)(i.Z.Item,{eventKey:"4",children:"Separated link"})]},n)}))}),(0,a.jsx)("div",{className:s.Z.dropDownDemoWrapper2,children:["up","down","start","end"].map((function(n){return(0,a.jsxs)(d.Z,{id:"dropdown-button-drop-".concat(n),drop:n,variant:"secondary",title:"Drop ".concat(n),children:[(0,a.jsx)(i.Z.Item,{eventKey:"1",children:"Action"}),(0,a.jsx)(i.Z.Item,{eventKey:"2",children:"Another action"}),(0,a.jsx)(i.Z.Item,{eventKey:"3",children:"Something else here"}),(0,a.jsx)(i.Z.Divider,{}),(0,a.jsx)(i.Z.Item,{eventKey:"4",children:"Separated link"})]},n)}))})]})})}},82960:function(n,e,r){r.r(e),r.d(e,{default:function(){return K}});r(72791);var o=r(66398),t=r(11406),i=r(2677),d=r(38081),s=r(82457),a=r(80184),l=function(){return(0,a.jsx)("div",{children:(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(s.Z.Toggle,{variant:"success",id:"dropdown-basic",children:"Dropdown Button"}),(0,a.jsxs)(s.Z.Menu,{children:[(0,a.jsx)(s.Z.Item,{href:"#/action-1",children:"Action"}),(0,a.jsx)(s.Z.Item,{href:"#/action-2",children:"Another action"}),(0,a.jsx)(s.Z.Item,{href:"#/action-3",children:"Something else"})]})]})})},p=r(56144),c=r(43360),m=r(17011),u=function(){return(0,a.jsx)("div",{children:(0,a.jsxs)(s.Z,{as:p.Z,children:[(0,a.jsx)(c.Z,{variant:"success",className:m.Z.inputGroupBtnRight,children:"Split Button"}),(0,a.jsx)(s.Z.Toggle,{split:!0,variant:"success",id:"dropdown-split-basic",className:m.Z.inputGroupBtnLeft}),(0,a.jsxs)(s.Z.Menu,{children:[(0,a.jsx)(s.Z.Item,{href:"#/action-1",children:"Action"}),(0,a.jsx)(s.Z.Item,{href:"#/action-2",children:"Another action"}),(0,a.jsx)(s.Z.Item,{href:"#/action-3",children:"Something else"})]})]})})},h=r(45279),w=function(){return(0,a.jsxs)("div",{style:{width:"100%"},children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(s.Z.Toggle,{id:"dropdown-button-dark-example1",variant:"secondary",children:"Dropdown Button"}),(0,a.jsxs)(s.Z.Menu,{variant:"dark",children:[(0,a.jsx)(s.Z.Item,{href:"#/action-1",active:!0,children:"Action"}),(0,a.jsx)(s.Z.Item,{href:"#/action-2",children:"Another action"}),(0,a.jsx)(s.Z.Item,{href:"#/action-3",children:"Something else"}),(0,a.jsx)(s.Z.Divider,{}),(0,a.jsx)(s.Z.Item,{href:"#/action-4",children:"Separated link"})]})]}),(0,a.jsxs)(h.Z,{id:"dropdown-button-dark-example2",variant:"secondary",menuVariant:"dark",title:"Dropdown button",className:"mt-2",children:[(0,a.jsx)(s.Z.Item,{href:"#/action-1",active:!0,children:"Action"}),(0,a.jsx)(s.Z.Item,{href:"#/action-2",children:"Another action"}),(0,a.jsx)(s.Z.Item,{href:"#/action-3",children:"Something else"}),(0,a.jsx)(s.Z.Divider,{}),(0,a.jsx)(s.Z.Item,{href:"#/action-4",children:"Separated link"})]})]})},D=r(75700),x=r(49391),v=r(28182),f=function(){return(0,a.jsxs)("div",{style:{width:"100%"},children:[(0,a.jsx)("div",{className:(0,v.default)(m.Z.dropDownDemoWrapper,"mb-2"),children:[h.Z,x.Z].map((function(n,e){return(0,a.jsxs)(n,{as:p.Z,id:"dropdown-button-drop-".concat(e),size:"lg",title:"Drop large",children:[(0,a.jsx)(D.Z,{eventKey:"1",children:"Action"}),(0,a.jsx)(D.Z,{eventKey:"2",children:"Another action"}),(0,a.jsx)(D.Z,{eventKey:"3",children:"Something else here"}),(0,a.jsx)(s.Z.Divider,{}),(0,a.jsx)(D.Z,{eventKey:"4",children:"Separated link"})]},e)}))}),(0,a.jsx)("div",{className:m.Z.dropDownDemoWrapper,children:[h.Z,x.Z].map((function(n,e){return(0,a.jsxs)(n,{as:p.Z,id:"dropdown-button-drop-".concat(e),size:"sm",variant:"secondary",title:"Drop small",children:[(0,a.jsx)(D.Z,{eventKey:"1",children:"Action"}),(0,a.jsx)(D.Z,{eventKey:"2",children:"Another action"}),(0,a.jsx)(D.Z,{eventKey:"3",children:"Something else here"}),(0,a.jsx)(s.Z.Divider,{}),(0,a.jsx)(D.Z,{eventKey:"4",children:"Separated link"})]},e)}))})]})},g=r(49506),Z=r(47022),I=r(9249),j=r(32354),y=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(g.Z,{variant:"dark",bg:"dark",expand:"lg",children:(0,a.jsxs)(Z.Z,{fluid:!0,children:[(0,a.jsx)(g.Z.Brand,{href:"#home",children:"React-Bootstrap"}),(0,a.jsx)(g.Z.Toggle,{"aria-controls":"navbar-dark-example"}),(0,a.jsx)(g.Z.Collapse,{id:"navbar-dark-example",children:(0,a.jsx)(I.Z,{children:(0,a.jsxs)(j.Z,{id:"nav-dropdown-dark-example",title:"Dropdown",menuVariant:"dark",children:[(0,a.jsx)(j.Z.Item,{href:"#action/3.1",children:"Action"}),(0,a.jsx)(j.Z.Item,{href:"#action/3.2",children:"Another action"}),(0,a.jsx)(j.Z.Item,{href:"#action/3.3",children:"Something"}),(0,a.jsx)(j.Z.Divider,{}),(0,a.jsx)(j.Z.Item,{href:"#action/3.4",children:"Separated link"})]})})})]})})})},b=r(29711),A=function(){return(0,a.jsx)("div",{children:(0,a.jsxs)(h.Z,{id:"dropdown-item-button",title:"Dropdown button",children:[(0,a.jsx)(s.Z.ItemText,{children:"Dropdown item text"}),(0,a.jsx)(s.Z.Item,{as:"button",children:"Action"}),(0,a.jsx)(s.Z.Item,{as:"button",children:"Another action"}),(0,a.jsx)(s.Z.Item,{as:"button",children:"Something else"})]})})},S=function(){return(0,a.jsx)("div",{children:(0,a.jsxs)(h.Z,{align:"end",title:"Dropdown end",id:"dropdown-menu-align-end",children:[(0,a.jsx)(s.Z.Item,{eventKey:"1",children:"Action"}),(0,a.jsx)(s.Z.Item,{eventKey:"2",children:"Another action"}),(0,a.jsx)(s.Z.Item,{eventKey:"3",children:"Something else here"}),(0,a.jsx)(s.Z.Divider,{}),(0,a.jsx)(s.Z.Item,{eventKey:"4",children:"Separated link"})]})})},k=function(){return(0,a.jsxs)("div",{style:{width:"100%"},children:[(0,a.jsx)("div",{children:(0,a.jsxs)(h.Z,{as:p.Z,align:{lg:"end"},title:"Left-aligned but right aligned when large screen",id:"dropdown-menu-align-responsive-1",children:[(0,a.jsx)(s.Z.Item,{eventKey:"1",children:"Action 1"}),(0,a.jsx)(s.Z.Item,{eventKey:"2",children:"Action 2"})]})}),(0,a.jsx)("div",{className:(0,v.default)(m.Z.dropDownDemoWrapper2,"mb-2"),children:(0,a.jsxs)(x.Z,{align:{lg:"start"},title:"Right-aligned but left aligned when large screen",id:"dropdown-menu-align-responsive-2",children:[(0,a.jsx)(s.Z.Item,{eventKey:"1",children:"Action 1"}),(0,a.jsx)(s.Z.Item,{eventKey:"2",children:"Action 2"})]})})]})},B=function(){return(0,a.jsx)("div",{style:{width:"100%"},children:(0,a.jsxs)(s.Z.Menu,{show:!0,children:[(0,a.jsx)(s.Z.Header,{children:"Dropdown header"}),(0,a.jsx)(s.Z.Item,{eventKey:"2",children:"Another action"}),(0,a.jsx)(s.Z.Item,{eventKey:"3",children:"Something else here"})]})})},N=function(){return(0,a.jsx)("div",{style:{width:"100%"},children:(0,a.jsxs)(s.Z.Menu,{show:!0,children:[(0,a.jsx)(s.Z.Item,{eventKey:"1",children:"Action"}),(0,a.jsx)(s.Z.Item,{eventKey:"2",children:"Another action"}),(0,a.jsx)(s.Z.Item,{eventKey:"3",children:"Something else here"}),(0,a.jsx)(s.Z.Divider,{}),(0,a.jsx)(s.Z.Item,{eventKey:"4",children:"Separated link"})]})})},M=function(){return(0,a.jsx)("div",{style:{width:"100%"},children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.Z,{className:"d-inline mx-2",children:[(0,a.jsx)(s.Z.Toggle,{id:"dropdown-autoclose-true",children:"Default Dropdown"}),(0,a.jsxs)(s.Z.Menu,{children:[(0,a.jsx)(s.Z.Item,{href:"#",children:"Menu Item"}),(0,a.jsx)(s.Z.Item,{href:"#",children:"Menu Item"}),(0,a.jsx)(s.Z.Item,{href:"#",children:"Menu Item"})]})]}),(0,a.jsxs)(s.Z,{className:"d-inline mx-2",autoClose:"inside",children:[(0,a.jsx)(s.Z.Toggle,{id:"dropdown-autoclose-inside",children:"Clickable Outside"}),(0,a.jsxs)(s.Z.Menu,{children:[(0,a.jsx)(s.Z.Item,{href:"#",children:"Menu Item"}),(0,a.jsx)(s.Z.Item,{href:"#",children:"Menu Item"}),(0,a.jsx)(s.Z.Item,{href:"#",children:"Menu Item"})]})]}),(0,a.jsxs)(s.Z,{className:"d-inline mx-2",autoClose:"outside",children:[(0,a.jsx)(s.Z.Toggle,{id:"dropdown-autoclose-outside",children:"Clickable Inside"}),(0,a.jsxs)(s.Z.Menu,{children:[(0,a.jsx)(s.Z.Item,{href:"#",children:"Menu Item"}),(0,a.jsx)(s.Z.Item,{href:"#",children:"Menu Item"}),(0,a.jsx)(s.Z.Item,{href:"#",children:"Menu Item"})]})]}),(0,a.jsxs)(s.Z,{className:"d-inline mx-2",autoClose:!1,children:[(0,a.jsx)(s.Z.Toggle,{id:"dropdown-autoclose-false",children:"Manual Close"}),(0,a.jsxs)(s.Z.Menu,{children:[(0,a.jsx)(s.Z.Item,{href:"#",children:"Menu Item"}),(0,a.jsx)(s.Z.Item,{href:"#",children:"Menu Item"}),(0,a.jsx)(s.Z.Item,{href:"#",children:"Menu Item"})]})]})]})})},C=function(){return(0,a.jsx)("div",{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.Z,{as:p.Z,children:[(0,a.jsx)(s.Z.Toggle,{id:"dropdown-custom-1",children:"Pow! Zoom!"}),(0,a.jsxs)(s.Z.Menu,{className:"super-colors",children:[(0,a.jsx)(s.Z.Item,{eventKey:"1",children:"Action"}),(0,a.jsx)(s.Z.Item,{eventKey:"2",children:"Another action"}),(0,a.jsx)(s.Z.Item,{eventKey:"3",active:!0,children:"Active Item"}),(0,a.jsx)(s.Z.Divider,{}),(0,a.jsx)(s.Z.Item,{eventKey:"4",children:"Separated link"})]})]})," ",(0,a.jsxs)(s.Z,{as:p.Z,children:[(0,a.jsx)(c.Z,{variant:"info",className:m.Z.inputGroupBtnRight,children:"mix it up style-wise"}),(0,a.jsx)(s.Z.Toggle,{split:!0,variant:"success",id:"dropdown-custom-2",className:m.Z.inputGroupBtnLeft}),(0,a.jsxs)(s.Z.Menu,{className:"super-colors",children:[(0,a.jsx)(s.Z.Item,{eventKey:"1",children:"Action"}),(0,a.jsx)(s.Z.Item,{eventKey:"2",children:"Another action"}),(0,a.jsx)(s.Z.Item,{eventKey:"3",active:!0,children:"Active Item"}),(0,a.jsx)(s.Z.Divider,{}),(0,a.jsx)(s.Z.Item,{eventKey:"4",children:"Separated link"})]})]})]})})},K=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{title:"Dropdowns",description:"Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin",refUrl:"https://react-bootstrap.github.io/components/dropdowns/"}),(0,a.jsxs)(t.Z,{children:[(0,a.jsx)(i.Z,{xs:12,md:6,children:(0,a.jsx)(d.Z,{title:"Single button dropdowns",component:l,source:"import React from 'react';\r\nimport {Dropdown} from 'react-bootstrap';\r\n\r\nconst Examples = () => {\r\n  return (\r\n    <div>\r\n      <Dropdown>\r\n        <Dropdown.Toggle variant='success' id='dropdown-basic'>\r\n          Dropdown Button\r\n        </Dropdown.Toggle>\r\n\r\n        <Dropdown.Menu>\r\n          <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>\r\n          <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>\r\n          <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>\r\n        </Dropdown.Menu>\r\n      </Dropdown>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Examples;\r\n",noScrollbar:!0,description:"The basic Dropdown is composed of a wrapping Dropdown and inner <DropdownMenu>, and <DropdownToggle>. By default the <DropdownToggle> will render a Button component and accepts all the same props."})}),(0,a.jsx)(i.Z,{xs:12,md:6,children:(0,a.jsx)(d.Z,{title:"Split Button",component:u,source:"import React from 'react';\r\nimport {Button, ButtonGroup, Dropdown} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nconst Split = () => {\r\n  return (\r\n    <div>\r\n      <Dropdown as={ButtonGroup}>\r\n        <Button variant='success' className={styles.inputGroupBtnRight}>\r\n          Split Button\r\n        </Button>\r\n\r\n        <Dropdown.Toggle\r\n          split\r\n          variant='success'\r\n          id='dropdown-split-basic'\r\n          className={styles.inputGroupBtnLeft}\r\n        />\r\n\r\n        <Dropdown.Menu>\r\n          <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>\r\n          <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>\r\n          <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>\r\n        </Dropdown.Menu>\r\n      </Dropdown>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Split;\r\n",noScrollbar:!0,description:"As with DropdownButton, SplitButton is provided as convenience component."})}),(0,a.jsx)(i.Z,{xs:12,md:6,children:(0,a.jsx)(d.Z,{title:"Sizing",component:f,source:"import React from 'react';\r\nimport DropdownItem from 'react-bootstrap/DropdownItem';\r\nimport {\r\n  ButtonGroup,\r\n  Dropdown,\r\n  DropdownButton,\r\n  SplitButton,\r\n} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\nimport clsx from 'clsx';\r\n\r\nconst Sizing = () => {\r\n  return (\r\n    <div style={{width: '100%'}}>\r\n      <div className={clsx(styles.dropDownDemoWrapper, 'mb-2')}>\r\n        {[DropdownButton, SplitButton].map((DropdownType, idx) => (\r\n          <DropdownType\r\n            as={ButtonGroup}\r\n            key={idx}\r\n            id={`dropdown-button-drop-${idx}`}\r\n            size='lg'\r\n            title='Drop large'>\r\n            <DropdownItem eventKey='1'>Action</DropdownItem>\r\n            <DropdownItem eventKey='2'>Another action</DropdownItem>\r\n            <DropdownItem eventKey='3'>Something else here</DropdownItem>\r\n            <Dropdown.Divider />\r\n            <DropdownItem eventKey='4'>Separated link</DropdownItem>\r\n          </DropdownType>\r\n        ))}\r\n      </div>\r\n      <div className={styles.dropDownDemoWrapper}>\r\n        {[DropdownButton, SplitButton].map((DropdownType, idx) => (\r\n          <DropdownType\r\n            as={ButtonGroup}\r\n            key={idx}\r\n            id={`dropdown-button-drop-${idx}`}\r\n            size='sm'\r\n            variant='secondary'\r\n            title='Drop small'>\r\n            <DropdownItem eventKey='1'>Action</DropdownItem>\r\n            <DropdownItem eventKey='2'>Another action</DropdownItem>\r\n            <DropdownItem eventKey='3'>Something else here</DropdownItem>\r\n            <Dropdown.Divider />\r\n            <DropdownItem eventKey='4'>Separated link</DropdownItem>\r\n          </DropdownType>\r\n        ))}\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Sizing;\r\n",noScrollbar:!0,description:"Dropdowns work with buttons of all sizes."})}),(0,a.jsx)(i.Z,{xs:12,md:6,children:(0,a.jsx)(d.Z,{title:"Dark dropdowns",component:w,source:"import React from 'react';\r\nimport {Dropdown, DropdownButton} from 'react-bootstrap';\r\n\r\nconst Dark = () => {\r\n  return (\r\n    <div style={{width: '100%'}}>\r\n      <Dropdown>\r\n        <Dropdown.Toggle id='dropdown-button-dark-example1' variant='secondary'>\r\n          Dropdown Button\r\n        </Dropdown.Toggle>\r\n\r\n        <Dropdown.Menu variant='dark'>\r\n          <Dropdown.Item href='#/action-1' active>\r\n            Action\r\n          </Dropdown.Item>\r\n          <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>\r\n          <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>\r\n          <Dropdown.Divider />\r\n          <Dropdown.Item href='#/action-4'>Separated link</Dropdown.Item>\r\n        </Dropdown.Menu>\r\n      </Dropdown>\r\n\r\n      <DropdownButton\r\n        id='dropdown-button-dark-example2'\r\n        variant='secondary'\r\n        menuVariant='dark'\r\n        title='Dropdown button'\r\n        className='mt-2'>\r\n        <Dropdown.Item href='#/action-1' active>\r\n          Action\r\n        </Dropdown.Item>\r\n        <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>\r\n        <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>\r\n        <Dropdown.Divider />\r\n        <Dropdown.Item href='#/action-4'>Separated link</Dropdown.Item>\r\n      </DropdownButton>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Dark;\r\n",noScrollbar:!0,description:'Opt into darker dropdowns to match a dark navbar or custom style by adding variant="dark" onto an existing DropdownMenu. Alternatively, use menuVariant="dark" when using the DropdownButton component.'})}),(0,a.jsx)(i.Z,{xs:12,md:6,children:(0,a.jsx)(d.Z,{title:"Dark dropdowns 2",component:y,source:"import React from 'react';\r\nimport {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';\r\n\r\nconst UsingDemo = () => {\r\n  return (\r\n    <div>\r\n      <Navbar variant='dark' bg='dark' expand='lg'>\r\n        <Container fluid>\r\n          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>\r\n          <Navbar.Toggle aria-controls='navbar-dark-example' />\r\n          <Navbar.Collapse id='navbar-dark-example'>\r\n            <Nav>\r\n              <NavDropdown\r\n                id='nav-dropdown-dark-example'\r\n                title='Dropdown'\r\n                menuVariant='dark'>\r\n                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>\r\n                <NavDropdown.Item href='#action/3.2'>\r\n                  Another action\r\n                </NavDropdown.Item>\r\n                <NavDropdown.Item href='#action/3.3'>\r\n                  Something\r\n                </NavDropdown.Item>\r\n                <NavDropdown.Divider />\r\n                <NavDropdown.Item href='#action/3.4'>\r\n                  Separated link\r\n                </NavDropdown.Item>\r\n              </NavDropdown>\r\n            </Nav>\r\n          </Navbar.Collapse>\r\n        </Container>\r\n      </Navbar>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default UsingDemo;\r\n",noScrollbar:!0,description:'Using menuVariant="dark" in a NavDropdown:'})}),(0,a.jsx)(i.Z,{xs:12,md:6,children:(0,a.jsx)(d.Z,{title:"Drop directions",component:b.Z,source:"import React from 'react';\r\nimport {\r\n  ButtonGroup,\r\n  Dropdown,\r\n  DropdownButton,\r\n  SplitButton,\r\n} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nconst Drop = () => {\r\n  return (\r\n    <div style={{width: '100%'}}>\r\n      <>\r\n        <div className='mb-2'>\r\n          {['up', 'down', 'start', 'end'].map((direction) => (\r\n            <DropdownButton\r\n              as={ButtonGroup}\r\n              key={direction}\r\n              id={`dropdown-button-drop-${direction}`}\r\n              drop={direction}\r\n              variant='secondary'\r\n              title={` Drop ${direction} `}>\r\n              <Dropdown.Item eventKey='1'>Action</Dropdown.Item>\r\n              <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>\r\n              <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>\r\n              <Dropdown.Divider />\r\n              <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>\r\n            </DropdownButton>\r\n          ))}\r\n        </div>\r\n\r\n        <div className={styles.dropDownDemoWrapper2}>\r\n          {['up', 'down', 'start', 'end'].map((direction) => (\r\n            <SplitButton\r\n              key={direction}\r\n              id={`dropdown-button-drop-${direction}`}\r\n              drop={direction}\r\n              variant='secondary'\r\n              title={`Drop ${direction}`}>\r\n              <Dropdown.Item eventKey='1'>Action</Dropdown.Item>\r\n              <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>\r\n              <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>\r\n              <Dropdown.Divider />\r\n              <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>\r\n            </SplitButton>\r\n          ))}\r\n        </div>\r\n      </>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Drop;\r\n",noScrollbar:!0,description:"Trigger dropdown menus above, below, left, or to the right of their toggle elements, with the drop prop."})}),(0,a.jsx)(i.Z,{xs:12,md:6,children:(0,a.jsx)(d.Z,{title:"Dropdown items",component:A,source:"import React from 'react';\r\nimport {DropdownButton, Dropdown} from 'react-bootstrap';\r\n\r\nconst Items = () => {\r\n  return (\r\n    <div>\r\n      <DropdownButton id='dropdown-item-button' title='Dropdown button'>\r\n        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>\r\n        <Dropdown.Item as='button'>Action</Dropdown.Item>\r\n        <Dropdown.Item as='button'>Another action</Dropdown.Item>\r\n        <Dropdown.Item as='button'>Something else</Dropdown.Item>\r\n      </DropdownButton>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Items;\r\n",noScrollbar:!0,description:"Historically dropdown menu contents had to be links, but that\u2019s no longer the case with v4. Now you can optionally use <button> elements in your dropdowns instead of just <a>s."})}),(0,a.jsx)(i.Z,{xs:12,md:6,children:(0,a.jsx)(d.Z,{title:"Menu Alignment",component:S,source:"import React from 'react';\r\nimport {DropdownButton, Dropdown} from 'react-bootstrap';\r\n\r\nconst MenuAlignment = () => {\r\n  return (\r\n    <div>\r\n      <DropdownButton\r\n        align='end'\r\n        title='Dropdown end'\r\n        id='dropdown-menu-align-end'>\r\n        <Dropdown.Item eventKey='1'>Action</Dropdown.Item>\r\n        <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>\r\n        <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>\r\n        <Dropdown.Divider />\r\n        <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>\r\n      </DropdownButton>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default MenuAlignment;\r\n",noScrollbar:!0,description:'By default, a dropdown menu is aligned to the left, but you can switch it by passing align="end" to a <Dropdown>, <DropdownButton>, or <SplitButton>.'})}),(0,a.jsx)(i.Z,{xs:12,md:6,children:(0,a.jsx)(d.Z,{title:"Responsive",component:k,source:"import React from 'react';\r\nimport {\r\n  ButtonGroup,\r\n  Dropdown,\r\n  DropdownButton,\r\n  SplitButton,\r\n} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\nimport clsx from 'clsx';\r\n\r\nconst Responsive = () => {\r\n  return (\r\n    <div style={{width: '100%'}}>\r\n      <div>\r\n        <DropdownButton\r\n          as={ButtonGroup}\r\n          align={{lg: 'end'}}\r\n          title='Left-aligned but right aligned when large screen'\r\n          id='dropdown-menu-align-responsive-1'>\r\n          <Dropdown.Item eventKey='1'>Action 1</Dropdown.Item>\r\n          <Dropdown.Item eventKey='2'>Action 2</Dropdown.Item>\r\n        </DropdownButton>\r\n      </div>\r\n      <div className={clsx(styles.dropDownDemoWrapper2, 'mb-2')}>\r\n        <SplitButton\r\n          align={{lg: 'start'}}\r\n          title='Right-aligned but left aligned when large screen'\r\n          id='dropdown-menu-align-responsive-2'>\r\n          <Dropdown.Item eventKey='1'>Action 1</Dropdown.Item>\r\n          <Dropdown.Item eventKey='2'>Action 2</Dropdown.Item>\r\n        </SplitButton>\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Responsive;\r\n",noScrollbar:!0,description:"If you want to use responsive menu alignment, pass an object containing a breakpoint to the align prop on the <DropdownMenu>, <DropdownButton>, or <SplitButton>. You can specify start or end for the various breakpoints."})}),(0,a.jsx)(i.Z,{xs:12,md:6,children:(0,a.jsx)(d.Z,{title:"AutoClose",component:M,source:"import React from 'react';\r\nimport {Dropdown} from 'react-bootstrap';\r\n\r\nconst AutoClose = () => {\r\n  return (\r\n    <div style={{width: '100%'}}>\r\n      <>\r\n        <Dropdown className='d-inline mx-2'>\r\n          <Dropdown.Toggle id='dropdown-autoclose-true'>\r\n            Default Dropdown\r\n          </Dropdown.Toggle>\r\n\r\n          <Dropdown.Menu>\r\n            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>\r\n            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>\r\n            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>\r\n          </Dropdown.Menu>\r\n        </Dropdown>\r\n\r\n        <Dropdown className='d-inline mx-2' autoClose='inside'>\r\n          <Dropdown.Toggle id='dropdown-autoclose-inside'>\r\n            Clickable Outside\r\n          </Dropdown.Toggle>\r\n\r\n          <Dropdown.Menu>\r\n            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>\r\n            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>\r\n            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>\r\n          </Dropdown.Menu>\r\n        </Dropdown>\r\n\r\n        <Dropdown className='d-inline mx-2' autoClose='outside'>\r\n          <Dropdown.Toggle id='dropdown-autoclose-outside'>\r\n            Clickable Inside\r\n          </Dropdown.Toggle>\r\n\r\n          <Dropdown.Menu>\r\n            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>\r\n            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>\r\n            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>\r\n          </Dropdown.Menu>\r\n        </Dropdown>\r\n\r\n        <Dropdown className='d-inline mx-2' autoClose={false}>\r\n          <Dropdown.Toggle id='dropdown-autoclose-false'>\r\n            Manual Close\r\n          </Dropdown.Toggle>\r\n\r\n          <Dropdown.Menu>\r\n            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>\r\n            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>\r\n            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>\r\n          </Dropdown.Menu>\r\n        </Dropdown>\r\n      </>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default AutoClose;\r\n",noScrollbar:!0,description:"By default, the dropdown menu is closed when selecting a menu item or clicking outside of the dropdown menu. This behaviour can be changed by using the autoClose property."})}),(0,a.jsx)(i.Z,{xs:12,md:6,children:(0,a.jsx)(d.Z,{title:"Menu Headers",component:B,source:"import React from 'react';\r\nimport {Dropdown} from 'react-bootstrap';\r\n\r\nconst MenuHeaders = () => {\r\n  return (\r\n    <div style={{width: '100%'}}>\r\n      <Dropdown.Menu show>\r\n        <Dropdown.Header>Dropdown header</Dropdown.Header>\r\n        <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>\r\n        <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>\r\n      </Dropdown.Menu>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default MenuHeaders;\r\n",noScrollbar:!0,description:"Add a header to label sections of actions."})}),(0,a.jsx)(i.Z,{xs:12,md:6,children:(0,a.jsx)(d.Z,{title:"Menu Dividers",component:N,source:"import React from 'react';\r\nimport {Dropdown} from 'react-bootstrap';\r\n\r\nconst MenuDividers = () => {\r\n  return (\r\n    <div style={{width: '100%'}}>\r\n      <Dropdown.Menu show>\r\n        <Dropdown.Item eventKey='1'>Action</Dropdown.Item>\r\n        <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>\r\n        <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>\r\n        <Dropdown.Divider />\r\n        <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>\r\n      </Dropdown.Menu>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default MenuDividers;\r\n",noScrollbar:!0,description:"Separate groups of related menu items with a divider."})}),(0,a.jsx)(i.Z,{xs:12,md:6,children:(0,a.jsx)(d.Z,{title:"Customization",component:C,source:"import React from 'react';\r\nimport {Button, ButtonGroup, Dropdown} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nconst CustomizationDemo = () => {\r\n  return (\r\n    <div>\r\n      <>\r\n        <Dropdown as={ButtonGroup}>\r\n          <Dropdown.Toggle id='dropdown-custom-1'>Pow! Zoom!</Dropdown.Toggle>\r\n          <Dropdown.Menu className='super-colors'>\r\n            <Dropdown.Item eventKey='1'>Action</Dropdown.Item>\r\n            <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>\r\n            <Dropdown.Item eventKey='3' active>\r\n              Active Item\r\n            </Dropdown.Item>\r\n            <Dropdown.Divider />\r\n            <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>\r\n          </Dropdown.Menu>\r\n        </Dropdown>{' '}\r\n        <Dropdown as={ButtonGroup}>\r\n          <Button variant='info' className={styles.inputGroupBtnRight}>\r\n            mix it up style-wise\r\n          </Button>\r\n          <Dropdown.Toggle\r\n            split\r\n            variant='success'\r\n            id='dropdown-custom-2'\r\n            className={styles.inputGroupBtnLeft}\r\n          />\r\n          <Dropdown.Menu className='super-colors'>\r\n            <Dropdown.Item eventKey='1'>Action</Dropdown.Item>\r\n            <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>\r\n            <Dropdown.Item eventKey='3' active>\r\n              Active Item\r\n            </Dropdown.Item>\r\n            <Dropdown.Divider />\r\n            <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>\r\n          </Dropdown.Menu>\r\n        </Dropdown>\r\n      </>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default CustomizationDemo;\r\n",noScrollbar:!0,description:"If the default handling of the dropdown menu and toggle components arent to your liking you can customize them by using the more basic <Dropdown> Component to explicitly specify the Toggle and Menu components "})})]})]})}},56144:function(n,e,r){var o=r(1413),t=r(45987),i=r(81694),d=r.n(i),s=r(72791),a=r(10162),l=r(80184),p=["bsPrefix","size","vertical","className","as"],c=s.forwardRef((function(n,e){var r=n.bsPrefix,i=n.size,s=n.vertical,c=n.className,m=n.as,u=void 0===m?"div":m,h=(0,t.Z)(n,p),w=(0,a.vE)(r,"btn-group"),D=w;return s&&(D="".concat(w,"-vertical")),(0,l.jsx)(u,(0,o.Z)((0,o.Z)({},h),{},{ref:e,className:d()(c,D,i&&"".concat(w,"-").concat(i))}))}));c.displayName="ButtonGroup",c.defaultProps={vertical:!1,role:"group"},e.Z=c},45279:function(n,e,r){var o=r(1413),t=r(45987),i=r(72791),d=r(52007),s=r.n(d),a=r(82457),l=r(5107),p=r(63360),c=r(78612),m=r(80184),u=["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id","menuVariant"],h={id:s().string,href:s().string,onClick:s().func,title:s().node.isRequired,disabled:s().bool,align:c.r,menuRole:s().string,renderMenuOnMount:s().bool,rootCloseEvent:s().string,menuVariant:s().oneOf(["dark"]),bsPrefix:s().string,variant:s().string,size:s().string},w=i.forwardRef((function(n,e){var r=n.title,i=n.children,d=n.bsPrefix,s=n.rootCloseEvent,c=n.variant,h=n.size,w=n.menuRole,D=n.renderMenuOnMount,x=n.disabled,v=n.href,f=n.id,g=n.menuVariant,Z=(0,t.Z)(n,u);return(0,m.jsxs)(a.Z,(0,o.Z)((0,o.Z)({ref:e},Z),{},{children:[(0,m.jsx)(l.Z,{id:f,href:v,size:h,variant:c,disabled:x,childBsPrefix:d,children:r}),(0,m.jsx)(p.Z,{role:w,renderOnMount:D,rootCloseEvent:s,variant:g,children:i})]}))}));w.displayName="DropdownButton",w.propTypes=h,e.Z=w},49391:function(n,e,r){var o=r(1413),t=r(45987),i=r(72791),d=r(52007),s=r.n(d),a=r(43360),l=r(56144),p=r(82457),c=r(78612),m=r(80184),u=["id","bsPrefix","size","variant","title","type","toggleLabel","children","onClick","href","target","menuRole","renderMenuOnMount","rootCloseEvent"],h={id:s().string,toggleLabel:s().string,href:s().string,target:s().string,onClick:s().func,title:s().node.isRequired,type:s().string,disabled:s().bool,align:c.r,menuRole:s().string,renderMenuOnMount:s().bool,rootCloseEvent:s().string,bsPrefix:s().string,variant:s().string,size:s().string},w=i.forwardRef((function(n,e){var r=n.id,i=n.bsPrefix,d=n.size,s=n.variant,c=n.title,h=n.type,w=n.toggleLabel,D=n.children,x=n.onClick,v=n.href,f=n.target,g=n.menuRole,Z=n.renderMenuOnMount,I=n.rootCloseEvent,j=(0,t.Z)(n,u);return(0,m.jsxs)(p.Z,(0,o.Z)((0,o.Z)({ref:e},j),{},{as:l.Z,children:[(0,m.jsx)(a.Z,{size:d,variant:s,disabled:j.disabled,bsPrefix:i,href:v,target:f,onClick:x,type:h,children:c}),(0,m.jsx)(p.Z.Toggle,{split:!0,id:r,size:d,variant:s,disabled:j.disabled,childBsPrefix:i,children:(0,m.jsx)("span",{className:"visually-hidden",children:w})}),(0,m.jsx)(p.Z.Menu,{role:g,renderOnMount:Z,rootCloseEvent:I,children:D})]}))}));w.propTypes=h,w.defaultProps={toggleLabel:"Toggle dropdown",type:"button"},w.displayName="SplitButton",e.Z=w},78612:function(n,e,r){r.d(e,{r:function(){return d}});var o=r(52007),t=r.n(o),i=t().oneOf(["start","end"]),d=t().oneOfType([i,t().shape({sm:i}),t().shape({md:i}),t().shape({lg:i}),t().shape({xl:i}),t().shape({xxl:i})])},92914:function(n,e){e.Z={row:"AppRowContainer_row__lSYCd"}},17011:function(n,e){e.Z={inputGroupBtnRight:"Dropdowns_inputGroupBtnRight__xodHA",inputGroupBtnLeft:"Dropdowns_inputGroupBtnLeft__k-yfw",dropDownDemoWrapper:"Dropdowns_dropDownDemoWrapper__A2203",dropDownDemoWrapper2:"Dropdowns_dropDownDemoWrapper2__GpIit"}}}]);
//# sourceMappingURL=2960.09be5d7e.chunk.js.map