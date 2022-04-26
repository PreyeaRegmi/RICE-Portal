import { Component, OnInit } from '@angular/core';
import { ConfirmdialogComponent } from 'src/app/components/dialogs/confirmdialog/confirmdialog.component';
import { ImageService } from 'src/app/services/image.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecommendationdialogComponent } from '../../components/dialogs/recommendationdialog/recommendationdialog.component';
import { FiledetaildialogComponent } from 'src/app/components/dialogs/filedetaildialog/filedetaildialog.component';
import { FileService } from 'src/app/services/fileservice.service';
import { FileDTO } from 'src/app/model/filemodel';

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
  fileService: FileService;

  htmlString: string[];
   fileList:FileDTO[]


  constructor(imageService: ImageService,fileService: FileService, public dialog: MatDialog) {
    this.imageService = imageService;
    this.fileService=fileService
  }

  ngOnInit(): void {
    this.imageService.getImages().then(data => {
      this.htmlString = data;
    });

    this.fileService.getFiles().then(filData=>{
     this.fileList =filData
    });
  }

  onImageClicked(item): void {
    this.imageURLOrBuffer = item;
    this.viewerOpen = true;
  }

  showFileDetail(index):void
  {
    const dialogRef = this.dialog.open(FiledetaildialogComponent, {
      minWidth:"400px",
      data:this.fileList[index].fileDetail
      
    }
    );
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
