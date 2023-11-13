let grades = [100,50,90,60,100,70,80];
grades = grades.sort(decendingSort); // sort is a callback function
grades = grades.sort(acendingSort); // sort is a callback function
grades.forEach(print_element); // print_element is a callback function
function decendingSort(x,y){
    return y-x;
}
function acendingSort(x,y){
    return x - y;
}
function print_element(element){
    console.log(element);
}


