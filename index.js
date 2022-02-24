import chalk from 'chalk';
import fs from 'fs';

function extraiLink(text){
  const regex = /\[([^\]]*)\]\((http?s:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while((temp = regex.exec(text)) != null){
    arrayResultados.push({[temp[1]]: temp[2]});
  }
  return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
}
function trataErro(erro){
  throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

export default async function pegarArquivo(caminhoDoArquivo){
  const encoding = 'utf-8';
  try{
    const text = await fs.promises.readFile(caminhoDoArquivo, encoding);
    return extraiLink(text);
  }catch(erro){
   trataErro(erro); 
  }
}

// pegarArquivo('./arquivo/texto1.md');

// function pegarArquivo(caminhoDoArquivo){
//   const encoding = 'utf-8';
//   fs.promises.readFile(caminhoDoArquivo, encoding)
//   .then((text) => console.log(chalk.green(text)))
//   .catch((erro) => trataErro(erro));
// }

// function pegarArquivo(caminhoDoArquivo){
//   const encoding = 'utf-8';
//   fs.readFile(caminhoDoArquivo, encoding, (erro, text) => {
//     if(erro){
//       trataErro(erro);
//     }
//     console.log(chalk.green(text));
//   })
// }
