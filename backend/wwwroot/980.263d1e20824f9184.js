"use strict";(self.webpackChunkpk_thunder_frontend=self.webpackChunkpk_thunder_frontend||[]).push([[980],{6980:(ue,v,l)=>{l.r(v),l.d(v,{EventsModule:()=>pe});var d=l(9808),u=l(6507),e=l(7587),F=l(2959),c=l(8203),p=l(6894),g=l(8205),h=l(520),U=l(7011),r=l(2382),b=l(1424),x=l(7010),E=l(4119),C=l(6526),w=l(9783),T=l(845),y=l(5787),S=l(5652),m=l(3725),P=l(3407),M=l(4178),j=l(3026);const D=["areaMultiSelect"];function J(n,o){1&n&&e._UZ(0,"app-loading",3)}function Z(n,o){if(1&n&&e._UZ(0,"button",27),2&n){const t=e.oxw(2);e.MGl("label","Agregar '",t.areaText,"'"),e.Q6J("disabled",!0)}}function I(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",28)(1,"label"),e._uU(2,"Estado:"),e.qZA(),e.TgZ(3,"input",29),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw(2).readableStatus=i}),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("ngModel",t.readableStatus)("disabled",!0)}}function L(n,o){if(1&n&&(e._UZ(0,"img",30),e.ALo(1,"photo")),2&n){const t=e.oxw(2);e.s9C("src",e.lcZ(1,1,t.uploadedFile[0]),e.LSH)}}function R(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",40),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit;return e.oxw(3).deleteObjective(null==i?null:i.id_Objetivo)}),e._uU(1," Eliminar "),e.qZA()}}const N=function(){return{borderTopLeftRadius:"6px",borderBottomLeftRadius:"6px"}},A=function(){return{standalone:!0}};function Q(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"p-tabPanel",37)(1,"div",34)(2,"textarea",38),e.NdJ("ngModelChange",function(i){return e.CHM(t).$implicit.Objetivo=i}),e.qZA(),e.TgZ(3,"button",36),e.NdJ("click",function(){const s=e.CHM(t).$implicit;let f;return e.oxw(3).addObjective(null!==(f=null==s?null:s.Objetivo)&&void 0!==f?f:"",null==s?null:s.id_Objetivo)}),e._uU(4," Editar "),e.qZA(),e.YNc(5,R,2,0,"button",39),e.qZA()()}if(2&n){const t=o.$implicit,a=o.index,i=e.oxw(3);e.MGl("header","Objetivo ",a+1,""),e.Q6J("selected",0===a),e.xp6(2),e.Akn(e.DdM(9,N)),e.Q6J("name",t.Objetivo)("ngModel",t.Objetivo)("ngModelOptions",e.DdM(10,A)),e.xp6(1),e.Q6J("disabled",0===(null==t||null==t.Objetivo?null:t.Objetivo.length)),e.xp6(2),e.Q6J("ngIf",i.user.id_rolUsuario===i.SUPER_ADMIN)}}function B(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"p-tabView",31),e.YNc(1,Q,6,11,"p-tabPanel",32),e.TgZ(2,"p-tabPanel",33)(3,"div",34)(4,"textarea",35),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw(2).objective=i}),e.qZA(),e.TgZ(5,"button",36),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return i.addObjective(i.objective)}),e._uU(6," Agregar "),e.qZA()()()()}if(2&n){const t=e.oxw(2);e.Q6J("scrollable",t.objectives.length>=6),e.xp6(1),e.Q6J("ngForOf",t.objectives),e.xp6(3),e.Akn(e.DdM(7,N)),e.Q6J("ngModel",t.objective)("ngModelOptions",e.DdM(8,A)),e.xp6(1),e.Q6J("disabled",0===(null==t.objective?null:t.objective.length))}}function V(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",41)(1,"button",42),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).delete()}),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("loading",t.deleteLoading)}}const z=function(n){return{"p-col-6":n}},H=function(n,o){return{"p-col-10":n,"p-col-12":o}};function Y(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"form",4,5)(2,"div",6)(3,"label"),e._uU(4,"Nombre del evento:"),e.qZA(),e.TgZ(5,"div",7)(6,"input",8),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().title=i}),e.qZA()()(),e.TgZ(7,"div",9)(8,"label"),e._uU(9,"Capacidad del evento:"),e.qZA(),e.TgZ(10,"p-inputNumber",10),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().capacity=i}),e.qZA()(),e.TgZ(11,"div",11)(12,"label"),e._uU(13,"\xc1rea:"),e.qZA(),e.TgZ(14,"p-multiSelect",12,13),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().selectedArea=i})("onFilter",function(i){return e.CHM(t),e.oxw().areaFilter(i)})("onChange",function(i){return e.CHM(t),e.oxw().areaChange(i)}),e.YNc(16,Z,1,2,"ng-template",14),e.qZA()(),e.TgZ(17,"div",15)(18,"label"),e._uU(19,"Rango de fechas:"),e.qZA(),e.TgZ(20,"p-calendar",16),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().dates=i})("onSelect",function(){return e.CHM(t),e.oxw().onDateChange()}),e.qZA()(),e.YNc(21,I,4,2,"div",17),e.TgZ(22,"div",18)(23,"label"),e._uU(24,"Logo del evento:"),e.qZA(),e.TgZ(25,"p-fileUpload",19),e.NdJ("onSelect",function(i){return e.CHM(t),e.oxw().onSelectFile(i)})("onUpload",function(i){return e.CHM(t),e.oxw().onUpload(i)}),e.YNc(26,L,2,3,"ng-template",20),e.qZA()(),e.TgZ(27,"div",21),e.YNc(28,B,7,9,"p-tabView",22),e.qZA(),e.TgZ(29,"div",23)(30,"div",24)(31,"button",25),e.NdJ("click",function(){return e.CHM(t),e.oxw().add()}),e.ALo(32,"addOrEdit"),e.qZA()(),e.YNc(33,V,2,1,"div",26),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(6),e.Q6J("ngModel",t.title),e.xp6(4),e.Q6J("ngModel",t.capacity)("showButtons",!0)("min",0)("max",1e3)("disabled",!0),e.xp6(4),e.Q6J("options",t.areas)("ngModel",t.selectedArea)("showToggleAll",!1)("showClear",!0)("resetFilterOnHide",!0),e.xp6(3),e.Q6J("ngClass",e.VKq(27,z,t.isNew)),e.xp6(3),e.Q6J("disabledDates",t.disabledDates)("ngModel",t.dates)("minDate",t.minDate)("maxDate",t.maxDate),e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(4),e.Q6J("showUploadButton",!1)("showCancelButton",!1),e.xp6(3),e.Q6J("ngIf",!t.loadingObjectives),e.xp6(2),e.Q6J("ngClass",e.WLB(29,H,t.user.id_rolUsuario===t.SUPER_ADMIN&&!t.isNew,t.isNew||t.user.id_rolUsuario!==t.SUPER_ADMIN)),e.xp6(1),e.Q6J("loading",t.addLoading)("label",e.lcZ(32,25,t.isNew))("disabled",!t.formIsValid),e.xp6(2),e.Q6J("ngIf",t.user.id_rolUsuario===t.SUPER_ADMIN&&!t.isNew)}}let O=(()=>{class n extends F.H{constructor(t){super(),this.route=t,this.isNew=!0,this.objectives=[],this.loadingObjectives=!1,this.loadedStatus=!0,this.uploadedFile=[],this.minDate=new Date,this.dates=[],this.disabledDates=[],this.SUPER_ADMIN=p.G.SUPER_ADMIN,this.addLoading=!1,this.deleteLoading=!1,this.areaText="",this.selectedArea=[],this.onUploadFinished=new e.vpe}get formIsValid(){var t,a;return""!==this.title&&(null===(t=this.selectedArea)||void 0===t?void 0:t.length)>0&&void 0!==this.dates[0]&&void 0!==this.dates[1]&&(void 0!==this.uploadedFiles||(null===(a=this.uploadedFile)||void 0===a?void 0:a.length)>0)}changeStatus(){this.readableStatus=this.selectedStatus?"Reservado":"Finalizado"}ngOnInit(){this.loadAll(),this.user=this.authService.storagedUser,this.breadcrumbService.setItems(this.getBreadCrumbs())}loadAll(){this.user.id_rolUsuario===p.G.USER&&(this.messageService.setPayload({type:"warn",title:"Error",body:"No tienes autorizaci\xf3n para ver esta informaci\xf3n"}),setTimeout(()=>{this.router.navigate([c.u.eventsPage])},50)),this.subscription.add(this.route.params.subscribe(({id:t})=>{this.loading=!0,this.loadAreas(),t?(this.id=t,this.loadInfo(),this.loadObjectives()):this.loading=!1}))}delete(){this.deleteLoading=!0,this.subscription.add(this.catalogService.deleteOfURL(`EVENTO/${this.id}`).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"El evento fue eliminado con \xe9xito"}),setTimeout(()=>{this.router.navigate([c.u.eventsPage])},200),this.deleteLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo eliminar el evento"}),this.deleteLoading=!1}))}onUpload(t){for(let a of t.files)this.uploadedFile.push(a)}onSelectFile(t){this.uploadedFiles=[...t.files],this.varbinaryImage=btoa(this.uploadedFiles[0].name),this.selectedfiles=this.uploadedFiles}add(){this.isNew?(void 0!==this.uploadedFiles&&this.uploadFile(),this.addLoading=!0,this.subscription.add(this.catalogService.addOfURL("EVENTO",{imagen:this.varbinaryImage,titulo:this.title,capacidad:this.capacity,fh_Inicio:this.dates[0],fh_Finalizacion:this.dates[1],id_areaRealizacion:this.selectedArea[0],aprobado:!0}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"El evento fue a\xf1adido satifactoriamente"}),setTimeout(()=>{this.router.navigate([c.u.eventsPage])},200),this.addLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo a\xf1adir el evento"}),this.addLoading=!1}))):this.update()}update(){void 0!==this.uploadedFiles&&this.uploadFile(),this.addLoading=!0,this.subscription.add(this.catalogService.updateOfURL(`EVENTO/${this.id}`,{imagen:void 0===this.varbinaryImage?btoa(this.uploadedFile[0]):this.varbinaryImage,id_Evento:this.id,titulo:this.title,capacidad:this.capacity,aprobado:this.selectedStatus,fh_Inicio:this.dates[0],fh_Finalizacion:this.dates[1],id_areaRealizacion:this.selectedArea[0]}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"El evento fue editado satifactoriamente"}),setTimeout(()=>{this.router.navigate([c.u.eventsPage])},200),this.addLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo editar el evento"}),this.addLoading=!1}))}uploadFile(){const t=new FormData;let a;a=new File([this.uploadedFiles[0]],this.uploadedFiles[0].name,{type:"application/png"}),t.append("file",a,a.name),this.subscription.add(this.catalogService.addOfURL("UploadImage",t).subscribe(()=>{}))}onDateChange(){if(null===this.dates[0]||null===this.dates[1])return;this.isNew||(this.selectedStatus=!(this.dates[1]<this.maxDate)&&this.loadedStatus,this.readableStatus=this.selectedStatus?"Reservado":"Finalizado");let t=[];const a=new Date(this.dates[0].getTime());for(;this.dates[1]>a||this.dates[1].getDate()===a.getDate();)t.push(new Date(a.getTime())),a.setDate(a.getDate()+1);t.forEach(i=>{this.disabledDates.forEach(s=>{i.getDate()!==s.getDate()||(this.dates=[])})})}loadInfo(){this.subscription.add(this.catalogService.getByNameWithParams(`EVENTO/${this.id}`).subscribe(t=>{t&&(this.isNew=!1),this.id=t.id_Evento,this.selectedArea.push(t.AREA.id_Area),this.dates=[new Date(t.fh_Inicio),new Date(t.fh_Finalizacion)],this.maxDate=new Date(t.fh_Finalizacion),this.minDate=new Date(t.fh_Inicio),this.title=t.titulo,this.capacity=t.capacidad,this.selectedStatus=t.aprobado,this.loadedStatus=t.aprobado,this.changeStatus(),this.uploadedFile.push(t.imagen),setTimeout(()=>{this.loading=!1},200)},()=>{this.loading=!1,this.router.navigate([c.u.eventPage])}))}areaFilter(t){this.areaText=t.filter}areaChange(t){var a;this.selectedArea=[t.itemValue],this.loadDisabledDates(t.itemValue);const i=this.areas.find(s=>s.id_Area===this.selectedArea[0]);this.capacity=null!==(a=null==i?void 0:i.capacidad)&&void 0!==a?a:0}loadDisabledDates(t){this.subscription.add(this.catalogService.getByNameWithParams("EVENTO",(new h.LE).set("id_areaRealizacion",t)).subscribe(a=>{a&&(this.disabledDates=a.map(i=>new Date(i))),this.dates=[]}))}loadAreas(){this.subscription.add(this.catalogService.getByNameWithParams("AREA").subscribe(t=>{this.areas=t}))}loadObjectives(){this.loadingObjectives=!0,this.subscription.add(this.catalogService.getByNameWithParams("OBJETIVOSXEVENTO",(new h.LE).set("id_Evento",this.id)).subscribe(t=>{this.objectives=t,this.loadingObjectives=!1}))}addObjective(t,a){a?this.updateObjective(t,a):this.subscription.add(this.catalogService.addOfURL("OBJETIVOSXEVENTO",{id_Evento:this.id,Objetivo:t}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"El objetivo fue agregado correctamente"}),this.objective="",setTimeout(()=>{this.loadObjectives()},200)},()=>{this.messageService.setPayload({type:"error",title:"\xa1Error!",body:"El objetivo no fue agregado"})}))}updateObjective(t,a){this.subscription.add(this.catalogService.updateOfURL(`OBJETIVOSXEVENTO/${a}`,{id_Objetivo:a,id_Evento:this.id,Objetivo:t}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"El objetivo fue editado correctamente"})},()=>{this.messageService.setPayload({type:"error",title:"\xa1Error!",body:"El objetivo no fue editado"})}))}deleteObjective(t){this.subscription.add(this.catalogService.deleteOfURL(`OBJETIVOSXEVENTO/${t}`).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"El evento fue eliminado con \xe9xito"}),this.loadObjectives()},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo eliminar el evento"})}))}getBreadCrumbs(){return[{label:"Eventos",routerLink:[this.routeInformation.eventsPage]},{label:"Evento",routerLink:[this.routeInformation.eventPage]}]}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-event-page"]],viewQuery:function(t,a){if(1&t&&(e.Gf(g.p,5),e.Gf(D,5)),2&t){let i;e.iGM(i=e.CRH())&&(a.fileUpload=i.first),e.iGM(i=e.CRH())&&(a.areaMultiSelect=i.first)}},outputs:{onUploadFinished:"onUploadFinished"},features:[e.qOj],decls:3,vars:2,consts:[[1,"card","p-mt-4"],["class","p-d-flex p-ai-center p-jc-center","style","height: 80%",4,"ngIf"],["autocomplete","off","class","p-fluid p-formgrid p-grid p-formgrid-sm p-ml-2 p-mr-2",4,"ngIf"],[1,"p-d-flex","p-ai-center","p-jc-center",2,"height","80%"],["autocomplete","off",1,"p-fluid","p-formgrid","p-grid","p-formgrid-sm","p-ml-2","p-mr-2"],["form","ngForm"],[1,"p-field","p-col-8"],[1,"p-input-icon-right"],["name","title","placeholder","Ej. Charla 'Uso correcto aplicaci\xf3n BINAES' ","pInputText","",3,"ngModel","ngModelChange"],[1,"p-field","p-col-4"],["pTooltip","La capacidad depende del \xe1rea","tooltipPosition","top","name","capacity","inputId","minmax-buttons",3,"ngModel","showButtons","min","max","disabled","ngModelChange"],[1,"p-field","p-col-6","p-mt-2"],["name","selectedArea","defaultLabel","Elige un \xe1rea","optionLabel","nombre","optionValue","id_Area",3,"options","ngModel","showToggleAll","showClear","resetFilterOnHide","ngModelChange","onFilter","onChange"],["areaMultiSelect",""],["pTemplate","emptyfilter"],[1,"p-field","p-col-4","p-mt-2",3,"ngClass"],["selectionMode","range","name","dates","dateFormat","dd/mm/yy","placeholder","Elige un rango de fechas para tu evento",3,"disabledDates","ngModel","minDate","maxDate","ngModelChange","onSelect"],["class","p-field p-col-2 p-mt-2",4,"ngIf"],[1,"p-field","p-col-12","p-mt-2"],["name","demo[]","chooseLabel","Agregar","invalidFileTypeMessageSummary","{0}: Este formato de archivo no es v\xe1lido.","invalidFileTypeMessageDetail","tipos v\xe1lidos: {0}","accept","image/png",3,"showUploadButton","showCancelButton","onSelect","onUpload"],["pTemplate","content"],[1,"p-col-12","p-mb-2"],[3,"scrollable",4,"ngIf"],[1,"p-col-12","p-grid","p-mt-2","p-mt-2","p-ml-0","p-mr-0","p-pl-0","p-pr-0"],[3,"ngClass"],["pButton","","pRipple","","type","button",1,"p-button-success",3,"loading","label","disabled","click"],["class","p-col",4,"ngIf"],["pButton","","pRipple","","type","button",1,"p-button-primary",3,"label","disabled"],[1,"p-field","p-col-2","p-mt-2"],["type","text","pInputText","","name","eventStatus",3,"ngModel","disabled","ngModelChange"],[2,"height","10em",3,"src"],[3,"scrollable"],[3,"header","selected",4,"ngFor","ngForOf"],["header","Nuevo objetivo"],[1,"p-inputgroup"],["pInputTextarea","","required","","placeholder","Ej. 'Con este evento se busca lograr...'","name","objective",3,"ngModel","ngModelOptions","ngModelChange"],["pButton","","type","button",3,"disabled","click"],[3,"header","selected"],["pInputTextarea","","required","","placeholder","Ej. 'Con este evento se busca lograr...'",3,"name","ngModel","ngModelOptions","ngModelChange"],["pButton","","type","button","class","p-button-danger",3,"click",4,"ngIf"],["pButton","","type","button",1,"p-button-danger",3,"click"],[1,"p-col"],["pButton","","pRipple","","type","button","label","Eliminar","icon","pi pi-trash",1,"p-button-danger",3,"loading","click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.YNc(1,J,1,0,"app-loading",1),e.YNc(2,Y,34,32,"form",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",a.loading),e.xp6(1),e.Q6J("ngIf",!a.loading))},directives:[d.O5,U.N,r._Y,r.JL,r.F,r.Fj,b.o,r.JJ,r.On,x.Rn,E.u,C.NU,w.jx,T.Hq,y.H,d.mk,S.f,g.p,m.xf,d.sg,m.x4,P.g,r.Q7],pipes:[M.A,j.p],encapsulation:2}),n})();var $=l(9908),G=l(414);function k(n,o){if(1&n&&(e.ynx(0),e._UZ(1,"img",7),e.ALo(2,"photo"),e.BQk()),2&n){const t=e.oxw(2).rowData;e.xp6(1),e.Q6J("src",e.lcZ(2,1,null==t?null:t.imagen),e.LSH)}}function W(n,o){if(1&n&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&n){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t?null:t.titulo)," ")}}function X(n,o){if(1&n&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&n){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t||null==t.AREA?null:t.AREA.nombre)," ")}}function q(n,o){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",null==t?null:t.capacidad," ")}}function K(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",8)(2,"span"),e._uU(3),e.qZA()(),e.BQk()),2&n){const t=e.oxw(2).rowData;e.xp6(2),e.Gre("'p-pt-1 p-pb-1 aprove-badge ",null!=t&&t.aprobado?"Reservado":"Finalizado","s"),e.xp6(1),e.hij("",null!=t&&t.aprobado?"Reservado":"Finalizado","s")}}function ee(n,o){if(1&n&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.BQk()),2&n){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.xi3(2,1,null==t?null:t.fh_Inicio,"dd-MM-yyyy")," ")}}function te(n,o){if(1&n&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.BQk()),2&n){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.xi3(2,1,null==t?null:t.fh_Finalizacion,"dd-MM-yyyy")," ")}}function ne(n,o){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=e.oxw().$implicit,a=e.oxw().rowData;e.xp6(1),e.hij(" ",a[t.field]," ")}}function ae(n,o){if(1&n&&(e.TgZ(0,"td",4),e.YNc(1,k,3,3,"ng-container",5),e.YNc(2,W,3,3,"ng-container",5),e.YNc(3,X,3,3,"ng-container",5),e.YNc(4,q,2,1,"ng-container",5),e.YNc(5,K,4,4,"ng-container",5),e.YNc(6,ee,3,4,"ng-container",5),e.YNc(7,te,3,4,"ng-container",5),e.YNc(8,ne,2,1,"ng-container",6),e.qZA()),2&n){const t=o.$implicit;e.Udp("width",t.width,"px"),e.Q6J("ngSwitch",t.field),e.xp6(1),e.Q6J("ngSwitchCase","imagen"),e.xp6(1),e.Q6J("ngSwitchCase","titulo"),e.xp6(1),e.Q6J("ngSwitchCase","AREA.nombre"),e.xp6(1),e.Q6J("ngSwitchCase","capacidad"),e.xp6(1),e.Q6J("ngSwitchCase","aprobado"),e.xp6(1),e.Q6J("ngSwitchCase","fh_Inicio"),e.xp6(1),e.Q6J("ngSwitchCase","fh_Finalizacion")}}function ie(n,o){1&n&&e.YNc(0,ae,9,10,"td",3),2&n&&e.Q6J("ngForOf",o.columns)}const oe=[{path:"",component:(()=>{class n extends $.c{constructor(){super(),this.USER=p.G.USER,this.cols=[{field:"titulo",header:"T\xedtulo",width:100},{field:"imagen",header:"Imagen",width:100},{field:"AREA.nombre",header:"\xc1rea",width:100},{field:"capacidad",header:"Capacidad",width:10},{field:"aprobado",header:"Estado",width:10},{field:"fh_Inicio",header:"Inicio",width:100},{field:"fh_Finalizacion",header:"Fin",width:100}]}ngOnInit(){this.loadAll(),this.user=this.authService.storagedUser,this.breadcrumbService.setItems(this.getBreadCrumbs())}loadAll(){this.list=[],this.loading=!0,this.getPaginationParams(),this.subscription.add(this.catalogService.getByNameWithParams("EVENTO",this.httpParams).subscribe(t=>{this.list=t,this.loading=!1},()=>this.loading=!1))}onLazyLoad(t){this.paginate(t),this.loadAll()}onNew(){this.user.id_rolUsuario!==p.G.USER&&this.router.navigate([`${this.routeInformation.eventPage}/`])}onRowSelect({data:t}){this.user.id_rolUsuario!==p.G.USER&&this.router.navigate([`${this.routeInformation.eventPage}/${t.id_Evento}/`])}getBreadCrumbs(){return[{label:"Eventos",routerLink:[this.routeInformation.eventsPage]}]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-events-page"]],features:[e.qOj],decls:3,vars:8,consts:[[1,"p-mt-4"],["newButtonLabel","Nuevo evento","type","eventos",3,"reloading","globalFilter","rows","pagination","loading","cols","list","showNewButton","onLazyLoad","onRowSelect","onNewClick"],["pTemplate","body"],["class","text-center",3,"ngSwitch","width",4,"ngFor","ngForOf"],[1,"text-center",3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[2,"height","10rem",3,"src"],[1,"text-center"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"table-card",1),e.NdJ("onLazyLoad",function(s){return a.onLazyLoad(s)})("onRowSelect",function(s){return a.onRowSelect(s)})("onNewClick",function(){return a.onNew()}),e.YNc(2,ie,1,1,"ng-template",2),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("reloading",a.loading)("globalFilter",a.globalFilter)("rows",a.rows)("pagination",a.pagination)("loading",a.loading)("cols",a.cols)("list",a.list)("showNewButton",a.user.id_rolUsuario!==a.USER))},directives:[G.r,w.jx,d.sg,d.RF,d.n9,d.ED],pipes:[M.A,d.rS,d.uU],encapsulation:2}),n})()},{path:"event",component:O},{path:"event/:id",component:O}];let le=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.Bz.forChild(oe)],u.Bz]}),n})();var se=l(8007),de=l(5055),re=l(4466),ce=l(9423);let pe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.ez,le,se.j,r.u5,b.j,de.ON,T.hJ,y.T,C.q4,re.m,ce.I,S._8,g.O,h.JF,x.L$,P.A,m.LU,E.z]]}),n})()}}]);