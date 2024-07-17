import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSComponent } from './business-s.component';

describe('BusinessSComponent', () => {
  let component: BusinessSComponent;
  let fixture: ComponentFixture<BusinessSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessSComponent]
    });
    fixture = TestBed.createComponent(BusinessSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
