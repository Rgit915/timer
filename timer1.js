//Implementation of Alaram clock/timer
/*
 - 'beep' sound  after specified time passed
 -  input(in seconds) from user(command line arguments)
 -  Example beep @ 3, 5, 9, 10, 15 seconds
 -  using 'process.stdout.write('\x07');' perform a system sound i.e beep/Ding

Edge cases:
1. No numbers are provided: Easy.
  - It should just not beep at all and end immediately since no beeps should get scheduled.
2. An input is a negative number:
  - Ignore/skip any numbers that are negative. We can't schedule anything in the past.
3. An input is not a number:
  - Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
*/

//Function validInput() to remove any invalid values such as negative and non numberic values

const validInput = function (args) {

  const times = [];  // to store the valid times
  for (let i = 0; i < args.length; i++){
    // convert the commandLine args(strings) into number
    const time = Number(args[i]);
    
    if(!isNaN(time) && time >= 0){
      times.push(time);
    }
  }
  return times;

};

// function to schedule the alarms
const scheduleAlarms = function(times) {
  //iterate over the array of time values
  for(let time of times){
    setTimeout(() =>{
      process.stdout.write('\u0007');  // to play a beep sound
      console.log(`Alarm! ${time} seconds have passed.`);
    }, time * 1000);   // converting time into milliseconds
  }
}

//to get command line arguments and using slice(2) excluding the first two elements

const commandLineArgs = process.argv.slice(2);

// call the functions
const alarmTimes = validInput(commandLineArgs);
scheduleAlarms(alarmTimes);        




