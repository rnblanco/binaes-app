import { Component, Input, OnInit } from '@angular/core';
import { Objetivo } from '../../../shared/models/event';
import { Ejemplar } from '../../../shared/models/exemplar';
import { HttpParams } from '@angular/common/http';
import { BaseComponent } from '../../../shared/components/base.component';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
})
export class ObjectivesComponent extends BaseComponent implements OnInit {
  
  @Input() id: number;
  @Input() canDelete: boolean;
  @Input() isDisabled: boolean;
  @Input() isFinalizado: boolean;
  
  constructor() {
    super();
  }
  
  public ngOnInit(): void {
    if(this.id) {
      this.loadAll();
    }
  }

  public objective: string;
  public objectives: Objetivo[] = [];
  
  public exemplarText: string ='';
  public exemplars: Ejemplar[];
  public selectedExemplar: number[] = [];
  
  public disabledDates: Date[] = [];
  public dates: Date[] = [];
  
  public loadAll(): void {
    this.loading = true;
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('OBJETIVOSXEVENTO', new HttpParams().set('id_Evento', this.id))
      .subscribe(
        (response: Objetivo[]) => {
          this.objectives = response;
          this.loading = false;
        },
      )
    );
  }
  
  public add(objective: string, id?: number ): void {
    if(id){
      this.update(objective, id);
      return;
    }
    this.subscription.add(
      this.catalogService
      .addOfURL(`OBJETIVOSXEVENTO`, {
        id_Evento: this.id,
        Objetivo: objective
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El objetivo fue agregado correctamente',
          });
          this.objective = '';
          setTimeout(() => {
            this.loadAll();
          }, 200);
        },
        () => {
          this.messageService.setPayload({
            type: 'error',
            title: '¡Error!',
            body: 'El objetivo no fue agregado',
          });
        }
      )
    );
  }
  
  public update(objective: string, id: number): void {
    this.subscription.add(
      this.catalogService
      .updateOfURL(`OBJETIVOSXEVENTO/${id}`, {
        id_Objetivo: id,
        id_Evento: this.id,
        Objetivo: objective
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El objetivo fue editado correctamente',
          });
        },
        () => {
          this.messageService.setPayload({
            type: 'error',
            title: '¡Error!',
            body: 'El objetivo no fue editado',
          });
        }
      )
    );
  }
  
  public delete(id: number | undefined){
    this.subscription.add(
      this.catalogService.deleteOfURL(`OBJETIVOSXEVENTO/${id}`).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El evento fue eliminado con éxito',
          });
          this.loadAll();
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar el evento',
          });
        }
      )
    );
  }
}
