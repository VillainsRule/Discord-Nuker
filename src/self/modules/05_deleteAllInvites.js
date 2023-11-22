import Handler from '../../handler.js';

const handler = new Handler('Delete All Invites', 'self');

export default async () => {
    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);
    let invites = await guild.invites.fetch();
    let inviteArray = [...invites.values()];

    for (let i = 0; i < inviteArray.length; i++) {
        let invite = inviteArray[i];
        await invite.delete()
            .then(() => handler.log(`Deleted invite "${invite.code}".`))
            .catch((err) => handler.error('Error Found: ' + err));
    };
    
    handler.endLog('Invite deletion complete!');
};