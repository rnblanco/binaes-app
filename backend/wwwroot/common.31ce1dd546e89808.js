"use strict";(self.webpackChunkpk_thunder_frontend=self.webpackChunkpk_thunder_frontend||[]).push([[592],{8679:(_,h,s)=>{s.d(h,{u:()=>e,N:()=>a});var e=(()=>{return(n=e||(e={}))[n.EN_PRESTAMO=1]="EN_PRESTAMO",n[n.FINALIZADO=2]="FINALIZADO",n[n.RESERVADO=3]="RESERVADO",e;var n})(),a=(()=>{return(n=a||(a={}))[n.FINALIZADO=0]="FINALIZADO",n[n.EN_CURSO=1]="EN_CURSO",a;var n})()},4178:(_,h,s)=>{s.d(h,{A:()=>n});var e=s(2340),a=s(7587);let n=(()=>{class o{transform(t,r="assets/images/not-available.png"){return t?`${e.N.api_url.replace("/api","")}/images/${t}`:r}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275pipe=a.Yjl({name:"photo",type:o,pure:!0}),o})()},3407:(_,h,s)=>{s.d(h,{g:()=>o,A:()=>d});var e=s(7587),a=s(9808),n=s(2382);let o=(()=>{class t{constructor(i,l,p,u){this.el=i,this.ngModel=l,this.control=p,this.cd=u,this.onResize=new e.vpe}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(i){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}onFocus(i){this.autoResize&&this.resize(i)}onBlur(i){this.autoResize&&this.resize(i)}resize(i){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(i||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.SBq),e.Y36(n.On,8),e.Y36(n.a5,8),e.Y36(e.sBO))},t.\u0275dir=e.lG2({type:t,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(i,l){1&i&&e.NdJ("input",function(u){return l.onInput(u)})("focus",function(u){return l.onFocus(u)})("blur",function(u){return l.onBlur(u)}),2&i&&e.ekj("p-filled",l.filled)("p-inputtextarea-resizable",l.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}}),t})(),d=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.ez]]}),t})()}}]);