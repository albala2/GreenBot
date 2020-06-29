module.exports = {
  name:"setwelcomechannel",
  code:`
$setServerVar[welcome;$mentionedChannels[1]]
$title[Welcome Channel]
$description[The welcome channel has been set to $message[1]!Don't forget to set the welcome message too!]
$footer[Action by $username[]]
$color[11a776]
$onlyAdmin[Only server administrators can use this command!]
`
}