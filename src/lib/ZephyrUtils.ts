import { Channel, TextChannel } from "eris";
import { Zephyr } from "../structures/client/Zephyr";
import { ErisFile } from "../structures/client/ErisFile";

function checkPermission(
  permission: string,
  channel: Channel,
  zephyr: Zephyr
): boolean {
  if (!channel || channel.type !== 0) return false;
  return (<TextChannel>channel).permissionsOf(zephyr.user.id).json[permission];
}

function isFile(body: any): body is ErisFile {
  return !!(body as ErisFile).file;
}

function isDeveloper(user: User, zephyr: Zephyr): boolean {
  return zephyr.config.developers.includes(user.id);
}

export { checkPermission, isFile, isDeveloper };
