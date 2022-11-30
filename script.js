
// ANONYMOUS FUNCTION: ODD NUMBERS,

 let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

// let odd = function(arr){
//     let result = [];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 !== 0) {
//      result.push(arr[i]); 
//     } }
//     return result;
// }
// console.log(odd(numbers));
// output: (6)[1, 3, 5, 7, 9, 11];

// IMEDIATELY INVOKED FUNCTION EXPERSSIONS:
// ODD NUMBERS,

// (function odd(arr){
//     let result = [];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 !== 0) {
//      result.push(arr[i]); 
//     } }
//      console.log(result);
// })
// (numbers);

// output: (6)[1, 3, 5, 7, 9, 11];

// TITTLE CAPS IN ARRAY: 
// anonymous function:
let str = ["name:","age:","job:","language:"];
 
// let caps = function(arr){
//    let titleStr = [];
// for(let i = 0; i<arr.length; i++){
//  let a =  arr[i] = arr[i][0].toUpperCase()+ arr[i].slice(1);
// titleStr.push(a);
  
// }
// return titleStr
// } 
// console.log(caps(str))
// output: 
//  ['Name:', 'Age:', 'Job:', 'Language:']

// TITTLE CAPS IN ARRAY:
 // IMEDIATELY INVOKED FUNCTION EXPERSSIONS:

 (function caps (arr){
    let capStr = [];
 for(let i = 0; i<arr.length; i++){
  let a =  arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
 capStr.push(a);  
 }
console.log(capStr);
 })
 (str)

//  ['Name:', 'Age:', 'Job:', 'Language:']

//sum of all numbers in a array;
//anonymous function:
// input
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

let add = function(arr){
    let sum = 0; 
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(add(numbers));

// output 78;

//sum of all numbers in a array;
//iife function:
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

(function add(arr){
    let sum = 0; 
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    } 
    console.log(sum);
});
    (numbers);

// output 78;


//prime numbers
//anonymous function:
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

let prime = function(arr){
    let num = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]% 2 !== 0 && arr[i] % arr[i] === 0){
            num.push(arr[i]);
        }
    }
return num
}
console.log(prime(numbers));

//output
// [1, 3, 5, 7, 9, 11]

//prime numbers
//iife function:

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

(function prime (arr){
    let num = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]% 2 !== 0 && arr[i] % arr[i] === 0){
            num.push(arr[i]);
        }
    }
console.log(num)
})
(numbers);

//output
// [1, 3, 5, 7, 9, 11]

//palindrome
//anonymous function:

let words = ["defined","mask", "kayak", "racecar", "code","mom"];

// let findPalindrome = function(arr){
//     let palindromeWords = [];
//     for(let i = 0; i<arr.length; i++){
//         let a = arr[i];
//         arr[i] = arr[i].split("").reverse().join("");
//         if(arr[i]=== a){
//             palindromeWords.push(arr[i]);
//         }
//     }
//           return palindromeWords;
// }
// console.log(findPalindrome(words));

// output:['kayak', 'racecar', 'mom']


//palindrome;
// iife function:

 
(function palindrome(arr){
    let palindromeWords = [];
    for(let i = 0; i<arr.length; i++){
        let a = arr[i];
        arr[i] = arr[i].split("").reverse().join("");
        if(arr[i]=== a){
            palindromeWords.push(arr[i]);
        }
    } 
    console.log(palindromeWords);
})
(words);

// output:['kayak', 'racecar', 'mom']

//return median of two sorted arrays:
//anonymous function:

let num1 = [12, 2,4];
let num2 = [4,35,6];
let median = function(arr1,arr2){
let arr3  = arr1.concat(arr2);
arr3.sort(function(a,b){return a-b})
 let n = arr3.length/2; 
 Math.floor(n)
 return arr3[n];
}
console.log(median(num1, num2));

// output:6

//retrn median
//iife function:

(function median (arr1,arr2){
    let arr3  = arr1.concat(arr2);
    arr3.sort(function(a,b){return a-b})
     let n = arr3.length/2; 
     Math.floor(n)
     console.log(arr3[n]);
    })(num1,num2)

    // output:6

    //remove duplicates
    //anonymous function:

    let dupArr = [2,3,2,"hi","hello!","hi"];
    // let findDup = function(arr){
    //     let real = [];
    //     for(let i = 0; i<arr.length; i++){
    //         if(!real.includes(arr[i])){
    //     real.push(arr[i]); 
    //         }
    //     }
    //     return real;
    // }
    // console.log(findDup(dupArr));

    // output [2, 3, 'hi', 'hello!']

    //remove duplicates
    //iife function:

    (function findDup(arr){
        let real = [];
        for(let i = 0; i<arr.length; i++){
            if(!real.includes(arr[i])){
        real.push(arr[i]); 
            }
        }
        console.log(real);
    }) (dupArr);

    // output [2, 3, 'hi', 'hello!']

    //rotate an array by k times.
    //anonymous function:

    let numbers1 = [1,2,3,4,5,6];

    let rotate = function(arr){
        for(let i = 0; i < arr.length; i++){
           if(i <= arr.length-1){
        let a = arr.shift();
     arr.push(a);
            }
        }
           return arr;

    }
    console.log(rotate(numbers1));

    // output [1, 2, 3, 4, 5, 6];

    //rotate an array by k times.
    //iife function:

    (function rotate(arr){
        for(let i = 0; i < arr.length; i++){
           if(i <= arr.length-1){
        let a = arr.shift();
     arr.push(a);
            }
        }
        console.log(arr);

    })(numbers1);

    // output [1, 2, 3, 4, 5, 6];

    //odd numbers
    //arrow function

    // let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];  

    let oddArrow = (arr)=>{
            let result = [];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] % 2 !== 0) {
             result.push(arr[i]); 
            } }
            return result;
        }
        console.log(oddArrow(numbers));

        // output: (6)[1, 3, 5, 7, 9, 11]

        //tittle string

        // let str = ["name:","age:","job:","language:"];

        let capsarrow =(arr)=>{
   let titleStr = [];
for(let i = 0; i<arr.length; i++){
 let a =  arr[i] = arr[i][0].toUpperCase()+ arr[i].slice(1);
titleStr.push(a);
  
}
return titleStr
} 
console.log(capsarrow(str))

// output: 
//  ['Name:', 'Age:', 'Job:', 'Language:']

//sum of all numbers in a array;
// arrow function;

let addarrow =(arr)=>{
    let sum = 0; 
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(addarrow(numbers));
// output 78

//prime numbers

// input
 // let numbers = [1,2,3,4,5,6,7,8,9,10,11,12]; 

 let primearrow=(arr)=>{
    let num = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]% 2 !== 0 && arr[i] % arr[i] === 0){
            num.push(arr[i]);
        }
    }
return num
}
console.log(primearrow(numbers));
//output [1, 3, 5, 7, 9, 11]

//palindromeWords
//input

// let words = ["defined","mask", "kayak", "racecar", "code","mom"];

 let findPalindromearrow =(arr)=>{
        let palindromeWords = [];
        for(let i = 0; i<arr.length; i++){
            let a = arr[i];
            arr[i] = arr[i].split("").reverse().join("");
            if(arr[i]=== a){
                palindromeWords.push(arr[i]);
            }
        }
              return palindromeWords;
    }
    console.log(findPalindromearrow(words));
    
    // output:['kayak', 'racecar', 'mom']