import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PexelService } from './pexel.service';


describe('PexelService', () => {
  let service: PexelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PexelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
