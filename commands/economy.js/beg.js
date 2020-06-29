module.exports = {
  name:"beg",
  code:`
$title[You Begged!]
$description[<@$authorID> you begged $randomText[GreenBot;Donald Trump;Lil Toe;an older;a child;Billie Eilish;Shawn Mandes;Ariana Grande;a staff;a random guy] and got $random[20;100] <:GreenCoin:715422681163366422> GreenCoins!]

$setUserVar[GreenCoins;$sum[$getUserVar[GreenCoins];$random[20;100]]]

$cooldown[2m;You have to wait {time} more!]

$footer[GreenBot  |  $getServerVar[prefix]help  |  $getUserVar[prefix]invite]
$color[28ff00]
`
}//hi