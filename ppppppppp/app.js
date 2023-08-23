// // let team=[name1,name2,name3,name4,name5]
// // for(i=0;i<team.length;i++){
// //     document.write(`Captain ${team[1]},Player1 is${team[2]}`);
    
// // }
// // team('Jalal','Asad','Nimra','saad','Wahaj');
// function name(name1,name2,name3,name4,name5) {
//     document.write (`Captain ${name1},Player1 is${name2},Player2 is${name3},Player3 is${name4},Player4 is${name5}`)
// }
// name('Jalal','Asad','Nimra','saad','Wahaj')

// const value=prompt("Enter your value")
//  if (value=="a") {
//     document.write("Its a Vowel")
//  } else if (value=="e") {
//     document.write("Its a vowel")
//  } else if (value=="i") {
//     document.write("Its a vowel")
//  } else if (value=="o") {
//     document.write("Its a vowel")
//  } else if (value=="u") {
//     document.write("Its a vowel")
//  } else{
//     document.write("Its a Consonant")
//  }



// const value=prompt("Enter correspoding")
//  if (value=="#") {
//     document.write("Its a #")
//  } else if (value=="a") {
//     document.write("Its a Vowel")
//  } else if (value=="e") {
//     document.write("Its a vowel")
//  } else if (value=="i") {
//     document.write("Its a vowel")
//  } else if (value=="o") {
//     document.write("Its a vowel")
//  } else if (value=="u") {
//     document.write("Its a vowel")
//  } else if (value%2!==0) {
//     document.write("Its a Odd number")
//  } else if (value%2==0) {
//     document.write("Its a Evevn number")
//  } else{
//     document.write("Its not even/odd or vowel.")
//  }




const value=prompt("Enetr your mind")
if ((value>="a" && value<="z")||(value>="A" && value<="Z")) 
{
    if (value=="a" || value=="e" || value=="i" || value=="o" || value=="u") {
        document.write("<center>"+"<b>("+value+")</b>" + " Is a vowel."+"<br>"+"<br>"+"</center>");
    } else if (value=="A" || value=="E" || value=="I" || value=="O" || value=="U") {
        document.write("<center>"+"<b>("+value+")</b>" + " Is a vowel."+"<br>"+"<br>"+"</center>")
    } else{
        document.write("<center>"+"<b>("+value+")</b>" + " Is a Consonant."+"<br>"+"<br>"+"</center>")   
    }
}else{
        document.write("<center>"+"<b>("+value+")</b>" + " Its neither vowel/consonant."+"<br>"+"<br>"+"</center>")
}
if ((value>="1" && value<="9")) 
{
    if (value%2==0) {
        document.write("<center>"+"<b>("+value+")</b>" + "Is a even number"+"<br>"+"<br>"+"</center>")
    } else if (value%2!==0) {
        document.write("<center>"+"<b>("+value+")</b>" + "Is a odd number"+"<br>"+"<br>"+"</center>")
    } 
} else{
    document.write("<center>"+"<b>("+value+")</b>" + " Its neither even/odd number."+"<br>"+"<br>"+"</center>")
}























