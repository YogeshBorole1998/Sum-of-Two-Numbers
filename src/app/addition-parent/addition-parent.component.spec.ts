import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionParentComponent } from './addition-parent.component';

describe('AdditionParentComponent', () => {
  let component: AdditionParentComponent;
  let fixture: ComponentFixture<AdditionParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
