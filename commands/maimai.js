const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'maimai',
    description: 'Sends an embed with a header, subheader, and body text',
    execute(message, args) {
        const embed = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle('Header')
            .setDescription('Subheader')
            .addFields(
                { name: 'Body', value: 'This is the body text of the embed.' }
            );

        message.channel.send({ embeds: [embed] });
    },
};