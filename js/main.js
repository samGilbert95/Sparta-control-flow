var bool = true;
var name = "Sam";
var num = prompt ("Pick a number");


// IF - ELSE STATEMENT + DOM MANIPULATION
//if (!bool){
//  document.getElementById("test").innerHTML = "True";
//} else {
//  document.getElementById("test").innerHTML = "False";
//  //console.log("False");
//}

// IF - ELSEIF STATEMENTS

if (num > 22){
  document.getElementById("test").innerHTML = "Big Number";
} else if (num < 22 || num === 22){
  document.getElementById("test").innerHTML = "Small Number";
} else {
  document.getElementById("test").innerHTML = "Not A Number";
}

//  CONDITIONAL OPERATORS
// if(name="sam" || name ="dawn"){...}  //OR STATEMENTS
// if(name="sam" && age=22){...}        //AND STATEMENTS

// SWITCH STATEMENTS
/*switch (name){
    case 'Ted': ...                    //REQUIRES BREAK;
    case 'Todd': ...
    default:
      console.log("Error");
} */
