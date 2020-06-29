module.exports = {
  name:"setgoodbyemessage",
  code:`
$setServerVar[gmessage;$message[]]
$title[**Goodbye Message!**]
$description[New goodbye message has been set!Goodbye message:$message[]]
$footer[Action by :$username[]]
$color[11a776]
$onlyAdmin[Only server administrators can execute this command!]
`
}