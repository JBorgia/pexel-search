import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { PexelResponse, Photo } from '@models/pexel-response';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { fromEvent, Observable } from 'rxjs';
import {
  debounceTime,
  filter,
  map,
  startWith,
  switchMap,
  tap
} from 'rxjs/operators';
import { PexelService } from '../api-services/pexel.service';
import { SearchComponent } from './search/search.component';

@UntilDestroy()
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pexel',
  templateUrl: './pexel.component.html',
  styleUrls: ['./pexel.component.scss'],
})
export class PexelComponent implements OnInit {
  @ViewChild('search', { static: true }) search: SearchComponent;
  @ViewChild('wrapperDiv', { static: true }) wrapperDiv: ElementRef;
  results$: Observable<Photo[]>;
  colorString: string;

  constructor(private readonly _pexelService: PexelService) {}

  ngOnInit() {
    this.results$ = this._getResults$();
    this._scrollEvent$ = fromEvent(this.wrapperDiv.nativeElement, 'scroll')
  }

  private _scrollEvent$: Observable<any>;
  private _results: Photo[] = [];
  private _page: number = 0;
  private _scrollPercent = 0.8; // When searching for results, at the 80% of the end of the scrollable area more results are requested

  private get _debouncedQueryChanges$() {
    return this.search.searchForm.controls.search.valueChanges.pipe(
      startWith(this.search.searchForm.controls.search.value),
      debounceTime(200)
    );
  }

  private _getResults$(): Observable<Photo[]> {
    return this._debouncedQueryChanges$.pipe(
      tap(() => this._resetResults()),
      switchMap((query) =>
        query ? this._searchResults$(query) : this._curatedResults$()
      ),
      tap((res: PexelResponse) => (this._page = res.page)),
      filter((res) => !!res && !!res.photos),
      map((res) => (this._results = [...this._results, ...res.photos!])),
    );
  }

  private _trackScroll() {
    return this._scrollEvent$.pipe(
      debounceTime(200),
      filter(
        (event: any) =>
          event?.target?.offsetHeight + event?.target?.scrollTop >=
            event?.target?.scrollHeight * this._scrollPercent && !!this._page
      ),
      startWith(undefined),
      untilDestroyed(this)
    );
  }

  private _resetResults() {
    this._results = [];
    this._page = 0;
  }

  private _curatedResults$() {
    return this._trackScroll().pipe(
      switchMap(() => this._pexelService.getCuratedPhotos(this._page + 1))
    );
  }

  private _searchResults$(query: string) {
    return this._trackScroll().pipe(
      switchMap(() => this._pexelService.getSearchPage(query, this._page + 1))
    );
  }
}
