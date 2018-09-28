import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  public toggle(clickableItem: ClickableItem, clickableItemCollection: any, event: TouchEvent): void {
    clickableItem.toggle = !!!clickableItem.toggle;

    if (clickableItem.toggle && this.getCalculatedViewPortSize() < 600) {
      event.preventDefault();
    }

    clickableItemCollection.forEach((item: ClickableItem) => {
      item.toggle = false;
    });

    clickableItem.toggle = !!!clickableItem.toggle;
  }

  public getCalculatedViewPortSize(): number {
    const windowComputedStyles = window.getComputedStyle(document.documentElement);
    const windowWidth = windowComputedStyles.width;
    return Number(windowWidth.replace('px', ''));
  }
}

export interface ClickableItem {
  toggle?: boolean;
}
