module.exports = {
  name:"setgoodbyechannel",
  code:`
$setServerVar[goodbye;$mentionedChannels[1]]
$title[Goodbye Channel]
$description[The goodbye channel has been set to $message[1]!Don't forget to set the goodbye message too!]
$footer[Action by $username[]]
$color[11a776]
$onlyAdmin[Only server administrators can use this command!]
`
}