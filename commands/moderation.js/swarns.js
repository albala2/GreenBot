module.exports = {
  name:"swarns",
  code:`
$color[ffffff]
$addField[User;<@$mentioned[1]>]
$addField[Has;$getUserVar[warns;$mentioned[1]] warns]
$thumbnail[$userAvatar[$mentioned[1]]]
$onlyIf[$mentioned[1]!=;You need to mention someone]
`
}