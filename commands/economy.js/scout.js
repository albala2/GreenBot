module.exports = {
  name:"scout",
  code:`
$title[Scouting]
$color[FFCC99]
$description[
You scouted the area for GreenCoins and found $random[0;100] GreenCoins $randomText[under;over;on;next to;lying on;perched on;inside;spilled on;hanging on] the $randomText[sofa;couch;chair;table;TV;bed;toilet;dog;counter;computer;desk;piano;car]!
]
$setUserVar[GreenCoins;$sum[$getUserVar[GreenCoins;$authorID];$random[0;100]];$authorID]
$cooldown[30s;You already scouted the area. Wait for another {time} until scouting again.]
`
}