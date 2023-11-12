import { PermissionsBitField } from 'discord.js';
import Logger from '../utils/logger.js';

const logger = new Logger('Grant @everyone Admin');

export default async function () {
    let guildID = await logger.question('Guild ID? ');
    let guild = await client.guilds.fetch(guildID);
    
    await guild.roles.everyone.setPermissions([PermissionsBitField.Flags.Administrator])
        .then(() => logger.endLog(`Gave @everyone the Administrator permission.`))
        .catch((err) => logger.endError('Error giving everyone admin: ' + err));
};