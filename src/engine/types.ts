export type ObjectPath = string

export type FName = string

export type FString = string

export type FVector = {
    X: number,
    Y: number,
    Z: number
}

export type FHitResult = {
    bBlockingHit: boolean,
    bStartPenetrating: boolean,
    FaceIndex: number,
    Time: number
    Distance: number,
    Location: FVector,
    ImpactPoint: FVector,
    Normal: FVector,
    ImpactNormal: FVector,
    TraceStart: FVector,
    TraceEnd: FVector,
    PenetrationDepth: number,
    Item: number,
    PhysMaterial: string,
    Actor: ObjectPath,
    Component: ObjectPath,
    BoneName: FName,
    MyBoneName: FName
}