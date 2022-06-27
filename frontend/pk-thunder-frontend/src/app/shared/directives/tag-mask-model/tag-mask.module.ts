import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagMaskDirective } from './tag-mask.directive';

@NgModule({
  declarations: [TagMaskDirective],
  imports: [CommonModule],
  exports: [TagMaskDirective],
})
export class TagMaskModule {}
