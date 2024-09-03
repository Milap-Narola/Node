const postData = async (user) => {
    let req = await fetch("http://localhost:8080/user/signup", {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user)
    })
    let res = await req.json()
    console.log(res);
    if (req.status === 201) {
        alert('Signup success');
        window.location.href = 'http://127.0.0.1:5500/view/login.html';
    }
    else if (req.status === 409) {
        alert(res.message);
    }


}


const handleData = (e) => {
    e.preventDefault();
    let data = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    postData(data)


}


document.getElementById("userData").addEventListener("submit", handleData)
