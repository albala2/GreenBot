module.exports = {
  name:"verify",
  code:`
$deletecommand
<@$authorID> You've successfully been verified! Welcome to $serverName[$guildID]
$dm

$giveRole[$authorID;$getServerVar[vrole]]

$onlyIf[$message[]==$getUserVar[verification];x Wrong code! Please use exact code I gave to you in DMs. Make sure you're doing the command in the server and not in DMs. Example: gb!verify code_here]


$blackListRolesIDs[$getServerVar[vrole];:xexclamation: You are already verified!!]

$onlyIf[$getServerVar[vswitch]==ENABLED;Verification system is currently disabled by server owner or admin!]
`
}