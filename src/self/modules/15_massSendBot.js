import { MessageEmbed } from 'discord.js-selfbot-v13';
import Handler from '../../handler.js';

const handler = new Handler('Mass Send (Bot)', 'self');

export default async () => {
    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');

    const send = async (msg) => {
        let guild = await client.guilds.fetch(guildID);
        let channels = await guild.channels.fetch();
        let channelArray = [...channels.values()];
        for (let i = 0; i < channelArray.length; i++) {
            let c = channelArray[i];
            if (c.type !== 'GUILD_TEXT' && c.type !== 'GUILD_NEWS') continue;
            await c.send(msg)
                .then(() => handler.log('Message sent in #' + c.name))
                .catch((err) => handler.error('Error sending message in ' + c.name + ': ' + err));
        };
        handler.endLog('Messages sent in all channels!');
    };

    let content = await handler.question('What should the message content be (just a ping, server invite)? ');
    let isEmbed = await handler.question('Would you like an embed (y/n)? ');
    if (isEmbed === 'n') return await send(content);

    handler.log('You are about to create an embed. If you do not want to use a value, just press enter.');
    let embed = new MessageEmbed();

    let title = await handler.question('What should the embed title be? ');
    if (title.trim() !== '') embed.setTitle(title);
    let description = await handler.question('What should the embed description be? ');
    if (description.trim() !== '') embed.setDescription(description);
    let color = await handler.question('What should the embed color be? ');
    if (color.trim() !== '') embed.setColor(color);
    let footer = await handler.question('What should the embed footer text be? ');
    if (footer.trim() !== '') embed.setFooter({ text: footer });
    let image = await handler.question('What should the embed image be? ');
    if (image.trim() !== '') embed.setImage(image);
    let thumbnail = await handler.question('What should the embed thumbnail be? ');
    if (thumbnail.trim() !== '') embed.setThumbnail(thumbnail);
    
    if (content.trim() !== '') await send({
        content,
        embeds: [ embed ]
    });
    else await send({
        embeds: [ embed ]
    });
};