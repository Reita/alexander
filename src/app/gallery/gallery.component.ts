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
      title: 'Digital Art (for FB and TW)',
      link: 'https://www.behance.net/gallery/53204525/Digital-Art-(for-FB-and-TW)',
      imageUrl: '/assets/gallery/1.png',
      tags: ['Art Direction', 'Animation', 'Illustration']
    },
    {
      title: 'Ads & Mockups (in progress)',
      link: 'https://www.behance.net/gallery/27622537/Ads-Mockups-(in-progress)',
      imageUrl: '/assets/gallery/2.png',
      tags: ['Art Direction', 'Digital Art', 'Graphic Design']
    },
    {
      title: 'Logo EP (en progreso)',
      link: 'https://www.behance.net/gallery/17618831/Logo-EP-(en-progreso)',
      imageUrl: '/assets/gallery/3.jpg',
      tags: ['Branding', 'Editorial Design', 'Graphic Design']
    },
    {
      title: 'D&D Cookies',
      link: 'https://www.behance.net/gallery/13473273/D-D-Cookies',
      imageUrl: '/assets/gallery/4.jpg',
      tags: ['Graphic Design', 'Packaging', 'Pattern Design']
    },
    {
      title: 'Lavendel (soap)',
      link: 'https://www.behance.net/gallery/13548829/Lavendel-(soap)',
      imageUrl: '/assets/gallery/5.jpg',
      tags: ['Branding', 'Graphic Design', 'Packaging']
    },
    {
      title: 'Ichigo (strawberry) Socks',
      link: 'https://www.behance.net/gallery/13918829/Ichigo-(strawberry)-Socks',
      imageUrl: '/assets/gallery/6.jpg',
      tags: ['Branding', 'Graphic Design', 'Pattern Design']
    },
    {
      title: 'Optometrista | Tarjetas de presentación',
      link: 'https://www.behance.net/gallery/13509921/Optometrista-Tarjetas-de-presentacion',
      imageUrl: '/assets/gallery/7.jpg',
      tags: ['Branding', 'Graphic Design', 'Print Design']
    },
    {
      title: 'B. Cards',
      link: 'https://www.behance.net/gallery/14163511/B-Cards',
      imageUrl: '/assets/gallery/8.jpg',
      tags: ['Branding', 'Graphic Design', 'Print Design']
    },
    {
      title: 'Thé Fujian - Labels',
      link: 'https://www.behance.net/gallery/13341557/Th-Fujian-Labels',
      imageUrl: '/assets/gallery/9.jpg',
      tags: ['Branding', 'Editorial Design', 'Graphic Design']
    },
    {
      title: 'Bunny Girl -Doll Expo',
      link: 'https://www.behance.net/gallery/16942325/Bunny-Girl-Doll-Expo-',
      imageUrl: '/assets/gallery/10.jpg',
      tags: ['Advertising', 'Graphic Design', 'Illustration']
    },
    {
      title: 'Primeros auxilios',
      link: 'https://www.behance.net/gallery/15962631/Primeros-auxilios',
      imageUrl: '/assets/gallery/11.png',
      tags: ['Editorial Design', 'Graphic Design', 'Motion Graphics']
    },
    {
      title: 'Zinger Ross Branding',
      link: 'https://www.behance.net/gallery/14164011/Zinger-Ross-Branding',
      imageUrl: '/assets/gallery/12.png',
      tags: ['Branding', 'Graphic Design', 'Print Design']
    },
    {
      title: 'Logo SLG propuesta',
      link: 'https://www.behance.net/gallery/14139703/Logo-SLG-propuesta',
      imageUrl: '/assets/gallery/13.jpg',
      tags: ['Branding', 'Editorial Design', 'Graphic Design']
    },
    {
      title: 'Retouching',
      link: 'https://www.behance.net/gallery/27800919/Retouching',
      imageUrl: '/assets/gallery/14.png',
      tags: ['Digital Photography', 'Photography', 'Retouching']
    },
    {
      title: 'Retouching',
      link: 'https://www.behance.net/gallery/27800919/Retouching',
      imageUrl: '/assets/gallery/15.jpg',
      tags: ['Digital Photography', 'Photography', 'Retouching']
    },
    {
      title: 'Photography',
      link: 'https://www.behance.net/gallery/7875385/Photography',
      imageUrl: '/assets/gallery/16.jpg',
      tags: ['Digital Photography', 'Photography', 'Retouching']
    },
    {
      title: 'Illustration "Wobbly"',
      link: 'https://www.behance.net/gallery/8652339/Illustration-Wobbly',
      imageUrl: '/assets/gallery/17.jpg',
      tags: ['Illustration', 'Graphic Design', 'Illustration']
    },
    {
      title: 'Cartel Concurso "Agua"',
      link: 'https://www.behance.net/gallery/8239855/Cartel-Concurso-Agua',
      imageUrl: '/assets/gallery/18.jpg',
      tags: ['Drawing', 'Editorial Design', 'Illustration']
    },
    {
      title: 'Tomodachi Time',
      link: 'https://www.behance.net/gallery/8483417/Tomodachi-time',
      imageUrl: '/assets/gallery/19.jpg',
      tags: ['Digital Photography', 'Photography', 'Retouching']
    },
    {
      title: 'DOTS Retoque',
      link: 'https://www.behance.net/gallery/7985141/DOTS-Retoque',
      imageUrl: '/assets/gallery/20.jpg',
      tags: ['Digital Photography', 'Photography', 'Retouching']
    },
    {
      title: `Horror Neko's`,
      link: 'https://www.behance.net/gallery/14488605/Horror-Nekos',
      imageUrl: '/assets/gallery/21.jpg',
      tags: ['Graphic Design', 'Textile Design', 'Print Design']
    },
    {
      title: `Tako-san illustration`,
      link: 'https://www.behance.net/gallery/14299993/Tako-san-illustration',
      imageUrl: '/assets/gallery/22.jpg',
      tags: ['Graphic Design', 'Illustration', 'Print Design']
    },
    {
      title: `Dots Website`,
      link: 'https://www.behance.net/gallery/13562657/Dots-Website',
      imageUrl: '/assets/gallery/23.png',
      tags: ['Graphic Design', 'Web Design']
    },
    {
      title: `iPhone Case`,
      link: 'https://www.behance.net/gallery/8003775/iPhone-Case',
      imageUrl: '/assets/gallery/24.jpg',
      tags: ['Digital Art', 'Drawing', 'Illustration']
    },
    {
      title: `Impresos`,
      link: 'https://www.behance.net/gallery/7878237/Impresos',
      imageUrl: '/assets/gallery/25.jpg',
      tags: ['Advertising', 'Editorial Design']
    },
    {
      title: `Identidad`,
      link: 'https://www.behance.net/gallery/7878561/Identidad',
      imageUrl: '/assets/gallery/26.jpg',
      tags: ['Advertising', 'Graphic Design']
    },
    {
      title: `3D`,
      link: 'https://www.behance.net/gallery/7879281/3D',
      imageUrl: '/assets/gallery/27.jpg',
      tags: ['Animation', 'Digital Art']
    },
    {
      title: `Ilustraciones`,
      link: 'https://www.behance.net/gallery/7878827/Ilustraciones',
      imageUrl: '/assets/gallery/28.jpg',
      tags: ['Cartooning', 'Drawing', 'Illustration']
    }
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
