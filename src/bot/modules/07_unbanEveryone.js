import Handler from '../../handler.js';

const handler = new Handler('Unban Everyone', 'bot');

export default async () => {
    let guildID = handler.config().GUILD_ID || await handler.question('Guild ID? ');

    let guild = await client.guilds.fetch(guildID);
    let bans = await guild.bans.fetch();
    let banArray = [...bans.values()];

    for (let i = 0; i < banArray.length; i++) {
        let ban = banArray[i];
        await guild.members.unban(ban.user.id)
            .then(() => handler.log(`Unbanned ${ban.user.tag}.`))
            .catch((err) => handler.error('Error unbanning ' + ban.user.tag + ': ' + err.message));
    };

    handler.endLog('Unbanning complete!');
};