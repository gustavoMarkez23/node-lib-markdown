function geraArrayDeUrls(arrayLinks){
  return arrayLinks.map(o => Object.values(o))
}

export default function validaURL(arrayLinks){
  return geraArrayDeUrls(arrayLinks);
}