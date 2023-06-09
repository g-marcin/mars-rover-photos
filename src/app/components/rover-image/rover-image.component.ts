import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-rover-image',
  templateUrl: './rover-image.component.html',
  styleUrls: ['./rover-image.component.scss'],
})
export class RoverImageComponent {
  isDescription = 'description invisible';
  private isDescriptionSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    'description invisible'
  );
  isDescription$ = this.isDescriptionSubject.asObservable();
  @Input() imageSrc: string = '';
  showDescription() {
    this.isDescriptionSubject.next('description visible');
  }
  hideDescription() {
    this.isDescriptionSubject.next('description invisible');
  }
  constructor() {
    this.isDescription$.subscribe((state) => {
      this.isDescription = state;
    });
  }
}
