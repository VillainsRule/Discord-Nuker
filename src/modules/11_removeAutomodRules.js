import Logger from '../utils/logger.js';

const logger = new Logger('Remove Automod Rules');

export default async function () {
    let guildID = await logger.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);
    let automod = await guild.autoModerationRules.fetch();
    let automodRules = [...automod.values()];

    for (let i = 0; i < automodRules.length; i++) {
        let rule = automodRules[i];
        await rule.delete()
            .then(() => logger.log(`Deleted automod rule "${rule.name}".`))
            .catch((err) => logger.error('Error Found: ' + err));
    };

    logger.endLog('Automod Rule deletion complete!');
};