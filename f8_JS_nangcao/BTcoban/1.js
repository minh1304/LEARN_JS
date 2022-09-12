var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var a = document.querySelector('.courses-list');
    arrlength = courses.length;
    for (var index in courses)
    {
        a.innerHTML += `<li>${courses[index]}</li>` ;
    }
    Object.assign(a.style, {
        width: '200px', 
        height: '200px', 
        background: 'red'
    })
    
}

render(courses)