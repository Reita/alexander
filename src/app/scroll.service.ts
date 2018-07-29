import { Injectable, ElementRef, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private renderer: Renderer2;
  private elementRef: HTMLElement;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public listen(elementRef: HTMLElement): void {
    const parentNode = this.renderer.parentNode(elementRef);
    this.elementRef = elementRef;
    console.log(parentNode);
    this.renderer.listen(parentNode, 'scroll', this.scrollListener.bind(this));
  }

  private scrollListener(): void {
    console.log(this.elementRef);
  }
}
