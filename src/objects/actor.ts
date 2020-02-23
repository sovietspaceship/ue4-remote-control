import { UObject } from './uobject'

import { FVector, FHitResult } from '../engine/types'

type SetActorLocationParams = {
    newLocation: FVector,
    bSweep: boolean
}

type SetActorLocationResult = {
    SweepHitResult: FHitResult,
    ReturnValue: boolean
}

export class AActor extends UObject {
    async setActorLocation(newLocation: FVector, bSweep?: boolean): Promise<SetActorLocationResult> {
        return await this.call('SetActorLocation', {
            newLocation,
            bSweep,
        } as SetActorLocationParams) as SetActorLocationResult
    }
    async getActorLocation(): Promise<FVector> {
        const { ReturnValue } = await this.call('GetActorLocation')
        return ReturnValue as FVector
    }
}