import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaXComponent } from './cultura-x.component';

describe('CulturaXComponent', () => {
  let component: CulturaXComponent;
  let fixture: ComponentFixture<CulturaXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CulturaXComponent]
});
    fixture = TestBed.createComponent(CulturaXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
