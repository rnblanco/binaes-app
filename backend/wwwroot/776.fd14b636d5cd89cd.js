"use strict";(self.webpackChunkpk_thunder_frontend=self.webpackChunkpk_thunder_frontend||[]).push([[776],{3776:(te,g,s)=>{s.r(g),s.d(g,{BorrowsModule:()=>ee});var r=s(6895),m=s(2248),d=s(6894),A=s(9908),e=s(8274),M=s(414),h=s(805),_=s(7147);function y(o,n){if(1&o&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&o){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t||null==t.EJEMPLAR?null:t.EJEMPLAR.nombre)," ")}}function B(o,n){if(1&o&&(e.ynx(0),e._UZ(1,"p-chip",7),e.ALo(2,"titlecase"),e.BQk()),2&o){const t=e.oxw(2).rowData;e.xp6(1),e.Q6J("image","assets/images/icons/user-circle.png")("label",e.lcZ(2,2,null==t||null==t.USUARIO?null:t.USUARIO.nombre))}}function D(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",8)(2,"span"),e._uU(3),e.ALo(4,"titlecase"),e.qZA()(),e.BQk()),2&o){const t=e.oxw(2).rowData;e.xp6(2),e.Gre("'p-pt-1 p-pb-1 status-badge ",null==t||null==t.ESTADOS?null:t.ESTADOS.estado,""),e.xp6(1),e.Oqu(e.lcZ(4,4,null==t||null==t.ESTADOS?null:t.ESTADOS.estado))}}function N(o,n){if(1&o&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.BQk()),2&o){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.xi3(2,1,t.fh_Prestamo,"dd/MM/yyyy")," ")}}function L(o,n){if(1&o&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.BQk()),2&o){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.xi3(2,1,t.fh_Devolucion,"dd/MM/yyyy")," ")}}function O(o,n){if(1&o&&(e.ynx(0),e._uU(1),e.BQk()),2&o){const t=e.oxw().$implicit,a=e.oxw().rowData;e.xp6(1),e.hij(" ",a[t.field]," ")}}function R(o,n){if(1&o&&(e.TgZ(0,"td",4),e.YNc(1,y,3,3,"ng-container",5),e.YNc(2,B,3,4,"ng-container",5),e.YNc(3,D,5,6,"ng-container",5),e.YNc(4,N,3,4,"ng-container",5),e.YNc(5,L,3,4,"ng-container",5),e.YNc(6,O,2,1,"ng-container",6),e.qZA()),2&o){const t=n.$implicit;e.Udp("width",t.width,"px"),e.Q6J("ngSwitch",t.field),e.xp6(1),e.Q6J("ngSwitchCase","EJEMPLAR.nombre"),e.xp6(1),e.Q6J("ngSwitchCase","USUARIO.nombre"),e.xp6(1),e.Q6J("ngSwitchCase","ESTADOS.estado"),e.xp6(1),e.Q6J("ngSwitchCase","fh_Prestamo"),e.xp6(1),e.Q6J("ngSwitchCase","fh_Devolucion")}}function Z(o,n){1&o&&e.YNc(0,R,7,8,"td",3),2&o&&e.Q6J("ngForOf",n.columns)}let F=(()=>{class o extends A.c{constructor(){super(),this.USER=d.G.USER,this.cols=[{field:"EJEMPLAR.nombre",header:"Nombre",width:125},{field:"USUARIO.nombre",header:"Usuario",width:125},{field:"ESTADOS.estado",header:"Estado",width:100},{field:"fh_Prestamo",header:"Pr\xe9stamo",width:100},{field:"fh_Devolucion",header:"Devoluci\xf3n",width:100}]}ngOnInit(){this.user.id_rolUsuario===d.G.USER?this.loadOwn():this.loadAll(),this.breadcrumbService.setItems(this.getBreadCrumbs())}loadOwn(){this.list=[],this.loading=!0,this.getPaginationParams(),this.subscription.add(this.catalogService.getByNameWithParams("PRESTAMO",this.httpParams.set("id_rolUsuario",this.user.ROLUSUARIO.id_rolUsuario).set("id_Usuario",this.user.id_Usuario)).subscribe(t=>{this.pagination=t.meta,this.currentPage=this.pagination.currentPage,this.list=t.data,this.loading=!1},()=>this.loading=!1))}loadAll(){this.list=[],this.loading=!0,this.getPaginationParams(),this.subscription.add(this.catalogService.getByNameWithParams("PRESTAMO",this.httpParams.set("id_rolUsuario",this.user.ROLUSUARIO.id_rolUsuario).set("id_Usuario",this.user.id_Usuario)).subscribe(t=>{this.pagination=t.meta,this.currentPage=this.pagination.currentPage,this.list=t.data,this.loading=!1},()=>this.loading=!1))}onLazyLoad(t){this.paginate(t),this.loadAll()}onNew(){this.user.id_rolUsuario!==d.G.USER&&this.router.navigate([`${this.routeInformation.borrowPage}/`])}onRowSelect({data:t}){this.user.id_rolUsuario!==d.G.USER&&this.router.navigate([`${this.routeInformation.borrowPage}/${t.id_Prestamo}/`])}getBreadCrumbs(){return[{label:this.user.id_rolUsuario===this.USER?"Mis pr\xe9stamos":"Pr\xe9stamos",routerLink:[this.routeInformation.borrowsPage]}]}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-borrows-page"]],features:[e.qOj],decls:3,vars:8,consts:[[1,"p-mt-4"],["newButtonLabel","Nuevo pr\xe9stamo","type","pr\xe9stamos",3,"reloading","globalFilter","rows","pagination","loading","cols","list","showNewButton","onLazyLoad","onRowSelect","onNewClick"],["pTemplate","body"],["class","text-center",3,"ngSwitch","width",4,"ngFor","ngForOf"],[1,"text-center",3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["styleClass","p-col-12",3,"image","label"],[1,"text-center"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"table-card",1),e.NdJ("onLazyLoad",function(l){return a.onLazyLoad(l)})("onRowSelect",function(l){return a.onRowSelect(l)})("onNewClick",function(){return a.onNew()}),e.YNc(2,Z,1,1,"ng-template",2),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("reloading",a.loading)("globalFilter",a.globalFilter)("rows",a.rows)("pagination",a.pagination)("loading",a.loading)("cols",a.cols)("list",a.list)("showNewButton",a.user.id_rolUsuario!==a.USER))},dependencies:[r.sg,r.RF,r.n9,r.ED,M.r,h.jx,_.A,r.rS,r.uU],encapsulation:2}),o})();var I=s(9322),p=s(8203),u=s(9615),f=s(8683),S=s(9226),x=s(9283),w=s(5722),c=s(433),P=s(5593),C=s(1795),b=s(585),J=s(7011),E=s(3608),v=s(7772),Q=s(3026);function z(o,n){1&o&&e._UZ(0,"app-loading",3)}function H(o,n){1&o&&(e.TgZ(0,"p"),e._uU(1,"Una vez finalizado el pr\xe9stamo, ya no puede ser editado."),e.qZA())}function j(o,n){1&o&&(e.TgZ(0,"p-messages",19),e.YNc(1,H,2,0,"ng-template",20),e.qZA())}function Y(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",21)(1,"label"),e._uU(2,"Estado:"),e.qZA(),e.TgZ(3,"p-multiSelect",22),e.NdJ("ngModelChange",function(i){e.CHM(t);const l=e.oxw(2);return e.KtG(l.exemplarStatusSelect.selectedStatus=i)}),e.qZA()()}if(2&o){const t=e.oxw(2);e.xp6(3),e.Q6J("options",t.exemplarStatusSelect.status)("ngModel",t.exemplarStatusSelect.selectedStatus)("showToggleAll",!1)("resetFilterOnHide",!0)("disabled",!0)}}function G(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",23)(1,"button",24),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.delete())}),e.qZA()()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("loading",t.deleteLoading)}}const K=function(o){return{"p-sm-12":o}},$=function(o,n){return{"p-col-6 p-sm-9":o,"p-col-12":n}};function V(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"form",4,5),e.YNc(2,j,2,0,"p-messages",6),e.TgZ(3,"div",7)(4,"label"),e._uU(5,"Ejemplar:"),e.qZA(),e.TgZ(6,"p-multiSelect",8,9),e.NdJ("ngModelChange",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.exemplarSelect.selectedExemplar=i)})("onFilter",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.exemplarSelect.exemplarFilter(i))})("onChange",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.exemplarSelect.exemplarChange(i))}),e.qZA()(),e.TgZ(8,"div",7)(9,"label"),e._uU(10,"Usuario:"),e.qZA(),e.TgZ(11,"p-multiSelect",10,11),e.NdJ("ngModelChange",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.userSelect.selectedUser=i)})("onFilter",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.userSelect.userFilter(i))})("onChange",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.userSelect.userChange(i))}),e.qZA()(),e.TgZ(13,"div",12)(14,"label"),e._uU(15,"Rango de fechas:"),e.qZA(),e.TgZ(16,"p-calendar",13),e.NdJ("ngModelChange",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.exemplarSelect.dates=i)})("onSelect",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onDateChange())}),e.qZA()(),e.YNc(17,Y,4,5,"div",14),e.TgZ(18,"div",15)(19,"div",16)(20,"button",17),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.add())}),e.ALo(21,"addOrEdit"),e.qZA()(),e.YNc(22,G,2,1,"div",18),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(2),e.Q6J("ngIf",t.isFinalizado),e.xp6(4),e.Q6J("options",t.exemplarSelect.exemplars)("ngModel",t.exemplarSelect.selectedExemplar)("showToggleAll",!1)("showClear",!0)("resetFilterOnHide",!0)("disabled",!t.isNew),e.xp6(5),e.Q6J("options",t.userSelect.users)("ngModel",t.userSelect.selectedUser)("showToggleAll",!1)("showClear",!0)("resetFilterOnHide",!0)("disabled",!t.isNew),e.xp6(2),e.Q6J("ngClass",e.VKq(29,K,t.isNew)),e.xp6(3),e.Q6J("disabledDates",t.exemplarSelect.disabledDates)("ngModel",t.exemplarSelect.dates)("minDate",t.minDate)("maxDate",t.maxDate)("selectOtherMonths",!0)("disabled",t.isFinalizado),e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(2),e.Q6J("ngClass",e.WLB(31,$,t.user.id_rolUsuario===t.SUPER_ADMIN&&!t.isNew,t.isNew||t.user.id_rolUsuario!==t.SUPER_ADMIN)),e.xp6(1),e.s9C("pTooltip",t.isFinalizado?"No se pueden editar pr\xe9stamos finalizados":""),e.Q6J("label",e.lcZ(21,27,t.isNew))("loading",t.addLoading)("disabled",!t.formIsValid||t.isFinalizado),e.xp6(2),e.Q6J("ngIf",t.user.id_rolUsuario===t.SUPER_ADMIN&&!t.isNew)}}let T=(()=>{class o extends I.H{constructor(t,a,i,l){super(),this.route=t,this.userSelect=a,this.exemplarSelect=i,this.exemplarStatusSelect=l,this.SUPER_ADMIN=d.G.SUPER_ADMIN,this.isNew=!0,this.minDate=new Date,this.addLoading=!1,this.deleteLoading=!1}get formIsValid(){return this.userSelect.selectedUser?.length>0&&this.exemplarSelect.selectedExemplar?.length>0&&null!==this.exemplarSelect.dates[0]&&null!==this.exemplarSelect.dates[1]}get isFinalizado(){return this.exemplarStatusSelect.loadedStatus===u.u.FINALIZADO}ngOnInit(){this.loadAll(),this.user=this.authService.storagedUser,this.breadcrumbService.setItems(this.getBreadCrumbs())}loadAll(){this.user.id_rolUsuario===d.G.USER&&(this.messageService.setPayload({type:"warn",title:"Error",body:"No tienes autorizaci\xf3n para ver esta informaci\xf3n"}),setTimeout(()=>{this.router.navigate([p.u.borrowsPage])},50)),this.subscription.add(this.route.params.subscribe(({id:t})=>{this.loading=!0,this.exemplarSelect.loadExemplars(),this.userSelect.loadUsers(),this.exemplarStatusSelect.loadStatus(),t?(this.id=t,this.loadInfo()):this.loading=!1}))}loadInfo(){this.subscription.add(this.catalogService.getByNameWithParams(`PRESTAMO/${this.id}`).subscribe(t=>{t&&(this.isNew=!1),this.id=t.id_Prestamo,this.exemplarSelect.dates=[new Date(t.fh_Prestamo),new Date(t.fh_Devolucion)],this.maxDate=new Date(t.fh_Devolucion),this.minDate=new Date(t.fh_Prestamo),this.userSelect.selectedUser=[t.USUARIO.id_Usuario],this.exemplarSelect.selectedExemplar=[t.EJEMPLAR.id_Ejemplar],this.exemplarStatusSelect.selectedStatus=[t.ESTADOS.id_Estado],this.exemplarStatusSelect.loadedStatus=t.ESTADOS.id_Estado,setTimeout(()=>{this.loading=!1},200)},()=>{this.loading=!1,this.router.navigate([p.u.borrowsPage])}))}add(){this.isNew?(this.addLoading=!0,this.subscription.add(this.catalogService.addOfURL("PRESTAMO",{fh_Prestamo:this.exemplarSelect.dates[0],fh_Devolucion:this.exemplarSelect.dates[1],id_Estado:u.u.EN_PRESTAMO,id_usuarioPresta:this.userSelect.selectedUser[0],id_Ejemplar:this.exemplarSelect.selectedExemplar[0]}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"El pr\xe9stamo fue a\xf1adido satifactoriamente"}),setTimeout(()=>{this.router.navigate([p.u.borrowsPage])},200),this.addLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo a\xf1adir el pr\xe9stamo"}),this.addLoading=!1}))):this.update()}update(){this.addLoading=!0,this.subscription.add(this.catalogService.updateOfURL(`PRESTAMO/${this.id}`,{id_Prestamo:this.id,fh_Prestamo:this.exemplarSelect.dates[0],fh_Devolucion:this.exemplarSelect.dates[1],id_usuarioPresta:this.userSelect.selectedUser[0],id_Estado:this.exemplarStatusSelect.selectedStatus[0],id_Ejemplar:this.exemplarSelect.selectedExemplar[0]}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"El pr\xe9stamo fue editado satifactoriamente"}),setTimeout(()=>{this.router.navigate([p.u.borrowsPage])},200),this.addLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo editar el pr\xe9stamo"}),this.addLoading=!1}))}delete(){this.deleteLoading=!0,this.subscription.add(this.catalogService.deleteOfURL(`PRESTAMO/${this.id}`).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"El pr\xe9stamo fue eliminado con \xe9xito"}),setTimeout(()=>{this.router.navigate([p.u.borrowsPage])},200),this.deleteLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo eliminar el pr\xe9stamo"}),this.deleteLoading=!1}))}onDateChange(){if(null===this.exemplarSelect.dates[0]||null===this.exemplarSelect.dates[1])return;this.isNew||(this.exemplarStatusSelect.selectedStatus=this.exemplarSelect.dates[1]<this.maxDate?[u.u.FINALIZADO]:[this.exemplarStatusSelect.loadedStatus]);let t=[];const a=new Date(this.exemplarSelect.dates[0].getTime());for(;this.exemplarSelect.dates[1]>a||this.exemplarSelect.dates[1].getDate()===a.getDate();)t.push(new Date(a.getDate())),a.setDate(a.getDate()+1);t.forEach(i=>{this.exemplarSelect.disabledDates.forEach(l=>{i.getDate()!==l.getDate()||(this.exemplarSelect.dates=[])})})}getBreadCrumbs(){return[{label:"Pr\xe9stamos",routerLink:[this.routeInformation.borrowsPage]},{label:"Pr\xe9stamo",routerLink:[this.routeInformation.borrowPage]}]}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.gz),e.Y36(f.q),e.Y36(S.D),e.Y36(x.a))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-borrows-page"]],features:[e.qOj],decls:3,vars:2,consts:[[1,"card","p-mt-4"],["class","p-d-flex p-ai-center p-jc-center","style","height: 80%",4,"ngIf"],["autocomplete","off","class","p-fluid p-formgrid p-grid p-formgrid-sm p-ml-2 p-mr-2",4,"ngIf"],[1,"p-d-flex","p-ai-center","p-jc-center",2,"height","80%"],["autocomplete","off",1,"p-fluid","p-formgrid","p-grid","p-formgrid-sm","p-ml-2","p-mr-2"],["form","ngForm"],["severity","warn","class","p-col-12",4,"ngIf"],[1,"p-field","p-col-12","p-mt-2"],["name","selectedType","defaultLabel","Elige un ejemplar","optionLabel","nombre","optionValue","id_Ejemplar","emptyFilterMessage","No se encontraron resultados",3,"options","ngModel","showToggleAll","showClear","resetFilterOnHide","disabled","ngModelChange","onFilter","onChange"],["exemplarMultiSelect",""],["name","selectedUser","defaultLabel","Elige un usuario","optionLabel","nombre","optionValue","id_Usuario","emptyFilterMessage","No se encontraron resultados",3,"options","ngModel","showToggleAll","showClear","resetFilterOnHide","disabled","ngModelChange","onFilter","onChange"],["userMultiSelect",""],[1,"p-field","p-col-12","p-sm-6","p-mt-2",3,"ngClass"],["selectionMode","range","name","dates","dateFormat","dd/mm/yy","placeholder","Elige un rango de fechas para tu pr\xe9stamo",3,"disabledDates","ngModel","minDate","maxDate","selectOtherMonths","disabled","ngModelChange","onSelect"],["class","p-field p-col-12 p-sm-6 p-mt-2",4,"ngIf"],[1,"p-col-12","p-grid","p-mt-4","p-ml-0","p-mr-0","p-pl-0","p-pr-0"],[1,"p-field",3,"ngClass"],["pButton","","pRipple","","type","button","tooltipPosition","top",1,"p-button-success",3,"label","loading","pTooltip","disabled","click"],["class","p-field p-col-6 p-sm-3",4,"ngIf"],["severity","warn",1,"p-col-12"],["pTemplate",""],[1,"p-field","p-col-12","p-sm-6","p-mt-2"],["name","selectedStatus","defaultLabel","Elige un estado","optionLabel","estado","optionValue","id_Estado","emptyFilterMessage","No se encontraron resultados",3,"options","ngModel","showToggleAll","resetFilterOnHide","disabled","ngModelChange"],[1,"p-field","p-col-6","p-sm-3"],["pButton","","pRipple","","type","button","label","Eliminar","icon","pi pi-trash",1,"p-button-danger",3,"loading","click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.YNc(1,z,1,0,"app-loading",1),e.YNc(2,V,23,34,"form",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",a.loading),e.xp6(1),e.Q6J("ngIf",!a.loading))},dependencies:[r.mk,r.O5,w.NU,h.jx,c._Y,c.JJ,c.JL,c.On,c.F,P.Hq,C.H,b.f,J.N,E.u,v.V,Q.p],encapsulation:2}),o})();const W=[{path:"",component:F},{path:"borrow",component:T},{path:"borrow/:id",component:T}];let X=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.Bz.forChild(W),m.Bz]}),o})();var k=s(6311),U=s(4466),q=s(9423);let ee=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[f.q,S.D,x.a],imports:[r.ez,X,k.j,U.m,w.q4,c.u5,P.hJ,C.T,U.m,b._8,q.I,_.o,E.z,v.$]}),o})()}}]);