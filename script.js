let array = [1,2,3,4,5];
let sum = array[0] + array[1] + array[2] + array[3] + array[4];
console.log(sum);

let objectArray = [
    {
        name: `Tobias`,
        age: `20`,
        address: `Mestervi`
     },
     {
        name: `Edvard`,
        age: `27`,
        address: `Station Nord`
     },
     {
        name: `Ivalu`,
        age: `45`,
        address: `Maniitsoq`
     }
]
console.log( `My name is ${objectArray[0].name}. My age is ${objectArray[0].age}. My address is ${objectArray[0].address}.`);

if(objectArray[0].age < 19){ 
    console.log(`I am teenager`);
}else{ 
    console.log(`I am an adult`);
}