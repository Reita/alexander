import { Component } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  public galleryItems: GalleryItem[] = [
    {
      title: 'Illustration | Traditional Art',
      link: 'https://www.behance.net/gallery/70645255/Illustration-Traditional-Art',
      imageUrl: '/assets/gallery/1.jpg',
      tags: ['Graphic Design', 'Illustration', 'Drawing']
    },
    {
      title: 'Flamin Hot',
      link: 'https://www.behance.net/gallery/53211585/Flamin-Hot',
      imageUrl: '/assets/gallery/2.png',
      tags: ['Advertising', 'Art Direction', 'Digital Art']
    },
    {
      title: 'Digital Art (for FB and TW)',
      link: 'https://www.behance.net/gallery/53204525/Digital-Art-(for-FB-and-TW)',
      imageUrl: '/assets/gallery/3.png',
      tags: ['Art Direction', 'Animation', 'Illustration']
    },
    {
      title: 'Ads & Mockups (in progress)',
      link: 'https://www.behance.net/gallery/27622537/Ads-Mockups-(in-progress)',
      imageUrl: '/assets/gallery/4.png',
      tags: ['Art Direction', 'Digital Art', 'Graphic Design','Photo manipulation']
    },
    {
      title: 'Logo EP',
      link: 'https://www.behance.net/gallery/17618831/Logo-EP-(en-progreso)',
      imageUrl: '/assets/gallery/5.jpg',
      tags: ['Branding', 'Editorial Design', 'Graphic Design']
    },
    {
      title: 'Lavendel (soap)',
      link: 'https://www.behance.net/gallery/13548829/Lavendel-(soap)',
      imageUrl: '/assets/gallery/6.jpg',
      tags: ['Branding', 'Graphic Design', 'Packaging']
    },
    {
      title: 'Ichigo (strawberry) Socks',
      link: 'https://www.behance.net/gallery/13918829/Ichigo-(strawberry)-Socks',
      imageUrl: '/assets/gallery/7.jpg',
      tags: ['Branding', 'Graphic Design', 'Pattern Design']
    },
    {
      title: 'Optometrist | Business Cards',
      link: 'https://www.behance.net/gallery/13509921/Optometrist-Business-Cards',
      imageUrl: '/assets/gallery/8.jpg',
      tags: ['Branding', 'Graphic Design', 'Print Design']
    },
    {
      title: 'B. Cards',
      link: 'https://www.behance.net/gallery/14163511/B-Cards',
      imageUrl: '/assets/gallery/9.jpg',
      tags: ['Branding', 'Graphic Design', 'Print Design']
    },
    {
      title: 'Thé Fujian - Labels',
      link: 'https://www.behance.net/gallery/13341557/Th-Fujian-Labels',
      imageUrl: '/assets/gallery/10.jpg',
      tags: ['Branding', 'Editorial Design', 'Graphic Design']
    },
    {
      title: 'Bunny Girl -Doll Expo',
      link: 'https://www.behance.net/gallery/16942325/Bunny-Girl-Doll-Expo-',
      imageUrl: '/assets/gallery/11.jpg',
      tags: ['Advertising', 'Graphic Design', 'Illustration']
    },
    {
      title: 'First Aid Campaign - maternity area',
      link: 'https://www.behance.net/gallery/15962631/First-Aid-Campaign-maternity-area',
      imageUrl: '/assets/gallery/12.png',
      tags: ['Editorial Design', 'Graphic Design', 'Motion Graphics']
    },
    {
      title: 'Zinger Ross Branding',
      link: 'https://www.behance.net/gallery/14164011/Zinger-Ross-Branding',
      imageUrl: '/assets/gallery/13.png',
      tags: ['Branding', 'Graphic Design', 'Print Design']
    },
    {
      title: 'Logo SLG Branding proposal',
      link: 'https://www.behance.net/gallery/14139703/Logo-SLG-Branding-proposal',
      imageUrl: '/assets/gallery/14.jpg',
      tags: ['Branding', 'Editorial Design', 'Graphic Design']
    },
    {
      title: 'Illustration "Wobbly"',
      link: 'https://www.behance.net/gallery/8652339/Illustration-Wobbly',
      imageUrl: '/assets/gallery/15.jpg',
      tags: ['Drawing', 'Graphic Design', 'Illustration']
    },
    {
      title: 'Contest Poster "Agua" Efiro Mag',
      link: 'https://www.behance.net/gallery/8239855/Cartel-Concurso-Agua',
      imageUrl: '/assets/gallery/16.jpg',
      tags: ['Drawing', 'Editorial Design', 'Illustration']
    },
    {
      title: 'Retouching',
      link: 'https://www.behance.net/gallery/27800919/Retouching',
      imageUrl: '/assets/gallery/17.png',
      tags: ['Digital Photography', 'Photography', 'Retouching']
    },
    {
      title: 'Dots - Photos',
      link: 'https://www.behance.net/gallery/7875385/Photography',
      imageUrl: '/assets/gallery/18.jpg',
      tags: ['Digital Photography', 'Photography', 'Retouching']
    },
    {
      title: 'Tomodachi Time',
      link: 'https://www.behance.net/gallery/8483417/Tomodachi-time',
      imageUrl: '/assets/gallery/19.jpg',
      tags: ['Digital Photography', 'Photography', 'Retouching']
    },
    {
      title: `Dots Website`,
      link: 'https://www.behance.net/gallery/13562657/Dots-Website',
      imageUrl: '/assets/gallery/21.jpg',
      tags: ['Graphic Design', 'Web Design']
    },
    {
      title: `iPhone Case`,
      link: 'https://www.behance.net/gallery/8003775/iPhone-Case',
      imageUrl: '/assets/gallery/22.png',
      tags: ['Digital Art', 'Drawing', 'Illustration']
    },
    {
      title: `3D`,
      link: 'https://www.behance.net/gallery/7879281/3D',
      imageUrl: '/assets/gallery/24.jpg',
      tags: ['Animation', 'Digital Art']
    },
  ];

  constructor(public toggleService: ToggleService) { }

  public getTags(tags: string[]): string {
    return tags.join(', ');
  }
}

export interface GalleryItem {
  title: string;
  imageUrl: string;
  link: string;
  description?: string;
  tags?: string[];
  toggle?: boolean;
}
