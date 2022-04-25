import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultChildComponent } from './result-child.component';

describe('ResultChildComponent', () => {
  let component: ResultChildComponent;
  let fixture: ComponentFixture<ResultChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
