import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createMockWithValues } from '@testing-library/angular/jest-utils';
import { ModalModule } from 'angular-custom-modal';
import { of } from 'rxjs';
import { MOCK } from '../api-services/MOCK';
import { PexelService } from '../api-services/pexel.service';
import { PexelResponse } from '../models/pexel-response';
import { PexelComponent } from './pexel.component';
import { ResultsModule } from './results/results.module';
import { SearchComponent } from './search/search.component';

describe('PexelComponent', () => {
  // let searchComponent: Mock<SearchComponent>;
  let searchFixture: ComponentFixture<SearchComponent>;

  let component: PexelComponent;
  let fixture: ComponentFixture<PexelComponent>;

  let pexelServiceMock: PexelService = createMockWithValues(PexelService, {
    getCuratedPhotos: jest.fn().mockReturnValue(of(MOCK as PexelResponse)),
    getSearchPage: jest.fn().mockReturnValue(of(MOCK as PexelResponse)),
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          ModalModule,
          FormsModule,
          ResultsModule,
          ReactiveFormsModule,
        ],
        declarations: [PexelComponent, SearchComponent],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' },
          {
            provide: PexelService,
            useValue: pexelServiceMock,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    searchFixture = TestBed.createComponent(SearchComponent);
    // searchComponent = searchFixture.componentInstance;
    searchFixture.detectChanges();

    fixture = TestBed.createComponent(PexelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load an initial 30 photoItems and fetch more on scroll', () => {
    component.results$.subscribe((results) => {
      expect(pexelServiceMock.getCuratedPhotos).toHaveBeenCalled();
      expect(results.length).toBe(30);
    });

    component.search.searchForm.controls.search.patchValue('car', {
      eventEmit: false,
    });

    component['_debouncedQueryChanges$'].subscribe((query) => {
      expect(query).toBe('car');
      component.results$.subscribe((results) => {
        expect(pexelServiceMock.getSearchPage).toHaveBeenCalled();
        expect(results.length).toBe(30);
      });
    });
  });
});
