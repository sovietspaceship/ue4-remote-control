import { UObject } from '../uobject';
import { FString } from '../../engine/types';
export declare class RemoteControlLibrary extends UObject {
    constructor();
    IsRunning(): Promise<boolean>;
    StartPIE(): Promise<boolean>;
    GetCurrentLevel(): Promise<FString>;
}
