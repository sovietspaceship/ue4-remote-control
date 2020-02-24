const { EditorLevelLibrary } = require('../out/classes/libraries/editor-level-library')

const { expect } = require('chai')

describe('EditorLevelLibrary', () => {
    it('should get list of all actors in the current level', async () => {
        const ell = new EditorLevelLibrary()
        const actors = await ell.GetAllLevelActors()
        expect(actors).to.exist;
        expect(actors).to.be.an('Array')
    })
})