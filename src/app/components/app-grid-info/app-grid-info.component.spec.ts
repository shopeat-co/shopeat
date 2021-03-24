import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGridInfoComponent } from './app-grid-info.component';

describe('AppGridInfoComponent', () => {
  let component: AppGridInfoComponent;
  let fixture: ComponentFixture<AppGridInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppGridInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGridInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
