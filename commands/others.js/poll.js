module.exports = {
  name:"poll",
  code:`
$title[Poll Time!]
$addReactions[👍;👎]
$description[$message[1]] 
$footer[👍 You like it - 👎 You don't like it] 
$deletecommand[5ms]
$color[ff00df]
$onlyPerms[admin;Only Admins/Moderators can use this command!]
`
}