import { Component, OnInit } from '@angular/core';
import { ConfirmdialogComponent } from 'src/app/confirmdialog/confirmdialog.component';
import { ImageService } from 'src/app/services/image.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecommendationdialogComponent } from '../recommendationdialog/recommendationdialog.component';

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


  constructor(imageService: ImageService, public dialog: MatDialog) {
    this.imageService = imageService;
  }

  ngOnInit(): void {
    this.imageService.getImages().then(data => {
      this.htmlString = data;
    });
  }

  onImageClicked(item): void {
    this.imageURLOrBuffer = item;
    this.viewerOpen = true;
  }

  sendCurrentImageForAnalytics(): void {
    console.log("Send image for analytics")
    this.viewerOpen = false;
  }

  getImage($event: any) {
    this.imageName = $event.target.innerText;;
    this.imageService.getImage(this.imageName).then(data => {
      this.imageURLOrBuffer = data;
      this.viewerOpen = true;
    })

    //   
  }

  sendToAnalytics(file: any) {
    const dialogRef = this.dialog.open(ConfirmdialogComponent, {
      maxWidth: "400px",
      data: {
        title: "Are you sure?",
        message: "You are about to send the '" + this.imageName + "'  for processing."
      }
    });

    // listen to response
    dialogRef.afterClosed().subscribe(dialogResult => {
      // if user pressed yes dialogResult will be true, 
      // if he pressed no - it will be false
      console.log(dialogResult);

    });
  }

  showRecommendation() {
    // let's call our modal window
    const dialogRef = this.dialog.open(RecommendationdialogComponent, {
      maxWidth: "600px",
    }
    );
  }


}
