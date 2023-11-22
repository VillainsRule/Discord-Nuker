import chalk from 'chalk';

export default async function resetPrompt() {
    rl.question(chalk.green(`\n    Enter an option # > `), async (input) => {
        if (isNaN(input)) {
            console.log(chalk.magenta('    > Invalid input.'));
            resetPrompt();
            return;
        };

        let numbers = {
            0: '00_massCreateRoles.js',
            1: '01_deleteAllRoles.js',
            2: '02_massCreateChannels.js',
            3: '03_deleteAllChannels.js',
            4: '04_deleteAllEmojis.js',
            5: '05_deleteAllInvites.js',
            6: '06_banEveryone.js',
            7: '07_unbanEveryone.js',
            8: '08_kickEveryone.js',
            9: '09_deleteAllWebhooks.js',
            10: '10_grantEveryoneAdmin.js',
            11: '11_removeAutomodRules.js',
            12: '12_nicknameEveryone.js',
            13: '13_changeGuildInfo.js',
            14: '14_massSendWebhooks.js',
            15: '15_massSendBot.js',
            16: '16_setBotActivity.js',
            17: '17_leaveGuild.js'
        };

        if (!numbers[Number(input)]) {
            console.log(chalk.magenta('    > I cannot find that module number.'));
            resetPrompt();
            return;
        };

        let file = await import(`./modules/${numbers[Number(input)]}`);
        file.default();
    });
};