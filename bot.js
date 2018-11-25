const Discord = require('discord.js');
const client = new Discord.Client();

const ytdl = require("ytdl-core");
const request = require("request");
const fs = require("fs");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("yourtube-info");


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '?ping') {
    	message.reply('pong');
  	}
    
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
