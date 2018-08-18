import { Component } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public contactItems: ContactItem[] = [
    {
      ariaLabel: `Link to Ale Alexander's resume in PDF format`,
      link: '/assets/resume.pdf',
      iconClass: 'far fa-file-pdf',
      text: 'Resume'
    },
    {
      ariaLabel: `Link to Ale Alexander's Behance profile`,
      link: 'https://www.behance.net/alealexander',
      iconClass: 'fab fa-behance',
      text: 'Behance'
    },
    {
      ariaLabel: `Link to Ale Alexander's Twitter profile`,
      link: 'https://twitter.com/Horror_neko',
      iconClass: 'fab fa-twitter',
      text: 'Twitter'
    },
    {
      ariaLabel: `Link to Ale Alexander's Instagram account`,
      link: 'https://www.instagram.com/horror_neko/',
      iconClass: 'fab fa-instagram',
      text: 'Instagram'
    },
    {
      ariaLabel: `Link to Ale Alexander's Flickr photo gallery`,
      link: 'https://www.flickr.com/photos/yasu-chan/',
      iconClass: 'fab fa-flickr',
      text: 'Flickr'
    },
    {
      ariaLabel: `Do you want to email Ale Alexander? Drop me a line`,
      link: 'mailto:ale@alexander.pink',
      iconClass: 'fas fa-at',
      text: 'Email'
    }
  ];

  constructor(public toggleService: ToggleService) { }

  public getAriaLabel(ariaLabel: string, index: number): string {
    return `${ariaLabel} (${index + 1} of ${this.contactItems.length})`;
  }
}

export interface ContactItem {
  ariaLabel: string;
  link: string;
  iconClass: string;
  text: string;
  toggle?: boolean;
}
