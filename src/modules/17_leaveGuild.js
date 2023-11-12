import Logger from '../utils/logger.js';

const logger = new Logger('Leave Guild');

export default async function () {
    let guildID = await logger.question('Guild ID? ');
    let guild = await client.guilds.fetch(guildID);
    
    await guild.leave();

    logger.log('Left the guild :(');
    logger.endLog('Nuke again soon! :D');
};