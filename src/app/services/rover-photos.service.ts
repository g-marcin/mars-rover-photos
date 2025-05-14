import { Injectable } from '@angular/core';
import { Subscription, BehaviorSubject, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoverPhotosService {
  baseURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
  apiKey = 'VJrsKeu302QPHrIrTRmjgRNSU9824ztir78zkOrz';
  galleryOptions = {
    rover: 'curiosity',
    sol: 1000,
    earthDate: '',
    camera: '',
  };
  $subs: Subscription = new Subscription();
  private roverDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  roverData$ = this.roverDataSubject.asObservable();
  private galleryOptionsSubject: BehaviorSubject<any> =
    new BehaviorSubject<any>({
      rover: 'curiosity',
      sol: 1001,
      earthDate: '',
      camera: '',
    });
  galleryOptions$ = this.galleryOptionsSubject.asObservable();
  constructor(private httpClient: HttpClient) {
    this.$subs.add(
      this.galleryOptions$.subscribe((options) => {
        this.galleryOptions = options;
      })
    );
    this.$subs.add(
      this.galleryOptions$
        .pipe(
          switchMap((options: any) => {
            return this.httpClient.get<any>(
              `${this.baseURL}/${options.rover}/photos?sol=${
                options.sol
              }&api_key=${this.apiKey}${
                this.galleryOptions.camera ? `&camera=${options.camera}` : ''
              }&page=1`
            );
          })
        )
        .subscribe((options) => {
          this.roverDataSubject.next(options);
        })
    );
  }

  setGalleryOptions(galleryOptions: any) {
    this.galleryOptionsSubject.next(galleryOptions);
  }

  ngOnDestroy() {
    this.$subs.unsubscribe();
  }
}
