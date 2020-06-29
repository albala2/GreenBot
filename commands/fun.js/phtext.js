module.exports = {
  name:"phtext",
  code:`
$onlyIf[$guildID!=;]
$cooldown[10s;Don't spam the command..]

$image[https://api.alexflipnote.dev/pornhub?text=$replaceText[$splitText[1]; ;+]&text2=$replaceText[$splitText[2]; ;+]]

$textSplit[$message[];/]
$onlyIfMessageContains[$message[];/;x Incorrect usage, use: $getServerVar[prrfix]phtext Text1/Text2]
`
}