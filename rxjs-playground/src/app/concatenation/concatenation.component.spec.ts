import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatenationComponent } from './concatenation.component';

describe('ConcatenationComponent', () => {
  let component: ConcatenationComponent;
  let fixture: ComponentFixture<ConcatenationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatenationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatenationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
