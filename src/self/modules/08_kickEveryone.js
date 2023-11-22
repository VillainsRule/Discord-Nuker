import Handler from '../../handler.js';

const handler = new Handler('Kick Everyone', 'self');

export default async () => {
    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);
    let members = await guild.members.fetch();
    let memberArray = [...members.values()];

    for (let i = 0; i < memberArray.length; i++) {
        let m = memberArray[i];
        await m.kick()
            .then(() => handler.log(`Kicked ${m.user.tag}.`))
            .catch((err) => handler.error('Error kicking ' + m.user.tag + ': ' + err.message));
    };

    handler.endLog('Kicking complete!');
};