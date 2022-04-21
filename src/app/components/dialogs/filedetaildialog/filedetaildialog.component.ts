import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filedetaildialog',
  templateUrl: './filedetaildialog.component.html',
  styleUrls: ['./filedetaildialog.component.css']
})
export class FiledetaildialogComponent implements OnInit {

  constructor(public dialModalRef: MatDialogRef<FiledetaildialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FiledetaildialogData) { }

  ngOnInit(): void {
  }
  

}

export interface FiledetaildialogData {
  title: string;
  message: string;
}

