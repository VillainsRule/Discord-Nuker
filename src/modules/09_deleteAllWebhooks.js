import Logger from '../utils/logger.js';

const logger = new Logger('Delete All Webhooks');

export default async function () {
    let guildID = await logger.question('Guild ID? ');
    
    let guild = await client.guilds.fetch(guildID);
    let webhooks = await guild.fetchWebhooks();
    let webhookList = [...webhooks.values()];

    for (let i = 0; i < webhookList.length; i++) {
        let hook = webhookList[i];
        await hook.delete()
            .then(() => logger.log(`Deleted webhook "${hook.name}" (channel ID: ${hook.channelId}).`))
            .catch((err) => logger.error('Error Found: ' + err));
    };

    logger.endLog('Webhook deletion complete!');
};