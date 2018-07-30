import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { VisibleDirective } from './visible.directive';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    MenuComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    VisibleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
