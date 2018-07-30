import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVisible]'
})
export class VisibleDirective {
  @Input('appVisible') appVisible: string;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = this.elementRef.nativeElement;

    if (!this.isElementInViewport(element)) {
      this.renderer.removeClass(element, this.appVisible);
    }

    if (this.isElementInViewport(element)) {
      this.renderer.addClass(element, this.appVisible);
    }
  }

  private isElementInViewport(element: HTMLElement): boolean {
    const clientRect = element.getBoundingClientRect();
    const elementHeight = clientRect.height;

    return clientRect.bottom > 0 &&
      clientRect.right > 0 &&
      clientRect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      clientRect.top < ((window.innerHeight || document.documentElement.clientHeight)) - 4 * elementHeight;
  }

}
