let fname = 'Christian';
let lname = 'Ronaldo';
let age = prompt("Masukkan umur Christian Ronaldo");

// Cara lama
// let result = frame + ''+ lname + 'is' + age + 'years ols';
//alert(result);

// Memakai template strings
let result = '${fname} ${lname} is ${age} years old ';
alert(result);   