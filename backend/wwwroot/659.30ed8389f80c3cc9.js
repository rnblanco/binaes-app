"use strict";(self.webpackChunkpk_thunder_frontend=self.webpackChunkpk_thunder_frontend||[]).push([[659],{7659:($,m,c)=>{c.r(m),c.d(m,{CollectionsModule:()=>D});var r=c(6895),g=c(2248),N=c(9908),d=c(6894),e=c(8274),P=c(414),C=c(805);function O(o,i){if(1&o&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&o){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t||null==t.TIPOCOLECCION?null:t.TIPOCOLECCION.tipoColeccion1)," ")}}function E(o,i){if(1&o&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&o){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t||null==t.GENEROCOLECCION?null:t.GENEROCOLECCION.generoColeccion1)," ")}}function w(o,i){if(1&o&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&o){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t||null==t.AREA?null:t.AREA.nombre)," ")}}function v(o,i){if(1&o&&(e.ynx(0),e._uU(1),e.BQk()),2&o){const t=e.oxw().$implicit,n=e.oxw().rowData;e.xp6(1),e.hij(" ",n[t.field]," ")}}function L(o,i){if(1&o&&(e.TgZ(0,"td",4),e.YNc(1,O,3,3,"ng-container",5),e.YNc(2,E,3,3,"ng-container",5),e.YNc(3,w,3,3,"ng-container",5),e.YNc(4,v,2,1,"ng-container",6),e.qZA()),2&o){const t=i.$implicit;e.Udp("width",t.width,"px"),e.Q6J("ngSwitch",t.field),e.xp6(1),e.Q6J("ngSwitchCase","TIPOCOLECCION.tipoColeccion1"),e.xp6(1),e.Q6J("ngSwitchCase","GENEROCOLECCION.generoColeccion1"),e.xp6(1),e.Q6J("ngSwitchCase","AREA.nombre")}}function A(o,i){1&o&&e.YNc(0,L,5,6,"td",3),2&o&&e.Q6J("ngForOf",i.columns)}let I=(()=>{class o extends N.c{constructor(){super(),this.USER=d.G.USER,this.cols=[{field:"nombre",header:"Nombre",width:100},{field:"TIPOCOLECCION.tipoColeccion1",header:"Tipo",width:100},{field:"GENEROCOLECCION.generoColeccion1",header:"G\xe9nero",width:150},{field:"AREA.nombre",header:"\xc1rea",width:175}]}ngOnInit(){this.loadAll(),this.breadcrumbService.setItems(this.getBreadCrumbs())}loadAll(){this.list=[],this.loading=!0,this.getPaginationParams(),this.subscription.add(this.catalogService.getByNameWithParams("COLECCION",this.httpParams).subscribe(t=>{this.pagination=t.meta,this.currentPage=this.pagination.currentPage,this.list=t.data,this.loading=!1},()=>this.loading=!1))}onLazyLoad(t){this.paginate(t),this.loadAll()}onNew(){this.user.id_rolUsuario!==d.G.USER&&this.router.navigate([`${this.routeInformation.collectionPage}/`])}onRowSelect({data:t}){this.user.id_rolUsuario!==d.G.USER&&this.router.navigate([`${this.routeInformation.collectionPage}/${t.id_Coleccion}/`])}getBreadCrumbs(){return[{label:"Colecciones",routerLink:[this.routeInformation.collectionsPage]}]}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-collections-page"]],features:[e.qOj],decls:3,vars:8,consts:[[1,"p-mt-4"],["newButtonLabel","Nueva colecci\xf3n","type","colecciones",3,"reloading","globalFilter","rows","pagination","loading","cols","list","showNewButton","onLazyLoad","onRowSelect","onNewClick"],["pTemplate","body"],["class","text-center",3,"ngSwitch","width",4,"ngFor","ngForOf"],[1,"text-center",3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"table-card",1),e.NdJ("onLazyLoad",function(a){return n.onLazyLoad(a)})("onRowSelect",function(a){return n.onRowSelect(a)})("onNewClick",function(){return n.onNew()}),e.YNc(2,A,1,1,"ng-template",2),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("reloading",n.loading)("globalFilter",n.globalFilter)("rows",n.rows)("pagination",n.pagination)("loading",n.loading)("cols",n.cols)("list",n.list)("showNewButton",n.user.id_rolUsuario!==n.USER))},dependencies:[r.sg,r.RF,r.n9,r.ED,P.r,C.jx,r.rS],encapsulation:2}),o})();var u=c(9322),p=c(8203),h=c(7114);let _=(()=>{class o extends u.H{constructor(){super(),this.genreText="",this.selectedGenre=[]}genreFilter(t){this.genreText=t.filter}genreChange(t){this.selectedGenre=[t.itemValue]}addGenre(t){this.subscription.add(this.catalogService.addOfURL("GENEROCOLECCION",{generoColeccion1:this.genreText}).subscribe(n=>{this.loadGenres(),this.selectedGenre=[n.id_generoColeccion],t.hide()},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo a\xf1adir el g\xe9nero"}),t.hide()}))}loadGenres(){this.subscription.add(this.catalogService.getByNameWithParams("GENEROCOLECCION").subscribe(t=>{this.genres=t}))}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["root"]],features:[e.qOj],decls:0,vars:0,template:function(t,n){},encapsulation:2}),o})(),f=(()=>{class o extends u.H{constructor(){super(),this.typeText="",this.selectedType=[]}typeFilter(t){this.typeText=t.filter}typeChange(t){this.selectedType=[t.itemValue]}addType(t){this.subscription.add(this.catalogService.addOfURL("TIPOCOLECCION",{tipoColeccion1:this.typeText}).subscribe(n=>{this.loadCollectionTypes(),this.selectedType=[n.id_tipoColeccion],t.hide()},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo a\xf1adir el tipo"}),t.hide()}))}loadCollectionTypes(){this.subscription.add(this.catalogService.getByNameWithParams("TIPOCOLECCION").subscribe(t=>{this.types=t}))}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["root"]],features:[e.qOj],decls:0,vars:0,template:function(t,n){},encapsulation:2}),o})();var s=c(433),y=c(1740),S=c(5593),T=c(1795),x=c(5722),M=c(7011),G=c(3026);function F(o,i){1&o&&e._UZ(0,"app-loading",3)}function R(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){e.CHM(t),e.oxw();const l=e.MAs(15),a=e.oxw();return e.KtG(a.typeCollectionSelect.addType(l))}),e.qZA()}if(2&o){const t=e.oxw(2);e.MGl("label","Agregar '",t.typeCollectionSelect.typeText,"'")}}function Z(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){e.CHM(t),e.oxw();const l=e.MAs(21),a=e.oxw();return e.KtG(a.genreSelect.addGenre(l))}),e.qZA()}if(2&o){const t=e.oxw(2);e.MGl("label","Agregar '",t.genreSelect.genreText,"'")}}function U(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",22)(1,"button",23),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.delete())}),e.qZA()()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("loading",t.deleteLoading)}}const J=function(o,i){return{"p-col-6 p-sm-9":o,"p-col-12":i}};function H(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"form",4,5)(2,"div",6)(3,"label"),e._uU(4,"Nombre:"),e.qZA(),e.TgZ(5,"div",7)(6,"input",8),e.NdJ("ngModelChange",function(l){e.CHM(t);const a=e.oxw();return e.KtG(a.name=l)}),e.qZA()()(),e.TgZ(7,"div",9)(8,"label"),e._uU(9,"\xc1rea:"),e.qZA(),e.TgZ(10,"p-multiSelect",10),e.NdJ("ngModelChange",function(l){e.CHM(t);const a=e.oxw();return e.KtG(a.areaSelect.selectedArea=l)})("onFilter",function(l){e.CHM(t);const a=e.oxw();return e.KtG(a.areaSelect.areaFilter(l))})("onChange",function(l){e.CHM(t);const a=e.oxw();return e.KtG(a.areaSelect.areaChange(l))}),e.qZA()(),e.TgZ(11,"div",11)(12,"label"),e._uU(13,"Tipo:"),e.qZA(),e.TgZ(14,"p-multiSelect",12,13),e.NdJ("ngModelChange",function(l){e.CHM(t);const a=e.oxw();return e.KtG(a.typeCollectionSelect.selectedType=l)})("onFilter",function(l){e.CHM(t);const a=e.oxw();return e.KtG(a.typeCollectionSelect.typeFilter(l))})("onChange",function(l){e.CHM(t);const a=e.oxw();return e.KtG(a.typeCollectionSelect.typeChange(l))}),e.YNc(16,R,1,1,"ng-template",14),e.qZA()(),e.TgZ(17,"div",11)(18,"label"),e._uU(19,"G\xe9nero:"),e.qZA(),e.TgZ(20,"p-multiSelect",15,16),e.NdJ("ngModelChange",function(l){e.CHM(t);const a=e.oxw();return e.KtG(a.genreSelect.selectedGenre=l)})("onFilter",function(l){e.CHM(t);const a=e.oxw();return e.KtG(a.genreSelect.genreFilter(l))})("onChange",function(l){e.CHM(t);const a=e.oxw();return e.KtG(a.genreSelect.genreChange(l))}),e.YNc(22,Z,1,1,"ng-template",14),e.qZA()(),e.TgZ(23,"div",17)(24,"div",18)(25,"button",19),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.add())}),e.ALo(26,"addOrEdit"),e.qZA()(),e.YNc(27,U,2,1,"div",20),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(6),e.Q6J("ngModel",t.name),e.xp6(4),e.Q6J("options",t.areaSelect.areas)("ngModel",t.areaSelect.selectedArea)("showToggleAll",!1)("showClear",!0)("resetFilterOnHide",!0),e.xp6(4),e.Q6J("options",t.typeCollectionSelect.types)("ngModel",t.typeCollectionSelect.selectedType)("showToggleAll",!1)("showClear",!0)("resetFilterOnHide",!0),e.xp6(6),e.Q6J("options",t.genreSelect.genres)("ngModel",t.genreSelect.selectedGenre)("showToggleAll",!1)("showClear",!0)("resetFilterOnHide",!0),e.xp6(4),e.Q6J("ngClass",e.WLB(23,J,t.user.id_rolUsuario===t.SUPER_ADMIN&&!t.isNew,t.isNew||t.user.id_rolUsuario!==t.SUPER_ADMIN)),e.xp6(1),e.Q6J("loading",t.addLoading)("label",e.lcZ(26,21,t.isNew))("disabled",!t.formIsValid),e.xp6(2),e.Q6J("ngIf",t.user.id_rolUsuario===t.SUPER_ADMIN&&!t.isNew)}}let b=(()=>{class o extends u.H{constructor(t,n,l,a){super(),this.route=t,this.areaSelect=n,this.genreSelect=l,this.typeCollectionSelect=a,this.SUPER_ADMIN=d.G.SUPER_ADMIN,this.isNew=!0,this.addLoading=!1,this.deleteLoading=!1}ngOnInit(){this.loadAll(),this.user=this.authService.storagedUser,this.breadcrumbService.setItems(this.getBreadCrumbs())}get formIsValid(){return""!==this.name&&this.typeCollectionSelect.selectedType?.length>0&&this.genreSelect.selectedGenre?.length>0&&this.areaSelect.selectedArea?.length>0}loadAll(){this.user.id_rolUsuario===d.G.USER&&(this.messageService.setPayload({type:"warn",title:"Error",body:"No tienes autorizaci\xf3n para ver esta informaci\xf3n"}),setTimeout(()=>{this.router.navigate([p.u.collectionsPage])},50)),this.subscription.add(this.route.params.subscribe(({id:t})=>{this.loading=!0,this.typeCollectionSelect.loadCollectionTypes(),this.genreSelect.loadGenres(),this.areaSelect.loadAreas(),t?(this.id=t,this.loadInfo()):this.loading=!1}))}loadInfo(){this.subscription.add(this.catalogService.getByNameWithParams(`COLECCION/${this.id}`).subscribe(t=>{t.nombre&&(this.isNew=!1),this.name=t.nombre,this.areaSelect.selectedArea=[t.AREA.id_Area],this.genreSelect.selectedGenre=[t.GENEROCOLECCION.id_generoColeccion],this.typeCollectionSelect.selectedType=[t.TIPOCOLECCION.id_tipoColeccion],setTimeout(()=>{this.loading=!1},200)},()=>{this.loading=!1,this.router.navigate([p.u.collectionPage])}))}add(){this.isNew?(this.addLoading=!0,this.subscription.add(this.catalogService.addOfURL("COLECCION",{nombre:this.name,id_tipoColeccion:this.typeCollectionSelect.selectedType[0],id_generoColeccion:this.genreSelect.selectedGenre[0],id_areaPertenece:this.areaSelect.selectedArea[0]}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"La colecci\xf3n fue a\xf1adida satifactoriamente"}),setTimeout(()=>{this.router.navigate([p.u.collectionsPage])},200),this.addLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo a\xf1adir la colecci\xf3n"}),this.addLoading=!1}))):this.update()}update(){this.addLoading=!0,this.subscription.add(this.catalogService.updateOfURL(`COLECCION/${this.id}`,{id_Coleccion:this.id,nombre:this.name,id_tipoColeccion:this.typeCollectionSelect.selectedType[0],id_generoColeccion:this.genreSelect.selectedGenre[0],id_areaPertenece:this.areaSelect.selectedArea[0]}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"La colecci\xf3n fue editada satifactoriamente"}),setTimeout(()=>{this.router.navigate([p.u.collectionsPage])},200),this.addLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo editar la colecci\xf3n"}),this.addLoading=!1}))}delete(){this.deleteLoading=!0,this.subscription.add(this.catalogService.deleteOfURL(`COLECCION/${this.id}`).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"La colecci\xf3n fue eliminada con \xe9xito"}),setTimeout(()=>{this.router.navigate([p.u.collectionsPage])},200),this.deleteLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo eliminar la colecci\xf3n"}),this.deleteLoading=!1}))}getBreadCrumbs(){return[{label:"Colecciones",routerLink:[this.routeInformation.collectionsPage]},{label:"Colecci\xf3n",routerLink:[this.routeInformation.collectionPage]}]}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(g.gz),e.Y36(h.h),e.Y36(_),e.Y36(f))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-collection-page"]],features:[e.qOj],decls:3,vars:2,consts:[[1,"card","p-mt-4"],["class","p-d-flex p-ai-center p-jc-center","style","height: 80%",4,"ngIf"],["autocomplete","off","class","p-fluid p-formgrid p-grid p-formgrid-sm p-ml-2 p-mr-2",4,"ngIf"],[1,"p-d-flex","p-ai-center","p-jc-center",2,"height","80%"],["autocomplete","off",1,"p-fluid","p-formgrid","p-grid","p-formgrid-sm","p-ml-2","p-mr-2"],["form","ngForm"],[1,"p-field","p-col-12"],[1,"p-input-icon-right"],["name","name","placeholder","Ej. Cr\xf3nicas de Narnia","pInputText","",3,"ngModel","ngModelChange"],[1,"p-field","p-col-12","p-mt-2"],["name","selectedArea","defaultLabel","Elige un \xe1rea","optionLabel","nombre","optionValue","id_Area","emptyFilterMessage","No se encontraron \xe1reas","emptyMessage","No se encontraron \xe1reas",3,"options","ngModel","showToggleAll","showClear","resetFilterOnHide","ngModelChange","onFilter","onChange"],[1,"p-field","p-col-12","p-sm-6","p-mt-2"],["name","selectedType","defaultLabel","Elige un tipo","optionLabel","tipoColeccion1","optionValue","id_tipoColeccion",3,"options","ngModel","showToggleAll","showClear","resetFilterOnHide","ngModelChange","onFilter","onChange"],["typeCollectionMultiSelect",""],["pTemplate","emptyfilter"],["name","selectedGenre","defaultLabel","Elige un g\xe9nero","optionLabel","generoColeccion1","optionValue","id_generoColeccion",3,"options","ngModel","showToggleAll","showClear","resetFilterOnHide","ngModelChange","onFilter","onChange"],["genreMultiSelect",""],[1,"p-col-12","p-grid","p-mt-4","p-ml-0","p-mr-0","p-pl-0","p-pr-0"],[1,"p-field",3,"ngClass"],["pButton","","pRipple","","type","button",1,"p-button-success",3,"loading","label","disabled","click"],["class","p-field p-col-6 p-sm-3",4,"ngIf"],["pButton","","pRipple","","type","button",1,"p-button-primary",3,"label","click"],[1,"p-field","p-col-6","p-sm-3"],["pButton","","pRipple","","type","button","label","Eliminar","icon","pi pi-trash",1,"p-button-danger",3,"loading","click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,F,1,0,"app-loading",1),e.YNc(2,H,28,26,"form",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",n.loading),e.xp6(1),e.Q6J("ngIf",!n.loading))},dependencies:[r.mk,r.O5,s._Y,s.Fj,s.JJ,s.JL,s.On,s.F,y.o,C.jx,S.Hq,T.H,x.NU,M.N,G.p],encapsulation:2}),o})();const B=[{path:"",component:I},{path:"collection",component:b},{path:"collection/:id",component:b}];let Q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(B),g.Bz]}),o})();var j=c(6311),Y=c(8433),K=c(4466),z=c(9423);let D=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[f,_,h.h],imports:[r.ez,Q,j.j,s.u5,y.j,Y.ON,S.hJ,T.T,x.q4,K.m,z.I]}),o})()}}]);