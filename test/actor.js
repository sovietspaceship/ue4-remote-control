const { EditorLevelLibrary } = require('../dist/classes/libraries/editor-level-library')
const { AActor } = require('../dist/classes/actors/actor')

const { expect } = require('chai')

describe('AActor', () => {
    it('should query actor location from an actor reference', async () => {
        const ell = new EditorLevelLibrary()
        const [someActor] = await ell.GetAllLevelActors()
        const actor = new AActor(someActor)
        const actorLocation = await actor.GetActorLocation()
        expect(actorLocation).to.exist;
    })
    it('should set an actor location from an actor reference', async () => {
        const ell = new EditorLevelLibrary()
        const [someActor] = await ell.GetAllLevelActors()
        const actor = new AActor(someActor)
        const newLoc = { X: 1, Y: 10, Z: 100 }
        await actor.SetActorLocation(newLoc)
        const actorLocation = await actor.GetActorLocation()
        expect(actorLocation).to.deep.equal(newLoc)
        expect(actorLocation).to.exist;
    })
})