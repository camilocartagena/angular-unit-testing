import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosComponent } from './usuarios.component';

const suma = (numberA: number, numberB: number) => {
  return numberA + numberB;
};

describe('Ejemplo estructura', () => {
  it('Ejemplo caso de prueba', () => {
    // Arrange
    const numberA = 5;
    const numberB = 4;
    const expectedResult = 9;

    // Act
    const result = suma(numberA, numberB);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});

describe('UsuariosComponent', () => {
  let component: UsuariosComponent;
  let fixture: ComponentFixture<UsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
