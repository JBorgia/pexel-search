import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [SearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit after change of color field', fakeAsync(() => {
    component = fixture.componentInstance;
    spyOn(component.color, 'emit');

    const nativeElement = fixture.nativeElement;
    const inputEl = nativeElement.querySelectorAll('input')[1];
    inputEl.value = '2';
    inputEl.dispatchEvent(new Event('input'));

    tick(300); // simulate debounce
    fixture.detectChanges();
    expect(component.color.emit).toHaveBeenCalled();
  }));
});
