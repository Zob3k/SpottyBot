var irc = require('twitch-irc');

// Calling a new client..
var client = new irc.client({
    options: {
        debug: true,
        debugIgnore: ['ping', 'chat', 'action'],
        logging: false,
        tc: 3
    },
    identity: {
        username: 'SpottyBot',
        password: 'oauth:y13g9wu7jilquha4489dtde0fxvuyv'
    },
    channels: ['fivemandown']
});

// Connect the client to server..
client.connect();

// Your events..
client.addListener('chat', function (channel, user, message) {
    // If the message starts with !hello..
    if (message.indexOf('!hello') === 0) {
        // Say something
        // https://github.com/Schmoopiie/twitch-irc/wiki/Command:-Say
        client.say(channel, 'Hey '+user.username+'! How you doing? Kappa');
    }
});