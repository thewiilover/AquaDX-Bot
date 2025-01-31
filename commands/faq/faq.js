/**
 * @file test faq command
 * @author Naman Vrati
 * @since 1.0.0
 * @version 3.3.0
 */

// Deconstructing prefix from config file to use in help command
const { prefix } = require("./../../config.json");

// Deconstructing EmbedBuilder to create embeds within this command
const { EmbedBuilder, ChannelType } = require("discord.js");

/**
 * @type {import('../../typings').LegacyCommand}
 */
module.exports = {
    name: "faq",
    description: "Sends an embed that says Hello World!",
    execute(message, args) {
        const helloEmbed = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle("Hello World!")
            .setDescription("This is an embed that says Hello World!");

        message.channel.send({ embeds: [helloEmbed] });
    },
};