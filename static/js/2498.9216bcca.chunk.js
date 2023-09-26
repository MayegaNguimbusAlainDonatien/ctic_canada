"use strict";(self.webpackChunkctic=self.webpackChunkctic||[]).push([[2498],{48143:function(e,r,n){n.d(r,{Z:function(){return f}});var t=n(1413),o=n(45987),i=(n(72791),n(28182)),a="AppCard_card__lJ6Uc",s="AppCard_heightFull__T8kun",l="AppCard_cardBody__Yq-vX",c="AppCard_cardHeader__Y+R+4",p="AppCard_cardTitle__HaekO",d="AppCard_action__sd-8L",u="AppCard_cardFooter__qAyRn",h=n(9140),g=n(80184),m=["title","footer","children","className","titleClass","actionClass","footerClass","cardBodyClass","cardHeaderClass","action","heightFull","cardImg"],v=function(e){var r=e.title,n=e.footer,v=e.children,f=e.className,x=e.titleClass,y=e.actionClass,Z=e.footerClass,j=e.cardBodyClass,b=e.cardHeaderClass,C=e.action,w=e.heightFull,T=e.cardImg,S=(0,o.Z)(e,m);return(0,g.jsxs)(h.Z,(0,t.Z)((0,t.Z)({className:(0,i.default)(a,w?s:"",f),title:r},S),{},{children:[T?(0,g.jsx)(h.Z.Img,{variant:"top",src:T}):null,r||C?(0,g.jsxs)(h.Z.Header,{className:(0,i.default)(c,b),children:["object"===typeof r?r:(0,g.jsx)(h.Z.Title,{className:(0,i.default)(p,"mb-0 text-truncate",x),children:r}),"object"===typeof C?C:(0,g.jsx)("a",{className:(0,i.default)(d,"text-decoration-none ms-1",y),href:"#",children:C})]}):null,(0,g.jsx)(h.Z.Body,{className:(0,i.default)(l,j),children:v}),n?(0,g.jsx)(h.Z.Footer,{className:(0,i.default)(u,Z),children:n}):null]}))},f=v;v.defaultProps={}},38081:function(e,r,n){n.d(r,{Z:function(){return A}});var t,o=n(72791),i=n(10077),a=n(1413),s=n(29439),l=n(60185),c=n(28182),p={plain:{color:"#F8F8F2",fontFamily:"Poppins",fontWeight:n(1975).F3.REGULAR,backgroundColor:"#333333"},styles:[{types:["prolog","constant","builtin"],style:{color:"#FFFFFF"}},{types:["inserted","tag","function"],style:{color:"#E6DB74"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","selector"],style:{color:"#98CD2F"}},{types:["keyword","variable"],style:{color:"#65D4EA"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"#98CD2F"}}]},d=n(38109),u="AppComponentCard_compCardTitleDescription__SHL6w",h="AppComponentCard_preTag__0+EII",g="AppComponentCard_componentRoot__dgPU7",m="AppComponentCard_codeIcon__mUnRp",v=n(15671),f=n(43144),x=n(60136),y=n(27277),Z=n(4942),j=n(80184),b="close",C="closing",w="closed",T="open",S="opening",k="opened",_=(t={},(0,Z.Z)(t,b,b),(0,Z.Z)(t,w,b),(0,Z.Z)(t,S,b),(0,Z.Z)(t,C,T),(0,Z.Z)(t,T,T),(0,Z.Z)(t,k,T),t),O=function(e){(0,x.Z)(n,e);var r=(0,y.Z)(n);function n(e){var t;return(0,v.Z)(this,n),(t=r.call(this,e)).getClientHeight=function(){return t.refWrapper.scrollHeight},t.getDefaultExpandStyle=function(){switch(t.state.status){case S:case b:case w:return{height:0,opacity:0,overflow:"hidden"};case k:case C:return{height:t.getClientHeight(),opacity:1,overflow:"hidden"};default:return{height:"auto",opacity:1,overflow:"unset"}}},t.getExpandStyle=function(){return(0,a.Z)((0,a.Z)({},t.getDefaultExpandStyle()),t.props.styles[_[t.state.status]])},t.getTransition=function(e){return"".concat(e," ").concat(t.props.duration,"ms ").concat(t.props.easing)},t.updateStatus=function(e){return t.setState({status:e})},t.delay=function(e,r){t.timeout=setTimeout(e,r)},t.clearDelay=function(){t.timeout&&clearTimeout(t.timeout)},t.transit=function(e,r,n){var o=t.props.duration;t.updateStatus(e),t.delay((function(){t.updateStatus(r),t.delay((function(){t.updateStatus(n)}),o)}),20)},t.toggle=function(e){t.clearDelay(),e?t.transit(S,k,T):t.transit(C,w,b)},t.setRef=function(e){t.refWrapper=e},t.state={status:t.props.open?T:b},t}return(0,f.Z)(n,[{key:"componentDidUpdate",value:function(e){e.open!==this.props.open&&this.toggle(this.props.open)}},{key:"componentWillUnmount",value:function(){this.clearDelay()}},{key:"getStyle",value:function(){var e=this.props.transitions.map(this.getTransition).join(",");return(0,a.Z)((0,a.Z)({},this.getExpandStyle()),{},{transition:e})}},{key:"render",value:function(){var e=this.props,r=e.className,n=e.children,t=e.tag,o={className:r,style:this.getStyle(),ref:this.setRef};return(0,j.jsx)(t,(0,a.Z)((0,a.Z)({},o),{},{children:n}))}}]),n}(o.Component);O.defaultProps={open:!1,duration:200,easing:"ease-in-out",className:"",tag:"div",transitions:["height","opacity"],styles:{}};var P=O,H=n(48143),B=n(58617),R=n(43360),N=function(e){var r=e.title,n=e.description,t=e.className,i=e.maxHeight,v=e.component,f=e.source,x=(0,o.useState)(!1),y=(0,s.Z)(x,2),Z=y[0],b=y[1];return(0,j.jsxs)(H.Z,{className:t,title:(0,j.jsxs)("div",{className:"w-100",children:[(0,j.jsx)("div",{children:r}),(0,j.jsx)("div",{className:(0,c.default)(u,"text-truncate"),children:n})]}),extra:f?(0,j.jsx)(R.Z,{"aria-label":"view code",shape:"circle",onClick:function(){return b(!Z)},children:(0,j.jsx)(B.oT$,{className:m})}):null,children:[(0,j.jsx)(P,{open:Z,children:f?(0,j.jsx)(d.Z,{style:{borderRadius:8,background:"#333333",height:350,maxHeight:400},children:(0,j.jsx)(l.ZP,(0,a.Z)((0,a.Z)({},l.lG),{},{code:f,language:"jsx",theme:p,children:function(e){var r=e.style,n=e.tokens,t=e.getLineProps,o=e.getTokenProps;return(0,j.jsx)("pre",{className:h,style:(0,a.Z)((0,a.Z)({},r),{},{maxHeight:500}),children:n.map((function(e,r){return(0,j.jsx)("div",(0,a.Z)((0,a.Z)({},t({line:e,key:r})),{},{children:e.map((function(e,n){return(0,j.jsx)("span",(0,a.Z)({},o({token:e,key:n})),r)}))}),r)}))})}}))}):null}),(0,j.jsx)(d.Z,{style:{maxHeight:i},className:"position-relative",children:(0,j.jsx)("div",{className:(0,c.default)(g,"d-flex align-items-center justify-content-center w-100 p-3"),children:(0,j.jsx)(v,{})})})]})},F=N;N.defaultProps={description:"",maxHeight:500};var E=function(e){var r=e.title,n=e.description,t=e.className,o=e.maxHeight,a=e.component,s=e.source;return(0,j.jsx)(i.Z,{type:"bottom",interval:100,duration:450,children:(0,j.jsx)(F,{title:r,description:n,className:t,maxHeight:o,component:a,source:s},"card")})},A=E;E.defaultProps={description:"",maxHeight:500}},66398:function(e,r,n){n.d(r,{Z:function(){return p}});n(72791);var t="AppComponentHeader_headerTitle__A9HGS",o="AppComponentHeader_titleH3__owcvF",i="AppComponentHeader_textBase__Hw4ll",a=n(10077),s=n(43360),l=n(80184),c=function(e){var r=e.title,n=e.description,c=e.refUrl;return(0,l.jsx)(a.Z,{type:"top",height:"auto",interval:100,duration:450,children:(0,l.jsxs)("div",{className:"d-flex flex-column pb-3 flex-sm-row justify-content-sm-between pt-xxl-3",children:[(0,l.jsxs)("div",{className:t,children:[(0,l.jsx)("h3",{className:o,children:r}),n?(0,l.jsx)("h5",{className:i,children:n}):null]}),c?(0,l.jsx)("div",{style:{height:30},children:(0,l.jsx)(s.Z,{variant:"primary",href:c,target:"_blank",children:"Reference"})}):null]},"header")})},p=c;c.defaultProps={}},11406:function(e,r,n){var t=n(45987),o=n(1413),i=(n(72791),n(92914)),a=n(10077),s=n(89743),l=n(80184),c=["children"],p=function(e){return(0,l.jsx)(s.Z,(0,o.Z)({className:i.Z.row},e))};r.Z=function(e){var r=e.children,n=(0,t.Z)(e,c);return(0,l.jsx)(a.Z,(0,o.Z)((0,o.Z)({animateStyle:{flexDirection:"row"},component:p,type:"bottom",ease:"easeInOutQuart",height:"auto"},n),{},{children:r}))}},2498:function(e,r,n){n.r(r),n.d(r,{default:function(){return D}});var t=n(72791),o=n(66398),i=n(11406),a=n(2677),s=n(38081),l=n(1413),c=n(45987),p=n(29439),d=n(43360),u=n(91537),h=n(80184),g=["placement","arrowProps","show","popper"];function m(){var e=(0,t.useState)(!1),r=(0,p.Z)(e,2),n=r[0],o=r[1],i=(0,t.useRef)(null);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Z,{variant:"danger",ref:i,onClick:function(){return o(!n)},children:"Click me to see"}),(0,h.jsx)(u.Z,{target:i.current,show:n,placement:"right",children:function(e){e.placement,e.arrowProps,e.show,e.popper;var r=(0,c.Z)(e,g);return(0,h.jsx)("div",(0,l.Z)((0,l.Z)({},r),{},{style:(0,l.Z)({backgroundColor:"rgba(255, 100, 100, 0.85)",padding:"2px 10px",color:"white",borderRadius:3},r.style),children:"Simple tooltip"}))}})]})}var v=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(m,{})})},f=n(12576),x=n(83714),y=function(){return(0,h.jsx)(x.Z,{placement:"right",delay:{show:250,hide:400},overlay:function(e){return(0,h.jsx)(f.Z,(0,l.Z)((0,l.Z)({id:"button-tooltip"},e),{},{children:"Simple tooltip"}))},children:(0,h.jsx)(d.Z,{variant:"success",children:"Hover me to see"})})},Z=n(92592),j=["ref"],b=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(x.Z,{placement:"bottom",overlay:(0,h.jsx)(f.Z,{id:"button-tooltip-2",children:"Check out this avatar"}),children:function(e){var r=e.ref,n=(0,c.Z)(e,j);return(0,h.jsxs)(d.Z,(0,l.Z)((0,l.Z)({variant:"light"},n),{},{className:"d-inline-flex align-items-center",children:[(0,h.jsx)(Z.Z,{ref:r,roundedCircle:!0,src:"holder.js/20x20?text=J&bg=28a745&fg=FFF"}),(0,h.jsx)("span",{className:"ms-1",children:"Hover to see"})]}))}})})};function C(){var e=(0,t.useState)(!1),r=(0,p.Z)(e,2),n=r[0],o=r[1],i=(0,t.useRef)(null);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Z,{ref:i,onClick:function(){return o(!n)},children:"Click me!"}),(0,h.jsx)(u.Z,{target:i.current,show:n,placement:"right",children:function(e){return(0,h.jsx)(f.Z,(0,l.Z)((0,l.Z)({id:"overlay-example"},e),{},{children:"My Tooltip"}))}})]})}var w=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(C,{})})},T=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(h.Fragment,{children:["top","right","bottom","left"].map((function(e){return(0,h.jsx)(x.Z,{placement:e,overlay:(0,h.jsxs)(f.Z,{id:"tooltip-".concat(e),children:["Tooltip on ",(0,h.jsx)("strong",{children:e}),"."]}),children:(0,h.jsxs)(d.Z,{variant:"secondary",children:["Tooltip on ",e]})},e)}))})})},S=n(63739),k=(0,h.jsxs)(S.Z,{id:"popover-basic",children:[(0,h.jsx)(S.Z.Header,{as:"h3",children:"Popover right"}),(0,h.jsxs)(S.Z.Body,{children:["And here's some ",(0,h.jsx)("strong",{children:"amazing"})," content. It's very engaging. right?"]})]}),_=function(){return(0,h.jsx)(x.Z,{trigger:"click",placement:"right",overlay:k,children:(0,h.jsx)(d.Z,{variant:"success",children:"Click me to see"})})},O=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(_,{})})},P=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(x.Z,{overlay:(0,h.jsx)(f.Z,{id:"tooltip-disabled",children:"Tooltip!"}),children:(0,h.jsx)("span",{className:"d-inline-block",children:(0,h.jsx)(d.Z,{disabled:!0,style:{pointerEvents:"none"},children:"Disabled button"})})})})};function H(){var e=(0,t.useState)(!1),r=(0,p.Z)(e,2),n=r[0],o=r[1],i=(0,t.useState)(null),a=(0,p.Z)(i,2),s=a[0],l=a[1],c=(0,t.useRef)(null);return(0,h.jsxs)("div",{ref:c,children:[(0,h.jsx)(d.Z,{onClick:function(e){o(!n),l(e.target)},children:"Holy guacamole!"}),(0,h.jsx)(u.Z,{show:n,target:s,placement:"bottom",container:c,containerPadding:20,children:(0,h.jsxs)(S.Z,{id:"popover-contained",children:[(0,h.jsx)(S.Z.Header,{as:"h3",children:"Popover bottom"}),(0,h.jsxs)(S.Z.Body,{children:[(0,h.jsx)("strong",{children:"Holy guacamole!"})," Check this info."]})]})})]})}var B=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(H,{})})},R=["popper","children","show"],N=t.forwardRef((function(e,r){var n=e.popper,o=e.children,i=(e.show,(0,c.Z)(e,R));return(0,t.useEffect)((function(){console.log("updating!"),n.scheduleUpdate()}),[o,n]),(0,h.jsx)(S.Z,(0,l.Z)((0,l.Z)({ref:r,body:!0},i),{},{children:o}))})),F="Short and sweet!";function E(){var e=(0,t.useState)(F),r=(0,p.Z)(e,2),n=r[0],o=r[1];return(0,t.useEffect)((function(){var e=setInterval((function(){o(n===F?"\n  Very long\n  Multiline content\n  that is engaging and what-not\n":F)}),3e3);return function(){return clearInterval(e)}})),(0,h.jsx)(x.Z,{trigger:"click",overlay:(0,h.jsx)(N,{id:"popover-contained",children:n}),children:(0,h.jsx)(d.Z,{children:"Holy guacamole!"})})}var A=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(E,{})})},D=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.Z,{title:"Overlays",description:"A set of components for positioning beautiful overlays, tooltips, popovers, and anything else you need.",refUrl:"https://react-bootstrap.github.io/components/overlays/"}),(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(a.Z,{xs:12,md:6,children:(0,h.jsx)(s.Z,{title:"Overview",component:v,source:"import React, {useRef, useState} from 'react';\r\nimport {Button, Overlay} from 'react-bootstrap';\r\n\r\nfunction Example() {\r\n  const [show, setShow] = useState(false);\r\n  const target = useRef(null);\r\n\r\n  return (\r\n    <>\r\n      <Button variant='danger' ref={target} onClick={() => setShow(!show)}>\r\n        Click me to see\r\n      </Button>\r\n      <Overlay target={target.current} show={show} placement='right'>\r\n        {({placement, arrowProps, show: _show, popper, ...props}) => (\r\n          <div\r\n            {...props}\r\n            style={{\r\n              backgroundColor: 'rgba(255, 100, 100, 0.85)',\r\n              padding: '2px 10px',\r\n              color: 'white',\r\n              borderRadius: 3,\r\n              ...props.style,\r\n            }}>\r\n            Simple tooltip\r\n          </div>\r\n        )}\r\n      </Overlay>\r\n    </>\r\n  );\r\n}\r\n\r\nconst Overview = () => {\r\n  return (\r\n    <div>\r\n      <Example />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Overview;\r\n",noScrollbar:!0,description:"Things to know about the React-Boostrap Overlay components."})}),(0,h.jsx)(a.Z,{xs:12,md:6,children:(0,h.jsx)(s.Z,{title:"Overlay Trigger",component:y,source:"import React from 'react';\r\nimport {Button, OverlayTrigger, Tooltip} from 'react-bootstrap';\r\nconst OverlayTriggerDemo = () => {\r\n  const renderTooltip = (props) => (\r\n    <Tooltip id='button-tooltip' {...props}>\r\n      Simple tooltip\r\n    </Tooltip>\r\n  );\r\n\r\n  return (\r\n    <OverlayTrigger\r\n      placement='right'\r\n      delay={{show: 250, hide: 400}}\r\n      overlay={renderTooltip}>\r\n      <Button variant='success'>Hover me to see</Button>\r\n    </OverlayTrigger>\r\n  );\r\n};\r\n\r\nexport default OverlayTriggerDemo;\r\n",noScrollbar:!0,description:'Since the above pattern is pretty common, but verbose, weve included <OverlayTrigger> component to help with common use-cases. It even has functionality to delayed show or hides, and a few different "trigger" events you can mix and match. '})}),(0,h.jsx)(a.Z,{xs:12,md:6,children:(0,h.jsx)(s.Z,{title:"Customizing trigger behavior",component:b,source:"import React from 'react';\r\nimport {Button, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';\r\n\r\nconst Customizing = () => {\r\n  return (\r\n    <div>\r\n      <OverlayTrigger\r\n        placement='bottom'\r\n        overlay={\r\n          <Tooltip id='button-tooltip-2'>Check out this avatar</Tooltip>\r\n        }>\r\n        {({ref, ...triggerHandler}) => (\r\n          <Button\r\n            variant='light'\r\n            {...triggerHandler}\r\n            className='d-inline-flex align-items-center'>\r\n            <Image\r\n              ref={ref}\r\n              roundedCircle\r\n              src='holder.js/20x20?text=J&bg=28a745&fg=FFF'\r\n            />\r\n            <span className='ms-1'>Hover to see</span>\r\n          </Button>\r\n        )}\r\n      </OverlayTrigger>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Customizing;\r\n",noScrollbar:!0,description:"For more advanced behaviors <OverlayTrigger> accepts a function child that passes in the injected ref and event handlers that correspond to the configured trigger prop."})}),(0,h.jsx)(a.Z,{xs:12,md:6,children:(0,h.jsx)(s.Z,{title:"Tooltips",component:w,source:"import React, {useRef, useState} from 'react';\r\nimport {Button, Overlay, Tooltip} from 'react-bootstrap';\r\n\r\nfunction Example() {\r\n  const [show, setShow] = useState(false);\r\n  const target = useRef(null);\r\n\r\n  return (\r\n    <>\r\n      <Button ref={target} onClick={() => setShow(!show)}>\r\n        Click me!\r\n      </Button>\r\n      <Overlay target={target.current} show={show} placement='right'>\r\n        {(props) => (\r\n          <Tooltip id='overlay-example' {...props}>\r\n            My Tooltip\r\n          </Tooltip>\r\n        )}\r\n      </Overlay>\r\n    </>\r\n  );\r\n}\r\n\r\nconst Tooltips = () => {\r\n  return (\r\n    <div>\r\n      <Example />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Tooltips;\r\n",noScrollbar:!0,description:"A tooltip component for a more stylish alternative to that anchor tag title attribute."})}),(0,h.jsx)(a.Z,{xs:12,md:6,children:(0,h.jsx)(s.Z,{title:"Tooltips 2",component:T,source:"import React from 'react';\r\nimport {Button, OverlayTrigger, Tooltip} from 'react-bootstrap';\r\n\r\nconst Tooltips2 = () => {\r\n  return (\r\n    <div>\r\n      <>\r\n        {['top', 'right', 'bottom', 'left'].map((placement) => (\r\n          <OverlayTrigger\r\n            key={placement}\r\n            placement={placement}\r\n            overlay={\r\n              <Tooltip id={`tooltip-${placement}`}>\r\n                Tooltip on <strong>{placement}</strong>.\r\n              </Tooltip>\r\n            }>\r\n            <Button variant='secondary'>Tooltip on {placement}</Button>\r\n          </OverlayTrigger>\r\n        ))}\r\n      </>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Tooltips2;\r\n",noScrollbar:!0,description:"Or pass a Tooltip element to OverlayTrigger instead."})}),(0,h.jsx)(a.Z,{xs:12,md:6,children:(0,h.jsx)(s.Z,{title:"Popovers",component:O,source:"import React from 'react';\r\nimport {Button, OverlayTrigger, Popover} from 'react-bootstrap';\r\n\r\nconst popover = (\r\n  <Popover id='popover-basic'>\r\n    <Popover.Header as='h3'>Popover right</Popover.Header>\r\n    <Popover.Body>\r\n      And here's some <strong>amazing</strong> content. It's very engaging.\r\n      right?\r\n    </Popover.Body>\r\n  </Popover>\r\n);\r\n\r\nconst Example = () => (\r\n  <OverlayTrigger trigger='click' placement='right' overlay={popover}>\r\n    <Button variant='success'>Click me to see</Button>\r\n  </OverlayTrigger>\r\n);\r\n\r\nconst Popovers = () => {\r\n  return (\r\n    <div>\r\n      <Example />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Popovers;\r\n",noScrollbar:!0,description:"A popover component, like those found in iOS."})}),(0,h.jsx)(a.Z,{xs:12,md:6,children:(0,h.jsx)(s.Z,{title:"Disabled",component:P,source:"import React from 'react';\r\nimport {Button, OverlayTrigger, Tooltip} from 'react-bootstrap';\r\n\r\nconst Disabled = () => {\r\n  return (\r\n    <div>\r\n      <OverlayTrigger\r\n        overlay={<Tooltip id='tooltip-disabled'>Tooltip!</Tooltip>}>\r\n        <span className='d-inline-block'>\r\n          <Button disabled style={{pointerEvents: 'none'}}>\r\n            Disabled button\r\n          </Button>\r\n        </span>\r\n      </OverlayTrigger>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Disabled;\r\n",noScrollbar:!0,description:"Elements with the disabled attribute aren\u2019t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip)."})}),(0,h.jsx)(a.Z,{xs:12,md:6,children:(0,h.jsx)(s.Z,{title:"Changing containers",component:B,source:"import React, {useRef, useState} from 'react';\r\nimport {Button, Overlay, Popover} from 'react-bootstrap';\r\n\r\nfunction Example() {\r\n  const [show, setShow] = useState(false);\r\n  const [target, setTarget] = useState(null);\r\n  const ref = useRef(null);\r\n\r\n  const handleClick = (event) => {\r\n    setShow(!show);\r\n    setTarget(event.target);\r\n  };\r\n\r\n  return (\r\n    <div ref={ref}>\r\n      <Button onClick={handleClick}>Holy guacamole!</Button>\r\n\r\n      <Overlay\r\n        show={show}\r\n        target={target}\r\n        placement='bottom'\r\n        container={ref}\r\n        containerPadding={20}>\r\n        <Popover id='popover-contained'>\r\n          <Popover.Header as='h3'>Popover bottom</Popover.Header>\r\n          <Popover.Body>\r\n            <strong>Holy guacamole!</strong> Check this info.\r\n          </Popover.Body>\r\n        </Popover>\r\n      </Overlay>\r\n    </div>\r\n  );\r\n}\r\n\r\nconst Changing = () => {\r\n  return (\r\n    <div>\r\n      <Example />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Changing;\r\n",noScrollbar:!0,description:"You can specify a container to control the DOM element the overlay is appended to. This is especially useful when styles conflict with your Overlays."})}),(0,h.jsx)(a.Z,{xs:12,md:6,children:(0,h.jsx)(s.Z,{title:"Updating position dynamically",component:A,source:"import React, {useEffect, useState} from 'react';\r\nimport {Button, OverlayTrigger, Popover} from 'react-bootstrap';\r\n\r\nconst UpdatingPopover = React.forwardRef(\r\n  ({popper, children, show: _, ...props}, ref) => {\r\n    useEffect(() => {\r\n      console.log('updating!');\r\n      popper.scheduleUpdate();\r\n    }, [children, popper]);\r\n\r\n    return (\r\n      <Popover ref={ref} body {...props}>\r\n        {children}\r\n      </Popover>\r\n    );\r\n  },\r\n);\r\n\r\nconst longContent = `\r\n  Very long\r\n  Multiline content\r\n  that is engaging and what-not\r\n`;\r\nconst shortContent = 'Short and sweet!';\r\n\r\nfunction Example() {\r\n  const [content, setContent] = useState(shortContent);\r\n\r\n  useEffect(() => {\r\n    const timerId = setInterval(() => {\r\n      setContent(content === shortContent ? longContent : shortContent);\r\n    }, 3000);\r\n\r\n    return () => clearInterval(timerId);\r\n  });\r\n\r\n  return (\r\n    <OverlayTrigger\r\n      trigger='click'\r\n      overlay={\r\n        <UpdatingPopover id='popover-contained'>{content}</UpdatingPopover>\r\n      }>\r\n      <Button>Holy guacamole!</Button>\r\n    </OverlayTrigger>\r\n  );\r\n}\r\n\r\nconst UpdatingPosition = () => {\r\n  return (\r\n    <div>\r\n      <Example />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default UpdatingPosition;\r\n",noScrollbar:!0,description:"Since we cant know every time your overlay changes size, to reposition it, you need to take manual action if you want to update the position of an Overlay in response to a change."})})]})]})}},92914:function(e,r){r.Z={row:"AppRowContainer_row__lSYCd"}}}]);
//# sourceMappingURL=2498.9216bcca.chunk.js.map