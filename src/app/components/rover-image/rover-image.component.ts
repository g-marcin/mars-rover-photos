import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
    console.log(e);
  }
  constructor() {
    this.isDescription$.subscribe((state) => {
      this.isDescription = state;
    });
  }
}
