import Logger from '../utils/logger.js';

const logger = new Logger('Delete All Invites');

export default async function () {
    let guildID = await logger.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);
    let invites = await guild.invites.fetch();
    let inviteArray = [...invites.values()];

    for (let i = 0; i < inviteArray.length; i++) {
        let invite = inviteArray[i];
        await invite.delete()
            .then(() => logger.log(`Deleted invite "${invite.code}".`))
            .catch((err) => logger.error('Error Found: ' + err));
    };
    
    logger.endLog('Invite deletion complete!');
};