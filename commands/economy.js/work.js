module.exports = {
  name: "work",
  code: `
**You made your job as $getUserVar[job] and got $getUserVar[pay] <:GreenCoin:715422681163366422> GreenCoins!**

$onlyIf[$getUserVar[job]!=0;You don't have any job!To get 1 check the job list by doing $getServerVar[prefix]jobs]

$setUserVar[GreenCoins;$sum[$getUserVar[GreenCoins];$getUserVar[pay]]]

$setUserVar[twork;$sum[$getUserVar[twork];1]]

$cooldown[20m;You can work again in {time}!]
`
}
  
 