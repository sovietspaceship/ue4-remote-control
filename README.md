# Unreal Engine 4 Web Remote Control

This project implements a [remote control](https://docs.unrealengine.com/en-US/Engine/Editor/ScriptingAndAutomation/WebControl/QuickStart/index.html) client for Unreal Engine 4 Editor (since 4.23).

It allows remote control over HTTP via JSON of a running Unreal Editor instance.

__Important: The feature is currently in Beta in the engine, so it may require updating between different engine releases.__

The client is written in TypeScript and provides an object interface emulating UE4's object intefaces, and some
type definition for engine data structures.

## Contents

* [Classes](#classes)
* [Examples](#examples)
* [Low level API](#low-level-api)
* [Roadmap](#roadmap)

## Classes

Classes can extend UObject to emulate their interface in the engine code. This is not necessary
to interact with the engine, but ensures all requests are typechecked by TypeScript.

To create a new object type, extend UObject. See `src/objects` for more examples.
Blueprint libraries are referenced by their default object, e.g. `/Script/EditorScriptingUtilities.Default__EditorLevelLibrary`.
Classes can inherit from each other, e.g. `AStaticMeshActor` can inherit from `AActor`. The system
is designed to mimick regular engine code, with the caveat that objects are not serialised in request payloads,
but referenced by their path instead.

```typescript
import { AActor } from 'ue4-remote-control/classes/actor'

type PetCatRequest = {
    cat: ACat,
    duration: number
}

export class AHuman extends AActor {
    async petCat(cat: ACat, duration: number): Promise<boolean> {
        const { returnValue } = await this.call('PetCat', { cat, duration } as PetCatRequest)
        return returnValue as boolean
    }
}
```

then, to use the new method

```typescript
const human = new AHuman('/Game/CatGame:Level.Level:Human.CatPetter')
const cat = new ACat('/Game/CatGame:Level.Level:Cat.Nyasu')

const catIsHappy: boolean = await human.PetCat(cat, 15120)
```

If you create some useful engine object classes, please submit a merge request!

## Examples

* Getting all actors in the currently open level:
```typescript
import { EditorLevelLibrary } from './classes/libraries/editor-level-library'
const ell = new EditorLevelLibrary()
const actors = await ell.GetAllLevelActors()
/*
    actors = [
        '/Game/Project/Level.Level:PersistentLevel.Actor1',
        '/Game/Project/Level.Level:PersistentLevel.Actor2'
    ]
*/
```

* Getting and setting actor location
```typescript
const actor = new AActor('/Game/Project/Level.Level:PersistentLevel.Actor1')
const location = await actor.GetActorLocation()
// location = { X: 0, Y: 482, Z: 0 }
const result = await actor.SetActorLocation({ X: 420, Y: 90, Z: 123 })
/*
    result = {
        SweepHitResult: {
            bBlockingHit: false,
            bStartPenetrating: false,
            FaceIndex: -1,
            ...
        },
        ReturnValue: true
    }
*/
```

* Managing actor properties:
```typescript
const actor = new AActor('/Game/Project/Level.Level:PersistentLevel.Actor1')
const properties = await actor.loadAll()
const property = await actor.get('propertyName')
await actor.set('propertyName', 100)
```

Properties are cached when first retrieved. To reload, call `loadAll` or pass `true` as second argument to `get`.

## Low level API

If you don't need the whole object architecture, you can use `makeRequest`, defined in `src/index.ts`:

```typescript
import { makeRequest } from 'eu4-remote-control'

// makeRequest(method: HttpMethodCalls, endpoint: string, body: Object)

const response = await makeRequest('put', '/remote/object/call', {
    objectPath: "/Game/Project/Level.Level:PersistentLevel.Actor1",
    functionName: "SetActorLocation",
    parameters: {
        NewLocation: { X: 10, Y: 20, Z: 40 },
    },
})
```

## Roadmap

The main goal is to implement the following libraries:

* [EditorScripting](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/index.html)
    * [FEditorScriptingCreateProxyMeshActorOptions](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/FEditorScriptingCreateProxyMeshA-/index.html)
    * [FEditorScriptingJoinStaticMeshActorsOptions](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/FEditorScriptingJoinStaticMeshAc-/index.html)
    * [FEditorScriptingMergeStaticMeshActorsOptions](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/FEditorScriptingMergeStaticMeshA-/index.html)
    * [FEditorScriptingMeshReductionOptions](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/FEditorScriptingMeshReductionOpt-/index.html)
    * [FEditorScriptingMeshReductionSettings](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/FEditorScriptingMeshReductionSet-/index.html)
    * [UEditorAssetLibrary](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/UEditorAssetLibrary/index.html) :heavy_check_mark:
    * [UEditorFilterLibrary](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/UEditorFilterLibrary/index.html) :heavy_check_mark:
    * [UEditorLevelLibrary](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/UEditorLevelLibrary/index.html) :heavy_check_mark:
    * [UEditorSkeletalMeshLibrary](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/UEditorSkeletalMeshLibrary/index.html) :heavy_check_mark:
    * [UEditorStaticMeshLibrary](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/UEditorStaticMeshLibrary/index.html) :heavy_check_mark:

Also, I created a separate project for functions that are not provided by the engine:

* [UE4RemoteControlLibrary](https://github.com/sovietspaceship/UE4RemoteControlLibrary)
