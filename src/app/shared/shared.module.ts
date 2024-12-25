import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReverseStringPipe } from './pipe/reverse-string.pipe';
import { IfConditionDirective } from './directive/if-condition.directive';
import { HoverDirective } from './directive/hover.directive';
import { ModalComponent } from './component/modal/modal.component';

@NgModule({
  declarations: [
    ReverseStringPipe,
    IfConditionDirective,
    HoverDirective,
    ModalComponent
  ],
  providers: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
