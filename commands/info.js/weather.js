module.exports = {
  name:"weather",
  code:`
$title[$randomText[⛅;☁️;❄️;⚡;☔;☀️] Weather of $message[]]
$image[https://wttr.in/$replaceText[$message[]; ;-].png?m]
$footer[$username[]]
$addTimestamp
$onlyIf[$message[]!=;Please provide a city!]
`
}