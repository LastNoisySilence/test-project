import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { ResizableWrapperComponent } from './components/resizable-wrapper/resizable-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    ResizableModule
  ],
  declarations: [
    ResizableWrapperComponent
  ],
  exports: [
    ResizableWrapperComponent
  ]
})
export class ShareModule { }
