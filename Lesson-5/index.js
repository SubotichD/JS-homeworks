// Функции
// (1)
function exers(a, b, c){
    console.log((a-b)/c)
}
exers(10, 5, 2);

// (3)
function min (a, b) {
    if (a < b) {
        console.log(a)
    }else {
        console.log(b)
    }
}
function max (a, b) {
    if (a > b) {
        console.log(a)
    }else {
        console.log(b)
    }
}
min(5, 7)
max(8, 10)

// (2)
function cube(num) {
    return num * num * num
}
let result = cube(5);
console.log(result)

// (5)
function isEven(number) {
    let x 
    if (number % 2 == 0) {
        x = true;
    } else {
        x = false;
    }
    return x;
}

console.log(isEven(10));

// (6)
// let arr = [5, 15, 25, 35,45, 60]

// function Even (arr) {
//     for (i = 0; i< Even.length; i++) {
//         if (isEven(arr[i]) == true) {
      
// }


// (4)



// (7)
// let symbol = prompt('символ');
// function hefren(n){
//   for(let i = 1; i <= n; i++){
//     let m = '';
//     for(let j = 0; j < i; j++){
//       m+= symbol == undefined || symbol.length-1 || symbol == ' ' ? i : symbol;
//     };
//     console.log(m+'\n')
//   }
// };
// hefren(prompt('число'))



// for (var i = 1; i <= 9; i++) {
// 	var str = ''; 

// 	for (var j = 1; j <= i; j++) {
// 		str = str + i;
// 	}
// 	document.write(str + '<br>');
// }



// (8)

// function writeTriangle(rows, isReverse) {
//     let indexes = new Array(rows).fill(0).map((_, i) => i);
//     if (isReverse) indexes.reverse();
//     for (let i of indexes) {
//         let spaces = ' '.repeat(rows - 1 - i);
//         console.log(spaces + '*'.repeat(1 + i*2) + spaces);
//     }
// }
 
// let n = +prompt('Введите число строк:');
// writeTriangle(n);
// if (confirm('Вывести перевёрнутый?')) writeTriangle(n, true);


// (9)
function  getFibNumber(n) {
    let array = [0, 1];
    for ( let i = 2; i<=n; i++) { 
            array[i] = array[i-1] + array[i-2];
        }
        console.log(array);
    }



    let i = 0;
    function showAllDigits(arr) {
        
        if(i < arr.length){
            console.log(arr[i])
            i++
            showAllDigits(arr)

        }
    }

    showAllDigits ([1, 2, 3, 4, 5, 6])



                    // 12

document.write('<br>Задание.12 в console log.<br>')

function topBottomRamka(length){
    let ramka = "";
    for (let i=0; i<length; i++){
        ramka += "*";
    }
    console.log(ramka);
}

let string = [];
string.push("Домашняя работа \"Функции\"");

let groupN = prompt("Введите номер группы");
string.push("Выполнил студент гр. " + groupN);

let lastName = prompt("Введите фамилию");
let name = prompt("Введите имя");
let patronymic = prompt("Введите отчество");
let fio = lastName + ' ' + name + ' ' + patronymic;
string.push(fio);

let dlinaRamki = 0;
for (let i=0; i<string.length;i++){
    if (dlinaRamki < string[i].length){
        dlinaRamki = string[i].length;
    }
}
dlinaRamki += 2;
topBottomRamka(dlinaRamki);
for (let i=0; i<string.length; i++){
    let resultString = "*";
    for (let j=0; j<dlinaRamki;j++){
        if (string[i][j] === undefined){
            if (j === dlinaRamki-2){
                resultString += '*';
            }
            else{
                resultString += ' ';
            }
        }
        else{
            resultString += string[i][j];
        }
    }
    console.log(resultString);
}
topBottomRamka(dlinaRamki);


  




