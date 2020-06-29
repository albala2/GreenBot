module.exports = {
  name:"setmuterole",
  code:`
$onlyPerms[admin;Only server administrators can execute this command!]
$setServerVar[mute;$roleID[its $replaceText[$replaceText[$message[];<@&;];>;]]]
Mute Role succesfuly set to <@&$roleID[its $replaceText[$replaceText[$message[];<@&;];>;]]>
`
}