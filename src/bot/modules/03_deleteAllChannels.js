import Handler from '../../handler.js';

const handler = new Handler('Delete All Channels', 'bot');

export default async () => {
    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);
    let channels = await guild.channels.fetch();
    let channelArray = [...channels.values()];

    for (let i = 0; i < channelArray.length; i++) {
        let r = channelArray[i];
        await r.delete()
            .then(() => handler.log(`Deleted channel "${r.name}".`))
            .catch((err) => handler.error('Error Found: ' + err));
    };

    handler.endLog('Channel deletion complete!');
};