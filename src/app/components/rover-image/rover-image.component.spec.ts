import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverImageComponent } from './rover-image.component';

describe('RoverImageComponent', () => {
  let component: RoverImageComponent;
  let fixture: ComponentFixture<RoverImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoverImageComponent]
    });
    fixture = TestBed.createComponent(RoverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
