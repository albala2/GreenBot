module.exports = {
  name:"crime",
  code:`
$onlyIf[$randomText[1;2;1;2;2;1;2]==1;{execute:CrimeLose}]
$onlyIf[$randomText[1;2;1;2;2;1;2]==2;{execute:CrimeWin}]
$cooldown[15m;Wait a bit or the police will catch you! You need to wait {time} more to escape than you can commit a crime again!]
$onlyIf[$getUserVar[GreenCoins]>=200;You need to have at least 200 GreenCoins in your wallet!]
`
}
//opy the ti