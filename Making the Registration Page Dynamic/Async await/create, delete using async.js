const posts =[
        { title: 'Post One', body: 'This is post one'},
        { title: 'Post Two', body: 'This is post two'}
];

const Operations_on_posts = async () => {
    
    function getPosts(){
        setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
                output += `<li>${post.title}: ${post.body}</li>`;
            });
            document.body.innerHTML = output;
        }, 1000);
    }
    function createPost(post) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                posts.push(post);
                const error = false;
                if (!error) {
                    resolve();
                } 
                else {
                    reject('Error: Something went wrong');
                }
            }, 1000);
        });
    }

    function deletePost() {
        return new Promise((resolve, reject) => {     
            setTimeout(() => {
                resolve('delete');
            }, 1000);
            if(posts.length==0){
                reject('Error: Array is empty now');
            }  
        });
    }

    try{
        await createPost({ title:'Post Three', body:'This is post three' });
    } catch(e){
        console.log(e);
    }

    try{
        await getPosts();
    } catch(e){
        console.log(e);
    }
    let del
    try{
        del=await deletePost();
        posts.pop();
        let lastPost=document.querySelector('body').lastChild;
        lastPost.parentElement.removeChild(lastPost);
    }catch(e){
        console.log(e);
    }
    return del;
}

Operations_on_posts().then((e)=>console.log("Operations executed"));
