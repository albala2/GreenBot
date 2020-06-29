 module.exports = {
name: "play",
code: `
Song \`$message[]\` added to the queue!
Song duration: $songInfo[duration]
Added: $songInfo[url] To The Queue!
$play[$message[]]
`
}
 