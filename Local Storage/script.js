/*localStorage.setItem("Favorite-Super-Hero:","Thor");
localStorage.setItem("Favorite-Movie:","Winter Soldier");
localStorage.setItem("Favorite-Programming-Language:","C++");*/

let Hero=localStorage.getItem("Favorite-Super-Hero:");
let Movie=localStorage.getItem("Favorite-Movie:");
let language=localStorage.getItem("Favorite-Programming-Language:");


const localdata=document.querySelector('#Local-storage-data');
const li1=document.createElement('li');
li1.appendChild(document.createTextNode(`Favorite-Super-Hero : ${Hero}`));
localdata.appendChild(li1);
const li2=document.createElement('li');
li2.appendChild(document.createTextNode(`Favorite-Movie : ${Movie}`));
localdata.appendChild(li2);
const li3=document.createElement('li');
li3.appendChild(document.createTextNode(`Favorite-Programming-Language: ${language}`));
localdata.appendChild(li3);

