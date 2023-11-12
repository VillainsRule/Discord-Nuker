import Logger from '../utils/logger.js';

const logger = new Logger('Delete All Roles');

export default async function () {
    let guildID = await logger.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);
    let roles = await guild.roles.fetch();
    let roleArray = [...roles.values()];

    for (let i = 0; i < roleArray.length; i++) {
        let r = roleArray[i];
        if (r.rawPosition === 0 || r.managed) continue;
        
        await r.delete()
            .then(() => logger.log(`Deleted role "${r.name}".`))
            .catch((err) => logger.error('Error Found: ' + err));
    };

    logger.endLog('Role deletion complete!');
};