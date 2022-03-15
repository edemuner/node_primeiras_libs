const getFile = require('../index')

const arrayResult = [[
    {
        FileList: 'https://developer.mozilla.org/pt-BR(CHANGE)/docs/Web/API/FileList'
    },
], "No links"]
const textFileDirPath = "./test/files"

describe('getFile::', () => {
    it('should be a function', () => {
    expect(typeof getFile).toBe('function')
    })
    it('should return array with results', async () => {
        const result = await getFile(textFileDirPath)
        expect(result).toEqual(arrayResult)
    })
})
