import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightSidebarComponent } from './main-right-sidebar.component';

describe('MainRightSidebarComponent', () => {
  let component: MainRightSidebarComponent;
  let fixture: ComponentFixture<MainRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRightSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
