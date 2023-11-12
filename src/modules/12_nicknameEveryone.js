import Logger from '../utils/logger.js';

const logger = new Logger('Nickname Everyone');

export default async function () {
    let guildID = await logger.question('Guild ID? ');
    let nickname = await logger.question('New nickname for everyone? ');

    let guild = await client.guilds.fetch(guildID);
    let members = await guild.members.fetch();
    let memberArray = [...members.values()];

    for (let i = 0; i < memberArray.length; i++) {
        let m = memberArray[i];
        await m.setNickname(nickname)
            .then(() => logger.log(`Nicknamed ${m.user.tag}.`))
            .catch((err) => logger.error('Error nicknaming ' + m.user.tag + ': ' + err.message));
    };

    logger.endLog('Nicknaming complete!');
};