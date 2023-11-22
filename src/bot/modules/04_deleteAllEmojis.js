import Handler from '../../handler.js';

const handler = new Handler('Delete All Emojis', 'bot');

export default async () => {
    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);
    let emojis = await guild.emojis.fetch();
    let emojiArray = [...emojis.values()];

    for (let i = 0; i < emojiArray.length; i++) {
        let emoji = emojiArray[i];
        await emoji.delete()
            .then(() => handler.log(`Deleted emoji "${emoji.name}".`))
            .catch((err) => handler.error('Error Found: ' + err));
    };
    
    handler.endLog('Emoji deletion complete!');
}