import { Component, HostListener, ElementRef, Renderer2, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { FontObserverService } from './font-observer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  public title = 'Ale Alexander | Portfolio';
  public enableOverlayNav = false;
  public enableMobileOverlay = false;

  private window: Window = window;
  private menuHeight = 0;

  constructor(
    private fontObserver: FontObserverService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @ViewChild('apMenu') apMenu: MenuComponent;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowScrollPosition = this.window.scrollY;
    const windowHeight = this.window.innerHeight;

    this.enableOverlayNav = windowScrollPosition > windowHeight;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.updateCalculatedViewportHeight();
  }

  ngOnInit() {
    this.fontObserver.listen().then(() => {
      this.renderer.removeClass(this.elementRef.nativeElement, 'ap-fout');
    });

    this.updateCalculatedViewportHeight();
  }

  ngAfterViewInit() {
    this.menuHeight = this.apMenu.elementRef.nativeElement.offsetHeight;
  }

  public onClick(flag: boolean) {
    this.enableMobileOverlay = flag;

    this.toggleScroll();
  }

  private updateCalculatedViewportHeight(): void {
    document.documentElement.style.setProperty(`--root-height`, `${this.window.innerHeight}px`);
  }

  private toggleScroll() {
    const bodyElement = document.querySelector('body');
    if (this.enableMobileOverlay) {
      this.renderer.addClass(bodyElement, 'ap-no-scroll');
    } else {
      this.renderer.removeClass(bodyElement, 'ap-no-scroll');
    }
  }
}
