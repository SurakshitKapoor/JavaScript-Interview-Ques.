
let arr = [
    {name:"Arjun", rollNo:21, totalMarks:67},
    {name:"Manan", rollNo:22, totalMarks:56},
    {name:"Neha", rollNo:23, totalMarks:34},
    {name:"Gagan", rollNo:24, totalMarks:78},
    {name:"Arti", rollNo:25, totalMarks:46},
];

console.log(arr);

// 1. convert name to uppercases

// First approach:-
let newArr = [];
for(let i=0; i<arr.length; i++) {
    newArr.push(arr[i].name.toUpperCase());
}
console.log(newArr);

// Second Approach:-
// let arr2 = arr.map((item) => item.name.toUpperCase());
// console.log(arr2);

//Third Approach:-
// let arr3 = arr.forEach((item, i) => {
//     arr[i].name = item.name.toUpperCase()
//     });
// console.log(arr);

// 2. Get all entries where totalMarks > 50

//First
// let arr4 = arr.filter((item) => item.totalMarks > 50);
// console.log(arr4);

//second -> hope it's works -> with some wrong output
// let arr5 = arr.map((item) => {
//     if(item.totalMarks>50) {
//         return item;
//     }
// });
// console.log(arr5);

//Third
// var arr6 = [];
// for(let i=0; i<arr.length; i++) {
//     if(arr[i].totalMarks > 50) {
//         arr6.push(arr[i]);
//     }
// }
// console.log(arr6);

// 3. Find the sum of totalMarks
//First
// var sum=0;
// for(let i=0; i<arr.length; i++) {
//     sum = sum+arr[i].totalMarks;
// }
// console.log("Sum of All Total Marks: ", sum);


//Second
// let sum = arr.reduce((acc, curr) => acc+curr.totalMarks, 0);
// console.log("sum is : ", sum);

// 4. find names in uppercase where totalMarks > 50

//first
// var arr6=[];
// for(let i=0; i<arr.length; i++) {
//     if(arr[i].totalMarks > 50){
//         arr6.push(arr[i].name.toUpperCase());
//     }
// }
// console.log(arr6);

///second
// var arr6 = arr.filter((item) => item.totalMarks>50).map((item) => item.name.toUpperCase());
// console.log(arr6);


// 5. add 20 as grace marks who scores < 50, then find those students name where student get totalMarks > 60

var arr6 = arr.map((item) => {
    if(item.totalMarks<50){
        item.totalMarks = item.totalMarks+20;
    }
    return item;
}).filter((item) => item.totalMarks>60)

console.log(arr6);