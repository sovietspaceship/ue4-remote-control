const { EditorLevelLibrary } = require('../out/objects/editor-level-library')
const { AActor } = require('../out/objects/actor')

const { expect } = require('chai')

describe('AActor', () => {
    it('should query actor location from an actor reference', async () => {
        const ell = new EditorLevelLibrary()
        const [someActor] = await ell.getAllLevelActors()
        const actor = new AActor(someActor)
        const actorLocation = await actor.getActorLocation()
        expect(actorLocation).to.exist;
    })
    it('should set an actor location from an actor reference', async () => {
        const ell = new EditorLevelLibrary()
        const [someActor] = await ell.getAllLevelActors()
        const actor = new AActor(someActor)
        const newLoc = { X: 1, Y: 10, Z: 100 }
        await actor.setActorLocation(newLoc)
        const actorLocation = await actor.getActorLocation()
        expect(actorLocation).to.deep.equal(newLoc)
        expect(actorLocation).to.exist;
    })
})