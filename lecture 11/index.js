// show the alert message 
//alert(2+3);

//to print web page
// window.print();

//var x= 10;
var y= 20;
z =30;
console.log(y+z);


//hosting
console.log(a);
function a(){
    console.log(x);
var x= 10;
console.log(x);
}
a();
//console.log(x);

//let and const are used for defining block scope variables
let hello = "hey world";
{
    let hello = " hello world";
    console.log(hello);
}
console.log(hello);

for(let i = 0; i<5; i++){
console.log(i);
}

/* operators
assingment operator -. =, += , -=, *=, /=, %=, **=
arithmatic operator -> +-/  */

console.log("********operators**********")
var first = 10;
var second = 20;
second += first;
console.log(second);
console.log(first-second);
console.log(first*second);

console.log("****comarision operators****")
console.log(2**3);
console.log(0==0);
console.log(2>3);
console.log(2<=3);
console.log(2=="2");
console.log(first!= second);

2>3 ? console.log(true) : console.log(false);

console.log("******logical operator******")

//&& || !
if((5%2 ==1)||(4%2==0)){
    console.log("true")
}
else{
    console.log("false");
}

//demo with && and || combined

if((true && true) && (false && false)){
    console.log("inside this combination")
}
else{
    console.log("inside else block")
}


//typeof and instaceof operators
console.log(typeof 2);
console.log(typeof "hello");
console.log(typeof [12, 13]);
console.log(typeof {"q": 10})


console.log("****bitwise opertaor****")
console.log(5&1);
console.log(5<<1);
console.log(~5);
console.log(5^1);
console.log(5|2);

console.log("*****functions*****")

function square(num=4){
    return num*num;
}
console.log(square(5));
{
    var s = 50;
}
function area(){
    let l = 10;
    let b = 20;
    return l*b;
}
console.log(area());