import { Permissions } from 'discord.js-selfbot-v13';
import Handler from '../../handler.js';

const handler = new Handler('Grant @everyone Admin', 'self');

export default async () => {
    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');
    let guild = await client.guilds.fetch(guildID);
    
    await guild.roles.everyone.setPermissions([ Permissions.FLAGS.ADMINISTRATOR ])
        .then(() => handler.endLog(`Gave @everyone the Administrator permission.`))
        .catch((err) => handler.endError('Error giving everyone admin: ' + err));
};