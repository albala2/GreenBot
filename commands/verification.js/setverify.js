module.exports = {
  name:"setverify",
  code:`
$addTimestamp
$footer[$serverName[$guildID]]
]
The assigned role that members will acquire after successfully completing the verification process
$description[| <@&$mentionedRoles[1]> |
$color[8d9c9f]

$title[$serverName[$guildID] verification system has been set and enabled!]
$thumbnail[$serverIcon]

$setServerVar[vswitch;ENABLED]
$setServerVar[vrole;$mentionedRoles[1]]

$onlyAdmin[x Missing \`ADMINISTRATOR\` permissions]

$onlyIf[$getServerVar[vswitch]==DISABLED;x Verification system is already enabled. If you're trying to alter the currently set channel or role, you must first disable the security system and then set the new one! Use gb!disable verification and then gb!setverify]
`
}