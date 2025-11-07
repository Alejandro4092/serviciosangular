import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasStandAloneComponent } from './personas-stand-alone-component';

describe('PersonasStandAloneComponent', () => {
  let component: PersonasStandAloneComponent;
  let fixture: ComponentFixture<PersonasStandAloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonasStandAloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonasStandAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
