import Logger from '../utils/logger.js';

const logger = new Logger('Delete All Emojis');

export default async function () {
    let guildID = await logger.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);
    let emojis = await guild.emojis.fetch();
    let emojiArray = [...emojis.values()];

    for (let i = 0; i < emojiArray.length; i++) {
        let emoji = emojiArray[i];
        await emoji.delete()
            .then(() => logger.log(`Deleted emoji "${emoji.name}".`))
            .catch((err) => logger.error('Error Found: ' + err));
    };
    
    logger.endLog('Emoji deletion complete!');
}