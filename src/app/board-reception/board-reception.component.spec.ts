import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardReceptionComponent } from './board-reception.component';

describe('BoardReceptionComponent', () => {
  let component: BoardReceptionComponent;
  let fixture: ComponentFixture<BoardReceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardReceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
