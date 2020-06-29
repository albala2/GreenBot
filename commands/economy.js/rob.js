module.exports = {
  name:"rob",
  code:`
$onlyIf[$randomText[1;2;1;2;1;2;2]==1;{execute:RobLose}]
$onlyIf[$randomText[1;2;1;2;1;2;2]==2;{execute:RobWin}]
`
}