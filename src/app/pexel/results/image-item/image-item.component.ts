import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Photo } from '@models/pexel-response';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageItemComponent implements OnInit {
  @Input() photo: Photo;

  constructor() { }

  ngOnInit(): void {
  }

}
