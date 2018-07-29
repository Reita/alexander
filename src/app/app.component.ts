import { Component, HostListener, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public title = 'Ale Alexander | Portfolio';
  public enableSmallNav = false;
  public enableOverlayNav = false;

  private window: Window = window;
  private menuHeight = 0;

  @ViewChild('apMenu') apMenu: MenuComponent;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowScrollPosition = this.window.scrollY;
    const windowsHeight = this.window.innerHeight;

    this.enableSmallNav = windowScrollPosition > windowsHeight;
    this.enableOverlayNav = windowScrollPosition > windowsHeight;
  }

  ngAfterViewInit() {
    this.menuHeight = this.apMenu.elementRef.nativeElement.offsetHeight;
  }
}
