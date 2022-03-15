const fetch = (...args) => import('node-fetch')
    .then(({default: fetch}) => 
        fetch(...args))

function handleErrors(error){
    throw new Error(erro.message)
}

async function checkStatus(urlArray){
    try{
        const statusArray = Promise
            .all(urlArray
                .map(async url => {
                    const res = await fetch(url)
                    return res.status
        }))
        return statusArray
    }catch(erro){
        handleErrors(erro)
    }
}

function generateUrlsArray(linkArray){
    return linkArray.map(linkObject => Object
        .values(linkObject)
            .join())
}

async function validateURLs(linkArray){
    const links = linkArray.map(array => generateUrlsArray(array))
    const statuses = await Promise
        .all(links
            .map(async array => await checkStatus(array)))
    linkArray.map((array, outerIndex) => {
        const arrayMapper =  array.map((object, innerIndex) => {
            object.status = statuses[outerIndex][innerIndex]
        })
        return arrayMapper
    })
    return linkArray
}

module.exports = validateURLs