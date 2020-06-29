module.exports = {
  name:"apply_gamedeveloper",
  code:`
$setUserVar[job;Game Developer]
$setUserVar[pay;400]
**You succesfuly became a Game Developer!As a game developer you get a pay of 400 GreenCoins!**
$onlyIf[$getUserVar[job]==0;You need first to quit your current job using \`$getServerVar[prefix]quit_job\`]
$onlyIf[$getUserVar[twork]>=12;You need to have worked at least 12 times before applying!]
`
}