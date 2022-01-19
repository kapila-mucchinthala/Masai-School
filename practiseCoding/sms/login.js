const admins = [
    { 
        username: 'raj',
        password:'raj124'
    },
        { 
        username: 'akhil',
        password:'akhil456'
    },
            { 
        username: 'vishal',
        password:'abc095'
    },
]
if (localStorage.getItem('admins') == null) {
    localStorage.setItem('admins', JSON.stringify(admins));
}

function startLogin(e) {
    e.preventDefault();
    // const form = document.getElementById('login');
    // const username = form.username.value;
    // const password = form.password.value;

    // step1 get the data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // step2 check the data
    let admins = localStorage.getItem('admins');
    admins = JSON.parse(admins);
    // console.log(admins[2]);
    
    let flag = false;
    for (let i = 0; i < admins.length; i++){
        // console.log(admins[i].username);
        if (admins[i].username==username && admins[i].password==password) {
            alert("success");
            window.location.href = 'home.html';
            flag = true;
            break;
        }
    }
    if (flag == false) {
        alert("check username and password");
    }
 
}