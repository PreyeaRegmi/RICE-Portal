import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private imgaeSvc: ImageService) { }

  htmlString: string[];
  imageBuffer: string;
  ngOnInit(): void {
    this.imgaeSvc.getImages().then(data => {
      this.htmlString = data;
      console.log(this.htmlString);
    });

  }

  getImage($event: any) {
    console.log($event);
    let image = $event.target.innerText;;
    this.imgaeSvc.getImage(image).then(data => {
      this.imageBuffer = data;
      //console.log(this.imageBuffer);
    })

  }

}
