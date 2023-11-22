import { ActivityType } from 'discord.js';
import Handler from '../../handler.js';

const handler = new Handler('Set Bot Activity', 'self');

export default async () => {
    let statusType = await handler.question('Status type (options: Playing, Watching, Listening, or Competing)? ');
    if (!Object.keys(ActivityType).includes(statusType)) return handler.endError('Invalid status type.');

    let statusMessage = await handler.question('Status message (appears as Playing [message] or Watching [message])? ');
    if (!statusMessage || statusMessage.trim() === '') return handler.endError('Invalid status message.');

    client.user.setActivity({
        type: ActivityType[statusType],
        name: statusMessage
    });

    handler.endLog('Activity change complete!');
};