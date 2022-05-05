import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegistersComponent } from './list-registers.component';

describe('ListRegistersComponent', () => {
  let component: ListRegistersComponent;
  let fixture: ComponentFixture<ListRegistersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRegistersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
