const getFile = require('./index')
const path = process.argv
const chalk = require('chalk')
const validateUrls = require('./httpvalidation')

async function processText(filePath){
    const result = await getFile(filePath[2])
    if (filePath[3] === 'validate'){
        console.log(chalk.yellow('Validated links'), await validateUrls(result))
    } else {
        console.log(chalk.yellow('Link list'), result)
    }
}


processText(path)