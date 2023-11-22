import Handler from '../../handler.js';

const handler = new Handler('Remove Automod Rules', 'bot');

export default async () => {
    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);
    let automod = await guild.autoModerationRules.fetch();
    let automodRules = [...automod.values()];

    for (let i = 0; i < automodRules.length; i++) {
        let rule = automodRules[i];
        await rule.delete()
            .then(() => handler.log(`Deleted automod rule "${rule.name}".`))
            .catch((err) => handler.error('Error Found: ' + err));
    };

    handler.endLog('Automod Rule deletion complete!');
};