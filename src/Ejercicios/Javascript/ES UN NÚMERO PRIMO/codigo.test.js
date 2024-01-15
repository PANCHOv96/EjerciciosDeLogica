import {expect, test , describe} from '@jest/globals';
import { esPrimo } from './codigo';

describe('EJERCICIO 4: ¿ES UN NÚMERO PRIMO?',()=>{
  test('Si se ingresa otro tipo de datos que no sea numerico espera FALSE', () => {
    expect(esPrimo('as')).toBeFalsy();
    expect(esPrimo({number:12})).toBeFalsy();
    expect(esPrimo([4,'danger'])).toBeFalsy();
  });
  test('Al ingresar los numeros primos "2, 3, 17, 53, 89" se espera TRUE en cada respuesta', () => {
    expect(esPrimo(2)).toBeTruthy();
    expect(esPrimo(3)).toBeTruthy();
    expect(esPrimo(17)).toBeTruthy();
    expect(esPrimo(53)).toBeTruthy();
    expect(esPrimo(89)).toBeTruthy();
  });
});