import fetch from 'node-fetch';

function manejaErros(erro) {
  throw new Error(erro.message);
}

async function checkStatus(arrayUrls) {
  try {
    const arrayStatus = await Promise
      .all(arrayUrls
        .map(async url => {
          const res = await fetch(url);
          return `${res.status} - ${res.statusText}`;
        }));
    return arrayStatus;
  } catch (erro) {
    manejaErros(erro)
  }

}

function geraArrayDeUrls(arrayLinks) {
  return arrayLinks
    .map(o => Object
      .values(o).join());
}

export default async function validaURL(arrayLinks) {
  const links = geraArrayDeUrls(arrayLinks);
  const statusLinks = await checkStatus(links);

  const resultados = arrayLinks.map((o, i) => (
    { ...o, status: statusLinks[i] }
  ));
  return resultados;
}