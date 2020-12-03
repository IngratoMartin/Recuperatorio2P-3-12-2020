import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisAutosComponent } from './mis-autos.component';

describe('MisAutosComponent', () => {
  let component: MisAutosComponent;
  let fixture: ComponentFixture<MisAutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisAutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
