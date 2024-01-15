import {expect, test , describe} from '@jest/globals';
import { Rectangulo, Triangulo , Cuadrado } from './codigo';

describe('EJERCICIO 5: ÁREA DE UN POLÍGONO',()=>{
  test('Se espera un error si no se cargan los datos correctamentes', () => {
    expect( () => new Rectangulo('2','4')).toThrow(/^Los valores ingresados no corresponden a numeros$/);
    expect( () => new Triangulo(2,'10')).toThrow(/^Los valores ingresados no corresponden a numeros$/);
    expect( () => new Rectangulo([2,4,5],23)).toThrow(/^Los valores ingresados no corresponden a numeros$/);
    expect( () => new Cuadrado({lado:9})).toThrow(/^Los valores ingresados no corresponden a numeros$/);
  });
  test('Se espera que el area del rectangulo de 2x4 sea 8', () => {
    const rectangulo = new Rectangulo(2,4);
    expect(rectangulo.area()).toBe(8);
  });
  test('Se espera que el area del triangulo de 2x4 sea 4', () => {
    const triangulo = new Triangulo(2,4);
    expect(triangulo.area()).toBe(4);
  });
  test('Se espera que el area del cuadrado de 4x4 sea 16', () => {
    const cuadrado = new Cuadrado(4);
    expect(cuadrado.area()).toBe(16);
  });
  test('Al imprimir el area se espera que contenga la frase "El area del NOMBRE_POLIGONO es de AREA_POLIGONO"', () => {
    const rectangulo = new Rectangulo(9,4);
    const triangulo = new Triangulo(45,4);
    const cuadrado = new Cuadrado(20);
    expect(rectangulo.imprimirArea()).toMatch(/El area del rectangulo es de/);
    expect(triangulo.imprimirArea()).toMatch(/El area del triangulo es de/);
    expect(cuadrado.imprimirArea()).toMatch(/El area del cuadrado es de/);
  });
});