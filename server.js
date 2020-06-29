const http = require('http');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200)
});
app.listen(process.env.PORT);

const api = require("discord-script");
const bd = new api({
  token: "token",
  prefix: ["$getServerVar[prefix]","$getServerVar[prefix2]"]
});
//VARS
bd.Variables({
  prefix: "gb!",
  prefix2: "Gb!",
  bank: "0",
  GreenCoins: "0",
  welcome: "",
  goodbye: "",
  Enabled: "yes",
  autorole: "",
  name: "$username[]",
  wmessage: "",
  gmessage: "",
  warns: "0",
  mute: "",
  vrole: "",
  verification: "",
  vswitch: "DISABLED",
  rob: "0",
  drop: "",
  daily:"0",
  job: "0",
  pay: "0",
  twork: "0"
})

//JOBS
bd.ExecutableCommand({
  name:"ApplyJanitor",
  code:`
$setUserVar[job;Janitor]
$setUserVar[pay;100]

**You succesfuly became a Janitor! As a janitor you get a pay of 100 GreenCoins!**

$onlyIf[$getUserVar[job]==0;You need first to quit your current job!Using $getServerVar[prefix]quit job!]
$onlyIf[$toLowercase[$message[1]]==janitor;]
`
})
//WELCOME AND GOODBYE!
bd.JoinedCommand({
  name:`$getServerVar[welcome]`,
  code:`
$title[Welcome]
$description[$replaceText[$replaceText[$getServerVar[wmessage];{user};<@$authorID>];{membersCount};$membersCount[]]]
$footer[GreenBot   |   gb!help   |   gb!invite  ]
$color[1043ce]
$thumbnail[$userAvatar[$authorID]]
$replaceText[$replaceText[$checkCondition[$getServerVar[autorole]!=];true;$giveRole];false;$repeatMessage][$replaceText[$replaceText[$checkCondition[$getServerVar[autorole]!=];true;$authorID];false];$replaceText[$replaceText[$checkCondition[$getServerVar[autorole]!=];true;$getServerVar[autorole]];false;]]
$useChannel[$getServerVar[welcome]]`
});
bd.onJoined()

bd.LeaveCommand({
  name:`$getServerVar[goodbye]`,
  code:`
$title[Goodbye]
$description[$replaceText[$replaceText[$getServerVar[gmessage];{user};<@$authorID>];{membersCount};$membersCount[]]]
$footer[GreenBot   |   gb!help   |   gb!invite  ]
$color[1043ce]
$thumbnail[$userAvatar[$authorID]]
`
});
bd.onLeave()

//ROB WIN AND LOSE
bd.ExecutableCommand({
  name:"RobWin",
  code:`
$setUserVar[GreenCoins;$sub[$getUserVar[GreenCoins;$mentioned[1]];$random[99;$getUserVar[GreenCoins;$mentioned[1]]]];$mentioned[1]]

$setUserVar[GreenCoins;$sum[$getUserVar[GreenCoins;$mentioned[1]];$random[99;$getUserVar[GreenCoins;$mentioned[1]]]]]

$title[Rob Panel] 
$color[35dfc7]
$description[$username[]  attemped to rob $username[$mentioned[1]] and got $random[99;$getUserVar[GreenCoins;$mentioned[1]]]] 

$onlyIf[$mentioned[1]!=;> Please mention a user to rob.] 

$onlyIf[$getUserVar[GreenCoins;$mentioned[1]]>99;> The mentioned user dosen't have atleast 100 GreenCoins.] 

$onlyIf[$getUserVar[GreenCoins]>199;> You need atleast 200 GreenCoins to rob.] 

$cooldown[2m;You need to wait {time} to rob again]
`
})

bd.ExecutableCommand({
  name:"RobLose",
  code:`
$setUserVar[GreenCoins;$sum[$getUserVar[GreenCoins;$mentioned[1]];150];$mentioned[1]]

$setUserVar[GreenCoins;$sub[$getUserVar[GreenCoins];150]]

$title[Rob Panel] 
$color[35dfc7]
$description[$username[]  attemped to rob $username[$mentioned[1]] but you end giving $username[$mentioned[1]] 150]

$onlyIf[$mentioned[1]!=;> Please mention a user to rob.] 

$onlyIf[$getUserVar[GreenCoins;$mentioned[1]]>99;> The mentioned user dosen't have atleast 100 GreenCoins.] 

$onlyIf[$getUserVar[GreenCoins]>199;> You need atleast 200 GreenCoins to rob.] 

$cooldown[2m;You need to wait {time} to rob again]
`
})

//CRIME WIN AND LOSE
bd.ExecutableCommand({
  name:"CrimeWin",
  code:`
$setUserVar[GreenCoins;$sum[$getUserVar[GreenCoins];$random[100;500]]]
$title[Crime!]
$description[**You attempted to rob** $randomText[**Mcdonald's**;**KFC**;**GreenBot**;**Discord**;**a house**;**Taco Bell**;**Santa Claus**;**Easter Bunny**;**CS:GO**;**fortnite**;**a bank**;**GreenBot Support Server**;**a Candy Store**;**Amazon**;**Tik Tok**]  
**and got $random[100;500] GreenCoins!**]
$color[c01a1a]
`
})

bd.ExecutableCommand({
  name:"CrimeLose",
  code:`
$setUserVar[GreenCoins;$sub[$getUserVar[GreenCoins];$random[10;200]]]
$title[Crime!]
$description[**You attempted to rob** $randomText[**Mcdonald's**;**KFC**;**GreenBot**;**Discord**;**a house**;**Taco Bell**;**Santa Claus**;**Easter Bunny**;**CS:GO**;**fortnite**;**a bank**;**GreenBot Support Server**;**a Candy Store**;**Amazon**;**Tik Tok**] **but the police arrived and fined you $random[10;200] GreenCoins**]
$color[c01a1a]
`
})
//BOT STATUS
bd.Status({
		0: {
			description: "gb!help | $serverCount servers!", 
			type: "PLAYING" 
		}, 
		1: {
			description: "gb!invite | $allMembersCount members!", 
			type: "WATCHING" 
		}
	}, 13000)
//EVENTS
bd.MessageEvent();
bd.MessageEditEvent();
//FOLDERS HERE
const fs = require("fs");

const folders = fs.readdirSync("./commands/");

for (const files of folders) {
  const folder = fs
    .readdirSync(`./commands/${files}/`)
    .filter(file => file.endsWith(".js"));

  for (const commands of folder) {
    const command = require(`./commands/${files}/${commands}`);
    bd.Command({
      name: command.name,
      code: command.code
    });
  }
}
