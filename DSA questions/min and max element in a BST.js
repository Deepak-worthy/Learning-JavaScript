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
function findMin(root)
{
    if(root==null)
        return -1;
    if(root.left==null)
        return root.data;    
    else  
        return findMin(root.left);   
}
function findMax(root)
{
    if(root==null)
        return -1;
    if(root.right==null)
        return root.data;    
    else  
        return findMax(root.right);   
}
let root=null;

root=insert(root,15);
root=insert(root,10);
root=insert(root,90);
root=insert(root,25);
root=insert(root,8);
root=insert(root,1);

console.log("Min element: "+findMin(root));
console.log("Max element: "+findMax(root));