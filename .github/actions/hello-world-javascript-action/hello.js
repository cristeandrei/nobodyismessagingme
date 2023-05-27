const {execSync} = require('child_process')
const core = require('@actions/core');
const github = require('@actions/github');
var fs = require('fs');

try {
  execSync("npx nuxi generate ././././")
  fs.readdir("./.output", (err, files) => {
    files.forEach(f => console.log(f))
  });

  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

} catch (error) {
  core.setFailed(error.message);
}