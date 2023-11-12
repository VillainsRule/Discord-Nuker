import Logger from '../utils/logger.js';

const logger = new Logger('Ban Everyone');

export default async function () {
    let guildID = await logger.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);
    let members = await guild.members.fetch();
    let memberArray = [...members.values()];

    for (let i = 0; i < memberArray.length; i++) {
        let m = memberArray[i];
        await m.ban()
            .then(() => logger.log(`Banned ${m.user.tag}.`))
            .catch((err) => logger.error('Error banning ' + m.user.tag + ': ' + err.message));
    };

    logger.endLog('Mass Ban complete!');
};