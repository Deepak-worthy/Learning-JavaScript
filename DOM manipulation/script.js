// TRAVERSING THE DOM //
var itemlist =document.querySelector('#items');
// parentNode
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentNode.parentNode.parentNode);
// parentElement
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentElement.parentElement.parentElement);
// childNodes
console.log(itemlist.childNodes);
console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor = 'yellow';
// FirstChild
console.log(itemlist.firstChild);
// firstElementChild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = 'Hello 1';

// lastChild
console.log(itemlist.lastChild);
// lastElementChild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textcontent ='Hello 4';
// nextSibling
console.log(itemlist.nextsibling);
//nextElementsibling
console.log(itemlist.nextElementSibling);
// previoussibling
console.log(itemlist.previousSibling);
// previousElementsibling
console.log(itemlist.previousElementsibling);
//itemlist.previousElementsibling.style.color = 'green';
// createElement
// Create a div
var newDiv = document.createElement('div');
// Add class
newDiv.className= 'hello';
// Add id
newDiv.id = 'hello l';
console.log(newDiv);

// Add attr
newDiv.setAttribute('title', 'Hello Div');
// Create text node
var newDivText = document.createTextNode('Hello world');
// Add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);

var container2 = document.querySelector('#items');
var li = document.querySelector('.list-group-item');
container2.insertBefore(newDiv, li);