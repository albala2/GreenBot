module.exports = {
  name:"mute",
  code:`
$onlyPerms[manageroles;<:error:581372917737193472**You don't have enough permissions to run this command.**]
$onlyIf[$getUserVar[mute]!=;No mute role set!Please try again after you set a role as mute role!]
$mute[$getServerVar[mute]]
$title[**Mute**]
$color[#FF0000]
$footer[Muted by $username[].]
$description[

Muted: <@$mentioned[1]>
Muted by: <@$authorID>
Reason: $noMentionMessage[]
]
`
}