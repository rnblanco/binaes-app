import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasPageComponent } from './areas-page.component';

describe('AreasPageComponent', () => {
  let component: AreasPageComponent;
  let fixture: ComponentFixture<AreasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
