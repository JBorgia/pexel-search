import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Photo } from '@models/pexel-response';
import { ModalComponent } from 'angular-custom-modal';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ImageModalComponent implements OnInit {
  @ViewChild('imageModal') imageModal: ModalComponent;
  @ContentChild('modalHeader') modalHeader: ViewContainerRef;
	@ContentChild('modalBody') modalBody: ViewContainerRef;
	@ContentChild('modalFooter') modalFooter: ViewContainerRef
  selectedPhoto: Photo;

  constructor(
    private readonly _cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  open(photo: Photo){
    this.selectedPhoto = photo
    this.imageModal.open();
    this._cdRef.markForCheck();
  }
}
