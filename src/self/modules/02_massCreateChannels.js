import { ChannelType } from 'discord.js-selfbot-v13';
import Handler from '../../handler.js';

const handler = new Handler('Mass Create Channels', 'self');

export default async () => {
    let amount = await handler.question('How many channels? ');
    if (!amount || amount.trim() === '' || isNaN(amount) || Number(amount) < 1 || Number(amount) > 500) return handler.endError('Invalid amount. The amount should be in between 1 and 500.');

    let channelName = await handler.question('Channel Name? (optional; click enter to skip) ');
    if (!channelName || channelName.trim() === '') channelName = 'nuked-with-eclipse';

    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');
    let guild = await client.guilds.fetch(guildID);

    for (let i = 0; i < amount; i++) {
        if (guild.channels.cache.size === 500) break;
        await guild.channels.create({
            name: channelName,
            type: ChannelType.GuildText,
        })
            .then(() => handler.log(`Created channel ${i + 1} of ${amount}.`))
            .catch((err) => handler.error('Error creating channel: ' + err.message));
    };

    handler.endLog('Channel creation complete!');
};