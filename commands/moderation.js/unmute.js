module.exports = {
  name:"unmute",
  code:`
$unmute[$getServerVar[mute]]
$title[**Mute**]
$color[#FF0000]
$footer[Muted by $username[].]
$description[;

Unmuted: <@$mentioned[<]>
Unmuted by: <@$authorID>
]
$onlyPerms[manageroles;<:error:581372917737193472>**You don't have enough permissions to run this command.**]
`
}