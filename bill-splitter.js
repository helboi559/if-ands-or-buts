//input: asks user1 how much they paid
//output: returns bill split evenly

// add prompt sync
const prompt = require('prompt-sync')();

//person 1 and 2 var & get total
//difference var
//if 1 paid more then
    //then 2 owes 1 diff
//
let person1_Bill = Number(prompt('How much did person 1 pay?: '))
let person2_Bill = Number(prompt('How much did person 2 pay?: '))

if (person1_Bill > person2_Bill) {
    console.log(`person 2 owes $${person1_Bill - person2_Bill}`)
} else if (person2_Bill > person1_Bill) {
    console.log(`person 1 owes $${person2_Bill - person1_Bill}`)
} else {
    console.log('the bill is already split!')
}

