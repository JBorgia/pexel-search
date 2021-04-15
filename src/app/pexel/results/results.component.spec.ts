import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalModule } from 'angular-custom-modal';
import { ColorFilterPipe } from './color-filter.pipe';
import { ImageItemComponent } from './image-item/image-item.component';
import { ImageModalContentComponent } from './image-modal/image-modal-content/image-modal-content.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { Url2TitlePipe } from './image-modal/url-2-title.pipe';
import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalModule],
      declarations: [
        ResultsComponent,
        ImageModalComponent,
        ImageModalContentComponent,
        ImageItemComponent,
        ColorFilterPipe,
        Url2TitlePipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
