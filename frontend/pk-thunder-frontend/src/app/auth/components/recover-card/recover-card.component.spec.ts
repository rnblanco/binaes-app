import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverCardComponent } from './recover-card.component';

describe('RecoverCardComponent', () => {
  let component: RecoverCardComponent;
  let fixture: ComponentFixture<RecoverCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
