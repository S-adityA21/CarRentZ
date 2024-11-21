"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4890],{4890:(R,d,s)=>{s.r(d),s.d(d,{ProfilePageModule:()=>v});var c=s(177),g=s(4341),r=s(4742),m=s(70),e=s(4438),u=s(3656),f=s(9885);const p=()=>["/home"],h=()=>["/search"],P=()=>["/wallet"],_=()=>["/booking"],b=()=>["/profile"];function k(t,a){if(1&t&&(e.j41(0,"div",26)(1,"ion-text",27)(2,"p"),e.EFF(3),e.k0s()()()),2&t){const o=e.XpG();e.R7$(3),e.JRh(o.errorMessage)}}function j(t,a){if(1&t){const o=e.RV6();e.j41(0,"div",28)(1,"ion-item",29),e.nrm(2,"ion-icon",30),e.j41(3,"ion-label"),e.EFF(4,"Name"),e.k0s(),e.j41(5,"ion-note",31),e.EFF(6),e.k0s()(),e.j41(7,"ion-item",29),e.nrm(8,"ion-icon",32),e.j41(9,"ion-label"),e.EFF(10,"Email"),e.k0s(),e.j41(11,"ion-note",31),e.EFF(12),e.k0s()(),e.j41(13,"ion-item",29),e.nrm(14,"ion-icon",33),e.j41(15,"ion-label"),e.EFF(16,"Phone Number"),e.k0s(),e.j41(17,"ion-note",31),e.EFF(18),e.k0s()(),e.j41(19,"ion-item",29),e.nrm(20,"ion-icon",34),e.j41(21,"ion-label"),e.EFF(22,"Date of Birth"),e.k0s(),e.j41(23,"ion-note",31),e.EFF(24),e.nI1(25,"date"),e.k0s()(),e.j41(26,"ion-item",29),e.nrm(27,"ion-icon",35),e.j41(28,"ion-label"),e.EFF(29,"Gender"),e.k0s(),e.j41(30,"ion-note",31),e.EFF(31),e.k0s()(),e.j41(32,"div",36)(33,"ion-button",10),e.bIt("click",function(){e.eBV(o);const n=e.XpG();return e.Njj(n.toggleEditMode())}),e.EFF(34,"Edit Profile"),e.k0s(),e.j41(35,"ion-button",37),e.bIt("click",function(){e.eBV(o);const n=e.XpG();return e.Njj(n.logout())}),e.EFF(36,"Logout"),e.k0s()()()}if(2&t){const o=e.XpG();e.R7$(6),e.JRh(o.userName),e.R7$(6),e.JRh(o.userEmail),e.R7$(6),e.JRh(o.userPhone),e.R7$(6),e.JRh(e.bMT(25,5,o.dob)),e.R7$(7),e.JRh(o.gender)}}function F(t,a){if(1&t){const o=e.RV6();e.j41(0,"div",38)(1,"div",39)(2,"label",40),e.nrm(3,"ion-icon",41),e.j41(4,"span"),e.EFF(5,"Upload New Profile Picture"),e.k0s()(),e.j41(6,"input",42),e.bIt("change",function(n){e.eBV(o);const l=e.XpG();return e.Njj(l.onFileSelected(n))}),e.k0s()(),e.j41(7,"ion-item"),e.nrm(8,"ion-icon",30),e.j41(9,"ion-label",43),e.EFF(10,"Name"),e.k0s(),e.j41(11,"ion-input",44),e.mxI("ngModelChange",function(n){e.eBV(o);const l=e.XpG();return e.DH7(l.editName,n)||(l.editName=n),e.Njj(n)}),e.k0s()(),e.j41(12,"ion-item"),e.nrm(13,"ion-icon",32),e.j41(14,"ion-label",43),e.EFF(15,"Email"),e.k0s(),e.j41(16,"ion-input",45),e.mxI("ngModelChange",function(n){e.eBV(o);const l=e.XpG();return e.DH7(l.editEmail,n)||(l.editEmail=n),e.Njj(n)}),e.k0s()(),e.j41(17,"ion-item"),e.nrm(18,"ion-icon",33),e.j41(19,"ion-label",43),e.EFF(20,"Phone Number"),e.k0s(),e.j41(21,"ion-input",46),e.mxI("ngModelChange",function(n){e.eBV(o);const l=e.XpG();return e.DH7(l.editPhone,n)||(l.editPhone=n),e.Njj(n)}),e.k0s()(),e.j41(22,"ion-item"),e.nrm(23,"ion-icon",34),e.j41(24,"ion-label",43),e.EFF(25,"Date of Birth"),e.k0s(),e.nrm(26,"ion-input",47),e.nI1(27,"date"),e.k0s(),e.j41(28,"ion-item"),e.nrm(29,"ion-icon",35),e.j41(30,"ion-label",43),e.EFF(31,"Gender"),e.k0s(),e.nrm(32,"ion-input",47),e.k0s(),e.j41(33,"div",36)(34,"ion-button",10),e.bIt("click",function(){e.eBV(o);const n=e.XpG();return e.Njj(n.saveChanges())}),e.EFF(35,"Save Changes"),e.k0s(),e.j41(36,"ion-button",10),e.bIt("click",function(){e.eBV(o);const n=e.XpG();return e.Njj(n.cancelChanges())}),e.EFF(37,"Cancel"),e.k0s()()()}if(2&t){const o=e.XpG();e.R7$(11),e.R50("ngModel",o.editName),e.R7$(5),e.R50("ngModel",o.editEmail),e.R7$(5),e.R50("ngModel",o.editPhone),e.R7$(5),e.Y8G("value",e.bMT(27,5,o.dob)),e.R7$(6),e.Y8G("value",o.gender)}}const M=[{path:"",component:(()=>{var t;class a{constructor(i,n){this.navCtrl=i,this.userService=n,this.isImageModalOpen=!1,this.isEditing=!1,this.errorMessage=""}ngOnInit(){const i=this.userService.getLoggedInUser();i&&(this.username=i.username,this.userName=i.name,this.userEmail=i.email,this.userPhone=i.phoneNumber,this.dob=new Date(i.dob),this.gender=i.gender,this.profileImage=i.profilePicture||"assets/img/1Profile.jpg",this.editName=this.userName,this.editEmail=this.userEmail,this.editPhone=this.userPhone)}enlargeImage(){this.isImageModalOpen=!0}closeImageModal(){this.isImageModalOpen=!1}toggleEditMode(){this.isEditing=!this.isEditing}openFilePicker(){const i=document.getElementById("filePicker");i&&i.click()}onFileSelected(i){const n=i.target.files[0];if(n){const l=new FileReader;l.onload=C=>{this.profileImage=C.target.result},l.readAsDataURL(n)}}saveChanges(){this.userName=this.editName,this.userEmail=this.editEmail,this.userPhone=this.editPhone,this.isEditing=!1,this.errorMessage=""}cancelChanges(){this.editName=this.userName,this.editEmail=this.userEmail,this.editPhone=this.userPhone,this.isEditing=!1}logout(){this.userService.logout(),this.navCtrl.navigateRoot("/login")}goToHome(){this.navCtrl.navigateRoot("/tabs/home")}}return(t=a).\u0275fac=function(i){return new(i||t)(e.rXU(u.q9),e.rXU(f.D))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-profile"]],decls:48,vars:17,consts:[["slot","start"],["defaultHref","/tabs/home",3,"click"],[1,"profile-image-container"],["alt","Profile Picture",1,"profile-pic",3,"click","src"],[1,"username"],[1,"profile-container"],["class","error-message",4,"ngIf"],["class","profile-details",4,"ngIf"],["class","edit-profile-form",4,"ngIf"],[3,"ionModalDidDismiss","isOpen"],[3,"click"],["slot","icon-only","name","arrow-back"],[1,"modal-image-content"],[1,"modal-image-container"],["alt","Enlarged Profile Picture",1,"enlarged-image",3,"src"],["slot","bottom",1,"custom-footer"],["tab","home",3,"routerLink"],["name","home"],["tab","search",3,"routerLink"],["name","search"],["tab","wallet",3,"routerLink"],["name","wallet-outline"],["tab","menu",3,"routerLink"],["name","menu"],["tab","profile",3,"routerLink"],["name","person"],[1,"error-message"],["color","danger"],[1,"profile-details"],["lines","none"],["slot","start","name","person-outline"],["slot","end"],["slot","start","name","mail-outline"],["slot","start","name","call-outline"],["slot","start","name","calendar-outline"],["slot","start","name","man-outline"],[1,"button-container"],["color","danger",3,"click"],[1,"edit-profile-form"],[1,"upload-new-pic-container"],["for","filePicker",1,"upload-label"],["name","cloud-upload-outline"],["type","file","id","filePicker","accept","image/*","hidden","",3,"change"],["position","stacked"],[3,"ngModelChange","ngModel"],["type","email",3,"ngModelChange","ngModel"],["type","tel",3,"ngModelChange","ngModel"],["readonly","",3,"value"]],template:function(i,n){1&i&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-back-button",1),e.bIt("click",function(){return n.goToHome()}),e.k0s()(),e.j41(4,"ion-title"),e.EFF(5,"Profile"),e.k0s()()(),e.j41(6,"ion-content")(7,"div",2)(8,"img",3),e.bIt("click",function(){return n.enlargeImage()}),e.k0s(),e.j41(9,"p",4),e.EFF(10),e.k0s()(),e.j41(11,"div",5),e.DNE(12,k,4,1,"div",6)(13,j,37,7,"div",7)(14,F,38,7,"div",8),e.k0s(),e.j41(15,"ion-modal",9),e.bIt("ionModalDidDismiss",function(){return n.closeImageModal()}),e.j41(16,"ion-header")(17,"ion-toolbar")(18,"ion-buttons",0)(19,"ion-button",10),e.bIt("click",function(){return n.closeImageModal()}),e.nrm(20,"ion-icon",11),e.k0s()(),e.j41(21,"ion-title"),e.EFF(22,"Profile Picture"),e.k0s()()(),e.j41(23,"ion-content",12)(24,"div",13),e.nrm(25,"img",14),e.k0s()()()(),e.j41(26,"ion-footer")(27,"ion-tab-bar",15)(28,"ion-tab-button",16),e.nrm(29,"ion-icon",17),e.j41(30,"ion-label"),e.EFF(31,"Home"),e.k0s()(),e.j41(32,"ion-tab-button",18),e.nrm(33,"ion-icon",19),e.j41(34,"ion-label"),e.EFF(35,"Search"),e.k0s()(),e.j41(36,"ion-tab-button",20),e.nrm(37,"ion-icon",21),e.j41(38,"ion-label"),e.EFF(39,"Wallet"),e.k0s()(),e.j41(40,"ion-tab-button",22),e.nrm(41,"ion-icon",23),e.j41(42,"ion-label"),e.EFF(43,"Booking"),e.k0s()(),e.j41(44,"ion-tab-button",24),e.nrm(45,"ion-icon",25),e.j41(46,"ion-label"),e.EFF(47,"Profile"),e.k0s()()()()),2&i&&(e.R7$(8),e.Y8G("src",n.profileImage,e.B4B),e.R7$(2),e.JRh(n.username),e.R7$(2),e.Y8G("ngIf",n.errorMessage),e.R7$(),e.Y8G("ngIf",!n.isEditing),e.R7$(),e.Y8G("ngIf",n.isEditing),e.R7$(),e.Y8G("isOpen",n.isImageModalOpen),e.R7$(10),e.Y8G("src",n.profileImage,e.B4B),e.R7$(3),e.Y8G("routerLink",e.lJ4(12,p)),e.R7$(4),e.Y8G("routerLink",e.lJ4(13,h)),e.R7$(4),e.Y8G("routerLink",e.lJ4(14,P)),e.R7$(4),e.Y8G("routerLink",e.lJ4(15,_)),e.R7$(4),e.Y8G("routerLink",e.lJ4(16,b)))},dependencies:[c.bT,g.BC,g.vS,r.Jm,r.QW,r.W9,r.M0,r.eU,r.iq,r.$w,r.uz,r.he,r.JI,r.Jq,r.qW,r.IO,r.BC,r.ai,r.Sb,r.Gw,r.el,r.N7,m.Wk,c.vh],styles:[".profile-image-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:20px}.profile-pic[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%;object-fit:cover;border:3px solid #ccc;cursor:pointer}.profile-pic-edit[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%;object-fit:cover;border:3px solid #007BFF;cursor:pointer}.username[_ngcontent-%COMP%]{margin-top:10px;font-weight:700;font-size:18px;color:#333}.modal-image-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;background-color:#000c}.enlarged-image[_ngcontent-%COMP%]{max-width:90%;max-height:90%;border-radius:10px}.profile-container[_ngcontent-%COMP%]{padding:20px}.profile-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], .edit-profile-form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:16px}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:20px}ion-button[_ngcontent-%COMP%]{width:48%}.error-message[_ngcontent-%COMP%]{color:red;margin-bottom:10px;text-align:center}.edit-profile-form[_ngcontent-%COMP%]{margin-top:20px}ion-label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px}.modal-image-content[_ngcontent-%COMP%]{background-color:#000}.upload-new-pic-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:20px}.upload-label[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background-color:#007bff;color:#fff;border-radius:5px;padding:10px 20px;cursor:pointer;font-size:14px}.upload-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:8px;font-size:18px}.upload-label[_ngcontent-%COMP%]:hover{background-color:#0056b3}"]}),a})()}];let E=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[m.iI.forChild(M),m.iI]}),a})(),v=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[c.MD,g.YN,r.bv,E]}),a})()}}]);