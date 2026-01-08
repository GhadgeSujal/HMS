import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacdashComponent } from './doacdash.component';

describe('DoacdashComponent', () => {
  let component: DoacdashComponent;
  let fixture: ComponentFixture<DoacdashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoacdashComponent]
    });
    fixture = TestBed.createComponent(DoacdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
