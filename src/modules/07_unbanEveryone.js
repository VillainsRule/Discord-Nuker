import Logger from '../utils/logger.js';

const logger = new Logger('Unban Everyone');

export default async function () {
    let guildID = await logger.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);
    let bans = await guild.bans.fetch();
    let banArray = [...bans.values()];

    for (let i = 0; i < banArray.length; i++) {
        let ban = banArray[i];
        await guild.members.unban(ban.user.id)
            .then(() => logger.log(`Unbanned ${ban.user.tag}.`))
            .catch((err) => logger.error('Error unbanning ' + ban.user.tag + ': ' + err.message));
    };

    logger.endLog('Unbanning complete!');
};