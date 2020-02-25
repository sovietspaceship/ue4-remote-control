"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uobject_1 = require("../uobject");
class UBlueprintPathsLibrary extends uobject_1.UObject {
    constructor() {
        super('/Script/Editor.Default__BlueprintPathsLibrary');
    }
    AutomationDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('AutomationDir');
            return ReturnValue;
        });
    }
    AutomationLogDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('AutomationLogDir');
            return ReturnValue;
        });
    }
    AutomationTransientDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('AutomationTransientDir');
            return ReturnValue;
        });
    }
    BugItDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('BugItDir');
            return ReturnValue;
        });
    }
    ChangeExtension(InPath, InNewExtension) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ChangeExtension', { InPath, InNewExtension });
            return ReturnValue;
        });
    }
    CloudDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('CloudDir');
            return ReturnValue;
        });
    }
    CollapseRelativeDirectories(InPath) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('CollapseRelativeDirectories', { InPath });
        });
    }
    Combine(InPaths) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('Combine', { InPaths });
            return ReturnValue;
        });
    }
    ConvertFromSandboxPath(InPath, InSandboxName) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ConvertFromSandboxPath', { InPath, InSandboxName });
            return ReturnValue;
        });
    }
    ConvertRelativePathToFull(InPath, InBasePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ConvertRelativePathToFull', { InPath, InBasePath });
            return ReturnValue;
        });
    }
    ConvertToSandboxPath(InPath, InSandboxName) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ConvertToSandboxPath', { InPath, InSandboxName });
            return ReturnValue;
        });
    }
    CreateTempFilename(Path, Prefix, Extension) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('CreateTempFilename', { Path, Prefix, Extension });
            return ReturnValue;
        });
    }
    DiffDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DiffDir');
            return ReturnValue;
        });
    }
    DirectoryExists(InPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('DirectoryExists', { InPath });
            return ReturnValue;
        });
    }
    EngineConfigDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('EngineConfigDir');
            return ReturnValue;
        });
    }
    EngineContentDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('EngineContentDir');
            return ReturnValue;
        });
    }
    EngineDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('EngineDir');
            return ReturnValue;
        });
    }
    EngineIntermediateDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('EngineIntermediateDir');
            return ReturnValue;
        });
    }
    EnginePluginsDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('EnginePluginsDir');
            return ReturnValue;
        });
    }
    EngineSavedDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('EngineSavedDir');
            return ReturnValue;
        });
    }
    EngineSourceDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('EngineSourceDir');
            return ReturnValue;
        });
    }
    EngineUserDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('EngineUserDir');
            return ReturnValue;
        });
    }
    EngineVersionAgnosticUserDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('EngineVersionAgnosticUserDir');
            return ReturnValue;
        });
    }
    EnterpriseDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('EnterpriseDir');
            return ReturnValue;
        });
    }
    EnterpriseFeaturePackDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('EnterpriseFeaturePackDir');
            return ReturnValue;
        });
    }
    EnterprisePluginsDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('EnterprisePluginsDir');
            return ReturnValue;
        });
    }
    FeaturePackDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('FeaturePackDir');
            return ReturnValue;
        });
    }
    FileExists(InPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('FileExists', { InPath });
            return ReturnValue;
        });
    }
    GameAgnosticSavedDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GameAgnosticSavedDir');
            return ReturnValue;
        });
    }
    GameDevelopersDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GameDevelopersDir');
            return ReturnValue;
        });
    }
    GameSourceDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GameSourceDir');
            return ReturnValue;
        });
    }
    GameUserDeveloperDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GameUserDeveloperDir');
            return ReturnValue;
        });
    }
    GeneratedConfigDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GeneratedConfigDir');
            return ReturnValue;
        });
    }
    GetBaseFilename(InPath, bRemovePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetBaseFilename', { InPath, bRemovePath });
            return ReturnValue;
        });
    }
    GetCleanFilename(InPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetCleanFilename', { InPath });
            return ReturnValue;
        });
    }
    GetEditorLocalizationPaths() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetEditorLocalizationPaths');
            return ReturnValue;
        });
    }
    GetEngineLocalizationPaths() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetEngineLocalizationPaths');
            return ReturnValue;
        });
    }
    GetExtension(InPath, bIncludeDot) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetExtension', { InPath, bIncludeDot });
            return ReturnValue;
        });
    }
    GetGameLocalizationPaths() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetGameLocalizationPaths');
            return ReturnValue;
        });
    }
    GetInvalidFileSystemChars() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetInvalidFileSystemChars');
            return ReturnValue;
        });
    }
    GetPath(InPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetPath', { InPath });
            return ReturnValue;
        });
    }
    GetProjectFilePath() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetProjectFilePath');
            return ReturnValue;
        });
    }
    GetPropertyNameLocalizationPaths() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetPropertyNameLocalizationPaths');
            return ReturnValue;
        });
    }
    GetRelativePathToRoot() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetRelativePathToRoot');
            return ReturnValue;
        });
    }
    GetRestrictedFolderNames() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetRestrictedFolderNames');
            return ReturnValue;
        });
    }
    GetToolTipLocalizationPaths() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('GetToolTipLocalizationPaths');
            return ReturnValue;
        });
    }
    HasProjectPersistentDownloadDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('HasProjectPersistentDownloadDir');
            return ReturnValue;
        });
    }
    IsDrive(InPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('IsDrive', { InPath });
            return ReturnValue;
        });
    }
    IsProjectFilePathSet() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('IsProjectFilePathSet');
            return ReturnValue;
        });
    }
    IsRelative(InPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('IsRelative', { InPath });
            return ReturnValue;
        });
    }
    IsRestrictedPath(InPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('IsRestrictedPath', { InPath });
            return ReturnValue;
        });
    }
    IsSamePath(PathA, PathB) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('IsSamePath', { PathA, PathB });
            return ReturnValue;
        });
    }
    LaunchDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('LaunchDir');
            return ReturnValue;
        });
    }
    MakePathRelativeTo(InPath, InRelativeTo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('MakePathRelativeTo', { InPath, InRelativeTo });
        });
    }
    MakePlatformFilename(InPath) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('MakePlatformFilename', { InPath });
        });
    }
    MakeStandardFilename(InPath) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('MakeStandardFilename', { InPath });
        });
    }
    MakeValidFileName(InString, InReplacementChar) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('MakeValidFileName', { InString, InReplacementChar });
            return ReturnValue;
        });
    }
    NormalizeDirectoryName(InPath) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('NormalizeDirectoryName', { InPath });
        });
    }
    NormalizeFilename(InPath) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('NormalizeFilename', { InPath });
        });
    }
    ProfilingDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ProfilingDir');
            return ReturnValue;
        });
    }
    ProjectConfigDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ProjectConfigDir');
            return ReturnValue;
        });
    }
    ProjectContentDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ProjectContentDir');
            return ReturnValue;
        });
    }
    ProjectDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ProjectDir');
            return ReturnValue;
        });
    }
    ProjectIntermediateDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ProjectIntermediateDir');
            return ReturnValue;
        });
    }
    ProjectLogDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ProjectLogDir');
            return ReturnValue;
        });
    }
    ProjectModsDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ProjectModsDir');
            return ReturnValue;
        });
    }
    ProjectPersistentDownloadDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ProjectPersistentDownloadDir');
            return ReturnValue;
        });
    }
    ProjectPluginsDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ProjectPluginsDir');
            return ReturnValue;
        });
    }
    ProjectSavedDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ProjectSavedDir');
            return ReturnValue;
        });
    }
    ProjectUserDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ProjectUserDir');
            return ReturnValue;
        });
    }
    RemoveDuplicateSlashes(InPath) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('RemoveDuplicateSlashes', { InPath });
        });
    }
    RootDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('RootDir');
            return ReturnValue;
        });
    }
    SandboxesDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SandboxesDir');
            return ReturnValue;
        });
    }
    ScreenShotDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ScreenShotDir');
            return ReturnValue;
        });
    }
    SetExtension(InPath, InNewExtension) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SetExtension', { InPath, InNewExtension });
            return ReturnValue;
        });
    }
    SetProjectFilePath(NewGameProjectFilePath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('SetProjectFilePath', { NewGameProjectFilePath });
        });
    }
    ShaderWorkingDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ShaderWorkingDir');
            return ReturnValue;
        });
    }
    ShouldSaveToUserDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('ShouldSaveToUserDir');
            return ReturnValue;
        });
    }
    SourceConfigDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('SourceConfigDir');
            return ReturnValue;
        });
    }
    Split(InPath, PathPart, FilenamePart, ExtensionPart) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.call('Split', { InPath, PathPart, FilenamePart, ExtensionPart });
        });
    }
    ValidatePath(InPath, bDidSucceed) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.call('ValidatePath', { InPath, bDidSucceed });
        });
    }
    VideoCaptureDir() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ReturnValue } = yield this.call('VideoCaptureDir');
            return ReturnValue;
        });
    }
}
exports.UBlueprintPathsLibrary = UBlueprintPathsLibrary;
//# sourceMappingURL=blueprint-paths-library.js.map