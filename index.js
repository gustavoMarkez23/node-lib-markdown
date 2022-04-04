import * as fs from 'fs';
// import chalk from 'chalk';

function trataErro(erro) {
  // throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho!'));
  throw new Error(erro.code, 'Não há arquivo no caminho!');
}

async function pegarArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    return extraiLink(texto);
  } catch (erro) {
    trataErro(erro);
  }
}

function extraiLink(text) {
  const regex = /\[([^\]]*)\]\((http?s:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while ((temp = regex.exec(text)) != null) {
    arrayResultados.push({ [temp[1]]: temp[2] });
  }
  return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
}

export default pegarArquivo;