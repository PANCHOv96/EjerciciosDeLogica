import {expect, test , describe} from '@jest/globals';
import { fibonacci } from './codigo';

describe('EJERCICIO 3: LA SUCESIÓN DE FIBONACCI',()=>{
  test('La funcion debe retornar un arreglo con los primeros 50 (0-49) numeros de la sucesion', () => {
    expect(fibonacci().length).toBe(50);
  });
  test('Se espera que el numero 7 sea 13', () => {
    expect(fibonacci()[7]).toBe(13);
  });
  test('Se espera que el numero 46 sea 1836311903', () => {
    expect(fibonacci()[46]).toBe(1836311903);
  });
  test('No se espera que el numero 35 sea 456', () => {
    expect(fibonacci()[35]).not.toBe(456);
  });
});