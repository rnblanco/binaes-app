"use strict";(self.webpackChunkpk_thunder_frontend=self.webpackChunkpk_thunder_frontend||[]).push([[329],{5329:(xe,x,l)=>{l.r(x),l.d(x,{EventsModule:()=>be});var d=l(6895),u=l(2248),E=l(9322),c=l(8203),p=l(6894),g=l(3564),m=l(7114),e=l(8274),r=l(433),C=l(1740),S=l(805),h=l(5593),T=l(1795),w=l(5722),D=l(7011),y=l(585),F=l(3388),U=l(7772),P=l(5047),_=l(3608),N=l(529),M=l(3054),f=l(8783);function Z(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(){e.CHM(t);const n=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.delete(null==n?null:n.id_Objetivo))}),e._uU(1," Eliminar "),e.qZA()}if(2&a){const t=e.oxw(3);e.Q6J("disabled",t.isFinalizado)}}const A=function(){return{borderTopLeftRadius:"6px",borderBottomLeftRadius:"6px"}},O=function(){return{standalone:!0}};function I(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"p-tabPanel",7)(1,"div",4)(2,"textarea",8),e.NdJ("ngModelChange",function(n){const v=e.CHM(t).$implicit;return e.KtG(v.Objetivo=n)}),e.qZA(),e.TgZ(3,"button",9),e.NdJ("click",function(){const s=e.CHM(t).$implicit,v=e.oxw(2);let b;return e.KtG(v.add(null!==(b=null==s?null:s.Objetivo)&&void 0!==b?b:"",null==s?null:s.id_Objetivo))}),e._uU(4," Editar "),e.qZA(),e.YNc(5,Z,2,1,"button",10),e.qZA()()}if(2&a){const t=o.$implicit,i=o.index,n=e.oxw(2);e.MGl("header","Objetivo ",i+1,""),e.Q6J("selected",0===i),e.xp6(2),e.Akn(e.DdM(10,A)),e.Q6J("name",t.Objetivo)("ngModel",t.Objetivo)("ngModelOptions",e.DdM(11,O))("disabled",n.isFinalizado),e.xp6(1),e.Q6J("disabled",0===(null==t||null==t.Objetivo?null:t.Objetivo.length)||n.isFinalizado),e.xp6(2),e.Q6J("ngIf",n.canDelete)}}function L(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"p-tabView",1),e.YNc(1,I,6,12,"p-tabPanel",2),e.TgZ(2,"p-tabPanel",3)(3,"div",4)(4,"textarea",5),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.objective=n)}),e.qZA(),e.TgZ(5,"button",6),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.add(n.objective))}),e._uU(6," Agregar "),e.qZA()()()()}if(2&a){const t=e.oxw();e.Q6J("scrollable",t.objectives.length>=6),e.xp6(1),e.Q6J("ngForOf",t.objectives),e.xp6(1),e.s9C("pTooltip",t.isDisabled?"Se debe registrar el evento primero":""),e.Q6J("disabled",t.isDisabled),e.xp6(2),e.Akn(e.DdM(12,A)),e.s9C("pTooltip",t.isDisabled?"Se debe registrar el evento primero":""),e.Q6J("ngModel",t.objective)("ngModelOptions",e.DdM(13,O))("disabled",t.isDisabled||t.isFinalizado),e.xp6(1),e.s9C("pTooltip",t.isDisabled?"Se debe registrar el ejemplar primero":""),e.Q6J("disabled",0===(null==t.objective?null:t.objective.length)||t.isDisabled||t.isFinalizado)}}let z=(()=>{class a extends E.H{constructor(){super(),this.objectives=[],this.exemplarText="",this.selectedExemplar=[],this.disabledDates=[],this.dates=[]}ngOnInit(){this.id&&this.loadAll()}loadAll(){this.loading=!0,this.subscription.add(this.catalogService.getByNameWithParams("OBJETIVOSXEVENTO",(new N.LE).set("id_Evento",this.id)).subscribe(t=>{this.objectives=t,this.loading=!1}))}add(t,i){i?this.update(t,i):this.subscription.add(this.catalogService.addOfURL("OBJETIVOSXEVENTO",{id_Evento:this.id,Objetivo:t}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"El objetivo fue agregado correctamente"}),this.objective="",setTimeout(()=>{this.loadAll()},200)},()=>{this.messageService.setPayload({type:"error",title:"\xa1Error!",body:"El objetivo no fue agregado"})}))}update(t,i){this.subscription.add(this.catalogService.updateOfURL(`OBJETIVOSXEVENTO/${i}`,{id_Objetivo:i,id_Evento:this.id,Objetivo:t}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"El objetivo fue editado correctamente"})},()=>{this.messageService.setPayload({type:"error",title:"\xa1Error!",body:"El objetivo no fue editado"})}))}delete(t){this.subscription.add(this.catalogService.deleteOfURL(`OBJETIVOSXEVENTO/${t}`).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1Exito!",body:"El evento fue eliminado con \xe9xito"}),this.loadAll()},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo eliminar el evento"})}))}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-objectives"]],inputs:{id:"id",canDelete:"canDelete",isDisabled:"isDisabled",isFinalizado:"isFinalizado"},features:[e.qOj],decls:1,vars:1,consts:[[3,"scrollable",4,"ngIf"],[3,"scrollable"],[3,"header","selected",4,"ngFor","ngForOf"],["header","Nuevo objetivo","tooltipPosition","top",3,"disabled","pTooltip"],[1,"p-inputgroup"],["pInputTextarea","","required","","placeholder","Ej. 'Con este evento se busca lograr...'","name","objective","tooltipPosition","top",3,"ngModel","ngModelOptions","disabled","pTooltip","ngModelChange"],["pButton","","type","button","tooltipPosition","top",3,"disabled","pTooltip","click"],[3,"header","selected"],["pInputTextarea","","required","","placeholder","Ej. Con este evento se busca lograr...",3,"name","ngModel","ngModelOptions","disabled","ngModelChange"],["pButton","","type","button",3,"disabled","click"],["pButton","","type","button","class","p-button-danger",3,"disabled","click",4,"ngIf"],["pButton","","type","button",1,"p-button-danger",3,"disabled","click"]],template:function(t,i){1&t&&e.YNc(0,L,7,14,"p-tabView",0),2&t&&e.Q6J("ngIf",!i.loading)},dependencies:[d.sg,d.O5,r.Fj,r.JJ,r.Q7,r.On,h.Hq,M.g,f.xf,f.x4,_.u],encapsulation:2}),a})();var Q=l(3026),j=l(4178);function R(a,o){1&a&&(e.TgZ(0,"p"),e._uU(1,"Una vez finalizado el evento, ya no puede ser editado."),e.qZA())}function B(a,o){1&a&&(e.TgZ(0,"p-messages",5),e.YNc(1,R,2,0,"ng-template",6),e.qZA())}function V(a,o){1&a&&e._UZ(0,"app-loading",7)}function Y(a,o){if(1&a&&(e.TgZ(0,"form",8,9)(2,"div",10),e._UZ(3,"app-objectives",11),e.qZA()()),2&a){const t=e.oxw();e.xp6(3),e.Q6J("id",t.id)("canDelete",t.user.id_rolUsuario===t.SUPER_ADMIN)("isFinalizado",t.isFinalizado)("isDisabled",t.isNew)}}function H(a,o){1&a&&e._UZ(0,"app-loading",7)}function G(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"div",31)(1,"label"),e._uU(2,"Estado:"),e.qZA(),e.TgZ(3,"input",32),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw(2);return e.KtG(s.readableStatus=n)}),e.qZA()()}if(2&a){const t=e.oxw(2);e.xp6(3),e.Q6J("ngModel",t.readableStatus)("disabled",!0)}}function K(a,o){if(1&a&&(e._UZ(0,"img",34),e.ALo(1,"photo")),2&a){const t=e.oxw(3);let i;e.s9C("src",e.lcZ(1,2,t.uploadFile.uploadedFile[0]),e.LSH),e.s9C("alt",null!==(i=t.uploadFile.uploadedFile[0])&&void 0!==i?i:"No disponible")}}function $(a,o){if(1&a&&e.YNc(0,K,2,4,"img",33),2&a){const t=e.oxw(2);e.Q6J("ngIf",t.uploadFile.uploadedFile[0]&&!t.uploadFile.selectedfiles[0])}}function k(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"div",35)(1,"button",36),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.delete())}),e.qZA()()}if(2&a){const t=e.oxw(2);e.xp6(1),e.Q6J("loading",t.deleteLoading)}}const q=function(a){return{"p-sm-6":a}},X=function(a,o){return{"p-col-6 p-sm-9":a,"p-col-12":o}};function W(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"form",8,12)(2,"div",13)(3,"label"),e._uU(4,"Nombre del evento:"),e.qZA(),e.TgZ(5,"div",14)(6,"input",15),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.title=n)}),e.qZA()()(),e.TgZ(7,"div",16)(8,"label"),e._uU(9,"Capacidad:"),e.qZA(),e.TgZ(10,"p-inputNumber",17),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.areaSelect.capacity=n)}),e.qZA()(),e.TgZ(11,"div",18)(12,"label"),e._uU(13,"\xc1rea:"),e.qZA(),e.TgZ(14,"p-multiSelect",19,20),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.areaSelect.selectedArea=n)})("onFilter",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.areaSelect.areaFilter(n))})("onChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.areaSelect.areaChange(n))}),e.qZA()(),e.TgZ(16,"div",21)(17,"label"),e._uU(18,"Rango de fechas:"),e.qZA(),e.TgZ(19,"p-calendar",22),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.areaSelect.dates=n)})("onSelect",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.onDateChange())}),e.qZA()(),e.YNc(20,G,4,2,"div",23),e.TgZ(21,"div",24)(22,"label"),e._uU(23,"Logo del evento:"),e.qZA(),e.TgZ(24,"p-fileUpload",25),e.NdJ("onSelect",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.uploadFile.onSelectFile(n))})("onUpload",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.uploadFile.onUpload(n))}),e.YNc(25,$,1,1,"ng-template",26),e.qZA()(),e.TgZ(26,"div",27)(27,"div",28)(28,"button",29),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.add())}),e.ALo(29,"addOrEdit"),e.qZA()(),e.YNc(30,k,2,1,"div",30),e.qZA()()}if(2&a){const t=e.oxw();e.xp6(6),e.s9C("pTooltip",t.isFinalizado?"No se pueden editar eventos finalizados":""),e.Q6J("ngModel",t.title)("disabled",t.isFinalizado),e.xp6(4),e.MGl("suffix"," persona",1!==t.areaSelect.capacity?"s":"",""),e.Q6J("disabled",!0)("ngModel",t.areaSelect.capacity)("showButtons",!0)("min",0)("max",1e3),e.xp6(4),e.s9C("pTooltip",t.isFinalizado?"No se pueden editar eventos finalizados":""),e.Q6J("options",t.areaSelect.areas)("ngModel",t.areaSelect.selectedArea)("showToggleAll",!1)("showClear",!0)("resetFilterOnHide",!0)("disabled",t.isFinalizado),e.xp6(2),e.Q6J("ngClass",e.VKq(36,q,t.isNew)),e.xp6(3),e.s9C("pTooltip",t.isFinalizado?"No se pueden editar eventos finalizados":""),e.Q6J("disabledDates",t.areaSelect.disabledDates)("ngModel",t.areaSelect.dates)("minDate",t.minDate)("maxDate",t.maxDate)("selectOtherMonths",!0)("disabled",t.isFinalizado),e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(4),e.s9C("pTooltip",t.isFinalizado?"No se pueden editar eventos finalizados":""),e.Q6J("showUploadButton",!1)("showCancelButton",!1)("disabled",t.isFinalizado),e.xp6(3),e.Q6J("ngClass",e.WLB(38,X,t.user.id_rolUsuario===t.SUPER_ADMIN&&!t.isNew,t.isNew||t.user.id_rolUsuario!==t.SUPER_ADMIN)),e.xp6(1),e.Q6J("loading",t.addLoading)("label",e.lcZ(29,34,t.isNew))("disabled",!t.formIsValid||t.isFinalizado),e.xp6(2),e.Q6J("ngIf",t.user.id_rolUsuario===t.SUPER_ADMIN&&!t.isNew)}}const ee=function(a){return{"p-mt-4":a}};let J=(()=>{class a extends E.H{constructor(t,i,n){super(),this.route=t,this.uploadFile=i,this.areaSelect=n,this.SUPER_ADMIN=p.G.SUPER_ADMIN,this.isNew=!0,this.loadedStatus=!0,this.minDate=new Date,this.addLoading=!1,this.deleteLoading=!1}ngOnInit(){this.uploadFile=new g.R,this.areaSelect=new m.h,this.loadAll(),this.user=this.authService.storagedUser,this.breadcrumbService.setItems(this.getBreadCrumbs())}get formIsValid(){return""!==this.title&&this.areaSelect.selectedArea?.length>0&&void 0!==this.areaSelect.dates[0]&&void 0!==this.areaSelect.dates[1]&&(void 0!==this.uploadFile.uploadedFiles||this.uploadFile.uploadedFile?.length>0)}get isFinalizado(){return!this.loadedStatus}changeStatus(){this.readableStatus=this.selectedStatus?"Reservado":"Finalizado"}loadAll(){this.user.ROLUSUARIO.id_rolUsuario===p.G.USER&&(this.messageService.setPayload({type:"warn",title:"Error",body:"No tienes autorizaci\xf3n para ver esta informaci\xf3n"}),setTimeout(()=>{this.router.navigate([c.u.eventsPage])},50)),this.subscription.add(this.route.params.subscribe(({id:t})=>{this.loading=!0,this.areaSelect.loadAreas(),t?(this.id=t,this.loadInfo()):this.loading=!1}))}loadInfo(){this.subscription.add(this.catalogService.getByNameWithParams(`EVENTO/${this.id}`).subscribe(t=>{t&&(this.isNew=!1),this.id=t.id_Evento,this.areaSelect.selectedArea.push(t.AREA.id_Area),this.areaSelect.dates=[new Date(t.fh_Inicio),new Date(t.fh_Finalizacion)],this.maxDate=new Date(t.fh_Finalizacion),this.minDate=new Date(t.fh_Inicio),this.title=t.titulo,this.areaSelect.capacity=t.capacidad,this.selectedStatus=t.aprobado,this.loadedStatus=t.aprobado,this.changeStatus(),this.uploadFile.uploadedFile.push(t.imagen),setTimeout(()=>{this.loading=!1},200)},()=>{this.loading=!1,this.router.navigate([c.u.eventPage])}))}add(){this.isNew?(void 0!==this.uploadFile.uploadedFiles&&this.uploadFile.uploadFile(),this.addLoading=!0,this.subscription.add(this.catalogService.addOfURL("EVENTO",{imagen:this.uploadFile.varbinaryImage,titulo:this.title,capacidad:this.areaSelect.capacity,fh_Inicio:this.areaSelect.dates[0],fh_Finalizacion:this.areaSelect.dates[1],id_areaRealizacion:this.areaSelect.selectedArea[0],aprobado:!0}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1\xc9xito!",body:"El evento fue a\xf1adido satifactoriamente"}),setTimeout(()=>{this.router.navigate([c.u.eventsPage])},200),this.addLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo a\xf1adir el evento"}),this.addLoading=!1}))):this.update()}update(){void 0!==this.uploadFile.uploadedFiles&&this.uploadFile.uploadFile(),this.addLoading=!0,this.subscription.add(this.catalogService.updateOfURL(`EVENTO/${this.id}`,{imagen:void 0===this.uploadFile.varbinaryImage?btoa(this.uploadFile.uploadedFile[0]):this.uploadFile.varbinaryImage,id_Evento:this.id,titulo:this.title,capacidad:this.areaSelect.capacity,aprobado:this.selectedStatus,fh_Inicio:this.areaSelect.dates[0],fh_Finalizacion:this.areaSelect.dates[1],id_areaRealizacion:this.areaSelect.selectedArea[0]}).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1\xc9xito!",body:"El evento fue editado satifactoriamente"}),setTimeout(()=>{this.router.navigate([c.u.eventsPage])},200),this.addLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo editar el evento"}),this.addLoading=!1}))}delete(){this.deleteLoading=!0,this.subscription.add(this.catalogService.deleteOfURL(`EVENTO/${this.id}`).subscribe(()=>{this.messageService.setPayload({type:"success",title:"\xa1\xc9xito!",body:"El evento fue eliminado con \xe9xito"}),setTimeout(()=>{this.router.navigate([c.u.eventsPage])},200),this.deleteLoading=!1},()=>{this.messageService.setPayload({type:"warn",title:"Error",body:"No se pudo eliminar el evento"}),this.deleteLoading=!1}))}onDateChange(){if(null===this.areaSelect.dates[0]||null===this.areaSelect.dates[1])return;this.isNew||(this.selectedStatus=!(this.areaSelect.dates[1]<this.maxDate)&&this.loadedStatus,this.readableStatus=this.selectedStatus?"Reservado":"Finalizado");let t=[];const i=new Date(this.areaSelect.dates[0].getTime());for(;this.areaSelect.dates[1]>i||this.areaSelect.dates[1].getDate()===i.getDate();)t.push(new Date(i.getTime())),i.setDate(i.getDate()+1);t.forEach(n=>{this.areaSelect.disabledDates.forEach(s=>{n.getDate()!==s.getDate()||(this.areaSelect.dates=[])})})}getBreadCrumbs(){return[{label:"Eventos",routerLink:[this.routeInformation.eventsPage]},{label:"Evento",routerLink:[this.routeInformation.eventPage]}]}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(u.gz),e.Y36(g.R),e.Y36(m.h))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-event-page"]],features:[e.qOj],decls:7,vars:8,consts:[["severity","warn","class","p-col-12",4,"ngIf"],[1,"card","p-mt-0",3,"ngClass"],["class","p-d-flex p-ai-center p-jc-center","style","height: 80%",4,"ngIf"],["autocomplete","off","class","p-fluid p-formgrid p-grid p-formgrid-sm p-ml-2 p-mr-2",4,"ngIf"],[1,"card","p-mt-4"],["severity","warn",1,"p-col-12"],["pTemplate",""],[1,"p-d-flex","p-ai-center","p-jc-center",2,"height","80%"],["autocomplete","off",1,"p-fluid","p-formgrid","p-grid","p-formgrid-sm","p-ml-2","p-mr-2"],["form2","ngForm"],[1,"p-col-12","p-mb-2"],[3,"id","canDelete","isFinalizado","isDisabled"],["form","ngForm"],[1,"p-field","p-col-12","p-sm-8"],[1,"p-input-icon-right"],["name","title","placeholder","Ej. Charla Uso correcto de la BINAES App","pInputText","","tooltipPosition","top",3,"ngModel","disabled","pTooltip","ngModelChange"],[1,"p-field","p-col-12","p-sm-4"],["pTooltip","La capacidad depende del \xe1rea","tooltipPosition","top","name","capacity","inputId","minmax-buttons","placeholder","Ej. 200 personas",3,"disabled","ngModel","showButtons","min","max","suffix","ngModelChange"],[1,"p-field","p-col-12","p-sm-6","p-mt-2"],["name","selectedArea","defaultLabel","Elige un \xe1rea","optionLabel","nombre","optionValue","id_Area","emptyFilterMessage","No se encontraron \xe1reas","emptyMessage","No se encontraron \xe1reas","tooltipPosition","top",3,"options","ngModel","showToggleAll","showClear","resetFilterOnHide","disabled","pTooltip","ngModelChange","onFilter","onChange"],["areaMultiSelect",""],[1,"p-field","p-col-12","p-sm-4","p-mt-2",3,"ngClass"],["selectionMode","range","name","dates","dateFormat","dd/mm/yy","placeholder","Elige un rango de fechas para tu evento","tooltipPosition","top",3,"disabledDates","ngModel","minDate","maxDate","selectOtherMonths","disabled","pTooltip","ngModelChange","onSelect"],["class","p-field p-col-12 p-sm-2 p-mt-2",4,"ngIf"],[1,"p-field","p-col-12","p-mt-2"],["name","demo[]","chooseLabel","Agregar","invalidFileTypeMessageSummary","{0}: Este formato de archivo no es v\xe1lido.","invalidFileTypeMessageDetail","tipos v\xe1lidos: {0}","accept","image/png","tooltipPosition","top",3,"showUploadButton","showCancelButton","disabled","pTooltip","onSelect","onUpload"],["pTemplate","content"],[1,"p-col-12","p-grid","p-mt-2","p-mt-2","p-ml-0","p-mr-0","p-pl-0","p-pr-0"],[3,"ngClass"],["pButton","","pRipple","","type","button",1,"p-button-success",3,"loading","label","disabled","click"],["class","p-field p-col-6 p-sm-3",4,"ngIf"],[1,"p-field","p-col-12","p-sm-2","p-mt-2"],["type","text","pInputText","","name","eventStatus",3,"ngModel","disabled","ngModelChange"],["style","height:10em","class","p-ml-2",3,"src","alt",4,"ngIf"],[1,"p-ml-2",2,"height","10em",3,"src","alt"],[1,"p-field","p-col-6","p-sm-3"],["pButton","","pRipple","","type","button","label","Eliminar","icon","pi pi-trash",1,"p-button-danger",3,"loading","click"]],template:function(t,i){1&t&&(e.YNc(0,B,2,0,"p-messages",0),e.TgZ(1,"div",1),e.YNc(2,V,1,0,"app-loading",2),e.YNc(3,Y,4,4,"form",3),e.qZA(),e.TgZ(4,"div",4),e.YNc(5,H,1,0,"app-loading",2),e.YNc(6,W,31,41,"form",3),e.qZA()),2&t&&(e.Q6J("ngIf",i.isFinalizado),e.xp6(1),e.Q6J("ngClass",e.VKq(6,ee,!i.isFinalizado)),e.xp6(1),e.Q6J("ngIf",i.loading),e.xp6(1),e.Q6J("ngIf",!i.loading),e.xp6(2),e.Q6J("ngIf",i.loading),e.xp6(1),e.Q6J("ngIf",!i.loading))},dependencies:[d.mk,d.O5,r._Y,r.Fj,r.JJ,r.JL,r.On,r.F,C.o,S.jx,h.Hq,T.H,w.NU,D.N,y.f,F.p,U.V,P.Rn,_.u,z,Q.p,j.A],encapsulation:2}),a})();var te=l(9908),ae=l(414);function ie(a,o){if(1&a&&(e.ynx(0),e._UZ(1,"img",7),e.ALo(2,"photo"),e.BQk()),2&a){const t=e.oxw(2).rowData;e.xp6(1),e.Q6J("src",e.lcZ(2,1,null==t?null:t.imagen),e.LSH)}}function ne(a,o){if(1&a&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&a){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t?null:t.titulo)," ")}}function oe(a,o){if(1&a&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&a){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t||null==t.AREA?null:t.AREA.nombre)," ")}}function le(a,o){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",null==t?null:t.capacidad," ")}}function se(a,o){if(1&a&&(e.ynx(0),e.TgZ(1,"div",8)(2,"span"),e._uU(3),e.qZA()(),e.BQk()),2&a){const t=e.oxw(2).rowData;e.xp6(2),e.Gre("'p-pt-1 p-pb-1 aprove-badge ",null!=t&&t.aprobado?"Reservado":"Finalizado","s"),e.xp6(1),e.hij("",null!=t&&t.aprobado?"Reservado":"Finalizado","s")}}function de(a,o){if(1&a&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.BQk()),2&a){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.xi3(2,1,null==t?null:t.fh_Inicio,"dd-MM-yyyy")," ")}}function re(a,o){if(1&a&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.BQk()),2&a){const t=e.oxw(2).rowData;e.xp6(1),e.hij(" ",e.xi3(2,1,null==t?null:t.fh_Finalizacion,"dd-MM-yyyy")," ")}}function ce(a,o){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const t=e.oxw().$implicit,i=e.oxw().rowData;e.xp6(1),e.hij(" ",i[t.field]," ")}}function pe(a,o){if(1&a&&(e.TgZ(0,"td",4),e.YNc(1,ie,3,3,"ng-container",5),e.YNc(2,ne,3,3,"ng-container",5),e.YNc(3,oe,3,3,"ng-container",5),e.YNc(4,le,2,1,"ng-container",5),e.YNc(5,se,4,4,"ng-container",5),e.YNc(6,de,3,4,"ng-container",5),e.YNc(7,re,3,4,"ng-container",5),e.YNc(8,ce,2,1,"ng-container",6),e.qZA()),2&a){const t=o.$implicit;e.Udp("width",t.width,"px"),e.Q6J("ngSwitch",t.field),e.xp6(1),e.Q6J("ngSwitchCase","imagen"),e.xp6(1),e.Q6J("ngSwitchCase","titulo"),e.xp6(1),e.Q6J("ngSwitchCase","AREA.nombre"),e.xp6(1),e.Q6J("ngSwitchCase","capacidad"),e.xp6(1),e.Q6J("ngSwitchCase","aprobado"),e.xp6(1),e.Q6J("ngSwitchCase","fh_Inicio"),e.xp6(1),e.Q6J("ngSwitchCase","fh_Finalizacion")}}function ue(a,o){1&a&&e.YNc(0,pe,9,10,"td",3),2&a&&e.Q6J("ngForOf",o.columns)}const ge=[{path:"",component:(()=>{class a extends te.c{constructor(){super(),this.USER=p.G.USER,this.cols=[{field:"titulo",header:"T\xedtulo",width:100},{field:"imagen",header:"Imagen",width:100},{field:"AREA.nombre",header:"\xc1rea",width:100},{field:"capacidad",header:"Capacidad",width:10},{field:"aprobado",header:"Estado",width:10},{field:"fh_Inicio",header:"Inicio",width:100},{field:"fh_Finalizacion",header:"Fin",width:100}]}ngOnInit(){this.loadAll(),this.user=this.authService.storagedUser,this.breadcrumbService.setItems(this.getBreadCrumbs())}loadAll(){this.list=[],this.loading=!0,this.getPaginationParams(),this.subscription.add(this.catalogService.getByNameWithParams("EVENTO",this.httpParams).subscribe(t=>{this.pagination=t.meta,this.currentPage=this.pagination.currentPage,this.list=t.data,this.loading=!1},()=>this.loading=!1))}onLazyLoad(t){this.paginate(t),this.loadAll()}onNew(){this.user.id_rolUsuario!==p.G.USER&&this.router.navigate([`${this.routeInformation.eventPage}/`])}onRowSelect({data:t}){this.user.id_rolUsuario!==p.G.USER&&this.router.navigate([`${this.routeInformation.eventPage}/${t.id_Evento}/`])}getBreadCrumbs(){return[{label:"Eventos",routerLink:[this.routeInformation.eventsPage]}]}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-events-page"]],features:[e.qOj],decls:3,vars:8,consts:[[1,"p-mt-4"],["newButtonLabel","Nuevo evento","type","eventos",3,"reloading","globalFilter","rows","pagination","loading","cols","list","showNewButton","onLazyLoad","onRowSelect","onNewClick"],["pTemplate","body"],["class","text-center",3,"ngSwitch","width",4,"ngFor","ngForOf"],[1,"text-center",3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[2,"height","8rem",3,"src"],[1,"text-center"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"table-card",1),e.NdJ("onLazyLoad",function(s){return i.onLazyLoad(s)})("onRowSelect",function(s){return i.onRowSelect(s)})("onNewClick",function(){return i.onNew()}),e.YNc(2,ue,1,1,"ng-template",2),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("reloading",i.loading)("globalFilter",i.globalFilter)("rows",i.rows)("pagination",i.pagination)("loading",i.loading)("cols",i.cols)("list",i.list)("showNewButton",i.user.id_rolUsuario!==i.USER))},dependencies:[d.sg,d.RF,d.n9,d.ED,ae.r,S.jx,d.rS,d.uU,j.A],encapsulation:2}),a})()},{path:"event",component:J},{path:"event/:id",component:J}];let me=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[u.Bz.forChild(ge),u.Bz]}),a})();var he=l(6311),_e=l(8433),fe=l(4466),ve=l(9423);let be=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[g.R,m.h],imports:[d.ez,me,he.j,r.u5,C.j,_e.ON,h.hJ,T.T,w.q4,fe.m,ve.I,y._8,F.O,N.JF,P.L$,M.A,f.LU,_.z]}),a})()}}]);