import {expect, test , describe} from '@jest/globals';
import { FizzBuzz } from './codigo';

describe('EJERCICIO 1: FIZZ BUZZ',()=>{
  test('Al ingresar un Multiplo de 3 se espera "FIZZ"', () => {
    expect(FizzBuzz(3)).toBe('Fizz');
  });
  test('Al ingresar un Multiplo de 5 se espera "BUZZ"', () => {
    expect(FizzBuzz(5)).toBe('Buzz');
  });
  test('Al ingresar un Multiplo de 3 o 5 se espera "FizzBuzz"', () => {
    expect(FizzBuzz(15)).toBe('FizzBuzz');
  });
  test('Al ingresar un Multiplo distino de 3 o 5 se espera el numero ingresado', () => {
    expect(FizzBuzz(56)).toBe(56);
  });
});