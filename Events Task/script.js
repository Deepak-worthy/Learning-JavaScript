const submitButton=document.querySelector('#submit-button');

/*submitButton.addEventListener('mouseover',(e)=>
{
    e.preventDefault();
    document.querySelector('#form-element').style.background='pink';
});
submitButton.addEventListener('mouseout',(e)=>
{
    e.preventDefault();
    document.querySelector('p').innerHTML='<h1>You have been pranked</h1>';
});
submitButton.addEventListener('click',(e)=>
{
    e.preventDefault();
    document.querySelector('body').style.backgroundImage="url('https://cdn.statically.io/img/wallpaperaccess.com/full/205627.jpg')";
});*/

const formElement=document.querySelector('#form-element');
const studentname=document.querySelector('#name');
const email=document.querySelector('#email');
const phone=document.querySelector('#phoneNo')
const studentList=document.querySelector('#studentsList')
const message=document.querySelector('#msg');

formElement.addEventListener('submit',onSubmit);
function onSubmit(e)
{
    e.preventDefault();
    if(studentname.value==='' || email.value==='' || phone.value==='')
    {
        message.innerHTML='Please enter all fields';
        setTimeout(()=>message.remove(),3000);
    }
    else
    {
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`
            ${studentname.value}, ${email.value}, ${phone.value}`
        ));
        studentList.appendChild(li);
        //Clear fields
        studentname.value='';
        email.value='';
        phone.value='';
    }
}