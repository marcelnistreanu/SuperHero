import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHeroComponent } from './create-hero.component';

describe('CreateHeroComponent', () => {
  let component: CreateHeroComponent;
  let fixture: ComponentFixture<CreateHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHeroComponent]
    });
    fixture = TestBed.createComponent(CreateHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
