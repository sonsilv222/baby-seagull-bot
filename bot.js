const Discord = requirre('discord.js');
const client - new Discord.Client();

client.login('NjU1ODg4Mjg3MTM4ODQwNTg4.XfbJ7A.8zSaXxcOICIpOfLAXP9YXkUhzkI');
 
client.on('ready', () => {
  console.log("The bot is logged in");
  }_;
  
  client.on('message', message => {
    if(message.author.bot)
      return;
     
if(message.content.toLowerCase() === 'hello')
})
