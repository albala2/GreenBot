module.exports = {
  name: "clear",
  code:`
$deleteIn[4s]
$deletecommand[0s]
$clear[$message[1]]
$title[Cleared Messages]
$color[00FF00]
$description[$username[] deleted $message[1] messages!]
$footer[$message[1] messages cleared!]
$onlyPerms[managechannels;You need to have manage channels permission to execute this command!]
`
};  