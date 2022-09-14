var courseApi = 'http://localhost:3000/courses';

fetch(courseApi)
    .then(response=>{
        return response.json();
    })
    .then(course=>{
        console.log(course);
    })