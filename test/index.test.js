import pegarArquivo from '../index.js';

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
];

describe('pegarArquivo function', () => {
  it('deve ser uma função', () => {
    expect(typeof pegarArquivo).toBe('function');
  });
  it('deve retornar array de resultados', async () => {
    const resultado = await pegarArquivo('./test/files/texto1.md');
    expect(resultado).toEqual(arrayResult);
  });
  it('Deve retornar a mensagem "não há links"', async () => {
    const result = await pegarArquivo('./test/files/texto1_without_link.md')
    expect(result).toBe('Não há links');
  });
});