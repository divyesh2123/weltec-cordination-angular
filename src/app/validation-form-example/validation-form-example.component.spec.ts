import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationFormExampleComponent } from './validation-form-example.component';

describe('ValidationFormExampleComponent', () => {
  let component: ValidationFormExampleComponent;
  let fixture: ComponentFixture<ValidationFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationFormExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
