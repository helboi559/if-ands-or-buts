//input: asks 3 users how much they paid
//output: returns bill split evenly on who needs to pay whom

// add prompt sync
const prompt = require('prompt-sync')();


//ask questions
let person1_Bill = Number(prompt('How much did person 1 pay?: '))
let person2_Bill = Number(prompt('How much did person 2 pay?: '))
let person3_Bill = Number(prompt('How much did person 3 pay?: '))

//calc bill share(total /3)
const splitted = (person1_Bill + person2_Bill + person3_Bill)/3
//if p1 < share
    //they owe share - bill
// if (person1_Bill < splitted || person2_Bill < splitted || person3_Bill < splitted) {
//     console.log(`person 1 owes $${splitted - person1_Bill} person 2 owes $${splitted - person2_Bill} person 3 owes $${splitted - person3_Bill}`)
// } else {
//     console.log('the bill is already split!')
// }

//p1 pays both
    //p1 pays p2
    //p1 pays p3
//p2 pays both
    //p2 pays p1
    //p2 pays p3
//etc..
if (person1_Bill < splitted && person2_Bill > splitted && person3_Bill > splitted){
    console.log(`person 1 pays $${person2_Bill - splitted} to person 2 and $${person3_Bill - splitted} to person 3`)
} else if (person1_Bill < splitted && person2_Bill > splitted && person3_Bill < splitted){
    console.log(`person 1 pays $${person2_Bill - splitted} to person 2`)
} else if (person1_Bill < splitted && person2_Bill < splitted && person3_Bill > splitted){
    console.log(`person 1 pays $${person3_Bill - splitted} to person 3`)
} 
//else if (person1_Bill > splitted && person2_Bill < splitted && person3_Bill > splitted){
//     console.log(`person 2 pays $${person1_Bill - splitted} to person 1 and $${person3_Bill - splitted} to person 3`)
// } else if (person1_Bill > splitted && person2_Bill < splitted && person3_Bill < splitted){
//     console.log(`person 2 pays $${person1_Bill - splitted} to person 1 `)
// } else if (person1_Bill < splitted && person2_Bill < splitted && person3_Bill > splitted){
//     console.log(`person 2 pays $${person3_Bill - splitted} to person 3 `)
// } else if (person1_Bill > splitted && person2_Bill > splitted && person3_Bill < splitted){
//     console.log(`person 3 pays $${person1_Bill - splitted} to person 1 and $${person2_Bill - splitted} to person 2`)
// } else if (person1_Bill > splitted && person2_Bill < splitted && person3_Bill < splitted){
//     console.log(`person 3 pays $${person1_Bill - splitted} to person 1 `)
// } else if (person1_Bill < splitted && person2_Bill > splitted && person3_Bill < splitted){
//     console.log(`person 3 pays $${person2_Bill - splitted} to person 2 `)
// } 