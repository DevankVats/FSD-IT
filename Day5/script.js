// function display()
// {
// console.log("Hi, good morning "+"\I am Devankvats");
// }
// display();
// function display(){
//     let x=confirm("Are u sure?");
//     alert("User click "+x);
// }

// function display(){
//         let x=prompt("Enter your name","Devank");
//          alert("User click "+x);
//      }

let a=26
let b="26"
console.log(a==b);
console.log(a===b);

function validate(){
   let name=document.getElementById("login").value ;
   let pass=document.getElementById("pass").value;
   let p1=document.getElementById('result');
   if(name="admin"&&pass=="admin"){
    p1.innerText="login successful";
    return true;
   }
   else{
    p1.innerText="login failed";
    return false;
   }

}


