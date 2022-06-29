import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public phonePattern = '([\\+/][0-9]{2}) ([0-9]{1,2}) ([0-9]{4}) ([0-9]{4})';
  public documentPattern = '([0-9])?([0-9].)?([0-9]{3}).([0-9]{3})-[K|k|0-9]';
  
  public ISBNPattern = '(97(?:8|9)([ -]?)(?=\\d{1,5}\\2?\\d{1,7}\\2?\\d{1,6}\\2?\\d)(?:\\d\\2*){9}\\d)';
  public ISSNPattern = '[0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][X0-9]';
  public DOIPattern = "(10\\.[0-9a-zA-Z]+\\/(?:(?![\"&\\'])\\S)+)\\b";
  
  public ISBN: RegExp = /(97(?:8|9)([ -]?)(?=\d{1,5}\2?\d{1,7}\2?\d{1,6}\2?\d)(?:\d\2*){9}\d)/;
  public ISSN: RegExp = /[0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][X0-9]/;
  public DOI: RegExp = /(10\.[0-9a-zA-Z]+\/(?:(?!["&\'])\S)+)\b/;
  
  public validField(form: FormGroup, field: string): boolean | null{
    return (
      form.controls[field].errors &&
      (form.controls[field].touched || form.controls[field].dirty)
    );
  }

  public validCheck(form: FormGroup, field: string): boolean {
    return (
      form.controls[field].valid &&
      (form.controls[field].touched ||
        !form.controls[field].pristine ||
        (form.controls[field].untouched && form.controls[field].pristine))
    );
  }

  public mustMatch(field: string, matchingField: string): (FormGroup: FormGroup) => void {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[field];
      const matchingControl = formGroup.controls[matchingField];
      if (control.value && matchingControl.value) {
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
          control.setErrors({ mustMatch: true });
        } else {
          matchingControl.setErrors(null);
          control.setErrors(null);
        }
      }
    };
  }
  
  formatISBN(tag: string): string {
    if (!tag) return '';
    let replaceValue = '$1$2$3';
    if(tag.length <=3){
      replaceValue = '$1$2$3';
    }
    if(tag.length > 3 && tag.length <=5){
      replaceValue = '$1$2$3-$4$5';
    }
    if(tag.length > 5 && tag.length <=10){
      replaceValue = '$1$2$3-$4$5-$6$7$8$9$10';
    }
    if(tag.length > 10 && tag.length <=12){
      replaceValue = '$1$2$3-$4$5-$6$7$8$9$10-$11$12';
    }
    if(tag.length > 12 && tag.length <=13) {
      replaceValue = '$1$2$3-$4$5-$6$7$8$9$10-$11$12-$13';
    }
    return tag.replace(
      /([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?/,
      replaceValue
    );
  }
  
  formatISSN(tag: string): string {
    if (!tag) return '';
    let replaceValue = '$1$2$3$4';
    if(tag.length <=4){
      replaceValue = '$1$2$3$4';
    }
    if(tag.length > 4 && tag.length <=8){
      replaceValue = '$1$2$3$4-$5$6$7$8';
    }
    return tag.replace(
      /([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?([X0-9])?/,
      replaceValue
    );
  }
  
  formatDOI(tag: string): string {
    if (!tag) return '';
    return tag.replace(
      /([0-9]{3})([0-9]{2})([0-9]{6}([0-9]{2})-([0-9]))/,
      '$1-$2-$3-$4-$5'
    );
  }
}
