import { EmbedBuilder } from 'discord.js';
import Logger from '../utils/logger.js';

const logger = new Logger('Mass Send (Bot)');

export default async function () {
    const send = async (msg, selectedGuild) => {
        let guild = await client.guilds.fetch(selectedGuild);
        let channels = await guild.channels.fetch();
        let channelArray = [...channels.values()];
        for (let i = 0; i < channelArray.length; i++) {
            let c = channelArray[i];
            await c.send(msg);
        };
        logger.endLog('Messages sent in all channels!');
    };

    let guild = await logger.question('Guild ID? ')
    let content = await logger.question('What should the message content be (just a ping, server invite)? ');
    let isEmbed = await logger.question('Would you like an embed (y/n)? ');
    if (isEmbed === 'n') return await send(content, guild);

    logger.log('You are about to create an embed. If you do not want to use a value, just press enter.');
    let embed = new EmbedBuilder();

    let title = await logger.question('What should the embed title be? ');
    if (title.trim() !== '') embed.setTitle(title);
    let description = await logger.question('What should the embed description be? ');
    if (description.trim() !== '') embed.setDescription(description);
    let color = await logger.question('What should the embed color be? ');
    if (color.trim() !== '') embed.setColor(color);
    let footer = await logger.question('What should the embed footer text be? ');
    if (footer.trim() !== '') embed.setFooter({ text: footer });
    let image = await logger.question('What should the embed image be? ');
    if (image.trim() !== '') embed.setImage(image);
    let thumbnail = await logger.question('What should the embed thumbnail be? ');
    if (thumbnail.trim() !== '') embed.setThumbnail(thumbnail);
    
    if (content.trim() !== '') await send({
        content,
        embeds: [ embed ]
    }, guild);
    else await send({
        embeds: [ embed ]
    }, guild);
};