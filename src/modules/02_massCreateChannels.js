import { ChannelType } from 'discord.js';
import Logger from '../utils/logger.js';

const logger = new Logger('Mass Create Channels');

export default async function () {
    let amount = await logger.question('How many channels? ');
    if (!amount || amount.trim() === '' || isNaN(amount) || Number(amount) < 1 || Number(amount) > 500) return logger.endError('Invalid amount. The amount should be in between 1 and 500.');

    let channelName = await logger.question('Channel Name? (optional; click enter to skip) ');
    if (!channelName || channelName.trim() === '') channelName = 'nuked-with-eclipse';

    let guildID = await logger.question('Guild ID? ');
    let guild = await client.guilds.fetch(guildID);

    for (let i = 0; i < amount; i++) {
        if (guild.channels.cache.size === 500) break;
        await guild.channels.create({
            name: channelName,
            type: ChannelType.GuildText,
        })
            .then(() => logger.log(`Created channel ${i + 1} of ${amount}.`))
            .catch((err) => logger.error('Error creating channel: ' + err.message));
    };

    logger.endLog('Channel creation complete!');
};