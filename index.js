const fs = require('fs');

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
  throw new Error(erro.code, 'Não há arquivo no diretório');
}

async function pegarArquivo(caminhoDoArquivo){
  const encoding = 'utf-8';
  try{
    const text = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(text);
    return extraiLink(text);
  }catch(erro){
   trataErro(erro); 
  }
}

module.exports = pegarArquivo;