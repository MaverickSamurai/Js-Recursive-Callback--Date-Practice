// function sum(n) {
//     let result = 0;
//     for (let i = 0; i < n; i++) {

//         result += i;
//     }return result;
// }
// console.log(sum(4));

// function getSum(n) {
//     if (n == 1) {
//         return n;
//     } else {
//         return n + getSum(n - 1)
//     }
// } console.log(getSum(4));

// function getFactorial(n) {
//         if (n == 1) {
//             return n;
//         } else {
//             return n * getFactorial(n - 1)
//         }
//     } console.log(getFactorial(4));

// let students = ["Emil", "Sadiq", "Haqverdi", "Ramil"];

// students.forEach((element, index) => {
//     console.log(element + "-" + index);
// });

// let students = ["Emil", "Sadiq", "Haqverdi", "Ramil"];

// for (const item of students) {
//     console.log(item);
// }


// let user1 = {
//     email : "mirsamirba@code.edu.az",
//     password : "12345678"
// }
// let user2 = {
//     email : "orxan@code.edu.az",
//     password : "12345678"
// }
// let user3 = {
//     email : "seid@code.edu.az",
//     password : "12345678"
// }

// let users = [{
//     email: "mirsamirba@code.edu.az",
//     password: "12345678"
// },
// {
//     email: "orxan@code.edu.az",
//     password: "12345678"
// },
// {
//     email: "seid@code.edu.az",
//     password: "12345678"
// }];

// for (const key in users) {
//     // console.log(key);
//     // console.log(users[key]);
//     // console.log(users[key].email);


// }

// let users = [{
//     email: "mirsamirba@code.edu.az",
//     password: "12345678"
// },
// {
//     email: "orxan@code.edu.az",
//     password: "12345678"
// },
// {
//     email: "seid@code.edu.az",
//     password: "12345678"
// }];

// for (const item of users) {
//     for (const key in item) {
//         console.log(key);
//     }
// }

// let book = {
//     name: "Xosrov",
//     author: "Nizami",
//     pageCount: 20000
// }

// for (const key in book) {
//     console.log(book[key]);
// }


// let students = ["Emil", "Sadiq", "Haqverdi", "Ramil"];

// function getStudents(arr) {
//     for (const item of students) {
//         console.log(item);
//     }
// }
// getStudents(students)


// let students = ["Emil", "Sadiq", "Haqverdi", "Ramil"];

// function getStudents(t,m,...arr) {
//     for (const item of arr) {
//         console.log(item );
//     }
//     console.log(t);
//     console.log(m);
// }
// getStudents("Emil", "Sadiq", "Haqverdi", "Ramil");

// function sumEvenNums(arr) {
//     let sum = 0;

//     for (const item of arr) {
//         if (item % 2 == 0) {
//             sum += item
//         }
//     } return sum;
// }

// function sumOddNums(arr) {
//     let sum = 0;

//     for (const item of arr) {
//         if (item % 2 != 0) {
//             sum += item
//         }
//     } return sum;
// }

// function sumThanThreeNums(arr) {
//     let sum = 0;

//     for (const item of arr) {
//         if (item >= 3) {
//             sum += item
//         }
//     } return sum;
// }

// console.log(sumEvenNums([1, 2, 3, 4, 5, 7, 8, 9, 45, 25, 24]));
// console.log(sumOddNums([1, 2, 3, 4, 5, 7, 8, 9, 45, 25, 24]));
// console.log(sumThanThreeNums([1, 2, 3, 4, 5, 7, 8, 9, 45, 25, 24]));



// function evenNum(n) {
//     return n % 2 == 0;
// }

// function oddNum(n) {
//     return n % 2 != 0;
// }

// function threeNum(n) {
//     return n >= 3;
// }

// let evenNum =  n => n % 2 == 0;
// let oddNum =  n => n % 2 != 0;
// let threeNum =  n => n >= 3;

// console.log(numsByConditions([1, 2, 3, 4, 5, 7, 8, 9, 45, 25, 24], n => n % 2 == 0));
// console.log(numsByConditions([1, 2, 3, 4, 5, 7, 8, 9, 45, 25, 24], n => n % 2 != 0));
// console.log(numsByConditions([1, 2, 3, 4, 5, 7, 8, 9, 45, 25, 24], n => n >= 3));


// function numsByConditions(arr, callback) {
//     let sum = 0;

//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item
//         }
//     } return sum;
// }

// function sumOddNums(arr, callback) {
//     let sum = 0;

//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item
//         }
//     } return sum;
// }

// function sumThanThree(arr, callback) {
//     let sum = 0;

//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item
//         }
//     } return sum;
// }

// console.log(numsByConditions([1, 2, 3, 4, 5, 7, 8, 9, 45, 25, 24], evenNum));
// console.log(numsByConditions([1, 2, 3, 4, 5, 7, 8, 9, 45, 25, 24], oddNum));
// console.log(numsByConditions([1, 2, 3, 4, 5, 7, 8, 9, 45, 25, 24], threeNum));


// function sumThanThree(arr, callback) {
//     let sum = 0;

//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item
//         }
//     } return sum;
// }



// let numbers = [2, 5, 7, 99, 55, 3, 8, 22];

// let filtredNumbers1 = numbers.filter(m => m % 2 == 1)
// let sum = 0;

// for (const item of filtredNumbers1) {
//     sum += item
// }

// function sumNumbers(arr) {
//     let sum = 0;
//     for (const item of arr) {
//         sum += item;
//     }
//     return sum;
// }
// console.log(sum);


// let filtredNumbers = numbers.filter(m => m>8)

// console.log(filtredNumbers);
// console.log(numbers);


// let numbers = [2, 3, 4, 5, 6];
// console.log(numbers);

// numbers.forEach((item, index) => {
//     numbers[index] = item * 2;
// });
// console.log(numbers);

// let numbers = [2, 3, 4, 5, 6];

// let result = numbers.map(m=> m*m);

// console.log(result);
// console.log(numbers);

// let users = [
//     { name: "Ayxan", surname: "Nabatov", age: 23 },
//     { name: "Emil", surname: "Abdullayev", age: 20 },
//     { name: "Fidan", surname: "Mardanli", age: 17 }];


//     let date = new Date();

//     console.log(date);

//     let result = users.map(m=>{
//         return{
//            fullname: `${m.name}  ${m.surname}`,
//            yearOfBirth: date.getFullYear() - m.age
//         }
//     })
//     console.log(result);

