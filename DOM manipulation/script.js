// // QUERYSELECTOR //
let  secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';
let  thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';

// QUERYSELECTORALL 
let li = document.querySelectorAll("li");
console.log(li);
li[1].style.color="green";

let odd = document.querySelectorAll('li:nth-child(odd)');
for(let i = 0; i < odd.length; i++)
    odd[i].style.backgroundColor = 'green';

