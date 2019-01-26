import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupRegisterComponent } from './form-group-register.component';

describe('FormGroupRegisterComponent', () => {
  let component: FormGroupRegisterComponent;
  let fixture: ComponentFixture<FormGroupRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
