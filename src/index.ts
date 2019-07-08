document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// diff var and let ?

if (true) {
  console.log(v);
  console.log(l);
  var v = 1;
  let l = 2;
}

console.log(v);
// console.log(l), l is not defined (let declarations live inside of the block scope)

// diff between "===" and "=="
// == only compares value, === compares value and type

if ("1" == 1) {
  console.log("I am not looking at the type.");
}

if ("1" === 1) {
  console.log("I am not looking at the type.");
} else {
  console.log("I am looking at the type");
}

// difference between let and const
// difference between "undefined" and "null"
// they both define and empty value, but undefined gets assigned automaticaly
// also type of undefined is undefined and typeof null is object

// use of arrow function
const person = {
  firstName: "",
  secondName: "",
  setName: function(name) {
    let splitName = n => {
      let nameArray = n.split(" ");
      this.firstName = nameArray[0];
      this.secondName = nameArray[1];
    };

    splitName(name);
  }
};

person.setName("John Connor");
console.log("firstname", person.firstName);
