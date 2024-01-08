import Handler from '../../handler.js';

const handler = new Handler('Ban Everyone', 'self');

export default async () => {
    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);
    let members = await guild.members.fetch();
    let memberArray = [...members.values()];

    for (let i = 0; i < memberArray.length; i++) {
        let m = memberArray[i];
        await m.ban()
            .then(() => handler.log(`Banned ${m.user.tag}.`))
            .catch((err) => handler.error('Error banning ' + m.user.tag + ': ' + err.message));
    };

    handler.endLog('Mass Ban complete!');
};