module.exports = {
  name:"setwelcomemessage",
  code:`

$setServerVar[wmessage;$message[]]
$title[**Welcome Message!**]
$description[New welcome message has been set!Welcome message:$message[]]
$footer[Action by :$username[]]
$color[11a776]
$onlyAdmin[Only server administrators can execute this command!]
`
}