module.exports = {
  name:"captcha",
  code:`
$image[https://api.alexflipnote.dev/captcha?text=$replaceText[$message[]; ;+]]
$onlyIf[$message[1]!=;You need to give me something to make captcha]
`
}