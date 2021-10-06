import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumComponent } from './random-num.component';

describe('RandomNumComponent', () => {
  let component: RandomNumComponent;
  let fixture: ComponentFixture<RandomNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomNumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
