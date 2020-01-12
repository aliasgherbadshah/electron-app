console.log('CREATING WINDOWS TASK SCHEDULER ');
const { exec } = require('child_process');
exec(`my.bat`, (err, stdout, stderr) => {
    console.log(err, stdout, stderr);
    if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});