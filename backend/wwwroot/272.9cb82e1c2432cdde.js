"use strict";(self.webpackChunkpk_thunder_frontend=self.webpackChunkpk_thunder_frontend||[]).push([[272],{4272:(q,g,n)=>{n.r(g),n.d(g,{ReservationsModule:()=>K});var l=n(9808),p=n(6507),x=n(2959),d=n(6894),u=n(8203),m=n(8679),T=n(520),e=n(7587),A=n(7011),c=n(2382),h=n(6526),_=n(5652),f=n(4119),v=n(845),R=n(5787),M=n(3026);const C=["exemplarMultiSelect"],b=["userMultiSelect"];function w(a,o){1&a&&e._UZ(0,"app-loading",3)}function D(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"div",18)(1,"label"),e._uU(2,"Estado:"),e.qZA(),e.TgZ(3,"p-multiSelect",19),e.NdJ("ngModelChange",function(s){return e.CHM(t),e.oxw(2).selectedStatus=s}),e.qZA()()}if(2&a){const t=e.oxw(2);e.xp6(3),e.Q6J("options",t.status)("ngModel",t.selectedStatus)("showToggleAll",!1)("resetFilterOnHide",!0)("disabled",!0)}}function U(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"div",18)(1,"label"),e._uU(2,"Reservado:"),e.qZA(),e.TgZ(3,"p-calendar",20),e.NdJ("ngModelChange",function(s){return e.CHM(t),e.oxw(2).reservationDate=s}),e.qZA()()}if(2&a){const t=e.oxw(2);e.xp6(3),e.Q6J("disabled",!0)("ngModel",t.reservationDate)}}function O(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"div",21)(1,"button",22),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).delete()}),e.qZA()()}if(2&a){const t=e.oxw(2);e.xp6(1),e.Q6J("loading",t.deleteLoading)}}const y=function(a){return{"p-col-12":a}},N=function(a,o){return{"p-col-6 p-sm-9":a,"p-col-12":o}};function L(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"form",4,5)(2,"div",6)(3,"label"),e._uU(4,"Ejemplar:"),e.qZA(),e.TgZ(5,"p-multiSelect",7,8),e.NdJ("ngModelChange",function(s){return e.CHM(t),e.oxw().selectedExemplar=s})("onFilter",function(s){return e.CHM(t),e.oxw().exemplarFilter(s)})("onChange",function(s){return e.CHM(t),e.oxw().exemplarChange(s)}),e.qZA()(),e.TgZ(7,"div",6)(8,"label"),e._uU(9,"Usuario:"),e.qZA(),e.TgZ(10,"p-multiSelect",9,10),e.NdJ("ngModelChange",function(s){return e.CHM(t),e.oxw().selectedUser=s})("onFilter",function(s){return e.CHM(t),e.oxw().userFilter(s)})("onChange",function(s){return e.CHM(t),e.oxw().userChange(s)}),e.qZA()(),e.TgZ(12,"div",11)(13,"label"),e._uU(14,"Rango de fechas:"),e.qZA(),e.TgZ(15,"p-calendar",12),e.NdJ("ngModelChange",function(s){return e.CHM(t),e.oxw().dates=s})("onSelect",function(){return e.CHM(t),e.oxw().onDateChange()}),e.qZA()(),e.YNc(16,D,4,5,"div",13),e.YNc(17,U,4,2,"div",13),e.TgZ(18,"div",14)(19,"div",15)(20,"button",16),e.NdJ("click",function(){return e.CHM(t),e.oxw().add()}),e.ALo(21,"addOrEdit"),e.qZA()(),e.YNc(22,O,2,1,"div",17),e.qZA()()}if(2&a){const t=e.oxw();e.xp6(5),e.Q6J("options",t.exemplars)("ngModel",t.selectedExemplar)("showToggleAll",!1)("showClear",!0)("resetFilterOnHide",!0)("disabled",!t.isNew),e.xp6(5),e.Q6J("options",t.users)("ngModel",t.selectedUser)("showToggleAll",!1)("showClear",!0)("resetFilterOnHide",!0)("disabled",!t.isNew),e.xp6(2),e.Q6J("ngClass",e.VKq(29,y,t.isNew)),e.xp6(3),e.s9C("pTooltip",t.isNew?"":"Si desea editar debe hacerlo desde Pr\xe9stamos"),e.Q6J("ngModel",t.dates)("minDate",t.minDate)("maxDate",t.maxDate)("disabledDates",t.disabledDates)("disabled",!t.isNew),e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(2),e.Q6J("ngClass",e.WLB(31,N,t.user.id_rolUsuario===t.SUPER_ADMIN&&!t.isNew,t.isNew||t.user.id_rolUsuario!==t.SUPER_ADMIN)),e.xp6(1),e.s9C("pTooltip",t.isNew?"":"Si desea editar debe hacerlo desde Pr\xe9stamos"),e.Q6J("loading",t.addLoading)("label",e.lcZ(21,27,t.isNew))("disabled",!t.formIsValid||!t.isNew),e.xp6(2),e.Q6J("ngIf",t.user.id_rolUsuario===t.SUPER_ADMIN&&!t.isNew)}}let S=(()=>{class a extends x.H{constructor(t){super(),this.route=t,this.SUPER_ADMIN=d.G.SUPER_ADMIN,this.isNew=!0,this.dates=[],this.disabledDates=[],this.minDate=new Date,this.addLoading=!1,this.deleteLoading=!1,this.status=[],this.selectedStatus=[],this.exemplarText="",this.selectedExemplar=[],this.userText="",this.selectedUser=[]}get formIsValid(){var t,i;return(null===(t=this.selectedUser)||void 0===t?void 0:t.length)>0&&(null===(i=this.selectedExemplar)||void 0===i?void 0:i.length)>0&&null!==this.dates[0]&&null!==this.dates[1]}ngOnInit(){this.loadAll(),this.user=this.authService.storagedUser,this.breadcrumbService.setItems(this.getBreadCrumbs())}loadAll(){this.user.id_rolUsuario===d.G.USER&&(this.messageService.setPayload({type:"warn",title:"Error",body:"No tienes autorizaci\xf3n para ver esta informaci\xf3n"}),setTimeout(()=>{this.router.navigate([u.u.reservationsPage])},50)),this.subscription.add(this.route.params.subscribe(({id:t})=>{this.loading=!0,this.loadExemplars(),this.loadUsers(),this.loadStatus(),t?(this.id=t,this.loadInfo()):this.loading=!1}))}delete(){this.deleteLoading=!0,this.subscription.add(this.catalogService.deleteOfURL(`RESERVA/${this.id}`).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"La reserva fue eliminada con \xe9xito"}),setTimeout(()=>{this.router.navigate([u.u.reservationsPage])},200),this.deleteLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo eliminar la reserva"}),this.deleteLoading=!1}))}add(){this.isNew?(this.addLoading=!0,this.subscription.add(this.catalogService.addOfURL("RESERVA",{fh_Reserva:new Date,PRESTAMO:{fh_Prestamo:this.dates[0],fh_Devolucion:this.dates[1],id_Estado:m.u.RESERVADO,id_usuarioPresta:this.selectedUser[0],id_Ejemplar:this.selectedExemplar[0]}}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"La reserva fue a\xf1adida satifactoriamente"}),setTimeout(()=>{this.router.navigate([u.u.reservationsPage])},200),this.addLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo a\xf1adir la reserva"}),this.addLoading=!1}))):this.update()}update(){this.addLoading=!0,this.subscription.add(this.catalogService.updateOfURL(`RESERVA/${this.id}`,{id_Reserva:this.id,fh_Reserva:this.reservationDate,PRESTAMO:{id_Prestamo:this.idBorrow,fh_Prestamo:this.dates[0],fh_Devolucion:this.dates[1],id_Estado:this.selectedStatus[0],id_usuarioPresta:this.selectedUser[0],id_Ejemplar:this.selectedExemplar[0]}}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"La reserva fue editado satifactoriamente"}),setTimeout(()=>{this.router.navigate([u.u.reservationsPage])},200),this.addLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo editar la reserva"}),this.addLoading=!1}))}loadInfo(){this.subscription.add(this.catalogService.getByNameWithParams(`RESERVA/${this.id}`).subscribe(t=>{t&&(this.isNew=!1),this.reservation=t,this.id=t.id_Reserva,this.idBorrow=t.PRESTAMO.id_Prestamo,this.dates=[new Date(t.PRESTAMO.fh_Prestamo),new Date(t.PRESTAMO.fh_Devolucion)],this.reservationDate=new Date(t.fh_Reserva),this.minDate=new Date(t.PRESTAMO.fh_Prestamo)>this.minDate?this.minDate:new Date(t.PRESTAMO.fh_Prestamo),this.selectedUser=[t.PRESTAMO.USUARIO.id_Usuario],this.selectedExemplar=[t.PRESTAMO.EJEMPLAR.id_Ejemplar],this.selectedStatus=[t.PRESTAMO.ESTADOS.id_Estado],this.loadedStatus=t.PRESTAMO.ESTADOS.id_Estado,setTimeout(()=>{this.loading=!1},200)},()=>{this.loading=!1,this.router.navigate([u.u.reservationsPage])}))}userFilter(t){this.userText=t.filter}userChange(t){this.selectedUser=[t.itemValue]}loadUsers(){this.subscription.add(this.catalogService.getByNameWithParams("USUARIO").subscribe(t=>{this.users=t}))}exemplarFilter(t){this.exemplarText=t.filter}exemplarChange(t){this.selectedExemplar=[t.itemValue],this.loadDisabledDates(t.itemValue)}loadDisabledDates(t){this.subscription.add(this.catalogService.getByNameWithParams("PRESTAMO",(new T.LE).set("id_Ejemplar",t)).subscribe(i=>{i&&(this.disabledDates=i.map(s=>new Date(s))),this.dates=[]}))}loadExemplars(){this.subscription.add(this.catalogService.getByNameWithParams("EJEMPLAR").subscribe(t=>{this.exemplars=t}))}onDateChange(){if(null===this.dates[0]||null===this.dates[1])return;this.isNew||(this.selectedStatus=this.dates[1].getDate()===(new Date).getDate()?[m.u.FINALIZADO]:[this.loadedStatus]);let t=[];const i=new Date(this.dates[0].getTime());for(;this.dates[1]>i||this.dates[1].getDate()===i.getDate();)t.push(new Date(i.getDate())),i.setDate(i.getDate()+1);t.forEach(s=>{this.disabledDates.forEach(r=>{s.getDate()!==r.getDate()||(this.dates=[])})})}loadStatus(){this.subscription.add(this.catalogService.getByNameWithParams("ESTADOS").subscribe(t=>{this.status=t}))}getBreadCrumbs(){return[{label:"Reservas",routerLink:[this.routeInformation.reservationsPage]},{label:"Reserva",routerLink:[this.routeInformation.reservationPage]}]}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(p.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-reservation-page"]],viewQuery:function(t,i){if(1&t&&(e.Gf(C,5),e.Gf(b,5)),2&t){let s;e.iGM(s=e.CRH())&&(i.exemplarMultiSelect=s.first),e.iGM(s=e.CRH())&&(i.userMultiSelect=s.first)}},features:[e.qOj],decls:3,vars:2,consts:[[1,"card","p-mt-4"],["class","p-d-flex p-ai-center p-jc-center","style","height: 80%",4,"ngIf"],["autocomplete","off","class","p-fluid p-formgrid p-grid p-formgrid-sm p-ml-2 p-mr-2",4,"ngIf"],[1,"p-d-flex","p-ai-center","p-jc-center",2,"height","80%"],["autocomplete","off",1,"p-fluid","p-formgrid","p-grid","p-formgrid-sm","p-ml-2","p-mr-2"],["form","ngForm"],[1,"p-field","p-col-12","p-mt-2"],["name","selectedType","defaultLabel","Elige un ejemplar","optionLabel","nombre","optionValue","id_Ejemplar","emptyFilterMessage","No se encontraron resultados",3,"options","ngModel","showToggleAll","showClear","resetFilterOnHide","disabled","ngModelChange","onFilter","onChange"],["exemplarMultiSelect",""],["name","selectedUser","defaultLabel","Elige un usuario","optionLabel","nombre","optionValue","id_Usuario","emptyFilterMessage","No se encontraron resultados",3,"options","ngModel","showToggleAll","showClear","resetFilterOnHide","disabled","ngModelChange","onFilter","onChange"],["userMultiSelect",""],[1,"p-field","p-col-6","p-mt-2",3,"ngClass"],["selectionMode","range","name","dates","dateFormat","dd/mm/yy","placeholder","Elige un rango de fechas para tu pr\xe9stamo","tooltipPosition","top",3,"ngModel","minDate","maxDate","disabledDates","disabled","pTooltip","ngModelChange","onSelect"],["class","p-field p-col-3 p-mt-2",4,"ngIf"],[1,"p-col-12","p-grid","p-mt-4","p-mt-2","p-ml-0","p-mr-0","p-pl-0","p-pr-0"],[1,"p-field",3,"ngClass"],["pButton","","pRipple","","type","button","tooltipPosition","top",1,"p-button-success",3,"loading","label","pTooltip","disabled","click"],["class","p-field p-col-6 p-sm-3",4,"ngIf"],[1,"p-field","p-col-3","p-mt-2"],["name","selectedStatus","defaultLabel","Elige un estado","optionLabel","estado","optionValue","id_Estado","emptyFilterMessage","No se encontraron resultados",3,"options","ngModel","showToggleAll","resetFilterOnHide","disabled","ngModelChange"],["name","reservationDate","dateFormat","dd/mm/yy",3,"disabled","ngModel","ngModelChange"],[1,"p-field","p-col-6","p-sm-3"],["pButton","","pRipple","","type","button","label","Eliminar","icon","pi pi-trash",1,"p-button-danger",3,"loading","click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,w,1,0,"app-loading",1),e.YNc(2,L,23,34,"form",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",i.loading),e.xp6(1),e.Q6J("ngIf",!i.loading))},directives:[l.O5,A.N,c._Y,c.JL,c.F,h.NU,c.JJ,c.On,l.mk,_.f,f.u,v.Hq,R.H],pipes:[M.p],encapsulation:2}),a})();var J=n(9908),F=n(414),Z=n(9783),P=n(2472);function I(a,o){if(1&a&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&a){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t||null==t.PRESTAMO||null==t.PRESTAMO.EJEMPLAR?null:t.PRESTAMO.EJEMPLAR.nombre)," ")}}function Q(a,o){if(1&a&&(e.ynx(0),e._UZ(1,"p-chip",7),e.ALo(2,"titlecase"),e.BQk()),2&a){const t=e.oxw(2).rowData;e.xp6(1),e.Q6J("image","assets/images/icons/user-circle.png")("label",e.lcZ(2,2,null==t||null==t.PRESTAMO.USUARIO?null:t.PRESTAMO.USUARIO.nombre))}}function B(a,o){if(1&a&&(e.ynx(0),e.TgZ(1,"div",8)(2,"span"),e._uU(3),e.ALo(4,"titlecase"),e.qZA()(),e.BQk()),2&a){const t=e.oxw(2).rowData;e.xp6(2),e.Gre("'p-pt-1 p-pb-1 status-badge ",null==t||null==t.PRESTAMO||null==t.PRESTAMO.ESTADOS?null:t.PRESTAMO.ESTADOS.estado,""),e.xp6(1),e.Oqu(e.lcZ(4,4,null==t||null==t.PRESTAMO||null==t.PRESTAMO.ESTADOS?null:t.PRESTAMO.ESTADOS.estado))}}function H(a,o){if(1&a&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.BQk()),2&a){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.xi3(2,1,null==t?null:t.fh_Reserva,"dd/MM/yyyy")," ")}}function j(a,o){if(1&a&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.BQk()),2&a){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.xi3(2,1,null==t||null==t.PRESTAMO?null:t.PRESTAMO.fh_Prestamo,"dd/MM/yyyy")," ")}}function V(a,o){if(1&a&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.BQk()),2&a){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.xi3(2,1,null==t||null==t.PRESTAMO?null:t.PRESTAMO.fh_Devolucion,"dd/MM/yyyy")," ")}}function Y(a,o){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const t=e.oxw().$implicit,i=e.oxw().rowData;e.xp6(1),e.hij(" ",i[t.field]," ")}}function z(a,o){if(1&a&&(e.TgZ(0,"td",4),e.YNc(1,I,3,3,"ng-container",5),e.YNc(2,Q,3,4,"ng-container",5),e.YNc(3,B,5,6,"ng-container",5),e.YNc(4,H,3,4,"ng-container",5),e.YNc(5,j,3,4,"ng-container",5),e.YNc(6,V,3,4,"ng-container",5),e.YNc(7,Y,2,1,"ng-container",6),e.qZA()),2&a){const t=o.$implicit;e.Udp("width",t.width,"px"),e.Q6J("ngSwitch",t.field),e.xp6(1),e.Q6J("ngSwitchCase","PRESTAMO.EJEMPLAR.nombre"),e.xp6(1),e.Q6J("ngSwitchCase","PRESTAMO.USUARIO.nombre"),e.xp6(1),e.Q6J("ngSwitchCase","PRESTAMO.ESTADOS.estado"),e.xp6(1),e.Q6J("ngSwitchCase","fh_Reserva"),e.xp6(1),e.Q6J("ngSwitchCase","PRESTAMO.fh_Prestamo"),e.xp6(1),e.Q6J("ngSwitchCase","PRESTAMO.fh_Devolucion")}}function G(a,o){1&a&&e.YNc(0,z,8,9,"td",3),2&a&&e.Q6J("ngForOf",o.columns)}const W=[{path:"",component:(()=>{class a extends J.c{constructor(){super(),this.USER=d.G.USER,this.cols=[{field:"PRESTAMO.EJEMPLAR.nombre",header:"Nombre",width:125},{field:"PRESTAMO.USUARIO.nombre",header:"Usuario",width:125},{field:"PRESTAMO.ESTADOS.estado",header:"Estado",width:100},{field:"fh_Reserva",header:"Fecha de reserva",width:100},{field:"PRESTAMO.fh_Prestamo",header:"Reserva",width:100},{field:"PRESTAMO.fh_Devolucion",header:"Devoluci\xf3n",width:100}]}ngOnInit(){this.user.id_rolUsuario===d.G.USER?this.loadOwn():this.loadAll(),this.breadcrumbService.setItems(this.getBreadCrumbs())}loadOwn(){this.list=[],this.loading=!0,this.getPaginationParams(),this.subscription.add(this.catalogService.getByNameWithParams("RESERVA",this.httpParams.set("id_rolUsuario",this.user.ROLUSUARIO.id_rolUsuario).set("id_Usuario",this.user.id_Usuario)).subscribe(t=>{this.pagination=t.meta,this.currentPage=this.pagination.currentPage,this.list=t.data,this.loading=!1},()=>this.loading=!1))}loadAll(){this.list=[],this.loading=!0,this.getPaginationParams(),this.subscription.add(this.catalogService.getByNameWithParams("RESERVA",this.httpParams.set("id_rolUsuario",this.user.ROLUSUARIO.id_rolUsuario).set("id_Usuario",this.user.id_Usuario)).subscribe(t=>{this.pagination=t.meta,this.currentPage=this.pagination.currentPage,this.list=t.data,this.loading=!1},()=>this.loading=!1))}onLazyLoad(t){this.paginate(t),this.loadAll()}onNew(){this.user.id_rolUsuario!==d.G.USER&&this.router.navigate([`${this.routeInformation.reservationPage}/`])}onRowSelect({data:t}){this.user.id_rolUsuario!==d.G.USER&&this.router.navigate([`${this.routeInformation.reservationPage}/${t.id_Reserva}/`])}getBreadCrumbs(){return[{label:this.user.id_rolUsuario===this.USER?"Mis reservas":"Reservas",routerLink:[this.routeInformation.reservationsPage]}]}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-reservations-page"]],features:[e.qOj],decls:3,vars:8,consts:[[1,"p-mt-4"],["newButtonLabel","Nueva reserva","type","reservas",3,"reloading","globalFilter","rows","pagination","loading","cols","list","showNewButton","onLazyLoad","onRowSelect","onNewClick"],["pTemplate","body"],["class","text-center",3,"ngSwitch","width",4,"ngFor","ngForOf"],[1,"text-center",3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["styleClass","p-col-12",3,"image","label"],[1,"text-center"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"table-card",1),e.NdJ("onLazyLoad",function(r){return i.onLazyLoad(r)})("onRowSelect",function(r){return i.onRowSelect(r)})("onNewClick",function(){return i.onNew()}),e.YNc(2,G,1,1,"ng-template",2),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("reloading",i.loading)("globalFilter",i.globalFilter)("rows",i.rows)("pagination",i.pagination)("loading",i.loading)("cols",i.cols)("list",i.list)("showNewButton",i.user.id_rolUsuario!==i.USER))},directives:[F.r,Z.jx,l.sg,l.RF,l.n9,P.A,l.ED],pipes:[l.rS,l.uU],encapsulation:2}),a})()},{path:"reservation",component:S},{path:"reservation/:id",component:S}];let $=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[p.Bz.forChild(W)],p.Bz]}),a})();var k=n(8007),E=n(4466),X=n(9423);let K=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[l.ez,$,k.j,E.m,h.q4,c.u5,v.hJ,R.T,E.m,_._8,X.I,f.z,P.o]]}),a})()}}]);