import {expect, test , describe} from '@jest/globals';
import { isAnagram } from './codigo';

describe('EJERCICIO ¿ES UN ANAGRAMA?',()=>{
  test('Si las palabras tienen distinta cantidad de letras espera FALSE', () => {
    expect(isAnagram('Hola','Mundo')).toBeFalsy();
  });
  test('Si se ingresan otro formato que no sea STRING se espera FALSE', () => {
    expect(isAnagram(3,4)).toBeFalsy();
    expect(isAnagram({nombre:'Francisco'},{nombre:'Rfansicso'})).toBeFalsy();
    expect(isAnagram(['carlos'],['loscar'])).toBeFalsy();
  });
  test('Si se ingresa dos palabras identicas se espera FALSE', () => {
    expect(isAnagram('carlos',"CARLOS")).toBeFalsy();
  });
  test('Si se ingresa dos palabras diferentes con distintas letras se espera FALSE', () => {
    expect(isAnagram('hola',"hhola")).toBeFalsy();
    expect(isAnagram('mundos',"pelota")).toBeFalsy();
    expect(isAnagram('cancion',"canccon")).toBeFalsy();
    expect(isAnagram('decoracion',"dddddddddd")).toBeFalsy();
  });
  test('Si se ingresa dos palabras no identicas con iguales letras se espera TRUE', () => {
    expect(isAnagram('carlos',"LOscAR")).toBeTruthy();
    expect(isAnagram('cinco',"conci")).toBeTruthy();
    expect(isAnagram('iman',"mani")).toBeTruthy();
    expect(isAnagram('llenaba',"ballena")).toBeTruthy();
    expect(isAnagram('botines',"bisonte")).toBeTruthy();
  });
});