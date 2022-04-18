import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-imagedirlisting',
  templateUrl: './imagedirlisting.component.html',
  styleUrls: ['./imagedirlisting.component.css']
})
export class ImagedirlistingComponent implements OnInit {

  imageURLOrBuffer = '';
  imageName = '';

  viewerOpen = false;

  imageService: ImageService;

  htmlString: string[];


  constructor(imageService: ImageService) {
    this.imageService = imageService;
  }

  ngOnInit(): void {
    this.imageService.getImages().then(data => {
      this.htmlString = data;
      console.log(this.htmlString);
    });
  }

  onImageClicked(item): void {
    this.imageURLOrBuffer = item;
    this.viewerOpen = true;
  }

  sendCurrentImageForAnalytics():void
  {
    console.log("Send image for analytics")
    this.viewerOpen=false;
  }

  getImage($event: any) {
    this.imageName = $event.target.innerText;;
    this.imageService.getImage(this.imageName).then(data => {
      this.imageURLOrBuffer = data;
      this.viewerOpen = true;
    })

  }
}
