import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageModalContentComponent } from './image-modal-content.component';

describe('ImageModalContentComponent', () => {
  let component: ImageModalContentComponent;
  let fixture: ComponentFixture<ImageModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
