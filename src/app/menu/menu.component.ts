import { Component, ElementRef, AfterViewInit, Renderer2, ViewChildren, QueryList, HostBinding } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {
  @ViewChildren('menuItem') menuList: QueryList<ElementRef>;
  @HostBinding('class.ap-menu_overlay_focused') menuFocused = false;

  constructor(
    private renderer: Renderer2,
    public elementRef: ElementRef
  ) { }

  ngAfterViewInit() {
    this.menuList.forEach((menuItem: ElementRef) => {
      const menuElement = menuItem.nativeElement;

      this.renderer.listen(menuElement, 'focus', (event: Event) => {
        this.menuFocused = this.menuList.some((element: ElementRef) => {
          return event.target === element.nativeElement;
        });
      });

      this.renderer.listen(menuElement, 'blur', (event: Event) => {
        this.menuFocused = this.menuList.some((element: ElementRef) => {
          return document.activeElement === element.nativeElement;
        });
      });

    });
  }
}
