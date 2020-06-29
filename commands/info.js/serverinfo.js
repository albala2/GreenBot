module.exports = {
  name:"serverinfo",
  code:`
$title[Server Info]
$description[

__**SERVER**__ 

$image[$serverIcon]

Server Name: $serverName[$guildID]

:calendar: Creation Date: $creationDate[$guildID]

ID: $guildID
 
:earth_africa: Region: $serverRegion

:crown: Owner: <@$ownerID>

Emojis: $emoteCount

Channels: $channelCount

Roles: $roleCount

:page_with_curl: Verification Lv: $serverVerificationLvl

__**Members**__

:heavy_plus_sign: Server Members Count: $membersCount[]

:green_circle: Online: $membersCount[online]

:no_entry:  Do not Disturb: $membersCount[dnd],
  
:alarm_clock:  Idle: $membersCount[idle].

:mobile_phone_off:  Offline: $membersCount[offline]

------------------------------
Server Icon:
]
$color[ff756]
`
}