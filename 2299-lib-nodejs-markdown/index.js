const chalk = require('chalk');
const fs = require('fs')


function extractLinks(text){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^\s]*.[^\s]*)\)/gm;
  const resultsAray = []
  let temp

  while((temp = regex.exec(text)) !== null){
    resultsAray.push({ [temp[1]]: temp[2] })
  }
  return resultsAray
}

function treatError(error){
  throw new Error(chalk.red(error.code, 'File not found'))
}


async function getFile(filePath){
  const encoding = 'utf-8'
  try{
    const text = await fs.promises.readFile(filePath, encoding)
    console.log(extractLinks(chalk.green(text)))  
  } catch(error){
    treatError(error)
  }
}

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


getFile('./files/text.md')