import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

type dialogData = {
  message: string;
  imageSrc: string;
};
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  dialogData = { message: '', imageSrc: '' };
  imageSrc = '';
  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: dialogData
  ) {
    this.dialogData = data;
    this.imageSrc = this.dialogData.imageSrc;
  }

  dialogCloseHandler() {
    this.dialogRef.close();
  }

  dialogInfoHandler() {
    this.dialogRef.close();
  }
}
