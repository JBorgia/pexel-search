import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { startWith } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  @Output() color = new EventEmitter<string>();

  colorOptions = ['red',' orange',' yellow',' green',' turquoise',' blue',' violet',' pink',' brown',' black',' gray',' white'];

  searchForm = this.formBuilder.group({
    search: [''],
    color: [''],
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
      this.searchForm.controls.color.valueChanges.pipe(
        startWith(this.searchForm.controls.color.value),
      untilDestroyed(this)
      ).subscribe(query => this.color.emit(query))
  }
}
