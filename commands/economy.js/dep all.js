module.exports = {
  name:"dep",
  code:`
$setUserVar[GreenCoins;$sub[$getUserVar[GreenCoins];$getUserVar[GreenCoins]]]
$setUserVar[bank;$sum[$getUserVar[bank];$getUserVar[GreenCoins]]]
$description[**You have deposited all your <:GreenCoin:715422681163366422> GreenCoins!**]
$footer[gb!help  |  GreenBot]
$title[Deposited]
$color[d28108]
$onlyIf[$message[1]==all;]
`
}