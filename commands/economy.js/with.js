module.exports= {
  name:"with",
  code:`
$title[Withdrawed]
$setUserVar[GreenCoins;$sum[$getUserVar[GreenCoins];$message[]]]
$setUserVar[bank;$sub[$getUserVar[bank];$message[]]]
$description[**You have withdrawed  $message[] GreenCoins!**]
$color[d28108]
$onlyIf[$message[]<=$getUserVar[bank];You can't withdraw more GreenCoins than you have in bqnk.**]
`
}
