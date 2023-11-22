import { PermissionsBitField } from 'discord.js';
import Handler from '../../handler.js';

const handler = new Handler('Grant @everyone Admin', 'bot');

export default async () => {
    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');
    let guild = await client.guilds.fetch(guildID);
    
    await guild.roles.everyone.setPermissions([ PermissionsBitField.Flags.Administrator ])
        .then(() => handler.endLog(`Gave @everyone the Administrator permission.`))
        .catch((err) => handler.endError('Error giving everyone admin: ' + err));
};