"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[497],{87930:function(e,r,i){i.d(r,{Z:function(){return s}});var t=i(17592),d=i(17551);const n={0:"#FFFFFF",100:"#F9FAFB",200:"#F4F6F8",300:"#DFE3E8",400:"#C4CDD5",500:"#919EAB",600:"#637381",700:"#454F5B",800:"#212B36",900:"#161C24"};var a={common:{black:"#000",white:"#fff"},primary:{lighter:"#D1E9FC",light:"#76B0F1",main:"#2065D1",dark:"#103996",darker:"#061B64",contrastText:"#fff"},secondary:{lighter:"#D6E4FF",light:"#84A9FF",main:"#3366FF",dark:"#1939B7",darker:"#091A7A",contrastText:"#fff"},info:{lighter:"#D0F2FF",light:"#74CAFF",main:"#1890FF",dark:"#0C53B7",darker:"#04297A",contrastText:"#fff"},success:{lighter:"#E9FCD4",light:"#AAF27F",main:"#54D62C",dark:"#229A16",darker:"#08660D",contrastText:n[800]},warning:{lighter:"#FFF7CD",light:"#FFE16A",main:"#FFC107",dark:"#B78103",darker:"#7A4F01",contrastText:n[800]},error:{lighter:"#FFE7D9",light:"#FFA48D",main:"#FF4842",dark:"#B72136",darker:"#7A0C2E",contrastText:"#fff"},grey:n,divider:(0,d.Fq)(n[500],.24),text:{primary:n[800],secondary:n[600],disabled:n[500]},background:{paper:"#fff",default:n[100],neutral:n[200]},action:{active:n[600],hover:(0,d.Fq)(n[500],.08),selected:(0,d.Fq)(n[500],.16),disabled:(0,d.Fq)(n[500],.8),disabledBackground:(0,d.Fq)(n[500],.24),focus:(0,d.Fq)(n[500],.24),hoverOpacity:.08,disabledOpacity:.48}};var s=(0,t.ZP)("div")({"& .MuiDataGrid-root":{border:"none"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .name-column--cell":{color:a.primary.main,cursor:"pointer"},"& .name-column--cell--capitalize":{textTransform:"capitalize"},"& .name-column--cell:hover":{textDecoration:"underline"},"& .MuiDataGrid-columnHeaders":{backgroundColor:a.grey[200],borderBottom:"none",outline:"none !important",borderRadius:"0px"},"& .MuiDataGrid-virtualScroller":{scrollbarWidth:"1px"},"& .MuiDataGrid-toolbarContainer .MuiButton-text":{textTransform:"capitalize",fontSize:"15px"},".MuiDataGrid-cell:focus,.MuiDataGrid-columnHeader:focus,MuiDataGrid-columnHeaderCheckbox:focus":{outline:"none !important"},".css-1jiby6q-MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within, .css-1jiby6q-MuiDataGrid-root .MuiDataGrid-cell:focus-within":{outline:"none"}})},23547:function(e,r,i){i.d(r,{Z:function(){return l}});var t=i(75192),d=i.n(t),n=i(47313),a=i(2524),s=i(41806),u=i(46417);const o=(0,n.forwardRef)(((e,r)=>{let{icon:i,width:t=20,sx:d,...n}=e;return(0,u.jsx)(s.Z,{ref:r,component:a.JO,icon:i,sx:{width:t,height:t,...d},...n})}));o.propTypes={sx:d().object,width:d().oneOfType([d().number,d().string]),icon:d().oneOfType([d().element,d().string])};var l=o},15497:function(e,r,i){i.r(r),i.d(r,{default:function(){return I}});var t=i(47313),d=i(47825),n=i(42832),a=i(61113),s=i(31095),u=i(41806),o=i(73428),l=i(51629),m=i(66835),c=i(23477),h=i(24076),q=i(67478),Z=i(57861),p=i(47131),f=i(87930),b=i(23547),y=i(66149),_=i(4117),x=i(96467),v=i(33604),g=i(9019),T=i(24631),D=i(23195),F=i(79429),j=i(5178),N=i(99608),P=i(46417);var A=e=>{const{open:r,handleClose:i}=e,t=(0,F.TA)({initialValues:{studentHosId:"",date:"",outTime:"",inTime:""},validationSchema:N.Bm,onSubmit:e=>{console.log("Form values:",e),i()}});return(0,P.jsx)("div",{children:(0,P.jsxs)(y.Z,{open:r,onClose:i,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[(0,P.jsxs)(v.Z,{id:"scroll-dialog-title",style:{display:"flex",justifyContent:"space-between"},children:[(0,P.jsx)(a.Z,{variant:"h6",children:"Resident Attendence"}),(0,P.jsx)(a.Z,{children:(0,P.jsx)(D.Z,{onClick:i,style:{cursor:"pointer"}})})]}),(0,P.jsx)(x.Z,{dividers:!0,children:(0,P.jsx)("form",{children:(0,P.jsxs)(g.ZP,{container:!0,rowSpacing:3,columnSpacing:{xs:0,sm:5,md:4},children:[(0,P.jsxs)(g.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,P.jsx)(j.Z,{children:"Student Hostel Id"}),(0,P.jsx)(T.Z,{id:"studentHosId",name:"studentHosId",size:"small",fullWidth:!0,value:t.values.studentHosId,onChange:t.handleChange,error:t.touched.studentHosId&&!!t.errors.studentHosId,helperText:t.touched.studentHosId&&t.errors.studentHosId})]}),(0,P.jsxs)(g.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,P.jsx)(j.Z,{children:"Date"}),(0,P.jsx)(T.Z,{id:"date",name:"date",type:"date",size:"small",fullWidth:!0,value:t.values.date,onChange:t.handleChange,error:t.touched.date&&!!t.errors.date,helperText:t.touched.date&&t.errors.date})]}),(0,P.jsxs)(g.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,P.jsx)(j.Z,{children:"Out Time"}),(0,P.jsx)(T.Z,{id:"outTime",name:"outTime",type:"time",size:"small",fullWidth:!0,value:t.values.outTime,onChange:t.handleChange,error:t.touched.outTime&&!!t.errors.outTime,helperText:t.touched.outTime&&t.errors.outTime})]}),(0,P.jsxs)(g.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,P.jsx)(j.Z,{children:"In Time"}),(0,P.jsx)(T.Z,{id:"inTime",name:"inTime",type:"time",size:"small",fullWidth:!0,value:t.values.inTime,onChange:t.handleChange,error:t.touched.inTime&&!!t.errors.inTime,helperText:t.touched.inTime&&t.errors.inTime})]})]})})}),(0,P.jsxs)(_.Z,{children:[(0,P.jsx)(s.Z,{onClick:t.handleSubmit,variant:"contained",color:"primary",type:"submit",children:"Save"}),(0,P.jsx)(s.Z,{onClick:()=>{i()},variant:"outlined",color:"error",children:"Cancel"})]})]})})},R=i(98967);const C=[{id:1,hostelName:"MahaveerSeve Dham",studentName:"John Doe",date:"10-10-2024",outTime:"08:15",inTime:"07:30"}];var I=()=>{const[e,r]=(0,t.useState)(!1);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(A,{open:e,handleClose:()=>r(!1)}),(0,P.jsxs)(d.Z,{children:[(0,P.jsxs)(n.Z,{direction:"row",alignItems:"center",mb:5,justifyContent:"space-between",children:[(0,P.jsx)(a.Z,{variant:"h4",children:"Resident Attendence"}),(0,P.jsx)(n.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:2,children:(0,P.jsx)(s.Z,{variant:"contained",startIcon:(0,P.jsx)(b.Z,{icon:"eva:plus-fill"}),onClick:()=>r(!0),children:"Add New"})})]}),(0,P.jsx)(f.Z,{children:(0,P.jsx)(u.Z,{width:"100%",children:(0,P.jsx)(o.Z,{children:(0,P.jsx)(l.Z,{children:(0,P.jsxs)(m.Z,{children:[(0,P.jsx)(c.Z,{children:(0,P.jsxs)(h.Z,{children:[(0,P.jsx)(q.Z,{children:"Hostel Name"}),(0,P.jsx)(q.Z,{children:"Student Name"}),(0,P.jsx)(q.Z,{children:"Date"}),(0,P.jsx)(q.Z,{children:"Out-Time"}),(0,P.jsx)(q.Z,{children:"In-Time"}),(0,P.jsx)(q.Z,{children:"Action"})]})}),(0,P.jsx)(Z.Z,{children:C.map((e=>(0,P.jsxs)(h.Z,{children:[(0,P.jsx)(q.Z,{children:e.hostelName}),(0,P.jsx)(q.Z,{children:e.studentName}),(0,P.jsx)(q.Z,{children:e.date}),(0,P.jsx)(q.Z,{children:e.outTime}),(0,P.jsx)(q.Z,{children:e.inTime}),(0,P.jsx)(q.Z,{children:(0,P.jsx)(n.Z,{direction:"row",children:(0,P.jsx)(p.Z,{onClick:()=>{return i=e.id,r(!0),void console.log(`Edit clicked for ID: ${i}`);var i},"aria-label":"edit",style:{color:"green"},children:(0,P.jsx)(R.Z,{})})})})]},e.id)))})]})})})})})]})]})}},99608:function(e,r,i){i.d(r,{$p:function(){return m},Bm:function(){return Z},HL:function(){return b},NV:function(){return u},RL:function(){return v},X1:function(){return p},X6:function(){return c},Ys:function(){return x},a3:function(){return h},at:function(){return f},cj:function(){return o},hH:function(){return _},ni:function(){return s},nx:function(){return l},oK:function(){return y},oo:function(){return g},pE:function(){return a},zw:function(){return n}});var t=i(3463);const d=["image/jpg","image/jpeg","image/png","image/gif"],n=(t.Ry({hostelId:t.Z_().required("Hostel Id is required"),firstName:t.Z_().matches(/^[A-Za-z]+$/,"First name must contain only letters").required("First name is required"),lastName:t.Z_().matches(/^[A-Za-z]+$/,"First name must contain only letters").required("Last name is required"),dateOfBirth:t.hT().required("Date of Birth is required"),gender:t.Z_().required("Gender is required"),phoneNumber:t.Z_().matches(/^[6-9]\d{9}$/,"Invalid phone number").required("Phone number is required"),aadharCard:t.Z_().matches(/^\d{12}$/,"Aadhar Card ID must be exactly 12 digits").required("Aadhar Card ID is required"),state:t.Z_().required("State is required"),city:t.Z_().required("City is required"),address:t.Z_().required("Address is required"),photo:t.Z_().required("Photo is required")}),t.Ry({hostelId:t.Z_().required("Hostel is required"),firstName:t.Z_().required("First name is required"),lastName:t.Z_().required("Last name is required"),email:t.Z_().email("Invalid email format").required("Email is required"),password:t.Z_().required("Password is required"),dateOfBirth:t.Z_().required("Date of birth is required"),gender:t.Z_().required("Gender is required"),phoneNumber:t.Z_().required("Phone number is required"),aadharCard:t.Z_().required("Aadhar card is required"),state:t.Z_().required("State is required"),city:t.Z_().required("City is required"),address:t.Z_().required("Address is required"),photo:t.nK().required("Photo is required")})),a=t.Ry({hostelId:t.Z_().required("Hostel is required"),firstName:t.Z_().required("First name is required"),lastName:t.Z_().required("Last name is required"),dateOfBirth:t.Z_().required("Date of birth is required"),gender:t.Z_().required("Gender is required"),phoneNumber:t.Z_().required("Phone number is required"),aadharCard:t.Z_().required("Aadhar card is required"),state:t.Z_().required("State is required"),city:t.Z_().required("City is required"),address:t.Z_().required("Address is required")}),s=(t.Ry({firstName:t.Z_().matches(/^[A-Za-z]+$/,"First name must contain only letters").required("First name is required"),lastName:t.Z_().matches(/^[A-Za-z]+$/,"First name must contain only letters").required("Last name is required"),dateOfBirth:t.hT().required("Date of Birth is required"),gender:t.Z_().required("Gender is required"),email:t.Z_().email("Invalid email").required("Email is required"),password:t.Z_().required("Password is required").min(8,"Password must be at least 8 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,"Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number"),phoneNumber:t.Z_().matches(/^[6-9]\d{9}$/,"Invalid phone number").required("Phone number is required"),aadharCardId:t.Z_().matches(/^\d{12}$/,"Aadhar Card ID must be exactly 12 digits").required("Aadhar Card ID is required"),state:t.Z_().required("State is required"),city:t.Z_().required("City is required"),address:t.Z_().required("Address is required"),photo:t.Z_().required("Photo is required"),studentHosId:t.Z_().required("Student Hostel Id is required")}),t.Ry({hostelName:t.Z_().matches(/^[A-Za-z\s]+$/,"Name must contain only letters").required("Name is required"),email:t.Z_().email("Invalid email").required("Email is required"),phoneNumber:t.Z_().matches(/^[6-9]\d{9}$/,"Invalid phone number").required("Phone number is required"),uniqueCode:t.Z_().required("UniqueCode is required"),state:t.Z_().required("State is required"),city:t.Z_().required("City is required"),address:t.Z_().required("Address is required"),photo:t.Z_().required("Photo is required"),noOfRoom:t.Z_().required("No of Room is required")}),t.Ry({hostelName:t.Z_().matches(/^[A-Za-z\s]+$/,"Name must contain only letters").required("Hostel Name is required"),hostelPhoneNumber:t.Z_().matches(/^[6-9]\d{9}$/,"Invalid phone number").required("Phone number is required"),ownerName:t.Z_().matches(/^[A-Za-z\s]+$/,"Name must contain only letters").required("Owner Name is required"),ownerPhoneNumber:t.Z_().matches(/^[6-9]\d{9}$/,"Invalid phone number").required("Phone number is required"),email:t.Z_().email("Invalid email").required("Email is required"),password:t.Z_().required("Password is required").min(8,"Password must be at least 8 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,"Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number"),state:t.Z_().required("State is required"),city:t.Z_().required("City is required"),address:t.Z_().required("Address is required"),hostelphoto:t.Z_().required("Photo is required"),aadharphoto:t.Z_().required("Photo is required")})),u=t.Ry({hostelName:t.Z_().matches(/^[A-Za-z\s]+$/,"Name must contain only letters").required("Hostel Name is required"),hostelPhoneNumber:t.Z_().matches(/^[6-9]\d{9}$/,"Invalid phone number").required("Phone number is required"),ownerName:t.Z_().matches(/^[A-Za-z\s]+$/,"Name must contain only letters").required("Owner Name is required"),ownerPhoneNumber:t.Z_().matches(/^[6-9]\d{9}$/,"Invalid phone number").required("Phone number is required"),state:t.Z_().required("State is required"),city:t.Z_().required("City is required"),address:t.Z_().required("Address is required"),hostelphoto:t.Z_().required("Photo is required"),aadharphoto:t.Z_().required("Photo is required")}),o=t.Ry({roomNumber:t.Z_().required("Room number is required"),roomType:t.Z_().required("Select Room Type is required"),roomphoto:t.IX().of(t.nK().test("fileSize","File size too large",(e=>!e||e.size<=1048576)).test("fileFormat","Unsupported Format",(e=>!e||d.includes(e.type)))).required("Room Photos is required")}),l=t.Ry({studentName:t.Z_().required("Student Name is required"),studentPhoneNo:t.Z_().matches(/^[6-9]\d{9}$/,"Invalid phone number").required("Phone Number is required"),fathersName:t.Z_().required("Fathers Name is required"),fathersPhoneNo:t.Z_().matches(/^[6-9]\d{9}$/,"Invalid phone number").required("Phone Number is required"),dateOfBirth:t.hT().required("Date of Birth is required"),gender:t.Z_().required("Gender is required"),email:t.Z_().email("Invalid email").required("Email is required"),studentphoto:t.Z_().required("Student Photo is required"),state:t.Z_().required("State is required"),city:t.Z_().required("City is required"),address:t.Z_().required("Address is required"),aadharcardphoto:t.Z_().required("Student AadharCard Photo is required"),roomNumber:t.Z_().required("Select Room is required"),startDate:t.hT().required("Start Date is required"),endDate:t.hT().required("End Date is required").min(t.iH("startDate"),"End Date must be after Start Date"),isLibrary:t.Z_(),isFood:t.Z_(),libraryAmount:t.Rx().nullable().integer("Library Amount must be an integer"),foodAmount:t.Rx().nullable().integer("Food Amount must be an integer"),hostelRent:t.Rx().required("Hostel Rent is required").integer("Hostel Rent must be an integer"),advancePayment:t.Rx().required("Advance Payment is required").integer("Advance Payment must be an integer")}),m=t.Ry({studentName:t.Z_().required("Student Name is required"),studentPhoneNo:t.Z_().matches(/^[6-9]\d{9}$/,"Invalid phone number").required("Phone Number is required"),fathersName:t.Z_().required("Fathers Name is required"),fathersPhoneNo:t.Z_().matches(/^[6-9]\d{9}$/,"Invalid phone number").required("Phone Number is required"),dateOfBirth:t.hT().required("Date of Birth is required"),gender:t.Z_().required("Gender is required"),email:t.Z_().email("Invalid email").required("Email is required"),state:t.Z_().required("State is required"),city:t.Z_().required("City is required"),address:t.Z_().required("Address is required"),roomNumber:t.Z_().required("Select Room is required"),startDate:t.hT().required("Start Date is required"),endDate:t.hT().required("End Date is required").min(t.iH("startDate"),"End Date must be after Start Date"),isLibrary:t.Z_(),isFood:t.Z_(),libraryAmount:t.Rx().nullable().integer("Library Amount must be an integer"),foodAmount:t.Rx().nullable().integer("Food Amount must be an integer"),hostelRent:t.Rx().required("Hostel Rent is required").integer("Hostel Rent must be an integer"),advancePayment:t.Rx().required("Advance Payment is required").integer("Advance Payment must be an integer")}),c=t.Ry({datetime:t.hT().min(new Date,"Date must be today or later").required("Date and time are required"),problemDescription:t.Z_().required("Problem Description is required"),status:t.Z_().required("Status is required")}),h=t.Ry({visitorName:t.Z_().matches(/^[A-Za-z\s]+$/,"Name must contain only letters").required("Visitor Name is required"),phoneNumber:t.Z_().matches(/^[6-9]\d{9}$/,"Invalid phone number").required("Phone Number is required"),dateTime:t.Z_().required("Date Time is required")}),q=(new Date).toISOString().split("T")[0],Z=t.Ry({studentHosId:t.Z_().required("Student-Hostel ID is required"),date:t.Z_().required("Date is required").test("is-today","Date must be today",(function(e){return e===q})),outTime:t.Z_().required("Out Time is required")}),p=t.Ry({productName:t.Z_().required("Product Name is required"),mesurment:t.Z_().required("Measurement is required")}),f=t.Ry().shape({productName:t.Z_().required("Product is required"),quantity:t.Rx().typeError("Quantity must be a number").required("Quantity is required").positive("Quantity must be a positive number"),price:t.Rx().typeError("Price must be a number").required("Price is required").positive("Price must be a positive number"),date:t.hT().required("Date is required")}),b=t.Ry().shape({productName:t.Z_().required("Product List is required"),quantity:t.Rx().typeError("Quantity must be a number").required("Quantity is required").positive("Quantity must be a positive number"),date:t.hT().required("Date is required")}),y=t.Ry().shape({expenseTitle:t.Z_().required("Expense Title is required"),price:t.Rx().required("Price is required").positive("Price must be a positive number"),date:t.hT().required("Date is required"),billPhoto:t.nK().required("Bill Photo is required")}),_=t.Ry().shape({expenseTitle:t.Z_().required("Expense Title is required"),price:t.Rx().required("Price is required").positive("Price must be a positive number"),date:t.hT().required("Date is required")}),x=t.Ry().shape({noticeTitle:t.Z_().required("is required"),dateTime:t.hT().required("Date Time is required"),description:t.Z_().required("Description is required")}),v=t.Ry().shape({weekdays:t.Z_().required("Weekdays is required"),foodType:t.Z_().required("Food Type is required"),foodDescription:t.Z_().required("Food Description is required")}),g=t.Ry({month:t.Z_().required("Month is required"),paymentDate:t.hT().required("Date is required"),paymentType:t.Z_().required("Payment Method is required"),paymentAmount:t.Rx().positive("Amount must be positive").required("Payment Amount is required"),paymentAttachment:t.nK().nullable()})},98967:function(e,r,i){var t=i(81171),d=i(46417);r.Z=(0,t.Z)((0,d.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},23477:function(e,r,i){i.d(r,{Z:function(){return y}});var t=i(87462),d=i(63366),n=i(47313),a=i(2197),s=i(8007),u=i(56062),o=i(77342),l=i(17592),m=i(14363),c=i(1167);function h(e){return(0,c.ZP)("MuiTableHead",e)}(0,m.Z)("MuiTableHead",["root"]);var q=i(46417);const Z=["className","component"],p=(0,l.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"table-header-group"}),f={variant:"head"},b="thead";var y=n.forwardRef((function(e,r){const i=(0,o.Z)({props:e,name:"MuiTableHead"}),{className:n,component:l=b}=i,m=(0,d.Z)(i,Z),c=(0,t.Z)({},i,{component:l}),y=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"]},h,r)})(c);return(0,q.jsx)(u.Z.Provider,{value:f,children:(0,q.jsx)(p,(0,t.Z)({as:l,className:(0,a.Z)(y.root,n),ref:r,role:l===b?null:"rowgroup",ownerState:c},m))})}))},17551:function(e,r,i){i.d(r,{$n:function(){return l},Fq:function(){return u},_j:function(){return o}});var t=i(43491),d=i(3753);function n(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,d.Z)(e,r,i)}function a(e){if(e.type)return e;if("#"===e.charAt(0))return a(function(e){e=e.slice(1);const r=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let i=e.match(r);return i&&1===i[0].length&&(i=i.map((e=>e+e))),i?`rgb${4===i.length?"a":""}(${i.map(((e,r)=>r<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}(e));const r=e.indexOf("("),i=e.substring(0,r);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(i))throw new Error((0,t.Z)(9,e));let d,n=e.substring(r+1,e.length-1);if("color"===i){if(n=n.split(" "),d=n.shift(),4===n.length&&"/"===n[3].charAt(0)&&(n[3]=n[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(d))throw new Error((0,t.Z)(10,d))}else n=n.split(",");return n=n.map((e=>parseFloat(e))),{type:i,values:n,colorSpace:d}}function s(e){const{type:r,colorSpace:i}=e;let{values:t}=e;return-1!==r.indexOf("rgb")?t=t.map(((e,r)=>r<3?parseInt(e,10):e)):-1!==r.indexOf("hsl")&&(t[1]=`${t[1]}%`,t[2]=`${t[2]}%`),t=-1!==r.indexOf("color")?`${i} ${t.join(" ")}`:`${t.join(", ")}`,`${r}(${t})`}function u(e,r){return e=a(e),r=n(r),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]=`/${r}`:e.values[3]=r,s(e)}function o(e,r){if(e=a(e),r=n(r),-1!==e.type.indexOf("hsl"))e.values[2]*=1-r;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let i=0;i<3;i+=1)e.values[i]*=1-r;return s(e)}function l(e,r){if(e=a(e),r=n(r),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*r;else if(-1!==e.type.indexOf("rgb"))for(let i=0;i<3;i+=1)e.values[i]+=(255-e.values[i])*r;else if(-1!==e.type.indexOf("color"))for(let i=0;i<3;i+=1)e.values[i]+=(1-e.values[i])*r;return s(e)}}}]);