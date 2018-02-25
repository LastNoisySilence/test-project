import {AfterViewInit, Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appController]',
  host: {
    '[style.position]': '"relative"',
    '[style.display]': '"block"'
  }
})
export class ControllerDirective implements AfterViewInit {

  constructor(public el: ElementRef, public renderer: Renderer) {

  }

  ngAfterViewInit() {
    this.el.nativeElement.children[0].insertAdjacentHTML('beforebegin', `
      <div
        style="position: absolute; z-index: 1; right: 5px; top: 5px;">
        <span
          uk-icon="icon: move; ratio: 1"
          style="cursor:move; cursor:-webkit-grab; cursor:-moz-grab; cursor:grab;">
        </span>
        <span
          uk-icon="icon: close; ratio: 1"
          style="cursor: pointer"
          id="closeBtn">
        </span>
      </div>
    `);
    this.renderer.listen(
      this.el.nativeElement.querySelector('#closeBtn'),
      'click', (event) => this.destroyElement()
    );
  }

  destroyElement() {
    this.el.nativeElement.parentElement.remove();
  }

}
