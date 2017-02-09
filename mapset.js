
//MAP
var a="hello";
var b={age:25};
var c=function abc(){};

var map=new Map();

map.set(a,"sow");
map.set(b,{name:"jan"});
map.set(c,"hello");

map.get(a);
map.get(b);
map.get(c);



//SET
var s = new Set();

s.has(1);
s.add(1);

s.has("sow");
s.add("sow");

s.has({a:"three"});
s.add({a:"three"});




//MULTIPLE SET
let s1 = new Set();
s1.add("hello").add("Goodmorning").add("hav a nice day");
for(var key of s1.values())
{
  console.log(key);
}



//SET AND SPREAD

var stringArray=["hello","bye","thankyou","sorry","hi"];

var mySet = new Set(stringArray);


mySet.has("hello");
mySet.has("bye");
mySet.has("thankyou");
mySet.has("sorry");
mySet.has("hi");

for(var key of mySet.values())
{
  console.log(key);
}