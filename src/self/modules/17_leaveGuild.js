import Handler from '../../handler.js';

const handler = new Handler('Leave Guild', 'self');

export default async () => {
    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');
    let guild = await client.guilds.fetch(guildID);
    
    await guild.leave();

    handler.log('Left the guild :(');
    handler.endLog('Nuke again soon! :D');
};