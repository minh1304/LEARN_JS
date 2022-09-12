var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var a = document.querySelector('.courses-list');
    arrlength = courses.length;
    for (var index in courses)
    {
        a.innerHTML += `<li>${courses[index]}</li>` ;
    }
    
}

render(courses)