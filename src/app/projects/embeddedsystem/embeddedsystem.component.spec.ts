import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedsystemComponent } from './embeddedsystem.component';

describe('EmbeddedsystemComponent', () => {
  let component: EmbeddedsystemComponent;
  let fixture: ComponentFixture<EmbeddedsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbeddedsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
