import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-rover-image',
  templateUrl: './rover-image.component.html',
  styleUrls: ['./rover-image.component.scss'],
})
export class RoverImageComponent {
  isDescription = 'description invisible';
  roverImageStyle = 'rover-image';
  private isDescriptionSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    'description invisible'
  );
  isDescription$ = this.isDescriptionSubject.asObservable();
  @Input() imageSrc: string = '';
  @Input() roverData: any = '';

  constructor(private dialog: MatDialog) {
    this.isDescription$.subscribe((state) => {
      this.isDescription = state;
    });
  }

  showDescription() {
    this.isDescriptionSubject.next('description visible');
    this.roverImageStyle += ' blur';
  }
  hideDescription(e: any) {
    if (e.relatedTarget.tagName === 'SPAN') {
      return;
    }
    this.isDescriptionSubject.next('description invisible');
    this.roverImageStyle = 'rover-image';
  }

  openDialog(imageSrc: string) {

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog',
      backdropClass: 'custom-dialog-backdrop',
      data: { imageSrc: imageSrc }, // Pass any required data to the dialog

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed:', result);
    });
  }
}
