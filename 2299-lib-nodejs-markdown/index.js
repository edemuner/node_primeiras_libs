const chalk = require('chalk');
const fs = require('fs')
const path = require('path')


function extractLinks(text){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^\s]*.[^\s]*)\)/gm
  const resultsAray = []
  let temp

  while((temp = regex.exec(text)) !== null){
    resultsAray.push({ [temp[1]]: temp[2] })
  }
  return resultsAray.length === 0 ? 'No links' : resultsAray
}

function treatError(error){
  throw new Error(chalk.red(error.code, 'File not found'))
}


async function getFile(filePath){
  const absolutePath = path.join(__dirname, filePath)
  const encoding = 'utf-8'

  try {
    const files = await fs.promises.readdir(absolutePath, {encoding})
    // map is synchronous, it is told to make promises for each item in the array
    // but it just return the promises, it doesn't wait until each promise is resolved or rejected
    // so Promise.all makes it wait until all the promises are concluded, and
    // returns an array of results, instead of an array of promises
    const result = Promise.all(files.map(async (file) => {
      const filePath = `${absolutePath}/${file}`
      const text = await fs.promises.readFile(filePath, encoding)
      return extractLinks(text)
    }))
    return result
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


// getFile('./files/text.md')

module.exports = getFile