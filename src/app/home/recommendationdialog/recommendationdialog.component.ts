import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-recommendationdialog',
  templateUrl: './recommendationdialog.component.html',
  styleUrls: ['./recommendationdialog.component.css']
})
export class RecommendationdialogComponent implements OnInit {

  constructor(public dialModalRef: MatDialogRef<RecommendationdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RecommendationDialogData) { }

  ngOnInit(): void {
    this.changePosition();
  }

  changePosition() {
    this.dialModalRef.updatePosition({ right: '30px', bottom: '80px' });
}

onActionSelected(): void {
  // Close the dialog, return true
  this.dialModalRef.close(true);
}

}

export interface RecommendationDialogData {
  title: string;
  message: string;
}
