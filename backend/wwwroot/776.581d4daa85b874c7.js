"use strict";(self.webpackChunkpk_thunder_frontend=self.webpackChunkpk_thunder_frontend||[]).push([[776],{3776:(k,m,n)=>{n.r(m),n.d(m,{BorrowsModule:()=>W});var l=n(9808),p=n(6507),c=n(6894),S=n(9908),e=n(7587),C=n(414),P=n(9783);function E(o,s){if(1&o&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&o){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t||null==t.EJEMPLAR?null:t.EJEMPLAR.nombre)," ")}}function v(o,s){if(1&o&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&o){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t||null==t.USUARIO?null:t.USUARIO.nombre)," ")}}function T(o,s){if(1&o&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&o){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t||null==t.ESTADOS?null:t.ESTADOS.estado)," ")}}function M(o,s){if(1&o&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.BQk()),2&o){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.xi3(2,1,t.fh_Prestamo,"dd/MM/yyyy")," ")}}function B(o,s){if(1&o&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.BQk()),2&o){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.xi3(2,1,t.fh_Devolucion,"dd/MM/yyyy")," ")}}function D(o,s){if(1&o&&(e.ynx(0),e._uU(1),e.BQk()),2&o){const t=e.oxw().$implicit,a=e.oxw().rowData;e.xp6(1),e.hij(" ",a[t.field]," ")}}function y(o,s){if(1&o&&(e.TgZ(0,"td",4),e.YNc(1,E,3,3,"ng-container",5),e.YNc(2,v,3,3,"ng-container",5),e.YNc(3,T,3,3,"ng-container",5),e.YNc(4,M,3,4,"ng-container",5),e.YNc(5,B,3,4,"ng-container",5),e.YNc(6,D,2,1,"ng-container",6),e.qZA()),2&o){const t=s.$implicit;e.Udp("width",t.width,"px"),e.Q6J("ngSwitch",t.field),e.xp6(1),e.Q6J("ngSwitchCase","EJEMPLAR.nombre"),e.xp6(1),e.Q6J("ngSwitchCase","USUARIO.nombre"),e.xp6(1),e.Q6J("ngSwitchCase","ESTADOS.estado"),e.xp6(1),e.Q6J("ngSwitchCase","fh_Prestamo"),e.xp6(1),e.Q6J("ngSwitchCase","fh_Devolucion")}}function A(o,s){1&o&&e.YNc(0,y,7,8,"td",3),2&o&&e.Q6J("ngForOf",s.columns)}let U=(()=>{class o extends S.c{constructor(){super(),this.USER=c.G.USER,this.cols=[{field:"EJEMPLAR.nombre",header:"Nombre",width:125},{field:"USUARIO.nombre",header:"Usuario",width:125},{field:"ESTADOS.estado",header:"Estado",width:100},{field:"fh_Prestamo",header:"Pr\xe9stamo",width:100},{field:"fh_Devolucion",header:"Devoluci\xf3n",width:100}]}ngOnInit(){this.loadAll(),this.breadcrumbService.setItems(this.getBreadCrumbs())}loadAll(){this.list=[],this.loading=!0,this.getPaginationParams(),this.subscription.add(this.catalogService.getByNameWithParams("PRESTAMO",this.httpParams).subscribe(t=>{this.list=t,this.loading=!1},()=>this.loading=!1))}onLazyLoad(t){this.paginate(t),this.loadAll()}onNew(){this.user.id_rolUsuario!==c.G.USER&&this.router.navigate([`${this.routeInformation.borrowPage}/`])}onRowSelect({data:t}){this.user.id_rolUsuario!==c.G.USER&&this.router.navigate([`${this.routeInformation.borrowPage}/${t.id_Prestamo}/`])}getBreadCrumbs(){return[{label:"Pr\xe9stamos",routerLink:[this.routeInformation.borrowsPage]}]}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-borrows-page"]],features:[e.qOj],decls:3,vars:8,consts:[[1,"p-mt-4"],["newButtonLabel","Nuevo pr\xe9stamo","type","colecciones",3,"reloading","globalFilter","rows","pagination","loading","cols","list","showNewButton","onLazyLoad","onRowSelect","onNewClick"],["pTemplate","body"],["class","text-center",3,"ngSwitch","width",4,"ngFor","ngForOf"],[1,"text-center",3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"table-card",1),e.NdJ("onLazyLoad",function(r){return a.onLazyLoad(r)})("onRowSelect",function(r){return a.onRowSelect(r)})("onNewClick",function(){return a.onNew()}),e.YNc(2,A,1,1,"ng-template",2),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("reloading",a.loading)("globalFilter",a.globalFilter)("rows",a.rows)("pagination",a.pagination)("loading",a.loading)("cols",a.cols)("list",a.list)("showNewButton",a.user.id_rolUsuario!==a.USER))},directives:[C.r,P.jx,l.sg,l.RF,l.n9,l.ED],pipes:[l.rS,l.uU],encapsulation:2}),o})();var N=n(2959),u=n(8203),g=n(8679),L=n(520),R=n(7011),d=n(2382),h=n(6526),_=n(5652),f=n(845),w=n(5787),J=n(3026);const O=["exemplarMultiSelect"],F=["userMultiSelect"];function I(o,s){1&o&&e._UZ(0,"app-loading",3)}function Z(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",18)(1,"label"),e._uU(2,"Estado:"),e.qZA(),e.TgZ(3,"p-multiSelect",19),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw(2).selectedStatus=i}),e.qZA()()}if(2&o){const t=e.oxw(2);e.xp6(3),e.Q6J("options",t.status)("ngModel",t.selectedStatus)("showToggleAll",!1)("resetFilterOnHide",!0)("disabled",!0)}}function Q(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",20)(1,"button",21),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).delete()}),e.qZA()()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("loading",t.deleteLoading)}}const H=function(o){return{"p-col-12":o}},j=function(o,s){return{"p-col-10":o,"p-col-12":s}};function Y(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"form",4,5)(2,"div",6)(3,"label"),e._uU(4,"Ejemplar:"),e.qZA(),e.TgZ(5,"p-multiSelect",7,8),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().selectedExemplar=i})("onFilter",function(i){return e.CHM(t),e.oxw().exemplarFilter(i)})("onChange",function(i){return e.CHM(t),e.oxw().exemplarChange(i)}),e.qZA()(),e.TgZ(7,"div",6)(8,"label"),e._uU(9,"Usuario:"),e.qZA(),e.TgZ(10,"p-multiSelect",9,10),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().selectedUser=i})("onFilter",function(i){return e.CHM(t),e.oxw().userFilter(i)})("onChange",function(i){return e.CHM(t),e.oxw().userChange(i)}),e.qZA()(),e.TgZ(12,"div",11)(13,"label"),e._uU(14,"Rango de fechas:"),e.qZA(),e.TgZ(15,"p-calendar",12),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().dates=i})("onSelect",function(){return e.CHM(t),e.oxw().onDateChange()}),e.qZA()(),e.YNc(16,Z,4,5,"div",13),e.TgZ(17,"div",14)(18,"div",15)(19,"button",16),e.NdJ("click",function(){return e.CHM(t),e.oxw().add()}),e.ALo(20,"addOrEdit"),e.qZA()(),e.YNc(21,Q,2,1,"div",17),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(5),e.Q6J("options",t.exemplars)("ngModel",t.selectedExemplar)("showToggleAll",!1)("showClear",!0)("resetFilterOnHide",!0)("disabled",!t.isNew),e.xp6(5),e.Q6J("options",t.users)("ngModel",t.selectedUser)("showToggleAll",!1)("showClear",!0)("resetFilterOnHide",!0)("disabled",!t.isNew),e.xp6(2),e.Q6J("ngClass",e.VKq(25,H,t.isNew)),e.xp6(3),e.Q6J("disabledDates",t.disabledDates)("ngModel",t.dates)("minDate",t.minDate)("maxDate",t.maxDate),e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(2),e.Q6J("ngClass",e.WLB(27,j,t.user.id_rolUsuario===t.SUPER_ADMIN&&!t.isNew,t.isNew||t.user.id_rolUsuario!==t.SUPER_ADMIN)),e.xp6(1),e.Q6J("loading",t.addLoading)("label",e.lcZ(20,23,t.isNew))("disabled",!t.formIsValid),e.xp6(2),e.Q6J("ngIf",t.user.id_rolUsuario===t.SUPER_ADMIN&&!t.isNew)}}let x=(()=>{class o extends N.H{constructor(t){super(),this.route=t,this.SUPER_ADMIN=c.G.SUPER_ADMIN,this.isNew=!0,this.dates=[],this.minDate=new Date,this.disabledDates=[],this.addLoading=!1,this.deleteLoading=!1,this.status=[],this.selectedStatus=[],this.exemplarText="",this.selectedExemplar=[],this.userText="",this.selectedUser=[]}get formIsValid(){var t,a;return(null===(t=this.selectedUser)||void 0===t?void 0:t.length)>0&&(null===(a=this.selectedExemplar)||void 0===a?void 0:a.length)>0&&null!==this.dates[0]&&null!==this.dates[1]}ngOnInit(){this.loadAll(),this.user=this.authService.storagedUser,this.breadcrumbService.setItems(this.getBreadCrumbs())}loadAll(){this.subscription.add(this.route.params.subscribe(({id:t})=>{this.loading=!0,this.loadExemplars(),this.loadUsers(),this.loadStatus(),t?(this.id=t,this.loadInfo()):this.loading=!1}))}delete(){this.deleteLoading=!0,this.subscription.add(this.catalogService.deleteOfURL(`PRESTAMO/${this.id}`).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"El pr\xe9stamo fue eliminado con \xe9xito"}),setTimeout(()=>{this.router.navigate([u.u.borrowsPage])},200),this.deleteLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo eliminar la colecci\xf3n"}),this.deleteLoading=!1}))}add(){this.isNew?(this.addLoading=!0,this.subscription.add(this.catalogService.addOfURL("PRESTAMO",{fh_Prestamo:this.dates[0],fh_Devolucion:this.dates[1],id_Estado:1,id_usuarioPresta:this.user.id_Usuario,id_Ejemplar:this.selectedExemplar}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"El pr\xe9stamo fue a\xf1adido satifactoriamente"}),setTimeout(()=>{this.router.navigate([u.u.borrowsPage])},200),this.addLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo a\xf1adir el pr\xe9stamo"}),this.addLoading=!1}))):this.update()}update(){this.addLoading=!0,this.subscription.add(this.catalogService.updateOfURL(`PRESTAMO/${this.id}`,{id_Prestamo:this.id,fh_Prestamo:this.dates[0],fh_Devolucion:this.dates[1],id_usuarioPresta:this.user.id_Usuario,id_Estado:this.selectedStatus[0],id_Ejemplar:this.selectedExemplar[0]}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"El pr\xe9stamo fue editado satifactoriamente"}),setTimeout(()=>{this.router.navigate([u.u.borrowsPage])},200),this.addLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo editar la colecci\xf3n"}),this.addLoading=!1}))}loadInfo(){this.subscription.add(this.catalogService.getByNameWithParams(`PRESTAMO/${this.id}`).subscribe(t=>{t&&(this.isNew=!1),this.id=t.id_Prestamo,this.dates=[new Date(t.fh_Prestamo),new Date(t.fh_Devolucion)],this.maxDate=new Date(t.fh_Devolucion),this.minDate=new Date(t.fh_Prestamo),this.selectedUser=[t.USUARIO.id_Usuario],this.selectedExemplar=[t.EJEMPLAR.id_Ejemplar],this.selectedStatus=[t.ESTADOS.id_Estado],setTimeout(()=>{this.loading=!1},200)},()=>{this.loading=!1,this.router.navigate([u.u.borrowsPage])}))}userFilter(t){this.userText=t.filter}userChange(t){this.selectedUser=[t.itemValue]}loadUsers(){this.subscription.add(this.catalogService.getByNameWithParams("USUARIO").subscribe(t=>{this.users=t}))}exemplarFilter(t){this.exemplarText=t.filter}exemplarChange(t){this.selectedExemplar=[t.itemValue],this.loadDisabledDates(t.itemValue)}loadDisabledDates(t){this.subscription.add(this.catalogService.getByNameWithParams("PRESTAMO",(new L.LE).set("id_Ejemplar",t)).subscribe(a=>{a&&(this.disabledDates=a.map(i=>new Date(i))),this.dates=[]}))}loadExemplars(){this.subscription.add(this.catalogService.getByNameWithParams("EJEMPLAR").subscribe(t=>{this.exemplars=t}))}onDateChange(){if(null===this.dates[0]||null===this.dates[1])return;this.selectedStatus=this.dates[1]<this.maxDate?[g.u.FINALIZADO]:[g.u.EN_PRESTAMO];let t=[];const a=new Date(this.dates[0].getTime());for(;this.dates[1]>a||this.dates[1].getDate()===a.getDate();)t.push(new Date(a.getTime())),a.setDate(a.getDate()+1);t.forEach(i=>{this.disabledDates.forEach(r=>{i.getDate()!==r.getDate()||(this.dates=[])})})}loadStatus(){this.subscription.add(this.catalogService.getByNameWithParams("ESTADOS").subscribe(t=>{this.status=t}))}getBreadCrumbs(){return[{label:"Pr\xe9stamos",routerLink:[this.routeInformation.borrowsPage]},{label:"Pr\xe9stamo",routerLink:[this.routeInformation.borrowPage]}]}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-borrows-page"]],viewQuery:function(t,a){if(1&t&&(e.Gf(O,5),e.Gf(F,5)),2&t){let i;e.iGM(i=e.CRH())&&(a.exemplarMultiSelect=i.first),e.iGM(i=e.CRH())&&(a.userMultiSelect=i.first)}},features:[e.qOj],decls:3,vars:2,consts:[[1,"card","p-mt-4"],["class","p-d-flex p-ai-center p-jc-center","style","height: 80%",4,"ngIf"],["autocomplete","off","class","p-fluid p-formgrid p-grid p-formgrid-sm p-ml-2 p-mr-2",4,"ngIf"],[1,"p-d-flex","p-ai-center","p-jc-center",2,"height","80%"],["autocomplete","off",1,"p-fluid","p-formgrid","p-grid","p-formgrid-sm","p-ml-2","p-mr-2"],["form","ngForm"],[1,"p-field","p-col-12","p-mt-2"],["name","selectedType","defaultLabel","Elige un ejemplar","optionLabel","nombre","optionValue","id_Ejemplar","emptyFilterMessage","No se encontraron resultados",3,"options","ngModel","showToggleAll","showClear","resetFilterOnHide","disabled","ngModelChange","onFilter","onChange"],["exemplarMultiSelect",""],["name","selectedUser","defaultLabel","Elige un usuario","optionLabel","nombre","optionValue","id_Usuario","emptyFilterMessage","No se encontraron resultados",3,"options","ngModel","showToggleAll","showClear","resetFilterOnHide","disabled","ngModelChange","onFilter","onChange"],["userMultiSelect",""],[1,"p-field","p-col-6","p-mt-2",3,"ngClass"],["selectionMode","range","name","dates","dateFormat","dd/mm/yy","placeholder","Elige un rango de fechas para tu pr\xe9stamo",3,"disabledDates","ngModel","minDate","maxDate","ngModelChange","onSelect"],["class","p-field p-col-6 p-mt-2",4,"ngIf"],[1,"p-col-12","p-grid","p-mt-2","p-ml-0","p-mr-0","p-pl-0","p-pr-0"],[1,"p-field",3,"ngClass"],["pButton","","pRipple","","type","button",1,"p-button-success",3,"loading","label","disabled","click"],["class","p-field p-col",4,"ngIf"],[1,"p-field","p-col-6","p-mt-2"],["name","selectedStatus","defaultLabel","Elige un estado","optionLabel","estado","optionValue","id_Estado","emptyFilterMessage","No se encontraron resultados",3,"options","ngModel","showToggleAll","resetFilterOnHide","disabled","ngModelChange"],[1,"p-field","p-col"],["pButton","","pRipple","","type","button","label","Eliminar","icon","pi pi-trash",1,"p-button-danger",3,"loading","click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.YNc(1,I,1,0,"app-loading",1),e.YNc(2,Y,22,30,"form",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",a.loading),e.xp6(1),e.Q6J("ngIf",!a.loading))},directives:[l.O5,R.N,d._Y,d.JL,d.F,h.NU,d.JJ,d.On,l.mk,_.f,f.Hq,w.H],pipes:[J.p],encapsulation:2}),o})();const z=[{path:"",component:U},{path:"borrow",component:x},{path:"borrow/:id",component:x}];let V=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.Bz.forChild(z)],p.Bz]}),o})();var G=n(2893),b=n(4466),$=n(9423);let W=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.ez,V,G.j,b.m,h.q4,d.u5,f.hJ,w.T,b.m,_._8,$.I]]}),o})()}}]);