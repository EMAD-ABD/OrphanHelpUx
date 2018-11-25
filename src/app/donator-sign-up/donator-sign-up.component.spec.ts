import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorSignUpComponent } from './donator-sign-up.component';

describe('DonatorSignUpComponent', () => {
  let component: DonatorSignUpComponent;
  let fixture: ComponentFixture<DonatorSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatorSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
