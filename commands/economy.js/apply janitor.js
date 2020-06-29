module.exports = {
  name:"apply_janitor",
  code:`
$setUserVar[job;Janitor]
$setUserVar[pay;100]
**You succesfuly became a Janitor!As a janitor you get a pay of 100 GreenCoins!**
$onlyIf[$getUserVar[job]==0;You need first to quit your current job!Using \`$getServerVar[prefix]!quit_job\`!]
`
}