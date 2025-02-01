module.exports = {
    name: 'useslash',
    description: 'Sends a message to use the slash commands instead',
    execute(message, args) {
        message.channel.send('Please use the slash commands instead.');
    },
};