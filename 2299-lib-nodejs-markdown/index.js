const chalk = require('chalk');
const fs = require('fs')

const text = "A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo. São geralmente recuperados a partir de um objeto [FileList](http://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)"

function extractLinks(text){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^\s]*.[^\s]*)\)/gm;
  const extractedLinks = text.match(regex)
  return extractedLinks
}

function treatError(error){
  throw new Error(chalk.red(error.code, 'File not found'))
}

console.log(extractLinks(text))

// async function getFile(filePath){
//   const encoding = 'utf-8'
//   try{
//     const text = await fs.promises.readFile(filePath, encoding)
//     console.group(chalk.green(text))  
//   } catch(error){
//     treatError(error)
//   }
// }

// function getFile(filePath){
//   const encoding = 'utf-8'
//   fs.promises.readFile(filePath, encoding)
//     .then((text) => chalk.green(console.log(text)))
//     .catch((error) => treatError(error))
// }

// function getFile(filePath){
//   const encoding = 'utf-8'
//   fs.readFile(filePath, encoding, (err, data) => {
//     if (err){
//       treatError(err)
//     }
//     console.log(chalk.green(data))
//   })
// }


// getFile('./files/text.md')