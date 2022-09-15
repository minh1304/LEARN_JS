

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
function createCourse(data, callback){
    var option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)

    }
    fetch(coursesApi,option)
        .then(response=>{
            return response.json();
        })
        .then(callback)
} 
function handleDeleteCourse(id){
    var option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },

    }
    //như trên postman 
    fetch(coursesApi + '/' + id,option)
        .then(response=>{
            return response.json();
        })
        .then(function(){
            // Gọi lại API, tránh trường hợp này
            // getCourses(renderCourses)  
            var courseItem = document.querySelector('.course-item-' +id);
            if(courseItem){
                courseItem.remove();
            }

        })

}
    
    

function renderCourses(courses){
    var listCoursesBlock = 
        document.querySelector('#list-courses');
    var htmls = courses.map(course =>{
        return `
         <li class = "course-item-${course.id}">
            <h4>${course.name}</h4>
            <p> ${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Xóa;</button>
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
        var formData = {
            name: name,
            description: description,
        }
        createCourse(formData,function(){
            getCourses(renderCourses)
        })
    
    }


}