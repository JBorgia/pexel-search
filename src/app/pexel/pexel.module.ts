import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'angular-custom-modal';
import { PexelComponent } from './pexel.component';
import { ResultsModule } from './results/results.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    ResultsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    CommonModule
  ],
  declarations: [
    SearchComponent,
    PexelComponent,
  ],
})
export class PexelModule { }
