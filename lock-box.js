//set up prompt sync

const prompt = require('prompt-sync')();
// set correct passcode


const passCode = prompt('Enter the passcode(Numbers only & 4 digit pin): ')
const pwC = '2348'
if (pwC === passCode) {
    console.log('success')
} else {
    console.log('failure')
}