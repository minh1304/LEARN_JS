

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

//Chức năng xoa
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
//Chức năng cập nhật
function handleUpdateCourse(id){
    //lấy course item(li) bỏ vào ô điền
    var courseItem = document.querySelector('.course-item-'+id);
    var dataId = {
        name: courseItem.querySelector('h4').innerText,
        description: courseItem.querySelector('p').innerText
    } 
    document.querySelector('input[name="name"]').value=dataId.name ;
    document.querySelector('input[name="description"]').value =dataId.description;
   
    //Thiết lập Nút update
    btnUpdate = document.querySelector('#update')
    btnUpdate.style.visibility = 'visible';
    btnUpdate.onclick = function(){
        var Data = {
            id:id,
            name: document.querySelector('input[name="name"]').value,
            description: document.querySelector('input[name="description"]').value
        }
        updateCourse(Data);
    }
   
}

function updateCourse(data){
    var option = {
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json'
          }, 
        body: JSON.stringify(data) 
    };
    fetch (coursesApi+ '/' +data.id,option)
     .then(function(reponse){ 
        return reponse.json(); 
    })
    .then(function(){
        clear();
        document.querySelector('#update').style.visibility = 'hidden'
        start();
        
    });
}



//Hết chức năng cập nhật
    
    

function renderCourses(courses){
    var listCoursesBlock = 
        document.querySelector('#list-courses');
    var htmls = courses.map(course =>{
        return `
         <li class = "course-item-${course.id}">
            <h4>${course.name}</h4>
            <p> ${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Xóa;</button>
            <button onclick="handleUpdateCourse(${course.id})">Sửa;</button>


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
        clear();
        createCourse(formData,function(){
            getCourses(renderCourses)
        })
        updateCourse(formData,function(){
            getCourses(renderCourses)
        })
    }


}
function clear(){
    document.querySelector('input[name="name"]').value = null
    document.querySelector('input[name="description"]').value = null
}





//Chức năng update
















