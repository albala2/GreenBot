module.exports = {
  name:"deposit",
  code:`
$title[Deposited]
$setUserVar[GreenCoins;$sub[$getUserVar[GreenCoins];$message[]]]
$setUserVar[bank;$sum[$getUserVar[bank];$message[]]]
$description[**You have deposited  $message[] <:GreenCoin:715422681163366422> GreenCoins!**]
$color[d28108]
$onlyIf[$message[]<=$getUserVar[GreenCoins];**You can't deposit more GreenCoins than you have.**]
`
}
