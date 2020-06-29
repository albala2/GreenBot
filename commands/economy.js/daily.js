module.exports = {
  name: "daily",
  code:`
$setUserVar[GreenCoins;$sum[$getUserVar[GreenCoins];250]]
$description[Welcome back!Here are your daily GreenCoins:
__**Daily GreenCoins**__:250 <:GreenCoin:715422681163366422>
$color[4dc447]
$title[Daily GreenCoins]
$replaceText[$replaceText[$checkCondition[$getUserVar[daily]==0];false;];true;**__Bonus GreenCoins__**:$getUserVar[daily] <:GreenCoin:715422681163366422> ]]
$replyIn[1s]
$cooldown[24h;You aleardy claimed your daily GreenCoins come back tomorrow!You can claim again in {time}]
`
} // Pentru ca sunt luate in oridine. Daca suma de la variabila este 1 si inainte sa spui suma mai adaugi 1. Va spune ca suma este 2.a