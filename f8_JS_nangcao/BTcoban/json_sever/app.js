

// fetch(courseApi)
//     .then(response=>{
//         return response.json();
//     })
//     .then(course=>{
//         console.log(course);
//     })




var coursesApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);
    handleCreateForm();
    

}
start();


//function

function getCourses(callback){
    fetch(coursesApi)
        .then(response=>{
            return response.json();
        })
        .then(callback)
} 
function createCourse(date){
    
}



function renderCourses(courses){
    var listCoursesBlock = 
        document.querySelector('#list-courses');
    var htmls = courses.map(course =>{
        return `
         <li>
            <h4>${course.name}</h4>
            <p> ${course.description}</p>
         </li>
        
        `;
        
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm(){
    var createBtn = document.querySelector('#create');
    createBtn.onclick = () =>{
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
    }


}