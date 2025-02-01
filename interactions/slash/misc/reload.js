const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reload')
        .setDescription('Reloads a command')
        .addStringOption(option => 
            option.setName('command')
                .setDescription('The command to reload')
                .setRequired(true)),
    async execute(interaction) {
        const commandName = interaction.options.getString('command').toLowerCase();
        const command = interaction.client.commands.get(commandName) ||
            interaction.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) {
            return interaction.reply({
                content: `There is no command with name or alias \`${commandName}\`, ${interaction.user}!`,
                ephemeral: true
            });
        }

        const commandFolders = fs.readdirSync('./commands');
        const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${commandName}.js`));

        if (!folderName) {
            return interaction.reply({
                content: `There is no command with name or alias \`${commandName}\`, ${interaction.user}!`,
                ephemeral: true
            });
        }

        delete require.cache[require.resolve(`../${folderName}/${commandName}.js`)];

        try {
            const newCommand = require(`../${folderName}/${commandName}.js`);
            interaction.client.commands.set(newCommand.name, newCommand);
            interaction.reply({
                content: `Command \`${commandName}\` was reloaded!`,
                ephemeral: true
            });
        } catch (error) {
            console.error(error);
            interaction.reply({
                content: `There was an error while reloading a command \`${commandName}\`:\n\`${error.message}\``,
                ephemeral: true
            });
        }
    },
};
