module.exports = {
  name:"give",
  code:`
$setUserVar[GreenCoins;$sum[$getUserVar[GreenCoins;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$setUserVar[GreenCoins;$sub[$getUserVar[GreenCoins];$noMentionMessage]]
$color[$random[0;9999]]
$allowMention
$title[GreenCoins!]
$description[<@$authorID> You just gave <@$mentioned[1]> $noMentionMessage[] <:GreenCoin:715422681163366422> GreenCoins!]
$onlyIf[$noMentionMessage[]<=$getUserVar[GreenCoins];Hey Hey wait a minute how you wanna give something you don't have xD!]
`
}
