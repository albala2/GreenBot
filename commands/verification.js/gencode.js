module.exports = {
  name:"gencode",
  code:`
$setUserVar[verification;$randomString[4]]
**Your verification code - $randomString[4]**
$dm

$blackListRolesIDs[$getServerVar[vrole];:x::exclamation: You're already verified!]

$onlyIf[$getServerVar[vswitch]==ENABLED;Verification system is currently disabled by server owner or admin!]
`
}