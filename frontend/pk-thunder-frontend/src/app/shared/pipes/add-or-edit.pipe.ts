import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addOrEdit',
})
export class AddOrEditPipe implements PipeTransform {
  transform(isNew: boolean): string {
    return isNew ? 'Agregar' : 'Editar';
  }
}
