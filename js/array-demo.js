//To change text on page//
.document.queryselector('h1').textContent = 'Hello, class';
//Same thing below//
var element = document. queryselector('h1');
element.textContent = 'Hello, class';
//Will actually change the p tag to an H1 tag//
var myPTag = document.queryselector('p');
myPTag.innerHTML - '<h1> This is text changing to h1 tag</h1>'

var ages = [3, 4, 2, 5, 7];
var ageSum = 0;
//i is 0.  If i is less than ages.lenth than increment i + 1//
for (var i = 0; i < ages.length; ++i) {
  ageSum = ageSum + ages[i];
  //console.log(ages[i]);
}

console.log(ageSum / ages.length);

//Another way to do above//
ages.forEach(function (age) {
  ageSum = ageSum + age;
});
//Anonymous function
