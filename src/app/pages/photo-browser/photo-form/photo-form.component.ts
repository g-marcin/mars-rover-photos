import { Component } from '@angular/core';
import { PhotoOptions } from './photo-options';
import { RoverPhotosService } from 'src/app/services/rover-photos.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss'],
})
export class PhotoFormComponent {
  constructor(private roverPhotosService: RoverPhotosService) {}
  model = { rover: '', sol: 1, date: '', camera: '' };

  onSubmit(event: any) {
    console.log(this.model);
    this.roverPhotosService.setGalleryOptions(this.model);
  }
}
