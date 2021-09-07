import { Platform } from "./Platform";

export class Command {
    commandLineId: string;
    howTo: string;
    line: string;
    promptPlatformName: string;
    comment: string;
    promptPlatformId: string;
    platform: Platform;
}