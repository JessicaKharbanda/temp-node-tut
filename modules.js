// const amount=9

// if(amount<10)
// {
//     console.log('small number');
// }
// else{
//     console.log('large number');
// }

// console.log(`hey, it's my first node app!!!`);

//CommonJS, every file is module (by default)


// ***Modules - Encapsulated Code (only share minimum)***

const names = require('./names')
const sayHi=require('./utils')
const data = require('./alternative-flavor')
require('./mind-grenade') //gives output because function has been invoked in mind-grenade file itself, no need to assign a variable and invoke it here also
sayHi('jessica')
sayHi(names.john)
sayHi(names.peter)