"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uobject_1 = require("../uobject");
class UBlueprintPathsLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/Editor.Default__BlueprintPathsLibrary');
    }
    async AutomationDir() {
        const { ReturnValue } = await this.call('AutomationDir');
        return ReturnValue;
    }
    async AutomationLogDir() {
        const { ReturnValue } = await this.call('AutomationLogDir');
        return ReturnValue;
    }
    async AutomationTransientDir() {
        const { ReturnValue } = await this.call('AutomationTransientDir');
        return ReturnValue;
    }
    async BugItDir() {
        const { ReturnValue } = await this.call('BugItDir');
        return ReturnValue;
    }
    async ChangeExtension(InPath, InNewExtension) {
        const { ReturnValue } = await this.call('ChangeExtension', { InPath, InNewExtension });
        return ReturnValue;
    }
    async CloudDir() {
        const { ReturnValue } = await this.call('CloudDir');
        return ReturnValue;
    }
    async CollapseRelativeDirectories(InPath) {
        return await this.call('CollapseRelativeDirectories', { InPath });
    }
    async Combine(InPaths) {
        const { ReturnValue } = await this.call('Combine', { InPaths });
        return ReturnValue;
    }
    async ConvertFromSandboxPath(InPath, InSandboxName) {
        const { ReturnValue } = await this.call('ConvertFromSandboxPath', { InPath, InSandboxName });
        return ReturnValue;
    }
    async ConvertRelativePathToFull(InPath, InBasePath) {
        const { ReturnValue } = await this.call('ConvertRelativePathToFull', { InPath, InBasePath });
        return ReturnValue;
    }
    async ConvertToSandboxPath(InPath, InSandboxName) {
        const { ReturnValue } = await this.call('ConvertToSandboxPath', { InPath, InSandboxName });
        return ReturnValue;
    }
    async CreateTempFilename(Path, Prefix, Extension) {
        const { ReturnValue } = await this.call('CreateTempFilename', { Path, Prefix, Extension });
        return ReturnValue;
    }
    async DiffDir() {
        const { ReturnValue } = await this.call('DiffDir');
        return ReturnValue;
    }
    async DirectoryExists(InPath) {
        const { ReturnValue } = await this.call('DirectoryExists', { InPath });
        return ReturnValue;
    }
    async EngineConfigDir() {
        const { ReturnValue } = await this.call('EngineConfigDir');
        return ReturnValue;
    }
    async EngineContentDir() {
        const { ReturnValue } = await this.call('EngineContentDir');
        return ReturnValue;
    }
    async EngineDir() {
        const { ReturnValue } = await this.call('EngineDir');
        return ReturnValue;
    }
    async EngineIntermediateDir() {
        const { ReturnValue } = await this.call('EngineIntermediateDir');
        return ReturnValue;
    }
    async EnginePluginsDir() {
        const { ReturnValue } = await this.call('EnginePluginsDir');
        return ReturnValue;
    }
    async EngineSavedDir() {
        const { ReturnValue } = await this.call('EngineSavedDir');
        return ReturnValue;
    }
    async EngineSourceDir() {
        const { ReturnValue } = await this.call('EngineSourceDir');
        return ReturnValue;
    }
    async EngineUserDir() {
        const { ReturnValue } = await this.call('EngineUserDir');
        return ReturnValue;
    }
    async EngineVersionAgnosticUserDir() {
        const { ReturnValue } = await this.call('EngineVersionAgnosticUserDir');
        return ReturnValue;
    }
    async EnterpriseDir() {
        const { ReturnValue } = await this.call('EnterpriseDir');
        return ReturnValue;
    }
    async EnterpriseFeaturePackDir() {
        const { ReturnValue } = await this.call('EnterpriseFeaturePackDir');
        return ReturnValue;
    }
    async EnterprisePluginsDir() {
        const { ReturnValue } = await this.call('EnterprisePluginsDir');
        return ReturnValue;
    }
    async FeaturePackDir() {
        const { ReturnValue } = await this.call('FeaturePackDir');
        return ReturnValue;
    }
    async FileExists(InPath) {
        const { ReturnValue } = await this.call('FileExists', { InPath });
        return ReturnValue;
    }
    async GameAgnosticSavedDir() {
        const { ReturnValue } = await this.call('GameAgnosticSavedDir');
        return ReturnValue;
    }
    async GameDevelopersDir() {
        const { ReturnValue } = await this.call('GameDevelopersDir');
        return ReturnValue;
    }
    async GameSourceDir() {
        const { ReturnValue } = await this.call('GameSourceDir');
        return ReturnValue;
    }
    async GameUserDeveloperDir() {
        const { ReturnValue } = await this.call('GameUserDeveloperDir');
        return ReturnValue;
    }
    async GeneratedConfigDir() {
        const { ReturnValue } = await this.call('GeneratedConfigDir');
        return ReturnValue;
    }
    async GetBaseFilename(InPath, bRemovePath) {
        const { ReturnValue } = await this.call('GetBaseFilename', { InPath, bRemovePath });
        return ReturnValue;
    }
    async GetCleanFilename(InPath) {
        const { ReturnValue } = await this.call('GetCleanFilename', { InPath });
        return ReturnValue;
    }
    async GetEditorLocalizationPaths() {
        const { ReturnValue } = await this.call('GetEditorLocalizationPaths');
        return ReturnValue;
    }
    async GetEngineLocalizationPaths() {
        const { ReturnValue } = await this.call('GetEngineLocalizationPaths');
        return ReturnValue;
    }
    async GetExtension(InPath, bIncludeDot) {
        const { ReturnValue } = await this.call('GetExtension', { InPath, bIncludeDot });
        return ReturnValue;
    }
    async GetGameLocalizationPaths() {
        const { ReturnValue } = await this.call('GetGameLocalizationPaths');
        return ReturnValue;
    }
    async GetInvalidFileSystemChars() {
        const { ReturnValue } = await this.call('GetInvalidFileSystemChars');
        return ReturnValue;
    }
    async GetPath(InPath) {
        const { ReturnValue } = await this.call('GetPath', { InPath });
        return ReturnValue;
    }
    async GetProjectFilePath() {
        const { ReturnValue } = await this.call('GetProjectFilePath');
        return ReturnValue;
    }
    async GetPropertyNameLocalizationPaths() {
        const { ReturnValue } = await this.call('GetPropertyNameLocalizationPaths');
        return ReturnValue;
    }
    async GetRelativePathToRoot() {
        const { ReturnValue } = await this.call('GetRelativePathToRoot');
        return ReturnValue;
    }
    async GetRestrictedFolderNames() {
        const { ReturnValue } = await this.call('GetRestrictedFolderNames');
        return ReturnValue;
    }
    async GetToolTipLocalizationPaths() {
        const { ReturnValue } = await this.call('GetToolTipLocalizationPaths');
        return ReturnValue;
    }
    async HasProjectPersistentDownloadDir() {
        const { ReturnValue } = await this.call('HasProjectPersistentDownloadDir');
        return ReturnValue;
    }
    async IsDrive(InPath) {
        const { ReturnValue } = await this.call('IsDrive', { InPath });
        return ReturnValue;
    }
    async IsProjectFilePathSet() {
        const { ReturnValue } = await this.call('IsProjectFilePathSet');
        return ReturnValue;
    }
    async IsRelative(InPath) {
        const { ReturnValue } = await this.call('IsRelative', { InPath });
        return ReturnValue;
    }
    async IsRestrictedPath(InPath) {
        const { ReturnValue } = await this.call('IsRestrictedPath', { InPath });
        return ReturnValue;
    }
    async IsSamePath(PathA, PathB) {
        const { ReturnValue } = await this.call('IsSamePath', { PathA, PathB });
        return ReturnValue;
    }
    async LaunchDir() {
        const { ReturnValue } = await this.call('LaunchDir');
        return ReturnValue;
    }
    async MakePathRelativeTo(InPath, InRelativeTo) {
        return await this.call('MakePathRelativeTo', { InPath, InRelativeTo });
    }
    async MakePlatformFilename(InPath) {
        return await this.call('MakePlatformFilename', { InPath });
    }
    async MakeStandardFilename(InPath) {
        return await this.call('MakeStandardFilename', { InPath });
    }
    async MakeValidFileName(InString, InReplacementChar) {
        const { ReturnValue } = await this.call('MakeValidFileName', { InString, InReplacementChar });
        return ReturnValue;
    }
    async NormalizeDirectoryName(InPath) {
        return await this.call('NormalizeDirectoryName', { InPath });
    }
    async NormalizeFilename(InPath) {
        return await this.call('NormalizeFilename', { InPath });
    }
    async ProfilingDir() {
        const { ReturnValue } = await this.call('ProfilingDir');
        return ReturnValue;
    }
    async ProjectConfigDir() {
        const { ReturnValue } = await this.call('ProjectConfigDir');
        return ReturnValue;
    }
    async ProjectContentDir() {
        const { ReturnValue } = await this.call('ProjectContentDir');
        return ReturnValue;
    }
    async ProjectDir() {
        const { ReturnValue } = await this.call('ProjectDir');
        return ReturnValue;
    }
    async ProjectIntermediateDir() {
        const { ReturnValue } = await this.call('ProjectIntermediateDir');
        return ReturnValue;
    }
    async ProjectLogDir() {
        const { ReturnValue } = await this.call('ProjectLogDir');
        return ReturnValue;
    }
    async ProjectModsDir() {
        const { ReturnValue } = await this.call('ProjectModsDir');
        return ReturnValue;
    }
    async ProjectPersistentDownloadDir() {
        const { ReturnValue } = await this.call('ProjectPersistentDownloadDir');
        return ReturnValue;
    }
    async ProjectPluginsDir() {
        const { ReturnValue } = await this.call('ProjectPluginsDir');
        return ReturnValue;
    }
    async ProjectSavedDir() {
        const { ReturnValue } = await this.call('ProjectSavedDir');
        return ReturnValue;
    }
    async ProjectUserDir() {
        const { ReturnValue } = await this.call('ProjectUserDir');
        return ReturnValue;
    }
    async RemoveDuplicateSlashes(InPath) {
        return await this.call('RemoveDuplicateSlashes', { InPath });
    }
    async RootDir() {
        const { ReturnValue } = await this.call('RootDir');
        return ReturnValue;
    }
    async SandboxesDir() {
        const { ReturnValue } = await this.call('SandboxesDir');
        return ReturnValue;
    }
    async ScreenShotDir() {
        const { ReturnValue } = await this.call('ScreenShotDir');
        return ReturnValue;
    }
    async SetExtension(InPath, InNewExtension) {
        const { ReturnValue } = await this.call('SetExtension', { InPath, InNewExtension });
        return ReturnValue;
    }
    async SetProjectFilePath(NewGameProjectFilePath) {
        await this.call('SetProjectFilePath', { NewGameProjectFilePath });
    }
    async ShaderWorkingDir() {
        const { ReturnValue } = await this.call('ShaderWorkingDir');
        return ReturnValue;
    }
    async ShouldSaveToUserDir() {
        const { ReturnValue } = await this.call('ShouldSaveToUserDir');
        return ReturnValue;
    }
    async SourceConfigDir() {
        const { ReturnValue } = await this.call('SourceConfigDir');
        return ReturnValue;
    }
    async Split(InPath, PathPart, FilenamePart, ExtensionPart) {
        await this.call('Split', { InPath, PathPart, FilenamePart, ExtensionPart });
    }
    async ValidatePath(InPath, bDidSucceed) {
        return await this.call('ValidatePath', { InPath, bDidSucceed });
    }
    async VideoCaptureDir() {
        const { ReturnValue } = await this.call('VideoCaptureDir');
        return ReturnValue;
    }
}
exports.UBlueprintPathsLibrary = UBlueprintPathsLibrary;
//# sourceMappingURL=blueprint-paths-library.js.map