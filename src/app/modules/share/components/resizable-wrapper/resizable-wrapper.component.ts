import { Component, ElementRef, ViewChild } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';


@Component({
  selector: 'app-resizable-wrapper',
  templateUrl: './resizable-wrapper.component.html',
  styleUrls: ['./resizable-wrapper.component.css']
})
export class ResizableWrapperComponent {
  public style: object = {};
  @ViewChild('content') content: ElementRef;


  onResizeEnd(event: ResizeEvent): void {
    const chartWrapper = this.content.nativeElement.getElementsByClassName('chart-wrapper')[0];
    this.style = {
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
    if (chartWrapper) {
      chartWrapper.style.minHeight = `${(event.rectangle.height - 100)}px`;
    }
    window.dispatchEvent(new Event('resize'));
  }
}
