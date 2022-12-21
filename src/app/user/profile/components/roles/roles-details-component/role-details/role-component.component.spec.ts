import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleComponentComponent } from './role-component.component';

describe('RoleComponentComponent', () => {
  let component: RoleComponentComponent;
  let fixture: ComponentFixture<RoleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
