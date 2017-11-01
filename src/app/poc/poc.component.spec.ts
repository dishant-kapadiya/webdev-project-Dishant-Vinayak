import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POCComponent } from './poc.component';

describe('POCComponent', () => {
  let component: POCComponent;
  let fixture: ComponentFixture<POCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
