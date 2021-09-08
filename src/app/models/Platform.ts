import { Command } from "./Command";

export interface Platform {
    promptPlatformId: string
    promptPlatformName: string,
    commandLineList:Command[]
}