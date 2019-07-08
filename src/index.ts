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
