const posts =[
        { title: 'Post One', body: 'This is post one'},
        { title: 'Post Two', body: 'This is post two'}
];
function getPosts() {
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

createPost({ title:'Post Three', body:'This is post three' })
    .then(getPosts)
    .catch(err => console.log(err));

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length>0) {
                resolve();
            } 
            else {
                reject('Error: Array is empty now');
            }
        }, 1000);
    });
}
setTimeout(() => {
    arrayEmpty=false;
    while(!arrayEmpty){
        deletePost()
        .then(()=>{
            posts.pop();
            let lastPost=document.querySelector('body').lastChild;
            lastPost.parentNode.removeChild(lastPost);
        })
        .catch(err =>{
            console.log(err);
            arrayEmpty=true;
        });
    }
},3000);

// Promise.all
const promise1 = Promise. resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise( (resolve, reject) =>
setTimeout(resolve, 2000, 'Goodbye')
);
Promise.all( [promisel, promise2, promise3]).then(values
=> console.log(values));
