import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBrowserComponent } from './photo-browser.component';

describe('PhotoBrowserComponent', () => {
  let component: PhotoBrowserComponent;
  let fixture: ComponentFixture<PhotoBrowserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoBrowserComponent]
    });
    fixture = TestBed.createComponent(PhotoBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
