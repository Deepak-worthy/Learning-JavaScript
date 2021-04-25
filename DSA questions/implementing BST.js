function NodeBst(data){
    this.data=data;
    this.left=null;
    this.right=null;
}
function insert(root,data)
{
    if(root==null)
        return new NodeBst(data);
    
    if(data<root.data)
        root.left=insert(root.left,data);
    else if(data>root.data)
        root.right=insert(root.right,data);  
    return root;          
}
function search(root,data)
{
    if(root==null)
        return false;
    if(root.data==data)
        return true;
    else if(data<root.data)
        return search(root.left,data);
    else
        return search(root.right,data);       
}
let root=null;

root=insert(root,15);
root=insert(root,10);
root=insert(root,20);
root=insert(root,25);
root=insert(root,8);
root=insert(root,12);

const prompt= require('prompt-sync')();
let data=prompt("Enter value to be searched:");
search(root,data)?console.log("Found"):console.log("Not Found");