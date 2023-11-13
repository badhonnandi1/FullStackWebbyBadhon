let student = ['john', 'jane', 'mary', 'mark', 'peter'];

student.forEach(capitalize); // 
student.forEach(print); // print is a callback function

function capitalize(element, idx , array){
    array[idx] = element[idx].toUpperCase() + element.substring(1);
}

// console.log(student[0]); // John
// console.log(student[1]); // Jane

function print(element){
    console.log(element); // John, Jane, Mary, Mark, Peter
}