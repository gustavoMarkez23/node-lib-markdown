#!/usr/bin/env node

const pegarArquivo = require('./index');
const validaURL = require('./http-validacao');

const caminho = process.argv;
async function processaTexto(caminhoDoArquivo) {
  const resultado = await pegarArquivo(caminhoDoArquivo[2]);
  if (caminho[3] === 'validar') {
    console.log('Links validados', await validaURL(resultado))
  } else console.log('Lista de Links', resultado);
}

processaTexto(caminho);