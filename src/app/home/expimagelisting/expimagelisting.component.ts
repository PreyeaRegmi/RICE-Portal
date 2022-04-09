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
  public list = [];


  constructor() { }

  ngOnInit(): void {
    this.list = [
      {data: 1 },
      {  data: 2 },
      {  data: 3 },
      {  data: 4 },

      { data: 5 },
      { data: 6 },
      { data: 7 },
      { data: 8 },
      { data: 9 },

      {  data: 10 },
      {  data: 11 },
      {  data: 12 },
      {  data: 13 },
      {  data: 14 },
      
    ];
  
  }

  onImageClicked(item):void
  {
    console.log(item.data);
  }

}
