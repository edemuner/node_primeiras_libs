function generateUrlsArray(linkArray){
    console.log(linkArray)
    return linkArray.map(linkObject => Object.values(linkObject).join())
}

function validateURLs(linkArray){
    return linkArray.map(array => generateUrlsArray(array))
}

module.exports = validateURLs