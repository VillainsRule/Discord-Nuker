import Logger from '../utils/logger.js';

const logger = new Logger('Mass Create Roles');

export default async function () {
    let amount = await logger.question('How many roles? ');
    if (!amount || amount.trim() === '' || isNaN(amount) || Number(amount) < 1 || Number(amount) > 250) return endError('Invalid amount. The amount should be in between 1 and 250.');

    let roleName = await logger.question('Role Name? (optional; click enter to skip) ');
    if (!roleName || roleName.trim() === '') roleName = 'Nuked with Eclipse!';

    let guildID = await logger.question('Guild ID? ');
    let guild = await client.guilds.fetch(guildID);

    for (let i = 0; i < amount; i++) {
        if (guild.roles.cache.size === 250) break;
        await guild.roles.create({
            name: roleName,
            color: '020202'
        })
            .then(() => logger.log(`Created role ${i + 1} of ${amount}.`))
            .catch((err) => logger.error('Error creating role: ' + err.message));
    };
    
    logger.endLog('Role creation complete!');
};