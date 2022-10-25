import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStandaloneUiComponent } from './ng-standalone-ui.component';

describe('NgStandaloneUiComponent', () => {
  let component: NgStandaloneUiComponent;
  let fixture: ComponentFixture<NgStandaloneUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStandaloneUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgStandaloneUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
