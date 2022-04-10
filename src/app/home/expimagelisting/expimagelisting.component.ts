import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-expimagelisting',
  templateUrl: './expimagelisting.component.html',
  styleUrls: ['./expimagelisting.component.css']
})
export class ExpimagelistingComponent implements OnInit {
  public list = [];

  imageURL = '';

  viewerOpen = false;

  constructor() { }

  ngOnInit(): void {
    this.list = [

      {imageUrl: "https://picsum.photos/200/301" },
      {imageUrl: "https://picsum.photos/200/302" },
      {imageUrl: "https://picsum.photos/200/303" },
      {imageUrl: "https://picsum.photos/200/304" },
      {imageUrl: "https://picsum.photos/200/305" },
      {imageUrl: "https://picsum.photos/200/306" },
      {imageUrl: "https://picsum.photos/200/307" },
      {imageUrl: "https://picsum.photos/200/308" },
      {imageUrl: "https://picsum.photos/200/309" },
      {imageUrl: "https://picsum.photos/200/310" },
      {imageUrl: "https://picsum.photos/200/311" },
      {imageUrl: "https://picsum.photos/200/312" },
      
      
    ];
  
  }

  onImageClicked(item):void
  {
    this.imageURL=item.imageUrl;
    this.viewerOpen=true;
  }


}
