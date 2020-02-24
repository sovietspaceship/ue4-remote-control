import { UObject } from '../uobject'
import { ReturnValue } from '../../api/schema'
import { FString } from '../../engine/types'

// Implements interface for https://github.com/sovietspaceship/UE4RemoteControlLibrary

export class RemoteControlLibrary extends UObject {
    constructor() {
        super('/Script/RemoteControlLibrary.Default__RemoteControlLibrary')
    }
    async IsRunning(): Promise<boolean> {
        const { ReturnValue } = await this.call('IsRunning') as ReturnValue<boolean>
        return ReturnValue
    }
    async StartPIE(): Promise<boolean> { // NOTE: when in PIE, editor stops accepting any further requests
        const { ReturnValue } = await this.call('StartPIE') as ReturnValue<boolean>
        return ReturnValue
    }
    async GetCurrentLevel(): Promise<FString> {
        const { ReturnValue } = await this.call('GetCurrentLevel') as ReturnValue<FString>
        return ReturnValue
    }
}