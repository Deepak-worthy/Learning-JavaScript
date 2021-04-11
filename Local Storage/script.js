const formElement=document.querySelector('#form-element');
formElement.addEventListener('submit',onSubmit);
function onSubmit(e)
{
    e.preventDefault();
    let nm=document.querySelector('#name');
    let em=document.querySelector('#email');
    let ph=document.querySelector('#phoneNo')    
    localStorage.setItem("Name",nm.value);
    localStorage.setItem("Email-id",em.value);
    localStorage.setItem("Phone",ph.value);
    nm.value='';
    em.value='';
    ph.value='';
}

window.addEventListener('DOMContentLoaded', (event) => {

    event.preventDefault();
    let s_name=localStorage.getItem("Name");
    let s_email=localStorage.getItem("Email-id");
    let s_phoneNo=localStorage.getItem("Phone");

    const studentdetails=document.querySelector('#studentDetails');

    const li1=document.createElement('li');
    li1.appendChild(document.createTextNode(`Name : ${s_name}`));
    studentDetails.appendChild(li1);
    const li2=document.createElement('li');
    li2.appendChild(document.createTextNode(`Email : ${s_email}`));
    studentDetails.appendChild(li2);
    const li3=document.createElement('li');
    li3.appendChild(document.createTextNode(`Phone no. : ${s_phoneNo}`));
    studentDetails.appendChild(li3);
});