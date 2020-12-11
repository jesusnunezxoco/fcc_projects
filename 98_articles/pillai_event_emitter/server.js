const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('hungry', () => {
  console.log('growlll');
});


myEmitter.emit('hungry');

// can accept arguments to use in the function
myEmitter.on('sad', (name, tvshow, hours) => {
   console.log(`${name} watched ${tvshow} for ${hours} hours`);
 });
 
// can emit more than once
// can pass values
 myEmitter.emit('sad', "Jesus", "Arrested Develop S1-S3", 20);

 myEmitter.on('sick', () => {
    console.log("cough cough")
 });

 myEmitter.once('sick'); //runs one time and never after
 myEmitter.emit('sick'); //doesn't run
