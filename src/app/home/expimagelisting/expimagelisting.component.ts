import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-expimagelisting',
  templateUrl: './expimagelisting.component.html',
  styleUrls: ['./expimagelisting.component.css']
})
export class ExpimagelistingComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit(): void {
    this.galleryOptions = [
    
      {
        width: '800px',
        height: '600px',
        imageAnimation: NgxGalleryAnimation.Slide,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        closeIcon:'close',
        previewCloseOnClick:true,
        previewCloseOnEsc:true,
            },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '100%',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
     
      {
        small:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        medium:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        big:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg'
      }, 
      {
        small:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        medium:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        big:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg'
      }, 
      {
        small:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        medium:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        big:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg'
      }, 
      {
        small:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        medium:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        big:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg'
      }, 
      {
        small:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        medium:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        big:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg'
      }, 
      {
        small:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        medium:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        big:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg'
      }, 
      {
        small:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        medium:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        big:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg'
      }, 
      {
        small:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        medium:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        big:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg'
      }, 
      {
        small:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        medium:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg',
        big:'https://pixelz.cc/wp-content/uploads/2018/08/mitochondria-uhd-4k-wallpaper.jpg'
      },
      
    ];
  }

}
