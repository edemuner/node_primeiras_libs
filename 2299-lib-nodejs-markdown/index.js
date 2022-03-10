const chalk = require('chalk');
const fs = require('fs')

function treatError(error){
  throw new Error(chalk.red(error.code, 'File not found'))
}

function getFile(filePath){
  const encoding = 'utf-8'
  fs.readFile(filePath, encoding, (err, data) => {
    if (err){
      treatError(err)
    }
    console.log(chalk.green(data))
  })
}


getFile('./files/text.md')