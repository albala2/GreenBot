module.exports = {
  name:"achievement",
  code:`
$title[Achievement Got!]
$footer[GreenBot  |  $getServerVar[prefix]help  |  $getServerVar[prefix]invite]
$color[45b42f]
$image[https://minecraftskinstealer.com/achievement/$random[1;39]/Achievement+Get%21/$replaceText[$message; ;+]]
$onlyIf[$message[1]!=;You can't achieve nothing!]
`
}