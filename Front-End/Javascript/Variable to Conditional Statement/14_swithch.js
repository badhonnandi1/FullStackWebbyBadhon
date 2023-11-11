let grade = "A";

// switch(grade){ 
//     case "A":
//         console.log("You got an A. Great job!");
//         break; // break statement "jumps out" of a switch statement.
//     case "B":
//         console.log("You got a B. Good job!");
//         break;
//     case "C":
//         console.log("You got a C. You can do better!");
//         break;
//     case "D":
//         console.log("You got a D. You need to study!");
//         break;
//     case "F":
//         console.log("You got an F. You Failed!");
//         break;
//     default:
//         console.log("Invalid grade");
//         break;
// }

switch(True){ 
    case grade>=90:
        console.log("You got an A. Great job!");
        break; // break statement "jumps out" of a switch statement.
    case grade>=80:
        console.log("You got a B. Good job!");
        break;
    case grade>=70:
        console.log("You got a C. You can do better!");
        break;
    case grade>=60:
        console.log("You got a D. You need to study!");
        break;
    case  grade<50:
        console.log("You got an F. You Failed!");
        break;
    default:
        console.log("Invalid grade");
        break;
}

