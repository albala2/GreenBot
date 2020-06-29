module.exports = {
  name:"ban",
  code:`
$onlyPerms[ban;You don't have enough permissions]
$ban[$mentioned[1];$noMentionMessage[]]
$onlyIf[$authorID!=$mentioned[1]; ❌ You cannot ban yourself!]
$title[User Has Been Banned!]
$description[Banned: <@$mentioned[1]>
Banned by: <@$authorID>
Reason: $noMentionMessage[]]
`
}