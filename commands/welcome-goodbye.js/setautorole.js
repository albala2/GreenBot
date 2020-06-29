module.exports = {
  name:"setautorole",
  code:`
$setServerVar[autorole;$mentionedRoles[1]]
$title[Auto Role]
$description[When a user will join the server will get $message[1] role!]
$color[c5ff00]
$deletecommand
$footer[Action by :$username[]]
$onlyPerms[admin;> Only administrators can execute this command!]
`
}