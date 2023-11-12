import Logger from '../utils/logger.js';

const logger = new Logger('Change Guild Info');

export default async function () {
    let guildName = await logger.question('Guild name (leave blank for default)? ');
    let guildIcon = await logger.question('Guild icon (use a raw image URL, leave blank for default)? ');
    let guildID = await logger.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);

    await guild.setName(guildName || 'Nuked with Eclipse :P');
    await guild.setIcon(guildIcon);

    logger.endLog('Guild name & icon changed!');
};