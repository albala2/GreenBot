module.exports = {
  name:"warn",
  code:`
$replyIn[1ms]
$color[00FFFF]
$title[**Warning!**]
$description[**<@$mentioned[1]> has been warned in $serverName[$guildID]

Moderator - $username[]

Reason - $noMentionMessage[]**]
$setUserVar[warns;$sum[$getUserVar[warns;$mentioned[1]];1];$mentioned[1]]
$onlyPerms[manageroles;]
`
}