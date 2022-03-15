const fetch = (...args) => import('node-fetch')
    .then(({default: fetch}) => 
        fetch(...args))

async function checkStatus(urlArray){
    const statusArray = Promise
        .all(urlArray
            .map(async url => {
                const res = await fetch(url)
                return res.status
    }))
    return statusArray
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