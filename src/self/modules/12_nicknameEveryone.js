import Handler from '../../handler.js';

const handler = new Handler('Nickname Everyone', 'self');

export default async () => {
    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');
    let nickname = await handler.question('New nickname for everyone? ');

    let guild = await client.guilds.fetch(guildID);
    let members = await guild.members.fetch();
    let memberArray = [...members.values()];

    for (let i = 0; i < memberArray.length; i++) {
        let m = memberArray[i];
        await m.setNickname(nickname)
            .then(() => handler.log(`Nicknamed ${m.user.tag}.`))
            .catch((err) => handler.error('Error nicknaming ' + m.user.tag + ': ' + err.message));
    };

    handler.endLog('Nicknaming complete!');
};