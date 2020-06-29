module.exports = {
  name:"settings",
  code:`
$title[Settings]
$description[Welcome Channel
$replaceText[$replaceText[$checkCondition[$getServerVar[welcome]!=];false;**No welcome channel set**];true;<#$getServerVar[welcome]>]

Welcome Message:
$replaceText[$replaceText[$checkCondition[$getServerVar[wmessage]!=];false;**No welcome message set**];true;$getServerVar[wmessage]]

Goodbye Channel:
$replaceText[$replaceText[$checkCondition[$getServerVar[goodbye]!=];false;**No goodbye channel set**];true;<#$getServerVar[goodbye]>]

Goodbye  Message:
$replaceText[$replaceText[$checkCondition[$getServerVar[gmessage]!=];false;**No goodbye message set**];true;$getServerVar[gmessage]]

Auto Role:
$replaceText[$replaceText[$checkCondition[$getServerVar[autorole]!=];false;**No auto role set**];true;<@&$getServerVar[autorole]>]]
$footer[GreenBot  |  gb!help  |  gb!invite]
$color[c5ff00]
`
}