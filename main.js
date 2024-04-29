// 1-task 


// function true_false_type(arr) {
//     return arr.reduce((acc, val) => {
//         if (val) {
//             acc.truthy.push(val);
//         } else {
//             acc.falsy.push(val);
//         }
//         return acc;
//     }, { truthy: [], falsy: [] });
// }

// let input = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
// let result = true_false_type(input);
// console.log(result);


// 2-task 


// Array.prototype.sum = function() {
//     return this.reduce((acc, val) => acc + val, 0);
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.sum())


// 3-task 


// String.prototype.title = function() {
//     let a_vowel = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (let char of this.toLowerCase()) {
//         if (a_vowel.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// };

// let str = "Hello, World!";
// console.log(str.title())



// 4-task 


// String.prototype.length_text = function() {
//     return this.length;
// }

// let  str = "Hello,  World!";
// console.log(str.length_text())


// 5-task 

// function exist(board, word) {
//     let  rows = board.length;
//     let  cols = board[0].length;

//     function DFS(row, col, index) {
//         if (index === word.length) return true;

//         if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[index]) return false;

//         let  temp = board[row][col];
//         board[row][col] = '*';

//         let  found = DFS(row + 1, col, index + 1) ||
//                       DFS(row - 1, col, index + 1) ||
//                       DFS(row, col + 1, index + 1) ||
//                       DFS(row, col - 1, index + 1);

//         board[row][col] = temp;

//         return found;
//     }

//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (DFS(i, j, 0)) return true;
//         }
//     }

//     return false;
// }

// let  board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
// console.log(exist(board1, "ABCCED"))
// console.log(exist(board1, "SEE"))


// 6-task 


// ishlay olmadim!!!!

// 7-task 


// function title(text) {
//     let  text1 = /Najot ta'lim/i; 
//     let  match = text.match(text1);
//     return match ? match[0] : "Najot ta'lim not found";
// }

// let  text = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";
// let  Output = title(text);
// console.log(Output); 



// 8-task 

// var isindex = function(p, q) {
//         if (p.length !== q.length) return false;
    
//         for (let i = 0; i < p.length; i++) {
//             if (p[i] !== q[i]) return false;
//         }
    
//         return true;
//     };
    
//     let p1 = [1,2,3];
//     let q1 = [1,2,3];
//     console.log(isindex(p1, q1))
//     let p2 = [1,2];
//     let q2 = [1,null,2];
//     console.log(isindex(p2, q2))
    
//     let p3 = [1,2,1];
//     let q3 = [1,1,2];
//     console.log(isindex(p3, q3))