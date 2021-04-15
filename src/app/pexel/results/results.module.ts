import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'angular-custom-modal';
import { PexelComponent } from '../pexel.component';
import { ColorFilterPipe } from './color-filter.pipe';
import { ImageItemComponent } from './image-item/image-item.component';
import { ImageModalContentComponent } from './image-modal/image-modal-content/image-modal-content.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { Url2TitlePipe } from './image-modal/url-2-title.pipe';
import { ResultsComponent } from './results.component';

const routes: Routes = [
  {
    path: '',
    component: PexelComponent
  },
];

@NgModule({
  imports: [
    ModalModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    CommonModule
  ],
  declarations: [
    ResultsComponent,
    ImageItemComponent,
    ColorFilterPipe,
    ImageModalComponent,
    ImageModalContentComponent,
    Url2TitlePipe
  ],
  exports:[
    ResultsComponent
  ]
})
export class ResultsModule { }
