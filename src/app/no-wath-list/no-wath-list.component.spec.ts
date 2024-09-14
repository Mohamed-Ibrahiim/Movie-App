import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoWathListComponent } from './no-wath-list.component';

describe('NoWathListComponent', () => {
  let component: NoWathListComponent;
  let fixture: ComponentFixture<NoWathListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoWathListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoWathListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
