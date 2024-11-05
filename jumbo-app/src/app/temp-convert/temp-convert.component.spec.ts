import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempConvertComponent } from './temp-convert.component';

describe('TempConvertComponent', () => {
  let component: TempConvertComponent;
  let fixture: ComponentFixture<TempConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempConvertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
