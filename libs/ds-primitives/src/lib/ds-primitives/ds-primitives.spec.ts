import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DsPrimitives } from './ds-primitives';

describe('DsPrimitives', () => {
  let component: DsPrimitives;
  let fixture: ComponentFixture<DsPrimitives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsPrimitives],
    }).compileComponents();

    fixture = TestBed.createComponent(DsPrimitives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
