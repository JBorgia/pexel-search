import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Photo } from '@models/pexel-response';
import { PexelService } from '@services/pexel.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-image-modal-content',
  templateUrl: './image-modal-content.component.html',
  styleUrls: ['./image-modal-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageModalContentComponent implements OnInit {
  @Input() selectedPhoto: Photo;

  constructor(
    private readonly _deviceService: DeviceDetectorService,
    private readonly _pexelService: PexelService
  ) {}

  ngOnInit(): void {}

  download(photo: Photo) {
    const isMobile = this._deviceService.isMobile();

    if (isMobile) {
      // if mobile, open in a new tab for downloading;
      window.open(photo.src.original);
    } else {
      this._pexelService.download(photo);
    }
  }
}
