"use strict";(self.webpackChunkpk_thunder_frontend=self.webpackChunkpk_thunder_frontend||[]).push([[991],{8991:(ee,p,n)=>{n.r(p),n.d(p,{VisitsModule:()=>k});var r=n(6895),g=n(2248),b=n(2959),m=n(8203),c=n(6894),e=n(8274),u=n(7114),h=n(8683),d=n(433),f=n(805),_=n(5593),C=n(1795),v=n(5722),T=n(7011),x=n(585);function w(i,o){1&i&&e._UZ(0,"app-loading",3)}function P(i,o){if(1&i&&e._UZ(0,"button",16),2&i){const t=e.oxw(2);e.MGl("label","Agregar '",t.userSelect.userText,"'"),e.Q6J("disabled",!0)}}function y(i,o){if(1&i&&e._UZ(0,"button",16),2&i){const t=e.oxw(2);e.MGl("label","Agregar '",t.areaSelect.areaText,"'"),e.Q6J("disabled",!0)}}function M(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",11)(1,"label"),e._uU(2,"Hora de salida:"),e.qZA(),e.TgZ(3,"p-calendar",17),e.NdJ("ngModelChange",function(l){e.CHM(t);const s=e.oxw(2);return e.KtG(s.fh_salida=l)}),e.qZA()()}if(2&i){const t=e.oxw(2);e.xp6(3),e.Q6J("timeOnly",!0)("ngModel",t.fh_salida)("disabled",!0)}}function V(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",11)(1,"label"),e._uU(2,"Fecha de visita:"),e.qZA(),e.TgZ(3,"p-calendar",18),e.NdJ("ngModelChange",function(l){e.CHM(t);const s=e.oxw(2);return e.KtG(s.visitDate=l)}),e.qZA()()}if(2&i){const t=e.oxw(2);e.xp6(3),e.Q6J("disabled",!0)("ngModel",t.visitDate)}}function U(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",19)(1,"button",20),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.delete())}),e.qZA()()}if(2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("loading",t.deleteLoading)}}function N(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"form",4,5)(2,"div",6)(3,"label"),e._uU(4,"Nombre de usuario:"),e.qZA(),e.TgZ(5,"p-multiSelect",7,8),e.NdJ("ngModelChange",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.userSelect.selectedUser=l)})("onFilter",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.userSelect.userFilter(l))})("onChange",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.userSelect.userChange(l))}),e.YNc(7,P,1,2,"ng-template",9),e.qZA()(),e.TgZ(8,"div",6)(9,"label"),e._uU(10,"\xc1rea seleccionada:"),e.qZA(),e.TgZ(11,"p-multiSelect",10,8),e.NdJ("ngModelChange",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.areaSelect.selectedArea=l)})("onFilter",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.areaSelect.areaFilter(l))})("onChange",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.areaSelect.areaChange(l))}),e.YNc(13,y,1,2,"ng-template",9),e.qZA()(),e.TgZ(14,"div",11)(15,"label"),e._uU(16,"Hora de entrada:"),e.qZA(),e.TgZ(17,"p-calendar",12),e.NdJ("ngModelChange",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.fh_entrada=l)}),e.qZA()(),e.YNc(18,M,4,3,"div",13),e.YNc(19,V,4,2,"div",13),e.TgZ(20,"div",14),e.YNc(21,U,2,1,"div",15),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(5),e.Q6J("options",t.userSelect.users)("ngModel",t.userSelect.selectedUser)("showToggleAll",!1)("showClear",!0)("resetFilterOnHide",!0)("disabled",!0),e.xp6(6),e.Q6J("options",t.areaSelect.areas)("ngModel",t.areaSelect.selectedArea)("showToggleAll",!1)("showClear",!0)("resetFilterOnHide",!0)("disabled",!0),e.xp6(6),e.Q6J("disabled",!0)("timeOnly",!0)("ngModel",t.fh_entrada),e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(2),e.Q6J("ngIf",t.user.id_rolUsuario===t.SUPER_ADMIN&&!t.isNew)}}let S=(()=>{class i extends b.H{constructor(t,a,l){super(),this.route=t,this.areaSelect=a,this.userSelect=l,this.SUPER_ADMIN=c.G.SUPER_ADMIN,this.isNew=!0,this.addLoading=!1,this.deleteLoading=!1}ngOnInit(){this.loadAll(),this.user=this.authService.storagedUser,this.breadcrumbService.setItems(this.getBreadCrumbs())}get formIsValid(){return this.areaSelect.selectedArea?.length>0&&this.userSelect.selectedUser?.length>0}loadAll(){this.user.id_rolUsuario===c.G.USER&&(this.messageService.setPayload({type:"warn",title:"Error",body:"No tienes autorizaci\xf3n para ver esta informaci\xf3n"}),setTimeout(()=>{this.router.navigate([m.u.visitsPage])},50)),this.subscription.add(this.route.params.subscribe(({id:t})=>{this.loading=!0,this.areaSelect.loadAreas(),this.userSelect.loadUsers(),t?(this.id=t,this.loadInfo()):this.loading=!1}))}loadInfo(){this.subscription.add(this.catalogService.getByNameWithParams(`VISITAS/${this.id}`).subscribe(t=>{t.id_Visita&&(this.isNew=!1),this.fh_entrada=new Date(t.fh_entrada),this.fh_salida=new Date(t.fh_salida),this.visitDate=new Date(t.fh_entrada),this.areaSelect.selectedArea=[t.AREA.id_Area],this.userSelect.selectedUser=[t.USUARIO.id_Usuario],setTimeout(()=>{this.loading=!1},200)},()=>{this.loading=!1,this.router.navigate([m.u.collectionPage])}))}delete(){this.deleteLoading=!0,this.subscription.add(this.catalogService.deleteOfURL(`VISITAS/${this.id}`).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"La visita fue eliminada con \xe9xito"}),setTimeout(()=>{this.router.navigate([m.u.visitsPage])},200),this.deleteLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo eliminar la visita"}),this.deleteLoading=!1}))}getBreadCrumbs(){return[{label:"Visitas",routerLink:[this.routeInformation.visitsPage]},{label:"Visita",routerLink:[this.routeInformation.visitPage]}]}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(g.gz),e.Y36(u.h),e.Y36(h.q))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-visit-page"]],features:[e.qOj],decls:3,vars:2,consts:[[1,"card","p-mt-4"],["class","p-d-flex p-ai-center p-jc-center","style","height: 80%",4,"ngIf"],["autocomplete","off","class","p-fluid p-formgrid p-grid p-formgrid-sm p-ml-2 p-mr-2",4,"ngIf"],[1,"p-d-flex","p-ai-center","p-jc-center",2,"height","80%"],["autocomplete","off",1,"p-fluid","p-formgrid","p-grid","p-formgrid-sm","p-ml-2","p-mr-2"],["form","ngForm"],[1,"p-field","p-col-12","p-mt-2"],["name","selectedUser","defaultLabel","Elige un usuario","optionLabel","nombre","optionValue","id_Usuario",3,"options","ngModel","showToggleAll","showClear","resetFilterOnHide","disabled","ngModelChange","onFilter","onChange"],["areaMultiSelect",""],["pTemplate","emptyfilter"],["name","selectedArea","defaultLabel","Elige un \xe1rea","optionLabel","nombre","optionValue","id_Area",3,"options","ngModel","showToggleAll","showClear","resetFilterOnHide","disabled","ngModelChange","onFilter","onChange"],[1,"p-field","p-col-12","p-sm-4","p-mt-2"],["name","fh_entrada","dateFormat","dd/mm/yy","hourFormat","12",3,"disabled","timeOnly","ngModel","ngModelChange"],["class","p-field p-col-12 p-sm-4 p-mt-2",4,"ngIf"],[1,"p-col-12","p-grid","p-mt-2","p-ml-0","p-mr-0","p-pl-0","p-pr-0"],["class","p-field","class","p-col-12",4,"ngIf"],["pButton","","pRipple","","type","button",1,"p-button-primary",3,"label","disabled"],["name","fh_salida","dateFormat","dd/mm/yy","hourFormat","12",3,"timeOnly","ngModel","disabled","ngModelChange"],["name","visitDate","dateFormat","dd/mm/yy",3,"disabled","ngModel","ngModelChange"],[1,"p-col-12"],["pButton","","pRipple","","type","button","label","Eliminar","icon","pi pi-trash",1,"p-button-danger",3,"loading","click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.YNc(1,w,1,0,"app-loading",1),e.YNc(2,N,22,18,"form",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",a.loading),e.xp6(1),e.Q6J("ngIf",!a.loading))},dependencies:[r.O5,d._Y,d.JJ,d.JL,d.On,d.F,f.jx,_.Hq,C.H,v.NU,T.N,x.f],encapsulation:2}),i})();var Z=n(9908),F=n(414),A=n(7147);function I(i,o){if(1&i&&(e.ynx(0),e._UZ(1,"p-chip",7),e.ALo(2,"titlecase"),e.BQk()),2&i){const t=e.oxw(2).rowData;e.xp6(1),e.Q6J("image","assets/images/icons/user-circle.png")("label",e.lcZ(2,2,null==t?null:t.USUARIO.nombre))}}function L(i,o){if(1&i&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&i){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t||null==t.AREA?null:t.AREA.nombre)," ")}}function J(i,o){if(1&i&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.BQk()),2&i){const t=e.oxw(2).rowData;e.xp6(1),e.AsE(" ",e.gM2(2,2,null==t?null:t.fh_entrada,"h:mm a","","en-US")," ",e.xi3(3,7,null==t?null:t.fh_entrada,"dd-MM-yyyy")," ")}}function R(i,o){if(1&i&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.BQk()),2&i){const t=e.oxw(2).rowData;e.xp6(1),e.AsE(" ",e.gM2(2,2,null==t?null:t.fh_salida,"h:mm a","","en-US")," ",e.xi3(3,7,null==t?null:t.fh_salida,"dd-MM-yyyy")," ")}}function E(i,o){if(1&i&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&i){const t=e.oxw().$implicit,a=e.oxw().rowData;e.xp6(1),e.hij(" ",e.lcZ(2,1,a[t.field])," ")}}function Q(i,o){if(1&i&&(e.TgZ(0,"td",4),e.YNc(1,I,3,4,"ng-container",5),e.YNc(2,L,3,3,"ng-container",5),e.YNc(3,J,4,10,"ng-container",5),e.YNc(4,R,4,10,"ng-container",5),e.YNc(5,E,3,3,"ng-container",6),e.qZA()),2&i){const t=o.$implicit;e.Udp("width",t.width,"px"),e.Q6J("ngSwitch",t.field),e.xp6(1),e.Q6J("ngSwitchCase","USUARIO.nombre"),e.xp6(1),e.Q6J("ngSwitchCase","AREA.nombre"),e.xp6(1),e.Q6J("ngSwitchCase","fh_entrada"),e.xp6(1),e.Q6J("ngSwitchCase","fh_salida")}}function O(i,o){1&i&&e.YNc(0,Q,6,7,"td",3),2&i&&e.Q6J("ngForOf",o.columns)}const B=[{path:"",component:(()=>{class i extends Z.c{constructor(){super(),this.USER=c.G.USER,this.cols=[{field:"USUARIO.nombre",header:"Nombre del visitante",width:100},{field:"AREA.nombre",header:"Nombre del \xe1rea",width:100},{field:"fh_entrada",header:"Entrada",width:100},{field:"fh_salida",header:"Salida",width:10}]}ngOnInit(){this.loadAll(),this.user=this.authService.storagedUser,this.breadcrumbService.setItems(this.getBreadCrumbs())}loadAll(){this.list=[],this.loading=!0,this.getPaginationParams(),this.subscription.add(this.catalogService.getByNameWithParams("VISITAS",this.httpParams).subscribe(t=>{this.pagination=t.meta,this.currentPage=this.pagination.currentPage,this.list=t.data,this.loading=!1},()=>this.loading=!1))}onLazyLoad(t){this.paginate(t),this.loadAll()}onNew(){this.user.id_rolUsuario!==c.G.USER&&this.router.navigate([`${this.routeInformation.visitPage}/`])}onRowSelect({data:t}){this.user.id_rolUsuario!==c.G.USER&&this.router.navigate([`${this.routeInformation.visitPage}/${t.id_Visita}/`])}getBreadCrumbs(){return[{label:"Visitas",routerLink:[this.routeInformation.visitPage]}]}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-visits-page"]],features:[e.qOj],decls:3,vars:8,consts:[[1,"p-mt-4"],["newButtonLabel","Ingresar visita","type","visitas",3,"reloading","globalFilter","rows","pagination","loading","cols","list","showNewButton","onLazyLoad","onRowSelect","onNewClick"],["pTemplate","body"],["class","text-center",3,"ngSwitch","width",4,"ngFor","ngForOf"],[1,"text-center",3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["styleClass","p-col-12",3,"image","label"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"table-card",1),e.NdJ("onLazyLoad",function(s){return a.onLazyLoad(s)})("onRowSelect",function(s){return a.onRowSelect(s)})("onNewClick",function(){return a.onNew()}),e.YNc(2,O,1,1,"ng-template",2),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("reloading",a.loading)("globalFilter",a.globalFilter)("rows",a.rows)("pagination",a.pagination)("loading",a.loading)("cols",a.cols)("list",a.list)("showNewButton",!1))},dependencies:[r.sg,r.RF,r.n9,r.ED,F.r,f.jx,A.A,r.rS,r.uU],encapsulation:2}),i})()},{path:"visit",component:S},{path:"visit/:id",component:S}];let H=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.Bz.forChild(B),g.Bz]}),i})();var Y=n(6311),D=n(1740),G=n(8433),j=n(4466),z=n(9423),K=n(3388),$=n(529),W=n(5047),X=n(3054),q=n(8783);let k=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[h.q,u.h],imports:[r.ez,H,Y.j,d.u5,D.j,G.ON,_.hJ,C.T,v.q4,j.m,z.I,x._8,K.O,$.JF,W.L$,X.A,q.LU,A.o]}),i})()}}]);