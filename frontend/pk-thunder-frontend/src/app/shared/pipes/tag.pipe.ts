import { Pipe, PipeTransform } from '@angular/core';
import { ValidatorService } from '../services/validator.service';
import { TagType } from '../constants/tag-type';

@Pipe({
  name: 'tag',
})
export class TagPipe implements PipeTransform {
  validatorService: ValidatorService;

  constructor(validatorService: ValidatorService) {
    this.validatorService = validatorService;
  }

  transform(value: string, tagType: number): string {
    if (!value) return '';
    value = value.replace(this.getSearchValue(tagType), '').slice(0, this.getLength(value, tagType));
    if (!value) return '';
    if (this.getPattern(value, tagType))
      return value;
    return this.getFormat(value, tagType);
  }
  
  getSearchValue(tagType: number): RegExp {
    if(tagType === TagType.ISBN) {
      return /[^0-9]/g;
    }
    if(tagType === TagType.ISSN) {
      return /[^X0-9]|/g;
    }
    return /[]/;
  }
  
  getLength(value: string, tagType: number): number{
    if(tagType === TagType.ISBN) {
      return 13;
    }
    if(tagType === TagType.ISSN) {
      return 8;
    }
    return value.length;
  }
  
  getPattern(value: string, tagType: number) {
    if(tagType === TagType.ISBN) {
      return this.validatorService.ISBNPattern.match(value) && value?.length > 13
    }
    if(tagType === TagType.ISSN) {
      return this.validatorService.ISSNPattern.match(value) && value?.length > 8
    }
    return this.validatorService.DOIPattern.match(value)
  }
  
  getFormat(value: string, tagType: number){
    if(tagType === TagType.ISBN) {
      return this.validatorService.formatISBN(value)
    }
    if(tagType === TagType.ISSN) {
      return this.validatorService.formatISSN(value)
    }
    return this.validatorService.formatDOI(value)
  }
}
