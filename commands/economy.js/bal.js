module.exports = {
  name: "bal",
  code:`
$title[**Balance**]
$color[ff756]
$description[
$username[$mentioned[1;yes]] balance

💸**Wallet**:
$getUserVar[GreenCoins;$mentioned[1;yes]] <:GreenCoin:715422681163366422> GreenCoins

💳**Bank**:
$getUserVar[bank;$mentioned[1;yes]] <:GreenCoin:715422681163366422> GreenCoins]


$footer[Requested by: $username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
`
}