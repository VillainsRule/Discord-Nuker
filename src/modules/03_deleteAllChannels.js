import Logger from '../utils/logger.js';

const logger = new Logger('Delete All Channels');

export default async function () {
    let guildID = await logger.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);
    let channels = await guild.channels.fetch();
    let channelArray = [...channels.values()];

    for (let i = 0; i < channelArray.length; i++) {
        let r = channelArray[i];
        await r.delete()
            .then(() => logger.log(`Deleted channel "${r.name}".`))
            .catch((err) => logger.error('Error Found: ' + err));
    };

    logger.endLog('Channel deletion complete!');
};