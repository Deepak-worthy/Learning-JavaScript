const formElement=document.querySelector('#form-element');
formElement.addEventListener('submit',onSubmit);

// GET REQUEST
axios({
    method:'get',
    url:'https://crudcrud.com/api/d301b7b77a5d42119e8d8558b0e4db13/registeruser'
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err)); 
   
function onSubmit(e)
{
    e.preventDefault();
    let nm=document.querySelector('#name');
    let em=document.querySelector('#email');
    let ph=document.querySelector('#phoneNo')    
    
 
    // POST REQUEST
    axios({
        method:'post',
        url:'https://crudcrud.com/api/17e7599874264c0bb5e7e203252bbdd4/registeruser', 
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
    
    let outputDiv=document.querySelector('#studentDetails')
    res.data.forEach(element => { 
        const li1=document.createElement('li');
        li1.innerHTML =
        `<pre>${JSON.stringify(element, null, 2)}</pre>
        <button id="delete-button" >Delete</button>`; 

        outputDiv.appendChild(li1);
    });
    
}

const delete_btn=document.querySelector("#delete-button");
delete_btn.addEventListener('onclick',onDelete);

function onDelete(e)
{
    e.preventDefault();
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    
    let myobj = JSON.parse(ul.firstChild);

    // DELETE REQUEST
    axios
      .delete(`https://crudcrud.com/api/17e7599874264c0bb5e7e203252bbdd4/registeruser/${myobj._id}`)
      .then(res => {
          console.log(`Data of user with name ${res.data.name} is deleted`);
          if(button.textContent === 'Delete') {
            ul.removeChild(li);
        } 
        })
      .catch(err => console.error(err));
    
    
}