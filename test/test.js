import { pegarArquivo } from "../index.js";

test('Deve ser uma função', () => {
  expect(typeof pegarArquivo).toBe('function');
});