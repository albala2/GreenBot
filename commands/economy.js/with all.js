module.exports = {
  name:"with",
  code:`
$setUserVar[GreenCoins;$sum[$getUserVar[GreenCoins];$getUserVar[GreenCoins]]]
$setUserVar[bank;$sub[$getUserVar[bank];$getUserVar[GreenCoins]]]
$description[**You have withdrawed all your GreenCoins!**]
$footer[gb!help  |  GreenBot]
$title[Deposited]
$color[d28108]
$onlyIf[$message[1]==all;]
`
}