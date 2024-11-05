import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimatedetailsComponent } from './climatedetails.component';

describe('ClimatedetailsComponent', () => {
  let component: ClimatedetailsComponent;
  let fixture: ComponentFixture<ClimatedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClimatedetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimatedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
