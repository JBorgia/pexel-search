import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Photo } from '@models/pexel-response';
import { ImageModalComponent } from './image-modal/image-modal.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements OnInit {
  @ViewChild('imageModal') imageModal: ImageModalComponent;
  @Input() results: Photo[] | null;
  @Input() colorString: string;


  constructor() { }

  ngOnInit(): void {
  }

}
