"use strict";(self.webpackChunkctic=self.webpackChunkctic||[]).push([[366],{48143:function(r,n,e){e.d(n,{Z:function(){return x}});var a=e(1413),t=e(45987),o=(e(72791),e(28182)),i="AppCard_card__lJ6Uc",s="AppCard_heightFull__T8kun",l="AppCard_cardBody__Yq-vX",c="AppCard_cardHeader__Y+R+4",d="AppCard_cardTitle__HaekO",h="AppCard_action__sd-8L",v="AppCard_cardFooter__qAyRn",f=e(9140),m=e(80184),p=["title","footer","children","className","titleClass","actionClass","footerClass","cardBodyClass","cardHeaderClass","action","heightFull","cardImg"],u=function(r){var n=r.title,e=r.footer,u=r.children,x=r.className,N=r.titleClass,b=r.actionClass,g=r.footerClass,Z=r.cardBodyClass,j=r.cardHeaderClass,k=r.action,y=r.heightFull,w=r.cardImg,C=(0,t.Z)(r,p);return(0,m.jsxs)(f.Z,(0,a.Z)((0,a.Z)({className:(0,o.default)(i,y?s:"",x),title:n},C),{},{children:[w?(0,m.jsx)(f.Z.Img,{variant:"top",src:w}):null,n||k?(0,m.jsxs)(f.Z.Header,{className:(0,o.default)(c,j),children:["object"===typeof n?n:(0,m.jsx)(f.Z.Title,{className:(0,o.default)(d,"mb-0 text-truncate",N),children:n}),"object"===typeof k?k:(0,m.jsx)("a",{className:(0,o.default)(h,"text-decoration-none ms-1",b),href:"#",children:k})]}):null,(0,m.jsx)(f.Z.Body,{className:(0,o.default)(l,Z),children:u}),e?(0,m.jsx)(f.Z.Footer,{className:(0,o.default)(v,g),children:e}):null]}))},x=u;u.defaultProps={}},38081:function(r,n,e){e.d(n,{Z:function(){return A}});var a,t=e(72791),o=e(10077),i=e(1413),s=e(29439),l=e(60185),c=e(28182),d={plain:{color:"#F8F8F2",fontFamily:"Poppins",fontWeight:e(1975).F3.REGULAR,backgroundColor:"#333333"},styles:[{types:["prolog","constant","builtin"],style:{color:"#FFFFFF"}},{types:["inserted","tag","function"],style:{color:"#E6DB74"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","selector"],style:{color:"#98CD2F"}},{types:["keyword","variable"],style:{color:"#65D4EA"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"#98CD2F"}}]},h=e(38109),v="AppComponentCard_compCardTitleDescription__SHL6w",f="AppComponentCard_preTag__0+EII",m="AppComponentCard_componentRoot__dgPU7",p="AppComponentCard_codeIcon__mUnRp",u=e(15671),x=e(43144),N=e(60136),b=e(27277),g=e(4942),Z=e(80184),j="close",k="closing",y="closed",w="open",C="opening",L="opened",D=(a={},(0,g.Z)(a,j,j),(0,g.Z)(a,y,j),(0,g.Z)(a,C,j),(0,g.Z)(a,k,w),(0,g.Z)(a,w,w),(0,g.Z)(a,L,w),a),I=function(r){(0,N.Z)(e,r);var n=(0,b.Z)(e);function e(r){var a;return(0,u.Z)(this,e),(a=n.call(this,r)).getClientHeight=function(){return a.refWrapper.scrollHeight},a.getDefaultExpandStyle=function(){switch(a.state.status){case C:case j:case y:return{height:0,opacity:0,overflow:"hidden"};case L:case k:return{height:a.getClientHeight(),opacity:1,overflow:"hidden"};default:return{height:"auto",opacity:1,overflow:"unset"}}},a.getExpandStyle=function(){return(0,i.Z)((0,i.Z)({},a.getDefaultExpandStyle()),a.props.styles[D[a.state.status]])},a.getTransition=function(r){return"".concat(r," ").concat(a.props.duration,"ms ").concat(a.props.easing)},a.updateStatus=function(r){return a.setState({status:r})},a.delay=function(r,n){a.timeout=setTimeout(r,n)},a.clearDelay=function(){a.timeout&&clearTimeout(a.timeout)},a.transit=function(r,n,e){var t=a.props.duration;a.updateStatus(r),a.delay((function(){a.updateStatus(n),a.delay((function(){a.updateStatus(e)}),t)}),20)},a.toggle=function(r){a.clearDelay(),r?a.transit(C,L,w):a.transit(k,y,j)},a.setRef=function(r){a.refWrapper=r},a.state={status:a.props.open?w:j},a}return(0,x.Z)(e,[{key:"componentDidUpdate",value:function(r){r.open!==this.props.open&&this.toggle(this.props.open)}},{key:"componentWillUnmount",value:function(){this.clearDelay()}},{key:"getStyle",value:function(){var r=this.props.transitions.map(this.getTransition).join(",");return(0,i.Z)((0,i.Z)({},this.getExpandStyle()),{},{transition:r})}},{key:"render",value:function(){var r=this.props,n=r.className,e=r.children,a=r.tag,t={className:n,style:this.getStyle(),ref:this.setRef};return(0,Z.jsx)(a,(0,i.Z)((0,i.Z)({},t),{},{children:e}))}}]),e}(t.Component);I.defaultProps={open:!1,duration:200,easing:"ease-in-out",className:"",tag:"div",transitions:["height","opacity"],styles:{}};var S=I,B=e(48143),F=e(58617),_=e(43360),H=function(r){var n=r.title,e=r.description,a=r.className,o=r.maxHeight,u=r.component,x=r.source,N=(0,t.useState)(!1),b=(0,s.Z)(N,2),g=b[0],j=b[1];return(0,Z.jsxs)(B.Z,{className:a,title:(0,Z.jsxs)("div",{className:"w-100",children:[(0,Z.jsx)("div",{children:n}),(0,Z.jsx)("div",{className:(0,c.default)(v,"text-truncate"),children:e})]}),extra:x?(0,Z.jsx)(_.Z,{"aria-label":"view code",shape:"circle",onClick:function(){return j(!g)},children:(0,Z.jsx)(F.oT$,{className:p})}):null,children:[(0,Z.jsx)(S,{open:g,children:x?(0,Z.jsx)(h.Z,{style:{borderRadius:8,background:"#333333",height:350,maxHeight:400},children:(0,Z.jsx)(l.ZP,(0,i.Z)((0,i.Z)({},l.lG),{},{code:x,language:"jsx",theme:d,children:function(r){var n=r.style,e=r.tokens,a=r.getLineProps,t=r.getTokenProps;return(0,Z.jsx)("pre",{className:f,style:(0,i.Z)((0,i.Z)({},n),{},{maxHeight:500}),children:e.map((function(r,n){return(0,Z.jsx)("div",(0,i.Z)((0,i.Z)({},a({line:r,key:n})),{},{children:r.map((function(r,e){return(0,Z.jsx)("span",(0,i.Z)({},t({token:r,key:e})),n)}))}),n)}))})}}))}):null}),(0,Z.jsx)(h.Z,{style:{maxHeight:o},className:"position-relative",children:(0,Z.jsx)("div",{className:(0,c.default)(m,"d-flex align-items-center justify-content-center w-100 p-3"),children:(0,Z.jsx)(u,{})})})]})},R=H;H.defaultProps={description:"",maxHeight:500};var T=function(r){var n=r.title,e=r.description,a=r.className,t=r.maxHeight,i=r.component,s=r.source;return(0,Z.jsx)(o.Z,{type:"bottom",interval:100,duration:450,children:(0,Z.jsx)(R,{title:n,description:e,className:a,maxHeight:t,component:i,source:s},"card")})},A=T;T.defaultProps={description:"",maxHeight:500}},66398:function(r,n,e){e.d(n,{Z:function(){return d}});e(72791);var a="AppComponentHeader_headerTitle__A9HGS",t="AppComponentHeader_titleH3__owcvF",o="AppComponentHeader_textBase__Hw4ll",i=e(10077),s=e(43360),l=e(80184),c=function(r){var n=r.title,e=r.description,c=r.refUrl;return(0,l.jsx)(i.Z,{type:"top",height:"auto",interval:100,duration:450,children:(0,l.jsxs)("div",{className:"d-flex flex-column pb-3 flex-sm-row justify-content-sm-between pt-xxl-3",children:[(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("h3",{className:t,children:n}),e?(0,l.jsx)("h5",{className:o,children:e}):null]}),c?(0,l.jsx)("div",{style:{height:30},children:(0,l.jsx)(s.Z,{variant:"primary",href:c,target:"_blank",children:"Reference"})}):null]},"header")})},d=c;c.defaultProps={}},11406:function(r,n,e){var a=e(45987),t=e(1413),o=(e(72791),e(92914)),i=e(10077),s=e(89743),l=e(80184),c=["children"],d=function(r){return(0,l.jsx)(s.Z,(0,t.Z)({className:o.Z.row},r))};n.Z=function(r){var n=r.children,e=(0,a.Z)(r,c);return(0,l.jsx)(i.Z,(0,t.Z)((0,t.Z)({animateStyle:{flexDirection:"row"},component:d,type:"bottom",ease:"easeInOutQuart",height:"auto"},e),{},{children:n}))}},366:function(r,n,e){e.r(n),e.d(n,{default:function(){return L}});e(72791);var a=e(66398),t=e(11406),o=e(2677),i=e(38081),s=e(49506),l=e(47022),c=e(9249),d=e(32354),h=e(80184),v=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(s.Z,{bg:"light",expand:"lg",children:(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(s.Z.Brand,{href:"#home",children:"React-Bootstrap"}),(0,h.jsx)(s.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,h.jsx)(s.Z.Collapse,{id:"basic-navbar-nav",children:(0,h.jsxs)(c.Z,{className:"me-auto",children:[(0,h.jsx)(c.Z.Link,{href:"#home",children:"Home"}),(0,h.jsx)(c.Z.Link,{href:"#link",children:"Link"}),(0,h.jsxs)(d.Z,{title:"Dropdown",id:"basic-nav-dropdown",children:[(0,h.jsx)(d.Z.Item,{href:"#action/3.1",children:"Action"}),(0,h.jsx)(d.Z.Item,{href:"#action/3.2",children:"Another action"}),(0,h.jsx)(d.Z.Item,{href:"#action/3.3",children:"Something"}),(0,h.jsx)(d.Z.Divider,{}),(0,h.jsx)(d.Z.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})})})},f=function(){return(0,h.jsx)("div",{children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.Z,{bg:"light",children:(0,h.jsx)(l.Z,{children:(0,h.jsx)(s.Z.Brand,{href:"#home",children:"Brand link"})})}),(0,h.jsx)("br",{}),(0,h.jsx)(s.Z,{bg:"light",children:(0,h.jsx)(l.Z,{children:(0,h.jsx)(s.Z.Brand,{children:"Brand text"})})}),(0,h.jsx)("br",{}),(0,h.jsx)(s.Z,{bg:"dark",children:(0,h.jsx)(l.Z,{children:(0,h.jsx)(s.Z.Brand,{href:"#home",children:(0,h.jsx)("img",{src:"/logo.svg",width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"})})})}),(0,h.jsx)("br",{}),(0,h.jsx)(s.Z,{bg:"dark",variant:"dark",children:(0,h.jsx)(l.Z,{children:(0,h.jsxs)(s.Z.Brand,{href:"#home",children:[(0,h.jsx)("img",{alt:"",src:"/logo.svg",width:"30",height:"30",className:"d-inline-block align-top"})," ","React Bootstrap"]})})})]})})},m=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(s.Z,{children:(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(s.Z.Brand,{href:"#home",children:"Navbar with text"}),(0,h.jsx)(s.Z.Toggle,{}),(0,h.jsx)(s.Z.Collapse,{className:"justify-content-end",children:(0,h.jsxs)(s.Z.Text,{children:["Signed in as: ",(0,h.jsx)("a",{href:"#login",children:"Mark Otto"})]})})]})})})},p=function(){return(0,h.jsx)("div",{children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.Z,{bg:"dark",variant:"dark",children:(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(s.Z.Brand,{href:"#home",children:"Navbar"}),(0,h.jsxs)(c.Z,{className:"me-auto",children:[(0,h.jsx)(c.Z.Link,{href:"#home",children:"Home"}),(0,h.jsx)(c.Z.Link,{href:"#features",children:"Features"}),(0,h.jsx)(c.Z.Link,{href:"#pricing",children:"Pricing"})]})]})}),(0,h.jsx)("br",{}),(0,h.jsx)(s.Z,{bg:"primary",variant:"dark",children:(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(s.Z.Brand,{href:"#home",children:"Navbar"}),(0,h.jsxs)(c.Z,{className:"me-auto",children:[(0,h.jsx)(c.Z.Link,{href:"#home",children:"Home"}),(0,h.jsx)(c.Z.Link,{href:"#features",children:"Features"}),(0,h.jsx)(c.Z.Link,{href:"#pricing",children:"Pricing"})]})]})}),(0,h.jsx)("br",{}),(0,h.jsx)(s.Z,{bg:"light",variant:"light",children:(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(s.Z.Brand,{href:"#home",children:"Navbar"}),(0,h.jsxs)(c.Z,{className:"me-auto",children:[(0,h.jsx)(c.Z.Link,{href:"#home",children:"Home"}),(0,h.jsx)(c.Z.Link,{href:"#features",children:"Features"}),(0,h.jsx)(c.Z.Link,{href:"#pricing",children:"Pricing"})]})]})})]})})},u=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(l.Z,{children:(0,h.jsx)(s.Z,{expand:"lg",variant:"light",bg:"light",children:(0,h.jsx)(l.Z,{children:(0,h.jsx)(s.Z.Brand,{href:"#",children:"Navbar"})})})})})},x=e(3350),N=e(74292),b=e(43360),g="Navbars_searchInput__0u09a",Z="Navbars_navSearch__bZxOG",j="Navbars_navbarBrand__AExIo",k=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(s.Z,{bg:"light",expand:"lg",children:(0,h.jsxs)(l.Z,{fluid:!0,children:[(0,h.jsx)(s.Z.Brand,{href:"#",children:"Navbar scroll"}),(0,h.jsx)(s.Z.Toggle,{"aria-controls":"navbarScroll"}),(0,h.jsxs)(s.Z.Collapse,{id:"navbarScroll",children:[(0,h.jsxs)(c.Z,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[(0,h.jsx)(c.Z.Link,{href:"#action1",children:"Home"}),(0,h.jsx)(c.Z.Link,{href:"#action2",children:"Link"}),(0,h.jsxs)(d.Z,{title:"Link",id:"navbarScrollingDropdown",children:[(0,h.jsx)(d.Z.Item,{href:"#action3",children:"Action"}),(0,h.jsx)(d.Z.Item,{href:"#action4",children:"Another action"}),(0,h.jsx)(d.Z.Divider,{}),(0,h.jsx)(d.Z.Item,{href:"#action5",children:"Something else here"})]}),(0,h.jsx)(c.Z.Link,{href:"#",disabled:!0,children:"Link"})]}),(0,h.jsxs)(x.Z,{className:"d-flex",children:[(0,h.jsx)(N.Z,{type:"search",placeholder:"Search",className:g,"aria-label":"Search"}),(0,h.jsx)(b.Z,{variant:"outline-success",children:"Search"})]})]})]})})})},y=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(s.Z,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(s.Z.Brand,{href:"#home",children:"React-Bootstrap"}),(0,h.jsx)(s.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,h.jsxs)(s.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,h.jsxs)(c.Z,{className:"me-auto",children:[(0,h.jsx)(c.Z.Link,{href:"#features",children:"Features"}),(0,h.jsx)(c.Z.Link,{href:"#pricing",children:"Pricing"}),(0,h.jsxs)(d.Z,{title:"Dropdown",id:"collasible-nav-dropdown",children:[(0,h.jsx)(d.Z.Item,{href:"#action/3.1",children:"Action"}),(0,h.jsx)(d.Z.Item,{href:"#action/3.2",children:"Another action"}),(0,h.jsx)(d.Z.Item,{href:"#action/3.3",children:"Something"}),(0,h.jsx)(d.Z.Divider,{}),(0,h.jsx)(d.Z.Item,{href:"#action/3.4",children:"Separated link"})]})]}),(0,h.jsxs)(c.Z,{children:[(0,h.jsx)(c.Z.Link,{href:"#deets",children:"More deets"}),(0,h.jsx)(c.Z.Link,{eventKey:2,href:"#memes",children:"Dank memes"})]})]})]})})})},w=e(54775),C=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(s.Z,{bg:"light",expand:!1,children:(0,h.jsxs)(l.Z,{fluid:!0,children:[(0,h.jsx)(s.Z.Brand,{href:"#",className:j,children:"Navbar Offcanvas"}),(0,h.jsx)(s.Z.Toggle,{"aria-controls":"offcanvasNavbar"}),(0,h.jsxs)(s.Z.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[(0,h.jsx)(w.Z.Header,{closeButton:!0,children:(0,h.jsx)(w.Z.Title,{id:"offcanvasNavbarLabel",children:"Offcanvas"})}),(0,h.jsxs)(w.Z.Body,{children:[(0,h.jsxs)(c.Z,{className:"justify-content-end flex-grow-1 pe-3",children:[(0,h.jsx)(c.Z.Link,{href:"#action1",children:"Home"}),(0,h.jsx)(c.Z.Link,{href:"#action2",children:"Link"}),(0,h.jsxs)(d.Z,{title:"Dropdown",id:"offcanvasNavbarDropdown",children:[(0,h.jsx)(d.Z.Item,{href:"#action3",children:"Action"}),(0,h.jsx)(d.Z.Item,{href:"#action4",children:"Another action"}),(0,h.jsx)(d.Z.Divider,{}),(0,h.jsx)(d.Z.Item,{href:"#action5",children:"Something else here"})]})]}),(0,h.jsxs)(x.Z,{className:"d-flex",children:[(0,h.jsx)(N.Z,{type:"search",placeholder:"Search",className:Z,"aria-label":"Search"}),(0,h.jsx)(b.Z,{variant:"outline-success",children:"Search"})]})]})]})]})})})},L=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.Z,{title:"Navbars",description:"A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more",refUrl:"https://react-bootstrap.github.io/components/navbar/"}),(0,h.jsxs)(t.Z,{children:[(0,h.jsx)(o.Z,{xs:12,md:6,children:(0,h.jsx)(i.Z,{title:"Overview",component:v,source:"import React from 'react';\r\nimport {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';\r\n\r\nconst Overview = () => {\r\n  return (\r\n    <div>\r\n      <Navbar bg='light' expand='lg'>\r\n        <Container>\r\n          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>\r\n          <Navbar.Toggle aria-controls='basic-navbar-nav' />\r\n          <Navbar.Collapse id='basic-navbar-nav'>\r\n            <Nav className='me-auto'>\r\n              <Nav.Link href='#home'>Home</Nav.Link>\r\n              <Nav.Link href='#link'>Link</Nav.Link>\r\n              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>\r\n                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>\r\n                <NavDropdown.Item href='#action/3.2'>\r\n                  Another action\r\n                </NavDropdown.Item>\r\n                <NavDropdown.Item href='#action/3.3'>\r\n                  Something\r\n                </NavDropdown.Item>\r\n                <NavDropdown.Divider />\r\n                <NavDropdown.Item href='#action/3.4'>\r\n                  Separated link\r\n                </NavDropdown.Item>\r\n              </NavDropdown>\r\n            </Nav>\r\n          </Navbar.Collapse>\r\n        </Container>\r\n      </Navbar>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Overview;\r\n",noScrollbar:!0,description:"Here\u2019s what you need to know before getting started with the Navbar:"})}),(0,h.jsx)(o.Z,{xs:12,md:6,children:(0,h.jsx)(i.Z,{title:"Text and Non-nav links",component:m,source:"import React from 'react';\r\nimport {Container, Navbar} from 'react-bootstrap';\r\n\r\nconst Text = () => {\r\n  return (\r\n    <div>\r\n      <Navbar>\r\n        <Container>\r\n          <Navbar.Brand href='#home'>Navbar with text</Navbar.Brand>\r\n          <Navbar.Toggle />\r\n          <Navbar.Collapse className='justify-content-end'>\r\n            <Navbar.Text>\r\n              Signed in as: <a href='#login'>Mark Otto</a>\r\n            </Navbar.Text>\r\n          </Navbar.Collapse>\r\n        </Container>\r\n      </Navbar>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Text;\r\n",noScrollbar:!0,description:"Displaying related images and text with the Figure component."})}),(0,h.jsx)(o.Z,{xs:12,md:6,children:(0,h.jsx)(i.Z,{title:"Brand",component:f,source:"import React from 'react';\r\nimport {Container, Navbar} from 'react-bootstrap';\r\n\r\nconst Brand = () => {\r\n  return (\r\n    <div>\r\n      <>\r\n        <Navbar bg='light'>\r\n          <Container>\r\n            <Navbar.Brand href='#home'>Brand link</Navbar.Brand>\r\n          </Container>\r\n        </Navbar>\r\n        <br />\r\n        <Navbar bg='light'>\r\n          <Container>\r\n            <Navbar.Brand>Brand text</Navbar.Brand>\r\n          </Container>\r\n        </Navbar>\r\n        <br />\r\n        <Navbar bg='dark'>\r\n          <Container>\r\n            <Navbar.Brand href='#home'>\r\n              <img\r\n                src='/logo.svg'\r\n                width='30'\r\n                height='30'\r\n                className='d-inline-block align-top'\r\n                alt='React Bootstrap logo'\r\n              />\r\n            </Navbar.Brand>\r\n          </Container>\r\n        </Navbar>\r\n        <br />\r\n        <Navbar bg='dark' variant='dark'>\r\n          <Container>\r\n            <Navbar.Brand href='#home'>\r\n              <img\r\n                alt=''\r\n                src='/logo.svg'\r\n                width='30'\r\n                height='30'\r\n                className='d-inline-block align-top'\r\n              />{' '}\r\n              React Bootstrap\r\n            </Navbar.Brand>\r\n          </Container>\r\n        </Navbar>\r\n      </>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Brand;\r\n",noScrollbar:!0,description:"A simple flexible branding component. Images are supported but will likely require custom styling to work well."})}),(0,h.jsx)(o.Z,{xs:12,md:6,children:(0,h.jsx)(i.Z,{title:"Color schemes",component:p,source:"import React from 'react';\r\nimport {Container, Nav, Navbar} from 'react-bootstrap';\r\n\r\nconst Color = () => {\r\n  return (\r\n    <div>\r\n      <>\r\n        <Navbar bg='dark' variant='dark'>\r\n          <Container>\r\n            <Navbar.Brand href='#home'>Navbar</Navbar.Brand>\r\n            <Nav className='me-auto'>\r\n              <Nav.Link href='#home'>Home</Nav.Link>\r\n              <Nav.Link href='#features'>Features</Nav.Link>\r\n              <Nav.Link href='#pricing'>Pricing</Nav.Link>\r\n            </Nav>\r\n          </Container>\r\n        </Navbar>\r\n        <br />\r\n        <Navbar bg='primary' variant='dark'>\r\n          <Container>\r\n            <Navbar.Brand href='#home'>Navbar</Navbar.Brand>\r\n            <Nav className='me-auto'>\r\n              <Nav.Link href='#home'>Home</Nav.Link>\r\n              <Nav.Link href='#features'>Features</Nav.Link>\r\n              <Nav.Link href='#pricing'>Pricing</Nav.Link>\r\n            </Nav>\r\n          </Container>\r\n        </Navbar>\r\n\r\n        <br />\r\n        <Navbar bg='light' variant='light'>\r\n          <Container>\r\n            <Navbar.Brand href='#home'>Navbar</Navbar.Brand>\r\n            <Nav className='me-auto'>\r\n              <Nav.Link href='#home'>Home</Nav.Link>\r\n              <Nav.Link href='#features'>Features</Nav.Link>\r\n              <Nav.Link href='#pricing'>Pricing</Nav.Link>\r\n            </Nav>\r\n          </Container>\r\n        </Navbar>\r\n      </>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Color;\r\n",noScrollbar:!0,description:"Theming the navbar has never been easier thanks to the combination of theming classes and background-color utilities."})}),(0,h.jsx)(o.Z,{xs:12,md:6,children:(0,h.jsx)(i.Z,{title:"Containers",component:u,source:"import React from 'react';\r\nimport {Container, Navbar} from 'react-bootstrap';\r\n\r\nconst Containers = () => {\r\n  return (\r\n    <div>\r\n      <Container>\r\n        <Navbar expand='lg' variant='light' bg='light'>\r\n          <Container>\r\n            <Navbar.Brand href='#'>Navbar</Navbar.Brand>\r\n          </Container>\r\n        </Navbar>\r\n      </Container>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Containers;\r\n",noScrollbar:!0,description:"While not required, you can wrap the Navbar in a <Container> component to center it on a page, or add one within to only center the contents of a fixed or static top navbar."})}),(0,h.jsx)(o.Z,{xs:12,md:6,children:(0,h.jsx)(i.Z,{title:"Scrolling",component:k,source:"import React from 'react';\r\nimport {\r\n  Button,\r\n  Container,\r\n  Form,\r\n  FormControl,\r\n  Nav,\r\n  Navbar,\r\n  NavDropdown,\r\n} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nconst Scrolling = () => {\r\n  return (\r\n    <div>\r\n      <Navbar bg='light' expand='lg'>\r\n        <Container fluid>\r\n          <Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>\r\n          <Navbar.Toggle aria-controls='navbarScroll' />\r\n          <Navbar.Collapse id='navbarScroll'>\r\n            <Nav\r\n              className='me-auto my-2 my-lg-0'\r\n              style={{maxHeight: '100px'}}\r\n              navbarScroll>\r\n              <Nav.Link href='#action1'>Home</Nav.Link>\r\n              <Nav.Link href='#action2'>Link</Nav.Link>\r\n              <NavDropdown title='Link' id='navbarScrollingDropdown'>\r\n                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>\r\n                <NavDropdown.Item href='#action4'>\r\n                  Another action\r\n                </NavDropdown.Item>\r\n                <NavDropdown.Divider />\r\n                <NavDropdown.Item href='#action5'>\r\n                  Something else here\r\n                </NavDropdown.Item>\r\n              </NavDropdown>\r\n              <Nav.Link href='#' disabled>\r\n                Link\r\n              </Nav.Link>\r\n            </Nav>\r\n            <Form className='d-flex'>\r\n              <FormControl\r\n                type='search'\r\n                placeholder='Search'\r\n                className={styles.searchInput}\r\n                aria-label='Search'\r\n              />\r\n              <Button variant='outline-success'>Search</Button>\r\n            </Form>\r\n          </Navbar.Collapse>\r\n        </Container>\r\n      </Navbar>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Scrolling;\r\n",noScrollbar:!0,description:"You can use the navbarScroll prop in a <Nav> to enable vertical scrolling within the toggleable contents of a collapsed navbar."})}),(0,h.jsx)(o.Z,{xs:12,md:6,children:(0,h.jsx)(i.Z,{title:"Responsive behaviors ",component:y,source:"import React from 'react';\r\nimport {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';\r\n\r\nconst Responsive = () => {\r\n  return (\r\n    <div>\r\n      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>\r\n        <Container>\r\n          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>\r\n          <Navbar.Toggle aria-controls='responsive-navbar-nav' />\r\n          <Navbar.Collapse id='responsive-navbar-nav'>\r\n            <Nav className='me-auto'>\r\n              <Nav.Link href='#features'>Features</Nav.Link>\r\n              <Nav.Link href='#pricing'>Pricing</Nav.Link>\r\n              <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>\r\n                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>\r\n                <NavDropdown.Item href='#action/3.2'>\r\n                  Another action\r\n                </NavDropdown.Item>\r\n                <NavDropdown.Item href='#action/3.3'>\r\n                  Something\r\n                </NavDropdown.Item>\r\n                <NavDropdown.Divider />\r\n                <NavDropdown.Item href='#action/3.4'>\r\n                  Separated link\r\n                </NavDropdown.Item>\r\n              </NavDropdown>\r\n            </Nav>\r\n            <Nav>\r\n              <Nav.Link href='#deets'>More deets</Nav.Link>\r\n              <Nav.Link eventKey={2} href='#memes'>\r\n                Dank memes\r\n              </Nav.Link>\r\n            </Nav>\r\n          </Navbar.Collapse>\r\n        </Container>\r\n      </Navbar>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Responsive;\r\n",noScrollbar:!0,description:"Use the expand prop as well as the Navbar.Toggle and Navbar.Collapse components to control when content collapses behind a button."})}),(0,h.jsx)(o.Z,{xs:12,md:6,children:(0,h.jsx)(i.Z,{title:"Offcanvas ",component:C,source:"import React from 'react';\r\nimport {\r\n  Button,\r\n  Container,\r\n  Form,\r\n  FormControl,\r\n  Nav,\r\n  Navbar,\r\n  NavDropdown,\r\n  Offcanvas,\r\n} from 'react-bootstrap';\r\nimport styles from './index.module.scss';\r\n\r\nconst OffCanvas = () => {\r\n  return (\r\n    <div>\r\n      <Navbar bg='light' expand={false}>\r\n        <Container fluid>\r\n          <Navbar.Brand href='#' className={styles.navbarBrand}>\r\n            Navbar Offcanvas\r\n          </Navbar.Brand>\r\n          <Navbar.Toggle aria-controls='offcanvasNavbar' />\r\n          <Navbar.Offcanvas\r\n            id='offcanvasNavbar'\r\n            aria-labelledby='offcanvasNavbarLabel'\r\n            placement='end'>\r\n            <Offcanvas.Header closeButton>\r\n              <Offcanvas.Title id='offcanvasNavbarLabel'>\r\n                Offcanvas\r\n              </Offcanvas.Title>\r\n            </Offcanvas.Header>\r\n            <Offcanvas.Body>\r\n              <Nav className='justify-content-end flex-grow-1 pe-3'>\r\n                <Nav.Link href='#action1'>Home</Nav.Link>\r\n                <Nav.Link href='#action2'>Link</Nav.Link>\r\n                <NavDropdown title='Dropdown' id='offcanvasNavbarDropdown'>\r\n                  <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>\r\n                  <NavDropdown.Item href='#action4'>\r\n                    Another action\r\n                  </NavDropdown.Item>\r\n                  <NavDropdown.Divider />\r\n                  <NavDropdown.Item href='#action5'>\r\n                    Something else here\r\n                  </NavDropdown.Item>\r\n                </NavDropdown>\r\n              </Nav>\r\n              <Form className='d-flex'>\r\n                <FormControl\r\n                  type='search'\r\n                  placeholder='Search'\r\n                  className={styles.navSearch}\r\n                  aria-label='Search'\r\n                />\r\n                <Button variant='outline-success'>Search</Button>\r\n              </Form>\r\n            </Offcanvas.Body>\r\n          </Navbar.Offcanvas>\r\n        </Container>\r\n      </Navbar>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default OffCanvas;\r\n",noScrollbar:!0,description:"Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas component. We extend both the offcanvas default styles and use the expand prop to create a dynamic and flexible navigation sidebar."})})]})]})}},73053:function(r,n,e){var a=e(1413),t=e(45987),o=e(81694),i=e.n(o),s=e(72791),l=e(323),c=e(10162),d=e(80184),h=["bsPrefix","className","children","controlId","label"],v=s.forwardRef((function(r,n){var e=r.bsPrefix,o=r.className,s=r.children,v=r.controlId,f=r.label,m=(0,t.Z)(r,h);return e=(0,c.vE)(e,"form-floating"),(0,d.jsxs)(l.Z,(0,a.Z)((0,a.Z)({ref:n,className:i()(o,e),controlId:v},m),{},{children:[s,(0,d.jsx)("label",{htmlFor:v,children:f})]}))}));v.displayName="FloatingLabel",n.Z=v},3350:function(r,n,e){e.d(n,{Z:function(){return M}});var a=e(1413),t=e(45987),o=e(81694),i=e.n(o),s=e(52007),l=e.n(s),c=e(72791),d=e(70783),h=e(96882),v=e(84934),f=e(10162),m=e(80184),p=["bsPrefix","className","htmlFor"],u=c.forwardRef((function(r,n){var e=r.bsPrefix,o=r.className,s=r.htmlFor,l=(0,t.Z)(r,p),d=(0,c.useContext)(v.Z).controlId;return e=(0,f.vE)(e,"form-check-label"),(0,m.jsx)("label",(0,a.Z)((0,a.Z)({},l),{},{ref:n,htmlFor:s||d,className:i()(o,e)}))}));u.displayName="FormCheckLabel";var x=u,N=e(11701),b=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],g=c.forwardRef((function(r,n){var e=r.id,o=r.bsPrefix,s=r.bsSwitchPrefix,l=r.inline,p=void 0!==l&&l,u=r.disabled,g=void 0!==u&&u,Z=r.isValid,j=void 0!==Z&&Z,k=r.isInvalid,y=void 0!==k&&k,w=r.feedbackTooltip,C=void 0!==w&&w,L=r.feedback,D=r.feedbackType,I=r.className,S=r.style,B=r.title,F=void 0===B?"":B,_=r.type,H=void 0===_?"checkbox":_,R=r.label,T=r.children,A=r.as,P=void 0===A?"input":A,O=(0,t.Z)(r,b);o=(0,f.vE)(o,"form-check"),s=(0,f.vE)(s,"form-switch");var E=(0,c.useContext)(v.Z).controlId,U=(0,c.useMemo)((function(){return{controlId:e||E}}),[E,e]),W=!T&&null!=R&&!1!==R||(0,N.XW)(T,x),G=(0,m.jsx)(h.Z,(0,a.Z)((0,a.Z)({},O),{},{type:"switch"===H?"checkbox":H,ref:n,isValid:j,isInvalid:y,disabled:g,as:P}));return(0,m.jsx)(v.Z.Provider,{value:U,children:(0,m.jsx)("div",{style:S,className:i()(I,W&&o,p&&"".concat(o,"-inline"),"switch"===H&&s),children:T||(0,m.jsxs)(m.Fragment,{children:[G,W&&(0,m.jsx)(x,{title:F,children:R}),L&&(0,m.jsx)(d.Z,{type:D,tooltip:C,children:L})]})})})}));g.displayName="FormCheck";var Z=Object.assign(g,{Input:h.Z,Label:x}),j=e(74292),k=(0,e(66543).Z)("form-floating"),y=e(323),w=(e(42391),e(2677)),C=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],L=c.forwardRef((function(r,n){var e=r.as,o=void 0===e?"label":e,s=r.bsPrefix,l=r.column,d=r.visuallyHidden,h=r.className,p=r.htmlFor,u=(0,t.Z)(r,C),x=(0,c.useContext)(v.Z).controlId;s=(0,f.vE)(s,"form-label");var N="col-form-label";"string"===typeof l&&(N="".concat(N," ").concat(N,"-").concat(l));var b=i()(h,s,d&&"visually-hidden",l&&N);return p=p||x,l?(0,m.jsx)(w.Z,(0,a.Z)({ref:n,as:"label",className:b,htmlFor:p},u)):(0,m.jsx)(o,(0,a.Z)({ref:n,className:b,htmlFor:p},u))}));L.displayName="FormLabel",L.defaultProps={column:!1,visuallyHidden:!1};var D=L,I=["bsPrefix","className","id"],S=c.forwardRef((function(r,n){var e=r.bsPrefix,o=r.className,s=r.id,l=(0,t.Z)(r,I),d=(0,c.useContext)(v.Z).controlId;return e=(0,f.vE)(e,"form-range"),(0,m.jsx)("input",(0,a.Z)((0,a.Z)({},l),{},{type:"range",ref:n,className:i()(o,e),id:s||d}))}));S.displayName="FormRange";var B=S,F=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],_=c.forwardRef((function(r,n){var e=r.bsPrefix,o=r.size,s=r.htmlSize,l=r.className,d=r.isValid,h=void 0!==d&&d,p=r.isInvalid,u=void 0!==p&&p,x=r.id,N=(0,t.Z)(r,F),b=(0,c.useContext)(v.Z).controlId;return e=(0,f.vE)(e,"form-select"),(0,m.jsx)("select",(0,a.Z)((0,a.Z)({},N),{},{size:s,ref:n,className:i()(l,e,o&&"".concat(e,"-").concat(o),h&&"is-valid",u&&"is-invalid"),id:x||b}))}));_.displayName="FormSelect";var H=_,R=["bsPrefix","className","as","muted"],T=c.forwardRef((function(r,n){var e=r.bsPrefix,o=r.className,s=r.as,l=void 0===s?"small":s,c=r.muted,d=(0,t.Z)(r,R);return e=(0,f.vE)(e,"form-text"),(0,m.jsx)(l,(0,a.Z)((0,a.Z)({},d),{},{ref:n,className:i()(o,e,c&&"text-muted")}))}));T.displayName="FormText";var A=T,P=c.forwardRef((function(r,n){return(0,m.jsx)(Z,(0,a.Z)((0,a.Z)({},r),{},{ref:n,type:"switch"}))}));P.displayName="Switch";var O=Object.assign(P,{Input:Z.Input,Label:Z.Label}),E=e(73053),U=["className","validated","as"],W={_ref:l().any,validated:l().bool,as:l().elementType},G=c.forwardRef((function(r,n){var e=r.className,o=r.validated,s=r.as,l=void 0===s?"form":s,c=(0,t.Z)(r,U);return(0,m.jsx)(l,(0,a.Z)((0,a.Z)({},c),{},{ref:n,className:i()(e,o&&"was-validated")}))}));G.displayName="Form",G.propTypes=W;var M=Object.assign(G,{Group:y.Z,Control:j.Z,Floating:k,Check:Z,Switch:O,Label:D,Text:A,Range:B,Select:H,FloatingLabel:E.Z})},323:function(r,n,e){var a=e(1413),t=e(45987),o=e(72791),i=e(84934),s=e(80184),l=["controlId","as"],c=o.forwardRef((function(r,n){var e=r.controlId,c=r.as,d=void 0===c?"div":c,h=(0,t.Z)(r,l),v=(0,o.useMemo)((function(){return{controlId:e}}),[e]);return(0,s.jsx)(i.Z.Provider,{value:v,children:(0,s.jsx)(d,(0,a.Z)((0,a.Z)({},h),{},{ref:n}))})}));c.displayName="FormGroup",n.Z=c},92914:function(r,n){n.Z={row:"AppRowContainer_row__lSYCd"}}}]);
//# sourceMappingURL=366.dde4bfde.chunk.js.map