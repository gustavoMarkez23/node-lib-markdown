import chalk from 'chalk';
import fs from 'fs';

console.log('Vamos começar');
let paragrafo = 'Texto retornado por uma função';

function texto(string){
  return string;
}

console.log(chalk.blue(texto(paragrafo)));