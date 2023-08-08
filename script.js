/*---------- Object of Fruits----------*/
Fruits = [
    {
        name: "cherry",
        color: "red",
        price: 250
    },
    {
        name: "chikoo",
        color: "brown",
        price: 70
    },
    {
        name: "apple",
        color: "red",
        price: 200
    },
    {
        name: "mango",
        color: "yellow",
        price: 120
    },
]

function sortByPrice() {
    console.log("Fruits Object");
    console.log(Fruits);
    let sortedFruits = Fruits.sort((a, b) => a.price - b.price);
    console.log("Fruits are sorted by price");
    console.log(sortedFruits);
}
function sortByName() {
    console.log("Fruits Object");
    console.log(Fruits);
    let sortedFruits = Fruits.sort(function (a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });
    console.log("Fruits are sorted by Name");
    console.log(sortedFruits);
}


// ------- Reverse string using split and reverse function --------//

function reverseFun(str) {

    var splitString = str.split("");  // ["h", "e", "l", "l", "o"]
    var reverseArray = splitString.reverse(); // ["o", "l", "l", "e", "h"]
    var joinArray = reverseArray.join(""); // "olleh"

    return joinArray; // "olleh"
}

reverseFun("hello");

/* Chaining the three methods together: */
function reverseFun1(str) {
    return str.split("").reverse().join("");
}
reverseFun1("hello");

// ------- Reverse string WITHOUT using split and reverse function --------//

function reverseString(str) {
    console.log("Original String :" + str);
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log("Reversed String :" + newString);
    return newString;
}

// Longest Common Subsequence //

// function longestCommonSubsequence(a, b) {
//     const matrix = Array(a.length + 1).fill().map(() => Array(b.length + 1).fill(0));
//     for(let i = 1; i < a.length + 1; i++) {
//         for(let j = 1; j < b.length + 1; j++) {
//             if(a[i-1] === b[j-1]) {
//                 matrix[i][j] = 1 + matrix[i-1][j-1];
//             } else {
//                 matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
//             }
//         }
//     }
//     return matrix[a.length][b.length];
// }

// let a = [2,3,4];
// let b = [2,3,7,8,4];

// console.log(longestCommonSubsequence(a,b));

// First Non repeating char in string //

function firstNonRepeatedChar(string) {
    for (var i = 0; i < string.length; i++) {
        var val = string.charAt(i);
        if (string.indexOf(val) == i && string.indexOf(val, i + 1) == -1) {
            console.log("Given string is : " + string);
            console.log("First Non-Repating Char in string is :" + val);
            return val;
        }
    }
    return null;
}

// Find the missing consecutive element form the given range

function findMissingConsecutiveNum() {
    arr = [-4, -3, -2, 0, 1, 2];
    let n = 0;
    let answer;
    console.log("Given Array:" + arr);
    while (n < arr.length) {
        if (arr[n + 1] - arr[n] == 1) {
            n++;
        }
        else {
            answer = arr[n] + 1;
            console.log("Missing Value is :" + answer);
            n = arr.length;
        }
    }
}

// All Even Number should come first , then Odd number form Given integer

function evenNumFirst() {
    arr = [-2, 10, -17, 9, 24, 25, -99, 15, -16, 8];
    let odd = new Array();
    let even = new Array();
    let n = 0;
    console.log("Given Array:" + arr);
    while (n < arr.length) {
        if (arr[n] % 2 == 0) {
            even.push(arr[n]);
            n++;
        }
        else {
            odd.push(arr[n]);
            n++;
        }
    }
    let ans = new Array();
    ans = even.concat(odd);
    console.log("Rearrange Array : " + ans);
}

// Find kth Smallest  element from Unsorted Array

function smallestElem(k) {
    let arr = [2, 45, 33, 21, 1, 0, 32, 78];
    arr.sort();
    console.log("smallest element is:" + arr[k - 1]);
}
