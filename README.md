# Unreal Engine 4 Web Remote Control

This project implements a [remote control](https://docs.unrealengine.com/en-US/Engine/Editor/ScriptingAndAutomation/WebControl/index.html)
client for the Unreal Engine 4 editor (since 4.23).

It implements the remote control protocol client over HTTP with JSON of a running Unreal Editor instance, and allows external programs to
interact with the Unreal Editor in real time, with a fully object-oriented interface emulating C++ code.
It can be used from the browser or with Node, and is fully typed. Several engine blueprint libraries are also included.

Read [what you can do](https://docs.unrealengine.com/en-US/Engine/Editor/ScriptingAndAutomation/WebControl/index.html)
with Web Remote Control and the installation instructions below to get started.

__Important: The feature is currently in Beta in the engine, so it may require updating between different engine releases.__

The client is written in TypeScript and provides an object interface emulating UE4's object intefaces, and some
type definition for engine data structures.

## Contents

* [Classes](#classes)
* [Installation](#installation)
* [Libraries](#libraries)
* [Examples](#examples)
* [Low level API](#low-level-api)
* [Roadmap](#roadmap)
* [Documentation links](#documentation-links)

## Installation

You need a [Node.js](https://nodejs.org) installation with npm.

```
git clone https://github.com/sovietspaceship/ue4-remote-control
cd ue4-remote-control
npm install
```

To build, run `npm run compile`. This will compile all TypeScript files to ECMAScript 6
in `dist/`, with typings included. This step is optional as compiled files are already provided
in the repository, but required if you make any changes.

To use in your library as a dependency, run

```
npm install https://github.com/sovietspaceship/ue4-remote-control
```

and then require or import it in one of the following ways:

```
import { UObject } from 'ue4-remote-control/dist/classes/uobject' // full access to all classes by path; dist is required for the time being
import { UObject } from 'ue4-remote-control' // this only exposes some core functionality exported by src/index.ts
const { AActor } = require('ue4-remote-control/dist/classes/actors/actor')
```

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

## Libraries

Several engine libraries are included. Check [src/classes/libraries](https://github.com/sovietspaceship/ue4-remote-control/tree/master/src/classes/libraries)
to see available methods. Most of these have been generated with `scripts/generate-methods-from-docs.js` so, while it tries to preserve
as much type information as possible, some signatures may not match. This also generates a lot of classes, structs and enums
with empty definitions, which will have to be implemented.

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
    * [UEditorAssetLibrary](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/UEditorAssetLibrary/index.html) :heavy_check_mark:
    * [UEditorFilterLibrary](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/UEditorFilterLibrary/index.html) :heavy_check_mark:
    * [UEditorLevelLibrary](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/UEditorLevelLibrary/index.html) :heavy_check_mark:
    * [UEditorSkeletalMeshLibrary](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/UEditorSkeletalMeshLibrary/index.html) :heavy_check_mark:
    * [UEditorStaticMeshLibrary](https://docs.unrealengine.com/en-US/API/Plugins/EditorScriptingUtilities/UEditorStaticMeshLibrary/index.html) :heavy_check_mark:

Additional libraries implemented:

* [EditorUtilityLibrary](https://docs.unrealengine.com/en-US/API/Editor/Blutility/UEditorUtilityLibrary/index.html) :heavy_check_mark:
* [GameplayStatics](https://docs.unrealengine.com/en-US/API/Runtime/Engine/Kismet/UGameplayStatics/index.html) :heavy_check_mark:
* [BlueprintPathsLibrary](https://docs.unrealengine.com/en-US/API/Runtime/Engine/Kismet/UBlueprintPathsLibrary/index.html) :heavy_check_mark:

Missing development:

* Add implementations for classes, structs and enums lacking a body.
* Type signatures for class properties.

Also, I created a separate project for functions that are not provided by the engine:

* [UE4RemoteControlLibrary](https://github.com/sovietspaceship/UE4RemoteControlLibrary)

## Documentation links

### Unreal Engine Web Remote Control (Official)

* [Web Remote Control](https://docs.unrealengine.com/en-US/Engine/Editor/ScriptingAndAutomation/WebControl/index.html)
    * [Quickstart](https://docs.unrealengine.com/en-US/Engine/Editor/ScriptingAndAutomation/WebControl/QuickStart/index.html)
    * [Reference](https://docs.unrealengine.com/en-US/Engine/Editor/ScriptingAndAutomation/WebControl/Endpoints/index.html)
