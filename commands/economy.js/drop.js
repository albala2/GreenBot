module.exports = {
  name:"drop",
  code:`
$setServerVar[drop;$message[1]]
**Drop incoming to claim it do \`gb!claimdrop\`** 
**Drop value: $message[1] GreenCoins**
$setUserVar[GreenCoins;$sub[$getUserVar[GreenCoins];$message[1]]]
$onlyIf[$getUserVar[GreenCoins]>=$message[1];You don't have enough money to drop!]
`
}