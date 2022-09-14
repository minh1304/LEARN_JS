var postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then(response=>{
        return response.json(); 
        //json.parse: json => js type
    })
    .then(post =>{
        console.log(post);
        
    })
