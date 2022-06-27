import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPageComponent } from './area-page.component';

describe('AreaPageComponent', () => {
  let component: AreaPageComponent;
  let fixture: ComponentFixture<AreaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
