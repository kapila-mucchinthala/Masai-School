function slideShow() {
    const arr = [
        'https://www.linkpicture.com/q/1_78.jpeg',
        'https://www.linkpicture.com/q/2_67.jpeg',
        "https://www.linkpicture.com/q/3_53.jpeg"
    ]

    let div = document.getElementById('slideshow');
    let image = document.createElement('img');
    image.style.width = '100%';
    image.style.height = '400px';
    image.src = arr[0];
    div.append(image);
    let i = 0;
    setInterval(function () {
        if (i == arr.length) {
            i = 0;
        }
        image.src = arr[i];
        i++;
    }, 2000);
}
slideShow();

const students = [
    {
        name: 'Kapila',
        attendance: '60',
        img:'https://www.linkpicture.com/q/3_53.jpeg'
    },
        {
        name: 'Kishore',
        attendance: '90',
        img:'https://www.linkpicture.com/q/1_78.jpeg'
    },
];

if (localStorage.getItem('students') == null) {
    localStorage.setItem('students', JSON.stringify(students));
}

function showStudents(d) {
    let students = d;

    let students_div = document.getElementById('students');
    students_div.innerHTML = null;

    students.forEach(function (el) {
        let div = document.createElement('div');
        let p_name = document.createElement('p');
        p_name.innerText = el.name;
        let p_attendance = document.createElement('p');
        p_attendance.innerText = el.attendance;
        let image = document.createElement('img');
        image.src = el.img;
        div.append(p_name, p_attendance, image);
        students_div.append(div);
        // console.log(p_name,p_attendance,image);
    })
}

showStudents(JSON.parse(localStorage.getItem('students')));

function sortLowToHigh() {
    let students = JSON.parse(localStorage.getItem('students'));
    students = students.sort(function (a, b) {
        return a.attendance - b.attendance;
    })
    console.log(students);
    showStudents(students);

}

function sortHighToLow() {
    let students = JSON.parse(localStorage.getItem('students'));
    students = students.sort(function (a, b) {
        return b.attendance - a.attendance;
    })
    console.log(students);
    showStudents(students);

}