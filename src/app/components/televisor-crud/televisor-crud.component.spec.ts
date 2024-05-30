import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisorCrudComponent } from './televisor-crud.component';

describe('TelevisorCrudComponent', () => {
  let component: TelevisorCrudComponent;
  let fixture: ComponentFixture<TelevisorCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelevisorCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelevisorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
