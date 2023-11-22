import Handler from '../../handler.js';

const handler = new Handler('Delete All Roles', 'self');

export default async () => {
    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);
    let roles = await guild.roles.fetch();
    let roleArray = [...roles.values()];

    for (let i = 0; i < roleArray.length; i++) {
        let r = roleArray[i];
        if (r.rawPosition === 0 || r.managed) continue;
        
        await r.delete()
            .then(() => handler.log(`Deleted role "${r.name}".`))
            .catch((err) => handler.error('Error Found: ' + err));
    };

    handler.endLog('Role deletion complete!');
};