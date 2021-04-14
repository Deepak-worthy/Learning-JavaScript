var form = document.getElementById('submit-form');
var itemList = document.getElementById('list');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteOrEdit);

// Add item
function addItem(e){
    e.preventDefault();
    
    // Add text node with input value to li
    var li = document.createElement('li'); li.className = 'list-group-item';
    var newItem = document.getElementById('item').value;
    li.appendChild(document.createTextNode(newItem));
    
    
    //Append delete button to li
    var deleteBtn = document.createElement('button'); deleteBtn.className = 'btn-delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(deleteBtn);

    //Append Edit button to li
    var EditBtn = document.createElement('button'); EditBtn.className ='Edit';
    EditBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(EditBtn);
    
    // Append li to list
    itemList.appendChild(li);
}

// Delete or Edit item
function deleteOrEdit(e){
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    
    if(button.textContent === 'Delete') {
        ul.removeChild(li);
    } 
    else if(button.textContent === 'Edit') {
        const span = li.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'save';
    } 
    else if(button.textContent === 'save') {
        const input = li.firstElementChild;
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'Edit';
    }
}
