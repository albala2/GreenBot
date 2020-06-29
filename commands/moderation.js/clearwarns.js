module.exports = {
  name:"clearwarns",
  code:`
$setUserVar[warns;$sub[$getUserVar[warns;$mentioned[1]];$noMentionMessage[]];$mentioned[1]]
$deletecommand
Successfully removed $noMentionMessage[] warns from <@$mentioned[<]>!!
$onlyPerms[managechannels;**You require Manage Channels Permission to run this command**]
$onlyIf[$getUserVar[warns;$mentioned[1]]>=$noMentionMessage[];You can't clear more warns than he have!!]
`
}