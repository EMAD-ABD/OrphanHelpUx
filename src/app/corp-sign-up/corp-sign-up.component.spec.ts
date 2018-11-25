import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpSignUpComponent } from './corp-sign-up.component';

describe('CorpSignUpComponent', () => {
  let component: CorpSignUpComponent;
  let fixture: ComponentFixture<CorpSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
