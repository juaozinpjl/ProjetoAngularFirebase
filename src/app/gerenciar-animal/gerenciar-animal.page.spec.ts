import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GerenciarAnimalPage } from './gerenciar-animal.page';

describe('GerenciarAnimalPage', () => {
  let component: GerenciarAnimalPage;
  let fixture: ComponentFixture<GerenciarAnimalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GerenciarAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
