const formElement=document.querySelector('#form-element');
let n;
if(localStorage.getItem("n")==null)
    n=-1;
else
    n=localStorage.getItem("n");
formElement.addEventListener('submit',onSubmit);
function onSubmit(e)
{
    e.preventDefault();
    let userDetails=[];
    let nm=document.querySelector('#name');
    userDetails.push(nm.value);
    let em=document.querySelector('#email');
    userDetails.push(em.value);
    let ph=document.querySelector('#phoneNo');
    userDetails.push(ph.value);  
    
    ++n;
    localStorage.setItem(`User${n}`,JSON.stringify(userDetails));
    localStorage.setItem("n",n);
    nm.value='';
    em.value='';
    ph.value='';
}

document.getElementById("Users").addEventListener('click', (event) => {

    event.preventDefault();
    let N=localStorage.getItem("n");
    
    for(let i=0;i<=N;i++)
    {
        let details=JSON.parse((localStorage.getItem(`User${i}`)));

        const studentdetails=document.querySelector('#studentDetails');
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`User${i+1} : ${details[0]}, ${details[1]}, ${details[2]}`));
        studentDetails.appendChild(li);
    }
});