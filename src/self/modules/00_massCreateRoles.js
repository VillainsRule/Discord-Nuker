import Handler from '../../handler.js';

const handler = new Handler('Mass Create Roles', 'self');

export default async () => {
    let amount = await handler.question('How many roles? ');
    if (!amount || amount.trim() === '' || isNaN(amount) || Number(amount) < 1 || Number(amount) > 250) return endError('Invalid amount. The amount should be in between 1 and 250.');

    let roleName = await handler.question('Role Name? (optional; click enter to skip) ');
    if (!roleName || roleName.trim() === '') roleName = 'Nuked with Eclipse!';

    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');
    let guild = await client.guilds.fetch(guildID);

    for (let i = 0; i < amount; i++) {
        if (guild.roles.cache.size === 250) break;
        await guild.roles.create({
            name: roleName,
            color: '020202'
        })
            .then(() => handler.log(`Created role ${i + 1} of ${amount}.`))
            .catch((err) => handler.error('Error creating role: ' + err.message));
    };
    
    handler.endLog('Role creation complete!');
};