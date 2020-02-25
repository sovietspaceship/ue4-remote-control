const { RemoteControlLibrary } = require('../dist/classes/libraries/remote-control-library')

const { expect } = require('chai')

describe('RemoteControlLibrary Editor Plugin', () => {
    it('RemoteControlLibrary.isRunning should return true', async () => {
        const rcl = new RemoteControlLibrary()
        const result = await rcl.IsRunning()

        expect(result).to.be.true;
    })

    // The editor pauses the server during Play in Editor, so it must be skipped
    it.skip('RemoteControlLibrary.startPIE should start Play in Editor', async () => {
        const rcl = new RemoteControlLibrary()
        const result = await rcl.StartPIE()

        expect(result).to.be.true;
    })

    it('RemoteControlLibrary.getCurrentLevel should return PersistentLevel for a new level', async () => {
        const rcl = new RemoteControlLibrary()
        const result = await rcl.GetCurrentLevel()

        expect(result).to.equal('PersistentLevel');
    })
})