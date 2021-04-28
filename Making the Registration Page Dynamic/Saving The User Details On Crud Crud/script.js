const formElement=document.querySelector('#form-element');
formElement.addEventListener('submit',onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    let nm=document.querySelector('#name');
    let em=document.querySelector('#email');
    let ph=document.querySelector('#phoneNo')    
    
    // POST REQUEST
    axios({
        method:'post',
        url:'https://crudcrud.com/api/d301b7b77a5d42119e8d8558b0e4db13/registeruser', 
        data:{
            name: nm.value,
            email:em.value,
            phone:ph.value
        }
        })
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}

function showOutput(res) {
    document.querySelector('#studentDetails').innerHTML =
    `<pre>${JSON.stringify(res.data, null, 2)}</pre>`;  
}