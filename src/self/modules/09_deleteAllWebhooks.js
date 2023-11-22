import Handler from '../../handler.js';

const handler = new Handler('Delete All Webhooks', 'self');

export default async () => {
    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');
    
    let guild = await client.guilds.fetch(guildID);
    let webhooks = await guild.fetchWebhooks();
    let webhookList = [...webhooks.values()];

    for (let i = 0; i < webhookList.length; i++) {
        let hook = webhookList[i];
        await hook.delete()
            .then(() => handler.log(`Deleted webhook "${hook.name}" (channel ID: ${hook.channelId}).`))
            .catch((err) => handler.error('Error Found: ' + err));
    };

    handler.endLog('Webhook deletion complete!');
};