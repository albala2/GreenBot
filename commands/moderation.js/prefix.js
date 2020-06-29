module.exports = {
  name:"setprefix",
  code:`
$onlyPerms[admin;❌ You must have **Administrator** permission to change my prefix!]
**The new prefix had been succesfuly set to $message[].**
$setServerVar[prefix;$message[]]
$setServerVar[prefix2;$toUppercase[$message[]]]
`
}