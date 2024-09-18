import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTextFieldComponent } from './app-text-field.component';

describe('AppTextFieldComponent', () => {
  let component: AppTextFieldComponent;
  let fixture: ComponentFixture<AppTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTextFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
