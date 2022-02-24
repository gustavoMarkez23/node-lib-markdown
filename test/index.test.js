import pegarArquivo from '../index.js';

const arrayResult = [
  {
    Markdown: 'https://pt.wikipedia.org/wiki/Markdown'
  }
]

describe('pegarArquivo::', () => {
  it('must be a function', () => {
    expect(typeof pegarArquivo).toBe('function');
  })
    // it('return a array with results', async () => {
    //     const result = await getFile('/Users/CaroAlvim/Desktop/Laboratoria/SAP006-md-links/files/text-for-test.md')
    //     expect(result).toEqual(arrayResult);
    // })
    // it('must return a msg "No links"', async () => {
    //     const result = await getFile('/Users/CaroAlvim/Desktop/Laboratoria/SAP006-md-links/files/text_no_links.md')
    //     expect(result).toBe('Sem links');
    // })
})

