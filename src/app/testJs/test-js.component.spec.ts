import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';
import { TestJsService } from './service/test-js.service';

import { TestJsComponent } from './test-js.component';

describe('TestJsComponent', () => {
  let component: TestJsComponent;
  let fixture: ComponentFixture<TestJsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJsComponent ],
      imports: [ NgChartsModule ],
      providers: [ TestJsService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
