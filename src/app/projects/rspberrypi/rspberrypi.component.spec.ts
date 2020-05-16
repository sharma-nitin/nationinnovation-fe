import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RspberrypiComponent } from './rspberrypi.component';

describe('RspberrypiComponent', () => {
  let component: RspberrypiComponent;
  let fixture: ComponentFixture<RspberrypiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RspberrypiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RspberrypiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
