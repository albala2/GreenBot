module.exports = {
  name:"botinfo",
  code:`
$title[Bot Info]
$description[
**Servers: $serverCount
-----------------------------
Users: $allMembersCount
-----------------------------
Memory: $memory MB/512MB
-----------------------------
Cpu usage: $cpu
-----------------------------
Uptime: $uptime
-----------------------------
Ping: $ping MS**]
$color[FFFF2]
$footer[GreenBot  |  $getServerVar[prefix]invite;$userAvatar[$authorID]]
$addTimestamp
`
}