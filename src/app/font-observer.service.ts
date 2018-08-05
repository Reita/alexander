import { Injectable } from '@angular/core';
import * as FontFaceObserver from 'fontfaceobserver';

@Injectable({
  providedIn: 'root'
})
export class FontObserverService {
  public listen(): Promise<[any, any, any, any]> {
    const abrilFatface = new FontFaceObserver('Abril Fatface');
    const raleway = new FontFaceObserver('Raleway');
    const roboto = new FontFaceObserver('Roboto');
    const robotoMono = new FontFaceObserver('Roboto Mono');

    return Promise.all([
      abrilFatface.load(),
      raleway.load(),
      roboto.load(),
      robotoMono.load(),
    ]);
  }
}
