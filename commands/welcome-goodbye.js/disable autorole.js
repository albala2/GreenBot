module.exports = {
  name:"disable",
  code:`
$setServerVar[autorole;]
Auto Role disabled succesfuly!!
$onlyPerms[admin;You need to be server administrator to execute this command!]
$onlyIf[$message[1]==autorole;]
`
}