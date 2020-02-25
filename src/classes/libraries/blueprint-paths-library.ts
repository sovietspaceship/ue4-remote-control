import { UObject } from "../uobject";
import { FString, FText } from "../../engine/types";
import { ReturnValue } from "../../api/schema";

type CollapseRelativeDirectoriesReturn = {
    ReturnValue: boolean,
    OutPath: FString
}
type MakePathRelativeToReturn = {
    ReturnValue: boolean,
    OutPath: FString
}
type MakePlatformFilenameReturn = {
    ReturnValue: void,
    OutPath: FString
}
type MakeStandardFilenameReturn = {
    ReturnValue: void,
    OutPath: FString
}
type NormalizeDirectoryNameReturn = {
    ReturnValue: void,
    OutPath: FString
}
type NormalizeFilenameReturn = {
    ReturnValue: void,
    OutPath: FString
}
type RemoveDuplicateSlashesReturn = {
    ReturnValue: void,
    OutPath: FString
}
type ValidatePathReturn = {
    ReturnValue: void,
    OutReason: FText
}

export class UBlueprintPathsLibrary extends UObject {
    constructor() {
        super('/Script/Editor.Default__BlueprintPathsLibrary')
    }

    async AutomationDir(): Promise<FString> {
        const { ReturnValue } = await this.call('AutomationDir') as ReturnValue<FString>
        return ReturnValue
    }

    async AutomationLogDir(): Promise<FString> {
        const { ReturnValue } = await this.call('AutomationLogDir') as ReturnValue<FString>
        return ReturnValue
    }

    async AutomationTransientDir(): Promise<FString> {
        const { ReturnValue } = await this.call('AutomationTransientDir') as ReturnValue<FString>
        return ReturnValue
    }

    async BugItDir(): Promise<FString> {
        const { ReturnValue } = await this.call('BugItDir') as ReturnValue<FString>
        return ReturnValue
    }

    async ChangeExtension(InPath: FString, InNewExtension: FString): Promise<FString> {
        const { ReturnValue } = await this.call('ChangeExtension', { InPath, InNewExtension }) as ReturnValue<FString>
        return ReturnValue
    }

    async CloudDir(): Promise<FString> {
        const { ReturnValue } = await this.call('CloudDir') as ReturnValue<FString>
        return ReturnValue
    }

    async CollapseRelativeDirectories(InPath: FString): Promise<CollapseRelativeDirectoriesReturn> {
        return await this.call('CollapseRelativeDirectories', { InPath }) as CollapseRelativeDirectoriesReturn
    }

    async Combine(InPaths: FString[]): Promise<FString> {
        const { ReturnValue } = await this.call('Combine', { InPaths }) as ReturnValue<FString>
        return ReturnValue
    }

    async ConvertFromSandboxPath(InPath: FString, InSandboxName: FString): Promise<FString> {
        const { ReturnValue } = await this.call('ConvertFromSandboxPath', { InPath, InSandboxName }) as ReturnValue<FString>
        return ReturnValue
    }

    async ConvertRelativePathToFull(InPath: FString, InBasePath: FString): Promise<FString> {
        const { ReturnValue } = await this.call('ConvertRelativePathToFull', { InPath, InBasePath }) as ReturnValue<FString>
        return ReturnValue
    }

    async ConvertToSandboxPath(InPath: FString, InSandboxName: FString): Promise<FString> {
        const { ReturnValue } = await this.call('ConvertToSandboxPath', { InPath, InSandboxName }) as ReturnValue<FString>
        return ReturnValue
    }

    async CreateTempFilename(Path: FString, Prefix: FString, Extension: FString): Promise<FString> {
        const { ReturnValue } = await this.call('CreateTempFilename', { Path, Prefix, Extension }) as ReturnValue<FString>
        return ReturnValue
    }

    async DiffDir(): Promise<FString> {
        const { ReturnValue } = await this.call('DiffDir') as ReturnValue<FString>
        return ReturnValue
    }

    async DirectoryExists(InPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('DirectoryExists', { InPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async EngineConfigDir(): Promise<FString> {
        const { ReturnValue } = await this.call('EngineConfigDir') as ReturnValue<FString>
        return ReturnValue
    }

    async EngineContentDir(): Promise<FString> {
        const { ReturnValue } = await this.call('EngineContentDir') as ReturnValue<FString>
        return ReturnValue
    }

    async EngineDir(): Promise<FString> {
        const { ReturnValue } = await this.call('EngineDir') as ReturnValue<FString>
        return ReturnValue
    }

    async EngineIntermediateDir(): Promise<FString> {
        const { ReturnValue } = await this.call('EngineIntermediateDir') as ReturnValue<FString>
        return ReturnValue
    }

    async EnginePluginsDir(): Promise<FString> {
        const { ReturnValue } = await this.call('EnginePluginsDir') as ReturnValue<FString>
        return ReturnValue
    }

    async EngineSavedDir(): Promise<FString> {
        const { ReturnValue } = await this.call('EngineSavedDir') as ReturnValue<FString>
        return ReturnValue
    }

    async EngineSourceDir(): Promise<FString> {
        const { ReturnValue } = await this.call('EngineSourceDir') as ReturnValue<FString>
        return ReturnValue
    }

    async EngineUserDir(): Promise<FString> {
        const { ReturnValue } = await this.call('EngineUserDir') as ReturnValue<FString>
        return ReturnValue
    }

    async EngineVersionAgnosticUserDir(): Promise<FString> {
        const { ReturnValue } = await this.call('EngineVersionAgnosticUserDir') as ReturnValue<FString>
        return ReturnValue
    }

    async EnterpriseDir(): Promise<FString> {
        const { ReturnValue } = await this.call('EnterpriseDir') as ReturnValue<FString>
        return ReturnValue
    }

    async EnterpriseFeaturePackDir(): Promise<FString> {
        const { ReturnValue } = await this.call('EnterpriseFeaturePackDir') as ReturnValue<FString>
        return ReturnValue
    }

    async EnterprisePluginsDir(): Promise<FString> {
        const { ReturnValue } = await this.call('EnterprisePluginsDir') as ReturnValue<FString>
        return ReturnValue
    }

    async FeaturePackDir(): Promise<FString> {
        const { ReturnValue } = await this.call('FeaturePackDir') as ReturnValue<FString>
        return ReturnValue
    }

    async FileExists(InPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('FileExists', { InPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async GameAgnosticSavedDir(): Promise<FString> {
        const { ReturnValue } = await this.call('GameAgnosticSavedDir') as ReturnValue<FString>
        return ReturnValue
    }

    async GameDevelopersDir(): Promise<FString> {
        const { ReturnValue } = await this.call('GameDevelopersDir') as ReturnValue<FString>
        return ReturnValue
    }

    async GameSourceDir(): Promise<FString> {
        const { ReturnValue } = await this.call('GameSourceDir') as ReturnValue<FString>
        return ReturnValue
    }

    async GameUserDeveloperDir(): Promise<FString> {
        const { ReturnValue } = await this.call('GameUserDeveloperDir') as ReturnValue<FString>
        return ReturnValue
    }

    async GeneratedConfigDir(): Promise<FString> {
        const { ReturnValue } = await this.call('GeneratedConfigDir') as ReturnValue<FString>
        return ReturnValue
    }

    async GetBaseFilename(InPath: FString, bRemovePath: boolean): Promise<FString> {
        const { ReturnValue } = await this.call('GetBaseFilename', { InPath, bRemovePath }) as ReturnValue<FString>
        return ReturnValue
    }

    async GetCleanFilename(InPath: FString): Promise<FString> {
        const { ReturnValue } = await this.call('GetCleanFilename', { InPath }) as ReturnValue<FString>
        return ReturnValue
    }

    async GetEditorLocalizationPaths(): Promise<FString[]> {
        const { ReturnValue } = await this.call('GetEditorLocalizationPaths') as ReturnValue<FString[]>
        return ReturnValue
    }

    async GetEngineLocalizationPaths(): Promise<FString[]> {
        const { ReturnValue } = await this.call('GetEngineLocalizationPaths') as ReturnValue<FString[]>
        return ReturnValue
    }

    async GetExtension(InPath: FString, bIncludeDot: boolean): Promise<FString> {
        const { ReturnValue } = await this.call('GetExtension', { InPath, bIncludeDot }) as ReturnValue<FString>
        return ReturnValue
    }

    async GetGameLocalizationPaths(): Promise<FString[]> {
        const { ReturnValue } = await this.call('GetGameLocalizationPaths') as ReturnValue<FString[]>
        return ReturnValue
    }

    async GetInvalidFileSystemChars(): Promise<FString> {
        const { ReturnValue } = await this.call('GetInvalidFileSystemChars') as ReturnValue<FString>
        return ReturnValue
    }

    async GetPath(InPath: FString): Promise<FString> {
        const { ReturnValue } = await this.call('GetPath', { InPath }) as ReturnValue<FString>
        return ReturnValue
    }

    async GetProjectFilePath(): Promise<FString> {
        const { ReturnValue } = await this.call('GetProjectFilePath') as ReturnValue<FString>
        return ReturnValue
    }

    async GetPropertyNameLocalizationPaths(): Promise<FString[]> {
        const { ReturnValue } = await this.call('GetPropertyNameLocalizationPaths') as ReturnValue<FString[]>
        return ReturnValue
    }

    async GetRelativePathToRoot(): Promise<FString> {
        const { ReturnValue } = await this.call('GetRelativePathToRoot') as ReturnValue<FString>
        return ReturnValue
    }

    async GetRestrictedFolderNames(): Promise<FString[]> {
        const { ReturnValue } = await this.call('GetRestrictedFolderNames') as ReturnValue<FString[]>
        return ReturnValue
    }

    async GetToolTipLocalizationPaths(): Promise<FString[]> {
        const { ReturnValue } = await this.call('GetToolTipLocalizationPaths') as ReturnValue<FString[]>
        return ReturnValue
    }

    async HasProjectPersistentDownloadDir(): Promise<boolean> {
        const { ReturnValue } = await this.call('HasProjectPersistentDownloadDir') as ReturnValue<boolean>
        return ReturnValue
    }

    async IsDrive(InPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('IsDrive', { InPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async IsProjectFilePathSet(): Promise<boolean> {
        const { ReturnValue } = await this.call('IsProjectFilePathSet') as ReturnValue<boolean>
        return ReturnValue
    }

    async IsRelative(InPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('IsRelative', { InPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async IsRestrictedPath(InPath: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('IsRestrictedPath', { InPath }) as ReturnValue<boolean>
        return ReturnValue
    }

    async IsSamePath(PathA: FString, PathB: FString): Promise<boolean> {
        const { ReturnValue } = await this.call('IsSamePath', { PathA, PathB }) as ReturnValue<boolean>
        return ReturnValue
    }

    async LaunchDir(): Promise<FString> {
        const { ReturnValue } = await this.call('LaunchDir') as ReturnValue<FString>
        return ReturnValue
    }

    async MakePathRelativeTo(InPath: FString, InRelativeTo: FString): Promise<MakePathRelativeToReturn> {
        return await this.call('MakePathRelativeTo', { InPath, InRelativeTo }) as MakePathRelativeToReturn
    }

    async MakePlatformFilename(InPath: FString): Promise<MakePlatformFilenameReturn> {
        return await this.call('MakePlatformFilename', { InPath }) as MakePlatformFilenameReturn
    }

    async MakeStandardFilename(InPath: FString): Promise<MakeStandardFilenameReturn> {
        return await this.call('MakeStandardFilename', { InPath }) as MakeStandardFilenameReturn
    }

    async MakeValidFileName(InString: FString, InReplacementChar: FString): Promise<FString> {
        const { ReturnValue } = await this.call('MakeValidFileName', { InString, InReplacementChar }) as ReturnValue<FString>
        return ReturnValue
    }

    async NormalizeDirectoryName(InPath: FString): Promise<NormalizeDirectoryNameReturn> {
        return await this.call('NormalizeDirectoryName', { InPath }) as NormalizeDirectoryNameReturn
    }

    async NormalizeFilename(InPath: FString): Promise<NormalizeFilenameReturn> {
        return await this.call('NormalizeFilename', { InPath }) as NormalizeFilenameReturn
    }

    async ProfilingDir(): Promise<FString> {
        const { ReturnValue } = await this.call('ProfilingDir') as ReturnValue<FString>
        return ReturnValue
    }

    async ProjectConfigDir(): Promise<FString> {
        const { ReturnValue } = await this.call('ProjectConfigDir') as ReturnValue<FString>
        return ReturnValue
    }

    async ProjectContentDir(): Promise<FString> {
        const { ReturnValue } = await this.call('ProjectContentDir') as ReturnValue<FString>
        return ReturnValue
    }

    async ProjectDir(): Promise<FString> {
        const { ReturnValue } = await this.call('ProjectDir') as ReturnValue<FString>
        return ReturnValue
    }

    async ProjectIntermediateDir(): Promise<FString> {
        const { ReturnValue } = await this.call('ProjectIntermediateDir') as ReturnValue<FString>
        return ReturnValue
    }

    async ProjectLogDir(): Promise<FString> {
        const { ReturnValue } = await this.call('ProjectLogDir') as ReturnValue<FString>
        return ReturnValue
    }

    async ProjectModsDir(): Promise<FString> {
        const { ReturnValue } = await this.call('ProjectModsDir') as ReturnValue<FString>
        return ReturnValue
    }

    async ProjectPersistentDownloadDir(): Promise<FString> {
        const { ReturnValue } = await this.call('ProjectPersistentDownloadDir') as ReturnValue<FString>
        return ReturnValue
    }

    async ProjectPluginsDir(): Promise<FString> {
        const { ReturnValue } = await this.call('ProjectPluginsDir') as ReturnValue<FString>
        return ReturnValue
    }

    async ProjectSavedDir(): Promise<FString> {
        const { ReturnValue } = await this.call('ProjectSavedDir') as ReturnValue<FString>
        return ReturnValue
    }

    async ProjectUserDir(): Promise<FString> {
        const { ReturnValue } = await this.call('ProjectUserDir') as ReturnValue<FString>
        return ReturnValue
    }

    async RemoveDuplicateSlashes(InPath: FString): Promise<RemoveDuplicateSlashesReturn> {
        return await this.call('RemoveDuplicateSlashes', { InPath }) as RemoveDuplicateSlashesReturn
    }

    async RootDir(): Promise<FString> {
        const { ReturnValue } = await this.call('RootDir') as ReturnValue<FString>
        return ReturnValue
    }

    async SandboxesDir(): Promise<FString> {
        const { ReturnValue } = await this.call('SandboxesDir') as ReturnValue<FString>
        return ReturnValue
    }

    async ScreenShotDir(): Promise<FString> {
        const { ReturnValue } = await this.call('ScreenShotDir') as ReturnValue<FString>
        return ReturnValue
    }

    async SetExtension(InPath: FString, InNewExtension: FString): Promise<FString> {
        const { ReturnValue } = await this.call('SetExtension', { InPath, InNewExtension }) as ReturnValue<FString>
        return ReturnValue
    }

    async SetProjectFilePath(NewGameProjectFilePath: FString): Promise<void> {
        await this.call('SetProjectFilePath', { NewGameProjectFilePath })
    }

    async ShaderWorkingDir(): Promise<FString> {
        const { ReturnValue } = await this.call('ShaderWorkingDir') as ReturnValue<FString>
        return ReturnValue
    }

    async ShouldSaveToUserDir(): Promise<boolean> {
        const { ReturnValue } = await this.call('ShouldSaveToUserDir') as ReturnValue<boolean>
        return ReturnValue
    }

    async SourceConfigDir(): Promise<FString> {
        const { ReturnValue } = await this.call('SourceConfigDir') as ReturnValue<FString>
        return ReturnValue
    }

    async Split(InPath: FString, PathPart: FString, FilenamePart: FString, ExtensionPart: FString): Promise<void> {
        await this.call('Split', { InPath, PathPart, FilenamePart, ExtensionPart })
    }

    async ValidatePath(InPath: FString, bDidSucceed: boolean): Promise<ValidatePathReturn> {
        return await this.call('ValidatePath', { InPath, bDidSucceed }) as ValidatePathReturn
    }

    async VideoCaptureDir(): Promise<FString> {
        const { ReturnValue } = await this.call('VideoCaptureDir') as ReturnValue<FString>
        return ReturnValue
    }

}