import { ActivityType } from 'discord.js';
import Logger from '../utils/logger.js';

const logger = new Logger('Set Bot Activity');

export default async function () {
    let statusType = await logger.question('Status type (options: Playing, Watching, Listening, or Competing)? ');
    if (!ActivityType[statusType]) return logger.endError('Invalid status type.');

    let statusMessage = await logger.question('Status message (appears as Playing [message] or Watching [message])? ');
    if (!statusMessage || statusMessage.trim() === '') return logger.endError('Invalid status message.');

    client.user.setActivity({
        type: ActivityType[statusType],
        name: statusMessage
    });
    
    logger.endLog('Activity change complete!');
};