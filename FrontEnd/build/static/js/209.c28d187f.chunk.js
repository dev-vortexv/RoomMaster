"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[209],{87209:function(e,t,s){s.r(t);var r=s(47313),n=s(47825),i=s(41806),a=s(47131),o=s(61113),d=s(9019),l=s(73428),h=s(92507),c=s(97890),x=s(29466),m=s(38475),u=s(46417);t.default=()=>{const e="http://146.190.107.141:4000",[t,s]=(0,r.useState)(null),p=(0,c.TH)().pathname.split("/"),Z=p[p.length-1];return(0,r.useEffect)((()=>{(async()=>{try{const t=await m.Z.get(`${e}/hostel/view/${Z}`);s(t.data.result)}catch(t){console.error("Error Found:",t)}})()}),[Z]),(0,u.jsxs)(n.Z,{children:[(0,u.jsxs)(i.Z,{mb:2,display:"flex",alignItems:"center",children:[(0,u.jsx)(x.rU,{to:"/dashboard/hostel",style:{textDecoration:"none",color:"inherit"},children:(0,u.jsx)(a.Z,{children:(0,u.jsx)(h.Z,{})})}),(0,u.jsx)(o.Z,{variant:"h4",children:"View Details of Hostel"})]}),t&&(0,u.jsxs)(d.ZP,{container:!0,spacing:3,children:[(0,u.jsx)(d.ZP,{item:!0,xs:12,md:6,children:(0,u.jsx)(l.Z,{children:(0,u.jsxs)(i.Z,{p:3,display:"flex",children:[(0,u.jsx)(i.Z,{mr:2,children:t.aadharphoto&&(0,u.jsx)("img",{src:`${e}/uploads/customers/${t.aadharphoto}`,alt:"OwnerPhoto",style:{width:150,height:150,borderRadius:"50%"}})}),(0,u.jsxs)(i.Z,{mt:5,children:[(0,u.jsxs)(o.Z,{variant:"body1",children:[(0,u.jsx)("strong",{children:"Owner Name:"})," ",t.ownerName]}),(0,u.jsxs)(o.Z,{variant:"body1",children:[(0,u.jsx)("strong",{children:"Phone No:"})," ",t.ownerPhoneNumber]}),(0,u.jsxs)(o.Z,{variant:"body1",children:[(0,u.jsx)("strong",{children:"Email:"})," ",t.email]})]})]})})}),(0,u.jsx)(d.ZP,{item:!0,xs:12,md:6,children:(0,u.jsx)(l.Z,{children:(0,u.jsxs)(i.Z,{p:3,display:"flex",children:[(0,u.jsx)(i.Z,{mr:5,children:t.hostelphoto&&(0,u.jsx)("img",{src:`${e}/uploads/hostels/${t.hostelphoto}`,alt:"HostelPhoto",style:{width:150,height:150}})}),(0,u.jsxs)(i.Z,{mt:3,children:[(0,u.jsxs)(o.Z,{variant:"body1",children:[(0,u.jsx)("strong",{children:"Hostel Name:"})," ",t.hostelName]}),(0,u.jsxs)(o.Z,{variant:"body1",children:[(0,u.jsx)("strong",{children:"Phone Number:"})," ",t.hostelPhoneNumber]}),(0,u.jsxs)(o.Z,{variant:"body1",children:[(0,u.jsx)("strong",{children:"City:"})," ",t.city]}),(0,u.jsxs)(o.Z,{variant:"body1",children:[(0,u.jsx)("strong",{children:"State:"})," ",t.state]}),(0,u.jsxs)(o.Z,{variant:"body1",children:[(0,u.jsx)("strong",{children:"Address:"})," ",t.address]})]})]})})})]})]})}},92507:function(e,t,s){var r=s(81171),n=s(46417);t.Z=(0,r.Z)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},47825:function(e,t,s){s.d(t,{Z:function(){return w}});var r=s(63366),n=s(87462),i=s(47313),a=s(2964),o=s(1167),d=s(8007),l=s(31179),h=s(14614),c=s(96694),x=s(71821),m=s(46417);const u=["className","component","disableGutters","fixed","maxWidth","classes"],p=(0,x.Z)(),Z=(0,c.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[`maxWidth${(0,l.Z)(String(s.maxWidth))}`],s.fixed&&t.fixed,s.disableGutters&&t.disableGutters]}}),b=e=>(0,h.Z)({props:e,name:"MuiContainer",defaultTheme:p}),j=(e,t)=>{const{classes:s,fixed:r,disableGutters:n,maxWidth:i}=e,a={root:["root",i&&`maxWidth${(0,l.Z)(String(i))}`,r&&"fixed",n&&"disableGutters"]};return(0,d.Z)(a,(e=>(0,o.ZP)(t,e)),s)};var g=s(91615),f=s(17592),v=s(77342);const y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=Z,useThemeProps:s=b,componentName:o="MuiContainer"}=e,d=t((e=>{let{theme:t,ownerState:s}=e;return(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})}),(e=>{let{theme:t,ownerState:s}=e;return s.fixed&&Object.keys(t.breakpoints.values).reduce(((e,s)=>{const r=s,n=t.breakpoints.values[r];return 0!==n&&(e[t.breakpoints.up(r)]={maxWidth:`${n}${t.breakpoints.unit}`}),e}),{})}),(e=>{let{theme:t,ownerState:s}=e;return(0,n.Z)({},"xs"===s.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},s.maxWidth&&"xs"!==s.maxWidth&&{[t.breakpoints.up(s.maxWidth)]:{maxWidth:`${t.breakpoints.values[s.maxWidth]}${t.breakpoints.unit}`}})})),l=i.forwardRef((function(e,t){const i=s(e),{className:l,component:h="div",disableGutters:c=!1,fixed:x=!1,maxWidth:p="lg"}=i,Z=(0,r.Z)(i,u),b=(0,n.Z)({},i,{component:h,disableGutters:c,fixed:x,maxWidth:p}),g=j(b,o);return(0,m.jsx)(d,(0,n.Z)({as:h,ownerState:b,className:(0,a.Z)(g.root,l),ref:t},Z))}));return l}({createStyledComponent:(0,f.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[`maxWidth${(0,g.Z)(String(s.maxWidth))}`],s.fixed&&t.fixed,s.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,v.Z)({props:e,name:"MuiContainer"})});var w=y}}]);