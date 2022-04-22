import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';
import { TesteJsService } from './service/teste-js.service';

import { TesteJsComponent } from './teste-js.component';

describe('HomeComponent', () => {
  let component: TesteJsComponent;
  let fixture: ComponentFixture<TesteJsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteJsComponent ],
      imports: [ NgChartsModule ],
      providers: [ TesteJsService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
