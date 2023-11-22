import Handler from '../../handler.js';

const handler = new Handler('Change Guild Info', 'self');

export default async () => {
    let guildName = await handler.question('Guild name (leave blank for default)? ');
    let guildIcon = await handler.question('Guild icon (use a raw image URL, leave blank for default)? ');
    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);

    await guild.setName(guildName || 'Nuked with Eclipse :P');
    await guild.setIcon(guildIcon);

    handler.endLog('Guild name & icon changed!');
};