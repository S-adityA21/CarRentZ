"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[513],{513:(S,u,i)=>{i.r(u),i.d(u,{SearchPageModule:()=>_});var d=i(177),s=i(4341),r=i(4742),l=i(70),e=i(4438);const f=()=>["/home"],m=()=>["/search"],h=()=>["/wallet"],b=()=>["/booking"],k=()=>["/profile"];function C(n,a){if(1&n){const o=e.RV6();e.j41(0,"div",22),e.bIt("click",function(){const c=e.eBV(o).$implicit,p=e.XpG(2);return e.Njj(p.goToBooking(c))}),e.j41(1,"div",23),e.nrm(2,"img",24),e.k0s(),e.j41(3,"div",25)(4,"h3"),e.EFF(5),e.k0s(),e.j41(6,"p",26),e.EFF(7),e.k0s(),e.j41(8,"p",27),e.EFF(9),e.k0s()()()}if(2&n){const o=a.$implicit;e.R7$(2),e.Y8G("src",o.image,e.B4B)("alt",o.name),e.R7$(3),e.JRh(o.name),e.R7$(2),e.JRh(o.description),e.R7$(2),e.JRh(o.price)}}function P(n,a){if(1&n&&(e.j41(0,"div",20),e.DNE(1,C,10,5,"div",21),e.k0s()),2&n){const o=e.XpG();e.R7$(),e.Y8G("ngForOf",o.filteredResults)}}const M=[{path:"",component:(()=>{var n;class a{constructor(t){this.router=t,this.searchQuery="",this.filteredResults=[],this.cars=[{name:"Thar Roxx",price:"8k/day",description:"Manual, 4 seats, A/C",image:"../../assets/Thar Roxx.png"},{name:"Scorpio",price:"5k/day",description:"Manual, 6 seats, A/C",image:"../../assets/Scorpio.png"},{name:"Fortuner",price:"7k/day",description:"GearBox, 6 seats, GPS",image:"../../assets/Fortuner.png"},{name:"Range Rover Defender",price:"14k/day",description:"Manual, 5 seats, GPS",image:"../../assets/Defender.png"},{name:"Tata Nexon",price:"5k/day",description:"Electric, 4 seats, A/C",image:"../../assets/Nexon.png"},{name:"MG Gloister",price:"8k/day",description:"Manual, 6 seats, A/C",image:"../../assets/MG Gloister.png"},{name:"MG Hector",price:"8k/day",description:"GearBox, 6 seats, GPS",image:"../../assets/MG Hector.png"},{name:"Toyota Innova Crysta",price:"6k/day",description:"Automatic, 7 seats, A/C, GPS",image:"../../assets/Innova.png"},{name:"Hyundai Creta",price:"4k/day",description:"Manual, 5 seats, A/C",image:"../../assets/Creta.png"},{name:"Kia Seltos",price:"4.5k/day",description:"Automatic, 5 seats, A/C, GPS",image:"../../assets/Seltos.png"},{name:"Maruti Swift",price:"3k/day",description:"Manual, 5 seats, A/C",image:"../../assets/Swift.png"},{name:"Honda City",price:"4k/day",description:"Automatic, 5 seats, A/C, GPS",image:"../../assets/City.png"}]}ngOnInit(){this.filteredResults=[]}onSearch(){this.filteredResults=this.searchQuery.trim()?this.cars.filter(t=>t.name.toLowerCase().includes(this.searchQuery.toLowerCase())||t.description.toLowerCase().includes(this.searchQuery.toLowerCase())):[]}goToBooking(t){this.router.navigate(["/booking"],{queryParams:{name:t.name,price:t.price,description:t.description,image:t.image}})}}return(n=a).\u0275fac=function(t){return new(t||n)(e.rXU(l.Ix))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-search"]],decls:32,vars:12,consts:[[1,"ion-no-border"],[1,"toolbar"],["slot","start"],["defaultHref","home",2,"color","white"],[2,"color","white"],[1,"main-content"],[1,"search-container"],["type","text","placeholder","Search cars...",1,"search-bar",3,"ngModelChange","input","ngModel"],["class","search-results",4,"ngIf"],["slot","bottom",1,"custom-footer"],["tab","home",3,"routerLink"],["name","home"],["tab","search",3,"routerLink"],["name","search"],["tab","wallet",3,"routerLink"],["name","wallet-outline"],["tab","menu",3,"routerLink"],["name","menu"],["tab","profile",3,"routerLink"],["name","person"],[1,"search-results"],["class","car-card",3,"click",4,"ngFor","ngForOf"],[1,"car-card",3,"click"],[1,"car-image"],[3,"src","alt"],[1,"car-info"],[1,"description"],[1,"price"]],template:function(t,c){1&t&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.nrm(3,"ion-back-button",3),e.k0s(),e.j41(4,"ion-title",4),e.EFF(5,"Search"),e.k0s()()(),e.j41(6,"ion-content",5)(7,"div",6)(8,"input",7),e.mxI("ngModelChange",function(g){return e.DH7(c.searchQuery,g)||(c.searchQuery=g),g}),e.bIt("input",function(){return c.onSearch()}),e.k0s()(),e.DNE(9,P,2,1,"div",8),e.k0s(),e.j41(10,"ion-footer",0)(11,"ion-tab-bar",9)(12,"ion-tab-button",10),e.nrm(13,"ion-icon",11),e.j41(14,"ion-label"),e.EFF(15,"Home"),e.k0s()(),e.j41(16,"ion-tab-button",12),e.nrm(17,"ion-icon",13),e.j41(18,"ion-label"),e.EFF(19,"Search"),e.k0s()(),e.j41(20,"ion-tab-button",14),e.nrm(21,"ion-icon",15),e.j41(22,"ion-label"),e.EFF(23,"Wallet"),e.k0s()(),e.j41(24,"ion-tab-button",16),e.nrm(25,"ion-icon",17),e.j41(26,"ion-label"),e.EFF(27,"Booking"),e.k0s()(),e.j41(28,"ion-tab-button",18),e.nrm(29,"ion-icon",19),e.j41(30,"ion-label"),e.EFF(31,"Profile"),e.k0s()()()()),2&t&&(e.R7$(8),e.R50("ngModel",c.searchQuery),e.R7$(),e.Y8G("ngIf",c.filteredResults.length>0),e.R7$(3),e.Y8G("routerLink",e.lJ4(7,f)),e.R7$(4),e.Y8G("routerLink",e.lJ4(8,m)),e.R7$(4),e.Y8G("routerLink",e.lJ4(9,h)),e.R7$(4),e.Y8G("routerLink",e.lJ4(10,b)),e.R7$(4),e.Y8G("routerLink",e.lJ4(11,k)))},dependencies:[d.Sq,d.bT,s.me,s.BC,s.vS,r.QW,r.W9,r.M0,r.eU,r.iq,r.he,r.Jq,r.qW,r.BC,r.ai,r.el,r.N7,l.Wk],styles:['.main-content[_ngcontent-%COMP%]{--background: url("BG1 (3).577e0a960d98265b.jpeg") no-repeat center center / cover}.toolbar[_ngcontent-%COMP%]{--background: transparent;--border-style: none}.search-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px;background:transparent;position:sticky;top:0;z-index:1000}.search-bar[_ngcontent-%COMP%]{flex:1;padding:12px 20px;border:1.5px solid rgba(255,255,255,.3);border-radius:25px;font-size:16px;outline:none;background:#9e9a9a1a;color:#fff;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.search-bar[_ngcontent-%COMP%]::placeholder{color:#ffffffb3}.search-bar[_ngcontent-%COMP%]:focus{border-color:#ffffff80;box-shadow:0 0 0 2px #ffffff1a}.search-results[_ngcontent-%COMP%]{padding:16px;min-height:calc(100vh - 128px)}.car-card[_ngcontent-%COMP%]{background:#000000b3;border-radius:15px;margin-bottom:16px;overflow:hidden;box-shadow:0 4px 15px #0003;display:flex;cursor:pointer;transition:all .3s ease;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.1)}.car-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 6px 20px #0000004d;background:#000c}.car-card[_ngcontent-%COMP%]   .car-image[_ngcontent-%COMP%]{width:120px;height:120px;flex-shrink:0;padding:10px}.car-card[_ngcontent-%COMP%]   .car-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:10px}.car-card[_ngcontent-%COMP%]   .car-info[_ngcontent-%COMP%]{padding:15px;flex:1}.car-card[_ngcontent-%COMP%]   .car-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 8px;font-size:18px;font-weight:600;color:#fff}.car-card[_ngcontent-%COMP%]   .car-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin:4px 0;color:#ffffffb3;font-size:14px}.car-card[_ngcontent-%COMP%]   .car-info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{color:#3880ff;font-weight:600;font-size:16px;margin-top:8px}.custom-footer[_ngcontent-%COMP%]{--background: rgba(158, 154, 154, .1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-top:1px solid rgba(255,255,255,.1);padding:5px 0}.custom-footer[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:4px;color:#fff}.custom-footer[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#fff}.custom-footer[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{--color: white;--color-selected: #3880ff}.custom-footer[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]:hover{background-color:#ffffff1a}']}),a})()}];let x=(()=>{var n;class a{}return(n=a).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[l.iI.forChild(M),l.iI]}),a})(),_=(()=>{var n;class a{}return(n=a).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[d.MD,s.YN,r.bv,x]}),a})()}}]);