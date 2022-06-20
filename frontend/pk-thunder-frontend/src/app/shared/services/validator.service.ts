import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public phonePattern = '([\\+/][0-9]{2}) ([0-9]{1,2}) ([0-9]{4}) ([0-9]{4})';
  public documentPattern = '([0-9])?([0-9].)?([0-9]{3}).([0-9]{3})-[K|k|0-9]';
  public documentMask: RegExp = /[K|k|0-9]/;
  public phoneMask: RegExp = /[0-9]/;
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

  public validAddress(control: AbstractControl) {
    if (!control.value) return { invalidAddress: true };
    if (
      (control.value?.country ||
        control.value?.country === null ||
        control.value?.country === '') &&
      (control.value?.state ||
        control.value?.state === null ||
        control.value?.state === '') &&
      (control.value?.city ||
        control.value?.city === null ||
        control.value?.city === '') &&
      (control.value?.street ||
        control.value?.street === null ||
        control.value?.street === '') &&
      (control.value?.streetNumber ||
        control.value?.streetNumber === null ||
        control.value?.streetNumber === '') &&
      (control.value?.location || control.value?.location === null) &&
      (control.value?.formattedAddress ||
        control.value?.formattedAddress === null)
    ) {
      return null;
    }
    return { invalidAddress: true };
  }

  formatDocument(document: string): string {
    if (!document) return '';
    if (document.length >= 9)
      return document.replace(
        /([0-9]{2})([0-9]{3})([0-9]{3})([k|K|0-9])/,
        '$1.$2.$3-$4'
      );
    if (document.length >= 8) {
      return document.replace(
        /([0-9])([0-9]{3})([0-9]{3})([k|K|0-9])/,
        '$1.$2.$3-$4'
      );
    } else
      return document.replace(/([0-9]{3})([0-9]{3})([k|K|0-9])/, '$1.$2-$3');
  }

  formatPhone(phone: string): string {
    if (!phone) return '';
    if (phone.length >= 12)
      return phone.replace(
        /([0-9]{2})([0-9]{2})([0-9]{4})([0-9]{4})/,
        '+$1 $2 $3 $4'
      );
    if (phone.length >= 11)
      return phone.replace(
        /([0-9]{2})([0-9])([0-9]{4})([0-9]{4})/,
        '+$1 $2 $3 $4'
      );
    return phone.replace(
      /([0-9]{2})([0-9])?([0-9]{4})?([0-9]{4})?/,
      phone.length <= 2
        ? '+$1'
        : phone.length <= 4
        ? '+$1 $2'
        : phone.length <= 8
        ? '+$1 $2 $3'
        : '+$1 $2 $3 $4'
    );
  }
}
