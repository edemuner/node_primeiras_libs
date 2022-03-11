const getFile = require('./index')
const path = process.argv
const chalk = require('chalk')

async function processText(filePath){
    const result = await getFile(filePath[2])
    console.log(chalk.yellow('Link list'), result)
}


processText(path)