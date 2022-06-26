import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'photo',
})
export class PhotoPipe implements PipeTransform {
  transform( photo: string, error: string = 'assets/images/not-available.png'): string {
    if(!photo){
      return error;
    }
    return `${environment.api_url.replace('/api', '')}/images/${photo}`;
  }
}