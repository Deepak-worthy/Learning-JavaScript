let li = document.getElementsByClassName('list-group-item');
console.log(li);

//gives error
//li[4].style.backgroundColor = 'yellow';

// GETELEMENTSBYTAGNAME //
let liByTag = document.getElementsByTagName('li');

liByTag[4].style.backgroundColor = 'yellow';