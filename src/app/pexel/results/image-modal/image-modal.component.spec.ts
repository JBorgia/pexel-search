import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalModule } from 'angular-custom-modal';
import { ImageModalContentComponent } from './image-modal-content/image-modal-content.component';
import { ImageModalComponent } from './image-modal.component';
import { Url2TitlePipe } from './url-2-title.pipe';

describe('ImageModalComponent', () => {
  let component: ImageModalComponent;
  let fixture: ComponentFixture<ImageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ModalModule
      ],
      declarations: [
        ImageModalComponent,
        ImageModalContentComponent,
        Url2TitlePipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
