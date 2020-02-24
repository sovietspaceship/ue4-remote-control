const { waitServer } = require('../out/engine/server')

describe('server', () => {
    it.skip('waitServer should resolve when the server is reachable', async () => {
        await waitServer()
    })
})