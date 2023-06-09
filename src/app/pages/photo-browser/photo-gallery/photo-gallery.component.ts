import { Component } from '@angular/core';
import { RoverPhotosService } from 'src/app/services/rover-photos.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent {
  roverData = { photos: [{ img_src: '' }] };

  constructor(private roverPhotosService: RoverPhotosService) {
    this.roverPhotosService.roverData$.subscribe((roverData) => {
      this.roverData = roverData;
    });
  }
}
