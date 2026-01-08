import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdLoginComponent } from './ad-login.component';

describe('AdLoginComponent', () => {
  let component: AdLoginComponent;
  let fixture: ComponentFixture<AdLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdLoginComponent]
    });
    fixture = TestBed.createComponent(AdLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
