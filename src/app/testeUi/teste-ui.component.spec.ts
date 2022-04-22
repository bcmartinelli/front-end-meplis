import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteUiComponent } from './teste-ui.component';

describe('HomeComponent', () => {
  let component: TesteUiComponent;
  let fixture: ComponentFixture<TesteUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
