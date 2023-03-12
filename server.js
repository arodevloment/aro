const express = require("express");

const app = express();

app.listen(() => console.log("start btrolie"));

app.use('/ping', (req, res) => {

  res.send(new Date());

});

const Discord = require('discord.js');

const client = new Discord.Client();

const cmd = require("node-cmd");

const ms = require("ms");

const fs = require('fs');

const ytdl = require("ytdl-core");

const canvas = require("canvas");

const convert = require("hh-mm-ss")

const fetchVideoInfo = require("youtube-info");

const simpleytapi = require('simple-youtube-api')

const util = require("util")

const gif = require("gif-search");

const jimp = require("jimp");

const guild = require('guild');

const hastebins = require('hastebin-gen');

const getYoutubeID = require('get-youtube-id');

const pretty = require("pretty-ms");

const moment = require('moment');

const request = require('request');

const dateFormat = require('dateformat');

const prefix = "b!" //prefix e bot dabni 

const developers = "627387357976592395" // id  acwnte xot dabni

client.on("ready", () => {

console.log(

`Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`

);


setInterval(function() {

let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];

client.user.setActivity(STREAMING, {

type: "playing",

url: "https://www.twitch.tv/SYSETEM"

});

}, 3000);

});

////////

client.on('typingStart', (ch, user) => {
      if(user.presence.status === 'offline') {

          ch.send(`${user}(:  :blush:    دەستەکەو کەشف بوو ئەوە خۆت ۆفلاین ئەکەی خێرا خۆت ۆنلاین کە`)    //lera chiw pe xosha bele
          .then(msg => {
              msg.delete(10000)
          })
      }
  })

////////

////////

client.on('message', message => {

 

     if (message.content.startsWith("b!bans")) {

 

         message.guild.fetchBans()

 

         .then(bans => message.channel.send(`${bans.size} کەس باندە لەسێرڤەر 💔 `))

 

   .catch(console.error);

 

 }

 

 });

 

////////

////////

client.on('message', message => {

 

if(message.content.includes("@everyone")){

if(!message.member.hasPermission('KICK_MEMBERS')){

message.delete(); 

message.reply("ئێمە ستافی کاک حاجین زۆرت ماوە دووبارە ئێڤریوەن لێبەی گوت خوارد 😂😈")

}

 

}

 

});

 

 

client.on('message', message => {

 

if(message.content.includes("@everyone@everyone")){

if(!message.member.hasPermission('KICK_MEMBERS')){

message.delete(); 

message.reply("ئێمە ستافی کاک حاجین زۆرت ماوە دووبارە ئێڤریوەن لێبەی گوت خوارد 😂😈")

}

 

}

 

});

////////

////////

client.on("guildCreate", guild => {

 

  console.log(` کاک حاجی ! ${guild.name} owner ${guild.owner.user.username}!`)

 

 });

 client.on('message', message => {

      if(message.content === prefix + "close") {

                     if(!message.channel.guild) return message.reply('** سەرکەوتونەبوو **');

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ڕۆڵی نیە بۆئەم ئیشە__**');

 

               message.channel.overwritePermissions(message.guild.id, {

 

             SEND_MESSAGES: false

 

               }).then(() => {

 

                   message.reply("**__قفڵکرا  __ ✅ **")

 

               });

 

                 }

 

     if(message.content === prefix + "open") {

 

                         if(!message.channel.guild) return message.reply('** سەرکەوتوبوو **');

 

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('rolet niya')

 

               message.channel.overwritePermissions(message.guild.id, {

 

             SEND_MESSAGES: true

 

               }).then(() => {

 

                   message.reply("**__کرایەوە__✅**")

 

               });

 

     }

 

 });

 

////////

////////

client.on('message', message => {

    if (message.content.startsWith("b!avatar")) {

        var mentionned = message.mentions.users.first();

    var x5bzm;

      if(mentionned){

          var x5bzm = mentionned;

      } else {

          var x5bzm = message.author;

 

      }

        const embed = new Discord.RichEmbed()

        .setColor("RANDOM")

        .setImage(`${x5bzm.avatarURL}`)

      message.channel.sendEmbed(embed);

    }

});

////////

////////

client.on("guildMemberAdd", member => {

  let channel = member.guild.channels.find("name", "𝕎𝔼𝕃ℂ𝕆𝕄𝔼");

  let memberavatar = member.user.avatarURL;

  if (!channel) return;

  let embed = new Discord.RichEmbed()

    .setColor("RANDOM")

    .setThumbnail(memberavatar)

    .addField(" > :bust_in_silhouette: | ناوی مێمبەر : ", `${member}`)

    .addField(" > :hibiscus:| بەخێربێیت 😍",`, `)

    .addField(" > :id:| ئایدی میمبەر :", "**[" + `${member.id}` + "]**")

    .addField(" > :family_mwgb:⎮ تۆ کەسی ژمارە", `${member.guild.memberCount}`)

    .addField(" >  ⎮ناوی سێرڤەر", `${member.guild.name}`, true)

    .setFooter(`${member.guild.name}`)
 
    .setImage("https://cdn.discordapp.com/attachments/741012443370618942/742679216683745350/64606986881607.5da714d2001f6.gif")

    .setTimestamp();

  channel.sendEmbed(embed);

});

////////

////////

client.on("guildMemberRemove", member => {

  let channel = member.guild.channels.find("name", "𝕃𝔼𝔽𝕋");

  let memberavatar = member.user.avatarURL;

  if (!channel) return;

  let embed = new Discord.RichEmbed()

    .setColor("RANDOM")

    .setThumbnail(memberavatar)

    .addField("ناوی مێمبەر:", `${member}`)

    .addField("لێفتی کرد لە سێرڤەر")

    .addField(" ئێ لۆ کاکە لۆ  ")

    .addField("ژمارەی مێمبەری سێرڤەر", `${member.guild.memberCount}` + " کەس")

    .setFooter(`${member.guild.name}`)

    .setImage("https://cdn.discordapp.com/attachments/735170525327785995/742553053189636126/giphy.gif")

    .setTimestamp();

  channel.sendEmbed(embed);

  

  

});

////////

////////

client.on("message", message => {

if (message.content === "b!invite") {

if (!message.channel.guild)

return message.reply(

"Please Do not type bot commands in bot private chat"

);

let embed = new Discord.RichEmbed()

.setColor("GREEN")

.setTitle("=-->   کلیک لێرەبکە بۆئەوەی بۆتەکە جۆینی سێرڤەرت بکەم    <--=")

.setURL(

"https://discord.com/api/oauth2/authorize?client_id=739505161332064337&permissions=8&scope=bot"

) // Type Your Link here after ''

.setImage(

"https://cdn.discordapp.com/attachments/735170525327785995/742574076895428690/20200811_054343.gif"

)
.setFooter("ᵏᵃᵏ7aji", message.author.avatarURL);

message.channel.sendEmbed(embed);

}

});


////////

////////

client.on("message", message => {

if (message.content.split(" ")[0].toLowerCase() === "b!clear") {

const word = message.content;

const number = word.slice(7, word.length);

const int = Number(number);

if (!message.member.hasPermission("MANAGE_MESSAGES")) {

return message.channel.send(

"تۆ ناتوانیت ئەم فرمانە ئەنجەم بدەیت `MANAGE_MESSAGE`گەواد چونکە ڕۆڵەکەی تۆ ئەمەی پێ نیە "

);

}

if (int >= 101) {

return message.channel.send(

"بۆتەکە توانایی نیەلە 100چات زیاتر بسڕێتەوە"

);

}

if (!message.member.hasPermission("MANAGE_MESSAGES")) {

return message.channel.send(

"ناتوانى "

);

}

if (int == "1000") {

return message.channel.send("supply A Number to Delete");

} else if (isNaN(int)) {

return message.reply("Must be a number");

}

message.channel.bulkDelete(int).then(() => {

return message.channel

.send(`Cleared ${int} messages.`)

.then(m => m.delete(5000));

});

}

});

////////

////////

client.on("message", zaid => {

if (zaid.content === "b!bot") {

const bot = new Discord.RichEmbed()

.setAuthor(client.user.username, client.user.avatarURL)

.setColor("#00000")

.addField(

"**____خێرای خەتەکەت____**: ",

` ${Date.now() - zaid.createdTimestamp}` + "__ __ ",

true

)

.addField("**__سێرڤەرەکان__** : ", `→ ${client.guilds.size}`, true)

.addField("**__چەناڵەکەن__** : ", `→ ${client.channels.size} `, true)

.addField("**__میمبەرەکان__** : ", `→ ${client.users.size} `, true)

.addField("**__ناوی بۆتەکە__** : ", `→ ${client.user.tag} `, true)

.addField("**دروست کەری بۆتەکە** : ", `→ <@627387357976592395>`,

)

.setFooter(zaid.author.username, zaid.author.avatarURL);

zaid.channel.send(bot);

}

});

////////

////////

client.on('message', message => {

    if (message.content === "b!server") {

        if (!message.channel.guild) return

        var verificationLevel = message.guild.verificationLevel;

        const verificationLevels = ['None','Low','Meduim','High','Extreme'];

        var Y1 = message.guild.createdAt.getFullYear() - 2000

        var M2 = message.guild.createdAt.getMonth()

        var D3 = message.guild.createdAt.getDate()

        const xNiTRoZ = new Discord.RichEmbed()

         .setAuthor(message.author.username , message.author.avatarURL)

         .setColor('RANDOM')

         .setTimestamp()

         .setTitle(message.guild.name,message.guild.iconURL)

         .addField(':id: ئایدی سێرڤەر',`${message.guild.id}`,true)

         .addField(':date: کاتی درووستبوون',D3 + '.' + M2 + '.' + Y1,true)            

         .addField(':crown: ئۆنەری سێرڤەر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)            

         .addField(':busts_in_silhouette: ژمارەی مێمبەر ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)

         .addField(':speech_balloon: کەناڵ' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)

         .addField(':earth_asia: دەوڵەت',message.guild.region)

         .addField(':ribbon: ئیمۆجی سێرڤەر',`${message.guild.emojis.size}`,true)

         .addField(':construction: لیڤڵ',`${verificationLevels[message.guild.verificationLevel]}`,true)

         .addField(':closed_lock_with_key: ڕۆڵس  '+message.guild.roles.size+' ','Type `a!role` To See The Server Roles!')

         .setImage(

"https://cdn.discordapp.com/attachments/735170525327785995/742574076895428690/20200811_054343.gif"

)

         message.channel.send({embed:xNiTRoZ});

     }

    });

////////

////////

client.on('message', message => {

    if(message.content == 'b!member') {

    const embed = new Discord.RichEmbed()

    .setDescription(`**میمبەرەکانی سێرڤەر 🔋

:green_heart: onlina kan ${message.guild.members.filter(m=>m.presence.status == 'online').size}

:heart:mash xulakan       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}

:yellow_heart: idla kan      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   

:black_heart: offline   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 

:blue_heart:   ژمارەی هەموو میمبەرەکان    ${message.guild.memberCount}**`) 

  

         message.channel.send({embed});

 

    }

  });

////////

////////

client.on('message', message => {

    if (message.content === "b!role") {

        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')

        const embed = new Discord.RichEmbed()

        .setColor('RANDOM')

        .addField('ڕۆڵی سێرڤەر:',`**[${roles}]**`)

        message.channel.sendEmbed(embed);

    }

});

////////

////////

client.on('message', message => {

    if (message.content === "b!help") {

        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')

        const embed = new Discord.RichEmbed()

        .setColor('RANDOM') 

        .addField('b!sbot--بۆ زانیاری بۆتەکە لەچەند سێرڤەرە')

        

        .addField('b!clear--بۆ سڕینەوەی چات ')

        

        .addField('b!role-- بۆ زانیاری ڕۆڵ لەسێرڤەرەکەت')

        

        .addField('b!member--بۆ زانیاری میمبەر لەسێرڤەر  ')

        

        .addField('b!server--بۆ زانیاری سێرڤەر')

        

        .addField('b!avatar--بۆ بینینی وێنەی پڕۆ فایلت')

        

        .addField('b!invite--بۆ ئینڤایت کردنی بۆتەکە')

        

        .addField('b!help--بۆ زانیاری بۆتەکە')

        

        .addField('b!bans--بۆ زانیاری باندەکان لەسێرڤەرت')

        

        .addField('b!close--بۆ داخستنی چەناڵ')

        

        .addField('b!open--بۆ کردنەوەی چات')

        

        .addField('b!bc-- بۆ ڕیکلام کردن لەسێرڤەرەکەت بە بۆت')

        

        .addField('ofline--ئەگەر کەسێ خۆی ئۆڵاین کە ئەم بۆتە دەری دەخا')

        

        .addField('anti everyone--ئەمەش بەکاردی بۆ ئێڤریەوەن هەرکەسێ ئێڤری وەن لێدا ڕەشی دەکاتەوە')

        

        .addField('𝕃𝔼𝔽𝕋  -بەم جۆرە بنوسە لێفت بەشی لێفت کاردەکا')

        

        .addField('𝕎𝔼𝕃ℂ𝕆𝕄𝔼--بەم جۆرە بنوسە وێڵکەم بەشی وێڵکەم کاردەکا')



        .addField('b!role--بۆ زانیاری ڕۆڵ')
        

        .addField('b!say--بۆ قسە پێکردنی بۆت بەچات')
        
        

        .addField('b!bot--بۆ زانیاری بۆتەکە لەچەند سێرڤەرە')

        .addField('BY 𝚔𝚊𝚔7aji⚜')


        .setImage(

"https://cdn.discordapp.com/attachments/735170525327785995/742574076895428690/20200811_054343.gif"

)
        message.channel.sendEmbed(embed);

    }

        

    

});

////////

////////


////////
client.on("message", message => {
if (message.author.bot) return;

if (!message.content.startsWith("b!say")) return;

let command = message.content.split("b!say")[0];
command = command.slice("b!say");

let args = message.content.split("b!say").slice(1);

// +say by professor
if (command === "b!say") {
if (!message.channel.guild)
return message.channel
.send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
.then(m => m.delete(5000));
if (!message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send("ببورە ئەم دەسەڵاتەت نیە ADMINISTRATOR");
message.delete();
message.channel.sendMessage(args.join("b!say"));
} 
  
  
if ("b!sbot") { /////دەتوانی ئەو پێرڤێکسەی بگۆڕیت
if (!message.channel.guild)
return message.channel
.send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
.then(m => m.delete(5000));
if (!message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send("ببورە ئەم دەسەڵاتەت نیە MANAGE_MESSAGES");
let say = new Discord.RichEmbed()
.setDescription(args.join("b!sbot"))
.setColor(0x23b2d6)
.setImage("https://cdn.discordapp.com/attachments/731131020337872926/731132561794793532/image0-2.gif");
message.channel.sendEmbed(sbot);
message.delete();
}
});

////////

 

 

///////kak7aji//////

client.on('message', message => {

  if(!message.channel.guild) return;

if(message.content.startsWith('b!bc')) {

if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

let args = message.content.split(" ").join(" ").slice(2 + prefix.length);

let copy = "THOMAS";

let request = `Requested By ${message.author.username}`;

if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**   دەتەوێ ئەم نامەیە بنێری
نامەکە ئەمەیە☜︎︎︎ :** \` ${args}\``).then(msg => {

msg.react('✅')

.then(() => msg.react('❌'))

.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });

let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

reaction1.on("collect", r => {

message.channel.send(`☑ |   ${message.guild.members.size}  بەسەرکەوتوویی نێردرا `).then(m => m.delete(5000));

message.guild.members.forEach(m => {

var bc = new

Discord.RichEmbed()

.setColor('RANDOM')

.setTitle(':mega: ڕیکلام')

.addField('> سێرڤەر <', message.guild.name)

.addField('> نێردرا لەلایەن <', message.author.username)

.addField('<📨>   <📨> ',args)

.setImage('https://cdn.discordapp.com/attachments/703243461079597138/708070790079184957/image0.gif')

.setThumbnail('https://cdn.discordapp.com/attachments/703243461079597138/707245934530003328/3301a13ac3fcadfba8ccb2d6682e7701.gif')

.setFooter(copy, client.user.avatarURL);

m.send({ embed: bc })

msg.delete();

})

})

reaction2.on("collect", r => {

message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));

msg.delete();

})

})

}

})

////////

////////
client.on("message", message => {
  if (message.content === prefix + "sbot") {
    if (!message.channel.guild) return;
    if (message.content < 1023) return;
    const Embed11 = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setDescription(
        `*** This Bot Joined In This Servers : ${
          client.guilds.size
        } \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join("\n")}***`
       
      )
      
      
      .setImage(
        "https://cdn.discordapp.com/attachments/735170525327785995/742574076895428690/20200811_054343.gif"
      );
    message.channel.sendEmbed(Embed11);
  }
});
////////

////////

////////


client.login("ODk4MDc5Nzc2OTAyODg1Mzc2.GtpNez.Jj589gw0sqCJCHGQZHmJpZHtO1bwZbIGsuOKJg");//tokne bot dabne
