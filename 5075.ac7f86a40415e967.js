"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5075],{5075:(F,g,a)=>{a.r(g),a.d(g,{HomePageModule:()=>y});var u=a(177),l=a(4341),o=a(4742),c=a(70),e=a(4438);const p=()=>["/home"],h=()=>["/search"],f=()=>["/wallet"],C=()=>["/booking"],M=()=>["/profile"];function b(n,r){if(1&n){const i=e.RV6();e.j41(0,"ion-col",20)(1,"ion-card",21),e.bIt("click",function(){const s=e.eBV(i).$implicit,m=e.XpG();return e.Njj(m.goToBooking(s))}),e.nrm(2,"img",22),e.j41(3,"ion-card-header")(4,"ion-card-title"),e.EFF(5),e.k0s(),e.j41(6,"ion-card-subtitle"),e.EFF(7),e.k0s()(),e.j41(8,"ion-card-content")(9,"p"),e.EFF(10),e.k0s()()()()}if(2&n){const i=r.$implicit;e.R7$(2),e.Y8G("src",i.image,e.B4B)("alt",i.name),e.R7$(3),e.JRh(i.name),e.R7$(2),e.JRh(i.price),e.R7$(3),e.JRh(i.description)}}const P=[{path:"",component:(()=>{var n;class r{constructor(t){this.router=t,this.searchQuery="",this.cars=[],this.filteredCars=[],this.cars=[{name:"Thar Roxx",price:"8k/day",description:"Manual, 4 seats, A/C",image:"../../assets/Thar Roxx.png"},{name:"Scorpio",price:"5k/day",description:"Manual, 6 seats, A/C",image:"../../assets/Scorpio.png"},{name:"Fortuner",price:"7k/day",description:"GearBox, 6 seats, GPS",image:"../../assets/Fortuner.png"},{name:"Range Rover Defender",price:"14k/day",description:"Manual, 5 seats, GPS",image:"../../assets/Defender.png"},{name:"Tata Nexon",price:"5k/day",description:"Electric, 4 seats, A/C",image:"../../assets/Nexon.png"},{name:"MG Gloister",price:"8k/day",description:"Manual, 6 seats, A/C",image:"../../assets/MG Gloister.png"},{name:"MG Hector",price:"8k/day",description:"GearBox, 6 seats, GPS",image:"../../assets/MG Hector.png"},{name:"Toyota Innova Crysta",price:"6k/day",description:"Automatic, 7 seats, A/C, GPS",image:"../../assets/Innova.png"},{name:"Hyundai Creta",price:"4k/day",description:"Manual, 5 seats, A/C",image:"../../assets/Creta.png"},{name:"Kia Seltos",price:"4.5k/day",description:"Automatic, 5 seats, A/C, GPS",image:"../../assets/Seltos.png"},{name:"Maruti Swift",price:"3k/day",description:"Manual, 5 seats, A/C",image:"../../assets/Swift.png"},{name:"Honda City",price:"4k/day",description:"Automatic, 5 seats, A/C, GPS",image:"../../assets/City.png"}],this.filteredCars=this.cars}ngOnInit(){}filterCars(){const t=this.searchQuery.toLowerCase();this.filteredCars=this.cars.filter(s=>s.name.toLowerCase().includes(t)||s.description.toLowerCase().includes(t))}goToBooking(t){this.router.navigate(["/booking"],{queryParams:{name:t.name,price:t.price,description:t.description,image:t.image}})}}return(n=r).\u0275fac=function(t){return new(t||n)(e.rXU(c.Ix))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-home"]],decls:37,vars:12,consts:[["color","light"],[2,"display","flex","align-items","center","justify-content","space-between","width","100%","padding","8px 16px"],["src","../../assets/Logo CarRentz.png","alt","CarRentz Logo",2,"height","75px","width","auto","object-fit","contain"],["fill","clear","routerLink","/help",2,"display","flex","align-items","center"],["name","help-circle-outline",2,"font-size","40px","color","#ffa500"],[1,"ion-padding"],["placeholder","Search for cars",3,"ngModelChange","ionInput","ngModel"],["size","12"],["size","6",4,"ngFor","ngForOf"],["slot","bottom",1,"custom-footer"],["tab","home",3,"routerLink"],["name","home"],["tab","search",3,"routerLink"],["name","search"],["tab","wallet",3,"routerLink"],["name","wallet-outline"],["tab","menu",3,"routerLink"],["name","menu"],["tab","profile",3,"routerLink"],["name","person"],["size","6"],[3,"click"],[3,"src","alt"]],template:function(t,s){1&t&&(e.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"div",1),e.nrm(3,"img",2),e.j41(4,"ion-button",3),e.nrm(5,"ion-icon",4),e.k0s()()()(),e.j41(6,"ion-content",5)(7,"ion-searchbar",6),e.mxI("ngModelChange",function(d){return e.DH7(s.searchQuery,d)||(s.searchQuery=d),d}),e.bIt("ionInput",function(){return s.filterCars()}),e.k0s(),e.j41(8,"ion-grid")(9,"ion-row")(10,"ion-col",7)(11,"h2"),e.EFF(12,"Featured Cars"),e.k0s()()(),e.j41(13,"ion-row"),e.DNE(14,b,11,5,"ion-col",8),e.k0s()()(),e.j41(15,"ion-footer")(16,"ion-tab-bar",9)(17,"ion-tab-button",10),e.nrm(18,"ion-icon",11),e.j41(19,"ion-label"),e.EFF(20,"Home"),e.k0s()(),e.j41(21,"ion-tab-button",12),e.nrm(22,"ion-icon",13),e.j41(23,"ion-label"),e.EFF(24,"Search"),e.k0s()(),e.j41(25,"ion-tab-button",14),e.nrm(26,"ion-icon",15),e.j41(27,"ion-label"),e.EFF(28,"Wallet"),e.k0s()(),e.j41(29,"ion-tab-button",16),e.nrm(30,"ion-icon",17),e.j41(31,"ion-label"),e.EFF(32,"Booking"),e.k0s()(),e.j41(33,"ion-tab-button",18),e.nrm(34,"ion-icon",19),e.j41(35,"ion-label"),e.EFF(36,"Profile"),e.k0s()()()()),2&t&&(e.R7$(7),e.R50("ngModel",s.searchQuery),e.R7$(7),e.Y8G("ngForOf",s.filteredCars),e.R7$(3),e.Y8G("routerLink",e.lJ4(7,p)),e.R7$(4),e.Y8G("routerLink",e.lJ4(8,h)),e.R7$(4),e.Y8G("routerLink",e.lJ4(9,f)),e.R7$(4),e.Y8G("routerLink",e.lJ4(10,C)),e.R7$(4),e.Y8G("routerLink",e.lJ4(11,M)))},dependencies:[u.Sq,l.BC,l.vS,o.Jm,o.b_,o.I9,o.ME,o.HW,o.tN,o.hU,o.W9,o.M0,o.lO,o.eU,o.iq,o.he,o.ln,o.S1,o.Jq,o.qW,o.ai,o.Gw,o.N7,c.Wk],styles:['ion-footer[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000;background:#fff3;border-top:1px solid rgba(255,255,255,.3)}.custom-footer[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:4px}.custom-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover{background-color:#9e9a9a1a;border-radius:10px}ion-content[_ngcontent-%COMP%]{--background: url("BG1 (3).577e0a960d98265b.jpeg") no-repeat center;background-size:cover}ion-card[_ngcontent-%COMP%]{margin:10px}ion-card-title[_ngcontent-%COMP%], ion-card-subtitle[_ngcontent-%COMP%]{color:#fffdfd}']}),r})()},{path:"search",loadChildren:()=>a.e(513).then(a.bind(a,513)).then(n=>n.SearchPageModule)},{path:"wallet",loadChildren:()=>a.e(9093).then(a.bind(a,9093)).then(n=>n.WalletPageModule)},{path:"help",loadChildren:()=>a.e(9995).then(a.bind(a,9995)).then(n=>n.HelpPageModule)}];let k=(()=>{var n;class r{}return(n=r).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[c.iI.forChild(P),c.iI]}),r})(),y=(()=>{var n;class r{}return(n=r).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[u.MD,l.YN,o.bv,k]}),r})()}}]);