const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wacca')
        .setDescription('Sends an embed with a header, subheader, and body text'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle('Header')
            .setDescription('Subheader')
            .addFields(
                { name: 'Body', value: 'This is the body text of the embed.' }
            );

        await interaction.reply({ embeds: [embed] });
    },
};