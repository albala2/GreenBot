module.exports = {
  name:"disable",
  code:`
$serverName[$guildID] Verification system has been deactivated!

$setServerVar[vrole; ]
$setServerVar[vswitch;DISABLED]

$onlyPerms[admin;:x: Missing ADMINISTRATOR permissions]

$onlyIf[$getServerVar[vswitch]==ENABLED;Verification system is already disabled!]
$onlyIf[$message[1]==verification;]
`
}